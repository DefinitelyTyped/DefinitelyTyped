// Type definitions for rrdtool 0.1
// Project: https://github.com/LinusU/node-rrdtool
// Definitions by: Filip Stenbacka <https://github.com/filiptypjeu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Based on: https://oss.oetiker.ch/rrdtool/doc/index.en.html
// Minimum TypeScript Version: 4.1

export {};

type Timestamp = number;

export type RrdtoolData = Record<string, number>;
export interface RrdtoolDataPoint<D extends RrdtoolData> {
    time: Timestamp;
    values: D;
}

export type Duration = number | `${number}${'s' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'}`;

type DataSourceType_ = 'GAUGE' | 'COUNTER' | 'DCOUNTER' | 'DERIVE' | 'DDERIVE' | 'ABSOLUTE';
export type DataSourceType = DataSourceType_ | 'COMPUTE';

// DS:ds-name:{GAUGE | COUNTER | DERIVE | DCOUNTER | DDERIVE | ABSOLUTE}:heartbeat:min:max
type DataSource_<D extends RrdtoolData> = `DS:${keyof D & string}:${DataSourceType_}:${Duration}:${number}:${number}`;

// XXX: Enhance rpn-expression type
// DS:ds-name:COMPUTE:rpn-expression
type DataSourceCompute<D extends RrdtoolData> = `DS:${keyof D & string}:COMPUTE:${string}`;

/**
 * https://oss.oetiker.ch/rrdtool/doc/rrdcreate.en.html
 *
 * Data sources:
 *  - `"DS:ds-name:{GAUGE | COUNTER | DERIVE | DCOUNTER | DDERIVE | ABSOLUTE}:heartbeat:min:max"`
 *  - `"DS:ds-name:COMPUTE:rpn-expression"`
 *
 * Variable types:
 *  - `ds-name`: string
 *  - `heartbeat`: number (seconds) OR duration string
 *  - `min`: number (data range)
 *  - `max`: number (data range)
 *  - `rpn-expression`: string
 */
export type DataSource<D extends RrdtoolData = any> = DataSource_<D> | DataSourceCompute<D>;

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
 *  - `steps`: number (seconds) OR duration string
 *  - `rows`: number (seconds) OR duration string
 *  - `alpha`: number (between 0 and 1)
 *  - `beta`: number (between 0 and 1)
 *  - `gamma`: number (between 0 and 1)
 *  - `seasonal period`: number (seconds) OR duration string
 *  - `rra-num`: number (1-based RRA index)
 *  - `smoothing-window`: number (between 0 and 1)
 */
export type RoundRobinArchive =
    | RoundRobinArchive_
    | RoundRobinArchiveHWPredict
    | RoundRobinArchiveSeasonal
    | RoundRobinArchiveDevPredict
    | RoundRobinArchiveFailures;

// XXX: Not really correct, this would be better but does not work correctly (?):
// (error: Error, data: undefined) => void | ((error: null, data: Array<DataPoint<A>>) => void)
type FetchCallback<D extends RrdtoolData> = (error: Error, data: Array<RrdtoolDataPoint<D>>) => void;

export interface RrdtoolDatabase<D extends RrdtoolData = any> {
    /**
     * Insert data into the database.
     */
    update(ts: Timestamp, values: Partial<D>, cb?: (error: Error) => void): void;
    update(values: D, cb?: (error: Error) => void): void;

    /**
     * Fetch a span of data from the database.
     */
    fetch(cf: ConsolidationFunction, start: Timestamp, stop: Timestamp, res: number, cb: FetchCallback<D>): void;
    fetch(cf: ConsolidationFunction, start: Timestamp, stop: Timestamp, cb: FetchCallback<D>): void;
}

export type RrdtoolArgument<D extends RrdtoolData> = DataSource<D> | RoundRobinArchive;

/**
 * Creates a new database.
 */
export function create<D extends RrdtoolData>(
    file: string,
    opts: {
        step?: Duration;
        start?: Timestamp;
        force?: boolean;
    },
    args: ReadonlyArray<RrdtoolArgument<D>>,
): RrdtoolDatabase<D>;

/**
 * Loads an existing database.
 */
export function open(file: string): RrdtoolDatabase;

/**
 * Returns the current unix timestamp.
 */
export function now(): number;
