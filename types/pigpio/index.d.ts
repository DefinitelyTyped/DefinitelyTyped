// Type definitions for pigpio 0.4
// Project: https://github.com/fivdi/pigpio
// Definitions by: ManerFan <https://github.com/manerfan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/************************************
 * Gpio
 ************************************/

/**
 * General Purpose Input Output
 */
export class Gpio extends NodeJS.EventEmitter {
    /**
     * Returns a new Gpio object for accessing a GPIO
     * @param gpio      an unsigned integer specifying the GPIO number
     * @param options   object (optional)
     */
    constructor(
        gpio: number,
        options?: {
            /**
             * INPUT, OUTPUT, ALT0, ALT1, ALT2, ALT3, ALT4, or ALT5 (optional, no default)
             */
            mode?: number;

            /**
             * PUD_OFF, PUD_DOWN, or PUD_UP (optional, no default)
             */
            pullUpDown?: number;

            /**
             * interrupt edge for inputs. RISING_EDGE, FALLING_EDGE, or EITHER_EDGE (optional, no default)
             */
            edge?: number;

            /**
             * interrupt timeout in milliseconds (optional, defaults to 0 meaning no timeout if edge specified)
             */
            timeout?: number;

            /**
             * boolean specifying whether or not alert events are emitted when the GPIO changes state (optional, default false)
             */
            alert?: boolean
        }
    );

    /**
     * Sets the GPIO mode.
     * @param mode  INPUT, OUTPUT, ALT0, ALT1, ALT2, ALT3, ALT4, or ALT5
     */
    mode(mode: number): Gpio;

    /**
     * Sets or clears the resistor pull type for the GPIO.
     * @param pud   PUD_OFF, PUD_DOWN, or PUD_UP
     */
    pullUpDown(pud: number): Gpio;

    /**
     * Returns the GPIO mode.
     */
    getMode(): number;

    /**
     * Returns the GPIO level, 0 or 1.
     */
    digitalRead(): number;

    /**
     * Sets the GPIO level to 0 or 1. If PWM or servo pulses are active on the GPIO they are switched off.
     * @param levle     0 or 1
     */
    digitalWrite(levle: number): Gpio;

    /**
     * Sends a trigger pulse to the GPIO. The GPIO is set to level for pulseLen microseconds and then reset to not level.
     * @param pulseLen  pulse length in microseconds (1 - 100)
     * @param level     0 or 1
     */
    trigger(pulseLen: number, level: number): Gpio;

    /**
     * Starts PWM on the GPIO. Returns this.
     * @param dutyCycle     an unsigned integer >= 0 (off) and <= range (fully on). range defaults to 255.
     */
    pwmWrite(dutyCycle: number): Gpio;

    /**
     * The same to #pwmWrite.
     * @param dutyCycle     an unsigned integer >= 0 (off) and <= range (fully on). range defaults to 255.
     */
    analogWrite(dutyCycle: number): Gpio;

    /**
     * Starts hardware PWM on the GPIO at the specified frequency and dutyCycle. Frequencies above 30MHz are unlikely to work.
     * @param frequency     an unsigned integer >= 0 and <= 125000000
     * @param dutyCycle     an unsigned integer >= 0 (off) and <= 1000000 (fully on).
     */
    hardwarePwmWrite(frequency: number, dutyCycle: number): Gpio;

    /**
     * Returns the PWM duty cycle setting on the GPIO.
     */
    getPwmDutyCycle(): number;

    /**
     * Selects the duty cycle range to be used for the GPIO. Subsequent calls to pwmWrite will use a duty cycle between 0 (off) and range (fully on).
     * @param range     an unsigned integer in the range 25 through 40000
     */
    pwmRange(range: number): Gpio;

    /**
     * Returns the duty cycle range used for the GPIO.
     * If hardware PWM is active on the GPIO the reported range will be 1000000.
     */
    getPwmRange(): number;

    /**
     * Returns the real range used for the GPIO.
     * If hardware PWM is active on the GPIO the reported real range will be approximately 250M divided by the set PWM frequency.
     */
    getPwmRealRange(): number;

    /**
     * Sets the frequency in hertz to be used for the GPIO. Returns this.
     * @param frequency      an unsigned integer >= 0
     */
    pwmFrequency(frequency: number): Gpio;

    /**
     * Returns the frequency (in hertz) used for the GPIO. The default frequency is 800Hz.
     */
    getPwmFrequency(): number;

    /**
     * Starts servo pulses at 50Hz on the GPIO, 0 (off), 500 (most anti-clockwise) to 2500 (most clockwise)
     * @param pulseWidth    pulse width in microseconds, an unsigned integer, 0 or a number in the range 500 through 2500
     */
    servoWrite(pulseWidth: number): Gpio;

    /**
     * Returns the servo pulse width setting on the GPIO.
     */
    getServoPulseWidth(): number;

    /**
     * Enables interrupts for the GPI
     * @param edge      RISING_EDGE, FALLING_EDGE, or EITHER_EDGE
     * @param timeout   interrupt timeout in milliseconds (optional, defaults to 0 meaning no timeout)
     */
    enableInterrupt(edge: number, timeout?: number): Gpio;

    /**
     * Disables interrupts for the GPIO. Returns this.
     */
    disableInterrupt(): Gpio;

    /**
     * Enables alerts for the GPIO.
     */
    enableAlert(): Gpio;

    /**
     * Disables aterts for the GPIO.
     */
    disableAlert(): Gpio;

    /*----------------------*
     * mode
     *----------------------*/

