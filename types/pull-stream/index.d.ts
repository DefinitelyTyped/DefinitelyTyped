// Type definitions for pull-stream 3.6
// Project: https://pull-stream.github.io
// Definitions by: Michael de Wit <https://github.com/mjwwit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { count as countImport, empty as emptyImport, error as errorImport, infinite as infiniteImport, keys as keysImport, once as onceImport, values as valuesImport } from './sources';
import {
    asyncMap as asyncMapImport,
    filterNot as filterNotImport,
    filter as filterImport,
    flatten as flattenImport,
    map as mapImport,
    nonUnique as nonUniqueImport,
    take as takeImport,
    through as throughImport,
    unique as uniqueImport
} from './throughs';
import { collect as collectImport, concat as concatImport, drain as drainImport, find as findImport, log as logImport, onEnd as onEndImport, reduce as reduceImport } from './sinks';

/**
 * Pipe data through a number of `pull-stream`s
 */
declare function pull(): undefined;
declare function pull<InOut>(source: pull.Source<InOut>, sink: pull.Sink<InOut>): undefined;
declare function pull<In, Out>(source: pull.Source<In>, t1: pull.Through<In, Out>, sink: pull.Sink<Out>): undefined;
declare function pull<In, P1, Out>(source: pull.Source<In>, t1: pull.Through<In, P1>, t2: pull.Through<P1, Out>, sink: pull.Sink<Out>): undefined;
declare function pull<In, P1, P2, Out>(source: pull.Source<In>, t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, Out>, sink: pull.Sink<Out>): undefined;
declare function pull<In, P1, P2, P3, Out>(
    source: pull.Source<In>,
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, Out>,
    sink: pull.Sink<Out>
): undefined;
declare function pull<In, P1, P2, P3, P4, Out>(
    source: pull.Source<In>,
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, Out>,
    sink: pull.Sink<Out>
): undefined;

declare function pull<In>(sink: pull.Sink<In>): pull.Sink<In>;
declare function pull<In, Out>(t1: pull.Through<In, Out>, sink: pull.Sink<Out>): pull.Sink<In>;
declare function pull<In, P1, Out>(t1: pull.Through<In, P1>, t2: pull.Through<P1, Out>, sink: pull.Sink<Out>): pull.Sink<In>;
declare function pull<In, P1, P2, Out>(t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, Out>, sink: pull.Sink<Out>): pull.Sink<In>;
declare function pull<In, P1, P2, P3, Out>(t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, P3>, t4: pull.Through<P3, Out>, sink: pull.Sink<Out>): pull.Sink<In>;
declare function pull<In, P1, P2, P3, P4, Out>(
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, Out>,
    sink: pull.Sink<Out>
): pull.Sink<In>;
declare function pull<In, P1, P2, P3, P4, P5, Out>(
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, P5>,
    t6: pull.Through<P5, Out>,
    sink: pull.Sink<Out>
): pull.Sink<In>;

declare function pull<Out>(source: pull.Source<Out>): pull.Source<Out>;
declare function pull<In, Out>(source: pull.Source<In>, t1: pull.Through<In, Out>): pull.Source<Out>;
declare function pull<In, P1, Out>(source: pull.Source<In>, t1: pull.Through<In, P1>, t2: pull.Through<P1, Out>): pull.Source<Out>;
declare function pull<In, P1, P2, Out>(source: pull.Source<In>, t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, Out>): pull.Source<Out>;
declare function pull<In, P1, P2, P3, Out>(source: pull.Source<In>, t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, P3>, t4: pull.Through<P3, Out>): pull.Source<Out>;
declare function pull<In, P1, P2, P3, P4, Out>(
    source: pull.Source<In>,
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, Out>
): pull.Source<Out>;
declare function pull<In, P1, P2, P3, P4, P5, Out>(
    source: pull.Source<In>,
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, P5>,
    t6: pull.Through<P5, Out>
): pull.Source<Out>;

declare function pull<In, Out>(t1: pull.Through<In, Out>): pull.Through<In, Out>;
declare function pull<In, P1, Out>(t1: pull.Through<In, P1>, t2: pull.Through<P1, Out>): pull.Through<In, Out>;
declare function pull<In, P1, P2, Out>(t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, Out>): pull.Through<In, Out>;
declare function pull<In, P1, P2, P3, Out>(t1: pull.Through<In, P1>, t2: pull.Through<P1, P2>, t3: pull.Through<P2, P3>, t4: pull.Through<P3, Out>): pull.Through<In, Out>;
declare function pull<In, P1, P2, P3, P4, Out>(
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, Out>
): pull.Through<In, Out>;
declare function pull<In, P1, P2, P3, P4, P5, Out>(
    t1: pull.Through<In, P1>,
    t2: pull.Through<P1, P2>,
    t3: pull.Through<P2, P3>,
    t4: pull.Through<P3, P4>,
    t5: pull.Through<P4, P5>,
    t6: pull.Through<P5, Out>
): pull.Through<In, Out>;

declare function pull(...pullStreams: ReadonlyArray<(pull.Source<any> | pull.Sink<any> | pull.Through<any, any>)>): pull.Source<any> | pull.Sink<any> | pull.Through<any, any> | undefined;

declare namespace pull {
    type Source<T> = (endOrError: Error | boolean | null, cb: (endOrError: Error | boolean | null, data: T) => any) => undefined;
    type Sink<T> = (source: Source<T>) => undefined;
    type Through<T, U> = (source: Source<T>) => Source<U>;

    const count: typeof countImport;
    const empty: typeof emptyImport;
    const error: typeof errorImport;
    const infinite: typeof infiniteImport;
    const keys: typeof keysImport;
    const once: typeof onceImport;
    const values: typeof valuesImport;

    const asyncMap: typeof asyncMapImport;
    const filterNot: typeof filterNotImport;
    const filter: typeof filterImport;
    const flatten: typeof flattenImport;
    const map: typeof mapImport;
    const nonUnique: typeof nonUniqueImport;
    const take: typeof takeImport;
    const through: typeof throughImport;
    const unique: typeof uniqueImport;

    const collect: typeof collectImport;
    const concat: typeof concatImport;
    const drain: typeof drainImport;
    const find: typeof findImport;
    const log: typeof logImport;
    const onEnd: typeof onEndImport;
    const reduce: typeof reduceImport;
}

export = pull;
