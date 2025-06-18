/// <reference types="node" />

declare var rpio: Rpio;

declare module "rpio" {
    export = rpio;
}

interface Rpio {
    /**
     * Initialize the library. Called automatically by
     * open() using the default option values if not called explicitly.
     *
     * @param options - library init options
     */
    init(options?: RPIO.Options): void;

    /**
     * Open a pin for input or output.
     *
     * @param pin - pin number
     * @param mode - INPUT (readonly) | OUTPUT (readwrite) | PWM (configured for hardware PWM)
     * @param option - For input pins, option can be used to configure the internal pullup
     *                 or pulldown resistors using options as described in the pud() documentation:
     *                 PULL_OFF, PULL_DOWN or PULL_UP.
     *                 For output pins, option defines the initial state of the pin (LOW, HIGH),
     *                 rather than having to issue a separate write() call. This can be critical
     *                 for devices which must have a stable value, rather than relying on the initial
     *                 floating value when a pin is enabled for output but hasn't yet been configured
     *                 with a value.
     */
    open(pin: number, mode: number, option?: number): void;

    /**
     * Shuts down the rpio library, unmapping and clearing all memory maps.
     * By default this will happen automatically. This method is provided
     * to allow explicit shutdown when using close_on_exit: false and a
     * custom exit handler.
     */
    exit(): void;

    /**
     * Switch a pin that has already been opened in one mode to a different mode.
     * This is provided primarily for performance reasons, as it avoids some
     * of the setup work done by open().
     *
     * @param pin - pin number
     * @param mode - INPUT (readonly) | OUTPUT (readwrite) | PWM (configured for hardware PWM)
     * @param option - For input pins, option can be used to configure the internal pullup
     *                 or pulldown resistors using options as described in the pud() documentation:
     *                 PULL_OFF, PULL_DOWN or PULL_UP.
     *                 For output pins, option defines the initial state of the pin (LOW, HIGH),
     *                 rather than having to issue a separate write() call. This can be critical
     *                 for devices which must have a stable value, rather than relying on the initial
     *                 floating value when a pin is enabled for output but hasn't yet been configured
     *                 with a value.
     */
    mode(pin: number, mode: number, option?: number): void;

    /**
     * Read the current value of pin, returning either 1 (high) or 0 (low).
     *
     * This can help with timing-critical code where the JavaScript function
     * call overhead of calling mode() first is enough to miss input data.
     * Altering the pullup state is not supported, as on many devices this
     * requires a delay to activate, defeating the point of this feature.
     *
     * @param pin - pin number
     * @param mode - default = 0, non-zero will perform a switch to input mode before reading
     * @returns current value of pin, HIGH or LOW
     */
    read(pin: number, mode?: number): number;

    /**
     * Read length bits from pin into buffer as fast as possible.
     * This is useful for devices which send out information faster than the
     * JavaScript function call overhead can handle, e.g. if you need
     * microsecond accuracy.
     *
     * @param pin - pin number
     * @param buffer - incoming data
     * @param length - number of bits to read, defaults to buffer.length
     * @param mode - default = 0, non-zero will perform a switch to input mode before reading
     */
    readbuf(pin: number, buffer: Buffer, length?: number, mode?: number): void;

    /**
     * Set a pin to high or low, using either the HIGH/LOW constants,
     * or simply 1 or 0.
     *
     * @param pin - pin number
     * @param value - pin value: HIGH or LOW
     */
    write(pin: number, value: number): void;

    /**
     * Write bits to pin from buffer as fast as possible.
     *
     * @param pin - pin number
     * @param buffer - bits
     * @param length - number of bits from buffer to write, defaults to buffer.length
     */
    writebuf(pin: number, buffer: Buffer, length?: number): void;

