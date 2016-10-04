package com.gmu.bean;

/**
 * This Bean class is used to store the data table fields in to bean.
 * 
 * @author Abin Sam
 * @Date 16th April 2014
 */
public class DataBean {
	private String studentId;
	private String dataField;
	public double meanValue;
	public double standardDeviationValue;
	/**
	 * @return the studentId
	 */
	public String getStudentId() {
		return studentId;
	}

	/**
	 * @param studentId the studentId to set
	 */
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	/**
	 * @return the meanValue
	 */
	public double getMeanValue() {
		return meanValue;
	}

	/**
	 * @param meanValue
	 *            the meanValue to set
	 */
	public void setMeanValue(double meanValue) {
		this.meanValue = meanValue;
	}

	/**
	 * @return the standardDeviationVal
	 */
	public double getStandardDeviationValue() {
		return standardDeviationValue;
	}

	/**
	 * @param standardDeviationVal
	 *            the standardDeviationVal to set
	 */
	public void setStandardDeviationValue(double standardDeviationValue) {
		this.standardDeviationValue = standardDeviationValue;
	}

	/**
	 * @return the dataField
	 */
	public String getDataField() {
		return dataField;
	}

	/**
	 * @param dataField the dataField to set
	 */
	public void setDataField(String dataField) {
		this.dataField = dataField;
	}

	

	
}