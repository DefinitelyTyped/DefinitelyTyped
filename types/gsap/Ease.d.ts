declare namespace gsap {
    class Ease {
        constructor(func?: (...args: any[]) => void, extraParams?: any[], type?: number, power?: number);

        /** Translates the tween's progress ratio into the corresponding ease ratio. */
        getRatio(p: number): number;
    }

    interface EaseLookup {
        find(name: string): Ease;
    }

    class Back extends Ease {
        static easeIn: Back;
        static easeInOut: Back;
        static easeOut: Back;
        config(overshoot: number): Elastic;
    }
    class Bounce extends Ease {
        static easeIn: Bounce;
        static easeInOut: Bounce;
        static easeOut: Bounce;
    }
    class Circ extends Ease {
        static easeIn: Circ;
        static easeInOut: Circ;
        static easeOut: Circ;
    }
    class Cubic extends Ease {
        static easeIn: Cubic;
        static easeInOut: Cubic;
        static easeOut: Cubic;
    }

    class Elastic extends Ease {
        static easeIn: Elastic;
        static easeInOut: Elastic;
        static easeOut: Elastic;
        config(amplitude: number, period: number): Elastic;
    }

    class Expo extends Ease {
        static easeIn: Expo;
        static easeInOut: Expo;
        static easeOut: Expo;
    }

    class Linear extends Ease {
        static ease: Linear;
        static easeIn: Linear;
        static easeInOut: Linear;
        static easeNone: Linear;
        static easeOut: Linear;
    }

    class Quad extends Ease {
        static easeIn: Quad;
        static easeInOut: Quad;
        static easeOut: Quad;
    }

    class Quart extends Ease {
        static easeIn: Quart;
        static easeInOut: Quart;
        static easeOut: Quart;
    }

    class Quint extends Ease {
        static easeIn: Quint;
        static easeInOut: Quint;
        static easeOut: Quint;
    }

    class Sine extends Ease {
        static easeIn: Sine;
        static easeInOut: Sine;
        static easeOut: Sine;
    }

    class SlowMo extends Ease {
        static ease: SlowMo;
        config(linearRatio: number, power: number, yoyoMode: boolean): SlowMo;
    }

    class SteppedEase extends Ease {
        constructor(staps: number);
        config(steps: number): SteppedEase;
    }

    interface RoughEaseConfig {
        clamp?: boolean;
        points?: number;
        randomize?: boolean;
        strength?: number;
        taper?: "in" | "out" | "both" | "none";
        template?: Ease;
    }

    class RoughEase extends Ease {
        static ease: RoughEase;
        constructor(vars: RoughEaseConfig);
        config(steps?: number): RoughEase;
    }

    const Power0: typeof Linear;
    const Power1: typeof Quad;
    const Power2: typeof Cubic;
    const Power3: typeof Quart;
    const Power4: typeof Quint;
    const Strong: typeof Quint;
}
