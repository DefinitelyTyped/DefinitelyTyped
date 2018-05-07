// Type definitions for Espruino 1.94
// Project: http://www.espruino.com/
// Definitions by: Stanislav Berkov <https://github.com/stasberkov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare interface Object {
    removeListener(event: string, listener: any): any;
}

declare module "Wifi" {
    function connect(ssid: string, options: any, callback: (err: any) => any): any;
}

declare module "InfluxDB" {
    function setup(options: any): any;
    function write(data: string): any;
}

/**
 * <p>This is the built-in class for the Arduino-style pin namings on ST Nucleo boards</p>
 * 
 * @url http://www.espruino.com/Reference#Nucleo
 */
declare interface Nucleo {

    /**
     * 
     * @return  
     */
    new(): Nucleo;
}

/**
* 
*/
declare namespace Nucleo {

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_A0
     */
    var A0: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_A1
     */
    var A1: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_A2
     */
    var A2: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_A3
     */
    var A3: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_A4
     */
    var A4: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_A5
     */
    var A5: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D0
     */
    var D0: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D1
     */
    var D1: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D2
     */
    var D2: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D3
     */
    var D3: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D4
     */
    var D4: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D5
     */
    var D5: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D6
     */
    var D6: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D7
     */
    var D7: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D8
     */
    var D8: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D9
     */
    var D9: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D10
     */
    var D10: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D11
     */
    var D11: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D12
     */
    var D12: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D13
     */
    var D13: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D14
     */
    var D14: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_Nucleo_D15
     */
    var D15: Pin;
}

/**
* <p>This is a built-in class to allow you to use the ESP8266 NodeMCU boards&#39;s pin namings to access pins. It is only available on ESP8266-based boards.</p>
* 
* @url http://www.espruino.com/Reference#NodeMCU
*/
declare interface NodeMCU {

    /**
     * 
     * @return  
     */
    new(): NodeMCU;
}


/**
* 
*/
declare namespace NodeMCU {

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_A0
     */
    var A0: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D0
     */
    var D0: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D1
     */
    var D1: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D2
     */
    var D2: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D3
     */
    var D3: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D4
     */
    var D4: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D5
     */
    var D5: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D6
     */
    var D6: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D7
     */
    var D7: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D8
     */
    var D8: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D9
     */
    var D9: Pin;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_NodeMCU_D10
     */
    var D10: Pin;
}

/**
* <p>Creates a Queue Object</p>
* 
* @url http://www.espruino.com/Reference#l_Queue_Queue
*/
declare interface Queue {

    /**
     * 
     * @param queueName 
     * @return  
     */
    new(queueName: any): any;

    /**
     * <p>reads one character from queue, if available</p>
     * 
     * @url http://www.espruino.com/Reference#l_Queue_read
     */
    read(): void;

    /**
     * <p>Writes one character to queue</p>
     * 
     * @param char 
     * @url http://www.espruino.com/Reference#l_Queue_writeChar
     */
    writeChar(char: any): void;

    /**
     * <p>logs list of queues</p>
     * 
     * @url http://www.espruino.com/Reference#l_Queue_log
     */
    log(): void;
}

/**
* <p>Creates a Task Object</p>
* 
* @url http://www.espruino.com/Reference#l_Task_Task
*/
declare interface Task {

    /**
     * 
     * @param taskName 
     * @return  
     */
    new(taskName: any): any;

    /**
     * <p>Suspend task, be careful not to suspend Espruino task itself</p>
     * 
     * @url http://www.espruino.com/Reference#l_Task_suspend
     */
    suspend(): void;

    /**
     * <p>Resumes a suspended task</p>
     * 
     * @url http://www.espruino.com/Reference#l_Task_resume
     */
    resume(): void;

    /**
     * <p>returns name of actual task</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Task_getCurrent
     */
    getCurrent(): any;

    /**
     * <p>Sends a binary notify to task</p>
     * 
     * @url http://www.espruino.com/Reference#l_Task_notify
     */
    notify(): void;

    /**
     * <p>logs list of tasks</p>
     * 
     * @url http://www.espruino.com/Reference#l_Task_log
     */
    log(): void;
}

/**
* <p>Creates a Timer Object</p>
* 
* @url http://www.espruino.com/Reference#l_Timer_Timer
*/
declare interface Timer {

    /**
     * 
     * @param timerName 
     * @param group 
     * @param index 
     * @param isrIndex 
     * @return  
     */
    new(timerName: any, group: number, index: number, isrIndex: number): any;

    /**
     * <p>Starts a timer</p>
     * 
     * @param duration 
     * @url http://www.espruino.com/Reference#l_Timer_start
     */
    start(duration: number): void;

    /**
     * <p>Reschedules a timer, needs to be started at least once</p>
     * 
     * @param duration 
     * @url http://www.espruino.com/Reference#l_Timer_reschedule
     */
    reschedule(duration: number): void;

    /**
     * <p>logs list of timers</p>
     * 
     * @url http://www.espruino.com/Reference#l_Timer_log
     */
    log(): void;
}


    // write(data: any[]): any;
    // on(event: string, handler: (data: any) => any): any;
    // setup(boudrate: number, options: any): any;
    // read(chars?: number): string;


/**
* <p>This class allows use of the built-in USARTs</p>
* <p>Methods may be called on the USB, Serial1, Serial2, Serial3, Serial4, Serial5 and Serial6 objects. While different processors provide different numbers of USARTs, you can always rely on at least Serial1 and Serial2</p>
* 
* @url http://www.espruino.com/Reference#Serial
*/
declare interface Serial extends Object {

    /**
     * 
     * @return  
     */
    new(): Serial;

    /**
     * <p>Set this Serial port as the port for the JavaScript console (REPL).</p>
     * <p>Unless <code>force</code> is set to true, changes in the connection state of the board
     * (for instance plugging in USB) will cause the console to change.</p>
     * 
     * @param force 
     * @url http://www.espruino.com/Reference#l_Serial_setConsole
     */
    setConsole(force: boolean): void;

    setup(baudrate: number, options: any): void;

    /**
     * <p>Print a string to the serial port - without a line feed</p>
     * <p> <strong>Note:</strong> This function replaces any occurances of <code>\n</code> in the string with <code>\r\n</code>. To avoid this, use <code>Serial.write</code>.</p>
     * 
     * @param string 
     * @url http://www.espruino.com/Reference#l_Serial_print
     */
    print(string: any): void;

    on(eventName: string, f: (str: string) => void): void;

    /**
     * <p>Print a line to the serial port with a newline (<code>\r\n</code>) at the end of it.</p>
     * <p> <strong>Note:</strong> This function converts data to a string first, eg <code>Serial.print([1,2,3])</code> is equivalent to <code>Serial.print(&quot;1,2,3&quot;). If you&#39;d like to write raw bytes, use</code>Serial.write`.</p>
     * 
     * @param string 
     * @url http://www.espruino.com/Reference#l_Serial_println
     */
    println(string: any): void;

    /**
     * <p>Write a character or array of data to the serial port</p>
     * <p>This method writes unmodified data, eg <code>Serial.write([1,2,3])</code> is equivalent to <code>Serial.write(&quot;\1\2\3&quot;)</code>. If you&#39;d like data converted to a string first, use <code>Serial.print</code>.</p>
     * 
     * @param data 
     * @url http://www.espruino.com/Reference#l_Serial_write
     */
    write(data: any): void;


    /**
     * <p>Return how many bytes are available to read. If there is already a listener for data, this will always return 0.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Serial_available
     */
    available(): number;

    /**
     * <p>Return a string containing characters that have been received</p>
     * 
     * @param chars 
     * @return  
     * @url http://www.espruino.com/Reference#l_Serial_read
     */
    read(chars?: number): any;

    /**
     * <p>Pipe this USART to a stream (an object with a &#39;write&#39; method)</p>
     * 
     * @param destination 
     * @param options 
     * @url http://www.espruino.com/Reference#l_Serial_pipe
     */
    pipe(destination: any, options: any): void;

    /**
     * <p>Try and find a USART (Serial) hardware device that will work on this pin (eg. <code>Serial1</code>)</p>
     * <p>May return undefined if no device can be found.</p>
     * 
     * @param pin 
     * @return  
     * @url http://www.espruino.com/Reference#l_Serial_find
     */
    find(pin: Pin): any;
}

/**
* <p>The USB Serial port</p>
* 
* @url http://www.espruino.com/Reference#l__global_USB
*/
declare var USB: Serial;

/**
* <p>The first Serial (USART) port</p>
* 
* @url http://www.espruino.com/Reference#l__global_Serial1
*/
declare var Serial1: Serial;

/**
* <p>The second Serial (USART) port</p>
* 
* @url http://www.espruino.com/Reference#l__global_Serial2
*/
declare var Serial2: Serial;

/**
* <p>The third Serial (USART) port</p>
* 
* @url http://www.espruino.com/Reference#l__global_Serial3
*/
declare var Serial3: Serial;

/**
* <p>The fourth Serial (USART) port</p>
* 
* @url http://www.espruino.com/Reference#l__global_Serial4
*/
declare var Serial4: Serial;

/**
* <p>The fifth Serial (USART) port</p>
* 
* @url http://www.espruino.com/Reference#l__global_Serial5
*/
declare var Serial5: Serial;

/**
* <p>The sixth Serial (USART) port</p>
* 
* @url http://www.espruino.com/Reference#l__global_Serial6
*/
declare var Serial6: Serial;

/**
* <p>A loopback serial device. Data sent to LoopbackA comes out of LoopbackB and vice versa</p>
* 
* @url http://www.espruino.com/Reference#l__global_LoopbackA
*/
declare var LoopbackA: Serial;

/**
* <p>A loopback serial device. Data sent to LoopbackA comes out of LoopbackB and vice versa</p>
* 
* @url http://www.espruino.com/Reference#l__global_LoopbackB
*/
declare var LoopbackB: Serial;

/**
* <p>A telnet serial device that maps to the built-in telnet console server (devices that have
* built-in wifi only).</p>
* 
* @url http://www.espruino.com/Reference#l__global_Telnet
*/
declare var Telnet: {
};

/**
* <p>This module allows access to read and write the STM32&#39;s flash memory.</p>
* <p>It should be used with extreme caution, as it is easy to overwrite parts of Flash
* memory belonging to Espruino or even its bootloader. If you damage the bootloader
* then you may need external hardware such as a USB-TTL converter to restore it. For
* more information on restoring the bootloader see <code>Advanced Reflashing</code> in your
* board&#39;s reference pages.</p>
* <p>To see which areas of memory you can and can&#39;t overwrite, look at the values
* reported by <code>process.memory()</code>.</p>
* 
* @url http://www.espruino.com/Reference#l_Flash_undefined
*/
declare interface Flash {

    /**
     * 
     * @return  
     */
    new(): Flash;
}


/**
* 
*/
declare namespace Flash {

    /**
     * <p>Returns the start and length of the flash page containing the given address.</p>
     * 
     * @param addr 
     * @return  
     * @url http://www.espruino.com/Reference#l_Flash_getPage
     */
    function getPage(addr: number): any;

    /**
     * <p>This method returns an array of objects of the form <code>{addr : #, length : #}</code>, representing
     * contiguous areas of flash memory in the chip that are not used for anything.</p>
     * <p>The memory areas returned are on page boundaries. This means that you can
     * safely erase the page containing any address here, and you won&#39;t risk
     * deleting part of the Espruino firmware.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Flash_getFree
     */
    function getFree(): any;

    /**
     * <p>Erase a page of flash memory</p>
     * 
     * @param addr 
     * @url http://www.espruino.com/Reference#l_Flash_erasePage
     */
    function erasePage(addr: any): void;

    /**
     * <p>Write data into memory at the given address - IN MULTIPLES OF 4 BYTES.</p>
     * <p>In flash memory you may only turn bits that are 1 into bits that are 0. If
     * you&#39;re writing data into an area that you have already written (so <code>read</code>
     * doesn&#39;t return all <code>0xFF</code>) you&#39;ll need to call <code>erasePage</code> to clear the
     * entire page.</p>
     * 
     * @param data 
     * @param addr 
     * @url http://www.espruino.com/Reference#l_Flash_write
     */
    function write(data: any, addr: number): void;

    /**
     * <p>Read flash memory from the given address</p>
     * 
     * @param length 
     * @param addr 
     * @return  
     * @url http://www.espruino.com/Reference#l_Flash_read
     */
    function read(length: number, addr: number): any;
}

/**
* <p>This is the built-in JavaScript class for Espruino utility functions.</p>
* 
* @url http://www.espruino.com/Reference#E
*/
declare interface E {

    /**
     * 
     * @return  
     */
    new(): E;
}


/**
* 
*/
declare namespace E {

    /**
     * <p>Use the STM32&#39;s internal thermistor to work out the temperature.</p>
     * <p>While this is implemented on Espruino boards, it may not be implemented on other devices. If so it&#39;ll return NaN.</p>
     * <p> <strong>Note:</strong> This is not entirely accurate and varies by a few degrees from chip to chip. It measures the <strong>die temperature</strong>, so when connected to USB it could be reading 10 over degrees C above ambient temperature. When running from battery with <code>setDeepSleep(true)</code> it is much more accurate though.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_getTemperature
     */
    function getTemperature(): number;

    /**
     * <p>Check the internal voltage reference. To work out an actual voltage of an input pin, you can use <code>analogRead(pin)*E.getAnalogVRef()</code></p>
     * <p> <strong>Note:</strong> This value is calculated by reading the voltage on an internal voltage reference with the ADC.
     * It will be slightly noisy, so if you need this for accurate measurements we&#39;d recommend that you call
     * this function several times and average the results.</p>
     * <p>While this is implemented on Espruino boards, it may not be implemented on other devices. If so it&#39;ll return NaN.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_getAnalogVRef
     */
    function getAnalogVRef(): number;

    /**
     * <p>ADVANCED: This is a great way to crash Espruino if you&#39;re not sure what you are doing</p>
     * <p>Create a native function that executes the code at the given address. Eg. <code>E.nativeCall(0x08012345,&#39;double (double,double)&#39;)(1.1, 2.2)</code></p>
     * <p>If you&#39;re executing a thumb function, you&#39;ll almost certainly need to set the bottom bit of the address to 1.</p>
     * <p>Note it&#39;s not guaranteed that the call signature you provide can be used - there are limits on the number of arguments allowed.</p>
     * <p>When supplying <code>data</code>, if it is a &#39;flat string&#39; then it will be used directly, otherwise it&#39;ll be converted to a flat string and used.</p>
     * 
     * @param addr 
     * @param sig 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_nativeCall
     */
    function nativeCall(addr: number, sig: any, data: any): any;

