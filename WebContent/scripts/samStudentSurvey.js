/**
 * 
 */
$(function () {
	$(document).tooltip();
});
function nameSaveCookie(changeName) {
	if(changeName) {
		document.cookie = null;
	}
	document.getElementById("welcomeMessage").style.display = "none";
	document.getElementById("greetings").style.display = "none";
	var currentDate = new Date();
	var currentHour = currentDate.getHours();
	var loginName = "";
	var greetMessage = "";

	if (currentHour < 12) {
		greetMessage = "Good Morning ";
	} else {
		currentHour = currentHour - 12;

		if (currentHour < 6) {
			greetMessage = "Good Afternoon ";
		} else {
			greetMessage = "Good Evening ";
		}
	}

	if (document.cookie) {
	    var cookieNames = unescape(document.cookie);
	    var cookieValues = cookieNames.split("=");
	    loginName = cookieValues[1];
	}
	if ((document.cookie && (loginName == "null" || !loginName))
			|| !document.cookie) {
		loginName = window.prompt("Please enter your name","Abin Sam");
		document.cookie = "name=" + escape(loginName);
	}

	if (loginName) {
		greetMessage =greetMessage+ loginName + ", Welcome to Assignmet No:3.<br><br>";
		greetMessage =greetMessage+ "Click <a href='javascript: changeName()'>here</a> if you are not "+ loginName;

		document.getElementById("greetings").innerHTML = greetMessage;
		document.getElementById("greetings").style.display = "block";
	} else {
		document.getElementById("welcomeMessage").style.display = "block";
		document.getElementById("greetings").style.display = "none";
	}
}

function changeName() {
	//document.cookie = "name = ; expires=Thu, 01-Jan-95 00:00:01 GMT";
	document.cookie="name=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
	nameSaveCookie(true);
}


function calculateData() {
	var data = document.getElementById("dataField").value;
	var element = document.getElementById("dataError");
	element.innerHTML = "";
	var dataArray = data.split(",");
	var arrayLength = dataArray.length;

	if (arrayLength >= 10) {
		var sum = 0;
		var maximum = 0;
		var average = 0;
		for (var i = 0; i < arrayLength; i++) {
			var number = parseInt(dataArray[i]);
			if (isNaN(number)){
				element.innerHTML = "Please enter valid number.";
				element.style.display = 'block';
				document.getElementById("avgData").value = "";
				document.getElementById("maxData").value = "";
				document.getElementById("dataField").style.border = "2px solid red";
				return;
			}
			if (number < 1 || number > 100) {
				element.innerHTML = "Please enter numbers between 1 & 100 only.";
				element.style.display = 'block';
				document.getElementById("avgData").value = "";
				document.getElementById("maxData").value = "";
				document.getElementById("dataField").style.border = "2px solid red";
				return;
			}
			sum = sum + number;
			maximum = Math.max(number, maximum);

		}//end of for loop
		
		average = sum / arrayLength;
		average=Math.round(average * 100) / 100
		document.getElementById("avgData").value = average;
		document.getElementById("maxData").value = maximum;
		document.getElementById("dataField").style.border = "";
		element.style.display = 'none';
	} else {
		document.getElementById("avgData").value = "";
		document.getElementById("maxData").value = "";
		element.innerHTML = "Please enter at least 10 numbers.";
		document.getElementById("dataField").style.border = "2px solid red";
		element.style.display = 'block';
	}
}

function submitFunction() {
	var userNameNotValid = userNameValidate();
	var addressNotValid = addressValidate();
	var checkBoxesNotChecked = checkBoxesValidate();
	var radioNotSelected =radioButtonValidate();

	if (userNameNotValid && addressNotValid && checkBoxesNotChecked	&& radioNotSelected) {
		document.getElementById("studentSurveyForm").submit();
	} else {
		document.getElementById("errorMessage").style.display = 'block';
	}
	window.scrollTo(0, 0);
	return false;
}

function userNameValidate() {
	var alphabetPattern = /^[a-zA-Z]+$/;
	var userName = document.getElementById("userName").value;
	var validResult = false;

	if (!userName.match(alphabetPattern)) {
		document.getElementById("userNameErrorDiv").innerHTML = "Please enter only alphabets for username.";
		document.getElementById("userName").style.border = "2px solid red";
		document.getElementById("userName").value = "";
		validResult = false;
	} else {
		document.getElementById("userNameErrorDiv").innerHTML = "";
		document.getElementById("userName").style.border = "";
		validResult=true;
	}
   return validResult;
}
function addressValidate() {
	var alphaNumericPatternForAddress = /^[0-9a-zA-Z ]+$/;
	var addressField = document.getElementById("streetAddress").value;
	if(addressField!="" && addressField !=null){
	if (!addressField.match(alphaNumericPatternForAddress)) {
		document.getElementById("streetAddrErrorDiv").innerHTML = "Please enter only alphanumeric characters for street address";
		document.getElementById("streetAddress").style.border = "2px solid red";
		document.getElementById("streetAddress").value = "";

		return false;
	} else {
		document.getElementById("streetAddrErrorDiv").innerHTML = "";
		document.getElementById("streetAddress").style.border = "";
		return true;
	}
	}
	else
		return true;
}


