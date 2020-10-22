// Type definitions for motor-hat 2.0
// Project: http://www.github.com/jcane86/motor-hat
// Definitions by: Yevgen Muntyan <https://github.com/muntyan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Direction = 'fwd' | 'back';

type Callback = (err?: Error, result?: any) => void;

export interface PinDefinitionObject {
    /**
     * Pin number of the PWM output
     */
    PWM: number;

    /**
     * Pin number of the first coil output
     */
    IN1: number;

    /**
     * Pin number of the second coil output
     */
    IN2: number;
}

export type PinDefinition = PinDefinitionObject | number[];

export interface DCOptions {
    /**
     * PWM Interface Object
     */
    pwm: object;

    /**
     * Pin definition for the motor
     */
    pins: PinDefinition;

    speed?: number;
    frequency?: number;
}

/**
 * DC Controller Object
 */
export interface DC {
    /**
     * Initialize the DC controller instance.
     * Synchronous overload.
     */
    init(): this;

    /**
     * Initialize the DC controller instance.
     * Asynchronous overload.
     *
     * @param   cb      Node style callback for asynch initialization
     */
    init(cb: Callback): void;

    /**
     * Starts the motor in the desired direction.
     *
     * @param   dir     Direction of movement.
     * @param   cb      Node style callback. Gets called with cb(err, result) after completion.
     */
    run(dir: Direction, cb: Callback): void;

    /**
     * Starts the motor in the desired direction.
     *
     * @param   dir     Direction of movement.
     */
    runSync(dir: Direction): void;

    /**
     * Stops the motor.
     * Doesn't actually brake the motor, just stops applying voltage to it.
     *
     * @param   cb      Node style callback. Gets called with cb(err, result) after completion.
     */
    stop(cb: Callback): void;

    /**
     * Stops the motor.
     * Doesn't actually brake the motor, just stops applying voltage to it.
     */
    stopSync(): void;

    /**
     * Sets DC motor speed.
     * The speed can be set as a percentage, from 0% to 100%. To change the actual top speed,
     * the actual voltage supplied to the motor needs to be controlled by hardware (get a higher
     * voltage source).
     *
     * @param   speed   Relative speed. 0% to 100%.
     * @param   cb      Node style callback. Gets called with cb(err, result) after completion.
     */
    setSpeed(speed: number, cb: Callback): void;

    /**
     * Sets DC motor speed.
     * The speed can be set as a percentage, from 0% to 100%. To change the actual top speed,
     * the actual voltage supplied to the motor needs to be controlled by hardware (get a higher
     * voltage source).
     *
     * @param   speed   Relative speed. 0% to 100%.
     */
    setSpeedSync(speed: number): void;

    /**
     * Sets the PWM frequency for the DC motor.
     * This setting affects the frequency at which the PWM chip will work to command the DC motor.
     *
     * @param   freq    PWM Frequency in Hz.
     * @param   cb      Node style callback. Gets called with cb(err, result) after completion.
     */
    setFrequency(freq: number, cb: Callback): void;

    /**
     * Sets the PWM frequency for the DC motor.
     * This setting affects the frequency at which the PWM chip will work to command the DC motor.
     *
     * @param   freq    PWM Frequency in Hz.
     */
    setFrequencySync(freq: number): void;
}

/**
 * Servo controller initialization options
 */
export interface ServoOptions {
    /**
     * PWM Interface Object
     */
    pwm: object;

    /**
     * Servo controller pin. Which pin (0 to 15) is the servo connected to?
     */
    pin: number;

    /**
     * Duration in ms of pulse at position 0
     */
    min?: number;

    /**
     * Duration in ms of pulse at position 100
     */
    max?: number;

    /**
     * PWM Controller frequency for the servo
     */
    freq?: number;
}

/**
 * Servo Controller Object
 */
export interface Servo {
    /**
     * Move Servo to desired position.
     *
     * @param   pos     Relative position (0% to 100%).
     */
    moveTo(pos: number): void;

    /**
     * Calibrate the limits for the servolib
     *
     * @param   freq    The update freq in Hz
     * @param   min     The min. pulse in ms
     * @param   max     The max. pulse in ms
     */
    calibrate(freq: number, min: number, max: number): void;
}

