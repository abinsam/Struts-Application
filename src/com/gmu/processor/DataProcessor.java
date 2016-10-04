/**
 * 
 */
package com.gmu.processor;
import org.apache.commons.lang3.StringUtils;
import com.gmu.bean.DataBean;
import com.gmu.dao.StudentDAO;

/**
 * 
 * 
 * @author Abin Sam
 * @version 0.1
 * @since 18 April 2016
 */
public class DataProcessor {
	public DataBean calculateMeanAndStandardDeviation(String studentId,String dataField) {
		String[] dataArray = null;
		if(StringUtils.isNotEmpty(dataField)) {
			dataArray = StringUtils.split(dataField, ",");
		}
		DataBean dataBean = null;
		if (null != dataArray) {
			double meanValue = 0.0;
			double sumValue = 0.0;
			double standardDeviation = 0.0;
			// Mean.
			for (String meanData : dataArray) {
				sumValue = sumValue + Double.parseDouble(meanData);

			}
			meanValue = sumValue / dataArray.length;
			// Standard deviation.
			double sumOfSquare = 0.0;
			for (String value : dataArray) {
				double squareValue = Math.pow((Double.parseDouble(value) - meanValue), 2);
				sumOfSquare = sumOfSquare + squareValue;
			}
			standardDeviation = Math.sqrt(sumOfSquare / (dataArray.length - 1));
			double roundOffMean = Math.round(meanValue * 100.0) / 100.0;
			double roundOffStandardDeviation = Math.round(standardDeviation * 100.0) / 100.0;
			dataBean = new DataBean();
			dataBean.setStudentId(studentId);
			dataBean.setMeanValue(roundOffMean);
			dataBean.setStandardDeviationValue(roundOffStandardDeviation);
			dataBean.setDataField(dataField);
			StudentDAO studentDAO = new StudentDAO();
			boolean saveDataFields=false;
			if(studentId!=null && !(studentId.equalsIgnoreCase("")))
				saveDataFields=studentDAO.saveDataField(dataBean);
		}

		return dataBean;
	}
}