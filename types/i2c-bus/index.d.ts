/// <reference types="node" />

type I2CDeviceId = { manufacturer: number; product: number; name: string };

type BytesWritten = { bytesWritten: number; buffer: Buffer };

type BytesRead = { bytesRead: number; buffer: Buffer };

type CompletionCallback = (error: any) => any;

type BufferCallback = (error: any, bytesReadOrWritten: number, buffer: Buffer) => any;

type ResultCallback<T> = (error: any, result: T) => any;

type OpenOptions = {
    /** A boolean value specifying whether access to devices on the I2C bus should be allowed even if they are already in use by a kernel driver/module. Corresponds to I2C_SLAVE_FORCE on Linux. The valid values for forceAccess are true and false. Optional, the default value is false. */
    forceAccess: boolean;
};

export interface I2CFuncs {
    i2c: boolean;
    tenBitAddr: boolean;
    protocolMangling: boolean;
    smbusPec: boolean;
    smbusBlockProcCall: boolean;
    smbusQuick: boolean;
    smbusReceiveByte: boolean;
    smbusSendByte: boolean;
    smbusReadByte: boolean;
    smbusWriteByte: boolean;
    smbusReadWord: boolean;
    smbusWriteWord: boolean;
    smbusProcCall: boolean;
    smbusReadBlock: boolean;
    smbusWriteBlock: boolean;
    smbusReadI2cBlock: boolean;
    smbusWriteI2cBlock: boolean;
}

export interface I2CBus {
    /**
     * Asynchronous close.
     *
     * @param {CompletionCallback} callback
     *     Completion callback
     */
    close(callback: CompletionCallback): void;

    /**
     * Synchronous close.
     */
    closeSync(): void;

    /**
     * Determine functionality of the bus/adapter asynchronously.
     *
     * @param {ResultCallback<I2CFuncs>} callback
     *     Callback that will recieve a frozen I2cFuncs object describing the I2C functionality available.
     */
    i2cFuncs(callback: ResultCallback<I2CFuncs>): void;

    /**
     * Determine functionality of the bus/adapter synchronously.
     *
     * @return {I2CFuncs}
     *     A frozen I2cFuncs object describing the I2C functionality available.
     */
    i2cFuncsSync(): I2CFuncs;

    /**
     * Scans the I2C bus asynchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param {ResultCallback<number[]>} callback
     *     Callback that will recieve an array of numbers where each number represents the I2C address of a device which was detected.
     */
    scan(callback: ResultCallback<number[]>): void;

    /**
     * Scans the I2C bus asynchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param {number} address
     *     An integer specifying the address of the scan.
     * @param {ResultCallback<number[]>} callback
     *     Callback that will recieve an array of numbers where each number represents the I2C address of a device which was detected.
     */
    scan(address: number, callback: ResultCallback<number[]>): void;

    /**
     * Scans the I2C bus asynchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param {number} startAddr
     *     An integer specifying the start address of the scan range.
     * @param {number} endAddr
     *     An integer specifying the end address of the scan range.
     * @param {ResultCallback<number[]>} callback
     *     Callback that will recieve an array of numbers where each number represents the I2C address of a device which was detected.
     */
    scan(startAddr: number, endAddr: number, callback: ResultCallback<number[]>): void;

    /**
     * Scans the I2C bus synchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param  {number} [address]
     *     An integer specifying the address of the scan.
     * @return {number[]}
     *     An array of numbers where each number represents the I2C address of a device which was detected.
     */
    scanSync(address?: number): number[];

    /**
     * Scans the I2C bus synchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param  {number} [startAddr]
     *     An integer specifying the start address of the scan range.
     * @param  {number} [endAddr]
     *     An integer specifying the end address of the scan range.
     * @return {number[]}
     *     An array of numbers where each number represents the I2C address of a device which was detected.
     */
    scanSync(startAddr: number, endAddr: number): number[];

    /**
     * Asynchronous I2C device Id.
     *
     * @param {number} address
     *     I2C device address
     * @param {ResultCallback<I2CDeviceId>} callback
     *     The callback gets two arguments (err, id). id is an object with the properties <code>manufacturer</code>, <code>product</code> and if known a human readable <code>name</code> for the associated manufacturer.
     */
    deviceId(address: number, callback: ResultCallback<I2CDeviceId>): void;

    /**
     * Synchronous I2C device Id.
     *
     * @param  {number} address
     *     I2C device address
     * @return {I2CDeviceId}
     *     An object with the properties <code>manufacturer</code>, <code>product</code> and if known a human readable <code>name</code> for the associated manufacturer.
     */
    deviceIdSync(address: number): I2CDeviceId;

