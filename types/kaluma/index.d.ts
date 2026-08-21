// ### GLOBAL CONSTANTS ###

declare const LOW: 0;
declare const HIGH: 1;
declare const INPUT: 0;
declare const OUTPUT: 1;
declare const INPUT_PULLUP: 2;
declare const INPUT_PULLDOWN: 3;
declare const LOW_LEVEL: 1;
declare const HIGH_LEVEL: 2;
declare const FALLING: 4;
declare const RISING: 8;
declare const CHANGE: 12;

// ### GLOBAL OBJECTS ###

/**
 * The board object provide the board specific properties which you are currently using.
 */
declare const board: BoardObject;

/**
 * The console object provide the simple debugging console which provide a log and error message.
 */
declare const console: ConsoleObject;

// ### GLOBAL FUNCTIONS ###

/**
 * Read and return analog signal value from the ADC **`pin`**. A `RangeError` will be thrown if the **`pin`** does not support ADC function.
 * @param pin The pin number which can support ADC function.
 * @returns The value is in between `0.0` \~ `1.0`
 */
declare function analogRead(pin: number): number;

/**
 * Generate PWM signal with specific **`frequency`** and **`duty`** to the PWM **`pin`**. A `RangeError` will be thrown if **`pin`** does not support PWM function.
 * @param pin The pin number which can support PWM function.
 * @param duty The PWM duty cycle between `0.0` and `1.0`. **Default:** `0.5`
 * @param frequency The PWM frequency in Hz. **Default:** `490`Hz
 */
declare function analogWrite(pin: number, duty?: number, frequency?: number): void;

/**
 * Generate sound tone(PWM) on the PWM **`pin`** for **`duration`**. A **`frequency`** and **`duty`** can be set. A `RangeError` will be thrown if **`pin`** does not support PWM function.
 * @param pin The pin number which can support PWM function.
 * @param frequency The PWM frequency in Hz. Default: 261.626Hz (C Key)
 * @param options
 */
declare function tone(pin: number, frequency?: number, options?: AnalogIOToneOptions): void;

/**
 * Stop the tone one the PWM **`pin`**. A `RangeError` will be thrown if **`pin`** does not support PWM function.
 * @param pin The pin number which can support PWM function.
 */
declare function noTone(pin: number): void;

/**
 * Set the mode of the GPIO pin to INPUT , OUTPUT, INPUT_PULLUP, or INPUT_PULLDOWN. A RangeError will be thrown if pin does not support GPIO function. Use INPUT_PULLUPwhen you want to enable internal pull-up for this pin and use INPUT_PULLDOWN when you want to enable internal pull-down.
 * @param pin The pin number (or array of pin numbers) which can support GPIO function.
 * @param mode The pin mode INPUT (0) or OUTPUT (1) or INPUT_PULLUP (2) or INPUT_PULLDOWN (3). Default: INPUT
 */
declare function pinMode(pin: number | number[], mode?: number): void;

/**
 * Read the digital input from the GPIO INPUT pin. A RangeError will be thrown if pin does not support GPIO function.
 * @param pin The pin number which can support GPIO function.
 * @returns The return value is HIGH (1) or LOW (0)
 */
declare function digitalRead(pin: number): number;

/**
 * Set the GPIO OUTPUT pin to HIGH or LOW. A RangeError will be thrown if pin does not support GPIO function.
 * @param pin The pin number (or array of pin numbers) which can support GPIO function.
 * @param value The value could be HIGH (1) or LOW (0). If an array of pin numbers are given a number (greater than 1) can be used. Default: LOW
 */
declare function digitalWrite(pin: number | number[], value?: number): void;

/**
 * Set the GPIO OUTPUT pin to the reverse state of the current state. Set to HIGH if the current state is LOW. Set to LOW if the current state is HIGH. A RangeError will be thrown if pin does not support GPIO function.
 * @param pin The pin number which can support GPIO function.
 */
declare function digitalToggle(pin: number): void;

