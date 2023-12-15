/// <reference types='node'/>

/**
 * A function that must be called with either an error or a value, but not both.
 * @param error - Error object.
 * @param value - passed value to any callback function.
 */
type Callback<T> = ((error: Error, value?: undefined) => void) & ((error: null, value: T) => void);

/**
 * Represents a timestamp based on the UNIX epoch (1970 Jan 1).
 * See also: http://wiki.ros.org/roscpp/Overview/Time
 */
interface Time {
    // whole seconds
    sec: number;
    // additional nanoseconds past the sec value
    nsec: number;
}

interface Filelike {
    /**
     * Reads buffer at specified offset and length then pass it on to callback function.
     * @param offset - The location in the buffer at which to start.
     * @param length - The number of bytes to read.
     * @param callback - Callback function accepting Buffer object.
     */
    read(offset: number, length: number, callback: Callback<Buffer>): void;
    /**
     * Getter method to retrieve file size.
     */
    size(): number;
}

interface RosMsgField {
    type: string;
    name: string;
    isComplex?: boolean;

    // For arrays
    isArray?: boolean;
    arrayLength?: number;

    // For constants
    isConstant?: boolean;
    value?: any;
}

/**
 * Represents ros message definition data.
 */
interface RosMsgDefinition {
    name?: string;
    definitions: RosMsgField[];
}

/**
 * Extracts key/value pair of information out of a buffer
 * @param buffer - The buffer to extract key/value piece of information from.
 */
declare function extractFields(buffer: Buffer): { [key: string]: Buffer };

/**
 * Reads a Time object out of a buffer at the given offset
 * @param buffer - Buffer
 * @param offset - Offset
 */
declare function extractTime(buffer: Buffer, offset: number): Time;

type rosType =
    | "string"
    | "bool"
    | "int8"
    | "uint8"
    | "int16"
    | "uint16"
    | "int32"
    | "uint32"
    | "float32"
    | "float64"
    | "int64"
    | "uint64"
    | "time"
    | "duration"
    | "json";

type rosPrimitiveTypes = Set<rosType>;

/**
 * Given a raw message definition string, parse it into an object representation.
 * @param messageDefinition - ROSBAG message definition string.
 */
declare function parseMessageDefinition(messageDefinition: string): RosMsgDefinition[];

declare class MessageReader {
    reader: (buffer: Buffer) => any;

    /**
     * takes an object message definition and returns
     * a message reader which can be used to read messages based
     * on the message definition.
     * @param definitions
     * @param options
     */
    constructor(definitions: RosMsgDefinition[], options: { freeze?: boolean });

    readMessage(buffer: Buffer): any;
}

declare class MessageWriter {
    writer: (message: any, bufferToWrite: Buffer) => Buffer;
    bufferSizeCalculator: (message: any) => number;

    /**
     * takes an object string message definition and returns
     * a message writer which can be used to write messages based
     * on the message definition.
     * @param definitions
     */
    constructor(definitions: RosMsgDefinition[]);

    /**
     * Calculates the buffer size needed to write this message in bytes.
     * @param message
     */
    calculateBufferSize(message: any): number;

    /**
     * @param message
     * @param bufferToWrite - bufferToWrite is optional - if it is not provided, a buffer will be generated.
     */
    writeMessage(message: any, bufferToWrite?: Buffer): Buffer;
}

/**
 * Opens a bag file and return a bag readable object
 * @param filename - File path or Blob depening on evironment (either node or web)
 */
declare function open(filename: File | string | Blob): Promise<Bag>;

declare namespace TimeUtil {
    /**
     * Converts Date object to ROS digestable Time format
     * @param date - Date object
     */
    function fromDate(date: Date): Time;

    /**
     * Converts Time from ROSBAG to Date object
     * @param time
     */
    function toDate(time: Time): Date;

    /**
     * Compares two times, returning a negative value if the right is greater
     * or a positive value if the left is greater or 0 if the times are equal
     * useful to supply to Array.prototype.sort.
     * @param left
     * @param right
     */
    function compare(left: Time, right: Time): number;

    /**
     * Returns true if the left time is less than the right time, otherwise false
     * @param left
     * @param right
     */
    function isLessThan(left: Time, right: Time): boolean;

