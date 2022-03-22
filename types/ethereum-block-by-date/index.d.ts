// Type definitions for ethereum-block-by-date 1.4
// Project: https://github.com/monosux/ethereum-block-by-date
// Definitions by: Alexandre ABRIOUX <https://github.com/alexandre-abrioux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DurationInputObject, MomentInput } from 'moment';
import { providers as EthersProviders } from 'ethers';
import Web3 from 'web3';

export = EthDater;
export as namespace EthDater;

declare namespace EthDater {
    interface BlockResult {
        block: number;
        timestamp: number;
        date: string;
    }
}

declare class EthDater {
    constructor(provider: EthersProviders.Provider | Web3);

    /**
     * Search for the closest block on the chain corresponding to the input date.
     * @param date Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
     * @param blockAfter Block after, optional. Search for the nearest block before or after the given date. By default, true.
     */
    getDate(date: MomentInput, blockAfter?: boolean): EthDater.BlockResult;

    /**
     * Returns an array of blocks corresponding to periods.
     * For example: every first block of Monday's noons of October 2019.
     * @param period Period, required. Valid value: years, quarters, months, weeks, days, hours, minutes.
     * @param startDate Start date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
     * @param endDate End date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
     * @param every Duration, optional, integer. By default, 1.
     * @param blockAfter Block after, optional. Search for the nearest block before or after the given date. By default, true.
     */
    getEvery(
        period: keyof DurationInputObject,
        startDate: MomentInput,
        endDate: MomentInput,
        every?: number,
        blockAfter?: boolean,
    ): EthDater.BlockResult[];
}
