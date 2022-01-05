// Type definitions for dmx 0.2
// Project: https://github.com/node-dmx/dmx
// Definitions by: Ryan Price <https://github.com/ryprice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace DMX {
    interface DMX {
        addUniverse(name: string, driver: string, deviceId: string, options?: object): Universe;
        update(universe: string, channels: ChannelMap, extraData?: object): void;
        devices: Devices;
    }

    interface Universe {
        update(channels: ChannelMap): void;
    }

    interface Devices {
      [deviceName: string]: Device;
    }

    interface Device {
        channels: string[];
        // Extends Object because it may have other arbitrary properties
        [name: string]: any;
    }

    interface Animation {
        add(to: ChannelMap, duration: number, options?: AnimationStepOptions): Animation;
        delay(duration: number): Animation;
        reset(startTime: number): void;
        run(universe: Universe, onFinish?: () => void): Animation;
        runLoop(universe: Universe, onFinish?: () => void, loops?: number): void;
        stop(): void;
    }

    interface AnimationConstructor {
        new (options?: AnimationOptions): Animation;
    }

    interface AnimationOptions {
        loop?: number;
        filter?: (completedAnimationStatesToSet: any) => boolean;
    }

    interface AnimationStepOptions {
        easing?: EasingTypes;
    }

    type EasingTypes =
        | 'linear'
        | 'inQuad'
        | 'outQuad'
        | 'inOutQuad'
        | 'inCubic'
        | 'outCubic'
        | 'inOutCubic'
        | 'inQuart'
        | 'outQuart'
        | 'inOutQuart'
        | 'inQuint'
        | 'outQuint'
        | 'inOutQuint'
        | 'inSine'
        | 'outSine'
        | 'inOutSine'
        | 'inExpo'
        | 'outExpo'
        | 'inOutExpo'
        | 'inCirc'
        | 'outCirc'
        | 'inOutCirc'
        | 'inElastic'
        | 'outElastic'
        | 'inOutElastic'
        | 'inBack'
        | 'outBack'
        | 'inOutBack'
        | 'inBounce'
        | 'outBounce'
        | 'inOutBounce';

    interface ChannelMap {
      [channel: number]: number;
    }

    interface DMXStatic {
        new (): DMX;
        Animation: AnimationConstructor;
        devices: Devices;
    }

    const DMXStatic: DMXStatic;
}

export = DMX.DMXStatic;
