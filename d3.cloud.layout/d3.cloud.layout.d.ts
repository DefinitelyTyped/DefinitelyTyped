﻿// Type definitions for d3JS cloud layout plugin by Jason Davies
// Project: https://github.com/jasondavies/d3-cloud
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../d3/d3.d.ts" />

declare namespace d3 {
    namespace layout {
        export function cloud(): Cloud<cloud.Word>;
        export function cloud<T extends cloud.Word>(): Cloud<T>;

        namespace cloud {
            interface Word {
                text?: string;
                font?: string;
                style?: string;
                weight?: string | number;
                rotate?: number;
                size?: number;
                padding?: number;
                x?: number;
                y?: number;
            }
        }

        interface Cloud<T extends cloud.Word> {
            start(): Cloud<T>;
            stop(): Cloud<T>;

            timeInterval(): number;
            timeInterval(interval: number): Cloud<T>;

            words(): T[];
            words(words: T[]): Cloud<T>;

            size(): [number, number];
            size(size: [number, number]): Cloud<T>;

            font(): (datum: T, index: number) => string;
            font(font: string): Cloud<T>;
            font(font: (datum: T, index: number) => string): Cloud<T>;

            fontStyle(): (datum: T, index: number) => string;
            fontStyle(style: string): Cloud<T>;
            fontStyle(style: (datum: T, index: number) => string): Cloud<T>;

            fontWeight(): (datum: T, index: number) => string | number;
            fontWeight(weight: string | number): Cloud<T>;
            fontWeight(weight: (datum: T, index: number) => string | number): Cloud<T>;

            rotate(): (datum: T, index: number) => number;
            rotate(rotate: number): Cloud<T>;
            rotate(rotate: (datum: T, index: number) => number): Cloud<T>;

            text(): (datum: T, index: number) => string;
            text(text: string): Cloud<T>;
            text(text: (datum: T, index: number) => string): Cloud<T>;

            spiral(): (size: number) => (t: number) => [number, number];
            spiral(name: string): Cloud<T>;
            spiral(spiral: (size: number) => (t: number) => [number, number]): Cloud<T>;

            fontSize(): (datum: T, index: number) => number;
            fontSize(size: number): Cloud<T>;
            fontSize(size: (datum: T, index: number) => number): Cloud<T>;

            padding(): (datum: T, index: number) => number;
            padding(padding: number): Cloud<T>;
            padding(padding: (datum: T, index: number) => number): Cloud<T>;

            on(type: "word", listener: (word: T) => void): Cloud<T>;
            on(type: "end", listener: (tags: T[], bounds: { x: number; y: number }[]) => void): Cloud<T>;
            on(type: string, listener: (...args: any[]) => void): Cloud<T>;

            on(type: "word"): (word: T) => void;
            on(type: "end"): (tags: T[], bounds: { x: number; y: number }[]) => void;
            on(type: string): (...args: any[]) => void;
        }
    }
}
