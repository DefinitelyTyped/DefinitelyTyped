/// <reference types="node"/>

export interface AccelerometerOption {
    board?: Board | undefined;
    controller: string;
}

export interface AccelerometerGeneralOption {
    controller?: string | undefined;
}

export interface AccelerometerAnalogOption extends AccelerometerGeneralOption {
    pins: string[];
    sensitivity?: number | undefined;
    aref?: number | undefined;
    zeroV?: number | number[] | undefined;
    autoCalibrate?: boolean | undefined;
}

export interface AccelerometerMPU6050Option extends AccelerometerGeneralOption {
    sensitivity?: number | undefined;
}

export interface AccelerometerMMA7361Option extends AccelerometerGeneralOption {
    sleepPin?: number | string | undefined;
}

export class Accelerometer {
    constructor(
        option:
            | AccelerometerGeneralOption
            | AccelerometerAnalogOption
            | AccelerometerMPU6050Option
            | AccelerometerMMA7361Option,
    );

    id: string;
    zeroV: number;
    pins: string[];
    readonly pitch: number;
    readonly roll: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly acceleration: number;
    readonly inclination: number;
    readonly orientation: number;

    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (freq: any) => void): this;
    hasAxis(name: string): void;
    enable(): void;
    disable(): void;
}

export interface AltimeterOption {
    board?: Board | undefined;
    controller: string;
    address?: number | undefined;
    freq?: number | undefined;
    elevation?: number | undefined;
}

export class Altimeter {
    constructor(option: AltimeterOption);

    id: string;
    readonly feet: number;
    readonly meters: number;

    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: any) => void): this;
}

export class Animation {
    constructor(option: Servo | Servo[]);

    target: number;
    duration: number;
    cuePoints: number[];
    keyFrames: number;
    easing: string;
    loop: boolean;
    loopback: number;
    metronomic: boolean;
    progress: number;
    currentSpeed: number;
    fps: number;

    enqueue(segment: any): void;
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    speed(speed: number[]): void;
}

export interface BoardOption {
    id?: number | string | undefined;
    port?: string | any | undefined;
    repl?: boolean | undefined;
    debug?: boolean | undefined;
    timeout?: number | undefined;
    io?: any;
}

export interface BoardLogEvent {
    type: "info" | "warn" | "fail";
    timestamp: number;
    class: string;
    message: string;
}

export type SupportedBarometers = "BMP180" | "BMP280" | "BME280" | "MPL115A2" | "MPL3115A2" | "MS5611";

export interface BarometerGenericArgs {
    controller: SupportedBarometers;
    address?: number;
    freq?: number;
}

export interface BarometerBMP180Args {
    controller: "BMP180";
    mode: 1 | 2 | 3;
}

export class Barometer {
    constructor(args: BarometerGenericArgs | BarometerBMP180Args);
    /** Pressure is a string because somehow it's been fixed using {@link Number.toFixed} which returns a string. */
    pressure: string;
    on(
        event: "change" | "data",
        cb: (data: {
            /** Pressure is a string because somehow it's been fixed using {@link Number.toFixed} which returns a string. */
            pressure: string;
        }) => void,
    ): this;
}

export class Board {
    constructor(option?: BoardOption);
    io: any;
    id: string;
    repl: Repl;
    isReady: boolean;
    pins: Record<number, Pin>;
    port: string;

    on(event: "close" | "connect" | "exit" | "ready", cb: () => void): this;
    on(event: "error", cb: (error: Error) => void): this;
    on(event: "info" | "message" | "warn" | "fail", cb: (event: BoardLogEvent) => void): this;
    pinMode(pin: number | string, mode: PinMode): void;
    analogWrite(pin: number | string, value: number): void;
    analogRead(pin: number | string, cb: (item: number) => void): void;
    digitalWrite(pin: number | string, value: number): void;
    digitalRead(pin: number | string, cb: (item: number) => void): void;
    servoWrite(pin: number | string, angle: number): void;
    shiftOut(dataPin: Pin, clockPin: Pin, isBigEndian: boolean, value: number): void;
    wait(ms: number, cb: () => void): void;
    loop(ms: number, cb: () => void): void;
    samplingInterval(ms: number): void;
}