/**
 * Stepper controller initialization options
 */
export interface StepperOptions {
    /**
     * PWM Interface Object
     */
    pwm: object;

    /**
     * Pin definition for the motor
     */
    pins: {
        /**
         * Pin definition for winding 1 of the stepper
         */
        W1: PinDefinition;

        /**
         * Pin definition for winding 2 of the stepper
         */
        W2: PinDefinition;
    };

    /**
     * Steps per revolution of the stepper motor
     */
    steps?: number;

    /**
     * number of microsteps per step
     */
    microsteps?: 8 | 16;

    /**
     * PWM Controller frequency for the stepper
     */
    frequency?: number;

    /**
     * Stepping style
     */
    style?: 'single' | 'double' | 'interleaved' | 'microstep';

    current?: number;

    /**
     * Pulses per second
     */
    pps?: number;

    /**
     * Revolutions per minute
     */
    rpm?: number;

    /**
     * Steps per second
     */
    sps?: number;
}

export interface StepResult {
    /**
     * Performed steps
     */
    steps: number;

    /**
     * Direction of steps performed
     */
    dir: Direction;

    /**
     * Time in ms taken to perform the steps
     */
    duration: number;

    /**
     * Number of steps retried
     */
    retried: number;
}

export interface StepSyncResult {
    /**
     * Performed steps
     */
    steps: number;

    /**
     * Direction of steps performed
     */
    dir: Direction;

    /**
     * Time in ms taken to perform the steps
     */
    duration: number;
}

/**
 * Stepper motor speed for step().
 */
export interface StepperSpeed {
    /**
     * Speed in steps per second
     */
    sps?: number;

    /**
     * Speed in pulses per second (pulses can be steps, microsteps, etc)
     */
    pps?: number;

    /**
     * Speed in revolutions per minute
     */
    rpm?: number;
}

/**
 * Stepper motor controller
 */
export interface Stepper {
    readonly options: StepperOptions;

    /**
     * Initialize the Stepeper controller instance.
     * Synchronous overload.
     *
     * @returns Returns init'd Stepper controller object (self)
     */
    init(): this;

    /**
     * Initialize the Stepeper controller instance.
     * Synchronous overload.
     *
     * @param   cb      Node style callback for asynch initialization
     */
    init(cb: (err: null, self: Stepper) => void): void;

    /**
     * Perform arbitrary number of steps asynchronously.
     * Configuration as stepping style, speed, etc should have been set previously.
     *
     * @param   dir     Direction of movement
     * @param   steps   Number of steps.
     * @param   cb      Node style callback. cb(err, result).
     */
    step(
        dir: Direction,
        steps: number,
        cb: (err?: Error, result?: StepResult) => void
    ): void;

    /**
     * Perform arbitrary number of steps synchronously.
     * Configuration as stepping style, speed, etc should have been set previously.
     *
     * @param   dir     Direction of movement
     * @param   steps   Number of steps.
     * @returns The result of the action.
     */
    stepSync(dir: Direction, steps: number): StepSyncResult;

    /**
     * Perform one step asynchronously.
     * Configuration as stepping style, speed, etc should have been set previously.
     *
     * @param   dir     Direction of movement
     * @param   cb      Node style callback. cb(err, result).
     */
    oneStep(dir: Direction, cb: (err?: Error, result?: any) => void): void;

    /**
     * Perform one step synchronously.
     * Configuration as stepping style, speed, etc should have been set previously.
     *
     * @param   dir     Direction of movement
     */
    oneStepSync(dir: Direction): void;

    /**
     * Release the stepper motor asynchronously.
     *
     * Stops applying current to the motor coils.
     *
     * @param   cb      Node style callback
     */
    release(cb: (err?: Error, result?: any) => void): void;

    /**
     * Release the stepper motor synchronously.
     * Stops applying current to the motor coils.
     */
    releaseSync(): void;

    /**
     * Set the current rate at which to supply the steps.
     * Provide a number from 0 to 1 and the current will be reduced proportionally
     *
     * @param   current Current rate, from 0 to 1.
     */
    setCurrent(current: number): void;

    /**
     * Set stepping style.
     *
     * @param   style   Stepping style.
     */
    setStyle(style: 'single' | 'double' | 'interleaved' | 'microstep'): void;

