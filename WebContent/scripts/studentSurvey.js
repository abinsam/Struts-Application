/**
 * Student survey js 
 */
$(function () {
	$(document).tooltip();
	
});

function validateForm() {
		if(studentIdValidate()){
			if(userNameValidate()){
				if(studentNameValidate()){
					if(cityStateValidate()){
						if(telephoneValidate()){
							if(emailValidate()){
									if(checkBoxesValidate()){
										if(radioButtonValidate()){
										 if(dataNumberValidate())
											document.getElementById("surveyForm").submit();
										}
								}
							}
						}
					}
				}
			}
		}
		else{
			document.getElementById("errorMessage").style.display = 'block';
			return false;	
		}
		/*if (studentIdNotValid && userNameNotValid && studentNameNotValid &&
			 cityStateValidation && telephoneValid && emailValid && urlValid &&
			 checkBoxesNotChecked	&& radioNotSelected) {
			document.getElementById("surveyForm").submit();
		}
		else{
			document.getElementById("errorMessage").style.display = 'block';
			return false;
		}*/
			
}
//Cookie set on page load
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
//change name in cookie
function changeName() {
	//document.cookie = "name = ; expires=Thu, 01-Jan-95 00:00:01 GMT";
	document.cookie="name=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
	nameSaveCookie(true);
}

//validate the data field entries
function dataNumberValidate() {
	var data = document.getElementById("dataField").value;
	var dataArray = data.split(",");
	var arrayLength = dataArray.length;

	if (arrayLength >= 10) {
		for (var i = 0; i < arrayLength; i++) {
			//var number = parseInt(dataArray[i]);
			var number = dataArray[i];
			if (isNaN(number)){
				$( "#dataValidNumberErrorDialog" ).dialog();
				document.getElementById("dataField").style.border = "2px solid red";
				return false;
			}
			else{
				number=parseInt(dataArray[i]);
			}
			if (number < 1 || number > 100) {
				$( "#dataRangeErrorDialog" ).dialog();
				document.getElementById("dataField").style.border = "2px solid red";
				return false;
			}
	    }//end of for loop
		document.getElementById("dataField").style.border = "";
		return true;
	} else {
		$( "#dataCountErrorDialog" ).dialog();
		document.getElementById("dataField").style.border = "2px solid red";
        return false;	
       }
}




