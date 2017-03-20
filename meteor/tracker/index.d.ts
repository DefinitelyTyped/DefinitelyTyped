import { Meteor } from 'meteor/meteor'

export module Tracker {
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
    let currentComputation: Computation;

    let Dependency: DependencyStatic;
    interface DependencyStatic {
        new (): Dependency;
    }
    interface Dependency {
        changed(): void;
        depend(fromComputation?: Computation): boolean;
        hasDependents(): boolean;
    }

    let active: boolean;

    function afterFlush(callback: Function): void;

    function autorun(runFunc: (computation: Computation) => void, options?: {
        onError?: Function;
    }): Computation;

    function flush(): void;

    function nonreactive(func: Function): void;

    function onInvalidate(callback: Function): void;
}