    /**
     * Read the current state of the GPIO pad control for the specified
     * GPIO group. On current models of Raspberry Pi there are three groups
     * with corresponding defines:
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
     * @note Note that the pad control registers are not available via /dev/gpiomem,
     * so you will need to use init({gpiomem: false}) and run as root.
     *
     * @param group - pad group: PAD_GROUP_0_27, PAD_GROUP_28_45 or PAD_GROUP_46_53
     * @returns The current state of the GPIO pad control for the specified
     * GPIO group
     */
    readpad(group: number): number;

    /**
     * Write control settings to the pad control for group. Uses the same
     * defines as readpad().
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
     * @note Note that the pad control registers are not available via /dev/gpiomem,
     * so you will need to use init({gpiomem: false}) and run as root.
     *
     * @param group - GPIO group to update: PAD_GROUP_0_27, PAD_GROUP_28_45 or PAD_GROUP_46_53
     * @param control - GPIO pad control state
     */
    writepad(group: number, control: number): void;

    /**
     * Configure the pin's internal pullup or pulldown resistors
     *
     * @param pin - pin to configure
     * @param state - PULL_OFF | PULL_DOWN | PULL_UP
     */
    pud(pin: number, state: number): void;

    /**
     * Watch pin for changes and execute the callback cb() on events.
     * cb() takes a single argument, the pin which triggered the callback.
     *
     * The optional direction argument can be used to watch for specific events:
     * POLL_LOW: poll for falling edge transitions to low.
     * POLL_HIGH: poll for rising edge transitions to high.
     * POLL_BOTH: poll for both transitions (the default).
     *
     * Due to hardware/kernel limitations we can only poll for changes, and
     * the event detection only says that an event occurred, not which one.
     * The poll interval is a 1ms setInterval() and transitions could come
     * in between detecting the event and reading the value.
     * Therefore this interface is only useful for events which transition
     * slower than approximately 1kHz.
     *
     * To stop watching for pin changes, call poll() again, setting the
     * callback to null.
     *
     * @param pin - pin to poll
     * @param cb - callback with the pin that changed
     * @param direction - POLL_LOW | POLL_HIGH | POLL_BOTH, default = POLL_BOTH
     */
    poll(pin: number, cb: RPIO.CallbackFunction | null, direction?: number): void;

    /**
     * Indicate that the pin will no longer be used, and clear any poll
     * events associated with it.
     *
     * The optional reset argument can be used to configure the state that
     * pin will be left in after close:
     *   rpio.PIN_RESET: return pin to rpio.INPUT and clear any pullup/pulldown resistors. This is the default.
     *   rpio.PIN_PRESERVE: leave pin in its currently configured state.
     *
     * @param pin - pin number to close
     * @param reset PIN_RESET | PIN_PRESERVE, default = PIN_RESET
     */
    close(pin: number, reset?: number): void;

    // I²C

    /**
     * Assign pins 3 and 5 to i²c use. Until i2cEnd() is called they won't
     * be available for GPIO use.
     * Calls init() if it hasn't already been called, with gpiomem: false
     * set. Hardware i²c support requires /dev/mem access and therefore root.
     * The pin assignments are:
     * Pin 3: SDA (Serial Data)
     * Pin 5: SCL (Serial Clock)
     */
    i2cBegin(): void;

    /**
     * Configure the slave address. This is between 0 - 0x7f, and it can be helpful to
     * run the i2cdetect program to figure out where your devices are if you are unsure.
     *
     * @param address - between 0 - 0x7f
     */
    i2cSetSlaveAddress(address: number): void;

    /**
     * Set the baud rate - directly set the speed in hertz.
     *
     * @param baudRate - baudRate in hertz
     */
    i2cSetBaudRate(baudRate: number): void;

    /**
     * Read from the i²c slave.
     *
     * @param buffer - holds the read bits
     * @param length - number of bits to read, defaults to buffer.length
     * @returns a status code
     */
    i2cRead(buffer: Buffer, length?: number): RPIO.I2cStatusCode;