//Calculate data
function calculateData() {
	var data = document.getElementById("dataField").value;
	var element = document.getElementById("dataError");
	element.innerHTML = "";
	var dataArray = data.split(",");
	var arrayLength = dataArray.length;

	if (arrayLength >= 10) {
		//var sum = 0;
		//var maximum = 0;
		//var average = 0;
		for (var i = 0; i < arrayLength; i++) {
			var number = parseInt(dataArray[i]);
			if (isNaN(number)){
				element.innerHTML = "Please enter valid number.";
				element.style.display = 'block';
				//document.getElementById("avgData").value = "";
				//document.getElementById("maxData").value = "";
				document.getElementById("dataField").style.border = "2px solid red";
				return;
			}
			if (number < 1 || number > 100) {
				element.innerHTML = "Please enter numbers between 1 & 100 only.";
				element.style.display = 'block';
				//document.getElementById("avgData").value = "";
				//document.getElementById("maxData").value = "";
				document.getElementById("dataField").style.border = "2px solid red";
				return;
			}
			//sum = sum + number;
			//maximum = Math.max(number, maximum);

		}//end of for loop
		
		/*average = sum / arrayLength;
		average=Math.round(average * 100) / 100
		document.getElementById("avgData").value = average;
		document.getElementById("maxData").value = maximum;*/
		document.getElementById("dataField").style.border = "";
		element.style.display = 'none';
	} else {
		/*document.getElementById("avgData").value = "";
		document.getElementById("maxData").value = "";*/
		element.innerHTML = "Please enter at least 10 numbers.";
		document.getElementById("dataField").style.border = "2px solid red";
		element.style.display = 'block';
	}
}
//Submit button click function
function submitFunction() {
	var userNameNotValid = userNameValidate();
	var studentNameNotValid = studentNameValidate();
	
	var addressNotValid = addressValidate();
	var checkBoxesNotChecked = checkBoxesValidate();
	var radioNotSelected =radioButtonValidate();

	if (userNameNotValid && studentNameNotValid && addressNotValid && checkBoxesNotChecked	&& radioNotSelected) {
		document.getElementById("studentSurveyForm").submit();
	} else {
		document.getElementById("errorMessage").style.display = 'block';
	}
	window.scrollTo(0, 0);
	return false;
}
//--------------------validate user name------------------------------------------//
function userNameValidate() {
	var alphabetPattern = /^[0-9a-zA-Z ]+$/;
	var userName = document.getElementById("userName").value;
	var validResult = false;
	if(userName!="" && userName !=null){
	if (!userName.match(alphabetPattern)) {
		$( "#userNameErrorDialog" ).dialog();
		document.getElementById("userName").style.border = "2px solid red";
		document.getElementById("userName").value = "";
		validResult = false;
	} else {
		document.getElementById("userName").style.border = "";
		validResult=true;
	}
	}
	else{
		$( "#userNameErrorDialog" ).dialog();
		document.getElementById("userName").style.border = "2px solid red";
		document.getElementById("userName").value = "";
		validResult = false;
		
	}
   return validResult;
}
//--------------------validate student name-----------------------------------------//
function studentNameValidate() {
	var alphabetPattern = /^[a-zA-Z]+$/;
	var studentName = document.getElementById("studentName").value;
	var validResult = false;
	if(studentName!="" && studentName !=null){
	if (!studentName.match(alphabetPattern)) {
		$( "#studentNameErrorDialog" ).dialog();
		//document.getElementById("userNameErrorDiv").innerHTML = "Please enter only alphabets for username.";
		document.getElementById("studentName").style.border = "2px solid red";
		document.getElementById("studentName").value = "";
		validResult = false;
	} else {
	//	document.getElementById("userNameErrorDiv").innerHTML = "";
		document.getElementById("studentName").style.border = "";
		validResult=true;
	}
	}
	else{
		$( "#studentNameErrorDialog" ).dialog();
		document.getElementById("studentName").style.border = "2px solid red";
		document.getElementById("studentName").value = "";
		validResult = false;
	}
   return validResult;
}
//--------------------validate student Id------------------------------------------//
function studentIdValidate() {
	var alphaNumericPatternForStudentId = /^[0-9a-zA-Z ]+$/;
	var studentIdField = document.getElementById("studentId").value;
	if(studentIdField!="" && studentIdField !=null){
	if (!studentIdField.match(alphaNumericPatternForStudentId)) {
		$( "#studentIdErrorDialog" ).dialog();
		//document.getElementById("streetAddrErrorDiv").innerHTML = "Please enter only alphanumeric characters for street address";
		document.getElementById("studentId").style.border = "2px solid red";
		document.getElementById("studentId").value = "";
		return false;
	} else {
		//document.getElementById("streetAddrErrorDiv").innerHTML = "";
		document.getElementById("studentId").style.border = "";
		return true;
	}
	}
	else{
		$( "#studentIdErrorDialog" ).dialog();
		document.getElementById("studentId").style.border = "2px solid red";
		document.getElementById("studentId").value = "";
		return false;
	}
		
}


//--------------------validate city,state and zip code------------------------------------------//
function cityStateValidate(){
	var cityField = document.getElementById("city").value;
	var stateField = document.getElementById("state").value;
	if(cityField==null || cityField=="" || stateField==null || stateField=="" ){
		$( "#cityStateErrorDialog" ).dialog();
		return false;
	}
	else return true;
		
	
}
//--------------------8------------------------------------------//
function telephoneValidate(){
	var telephonePattern = /[2-9]{2}\d{8}/;
	var telephoneField = document.getElementById("telephoneNo").value;
	if(telephoneField!="" && telephoneField !=null){
		if (!telephoneField.match(telephonePattern)) {
			$( "#telephoneNoErrorDialog" ).dialog();
			document.getElementById("telephoneNo").style.border = "2px solid red";
			document.getElementById("telephoneNo").value = "";
			return false;
		}
		else{
			document.getElementById("telephoneNo").style.border = "";
			return true;	
		}
	}
	else{
		$( "#telephoneNoErrorDialog" ).dialog();
		document.getElementById("telephoneNo").style.border = "2px solid red";
		document.getElementById("telephoneNo").value = "";
		return false;

	}
		
}
//--------------------validate email-----------------------------------------//
function emailValidate(){
	var emailPattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var emailField = document.getElementById("emailId").value;
	if(emailField!="" && emailField !=null){
		if (!emailField.match(emailPattern)) {
			$( "#emailErrorDialog" ).dialog();
			document.getElementById("emailId").style.border = "2px solid red";
			document.getElementById("emailId").value = "";
			return false;	
		}
		else{
			document.getElementById("emailId").style.border = "";
			return true;	
			
		}
	}
	else{
		$( "#emailErrorDialog" ).dialog();
		document.getElementById("emailId").style.border = "2px solid red";
		document.getElementById("emailId").value = "";
		return false;	

	}
}
//--------------------validate URL------------------------------------------//
function urlValidate(){
	var urlPattern=/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
	var urlField = document.getElementById("url").value;
	if(urlField!="" && urlField !=null){
		if (!urlField.match(urlPattern)) {
			$( "#urlErrorDialog" ).dialog();
			document.getElementById("url").style.border = "2px solid red";
			document.getElementById("url").value = "";
			return false;	
		}
		else{
			document.getElementById("url").style.border = "";
			return true;	
			
		}
	}
	else{
		$( "#urlErrorDialog" ).dialog();
		document.getElementById("url").style.border = "2px solid red";
		document.getElementById("url").value = "";
		return false;	

	}
}



