import DMX = require('dmx');
import { EventEmitter } from 'stream';

// test type exports
type Options = DMX.Options;
type UpdateEventExtraData = DMX.UpdateEventExtraData;
type UniverseStatic = DMX.UniverseStatic;
type Universe = DMX.Universe;
type Devices = DMX.Devices;
type Device = DMX.Device;
type Range = DMX.Range;
type OptionRange = DMX.OptionRange;
type SliderRange = DMX.SliderRange;
type AnimationStatic = DMX.AnimationStatic;
type Animation = DMX.Animation;
type AnimationOptions = DMX.AnimationOptions;
type AnimationStepOptions = DMX.AnimationStepOptions;
type EasingType = DMX.EasingType;
type ChannelMap = DMX.ChannelMap;
type NullDriverOptions = DMX.NullDriverOptions;
type SocketioDriverOptions = DMX.SocketioDriverOptions;
type DMX4ALLDriverOptions = DMX.DMX4ALLDriverOptions;
type EnttecUSBDMXPRODriverOptions = DMX.EnttecUSBDMXPRODriverOptions;
type EnttecOpenUsbDMXDriverOptions = DMX.EnttecOpenUsbDMXDriverOptions;
type DMXKingUltraDMXProDriverOptions = DMX.DMXKingUltraDMXProDriverOptions;
type ArtnetDriverOptions = DMX.ArtnetDriverOptions;
type BBDMXDriverOptions = DMX.BBDMXDriverOptions;
type SACNDriverOptions = DMX.SACNDriverOptions;

const dmx = new DMX(); // $ExpectType DMX<Devices>
dmx.devices['briteq-bt-theatre-60FC']; // $ExpectType Device
dmx.devices['eurolite-led-bar']; // $ExpectType Device
dmx.devices['eurolite-led-bar-[6,12]-qcl-rgba-2ch']; // $ExpectType Device
dmx.devices['eurolite-led-bar-[6,12]-qcl-rgba-4ch']; // $ExpectType Device
dmx.devices['eurolite-led-bar-[6,12]-qcl-rgba-5ch']; // $ExpectType Device
dmx.devices['eurolite-led-bar-[6,12]-qcl-rgba-6ch']; // $ExpectType Device
dmx.devices['eurolite-led-bar-[6,12]-qcl-rgba-9ch']; // $ExpectType Device
dmx.devices['eurolite-led-tha-120PC']; // $ExpectType Device
dmx.devices['fungeneration-led-pot-12x1w-qcl-rgbww-4ch']; // $ExpectType Device
dmx.devices['fungeneration-led-pot-12x1w-qcl-rgbww-6ch']; // $ExpectType Device
dmx.devices['fungeneration-led-pot-12x1w-qcl-rgbww-8ch']; // $ExpectType Device
dmx.devices.generic; // $ExpectType Device
dmx.devices['generic-rgb']; // $ExpectType Device
dmx.devices['lalucenatz-led-4ch']; // $ExpectType Device
dmx.devices['lixda-par12-led']; // $ExpectType Device
dmx.devices['oppsk-cob-uv-par']; // $ExpectType Device
dmx.devices['showtec-multidim2']; // $ExpectType Device
dmx.devices['stairville-led-par-56']; // $ExpectType Device
dmx.devices['ultra-pro-24ch-rdm']; // $ExpectType Device
dmx.devices['ultra-pro-6rgbch-rdm']; // $ExpectType Device
dmx.devices.foo; // $ExpectType Device | undefined
dmx.devices.foo && dmx.devices.foo.channels;
dmx.devices.foo && dmx.devices.foo.extraInfo1;

const dmxCustomDevs = new DMX({
    devices: {
        'eurolite-led-tha-120PC': { channels: [] as const, foo: 'bar' },
        baz: { channels: [] as const, foo: 'bar' },
    },
});
dmxCustomDevs.devices['eurolite-led-tha-120PC']; // $ExpectType { channels: readonly []; foo: string; }
dmxCustomDevs.devices['baz']; // $ExpectType { channels: readonly []; foo: string; }
// @ts-expect-error
dmxCustomDevs.devices.generic;

class MyDriver extends EventEmitter implements DMX.Universe {
    constructor(deviceId: string, options: Record<string, unknown>) {
        super();
    }
    start(): void {
        throw new Error('Method not implemented.');
    }
    stop(): void {
        throw new Error('Method not implemented.');
    }
    close(callback: (err: Error | null) => void): void {
        throw new Error('Method not implemented.');
    }
    update(channels: DMX.ChannelMap, extraData?: DMX.UpdateEventExtraData): void {
        throw new Error('Method not implemented.');
    }
    updateAll(value: number): void {
        throw new Error('Method not implemented.');
    }
    get(i: number): number {
        throw new Error('Method not implemented.');
    }
}
dmx.registerDriver('foo', MyDriver); // $ExpectType void