    /**
     * Set PWM Controller working frequency asynchronously.
     *
     * @param   freq    PWM frequency.
     * @param   cb      Node style callback. cb(err, result).
     */
    setFrequency(freq: number, cb: (err?: Error, result?: any) => void): void;

    /**
     * Set PWM Controller working frequency synchronously.
     *
     * @param   freq    PWM frequency.
     */
    setFrequencySync(freq: number): void;

    /**
     * Set desired number of microsteps per step.
     * (Used for microstepping)
     *
     * @param   ms      Microsteps per step
     */
    setMicrosteps(ms: 8 | 16): void;

    /**
     * Set number of steps per revolution for motor.
     *
     * @param   steps   Number of steps per revolution for stepper motor.
     */
    setSteps(steps: number): void;

    /**
     * Set motor speed for step().
     */
    setSpeed(speed: StepperSpeed): void;
}

export interface MotorPins {
    readonly PWM: number;
    readonly IN2: number;
    readonly IN1: number;
}

/**
 * motorHat controller
 *
 * Needs to be initialized with init().
 */
export interface MotorHat {
    readonly pins: {
        M1: MotorPins;
        M2: MotorPins;
        M3: MotorPins;
        M4: MotorPins;
    };

    /**
     * Array of initialized Servo controllers
     */
    readonly servos: ReadonlyArray<Servo>;

    /**
     * Array of initialized Stepper controllers
     */
    readonly steppers: ReadonlyArray<Stepper>;

    /**
     * Array of initialized DC controllers
     */
    readonly dcs: ReadonlyArray<DC>;

    /**
     * Creates a servo motor controller.
     * Pass in an options object to generate an uninitialized ServoLib object.
     */
    servo(opts: ServoOptions): Servo;

    /**
     * Creates a stepper motor controller.
     * Pass in an options object to generate an uninitialized StepperLib object.
     */
    stepper(opts: StepperOptions): Stepper;

    /**
     * Creates a new DC motor controller
     * Pass in an options object to generate an uninitialized DCLib object
     */
    dc(opts: DCOptions): DC;

    /**
     * Initialize the motorHat library instance.
     * Synchronous overload.
     *
     * Instantiates the individual Motor/Servo/Stepper controllers and initializes them.
     *
     * @returns     Returns initialized motorHat object (self)
     */
    init(): MotorHat;

    /**
     * Initialize the motorHat library instance.
     * Asynchronous overload.
     *
     * Instantiates the individual Motor/Servo/Stepper controllers and initializes them.
     * Returns initialized motorHat object (self) in second parameter to callback if callback
     * provided, to enable chaining.
     *
     * @param   cb  Node style callback for asynch initialization
     */
    init(cb: Callback): void;
}

export type Motor = 'M1' | 'M2' | 'M3' | 'M4';

export interface MotorHatOptions {
    /**
     * i2c address of the PWM chip on the MotorHat.
     *
     * * 0x6F for knockoff HATs.
     *
     * * 0x60 for official AdaFruit HATs??
     */
    address?: number;

    /**
     * i2c driver devfile number. Varies by RaspBerry version.
     * Should be automatically detected.
     */
    busnum?: number;

    /**
     * Definition of the stepper motors connected to the HAT.
     * At most 2 steppers, each motor is represented by either an object of the form
     * { W1: winding, W2: winding }. Each winding should be one of following: 'M1', 'M2', 'M3',
     * 'M4' depending on the port the stepper is connected to. Correct example: { W1: 'M3', W2: 'M1' }
     */
    steppers?: ReadonlyArray<{ W1: Motor; W2: Motor }>;

    /**
     * Definition of the DC motors connected to the HAT.
     * At most 4 DCs, each should be one of following: 'M1', 'M2', 'M3', 'M4' depending on
     * port the motor is connected to.
     */
    dcs?: ReadonlyArray<Motor>;

    /**
     * Definition of the servos connected to the HAT.
     * List of the channels that have servos connected to them. 0 to 15.
     */
    servos?: ReadonlyArray<number>;
}

/**
 * Creates a new MotorHat controller
 *
 * Pass in an options object to generate an uninitialized MotorHat object.
 */
declare function motorhat(options: MotorHatOptions): MotorHat;
export default motorhat;