//Validate check box entry count

function checkBoxesValidate() {
	var checkedValuesCount=0;
	var inputElements = document.getElementsByClassName('likeMostCheckboxClass');
	for(var i=0; inputElements[i]; ++i){
	      if(inputElements[i].checked)
	    	  checkedValuesCount ++;
	}
	if (checkedValuesCount < 2) {
		//document.getElementById("likeMostCheckboxError").innerHTML = "Please select at least 2 checkboxes.";
		$( "#checkBoxErrorDialog" ).dialog();
		document.getElementById("likeMostCheckBox").style.border = "2px solid red"
		return false;
	} else {
		document.getElementById("likeMostCheckBox").style.border = ""
		return true;
	}
}

//validate radio button option
function radioButtonValidate() {
	var radios = document.getElementsByName("studentBean.interest");
	var radioValue=0;
	for(var i=0; i<radios.length; ++i){
	      if(radios[i].checked)
	    	  radioValue ++;
	}
	if (radioValue < 1) {
		//document.getElementById("radioErrorDiv").innerHTML = "Please select radio button option";
		$( "#radioButtonErrorDialog" ).dialog();
		document.getElementById("interestRadio").style.border = "2px solid red"
		return false;
	} else {
		document.getElementById("interestRadio").style.border = ""
		return true;
	}

}


//fetch state and city from zip code entry
$(document).ready(function() {
    $("#zip").keyup(function() {
        var el = $(this);
        var result;
        var zipCodeValue;
        if (el.val().length === 5) {
            $.ajax({
                url: "json/zipCodes.json",
                cache: false,
                dataType: "json",
                type: "GET",
                data: el.val(),
                success: function(result, success) {
                	var counter=4;
                	for (var zipNumber = 0; zipNumber < 4; zipNumber++) {
						zipCodeValue = zip.value;
						if (result.zipcodes[zipNumber].zip == zipCodeValue){
							document.getElementById("zipCodeErrorDiv").innerHTML ="";
							 document.getElementById("zip").style.border = "none";
							   $("#city").val(result.zipcodes[zipNumber].city);
			                    $("#state").val(result.zipcodes[zipNumber].state);
			                    counter--;
			             
						}
				 }
                	if(counter==4){
                		 $("#city").val("");
		                 $("#state").val("");
		                document.getElementById("zip").style.border = "2px solid red";
    					document.getElementById("zipCodeErrorDiv").style.color = "red";
    					document.getElementById("zipCodeErrorDiv").innerHTML = "Please enter a valid zip code.";
    					document.getElementById("zipCodeErrorDiv").style.display = "block";
    	
                	}
                }
            });
        }
        else{
			   $("#city").val("");
               $("#state").val("");
               if (el.val().length > 5){
            	    document.getElementById("zip").style.border = "2px solid red";
					document.getElementById("zipCodeErrorDiv").style.color = "red";
					document.getElementById("zipCodeErrorDiv").innerHTML = "Please enter a valid zip code.";
					document.getElementById("zipCodeErrorDiv").style.display = "block";
		  }
      
        }
    });
});


function resetPage() {
/*	document.getElementById("errorMessage").style.display = 'none';	
	//document.getElementById("userNameErrorDiv").innerHTML = "";
	document.getElementById("userName").innerHTML = "";
	document.getElementById("userName").style.border ="";
	
	document.getElementById("streetAddrErrorDiv").innerHTML = "";
	document.getElementById("streetAddress").innerHTML = "";
	document.getElementById("streetAddress").style.border ="";
	
	document.getElementById("likeMostCheckboxError").innerHTML = "";
	document.getElementById("likeMostCheckBox").style.border ="";
	
	document.getElementById("radioErrorDiv").innerHTML = "";
	document.getElementById("interestRadio").style.border = "" ;*/
}