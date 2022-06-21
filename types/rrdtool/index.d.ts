// Type definitions for rrdtool 0.1
// Project: https://github.com/LinusU/node-rrdtool
// Definitions by: Filip Stenbacka <https://github.com/filiptypjeu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Based on: https://oss.oetiker.ch/rrdtool/doc/index.en.html
// Minimum TypeScript Version: 4.1

export {};

type UnixTimestamp = number;
type Duration = number | `${number}${'s' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'}`;

type DataSourceType = 'GAUGE' | 'COUNTER' | 'DCOUNTER' | 'DERIVE' | 'DDERIVE' | 'ABSOLUTE';

// DS:ds-name:{GAUGE | COUNTER | DERIVE | DCOUNTER | DDERIVE | ABSOLUTE}:heartbeat:min:max
type DataSource_<N extends string = any> = `DS:${N}:${DataSourceType}:${Duration}:${number}:${number}`;

// XXX: Enhance rpn-expression type
// DS:ds-name:COMPUTE:rpn-expression
type DataSourceCompute<N extends string = any> = `DS:${N}:COMPUTE:${string}`;

/**
 * https://oss.oetiker.ch/rrdtool/doc/rrdcreate.en.html
 *
 * Data sources:
 *  - `"DS:ds-name:{GAUGE | COUNTER | DERIVE | DCOUNTER | DDERIVE | ABSOLUTE}:heartbeat:min:max"`
 *  - `"DS:ds-name:COMPUTE:rpn-expression"`
 *
 * Variable types:
 *  - `ds-name`: string
 *  - `heartbeat`: number (seconds)
 *  - `min`: number (data range)
 *  - `max`: number (data range)
 *  - `rpn-expression`: string
 */
export type DataSource<N extends string = any> = DataSource_<N> | DataSourceCompute<N>;

type ConsolidationFunction = 'AVERAGE' | 'MIN' | 'MAX' | 'LAST';

// RRA:{AVERAGE | MIN | MAX | LAST}:xff:steps:rows
type RoundRobinArchive_ = `RRA:${ConsolidationFunction}:${number}:${Duration}:${Duration}`;

// RRA:{HWPREDICT | MHWPREDICT}:rows:alpha:beta:seasonal period[:rra-num]
type RoundRobinArchiveHWPredict = `RRA:${'HWPREDICT' | 'MHWPREDICT'}:${Duration}:${number}:${number}:${Duration}${
    | ''
    | `:${number}`}`;

// RRA:{SEASONAL | DEVSEASONAL}:seasonal period:gamma:rra-num[:smoothing-window]
type RoundRobinArchiveSeasonal = `RRA:${'SEASONAL' | 'DEVSEASONAL'}:${Duration}:${number}:${number}${
    | ''
    | `:${number}`}`;

// RRA:DEVPREDICT:rows:rra-num
type RoundRobinArchiveDevPredict = `RRA:DEVPREDICT:${Duration}:${number}`;

// RRA:FAILURES:rows:threshold:window length:rra-num
type RoundRobinArchiveFailures = `RRA:FAILURES:${Duration}:${number}:${number}:${number}`;

/**
 * https://oss.oetiker.ch/rrdtool/doc/rrdcreate.en.html
 *
 * Round robin archives:
 *  - `"RRA:{AVERAGE | MIN | MAX | LAST}:xff:steps:rows"`
 *  - `"RRA:HWPREDICT:rows:alpha:beta:seasonal period[:rra-num]"`
 *  - `"RRA:MHWPREDICT:rows:alpha:beta:seasonal period[:rra-num]"`
 *  - `"RRA:SEASONAL:seasonal period:gamma:rra-num[:smoothing-window]"`
 *  - `"RRA:DEVSEASONAL:seasonal period:gamma:rra-num[:smoothing-window]"`
 *  - `"RRA:DEVPREDICT:rows:rra-num"`
 *  - `"RRA:FAILURES:rows:threshold:window length:rra-num"`
 *
 * Variable types:
 *  - `xff`: number (between 0 and 1)
 *  - `steps`: number
 *  - `rows`: number
 *  - `alpha`: number (between 0 and 1)
 *  - `beta`: number (between 0 and 1)
 *  - `gamma`: number (between 0 and 1)
 *  - `seasonal period`: number
 *  - `rra-num`: number (1-based RRA index)
 *  - `smoothing-window`: number (between 0 and 1)
 */
export type RoundRobinArchive =
    | RoundRobinArchive_
    | RoundRobinArchiveHWPredict
    | RoundRobinArchiveSeasonal
    | RoundRobinArchiveDevPredict
    | RoundRobinArchiveFailures;

type Data<A extends string[]> = Record<A[number], number>;
interface DataPoint<A extends string[]> {
    time: UnixTimestamp;
    values: Data<A>;
}
// XXX: Not really correct, this would be better but does not work correctly (?):
// (error: Error, data: undefined) => void | ((error: null, data: Array<DataPoint<A>>) => void)
type FetchCallback<A extends string[]> = (error: Error, data: Array<DataPoint<A>>) => void;

export interface RrdtoolDatabase<A extends string[] = any> {
    /**
     * Insert data into the database.
     */
    update(ts: UnixTimestamp, values: Partial<Data<A>>, cb?: (error: Error) => void): void;
    update(values: Data<A>, cb?: (error: Error) => void): void;

    /**
     * Fetch a span of data from the database.
     */
    fetch(
        cf: ConsolidationFunction,
        start: UnixTimestamp,
        stop: UnixTimestamp,
        res: number,
        cb: FetchCallback<A>,
    ): void;
    fetch(cf: ConsolidationFunction, start: UnixTimestamp, stop: UnixTimestamp, cb: FetchCallback<A>): void;
}

declare namespace rrdtool {
    /**
     * Creates a new database.
     */
    function create<A extends string[]>(
        file: string,
        opts: {
            step?: Duration;
            start?: UnixTimestamp;
            force?: boolean;
        },
        args: ReadonlyArray<DataSource<A[number]> | RoundRobinArchive>,
    ): RrdtoolDatabase<A>;

    /**
     * Loads an existing database.
     */
    function open(file: string): RrdtoolDatabase;

    /**
     * Returns the current unix timestamp.
     */
    function now(): number;
}

export default rrdtool;
