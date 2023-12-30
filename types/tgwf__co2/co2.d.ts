import OneByte = require("./1byte.js");
import SustainableWebDesign = require("./sustainable-web-design.js");
interface CO2EstimateTraceResultPerByte {
    /**
     * - The CO2 estimate in grams/kilowatt-hour
     */
    co2: number;
    /**
     * - Whether the domain is green or not
     */
    green: boolean;
    /**
     * - The variables used to calculate the CO2 estimate
     */
    variables: TraceResultVariablesPerByte;
}
interface CO2EstimateTraceResultPerVisit {
    /**
     * - The CO2 estimate in grams/kilowatt-hour
     */
    co2: number;
    /**
     * - Whether the domain is green or not
     */
    green: boolean;
    /**
     * - The variables used to calculate the CO2 estimate
     */
    variables: TraceResultVariablesPerVisit;
}
interface TraceResultVariablesPerByte {
    /**
     * - The grid intensity related variables
     */
    gridIntensity: GridIntensityVariables;
}
interface TraceResultVariablesPerVisit {
    /**
     * - The grid intensity related variables
     */
    gridIntensity: GridIntensityVariables;
    /**
     * - What percentage of a page is reloaded on each subsequent page view
     */
    dataReloadRatio: number;
    /**
     * - What percentage of visits are loading this page for subsequent times
     */
    firstVisitPercentage: number;
    /**
     * - What percentage of visits are loading this page for the second or more time
     */
    returnVisitPercentage: number;
}
interface GridIntensityVariables {
    /**
     * - The description of the variables
     */
    description: string;
    /**
     * - The network grid intensity set by the user or the default
     */
    network: number;
    /**
     * - The data center grid intensity set by the user or the default
     */
    dataCenter: number;
    /**
     * - The device grid intensity set by the user or the default
     */
    device: number;
    /**
     * - The production grid intensity set by the user or the default
     */
    production: number;
}
declare class CO2 {
    constructor(options: any);
    model: OneByte | SustainableWebDesign;
    private _segment;
    /**
     * Accept a figure in bytes for data transfer, and a boolean for whether
     * the domain shows as 'green', and return a CO2 figure for energy used to shift the corresponding
     * the data transfer.
     *
     * @param {number} bytes
     * @param {boolean} green
     * @return {number} the amount of CO2 in grammes
     */
    perByte(bytes: number, green?: boolean): number;
    /**
     * Accept a figure in bytes for data transfer, and a boolean for whether
     * the domain shows as 'green', and return a CO2 figure for energy used to shift the corresponding
     * the data transfer.
     *
     * @param {number} bytes
     * @param {boolean} green
     * @return {number} the amount of CO2 in grammes
     */
    perVisit(bytes: number, green?: boolean): number;
    /**
     * Accept a figure in bytes for data transfer, a boolean for whether
     * the domain shows as 'green', and an options object.
     * Returns an object containing CO2 figure, green boolean, and object of the variables used in calculating the CO2 figure.
     *
     * @param {number} bytes
     * @param {boolean} green
     * @param {Object} options
     * @return {CO2EstimateTraceResultPerByte} the amount of CO2 in grammes
     */
    perByteTrace(bytes: number, green?: boolean, options?: any): CO2EstimateTraceResultPerByte;
    /**
     * Accept a figure in bytes for data transfer, a boolean for whether
     * the domain shows as 'green', and an options object.
     * Returns an object containing CO2 figure, green boolean, and object of the variables used in calculating the CO2 figure.
     *
     * @param {number} bytes
     * @param {boolean} green
     * @param {Object} options
     * @return {CO2EstimateTraceResultPerVisit} the amount of CO2 in grammes
     */
    perVisitTrace(bytes: number, green?: boolean, options?: any): CO2EstimateTraceResultPerVisit;
    perDomain(pageXray: any, greenDomains: any): Array<{
        domain: string;
        co2: number;
        transferSize: any;
    }>;
    perPage(pageXray: any, green: any): number;
    perContentType(pageXray: any, greenDomains: any): Array<{
        type: string;
        co2: any;
        transferSize: any;
    }>;
    dirtiestResources(pageXray: any, greenDomains: any): Array<{
        url: any;
        co2: number;
        transferSize: any;
    }>;
    perParty(pageXray: any, greenDomains: any): {
        firstParty: number;
        thirdParty: number;
    };
}

export = CO2;
