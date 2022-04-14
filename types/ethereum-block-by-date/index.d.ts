// Type definitions for ethereum-block-by-date 1.4
// Project: https://github.com/monosux/ethereum-block-by-date
// Definitions by: Alexandre Abrioux <https://github.com/alexandre-abrioux>
//                 Alexeev Sergey <https://github.com/monosux>
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
    constructor(web3: EthersProviders.Provider | Web3);

    /**
     * Search for the closest block on the chain corresponding to the input date.
     * @param date Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
     * @param after Block after, optional. Search for the nearest block before or after the given date. By default, true.
     * @param refresh Refresh boundaries, optional. Recheck the latest block before request. By default, false.
     */
    getDate(date: MomentInput, after?: boolean, refresh?: boolean): EthDater.BlockResult;

    /**
     * Returns an array of blocks corresponding to periods.
     * For example: every first block of Monday's noons of October 2019.
     * @param duration Period, required. Valid value: years, quarters, months, weeks, days, hours, minutes.
     * @param start Start date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
     * @param end End date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
     * @param every Duration, optional, integer. By default, 1.
     * @param after Block after, optional. Search for the nearest block before or after the given date. By default, true.
     * @param refresh Refresh boundaries, optional. Recheck the latest block before request. By default, false.
     */
    getEvery(
        duration: keyof DurationInputObject,
        start: MomentInput,
        end: MomentInput,
        every?: number,
        after?: boolean,
        refresh?: boolean,
    ): EthDater.BlockResult[];
}
