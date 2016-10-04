<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/styles.css">
<title>Student Survey Information Page</title>
</head>
<!-- Student Exist Page with all details of selected student -->
<body style="background-color: silver;">

	<div id="body_wrapper_new" style="text-align: left; height: 100%">
		<h3>
			Information of Student:<span style="color: blue;">${ studentBean.studentName }</span>
			&nbsp;with Student ID:<span style="color: blue;"> ${ studentBean.studentId }</span>
		</h3>

		<hr />

		<table id="studentSurveyTable" border="2px;">
			<tbody>
				<tr>
					<td><label>Student ID</label></td>
					<td><label>${ studentBean.studentId }</label></td>
				</tr>

				<tr>
					<td><label>Student Name</label></td>
					<td><label>${ studentBean.studentName }</label></td>
				</tr>
                 <tr>
					<td><label>Username</label></td>
					<td><label>${ studentBean.userName }</label></td>
				</tr>
				<tr>
					<td><label>Street Address</label></td>
					<td><label>${ studentBean.streetAddress }</label></td>
				</tr>

				<tr>
					<td><label>Zip Code</label></td>
					<td><label>${ studentBean.zipCode }</label></td>
				</tr>

				<tr>
					<td><label>City</label></td>
					<td><label>${ studentBean.city }</label></td>
				</tr>

				<tr>
					<td><label>State</label></td>
					<td><label>${ studentBean.state}</label></td>
				</tr>

				<tr>
					<td><label>Telephone Number</label></td>
					<td><label>${ studentBean.telephoneNumber }</label></td>
				</tr>

				<tr>
					<td><label>Email Address</label></td>
					<td><label>${ studentBean.emailAddress }</label></td>
				</tr>

				<tr>
					<td><label>Graduation Month</label></td>
					<td><label>${ studentBean.gradMonth }</label></td>
				</tr>

				<tr>
					<td><label>Graduation Year</label></td>
					<td><label>${ studentBean.gradYear }</label></td>
				</tr>

				<tr>
					<td><label>URL</label></td>
					<td><label>${ studentBean.url }</label></td>
				</tr>

				<tr>
					<td><label>Date of Survey</label></td>
					<td><label>${ studentBean.dateOfSurvey }</label></td>
				</tr>

				<tr>
					<td><label>Will you recommend GMU to others?</label></td>
					<td><label>${ studentBean.recommendation }</label></td>
				</tr>

				<tr>
					<td><label>Please check the things that you like about
							the campus</label></td>
					<td><label>${ studentBean.likings }</label></td>
				</tr>

				<tr>
					<td><label>How did you become interested in George
							Mason University?</label></td>
					<td><label>${ studentBean.interest }</label></td>
				</tr>
			</tbody>
		</table>
	</div>
</body>
</html>