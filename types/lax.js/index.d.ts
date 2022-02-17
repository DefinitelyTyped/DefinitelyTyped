// Type definitions for lax.js 2.0
// Project: https://github.com/alexfoxy/lax.js
// Definitions by: Spence DiNicolantonio <https://github.com/SpenceDiNicolantonio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Lax {
    drivers: LaxDriver[];
    elements: Node[];
    frame: number;
    debug: boolean;
    windowWidth: number;
    windowHeight: number;
    presets: LaxPresets;

    init: () => void;
    onWindowResize: () => void;
    onAnimationFrame: (event: AnimationEvent) => void;
    addDriver: (name: string, getValueFn: GetValueFunction, options?: LaxDriverOptions) => void;
    removeDriver: (name: string) => void;
    findAndAddElements: () => void;
    addElements: (selector: string, transforms: LaxTransforms, options?: LaxElementOptions) => void;
    removeElements: (selector: string) => void;
    addElement: (domElement: Node, transforms: LaxTransforms, options?: LaxElementOptions) => void;
    removeElement: (domElement: Node) => void;
}

export interface LaxDriver {
    getValueFn: GetValueFunction;
    name: string;
    lastValue: number;
    frameStep: number;
    m1: number;
    m2: number;
    inertia: number;
    inertiaEnabled: boolean;
    getValue: (frame: number) => [number, number];
}

export interface LaxDriverOptions {
    inertiaEnabled: boolean;
    frameStep: number;
}

export interface LaxElementOptions {
    style?: { [name: string]: string };
    elements?: Node[];
    onUpdate?: (driverValues: DriverValues, domElement: Node) => void;
}

export interface DriverValues {
    [key: string]: number;
}

export interface LaxTransforms {
    [driverName: string]: LaxTransform;
}

export type LaxTransform = {
    [styleBinding in CssProperty]?: [LaxValueMap, LaxValueMap, LaxTransformOptions?];
};

export interface LaxTransformOptions {
    modValue?: number;
    frameStep?: number;
    easing?: string;
    inertia?: number;
    inertiaMode?: 'normal' | 'absolute';
    cssFn?: (value: number, domElement: Node) => number | string;
    cssUnit?: string;
}

export type GetValueFunction = (frame: number) => number;

export type LaxPreset = (y: LaxValue, str: LaxValue) => LaxTransform;
export type LaxPresets = {
    [name in PresetName]?: LaxPreset;
};

export type LaxValueMap = LaxValue[];
export type LaxValue = number | TransformValue;

export type TransformValue =
    | 'screenWidth'
    | 'screenHeight'
    | 'pageWidth'
    | 'pageHeight'
    | 'elWidth'
    | 'elHeight'
    | 'elInY'
    | 'elOutY'
    | 'elCenterY'
    | 'elInX'
    | 'elOutX'
    | 'elCenterX'
    | 'index';

export type CssProperty =
    | 'opacity'
    | 'scaleX'
    | 'scaleY'
    | 'scale'
    | 'skewX'
    | 'skewY'
    | 'skew'
    | 'rotateX'
    | 'rotateY'
    | 'rotate'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'blur'
    | 'hue-rotate'
    | 'brightness';

export type PresetName =
    | 'fadeInOut'
    | 'fadeIn'
    | 'fadeOut'
    | 'blurInOut'
    | 'blurIn'
    | 'blurOut'
    | 'scaleInOut'
    | 'scaleIn'
    | 'scaleOut'
    | 'slideX'
    | 'slideY'
    | 'spin'
    | 'flipX'
    | 'flipY'
    | 'jiggle'
    | 'seesaw'
    | 'zigzag'
    | 'hueRotate';

export const lax: Lax;
