// Type definitions for node-rpio
// Project: https://github.com/jperkin/node-rpio
// Definitions by: Dominik Palo <https://github.com/DominikPalo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare var rpio: Rpio;

declare module 'rpio' {
    export = rpio;
}

interface Rpio {
    /**
     * Initialise the bcm2835 library. This will be called automatically by .open() using the default option values if not called explicitly.
     * @param options
     */
    init(options: RPIO.Options): void;

    /**
     * Open a pin for input or output. Valid modes are:
     * INPUT: pin is input (read-only).
     * OUTPUT: pin is output (read-write).
     * PWM: configure pin for hardware PWM.
     *
     * For input pins, option can be used to configure the internal pullup or pulldown resistors using options as described in the .pud() documentation below.
     *
     * For output pins, option defines the initial isMotionDetected of the pin, rather than having to issue a separate .write() call. This can be critical for devices which must have a stable value, rather than relying on the initial floating value when a pin is enabled for output but hasn't yet been configured with a value.
     * @param pin
     * @param mode
     * @param options
     */
    open(pin: number, mode: number, options?: number): void;

    /**
     * Switch a pin that has already been opened in one mode to a different mode.
     * This is provided primarily for performance reasons, as it avoids some of the setup work done by .open().
     * @param pin
     * @param mode
     */
    mode(pin: number, mode: number): void;

    /**
     * Read the current value of pin, returning either 1 (high) or 0 (low).
     * @param pin
     */
    read(pin: number): number;

    /**
     * Read length bits from pin into buffer as fast as possible. If length isn't specified it defaults to buffer.length.
     * @param pin
     * @param buffer
     * @param length
     */
    readbuf(pin: number, buffer: Buffer, length?: number): void;

    /**
     * Set the specified pin either high or low, using either the HIGH/LOW constants, or simply 1 or 0.
     * @param pin
     * @param value
     */
    write(pin: number, value: number): void;

    /**
     * Write length bits to pin from buffer as fast as possible. If length isn't specified it defaults to buffer.length.

     * @param pin
     * @param buffer
     * @param length
     */
    writebuf(pin: number, buffer: Buffer, length?: number): void;

    /**
     * Read the current isMotionDetected of the GPIO pad control for the specified GPIO group. On current models of Raspberry Pi there are three groups with corresponding defines:
     * PAD_GROUP_0_27: GPIO0 - GPIO27. Use this for the main GPIO header.
     * PAD_GROUP_28_45: GPIO28 - GPIO45. Use this to configure the P5 header.
     * PAD_GROUP_46_53: GPIO46 - GPIO53. Internal, you probably won't need this.
     *
     * The value returned will be a bit mask of the following defines:
     * PAD_SLEW_UNLIMITED: 0x10. Slew rate unlimited if set.
     * PAD_HYSTERESIS: 0x08. Hysteresis is enabled if set.
     *
     * The bottom three bits determine the drive current:
     * PAD_DRIVE_2mA: 0b000
     * PAD_DRIVE_4mA: 0b001
     * PAD_DRIVE_6mA: 0b010
     * PAD_DRIVE_8mA: 0b011
     * PAD_DRIVE_10mA: 0b100
     * PAD_DRIVE_12mA: 0b101
     * PAD_DRIVE_14mA: 0b110
     * PAD_DRIVE_16mA: 0b111
     *
     * @note Note that the pad control registers are not available via /dev/gpiomem, so you will need to use .init({gpiomem: false}) and run as root.
     * @param group
     */
    readpad(group: number): number;

    /**
     * Write control settings to the pad control for group. Uses the same defines as above for .readpad().
     * @param group
     * @param control
     */
    writepad(group: number, control: number): void;

    /**
     * Configure the pin's internal pullup or pulldown resistors, using the following isMotionDetected constants:
     * PULL_OFF: disable configured resistors.
     * PULL_DOWN: enable the pulldown resistor.
     * PULL_UP: enable the pullup resistor.
     *
     * @param pin
     * @param state
     */
    pud(pin: number, state: number): void;

