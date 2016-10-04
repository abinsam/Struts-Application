package com.gmu.actions;

import org.apache.commons.lang3.StringUtils;

import com.opensymphony.xwork2.ActionSupport;

import com.gmu.bean.DataBean;
import com.gmu.bean.StudentBean;
import com.gmu.dao.StudentDAO;
import com.gmu.processor.DataProcessor;

/**
 * Action class to handle Student survey form action
 * @author Abin Sam
 * @date 04/29/2016
 */
public class StudentSurveyAction extends ActionSupport {
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 1L;
	private StudentBean studentBean;//Student bean to set and display the student details.
	private DataBean dataBean;//Data bean to set calculated mean and standard deviation
	/**
	 * Default Method to direct to JSP on laod	 * 
	 * @return resultJsp
	 */
	public String execute() {
		return "success";
	}

	/**
	 * This method is used to save and retrieve the students details	 * 
	 * @return resultJsp
	 */
	public String saveSurveyDetails() {
		StudentDAO studentDAO = new StudentDAO();
		studentDAO.saveStudentSurveyInfo(studentBean);//Calling DAO class method to save
		studentBean.setStudentIdList(studentDAO.retrieveStudentIds());// Retrieving student details set to student bean
		//Data processor to calculate Mean and Standard Deviation.
		DataProcessor dataProcessor = new DataProcessor();
		dataBean = dataProcessor.calculateMeanAndStandardDeviation(studentBean.getStudentId(),dataBean.getDataField());

		String resultJsp = StringUtils.EMPTY;
		if (null != dataBean && dataBean.getMeanValue()>90) {
			resultJsp = "winnerAcknowledgement";//set resultJsp to winnerAcknowledgement
		} else {
			resultJsp = "simpleAcknowledgement";//set resultJsp to simpleAcknowledgement
		}

		return resultJsp;
	}

	/**
	 * This method is used to retrieve the student survey details 
	 * based on student ID link.
	 * @return resultJsp
	 */
	public String retrieveStudentDetails() {
		StudentDAO studentDAO = new StudentDAO();
		/*
		 * Retrieve student survey details from the database from the provided
		 * student ID.
		 */
		if(studentBean.studentId!=null && !(studentBean.studentId.isEmpty()))
			studentBean = studentDAO.retrieveStudentSurveyInfo(studentBean.studentId);
		else			
		    studentBean = studentDAO.retrieveStudentSurveyInfo(studentBean.getStudentIdList().get(0));
		String resultJsp = StringUtils.EMPTY;
		if (null != studentBean) {
			resultJsp = "studentExist";//resultJsp, If student is present
		} else {
			resultJsp = "noSuchStudent";//resultJsp, If student is present
		}

		return resultJsp;
	}

	/**
	 * @return the studentBean
	 */
	public StudentBean getStudentBean() {
		return studentBean;
	}

	/**
	 * @param studentBean
	 *            the studentBean to set
	 */
	public void setStudentBean(StudentBean studentBean) {
		this.studentBean = studentBean;
	}

	/**
	 * @return the dataBean
	 */
	public DataBean getDataBean() {
		return dataBean;
	}

	/**
	 * @param dataBean
	 *            the dataBean to set
	 */
	public void setDataBean(DataBean dataBean) {
		this.dataBean = dataBean;
	}
}