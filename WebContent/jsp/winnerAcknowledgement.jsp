<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!-- Winner acknowledgement jsp page with congragulation message -->
<html>
	<body style="background-color: silver;">
	
		<div>
			<h2 align="center" style="color: blue; font-size: 200%"><strong>CONGRATULATIONS!!</strong> You are the winner of two movie tickets.</h2>
			<h3>Your survey details are successfully saved into the database.</h3>

		<table style="font-size: 100%">
			<tbody>
			   <tr>
					<td>Student Id:</td>
					<td><s:property value="studentBean.studentId" /></td>
				</tr>
				<tr>
					<td>Numbers:</td>
					<td><s:property value="dataBean.dataField" /></td>
			   </tr>

				<tr>
					<td>Mean Value:</td>
					<td><s:property value="dataBean.meanValue" /></td>
			   </tr>

				<tr>
					<td>Standard Deviation Value:</td>
					<td><s:property value="dataBean.standardDeviationValue" /></td>
				</tr>
</table>
<table border="">
				<th>List of Students:</th>
				<tbody>
				<tr>
					<td colspan="2"><s:iterator value="studentBean.studentIdList">
					<ul>
						<s:url action='retrieveStudentDetails.action' var="studentIds">
							<s:param name="studentBean.studentId">
								<s:property />
							</s:param>
						</s:url>
						<li><a href="<s:property value='#studentIds' />"> <s:property /></a>
						</li>
					</ul>
				</s:iterator></td>
				</tr>
	
			</tbody>
		</table>
			<div>
		<a href="<s:url action="/studentSurveyForm" />" style="color: brown;">STUDENT SURVEY PAGE</a>
		</div>
	</div>
	</body>
</html>