/**
 * Run the callback function when the events is triggered on the pin. There are five events. The FALLING event is triggered when the pin state is changed from HIGH to LOW. The LOW_LEVEL (1)event is triggered when the pin is LOW state and The HIGH_LEVEL (2) event is triggered when the pin is HIGH state. The RISING (1) event is triggered when the pin state is changed from LOW to HIGH. The CHANGE event is triggered when the pin state is changed to any states, which means the CHANGE event is the same as the FALLING + RISING events. The debounce time can be set when you can see the bouncing on the GPIO pin. A RangeError will be thrown if pin does not support GPIO function.
 * @param callback The function is called when the event is triggered on the pin.
 * @param pin The pin number which can support GPIO function.
 * @param events set the events of the pin. There are five events, LOW_LEVEL (1), HIGH_LEVEL (2) FALLING (4), RISING (8), and CHANGE (12). Default: CHANGE.
 * @param debounce debounce time in ms (milliseconds). Default: 0ms
 */
declare function setWatch(callback: (pin: number) => void, pin: number, events?: number, debounce?: number): number;

/**
 * Stop watching the event which is set by setWatch() function.
 * @param id The ID of the watcher which is the return value of the @see setWatch function.
 */
declare function clearWatch(id: number): void;

/**
 * Read the pin state change timing from startState. It returns the microseconds state changing timing if the state is changed count times or for timeout microseconds.
 * @param pin The pin number which can support GPIO function.
 * @param count The number of pulse to read.
 * @param options
 */
declare function pulseRead(pin: number, count: number, options?: PulseReadOptions): number[];

/**
 * Generates the digital pulse on the pin with microseconds timing. The state change timing from startState. It returns the number of the written pulse.
 * @param pin The pin number which can support GPIO function.
 * @param startState Start to write the pulse from this state.
 * @param interval Pulse timing in microseconds.
 * @returns Length of the written pulse, it's the same as the length of the interval array.
 */
declare function pulseWrite(pin: number, startState: number, interval: number[]): number;

/**
 * Print out data to the console. The main difference from console.log() is that it do not print a carriage return and a new line character (\r\n) in the end.
 * @param data Data which is shown in the console.
 */
declare function print(...data: any): void;

/**
 * Initializes the pseudo-random number generator. When you use Math.random(), it generate always the same random sequence. If you want to generate different random number sequence, you need to provide different seed number.
 * @param seed A seed number to initialize.
 */
declare function seed(seed: number): void;

/** Returns a base64 encoded string from binary data.
 * @param data Binary data to encode.
 * @returns Base64 encoded string.
 */
declare function btoa(data: string | Uint8Array): string;

/**
 * Returns a decoded binary data from a base64 encoded string.
 * @param encodedData Base64 encoded string data.
 * @returns Decoded binary data.
 */
declare function atob(encodedData: string): Uint8Array;

/**
 * Encodes URI (Uniform Resource Identifier) component using [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding). This function escapes all characters excepts `A-Z a-z 0-9 - _ . ! ~ * ' ( )`.
 * @param data Data to encode.
 * @returns Encoded data.
 */
declare function encodeURIComponent(data: string): string;

/**
 * Decodes URI (Uniform Resource Identifier) component using [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding).
 * @param data Data to decode.
 * @returns Decoded data.
 */
declare function decodeURIComponent(data: string): string;

/**
 * Loads a builtin module
 * @param module_name Module Name which would be used in the script.
 * @returns Return `exports` object of the loaded module.
 */
declare function require(module_name: string): any;

type InterruptEvent = 4 | 8 | 12;
type InterruptCallback = (pin: number, event: InterruptEvent) => void;

/**
 * Run the callback function when the events is triggered on the pin. There are three events for the interrupts. The FALLING (4) event is triggered when the pin state is changed from HIGH to LOW. The RISING (8) event is triggered when the pin state is changed from LOW to HIGH. The CHANGE (12) event is triggered when the pin state is changed to any states, which means the CHANGE event is the same as the FALLING + RISING events.
 * @param pin The pin number which can support GPIO function.
 * @param callback The function is called when the event is triggered on the pin. the pin and event are the arguments of the callback function.
 * @param events Set the events of the pin. There are three events,FALLING (4), RISING (8), and CHANGE (12). Default: CHANGE.
 */