    /**
     * <p>Clip a number to be between min and max (inclusive)</p>
     * 
     * @param x 
     * @param min 
     * @param max 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_clip
     */
    function clip(x: number, min: number, max: number): number;

    /**
     * <p>Sum the contents of the given Array, String or ArrayBuffer and return the result</p>
     * 
     * @param arr 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_sum
     */
    function sum(arr: any): number;

    /**
     * <p>Work out the variance of the contents of the given Array, String or ArrayBuffer and return the result. This is equivalent to <code>v=0;for (i in arr) v+=Math.pow(mean-arr[i],2)</code></p>
     * 
     * @param arr 
     * @param mean 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_variance
     */
    function variance(arr: any, mean: number): number;

    /**
     * <p>Convolve arr1 with arr2. This is equivalent to <code>v=0;for (i in arr1) v+=arr1[i] * arr2[(i+offset) % arr2.length]</code></p>
     * 
     * @param arr1 
     * @param arr2 
     * @param offset 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_convolve
     */
    function convolve(arr1: any, arr2: any, offset: number): number;

    /**
     * <p>Performs a Fast Fourier Transform (fft) on the supplied data and writes it back into the original arrays. Note that if only one array is supplied, the data written back is the modulus of the complex result <code>sqrt(r*r+i*i)</code>.</p>
     * 
     * @url http://www.espruino.com/Reference#l_E_FFT
     */
    interface FFT {

        /**
         * 
         * @param arrReal 
         * @param arrImage 
         * @param inverse 
         * @return  
         */
        new(arrReal: any, arrImage: any, inverse: boolean): FFT;
    }


    /**
     * <p>Interpolate between two adjacent values in the Typed Array</p>
     * 
     * @param array 
     * @param index 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_interpolate
     */
    function interpolate(array: any, index: number): number;

    /**
     * <p>Interpolate between four adjacent values in the Typed Array, in 2D.</p>
     * 
     * @param array 
     * @param width 
     * @param x 
     * @param y 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_interpolate2d
     */
    function interpolate2d(array: any, width: number, x: number, y: number): number;

    /**
     * <p>Kicks a Watchdog timer set up with <code>E.enableWatchdog(..., false)</code>. See
     * <code>E.enableWatchdog</code> for more information.</p>
     * <p><strong>NOTE:</strong> This is only implemented on STM32 and nRF5x devices (all official Espruino boards).</p>
     * 
     * @url http://www.espruino.com/Reference#l_E_kickWatchdog
     */
    function kickWatchdog(): void;

    /**
     * <p>Get and reset the error flags. Returns an array that can contain:</p>
     * <p><code>&#39;FIFO_FULL&#39;</code>: The receive FIFO filled up and data was lost. This could be state transitions for setWatch, or received characters.</p>
     * <p><code>&#39;BUFFER_FULL&#39;</code>: A buffer for a stream filled up and characters were lost. This can happen to any stream - Serial,HTTP,etc.</p>
     * <p><code>&#39;CALLBACK&#39;</code>: A callback (s<code>etWatch</code>, <code>setInterval</code>, <code>on(&#39;data&#39;,...)</code>) caused an error and so was removed.</p>
     * <p><code>&#39;LOW_MEMORY&#39;</code>: Memory is running low - Espruino had to run a garbage collection pass or remove some of the command history</p>
     * <p><code>&#39;MEMORY&#39;</code>: Espruino ran out of memory and was unable to allocate some data that it needed.</p>
     * <p><code>&#39;JSERR_UART_OVERFLOW&#39;</code> : A UART received data but it was not read in time and was lost</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_getErrorFlags
     */
    function getErrorFlags(): any;

    /**
     * <p>Get Espruino&#39;s interpreter flags that control the way it handles your JavaScript code.</p>
     * <ul>
     * <li><code>deepSleep</code> - Allow deep sleep modes (also set by setDeepSleep)</li>
     * <li><code>pretokenise</code> - When adding functions, pre-minify them and tokenise reserved words</li>
     * </ul>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_getFlags
     */
    function getFlags(): any;

    /**
     * <p>Set the Espruino interpreter flags that control the way it handles your JavaScript code.</p>
     * <p>Run <code>E.getFlags()</code> and check its description for a list of available flags and their values.</p>
     * 
     * @param flags 
     * @url http://www.espruino.com/Reference#l_E_setFlags
     */
    function setFlags(flags: any): void;

    /**
     * <p>Create an ArrayBuffer from the given string. This is done via a reference, not a copy - so it is very fast and memory efficient.</p>
     * <p>Note that this is an ArrayBuffer, not a Uint8Array. To get one of those, do: <code>new Uint8Array(E.toArrayBuffer(&#39;....&#39;))</code>.</p>
     * 
     * @param str 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_toArrayBuffer
     */
    function toArrayBuffer(str: any): ArrayBuffer;

    /**
     * <p>This creates a Uint8Array from the given arguments. If an argument is a String or an Array,
     * each element is traversed and added as if it were an 8 bit value. If it is anything else, it is
     * converted to an 8 bit value directly.</p>
     * 
     * @param args 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_toUint8Array
     */
    function toUint8Array(args: any): Uint8Array;

    /**
     * <p>This creates and returns a special type of string, which actually references
     * a specific memory address. It can be used in order to use sections of
     * Flash memory directly in Espruino (for example to execute code straight
     * from flash memory with <code>eval(E.memoryArea( ... ))</code>)</p>
     * <p><strong>Note:</strong> This is only tested on STM32-based platforms (Espruino Original
     * and Espruino Pico) at the moment.</p>
     * 
     * @param addr 
     * @param len 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_memoryArea
     */
    function memoryArea(addr: number, len: number): string;

    /**
     * <p>This writes JavaScript code into Espruino&#39;s flash memory, to be executed on
     * startup. It differs from <code>save()</code> in that <code>save()</code> saves the whole state of
     * the interpreter, whereas this just saves JS code that is executed at boot.</p>
     * <p>Code will be executed before <code>onInit()</code> and <code>E.on(&#39;init&#39;, ...)</code>.</p>
     * <p>If <code>alwaysExec</code> is <code>true</code>, the code will be executed even after a call to
     * <code>reset()</code>. This is useful if you&#39;re making something that you want to
     * program, but you want some code that is always built in (for instance
     * setting up a display or keyboard).</p>
     * <p>To remove boot code that has been saved previously, use <code>E.setBootCode(&quot;&quot;)</code></p>
     * <p><strong>Note:</strong> this removes any code that was previously saved with <code>save()</code></p>
     * 
     * @param code 
     * @param alwaysExec 
     * @url http://www.espruino.com/Reference#l_E_setBootCode
     */
    function setBootCode(code: any, alwaysExec: boolean): void;

    /**
     * <p>This sets the clock frequency of Espruino&#39;s processor. It will return <code>0</code> if
     * it is unimplemented or the clock speed cannot be changed.</p>
     * <p><strong>Note:</strong> On pretty much all boards, UART, SPI, I2C, PWM, etc will change
     * frequency and will need setting up again in order to work.</p>
     * <h3 id="stm32f4">STM32F4</h3>
     * <p>Options is of the form <code>{ M: int, N: int, P: int, Q: int }</code> - see the &#39;Clocks&#39;
     * section of the microcontroller&#39;s reference manual for what these mean.</p>
     * <ul>
     * <li>System clock = 8Mhz <em> N / ( M </em> P )</li>
     * <li>USB clock (should be 48Mhz) = 8Mhz <em> N / ( M </em> Q )</li>
     * </ul>
     * <p>Optional arguments are:</p>
     * <ul>
     * <li><code>latency</code> - flash latency from 0..15</li>
     * <li><code>PCLK1</code> - Peripheral clock 1 divisor (default: 2)</li>
     * <li><code>PCLK2</code> - Peripheral clock 2 divisor (default: 4)</li>
     * </ul>
     * <p>The Pico&#39;s default is <code>{M:8, N:336, P:4, Q:7, PCLK1:2, PCLK2:4}</code>, use
     * <code>{M:8, N:336, P:8, Q:7, PCLK:1, PCLK2:2}</code> to halve the system clock speed
     * while keeping the peripherals running at the same speed (omitting PCLK1/2
     * will lead to the peripherals changing speed too).</p>
     * <p>On STM32F4 boards (eg. Espruino Pico), the USB clock needs to be kept at 48Mhz
     * or USB will fail to work. You&#39;ll also experience USB instability if the processor
     * clock falls much below 48Mhz.</p>
     * <h3 id="esp8266">ESP8266</h3>
     * <p>Just specify an integer value, either 80 or 160 (for 80 or 160Mhz)</p>
     * 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_setClock
     */
    function setClock(options: any): number;

    /**
     * <p>Reverse the 8 bits in a byte, swapping MSB and LSB.</p>
     * <p>For example, <code>E.reverseByte(0b10010000) == 0b00001001</code>.</p>
     * <p>Note that you can reverse all the bytes in an array with: <code>arr = arr.map(E.reverseByte)</code></p>
     * 
     * @param x 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_reverseByte
     */
    function reverseByte(x: number): number;

    /**
     * <p>Output the current list of Utility Timer Tasks - for debugging only</p>
     * 
     * @url http://www.espruino.com/Reference#l_E_dumpTimers
     */
    function dumpTimers(): void;

    /**
     * <p>Dump any locked variables that aren&#39;t referenced from <code>global</code> - for debugging memory leaks only.</p>
     * 
     * @url http://www.espruino.com/Reference#l_E_dumpLockedVars
     */
    function dumpLockedVars(): void;

    /**
     * <p>Take each element of the <code>from</code> array, look it up in <code>map</code> (or call the
     * function with it as a first argument), and write it into the corresponding
     * element in the <code>to</code> array.</p>
     * 
     * @param from 
     * @param to 
     * @param map 
     * @param bits 
     * @url http://www.espruino.com/Reference#l_E_mapInPlace
     */
    function mapInPlace(from: any, to: any, map: any, bits: number): void;

    /**
     * <p>Get the current interpreter state in a text form such that it can be copied to a new device</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_dumpStr
     */
    function dumpStr(): string;

    /**
     * <p>Set the seed for the random number generator used by <code>Math.random()</code>.</p>
     * 
     * @param v 
     * @url http://www.espruino.com/Reference#l_E_srand
     */
    function srand(v: number): void;

    /**
     * <p>Unlike &#39;Math.random()&#39; which uses a pseudo-random number generator, this
     * method reads from the internal voltage reference several times, xoring and
     * rotating to try and make a relatively random value from the noise in the
     * signal.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_hwRand
     */
    function hwRand(): number;

    /**
     * <p>Convert hue, saturation and brightness to red, green and blue (packed into an integer)</p>
     * <p>This replaces <code>Graphics.setColorHSB</code> and <code>Graphics.setBgColorHSB</code>. On devices with 24 bit colour it can
     * be used as: <code>Graphics.setColorHSB(E.HSBtoRGB(h, s, b))</code></p>
     * 
     * @url http://www.espruino.com/Reference#l_E_HSBtoRGB
     */
    interface HSBtoRGB {

        /**
         * 
         * @param hue 
         * @param sat 
         * @param bri 
         * @return  
         */
        new(hue: number, sat: number, bri: number): number;
    }


    /**
     * <p>Set a password on the console (REPL). When powered on, Espruino will
     * then demand a password before the console can be used. If you want to
     * lock the console immediately after this you can call <code>E.lockConsole()</code></p>
     * <p>To remove the password, call this function with no arguments.</p>
     * <p><strong>Note:</strong> There is no protection against multiple password attempts, so someone
     * could conceivably try every password in a dictionary.</p>
     * <p><strong>Note:</strong> This password is stored in memory in plain text. If someone is able
     * to execute arbitrary JavaScript code on the device (eg, you use <code>eval</code> on input
     * from unknown sources) or read the device&#39;s firmware then they may be able to
     * obtain it.</p>
     * 
     * @param password 
     * @url http://www.espruino.com/Reference#l_E_setPassword
     */
    function setPassword(password: any): void;

    /**
     * <p>If a password has been set with <code>E.setPassword()</code>, this will lock the console
     * so the password needs to be entered to unlock it.</p>
     * 
     * @url http://www.espruino.com/Reference#l_E_lockConsole
     */
    function lockConsole(): void;

    /**
     * <p>Set the time zone to be used with <code>Date</code> objects.</p>
     * <p>For example <code>E.setTimeZone(1)</code> will be GMT+0100</p>
     * 
     * @param zone 
     * @url http://www.espruino.com/Reference#l_E_setTimeZone
     */
    function setTimeZone(zone: number): void;

    /**
     * <p>USB HID will only take effect next time you unplug and re-plug your Espruino. If you&#39;re
     * disconnecting it from power you&#39;ll have to make sure you have <code>save()</code>d after calling
     * this function.</p>
     * 
     * @param opts 
     * @url http://www.espruino.com/Reference#l_E_setUSBHID
     */
    function setUSBHID(opts: any): void;

    /**
     * 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_sendUSBHID
     */
    function sendUSBHID(data: any): boolean;

    /**
     * <p>Unmount the SD card, so it can be removed. If you remove the SD card without calling this you may cause corruption, and you will be unable to access another SD card until you reset Espruino or call <code>E.unmountSD()</code>.</p>
     * 
     * @url http://www.espruino.com/Reference#l_E_unmountSD
     */
    function unmountSD(): void;

    /**
     * <p>Open a file</p>
     * 
     * @param path 
     * @param mode 
     * @return  
     * @url http://www.espruino.com/Reference#l_E_openFile
     */
    function openFile(path: any, mode: any): File;
}

/**
* <p>Creates a pin from the given argument (or returns undefined if no argument)</p>
* 
* @url http://www.espruino.com/Reference#l_Pin_Pin
*/
declare interface Pin {

    /**
     * 
     * @param value 
     * @return  
     */
    new(value: any): any;

    /**
     * <p>Returns the input state of the pin as a boolean.</p>
     * <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset the pin&#39;s state to <code>&quot;input&quot;</code></p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Pin_read
     */
    read(): boolean;

    /**
     * <p>Sets the output state of the pin to a 1</p>
     * <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset the pin&#39;s state to <code>&quot;output&quot;</code></p>
     * 
     * @url http://www.espruino.com/Reference#l_Pin_set
     */
    set(): void;