    /**
     * Watch pin for changes and execute the callback cb() on events. cb() takes a single argument, the pin which triggered the callback.
     *
     * The optional direction argument can be used to watch for specific events:
     * POLL_LOW: poll for falling edge transitions to low.
     * POLL_HIGH: poll for rising edge transitions to high.
     * POLL_BOTH: poll for both transitions (the default).
     *
     * Due to hardware/kernel limitations we can only poll for changes, and the event detection only says that an event occurred, not which one. The poll interval is a 1ms setInterval() and transitions could come in between detecting the event and reading the value. Therefore this interface is only useful for events which transition slower than approximately 1kHz.
     *
     * To stop watching for pin changes, call .poll() again, setting the callback to null.
     * @param pin
     * @param cb
     * @param direction
     */
    poll(pin: number, cb: RPIO.CallbackFunction | null, direction?: number): void;

    /**
     * Reset pin to INPUT and clear any pullup/pulldown resistors and poll events.
     * @param pin
     */
    close(pin: number): void;

    // I²C

    /**
     * Assign pins 3 and 5 to i²c use. Until .i2cEnd() is called they won't be available for GPIO use.
     *
     * The pin assignments are:
     * Pin 3: SDA (Serial Data)
     * Pin 5: SCL (Serial Clock)
     */
    i2cBegin(): void;

    /**
     * Configure the slave address. This is between 0 - 0x7f, and it can be helpful to
     * run the i2cdetect program to figure out where your devices are if you are unsure.
     * @param address
     */
    i2cSetSlaveAddress(address: number): void;

    /**
     * Set the baud rate - directly set the speed in hertz.
     * @param baudRate
     */
    i2cSetBaudRate(baudRate: number): void;

    /**
     * Read from the i²c slave.
     * Function takes a buffer and optional length argument, defaulting to the length of the buffer if not specified.
     * @param buffer
     * @param length
     */
    i2cRead(buffer: Buffer, length?: number): void;

    /**
     * Write to the i²c slave.
     * Function takes a buffer and optional length argument, defaulting to the length of the buffer if not specified.
     * @param biffer
     * @param length
     */
    i2cWrite(biffer: Buffer, length?: number): void;

    /**
     * Set the baud rate - based on a divisor of the base 250MHz rate.
     * @param clockDivider
     */
    i2cSetClockDivider(clockDivider: number): void;




    /**
     * Turn off the i²c interface and return the pins to GPIO.
     */
    i2cEnd(): void;

    // PWM

    /**
     * Set the PWM refresh rate.
     * @param clockDivider: power-of-two divisor of the base 19.2MHz rate, with a maximum value of 4096 (4.6875kHz).
     */
    pwmSetClockDivider(clockDivider: number): void;

    /**
     * Set the PWM range for a pin. This determines the maximum pulse width.
     * @param pin
     * @param range
     */
    pwmSetRange(pin: number, range: number): void;

    /**
     * Set the PWM width for a pin.
     * @param pin
     * @param data
     */
    pwmSetData(pin: number, data: number): void;

    // SPI

    /**
     * Switch pins 119, 21, 23, 24 and 25 (GPIO7-GPIO11) to SPI mode
     *
     *  Pin | Function
     * -----|----------
     *   19 |   MOSI
     *   21 |   MISO
     *   23 |   SCLK
     *   24 |   CE0
     *   25 |   CE1
     */
    spiBegin(): void;

    /**
     * Choose which of the chip select / chip enable pins to control.
     *
     *  Value | Pin
     *  ------|---------------------
     *    0   | SPI_CE0 (24 / GPIO8)
     *    1   | SPI_CE1 (25 / GPIO7)
     *    2   | Both
     *
     * @param chip
     */
    spiChipSelect(cePin: number): void;

    /**
     * Commonly chip enable (CE) pins are active low, and this is the default.
     * If your device's CE pin is active high, use spiSetCSPolarity() to change the polarity.
     * @param cePin
     * @param polarity
     */
    spiSetCSPolarity(cePin: number, polarity: number): void;

    /**
     * Set the SPI clock speed with.
     * @param clockDivider: an even divisor of the base 250MHz rate ranging between 0 and 65536.
     */
    spiSetClockDivider(clockDivider: number): void;