declare function attachInterrupt(pin: number, callback: InterruptCallback, events?: InterruptEvent): void;

/**
 * Remove the interrupts on the pin which is added by @see attachInterrupt function.
 * @param pin The pin number which can support GPIO function.
 */
declare function detachInterrupt(pin: number): void;

/**
 * Enable all the interrupts which is attached by @see attachInterrupt function. The interrupts are automatically enabled when @see attachedInterrupts is called so it is not needed to use this function if you didn't call @see disableInterrupts function.
 */
declare function enableInterrupts(): void;

/**
 * Disable all the interrupts which is attached by @see attachInterrupt function. The interrupts will be enabled when @see enableInterrupts is called.
 */
declare function disableInterrupts(): void;

/**
 * Waits for msec milliseconds.
 *
 * **Warning:** This function would block all the process for msec milliseconds, so please use it carefully. It will block the entire console. setTimeout, setInterval is strongly recommended instead of this function.
 * @param msec The delay value in milliseconds.
 */
declare function delay(msec: number): void;

/**
 * Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 * @returns The current timestamp in milliseconds.
 */
declare function millis(): number;

/**
 * Waits for usec microseconds. It provides finer grained time delays than delay().
 *
 * **Warning:** This function is not so time correct, so don't use it for time critical job.
 * @param usec The delay value in microseconds.
 */
declare function delayMicroseconds(usec: number): void;

/**
 * Returns the number of microseconds elapsed since the system boot. Typically it will overflow after approximately 70 minutes.
 *
 * **Warning:** This function is not so time correct, so don't use it for time critical job.
 * @returns The current timestamp in microseconds.
 */
declare function micros(): number;

/**
 * Set the timeout event which call the callback function after delay milliseconds.
 * @param callback The function which is called after timeout milliseconds
 * @param timeout The timeout value in milliseconds.
 * @returns Timer id.
 */
declare function setTimeout(callback: () => void, timeout: number): number;

/**
 * Set the interval event which call the callback function every **interval** milliseconds.
 * @param callback The function which is called at every interval milliseconds.
 * @param timeout The time interval value in milliseconds.
 * @returns Timer id.
 */
declare function setInterval(callback: () => void, timeout: number): number;

/**
 * Clear timeout event which is set using setTimeout().
 * @param id Timer id.
 */
declare function clearTimeout(id: number): void;

/**
 * Clear interval event which is set using setInterval().
 * @param id Timer id.
 */
declare function clearInterval(id: number): void;

// ### GLOBAL CLASSES ###

/**
 * This class represents internal system error. Please check all error codes in [err.h](https://github.com/kameleon-project/kameleon/blob/master/include/err.h).
 */
declare class SystemError {
    /**
     * An error code defined in [err.h](https://github.com/kameleon-project/kameleon/blob/master/include/err.h).
     */
    errno: number;

    /**
     * A string representation of errno.
     */
    code: string;
}

/**
 * Converts a string into stream of bytes.
 */
declare class TextEncoder {
    /**
     * Creates a new instance of TextEncoder
     * @param label Encoding type. Default: 'utf-8'. Currently supported encoding types are 'ascii' and 'utf-8'.
     */
    constructor(label?: "ascii" | "utf-8");

    /**
     * Encodes the input string and returns the encoded buffer.
     * @param input String to encode
     * @returns Returns a stream of bytes that have been encoded
     */
    encode(input: string): Uint8Array;

    /**
     * Encoding type
     */
    encoding: string;
}

/**
 * Converts a stream of bytes into a string.
 */
declare class TextDecoder {
    /**
     * Creates a new instance of TextDecoder
     * @param label Encoding type. Default: 'utf-8'. Currently supported encoding types are 'ascii' and 'utf-8'.
     */
    constructor(label?: "ascii" | "utf-8");