    /**
     * <p>Sets the output state of the pin to a 0</p>
     * <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset the pin&#39;s state to <code>&quot;output&quot;</code></p>
     * 
     * @url http://www.espruino.com/Reference#l_Pin_reset
     */
    reset(): void;

    /**
     * <p>Sets the output state of the pin to the parameter given</p>
     * <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset the pin&#39;s state to <code>&quot;output&quot;</code></p>
     * 
     * @param value 
     * @url http://www.espruino.com/Reference#l_Pin_write
     */
    write(value: boolean): void;

    /**
     * <p>Sets the output state of the pin to the parameter given at the specified time.</p>
     * <p> <strong>Note:</strong> this <strong>doesn&#39;t</strong> change the mode of the pin to an output. To do that, you need to use <code>pin.write(0)</code> or <code>pinMode(pin, &#39;output&#39;)</code> first.</p>
     * 
     * @param value 
     * @param time 
     * @url http://www.espruino.com/Reference#l_Pin_writeAtTime
     */
    writeAtTime(value: boolean, time: number): void;

    /**
     * <p>Return the current mode of the given pin. See <code>pinMode</code> for more information.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Pin_getMode
     */
    getMode(): any;

    /**
     * <p>Set the mode of the given pin. See <a href="#l__global_pinMode"><code>pinMode</code></a> for more information on pin modes.</p>
     * 
     * @param mode 
     * @url http://www.espruino.com/Reference#l_Pin_mode
     */
    mode(mode: any): void;

    /**
     * <p>Toggles the state of the pin from off to on, or from on to off.</p>
     * <p><strong>Note:</strong> This method doesn&#39;t currently work on the ESP8266 port of Espruino.</p>
     * <p><strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset the pin&#39;s state to <code>&quot;output&quot;</code></p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Pin_toggle
     */
    toggle(): boolean;
}

/**
* <p>Built-in class that caches the modules used by the <code>require</code> command</p>
* 
* @url http://www.espruino.com/Reference#Modules
*/
declare interface Modules {

    /**
     * 
     * @return  
     */
    new(): Modules;
}


/**
* 
*/
declare namespace Modules {

    /**
     * <p>Return an array of module names that have been cached</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Modules_getCached
     */
    function getCached(): any;

    /**
     * <p>Remove the given module from the list of cached modules</p>
     * 
     * @param id 
     * @url http://www.espruino.com/Reference#l_Modules_removeCached
     */
    function removeCached(id: any): void;

    /**
     * <p>Remove all cached modules</p>
     * 
     * @url http://www.espruino.com/Reference#l_Modules_removeAllCached
     */
    function removeAllCached(): void;

    /**
     * <p>Add the given module to the cache</p>
     * 
     * @param id 
     * @param sourcecode 
     * @url http://www.espruino.com/Reference#l_Modules_addCached
     */
    function addCached(id: any, sourcecode: any): void;
}

/**
* <p>Create a waveform class. This allows high speed input and output of waveforms. It has an internal variable called <code>buffer</code> (as well as <code>buffer2</code> when double-buffered - see <code>options</code> below) which contains the data to input/output.</p>
* <p>When double-buffered, a &#39;buffer&#39; event will be emitted each time a buffer is finished with (the argument is that buffer). When the recording stops, a &#39;finish&#39; event will be emitted (with the first argument as the buffer).</p>
* 
* @url http://www.espruino.com/Reference#l_Waveform_Waveform
*/
declare interface Waveform {

    /**
     * 
     * @param samples 
     * @param options 
     * @return  
     */
    new(samples: number, options: any): any;

    /**
     * <p>Will start outputting the waveform on the given pin - the pin must have previously been initialised with analogWrite. If not repeating, it&#39;ll emit a <code>finish</code> event when it is done.</p>
     * 
     * @param output 
     * @param freq 
     * @param options 
     * @url http://www.espruino.com/Reference#l_Waveform_startOutput
     */
    startOutput(output: Pin, freq: number, options: any): void;

    /**
     * <p>Will start inputting the waveform on the given pin that supports analog. If not repeating, it&#39;ll emit a <code>finish</code> event when it is done.</p>
     * 
     * @param output 
     * @param freq 
     * @param options 
     * @url http://www.espruino.com/Reference#l_Waveform_startInput
     */
    startInput(output: Pin, freq: number, options: any): void;

    /**
     * <p>Stop a waveform that is currently outputting</p>
     * 
     * @url http://www.espruino.com/Reference#l_Waveform_stop
     */
    stop(): void;
}

/**
* <p>Create a software OneWire implementation on the given pin</p>
* 
* @url http://www.espruino.com/Reference#l_OneWire_OneWire
*/
declare interface OneWire {

    /**
     * 
     * @param pin 
     * @return  
     */
    new(pin: Pin): any;

    /**
     * <p>Perform a reset cycle</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_OneWire_reset
     */
    reset(): boolean;

    /**
     * <p>Select a ROM - always performs a reset first</p>
     * 
     * @param rom 
     * @url http://www.espruino.com/Reference#l_OneWire_select
     */
    select(rom: any): void;

    /**
     * <p>Skip a ROM</p>
     * 
     * @url http://www.espruino.com/Reference#l_OneWire_skip
     */
    skip(): void;

    /**
     * <p>Write one or more bytes</p>
     * 
     * @param data 
     * @param power 
     * @url http://www.espruino.com/Reference#l_OneWire_write
     */
    write(data: any, power: boolean): void;

    /**
     * <p>Read a byte</p>
     * 
     * @param count 
     * @return  
     * @url http://www.espruino.com/Reference#l_OneWire_read
     */
    read(count: any): any;

    /**
     * <p>Search for devices</p>
     * 
     * @param command 
     * @return  
     * @url http://www.espruino.com/Reference#l_OneWire_search
     */
    search(command: number): any;
}

/**
* <p>Create a software SPI port. This has limited functionality (no baud rate), but it can work on any pins.</p>
* <p>Use <code>SPI.setup</code> to configure this port.</p>
* 
* @url http://www.espruino.com/Reference#l_SPI_SPI
*/
declare interface SPI {

    /**
     * 
     * @return  
     */
    new(): SPI;

    /**
     * <p>Set up this SPI port as an SPI Master.</p>
     * 
     * @param options 
     * @url http://www.espruino.com/Reference#l_SPI_setup
     */
    setup(options: any): void;

    /**
     * <p>Send data down SPI, and return the result. Sending an integer will return an integer, a String will return a String, and anything else will return a Uint8Array.</p>
     * <p>Sending multiple bytes in one call to send is preferable as they can then be transmitted end to end. Using multiple calls to send() will result in significantly slower transmission speeds.</p>
     * <p>For maximum speeds, please pass either Strings or Typed Arrays as arguments. Note that you can even pass arrays of arrays, like <code>[1,[2,3,4],5]</code></p>
     * 
     * @param data 
     * @param nss_pin 
     * @return  
     * @url http://www.espruino.com/Reference#l_SPI_send
     */
    send(data: any, nss_pin: Pin): any;

    /**
     * <p>Write a character or array of characters to SPI - without reading the result back.</p>
     * <p>For maximum speeds, please pass either Strings or Typed Arrays as arguments.</p>
     * 
     * @param data 
     * @url http://www.espruino.com/Reference#l_SPI_write
     */
    write(data: any): void;

    /**
     * <p>Send data down SPI, using 4 bits for each &#39;real&#39; bit (MSB first). This can be useful for faking one-wire style protocols</p>
     * <p>Sending multiple bytes in one call to send is preferable as they can then be transmitted end to end. Using multiple calls to send() will result in significantly slower transmission speeds.</p>
     * 
     * @param data 
     * @param bit0 
     * @param bit1 
     * @param nss_pin 
     * @url http://www.espruino.com/Reference#l_SPI_send4bit
     */
    send4bit(data: any, bit0: number, bit1: number, nss_pin: Pin): void;

    /**
     * <p>Send data down SPI, using 8 bits for each &#39;real&#39; bit (MSB first). This can be useful for faking one-wire style protocols</p>
     * <p>Sending multiple bytes in one call to send is preferable as they can then be transmitted end to end. Using multiple calls to send() will result in significantly slower transmission speeds.</p>
     * 
     * @param data 
     * @param bit0 
     * @param bit1 
     * @param nss_pin 
     * @url http://www.espruino.com/Reference#l_SPI_send8bit
     */
    send8bit(data: any, bit0: number, bit1: number, nss_pin: Pin): void;

    /**
     * <p>Try and find an SPI hardware device that will work on this pin (eg. <code>SPI1</code>)</p>
     * <p>May return undefined if no device can be found.</p>
     * 
     * @param pin 
     * @return  
     * @url http://www.espruino.com/Reference#l_SPI_find
     */
    find(pin: Pin): any;
}

/**
* <p>The first SPI port</p>
* 
* @url http://www.espruino.com/Reference#l__global_SPI1
*/
declare var SPI1: SPI;

/**
* <p>The second SPI port</p>
* 
* @url http://www.espruino.com/Reference#l__global_SPI2
*/
declare var SPI2: SPI;

/**
* <p>The third SPI port</p>
* 
* @url http://www.espruino.com/Reference#l__global_SPI3
*/
declare var SPI3: SPI;

declare interface I2CSetupOptions {
    scl: Pin;
    sda: Pin;
    bitrate?: number;
}

/**
* <p>Create a software I2C port. This has limited functionality (no baud rate), but it can work on any pins.</p>
* <p>Use <code>SPI.setup</code> to configure this port.</p>
* 
* @url http://www.espruino.com/Reference#l_I2C_I2C
*/
declare interface I2C {

    /**
     * 
     * @return  
     */
    new(): I2C;

    /**
     * <p>Set up this I2C port</p>
     * <p>If not specified in options, the default pins are used (usually the lowest numbered pins on the lowest port that supports this peripheral)</p>
     * 
     * @param options 
     * @url http://www.espruino.com/Reference#l_I2C_setup
     */
    setup(options: I2CSetupOptions): void;

    /**
     * <p>Transmit to the slave device with the given address. This is like Arduino&#39;s beginTransmission, write, and endTransmission rolled up into one.</p>
     * 
     * @param address 
     * @param data 
     * @url http://www.espruino.com/Reference#l_I2C_writeTo
     */
    writeTo(address: any, data: any): void;

    /**
     * <p>Request bytes from the given slave device, and return them as a Uint8Array (packed array of bytes). This is like using Arduino Wire&#39;s requestFrom, available and read functions.  Sends a STOP</p>
     * 
     * @param address 
     * @param quantity 
     * @return  
     * @url http://www.espruino.com/Reference#l_I2C_readFrom
     */
    readFrom(address: any, quantity: number): Uint8Array;

    /**
     * <p>Try and find an I2C hardware device that will work on this pin (eg. <code>I2C1</code>)</p>
     * <p>May return undefined if no device can be found.</p>
     * 
     * @param pin 
     * @return  
     * @url http://www.espruino.com/Reference#l_I2C_find
     */
    find(pin: Pin): any;
}

/**
* <p>The first I2C port</p>
* 
* @url http://www.espruino.com/Reference#l__global_I2C1
*/
declare var I2C1: I2C;

/**
* <p>The second I2C port</p>
* 
* @url http://www.espruino.com/Reference#l__global_I2C2
*/
declare var I2C2: I2C;

/**
* <p>The third I2C port</p>
* 
* @url http://www.espruino.com/Reference#l__global_I2C3
*/
declare var I2C3: I2C;

/**
* <p>This library provides TV out capability on the Espruino and Espruino Pico.</p>
* <p>See the [[Television]] page for more information.</p>
* 
* @url http://www.espruino.com/Reference#l_tv_undefined
*/
declare function tv(): void;


/**
* <p>Class containing AES encryption/decryption</p>
* <p><strong>Note:</strong> This library is currently only included in builds for the Espruino Pico and Espruino WiFi. For other boards you will have to make build your own firmware, and you may need to remove other features in order to make room.</p>
* 
* @url http://www.espruino.com/Reference#AES
*/
declare interface AES {

    /**
     * 
     * @return  
     */
    new(): AES;
}


/**
* 
*/
declare namespace AES {

    /**
     * 
     * @param passphrase 
     * @param key 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_AES_encrypt
     */
    function encrypt(passphrase: any, key: any, options: any): ArrayBuffer;

    /**
     * 
     * @param passphrase 
     * @param key 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_AES_decrypt
     */
    function decrypt(passphrase: any, key: any, options: any): ArrayBuffer;
}

/**
* <p>The NRF class is for controlling functionality of the Nordic nRF51/nRF52 chips. Currently these only used in <a href="http://puck-js.com">Puck.js</a> and the <a href="/MicroBit">BBC micro:bit</a>.</p>
* <p>The main part of this is control of Bluetooth Low Energy - both searching for devices, and changing advertising data.</p>
* 
* @url http://www.espruino.com/Reference#NRF
*/
declare interface NRF {

    /**
     * 
     * @return  
     */
    new(): NRF;
}


/**
* 
*/
declare namespace NRF {

    /**
     * <p>If a device is connected to Espruino, disconnect from it.</p>
     * 
     * @url http://www.espruino.com/Reference#l_NRF_disconnect
     */
    function disconnect(): void;

    /**
     * <p>Disable Bluetooth advertising and disconnect from any device that
     * connected to Puck.js as a peripheral (this won&#39;t affect any devices
     * that Puck.js initiated connections to).</p>
     * <p>This makes Puck.js undiscoverable, so it can&#39;t be connected to.</p>
     * <p>Use <code>NRF.wake()</code> to wake up and make Puck.js connectable again.</p>
     * 
     * @url http://www.espruino.com/Reference#l_NRF_sleep
     */
    function sleep(): void;

    /**
     * <p>Enable Bluetooth advertising (this is enabled by default), which
     * allows other devices to discover and connect to Puck.js.</p>
     * <p>Use <code>NRF.sleep()</code> to disable advertising.</p>
     * 
     * @url http://www.espruino.com/Reference#l_NRF_wake
     */
    function wake(): void;

    /**
     * <p>Restart the Bluetooth softdevice (if there is currently a BLE connection,
     * it will queue a restart to be done when the connection closes).</p>
     * <p>You shouldn&#39;t need to call this function in normal usage. However, Nordic&#39;s
     * BLE softdevice has some settings that cannot be reset. For example there
     * are only a certain number of unique UUIDs. Once these are all used the
     * only option is to restart the softdevice to clear them all out.</p>
     * 
     * @url http://www.espruino.com/Reference#l_NRF_restart
     */
    function restart(): void;

