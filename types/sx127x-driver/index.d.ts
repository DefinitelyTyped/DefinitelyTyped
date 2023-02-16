// Type definitions for sx127x-driver 0.0
// Project: https://github.com/xtrinch/sx127x-node-driver#readme
// Definitions by: mariusbackes <https://github.com/mariusbackes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SX127x {
    constructor(options?: SX127xOptions);

    /**
     * Open and configure the device
     */
    open(): Promise<void>;

    /**
     * Close the device
     */
    close(): Promise<void>;

    write(buffer: ArrayBuffer): Promise<void>;
    available(): Promise<boolean>;
    receiveSingle(): Promise<number>;
    read(): Promise<number>;

    setContinuousReceiveMode(): Promise<void>;
    sleep(): Promise<void>;
    standBy(): Promise<void>;

    /**
     * Supported values are between 2 and 17.
     * @param txPower
     */
    setTxPower(txPower: number): Promise<void>;

    /**
     * frequency in Hz (433E6, 866E6, 915E6)
     * @param frequency
     */
    setFrequency(frequency: '433E6' | '866E6' | '915E6'): Promise<void>;

    /**
     * Supported values are between 6 and 12. If a spreading factor of 6 is set, implicit header mode must be used to transmit and receive packets
     * @param spreadingFactor
     */
    setSpreadingFactor(spreadingFactor: number): Promise<void>;

    /**
     * Supported values are 7.8E3, 10.4E3, 15.6E3, 20.8E3, 31.25E3, 41.7E3, 62.5E3, 125E3, 250E3 and 500E3
     * @param signalBandwidth
     */
    setSignalBandwidth(
        signalBandwidth:
            | '7.8E3'
            | '10.4E3'
            | '15.6E3'
            | '20.8E3'
            | '31.25E3'
            | '41.7E3'
            | '62.5E3'
            | '125E3'
            | '250E3'
            | '500E3',
    ): Promise<void>;

    /**
     * Supported values are 4/5, 4/6, 4/7 and 4/8
     * @param codingRate
     */
    setCodingRate(codingRate: '4/5' | '4/6' | '4/7' | '4/8'): Promise<void>;

    /**
     * Supported values are between 6 and 65535.
     * @param preambleLength
     */
    setPreambleLength(preambleLength: number): Promise<void>;

    /**
     * Byte value to use as the sync word
     * @param syncWord
     */
    setSyncWord(syncWord: string): Promise<void>;

    /**
     * Byte value to use as the sync word
     * @param syncWord
     */
    setSyncWord(syncWord: string): Promise<void>;

    /**
     * true to enable CRC, false to disable
     * @param crc
     */
    setCrc(crc: boolean): Promise<void>;
}

interface SX127xOptions {
    /**
     * SPI bus to use
     * Default: 0
     */
    spiBus?: number;

    /**
     * SPI chip select/enable to use
     * Default: 0
     */
    spiDevice?: number;

    /**
     * GPIO pin number of reset pin
     * Default: 24
     */
    resetPin?: number;

    /**
     * Frequency of radio in Hz (make sure your chip supports the frequency you chose)
     * Default: 915E6
     */
    frequency?: '433E6' | '866E6' | '915E6';

    /**
     * Spreading factor of radio (spreading factors are orthogonal, so make sure they match when trying to communicate from one chip to another)
     * Supported values are between 6 and 12. If a spreading factor of 6 is set, implicit header mode must be used to transmit and receive packets.
     * Default: 7
     */
    spreadingFactor?: number;

    /**
     * Signal bandwidth of radio in Hz
     * Default: 125E3
     */
    signalBandwidth?:
        | '7.8E3'
        | '10.4E3'
        | '15.6E3'
        | '20.8E3'
        | '31.25E3'
        | '41.7E3'
        | '62.5E3'
        | '125E3'
        | '250E3'
        | '500E3';

    /**
     * Coding rate of radio
     * Default: 4/5
     */
    codingRate?: '4/5' | '4/6' | '4/7' | '4/8';

    /**
     * Preamble length of radio
     * Supported values are between 6 and 65535
     * Default: 8
     */
    preambleLength?: number;

    /**
     * Sync word of radio
     * Byte value to use as the sync word
     * Default: 0x12
     */
    syncWord?: string;

    /**
     * TX power of radio
     * Supported values are between 2 and 17
     * Default: 7
     */
    txPower?: number;

    /**
     * Enable or disable CRC usage
     * Default: false
     */
    crc?: boolean;

    /**
     * Compensation factor for temperature measurements in degrees celsius (+- some degrees)
     * Default: false
     */
    tempCompensationFactor?: boolean;

    /**
     * enable / disable debug output
     * Default: false
     */
    debug?: boolean;

    /**
     * Inverts IQ register on call to open()
     * Default: false
     */
    invertIqReg?: boolean;
}

export = SX127x;
