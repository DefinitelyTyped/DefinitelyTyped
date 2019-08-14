// Type definitions for i2c-bus v1.0.0
// Project: https://github.com/fivdi/i2c-bus
// Definitions by: Jason Heard <https://github.com/101100>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />


type CompletionCallback = (error: any) => any;

type BufferCallback = (error: any, bytesReadOrWritten: number, buffer: Buffer) => any;

type ResultCallback<T> = (error: any, result: T) => any;

export interface I2cBusFuncs {
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

export interface I2cBus {

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
     * @param {ResultCallback<I2cBusFuncs>} callback
     *     Callback that will recieve a frozen I2cFuncs object describing the I2C functionality available.
     */
    i2cFuncs(callback: ResultCallback<I2cBusFuncs>): void;

    /**
     * Determine functionality of the bus/adapter synchronously.
     *
     * @return {I2cBusFuncs}
     *     A frozen I2cFuncs object describing the I2C functionality available.
     */
    i2cFuncsSync(): I2cBusFuncs;

    /**
     * Scans the I2C bus asynchronously for devices the same way <code>i2cdetect -y -r</code> would.
     *
     * @param {ResultCallback<number[]>} callback
     *     Callback that will recieve an array of numbers where each number represents the I2C address of a device which was detected.
     */
    scan(callback: ResultCallback<number[]>): void;

    /**
     * Scans the I2C bus synchronously for devices the same way <code>i2cdetect -y -r</code> would.
     *
     * @return {number[]}
     *     An array of numbers where each number represents the I2C address of a device which was detected.
     */
    scanSync(): number[];

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

}

/**
 * Asynchronous open.
 *
 * @param  {number} busNumber
 *     The number of the I2C bus/adapter to open, 0 for {/dev/i2c-0}, 1 for {/dev/i2c-1}, etc.
 * @param  {CompletionCallback} callback
 *     Completion callback.
 * @return {I2cBus}
 *     A new I2cBus object.
 */
export function open(busNumber: number, callback: CompletionCallback): I2cBus;

/**
 * Synchronous open.
 *
 * @param  {number} busNumber
 *     The number of the I2C bus/adapter to open, 0 for {/dev/i2c-0}, 1 for {/dev/i2c-1}, etc.
 * @return {I2cBus}
 *     A new I2cBus object.
 */
export function openSync(busNumber: number): I2cBus;