    /**
     * Decodes the input buffer and returns the decoded string.
     * @param input buffer to decode
     * @returns Returns a string decoded from the input buffer
     */
    decode(input: Uint8Array): string;

    /**
     * Encoding type.
     */
    encoding: string;
}

// ### INTERFACES ###

/**
 * Options for the @see pulseRead function
 */
interface PulseReadOptions {
    /**
     * timeout in us(microseconds). Default: 1000000
     */
    timeout?: number;

    /**
     * Start to read the pulse from this state. Default: undefined
     */
    startState?: number;

    /**
     * Pin mode to read pulse.
     */
    mode?: number;

    /**
     * If trigger options is given, it generates trigger pulse just before to read pulse. The fields of trigger object is corresponds to the parameter of pulseWrite(). It is useful to avoid the delay time between triggering and pulse reading.
     */
    trigger?: {
        /**
         * Pin number to trigger. Default: same with pin
         */
        pin?: number;

        /**
         * Start state for trigger. Default: LOW
         */
        startState?: number;

        /**
         * Pulse timing in microseconds. Refer to pulseWrite.
         */
        interval?: number[];
    };
}

/**
 * Options for the tone() function
 */
interface AnalogIOToneOptions {
    /**
     * The duration in milliseconds if a duration is not 0, duration 0 is forever. **Default:** `0`
     */
    duration?: number;

    /**
     * The PWM duty cycle between `0.0` and `1.0`. **Default:** `0.5`
     */
    duty?: number;

    /**
     * The pin number where an inverted signal to be generated. **Default:** `-1`.
     */
    inversion?: number;
}

/**
 * An instances of ADC represents a ADC object.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
interface IADC {
    /**
     * This method returns the analog value read from the pin. A RangeError will be thrown if adc.pin does not support ADC function.
     * @returns The return value is ADC object.
     */
    read(): number;

    /**
     * The pin number which can support ADC function.
     */
    pin: number;
}

interface ATCommandConstructorOptions {
    /**
     * rint all data received from UART if true.
     */
    debug?: boolean;
}

interface ATCommandSendOptions {
    /**
     * Timeout for waiting response. Default: 10000 (10 sec). When timeout, callback is called with 'TIMEOUT' for the second parameter.
     */
    timeout?: number;

    /**
     * If true, cmd is sent as data without appending '\r\n' in the end. Default: false.
     */
    sendAsData?: boolean;
}

/**
 * An instances of ATCommand represents a AT command handler. This class is a subclass of EventEmitter.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
interface IATCommand extends IEventEmitter {
    /**
     * Sends AT command and wait for expected response.
     * @param cmd AT command (or data) to send. If Uint8Array type is given, it send as data.
     * @param cb Callback called when expected response is arrived. Result status. One of array items of match parameter or 'TIMEOUT' or undefined.
     * @param waitFor Indicates what is expected response of the AT command. If a number of given, waits for the given time in milliseconds. Default: ['OK', 'ERROR', 'FAIL']
     * @param options Options for sending an AT command
     */
    send(
        cmd: string | Uint8Array,
        cb: (result: string) => string,
        waitFor?: number | string[],
        options?: ATCommandSendOptions,
    ): void;

    /**
     * Add a handler. If there is a line starts with the match parameter in the response buffer, the handler function will be called. The data from start to the matched line are removed from the response buffer. If you want to keep the response buffer without any changes, then just return false.
     * @param match A match string.
     * @param handler Handler function
     */
    addHandler(match: string, handler: (line: string, buffer: string) => void): void;

    /**
     * Remove a line handler.
     * @param match A match string.
     */
    removeHandler(match: string): void;

    /**
     * Response buffer for the responses of AT commands.
     */
    buffer: string;
}

/**
 * An interface representing the @see board object provide the board specific properties which you are currently using.
 */
interface BoardObject {
    /**
     * The ID of the target board.
     */
    name: string;

    /**
     * The Uinque ID of the target board. ex) abcdefg, serial number of the board
     */
    uid: string;

    /**
     * The pin number of the on-board LED.
     */
    LED: number;

