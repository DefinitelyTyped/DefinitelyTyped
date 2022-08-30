// Type definitions for metro-babel-transformer 0.66
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CustomTransformOptions {
    [key: string]: unknown;
    __proto__: null;
}

export type TransformProfile = 'default' | 'hermes-stable' | 'hermes-canary';