function checkBoxesValidate() {
	var checkedValuesCount=0;
	var inputElements = document.getElementsByClassName('likeMostCheckboxClass');
	for(var i=0; inputElements[i]; ++i){
	      if(inputElements[i].checked)
	    	  checkedValuesCount ++;
	}
	if (checkedValuesCount < 2) {
		document.getElementById("likeMostCheckboxError").innerHTML = "Please select at least 2 checkboxes.";
		document.getElementById("likeMostCheckBox").style.border = "2px solid red"
		return false;
	} else {
		document.getElementById("likeMostCheckboxError").innerHTML = "";
		document.getElementById("likeMostCheckBox").style.border = ""
		return true;
	}
}


function radioButtonValidate() {
	var radios = document.getElementsByName("interest");
	var radioValue=0;
	for(var i=0; i<radios.length; ++i){
	      if(radios[i].checked)
	    	  radioValue ++;
	}
	if (radioValue < 1) {
		document.getElementById("radioErrorDiv").innerHTML = "Please select radio button option";
		document.getElementById("interestRadio").style.border = "2px solid red"
		return false;
	} else {
		document.getElementById("radioErrorDiv").innerHTML = "";
		document.getElementById("interestRadio").style.border = ""
		return true;
	}

}






//AJAX Call
function populateCityAndState() {
	var zipCode = document.getElementById("zip").value;
	document.getElementById("zipCodeErrorDiv").style.color = "blue";
	document.getElementById("zipCodeErrorDiv").innerHTML = "Zip Code Json search on progress....";
	document.getElementById("zipCodeErrorDiv").style.display = "block";
	document.getElementById("zip").style.border = "";
	if (zipCode.toString().length == 5) {
		try {
			var xmlHttpReq = new XMLHttpRequest();
			xmlHttpReq.onreadystatechange = function() {
				if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
					var jsonZipCodes = JSON.parse(xmlHttpReq.responseText);
					for (var zipNumber = 0; zipNumber < 4; zipNumber++) {
						var zipCodeValue = jsonZipCodes.zipcodes[zipNumber];
							
						if (zipCode == zipCodeValue.zip) {
							document.getElementById("city").innerHTML = zipCodeValue.city;
							document.getElementById("state").innerHTML = zipCodeValue.state;
							document.getElementById("zipCodeErrorDiv").innerHTML ="";
							return true;
						} else {
							document.getElementById("city").innerHTML = "";
							document.getElementById("state").innerHTML = "";
						}
					}
					
					document.getElementById("zip").style.border = "2px solid red";
					document.getElementById("zipCodeErrorDiv").style.color = "red";
					document.getElementById("zipCodeErrorDiv").innerHTML = "Please enter a valid zip code.";
					document.getElementById("zipCodeErrorDiv").style.display = "block";
				}
			}

			xmlHttpReq.open("GET", "json/zipCodes.json", true);
			xmlHttpReq.send();
		} catch (exception) {
			return false;
		}
	} 
	else if(zipCode.toString().length == 0) {
		document.getElementById("zipCodeErrorDiv").style.display = "none";
	}
	else if(zipCode.toString().length >5) {
		document.getElementById("zip").style.border = "2px solid red";
		document.getElementById("zipCodeErrorDiv").style.color = "red";
		document.getElementById("zipCodeErrorDiv").innerHTML = "Please enter a valid zip code.";
		document.getElementById("zipCodeErrorDiv").style.display = "block";

	}
}

function resetPage() {
	document.getElementById("errorMessage").style.display = 'none';	
	document.getElementById("userNameErrorDiv").innerHTML = "";
	document.getElementById("userName").innerHTML = "";
	document.getElementById("userName").style.border ="";
	
	document.getElementById("streetAddrErrorDiv").innerHTML = "";
	document.getElementById("streetAddress").innerHTML = "";
	document.getElementById("streetAddress").style.border ="";
	
	document.getElementById("likeMostCheckboxError").innerHTML = "";
	document.getElementById("likeMostCheckBox").style.border ="";
	
	document.getElementById("radioErrorDiv").innerHTML = "";
	document.getElementById("interestRadio").style.border = "" ;
}