    /**
     * Write to the i²c slave.
     *
     * @param buffer - bits to write
     * @param length - number of bits in buffer to transfer, default = buffer.length
     * @returns a status code
     */
    i2cWrite(buffer: Buffer, length?: number): RPIO.I2cStatusCode;

    /*
     * Read bytes from a register into a buffer after issuing a repeated start,
     * required by e.g. MPL3115A2 pressure and temperature sensor.
     * See the bcm2835 documentation for more information.
     *
     * @param register - register to read
     * @param buffer - store for read bits
     * @param length - the max number of bits to read, default = buffer.length
     * @returns a status code
     */
    i2cReadRegisterRestart(register: number, buffer: Buffer, length?: number): RPIO.I2cStatusCode;

    /*
     * Write cmdlen commands from cmdbuf to device before issuing a repeated
     * start and reading rlen bytes into rbuf, for e.g. MLX90620.
     * @param cmdBuf
     * @param cmdLen
     * @param rbuf
     * @param rlen
     * @returns a status code
     */
    i2cWriteReadRestart(cmdbuf: Buffer, cmdlen: number, rbuf: Buffer, rlen: number): RPIO.I2cStatusCode;

    /**
     * Set the baud rate.
     *
     * @param clockDivider - a divisor of the base 250MHz rate
     */
    i2cSetClockDivider(clockDivider: number): void;

    /**
     * Turn off the i²c interface and return the pins to GPIO.
     */
    i2cEnd(): void;

    // PWM

    /**
     * Set the PWM refresh rate.
     *
     * @param clockDivider: power-of-two divisor of the base 19.2MHz rate,
     *                      with a maximum value of 4096 (4.6875kHz).
     */
    pwmSetClockDivider(clockDivider: number): void;

    /**
     * Set the PWM range, i.e., resolution, for a pin.
     * This determines the maximum pulse width.
     *
     * @param pin
     * @param range - the resolution, maximum pulse width
     */
    pwmSetRange(pin: number, range: number): void;

    /**
     * Set the PWM width for a pin.
     *
     * @param pin
     * @param data - set the PWM width on a pin. Must be less range.
     */
    pwmSetData(pin: number, data: number): void;

    // SPI

    /**
     * Switch pins 119, 21, 23, 24 and 25 (GPIO7-GPIO11) to SPI mode.
     * Once SPI is enabled, the SPI pins are unavailable for GPIO use until
     * spiEnd() is called.
     *
     * SPI requires gpiomem: false and root privileges. spiBegin() will call
     * init() with the appropriate values if you do not explicitly call it yourself.
     *
     *  Pin | Function
     * -----|----------
     *   19 |   MOSI
     *   21 |   MISO
     *   23 |   SCLK
     *   24 |   CE0
     *   26 |   CE1
     */
    spiBegin(): void;

    /**
     * Choose which of the chip select / chip enable pins to control.
     *
     *  Value | Pin
     *  ------|---------------------
     *    0   | SPI_CE0 (24 / GPIO8)
     *    1   | SPI_CE1 (26 / GPIO7)
     *    2   | Both
     *
     * @param cePin - 0 | 1 | 2
     */
    spiChipSelect(cePin: number): void;

    /**
     * If your device's CE pin is active high, use spiSetCSPolarity() to change the polarity.
     * Commonly chip enable (CE) pins are active low, this is the default.
     *
     * @param cePin
     * @param polarity LOW | HIGH
     */
    spiSetCSPolarity(cePin: number, polarity: number): void;

    /**
     * Set the SPI clock speed.
     *
     * @param clockDivider: an even divisor of the base 250MHz rate ranging between 0 and 65536.
     */
    spiSetClockDivider(clockDivider: number): void;

    /**
     * Set the SPI Data Mode:
     *  Mode | CPOL | CPHA
     *  -----|------|-----
     *    0  |  0   |  0
     *    1  |  0   |  1
     *    2  |  1   |  0
     *    3  |  1   |  1
     *
     * @param mode - spi data mode, 0 | 1 | 2 | 3, default = 0
     */
    spiSetDataMode(mode: number): void;

