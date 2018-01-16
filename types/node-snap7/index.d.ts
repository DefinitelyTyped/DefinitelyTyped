// Type definitions for node-snap7 0.2.2
// Project: https://github.com/mathiask88/node-snap7
// Definitions by: Heilingbrunner <https://github.com/heilingbrunner>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// see: https://www.npmjs.com/package/node-snap7#api

/// <reference types="node" />



export declare enum ConnectionType {
    CONNTYPE_PG = 0x01,
    CONNTYPE_OP = 0x02,
    CONNTYPE_BASIC = 0x03
}

export declare enum ParamNumber {
    RemotePort = 2,
    PingTimeout = 3,
    SendTimeout = 4,
    RecvTimeout = 5,
    SrcRef = 7,
    DstRef = 8,
    SrcTSap = 9,
    PDURequest = 10
}

export declare enum Area {
    S7AreaPE = 0x81,
    S7AreaPA = 0x82,
    S7AreaMK = 0x83,
    S7AreaDB = 0x84,
    S7AreaCT = 0x1C,
    S7AreaTM = 0x1D
}

export declare enum WordLen {
    S7WLBit = 0x01,
    S7WLByte = 0x02,
    S7WLWord = 0x04,
    S7WLDWord = 0x06,
    S7WLReal = 0x08,
    S7WLCounter = 0x1C,
    S7WLTimer = 0x1D
}

export declare enum BlockType {
    Block_OB = 0x38,
    Block_DB = 0x41,
    Block_SDB = 0x42,
    Block_FC = 0x43,
    Block_SFC = 0x44,
    Block_FB = 0x45,
    Block_SFB = 0x46
}

export declare enum SubBlockType {
    SubBlk_OB = 0x08,
    SubBlk_DB = 0x0A,
    SubBlk_SDB = 0x0B,
    SubBlk_FC = 0x0C,
    SubBlk_SFC = 0x0D,
    SubBlk_FB = 0x0E,
    SubBlk_SFB = 0x0F
}

export declare enum LangType {
    BlockLangAWL = 0x01,
    BlockLangKOP = 0x02,
    BlockLangFUP = 0x03,
    BlockLangSCL = 0x04,
    BlockLangDB = 0x05,
    BlockLangGRAPH = 0x06
}

export declare enum Status {
    S7CpuStatusUnknown = 0x00,
    S7CpuStatusRun = 0x08,
    S7CpuStatusStop = 0x04
}

interface MultiVarRead {
    Area: Area;
    WordLen: WordLen;
    DBNumber?: number;
    Start: number;
    Amount: number;
}

interface MultiVarWrite {
    Area: Area;
    WordLen: WordLen;
    DBNumber?: number;
    Start: number;
    Amount: number;
    Data: Buffer;
}

interface MultiVarsReadResult {
    Result: number; //Error Code
    Data: Buffer;
}

interface MultiVarsWriteResult {
    Result: number; //Error Code
}

interface S7Client_Static {
    new (): S7Client;

    //Static members here ...
  }

interface S7Client {

    //Instance members here

    //API - Control functions

    /** 
     * Connects the client to the PLC with the parameters specified in the previous call of ConnectTo() or SetConnectionParams().
     * - cb: The optional callback parameter will be executed after connection attempt
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    Connect(callback?: (err: any) => void): boolean;

    /** 
     * Connects the client to the hardware at ip, rack, slot coordinates.
     * - ip: PLC/Equipment IPV4 Address ex. “192.168.1.12”
     * - rack: PLC Rack number
     * - slot: PLC Slot number
     * - cb: The optional callback parameter will be executed after connection attempt
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    ConnectTo(ip: string, rack: number, slot: number, callback?: (err: any) => void): boolean;

    /** 
     * Sets internally ip, localTSAP, remoteTSAP coordinates.
     * - ip PLC/Equipment IPv4 address ex. “192.168.1.12”
     * - localTSAP Local TSAP (PC TSAP)
     * - remoteTSAP Remote TSAP (PLC TSAP)
     * Returns true on success or false on error. 
     */
    SetConnectionParams(ip: string, localTSAP: any, remoteTSAP: any): boolean;

    /**
     * Sets the connection resource type, i.e the way in which the Clients connects to a PLC.
     */
    SetConnectionType(connectionType: ConnectionType): void;

    /**
     * Disconnects “gracefully” the Client from the PLC.
     * Returns true on success or false on error.
     */
    Disconnect(): void;

    /** 
     * Reads an internal Client object parameter.
     * Returns the parameter value on success or false on error.
     */
    GetParam(paramNumber: ParamNumber): any;

    /**
     * Sets an internal Client object parameter.
     * paramNumber One from the parameter list above
     * value New parameter value
     * Returns true on success or false on error.
     */
    SetParam(paramNumber: ParamNumber, value: any): boolean;

    //API - Data I/O functions

