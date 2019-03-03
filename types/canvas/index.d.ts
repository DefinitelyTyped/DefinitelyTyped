// Type definitions for canvas 2.3
// Project: https://github.com/Automattic/node-canvas
// Definitions by: Dmitrii Sorin <https://github.com/1999>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface CanvasElement extends HTMLCanvasElement {
    toBuffer(): Buffer;
}

export function createCanvas(width: number, height: number): CanvasElement;