    /**
     * Creates an instances of GPIO represents a GPIO pin.
     * @param pin The pin number which can support GPIO function.
     * @param mode The pin mode INPUT (0) , OUTPUT (1) , INPUT_PULLUP (2) or INPUT_PULLDOWN (3) . Default: INPUT
     */
    gpio(pin: number, mode?: number): IGPIO;

    /**
     * Creates an instances of LED represents a LED.
     * @param pin Pin number where LED connected.
     */
    led(pin: number): ILED;

    /**
     * Creates an instances of the Button class. Note that this class uses setWatch() function internally.
     * @param pin The pin number which can support button function.
     * @param options Options for constructing a Button
     */
    button(pin: number, options?: ButtonOptions): IButton;

    /**
     * Creates an instances of PWM represents a PWM object.
     * @param pin The pin number which can support PWM function.
     * @param frequency The PWM frequency in Hz. Default: 490Hz
     * @param duty The PWM duty cycle between 0.0 and 1.0. Default: 1.0
     */
    pwm(pin: number, frequency?: number, duty?: number): IPWM;

    /**
     * Creates an instances of ADC represents a ADC object.
     * @param pin The pin number which can support ADC function.
     */
    adc(pin: number): IADC;

    /**
     * Creates an instances of I2C represents a I2C bus.
     * @param bus I2C bus number.
     * @param options Options for constructing a I2C
     */
    i2c(bus: number, options?: I2COptions): II2C;

    /**
     * Creates an instances of SPI represents an SPI object.
     * @param bus SPI bus number.
     * @param options Options for constructing an SPI
     */
    spi(bus: number, options?: SPIOptions): ISPI;

    /**
     * Creates an instances of UART represents a UART port.
     * @param port UART port number. This value should be less than max port number.
     * @param options Options for constructing an UART port
     */
    uart(port: number, options?: UARTOptions): IUART;
}

interface ButtonOptions {
    /**
     * The pin mode. Default: INPUT_PULLUP.
     */
    mode?: number;

    /**
     * The the event of the pin. There are three events, FALLING (0), RISING (1), and CHANGE (2). Default: FALLING.
     */
    event?: number;

    /**
     * debounce time in ms(milliseconds). Default: 50ms
     */
    debounce?: number;
}

/**
 * An instances of Button represents a button object. This class is a subclass of EventEmitter.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
interface IButton extends IEventEmitter<"click"> {
    /**
     * Reads the current state of the button
     * @returns The return value is HIGH (1) or LOW (0)
     */
    read(): number;

    /**
     * Closes the I/O watcher for the button.
     */
    close(): void;
}

type ListenerFn = (...args: any) => void;

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IEventEmitter<T = string> {
    /**
     * Add the listener function to the end of the listener array for the event named eventName.
     * @param eventName The name of event
     * @param listener The callback function
     */
    addListener(eventName: T, listener: ListenerFn): void;

    /**
     * Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
     * @param eventName The name of event
     * @param args Arguments to be passed to the listener functions.
     */
    emit(eventName: T, ...args: any): void;

    /**
     * Add the listener function to the end of the listener array for the event named eventName.
     * @param eventName The name of event
     * @param listener The callback function
     */
    on(eventName: T, listener: ListenerFn): void;

    /**
     * Add one-time listener for the event named eventName. When the event is triggered, the listener function is called and then removed from the listener array of the event.
     * @param eventName The name of event.
     * @param listener The callback function.
     */
    once(eventName: T, listener: ListenerFn): void;

    /**
     * Remove the listener function from the listener array of the event name eventName.
     * @param eventName The name of event
     * @param listener The callback function
     */
    removeListener(eventName: T, listener: ListenerFn): void;

    /**
     * Remove all listeners of the event named eventName.
     * @param eventName The name of event.
     */
    removeAllListeners(eventName?: T): void;

    /**
     * Remove the listener function from the listener array of the event name eventName.
     * @param eventName The name of event
     * @param listener The callback function
     */
    off(eventName: T, listener: ListenerFn): void;

    /**
     * Return all listeners of the given event.
     * @param eventName The name of event
     */
    listeners(eventName: T): ListenerFn[];

    /**
     * Return the number of listeners of the given event.
     * @param eventName The name of event
     */
    listenerCount(eventName: T): number;
}

