export default class SensorReportElement extends Entity {
    /**
     * Set the type property
     * @param {string} type
     * @return {SensorReportElement} - the sensorReport instance
     */
    setType(type: string): SensorReportElement;

    /**
     * Getter for the type property
     * @return {string} - the type
     */
    getType(): string;

    /**
     * Set the exception property
     * @param {string} exception
     * @return {SensorReportElement} - the sensorReport instance
     */
    setException(exception: string): SensorReportElement;

    /**
     * Getter for the exception property
     * @return {string} - the exception
     */
    getException(): string;

    /**
     * Set the deviceID property
     * @param {string} deviceID
     * @return {SensorReportElement} - the sensorReport instance
     */
    setDeviceID(deviceID: string): SensorReportElement;

    /**
     * Getter for the deviceID property
     * @return {string} - the deviceID
     */
    getDeviceID(): string;

    /**
     * Set the deviceMetadata property
     * @param {string} deviceMetadata
     * @return {SensorReportElement} - the sensorReport instance
     */
    setDeviceMetadata(deviceMetadata: string): SensorReportElement;

    /**
     * Getter for the deviceMetadata property
     * @return {string} - the deviceMetadata
     */
    getDeviceMetadata(): string;

    /**
     * Set the rawData property
     * @param {string} rawData
     * @return {SensorReportElement} - the sensorReport instance
     */
    setRawData(rawData: string): SensorReportElement;

    /**
     * Getter for the rawData property
     * @return {string} - the rawData
     */
    getRawData(): string;

    /**
     * Set the dataProcessingMethod property
     * @param {string} dataProcessingMethod
     * @return {SensorReportElement} - the sensorReport instance
     */
    setDataProcessingMethod(dataProcessingMethod: string): SensorReportElement;

    /**
     * Getter for the dataProcessingMethod property
     * @return {string} - the dataProcessingMethod
     */
    getDataProcessingMethod(): string;

    /**
     * Set the time property
     * @param {string} time
     * @return {SensorReportElement} - the sensorReport instance
     */
    setTime(time: string): SensorReportElement;

    /**
     * Getter for the time property
     * @return {string} - the time
     */
    getTime(): string;

    /**
     * Set the microorganism property
     * @param {string} microorganism
     * @return {SensorReportElement} - the sensorReport instance
     */
    setMicroorganism(microorganism: string): SensorReportElement;

    /**
     * Getter for the microorganism property
     * @return {string} - the microorganism
     */
    getMicroorganism(): string;

    /**
     * Set the chemicalSubstance property
     * @param {string} chemicalSubstance
     * @return {SensorReportElement} - the sensorReport instance
     */
    setChemicalSubstance(chemicalSubstance: string): SensorReportElement;

    /**
     * Getter for the chemicalSubstance property
     * @return {string} - the chemicalSubstance
     */
    getChemicalSubstance(): string;

    /**
     * Set the value property
     * @param {number} value
     * @return {SensorReportElement} - the sensorReport instance
     */
    setValue(value: number): SensorReportElement;

    /**
     * Getter for the value property
     * @return {number} - the value
     */
    getValue(): number;

    /**
     * Set the component property
     * @param {string} component
     * @return {SensorReportElement} - the sensorReport instance
     */
    setComponent(component: string): SensorReportElement;

    /**
     * Getter for the component property
     * @return {string} - the component
     */
    getComponent(): string;

    /**
     * Set the stringValue property
     * @param {string} stringValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setStringValue(stringValue: string): SensorReportElement;

    /**
     * Getter for the stringValue property
     * @return {string} - the stringValue
     */
    getStringValue(): string;

    /**
     * Set the booleanValue property
     * @param {boolean} booleanValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setBooleanValue(booleanValue: boolean): SensorReportElement;

    /**
     * Getter for the booleanValue property
     * @return {boolean} - the booleanValue
     */
    getBooleanValue(): boolean;

    /**
     * Set the hexBinaryValue property
     * @param {string} hexBinaryValue - "^[A-Fa-f0-9]+$"
     * @return {SensorReportElement} - the sensorReport instance
     */
    setHexBinaryValue(hexBinaryValue: string): SensorReportElement;

    /**
     * Getter for the hexBinaryValue property
     * @return {string} - the hexBinaryValue
     */
    getHexBinaryValue(): string;

    /**
     * Set the uriValue property
     * @param {string} uriValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setUriValue(uriValue: string): SensorReportElement;

    /**
     * Getter for the uriValue property
     * @return {string} - the uriValue
     */
    getUriValue(): string;

    /**
     * Set the minValue property
     * @param {number} minValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setMinValue(minValue: number): SensorReportElement;

    /**
     * Getter for the minValue property
     * @return {number} - the minValue
     */
    getMinValue(): number;

    /**
     * Set the maxValue property
     * @param {number} maxValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setMaxValue(maxValue: number): SensorReportElement;

    /**
     * Getter for the maxValue property
     * @return {number} - the maxValue
     */
    getMaxValue(): number;

    /**
     * Set the meanValue property
     * @param {number} meanValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setMeanValue(meanValue: number): SensorReportElement;

    /**
     * Getter for the meanValue property
     * @return {number} - the meanValue
     */
    getMeanValue(): number;

    /**
     * Set the sDev property
     * @param {number} sDev
     * @return {SensorReportElement} - the sensorReport instance
     */
    setSDev(sDev: number): SensorReportElement;

    /**
     * Getter for the sDev property
     * @return {number} - the sDev
     */
    getSDev(): number;

    /**
     * Set the percRank property
     * @param {number} percRank
     * @return {SensorReportElement} - the sensorReport instance
     */
    setPercRank(percRank: number): SensorReportElement;

    /**
     * Getter for the percRank property
     * @return {number} - the percRank
     */
    getPercRank(): number;

    /**
     * Set the percValue property
     * @param {number} percValue
     * @return {SensorReportElement} - the sensorReport instance
     */
    setPercValue(percValue: number): SensorReportElement;

    /**
     * Getter for the percValue property
     * @return {number} - the percValue
     */
    getPercValue(): number;

    /**
     * Set the uom property
     * @param {string} uom
     * @return {SensorReportElement} - the sensorReport instance
     */
    setUom(uom: string): SensorReportElement;

    /**
     * Getter for the uom property
     * @return {string} - the uom
     */
    getUom(): string;

    /**
     * Set the coordinate Reference System property
     * @param {string} coordinateReferenceSystem
     * @return {SensorReportElement} - the sensorReport instance
     */
    setCoordinateReferenceSystem(coordinateReferenceSystem: string): SensorReportElement;

    /**
     * Getter for the coordinate Reference System property
     * @return {string} - the uom
     */
    getCoordinateReferenceSystem(): string;
}
import Entity from "../../Entity";
