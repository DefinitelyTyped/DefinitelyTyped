// Type definitions for f1 8.0
// Project: https://github.com/jam3/f1
// Definitions by: Neo <https://github.com/neolwc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface F1Options {
    onState?(...args: any[]): void;
    onUpdate?(...args: any[]): void;

    name: string;

    targets: any;
    states: any;
    transitions: any[];
    parsers: any;
}

interface F1 extends NodeJS.EventEmitter {
    targets(targets: any): F1;
    states(states: any): F1;
    transitions(transitions: any[]): F1;
    parsers(parser: any): F1;
    init(initState: string): F1;

    destroy(): void;
    apply(pathToTarget: string, target: any, parserDefinition: any): void;

    go(state: string, callback?: (state: any, currentState: any) => void): F1;
    set(state: string): F1;
    step(deltaTime: number): F1;
    update(): F1;
}

declare function F1(settings?: F1Options): F1;

export = F1;
