declare class OneByte {
    constructor(options: any);
    options: any;
    KWH_PER_BYTE_FOR_NETWORK: number;
    /**
     * Calculates the carbon footprint of a website using the OneByte model
     * @param {number} bytes - The number of bytes to calculate the carbon footprint for
     * @param {boolean} green - Whether the energy is green or not
     * @returns {number} The carbon footprint in grams of CO2
     */
    perByte(bytes: number, green: boolean): number;
}

export = OneByte;
