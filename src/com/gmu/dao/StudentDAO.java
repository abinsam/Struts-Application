package com.gmu.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.gmu.bean.DataBean;
import com.gmu.bean.StudentBean;

/**
 * 
 * 
 * @author Abin Sam
 * @version 1.0
 *  @date 16th April 2014
 */
public class StudentDAO {
	public Connection getConnection() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection connection = DriverManager.getConnection("jdbc:oracle:thin:@apollo.ite.gmu.edu:1521:ite10g", "asam","abin1234");
		return connection;
	}
	/**
	 * This method is used to save student survey * 
	 * @return boolean result
	 */
	public boolean saveStudentSurveyInfo(StudentBean studentBean) {
		boolean success = false;
		PreparedStatement preparedStatement = null;
		Connection sqlConnection = null;
		try {
			sqlConnection = getConnection();

			preparedStatement = sqlConnection
					.prepareStatement("insert into STUDENT_INFO (STUDENT_ID, STUDENT_NAME, STREET_ADDRESS, ZIP_CODE, CITY, STATE, TELEPHONE_NO, EMAIL_ADDRESS, GRAD_MONTH, GRAD_YEAR, "
							+ "URL, RECOMMENDATION, INTEREST, LIKINGS,SURVEY_DATE,ADDITIONAL_COMMENT,USER_NAME) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			//set the data to prepared statement
			if(studentBean.getStudentId()!=null)
			  preparedStatement.setString(1, studentBean.getStudentId());
			else
			  preparedStatement.setString(1, "FALSE");
			
			if(studentBean.getStudentName()!=null)
			  preparedStatement.setString(2, studentBean.getStudentName());
			else
			 preparedStatement.setString(2, "");
			
			if(studentBean.getStreetAddress()!=null)
			 preparedStatement.setString(3, studentBean.getStreetAddress());
			else
			 preparedStatement.setString(3, "");
			
			if(studentBean.getZipCode()!=null)			
			  preparedStatement.setString(4,studentBean.getZipCode());
			else
			  preparedStatement.setString(4,"");
  
			if(studentBean.getCity()!=null)
			   preparedStatement.setString(5, studentBean.getCity());
			else
			   preparedStatement.setString(5, "");
			
			if(studentBean.getState()!=null)
			  preparedStatement.setString(6, studentBean.getState());
			else
			  preparedStatement.setString(6, "");	
			
			if(studentBean.getTelephoneNumber()!=null)				
			 preparedStatement.setString(7, studentBean.getTelephoneNumber());
			else
			 preparedStatement.setString(7, "");
			
			if(studentBean.getEmailAddress()!=null)			
			 preparedStatement.setString(8, studentBean.getEmailAddress());
			else
			 preparedStatement.setString(8,"");
			
			if(studentBean.getGradMonth()!=null)
			  preparedStatement.setString(9, studentBean.getGradMonth());
			else
				preparedStatement.setString(9, "");
			
			if(studentBean.getGradYear()!=null)
			  preparedStatement.setString(10, studentBean.getGradYear());
			else
			  preparedStatement.setString(10, "");	
				
		    if(studentBean.getUrl()!=null)
			 preparedStatement.setString(11, studentBean.getUrl());
		    else
		     preparedStatement.setString(11,"");
			
		    if(studentBean.getRecommendation()!=null)
			 preparedStatement.setString(12, studentBean.getRecommendation());
		    else
		     preparedStatement.setString(12, ""	);
			
		    if(studentBean.getInterest()!=null)
			 preparedStatement.setString(13, studentBean.getInterest());
		    else
		     preparedStatement.setString(13, "");
			
			if(studentBean.getLikings()!=null)
			 preparedStatement.setString(14, studentBean.getLikings());
			else
			 preparedStatement.setString(14, "");
			
			if(studentBean.getDateOfSurvey()!=null)
			 preparedStatement.setString(15, studentBean.getDateOfSurvey());
			else
			 preparedStatement.setString(15, "");
			
			if(studentBean.getAdditionalComment()!=null)
				 preparedStatement.setString(16, studentBean.getAdditionalComment());
			else
				 preparedStatement.setString(16, "");
			
			if(studentBean.getUserName()!=null)
				 preparedStatement.setString(17, studentBean.getUserName());
			else
				 preparedStatement.setString(17, "");
			
			preparedStatement.executeUpdate();
			success = true;

		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		} finally {
			try {
				preparedStatement.close();
				sqlConnection.close();
				success = true;
			} catch (SQLException e) {
				e.printStackTrace();
				success = false;
			}
		}

		return success;
	}

	/**
	 * This method is used to retrieve student * 
	 * @return ArrayList<String>
	 */
	public ArrayList<String> retrieveStudentIds() {
		ArrayList<String> studentIds = null;

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;
		Connection sqlConnection = null;
		try {
			studentIds = new ArrayList<String>();
			sqlConnection = getConnection();

			String query = "SELECT STUDENT_ID FROM STUDENT_INFO";
			preparedStatement = sqlConnection.prepareStatement(query);

			resultSet = preparedStatement.executeQuery();
			while (resultSet.next()) {
				studentIds.add(resultSet.getString("STUDENT_ID"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				resultSet.close();
				preparedStatement.close();
				sqlConnection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return studentIds;
	}

	
	/**
	 * This method is used to retrieve student details * 
	 * @return StudentBean
	 */
	public StudentBean retrieveStudentSurveyInfo(String studentId) {
		StudentBean studentBean = null;
		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;
		Connection sqlConnection = null;
		try {
			studentBean = new StudentBean();
			sqlConnection = getConnection();

			String query = "SELECT * FROM STUDENT_INFO WHERE STUDENT_ID = '"+ studentId + "'";
			preparedStatement = sqlConnection.prepareStatement(query);
			resultSet = preparedStatement.executeQuery();
			while (resultSet.next()) {
				studentBean.setStudentId(studentId);
				studentBean.setStudentName(resultSet.getString(2));
				studentBean.setStreetAddress(resultSet.getString(3));
				studentBean.setZipCode(resultSet.getString(4));
				studentBean.setCity(resultSet.getString(5));
				studentBean.setState(resultSet.getString(6));
				studentBean.setTelephoneNumber(resultSet.getString(7));
				studentBean.setEmailAddress(resultSet.getString(8));
				studentBean.setGradMonth(resultSet.getString(9));
				studentBean.setGradYear(resultSet.getString(10));
				studentBean.setUrl(resultSet.getString(11));
				studentBean.setRecommendation(resultSet.getString(12));
				studentBean.setInterest(resultSet.getString(13));
				studentBean.setLikings(resultSet.getString(14));
				studentBean.setDateOfSurvey(resultSet.getString(15));		
				studentBean.setAdditionalComment(resultSet.getString(16));
				studentBean.setUserName(resultSet.getString(17));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				resultSet.close();
				preparedStatement.close();
				sqlConnection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return studentBean;
	}

	/**
	 * This method is used to save Data Field entry from the form * 
	 * @return boolean
	 */
	public boolean saveDataField(DataBean dataBean) {
		boolean success = false;
		PreparedStatement preparedStatement = null;
		Connection sqlConnection = null;
		try {
			sqlConnection = getConnection();
			preparedStatement = sqlConnection
					.prepareStatement("insert into DATA (STUDENT_ID, MEAN, STANDARD_DEVIATION,DATAS) "
							+ "values (?,?,?,?)");
			if(dataBean.getStudentId()!=null)
			  preparedStatement.setString(1, dataBean.getStudentId());
			else
			  preparedStatement.setString(1, "FALSE");
			
			if(Double.toString(dataBean.getMeanValue())!=null)
			  preparedStatement.setDouble(2, dataBean.getMeanValue());
			else
			 preparedStatement.setDouble(2, 0.0);
			
			if(Double.toString(dataBean.getStandardDeviationValue())!=null)
			 preparedStatement.setDouble(3, dataBean.getStandardDeviationValue());
			else
			 preparedStatement.setDouble(3, 0.0);
			
			if(dataBean.getDataField()!=null)
			  preparedStatement.setString(4, dataBean.getDataField());
			else
			  preparedStatement.setString(4, "");
			
			preparedStatement.executeUpdate();
			success = true;

		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		} finally {
			try {
				preparedStatement.close();
				sqlConnection.close();
				success = true;
			} catch (SQLException e) {
				e.printStackTrace();
				success = false;
			}
		}

		return success;
	}

}