    /**
     * <p>Get this device&#39;s Bluetooth MAC address.</p>
     * <p>For Puck.js, the last 5 characters of this (eg. <code>ee:ff</code>)
     * are used in the device&#39;s advertised Bluetooth name.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_NRF_getAddress
     */
    function getAddress(): any;

    /**
     * <p>Get the battery level in volts (the voltage that the NRF chip is running off of).</p>
     * <p>This is the battery level of the device itself - it has nothing to with any
     * device that might be connected.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_NRF_getBattery
     */
    function getBattery(): number;

    /**
     * <p>This is just like <code>NRF.setAdvertising</code>, except instead of advertising
     * the data, it returns the packet that would be advertised as an array.</p>
     * 
     * @param data 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_NRF_getAdvertisingData
     */
    function getAdvertisingData(data: any, options: any): any;

    /**
     * <p>Set the BLE radio transmit power. The default TX power is 0 dBm.</p>
     * 
     * @param power 
     * @url http://www.espruino.com/Reference#l_NRF_setTxPower
     */
    function setTxPower(power: number): void;

    /**
     * <p>This sets the connection parameters - these affect the transfer speed and
     * power usage when the device is connected.</p>
     * <ul>
     * <li>When not low power, the connection interval is between 7.5 and 20ms</li>
     * <li>When low power, the connection interval is between 500 and 1000ms</li>
     * </ul>
     * <p>When low power connection is enabled, transfers of data over Bluetooth
     * will be very slow, however power usage while connected will be drastically
     * decreased.</p>
     * <p>This will only take effect after the connection is disconnected and
     * re-established.</p>
     * 
     * @param lowPower 
     * @url http://www.espruino.com/Reference#l_NRF_setLowPowerConnection
     */
    function setLowPowerConnection(lowPower: boolean): void;

    /**
     * <p>Send a USB HID report. HID must first be enabled with <code>NRF.setServices({}, {hid: hid_report})</code></p>
     * 
     * @param data 
     * @param callback 
     * @url http://www.espruino.com/Reference#l_NRF_sendHIDReport
     */
    function sendHIDReport(data: any, callback: any): void;

    /**
     * <p>If set to true, whenever a device bonds it will be added to the
     * whitelist.</p>
     * <p>When set to false, the whitelist is cleared and newly bonded
     * devices will not be added to the whitelist.</p>
     * <p><strong>Note:</strong> This is remembered between <code>reset()</code>s but isn&#39;t
     * remembered after power-on (you&#39;ll have to add it to <code>onInit()</code>.</p>
     * 
     * @param whitelisting 
     * @url http://www.espruino.com/Reference#l_NRF_setWhitelist
     */
    function setWhitelist(whitelisting: boolean): void;
}

/**
* <p>The Bluetooth Serial port - used when data is sent or received over Bluetooth Smart on nRF51/nRF52 chips.</p>
* 
* @url http://www.espruino.com/Reference#l__global_Bluetooth
*/
declare var Bluetooth: Serial;

/**
* <p>Web Bluetooth-style device - get this using <code>NRF.requestDevice(address)</code></p>
* 
* @url http://www.espruino.com/Reference#BluetoothDevice
*/
declare interface BluetoothDevice {

    /**
     * 
     * @return  
     */
    new(): BluetoothDevice;

    /**
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @url http://www.espruino.com/Reference#l_BluetoothDevice_gatt
     */
    gatt: any;
}

/**
* <p>Web Bluetooth-style GATT server - get this using <code>NRF.connect(address)</code>
* or <code>NRF.requestDevice(options)</code> then <code>response.gatt.connect</code></p>
* <p><a href="https://webbluetoothcg.github.io/web-bluetooth/#bluetoothremotegattserver">https://webbluetoothcg.github.io/web-bluetooth/#bluetoothremotegattserver</a></p>
* 
* @url http://www.espruino.com/Reference#BluetoothRemoteGATTServer
*/
declare interface BluetoothRemoteGATTServer {

    /**
     * 
     * @return  
     */
    new(): BluetoothRemoteGATTServer;

    /**
     * <p>Connect to a BLE device - returns a promise,
     * the argument of which is the <code>BluetoothRemoteGATTServer</code> connection.</p>
     * <p>See <a href="/Reference#l_NRF_requestDevice"><code>NRF.requestDevice</code></a> for usage examples.</p>
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTServer_connect
     */
    connect(): any;

    /**
     * <p>Disconnect from a previously connected BLE device connected with
     * <code>NRF.connect</code> - this does not disconnect from something that has
     * connected to the Espruino.</p>
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTServer_disconnect
     */
    disconnect(): void;

    /**
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @param service 
     * @return  
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTServer_getPrimaryService
     */
    getPrimaryService(service: any): any;

    /**
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTServer_getPrimaryServices
     */
    getPrimaryServices(): any;
}

/**
* <p>Web Bluetooth-style GATT service - get this using <code>BluetoothRemoteGATTServer.getPrimaryService(s)</code></p>
* <p><a href="https://webbluetoothcg.github.io/web-bluetooth/#bluetoothremotegattservice">https://webbluetoothcg.github.io/web-bluetooth/#bluetoothremotegattservice</a></p>
* 
* @url http://www.espruino.com/Reference#BluetoothRemoteGATTService
*/
declare interface BluetoothRemoteGATTService {

    /**
     * 
     * @return  
     */
    new(): BluetoothRemoteGATTService;

    /**
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @param characteristic 
     * @return  
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTService_getCharacteristic
     */
    getCharacteristic(characteristic: any): any;

    /**
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTService_getCharacteristics
     */
    getCharacteristics(): any;
}

/**
* <p>Web Bluetooth-style GATT characteristic - get this using <code>BluetoothRemoteGATTService.getCharacteristic(s)</code></p>
* <p><a href="https://webbluetoothcg.github.io/web-bluetooth/#bluetoothremotegattcharacteristic">https://webbluetoothcg.github.io/web-bluetooth/#bluetoothremotegattcharacteristic</a></p>
* 
* @url http://www.espruino.com/Reference#BluetoothRemoteGATTCharacteristic
*/
declare interface BluetoothRemoteGATTCharacteristic {

    /**
     * 
     * @return  
     */
    new(): BluetoothRemoteGATTCharacteristic;

    /**
     * <p><strong>Note:</strong> This is only available on some devices</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_BluetoothRemoteGATTCharacteristic_stopNotifications
     */
    stopNotifications(): any;
}

/**
* <p>This class exists in order to interface Espruino with fast-moving trigger wheels. Trigger wheels are physical discs with evenly spaced teeth cut into them, and often with one or two teeth next to each other missing. A sensor sends a signal whenever a tooth passed by, and this allows a device to measure not only RPM, but absolute position.</p>
* <p>This class is currently in testing - it is NOT AVAILABLE on normal boards.</p>
* 
* @url http://www.espruino.com/Reference#Trig
*/
declare interface Trig {

    /**
     * 
     * @return  
     */
    new(): Trig;
}


/**
* 
*/
declare namespace Trig {

    /**
     * <p>Get the position of the trigger wheel at the given time (from getTime)</p>
     * 
     * @param time 
     * @return  
     * @url http://www.espruino.com/Reference#l_Trig_getPosAtTime
     */
    function getPosAtTime(time: number): number;

    /**
     * <p>Initialise the trigger class</p>
     * 
     * @param pin 
     * @param options 
     * @url http://www.espruino.com/Reference#l_Trig_setup
     */
    function setup(pin: Pin, options: any): void;

    /**
     * <p>Set a trigger for a certain point in the cycle</p>
     * 
     * @param num 
     * @param pos 
     * @param pins 
     * @param pulseLength 
     * @url http://www.espruino.com/Reference#l_Trig_setTrigger
     */
    function setTrigger(num: number, pos: number, pins: any, pulseLength: number): void;

    /**
     * <p>Disable a trigger</p>
     * 
     * @param num 
     * @url http://www.espruino.com/Reference#l_Trig_killTrigger
     */
    function killTrigger(num: number): void;

    /**
     * <p>Get the current state of a trigger</p>
     * 
     * @param num 
     * @return  
     * @url http://www.espruino.com/Reference#l_Trig_getTrigger
     */
    function getTrigger(num: number): any;

    /**
     * <p>Get the RPM of the trigger wheel</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Trig_getRPM
     */
    function getRPM(): number;

    /**
     * <p>Get the current error flags from the trigger wheel - and zero them</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Trig_getErrors
     */
    function getErrors(): number;

    /**
     * <p>Get the current error flags from the trigger wheel - and zero them</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Trig_getErrorArray
     */
    function getErrorArray(): any;
}

/**
* <p>This library allows you to write to Neopixel/WS281x/APA10x LED strips</p>
* <p>These use a high speed single-wire protocol which needs platform-specific
* implementation on some devices - hence this library to simplify things.</p>
* 
* @url http://www.espruino.com/Reference#l_neopixel_undefined
*/
declare function neopixel(): void;

/**
* <p>The ESP8266 library is specific to the ESP8266 version of Espruino, i.e., running Espruino on an ESP8266 module (not to be confused with using the ESP8266 as Wifi add-on to an Espruino board).  This library contains functions to handle ESP8266-specific actions.
* For example: <code>var esp8266 = require(&#39;ESP8266&#39;); esp8266.reboot();</code> performs a hardware reset of the module.</p>
* 
* @url http://www.espruino.com/Reference#l_ESP8266_undefined
*/
declare interface ESP8266 {

    /**
     * 
     * @return  
     */
    new(): ESP8266;
}


/**
* 
*/
declare namespace ESP8266 {

    /**
     * <p>Perform a hardware reset/reboot of the esp8266.</p>
     * 
     * @url http://www.espruino.com/Reference#l_ESP8266_reboot
     */
    function reboot(): void;


    /**
     * <p>Enable or disable the logging of debug information.  A value of <code>true</code> enables debug logging while a value of <code>false</code> disables debug logging.  Debug output is sent to UART1 (gpio2).</p>
     * 
     * @param enable 
     * @url http://www.espruino.com/Reference#l_ESP8266_logDebug
     */
    function logDebug(enable: boolean): void;

    /**
     * <p>Set the debug logging mode. It can be disabled (which frees ~1.2KB of heap), enabled in-memory only, or in-memory and output to a UART.</p>
     * 
     * @param mode 
     * @url http://www.espruino.com/Reference#l_ESP8266_setLog
     */
    function setLog(mode: number): void;

    /**
     * <p>Prints the contents of the debug log to the console.</p>
     * 
     * @url http://www.espruino.com/Reference#l_ESP8266_printLog
     */
    function printLog(): void;

    /**
     * <p>Returns one line from the log or up to 128 characters.</p>
     * 
     * @url http://www.espruino.com/Reference#l_ESP8266_readLog
     */
    function readLog(): void;

    /**
     * <p>Dumps info about all sockets to the log. This is for troubleshooting the socket implementation.</p>
     * 
     * @url http://www.espruino.com/Reference#l_ESP8266_dumpSocketInfo
     */
    function dumpSocketInfo(): void;

    /**
     * <p><strong>Note:</strong> This is deprecated. Use <code>E.setClock(80/160)</code>
     * <strong>Note:</strong>
     * Set the operating frequency of the ESP8266 processor. The default is 160Mhz.</p>
     * <p><strong>Warning</strong>: changing the cpu frequency affects the timing of some I/O operations, notably of software SPI and I2C, so things may be a bit slower at 80Mhz.</p>
     * 
     * @param freq 
     * @url http://www.espruino.com/Reference#l_ESP8266_setCPUFreq
     */
    function setCPUFreq(freq: any): void;

    /**
     * <p>Returns an object that contains details about the state of the ESP8266 with the following fields:</p>
     * <ul>
     * <li><code>sdkVersion</code>   - Version of the SDK.</li>
     * <li><code>cpuFrequency</code> - CPU operating frequency in Mhz.</li>
     * <li><code>freeHeap</code>     - Amount of free heap in bytes.</li>
     * <li><code>maxCon</code>       - Maximum number of concurrent connections.</li>
     * <li><code>flashMap</code>     - Configured flash size&amp;map: &#39;512KB:256/256&#39; .. &#39;4MB:512/512&#39;</li>
     * <li><code>flashKB</code>      - Configured flash size in KB as integer</li>
     * <li><code>flashChip</code>    - Type of flash chip as string with manufacturer &amp; chip, ex: &#39;0xEF 0x4016`</li>
     * </ul>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_ESP8266_getState
     */
    function getState(): any;

    /**
     * <p><strong>Note:</strong> This is deprecated. Use <code>require(&quot;flash&quot;).getFree()</code></p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_ESP8266_getFreeFlash
     */
    function getFreeFlash(): any;

    /**
     * 
     * @param arrayOfData 
     * @return  
     * @url http://www.espruino.com/Reference#l_ESP8266_crc32
     */
    function crc32(arrayOfData: any): any;

    /**
     * <p><strong>This function is deprecated.</strong> Please use <code>require(&quot;neopixel&quot;).write(pin, data)</code> instead</p>
     * 
     * @param pin 
     * @param arrayOfData 
     * @url http://www.espruino.com/Reference#l_ESP8266_neopixelWrite
     */
    function neopixelWrite(pin: Pin, arrayOfData: any): void;

    /**
     * <p>Put the ESP8266 into &#39;deep sleep&#39; for the given number of microseconds, 
     * reducing power consumption drastically. </p>
     * <p>meaning of option values:</p>
     * <p>0 - the 108th Byte of init parameter decides whether RF calibration will be performed or not.</p>
     * <p>1 - run RF calibration after waking up. Power consumption is high.</p>
     * <p>2 - no RF calibration after waking up. Power consumption is low.</p>
     * <p>4 - no RF after waking up. Power consumption is the lowest.</p>
     * <p><strong>Note:</strong> unlike normal Espruino boards&#39; &#39;deep sleep&#39; mode, ESP8266 deep sleep actually turns off the processor. After the given number of microseconds have elapsed, the ESP8266 will restart as if power had been turned off and then back on. <em>All contents of RAM will be lost</em>. 
     * Connect GPIO 16 to RST to enable wakeup.</p>
     * <p><strong>Special:</strong> 0 microseconds cause sleep forever until external wakeup RST pull down occurs.</p>
     * 
     * @param micros 
     * @param option 
     * @url http://www.espruino.com/Reference#l_ESP8266_deepSleep
     */
    function deepSleep(micros: any, option: any): void;