    /**
     * Asynchronous plain I2C read.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} length
     *     The number of bytes to read.
     * @param {Buffer} buffer
     *     The buffer that the data will be written to (must be at least {length} bytes long).
     * @param {BufferCallback} callback
     *     Callback that will recieve the number of bytes read and the given buffer.
     */
    i2cRead(address: number, length: number, buffer: Buffer, callback: BufferCallback): void;

    /**
     * Synchronous plain I2C read.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} length
     *     The number of bytes to read.
     * @param {Buffer} buffer
     *     The buffer that the data will be written to (must be at least {length} bytes long).
     * @return {number}
     *     The number of bytes read.
     */
    i2cReadSync(address: number, length: number, buffer: Buffer): number;

    /**
     * Asynchronous plain I2C write.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} length
     *     The number of bytes to write.
     * @param {Buffer} buffer
     *     The buffer that the data to write (must contain at least {length} bytes).
     * @param {BufferCallback} callback
     *     Callback that will recieve the number of bytes written and the given buffer.
     */
    i2cWrite(address: number, length: number, buffer: Buffer, callback: BufferCallback): void;

    /**
     * Synchronous plain I2C write.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} length
     *     The number of bytes to write.
     * @param {Buffer} buffer
     *     The buffer that the data will to write (must contain at least {length} bytes).
     * @return {number}
     *     The number of bytes written.
     */
    i2cWriteSync(address: number, length: number, buffer: Buffer): number;

    /**
     * Asynchronous SMBus read byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {ResultCallback<number>} callback
     *     Callback that will recieve the byte read.
     */
    readByte(address: number, command: number, callback: ResultCallback<number>): void;

    /**
     * Synchronous SMBus read byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @return {number}
     *     The byte read.
     */
    readByteSync(address: number, command: number): number;

    /**
     * Asynchronous SMBus read word.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {ResultCallback<number>} callback
     *     Callback that will recieve the word read.
     */
    readWord(address: number, command: number, callback: ResultCallback<number>): void;

    /**
     * Synchronous SMBus read word.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @return {number}
     *     The word read.
     */
    readWordSync(address: number, command: number): number;

    /**
     * Asynchronous I2C block read (not defined by the SMBus
     * specification). Reads a block of bytes from a device, from a
     * designated register that is specified by cmd.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} length
     *     The number of bytes to read (max 32).
     * @param {Buffer} buffer
     *     The buffer that the data will be written to (must be at least {length} bytes long).
     * @param {BufferCallback} callback
     *     Callback that will recieve the number of bytes read and the given buffer.
     */
    readI2cBlock(address: number, command: number, length: number, buffer: Buffer, callback: BufferCallback): void;

    /**
     * Synchronous I2C block read (not defined by the SMBus
     * specification). Reads a block of bytes from a device, from a
     * designated register that is specified by cmd.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} length
     *     The number of bytes to read (max 32).
     * @param {Buffer} buffer
     *     The buffer that the data will be written to (must be at least {length} bytes long).
     * @return {number}
     *     The number of bytes read.
     */
    readI2cBlockSync(address: number, command: number, length: number, buffer: Buffer): number;

    /**
     * Asynchronous SMBus receive byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {ResultCallback<number>} callback
     *     Callback that will recieve the byte received.
     */
    receiveByte(address: number, callback: ResultCallback<number>): void;

    /**
     * Synchronous SMBus receive byte.
     *
     * @param {number} address
     *     I2C device address.
     * @return {number}
     *     The byte received.
     */
    receiveByteSync(address: number): number;

    /**
     * Asynchronous SMBus send byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} byte
     *     The data byte to send.
     * @param {CompletionCallback} callback
     *     Completion callback
     */
    sendByte(address: number, byte: number, callback: CompletionCallback): void;

    /**
     * Synchronous SMBus send byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} byte
     *     The data byte to send.
     */
    sendByteSync(address: number, byte: number): void;

    /**
     * Asynchronous SMBus write byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} byte
     *     The data byte to write.
     * @param {CompletionCallback} callback
     *     Completion callback
     */
    writeByte(address: number, command: number, byte: number, callback: CompletionCallback): void;

    /**
     * Synchronous SMBus write byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} byte
     *     The data byte to write.
     */
    writeByteSync(address: number, command: number, byte: number): void;

    /**
     * Asynchronous SMBus write word.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} word
     *     The data word to write.
     * @param {CompletionCallback} callback
     *     Completion callback
     */
    writeWord(address: number, command: number, word: number, callback: CompletionCallback): void;

    /**
     * Synchronous SMBus write word.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} word
     *     The data word to write.
     */
    writeWordSync(address: number, command: number, word: number): void;

    /**
     * Asynchronous SMBus quick command.  Writes a single bit to the device.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} bit
     *     The data bit to write (0 or 1).
     * @param {CompletionCallback} callback
     *     Completion callback
     */
    writeQuick(address: number, command: number, bit: number, callback: CompletionCallback): void;