    /**
     * Transfer data. Data is sent and received in 8-bit chunks via buffers
     * which should be the same size.
     *
     * @param txBuffer - data to send
     * @param rxBuffer - data received
     * @param txLength - length of txBuffer, rxBuffer should be same length
     */
    spiTransfer(txBuffer: Buffer, rxBuffer: Buffer, txLength: number): void;

    /**
     * Send data and do not care about the data coming back.
     *
     * @param txBuffer - data to send
     * @param txLength - length of data to send
     */
    spiWrite(txBuffer: Buffer, txLength: number): void;

    /**
     * Release the pins back to general purpose use.
     */
    spiEnd(): void;

    // Misc

    /**
     * Sleep for n seconds.
     * @param seconds - number of seconds to sleep
     */
    sleep(seconds: number): void;

    /**
     * Sleep for n milliseconds.
     * @param milliseconds - milliseconds to sleep
     */
    msleep(milliseconds: number): void;

    /**
     * Sleep for n microseconds.
     * @param microseconds - microseconds to sleep
     */
    usleep(microseconds: number): void;

    /**
     * Callback for library warning messages.
     *
     * @param event - listen for 'warn' events
     * @param callback - callback function recieving the library warning message
     */
    on(event: "warn", callback: (msg: string) => void): unknown;

    // Constants:

    LOW: number;
    HIGH: number;

    /*
     * Supported function select modes.  INPUT and OUTPUT match the bcm2835
     * function select integers.  PWM is handled specially.
     */
    INPUT: number;
    OUTPUT: number;
    PWM: number;

    /*
     * Configure builtin pullup/pulldown resistors.
     */
    PULL_OFF: number;
    /** Pull resistor down */
    PULL_DOWN: number;
    /** Pull resistor up */
    PULL_UP: number;

    /*
     * Pin edge detect events.  Default to both.
     */
    /** Falling edge detect */
    POLL_LOW: number;
    /** Rising edge detect */
    POLL_HIGH: number;
    /** POLL_LOW | POLL_HIGH */
    POLL_BOTH: number;
    /*
     * Pin close options
     */
    /** Preserve the current status on a pin when it is closed. */
    PIN_PRESERVE: number;
    /** Default pin reset value */
    PIN_RESET: number;

    /*
     * GPIO Pad Control
     */
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
        gpiomem?: boolean | undefined;

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
         * physical: use the physical P01-P40 header layout
         */
        mapping?: "gpio" | "physical" | undefined;

        /**
         * Mock mode is a dry-run environment where everything except pin access is performed. This is useful for testing scripts, and can also be used on systems which do not support GPIO at all.
         * If rpio is executed on unsupported hardware it will automatically start up in mock mode, and a warn event is emitted. By default the warn event is handled by a simple logger to stdout, but this can be overridden by the user creating their own warn handler.
         * The user can also explicitly request mock mode, where the argument is the type of hardware they wish to emulate.
         */
        mock?:
            | "raspi-b-r1"
            | "raspi-a"
            | "raspi-b"
            | "raspi-a+"
            | "raspi-b+"
            | "raspi-2"
            | "raspi-3"
            | "raspi-zero"
            | "raspi-zero-w"
            | undefined;

        /**
         * Rpio automatically unmaps and clears all memory maps when the node process exits.
         */
        close_on_exit?: boolean | undefined;
    }

    /**
     * Poll event callback function
     */
    interface CallbackFunction {
        /**
         * @param pin: The pin which triggered the callback.
         */
        (pin: number): void;
    }

    /**
     * Return codes for I2C read and write operations.
     */
    enum I2cStatusCode {
        OK = 0x00, /*!< Success */
        ERROR_NACK = 0x01, /*!< Received a NACK */
        ERROR_CLKT = 0x02, /*!< Received Clock Stretch Timeout */
        ERROR_DATA = 0x04, /*!< Not all data is sent / received */
    }
}