interface ConsoleObject {
    /**
     * Print out the data. to the console. The all data are converted to String object automatically so there's no need to change it to String object.
     * @param data Data which is shown in the console.
     */
    log(...data: any[]): void;

    /**
     * Print out the data with red color to the console. The all data and arguments are converted to String object automatically so there's no need to change it to String object.
     * @param data Data which is shown in the console.
     */
    error(...data: any[]): void;
}

type IrqCallbackFn = (pin: number, event: number) => void;

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IGPIO {
    /**
     * Read the value from the GPIO pin.
     * @returns The return value is HIGH (1) or LOW (0)
     */
    read(): number;

    /**
     * Writes a value to the GPIO pin.
     * @param value The value could be HIGH (1) or LOW (0).
     */
    write(value: 0 | 1): void;

    /**
     * Toggles the output value of the GPIO pin.
     */
    toggle(): void;

    /**
     * Set the GPIO pin to LOW.
     */
    low(): void;

    /**
     * Set the GPIO pin to HIGH.
     */
    high(): void;

    /**
     * Add interrupt on the GPIO pin. Run the callback function when the event is triggered on the pin. There are three events for the interrupts. The FALLING (4) event is triggered when the pin state is changed from HIGH to LOW. The RISING (8) event is triggered when the pin state is changed from LOW to HIGH. The CHANGE (12) event is triggered when the pin state is changed to any states, which means the CHANGE event is the same as the FALLING + RISING events.
     * @param callback The function is called when the event is triggered on the pin. the pin and event are the arguments of the callback function.
     * @param event set the event of the pin. There are three events,FALLING (4), RISING (8), and CHANGE (12). Default: CHANGE.
     */
    irq(callback: IrqCallbackFn, event?: InterruptEvent): void;

    /**
     * Pin number of the GPIO object.
     */
    pin: number;

    /**
     * Current mode of the GPIO pin. The value is INPUT (0) , OUTPUT (1) , INPUT_PULLUP (2) , or INPUT_PULLDOWN (3) .
     */
    mode: 0 | 1 | 2 | 3;
}

interface I2COptions {
    /**
     * I2C mode, I2C.MASTER or I2C.SLAVE mode. Default: I2C.MASTER
     */
    mode?: number;

    /**
     * Clock speed (bit/s) for Master mode.
     */
    baudrate?: number;

    /**
     * SCL pin number. -1 Not to use this pin. Default: board dependent.
     */
    scl?: number;