const universe = dmx.addUniverse('foo', 'artnet'); // $ExpectType Universe
dmx.addUniverse('foo', 'artnet', '127.0.0.1'); // $ExpectType Universe
dmx.addUniverse('foo', 'artnet', '127.0.0.1', { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'artnet', '127.0.0.1', { port: 42 }); // $ExpectType Universe
dmx.addUniverse('foo', 'artnet', '127.0.0.1', { universe: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'bbdmx'); // $ExpectType Universe
dmx.addUniverse('foo', 'bbdmx', '127.0.0.1'); // $ExpectType Universe
dmx.addUniverse('foo', 'bbdmx', '127.0.0.1', { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'bbdmx', '127.0.0.1', { port: 42 }); // $ExpectType Universe
dmx.addUniverse('foo', 'dmx4all', '/dev/foo'); // $ExpectType Universe
dmx.addUniverse('foo', 'dmx4all', '/dev/foo', { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'dmxking-ultra-dmx-pro', '/dev/foo'); // $ExpectType Universe
dmx.addUniverse('foo', 'dmxking-ultra-dmx-pro', '/dev/foo', { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'dmxking-ultra-dmx-pro', '/dev/foo', { port: 'A' }); // $ExpectType Universe
dmx.addUniverse('foo', 'dmxking-ultra-dmx-pro', '/dev/foo', { port: 'B' }); // $ExpectType Universe
dmx.addUniverse('foo', 'enttec-open-usb-dmx', '/dev/foo'); // $ExpectType Universe
dmx.addUniverse('foo', 'enttec-open-usb-dmx', '/dev/foo', { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'enttec-usb-dmx-pro', '/dev/foo'); // $ExpectType Universe
dmx.addUniverse('foo', 'enttec-usb-dmx-pro', '/dev/foo', { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'null'); // $ExpectType Universe
dmx.addUniverse('foo', 'null', undefined, { dmx_speed: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'sacn'); // $ExpectType Universe
dmx.addUniverse('foo', 'sacn', undefined, { universe: 1 }); // $ExpectType Universe
dmx.addUniverse('foo', 'socketio'); // $ExpectType Universe
dmx.addUniverse('foo', 'socketio', undefined, { debug: true }); // $ExpectType Universe
dmx.addUniverse('foo', 'socketio', undefined, { port: 42 }); // $ExpectType Universe
dmx.addUniverse('foo', 'bar', 42, { baz: 'quux' }); // $ExpectType Universe

const channelMap = {
    1: 255,
    2: 0,
};
dmx.update('universe-1', channelMap); // $ExpectType void
dmx.update('universe-1', channelMap, { origin: 'foo' }); // $ExpectType void
dmx.update('universe-1', channelMap, { bar: 'baz' }); // $ExpectType void
dmx.updateAll('universe-1', 42); // $ExpectType void
dmx.universeToObject('universe-1'); // $ExpectType { [key: number]: number; }

dmx.addListener('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.addListener('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.on('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.on('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.once('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.once('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.removeListener('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.removeListener('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.off('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.off('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.prependListener('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.prependListener('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.prependOnceListener('update', (universe, channels, extraData) => {
    universe; // $ExpectType string
    channels; // $ExpectType ChannelMap
    extraData; // $ExpectType UpdateEventExtraData | undefined
    extraData!.origin; // $ExpectType string | undefined
    extraData!.foo; // $ExpectType unknown
});
dmx.prependOnceListener('updateAll', (universe, value) => {
    universe; // $ExpectType string
    value; // $ExpectType number
});
dmx.emit('update', 'universe-1', channelMap);
dmx.emit('update', 'universe-1', channelMap, {});
dmx.emit('updateAll', 'universe-1', 42);

universe.start(); // $ExpectType void
universe.stop(); // $ExpectType void
// $ExpectType void
universe.close(err => {
    err; // $ExpectType Error | null
});
universe.update(channelMap); // $ExpectType void
universe.update(channelMap, { origin: 'foo' }); // $ExpectType void
universe.updateAll(42); // $ExpectType void
universe.get(1); // $ExpectType number

const animation = new DMX.Animation(); // $ExpectType Animation
new DMX.Animation({ loop: 42 }); // $ExpectType Animation
// $ExpectType Animation
new DMX.Animation({
    filter: completedAnimationStatesToSet => {
        completedAnimationStatesToSet; // $ExpectType ChannelMap
        return true;
    },
});

animation.add(channelMap, 1); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inBack' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inBounce' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inCirc' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inCubic' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inElastic' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inExpo' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutBack' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutBounce' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutCirc' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutCubic' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutElastic' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutExpo' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutQuad' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutQuart' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutQuint' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inOutSine' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inQuad' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inQuart' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inQuint' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'inSine' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'linear' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outBack' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outBounce' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outCirc' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outCubic' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outElastic' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outExpo' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outQuad' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outQuart' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outQuint' }); // $ExpectType Animation
animation.add(channelMap, 1, { easing: 'outSine' }); // $ExpectType Animation
animation.delay(42); // $ExpectType Animation
animation.run(universe); // $ExpectType void
animation.run(universe, () => {}); // $ExpectType void
animation.runLoop(universe); // $ExpectType Animation
animation.runLoop(universe, () => {}); // $ExpectType Animation
animation.runLoop(universe, () => {}, 42); // $ExpectType Animation
animation.stop(); // $ExpectType void

dmx.devices.generic.channels; // $ExpectType readonly string[]
dmx.devices.generic.channelgroups; // $ExpectType readonly string[] | undefined
dmx.devices.generic.ranges!.ctrl; // $ExpectType OptionRange | undefined
dmx.devices.generic.ranges!.dimmer; // $ExpectType SliderRange | undefined
dmx.devices.generic.ranges!['color-pretsets']; // $ExpectType OptionRange | undefined
dmx.devices.generic.ranges!['colour-macros-programme-01']; // $ExpectType OptionRange | undefined
dmx.devices.generic.ranges!['programme-selection']; // $ExpectType OptionRange | undefined
dmx.devices.generic.ranges!['static-color']; // $ExpectType OptionRange | undefined
dmx.devices.generic.ranges!.strobe; // $ExpectType OptionRange | undefined
dmx.devices.generic.ranges!.temperature; // $ExpectType OptionRange | undefined