    /**
     * Returns true if the left time is greater than the right time, otherwise false
     * @param left
     * @param right
     */
    function isGreaterThan(left: Time, right: Time): boolean;

    /**
     * Returns true if both times have the same number of seconds and nanoseconds
     * @param left
     * @param right
     */
    function areSame(left: Time, right: Time): boolean;

    /**
     * Computes the sum of two times or durations and returns a new time
     * throws an exception if the resulting time is negative
     * @param left
     * @param right
     */
    function add(left: Time, right: Time): Time;
}

interface ChunkReadResult {
    chunk: Chunk;
    indices: IndexData[];
}

interface Decompress {
    [compression: string]: (buffer: Buffer, size: number) => Buffer;
}

/**
 * BagReader is a lower level interface for reading specific sections & chunks
 * from a rosbag file - generally it is consumed through the Bag class, but
 * can be useful to use directly for efficiently accessing raw pieces from
 * within the bag
 */
declare class BagReader {
    _lastReadResult: ChunkReadResult;
    _file: Filelike;
    _lastChunkInfo?: ChunkInfo;

    constructor(filelike: Filelike);

    verifyBagHeader(callback: Callback<BagHeader>, next: () => void): void;

    /**
     * reads the header block from the rosbag file
     * generally you call this first
     * because you need the header information to call readConnectionsAndChunkInfo
     * @param callback
     */
    readHeader(callback: Callback<BagHeader>): void;

    /**
     * Promisified version of readHeader
     */
    readHeaderAsync(): Promise<BagHeader>;

    /**
     * reads connection and chunk information from the bag
     * you'll generally call this after reading the header so you can get
     * connection metadata and chunkInfos which allow you to seek to individual
     * chunks & read them
     * @param fileOffset
     * @param connectionCount
     * @param chunkCount
     * @param callback
     */
    readConnectionsAndChunkInfo(
        fileOffset: number,
        connectionCount: number,
        chunkCount: number,
        callback: Callback<{ connections: Connection[]; chunkInfos: ChunkInfo[] }>,
    ): void;

    /**
     * Promisified version of readConnectionsAndChunkInfo
     * @param fileOffset
     * @param connectionCount
     * @param chunkCount
     */
    readConnectionsAndChunkInfoAsync(
        fileOffset: number,
        connectionCount: number,
        chunkCount: number,
    ): Promise<{ connections: Connection[]; chunkInfos: ChunkInfo[] }>;

    /**
     * read individual raw messages from the bag at a given chunk
     * filters to a specific set of connection ids, start time, & end time
     * generally the records will be of type MessageData
     * @param chunkInfo
     * @param connections
     * @param startTime
     * @param endTime
     * @param decompress
     * @param callback
     */
    readChunkMessages(
        chunkInfo: ChunkInfo,
        connections: number[],
        startTime: Time | null,
        endTime: Time | null,
        decompress: Decompress,
        callback: Callback<MessageData[]>,
    ): void;

    /**
     * Promisified version of readChunkMessages
     * @param chunkInfo
     * @param connections
     * @param startTime
     * @param endTime
     * @param decompress
     */
    readChunkMessagesAsync(
        chunkInfo: ChunkInfo,
        connections: number[],
        startTime: Time,
        endTime: Time,
        decompress: Decompress,
    ): Promise<MessageData[]>;

    /**
     * Reads a single chunk record && its index records given a chunkInfo
     * @param chunkInfo
     * @param decompress
     * @param callback
     */
    readChunk(chunkInfo: ChunkInfo, decompress: Decompress, callback: Callback<ChunkReadResult>): void;

    /**
     * Reads count records from a buffer starting at fileOffset
     * @param buffer
     * @param count
     * @param fileOffset
     * @param cls
     */
    readRecordsFromBuffer<T extends Record>(
        buffer: Buffer,
        count: number,
        fileOffset: number,
        cls: T & { opcode: number },
    ): T[];

    /**
     * Reads an individual record from a buffer
     * @param buffer
     * @param fileOffset
     * @param cls
     */
    readRecordFromBuffer<T extends Record>(buffer: Buffer, fileOffset: number, cls: T & { opcode: number }): T;
}