    /**
     * SDA pin number. -1 Not to use this pin. Default: board dependent.
     */
    sda?: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface II2C {
    /**
     * This method writes data to the specified address (slave device) and returns the number of bytes written. This method can be called only in master mode.
     * @param data Data to write.
     * @param address I2C slave address. (7bit)
     * @param timeout Timeout in milliseconds. Default: 5000.
     * @param count Indicates how many times to write data. Default: 1
     * @returns The number of bytes written, -1 if it failed to write or timeout.
     */
    write(data: Uint8Array | string, address: number, timeout?: number, count?: number): number;

    /**
     * This method read data from the specified address (slave device) and returns an array buffer object. This method can be called only in master mode.
     * @param length Data length to read.
     * @param address I2C slave address. (7bit)
     * @param timeout Timeout in milliseconds. Default: 5000.
     * @returns An array buffer having data read, null if failed to read.
     */
    read(length: number, address: number, timeout?: number): Uint8Array;

    /**
     * This method writes data to the memory address in the specified slave device and returns the number of bytes written. This method can be called only in master mode.
     * @param data Data to write.
     * @param address I2C slave address. (7bit)
     * @param memAddress Memory address to write.
     * @param memAddressSize Size of memAddress. Set 16 when memAddress is 16-bit address, or set 8 if memAddress is 8-bit address. Default: 8.
     * @param timeout Timeout in milliseconds. Default: 5000.
     * @param count Indicates how many times to write data. Default: 1
     * @returns The number of bytes written, -1 if failed to write or timeout.
     */
    memWrite(
        data: Uint8Array | string,
        address: number,
        memAddress: number,
        memAddressSize?: number,
        timeout?: number,
        count?: number,
    ): number;

    /**
     * This method read data at memory address from the specified slave device and returns an array buffer object. This method can be called only in master mode.
     * @param length Data length to read.
     * @param address I2C slave address. (7bit)
     * @param memAddress Memory address to read.
     * @param memAddressSize Size of memAddress. Set 16 when memAddress is 16-bit address, or set 8 when memAddress is 8-bit address. Default: 8.
     * @param timeout Timeout in milliseconds. Default: 5000
     * @returns A buffer having data read, null if failed to read.
     */
    memRead(length: number, address: number, memAddress: number, memAddressSize?: number, timeout?: number): Uint8Array;

    /**
     * This method closes the I2C bus.
     */
    close(): void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface ILED {
    /**
     * Turns on the LED.
     */
    on(): void;

    /**
     * Turns off the LED.
     */
    off(): void;

    /**
     * This method toggles the LED.
     */
    toggle(): void;

    /**
     * Read the state of the LED.
     * @returns State of the LED. 1 means LED ON and 0 means LED OFF state.
     */
    read(): number;

    /**
     * Pin number of the LED.
     */
    pin: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface IPWM {
}

interface SPIOptions {
    /**
     * SPI.MODE_0 (CPOL=0/CPHA=0), SPI.MODE_1 (CPOL=0/CPHA=1), SPI.MODE_2 (CPOL=1/CPHA=0), or SPI.MODE_3 (CPOL=1/CPHA=1). Default: SPI.MODE_0.
     */
    mode?: number;

    /**
     * Baud rate. Default: 3000000, 3 Mbit/s
     */
    baudrate?: number;

    /**
     * SPI.MSB (0) or SPI.LSB (1) Default: SPI.MSB (0).
     */
    bitorder?: number;

    /**
     * SPI SCK pin number. -1 Not to use this pin. Default: board dependent.
     */
    sck?: number;

    /**
     *  SPI MOSI (TX) pin number. -1 Not to use this pin. Default: board dependent.
     */
    mosi?: number;

    /**
     * SPI MISO (RX) pin number. -1 Not to use this pin. Default: board dependent.
     */
    miso?: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface ISPI {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UARTOptions {
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface IUART {
}

// ### MODULES ###

/**
 * The adc module provides the ADC class which supports analog-digital conversion.
 */
declare module "adc" {
    /**
     * An instances of ADC represents a ADC object.
     */
    class ADC implements IADC {
        /**
         * Constructs a new instance of the ADC object
         * @param pin The pin number which can support ADC function.
         */
        constructor(pin: number);
        read(): number;
        pin: number;
    }
}

declare module "at" {
    import { EventEmitter } from "events";
    import { UART } from "uart";

    /**
     * An instances of ATCommand represents a AT command handler. This class is a subclass of EventEmitter.
     */
    class ATCommand extends EventEmitter implements IATCommand {
        /**
         * Create a AT command handler.
         * @param uart UART object where a device is connected which controlled by AT command.
         * @param options Options for creating an ATCommand
         */
        constructor(uart: UART, options?: ATCommandConstructorOptions);

        /** @inheritdoc */
        send(
            cmd: string | Uint8Array,
            cb?: (result: string) => string,
            waitFor?: number | string[],
            options?: ATCommandSendOptions,
        ): void;

        /** @inheritdoc */
        addHandler(match: string, handler: (line: string, buffer: string) => void): void;

        /** @inheritdoc */
        removeHandler(match: string): void;

        /** @inheritdoc */
        buffer: string;
    }
}

declare module "button" {
    // eslint-disable-next-line no-duplicate-imports
    import { EventEmitter } from "events";

    class Button extends EventEmitter<"click"> implements IButton {
        /**
         * Creates an instances of the Button class. Note that this class uses setWatch() function internally.
         * @param pin The pin number which can support button function.
         * @param options Options for constructing a Button
         */
        constructor(pin: number, options?: ButtonOptions);

        /** @inheritdoc */
        read(): number;

        /** @inheritdoc */
        close(): void;
    }
}

declare module "events" {
    /**
     * An instance of EventEmitter class will emits events. If you need to define a class emitting events, you can defined a class by extending from EventEmitter.
     */
    class EventEmitter<T = string> implements IEventEmitter<T> {
        /** @inheritdoc */
        addListener(eventName: T, listener: (...args: any[]) => void): void;

        /** @inheritdoc */
        emit(eventName: T, ...args: any): void;

        /** @inheritdoc */
        on(eventName: T, listener: (...args: any[]) => void): void;

        /** @inheritdoc */
        once(eventName: T, listener: (...args: any[]) => void): void;

        /** @inheritdoc */
        removeListener(eventName: T, listener: (...args: any[]) => void): void;

        /** @inheritdoc */
        removeAllListeners(eventName?: T): void;

        /** @inheritdoc */
        off(eventName: T, listener: ListenerFn): void;

        /** @inheritdoc */
        listeners(eventName: T): ListenerFn[];

        /** @inheritdoc */
        listenerCount(eventName: T): number;
    }
}

declare module "gpio" {
    /**
     * An instances of GPIO represents a GPIO pin.
     */
    class GPIO implements IGPIO {
        /**
         * Constructs a new instance of a GPIO
         * @param pin The pin number which can support GPIO function.
         * @param mode The pin mode INPUT (0) , OUTPUT (1) , INPUT_PULLUP (2) or INPUT_PULLDOWN (3) . Default: INPUT
         */
        constructor(pin: number, mode?: 0 | 1 | 2 | 3);

        /** @inheritdoc */
        read(): number;

        /** @inheritdoc */
        write(value: 0 | 1): void;

        /** @inheritdoc */
        toggle(): void;

        /** @inheritdoc */
        low(): void;

        /** @inheritdoc */
        high(): void;

        /** @inheritdoc */
        irq(callback: IrqCallbackFn, event?: 4 | 8 | 12): void;

        /** @inheritdoc */
        pin: number;

        /** @inheritdoc */
        mode: 0 | 1 | 2 | 3;
    }
}

declare module "i2c" {
    class I2C implements II2C {
        static MASTER: 0;

        /**
         * Not supported
         */
        static SLAVE: 1;

        /**
         * Creates an instances of I2C represents a I2C bus.
         * @param bus I2C bus number.
         * @param options Options for constructing a I2C
         */
        constructor(bus: number, options?: I2COptions);

        /** @inheritdoc */
        write(data: string | Uint8Array, address: number, timeout?: number, count?: number): number;

        /** @inheritdoc */
        read(length: number, address: number, timeout?: number): Uint8Array;

        /** @inheritdoc */
        memWrite(
            data: string | Uint8Array,
            address: number,
            memAddress: number,
            memAddressSize?: number,
            timeout?: number,
            count?: number,
        ): number;

        /** @inheritdoc */
        memRead(
            length: number,
            address: number,
            memAddress: number,
            memAddressSize?: number,
            timeout?: number,
        ): Uint8Array;

        /** @inheritdoc */
        close(): void;
    }
}

declare module "led" {
    class LED implements ILED {
        /**
         * Creates an instances of LED represents a LED.
         * @param pin Pin number where LED connected.
         */
        constructor(pin: number);

        /** @inheritdoc */
        on(): void;

        /** @inheritdoc */
        off(): void;

        /** @inheritdoc */
        toggle(): void;

        /** @inheritdoc */
        read(): number;

        /** @inheritdoc */
        pin: number;
    }
}

declare module "pwm" {
    class PWM implements IPWM {
    }
}

declare module "spi" {
    class SPI implements ISPI {
    }
}

declare module "uart" {
    class UART implements IUART {
    }
}
