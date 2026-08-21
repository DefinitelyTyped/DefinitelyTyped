declare class SustainableWebDesign {
    constructor(options: any);
    options: any;
    /**
     * Accept a figure for bytes transferred and return an object representing
     * the share of the total enrgy use of the entire system, broken down
     * by each corresponding system component
     *
     * @param {number}  bytes - the data transferred in bytes
     * @return {object} Object containing the energy in kilowatt hours, keyed by system component
     */
    energyPerByteByComponent(bytes: number): object;
    /**
     * Accept an object keys by the different system components, and
     * return an object with the co2 figures key by the each component
     *
     * @param {object} energyByComponent - energy grouped by the four system components
     * @param {number} [carbonIntensity] - carbon intensity to apply to the datacentre values
     * @return {number} the total number in grams of CO2 equivalent emissions
     */
    co2byComponent(energyByComponent: object, carbonIntensity?: number, options?: {}): number;
    /**
     * Accept a figure for bytes transferred and return a single figure for CO2
     * emissions. Where information exists about the origin data is being
     * fetched from, a different carbon intensity figure
     * is applied for the data centre share of the carbon intensity.
     *
     * @param {number} bytes - the data transferred in bytes
     * @param {boolean} carbonIntensity - a boolean indicating whether the data center is green or not
     * @param {boolean} segmentResults - a boolean indicating whether to return the results broken down by component
     * @param {object} options - an object containing the grid intensity and first/return visitor values
     * @return {number|object} the total number in grams of CO2 equivalent emissions, or an object containing the breakdown by component
     */
    perByte(bytes: number, carbonIntensity?: boolean, segmentResults?: boolean, options?: object): number | object;
    /**
     * Accept a figure for bytes transferred and return a single figure for CO2
     * emissions. This method applies caching assumptions from the original Sustainable Web Design model.
     *
     * @param {number} bytes - the data transferred in bytes
     * @param {boolean} carbonIntensity - a boolean indicating whether the data center is green or not
     * @param {boolean} segmentResults - a boolean indicating whether to return the results broken down by component
     * @param {object} options - an object containing the grid intensity and first/return visitor values
     * @return {number|object} the total number in grams of CO2 equivalent emissions, or an object containing the breakdown by component
     */
    perVisit(bytes: number, carbonIntensity?: boolean, segmentResults?: boolean, options?: object): number | object;
    /**
     * Accept a figure for bytes transferred and return the number of kilowatt hours used
     * by the total system for this data transfer
     *
     * @param {number} bytes
     * @return {number} the number of kilowatt hours used
     */
    energyPerByte(bytes: number): number;
    /**
     * Accept a figure for bytes transferred, and return an object containing figures
     * per system component, with the caching assumptions applied. This tries to account
     * for webpages being loaded from a cache by browsers, so if you had a thousand page views,
     * and tried to work out the energy per visit, the numbers would reflect the reduced amounts
     * of transfer.
     *
     * @param {number} bytes - the data transferred in bytes for loading a webpage
     * @param {number} firstView - what percentage of visits are loading this page for the first time
     * @param {number} returnView - what percentage of visits are loading this page for subsequent times
     * @param {number} dataReloadRatio - what percentage of a page is reloaded on each subsequent page view
     *
     * @return {object} Object containing the energy in kilowatt hours, keyed by system component
     */
    energyPerVisitByComponent(
        bytes: number,
        options?: {},
        firstView?: number,
        returnView?: number,
        dataReloadRatio?: number,
    ): object;
    /**
     * Accept a figure for bytes, and return the total figure for energy per visit
     * using the default caching assumptions for loading a single website
     *
     * @param {number} bytes
     * @return {number} the total energy use for the visit, after applying the caching assumptions
     */
    energyPerVisit(bytes: number): number;
    emissionsPerVisitInGrams(energyPerVisit: any, carbonintensity?: number): number;
    annualEnergyInKwh(energyPerVisit: any, monthlyVisitors?: number): number;
    annualEmissionsInGrams(co2grams: any, monthlyVisitors?: number): number;
    annualSegmentEnergy(annualEnergy: any): {
        consumerDeviceEnergy: number;
        networkEnergy: number;
        dataCenterEnergy: number;
        productionEnergy: number;
    };
}

export = SustainableWebDesign;