    /**
     * Synchronous SMBus quick command.  Writes a single bit to the device.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} bit
     *     The data bit to write (0 or 1).
     */
    writeQuickSync(address: number, command: number, bit: number): void;

    /**
     * Asynchronous I2C block write (not defined by the SMBus
     * specification). Writes a block of bytes to a device, to a designated
     * register that is specified by {command}.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} length
     *     The number of bytes to write (max 32).
     * @param {Buffer} buffer
     *     The buffer that the data to write (must contain at least {length} bytes).
     * @param {BufferCallback} callback
     *     Callback that will recieve the number of bytes written and the given buffer.
     */
    writeI2cBlock(address: number, command: number, length: number, buffer: Buffer, callback: BufferCallback): void;

    /**
     * Synchronous I2C block write (not defined by the SMBus
     * specification). Writes a block of bytes to a device, to a designated
     * register that is specified by {command}.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} length
     *     The number of bytes to write (max 32).
     * @param {Buffer} buffer
     *     The buffer that the data will to write (must contain at least {length} bytes).
     * @return {number}
     *     The number of bytes written.
     */
    writeI2cBlockSync(address: number, command: number, length: number, buffer: Buffer): number;

    /**
     * Return the PromisifiedBus instance for this Bus instance.
     *
     * @return {PromisifiedBus}
     *     The PromisifiedBus instance for this Bus instance.
     */
    promisifiedBus(): PromisifiedBus;
}

export interface PromisifiedBus {
    /**
     * Asynchronous close.
     *
     * @return {Promise<void>}
     *     A Promise that will be resolved with no arguments once the underlying resources have been released, or will be rejected if an error occurs while closing.
     */
    close(): Promise<void>;

    /**
     * Determine functionality of the bus/adapter asynchronously.
     *
     * @return {Promise<I2CFuncs>}
     *     A Promise that on success will be resolved with a frozen I2cFuncs object describing the functionality available. The returned Promise will be rejected if an error occurs. See also [I2C functionality](https://www.kernel.org/doc/Documentation/i2c/functionality).
     */
    i2cFuncs(): Promise<I2CFuncs>;

    /**
     * Scans the I2C bus asynchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param  {number} [address]
     *     An integer specifying the address of the scan.
     * @return {Promise<number[]>}
     *     A Promise that on success will be resolved with an array of numbers where each number represents the I2C address of a device which was detected. The returned Promise will be rejected if an error occurs.
     */
    scan(address?: number): Promise<number[]>;

    /**
     * Scans the I2C bus asynchronously for devices. The default address range 0x03 through 0x77 is the same as the default address range used by the <code>i2cdetect</code> command line tool.
     *
     * @param  {number} [startAddr]
     *     An integer specifying the start address of the scan range.
     * @param  {number} [endAddr]
     *     An integer specifying the end address of the scan range.
     * @return {Promise<number[]>}
     *     A Promise that on success will be resolved with an array of numbers where each number represents the I2C address of a device which was detected. The returned Promise will be rejected if an error occurs.
     */
    scan(startAddr: number, endAddr: number): Promise<number[]>;

    /**
     * Asynchronous I2C device Id.
     *
     * @param  {number} address
     *     I2C device address
     * @return {Promise<I2CDeviceId>}
     *     A Promise that will be resolved with an id object on success, or will be rejected if an error occurs. id is an object with the properties <code>manufacturer</code>, <code>product</code> and if known a human readable <code>name</code> for the associated manufacturer.
     */
    deviceId(address: number): Promise<I2CDeviceId>;

    /**
     * Asynchronous plain I2C read.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} length
     *     The number of bytes to read.
     * @param {Buffer} buffer
     *     The buffer that the data will be written to (must be at least {length} bytes long).
     * @return {Promise<BytesRead>}
     *     A Promise that on success will be resolved with an object with a bytesRead property identifying the number of bytes read, and a buffer property that is a reference to the passed in buffer argument. The returned Promise will be rejected if an error occurs.
     */
    i2cRead(address: number, length: number, buffer: Buffer): Promise<BytesRead>;

    /**
     * Asynchronous plain I2C write.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} length
     *     The number of bytes to write.
     * @param {Buffer} buffer
     *     The buffer that the data to write (must contain at least {length} bytes).
     * @return {Promise<BytesWritten>}
     *     A Promise that on success will be resolved with an object with a bytesWritten property identifying the number of bytes written, and a buffer property that is a reference to the passed in buffer argument. The returned promise will be rejected if an error occurs.
     */
    i2cWrite(address: number, length: number, buffer: Buffer): Promise<BytesWritten>;

