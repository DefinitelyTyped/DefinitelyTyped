// Type definitions for subleveldown 4.1
// Project: https://github.com/level/subleveldown
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'subleveldown' {
    import { LevelUp } from 'levelup'
    import { AbstractLevelDOWN, AbstractIteratorOptions, AbstractBatch, ErrorCallback, AbstractOptions, ErrorValueCallback, AbstractGetOptions, AbstractIterator } from 'abstract-leveldown';

    export interface Options {
        separator?: string;
        open?: Function;
        [key: string]: any;
    }

    type LevelUpClear<V, O> =
        ((callback: ErrorValueCallback<V>) => void) &
        ((options: O, callback: ErrorValueCallback<V>) => void) &
        ((options?: O) => Promise<V>);

    type InferDBClear<DB> =
        DB extends { get: (options: infer O, callback: ErrorValueCallback<infer V>) => void } ?
        LevelUpClear<V, O> :
        LevelUpClear<any, AbstractGetOptions>;

    export interface SublevelDown<DB, Iterator> extends LevelUp<DB, Iterator>  {
        clear: InferDBClear<DB>;

    }

    function sub<DB, Iterator>(db: LevelUp<DB, Iterator>, prefix?: string, options?: Options): SublevelDown<DB, Iterator>;
    export default sub;
}
