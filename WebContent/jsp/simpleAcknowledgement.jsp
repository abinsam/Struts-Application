<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<!-- Simple Acknowledgement Page with all details and student Id List -->
<body style="background-color: silver;">
	<div>
		<h2 align="center" style="color: blue; font-size: 200%">THANK YOU FOR FILLING THE SURVEY FORM.</h2>
		<h3>Survey details are successfully saved!!!</h3>
		<table style="font-size: 100%">
	<thead></thead>
	<tbody>
		<tr>
			<td>Numbers:</td>
			<td><strong><s:property value="dataBean.dataField" /></strong></td>
		</tr>

		<tr>
			<td>Mean Value:</td>
			<td ><strong><s:property
						value="dataBean.meanValue" /></strong></td>
		</tr>

		<tr>
			<td>Standard Deviation Value:</td>
			<td ><strong><s:property
						value="dataBean.standardDeviationValue" /></strong></td>
		</tr>
</table>
<table border="1px">
     <th>List of Student ids:</th>
	<tr>
			<td colspan="2"><s:iterator value="studentBean.studentIdList">
					<ul>
						<s:url action='retrieveStudentDetails.action' var="studentIds">
							<s:param name="studentBean.studentIdList">
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
<div></div>
		<div><a	href="<s:url action="studentSurveyForm" />"style="color: brown;">STUDENT SURVEY PAGE</a>

	</div>
</body>
</html>