export class Boards<BoardsIDs extends BoardIdsListType, BoardsConfig extends BoardConfigListType> {
    /**
     * This class allows managing multiple boards at the same time.
     *
     * @param boardsIDs - Some IDs to match connected boards, associated serial/COM port is auto-guessed by `johnny-five`.
     *
     * **HINT** : Use `as const` to fix the type and take profit of auto-completion and strong typings. Otherwise TypeScript is not aware that the array won't be modified later.
     *
     * Example :
     * ```ts
     * const boards = new Boards(["UNO"] as const);
     * ```
     */
    constructor(boardsIDs: BoardsIDs);

    /**
     * This class allows managing multiple boards at the same time.
     *
     * @param boardsIDs - Some IDs to match connected boards, if not provided associated serial/COM port is auto-guessed by `johnny-five`.
     *
     * **HINT** : Use `as const` to fix the type and take profit of auto-completion and strong typings. Otherwise TypeScript is not aware that the array won't be modified later.
     *
     * Example :
     * ```ts
     * const boards = new Boards([{id: "UNO"}] as const);
     * ```
     */
    // tslint:disable-next-line:unified-signatures
    constructor(boardsConfig: BoardsConfig);

    /**
     * Listen for ready to work status !
     *
     * @param event - `ready` When the boards are ready to operate on external components this event is triggered.
     * @param cb - The callback is filled with a map of boards with their names.
     */
    on(
        event: "ready",
        cb: (boards: IDBoardMap<BoardsIDs[number]> | IDBoardMap<BoardsConfig[number]["id"]>) => void,
    ): this;

    /** This function allows to iterate on all boards */
    each(cb: (board: Board) => void): this;

    /**
     * Search for a board using its ID, given the typing you can't be wrong so it always returns a {@Link Board}.
     */
    byId(id: BoardsIDs[number]): Board | null;

    /**
     * Search for a board using its ID, given the typing you can't be wrong so it always returns a {@Link Board}
     */
    byId(id: BoardsConfig[number]["id"]): Board;
}

export type BoardIdsListType = readonly string[];

export type BoardConfigListType = ReadonlyArray<{
    readonly id: string;
    readonly port?: string;
    readonly repl?: boolean;
    readonly debug?: boolean;
    readonly timeout?: number;
    readonly io?: any;
}>;

export type IDBoardMap<ID extends string> = Record<ID, Board>;

export interface ButtonOption {
    board?: Board | undefined;
    pin: number | string;
    invert?: boolean | undefined;
    isPullup?: boolean | undefined;
    isPulldown?: boolean | undefined;
    holdtime?: number | undefined;
}

export class Button {
    constructor(pin: number | string | ButtonOption);

    id: string;
    pin: number | string;
    downValue: number;
    upValue: number;
    holdtime: number;

    on(event: "hold", cb: (holdTime: number) => void): this;
    on(event: "down" | "press" | "up" | "release", cb: () => void): this;
}

export interface CollectionPinOptions {
    pins: Array<string | number>;
    [key: string]: any;
}

export class Collection<Base = {}> {
    static installMethodForwarding(target: object, source: object): object;

    constructor(options: Array<number | string | object> | CollectionPinOptions);

    type?: Base | undefined;

    add(...args: Array<number | object>): number;

    each(callback: (item: Base, index: number) => void): this;

    forEach(callback: (item: Base, index: number) => void): this;

    includes(item: Base): boolean;

    indexOf(item: Base): number;

    map<T>(callback: (item: Base, index: number) => void): T[];

    slice(begin?: number, end?: number): Collection<Base>;