    /**
     * <p>Perform a network ping request. The parameter can be either a String or a numeric IP address.
     * <strong>Note:</strong> This function should probably be removed, or should it be part of the wifi library?</p>
     * 
     * @param ipAddr 
     * @param pingCallback 
     * @url http://www.espruino.com/Reference#l_ESP8266_ping
     */
    function ping(ipAddr: any, pingCallback: any): void;
}

/**
* <p>This library allows you to create http servers and make http requests</p>
* <p>In order to use this, you will need an extra module to get network connectivity such as the <a href="/CC3000">TI CC3000</a> or <a href="/WIZnet">WIZnet W5500</a>.</p>
* <p>This is designed to be a cut-down version of the <a href="http://nodejs.org/api/http.html">node.js library</a>. Please see the <a href="/Internet">Internet</a> page for more information on how to use it.</p>
* 
* @url http://www.espruino.com/Reference#l_http_undefined
*/
declare function http(): void;

/**
* 
*/
declare namespace http {

    /**
     * <p>Create an HTTP Server</p>
     * <p>When a request to the server is made, the callback is called. In the callback you can use the methods on the response (httpSRs) to send data. You can also add <code>request.on(&#39;data&#39;,function() { ... })</code> to listen for POSTed data</p>
     * 
     * @param callback 
     * @return  
     * @url http://www.espruino.com/Reference#l_http_createServer
     */
    function createServer(callback: any): httpSrv;
}

/**
* <p>The HTTP server created by <code>require(&#39;http&#39;).createServer</code></p>
* 
* @url http://www.espruino.com/Reference#httpSrv
*/
declare interface httpSrv {

    /**
     * 
     * @return  
     */
    new(): httpSrv;

    /**
     * <p>Start listening for new HTTP connections on the given port</p>
     * 
     * @param port 
     * @url http://www.espruino.com/Reference#l_httpSrv_listen
     */
    listen(port: number): void;

    /**
     * <p>Stop listening for new HTTP connections</p>
     * 
     * @url http://www.espruino.com/Reference#l_httpSrv_close
     */
    close(): void;
}

/**
* <p>The HTTP server request</p>
* 
* @url http://www.espruino.com/Reference#httpSRq
*/
declare interface httpSRq {

    /**
     * 
     * @return  
     */
    new(): httpSRq;

    /**
     * <p>Return how many bytes are available to read. If there is already a listener for data, this will always return 0.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_httpSRq_available
     */
    available(): number;

    /**
     * <p>Return a string containing characters that have been received</p>
     * 
     * @param chars 
     * @return  
     * @url http://www.espruino.com/Reference#l_httpSRq_read
     */
    read(chars: number): any;

    /**
     * <p>Pipe this to a stream (an object with a &#39;write&#39; method)</p>
     * 
     * @param destination 
     * @param options 
     * @url http://www.espruino.com/Reference#l_httpSRq_pipe
     */
    pipe(destination: any, options: any): void;
}

/**
* <p>The HTTP server response</p>
* 
* @url http://www.espruino.com/Reference#httpSRs
*/
declare interface httpSRs {

    /**
     * 
     * @return  
     */
    new(): httpSRs;

    /**
     * <p>This function writes the <code>data</code> argument as a string. Data that is passed in
     * (including arrays) will be converted to a string with the normal JavaScript 
     * <code>toString</code> method. For more information about sending binary data see <code>Socket.write</code></p>
     * 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_httpSRs_write
     */
    write(data: any): boolean;

    /**
     * <p>See <code>Socket.write</code> for more information about the data argument</p>
     * 
     * @param data 
     * @url http://www.espruino.com/Reference#l_httpSRs_end
     */
    end(data: any): void;

    /**
     * 
     * @param statusCode 
     * @param headers 
     * @url http://www.espruino.com/Reference#l_httpSRs_writeHead
     */
    writeHead(statusCode: number, headers: any): void;
}

/**
* <p>The HTTP client request, returned by <code>http.request()</code> and <code>http.get()</code>.</p>
* 
* @url http://www.espruino.com/Reference#httpCRq
*/
declare interface httpCRq {

    /**
     * 
     * @return  
     */
    new(): httpCRq;

    /**
     * <p>This function writes the <code>data</code> argument as a string. Data that is passed in
     * (including arrays) will be converted to a string with the normal JavaScript 
     * <code>toString</code> method. For more information about sending binary data see <code>Socket.write</code></p>
     * 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_httpCRq_write
     */
    write(data: any): boolean;

    /**
     * <p>Finish this HTTP request - optional data to append as an argument</p>
     * <p>See <code>Socket.write</code> for more information about the data argument</p>
     * 
     * @param data 
     * @url http://www.espruino.com/Reference#l_httpCRq_end
     */
    end(data: any): void;
}

/**
* <p>The HTTP client response, passed to the callback of <code>http.request()</code> an <code>http.get()</code>.</p>
* 
* @url http://www.espruino.com/Reference#httpCRs
*/
declare interface httpCRs {

    /**
     * 
     * @return  
     */
    new(): httpCRs;

    /**
     * <p>Return how many bytes are available to read. If there is a &#39;data&#39; event handler, this will always return 0.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_httpCRs_available
     */
    available(): number;

    /**
     * <p>Return a string containing characters that have been received</p>
     * 
     * @param chars 
     * @return  
     * @url http://www.espruino.com/Reference#l_httpCRs_read
     */
    read(chars: number): any;

    /**
     * <p>Pipe this to a stream (an object with a &#39;write&#39; method)</p>
     * 
     * @param destination 
     * @param options 
     * @url http://www.espruino.com/Reference#l_httpCRs_pipe
     */
    pipe(destination: any, options: any): void;
}

/**
* 
* @url http://www.espruino.com/Reference#l_CC3000_undefined
*/
declare interface CC3000 {

    /**
     * 
     * @return  
     */
    new(): CC3000;
}


/**
* 
*/
declare namespace CC3000 {

    /**
     * <p>Initialise the CC3000 and return a WLAN object</p>
     * 
     * @param spi 
     * @param cs 
     * @param en 
     * @param irq 
     * @return  
     * @url http://www.espruino.com/Reference#l_CC3000_connect
     */
    function connect(spi: any, cs: Pin, en: Pin, irq: Pin): WLAN;
}

/**
* <p>An instantiation of a WiFi network adaptor</p>
* 
* @url http://www.espruino.com/Reference#WLAN
*/
declare interface WLAN {

    /**
     * 
     * @return  
     */
    new(): WLAN;

    /**
     * <p>Connect to a wireless network</p>
     * 
     * @param ap 
     * @param key 
     * @param callback 
     * @return  
     * @url http://www.espruino.com/Reference#l_WLAN_connect
     */
    connect(ap: any, key: any, callback: any): boolean;

    /**
     * <p>Completely uninitialise and power down the CC3000. After this you&#39;ll have to use <code>require(&quot;CC3000&quot;).connect()</code> again.</p>
     * 
     * @url http://www.espruino.com/Reference#l_WLAN_disconnect
     */
    disconnect(): void;

    /**
     * <p>Completely uninitialise and power down the CC3000, then reconnect to the old access point.</p>
     * 
     * @url http://www.espruino.com/Reference#l_WLAN_reconnect
     */
    reconnect(): void;

    /**
     * <p>Get the current IP address</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_WLAN_getIP
     */
    getIP(): any;

    /**
     * <p>Set the current IP address for get an IP from DHCP (if no options object is specified).</p>
     * <p><strong>Note:</strong> Changes are written to non-volatile memory, but will only take effect after calling <code>wlan.reconnect()</code></p>
     * 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_WLAN_setIP
     */
    setIP(options: any): boolean;
}

/**
* <p>This library implements a telnet console for the Espruino interpreter. It requires a network
* connection, e.g. Wifi, and <strong>currently only functions on the ESP8266 and on Linux </strong>. It uses
* port 23 on the ESP8266 and port 2323 on Linux.</p>
* <p><strong>Note:</strong> To enable on Linux, run <code>./espruino --telnet</code></p>
* 
* @url http://www.espruino.com/Reference#l_TelnetServer_undefined
*/
declare interface TelnetServer {

    /**
     * 
     * @return  
     */
    new(): TelnetServer;
}


/**
* 
*/
declare namespace TelnetServer {

    /**
     * 
     * @param options 
     * @url http://www.espruino.com/Reference#l_TelnetServer_setOptions
     */
    function setOptions(options: any): void;
}

/**
* <p>Library for communication with the WIZnet Ethernet module</p>
* 
* @url http://www.espruino.com/Reference#l_WIZnet_undefined
*/
declare interface WIZnet {

    /**
     * 
     * @return  
     */
    new(): WIZnet;
}


/**
* 
*/
declare namespace WIZnet {

    /**
     * <p>Initialise the WIZnet module and return an Ethernet object</p>
     * 
     * @param spi 
     * @param cs 
     * @return  
     * @url http://www.espruino.com/Reference#l_WIZnet_connect
     */
    function connect(spi: any, cs: Pin): Ethernet;
}

/**
* <p>An instantiation of an Ethernet network adaptor</p>
* 
* @url http://www.espruino.com/Reference#Ethernet
*/
declare interface Ethernet {

    /**
     * 
     * @return  
     */
    new(): Ethernet;

    /**
     * <p>Get the current IP address, subnet, gateway and mac address.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Ethernet_getIP
     */
    getIP(): any;

    /**
     * <p>Set the current IP address or get an IP from DHCP (if no options object is specified)</p>
     * <p>If &#39;mac&#39; is specified as an option, it must be a string of the form <code>&quot;00:01:02:03:04:05&quot;</code></p>
     * 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_Ethernet_setIP
     */
    setIP(options: any): boolean;
}

/**
* <p>Library that initialises a network device that calls into JavaScript</p>
* 
* @url http://www.espruino.com/Reference#l_NetworkJS_undefined
*/
declare interface NetworkJS {

    /**
     * 
     * @return  
     */
    new(): NetworkJS;
}


/**
* <p>This class helps to convert URLs into Objects of information ready for http.request/get</p>
* 
* @url http://www.espruino.com/Reference#url
*/
declare function url(): void;

/**
* 
*/
declare namespace url {

    /**
     * <p>A utility function to split a URL into parts</p>
     * <p>This is useful in web servers for instance when handling a request.</p>
     * <p>For instance <code>url.parse(&quot;/a?b=c&amp;d=e&quot;,true)</code> returns <code>{&quot;method&quot;:&quot;GET&quot;,&quot;host&quot;:&quot;&quot;,&quot;path&quot;:&quot;/a?b=c&amp;d=e&quot;,&quot;pathname&quot;:&quot;/a&quot;,&quot;search&quot;:&quot;?b=c&amp;d=e&quot;,&quot;port&quot;:80,&quot;query&quot;:{&quot;b&quot;:&quot;c&quot;,&quot;d&quot;:&quot;e&quot;}}</code></p>
     * 
     * @param urlStr 
     * @param parseQuery 
     * @return  
     * @url http://www.espruino.com/Reference#l_url_parse
     */
    function parse(urlStr: any, parseQuery: boolean): any;
}

/**
* <p>This library allows you to create TCPIP servers and clients</p>
* <p>In order to use this, you will need an extra module to get network connectivity.</p>
* <p>This is designed to be a cut-down version of the <a href="http://nodejs.org/api/net.html">node.js library</a>. Please see the <a href="/Internet">Internet</a> page for more information on how to use it.</p>
* 
* @url http://www.espruino.com/Reference#l_net_undefined
*/
declare function net(): void;

/**
* 
*/
declare namespace net {

    /**
     * <p>Create a Server</p>
     * <p>When a request to the server is made, the callback is called. In the callback you can use the methods on the connection to send data. You can also add <code>connection.on(&#39;data&#39;,function() { ... })</code> to listen for received data</p>
     * 
     * @param callback 
     * @return  
     * @url http://www.espruino.com/Reference#l_net_createServer
     */
    function createServer(callback: any): Server;

    /**
     * <p>Create a socket connection</p>
     * 
     * @param options 
     * @param callback 
     * @return  
     * @url http://www.espruino.com/Reference#l_net_connect
     */
    function connect(options: any, callback: any): Socket;
}

/**
* <p>The socket server created by <code>require(&#39;net&#39;).createServer</code></p>
* 
* @url http://www.espruino.com/Reference#Server
*/
declare interface Server {

    /**
     * 
     * @return  
     */
    new(): Server;

    /**
     * <p>Start listening for new connections on the given port</p>
     * 
     * @param port 
     * @url http://www.espruino.com/Reference#l_Server_listen
     */
    listen(port: number): void;

    /**
     * <p>Stop listening for new connections</p>
     * 
     * @url http://www.espruino.com/Reference#l_Server_close
     */
    close(): void;
}

/**
* <p>An actual socket connection - allowing transmit/receive of TCP data</p>
* 
* @url http://www.espruino.com/Reference#Socket
*/
declare interface Socket {

    /**
     * 
     * @return  
     */
    new(): Socket;

    /**
     * <p>Return how many bytes are available to read. If there is already a listener for data, this will always return 0.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Socket_available
     */
    available(): number;

    /**
     * <p>Return a string containing characters that have been received</p>
     * 
     * @param chars 
     * @return  
     * @url http://www.espruino.com/Reference#l_Socket_read
     */
    read(chars: number): any;

    /**
     * <p>Pipe this to a stream (an object with a &#39;write&#39; method)</p>
     * 
     * @param destination 
     * @param options 
     * @url http://www.espruino.com/Reference#l_Socket_pipe
     */
    pipe(destination: any, options: any): void;

    /**
     * <p>Close this socket - optional data to append as an argument.</p>
     * <p>See <code>Socket.write</code> for more information about the data argument</p>
     * 
     * @param data 
     * @url http://www.espruino.com/Reference#l_Socket_end
     */
    end(data: any): void;
}

/**
* <p>This library allows you to create TCPIP servers and clients using TLS encryption</p>
* <p>In order to use this, you will need an extra module to get network connectivity.</p>
* <p>This is designed to be a cut-down version of the <a href="http://nodejs.org/api/tls.html">node.js library</a>. Please see the <a href="/Internet">Internet</a> page for more information on how to use it.</p>
* 
* @url http://www.espruino.com/Reference#l_tls_undefined
*/
declare function tls(): void;

