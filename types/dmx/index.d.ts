/// <reference types="node" />
import { EventEmitter } from "stream";

export = DMX;

/**
 * This class is used to tie multiple universes together.
 */
declare class DMX<TDevices extends { [key in string]?: DMX.Device } = DMX.Devices> extends EventEmitter {
    static Animation: DMX.AnimationStatic;
    static devices: DMX.Devices;

    devices: TDevices;

    /**
     * Create a new DMX instance.
     */
    constructor(options?: DMX.Options<TDevices>);

    /**
     * Register a new DMX Driver module by its name.
     * These drivers are currently registered by default:
     *
     * - `null`: a development driver that prints the universe to stdout
     * - `socketio`: a driver which sends out the universe via socket.IO as an array
     *   (see [demo_socket_client.js](./demo_socket_client.js) as a client example)
     * - `artnet`: driver for EnttecODE
     * - `bbdmx`: driver for [BeagleBone-DMX](https://github.com/boxysean/beaglebone-DMX)
     * - `dmx4all`: driver for DMX4ALL devices like the "NanoDMX USB Interface"
     * - `enttec-usb-dmx-pro`: a driver for devices using a Enttec USB DMX Pro chip like the "DMXKing ultraDMX Micro".
     * - `enttec-open-usb-dmx`: driver for "Enttec Open DMX USB". This device is NOT recommended, there are known
     *   hardware limitations and this driver is not very stable. (If possible better obtain a device with the
     *   "pro" chip)
     * - `dmxking-ultra-dmx-pro`: driver for the DMXKing Ultra DMX pro interface. This driver supports multiple
     *   universes, specify the options with Port = A or B
     */
    registerDriver(name: string, module: DMX.UniverseStatic): void;
    /**
     * Add a new DMX Universe with a name, driver and an optional device_id used by the driver to identify the device.
     * For `enttec-usb-dmx-pro` and `enttec-open-usb-dmx` `device_id` is the path the the serial device. For `artnet`
     * it is the target ip.
     *
     * @param options Driver specific options.
     */
    addUniverse(name: string, driver: "null", deviceId?: undefined, options?: DMX.NullDriverOptions): DMX.Universe;
    addUniverse(
        name: string,
        driver: "socketio",
        deviceId?: undefined,
        options?: DMX.SocketioDriverOptions,
    ): DMX.Universe;
    addUniverse(name: string, driver: "dmx4all", deviceId: string, options?: DMX.DMX4ALLDriverOptions): DMX.Universe;
    addUniverse(
        name: string,
        driver: "enttec-usb-dmx-pro",
        deviceId: string,
        options?: DMX.EnttecUSBDMXPRODriverOptions,
    ): DMX.Universe;
    addUniverse(
        name: string,
        driver: "enttec-open-usb-dmx",
        deviceId: string,
        options?: DMX.EnttecOpenUsbDMXDriverOptions,
    ): DMX.Universe;
    addUniverse(
        name: string,
        driver: "dmxking-ultra-dmx-pro",
        deviceId: string,
        options?: DMX.DMXKingUltraDMXProDriverOptions,
    ): DMX.Universe;
    addUniverse(name: string, driver: "artnet", deviceId?: string, options?: DMX.ArtnetDriverOptions): DMX.Universe;
    addUniverse(name: string, driver: "bbdmx", deviceId?: string, options?: DMX.BBDMXDriverOptions): DMX.Universe;
    addUniverse(name: string, driver: "sacn", deviceId?: undefined, options?: DMX.SACNDriverOptions): DMX.Universe;
    addUniverse(name: string, driver: string, deviceId: unknown, options?: object): DMX.Universe;
    /**
     * Update one or multiple channels of a universe. Also emits an `update` event with the same information.
     *
     * @param universe Name of the universe.
     * @param channels Keys are channel numbers, values the values to set that channel to.
     * @param extraData This data will be passed unmodified to the `update` Event.
     */
    update(universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData): void;
    updateAll(universe: string, value: number): void;
    universeToObject(universe: string): { [key: number]: number };