    byId(id: any): Base | undefined;
}

export interface CompassOption {
    board?: Board | undefined;
    controller: string;
    gauss?: number | undefined;
}

export class Compass {
    constructor(option: CompassOption);

    readonly heading: number;
    readonly bearing: {
        name: string;
        abbr: string;
        low: number;
        high: number;
        heading: number;
    };

    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface ESCOption {
    board?: Board | undefined;
    pin: number | string;
    pwmRange?: number[] | undefined;
    address?: string | undefined;
    controller?: "PCA9685" | "DEFAULT" | undefined;
    device?: "FORWARD" | "FORWARD_REVERSE" | "FORWARD_REVERSE_BRAKE" | undefined;
    neutral?: number | undefined;
}

export class ESC {
    static Collection: ESCs;

    constructor(option: number | string | ESCOption);

    id: string;
    pin: number | string;
    pwmRange: number[];
    readonly value: number;

    throttle(value: number): this;
    brake(): this;
}

export class ESCs extends Collection<ESC> {
    constructor(option: Array<number | string | ESCOption>);

    throttle(value: number): this;
    brake(): this;
}
export namespace Fn {
    function constrain(value: number, lower: number, upper: number): number;
    function inRange(value: number, lower: number, upper: number): boolean;
    function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
    function fmap(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
    function range(lower: number, upper: number, tick: number): number[];
    function scale(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
    function fscale(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
    function sum(values: number[]): number;
    function toFixed(number: number, digits: number): string;
    function uid(): string;
    function bitSize(n: number): number;
    function bitValue(bit: number): number;
    function int16(msb: number, lsb: number): number;
    function uint16(msb: number, lsb: number): number;
    function int24(b16: number, b8: number, b0: number): number;
    function uint24(b16: number, b8: number, b0: number): number;
    function int32(b24: number, b16: number, b8: number, b0: number): number;
    function uint32(b24: number, b16: number, b8: number, b0: number): number;
}

export interface GyroGeneralOption {
    board?: Board | undefined;
    controller?: string | undefined;
}

export interface GyroAnalogOption extends GyroGeneralOption {
    pins: string[];
    sensitivity: number;
    resolution?: number | undefined;
}

export interface GyroMPU6050Option extends GyroGeneralOption {
    sensitivity: number;
}

export class Gyro {
    constructor(option: GyroGeneralOption | GyroAnalogOption | GyroMPU6050Option);

    id: string;
    pins: string[];
    readonly isCalibrated: boolean;
    readonly pitch: any;
    readonly roll: any;
    readonly yaw: any;
    readonly rate: any;
    readonly x: number;
    readonly y: number;
    readonly z: number;

    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
    recalibrate(): void;
}

export interface HygrometerOption {
    board?: Board | undefined;
    controller?: string | undefined;
    freq?: number | undefined;
}

export class Hygrometer {
    constructor(option: HygrometerOption);

    id: string;
    readonly relativeHumidity: number;
    readonly RH: number;

    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

// tslint:disable-next-line:interface-name
export interface IMUGeneralOption {
    controller?: string | undefined;
    freq?: number | undefined;
}

// tslint:disable-next-line:interface-name
export interface IMUMPU6050Option extends IMUGeneralOption {
    address: number;
}

export class IMU {
    constructor(option: IMUGeneralOption | IMUMPU6050Option);

    readonly accelerometer: Accelerometer;
    readonly compass: Compass;
    readonly gyro: Gyro;
    readonly orientation: Orientation;
    readonly thermometer: Thermometer;

    on(event: "change" | "calibrated", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface ReflectanceArrayOption {
    pins: Array<number | string>;
    emitter: number | string;
    freq?: number;
}

export interface LoadCalibrationOption {
    min: number[];
    max: number[];
}

export class ReflectanceArray {
    constructor(opts: ReflectanceArrayOption);

    id: string;
    pins: Array<number | string>;
    readonly isOn: boolean;
    readonly isCalibrated: boolean;
    readonly isOnLine: boolean;
    readonly sensors: Sensor[];
    readonly calibration: any;
    readonly raw: any[];
    readonly values: number | number[];
    readonly line: number;

    enable(): void;
    disable(): void;
    calibrate(): void;
    calibrateUntil(predicate: () => void): void;
    loadCalibration(option: LoadCalibrationOption): void;
    on(event: "data" | "calibratedData" | "line", cb: (data: unknown) => void): this;
}

export interface JoystickOption {
    board?: Board | undefined;
    pins: string[];
    invert?: boolean | undefined;
    invertX?: boolean | undefined;
    invertY?: boolean | undefined;
}

export class Joystick {
    constructor(option: JoystickOption);

    id: string;
    readonly x: number;
    readonly y: number;
    axis: number[];
    raw: number[];

    on(event: "data", cb: (data: unknown) => void): this;
    on(event: "change", cb: () => void): this;
    on(event: "axismove", cb: (error: Error, date: Date) => void): this;
}

export interface LCDGeneralOption {
    board?: Board | undefined;
    rows?: number | undefined;
    cols?: number | undefined;
}

export interface LCDI2COption extends LCDGeneralOption {
    controller: string;
    backlight?: number | undefined;
}

export interface LCDParallelOption extends LCDGeneralOption {
    pins: any[];
    backlight?: number | undefined;
}

export class LCD {
    constructor(option: LCDGeneralOption | LCDI2COption | LCDParallelOption);

    id: string;
    rows: number;
    cols: number;

    print(message: string): this;
    useChar(char: string): this;
    clear(): this;
    cursor(row: number, col: number): this;
    home(): this;
    on(): this;
    off(): this;
    display(): this;
    noDisplay(): this;
    blink(): this;
    noBlink(): this;
    autoscroll(): this;
    noAutoscroll(): this;
    bgColor(color: any): this;
    noBacklight(): this;
    backlight(): this;
}

export interface LedOption {
    board?: Board | undefined;
    pin: number | string;
    type?: string | undefined;
    controller?: string | undefined;
    address?: number | undefined;
    isAnode?: boolean | undefined;
}

export class Led {
    constructor(option: LedOption["pin"] | LedOption);

    animation: Animation;
    id: string;
    isOn: boolean;
    isRunning: boolean;
    mode: Pin["mode"];
    pin: number;
    value: number;

    blink(ms?: number, callback?: () => void): this;
    blink(callback?: () => void): this;
    brightness(val: number): this;
    fade(brightness: number, ms?: number, callback?: () => void): this;
    fadeIn(ms?: number, callback?: () => void): this;
    fadeOut(ms?: number, callback?: () => void): this;
    off(): this;
    on(): this;
    pulse(ms?: number, callback?: () => void): this;
    stop(): this;
    strobe(ms?: number, callback?: () => void): this;
    strobe(callback?: () => void): this;
    toggle(): this;
}

export namespace Led {
    interface DigitsOption {
        board?: Board | undefined;
        pins: any;
        devices?: number | undefined;
        controller?: string | undefined;
    }

    class Digits {
        constructor(option: DigitsOption);

        readonly isMatrix: boolean;
        readonly devices: number;
        digitOrder: number;

        on(index?: number): void;
        off(index?: number): void;
        clear(index?: number): void;
        brightness(value: number): void;
        // tslint:disable-next-line:unified-signatures
        brightness(index: number, value: number): void;
        draw(position: number, character: number): void;
        // tslint:disable-next-line:unified-signatures
        draw(index: number, position: number, character: number): void;
    }

    interface MatrixOption {
        board?: Board | undefined;
        pins: any;
        devices?: number | undefined;
    }

    interface MatrixIC2Option {
        board?: Board | undefined;
        controller: string;
        addresses?: any[] | undefined;
        isBicolor?: boolean | undefined;
        dims?: any;
        rotation?: number | undefined;
    }

    class Matrix {
        constructor(option: MatrixOption | MatrixIC2Option);

        readonly isMatrix: boolean;
        readonly devices: number;

        on(index?: number): void;
        off(index?: number): void;
        clear(index?: number): void;
        brightness(value: number): void;
        // tslint:disable-next-line:unified-signatures
        brightness(index: number, value: number): void;
        led(row: number, col: number, state: any): void;
        // tslint:disable-next-line:unified-signatures
        led(index: number, row: number, col: number, state: unknown): void;
        row(row: number, val: number): void;
        // tslint:disable-next-line:unified-signatures
        row(index: number, row: number, val: number): void;
        column(row: number, val: number): void;
        // tslint:disable-next-line:unified-signatures
        column(index: number, row: number, val: number): void;
        draw(position: number, character: number): void;
        // tslint:disable-next-line:unified-signatures
        draw(index: number, position: number, character: number): void;
    }

    interface RGBOption {
        board?: Board | undefined;
        pins: number[] | { blue: number; green: number; red: number };
        isAnode?: boolean | undefined;
        controller?: string | undefined;
    }

    class RGB {
        constructor(option: RGBOption);

        red: Led;
        green: Led;
        blue: Led;
        readonly isAnode: boolean;

        on(): void;
        off(): void;
        color(value: string): void;
        toggle(): void;
        blink(ms: number): void;
        strobe(ms: number): void;
        intensity(value: number): void;
        fadeIn(ms: number): void;
        fadeOut(ms: number): void;
        pulse(ms: number): void;
        stop(ms: number): void;
    }
}

export interface MotionOption {
    board?: Board | undefined;
    pin: number | string;
}

export class Motion {
    constructor(option: number | MotionOption);
    on(event: "data", cb: (data: unknown) => void): this;
    on(event: "calibrated" | "motionstart" | "motionend", cb: () => void): this;
}

export interface MotorPins {
    pwm: number;
    dir: number;
    cdir?: number | undefined;
    brake?: number | undefined;
}

export interface MotorOption {
    board?: Board | undefined;
    pins: MotorPins;
    current?: SensorOption | undefined;
    invertPWM?: boolean | undefined;
    address?: number | undefined;
    controller?: string | undefined;
    register?: any;
    bits?: any;
}

export class Motor {
    constructor(option: number[] | MotorOption);

    readonly isOn: boolean;

    forward(speed: number): void;
    fwd(speed: number): void;
    reverse(speed: number): void;
    rev(speed: number): void;
    start(speed?: number): void;
    stop(): void;
    brake(): void;
    release(): void;
}

export class Motors {
    constructor(option: number[] | MotorOption[]);

    readonly isOn: boolean;

    forward(speed: number): void;
    fwd(speed: number): void;
    reverse(speed: number): void;
    rev(speed: number): void;
    start(speed?: number): void;
    stop(): void;
    brake(): void;
    release(): void;
}

export interface OrientationOption {
    board?: Board | undefined;
    controller?: string | undefined;
    freq?: number | undefined;
}

export class Orientation {
    constructor(option: OrientationOption);

    readonly euler: any;
    readonly quarternion: any;

    on(event: "change" | "calibrated", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface PiezoOption {
    board?: Board | undefined;
    pin: number;
}

export interface PiezoTune {
    song: string | Array<[frequency: string | null, duration: number]>;
    tempo?: number;
    beats?: number;
}

export class Piezo {
    constructor(option: number | PiezoOption);

    id: string;
    pin: number;
    readonly mode: number;
    readonly isPlaying: boolean;

    frequency(frequency: number, duration: number): void;
    play(tune: PiezoTune, cb?: () => void): void;
    tone(tone: number, duration: number): void;
    noTone(): void;
    off(): void;
}

export interface PinOption {
    id?: number | string | undefined;
    pin: number | string;
    type?: string | undefined;
    board?: Board | undefined;
}

export interface PinState {
    supportedModes: number[];
    mode: number;
    value: number;
    report: number;
    analogChannel: number;
}

/**
 * You can use this enum to set the pin mode or you can use static properties from {@link Pin}.
 *
 * @example
 * ```ts
 * const pin = new Pin(13);
 * pin.mode = PinMode.OUTPUT;
 * pin.mode = Pin.OUTPUT;
 * ```
 */
export enum PinMode {
    INPUT = 0,
    OUTPUT = 1,
    ANALOG = 2,
    PWM = 3,
    SERVO = 4,
}

export class Pin {
    static readonly INPUT = 0;
    static readonly OUTPUT = 1;
    static readonly ANALOG = 2;
    static readonly PWM = 3;
    static readonly SERVO = 4;

    constructor(option: number | string | PinOption);

    id: number | string;
    pin: number | string;
    type: "digital" | "analog";
    value: number;
    mode: PinMode;

    static write(pin: number, value: number): void;
    static read(pin: number, cb: (error: Error, data: number) => void): void;
    query(cb: (pin: PinState) => void): void;
    high(): void;
    low(): void;
    write(value: number): void;
    read(cb: (error: Error, value: number) => void): void;
    on(event: "high" | "low", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface PingOption {
    pin: number | string;
    freq?: number | undefined;
    pulse?: number | undefined;
}

export class Ping {
    constructor(option: number | PingOption);

    /** Calculated distance to object in inches */
    readonly in: number;
    /** Calculated distance to object in inches */
    readonly inches: number;
    /** Calculated distance to object in centimeters */
    readonly cm: number;

    on(event: "change", cb: () => void): this;
}

export interface ProximityOption {
    board?: Board | undefined;
    pin: number | string;
    controller: string;
    freq?: number | undefined;
}

export interface ProximityData {
    cm: number;
    in: number;
}

export class Proximity {
    constructor(option: number | ProximityOption);
    on(event: "data", cb: (data: ProximityData) => void): this;
    on(event: "change", cb: () => void): this;
}

export interface RelayOption {
    pin: number | string;
    board?: Board;
    /**
     * @default 'NO'
     */
    type?: "NO" | "NC";
}

/**
 * http://johnny-five.io/api/relay/
 */
export class Relay {
    constructor(option: Relay["pin"] | RelayOption);

    id: string;
    pin: number | string;
    readonly isOn: boolean;
    readonly type: string;

    /**
     * Open the circuit.
     */
    open(): void;
    /**
     * Close the circuit.
     */
    close(): void;
    /**
     * Toggle the circuit open/close.
     */
    toggle(): void;
}

export class Relays {
    /**
     * An array of pins
     */
    constructor(options: Array<Relay["pin"]>);

    /**
     * Using relays with different types. Some NC, some NO, etc…
     */
    // tslint:disable-next-line:unified-signatures
    constructor(options: RelayOption[]);

    /**
     * Using an array of existing relays to join them into a single interface.
     */
    // tslint:disable-next-line:unified-signatures
    constructor(options: Relay[]);

    [index: number]: Relay;

    /**
     * Open the circuit.
     */
    open(): void;
    /**
     * Close the circuit.
     */
    close(): void;
    /**
     * Toggle the circuit open/close.
     */
    toggle(): void;
}

export interface Repl {
    inject(object: any): void;
}

export interface SensorOption {
    board?: Board | undefined;
    pin: number | string;
    freq?: number | undefined;
    threshold?: number | undefined;
    enabled?: boolean | undefined;
    type?: "digital" | "analog";
}

export class Sensor {
    constructor(option: number | string | SensorOption);

    id: string;
    pin: number | string;
    threshold: number;
    readonly boolean: boolean;
    readonly raw: number;
    readonly analog: number;
    readonly constrained: number;
    readonly value: number;

    scaleTo(range: number[]): number;
    scaleTo(low: number, high: number): number;
    fscaleTo(low: number, high: number): number;
    fscaleTo(range: number[]): number;
    booleanAt(barrier: number): boolean;
    within(range: number[], cb: () => void): void;
    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface ServoGeneralOption {
    pin: number | string;
    board?: Board;
    range?: number[];
    type?: string;
    startAt?: number;
    isInverted?: boolean;
    center?: boolean;
    controller?: string;
}

export interface ServoPCA9685Option extends ServoGeneralOption {
    address?: number | undefined;
}

export interface ServoSweepOpts {
    range: number[];
    interval?: number | undefined;
    step?: number | undefined;
}

export class Servo {
    constructor(option: number | string | ServoGeneralOption);

    id: string;
    pin: number | string;
    range: number[];
    invert: boolean;
    history: any[];
    interval: number;
    isMoving: boolean;
    readonly last: any;
    readonly position: number;
    value: number;
    startAt: number;

    to(degrees: number, ms?: number, rage?: number): void;
    min(): void;
    max(): void;
    center(): void;
    home(): void;
    sweep(arg?: number[] | ServoSweepOpts): void;
    stop(): void;
    cw(speed: number): void;
    ccw(speed: number): void;
    on(event: "move:complete", cb: () => void): this;
}

export interface ShiftRegisterOption {
    board?: Board | undefined;
    pins: any;
    isAnode?: boolean | undefined;
}

export class ShiftRegister {
    constructor(option: ShiftRegisterOption);

    id: string;
    pins: any;
    readonly value: any;
    readonly isAnode: boolean;

    clear(): void;
    display(number: number | string): void;
    reset(): void;
    send(...value: number[]): void;
}

export interface SonarOption {
    board?: Board | undefined;
    pin: number | string;
    device: string;
    freq?: number | undefined;
    threshold?: number | undefined;
}

export class Sonar {
    constructor(option: number | string | SonarOption);

    within(range: number[], cb: () => void): void;
    within(range: number[], unit: string, cb: () => void): void;
    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface StepperOption {
    board?: Board | undefined;
    pins: any;
    stepsPerRev: number;
    type: number;
    rpm?: number | undefined;
    direction?: number | undefined;
}

export class Stepper {
    static TYPE: {
        DRIVER: number;
        TWO_WIRE: number;
        FOUR_WIRE: number;
    };
    constructor(option: number | string | StepperOption);

    step(stepsOrOpts: unknown, cb: () => void): void;
    rpm(value?: number): Stepper;
    speed(value?: number): Stepper;
    direction(value?: number): Stepper;
    accel(value?: number): Stepper;
    decel(value?: number): Stepper;
    cw(): Stepper;
    ccw(): Stepper;
    within(range: number[], cb: () => void): void;
    within(range: number[], unit: string, cb: () => void): void;
    on(event: "change", cb: () => void): this;
    on(event: "data", cb: (data: unknown) => void): this;
}

export interface SwitchOption {
    board?: Board | undefined;
    pin: number | string;
    type?: "NO" | "NC" | undefined;
}

export class Switch {
    constructor(option: number | string | SwitchOption);

    id: string;
    pin: number | string;
    readonly isClosed: boolean;
    readonly isOpen: boolean;

    on(event: "open" | "close", cb: () => void): this;
}

export interface ThermometerOption {
    board?: Board | undefined;
    controller?: string | undefined;
    pin: string | number;
    toCelsius?: ((val: number) => number) | undefined;
    freq?: number | undefined;
}

export class Thermometer {
    constructor(option: ThermometerOption);

    id: string;
    pin: number | string;
    readonly celsius: number;
    readonly fahrenheit: number;
    readonly kelvin: number;
    readonly C: number;
    readonly F: number;
    readonly K: number;

    on(event: "data", cb: (data: unknown) => void): this;
    on(event: "change", cb: () => void): this;
}