    /**
     * This is the main function to read data from a PLC. With it you can read DB, Inputs, Outputs, Merkers, Timers and Counters.
     * - area Area identifier (see table below)
     * - dbNumber DB number if area = S7AreaDB, otherwise ignored
     * - start Offset to start
     * - amount Amount of words to read
     * - wordLen Word size (see table below)
     * The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadArea(area: Area, dbNumber: number, start: number, amount: number, wordLen: WordLen, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * This is the main function to write data into a PLC.
     * - area Area identifier (see table below)
     * - dbNumber DB number if area = S7AreaDB, otherwise ignored
     * - start Offset to start
     * - amount Amount of words to read
     * - wordLen Word size (see table below)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    WriteArea(area: Area, dbNumber: number, start: number, amount: number, wordLen: WordLen, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC DB.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaDB and wordLen = s7client.S7WLByte.
     * - dbNumber DB number
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    DBRead(dbNumber: number, start: number, size: number, callback?: (err: any, data: any) => void): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC DB.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaDB and wordLen = s7client.S7WLByte.
     * - dbNumber DB number
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    DBWrite(dbNumber: number, start: number, size: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC process outputs.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaPA and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ABRead(start: number, size: number, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC process outputs.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaPA and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    ABWrite(start: number, size: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC process inputs.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaPE and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    EBRead(start: number, size: number, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC process inputs.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaPE and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    EBWrite(start: number, size: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC Merkers.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaMK and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    MBRead(start: number, size: number, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC Merkers.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaMK and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    MBWrite(start: number, size: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC Timers.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaTM and wordLen = S7Client.S7WLTimer.
     * - start Offset to start
     * - amount Number of timers
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    TMRead(start: number, size: number, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC Timers.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaTM and wordLen = S7Client.S7WLTimer.
     * - start Offset to start
     * - amount Number of timers
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    TMWrite(start: number, size: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC Counters.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaCT and wordLen = S7Client.S7WLCounter.
     * - start Offset to start
     * - amount Number of counters
     * -  The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    CTRead(start: number, size: number, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC Counters.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaCT and wordLen = S7Client.S7WLCounter.
     * - start Offset to start
     * - amount Number of counters
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    CTWrite(start: number, size: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * This is function allows to read different kind of variables from a PLC in a single call. With it you can read DB, 
     * Inputs, Outputs, Merkers, Timers and Counters.
     * - multiVars Array of objects with read information (see structure below)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns an array on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadMultiVars(multiVars: MultiVarRead[], callback?: (err: any, data: MultiVarsReadResult[]) => void): MultiVarsReadResult[] | boolean;

    /**
     * This is function allows to write different kind of variables into a PLC in a single call. With it you can write DB, 
     * Inputs, Outputs, Merkers, Timers and Counters.
     * - multiVars Array of objects with write information (see structure below)
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns an array on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    WriteMultiVars(multiVars: MultiVarWrite[], callback?: (err: any, data: MultiVarsWriteResult[]) => void): MultiVarsWriteResult[] | boolean;

    //API - Directory functions

    /**
     * This function returns an object of the AG blocks amount divided by type.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object (see below) on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ListBlocks(callback?: (err: any, data: Object) => void): Object | boolean;

    /**
     * This function returns an array of the AG list of a specified block type.
     * - blockType Type of block (see table below)
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an array on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ListBlocksOfType(blockType: BlockType, callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Returns an object with detailed information about a given AG block. This function is very useful if you need to read or write 
     * data in a DB which you do not know the size in advance (see MC7Size field)
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object (see below) on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetAgBlockInfo(blockType: BlockType, blockNum: number, callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Returns detailed information about a block present in a user buffer. This function is usually used in conjunction with FullUpload(). 
     * An uploaded block saved to disk, could be loaded in a user buffer and checked with this function.
     * - buffer User buffer
     * Returns an object (see example above) on success or false on error.
     */
    GetPgBlockInfo(buffer: Buffer): Object | boolean;

    //API - Block oriented functions

    /**
     * Uploads a block from AG. The whole block (including header and footer) is copied into the user buffer.
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a Buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    FullUpload(blockType: BlockType, blockNum: number, callback?: (err: any, data: Object) => void): Object | boolean;

    /**
     * Uploads a block body from AG. Only the block body (but header and footer) is copied into the user buffer.
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a Buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    Upload(blockType: BlockType, blockNum: number, callback?: (err: any, data: Object) => void): Object | boolean;

    /**
     * Downloads a block into AG. A whole block (including header and footer) must be available into the user buffer.
     * - blockNum Number of block
     * - buffer User buffer
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     * If the parameter blockNum is -1, the block number is not changed else the block is downloaded with the provided number (just like a “Download As…”).
     */
    Download(blockNum: number, buffer: Buffer, callback?: (err: any) => void): boolean;