/**
* <p><strong>Note:</strong> This library is currently only included in builds for the original Espruino boards.
* For other boards you will have to make build your own firmware.</p>
* 
* @url http://www.espruino.com/Reference#l_hashlib_undefined
*/
declare function hashlib(): void;

/**
* 
*/
declare namespace hashlib {

    /**
     * 
     * @param message 
     * @return  
     * @url http://www.espruino.com/Reference#l_hashlib_sha224
     */
    function sha224(message: any): HASH;

    /**
     * 
     * @param message 
     * @return  
     * @url http://www.espruino.com/Reference#l_hashlib_sha256
     */
    function sha256(message: any): HASH;
}

/**
* <p><strong>Note:</strong> This class is currently only included in builds for the original Espruino boards.
* For other boards you will have to make build your own firmware.</p>
* 
* @url http://www.espruino.com/Reference#HASH
*/
declare interface HASH {

    /**
     * 
     * @return  
     */
    new(): HASH;

    /**
     * 
     * @param message 
     * @url http://www.espruino.com/Reference#l_HASH_update
     */
    update(message: any): void;

    /**
     * 
     * @param message 
     * @return  
     * @url http://www.espruino.com/Reference#l_HASH_digest
     */
    digest(message: any): any;

    /**
     * 
     * @param message 
     * @return  
     * @url http://www.espruino.com/Reference#l_HASH_hexdigest
     */
    hexdigest(message: any): any;
}

/**
* <p>Class containing utility functions for the Seeed WIO LTE board</p>
* 
* @url http://www.espruino.com/Reference#WioLTE
*/
declare interface WioLTE {

    /**
     * 
     * @return  
     */
    new(): WioLTE;
}


/**
* 
*/
declare namespace WioLTE {

    /**
     * <p>Set the WIO&#39;s LED</p>
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_LED
     */
    interface LED {

        /**
         * 
         * @param red 
         * @param green 
         * @param blue 
         * @return  
         */
        new(red: number, green: number, blue: number): LED;
    }


    /**
     * <p>Set the power of Grove connectors, except for <code>D38</code> and <code>D39</code> which are always on.</p>
     * 
     * @param onoff 
     * @url http://www.espruino.com/Reference#l_WioLTE_setGrovePower
     */
    function setGrovePower(onoff: boolean): void;

    /**
     * <p>Turn power to the WIO&#39;s LED on or off.</p>
     * <p>Turning the LED on won&#39;t immediately display a color - that must be done with <code>WioLTE.LED(r,g,b)</code></p>
     * 
     * @param onoff 
     * @url http://www.espruino.com/Reference#l_WioLTE_setLEDPower
     */
    function setLEDPower(onoff: boolean): void;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_D38
     */
    var D38: any;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_D20
     */
    var D20: any;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_A6
     */
    var A6: any;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_I2C
     */
    var I2C: any;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_UART
     */
    var UART: any;

    /**
     * 
     * @url http://www.espruino.com/Reference#l_WioLTE_A4
     */
    var A4: any;
}

/**
* <p>This library handles interfacing with a FAT32 filesystem on an SD card. The API is designed to be similar to node.js&#39;s - However Espruino does not currently support asynchronous file IO, so the functions behave like node.js&#39;s xxxxSync functions. Versions of the functions with &#39;Sync&#39; after them are also provided for compatibility.</p>
* <p>Currently this provides minimal file IO - it&#39;s great for logging and loading/saving settings, but not good for loading large amounts of data as you will soon fill your memory up.</p>
* <p>It is currently only available on boards that contain an SD card slot, such as the Olimexino and the HY. It can not currently be added to boards that did not ship with a card slot.</p>
* <p>To use this, you must type <code>var fs = require(&#39;fs&#39;)</code> to get access to the library</p>
* 
* @url http://www.espruino.com/Reference#l_fs_undefined
*/
declare function fs(): void;

/**
* 
*/
declare namespace fs {

    /**
     * 
     * @param source 
     * @param destination 
     * @param options 
     * @url http://www.espruino.com/Reference#l_fs_pipe
     */
    function pipe(source: any, destination: any, options: any): void;

    /**
     * <p>List all files in the supplied directory, returning them as an array of strings.</p>
     * <p>NOTE: Espruino does not yet support Async file IO, so this function behaves like the &#39;Sync&#39; version.</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_readdir
     */
    function readdir(path: any): any;

    /**
     * <p>List all files in the supplied directory, returning them as an array of strings.</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_readdirSync
     */
    function readdirSync(path: any): any;

    /**
     * <p>Write the data to the given file</p>
     * <p>NOTE: Espruino does not yet support Async file IO, so this function behaves like the &#39;Sync&#39; version.</p>
     * 
     * @param path 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_writeFile
     */
    function writeFile(path: any, data: any): boolean;

    /**
     * <p>Write the data to the given file</p>
     * 
     * @param path 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_writeFileSync
     */
    function writeFileSync(path: any, data: any): boolean;

    /**
     * <p>Append the data to the given file, created a new file if it doesn&#39;t exist</p>
     * <p>NOTE: Espruino does not yet support Async file IO, so this function behaves like the &#39;Sync&#39; version.</p>
     * 
     * @param path 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_appendFile
     */
    function appendFile(path: any, data: any): boolean;

    /**
     * <p>Append the data to the given file, created a new file if it doesn&#39;t exist</p>
     * 
     * @param path 
     * @param data 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_appendFileSync
     */
    function appendFileSync(path: any, data: any): boolean;

    /**
     * <p>Read all data from a file and return as a string</p>
     * <p>NOTE: Espruino does not yet support Async file IO, so this function behaves like the &#39;Sync&#39; version.</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_readFile
     */
    function readFile(path: any): any;

    /**
     * <p>Read all data from a file and return as a string.</p>
     * <p><strong>Note:</strong> The size of files you can load using this method is limited by the amount of available RAM. To read files a bit at a time, see the <code>File</code> class.</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_readFileSync
     */
    function readFileSync(path: any): any;

    /**
     * <p>Delete the given file</p>
     * <p>NOTE: Espruino does not yet support Async file IO, so this function behaves like the &#39;Sync&#39; version.</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_unlink
     */
    function unlink(path: any): boolean;

    /**
     * <p>Delete the given file</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_unlinkSync
     */
    function unlinkSync(path: any): boolean;

    /**
     * <p>Return information on the given file. This returns an object with the following
     * fields:</p>
     * <p>size: size in bytes
     * dir: a boolean specifying if the file is a directory or not
     * mtime: A Date structure specifying the time the file was last modified</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_statSync
     */
    function statSync(path: any): any;

    /**
     * <p>Create the directory</p>
     * <p>NOTE: Espruino does not yet support Async file IO, so this function behaves like the &#39;Sync&#39; version.</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_mkdir
     */
    function mkdir(path: any): boolean;

    /**
     * <p>Create the directory</p>
     * 
     * @param path 
     * @return  
     * @url http://www.espruino.com/Reference#l_fs_mkdirSync
     */
    function mkdirSync(path: any): boolean;
}

/**
* <p>This is the File object - it allows you to stream data to and from files (As opposed to the <code>require(&#39;fs&#39;).readFile(..)</code> style functions that read an entire file).</p>
* <p>To create a File object, you must type <code>var fd = E.openFile(&#39;filepath&#39;,&#39;mode&#39;)</code> - see <a href="#l_E_openFile">E.openFile</a> for more information.</p>
* <p><strong>Note:</strong> If you want to remove an SD card after you have started using it, you <em>must</em> call <code>E.unmountSD()</code> or you may cause damage to the card.</p>
* 
* @url http://www.espruino.com/Reference#File
*/
declare interface File {

    /**
     * 
     * @return  
     */
    new(): File;

    /**
     * <p>Close an open file.</p>
     * 
     * @url http://www.espruino.com/Reference#l_File_close
     */
    close(): void;

    /**
     * <p>write data to a file</p>
     * 
     * @param buffer 
     * @return  
     * @url http://www.espruino.com/Reference#l_File_write
     */
    write(buffer: any): number;

    /**
     * <p>Read data in a file in byte size chunks</p>
     * 
     * @param length 
     * @return  
     * @url http://www.espruino.com/Reference#l_File_read
     */
    read(length: number): any;

    /**
     * <p>Skip the specified number of bytes forward in the file</p>
     * 
     * @param nBytes 
     * @url http://www.espruino.com/Reference#l_File_skip
     */
    skip(nBytes: number): void;

    /**
     * <p>Seek to a certain position in the file</p>
     * 
     * @param nBytes 
     * @url http://www.espruino.com/Reference#l_File_seek
     */
    seek(nBytes: number): void;

    /**
     * <p>Pipe this file to a stream (an object with a &#39;write&#39; method)</p>
     * 
     * @param destination 
     * @param options 
     * @url http://www.espruino.com/Reference#l_File_pipe
     */
    pipe(destination: any, options: any): void;
}

/**
* <p>This class provides Graphics operations that can be applied to a surface.</p>
* <p>Use Graphics.createXXX to create a graphics object that renders in the way you want. See <a href="/Graphics">the Graphics page</a> for more information.</p>
* <p><strong>Note:</strong> On boards that contain an LCD, there is a built-in &#39;LCD&#39; object of type Graphics. For instance to draw a line you&#39;d type: <code>LCD.drawLine(0,0,100,100)</code></p>
* 
* @url http://www.espruino.com/Reference#Graphics
*/
declare interface Graphics {

    /**
     * 
     * @return  
     */
    new(): Graphics;

    /**
     * <p>The width of the LCD</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_getWidth
     */
    getWidth(): number;

    /**
     * <p>The height of the LCD</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_getHeight
     */
    getHeight(): number;

    /**
     * <p>Clear the LCD with the Background Color</p>
     * 
     * @url http://www.espruino.com/Reference#l_Graphics_clear
     */
    clear(): void;