    /**
     * Transfer data. Data is sent and received in 8-bit chunks via buffers which should be the same size.
     * @param txBuffer
     * @param rxBuffer
     * @param txLength
     */
    spiTransfer(txBuffer: Buffer, rxBuffer: Buffer, txLength: number): void;

    /**
     * Send data and do not care about the data coming back.
     * @param txBuffer
     * @param txLength
     */
    spiWrite(txBuffer: Buffer, txLength: number): void;

    /**
     * Release the pins back to general purpose use.
     */
    spiEnd(): void;

    // Misc

    /**
     * Sleep for n seconds.
     * @param n: number of seconds to sleep
     */
    sleep(n: number): void;

    /**
     * Sleep for n milliseconds.
     * @param n: number of milliseconds to sleep
     */
    msleep(n: number): void;

    /**
     * Sleep for n microseconds.
     * @param n: number of microseconds to sleep
     */
    usleep(n: number): void;


    // Constants:

    HIGH: number;
    LOW: number;

    INPUT: number;
    OUTPUT: number;
    PWM: number;

    PULL_OFF: number;
    PULL_DOWN: number;
    PULL_UP: number;

    PAD_GROUP_0_27: number;
    PAD_GROUP_28_45: number;
    PAD_GROUP_46_53: number;

    PAD_SLEW_UNLIMITED: number;
    PAD_HYSTERESIS: number;

    PAD_DRIVE_2mA: number;
    PAD_DRIVE_4mA: number;
    PAD_DRIVE_6mA: number;
    PAD_DRIVE_8mA: number;
    PAD_DRIVE_10mA: number;
    PAD_DRIVE_12mA: number;
    PAD_DRIVE_14mA: number;
    PAD_DRIVE_16mA: number;

    POLL_LOW: number;
    POLL_HIGH: number;
    POLL_BOTH: number;

}

declare namespace RPIO {

    interface Options {

        /**
         * There are two device nodes for GPIO access. The default is /dev/gpiomem which, when configured with gpio group access, allows users in that group to read/write directly to that device. This removes the need to run as root, but is limited to GPIO functions.
         * For non-GPIO functions (i²c, PWM, SPI) the /dev/mem device is required for full access to the Broadcom peripheral address range and the program needs to be executed as the root user (e.g. via sudo). If you do not explicitly call .init() when using those functions, the library will do it for you with gpiomem: false.
         * You may also need to use gpiomem: false if you are running on an older Linux kernel which does not support the gpiomem module.
         * rpio will throw an exception if you try to use one of the non-GPIO functions after already opening with /dev/gpiomem, as well as checking to see if you have the necessary permissions.
         *
         * Valid options:
         * true: use /dev/gpiomem for non-root but GPIO-only access
         * false: use /dev/mem for full access but requires root
         */
        gpiomem?: boolean;

        /**
         * There are two naming schemes when referring to GPIO pins:
         * By their physical header location: Pins 1 to 26 (A/B) or Pins 1 to 40 (A+/B+)
         * Using the Broadcom hardware map: GPIO 0-25 (B rev1), GPIO 2-27 (A/B rev2, A+/B+)
         *
         * Confusingly however, the Broadcom GPIO map changes between revisions, so for example P3 maps to GPIO0 on Model B Revision 1 models, but maps to GPIO2 on all later models.
         * This means the only sane default mapping is the physical layout, so that the same code will work on all models regardless of the underlying GPIO mapping.
         * If you prefer to use the Broadcom GPIO scheme for whatever reason (e.g. to use the P5 header pins on the Raspberry Pi 1 revision 2.0 model which aren't currently mapped to the physical layout), you can set mapping to gpio to switch to the GPIOxx naming.
         *
         * Valid options:
         * gpio: use the Broadcom GPIOxx naming
         * physical: use the physical P01-P40 header layou
         */
        mapping?: "gpio" | "physical";
    }

    interface CallbackFunction {
        /**
         * @param pin: The pin which triggered the callback.
         */
        (pin: number): void;
    }
}