interface ReadOptions {
    decompress?: Decompress;
    noParse?: boolean;
    topics?: string[];
    startTime?: Time;
    endTime?: Time;
    freeze?: boolean;
}

declare class Bag {
    reader: BagReader;
    header: BagHeader;
    connections: { [conn: number]: Connection };
    chunkInfos: ChunkInfo[];
    startTime: Time | undefined;
    endTime: Time | undefined;

    /**
     * the high level rosbag interface
     * create a new bag by calling:
     * `const bag = await Bag.open('./path-to-file.bag')` in node or
     * `const bag = await Bag.open(files[0])` in the browser
     *
     * after that you can consume messages by calling
     * `await bag.readMessages({ topics: ['/foo'] },
     * (result) => console.log(result.topic, result.message))`
     *
     * you can optionally create a bag manually passing in a bagReader instance
     *
     * @param bagReader
     */
    constructor(bagReader: BagReader);

    /**
     * This method should have been overridden based on the environment.
     * Make sure you are correctly importing the node or web version of Bag.
     * @param file
     */
    static open(file: File | string | Blob): void;

    /**
     * if the bag is manually created with the constructor, you must call `await open()` on the bag
     * generally this is called for you if you're using `const bag = await Bag.open()`
     */
    open(): Promise<void>;

    readMessages(opts: ReadOptions, callback: (msg: ReadResult<any>) => void): Promise<void>;
}

declare class ReadResult<T> {
    topic: string;
    message: T;
    timestamp: Time;
    data: Buffer;
    chunkOffset: number;
    totalChunks: number;

    constructor(
        // string: the topic the message was on
        topic: string,
        // any: the parsed body of the message based on connection.messageDefinition
        message: T,
        // time: the timestamp of the message
        timestamp: Time,
        // buffer: raw buffer data of the message
        data: Buffer,
        // the offset of the currently read chunk
        chunkOffset: number,
        // the total number of chunks in the read operation
        totalChunks: number,
        // freeze
        freeze?: boolean,
    );
}

declare class Record {
    offset: number;
    dataOffset: number;
    end: number;
    length: number;

    /**
     * Base class that represents a record of information from ROSBAG
     * @param _fields
     */
    constructor(_fields: { [key: string]: any });

    parseData(_buffer: Buffer): void;
}

declare class BagHeader extends Record {
    static opcode: number;
    indexPosition: number;
    connectionCount: number;
    chunkCount: number;

    constructor(fields: { [key: string]: Buffer });
}

declare class Chunk extends Record {
    static opcode: number;
    compression: string;
    size: number;
    data: Buffer;

    constructor(fields: { [key: string]: Buffer });

    parseData(buffer: Buffer): void;
}

declare class Connection extends Record {
    static opcode: number;
    conn: number;
    topic: string;
    type: string | undefined;
    md5sum: string | undefined;
    messageDefinition: string;
    callerid: string | undefined;
    latching: boolean | undefined;
    reader: MessageReader | undefined;

    constructor(fields: { [key: string]: Buffer });

    parseData(buffer: Buffer): void;
}

declare class MessageData extends Record {
    static opcode: number;
    conn: number;
    time: Time;
    data: Buffer;

    constructor(fields: { [key: string]: Buffer });

    parseData(buffer: Buffer): void;
}

declare class IndexData extends Record {
    static opcode: number;
    ver: number;
    conn: number;
    count: number;
    indices: Array<{ time: Time; offset: number }>;

    constructor(fields: { [key: string]: Buffer });

    parseData(buffer: Buffer): void;
}

declare class ChunkInfo extends Record {
    static opcode: number;
    ver: number;
    chunkPosition: number;
    startTime: Time;
    endTime: Time;
    count: number;
    connections: Array<{ conn: number; count: number }>;
    nextChunk: ChunkInfo | undefined;

    constructor(fields: { [key: string]: Buffer });

    parseData(buffer: Buffer): void;
}

export {
    BagReader,
    Callback,
    extractFields,
    extractTime,
    MessageReader,
    MessageWriter,
    open,
    parseMessageDefinition,
    rosPrimitiveTypes,
    TimeUtil,
};
export default Bag;

export as namespace rosbag;