    addListener(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    addListener(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    on(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    on(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    once(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    once(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    once(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    removeListener(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    off(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    off(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    off(eventName: string | symbol, listener: (...args: any[]) => void): this;
    emit(eventName: "update", universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData): this;
    emit(eventName: "updateAll", universe: string, value: number): this;
    emit(eventName: string | symbol, ...args: any[]): boolean;
    prependListener(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    prependListener(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(
        eventName: "update",
        listener: (universe: string, channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData) => void,
    ): this;
    prependOnceListener(eventName: "updateAll", listener: (universe: string, value: number) => void): this;
    prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
}

declare namespace DMX {
    interface Options<TDevices extends { [key in string]?: Device } = Devices> {
        devices?: TDevices | undefined;
    }

    interface UpdateEventExtraData {
        origin?: string;
        [key: string]: unknown;
    }

    interface UniverseStatic {
        new(deviceId: any, options: {}): Universe;
    }

    interface Universe extends EventEmitter {
        start(): void;
        stop(): void;
        close(callback: (err: Error | null) => void): void;
        update(channels: ChannelMap, extraData?: UpdateEventExtraData): void;
        updateAll(value: number): void;
        get(i: number): number;
    }

    /**
     * A JSON Object describing some Devices and how many channels they use.
     *
     * The following Devices are known:
     * - `generic` - a one channel dimmer
     * - `showtec-multidim2` - 4 channel dimmer with 4A per channel
     * - `eurolite-led-bar` - Led bar with 3 RGB color segments and some programs
     * - `stairville-led-par-56` - RGB LED Par Can with some programs
     */
    type Devices = {
        generic: Device;
        "generic-rgb": Device;
        "showtec-multidim2": Device;
        "eurolite-led-bar": Device;
        "stairville-led-par-56": Device;
        "ultra-pro-24ch-rdm": Device;
        "ultra-pro-6rgbch-rdm": Device;
        "oppsk-cob-uv-par": Device;
        "lixda-par12-led": Device;
        "eurolite-led-tha-120PC": Device;
        "briteq-bt-theatre-60FC": Device;
        "lalucenatz-led-4ch": Device;
        "fungeneration-led-pot-12x1w-qcl-rgbww-4ch": Device;
        "fungeneration-led-pot-12x1w-qcl-rgbww-6ch": Device;
        "fungeneration-led-pot-12x1w-qcl-rgbww-8ch": Device;
        "eurolite-led-bar-[6,12]-qcl-rgba-2ch": Device;
        "eurolite-led-bar-[6,12]-qcl-rgba-4ch": Device;
        "eurolite-led-bar-[6,12]-qcl-rgba-5ch": Device;
        "eurolite-led-bar-[6,12]-qcl-rgba-6ch": Device;
        "eurolite-led-bar-[6,12]-qcl-rgba-9ch": Device;
    } & { [deviceName in string]?: Device };

    interface Device {
        channels: readonly string[];
        ranges?:
            & {
                ctrl?: OptionRange | undefined;
                dimmer?: SliderRange | undefined;
                "static-color"?: OptionRange | undefined;
                "programme-selection"?: OptionRange | undefined;
                "colour-macros-programme-01"?: OptionRange | undefined;
                strobe?: OptionRange | undefined;
                "color-pretsets"?: OptionRange | undefined;
                temperature?: OptionRange | undefined;
            }
            & {
                [key in string]?: Range | undefined;
            };
        channelgroups?: readonly string[];
        [name: string]: unknown;
    }

    type Range = OptionRange | SliderRange;

    interface OptionRange {
        type: "option";
        options: ReadonlyArray<{ value: number; label: string }>;
    }

    interface SliderRange {
        type: "slider";
        min: number;
        max: number;
    }

    interface AnimationStatic {
        /**
         * Create a new DMX Animation instance. This can be chained similar to jQuery.
         */
        new(options?: AnimationOptions): Animation;
    }

    interface Animation {
        /**
         * Add an animation Step.
         *
         * @param to keys are channel numbers, values the values to set that channel to
         * @param duration duration in ms
         */
        add(to: ChannelMap, duration: number, options?: AnimationStepOptions): this;
        /**
         * Delay the next animation step for duration.
         *
         * @param duration duration in ms
         */
        delay(duration: number): this;
        /**
         * Run the Animation on the specified universe.
         *
         * @param universe reference to the universe driver
         * @param onFinish called when the animation is done
         */
        run(universe: Universe, onFinish?: () => void): void;
        /**
         * Runs an animation constantly until `animation.stop()` is called.
         *
         * @param universe reference to the universe driver
         * @param onFinish called when the animation is done
         * @param loops max number of times this animation sequence will loop
         *
         * @example
         * // The example below shows a value being animated for 5 seconds.
         * const animation = new DMX.Animation()
         *   .add({ 1: 255 }, 100)
         *   .add({ 1: 0 }, 100)
         *   .runLoop(universe);
         *
         * setTimeout(() => {
         *   animation.stop()
         * }, 5000)
         */
        runLoop(
            universe: Universe,
            onFinish?: () => void,
            /** @default Infinity */
            loops?: number,
        ): this;
        /**
         * Stop a running animation.
         */
        stop(): void;
    }

    interface AnimationOptions {
        /**
         * The number of times this animation sequence will loop when `run()` is invoked. This value is overridden
         * if you invoke `runLoop()`.
         */
        loop?: number;
        /**
         * Allows you to read or modify the values being set to each channel during each animation step.
         *
         * You may modify the values of `completedAnimationStatesToSet` to override the values in real-time,
         * for example to scale channel brightness based on a master fader.
         */
        filter?: (completedAnimationStatesToSet: ChannelMap) => boolean;
    }

    interface AnimationStepOptions {
        /**
         * @default 'linear'
         */
        easing?: EasingType;
    }

    type EasingType =
        | "linear"
        | "inQuad"
        | "outQuad"
        | "inOutQuad"
        | "inCubic"
        | "outCubic"
        | "inOutCubic"
        | "inQuart"
        | "outQuart"
        | "inOutQuart"
        | "inQuint"
        | "outQuint"
        | "inOutQuint"
        | "inSine"
        | "outSine"
        | "inOutSine"
        | "inExpo"
        | "outExpo"
        | "inOutExpo"
        | "inCirc"
        | "outCirc"
        | "inOutCirc"
        | "inElastic"
        | "outElastic"
        | "inOutElastic"
        | "inBack"
        | "outBack"
        | "inOutBack"
        | "inBounce"
        | "outBounce"
        | "inOutBounce";

    interface ChannelMap {
        [channel: number]: number;
    }

    interface NullDriverOptions {
        /** @default 1 */
        dmx_speed?: number | undefined;
    }

    interface SocketioDriverOptions {
        /** @default 18909 */
        port?: number | undefined;
        /** @default false */
        debug?: boolean | undefined;
    }

    interface DMX4ALLDriverOptions {
        /** @default 33 */
        dmx_speed?: number | undefined;
    }

    interface EnttecUSBDMXPRODriverOptions {
        /** @default 40 */
        dmx_speed?: number | undefined;
    }

    interface EnttecOpenUsbDMXDriverOptions {
        /** @default 1000 / 46 */
        dmx_speed?: number | undefined;
    }

    interface DMXKingUltraDMXProDriverOptions {
        /** @default 40 */
        dmx_speed?: number | undefined;
        /** @default undefined */
        port?: "A" | "B" | undefined;
    }

    interface ArtnetDriverOptions {
        /** @default 1000 / 24 */
        dmx_speed?: number | undefined;
        /** @default 0 */
        universe?: number | undefined;
        /** @default 6454 */
        port?: number;
    }

    interface BBDMXDriverOptions {
        /** @default 1000 / 24 */
        dmx_speed?: number | undefined;
        /** @default 9930 */
        port?: number;
    }

    interface SACNDriverOptions {
        /** @default 1 */
        universe?: number | undefined;
    }
}
