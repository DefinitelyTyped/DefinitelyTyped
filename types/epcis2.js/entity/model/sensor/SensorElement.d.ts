export default class SensorElement extends Entity {
    /**
     * Set the sensorMetadata property
     * @return the sensor instance
     */
    setSensorMetadata(sensorMetadata: SensorMetadata): SensorElement;
    /**
     * Getter for the sensorMetadata property
     */
    getSensorMetadata(): SensorMetadata;
    /**
     * Add the sensorReport to the "sensorReportList" field
     * @param sensorReport - the sensorReport to add
     * @return the objectEvent instance
     */
    addSensorReport(sensorReport: SensorReportElement): SensorElement;
    /**
     * Add each sensorReportElement to the "sensorReportList" field
     * @param sensorReportList - the sensorReports to add
     * @return the objectEvent instance
     */
    addSensorReportList(sensorReportList: SensorReportElement[]): SensorElement;
    /**
     * Clear the sensorReport list
     * @return the objectEvent instance
     */
    clearSensorReportList(): SensorElement;
    /**
     * Remove a sensorReport from the "sensorReportList" field
     * @param sensorReport - the sensorReport to remove
     * @return the objectEvent instance
     */
    removeSensorReport(sensorReport: SensorReportElement): SensorElement;
    sensorReport: any;
    /**
     * Remove each sensorReport from the "sensorReportList" field
     * @param sensorReportList - the sensorReports to remove
     * @return the objectEvent instance
     */
    removeSensorReportList(sensorReportList: SensorReportElement[]): SensorElement;
    /**
     * Getter for the sensorReport property
     */
    getSensorReport(): SensorReportElement;
}
import Entity from "../../Entity";
import SensorMetadata from "./SensorMetadata";
import SensorReportElement from "./SensorReportElement";
