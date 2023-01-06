export default class SensorElement extends Entity {
    /**
     * Set the sensorMetadata property
     * @param {SensorMetadata} sensorMetadata
     * @return {SensorElement} - the sensor instance
     */
    setSensorMetadata(sensorMetadata: SensorMetadata): SensorElement;
    /**
     * Getter for the sensorMetadata property
     * @return {SensorMetadata} - the sensorMetadata
     */
    getSensorMetadata(): SensorMetadata;
    /**
     * Add the sensorReport to the "sensorReportList" field
     * @param {SensorReportElement} sensorReport - the sensorReport to add
     * @return {SensorElement} - the objectEvent instance
     */
    addSensorReport(sensorReport: SensorReportElement): SensorElement;
    /**
     * Add each sensorReportElement to the "sensorReportList" field
     * @param {Array<SensorReportElement>} sensorReportList - the sensorReports to add
     * @return {SensorElement} - the objectEvent instance
     */
    addSensorReportList(sensorReportList: Array<SensorReportElement>): SensorElement;
    /**
     * Clear the sensorReport list
     * @return {SensorElement} - the objectEvent instance
     */
    clearSensorReportList(): SensorElement;
    /**
     * Remove a sensorReport from the "sensorReportList" field
     * @param {SensorReportElement} sensorReport - the sensorReport to remove
     * @return {SensorElement} - the objectEvent instance
     */
    removeSensorReport(sensorReport: SensorReportElement): SensorElement;
    sensorReport: any;
    /**
     * Remove each sensorReport from the "sensorReportList" field
     * @param {Array<SensorReportElement>} sensorReportList - the sensorReports to remove
     * @return {SensorElement} - the objectEvent instance
     */
    removeSensorReportList(sensorReportList: Array<SensorReportElement>): SensorElement;
    /**
     * Getter for the sensorReport property
     * @return {SensorReportElement} - the sensorReport
     */
    getSensorReport(): SensorReportElement;
}
import Entity from "../../Entity";
import SensorMetadata from "./SensorMetadata";
import SensorReportElement from "./SensorReportElement";