    /**
     * <p>Fill a rectangular area in the Foreground Color</p>
     * 
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     * @url http://www.espruino.com/Reference#l_Graphics_fillRect
     */
    fillRect(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * <p>Draw an unfilled rectangle 1px wide in the Foreground Color</p>
     * 
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     * @url http://www.espruino.com/Reference#l_Graphics_drawRect
     */
    drawRect(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * <p>Draw a filled circle in the Foreground Color</p>
     * 
     * @param x 
     * @param y 
     * @param rad 
     * @url http://www.espruino.com/Reference#l_Graphics_fillCircle
     */
    fillCircle(x: number, y: number, rad: number): void;

    /**
     * <p>Draw an unfilled circle 1px wide in the Foreground Color</p>
     * 
     * @param x 
     * @param y 
     * @param rad 
     * @url http://www.espruino.com/Reference#l_Graphics_drawCircle
     */
    drawCircle(x: number, y: number, rad: number): void;

    /**
     * <p>Get a pixel&#39;s color</p>
     * 
     * @param x 
     * @param y 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_getPixel
     */
    getPixel(x: number, y: number): number;

    /**
     * <p>Set a pixel&#39;s color</p>
     * 
     * @param x 
     * @param y 
     * @param col 
     * @url http://www.espruino.com/Reference#l_Graphics_setPixel
     */
    setPixel(x: number, y: number, col: any): void;

    /**
     * <p>Set the color to use for subsequent drawing operations</p>
     * 
     * @param r 
     * @param g 
     * @param b 
     * @url http://www.espruino.com/Reference#l_Graphics_setColor
     */
    setColor(r: any, g: any, b: any): void;

    /**
     * <p>Set the background color to use for subsequent drawing operations</p>
     * 
     * @param r 
     * @param g 
     * @param b 
     * @url http://www.espruino.com/Reference#l_Graphics_setBgColor
     */
    setBgColor(r: any, g: any, b: any): void;

    /**
     * <p>Get the color to use for subsequent drawing operations</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_getColor
     */
    getColor(): number;

    /**
     * <p>Get the background color to use for subsequent drawing operations</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_getBgColor
     */
    getBgColor(): number;

    /**
     * <p>Make subsequent calls to <code>drawString</code> use the built-in 4x6 pixel bitmapped Font</p>
     * 
     * @url http://www.espruino.com/Reference#l_Graphics_setFontBitmap
     */
    setFontBitmap(): void;

    /**
     * <p>Make subsequent calls to <code>drawString</code> use a Vector Font of the given height</p>
     * 
     * @param size 
     * @url http://www.espruino.com/Reference#l_Graphics_setFontVector
     */
    setFontVector(size: number): void;

    /**
     * <p>Make subsequent calls to <code>drawString</code> use a Custom Font of the given height. See the <a href="http://www.espruino.com/Fonts">Fonts page</a> for more
     * information about custom fonts and how to create them.</p>
     * 
     * @param bitmap 
     * @param firstChar 
     * @param width 
     * @param height 
     * @url http://www.espruino.com/Reference#l_Graphics_setFontCustom
     */
    setFontCustom(bitmap: any, firstChar: number, width: any, height: number): void;

    /**
     * <p>Draw a string of text in the current font</p>
     * 
     * @param str 
     * @param x 
     * @param y 
     * @url http://www.espruino.com/Reference#l_Graphics_drawString
     */
    drawString(str: any, x: number, y: number): void;

    /**
     * <p>Return the size in pixels of a string of text in the current font</p>
     * 
     * @param str 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_stringWidth
     */
    stringWidth(str: any): number;

    /**
     * <p>Draw a line between x1,y1 and x2,y2 in the current foreground color</p>
     * 
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     * @url http://www.espruino.com/Reference#l_Graphics_drawLine
     */
    drawLine(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * <p>Draw a line from the last position of lineTo or moveTo to this position</p>
     * 
     * @param x 
     * @param y 
     * @url http://www.espruino.com/Reference#l_Graphics_lineTo
     */
    lineTo(x: number, y: number): void;

    /**
     * <p>Move the cursor to a position - see lineTo</p>
     * 
     * @param x 
     * @param y 
     * @url http://www.espruino.com/Reference#l_Graphics_moveTo
     */
    moveTo(x: number, y: number): void;

    /**
     * <p>Draw a filled polygon in the current foreground color</p>
     * 
     * @param poly 
     * @url http://www.espruino.com/Reference#l_Graphics_fillPoly
     */
    fillPoly(poly: any): void;

    /**
     * <p>Set the current rotation of the graphics device.</p>
     * 
     * @param rotation 
     * @param reflect 
     * @url http://www.espruino.com/Reference#l_Graphics_setRotation
     */
    setRotation(rotation: number, reflect: boolean): void;

    /**
     * <p>Draw an image at the specified position. If the image is 1 bit, the graphics foreground/background colours will be used. Otherwise color data will be copied as-is. Bitmaps are rendered MSB-first</p>
     * 
     * @param image 
     * @param x 
     * @param y 
     * @url http://www.espruino.com/Reference#l_Graphics_drawImage
     */
    drawImage(image: any, x: number, y: number): void;

    /**
     * <p>Return the area of the Graphics canvas that has been modified, and optionally clear
     * the modified area to 0.</p>
     * <p>For instance if <code>g.setPixel(10,20)</code> was called, this would return <code>{x1:10, y1:20, x2:10, y2:20}</code></p>
     * 
     * @param reset 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_getModified
     */
    getModified(reset: boolean): any;

    /**
     * <p>Create a Graphics object that renders to an Array Buffer. This will have a field called &#39;buffer&#39; that can get used to get at the buffer itself</p>
     * 
     * @param width 
     * @param height 
     * @param bpp 
     * @param options 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_createArrayBuffer
     */
    createArrayBuffer(width: number, height: number, bpp: number, options: any): Graphics;

    /**
     * <p>Create a Graphics object that renders by calling a JavaScript callback function to draw pixels</p>
     * 
     * @param width 
     * @param height 
     * @param bpp 
     * @param callback 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_createCallback
     */
    createCallback(width: number, height: number, bpp: number, callback: any): Graphics;

    /**
     * <p>Create a Graphics object that renders to SDL window (Linux-based devices only)</p>
     * 
     * @param width 
     * @param height 
     * @return  
     * @url http://www.espruino.com/Reference#l_Graphics_createSDL
     */
    createSDL(width: number, height: number): Graphics;
}

/**
* <p>Class containing <a href="http://www.puck-js.com">Puck.js&#39;s</a> utility functions.</p>
* 
* @url http://www.espruino.com/Reference#Puck
*/
declare interface Puck {

    /**
     * 
     * @return  
     */
    new(): Puck;
}


/**
* 
*/
declare namespace Puck {

    /**
     * <p>Turn on the magnetometer, take a single reading, and then turn it off again.</p>
     * <p>An object of the form <code>{x,y,z}</code> is returned containing magnetometer readings.
     * Due to residual magnetism in the Puck and magnetometer itself, with
     * no magnetic field the Puck will not return <code>{x:0,y:0,z:0}</code>.</p>
     * <p>Instead, it&#39;s up to you to figure out what the &#39;zero value&#39; is for your
     * Puck in your location and to then subtract that from the value returned. If
     * you&#39;re not trying to measure the Earth&#39;s magnetic field then it&#39;s a good idea
     * to just take a reading at startup and use that.</p>
     * <p>With the aerial at the top of the board, the <code>y</code> reading is vertical, <code>x</code> is
     * horizontal, and <code>z</code> is through the board.</p>
     * <p>Readings are in increments of 0.1 micro Tesla (uT). The Earth&#39;s magnetic field
     * varies from around 25-60 uT, so the reading will vary by 250 to 600 depending
     * on location.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Puck_mag
     */
    function mag(): any;

    /**
     * <p>Turn on the magnetometer, take a single temperature reading from the MAG3110 chip, and then turn it off again.</p>
     * <p>(If the magnetometer is already on, this just returns the last reading obtained)</p>
     * <p><code>E.getTemperature()</code> uses the microcontroller&#39;s temperature sensor, but this uses the magnetometer&#39;s.</p>
     * <p>The reading obtained is an integer (so no decimal places), but the sensitivity is factory trimmed. to 1&deg;C, however the temperature
     * offset isn&#39;t - so absolute readings may still need calibrating.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Puck_magTemp
     */
    function magTemp(): number;

    /**
     * <p>Turn the magnetometer off</p>
     * 
     * @url http://www.espruino.com/Reference#l_Puck_magOff
     */
    function magOff(): void;

    /**
     * <p>Transmit the given set of IR pulses - data should be an array of pulse times
     * in milliseconds (as <code>[on, off, on, off, on, etc]</code>).</p>
     * <p>For example <code>Puck.IR(pulseTimes)</code> - see <a href="http://www.espruino.com/Puck.js+Infrared">http://www.espruino.com/Puck.js+Infrared</a>
     * for a full example.</p>
     * <p>You can also attach an external LED to Puck.js, in which case
     * you can just execute <code>Puck.IR(pulseTimes, led_cathode, led_anode)</code></p>
     * 
     * @url http://www.espruino.com/Reference#l_Puck_IR
     */
    interface IR {

        /**
         * 
         * @param data 
         * @param cathode 
         * @param anode 
         * @return  
         */
        new(data: any, cathode: Pin, anode: Pin): IR;
    }


    /**
     * <p>Capacitive sense - the higher the capacitance, the higher the number returned.</p>
     * <p>If called without arguments, a value depending on the capacitance of what is 
     * attached to pin D11 will be returned. If you attach a length of wire to D11,
     * you&#39;ll be able to see a higher value returned when your hand is near the wire
     * than when it is away.</p>
     * <p>You can also supply pins to use yourself, however if you do this then
     * the TX pin must be connected to RX pin and sense plate via a roughly 1MOhm 
     * resistor.</p>
     * <p>When not supplying pins, Puck.js uses an internal resistor between D12(tx)
     * and D11(rx).</p>
     * 
     * @param tx 
     * @param rx 
     * @return  
     * @url http://www.espruino.com/Reference#l_Puck_capSense
     */
    function capSense(tx: Pin, rx: Pin): number;

    /**
     * <p>Return a light value based on the light the red LED is seeing.</p>
     * <p><strong>Note:</strong> If called more than 5 times per second, the received light value
     * may not be accurate.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Puck_light
     */
    function light(): number;

    /**
     * <p>Return an approximate battery percentage remaining based on
     * a normal CR2032 battery (2.8 - 2.2v)</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Puck_getBatteryPercentage
     */
    function getBatteryPercentage(): number;

    /**
     * <p>Run a self-test, and return true for a pass. This checks for shorts
     * between pins, so your Puck shouldn&#39;t have anything connected to it.</p>
     * <p><strong>Note:</strong> This self-test auto starts if you hold the button on your Puck
     * down while inserting the battery, leave it pressed for 3 seconds (while
     * the green LED is lit) and release it soon after all LEDs turn on. 5
     * red blinks is a fail, 5 green is a pass.</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Puck_selfTest
     */
    function selfTest(): boolean;
}

/**
* <p>Class containing utility functions for accessing IO on the hexagonal badge</p>
* 
* @url http://www.espruino.com/Reference#Badge
*/
declare interface Badge {

    /**
     * 
     * @return  
     */
    new(): Badge;
}


/**
* 
*/
declare namespace Badge {

    /**
     * <p>Capacitive sense - the higher the capacitance, the higher the number returned.</p>
     * <p>Supply a corner between 1 and 6, and a</p>
     * 
     * @param corner 
     * @return  
     * @url http://www.espruino.com/Reference#l_Badge_capSense
     */
    function capSense(corner: number): number;

    /**
     * <p>Return an approximate battery percentage remaining based on
     * a normal CR2032 battery (2.8 - 2.2v)</p>
     * 
     * @return  
     * @url http://www.espruino.com/Reference#l_Badge_getBatteryPercentage
     */
    function getBatteryPercentage(): number;

    /**
     * <p>Set the LCD&#39;s contrast</p>
     * 
     * @param c 
     * @url http://www.espruino.com/Reference#l_Badge_setContrast
     */
    function setContrast(c: number): void;
}

/**
* 
* @url http://www.espruino.com/Reference#l__global_HIGH
*/
declare var HIGH: number;

/**
* 
* @url http://www.espruino.com/Reference#l__global_LOW
*/
declare var LOW: number;

/**
* <p>Read 8 bits of memory at the given location - DANGEROUS!</p>
* 
* @param addr 
* @param count 
* @return  
* @url http://www.espruino.com/Reference#l__global_peek8
*/
declare function peek8(addr: number, count: number): any;

/**
* <p>Write 8 bits of memory at the given location - VERY DANGEROUS!</p>
* 
* @param addr 
* @param value 
* @url http://www.espruino.com/Reference#l__global_poke8
*/
declare function poke8(addr: number, value: any): void;

/**
* <p>Read 16 bits of memory at the given location - DANGEROUS!</p>
* 
* @param addr 
* @param count 
* @return  
* @url http://www.espruino.com/Reference#l__global_peek16
*/
declare function peek16(addr: number, count: number): any;

/**
* <p>Write 16 bits of memory at the given location - VERY DANGEROUS!</p>
* 
* @param addr 
* @param value 
* @url http://www.espruino.com/Reference#l__global_poke16
*/
declare function poke16(addr: number, value: any): void;

/**
* <p>Read 32 bits of memory at the given location - DANGEROUS!</p>
* 
* @param addr 
* @param count 
* @return  
* @url http://www.espruino.com/Reference#l__global_peek32
*/
declare function peek32(addr: number, count: number): any;

/**
* <p>Write 32 bits of memory at the given location - VERY DANGEROUS!</p>
* 
* @param addr 
* @param value 
* @url http://www.espruino.com/Reference#l__global_poke32
*/
declare function poke32(addr: number, value: any): void;

/**
* <p>Get the analog value of the given pin</p>
* <p>This is different to Arduino which only returns an integer between 0 and 1023</p>
* <p>However only pins connected to an ADC will work (see the datasheet)</p>
* <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset pin&#39;s state to <code>&quot;analog&quot;</code></p>
* 
* @param pin 
* @return  
* @url http://www.espruino.com/Reference#l__global_analogRead
*/
declare function analogRead(pin: Pin): number;

/**
* <p>Set the analog Value of a pin. It will be output using PWM.</p>
* <p>Objects can contain:</p>
* <ul>
* <li><code>freq</code> - pulse frequency in Hz, eg. <code>analogWrite(A0,0.5,{ freq : 10 });</code> - specifying a frequency will force PWM output, even if the pin has a DAC</li>
* <li><code>soft</code> - boolean, If true software PWM is used if available.</li>
* <li><p><code>forceSoft</code> - boolean, If true software PWM is used even</p>
* <p><strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset pin&#39;s state to <code>&quot;output&quot;</code></p>
* </li>
* </ul>
* 
* @param pin 
* @param value 
* @param options 
* @url http://www.espruino.com/Reference#l__global_analogWrite
*/
declare function analogWrite(pin: Pin, value: number, options: any): void;

/**
* <p>Pulse the pin with the value for the given time in milliseconds. It uses a hardware timer to produce accurate pulses, and returns immediately (before the pulse has finished). Use <code>digitalPulse(A0,1,0)</code> to wait until a previous pulse has finished.</p>
* <p>eg. <code>digitalPulse(A0,1,5);</code> pulses A0 high for 5ms. <code>digitalPulse(A0,1,[5,2,4]);</code> pulses A0 high for 5ms, low for 2ms, and high for 4ms</p>
* <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset pin&#39;s state to <code>&quot;output&quot;</code></p>
* <p>digitalPulse is for SHORT pulses that need to be very accurate. If you&#39;re doing anything over a few milliseconds, use setTimeout instead.</p>
* 
* @param pin 
* @param value 
* @param time 
* @url http://www.espruino.com/Reference#l__global_digitalPulse
*/
declare function digitalPulse(pin: Pin, value: boolean, time: any): void;

/**
* <p>Set the digital value of the given pin.</p>
* <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset pin&#39;s state to <code>&quot;output&quot;</code></p>
* <p>If pin argument is an array of pins (eg. <code>[A2,A1,A0]</code>) the value argument will be treated
* as an array of bits where the last array element is the least significant bit.</p>
* <p>In this case, pin values are set least significant bit first (from the right-hand side
* of the array of pins). This means you can use the same pin multiple times, for
* example <code>digitalWrite([A1,A1,A0,A0],0b0101)</code> would pulse A0 followed by A1.</p>
* 
* @param pin 
* @param value 
* @url http://www.espruino.com/Reference#l__global_digitalWrite
*/
declare function digitalWrite(pin: Pin, value: number): void;

/**
* <p>Get the digital value of the given pin.</p>
* <p> <strong>Note:</strong> if you didn&#39;t call <code>pinMode</code> beforehand then this function will also reset pin&#39;s state to <code>&quot;input&quot;</code></p>
* <p>If the pin argument is an array of pins (eg. <code>[A2,A1,A0]</code>) the value returned will be an number where
* the last array element is the least significant bit, for example if <code>A0=A1=1</code> and <code>A2=0</code>, <code>digitalRead([A2,A1,A0]) == 0b011</code></p>
* 
* @param pin 
* @return  
* @url http://www.espruino.com/Reference#l__global_digitalRead
*/
declare function digitalRead(pin: Pin): number;

/**
* <p>Set the mode of the given pin.</p>
* <ul>
* <li><code>auto</code>/<code>undefined</code> - Don&#39;t change state, but allow <code>digitalWrite</code>/etc to automatically change state as appropriate</li>
* <li><code>analog</code> - Analog input</li>
* <li><code>input</code> - Digital input</li>
* <li><code>input_pullup</code> - Digital input with internal ~40k pull-up resistor</li>
* <li><code>input_pulldown</code> - Digital input with internal ~40k pull-down resistor</li>
* <li><code>output</code> - Digital output</li>
* <li><code>opendrain</code> - Digital output that only ever pulls down to 0v. Sending a logical <code>1</code> leaves the pin open circuit</li>
* <li><code>opendrain_pullup</code> - Digital output that pulls down to 0v. Sending a logical <code>1</code> enables internal ~40k pull-up resistor</li>
* <li><code>af_output</code> - Digital output from built-in peripheral</li>
* <li><p><code>af_opendrain</code> - Digital output from built-in peripheral that only ever pulls down to 0v. Sending a logical <code>1</code> leaves the pin open circuit</p>
* <p><strong>Note:</strong> <code>digitalRead</code>/<code>digitalWrite</code>/etc set the pin mode automatically <em>unless</em> <code>pinMode</code> has been called first.
* If you want <code>digitalRead</code>/etc to set the pin mode automatically after you have called <code>pinMode</code>, simply call it again
* with no mode argument (<code>pinMode(pin)</code>), <code>auto</code> as the argument (<code>pinMode(pin, &quot;auto&quot;)</code>), or with the 3rd &#39;automatic&#39;
* argument set to true (<code>pinMode(pin, &quot;output&quot;, true)</code>).</p>
* </li>
* </ul>
* 
* @param pin 
* @param mode 
* @param automatic 
* @url http://www.espruino.com/Reference#l__global_pinMode
*/
declare function pinMode(pin: Pin, mode: any, automatic: boolean): void;

/**
* <p>Return the current mode of the given pin. See <code>pinMode</code> for more information on returned values.</p>
* 
* @param pin 
* @return  
* @url http://www.espruino.com/Reference#l__global_getPinMode
*/
declare function getPinMode(pin: Pin): any;

/**
* <p>Call the function specified when the pin changes. Watches set with <code>setWatch</code> can be removed using <code>clearWatch</code>.</p>
* <p>The function may also take an argument, which is an object of type <code>{state:bool, time:float, lastTime:float}</code>.</p>
* <ul>
* <li><code>state</code> is whether the pin is currently a <code>1</code> or a <code>0</code></li>
* <li><code>time</code> is the time in seconds at which the pin changed state</li>
* <li><code>lastTime</code> is the time in seconds at which the <strong>pin last changed state</strong>. When using <code>edge:&#39;rising&#39;</code> or <code>edge:&#39;falling&#39;</code>, this is not the same as when the function was last called.</li>
* </ul>
* <p>For instance, if you want to measure the length of a positive pulse you could use <code>setWatch(function(e) { console.log(e.time-e.lastTime); }, BTN, { repeat:true, edge:&#39;falling&#39; });</code>.
* This will only be called on the falling edge of the pulse, but will be able to measure the width of the pulse because <code>e.lastTime</code> is the time of the rising edge.</p>
* <p>Internally, an interrupt writes the time of the pin&#39;s state change into a queue, and the function
* supplied to <code>setWatch</code> is executed only from the main message loop. However, if the callback is a
* native function <code>void (bool state)</code> then you can add <code>irq:true</code> to options, which will cause the
* function to be called from within the IRQ. When doing this, interrupts will happen on both edges
* and there will be no debouncing.</p>
* <p><strong>Note:</strong> The STM32 chip (used in the <a href="/EspruinoBoard">Espruino Board</a> and <a href="/Pico">Pico</a>) cannot
* watch two pins with the same number - eg <code>A0</code> and <code>B0</code>.</p>
* 
* @param function 
* @param pin 
* @param options 
* @return  
* @url http://www.espruino.com/Reference#l__global_setWatch
*/
declare function setWatch(f: (a?: any) => any, pin: Pin, options: any): any;

/**
* <p>Clear the Watch that was created with setWatch. If no parameter is supplied, all watches will be removed.</p>
* 
* @param id 
* @url http://www.espruino.com/Reference#l__global_clearWatch
*/
declare function clearWatch(id: any): void;

/**
* <p>A reference to the global scope, where everything is defined.</p>
* 
* @url http://www.espruino.com/Reference#l__global_global
*/
declare var global: any;

/**
* <p>When Espruino is busy, set the pin specified here high. Set this to undefined to disable the feature.</p>
* 
* @param pin 
* @url http://www.espruino.com/Reference#l__global_setBusyIndicator
*/
declare function setBusyIndicator(pin: Pin): void;

/**
* <p>When Espruino is asleep, set the pin specified here low (when it&#39;s awake, set it high). Set this to undefined to disable the feature.</p>
* <p>Please see <a href="http://www.espruino.com/Power+Consumption">http://www.espruino.com/Power+Consumption</a> for more details on this.</p>
* 
* @param pin 
* @url http://www.espruino.com/Reference#l__global_setSleepIndicator
*/
declare function setSleepIndicator(pin: Pin): void;

/**
* <p>Set whether we can enter deep sleep mode, which reduces power consumption to around 100uA. This only works on STM32 Espruino Boards.</p>
* <p>Please see <a href="http://www.espruino.com/Power+Consumption">http://www.espruino.com/Power+Consumption</a> for more details on this.</p>
* 
* @param sleep 
* @url http://www.espruino.com/Reference#l__global_setDeepSleep
*/
declare function setDeepSleep(sleep: boolean): void;

/**
* <p>Output debugging information</p>
* <p>Note: This is not included on boards with low amounts of flash memory, or the Espruino board.</p>
* 
* @param root 
* @url http://www.espruino.com/Reference#l__global_trace
*/
declare function trace(root: any): void;

/**
* <p>Output current interpreter state in a text form such that it can be copied to a new device</p>
* <p>Note: &#39;Internal&#39; functions are currently not handled correctly. You will need to recreate these in the <code>onInit</code> function.</p>
* 
* @url http://www.espruino.com/Reference#l__global_dump
*/
declare function dump(): void;

/**
* <p>Restart and load the program out of flash - this has an effect similar to
* completely rebooting Espruino (power off/power on), but without actually
* performing a full reset of the hardware.</p>
* <p>This command only executes when the Interpreter returns to the Idle state - for
* instance <code>a=1;load();a=2;</code> will still leave &#39;a&#39; as undefined (or what it was
* set to in the saved program).</p>
* <p>Espruino will resume from where it was when you last typed <code>save()</code>.
* If you want code to be executed right after loading (for instance to initialise
* devices connected to Espruino), add an <code>init</code> event handler to <code>E</code> with
* <code>E.on(&#39;init&#39;, function() { ... your_code ... });</code>. This will then be automatically
* executed by Espruino every time it starts.</p>
* 
* @url http://www.espruino.com/Reference#l__global_load
*/
declare function load(): void;

/**
* <p>Save program memory into flash. It will then be loaded automatically every time
* Espruino powers on or is hard-reset.</p>
* <p>This command only executes when the Interpreter returns to the Idle state - for
* instance <code>a=1;save();a=2;</code> will save &#39;a&#39; as 2.</p>
* <p>When Espruino powers on, it will resume from where it was when you typed <code>save()</code>.
* If you want code to be executed right after loading (for instance to initialise
* devices connected to Espruino), add an <code>init</code> event handler to <code>E</code> with
* <code>E.on(&#39;init&#39;, function() { ... your_code ... });</code>. This will then be automatically
* executed by Espruino every time it starts.</p>
* <p>In order to stop the program saved with this command being loaded automatically,
* hold down Button 1 while also pressing reset. On some boards, Button 1 enters
* bootloader mode, so you will need to press Reset with Button 1 raised, and then
* hold Button 1 down a fraction of a second later.</p>
* 
* @url http://www.espruino.com/Reference#l__global_save
*/
declare function save(): void;

/**
* <p>Reset the interpreter - clear program memory in RAM, and do not load a saved program from flash. This does NOT reset the underlying hardware (which allows you to reset the device without it disconnecting from USB).</p>
* <p>This command only executes when the Interpreter returns to the Idle state - for instance <code>a=1;reset();a=2;</code> will still leave &#39;a&#39; as undefined.</p>
* <p>The safest way to do a full reset is to hit the reset button.</p>
* <p>If <code>reset()</code> is called with no arguments, it will reset the board&#39;s state in
* RAM but will not reset the state in flash. When next powered on (or when
* <code>load()</code> is called) the board will load the previously saved code.</p>
* <p>Calling <code>reset(true)</code> will cause <em>all saved code in flash memory to
* be cleared as well</em>.</p>
* 
* @param clearFlash 
* @url http://www.espruino.com/Reference#l__global_reset
*/
declare function reset(clearFlash: boolean): void;

/**
* <p>Print the supplied string(s) to the console</p>
* <p> <strong>Note:</strong> If you&#39;re connected to a computer (not a wall adaptor) via USB but <strong>you are not running a terminal app</strong> then when you print data Espruino may pause execution and wait until the computer requests the data it is trying to print.</p>
* 
* @param text 
* @url http://www.espruino.com/Reference#l__global_print
*/
declare function print(text: any): void;

/**
* <p>Fill the console with the contents of the given function, so you can edit it.</p>
* <p>NOTE: This is a convenience function - it will not edit &#39;inner functions&#39;. For that, you must edit the &#39;outer function&#39; and re-execute it.</p>
* 
* @param funcName 
* @url http://www.espruino.com/Reference#l__global_edit
*/
declare function edit(funcName: any): void;

/**
* <p>Should TinyJS echo what you type back to you? true = yes (Default), false = no. When echo is off, the result of executing a command is not returned. Instead, you must use &#39;print&#39; to send output.</p>
* 
* @param echoOn 
* @url http://www.espruino.com/Reference#l__global_echo
*/
declare function echo(echoOn: boolean): void;

/**
* <p>Return the current system time in Seconds (as a floating point number)</p>
* 
* @return  
* @url http://www.espruino.com/Reference#l__global_getTime
*/
declare function getTime(): number;

/**
* <p>Set the current system time in seconds (to the nearest second)</p>
* 
* @param time 
* @url http://www.espruino.com/Reference#l__global_setTime
*/
declare function setTime(time: number): void;

/**
* <p>Get the serial number of this board</p>
* 
* @return  
* @url http://www.espruino.com/Reference#l__global_getSerial
*/
declare function getSerial(): any;

/**
* <p>Clear the Interval that was created with setInterval, for example:</p>
* <p><code>var id = setInterval(function () { print(&#39;foo&#39;); }, 1000);</code></p>
* <p><code>clearInterval(id);</code></p>
* <p>If no argument is supplied, all timers and intervals are stopped</p>
* 
* @param id 
* @url http://www.espruino.com/Reference#l__global_clearInterval
*/
declare function clearInterval(id: any): void;

/**
* <p>Clear the Timeout that was created with setTimeout, for example:</p>
* <p><code>var id = setTimeout(function () { print(&#39;foo&#39;); }, 1000);</code></p>
* <p><code>clearTimeout(id);</code></p>
* <p>If no argument is supplied, all timers and intervals are stopped</p>
* 
* @param id 
* @url http://www.espruino.com/Reference#l__global_clearTimeout
*/
declare function clearTimeout(id: any): void;

/**
* <p>Change the Interval on a callback created with setInterval, for example:</p>
* <p><code>var id = setInterval(function () { print(&#39;foo&#39;); }, 1000); // every second</code></p>
* <p><code>changeInterval(id, 1500); // now runs every 1.5 seconds</code></p>
* <p>This takes effect immediately and resets the timeout, so in the example above,
* regardless of when you call <code>changeInterval</code>, the next interval will occur 1500ms
* after it.</p>
* 
* @param id 
* @param time 
* @url http://www.espruino.com/Reference#l__global_changeInterval
*/
declare function changeInterval(id: any, time: number): void;

/**
* <p>A variable containing the arguments given to the function</p>
* 
* @url http://www.espruino.com/Reference#l__global_arguments
*/
declare var arguments: any;

/**
* <p>Evaluate a string containing JavaScript code</p>
* 
* @param code 
* @return  
* @url http://www.espruino.com/Reference#l__global_eval
*/
declare function eval(code: any): any;

/**
* <p>Convert a string representing a number into an integer</p>
* 
* @param string 
* @param radix 
* @return  
* @url http://www.espruino.com/Reference#l__global_parseInt
*/
declare function parseInt(string: any, radix: any): any;

/**
* <p>Convert a string representing a number into an float</p>
* 
* @param string 
* @return  
* @url http://www.espruino.com/Reference#l__global_parseFloat
*/
declare function parseFloat(string: any): number;

/**
* <p>Whether the x is NaN (Not a Number) or not</p>
* 
* @param x 
* @return  
* @url http://www.espruino.com/Reference#l__global_isNaN
*/
declare function isNaN(x: any): boolean;

/**
* <p>Encode the supplied string (or array) into a base64 string</p>
* 
* @param binaryData 
* @return  
* @url http://www.espruino.com/Reference#l__global_btoa
*/
declare function btoa(binaryData: any): any;

/**
* <p>Decode the supplied base64 string into a normal string</p>
* 
* @param binaryData 
* @return  
* @url http://www.espruino.com/Reference#l__global_atob
*/
declare function atob(binaryData: any): any;

/**
* <p>Convert a string with any character not alphanumeric or <code>- _ . ! ~ * &#39; ( )</code> converted to the form <code>%XY</code> where <code>XY</code> is its hexadecimal representation</p>
* 
* @param str 
* @return  
* @url http://www.espruino.com/Reference#l__global_encodeURIComponent
*/
declare function encodeURIComponent(str: any): any;

/**
* <p>Convert any groups of characters of the form &#39;%ZZ&#39;, into characters with hex code &#39;0xZZ&#39;</p>
* 
* @param str 
* @return  
* @url http://www.espruino.com/Reference#l__global_decodeURIComponent
*/
declare function decodeURIComponent(str: any): any;

/**
* <p><strong>Note:</strong> This function is only available on the <a href="/MicroBit">BBC micro:bit</a> board</p>
* <p>Get the current acceleration of the micro:bit from the on-board accelerometer</p>
* 
* @return  
* @url http://www.espruino.com/Reference#l__global_acceleration
*/
declare function acceleration(): any;

/**
* <p><strong>Note:</strong> This function is only available on the <a href="/MicroBit">BBC micro:bit</a> board</p>
* <p>Get the current compass position for the micro:bit from the on-board magnetometer</p>
* 
* @return  
* @url http://www.espruino.com/Reference#l__global_compass
*/
declare function compass(): any;

/**
* 
* @url http://www.espruino.com/Reference#l__global_BTNA
*/
declare var BTNA: Pin;

/**
* 
* @url http://www.espruino.com/Reference#l__global_BTNB
*/
declare var BTNB: Pin;

/**
* 
* @url http://www.espruino.com/Reference#l__global_BTNU
*/
declare var BTNU: Pin;

/**
* 
* @url http://www.espruino.com/Reference#l__global_BTND
*/
declare var BTND: Pin;

/**
* 
* @url http://www.espruino.com/Reference#l__global_BTNL
*/
declare var BTNL: Pin;

/**
* 
* @url http://www.espruino.com/Reference#l__global_BTNR
*/
declare var BTNR: Pin;

declare var D0: Pin;
declare var D1: Pin;
declare var D2: Pin;
declare var D3: Pin;
declare var D4: Pin;
declare var D5: Pin;
declare var D6: Pin;
declare var D7: Pin;
declare var D8: Pin;
declare var D9: Pin;
declare var D10: Pin;
declare var D11: Pin;
declare var D12: Pin;
declare var D13: Pin;
declare var D14: Pin;
declare var D15: Pin;
declare var D16: Pin;
declare var D17: Pin;
declare var D18: Pin;
declare var D19: Pin;
declare var D20: Pin;
declare var D21: Pin;
declare var D22: Pin;
