<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!-- Student Survey JSP page -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Student Survey</title>
 <link rel="stylesheet" href="css/jquery-ui.css">
 <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui.css">
 <link rel="stylesheet" type="text/css" href="css/main.css">
<script type="text/javascript" src="scripts/jquery/jquery.js"></script>
<script type="text/javascript" src="scripts/jquery/jquery-ui.js"></script>
<script type="text/javascript" src="scripts/studentSurvey.js" ></script>
<script type="text/javascript">
			$(document).ready(function() {
				nameSaveCookie(true);
			});
		</script> 

</head>
<body>
<div id="studentSurvey"  class="sub_body" onload="return nameSaveCookie()">
  	 <h1>DEPARTMENT OF COMPUTER SCIENCE</h1>
		<div id="greetings" class="greetingMessage" hidden="true"></div>
		<div id="welcomeMessage" class="welcomeMessage" >Please enter your name or click OK. Click <a href="javascript: changeName();" style="color: #00000;">here</a> to enter new name.</div>
 
<h2>Survey Form</h2>
<form id="surveyForm" name="surveyForm" method ="post" action="saveStudentInfo"  autocomplete="on" >
 <table>
 <tbody>
    <tr>
        <td><label>Student Id</label></td>
        <td><label>Username</label></td>
        <td><label>Student Name</label></td>
         
     </tr>
    <tr>
      <td> <input type="text" name="studentBean.studentId" id="studentId" maxlength="40" 
          required="required"></td>
       <td> <input type="text" name="studentBean.userName" id="userName" maxlength="40" 
          required="required"    placeholder="eg.abinsam" autofocus="autofocus"></td>
          <td> <input type="text" name="studentBean.studentName" id="studentName" maxlength="40" 
          required="required"    placeholder="eg.abin"></td>
        
   
    </tr>
    <tr>
		<td><label>Street Address</label></td>
		 <td><label>ZipCode</label></td>
    	<td><label>City</label></td>
	
		
	</tr>
	<tr>
	   <td><input type="text" name="studentBean.streetAddress" id="streetAddress"></td>
	   	<td><input type="text" name="studentBean.zipCode" id="zip" placeholder="#####"  required="required" ></td>
        <td><input type="text" name="studentBean.city" id="city"  readonly="readonly"></td>
	
	</tr>
	<tr>
	<td></td>
	  <td><div id="zipCodeErrorDiv" hidden="true"></div></td>
	  <td></td>
	</tr>
	
	
	
    <tr>
       	<td><label>State</label></td>
       	 <td><label>Telephone Number</label></td>
		<td><label>Email Address</label></td>
	
	</tr>   
    <tr>
    	<td><input type="text" name="studentBean.state" id="state"  readonly="readonly" ></td>
    	<td><input type="text" name="studentBean.telephoneNumber"  id="telephoneNo" maxlength="10" placeholder="##########" ></td>
		<td ><input type="email" name="studentBean.emailAddress" id="emailId"   placeholder="name@domain.com"></td>
  
       
	
   </tr>
  

   <tr>
		<td><label>URL</label></td>
		<td><label>Date of Survey</label></td>
		 <td><label>What you like most about the campus :</label></td>
	</tr> 
   <tr>
        <td ><input type="url" name="studentBean.url" id="url"  placeholder="http://www.domain.com" ></td>
		<td><input type="date" name="studentBean.dateOfSurvey" id="dateOfSurvey" placeholder="mm/dd/yyyy" ></td>
        <td>
		<div id="likeMostCheckBox">
		 <input type="checkbox" class="likeMostCheckboxClass" value="students" name="studentBean.likings" >Students
		 <input type="checkbox" class="likeMostCheckboxClass" value="location" name="studentBean.likings" >Location
		 <input type="checkbox" class="likeMostCheckboxClass" value="campus" name="studentBean.likings" >Campus
		 <input type="checkbox" class="likeMostCheckboxClass" value="atmoshpere" name="studentBean.likings" >Atmosphere
		 <input type="checkbox" class="likeMostCheckboxClass" value="dormRooms" name="studentBean.likings">Dorm Rooms
		 <input type="checkbox" class="likeMostCheckboxClass" value="sports" name="studentBean.likings" >Sports
		 </div>
		</td>
    
    </tr>
    </table>
    <table border="2px;">
      <tr>
		<td><label>How did you become interested in the University?</label></td>
		<td> <label>Additional Comments</label></td>
		<td><label>How much would you recommend this school to other prospective students?</label></td>
		
	</tr>
	 <tr  rowspan="3">
		<td>
		<div id="interestRadio">
		<input type="radio" class="interestRadioClass" id="interest" value="friends" name="studentBean.interest" >Friends
		<input type="radio" class="interestRadioClass" id="interest" value="television" name="studentBean.interest" >Television
		<input type="radio" class="interestRadioClass" id="interest" value="internet" name="studentBean.interest" >Internet
	    <input type="radio" class="interestRadioClass" id="interest" value="other" name="studentBean.interest" >Other
		</div>
	    </td>
	    <td><textarea rows="5" cols="50" id="additionalComment" name="studentBean.additionalComment" placeholder="Enter your comments here "></textarea>
	      </td>
	      <td colspan="5">
	     <select name="studentBean.recommendation">
		<option selected="selected" value="">Select one</option>
		<option value="Very Likely">Very likely</option>
		<option value="Likely">Likely</option>
		<option value="Unlikely">Unlikely</option>
		</select>
	</td>
	</tr>
	
	</table>
	<table>
    <tr>
	  <td><label>Graduation Month</label></td>
	  <td><label>Graduation Year</label></td>
	  <td>	<label>Data Field</label></td>
	</tr>
	<tr>
	 <td><input type="text" id="graduationMonth" name="studentBean.gradMonth" placeholder="Select a month" list="months" />
	    <datalist id="months">
			<option value="January"><option value="February">
			<option value="March"><option value="April">
			<option value="May"><option value="June">
			<option value="July"><option value="August">
			<option value="September"><option value="October">
			<option value="November"><option value="December">
			</datalist>
	</td>
	<td>
		<input type="text" id="graduationYear" name="studentBean.gradYear" placeholder="yyyy" maxlength="4" />
	</td>
	<td><input type="text" id="dataField" name="dataBean.dataField" style="width: 200%"/></td>
	</tr>

     
						<tr>
							
							<td colspan="2">
								<div id="dataError" hidden="true" style="color: red"></div>
							</td>
						</tr>
	
	
	<div id="studentIdErrorDialog" hidden="true"><p>Student Id is mandatory alphanumeric field</p></div>
	<div id="studentNameErrorDialog" hidden="true"><p>Student Name is mandatory alphabets only field.</p></div>
	<div id="userNameErrorDialog" hidden="true"><p>Username is mandatory alphanumeric field</p></div>
	<div id="cityStateErrorDialog" hidden="true"><p>The city and state field is required .Please enter valid zip code for city and state to display.</p></div>
	
	
	<div id="telephoneNoErrorDialog" hidden="true"><p>The telephone No is mandatory 10 digit field.</p></div>
	<div id="emailErrorDialog" hidden="true"><p>Valid email Id is mandatory</p></div>
	<div id="urlErrorDialog" hidden="true"><p>Valid URL is mandatory</p></div>
	<div id="checkBoxErrorDialog" hidden="true"><p>Please select at least 2 checkbox values.</p></div>
    <div id="radioButtonErrorDialog" hidden="true"><p>Please select radio button option</p></div>	
	
	 <div id="dataValidNumberErrorDialog" hidden="true"><p>Please enter valid number</p></div>
	  <div id="dataRangeErrorDialog" hidden="true"><p>Please enter numbers between 1 & 100 only</p></div>
	   <div id="dataCountErrorDialog" hidden="true"><p>Please enter at least 10 numbers</p></div>
	
	
    <tr>
	<td colspan="5">
		<input type="button" id="submitBtn" name="submitBtn" value="SUBMIT" onclick='validateForm()'>
		<input type="reset" id="resetBtn" name="resetBtn" value="RESET" onclick="resetPage()">
	</td>
	</tr>
 </tbody>
 
 </table>
  </form>
    <div id="bottom1" style="top: 555px; right: 90px; position: fixed;">
		<a href="http://www.gmu.edu/" target="_blank" >
					<img src="./images/GMURGB.png" alt="GMU logo" style="height: 100px; width: 100px; float: right;" 
					title="Please visit :http://www.gmu.edu for more information.">
				</a>
			</div>
		</div>
</body>
</html>