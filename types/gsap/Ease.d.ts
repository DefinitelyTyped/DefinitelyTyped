declare namespace gsap {
    export class Ease {
        constructor(func?: () => void, extraParams?: any[], type?: number, power?: number);

        /** Translates the tween's progress ratio into the corresponding ease ratio. */
        getRatio(p: number): number;
    }

    export class EaseLookup {
        static find(name: string): Ease;
    }

    export class Back extends Ease {
        static easeIn: Back;
        static easeInOut: Back;
        static easeOut: Back;
        config(overshoot: number): Elastic;

    }
    export class Bounce extends Ease {
        static easeIn: Bounce;
        static easeInOut: Bounce;
        static easeOut: Bounce;
    }
    export class Circ extends Ease {
        static easeIn: Circ;
        static easeInOut: Circ;
        static easeOut: Circ;
    }
    export class Cubic extends Ease {
        static easeIn: Cubic;
        static easeInOut: Cubic;
        static easeOut: Cubic;
    }

    export class Elastic extends Ease {
        static easeIn: Elastic;
        static easeInOut: Elastic;
        static easeOut: Elastic;
        config(amplitude: number, period: number): Elastic;
    }

    export class Expo extends Ease {
        static easeIn: Expo;
        static easeInOut: Expo;
        static easeOut: Expo;
    }

    export class Linear extends Ease {
        static ease: Linear;
        static easeIn: Linear;
        static easeInOut: Linear;
        static easeNone: Linear;
        static easeOut: Linear;
    }

    export class Quad extends Ease {
        static easeIn: Quad;
        static easeInOut: Quad;
        static easeOut: Quad;
    }

    export class Quart extends Ease {
        static easeIn: Quart;
        static easeInOut: Quart;
        static easeOut: Quart;
    }

    export class Quint extends Ease {
        static easeIn: Quint;
        static easeInOut: Quint;
        static easeOut: Quint;
    }

    export class Sine extends Ease {
        static easeIn: Sine;
        static easeInOut: Sine;
        static easeOut: Sine;
    }

    export class SlowMo extends Ease {
        static ease: SlowMo;
        config(linearRatio: number, power: number, yoyoMode: boolean): SlowMo;
    }

    export class SteppedEase extends Ease {
        constructor(staps: number);
        config(steps: number): SteppedEase;
    }

    export interface RoughEaseConfig {
        clamp?: boolean;
        points?: number;
        randomize?: boolean;
        strength?: number;
        taper?: 'in' | 'out' | 'both' | 'none';
        template?: Ease;
    }

    export class RoughEase extends Ease {
        static ease: RoughEase;
        constructor(vars: RoughEaseConfig);
        config(steps?: number): RoughEase;
    }


    export var Power0: typeof Linear;
    export var Power1: typeof Quad;
    export var Power2: typeof Cubic;
    export var Power3: typeof Quart;
    export var Power4: typeof Quint;
    export var Strong: typeof Quint;
}