    /**
     * Indicates that the GPIO is an input.
     */
    static INPUT: number;

    /**
     * Indicates that the GPIO is an output.
     */
    static OUTPUT: number;

    /**
     * Indicates that the GPIO is in alternative mode 0.
     */
    static ALT0: number;

    /**
     * Indicates that the GPIO is in alternative mode 1.
     */
    static ALT1: number;

    /**
     * Indicates that the GPIO is in alternative mode 2.
     */
    static ALT2: number;

    /**
     * Indicates that the GPIO is in alternative mode 03.
     */
    static ALT3: number;

    /**
     * Indicates that the GPIO is in alternative mode 4.
     */
    static ALT4: number;

    /**
     * Indicates that the GPIO is in alternative mode 5.
     */
    static ALT5: number;

    /*----------------------*
     * pud
     *----------------------*/

    /**
     * Niether the pull-up nor the pull-down resistor should be enabled.
     */
    static PUD_OFF: number;

    /**
     * Enable pull-down resistor.
     */
    static PUD_DOWN: number;

    /**
     * Enable pull-up resistor.
     */
    static PUD_UP: number;

    /*----------------------*
     * isr
     *----------------------*/

    /**
     * Indicates that the GPIO fires interrupts on rising edges.
     */
    static RISING_EDGE: number;

    /**
     * Indicates that the GPIO fires interrupts on falling edges.
     */
    static FALLING_EDGE: number;

    /**
     * Indicates that the GPIO fires interrupts on both rising and falling edges.
     */
    static EITHER_EDGE: number;

    /*----------------------*
     * timeout
     *----------------------*/

    /**
     * The level argument passed to an interrupt event listener when an interrupt timeout expires.
     */
    static TIMEOUT: number;

    /*----------------------*
     * gpio numbers
     *----------------------*

    /**
     * The smallest GPIO number.
     */
    static MIN_GPIO: number;

    /**
     * The largest GPIO number.
     */
    static MAX_GPIO: number;

    /**
     * The largest user GPIO number.
     */
    static MAX_USER_GPIO: number;
}

/************************************
 * GpioBank
 ************************************

 /**
  * Banked General Purpose Input Output
  */
export class GpioBank {
    /**
     * Returns a new GpioBank object for accessing up to 32 GPIOs as one operation.
     * @param bank  BANK1 or BANK2 (optional, defaults to BANK1)
     */
    constructor(bank?: number);

    /**
     * Returns the current level of all GPIOs in the bank.
     */
    read(): number;

    /**
     * For each GPIO in the bank, sets the GPIO level to 1 if the corresponding bit in bits is set.
     * @param bits  a bit mask of the the GPIOs to set to 1
     */
    set(bits: number): GpioBank;

    /**
     * For each GPIO in the bank, sets the GPIO level to 0 if the corresponding bit in bits is set.
     * @param bits   a bit mask of the the GPIOs to clear or set to 0
     */
    clear(bits: number): GpioBank;

    /**
     * Returns the bank identifier (BANK1 or BANK2.)
     */
    bank(): number;

    /**
     * Identifies bank 1.
     */
    static BANK1: number;

    /**
     * Identifies bank 2.
     */
    static BACK2: number;
}

/************************************
 * Notifier
 ************************************

 /**
  * Notification Stream
  */
export class Notifier {
    /**
     * Returns a new Notifier object that contains a stream which provides notifications about state changes on any of GPIOs 0 through 31 concurrently.
     * @param options   Used to configure which GPIOs notifications should be provided for.
     */
    constructor(options?: {
        /**
         * a bit mask indicating the GPIOs of interest, bit0 corresponds to GPIO0, bit1 corresponds to GPIO1, ..., bit31 corresponds to GPIO31.
         * If a bit is set, the corresponding GPIO will be monitored for state changes. (optional, no default)
         */
        bits: number;
    })

    /**
     * Starts notifications for the GPIOs specified in the bit mask.
     * @param bits  a bit mask indicating the GPIOs of interest, bit0 corresponds to GPIO0, bit1 corresponds to GPIO1, ..., bit31 corresponds to GPIO31.
     * If a bit is set, the corresponding GPIO will be monitored for state changes.
     */
    start(bits: number): Notifier;

    /**
     * Stops notifications. Notifications can be restarted with the start method.
     */
    stop(): Notifier;

    /**
     * Stops notifications and releases resources.
     */
    close(): Notifier;

    /**
     * Returns the notification stream which is a Readable stream.
     */
    stream(): NodeJS.ReadableStream;

    /**
     * The number of bytes occupied by a notification in the notification stream.
     */
    static NOTIFICATION_LENGTH: number;

    /**
     * Indicates a keep alive signal on the stream and is sent once a minute in the absence of other notification activity.
     */
    static PI_NTFY_FLAGS_ALIVE: number;
}

/************************************
 * Configuration
 ************************************/

/**
 * PI_CLOCK_PWM
 */
export const CLOCK_PWM: number;

/**
 * PI_CLOCK_PCM
 */
export const CLOCK_PCM: number;

/**
 * Initialize the pigpio package
 */
export function initialize(): void;

/**
 * Terminate the pigpio package
 */
export function terminate(): void;

/**
 * The configureClock function can be used to configure the sample rate and timing peripheral.
 * @param microseconds  an unsigned integer specifying the sample rate in microseconds (1, 2, 4, 5, 8, or 10)
 * @param peripheral    an unsigned integer specifying the peripheral for timing (CLOCK_PWM or CLOCK_PCM)
 */
export function configureClock(microseconds: number, peripheral: number): void;
