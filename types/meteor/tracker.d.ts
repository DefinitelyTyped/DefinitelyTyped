declare module "meteor/tracker" {
    module Tracker {
        function Computation(): void;
        interface Computation {
            firstRun: boolean;
            invalidate(): void;
            invalidated: boolean;
            onInvalidate(callback: Function): void;
            onStop(callback: Function): void;
            stop(): void;
            stopped: boolean;
        }
        var currentComputation: Computation;

        var Dependency: DependencyStatic;
        interface DependencyStatic {
            new (): Dependency;
        }
        interface Dependency {
            changed(): void;
            depend(fromComputation?: Computation): boolean;
            hasDependents(): boolean;
        }

        var active: boolean;

        function afterFlush(callback: Function): void;

        function autorun(runFunc: (computation: Computation) => void, options?: {
            onError?: Function;
        }): Computation;

        function flush(): void;

        function nonreactive<T>(func: () => T): T;

        function onInvalidate(callback: Function): void;
    }
}
