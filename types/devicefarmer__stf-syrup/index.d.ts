import Bluebird = require("bluebird");

type extractDesRet<RetT> = RetT extends SyrupI<never, never, infer RetX> ? RetX
    : unknown;
type extractBluebirdReturnR<RetT> = RetT extends Bluebird<infer RetX> ? RetX
    : RetT;
declare class SyrupI<
    OptionsT extends object = any, // TODO: find a way to remove any. Maybe we union all the options that are needed for each dependency?
    DepsT extends SyrupI[] = [],
    RetT = unknown,
    DepsRetsT extends unknown[] = [], // TODO: maybe we can extract DepsRetsT somehow?
> {
    constructor(options: OptionsT | null);
    define<
        BodyT extends (options: OptionsT, ...deps: DepsRetsT) => unknown,
    >(
        body: BodyT,
    ): SyrupI<
        OptionsT,
        DepsT,
        extractBluebirdReturnR<ReturnType<typeof body>>,
        DepsRetsT
    >;
    dependency<DepT extends SyrupI<never, never>>(
        dep: DepT,
    ): SyrupI<
        OptionsT,
        [...DepsT, DepT],
        RetT,
        [...DepsRetsT, extractDesRet<DepT>]
    >;
    consume<OptionsT>(
        overrides: OptionsT,
    ): Bluebird<RetT>;
    invoke(overrides: OptionsT, ...args: DepsT[]): RetT;
}

declare function ParallelSyrup(
    options?: object,
): SyrupI;
declare namespace ParallelSyrup {
    const Syrup: SyrupI;
}

declare function SerialSyrup(
    options?: object,
): SyrupI;
declare namespace SerialSyrup {
    const Syrup: SyrupI;
}

declare const Syrup: typeof ParallelSyrup & {
    serial: typeof SerialSyrup;
};
export = Syrup;