    /**
     * Asynchronous SMBus read byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @return {Promise<number>}
     *     A Promise that will be resolved with a number representing the byte read on success, or will be rejected if an error occurs. byte is an unsigned integer in the range 0 to 255.
     */
    readByte(address: number, command: number): Promise<number>;

    /**
     * Asynchronous SMBus read word.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @return {Promise<number>}
     *     A Promise that will be resolved with a number representing the word read on success, or will be rejected if an error occurs. word is an unsigned integer in the range 0 to 65535.
     */
    readWord(address: number, command: number): Promise<number>;

    /**
     * Asynchronous I2C block read (not defined by the SMBus specification).
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} length
     *     The number of bytes to read (max 32).
     * @param {Buffer} buffer
     *     The buffer that the data will be written to (must be at least {length} bytes long).
     * @return {Promise<BytesRead>}
     *     A Promise that on success will be resolved with an object with a bytesRead property identifying the number of bytes read, and a buffer property that is a reference to the passed in buffer argument. The returned Promise will be rejected if an error occurs.
     */
    readI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<BytesRead>;

    /**
     * Asynchronous SMBus receive byte.
     *
     * @param {number} address
     *     I2C device address.
     * @return {Promise<number>}
     *     A Promise that will be resolved with a number representing the byte received on success, or will be rejected if an error occurs. byte is an unsigned integer in the range 0 to 255.
     */
    receiveByte(address: number): Promise<number>;

    /**
     * Asynchronous SMBus send byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} byte
     *     The data byte to send.
     * @return {Promise<void>}
     *     A Promise that will be resolved with no arguments on success, or will be rejected if an error occurs.
     */
    sendByte(address: number, byte: number): Promise<void>;

    /**
     * Asynchronous SMBus write byte.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} byte
     *     The data byte to write.
     * @return {Promise<void>}
     *     A Promise that will be resolved with no arguments on success, or will be rejected if an error occurs.
     */
    writeByte(address: number, command: number, byte: number): Promise<void>;

    /**
     * Asynchronous SMBus write word.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} word
     *     The data word to write.
     * @return {Promise<void>}
     *     A Promise that will be resolved with no arguments on success, or will be rejected if an error occurs.
     */
    writeWord(address: number, command: number, word: number): Promise<void>;

    /**
     * Asynchronous SMBus quick command.
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} bit
     *     The data bit to write (0 or 1).
     * @return {Promise<void>}
     *     A Promise that will be resolved with no arguments on success, or will be rejected if an error occurs.
     */
    writeQuick(address: number, command: number, bit: number): Promise<void>;

    /**
     * Asynchronous I2C block write (not defined by the SMBus specification).
     *
     * @param {number} address
     *     I2C device address.
     * @param {number} command
     *     The command code.
     * @param {number} length
     *     The number of bytes to write (max 32).
     * @param {Buffer} buffer
     *     The buffer that the data to write (must contain at least {length} bytes).
     * @return {Promise<BytesWritten>}
     *     A Promise that on success will be resolved with an object with a bytesWritten property identifying the number of bytes written, and a buffer property that is a reference to the passed in buffer argument. The returned promise will be rejected if an error occurs.
     */
    writeI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<BytesWritten>;

    /**
     * Return the Bus instance for this PromisifiedBus instance.
     *
     * @return {I2CBus}
     *     The Bus instance for this PromisifiedBus instance.
     */
    bus(): I2CBus;
}

/**
 * Asynchronous open.
 *
 * @param  {number} busNumber
 *     The number of the I2C bus/adapter to open, 0 for /dev/i2c-0, 1 for /dev/i2c-1, ...
 * @param  {OpenOptions} [options]
 *     An optional options object.
 * @param  {CompletionCallback} callback
 *     Completion callback.
 * @return {I2CBus}
 *     A new Bus object.
 */
export function open(busNumber: number, callback: CompletionCallback): I2CBus;
export function open(busNumber: number, options: OpenOptions, callback: CompletionCallback): I2CBus;

/**
 * Synchronous open.
 *
 * @param  {number} busNumber
 *     The number of the I2C bus/adapter to open, 0 for /dev/i2c-0, 1 for /dev/i2c-1, ...
 * @param  {OpenOptions} [options]
 *     An optional options object.
 * @return {I2CBus}
 *     A new Bus object.
 */
export function openSync(busNumber: number, options?: OpenOptions): I2CBus;

/**
 * Asynchronous open.
 *
 * @param  {number} busNumber
 *     The number of the I2C bus/adapter to open, 0 for /dev/i2c-0, 1 for /dev/i2c-1, ...
 * @param  {OpenOptions} [options]
 *     An optional options object.
 * @return {Promise<PromisifiedBus>}
 *     A Promise that, when resolved, yields a PromisifiedBus object.
 */
export function openPromisified(busNumber: number, options?: OpenOptions): Promise<PromisifiedBus>;