    /**
     * Deletes a block into AG.
     * !!! There is no undo function available !!!
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    Delete(blockType: BlockType, blockNum: number, callback?: (err: any) => void): boolean;

    /**
     * Uploads a DB from AG. This function is equivalent to Upload() with BlockType = Block_DB but it uses a different approach 
     * so it’s not subject to the security level set.
     * Only data is uploaded.
     * - dbNumber DB number
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a Buffer object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     * This function first gathers the DB size via GetAgBlockInfo() then calls DBRead().
     */
    DBGet(dbNumber: number, callback?: (err: any, data: Buffer) => void): Buffer | boolean;

    /**
     * Fills a DB in AG with a given byte without the need of specifying its size.
     * - dbNumber DB number
     * - fillChar char or char code
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    DBFill(dbNumber: number, fillChar: string, callback?: (err: any) => void): boolean;

    //API - Date/Time functions

    /**
     * Reads PLC date and time.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a javascript Date() object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetPlcDateTime(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Sets the PLC date and time.
     * - dateTime
     * - The optional callback parameter will be executed after completion
     * The dateTime argument can be a javascript Date() object or an object with the structure below.
     * {
     *   "year": 2015,  // year 
     *   "month": 4,    // months since January     0-11 
     *   "day": 3,      // day of the month         1-31 
     *   "hours": 19,   // hours since midnight     0-23 
     *   "minutes": 37, // minutes after the hour   0-59 
     *   "seconds": 0   // seconds after the minute 0-59 
     * }
     * If callback is not set the function is blocking and returns a true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    SetPlcDateTime(dateTime: Date, callback?: (err: any) => void): boolean;

    /**
     * Sets the PLC date and time in accord to the PC system Date/Time.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    SetPlcSystemDateTime(callback?: (err: any) => void): boolean;

    //API - System info functions

    /**
     * Reads a partial list of given idand index.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a buffer on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadSZL(id: number, index: number, callback?: (err: any, data: any) => void): Buffer | boolean;

    /**
     * Reads the directory of the partial lists.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an array on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadSZLList(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Gets CPU order code and version info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetOrderCode(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Gets CPU module name, serial number and other info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetCpuInfo(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Gets CP (communication processor) info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetCpInfo(callback?: (err: any, data: any) => void): any | boolean;

    //API - PLC control functions

    /**
     * Puts the CPU in RUN mode performing an HOT START.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    PlcHotStart(callback?: (err: any) => void): boolean;

    /**
     * Puts the CPU in RUN mode performing a COLD START.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    PlcColdStart(callback?: (err: any) => void): boolean;

    /**
     * Puts the CPU in STOP mode.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    PlcStop(callback?: (err: any) => void): boolean;

    /**
     * Performs the Copy Ram to Rom action.
     * - timeout Maximum time expected to complete the operation (ms)
     * - The optional callback parameter will be executed after completion or on timeout
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     * Not all CPUs support this operation. The CPU must be in STOP mode.
     */
    CopyRamToRom(timeout: number, callback?: (err: any) => void): boolean;

    /**
     * Performs the Memory compress action.
     * - timeout Maximum time expected to complete the operation (ms)
     * - The optional callback parameter will be executed after completion or on timeout
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    Compress(timeout: number, callback?: (err: any) => void): boolean;

    //API - Security functions

    /**
     * Send the password to the PLC to meet its security level.
     * - password Password
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     * A password accepted by a PLC is an 8 chars string, a longer password will be trimmed, and a shorter one will be "right space padded".
     */
    SetSessionPassword(password: string, callback?: (err: any) => void): boolean;

    /**
     * Clears the password set for the current session (logout).
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error. 
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    ClearSessionPassword(callback?: (err: any) => void): boolean;

    /**
     * Gets the CPU protection level info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns the protection object on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetProtection(callback?: (err: any, data: any) => void): any | boolean;

    //API - Properties

    /**
     * Returns the last job execution time in milliseconds or false on error.
     */
    ExecTime(): number | boolean;

    /**
     * Returns the last job result.
     */
    LastError(): any;

    /**
     * Returns the PDU length requested by the client or false on error. The requested PDU length can be modified with SetParam().
     */
    PduRequested(): number | boolean;

    /**
     * Returns the PDU length negotiated between the client and the PLC during the connection or false on error.
     * It’s useful to know the PDU negotiated when we need to call ReadMultivar() or WriteMultiVar(). 
     * All other data transfer functions handle this information by themselves and split the telegrams automatically if needed.
     */
    PduLength(): number | boolean;

    /**
     * Returns the CPU status (running/stopped).
     * The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns the CPU status on success or false on error. 
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    PlcStatus(callback?: (err: any, data: Status) => void): Status | boolean;

    /**
     * Returns the connection status.
     */
    Connected(): any;

    /**
     * Returns a textual explanation of a given error number.
     * - errNum Error number
     */
    ErrorText(err: number): string;
}

export declare var S7Client: S7Client_Static;
