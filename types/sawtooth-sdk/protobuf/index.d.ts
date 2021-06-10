// tslint:disable:member-access
// tslint:disable:interface-name
// tslint:disable:no-unnecessary-qualifier
// tslint:disable:no-empty-interface

/// <reference types="long" />

import * as $protobuf from 'protobufjs';
/** Properties of a BatchHeader. */
export interface IBatchHeader {
    /** BatchHeader signerPublicKey */
    signerPublicKey?: string | null;

    /** BatchHeader transactionIds */
    transactionIds?: string[] | null;
}

/** Represents a BatchHeader. */
export class BatchHeader implements IBatchHeader {
    /**
     * Constructs a new BatchHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBatchHeader);

    /** BatchHeader signerPublicKey. */
    public signerPublicKey: string;

    /** BatchHeader transactionIds. */
    public transactionIds: string[];

    /**
     * Creates a new BatchHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatchHeader instance
     */
    public static create(properties?: IBatchHeader): BatchHeader;

    /**
     * Encodes the specified BatchHeader message. Does not implicitly {@link BatchHeader.verify|verify} messages.
     * @param message BatchHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBatchHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BatchHeader message, length delimited. Does not implicitly {@link BatchHeader.verify|verify} messages.
     * @param message BatchHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBatchHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatchHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BatchHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): BatchHeader;

    /**
     * Decodes a BatchHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BatchHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): BatchHeader;

    /**
     * Verifies a BatchHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BatchHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BatchHeader
     */
    public static fromObject(object: { [k: string]: any }): BatchHeader;

    /**
     * Creates a plain object from a BatchHeader message. Also converts values to other types if specified.
     * @param message BatchHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BatchHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BatchHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Batch. */
export interface IBatch {
    /** Batch header */
    header?: Uint8Array | null;

    /** Batch headerSignature */
    headerSignature?: string | null;

    /** Batch transactions */
    transactions?: ITransaction[] | null;

    /** Batch trace */
    trace?: boolean | null;
}

/** Represents a Batch. */
export class Batch implements IBatch {
    /**
     * Constructs a new Batch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBatch);

    /** Batch header. */
    public header: Uint8Array;

    /** Batch headerSignature. */
    public headerSignature: string;

    /** Batch transactions. */
    public transactions: ITransaction[];

    /** Batch trace. */
    public trace: boolean;

    /**
     * Creates a new Batch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Batch instance
     */
    public static create(properties?: IBatch): Batch;

    /**
     * Encodes the specified Batch message. Does not implicitly {@link Batch.verify|verify} messages.
     * @param message Batch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Batch message, length delimited. Does not implicitly {@link Batch.verify|verify} messages.
     * @param message Batch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Batch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Batch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Batch;

    /**
     * Decodes a Batch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Batch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Batch;

    /**
     * Verifies a Batch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Batch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Batch
     */
    public static fromObject(object: { [k: string]: any }): Batch;

    /**
     * Creates a plain object from a Batch message. Also converts values to other types if specified.
     * @param message Batch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Batch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Batch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BatchList. */
export interface IBatchList {
    /** BatchList batches */
    batches?: IBatch[] | null;
}

/** Represents a BatchList. */
export class BatchList implements IBatchList {
    /**
     * Constructs a new BatchList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBatchList);

    /** BatchList batches. */
    public batches: IBatch[];

    /**
     * Creates a new BatchList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatchList instance
     */
    public static create(properties?: IBatchList): BatchList;

    /**
     * Encodes the specified BatchList message. Does not implicitly {@link BatchList.verify|verify} messages.
     * @param message BatchList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBatchList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BatchList message, length delimited. Does not implicitly {@link BatchList.verify|verify} messages.
     * @param message BatchList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBatchList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatchList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): BatchList;

    /**
     * Decodes a BatchList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): BatchList;

    /**
     * Verifies a BatchList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BatchList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BatchList
     */
    public static fromObject(object: { [k: string]: any }): BatchList;

    /**
     * Creates a plain object from a BatchList message. Also converts values to other types if specified.
     * @param message BatchList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BatchList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BatchList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionHeader. */
export interface ITransactionHeader {
    /** TransactionHeader batcherPublicKey */
    batcherPublicKey?: string | null;

    /** TransactionHeader dependencies */
    dependencies?: string[] | null;

    /** TransactionHeader familyName */
    familyName?: string | null;

    /** TransactionHeader familyVersion */
    familyVersion?: string | null;

    /** TransactionHeader inputs */
    inputs?: string[] | null;

    /** TransactionHeader nonce */
    nonce?: string | null;

    /** TransactionHeader outputs */
    outputs?: string[] | null;

    /** TransactionHeader payloadSha512 */
    payloadSha512?: string | null;

    /** TransactionHeader signerPublicKey */
    signerPublicKey?: string | null;
}

/** Represents a TransactionHeader. */
export class TransactionHeader implements ITransactionHeader {
    /**
     * Constructs a new TransactionHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionHeader);

    /** TransactionHeader batcherPublicKey. */
    public batcherPublicKey: string;

    /** TransactionHeader dependencies. */
    public dependencies: string[];

    /** TransactionHeader familyName. */
    public familyName: string;

    /** TransactionHeader familyVersion. */
    public familyVersion: string;

    /** TransactionHeader inputs. */
    public inputs: string[];

    /** TransactionHeader nonce. */
    public nonce: string;

    /** TransactionHeader outputs. */
    public outputs: string[];

    /** TransactionHeader payloadSha512. */
    public payloadSha512: string;

    /** TransactionHeader signerPublicKey. */
    public signerPublicKey: string;

    /**
     * Creates a new TransactionHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionHeader instance
     */
    public static create(properties?: ITransactionHeader): TransactionHeader;

    /**
     * Encodes the specified TransactionHeader message. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @param message TransactionHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionHeader message, length delimited. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @param message TransactionHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TransactionHeader;

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TransactionHeader;

    /**
     * Verifies a TransactionHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TransactionHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionHeader
     */
    public static fromObject(object: { [k: string]: any }): TransactionHeader;

    /**
     * Creates a plain object from a TransactionHeader message. Also converts values to other types if specified.
     * @param message TransactionHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Transaction. */
export interface ITransaction {
    /** Transaction header */
    header?: Uint8Array | null;

    /** Transaction headerSignature */
    headerSignature?: string | null;

    /** Transaction payload */
    payload?: Uint8Array | null;
}

/** Represents a Transaction. */
export class Transaction implements ITransaction {
    /**
     * Constructs a new Transaction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransaction);

    /** Transaction header. */
    public header: Uint8Array;

    /** Transaction headerSignature. */
    public headerSignature: string;

    /** Transaction payload. */
    public payload: Uint8Array;

    /**
     * Creates a new Transaction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Transaction instance
     */
    public static create(properties?: ITransaction): Transaction;

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Transaction;

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Transaction;

    /**
     * Verifies a Transaction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Transaction
     */
    public static fromObject(object: { [k: string]: any }): Transaction;

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @param message Transaction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Transaction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionList. */
export interface ITransactionList {
    /** TransactionList transactions */
    transactions?: ITransaction[] | null;
}

/** Represents a TransactionList. */
export class TransactionList implements ITransactionList {
    /**
     * Constructs a new TransactionList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionList);

    /** TransactionList transactions. */
    public transactions: ITransaction[];

    /**
     * Creates a new TransactionList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionList instance
     */
    public static create(properties?: ITransactionList): TransactionList;

    /**
     * Encodes the specified TransactionList message. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @param message TransactionList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionList message, length delimited. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @param message TransactionList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TransactionList;

    /**
     * Decodes a TransactionList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TransactionList;

    /**
     * Verifies a TransactionList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TransactionList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionList
     */
    public static fromObject(object: { [k: string]: any }): TransactionList;

    /**
     * Creates a plain object from a TransactionList message. Also converts values to other types if specified.
     * @param message TransactionList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BlockHeader. */
export interface IBlockHeader {
    /** BlockHeader blockNum */
    blockNum?: number | Long | null;

    /** BlockHeader previousBlockId */
    previousBlockId?: string | null;

    /** BlockHeader signerPublicKey */
    signerPublicKey?: string | null;

    /** BlockHeader batchIds */
    batchIds?: string[] | null;

    /** BlockHeader consensus */
    consensus?: Uint8Array | null;

    /** BlockHeader stateRootHash */
    stateRootHash?: string | null;
}

/** Represents a BlockHeader. */
export class BlockHeader implements IBlockHeader {
    /**
     * Constructs a new BlockHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlockHeader);

    /** BlockHeader blockNum. */
    public blockNum: number | Long;

    /** BlockHeader previousBlockId. */
    public previousBlockId: string;

    /** BlockHeader signerPublicKey. */
    public signerPublicKey: string;

    /** BlockHeader batchIds. */
    public batchIds: string[];

    /** BlockHeader consensus. */
    public consensus: Uint8Array;

    /** BlockHeader stateRootHash. */
    public stateRootHash: string;

    /**
     * Creates a new BlockHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockHeader instance
     */
    public static create(properties?: IBlockHeader): BlockHeader;

    /**
     * Encodes the specified BlockHeader message. Does not implicitly {@link BlockHeader.verify|verify} messages.
     * @param message BlockHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link BlockHeader.verify|verify} messages.
     * @param message BlockHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BlockHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): BlockHeader;

    /**
     * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): BlockHeader;

    /**
     * Verifies a BlockHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockHeader
     */
    public static fromObject(object: { [k: string]: any }): BlockHeader;

    /**
     * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
     * @param message BlockHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BlockHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BlockHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Block. */
export interface IBlock {
    /** Block header */
    header?: Uint8Array | null;

    /** Block headerSignature */
    headerSignature?: string | null;

    /** Block batches */
    batches?: IBatch[] | null;
}

/** Represents a Block. */
export class Block implements IBlock {
    /**
     * Constructs a new Block.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlock);

    /** Block header. */
    public header: Uint8Array;

    /** Block headerSignature. */
    public headerSignature: string;

    /** Block batches. */
    public batches: IBatch[];

    /**
     * Creates a new Block instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Block instance
     */
    public static create(properties?: IBlock): Block;

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @param message Block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link Block.verify|verify} messages.
     * @param message Block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Block;

    /**
     * Decodes a Block message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Block;

    /**
     * Verifies a Block message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Block
     */
    public static fromObject(object: { [k: string]: any }): Block;

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @param message Block
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Block to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBatchListRequest. */
export interface IClientBatchListRequest {
    /** ClientBatchListRequest headId */
    headId?: string | null;

    /** ClientBatchListRequest batchIds */
    batchIds?: string[] | null;

    /** ClientBatchListRequest paging */
    paging?: IClientPagingControls | null;

    /** ClientBatchListRequest sorting */
    sorting?: IClientSortControls[] | null;
}

/** Represents a ClientBatchListRequest. */
export class ClientBatchListRequest implements IClientBatchListRequest {
    /**
     * Constructs a new ClientBatchListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchListRequest);

    /** ClientBatchListRequest headId. */
    public headId: string;

    /** ClientBatchListRequest batchIds. */
    public batchIds: string[];

    /** ClientBatchListRequest paging. */
    public paging?: IClientPagingControls | null;

    /** ClientBatchListRequest sorting. */
    public sorting: IClientSortControls[];

    /**
     * Creates a new ClientBatchListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchListRequest instance
     */
    public static create(properties?: IClientBatchListRequest): ClientBatchListRequest;

    /**
     * Encodes the specified ClientBatchListRequest message. Does not implicitly {@link ClientBatchListRequest.verify|verify} messages.
     * @param message ClientBatchListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchListRequest message, length delimited. Does not implicitly {@link ClientBatchListRequest.verify|verify} messages.
     * @param message ClientBatchListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchListRequest;

    /**
     * Decodes a ClientBatchListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchListRequest;

    /**
     * Verifies a ClientBatchListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchListRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchListRequest;

    /**
     * Creates a plain object from a ClientBatchListRequest message. Also converts values to other types if specified.
     * @param message ClientBatchListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchListRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBatchListResponse. */
export interface IClientBatchListResponse {
    /** ClientBatchListResponse status */
    status?: ClientBatchListResponse.Status | null;

    /** ClientBatchListResponse batches */
    batches?: IBatch[] | null;

    /** ClientBatchListResponse headId */
    headId?: string | null;

    /** ClientBatchListResponse paging */
    paging?: IClientPagingResponse | null;
}

/** Represents a ClientBatchListResponse. */
export class ClientBatchListResponse implements IClientBatchListResponse {
    /**
     * Constructs a new ClientBatchListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchListResponse);

    /** ClientBatchListResponse status. */
    public status: ClientBatchListResponse.Status;

    /** ClientBatchListResponse batches. */
    public batches: IBatch[];

    /** ClientBatchListResponse headId. */
    public headId: string;

    /** ClientBatchListResponse paging. */
    public paging?: IClientPagingResponse | null;

    /**
     * Creates a new ClientBatchListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchListResponse instance
     */
    public static create(properties?: IClientBatchListResponse): ClientBatchListResponse;

    /**
     * Encodes the specified ClientBatchListResponse message. Does not implicitly {@link ClientBatchListResponse.verify|verify} messages.
     * @param message ClientBatchListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchListResponse message, length delimited. Does not implicitly {@link ClientBatchListResponse.verify|verify} messages.
     * @param message ClientBatchListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchListResponse;

    /**
     * Decodes a ClientBatchListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchListResponse;

    /**
     * Verifies a ClientBatchListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchListResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchListResponse;

    /**
     * Creates a plain object from a ClientBatchListResponse message. Also converts values to other types if specified.
     * @param message ClientBatchListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchListResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBatchListResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NOT_READY = 3,
        NO_ROOT = 4,
        NO_RESOURCE = 5,
        INVALID_PAGING = 6,
        INVALID_SORT = 7,
        INVALID_ID = 8,
    }
}

/** Properties of a ClientBatchGetRequest. */
export interface IClientBatchGetRequest {
    /** ClientBatchGetRequest batchId */
    batchId?: string | null;
}

/** Represents a ClientBatchGetRequest. */
export class ClientBatchGetRequest implements IClientBatchGetRequest {
    /**
     * Constructs a new ClientBatchGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchGetRequest);

    /** ClientBatchGetRequest batchId. */
    public batchId: string;

    /**
     * Creates a new ClientBatchGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchGetRequest instance
     */
    public static create(properties?: IClientBatchGetRequest): ClientBatchGetRequest;

    /**
     * Encodes the specified ClientBatchGetRequest message. Does not implicitly {@link ClientBatchGetRequest.verify|verify} messages.
     * @param message ClientBatchGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchGetRequest message, length delimited. Does not implicitly {@link ClientBatchGetRequest.verify|verify} messages.
     * @param message ClientBatchGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchGetRequest;

    /**
     * Decodes a ClientBatchGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchGetRequest;

    /**
     * Verifies a ClientBatchGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchGetRequest;

    /**
     * Creates a plain object from a ClientBatchGetRequest message. Also converts values to other types if specified.
     * @param message ClientBatchGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBatchGetResponse. */
export interface IClientBatchGetResponse {
    /** ClientBatchGetResponse status */
    status?: ClientBatchGetResponse.Status | null;

    /** ClientBatchGetResponse batch */
    batch?: IBatch | null;
}

/** Represents a ClientBatchGetResponse. */
export class ClientBatchGetResponse implements IClientBatchGetResponse {
    /**
     * Constructs a new ClientBatchGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchGetResponse);

    /** ClientBatchGetResponse status. */
    public status: ClientBatchGetResponse.Status;

    /** ClientBatchGetResponse batch. */
    public batch?: IBatch | null;

    /**
     * Creates a new ClientBatchGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchGetResponse instance
     */
    public static create(properties?: IClientBatchGetResponse): ClientBatchGetResponse;

    /**
     * Encodes the specified ClientBatchGetResponse message. Does not implicitly {@link ClientBatchGetResponse.verify|verify} messages.
     * @param message ClientBatchGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchGetResponse message, length delimited. Does not implicitly {@link ClientBatchGetResponse.verify|verify} messages.
     * @param message ClientBatchGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchGetResponse;

    /**
     * Decodes a ClientBatchGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchGetResponse;

    /**
     * Verifies a ClientBatchGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchGetResponse;

    /**
     * Creates a plain object from a ClientBatchGetResponse message. Also converts values to other types if specified.
     * @param message ClientBatchGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBatchGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NO_RESOURCE = 5,
        INVALID_ID = 8,
    }
}

/** Properties of a ClientPagingControls. */
export interface IClientPagingControls {
    /** ClientPagingControls start */
    start?: string | null;

    /** ClientPagingControls limit */
    limit?: number | null;
}

/** Represents a ClientPagingControls. */
export class ClientPagingControls implements IClientPagingControls {
    /**
     * Constructs a new ClientPagingControls.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientPagingControls);

    /** ClientPagingControls start. */
    public start: string;

    /** ClientPagingControls limit. */
    public limit: number;

    /**
     * Creates a new ClientPagingControls instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientPagingControls instance
     */
    public static create(properties?: IClientPagingControls): ClientPagingControls;

    /**
     * Encodes the specified ClientPagingControls message. Does not implicitly {@link ClientPagingControls.verify|verify} messages.
     * @param message ClientPagingControls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientPagingControls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientPagingControls message, length delimited. Does not implicitly {@link ClientPagingControls.verify|verify} messages.
     * @param message ClientPagingControls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientPagingControls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientPagingControls message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientPagingControls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientPagingControls;

    /**
     * Decodes a ClientPagingControls message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientPagingControls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientPagingControls;

    /**
     * Verifies a ClientPagingControls message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientPagingControls message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientPagingControls
     */
    public static fromObject(object: { [k: string]: any }): ClientPagingControls;

    /**
     * Creates a plain object from a ClientPagingControls message. Also converts values to other types if specified.
     * @param message ClientPagingControls
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientPagingControls, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientPagingControls to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientPagingResponse. */
export interface IClientPagingResponse {
    /** ClientPagingResponse next */
    next?: string | null;

    /** ClientPagingResponse start */
    start?: string | null;

    /** ClientPagingResponse limit */
    limit?: number | null;
}

/** Represents a ClientPagingResponse. */
export class ClientPagingResponse implements IClientPagingResponse {
    /**
     * Constructs a new ClientPagingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientPagingResponse);

    /** ClientPagingResponse next. */
    public next: string;

    /** ClientPagingResponse start. */
    public start: string;

    /** ClientPagingResponse limit. */
    public limit: number;

    /**
     * Creates a new ClientPagingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientPagingResponse instance
     */
    public static create(properties?: IClientPagingResponse): ClientPagingResponse;

    /**
     * Encodes the specified ClientPagingResponse message. Does not implicitly {@link ClientPagingResponse.verify|verify} messages.
     * @param message ClientPagingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientPagingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientPagingResponse message, length delimited. Does not implicitly {@link ClientPagingResponse.verify|verify} messages.
     * @param message ClientPagingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientPagingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientPagingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientPagingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientPagingResponse;

    /**
     * Decodes a ClientPagingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientPagingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientPagingResponse;

    /**
     * Verifies a ClientPagingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientPagingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientPagingResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientPagingResponse;

    /**
     * Creates a plain object from a ClientPagingResponse message. Also converts values to other types if specified.
     * @param message ClientPagingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientPagingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientPagingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientSortControls. */
export interface IClientSortControls {
    /** ClientSortControls keys */
    keys?: string[] | null;

    /** ClientSortControls reverse */
    reverse?: boolean | null;
}

/** Represents a ClientSortControls. */
export class ClientSortControls implements IClientSortControls {
    /**
     * Constructs a new ClientSortControls.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientSortControls);

    /** ClientSortControls keys. */
    public keys: string[];

    /** ClientSortControls reverse. */
    public reverse: boolean;

    /**
     * Creates a new ClientSortControls instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientSortControls instance
     */
    public static create(properties?: IClientSortControls): ClientSortControls;

    /**
     * Encodes the specified ClientSortControls message. Does not implicitly {@link ClientSortControls.verify|verify} messages.
     * @param message ClientSortControls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientSortControls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientSortControls message, length delimited. Does not implicitly {@link ClientSortControls.verify|verify} messages.
     * @param message ClientSortControls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientSortControls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientSortControls message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientSortControls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientSortControls;

    /**
     * Decodes a ClientSortControls message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientSortControls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientSortControls;

    /**
     * Verifies a ClientSortControls message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientSortControls message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientSortControls
     */
    public static fromObject(object: { [k: string]: any }): ClientSortControls;

    /**
     * Creates a plain object from a ClientSortControls message. Also converts values to other types if specified.
     * @param message ClientSortControls
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientSortControls, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientSortControls to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBatchStatus. */
export interface IClientBatchStatus {
    /** ClientBatchStatus batchId */
    batchId?: string | null;

    /** ClientBatchStatus status */
    status?: ClientBatchStatus.Status | null;

    /** ClientBatchStatus invalidTransactions */
    invalidTransactions?: ClientBatchStatus.IInvalidTransaction[] | null;
}

/** Represents a ClientBatchStatus. */
export class ClientBatchStatus implements IClientBatchStatus {
    /**
     * Constructs a new ClientBatchStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchStatus);

    /** ClientBatchStatus batchId. */
    public batchId: string;

    /** ClientBatchStatus status. */
    public status: ClientBatchStatus.Status;

    /** ClientBatchStatus invalidTransactions. */
    public invalidTransactions: ClientBatchStatus.IInvalidTransaction[];

    /**
     * Creates a new ClientBatchStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchStatus instance
     */
    public static create(properties?: IClientBatchStatus): ClientBatchStatus;

    /**
     * Encodes the specified ClientBatchStatus message. Does not implicitly {@link ClientBatchStatus.verify|verify} messages.
     * @param message ClientBatchStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchStatus message, length delimited. Does not implicitly {@link ClientBatchStatus.verify|verify} messages.
     * @param message ClientBatchStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchStatus;

    /**
     * Decodes a ClientBatchStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchStatus;

    /**
     * Verifies a ClientBatchStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchStatus
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchStatus;

    /**
     * Creates a plain object from a ClientBatchStatus message. Also converts values to other types if specified.
     * @param message ClientBatchStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientBatchStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientBatchStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBatchStatus {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        COMMITTED = 1,
        INVALID = 2,
        PENDING = 3,
        UNKNOWN = 4,
    }

    /** Properties of an InvalidTransaction. */
    interface IInvalidTransaction {
        /** InvalidTransaction transactionId */
        transactionId?: string | null;

        /** InvalidTransaction message */
        message?: string | null;

        /** InvalidTransaction extendedData */
        extendedData?: Uint8Array | null;
    }

    /** Represents an InvalidTransaction. */
    class InvalidTransaction implements IInvalidTransaction {
        /**
         * Constructs a new InvalidTransaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientBatchStatus.IInvalidTransaction);

        /** InvalidTransaction transactionId. */
        public transactionId: string;

        /** InvalidTransaction message. */
        public message: string;

        /** InvalidTransaction extendedData. */
        public extendedData: Uint8Array;

        /**
         * Creates a new InvalidTransaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InvalidTransaction instance
         */
        public static create(properties?: ClientBatchStatus.IInvalidTransaction): ClientBatchStatus.InvalidTransaction;

        /**
         * Encodes the specified InvalidTransaction message. Does not implicitly {@link ClientBatchStatus.InvalidTransaction.verify|verify} messages.
         * @param message InvalidTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: ClientBatchStatus.IInvalidTransaction,
            writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Encodes the specified InvalidTransaction message, length delimited. Does not implicitly {@link ClientBatchStatus.InvalidTransaction.verify|verify} messages.
         * @param message InvalidTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: ClientBatchStatus.IInvalidTransaction,
            writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes an InvalidTransaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InvalidTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
        ): ClientBatchStatus.InvalidTransaction;

        /**
         * Decodes an InvalidTransaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InvalidTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchStatus.InvalidTransaction;

        /**
         * Verifies an InvalidTransaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an InvalidTransaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InvalidTransaction
         */
        public static fromObject(object: { [k: string]: any }): ClientBatchStatus.InvalidTransaction;

        /**
         * Creates a plain object from an InvalidTransaction message. Also converts values to other types if specified.
         * @param message InvalidTransaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: ClientBatchStatus.InvalidTransaction,
            options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        /**
         * Converts this InvalidTransaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ClientBatchSubmitRequest. */
export interface IClientBatchSubmitRequest {
    /** ClientBatchSubmitRequest batches */
    batches?: IBatch[] | null;
}

/** Represents a ClientBatchSubmitRequest. */
export class ClientBatchSubmitRequest implements IClientBatchSubmitRequest {
    /**
     * Constructs a new ClientBatchSubmitRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchSubmitRequest);

    /** ClientBatchSubmitRequest batches. */
    public batches: IBatch[];

    /**
     * Creates a new ClientBatchSubmitRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchSubmitRequest instance
     */
    public static create(properties?: IClientBatchSubmitRequest): ClientBatchSubmitRequest;

    /**
     * Encodes the specified ClientBatchSubmitRequest message. Does not implicitly {@link ClientBatchSubmitRequest.verify|verify} messages.
     * @param message ClientBatchSubmitRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchSubmitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchSubmitRequest message, length delimited. Does not implicitly {@link ClientBatchSubmitRequest.verify|verify} messages.
     * @param message ClientBatchSubmitRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchSubmitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchSubmitRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchSubmitRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchSubmitRequest;

    /**
     * Decodes a ClientBatchSubmitRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchSubmitRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchSubmitRequest;

    /**
     * Verifies a ClientBatchSubmitRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchSubmitRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchSubmitRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchSubmitRequest;

    /**
     * Creates a plain object from a ClientBatchSubmitRequest message. Also converts values to other types if specified.
     * @param message ClientBatchSubmitRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchSubmitRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchSubmitRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBatchSubmitResponse. */
export interface IClientBatchSubmitResponse {
    /** ClientBatchSubmitResponse status */
    status?: ClientBatchSubmitResponse.Status | null;
}

/** Represents a ClientBatchSubmitResponse. */
export class ClientBatchSubmitResponse implements IClientBatchSubmitResponse {
    /**
     * Constructs a new ClientBatchSubmitResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchSubmitResponse);

    /** ClientBatchSubmitResponse status. */
    public status: ClientBatchSubmitResponse.Status;

    /**
     * Creates a new ClientBatchSubmitResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchSubmitResponse instance
     */
    public static create(properties?: IClientBatchSubmitResponse): ClientBatchSubmitResponse;

    /**
     * Encodes the specified ClientBatchSubmitResponse message. Does not implicitly {@link ClientBatchSubmitResponse.verify|verify} messages.
     * @param message ClientBatchSubmitResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchSubmitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchSubmitResponse message, length delimited. Does not implicitly {@link ClientBatchSubmitResponse.verify|verify} messages.
     * @param message ClientBatchSubmitResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchSubmitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchSubmitResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchSubmitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchSubmitResponse;

    /**
     * Decodes a ClientBatchSubmitResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchSubmitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchSubmitResponse;

    /**
     * Verifies a ClientBatchSubmitResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchSubmitResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchSubmitResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchSubmitResponse;

    /**
     * Creates a plain object from a ClientBatchSubmitResponse message. Also converts values to other types if specified.
     * @param message ClientBatchSubmitResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchSubmitResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchSubmitResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBatchSubmitResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        INVALID_BATCH = 3,
        QUEUE_FULL = 4,
    }
}

/** Properties of a ClientBatchStatusRequest. */
export interface IClientBatchStatusRequest {
    /** ClientBatchStatusRequest batchIds */
    batchIds?: string[] | null;

    /** ClientBatchStatusRequest wait */
    wait?: boolean | null;

    /** ClientBatchStatusRequest timeout */
    timeout?: number | null;
}

/** Represents a ClientBatchStatusRequest. */
export class ClientBatchStatusRequest implements IClientBatchStatusRequest {
    /**
     * Constructs a new ClientBatchStatusRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchStatusRequest);

    /** ClientBatchStatusRequest batchIds. */
    public batchIds: string[];

    /** ClientBatchStatusRequest wait. */
    public wait: boolean;

    /** ClientBatchStatusRequest timeout. */
    public timeout: number;

    /**
     * Creates a new ClientBatchStatusRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchStatusRequest instance
     */
    public static create(properties?: IClientBatchStatusRequest): ClientBatchStatusRequest;

    /**
     * Encodes the specified ClientBatchStatusRequest message. Does not implicitly {@link ClientBatchStatusRequest.verify|verify} messages.
     * @param message ClientBatchStatusRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchStatusRequest message, length delimited. Does not implicitly {@link ClientBatchStatusRequest.verify|verify} messages.
     * @param message ClientBatchStatusRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchStatusRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchStatusRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchStatusRequest;

    /**
     * Decodes a ClientBatchStatusRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchStatusRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchStatusRequest;

    /**
     * Verifies a ClientBatchStatusRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchStatusRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchStatusRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchStatusRequest;

    /**
     * Creates a plain object from a ClientBatchStatusRequest message. Also converts values to other types if specified.
     * @param message ClientBatchStatusRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchStatusRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchStatusRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBatchStatusResponse. */
export interface IClientBatchStatusResponse {
    /** ClientBatchStatusResponse status */
    status?: ClientBatchStatusResponse.Status | null;

    /** ClientBatchStatusResponse batchStatuses */
    batchStatuses?: IClientBatchStatus[] | null;
}

/** Represents a ClientBatchStatusResponse. */
export class ClientBatchStatusResponse implements IClientBatchStatusResponse {
    /**
     * Constructs a new ClientBatchStatusResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBatchStatusResponse);

    /** ClientBatchStatusResponse status. */
    public status: ClientBatchStatusResponse.Status;

    /** ClientBatchStatusResponse batchStatuses. */
    public batchStatuses: IClientBatchStatus[];

    /**
     * Creates a new ClientBatchStatusResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBatchStatusResponse instance
     */
    public static create(properties?: IClientBatchStatusResponse): ClientBatchStatusResponse;

    /**
     * Encodes the specified ClientBatchStatusResponse message. Does not implicitly {@link ClientBatchStatusResponse.verify|verify} messages.
     * @param message ClientBatchStatusResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBatchStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBatchStatusResponse message, length delimited. Does not implicitly {@link ClientBatchStatusResponse.verify|verify} messages.
     * @param message ClientBatchStatusResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBatchStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBatchStatusResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBatchStatusResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBatchStatusResponse;

    /**
     * Decodes a ClientBatchStatusResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBatchStatusResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBatchStatusResponse;

    /**
     * Verifies a ClientBatchStatusResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBatchStatusResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBatchStatusResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientBatchStatusResponse;

    /**
     * Creates a plain object from a ClientBatchStatusResponse message. Also converts values to other types if specified.
     * @param message ClientBatchStatusResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBatchStatusResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBatchStatusResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBatchStatusResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NO_RESOURCE = 5,
        INVALID_ID = 8,
    }
}

/** Properties of a ClientBlockListRequest. */
export interface IClientBlockListRequest {
    /** ClientBlockListRequest headId */
    headId?: string | null;

    /** ClientBlockListRequest blockIds */
    blockIds?: string[] | null;

    /** ClientBlockListRequest paging */
    paging?: IClientPagingControls | null;

    /** ClientBlockListRequest sorting */
    sorting?: IClientSortControls[] | null;
}

/** Represents a ClientBlockListRequest. */
export class ClientBlockListRequest implements IClientBlockListRequest {
    /**
     * Constructs a new ClientBlockListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockListRequest);

    /** ClientBlockListRequest headId. */
    public headId: string;

    /** ClientBlockListRequest blockIds. */
    public blockIds: string[];

    /** ClientBlockListRequest paging. */
    public paging?: IClientPagingControls | null;

    /** ClientBlockListRequest sorting. */
    public sorting: IClientSortControls[];

    /**
     * Creates a new ClientBlockListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockListRequest instance
     */
    public static create(properties?: IClientBlockListRequest): ClientBlockListRequest;

    /**
     * Encodes the specified ClientBlockListRequest message. Does not implicitly {@link ClientBlockListRequest.verify|verify} messages.
     * @param message ClientBlockListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockListRequest message, length delimited. Does not implicitly {@link ClientBlockListRequest.verify|verify} messages.
     * @param message ClientBlockListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBlockListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBlockListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockListRequest;

    /**
     * Decodes a ClientBlockListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockListRequest;

    /**
     * Verifies a ClientBlockListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockListRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockListRequest;

    /**
     * Creates a plain object from a ClientBlockListRequest message. Also converts values to other types if specified.
     * @param message ClientBlockListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockListRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBlockListResponse. */
export interface IClientBlockListResponse {
    /** ClientBlockListResponse status */
    status?: ClientBlockListResponse.Status | null;

    /** ClientBlockListResponse blocks */
    blocks?: IBlock[] | null;

    /** ClientBlockListResponse headId */
    headId?: string | null;

    /** ClientBlockListResponse paging */
    paging?: IClientPagingResponse | null;
}

/** Represents a ClientBlockListResponse. */
export class ClientBlockListResponse implements IClientBlockListResponse {
    /**
     * Constructs a new ClientBlockListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockListResponse);

    /** ClientBlockListResponse status. */
    public status: ClientBlockListResponse.Status;

    /** ClientBlockListResponse blocks. */
    public blocks: IBlock[];

    /** ClientBlockListResponse headId. */
    public headId: string;

    /** ClientBlockListResponse paging. */
    public paging?: IClientPagingResponse | null;

    /**
     * Creates a new ClientBlockListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockListResponse instance
     */
    public static create(properties?: IClientBlockListResponse): ClientBlockListResponse;

    /**
     * Encodes the specified ClientBlockListResponse message. Does not implicitly {@link ClientBlockListResponse.verify|verify} messages.
     * @param message ClientBlockListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockListResponse message, length delimited. Does not implicitly {@link ClientBlockListResponse.verify|verify} messages.
     * @param message ClientBlockListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBlockListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBlockListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockListResponse;

    /**
     * Decodes a ClientBlockListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockListResponse;

    /**
     * Verifies a ClientBlockListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockListResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockListResponse;

    /**
     * Creates a plain object from a ClientBlockListResponse message. Also converts values to other types if specified.
     * @param message ClientBlockListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockListResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBlockListResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NOT_READY = 3,
        NO_ROOT = 4,
        NO_RESOURCE = 5,
        INVALID_PAGING = 6,
        INVALID_SORT = 7,
        INVALID_ID = 8,
    }
}

/** Properties of a ClientBlockGetByIdRequest. */
export interface IClientBlockGetByIdRequest {
    /** ClientBlockGetByIdRequest blockId */
    blockId?: string | null;
}

/** Represents a ClientBlockGetByIdRequest. */
export class ClientBlockGetByIdRequest implements IClientBlockGetByIdRequest {
    /**
     * Constructs a new ClientBlockGetByIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockGetByIdRequest);

    /** ClientBlockGetByIdRequest blockId. */
    public blockId: string;

    /**
     * Creates a new ClientBlockGetByIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockGetByIdRequest instance
     */
    public static create(properties?: IClientBlockGetByIdRequest): ClientBlockGetByIdRequest;

    /**
     * Encodes the specified ClientBlockGetByIdRequest message. Does not implicitly {@link ClientBlockGetByIdRequest.verify|verify} messages.
     * @param message ClientBlockGetByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockGetByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockGetByIdRequest message, length delimited. Does not implicitly {@link ClientBlockGetByIdRequest.verify|verify} messages.
     * @param message ClientBlockGetByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBlockGetByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBlockGetByIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockGetByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockGetByIdRequest;

    /**
     * Decodes a ClientBlockGetByIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockGetByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockGetByIdRequest;

    /**
     * Verifies a ClientBlockGetByIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockGetByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockGetByIdRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockGetByIdRequest;

    /**
     * Creates a plain object from a ClientBlockGetByIdRequest message. Also converts values to other types if specified.
     * @param message ClientBlockGetByIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockGetByIdRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockGetByIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBlockGetByNumRequest. */
export interface IClientBlockGetByNumRequest {
    /** ClientBlockGetByNumRequest blockNum */
    blockNum?: number | Long | null;
}

/** Represents a ClientBlockGetByNumRequest. */
export class ClientBlockGetByNumRequest implements IClientBlockGetByNumRequest {
    /**
     * Constructs a new ClientBlockGetByNumRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockGetByNumRequest);

    /** ClientBlockGetByNumRequest blockNum. */
    public blockNum: number | Long;

    /**
     * Creates a new ClientBlockGetByNumRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockGetByNumRequest instance
     */
    public static create(properties?: IClientBlockGetByNumRequest): ClientBlockGetByNumRequest;

    /**
     * Encodes the specified ClientBlockGetByNumRequest message. Does not implicitly {@link ClientBlockGetByNumRequest.verify|verify} messages.
     * @param message ClientBlockGetByNumRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockGetByNumRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockGetByNumRequest message, length delimited. Does not implicitly {@link ClientBlockGetByNumRequest.verify|verify} messages.
     * @param message ClientBlockGetByNumRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBlockGetByNumRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBlockGetByNumRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockGetByNumRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockGetByNumRequest;

    /**
     * Decodes a ClientBlockGetByNumRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockGetByNumRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockGetByNumRequest;

    /**
     * Verifies a ClientBlockGetByNumRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockGetByNumRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockGetByNumRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockGetByNumRequest;

    /**
     * Creates a plain object from a ClientBlockGetByNumRequest message. Also converts values to other types if specified.
     * @param message ClientBlockGetByNumRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockGetByNumRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockGetByNumRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBlockGetByTransactionIdRequest. */
export interface IClientBlockGetByTransactionIdRequest {
    /** ClientBlockGetByTransactionIdRequest transactionId */
    transactionId?: string | null;
}

/** Represents a ClientBlockGetByTransactionIdRequest. */
export class ClientBlockGetByTransactionIdRequest implements IClientBlockGetByTransactionIdRequest {
    /**
     * Constructs a new ClientBlockGetByTransactionIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockGetByTransactionIdRequest);

    /** ClientBlockGetByTransactionIdRequest transactionId. */
    public transactionId: string;

    /**
     * Creates a new ClientBlockGetByTransactionIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockGetByTransactionIdRequest instance
     */
    public static create(properties?: IClientBlockGetByTransactionIdRequest): ClientBlockGetByTransactionIdRequest;

    /**
     * Encodes the specified ClientBlockGetByTransactionIdRequest message. Does not implicitly {@link ClientBlockGetByTransactionIdRequest.verify|verify} messages.
     * @param message ClientBlockGetByTransactionIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockGetByTransactionIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockGetByTransactionIdRequest message, length delimited. Does not implicitly {@link ClientBlockGetByTransactionIdRequest.verify|verify} messages.
     * @param message ClientBlockGetByTransactionIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IClientBlockGetByTransactionIdRequest,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ClientBlockGetByTransactionIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockGetByTransactionIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockGetByTransactionIdRequest;

    /**
     * Decodes a ClientBlockGetByTransactionIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockGetByTransactionIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockGetByTransactionIdRequest;

    /**
     * Verifies a ClientBlockGetByTransactionIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockGetByTransactionIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockGetByTransactionIdRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockGetByTransactionIdRequest;

    /**
     * Creates a plain object from a ClientBlockGetByTransactionIdRequest message. Also converts values to other types if specified.
     * @param message ClientBlockGetByTransactionIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockGetByTransactionIdRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockGetByTransactionIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBlockGetByBatchIdRequest. */
export interface IClientBlockGetByBatchIdRequest {
    /** ClientBlockGetByBatchIdRequest batchId */
    batchId?: string | null;
}

/** Represents a ClientBlockGetByBatchIdRequest. */
export class ClientBlockGetByBatchIdRequest implements IClientBlockGetByBatchIdRequest {
    /**
     * Constructs a new ClientBlockGetByBatchIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockGetByBatchIdRequest);

    /** ClientBlockGetByBatchIdRequest batchId. */
    public batchId: string;

    /**
     * Creates a new ClientBlockGetByBatchIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockGetByBatchIdRequest instance
     */
    public static create(properties?: IClientBlockGetByBatchIdRequest): ClientBlockGetByBatchIdRequest;

    /**
     * Encodes the specified ClientBlockGetByBatchIdRequest message. Does not implicitly {@link ClientBlockGetByBatchIdRequest.verify|verify} messages.
     * @param message ClientBlockGetByBatchIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockGetByBatchIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockGetByBatchIdRequest message, length delimited. Does not implicitly {@link ClientBlockGetByBatchIdRequest.verify|verify} messages.
     * @param message ClientBlockGetByBatchIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IClientBlockGetByBatchIdRequest,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ClientBlockGetByBatchIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockGetByBatchIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockGetByBatchIdRequest;

    /**
     * Decodes a ClientBlockGetByBatchIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockGetByBatchIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockGetByBatchIdRequest;

    /**
     * Verifies a ClientBlockGetByBatchIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockGetByBatchIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockGetByBatchIdRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockGetByBatchIdRequest;

    /**
     * Creates a plain object from a ClientBlockGetByBatchIdRequest message. Also converts values to other types if specified.
     * @param message ClientBlockGetByBatchIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockGetByBatchIdRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockGetByBatchIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientBlockGetResponse. */
export interface IClientBlockGetResponse {
    /** ClientBlockGetResponse status */
    status?: ClientBlockGetResponse.Status | null;

    /** ClientBlockGetResponse block */
    block?: IBlock | null;
}

/** Represents a ClientBlockGetResponse. */
export class ClientBlockGetResponse implements IClientBlockGetResponse {
    /**
     * Constructs a new ClientBlockGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientBlockGetResponse);

    /** ClientBlockGetResponse status. */
    public status: ClientBlockGetResponse.Status;

    /** ClientBlockGetResponse block. */
    public block?: IBlock | null;

    /**
     * Creates a new ClientBlockGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientBlockGetResponse instance
     */
    public static create(properties?: IClientBlockGetResponse): ClientBlockGetResponse;

    /**
     * Encodes the specified ClientBlockGetResponse message. Does not implicitly {@link ClientBlockGetResponse.verify|verify} messages.
     * @param message ClientBlockGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientBlockGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientBlockGetResponse message, length delimited. Does not implicitly {@link ClientBlockGetResponse.verify|verify} messages.
     * @param message ClientBlockGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientBlockGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientBlockGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientBlockGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientBlockGetResponse;

    /**
     * Decodes a ClientBlockGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientBlockGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientBlockGetResponse;

    /**
     * Verifies a ClientBlockGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientBlockGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientBlockGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientBlockGetResponse;

    /**
     * Creates a plain object from a ClientBlockGetResponse message. Also converts values to other types if specified.
     * @param message ClientBlockGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientBlockGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientBlockGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientBlockGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NO_RESOURCE = 5,
        INVALID_ID = 8,
    }
}

/** Properties of a ClientEventsSubscribeRequest. */
export interface IClientEventsSubscribeRequest {
    /** ClientEventsSubscribeRequest subscriptions */
    subscriptions?: IEventSubscription[] | null;

    /** ClientEventsSubscribeRequest lastKnownBlockIds */
    lastKnownBlockIds?: string[] | null;
}

/** Represents a ClientEventsSubscribeRequest. */
export class ClientEventsSubscribeRequest implements IClientEventsSubscribeRequest {
    /**
     * Constructs a new ClientEventsSubscribeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientEventsSubscribeRequest);

    /** ClientEventsSubscribeRequest subscriptions. */
    public subscriptions: IEventSubscription[];

    /** ClientEventsSubscribeRequest lastKnownBlockIds. */
    public lastKnownBlockIds: string[];

    /**
     * Creates a new ClientEventsSubscribeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientEventsSubscribeRequest instance
     */
    public static create(properties?: IClientEventsSubscribeRequest): ClientEventsSubscribeRequest;

    /**
     * Encodes the specified ClientEventsSubscribeRequest message. Does not implicitly {@link ClientEventsSubscribeRequest.verify|verify} messages.
     * @param message ClientEventsSubscribeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientEventsSubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientEventsSubscribeRequest message, length delimited. Does not implicitly {@link ClientEventsSubscribeRequest.verify|verify} messages.
     * @param message ClientEventsSubscribeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientEventsSubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientEventsSubscribeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientEventsSubscribeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientEventsSubscribeRequest;

    /**
     * Decodes a ClientEventsSubscribeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientEventsSubscribeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientEventsSubscribeRequest;

    /**
     * Verifies a ClientEventsSubscribeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientEventsSubscribeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientEventsSubscribeRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientEventsSubscribeRequest;

    /**
     * Creates a plain object from a ClientEventsSubscribeRequest message. Also converts values to other types if specified.
     * @param message ClientEventsSubscribeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientEventsSubscribeRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientEventsSubscribeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientEventsSubscribeResponse. */
export interface IClientEventsSubscribeResponse {
    /** ClientEventsSubscribeResponse status */
    status?: ClientEventsSubscribeResponse.Status | null;

    /** ClientEventsSubscribeResponse responseMessage */
    responseMessage?: string | null;
}

/** Represents a ClientEventsSubscribeResponse. */
export class ClientEventsSubscribeResponse implements IClientEventsSubscribeResponse {
    /**
     * Constructs a new ClientEventsSubscribeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientEventsSubscribeResponse);

    /** ClientEventsSubscribeResponse status. */
    public status: ClientEventsSubscribeResponse.Status;

    /** ClientEventsSubscribeResponse responseMessage. */
    public responseMessage: string;

    /**
     * Creates a new ClientEventsSubscribeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientEventsSubscribeResponse instance
     */
    public static create(properties?: IClientEventsSubscribeResponse): ClientEventsSubscribeResponse;

    /**
     * Encodes the specified ClientEventsSubscribeResponse message. Does not implicitly {@link ClientEventsSubscribeResponse.verify|verify} messages.
     * @param message ClientEventsSubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientEventsSubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientEventsSubscribeResponse message, length delimited. Does not implicitly {@link ClientEventsSubscribeResponse.verify|verify} messages.
     * @param message ClientEventsSubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientEventsSubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientEventsSubscribeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientEventsSubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientEventsSubscribeResponse;

    /**
     * Decodes a ClientEventsSubscribeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientEventsSubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientEventsSubscribeResponse;

    /**
     * Verifies a ClientEventsSubscribeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientEventsSubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientEventsSubscribeResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientEventsSubscribeResponse;

    /**
     * Creates a plain object from a ClientEventsSubscribeResponse message. Also converts values to other types if specified.
     * @param message ClientEventsSubscribeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientEventsSubscribeResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientEventsSubscribeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientEventsSubscribeResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INVALID_FILTER = 2,
        UNKNOWN_BLOCK = 3,
    }
}

/** Properties of a ClientEventsUnsubscribeRequest. */
export interface IClientEventsUnsubscribeRequest {}

/** Represents a ClientEventsUnsubscribeRequest. */
export class ClientEventsUnsubscribeRequest implements IClientEventsUnsubscribeRequest {
    /**
     * Constructs a new ClientEventsUnsubscribeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientEventsUnsubscribeRequest);

    /**
     * Creates a new ClientEventsUnsubscribeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientEventsUnsubscribeRequest instance
     */
    public static create(properties?: IClientEventsUnsubscribeRequest): ClientEventsUnsubscribeRequest;

    /**
     * Encodes the specified ClientEventsUnsubscribeRequest message. Does not implicitly {@link ClientEventsUnsubscribeRequest.verify|verify} messages.
     * @param message ClientEventsUnsubscribeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientEventsUnsubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientEventsUnsubscribeRequest message, length delimited. Does not implicitly {@link ClientEventsUnsubscribeRequest.verify|verify} messages.
     * @param message ClientEventsUnsubscribeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IClientEventsUnsubscribeRequest,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ClientEventsUnsubscribeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientEventsUnsubscribeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientEventsUnsubscribeRequest;

    /**
     * Decodes a ClientEventsUnsubscribeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientEventsUnsubscribeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientEventsUnsubscribeRequest;

    /**
     * Verifies a ClientEventsUnsubscribeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientEventsUnsubscribeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientEventsUnsubscribeRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientEventsUnsubscribeRequest;

    /**
     * Creates a plain object from a ClientEventsUnsubscribeRequest message. Also converts values to other types if specified.
     * @param message ClientEventsUnsubscribeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientEventsUnsubscribeRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientEventsUnsubscribeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientEventsUnsubscribeResponse. */
export interface IClientEventsUnsubscribeResponse {
    /** ClientEventsUnsubscribeResponse status */
    status?: ClientEventsUnsubscribeResponse.Status | null;
}

/** Represents a ClientEventsUnsubscribeResponse. */
export class ClientEventsUnsubscribeResponse implements IClientEventsUnsubscribeResponse {
    /**
     * Constructs a new ClientEventsUnsubscribeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientEventsUnsubscribeResponse);

    /** ClientEventsUnsubscribeResponse status. */
    public status: ClientEventsUnsubscribeResponse.Status;

    /**
     * Creates a new ClientEventsUnsubscribeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientEventsUnsubscribeResponse instance
     */
    public static create(properties?: IClientEventsUnsubscribeResponse): ClientEventsUnsubscribeResponse;

    /**
     * Encodes the specified ClientEventsUnsubscribeResponse message. Does not implicitly {@link ClientEventsUnsubscribeResponse.verify|verify} messages.
     * @param message ClientEventsUnsubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientEventsUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientEventsUnsubscribeResponse message, length delimited. Does not implicitly {@link ClientEventsUnsubscribeResponse.verify|verify} messages.
     * @param message ClientEventsUnsubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IClientEventsUnsubscribeResponse,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ClientEventsUnsubscribeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientEventsUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientEventsUnsubscribeResponse;

    /**
     * Decodes a ClientEventsUnsubscribeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientEventsUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientEventsUnsubscribeResponse;

    /**
     * Verifies a ClientEventsUnsubscribeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientEventsUnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientEventsUnsubscribeResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientEventsUnsubscribeResponse;

    /**
     * Creates a plain object from a ClientEventsUnsubscribeResponse message. Also converts values to other types if specified.
     * @param message ClientEventsUnsubscribeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientEventsUnsubscribeResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientEventsUnsubscribeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientEventsUnsubscribeResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
    }
}

/** Properties of a ClientEventsGetRequest. */
export interface IClientEventsGetRequest {
    /** ClientEventsGetRequest subscriptions */
    subscriptions?: IEventSubscription[] | null;

    /** ClientEventsGetRequest blockIds */
    blockIds?: string[] | null;
}

/** Represents a ClientEventsGetRequest. */
export class ClientEventsGetRequest implements IClientEventsGetRequest {
    /**
     * Constructs a new ClientEventsGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientEventsGetRequest);

    /** ClientEventsGetRequest subscriptions. */
    public subscriptions: IEventSubscription[];

    /** ClientEventsGetRequest blockIds. */
    public blockIds: string[];

    /**
     * Creates a new ClientEventsGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientEventsGetRequest instance
     */
    public static create(properties?: IClientEventsGetRequest): ClientEventsGetRequest;

    /**
     * Encodes the specified ClientEventsGetRequest message. Does not implicitly {@link ClientEventsGetRequest.verify|verify} messages.
     * @param message ClientEventsGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientEventsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientEventsGetRequest message, length delimited. Does not implicitly {@link ClientEventsGetRequest.verify|verify} messages.
     * @param message ClientEventsGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientEventsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientEventsGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientEventsGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientEventsGetRequest;

    /**
     * Decodes a ClientEventsGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientEventsGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientEventsGetRequest;

    /**
     * Verifies a ClientEventsGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientEventsGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientEventsGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientEventsGetRequest;

    /**
     * Creates a plain object from a ClientEventsGetRequest message. Also converts values to other types if specified.
     * @param message ClientEventsGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientEventsGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientEventsGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientEventsGetResponse. */
export interface IClientEventsGetResponse {
    /** ClientEventsGetResponse status */
    status?: ClientEventsGetResponse.Status | null;

    /** ClientEventsGetResponse events */
    events?: IEvent[] | null;
}

/** Represents a ClientEventsGetResponse. */
export class ClientEventsGetResponse implements IClientEventsGetResponse {
    /**
     * Constructs a new ClientEventsGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientEventsGetResponse);

    /** ClientEventsGetResponse status. */
    public status: ClientEventsGetResponse.Status;

    /** ClientEventsGetResponse events. */
    public events: IEvent[];

    /**
     * Creates a new ClientEventsGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientEventsGetResponse instance
     */
    public static create(properties?: IClientEventsGetResponse): ClientEventsGetResponse;

    /**
     * Encodes the specified ClientEventsGetResponse message. Does not implicitly {@link ClientEventsGetResponse.verify|verify} messages.
     * @param message ClientEventsGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientEventsGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientEventsGetResponse message, length delimited. Does not implicitly {@link ClientEventsGetResponse.verify|verify} messages.
     * @param message ClientEventsGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientEventsGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientEventsGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientEventsGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientEventsGetResponse;

    /**
     * Decodes a ClientEventsGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientEventsGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientEventsGetResponse;

    /**
     * Verifies a ClientEventsGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientEventsGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientEventsGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientEventsGetResponse;

    /**
     * Creates a plain object from a ClientEventsGetResponse message. Also converts values to other types if specified.
     * @param message ClientEventsGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientEventsGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientEventsGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientEventsGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        INVALID_FILTER = 3,
        UNKNOWN_BLOCK = 4,
    }
}

/** Properties of an Event. */
export interface IEvent {
    /** Event eventType */
    eventType?: string | null;

    /** Event attributes */
    attributes?: Event.IAttribute[] | null;

    /** Event data */
    data?: Uint8Array | null;
}

/** Represents an Event. */
export class Event implements IEvent {
    /**
     * Constructs a new Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEvent);

    /** Event eventType. */
    public eventType: string;

    /** Event attributes. */
    public attributes: Event.IAttribute[];

    /** Event data. */
    public data: Uint8Array;

    /**
     * Creates a new Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Event instance
     */
    public static create(properties?: IEvent): Event;

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Event;

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Event;

    /**
     * Verifies an Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Event
     */
    public static fromObject(object: { [k: string]: any }): Event;

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @param message Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Event {
    /** Properties of an Attribute. */
    interface IAttribute {
        /** Attribute key */
        key?: string | null;

        /** Attribute value */
        value?: string | null;
    }

    /** Represents an Attribute. */
    class Attribute implements IAttribute {
        /**
         * Constructs a new Attribute.
         * @param [properties] Properties to set
         */
        constructor(properties?: Event.IAttribute);

        /** Attribute key. */
        public key: string;

        /** Attribute value. */
        public value: string;

        /**
         * Creates a new Attribute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attribute instance
         */
        public static create(properties?: Event.IAttribute): Event.Attribute;

        /**
         * Encodes the specified Attribute message. Does not implicitly {@link Event.Attribute.verify|verify} messages.
         * @param message Attribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Event.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attribute message, length delimited. Does not implicitly {@link Event.Attribute.verify|verify} messages.
         * @param message Attribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Event.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attribute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Event.Attribute;

        /**
         * Decodes an Attribute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Event.Attribute;

        /**
         * Verifies an Attribute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attribute
         */
        public static fromObject(object: { [k: string]: any }): Event.Attribute;

        /**
         * Creates a plain object from an Attribute message. Also converts values to other types if specified.
         * @param message Attribute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Event.Attribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attribute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an EventList. */
export interface IEventList {
    /** EventList events */
    events?: IEvent[] | null;
}

/** Represents an EventList. */
export class EventList implements IEventList {
    /**
     * Constructs a new EventList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventList);

    /** EventList events. */
    public events: IEvent[];

    /**
     * Creates a new EventList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventList instance
     */
    public static create(properties?: IEventList): EventList;

    /**
     * Encodes the specified EventList message. Does not implicitly {@link EventList.verify|verify} messages.
     * @param message EventList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventList message, length delimited. Does not implicitly {@link EventList.verify|verify} messages.
     * @param message EventList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): EventList;

    /**
     * Decodes an EventList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EventList;

    /**
     * Verifies an EventList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EventList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventList
     */
    public static fromObject(object: { [k: string]: any }): EventList;

    /**
     * Creates a plain object from an EventList message. Also converts values to other types if specified.
     * @param message EventList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EventFilter. */
export interface IEventFilter {
    /** EventFilter key */
    key?: string | null;

    /** EventFilter matchString */
    matchString?: string | null;

    /** EventFilter filterType */
    filterType?: EventFilter.FilterType | null;
}

/** Represents an EventFilter. */
export class EventFilter implements IEventFilter {
    /**
     * Constructs a new EventFilter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventFilter);

    /** EventFilter key. */
    public key: string;

    /** EventFilter matchString. */
    public matchString: string;

    /** EventFilter filterType. */
    public filterType: EventFilter.FilterType;

    /**
     * Creates a new EventFilter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventFilter instance
     */
    public static create(properties?: IEventFilter): EventFilter;

    /**
     * Encodes the specified EventFilter message. Does not implicitly {@link EventFilter.verify|verify} messages.
     * @param message EventFilter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventFilter message, length delimited. Does not implicitly {@link EventFilter.verify|verify} messages.
     * @param message EventFilter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventFilter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventFilter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): EventFilter;

    /**
     * Decodes an EventFilter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventFilter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EventFilter;

    /**
     * Verifies an EventFilter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EventFilter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventFilter
     */
    public static fromObject(object: { [k: string]: any }): EventFilter;

    /**
     * Creates a plain object from an EventFilter message. Also converts values to other types if specified.
     * @param message EventFilter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventFilter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace EventFilter {
    /** FilterType enum. */
    enum FilterType {
        FILTER_TYPE_UNSET = 0,
        SIMPLE_ANY = 1,
        SIMPLE_ALL = 2,
        REGEX_ANY = 3,
        REGEX_ALL = 4,
    }
}

/** Properties of an EventSubscription. */
export interface IEventSubscription {
    /** EventSubscription eventType */
    eventType?: string | null;

    /** EventSubscription filters */
    filters?: IEventFilter[] | null;
}

/** Represents an EventSubscription. */
export class EventSubscription implements IEventSubscription {
    /**
     * Constructs a new EventSubscription.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventSubscription);

    /** EventSubscription eventType. */
    public eventType: string;

    /** EventSubscription filters. */
    public filters: IEventFilter[];

    /**
     * Creates a new EventSubscription instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventSubscription instance
     */
    public static create(properties?: IEventSubscription): EventSubscription;

    /**
     * Encodes the specified EventSubscription message. Does not implicitly {@link EventSubscription.verify|verify} messages.
     * @param message EventSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventSubscription message, length delimited. Does not implicitly {@link EventSubscription.verify|verify} messages.
     * @param message EventSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventSubscription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): EventSubscription;

    /**
     * Decodes an EventSubscription message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EventSubscription;

    /**
     * Verifies an EventSubscription message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EventSubscription message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventSubscription
     */
    public static fromObject(object: { [k: string]: any }): EventSubscription;

    /**
     * Creates a plain object from an EventSubscription message. Also converts values to other types if specified.
     * @param message EventSubscription
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventSubscription to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientPeersGetRequest. */
export interface IClientPeersGetRequest {}

/** Represents a ClientPeersGetRequest. */
export class ClientPeersGetRequest implements IClientPeersGetRequest {
    /**
     * Constructs a new ClientPeersGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientPeersGetRequest);

    /**
     * Creates a new ClientPeersGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientPeersGetRequest instance
     */
    public static create(properties?: IClientPeersGetRequest): ClientPeersGetRequest;

    /**
     * Encodes the specified ClientPeersGetRequest message. Does not implicitly {@link ClientPeersGetRequest.verify|verify} messages.
     * @param message ClientPeersGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientPeersGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientPeersGetRequest message, length delimited. Does not implicitly {@link ClientPeersGetRequest.verify|verify} messages.
     * @param message ClientPeersGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientPeersGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientPeersGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientPeersGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientPeersGetRequest;

    /**
     * Decodes a ClientPeersGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientPeersGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientPeersGetRequest;

    /**
     * Verifies a ClientPeersGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientPeersGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientPeersGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientPeersGetRequest;

    /**
     * Creates a plain object from a ClientPeersGetRequest message. Also converts values to other types if specified.
     * @param message ClientPeersGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientPeersGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientPeersGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientPeersGetResponse. */
export interface IClientPeersGetResponse {
    /** ClientPeersGetResponse status */
    status?: ClientPeersGetResponse.Status | null;

    /** ClientPeersGetResponse peers */
    peers?: string[] | null;
}

/** Represents a ClientPeersGetResponse. */
export class ClientPeersGetResponse implements IClientPeersGetResponse {
    /**
     * Constructs a new ClientPeersGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientPeersGetResponse);

    /** ClientPeersGetResponse status. */
    public status: ClientPeersGetResponse.Status;

    /** ClientPeersGetResponse peers. */
    public peers: string[];

    /**
     * Creates a new ClientPeersGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientPeersGetResponse instance
     */
    public static create(properties?: IClientPeersGetResponse): ClientPeersGetResponse;

    /**
     * Encodes the specified ClientPeersGetResponse message. Does not implicitly {@link ClientPeersGetResponse.verify|verify} messages.
     * @param message ClientPeersGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientPeersGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientPeersGetResponse message, length delimited. Does not implicitly {@link ClientPeersGetResponse.verify|verify} messages.
     * @param message ClientPeersGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientPeersGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientPeersGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientPeersGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientPeersGetResponse;

    /**
     * Decodes a ClientPeersGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientPeersGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientPeersGetResponse;

    /**
     * Verifies a ClientPeersGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientPeersGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientPeersGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientPeersGetResponse;

    /**
     * Creates a plain object from a ClientPeersGetResponse message. Also converts values to other types if specified.
     * @param message ClientPeersGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientPeersGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientPeersGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientPeersGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }
}

/** Properties of a ClientReceiptGetRequest. */
export interface IClientReceiptGetRequest {
    /** ClientReceiptGetRequest transactionIds */
    transactionIds?: string[] | null;
}

/** Represents a ClientReceiptGetRequest. */
export class ClientReceiptGetRequest implements IClientReceiptGetRequest {
    /**
     * Constructs a new ClientReceiptGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientReceiptGetRequest);

    /** ClientReceiptGetRequest transactionIds. */
    public transactionIds: string[];

    /**
     * Creates a new ClientReceiptGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientReceiptGetRequest instance
     */
    public static create(properties?: IClientReceiptGetRequest): ClientReceiptGetRequest;

    /**
     * Encodes the specified ClientReceiptGetRequest message. Does not implicitly {@link ClientReceiptGetRequest.verify|verify} messages.
     * @param message ClientReceiptGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientReceiptGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientReceiptGetRequest message, length delimited. Does not implicitly {@link ClientReceiptGetRequest.verify|verify} messages.
     * @param message ClientReceiptGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientReceiptGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientReceiptGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientReceiptGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientReceiptGetRequest;

    /**
     * Decodes a ClientReceiptGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientReceiptGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientReceiptGetRequest;

    /**
     * Verifies a ClientReceiptGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientReceiptGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientReceiptGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientReceiptGetRequest;

    /**
     * Creates a plain object from a ClientReceiptGetRequest message. Also converts values to other types if specified.
     * @param message ClientReceiptGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientReceiptGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientReceiptGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientReceiptGetResponse. */
export interface IClientReceiptGetResponse {
    /** ClientReceiptGetResponse status */
    status?: ClientReceiptGetResponse.Status | null;

    /** ClientReceiptGetResponse receipts */
    receipts?: ITransactionReceipt[] | null;
}

/** Represents a ClientReceiptGetResponse. */
export class ClientReceiptGetResponse implements IClientReceiptGetResponse {
    /**
     * Constructs a new ClientReceiptGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientReceiptGetResponse);

    /** ClientReceiptGetResponse status. */
    public status: ClientReceiptGetResponse.Status;

    /** ClientReceiptGetResponse receipts. */
    public receipts: ITransactionReceipt[];

    /**
     * Creates a new ClientReceiptGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientReceiptGetResponse instance
     */
    public static create(properties?: IClientReceiptGetResponse): ClientReceiptGetResponse;

    /**
     * Encodes the specified ClientReceiptGetResponse message. Does not implicitly {@link ClientReceiptGetResponse.verify|verify} messages.
     * @param message ClientReceiptGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientReceiptGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientReceiptGetResponse message, length delimited. Does not implicitly {@link ClientReceiptGetResponse.verify|verify} messages.
     * @param message ClientReceiptGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientReceiptGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientReceiptGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientReceiptGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientReceiptGetResponse;

    /**
     * Decodes a ClientReceiptGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientReceiptGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientReceiptGetResponse;

    /**
     * Verifies a ClientReceiptGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientReceiptGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientReceiptGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientReceiptGetResponse;

    /**
     * Creates a plain object from a ClientReceiptGetResponse message. Also converts values to other types if specified.
     * @param message ClientReceiptGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientReceiptGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientReceiptGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientReceiptGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NO_RESOURCE = 5,
        INVALID_ID = 8,
    }
}

/** Properties of a TransactionReceipt. */
export interface ITransactionReceipt {
    /** TransactionReceipt stateChanges */
    stateChanges?: IStateChange[] | null;

    /** TransactionReceipt events */
    events?: IEvent[] | null;

    /** TransactionReceipt data */
    data?: Uint8Array[] | null;

    /** TransactionReceipt transactionId */
    transactionId?: string | null;
}

/** Represents a TransactionReceipt. */
export class TransactionReceipt implements ITransactionReceipt {
    /**
     * Constructs a new TransactionReceipt.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionReceipt);

    /** TransactionReceipt stateChanges. */
    public stateChanges: IStateChange[];

    /** TransactionReceipt events. */
    public events: IEvent[];

    /** TransactionReceipt data. */
    public data: Uint8Array[];

    /** TransactionReceipt transactionId. */
    public transactionId: string;

    /**
     * Creates a new TransactionReceipt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionReceipt instance
     */
    public static create(properties?: ITransactionReceipt): TransactionReceipt;

    /**
     * Encodes the specified TransactionReceipt message. Does not implicitly {@link TransactionReceipt.verify|verify} messages.
     * @param message TransactionReceipt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionReceipt message, length delimited. Does not implicitly {@link TransactionReceipt.verify|verify} messages.
     * @param message TransactionReceipt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionReceipt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionReceipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TransactionReceipt;

    /**
     * Decodes a TransactionReceipt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionReceipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TransactionReceipt;

    /**
     * Verifies a TransactionReceipt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TransactionReceipt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionReceipt
     */
    public static fromObject(object: { [k: string]: any }): TransactionReceipt;

    /**
     * Creates a plain object from a TransactionReceipt message. Also converts values to other types if specified.
     * @param message TransactionReceipt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionReceipt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StateChange. */
export interface IStateChange {
    /** StateChange address */
    address?: string | null;

    /** StateChange value */
    value?: Uint8Array | null;

    /** StateChange type */
    type?: StateChange.Type | null;
}

/** Represents a StateChange. */
export class StateChange implements IStateChange {
    /**
     * Constructs a new StateChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStateChange);

    /** StateChange address. */
    public address: string;

    /** StateChange value. */
    public value: Uint8Array;

    /** StateChange type. */
    public type: StateChange.Type;

    /**
     * Creates a new StateChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StateChange instance
     */
    public static create(properties?: IStateChange): StateChange;

    /**
     * Encodes the specified StateChange message. Does not implicitly {@link StateChange.verify|verify} messages.
     * @param message StateChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStateChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StateChange message, length delimited. Does not implicitly {@link StateChange.verify|verify} messages.
     * @param message StateChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStateChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StateChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StateChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): StateChange;

    /**
     * Decodes a StateChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StateChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): StateChange;

    /**
     * Verifies a StateChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a StateChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StateChange
     */
    public static fromObject(object: { [k: string]: any }): StateChange;

    /**
     * Creates a plain object from a StateChange message. Also converts values to other types if specified.
     * @param message StateChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StateChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StateChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace StateChange {
    /** Type enum. */
    enum Type {
        TYPE_UNSET = 0,
        SET = 1,
        DELETE = 2,
    }
}

/** Properties of a StateChangeList. */
export interface IStateChangeList {
    /** StateChangeList stateChanges */
    stateChanges?: IStateChange[] | null;
}

/** Represents a StateChangeList. */
export class StateChangeList implements IStateChangeList {
    /**
     * Constructs a new StateChangeList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStateChangeList);

    /** StateChangeList stateChanges. */
    public stateChanges: IStateChange[];

    /**
     * Creates a new StateChangeList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StateChangeList instance
     */
    public static create(properties?: IStateChangeList): StateChangeList;

    /**
     * Encodes the specified StateChangeList message. Does not implicitly {@link StateChangeList.verify|verify} messages.
     * @param message StateChangeList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStateChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StateChangeList message, length delimited. Does not implicitly {@link StateChangeList.verify|verify} messages.
     * @param message StateChangeList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStateChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StateChangeList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StateChangeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): StateChangeList;

    /**
     * Decodes a StateChangeList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StateChangeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): StateChangeList;

    /**
     * Verifies a StateChangeList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a StateChangeList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StateChangeList
     */
    public static fromObject(object: { [k: string]: any }): StateChangeList;

    /**
     * Creates a plain object from a StateChangeList message. Also converts values to other types if specified.
     * @param message StateChangeList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StateChangeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StateChangeList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientStateListRequest. */
export interface IClientStateListRequest {
    /** ClientStateListRequest stateRoot */
    stateRoot?: string | null;

    /** ClientStateListRequest address */
    address?: string | null;

    /** ClientStateListRequest paging */
    paging?: IClientPagingControls | null;

    /** ClientStateListRequest sorting */
    sorting?: IClientSortControls[] | null;
}

/** Represents a ClientStateListRequest. */
export class ClientStateListRequest implements IClientStateListRequest {
    /**
     * Constructs a new ClientStateListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientStateListRequest);

    /** ClientStateListRequest stateRoot. */
    public stateRoot: string;

    /** ClientStateListRequest address. */
    public address: string;

    /** ClientStateListRequest paging. */
    public paging?: IClientPagingControls | null;

    /** ClientStateListRequest sorting. */
    public sorting: IClientSortControls[];

    /**
     * Creates a new ClientStateListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientStateListRequest instance
     */
    public static create(properties?: IClientStateListRequest): ClientStateListRequest;

    /**
     * Encodes the specified ClientStateListRequest message. Does not implicitly {@link ClientStateListRequest.verify|verify} messages.
     * @param message ClientStateListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientStateListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientStateListRequest message, length delimited. Does not implicitly {@link ClientStateListRequest.verify|verify} messages.
     * @param message ClientStateListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientStateListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientStateListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientStateListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStateListRequest;

    /**
     * Decodes a ClientStateListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientStateListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStateListRequest;

    /**
     * Verifies a ClientStateListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientStateListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientStateListRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientStateListRequest;

    /**
     * Creates a plain object from a ClientStateListRequest message. Also converts values to other types if specified.
     * @param message ClientStateListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientStateListRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientStateListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientStateListResponse. */
export interface IClientStateListResponse {
    /** ClientStateListResponse status */
    status?: ClientStateListResponse.Status | null;

    /** ClientStateListResponse entries */
    entries?: ClientStateListResponse.IEntry[] | null;

    /** ClientStateListResponse stateRoot */
    stateRoot?: string | null;

    /** ClientStateListResponse paging */
    paging?: IClientPagingResponse | null;
}

/** Represents a ClientStateListResponse. */
export class ClientStateListResponse implements IClientStateListResponse {
    /**
     * Constructs a new ClientStateListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientStateListResponse);

    /** ClientStateListResponse status. */
    public status: ClientStateListResponse.Status;

    /** ClientStateListResponse entries. */
    public entries: ClientStateListResponse.IEntry[];

    /** ClientStateListResponse stateRoot. */
    public stateRoot: string;

    /** ClientStateListResponse paging. */
    public paging?: IClientPagingResponse | null;

    /**
     * Creates a new ClientStateListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientStateListResponse instance
     */
    public static create(properties?: IClientStateListResponse): ClientStateListResponse;

    /**
     * Encodes the specified ClientStateListResponse message. Does not implicitly {@link ClientStateListResponse.verify|verify} messages.
     * @param message ClientStateListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientStateListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientStateListResponse message, length delimited. Does not implicitly {@link ClientStateListResponse.verify|verify} messages.
     * @param message ClientStateListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientStateListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientStateListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientStateListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStateListResponse;

    /**
     * Decodes a ClientStateListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientStateListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStateListResponse;

    /**
     * Verifies a ClientStateListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientStateListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientStateListResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientStateListResponse;

    /**
     * Creates a plain object from a ClientStateListResponse message. Also converts values to other types if specified.
     * @param message ClientStateListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientStateListResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientStateListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientStateListResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NOT_READY = 3,
        NO_ROOT = 4,
        NO_RESOURCE = 5,
        INVALID_PAGING = 6,
        INVALID_SORT = 7,
        INVALID_ADDRESS = 8,
        INVALID_ROOT = 9,
    }

    /** Properties of an Entry. */
    interface IEntry {
        /** Entry address */
        address?: string | null;

        /** Entry data */
        data?: Uint8Array | null;
    }

    /** Represents an Entry. */
    class Entry implements IEntry {
        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientStateListResponse.IEntry);

        /** Entry address. */
        public address: string;

        /** Entry data. */
        public data: Uint8Array;

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: ClientStateListResponse.IEntry): ClientStateListResponse.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link ClientStateListResponse.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientStateListResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link ClientStateListResponse.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: ClientStateListResponse.IEntry,
            writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStateListResponse.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStateListResponse.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): ClientStateListResponse.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: ClientStateListResponse.Entry,
            options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ClientStateGetRequest. */
export interface IClientStateGetRequest {
    /** ClientStateGetRequest stateRoot */
    stateRoot?: string | null;

    /** ClientStateGetRequest address */
    address?: string | null;
}

/** Represents a ClientStateGetRequest. */
export class ClientStateGetRequest implements IClientStateGetRequest {
    /**
     * Constructs a new ClientStateGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientStateGetRequest);

    /** ClientStateGetRequest stateRoot. */
    public stateRoot: string;

    /** ClientStateGetRequest address. */
    public address: string;

    /**
     * Creates a new ClientStateGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientStateGetRequest instance
     */
    public static create(properties?: IClientStateGetRequest): ClientStateGetRequest;

    /**
     * Encodes the specified ClientStateGetRequest message. Does not implicitly {@link ClientStateGetRequest.verify|verify} messages.
     * @param message ClientStateGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientStateGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientStateGetRequest message, length delimited. Does not implicitly {@link ClientStateGetRequest.verify|verify} messages.
     * @param message ClientStateGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientStateGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientStateGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientStateGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStateGetRequest;

    /**
     * Decodes a ClientStateGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientStateGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStateGetRequest;

    /**
     * Verifies a ClientStateGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientStateGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientStateGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientStateGetRequest;

    /**
     * Creates a plain object from a ClientStateGetRequest message. Also converts values to other types if specified.
     * @param message ClientStateGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientStateGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientStateGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientStateGetResponse. */
export interface IClientStateGetResponse {
    /** ClientStateGetResponse status */
    status?: ClientStateGetResponse.Status | null;

    /** ClientStateGetResponse value */
    value?: Uint8Array | null;

    /** ClientStateGetResponse stateRoot */
    stateRoot?: string | null;
}

/** Represents a ClientStateGetResponse. */
export class ClientStateGetResponse implements IClientStateGetResponse {
    /**
     * Constructs a new ClientStateGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientStateGetResponse);

    /** ClientStateGetResponse status. */
    public status: ClientStateGetResponse.Status;

    /** ClientStateGetResponse value. */
    public value: Uint8Array;

    /** ClientStateGetResponse stateRoot. */
    public stateRoot: string;

    /**
     * Creates a new ClientStateGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientStateGetResponse instance
     */
    public static create(properties?: IClientStateGetResponse): ClientStateGetResponse;

    /**
     * Encodes the specified ClientStateGetResponse message. Does not implicitly {@link ClientStateGetResponse.verify|verify} messages.
     * @param message ClientStateGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientStateGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientStateGetResponse message, length delimited. Does not implicitly {@link ClientStateGetResponse.verify|verify} messages.
     * @param message ClientStateGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientStateGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientStateGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientStateGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStateGetResponse;

    /**
     * Decodes a ClientStateGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientStateGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStateGetResponse;

    /**
     * Verifies a ClientStateGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientStateGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientStateGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientStateGetResponse;

    /**
     * Creates a plain object from a ClientStateGetResponse message. Also converts values to other types if specified.
     * @param message ClientStateGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientStateGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientStateGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientStateGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NOT_READY = 3,
        NO_ROOT = 4,
        NO_RESOURCE = 5,
        INVALID_ADDRESS = 6,
        INVALID_ROOT = 7,
    }
}

/** Properties of a ClientStatusGetRequest. */
export interface IClientStatusGetRequest {}

/** Represents a ClientStatusGetRequest. */
export class ClientStatusGetRequest implements IClientStatusGetRequest {
    /**
     * Constructs a new ClientStatusGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientStatusGetRequest);

    /**
     * Creates a new ClientStatusGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientStatusGetRequest instance
     */
    public static create(properties?: IClientStatusGetRequest): ClientStatusGetRequest;

    /**
     * Encodes the specified ClientStatusGetRequest message. Does not implicitly {@link ClientStatusGetRequest.verify|verify} messages.
     * @param message ClientStatusGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientStatusGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientStatusGetRequest message, length delimited. Does not implicitly {@link ClientStatusGetRequest.verify|verify} messages.
     * @param message ClientStatusGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientStatusGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientStatusGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientStatusGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStatusGetRequest;

    /**
     * Decodes a ClientStatusGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientStatusGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStatusGetRequest;

    /**
     * Verifies a ClientStatusGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientStatusGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientStatusGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientStatusGetRequest;

    /**
     * Creates a plain object from a ClientStatusGetRequest message. Also converts values to other types if specified.
     * @param message ClientStatusGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientStatusGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientStatusGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientStatusGetResponse. */
export interface IClientStatusGetResponse {
    /** ClientStatusGetResponse status */
    status?: ClientStatusGetResponse.Status | null;

    /** ClientStatusGetResponse peers */
    peers?: ClientStatusGetResponse.IPeer[] | null;

    /** ClientStatusGetResponse endpoint */
    endpoint?: string | null;
}

/** Represents a ClientStatusGetResponse. */
export class ClientStatusGetResponse implements IClientStatusGetResponse {
    /**
     * Constructs a new ClientStatusGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientStatusGetResponse);

    /** ClientStatusGetResponse status. */
    public status: ClientStatusGetResponse.Status;

    /** ClientStatusGetResponse peers. */
    public peers: ClientStatusGetResponse.IPeer[];

    /** ClientStatusGetResponse endpoint. */
    public endpoint: string;

    /**
     * Creates a new ClientStatusGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientStatusGetResponse instance
     */
    public static create(properties?: IClientStatusGetResponse): ClientStatusGetResponse;

    /**
     * Encodes the specified ClientStatusGetResponse message. Does not implicitly {@link ClientStatusGetResponse.verify|verify} messages.
     * @param message ClientStatusGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientStatusGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientStatusGetResponse message, length delimited. Does not implicitly {@link ClientStatusGetResponse.verify|verify} messages.
     * @param message ClientStatusGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientStatusGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientStatusGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientStatusGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStatusGetResponse;

    /**
     * Decodes a ClientStatusGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientStatusGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStatusGetResponse;

    /**
     * Verifies a ClientStatusGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientStatusGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientStatusGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientStatusGetResponse;

    /**
     * Creates a plain object from a ClientStatusGetResponse message. Also converts values to other types if specified.
     * @param message ClientStatusGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientStatusGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientStatusGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientStatusGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }

    /** Properties of a Peer. */
    interface IPeer {
        /** Peer endpoint */
        endpoint?: string | null;
    }

    /** Represents a Peer. */
    class Peer implements IPeer {
        /**
         * Constructs a new Peer.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientStatusGetResponse.IPeer);

        /** Peer endpoint. */
        public endpoint: string;

        /**
         * Creates a new Peer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Peer instance
         */
        public static create(properties?: ClientStatusGetResponse.IPeer): ClientStatusGetResponse.Peer;

        /**
         * Encodes the specified Peer message. Does not implicitly {@link ClientStatusGetResponse.Peer.verify|verify} messages.
         * @param message Peer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientStatusGetResponse.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Peer message, length delimited. Does not implicitly {@link ClientStatusGetResponse.Peer.verify|verify} messages.
         * @param message Peer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: ClientStatusGetResponse.IPeer,
            writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a Peer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientStatusGetResponse.Peer;

        /**
         * Decodes a Peer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientStatusGetResponse.Peer;

        /**
         * Verifies a Peer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Peer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Peer
         */
        public static fromObject(object: { [k: string]: any }): ClientStatusGetResponse.Peer;

        /**
         * Creates a plain object from a Peer message. Also converts values to other types if specified.
         * @param message Peer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: ClientStatusGetResponse.Peer,
            options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        /**
         * Converts this Peer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ClientTransactionListRequest. */
export interface IClientTransactionListRequest {
    /** ClientTransactionListRequest headId */
    headId?: string | null;

    /** ClientTransactionListRequest transactionIds */
    transactionIds?: string[] | null;

    /** ClientTransactionListRequest paging */
    paging?: IClientPagingControls | null;

    /** ClientTransactionListRequest sorting */
    sorting?: IClientSortControls[] | null;
}

/** Represents a ClientTransactionListRequest. */
export class ClientTransactionListRequest implements IClientTransactionListRequest {
    /**
     * Constructs a new ClientTransactionListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientTransactionListRequest);

    /** ClientTransactionListRequest headId. */
    public headId: string;

    /** ClientTransactionListRequest transactionIds. */
    public transactionIds: string[];

    /** ClientTransactionListRequest paging. */
    public paging?: IClientPagingControls | null;

    /** ClientTransactionListRequest sorting. */
    public sorting: IClientSortControls[];

    /**
     * Creates a new ClientTransactionListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientTransactionListRequest instance
     */
    public static create(properties?: IClientTransactionListRequest): ClientTransactionListRequest;

    /**
     * Encodes the specified ClientTransactionListRequest message. Does not implicitly {@link ClientTransactionListRequest.verify|verify} messages.
     * @param message ClientTransactionListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientTransactionListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientTransactionListRequest message, length delimited. Does not implicitly {@link ClientTransactionListRequest.verify|verify} messages.
     * @param message ClientTransactionListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientTransactionListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientTransactionListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientTransactionListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTransactionListRequest;

    /**
     * Decodes a ClientTransactionListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientTransactionListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTransactionListRequest;

    /**
     * Verifies a ClientTransactionListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientTransactionListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientTransactionListRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientTransactionListRequest;

    /**
     * Creates a plain object from a ClientTransactionListRequest message. Also converts values to other types if specified.
     * @param message ClientTransactionListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientTransactionListRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientTransactionListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientTransactionListResponse. */
export interface IClientTransactionListResponse {
    /** ClientTransactionListResponse status */
    status?: ClientTransactionListResponse.Status | null;

    /** ClientTransactionListResponse transactions */
    transactions?: ITransaction[] | null;

    /** ClientTransactionListResponse headId */
    headId?: string | null;

    /** ClientTransactionListResponse paging */
    paging?: IClientPagingResponse | null;
}

/** Represents a ClientTransactionListResponse. */
export class ClientTransactionListResponse implements IClientTransactionListResponse {
    /**
     * Constructs a new ClientTransactionListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientTransactionListResponse);

    /** ClientTransactionListResponse status. */
    public status: ClientTransactionListResponse.Status;

    /** ClientTransactionListResponse transactions. */
    public transactions: ITransaction[];

    /** ClientTransactionListResponse headId. */
    public headId: string;

    /** ClientTransactionListResponse paging. */
    public paging?: IClientPagingResponse | null;

    /**
     * Creates a new ClientTransactionListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientTransactionListResponse instance
     */
    public static create(properties?: IClientTransactionListResponse): ClientTransactionListResponse;

    /**
     * Encodes the specified ClientTransactionListResponse message. Does not implicitly {@link ClientTransactionListResponse.verify|verify} messages.
     * @param message ClientTransactionListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientTransactionListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientTransactionListResponse message, length delimited. Does not implicitly {@link ClientTransactionListResponse.verify|verify} messages.
     * @param message ClientTransactionListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientTransactionListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientTransactionListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientTransactionListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTransactionListResponse;

    /**
     * Decodes a ClientTransactionListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientTransactionListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTransactionListResponse;

    /**
     * Verifies a ClientTransactionListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientTransactionListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientTransactionListResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientTransactionListResponse;

    /**
     * Creates a plain object from a ClientTransactionListResponse message. Also converts values to other types if specified.
     * @param message ClientTransactionListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientTransactionListResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientTransactionListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientTransactionListResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NOT_READY = 3,
        NO_ROOT = 4,
        NO_RESOURCE = 5,
        INVALID_PAGING = 6,
        INVALID_SORT = 7,
        INVALID_ID = 8,
    }
}

/** Properties of a ClientTransactionGetRequest. */
export interface IClientTransactionGetRequest {
    /** ClientTransactionGetRequest transactionId */
    transactionId?: string | null;
}

/** Represents a ClientTransactionGetRequest. */
export class ClientTransactionGetRequest implements IClientTransactionGetRequest {
    /**
     * Constructs a new ClientTransactionGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientTransactionGetRequest);

    /** ClientTransactionGetRequest transactionId. */
    public transactionId: string;

    /**
     * Creates a new ClientTransactionGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientTransactionGetRequest instance
     */
    public static create(properties?: IClientTransactionGetRequest): ClientTransactionGetRequest;

    /**
     * Encodes the specified ClientTransactionGetRequest message. Does not implicitly {@link ClientTransactionGetRequest.verify|verify} messages.
     * @param message ClientTransactionGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientTransactionGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientTransactionGetRequest message, length delimited. Does not implicitly {@link ClientTransactionGetRequest.verify|verify} messages.
     * @param message ClientTransactionGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientTransactionGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientTransactionGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientTransactionGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTransactionGetRequest;

    /**
     * Decodes a ClientTransactionGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientTransactionGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTransactionGetRequest;

    /**
     * Verifies a ClientTransactionGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientTransactionGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientTransactionGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientTransactionGetRequest;

    /**
     * Creates a plain object from a ClientTransactionGetRequest message. Also converts values to other types if specified.
     * @param message ClientTransactionGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientTransactionGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientTransactionGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientTransactionGetResponse. */
export interface IClientTransactionGetResponse {
    /** ClientTransactionGetResponse status */
    status?: ClientTransactionGetResponse.Status | null;

    /** ClientTransactionGetResponse transaction */
    transaction?: ITransaction | null;
}

/** Represents a ClientTransactionGetResponse. */
export class ClientTransactionGetResponse implements IClientTransactionGetResponse {
    /**
     * Constructs a new ClientTransactionGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientTransactionGetResponse);

    /** ClientTransactionGetResponse status. */
    public status: ClientTransactionGetResponse.Status;

    /** ClientTransactionGetResponse transaction. */
    public transaction?: ITransaction | null;

    /**
     * Creates a new ClientTransactionGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientTransactionGetResponse instance
     */
    public static create(properties?: IClientTransactionGetResponse): ClientTransactionGetResponse;

    /**
     * Encodes the specified ClientTransactionGetResponse message. Does not implicitly {@link ClientTransactionGetResponse.verify|verify} messages.
     * @param message ClientTransactionGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientTransactionGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientTransactionGetResponse message, length delimited. Does not implicitly {@link ClientTransactionGetResponse.verify|verify} messages.
     * @param message ClientTransactionGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientTransactionGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientTransactionGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientTransactionGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTransactionGetResponse;

    /**
     * Decodes a ClientTransactionGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientTransactionGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTransactionGetResponse;

    /**
     * Verifies a ClientTransactionGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClientTransactionGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientTransactionGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientTransactionGetResponse;

    /**
     * Creates a plain object from a ClientTransactionGetResponse message. Also converts values to other types if specified.
     * @param message ClientTransactionGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ClientTransactionGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClientTransactionGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientTransactionGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INTERNAL_ERROR = 2,
        NO_RESOURCE = 5,
        INVALID_ID = 8,
    }
}

/** Properties of a ConsensusPeerMessage. */
export interface IConsensusPeerMessage {
    /** ConsensusPeerMessage messageType */
    messageType?: string | null;

    /** ConsensusPeerMessage content */
    content?: Uint8Array | null;

    /** ConsensusPeerMessage name */
    name?: string | null;

    /** ConsensusPeerMessage version */
    version?: string | null;
}

/** Represents a ConsensusPeerMessage. */
export class ConsensusPeerMessage implements IConsensusPeerMessage {
    /**
     * Constructs a new ConsensusPeerMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusPeerMessage);

    /** ConsensusPeerMessage messageType. */
    public messageType: string;

    /** ConsensusPeerMessage content. */
    public content: Uint8Array;

    /** ConsensusPeerMessage name. */
    public name: string;

    /** ConsensusPeerMessage version. */
    public version: string;

    /**
     * Creates a new ConsensusPeerMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusPeerMessage instance
     */
    public static create(properties?: IConsensusPeerMessage): ConsensusPeerMessage;

    /**
     * Encodes the specified ConsensusPeerMessage message. Does not implicitly {@link ConsensusPeerMessage.verify|verify} messages.
     * @param message ConsensusPeerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusPeerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusPeerMessage message, length delimited. Does not implicitly {@link ConsensusPeerMessage.verify|verify} messages.
     * @param message ConsensusPeerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusPeerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusPeerMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusPeerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusPeerMessage;

    /**
     * Decodes a ConsensusPeerMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusPeerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusPeerMessage;

    /**
     * Verifies a ConsensusPeerMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusPeerMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusPeerMessage
     */
    public static fromObject(object: { [k: string]: any }): ConsensusPeerMessage;

    /**
     * Creates a plain object from a ConsensusPeerMessage message. Also converts values to other types if specified.
     * @param message ConsensusPeerMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusPeerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusPeerMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusBlock. */
export interface IConsensusBlock {
    /** ConsensusBlock blockId */
    blockId?: Uint8Array | null;

    /** ConsensusBlock previousId */
    previousId?: Uint8Array | null;

    /** ConsensusBlock signerId */
    signerId?: Uint8Array | null;

    /** ConsensusBlock blockNum */
    blockNum?: number | Long | null;

    /** ConsensusBlock payload */
    payload?: Uint8Array | null;

    /** ConsensusBlock summary */
    summary?: Uint8Array | null;
}

/** Represents a ConsensusBlock. */
export class ConsensusBlock implements IConsensusBlock {
    /**
     * Constructs a new ConsensusBlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusBlock);

    /** ConsensusBlock blockId. */
    public blockId: Uint8Array;

    /** ConsensusBlock previousId. */
    public previousId: Uint8Array;

    /** ConsensusBlock signerId. */
    public signerId: Uint8Array;

    /** ConsensusBlock blockNum. */
    public blockNum: number | Long;

    /** ConsensusBlock payload. */
    public payload: Uint8Array;

    /** ConsensusBlock summary. */
    public summary: Uint8Array;

    /**
     * Creates a new ConsensusBlock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusBlock instance
     */
    public static create(properties?: IConsensusBlock): ConsensusBlock;

    /**
     * Encodes the specified ConsensusBlock message. Does not implicitly {@link ConsensusBlock.verify|verify} messages.
     * @param message ConsensusBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusBlock message, length delimited. Does not implicitly {@link ConsensusBlock.verify|verify} messages.
     * @param message ConsensusBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusBlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusBlock;

    /**
     * Decodes a ConsensusBlock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusBlock;

    /**
     * Verifies a ConsensusBlock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusBlock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusBlock
     */
    public static fromObject(object: { [k: string]: any }): ConsensusBlock;

    /**
     * Creates a plain object from a ConsensusBlock message. Also converts values to other types if specified.
     * @param message ConsensusBlock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusBlock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusPeerInfo. */
export interface IConsensusPeerInfo {
    /** ConsensusPeerInfo peerId */
    peerId?: Uint8Array | null;
}

/** Represents a ConsensusPeerInfo. */
export class ConsensusPeerInfo implements IConsensusPeerInfo {
    /**
     * Constructs a new ConsensusPeerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusPeerInfo);

    /** ConsensusPeerInfo peerId. */
    public peerId: Uint8Array;

    /**
     * Creates a new ConsensusPeerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusPeerInfo instance
     */
    public static create(properties?: IConsensusPeerInfo): ConsensusPeerInfo;

    /**
     * Encodes the specified ConsensusPeerInfo message. Does not implicitly {@link ConsensusPeerInfo.verify|verify} messages.
     * @param message ConsensusPeerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusPeerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusPeerInfo message, length delimited. Does not implicitly {@link ConsensusPeerInfo.verify|verify} messages.
     * @param message ConsensusPeerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusPeerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusPeerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusPeerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusPeerInfo;

    /**
     * Decodes a ConsensusPeerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusPeerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusPeerInfo;

    /**
     * Verifies a ConsensusPeerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusPeerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusPeerInfo
     */
    public static fromObject(object: { [k: string]: any }): ConsensusPeerInfo;

    /**
     * Creates a plain object from a ConsensusPeerInfo message. Also converts values to other types if specified.
     * @param message ConsensusPeerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusPeerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusPeerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSettingsEntry. */
export interface IConsensusSettingsEntry {
    /** ConsensusSettingsEntry key */
    key?: string | null;

    /** ConsensusSettingsEntry value */
    value?: string | null;
}

/** Represents a ConsensusSettingsEntry. */
export class ConsensusSettingsEntry implements IConsensusSettingsEntry {
    /**
     * Constructs a new ConsensusSettingsEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSettingsEntry);

    /** ConsensusSettingsEntry key. */
    public key: string;

    /** ConsensusSettingsEntry value. */
    public value: string;

    /**
     * Creates a new ConsensusSettingsEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSettingsEntry instance
     */
    public static create(properties?: IConsensusSettingsEntry): ConsensusSettingsEntry;

    /**
     * Encodes the specified ConsensusSettingsEntry message. Does not implicitly {@link ConsensusSettingsEntry.verify|verify} messages.
     * @param message ConsensusSettingsEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSettingsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSettingsEntry message, length delimited. Does not implicitly {@link ConsensusSettingsEntry.verify|verify} messages.
     * @param message ConsensusSettingsEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSettingsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSettingsEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSettingsEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSettingsEntry;

    /**
     * Decodes a ConsensusSettingsEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSettingsEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSettingsEntry;

    /**
     * Verifies a ConsensusSettingsEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSettingsEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSettingsEntry
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSettingsEntry;

    /**
     * Creates a plain object from a ConsensusSettingsEntry message. Also converts values to other types if specified.
     * @param message ConsensusSettingsEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSettingsEntry,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSettingsEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusStateEntry. */
export interface IConsensusStateEntry {
    /** ConsensusStateEntry address */
    address?: string | null;

    /** ConsensusStateEntry data */
    data?: Uint8Array | null;
}

/** Represents a ConsensusStateEntry. */
export class ConsensusStateEntry implements IConsensusStateEntry {
    /**
     * Constructs a new ConsensusStateEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusStateEntry);

    /** ConsensusStateEntry address. */
    public address: string;

    /** ConsensusStateEntry data. */
    public data: Uint8Array;

    /**
     * Creates a new ConsensusStateEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusStateEntry instance
     */
    public static create(properties?: IConsensusStateEntry): ConsensusStateEntry;

    /**
     * Encodes the specified ConsensusStateEntry message. Does not implicitly {@link ConsensusStateEntry.verify|verify} messages.
     * @param message ConsensusStateEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusStateEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusStateEntry message, length delimited. Does not implicitly {@link ConsensusStateEntry.verify|verify} messages.
     * @param message ConsensusStateEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusStateEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusStateEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusStateEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusStateEntry;

    /**
     * Decodes a ConsensusStateEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusStateEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusStateEntry;

    /**
     * Verifies a ConsensusStateEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusStateEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusStateEntry
     */
    public static fromObject(object: { [k: string]: any }): ConsensusStateEntry;

    /**
     * Creates a plain object from a ConsensusStateEntry message. Also converts values to other types if specified.
     * @param message ConsensusStateEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusStateEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusStateEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusRegisterRequest. */
export interface IConsensusRegisterRequest {
    /** ConsensusRegisterRequest name */
    name?: string | null;

    /** ConsensusRegisterRequest version */
    version?: string | null;
}

/** Represents a ConsensusRegisterRequest. */
export class ConsensusRegisterRequest implements IConsensusRegisterRequest {
    /**
     * Constructs a new ConsensusRegisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusRegisterRequest);

    /** ConsensusRegisterRequest name. */
    public name: string;

    /** ConsensusRegisterRequest version. */
    public version: string;

    /**
     * Creates a new ConsensusRegisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusRegisterRequest instance
     */
    public static create(properties?: IConsensusRegisterRequest): ConsensusRegisterRequest;

    /**
     * Encodes the specified ConsensusRegisterRequest message. Does not implicitly {@link ConsensusRegisterRequest.verify|verify} messages.
     * @param message ConsensusRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusRegisterRequest message, length delimited. Does not implicitly {@link ConsensusRegisterRequest.verify|verify} messages.
     * @param message ConsensusRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusRegisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusRegisterRequest;

    /**
     * Decodes a ConsensusRegisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusRegisterRequest;

    /**
     * Verifies a ConsensusRegisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusRegisterRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusRegisterRequest;

    /**
     * Creates a plain object from a ConsensusRegisterRequest message. Also converts values to other types if specified.
     * @param message ConsensusRegisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusRegisterRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusRegisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusRegisterResponse. */
export interface IConsensusRegisterResponse {
    /** ConsensusRegisterResponse status */
    status?: ConsensusRegisterResponse.Status | null;

    /** ConsensusRegisterResponse chainHead */
    chainHead?: IConsensusBlock | null;

    /** ConsensusRegisterResponse peers */
    peers?: IConsensusPeerInfo[] | null;
}

/** Represents a ConsensusRegisterResponse. */
export class ConsensusRegisterResponse implements IConsensusRegisterResponse {
    /**
     * Constructs a new ConsensusRegisterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusRegisterResponse);

    /** ConsensusRegisterResponse status. */
    public status: ConsensusRegisterResponse.Status;

    /** ConsensusRegisterResponse chainHead. */
    public chainHead?: IConsensusBlock | null;

    /** ConsensusRegisterResponse peers. */
    public peers: IConsensusPeerInfo[];

    /**
     * Creates a new ConsensusRegisterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusRegisterResponse instance
     */
    public static create(properties?: IConsensusRegisterResponse): ConsensusRegisterResponse;

    /**
     * Encodes the specified ConsensusRegisterResponse message. Does not implicitly {@link ConsensusRegisterResponse.verify|verify} messages.
     * @param message ConsensusRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusRegisterResponse message, length delimited. Does not implicitly {@link ConsensusRegisterResponse.verify|verify} messages.
     * @param message ConsensusRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusRegisterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusRegisterResponse;

    /**
     * Decodes a ConsensusRegisterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusRegisterResponse;

    /**
     * Verifies a ConsensusRegisterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusRegisterResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusRegisterResponse;

    /**
     * Creates a plain object from a ConsensusRegisterResponse message. Also converts values to other types if specified.
     * @param message ConsensusRegisterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusRegisterResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusRegisterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusRegisterResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
    }
}

/** Properties of a ConsensusNotifyPeerConnected. */
export interface IConsensusNotifyPeerConnected {
    /** ConsensusNotifyPeerConnected peerInfo */
    peerInfo?: IConsensusPeerInfo | null;
}

/** Represents a ConsensusNotifyPeerConnected. */
export class ConsensusNotifyPeerConnected implements IConsensusNotifyPeerConnected {
    /**
     * Constructs a new ConsensusNotifyPeerConnected.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyPeerConnected);

    /** ConsensusNotifyPeerConnected peerInfo. */
    public peerInfo?: IConsensusPeerInfo | null;

    /**
     * Creates a new ConsensusNotifyPeerConnected instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyPeerConnected instance
     */
    public static create(properties?: IConsensusNotifyPeerConnected): ConsensusNotifyPeerConnected;

    /**
     * Encodes the specified ConsensusNotifyPeerConnected message. Does not implicitly {@link ConsensusNotifyPeerConnected.verify|verify} messages.
     * @param message ConsensusNotifyPeerConnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyPeerConnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyPeerConnected message, length delimited. Does not implicitly {@link ConsensusNotifyPeerConnected.verify|verify} messages.
     * @param message ConsensusNotifyPeerConnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyPeerConnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyPeerConnected message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyPeerConnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyPeerConnected;

    /**
     * Decodes a ConsensusNotifyPeerConnected message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyPeerConnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyPeerConnected;

    /**
     * Verifies a ConsensusNotifyPeerConnected message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyPeerConnected message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyPeerConnected
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyPeerConnected;

    /**
     * Creates a plain object from a ConsensusNotifyPeerConnected message. Also converts values to other types if specified.
     * @param message ConsensusNotifyPeerConnected
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyPeerConnected,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyPeerConnected to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyPeerDisconnected. */
export interface IConsensusNotifyPeerDisconnected {
    /** ConsensusNotifyPeerDisconnected peerId */
    peerId?: Uint8Array | null;
}

/** Represents a ConsensusNotifyPeerDisconnected. */
export class ConsensusNotifyPeerDisconnected implements IConsensusNotifyPeerDisconnected {
    /**
     * Constructs a new ConsensusNotifyPeerDisconnected.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyPeerDisconnected);

    /** ConsensusNotifyPeerDisconnected peerId. */
    public peerId: Uint8Array;

    /**
     * Creates a new ConsensusNotifyPeerDisconnected instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyPeerDisconnected instance
     */
    public static create(properties?: IConsensusNotifyPeerDisconnected): ConsensusNotifyPeerDisconnected;

    /**
     * Encodes the specified ConsensusNotifyPeerDisconnected message. Does not implicitly {@link ConsensusNotifyPeerDisconnected.verify|verify} messages.
     * @param message ConsensusNotifyPeerDisconnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyPeerDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyPeerDisconnected message, length delimited. Does not implicitly {@link ConsensusNotifyPeerDisconnected.verify|verify} messages.
     * @param message ConsensusNotifyPeerDisconnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IConsensusNotifyPeerDisconnected,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyPeerDisconnected message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyPeerDisconnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyPeerDisconnected;

    /**
     * Decodes a ConsensusNotifyPeerDisconnected message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyPeerDisconnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyPeerDisconnected;

    /**
     * Verifies a ConsensusNotifyPeerDisconnected message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyPeerDisconnected message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyPeerDisconnected
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyPeerDisconnected;

    /**
     * Creates a plain object from a ConsensusNotifyPeerDisconnected message. Also converts values to other types if specified.
     * @param message ConsensusNotifyPeerDisconnected
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyPeerDisconnected,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyPeerDisconnected to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyPeerMessage. */
export interface IConsensusNotifyPeerMessage {
    /** ConsensusNotifyPeerMessage message */
    message?: IConsensusPeerMessage | null;

    /** ConsensusNotifyPeerMessage senderId */
    senderId?: Uint8Array | null;
}

/** Represents a ConsensusNotifyPeerMessage. */
export class ConsensusNotifyPeerMessage implements IConsensusNotifyPeerMessage {
    /**
     * Constructs a new ConsensusNotifyPeerMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyPeerMessage);

    /** ConsensusNotifyPeerMessage message. */
    public message?: IConsensusPeerMessage | null;

    /** ConsensusNotifyPeerMessage senderId. */
    public senderId: Uint8Array;

    /**
     * Creates a new ConsensusNotifyPeerMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyPeerMessage instance
     */
    public static create(properties?: IConsensusNotifyPeerMessage): ConsensusNotifyPeerMessage;

    /**
     * Encodes the specified ConsensusNotifyPeerMessage message. Does not implicitly {@link ConsensusNotifyPeerMessage.verify|verify} messages.
     * @param message ConsensusNotifyPeerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyPeerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyPeerMessage message, length delimited. Does not implicitly {@link ConsensusNotifyPeerMessage.verify|verify} messages.
     * @param message ConsensusNotifyPeerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyPeerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyPeerMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyPeerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyPeerMessage;

    /**
     * Decodes a ConsensusNotifyPeerMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyPeerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyPeerMessage;

    /**
     * Verifies a ConsensusNotifyPeerMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyPeerMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyPeerMessage
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyPeerMessage;

    /**
     * Creates a plain object from a ConsensusNotifyPeerMessage message. Also converts values to other types if specified.
     * @param message ConsensusNotifyPeerMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyPeerMessage,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyPeerMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyBlockNew. */
export interface IConsensusNotifyBlockNew {
    /** ConsensusNotifyBlockNew block */
    block?: IConsensusBlock | null;
}

/** Represents a ConsensusNotifyBlockNew. */
export class ConsensusNotifyBlockNew implements IConsensusNotifyBlockNew {
    /**
     * Constructs a new ConsensusNotifyBlockNew.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyBlockNew);

    /** ConsensusNotifyBlockNew block. */
    public block?: IConsensusBlock | null;

    /**
     * Creates a new ConsensusNotifyBlockNew instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyBlockNew instance
     */
    public static create(properties?: IConsensusNotifyBlockNew): ConsensusNotifyBlockNew;

    /**
     * Encodes the specified ConsensusNotifyBlockNew message. Does not implicitly {@link ConsensusNotifyBlockNew.verify|verify} messages.
     * @param message ConsensusNotifyBlockNew message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyBlockNew, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyBlockNew message, length delimited. Does not implicitly {@link ConsensusNotifyBlockNew.verify|verify} messages.
     * @param message ConsensusNotifyBlockNew message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyBlockNew, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyBlockNew message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyBlockNew
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyBlockNew;

    /**
     * Decodes a ConsensusNotifyBlockNew message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyBlockNew
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyBlockNew;

    /**
     * Verifies a ConsensusNotifyBlockNew message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyBlockNew message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyBlockNew
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyBlockNew;

    /**
     * Creates a plain object from a ConsensusNotifyBlockNew message. Also converts values to other types if specified.
     * @param message ConsensusNotifyBlockNew
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyBlockNew,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyBlockNew to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyBlockValid. */
export interface IConsensusNotifyBlockValid {
    /** ConsensusNotifyBlockValid blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusNotifyBlockValid. */
export class ConsensusNotifyBlockValid implements IConsensusNotifyBlockValid {
    /**
     * Constructs a new ConsensusNotifyBlockValid.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyBlockValid);

    /** ConsensusNotifyBlockValid blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusNotifyBlockValid instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyBlockValid instance
     */
    public static create(properties?: IConsensusNotifyBlockValid): ConsensusNotifyBlockValid;

    /**
     * Encodes the specified ConsensusNotifyBlockValid message. Does not implicitly {@link ConsensusNotifyBlockValid.verify|verify} messages.
     * @param message ConsensusNotifyBlockValid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyBlockValid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyBlockValid message, length delimited. Does not implicitly {@link ConsensusNotifyBlockValid.verify|verify} messages.
     * @param message ConsensusNotifyBlockValid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyBlockValid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyBlockValid message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyBlockValid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyBlockValid;

    /**
     * Decodes a ConsensusNotifyBlockValid message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyBlockValid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyBlockValid;

    /**
     * Verifies a ConsensusNotifyBlockValid message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyBlockValid message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyBlockValid
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyBlockValid;

    /**
     * Creates a plain object from a ConsensusNotifyBlockValid message. Also converts values to other types if specified.
     * @param message ConsensusNotifyBlockValid
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyBlockValid,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyBlockValid to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyBlockInvalid. */
export interface IConsensusNotifyBlockInvalid {
    /** ConsensusNotifyBlockInvalid blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusNotifyBlockInvalid. */
export class ConsensusNotifyBlockInvalid implements IConsensusNotifyBlockInvalid {
    /**
     * Constructs a new ConsensusNotifyBlockInvalid.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyBlockInvalid);

    /** ConsensusNotifyBlockInvalid blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusNotifyBlockInvalid instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyBlockInvalid instance
     */
    public static create(properties?: IConsensusNotifyBlockInvalid): ConsensusNotifyBlockInvalid;

    /**
     * Encodes the specified ConsensusNotifyBlockInvalid message. Does not implicitly {@link ConsensusNotifyBlockInvalid.verify|verify} messages.
     * @param message ConsensusNotifyBlockInvalid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyBlockInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyBlockInvalid message, length delimited. Does not implicitly {@link ConsensusNotifyBlockInvalid.verify|verify} messages.
     * @param message ConsensusNotifyBlockInvalid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyBlockInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyBlockInvalid message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyBlockInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyBlockInvalid;

    /**
     * Decodes a ConsensusNotifyBlockInvalid message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyBlockInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyBlockInvalid;

    /**
     * Verifies a ConsensusNotifyBlockInvalid message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyBlockInvalid message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyBlockInvalid
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyBlockInvalid;

    /**
     * Creates a plain object from a ConsensusNotifyBlockInvalid message. Also converts values to other types if specified.
     * @param message ConsensusNotifyBlockInvalid
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyBlockInvalid,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyBlockInvalid to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyBlockCommit. */
export interface IConsensusNotifyBlockCommit {
    /** ConsensusNotifyBlockCommit blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusNotifyBlockCommit. */
export class ConsensusNotifyBlockCommit implements IConsensusNotifyBlockCommit {
    /**
     * Constructs a new ConsensusNotifyBlockCommit.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyBlockCommit);

    /** ConsensusNotifyBlockCommit blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusNotifyBlockCommit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyBlockCommit instance
     */
    public static create(properties?: IConsensusNotifyBlockCommit): ConsensusNotifyBlockCommit;

    /**
     * Encodes the specified ConsensusNotifyBlockCommit message. Does not implicitly {@link ConsensusNotifyBlockCommit.verify|verify} messages.
     * @param message ConsensusNotifyBlockCommit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyBlockCommit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyBlockCommit message, length delimited. Does not implicitly {@link ConsensusNotifyBlockCommit.verify|verify} messages.
     * @param message ConsensusNotifyBlockCommit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyBlockCommit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyBlockCommit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyBlockCommit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyBlockCommit;

    /**
     * Decodes a ConsensusNotifyBlockCommit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyBlockCommit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyBlockCommit;

    /**
     * Verifies a ConsensusNotifyBlockCommit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyBlockCommit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyBlockCommit
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyBlockCommit;

    /**
     * Creates a plain object from a ConsensusNotifyBlockCommit message. Also converts values to other types if specified.
     * @param message ConsensusNotifyBlockCommit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusNotifyBlockCommit,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyBlockCommit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusNotifyAck. */
export interface IConsensusNotifyAck {}

/** Represents a ConsensusNotifyAck. */
export class ConsensusNotifyAck implements IConsensusNotifyAck {
    /**
     * Constructs a new ConsensusNotifyAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusNotifyAck);

    /**
     * Creates a new ConsensusNotifyAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusNotifyAck instance
     */
    public static create(properties?: IConsensusNotifyAck): ConsensusNotifyAck;

    /**
     * Encodes the specified ConsensusNotifyAck message. Does not implicitly {@link ConsensusNotifyAck.verify|verify} messages.
     * @param message ConsensusNotifyAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusNotifyAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusNotifyAck message, length delimited. Does not implicitly {@link ConsensusNotifyAck.verify|verify} messages.
     * @param message ConsensusNotifyAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusNotifyAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusNotifyAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusNotifyAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusNotifyAck;

    /**
     * Decodes a ConsensusNotifyAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusNotifyAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusNotifyAck;

    /**
     * Verifies a ConsensusNotifyAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusNotifyAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusNotifyAck
     */
    public static fromObject(object: { [k: string]: any }): ConsensusNotifyAck;

    /**
     * Creates a plain object from a ConsensusNotifyAck message. Also converts values to other types if specified.
     * @param message ConsensusNotifyAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusNotifyAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusNotifyAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSendToRequest. */
export interface IConsensusSendToRequest {
    /** ConsensusSendToRequest message */
    message?: IConsensusPeerMessage | null;

    /** ConsensusSendToRequest peerId */
    peerId?: Uint8Array | null;
}

/** Represents a ConsensusSendToRequest. */
export class ConsensusSendToRequest implements IConsensusSendToRequest {
    /**
     * Constructs a new ConsensusSendToRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSendToRequest);

    /** ConsensusSendToRequest message. */
    public message?: IConsensusPeerMessage | null;

    /** ConsensusSendToRequest peerId. */
    public peerId: Uint8Array;

    /**
     * Creates a new ConsensusSendToRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSendToRequest instance
     */
    public static create(properties?: IConsensusSendToRequest): ConsensusSendToRequest;

    /**
     * Encodes the specified ConsensusSendToRequest message. Does not implicitly {@link ConsensusSendToRequest.verify|verify} messages.
     * @param message ConsensusSendToRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSendToRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSendToRequest message, length delimited. Does not implicitly {@link ConsensusSendToRequest.verify|verify} messages.
     * @param message ConsensusSendToRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSendToRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSendToRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSendToRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSendToRequest;

    /**
     * Decodes a ConsensusSendToRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSendToRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSendToRequest;

    /**
     * Verifies a ConsensusSendToRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSendToRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSendToRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSendToRequest;

    /**
     * Creates a plain object from a ConsensusSendToRequest message. Also converts values to other types if specified.
     * @param message ConsensusSendToRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSendToRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSendToRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSendToResponse. */
export interface IConsensusSendToResponse {
    /** ConsensusSendToResponse status */
    status?: ConsensusSendToResponse.Status | null;
}

/** Represents a ConsensusSendToResponse. */
export class ConsensusSendToResponse implements IConsensusSendToResponse {
    /**
     * Constructs a new ConsensusSendToResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSendToResponse);

    /** ConsensusSendToResponse status. */
    public status: ConsensusSendToResponse.Status;

    /**
     * Creates a new ConsensusSendToResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSendToResponse instance
     */
    public static create(properties?: IConsensusSendToResponse): ConsensusSendToResponse;

    /**
     * Encodes the specified ConsensusSendToResponse message. Does not implicitly {@link ConsensusSendToResponse.verify|verify} messages.
     * @param message ConsensusSendToResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSendToResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSendToResponse message, length delimited. Does not implicitly {@link ConsensusSendToResponse.verify|verify} messages.
     * @param message ConsensusSendToResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSendToResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSendToResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSendToResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSendToResponse;

    /**
     * Decodes a ConsensusSendToResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSendToResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSendToResponse;

    /**
     * Verifies a ConsensusSendToResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSendToResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSendToResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSendToResponse;

    /**
     * Creates a plain object from a ConsensusSendToResponse message. Also converts values to other types if specified.
     * @param message ConsensusSendToResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSendToResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSendToResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusSendToResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_PEER = 5,
    }
}

/** Properties of a ConsensusBroadcastRequest. */
export interface IConsensusBroadcastRequest {
    /** ConsensusBroadcastRequest message */
    message?: IConsensusPeerMessage | null;
}

/** Represents a ConsensusBroadcastRequest. */
export class ConsensusBroadcastRequest implements IConsensusBroadcastRequest {
    /**
     * Constructs a new ConsensusBroadcastRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusBroadcastRequest);

    /** ConsensusBroadcastRequest message. */
    public message?: IConsensusPeerMessage | null;

    /**
     * Creates a new ConsensusBroadcastRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusBroadcastRequest instance
     */
    public static create(properties?: IConsensusBroadcastRequest): ConsensusBroadcastRequest;

    /**
     * Encodes the specified ConsensusBroadcastRequest message. Does not implicitly {@link ConsensusBroadcastRequest.verify|verify} messages.
     * @param message ConsensusBroadcastRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusBroadcastRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusBroadcastRequest message, length delimited. Does not implicitly {@link ConsensusBroadcastRequest.verify|verify} messages.
     * @param message ConsensusBroadcastRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusBroadcastRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusBroadcastRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusBroadcastRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusBroadcastRequest;

    /**
     * Decodes a ConsensusBroadcastRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusBroadcastRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusBroadcastRequest;

    /**
     * Verifies a ConsensusBroadcastRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusBroadcastRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusBroadcastRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusBroadcastRequest;

    /**
     * Creates a plain object from a ConsensusBroadcastRequest message. Also converts values to other types if specified.
     * @param message ConsensusBroadcastRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusBroadcastRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusBroadcastRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusBroadcastResponse. */
export interface IConsensusBroadcastResponse {
    /** ConsensusBroadcastResponse status */
    status?: ConsensusBroadcastResponse.Status | null;
}

/** Represents a ConsensusBroadcastResponse. */
export class ConsensusBroadcastResponse implements IConsensusBroadcastResponse {
    /**
     * Constructs a new ConsensusBroadcastResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusBroadcastResponse);

    /** ConsensusBroadcastResponse status. */
    public status: ConsensusBroadcastResponse.Status;

    /**
     * Creates a new ConsensusBroadcastResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusBroadcastResponse instance
     */
    public static create(properties?: IConsensusBroadcastResponse): ConsensusBroadcastResponse;

    /**
     * Encodes the specified ConsensusBroadcastResponse message. Does not implicitly {@link ConsensusBroadcastResponse.verify|verify} messages.
     * @param message ConsensusBroadcastResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusBroadcastResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusBroadcastResponse message, length delimited. Does not implicitly {@link ConsensusBroadcastResponse.verify|verify} messages.
     * @param message ConsensusBroadcastResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusBroadcastResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusBroadcastResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusBroadcastResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusBroadcastResponse;

    /**
     * Decodes a ConsensusBroadcastResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusBroadcastResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusBroadcastResponse;

    /**
     * Verifies a ConsensusBroadcastResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusBroadcastResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusBroadcastResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusBroadcastResponse;

    /**
     * Creates a plain object from a ConsensusBroadcastResponse message. Also converts values to other types if specified.
     * @param message ConsensusBroadcastResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusBroadcastResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusBroadcastResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusBroadcastResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
    }
}

/** Properties of a ConsensusInitializeBlockRequest. */
export interface IConsensusInitializeBlockRequest {
    /** ConsensusInitializeBlockRequest previousId */
    previousId?: Uint8Array | null;
}

/** Represents a ConsensusInitializeBlockRequest. */
export class ConsensusInitializeBlockRequest implements IConsensusInitializeBlockRequest {
    /**
     * Constructs a new ConsensusInitializeBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusInitializeBlockRequest);

    /** ConsensusInitializeBlockRequest previousId. */
    public previousId: Uint8Array;

    /**
     * Creates a new ConsensusInitializeBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusInitializeBlockRequest instance
     */
    public static create(properties?: IConsensusInitializeBlockRequest): ConsensusInitializeBlockRequest;

    /**
     * Encodes the specified ConsensusInitializeBlockRequest message. Does not implicitly {@link ConsensusInitializeBlockRequest.verify|verify} messages.
     * @param message ConsensusInitializeBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusInitializeBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusInitializeBlockRequest message, length delimited. Does not implicitly {@link ConsensusInitializeBlockRequest.verify|verify} messages.
     * @param message ConsensusInitializeBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IConsensusInitializeBlockRequest,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConsensusInitializeBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusInitializeBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusInitializeBlockRequest;

    /**
     * Decodes a ConsensusInitializeBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusInitializeBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusInitializeBlockRequest;

    /**
     * Verifies a ConsensusInitializeBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusInitializeBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusInitializeBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusInitializeBlockRequest;

    /**
     * Creates a plain object from a ConsensusInitializeBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusInitializeBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusInitializeBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusInitializeBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusInitializeBlockResponse. */
export interface IConsensusInitializeBlockResponse {
    /** ConsensusInitializeBlockResponse status */
    status?: ConsensusInitializeBlockResponse.Status | null;
}

/** Represents a ConsensusInitializeBlockResponse. */
export class ConsensusInitializeBlockResponse implements IConsensusInitializeBlockResponse {
    /**
     * Constructs a new ConsensusInitializeBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusInitializeBlockResponse);

    /** ConsensusInitializeBlockResponse status. */
    public status: ConsensusInitializeBlockResponse.Status;

    /**
     * Creates a new ConsensusInitializeBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusInitializeBlockResponse instance
     */
    public static create(properties?: IConsensusInitializeBlockResponse): ConsensusInitializeBlockResponse;

    /**
     * Encodes the specified ConsensusInitializeBlockResponse message. Does not implicitly {@link ConsensusInitializeBlockResponse.verify|verify} messages.
     * @param message ConsensusInitializeBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusInitializeBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusInitializeBlockResponse message, length delimited. Does not implicitly {@link ConsensusInitializeBlockResponse.verify|verify} messages.
     * @param message ConsensusInitializeBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IConsensusInitializeBlockResponse,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConsensusInitializeBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusInitializeBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusInitializeBlockResponse;

    /**
     * Decodes a ConsensusInitializeBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusInitializeBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusInitializeBlockResponse;

    /**
     * Verifies a ConsensusInitializeBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusInitializeBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusInitializeBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusInitializeBlockResponse;

    /**
     * Creates a plain object from a ConsensusInitializeBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusInitializeBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusInitializeBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusInitializeBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusInitializeBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        INVALID_STATE = 5,
        UNKNOWN_BLOCK = 6,
    }
}

/** Properties of a ConsensusSummarizeBlockRequest. */
export interface IConsensusSummarizeBlockRequest {}

/** Represents a ConsensusSummarizeBlockRequest. */
export class ConsensusSummarizeBlockRequest implements IConsensusSummarizeBlockRequest {
    /**
     * Constructs a new ConsensusSummarizeBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSummarizeBlockRequest);

    /**
     * Creates a new ConsensusSummarizeBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSummarizeBlockRequest instance
     */
    public static create(properties?: IConsensusSummarizeBlockRequest): ConsensusSummarizeBlockRequest;

    /**
     * Encodes the specified ConsensusSummarizeBlockRequest message. Does not implicitly {@link ConsensusSummarizeBlockRequest.verify|verify} messages.
     * @param message ConsensusSummarizeBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSummarizeBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSummarizeBlockRequest message, length delimited. Does not implicitly {@link ConsensusSummarizeBlockRequest.verify|verify} messages.
     * @param message ConsensusSummarizeBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IConsensusSummarizeBlockRequest,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConsensusSummarizeBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSummarizeBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSummarizeBlockRequest;

    /**
     * Decodes a ConsensusSummarizeBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSummarizeBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSummarizeBlockRequest;

    /**
     * Verifies a ConsensusSummarizeBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSummarizeBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSummarizeBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSummarizeBlockRequest;

    /**
     * Creates a plain object from a ConsensusSummarizeBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusSummarizeBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSummarizeBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSummarizeBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSummarizeBlockResponse. */
export interface IConsensusSummarizeBlockResponse {
    /** ConsensusSummarizeBlockResponse status */
    status?: ConsensusSummarizeBlockResponse.Status | null;

    /** ConsensusSummarizeBlockResponse summary */
    summary?: Uint8Array | null;
}

/** Represents a ConsensusSummarizeBlockResponse. */
export class ConsensusSummarizeBlockResponse implements IConsensusSummarizeBlockResponse {
    /**
     * Constructs a new ConsensusSummarizeBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSummarizeBlockResponse);

    /** ConsensusSummarizeBlockResponse status. */
    public status: ConsensusSummarizeBlockResponse.Status;

    /** ConsensusSummarizeBlockResponse summary. */
    public summary: Uint8Array;

    /**
     * Creates a new ConsensusSummarizeBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSummarizeBlockResponse instance
     */
    public static create(properties?: IConsensusSummarizeBlockResponse): ConsensusSummarizeBlockResponse;

    /**
     * Encodes the specified ConsensusSummarizeBlockResponse message. Does not implicitly {@link ConsensusSummarizeBlockResponse.verify|verify} messages.
     * @param message ConsensusSummarizeBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSummarizeBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSummarizeBlockResponse message, length delimited. Does not implicitly {@link ConsensusSummarizeBlockResponse.verify|verify} messages.
     * @param message ConsensusSummarizeBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IConsensusSummarizeBlockResponse,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConsensusSummarizeBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSummarizeBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSummarizeBlockResponse;

    /**
     * Decodes a ConsensusSummarizeBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSummarizeBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSummarizeBlockResponse;

    /**
     * Verifies a ConsensusSummarizeBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSummarizeBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSummarizeBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSummarizeBlockResponse;

    /**
     * Creates a plain object from a ConsensusSummarizeBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusSummarizeBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSummarizeBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSummarizeBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusSummarizeBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        INVALID_STATE = 5,
        BLOCK_NOT_READY = 6,
    }
}

/** Properties of a ConsensusFinalizeBlockRequest. */
export interface IConsensusFinalizeBlockRequest {
    /** ConsensusFinalizeBlockRequest data */
    data?: Uint8Array | null;
}

/** Represents a ConsensusFinalizeBlockRequest. */
export class ConsensusFinalizeBlockRequest implements IConsensusFinalizeBlockRequest {
    /**
     * Constructs a new ConsensusFinalizeBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusFinalizeBlockRequest);

    /** ConsensusFinalizeBlockRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new ConsensusFinalizeBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusFinalizeBlockRequest instance
     */
    public static create(properties?: IConsensusFinalizeBlockRequest): ConsensusFinalizeBlockRequest;

    /**
     * Encodes the specified ConsensusFinalizeBlockRequest message. Does not implicitly {@link ConsensusFinalizeBlockRequest.verify|verify} messages.
     * @param message ConsensusFinalizeBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusFinalizeBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusFinalizeBlockRequest message, length delimited. Does not implicitly {@link ConsensusFinalizeBlockRequest.verify|verify} messages.
     * @param message ConsensusFinalizeBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusFinalizeBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusFinalizeBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusFinalizeBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusFinalizeBlockRequest;

    /**
     * Decodes a ConsensusFinalizeBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusFinalizeBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusFinalizeBlockRequest;

    /**
     * Verifies a ConsensusFinalizeBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusFinalizeBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusFinalizeBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusFinalizeBlockRequest;

    /**
     * Creates a plain object from a ConsensusFinalizeBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusFinalizeBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusFinalizeBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusFinalizeBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusFinalizeBlockResponse. */
export interface IConsensusFinalizeBlockResponse {
    /** ConsensusFinalizeBlockResponse status */
    status?: ConsensusFinalizeBlockResponse.Status | null;

    /** ConsensusFinalizeBlockResponse blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusFinalizeBlockResponse. */
export class ConsensusFinalizeBlockResponse implements IConsensusFinalizeBlockResponse {
    /**
     * Constructs a new ConsensusFinalizeBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusFinalizeBlockResponse);

    /** ConsensusFinalizeBlockResponse status. */
    public status: ConsensusFinalizeBlockResponse.Status;

    /** ConsensusFinalizeBlockResponse blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusFinalizeBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusFinalizeBlockResponse instance
     */
    public static create(properties?: IConsensusFinalizeBlockResponse): ConsensusFinalizeBlockResponse;

    /**
     * Encodes the specified ConsensusFinalizeBlockResponse message. Does not implicitly {@link ConsensusFinalizeBlockResponse.verify|verify} messages.
     * @param message ConsensusFinalizeBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusFinalizeBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusFinalizeBlockResponse message, length delimited. Does not implicitly {@link ConsensusFinalizeBlockResponse.verify|verify} messages.
     * @param message ConsensusFinalizeBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IConsensusFinalizeBlockResponse,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConsensusFinalizeBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusFinalizeBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusFinalizeBlockResponse;

    /**
     * Decodes a ConsensusFinalizeBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusFinalizeBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusFinalizeBlockResponse;

    /**
     * Verifies a ConsensusFinalizeBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusFinalizeBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusFinalizeBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusFinalizeBlockResponse;

    /**
     * Creates a plain object from a ConsensusFinalizeBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusFinalizeBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusFinalizeBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusFinalizeBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusFinalizeBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        INVALID_STATE = 5,
        BLOCK_NOT_READY = 6,
    }
}

/** Properties of a ConsensusCancelBlockRequest. */
export interface IConsensusCancelBlockRequest {}

/** Represents a ConsensusCancelBlockRequest. */
export class ConsensusCancelBlockRequest implements IConsensusCancelBlockRequest {
    /**
     * Constructs a new ConsensusCancelBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusCancelBlockRequest);

    /**
     * Creates a new ConsensusCancelBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusCancelBlockRequest instance
     */
    public static create(properties?: IConsensusCancelBlockRequest): ConsensusCancelBlockRequest;

    /**
     * Encodes the specified ConsensusCancelBlockRequest message. Does not implicitly {@link ConsensusCancelBlockRequest.verify|verify} messages.
     * @param message ConsensusCancelBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusCancelBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusCancelBlockRequest message, length delimited. Does not implicitly {@link ConsensusCancelBlockRequest.verify|verify} messages.
     * @param message ConsensusCancelBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusCancelBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusCancelBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusCancelBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusCancelBlockRequest;

    /**
     * Decodes a ConsensusCancelBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusCancelBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusCancelBlockRequest;

    /**
     * Verifies a ConsensusCancelBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusCancelBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusCancelBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusCancelBlockRequest;

    /**
     * Creates a plain object from a ConsensusCancelBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusCancelBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusCancelBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusCancelBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusCancelBlockResponse. */
export interface IConsensusCancelBlockResponse {
    /** ConsensusCancelBlockResponse status */
    status?: ConsensusCancelBlockResponse.Status | null;
}

/** Represents a ConsensusCancelBlockResponse. */
export class ConsensusCancelBlockResponse implements IConsensusCancelBlockResponse {
    /**
     * Constructs a new ConsensusCancelBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusCancelBlockResponse);

    /** ConsensusCancelBlockResponse status. */
    public status: ConsensusCancelBlockResponse.Status;

    /**
     * Creates a new ConsensusCancelBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusCancelBlockResponse instance
     */
    public static create(properties?: IConsensusCancelBlockResponse): ConsensusCancelBlockResponse;

    /**
     * Encodes the specified ConsensusCancelBlockResponse message. Does not implicitly {@link ConsensusCancelBlockResponse.verify|verify} messages.
     * @param message ConsensusCancelBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusCancelBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusCancelBlockResponse message, length delimited. Does not implicitly {@link ConsensusCancelBlockResponse.verify|verify} messages.
     * @param message ConsensusCancelBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusCancelBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusCancelBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusCancelBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusCancelBlockResponse;

    /**
     * Decodes a ConsensusCancelBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusCancelBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusCancelBlockResponse;

    /**
     * Verifies a ConsensusCancelBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusCancelBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusCancelBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusCancelBlockResponse;

    /**
     * Creates a plain object from a ConsensusCancelBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusCancelBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusCancelBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusCancelBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusCancelBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        INVALID_STATE = 5,
    }
}

/** Properties of a ConsensusCheckBlocksRequest. */
export interface IConsensusCheckBlocksRequest {
    /** ConsensusCheckBlocksRequest blockIds */
    blockIds?: Uint8Array[] | null;
}

/** Represents a ConsensusCheckBlocksRequest. */
export class ConsensusCheckBlocksRequest implements IConsensusCheckBlocksRequest {
    /**
     * Constructs a new ConsensusCheckBlocksRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusCheckBlocksRequest);

    /** ConsensusCheckBlocksRequest blockIds. */
    public blockIds: Uint8Array[];

    /**
     * Creates a new ConsensusCheckBlocksRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusCheckBlocksRequest instance
     */
    public static create(properties?: IConsensusCheckBlocksRequest): ConsensusCheckBlocksRequest;

    /**
     * Encodes the specified ConsensusCheckBlocksRequest message. Does not implicitly {@link ConsensusCheckBlocksRequest.verify|verify} messages.
     * @param message ConsensusCheckBlocksRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusCheckBlocksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusCheckBlocksRequest message, length delimited. Does not implicitly {@link ConsensusCheckBlocksRequest.verify|verify} messages.
     * @param message ConsensusCheckBlocksRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusCheckBlocksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusCheckBlocksRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusCheckBlocksRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusCheckBlocksRequest;

    /**
     * Decodes a ConsensusCheckBlocksRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusCheckBlocksRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusCheckBlocksRequest;

    /**
     * Verifies a ConsensusCheckBlocksRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusCheckBlocksRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusCheckBlocksRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusCheckBlocksRequest;

    /**
     * Creates a plain object from a ConsensusCheckBlocksRequest message. Also converts values to other types if specified.
     * @param message ConsensusCheckBlocksRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusCheckBlocksRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusCheckBlocksRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusCheckBlocksResponse. */
export interface IConsensusCheckBlocksResponse {
    /** ConsensusCheckBlocksResponse status */
    status?: ConsensusCheckBlocksResponse.Status | null;
}

/** Represents a ConsensusCheckBlocksResponse. */
export class ConsensusCheckBlocksResponse implements IConsensusCheckBlocksResponse {
    /**
     * Constructs a new ConsensusCheckBlocksResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusCheckBlocksResponse);

    /** ConsensusCheckBlocksResponse status. */
    public status: ConsensusCheckBlocksResponse.Status;

    /**
     * Creates a new ConsensusCheckBlocksResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusCheckBlocksResponse instance
     */
    public static create(properties?: IConsensusCheckBlocksResponse): ConsensusCheckBlocksResponse;

    /**
     * Encodes the specified ConsensusCheckBlocksResponse message. Does not implicitly {@link ConsensusCheckBlocksResponse.verify|verify} messages.
     * @param message ConsensusCheckBlocksResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusCheckBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusCheckBlocksResponse message, length delimited. Does not implicitly {@link ConsensusCheckBlocksResponse.verify|verify} messages.
     * @param message ConsensusCheckBlocksResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusCheckBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusCheckBlocksResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusCheckBlocksResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusCheckBlocksResponse;

    /**
     * Decodes a ConsensusCheckBlocksResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusCheckBlocksResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusCheckBlocksResponse;

    /**
     * Verifies a ConsensusCheckBlocksResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusCheckBlocksResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusCheckBlocksResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusCheckBlocksResponse;

    /**
     * Creates a plain object from a ConsensusCheckBlocksResponse message. Also converts values to other types if specified.
     * @param message ConsensusCheckBlocksResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusCheckBlocksResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusCheckBlocksResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusCheckBlocksResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a ConsensusCommitBlockRequest. */
export interface IConsensusCommitBlockRequest {
    /** ConsensusCommitBlockRequest blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusCommitBlockRequest. */
export class ConsensusCommitBlockRequest implements IConsensusCommitBlockRequest {
    /**
     * Constructs a new ConsensusCommitBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusCommitBlockRequest);

    /** ConsensusCommitBlockRequest blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusCommitBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusCommitBlockRequest instance
     */
    public static create(properties?: IConsensusCommitBlockRequest): ConsensusCommitBlockRequest;

    /**
     * Encodes the specified ConsensusCommitBlockRequest message. Does not implicitly {@link ConsensusCommitBlockRequest.verify|verify} messages.
     * @param message ConsensusCommitBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusCommitBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusCommitBlockRequest message, length delimited. Does not implicitly {@link ConsensusCommitBlockRequest.verify|verify} messages.
     * @param message ConsensusCommitBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusCommitBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusCommitBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusCommitBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusCommitBlockRequest;

    /**
     * Decodes a ConsensusCommitBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusCommitBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusCommitBlockRequest;

    /**
     * Verifies a ConsensusCommitBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusCommitBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusCommitBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusCommitBlockRequest;

    /**
     * Creates a plain object from a ConsensusCommitBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusCommitBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusCommitBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusCommitBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusCommitBlockResponse. */
export interface IConsensusCommitBlockResponse {
    /** ConsensusCommitBlockResponse status */
    status?: ConsensusCommitBlockResponse.Status | null;
}

/** Represents a ConsensusCommitBlockResponse. */
export class ConsensusCommitBlockResponse implements IConsensusCommitBlockResponse {
    /**
     * Constructs a new ConsensusCommitBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusCommitBlockResponse);

    /** ConsensusCommitBlockResponse status. */
    public status: ConsensusCommitBlockResponse.Status;

    /**
     * Creates a new ConsensusCommitBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusCommitBlockResponse instance
     */
    public static create(properties?: IConsensusCommitBlockResponse): ConsensusCommitBlockResponse;

    /**
     * Encodes the specified ConsensusCommitBlockResponse message. Does not implicitly {@link ConsensusCommitBlockResponse.verify|verify} messages.
     * @param message ConsensusCommitBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusCommitBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusCommitBlockResponse message, length delimited. Does not implicitly {@link ConsensusCommitBlockResponse.verify|verify} messages.
     * @param message ConsensusCommitBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusCommitBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusCommitBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusCommitBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusCommitBlockResponse;

    /**
     * Decodes a ConsensusCommitBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusCommitBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusCommitBlockResponse;

    /**
     * Verifies a ConsensusCommitBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusCommitBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusCommitBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusCommitBlockResponse;

    /**
     * Creates a plain object from a ConsensusCommitBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusCommitBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusCommitBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusCommitBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusCommitBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a ConsensusIgnoreBlockRequest. */
export interface IConsensusIgnoreBlockRequest {
    /** ConsensusIgnoreBlockRequest blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusIgnoreBlockRequest. */
export class ConsensusIgnoreBlockRequest implements IConsensusIgnoreBlockRequest {
    /**
     * Constructs a new ConsensusIgnoreBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusIgnoreBlockRequest);

    /** ConsensusIgnoreBlockRequest blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusIgnoreBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusIgnoreBlockRequest instance
     */
    public static create(properties?: IConsensusIgnoreBlockRequest): ConsensusIgnoreBlockRequest;

    /**
     * Encodes the specified ConsensusIgnoreBlockRequest message. Does not implicitly {@link ConsensusIgnoreBlockRequest.verify|verify} messages.
     * @param message ConsensusIgnoreBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusIgnoreBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusIgnoreBlockRequest message, length delimited. Does not implicitly {@link ConsensusIgnoreBlockRequest.verify|verify} messages.
     * @param message ConsensusIgnoreBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusIgnoreBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusIgnoreBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusIgnoreBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusIgnoreBlockRequest;

    /**
     * Decodes a ConsensusIgnoreBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusIgnoreBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusIgnoreBlockRequest;

    /**
     * Verifies a ConsensusIgnoreBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusIgnoreBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusIgnoreBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusIgnoreBlockRequest;

    /**
     * Creates a plain object from a ConsensusIgnoreBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusIgnoreBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusIgnoreBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusIgnoreBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusIgnoreBlockResponse. */
export interface IConsensusIgnoreBlockResponse {
    /** ConsensusIgnoreBlockResponse status */
    status?: ConsensusIgnoreBlockResponse.Status | null;
}

/** Represents a ConsensusIgnoreBlockResponse. */
export class ConsensusIgnoreBlockResponse implements IConsensusIgnoreBlockResponse {
    /**
     * Constructs a new ConsensusIgnoreBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusIgnoreBlockResponse);

    /** ConsensusIgnoreBlockResponse status. */
    public status: ConsensusIgnoreBlockResponse.Status;

    /**
     * Creates a new ConsensusIgnoreBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusIgnoreBlockResponse instance
     */
    public static create(properties?: IConsensusIgnoreBlockResponse): ConsensusIgnoreBlockResponse;

    /**
     * Encodes the specified ConsensusIgnoreBlockResponse message. Does not implicitly {@link ConsensusIgnoreBlockResponse.verify|verify} messages.
     * @param message ConsensusIgnoreBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusIgnoreBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusIgnoreBlockResponse message, length delimited. Does not implicitly {@link ConsensusIgnoreBlockResponse.verify|verify} messages.
     * @param message ConsensusIgnoreBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusIgnoreBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusIgnoreBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusIgnoreBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusIgnoreBlockResponse;

    /**
     * Decodes a ConsensusIgnoreBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusIgnoreBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusIgnoreBlockResponse;

    /**
     * Verifies a ConsensusIgnoreBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusIgnoreBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusIgnoreBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusIgnoreBlockResponse;

    /**
     * Creates a plain object from a ConsensusIgnoreBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusIgnoreBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusIgnoreBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusIgnoreBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusIgnoreBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a ConsensusFailBlockRequest. */
export interface IConsensusFailBlockRequest {
    /** ConsensusFailBlockRequest blockId */
    blockId?: Uint8Array | null;
}

/** Represents a ConsensusFailBlockRequest. */
export class ConsensusFailBlockRequest implements IConsensusFailBlockRequest {
    /**
     * Constructs a new ConsensusFailBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusFailBlockRequest);

    /** ConsensusFailBlockRequest blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusFailBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusFailBlockRequest instance
     */
    public static create(properties?: IConsensusFailBlockRequest): ConsensusFailBlockRequest;

    /**
     * Encodes the specified ConsensusFailBlockRequest message. Does not implicitly {@link ConsensusFailBlockRequest.verify|verify} messages.
     * @param message ConsensusFailBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusFailBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusFailBlockRequest message, length delimited. Does not implicitly {@link ConsensusFailBlockRequest.verify|verify} messages.
     * @param message ConsensusFailBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusFailBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusFailBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusFailBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusFailBlockRequest;

    /**
     * Decodes a ConsensusFailBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusFailBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusFailBlockRequest;

    /**
     * Verifies a ConsensusFailBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusFailBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusFailBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusFailBlockRequest;

    /**
     * Creates a plain object from a ConsensusFailBlockRequest message. Also converts values to other types if specified.
     * @param message ConsensusFailBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusFailBlockRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusFailBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusFailBlockResponse. */
export interface IConsensusFailBlockResponse {
    /** ConsensusFailBlockResponse status */
    status?: ConsensusFailBlockResponse.Status | null;
}

/** Represents a ConsensusFailBlockResponse. */
export class ConsensusFailBlockResponse implements IConsensusFailBlockResponse {
    /**
     * Constructs a new ConsensusFailBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusFailBlockResponse);

    /** ConsensusFailBlockResponse status. */
    public status: ConsensusFailBlockResponse.Status;

    /**
     * Creates a new ConsensusFailBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusFailBlockResponse instance
     */
    public static create(properties?: IConsensusFailBlockResponse): ConsensusFailBlockResponse;

    /**
     * Encodes the specified ConsensusFailBlockResponse message. Does not implicitly {@link ConsensusFailBlockResponse.verify|verify} messages.
     * @param message ConsensusFailBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusFailBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusFailBlockResponse message, length delimited. Does not implicitly {@link ConsensusFailBlockResponse.verify|verify} messages.
     * @param message ConsensusFailBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusFailBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusFailBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusFailBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusFailBlockResponse;

    /**
     * Decodes a ConsensusFailBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusFailBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusFailBlockResponse;

    /**
     * Verifies a ConsensusFailBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusFailBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusFailBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusFailBlockResponse;

    /**
     * Creates a plain object from a ConsensusFailBlockResponse message. Also converts values to other types if specified.
     * @param message ConsensusFailBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusFailBlockResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusFailBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusFailBlockResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a ConsensusBlocksGetRequest. */
export interface IConsensusBlocksGetRequest {
    /** ConsensusBlocksGetRequest blockIds */
    blockIds?: Uint8Array[] | null;
}

/** Represents a ConsensusBlocksGetRequest. */
export class ConsensusBlocksGetRequest implements IConsensusBlocksGetRequest {
    /**
     * Constructs a new ConsensusBlocksGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusBlocksGetRequest);

    /** ConsensusBlocksGetRequest blockIds. */
    public blockIds: Uint8Array[];

    /**
     * Creates a new ConsensusBlocksGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusBlocksGetRequest instance
     */
    public static create(properties?: IConsensusBlocksGetRequest): ConsensusBlocksGetRequest;

    /**
     * Encodes the specified ConsensusBlocksGetRequest message. Does not implicitly {@link ConsensusBlocksGetRequest.verify|verify} messages.
     * @param message ConsensusBlocksGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusBlocksGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusBlocksGetRequest message, length delimited. Does not implicitly {@link ConsensusBlocksGetRequest.verify|verify} messages.
     * @param message ConsensusBlocksGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusBlocksGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusBlocksGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusBlocksGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusBlocksGetRequest;

    /**
     * Decodes a ConsensusBlocksGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusBlocksGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusBlocksGetRequest;

    /**
     * Verifies a ConsensusBlocksGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusBlocksGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusBlocksGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusBlocksGetRequest;

    /**
     * Creates a plain object from a ConsensusBlocksGetRequest message. Also converts values to other types if specified.
     * @param message ConsensusBlocksGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusBlocksGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusBlocksGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusBlocksGetResponse. */
export interface IConsensusBlocksGetResponse {
    /** ConsensusBlocksGetResponse status */
    status?: ConsensusBlocksGetResponse.Status | null;

    /** ConsensusBlocksGetResponse blocks */
    blocks?: IConsensusBlock[] | null;
}

/** Represents a ConsensusBlocksGetResponse. */
export class ConsensusBlocksGetResponse implements IConsensusBlocksGetResponse {
    /**
     * Constructs a new ConsensusBlocksGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusBlocksGetResponse);

    /** ConsensusBlocksGetResponse status. */
    public status: ConsensusBlocksGetResponse.Status;

    /** ConsensusBlocksGetResponse blocks. */
    public blocks: IConsensusBlock[];

    /**
     * Creates a new ConsensusBlocksGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusBlocksGetResponse instance
     */
    public static create(properties?: IConsensusBlocksGetResponse): ConsensusBlocksGetResponse;

    /**
     * Encodes the specified ConsensusBlocksGetResponse message. Does not implicitly {@link ConsensusBlocksGetResponse.verify|verify} messages.
     * @param message ConsensusBlocksGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusBlocksGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusBlocksGetResponse message, length delimited. Does not implicitly {@link ConsensusBlocksGetResponse.verify|verify} messages.
     * @param message ConsensusBlocksGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusBlocksGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusBlocksGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusBlocksGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusBlocksGetResponse;

    /**
     * Decodes a ConsensusBlocksGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusBlocksGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusBlocksGetResponse;

    /**
     * Verifies a ConsensusBlocksGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusBlocksGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusBlocksGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusBlocksGetResponse;

    /**
     * Creates a plain object from a ConsensusBlocksGetResponse message. Also converts values to other types if specified.
     * @param message ConsensusBlocksGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusBlocksGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusBlocksGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusBlocksGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a ConsensusChainHeadGetRequest. */
export interface IConsensusChainHeadGetRequest {}

/** Represents a ConsensusChainHeadGetRequest. */
export class ConsensusChainHeadGetRequest implements IConsensusChainHeadGetRequest {
    /**
     * Constructs a new ConsensusChainHeadGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusChainHeadGetRequest);

    /**
     * Creates a new ConsensusChainHeadGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusChainHeadGetRequest instance
     */
    public static create(properties?: IConsensusChainHeadGetRequest): ConsensusChainHeadGetRequest;

    /**
     * Encodes the specified ConsensusChainHeadGetRequest message. Does not implicitly {@link ConsensusChainHeadGetRequest.verify|verify} messages.
     * @param message ConsensusChainHeadGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusChainHeadGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusChainHeadGetRequest message, length delimited. Does not implicitly {@link ConsensusChainHeadGetRequest.verify|verify} messages.
     * @param message ConsensusChainHeadGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusChainHeadGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusChainHeadGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusChainHeadGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusChainHeadGetRequest;

    /**
     * Decodes a ConsensusChainHeadGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusChainHeadGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusChainHeadGetRequest;

    /**
     * Verifies a ConsensusChainHeadGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusChainHeadGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusChainHeadGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusChainHeadGetRequest;

    /**
     * Creates a plain object from a ConsensusChainHeadGetRequest message. Also converts values to other types if specified.
     * @param message ConsensusChainHeadGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusChainHeadGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusChainHeadGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusChainHeadGetResponse. */
export interface IConsensusChainHeadGetResponse {
    /** ConsensusChainHeadGetResponse status */
    status?: ConsensusChainHeadGetResponse.Status | null;

    /** ConsensusChainHeadGetResponse block */
    block?: IConsensusBlock | null;
}

/** Represents a ConsensusChainHeadGetResponse. */
export class ConsensusChainHeadGetResponse implements IConsensusChainHeadGetResponse {
    /**
     * Constructs a new ConsensusChainHeadGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusChainHeadGetResponse);

    /** ConsensusChainHeadGetResponse status. */
    public status: ConsensusChainHeadGetResponse.Status;

    /** ConsensusChainHeadGetResponse block. */
    public block?: IConsensusBlock | null;

    /**
     * Creates a new ConsensusChainHeadGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusChainHeadGetResponse instance
     */
    public static create(properties?: IConsensusChainHeadGetResponse): ConsensusChainHeadGetResponse;

    /**
     * Encodes the specified ConsensusChainHeadGetResponse message. Does not implicitly {@link ConsensusChainHeadGetResponse.verify|verify} messages.
     * @param message ConsensusChainHeadGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusChainHeadGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusChainHeadGetResponse message, length delimited. Does not implicitly {@link ConsensusChainHeadGetResponse.verify|verify} messages.
     * @param message ConsensusChainHeadGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusChainHeadGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusChainHeadGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusChainHeadGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusChainHeadGetResponse;

    /**
     * Decodes a ConsensusChainHeadGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusChainHeadGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusChainHeadGetResponse;

    /**
     * Verifies a ConsensusChainHeadGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusChainHeadGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusChainHeadGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusChainHeadGetResponse;

    /**
     * Creates a plain object from a ConsensusChainHeadGetResponse message. Also converts values to other types if specified.
     * @param message ConsensusChainHeadGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusChainHeadGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusChainHeadGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusChainHeadGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        NO_CHAIN_HEAD = 5,
    }
}

/** Properties of a ConsensusSettingsGetRequest. */
export interface IConsensusSettingsGetRequest {
    /** ConsensusSettingsGetRequest blockId */
    blockId?: Uint8Array | null;

    /** ConsensusSettingsGetRequest keys */
    keys?: string[] | null;
}

/** Represents a ConsensusSettingsGetRequest. */
export class ConsensusSettingsGetRequest implements IConsensusSettingsGetRequest {
    /**
     * Constructs a new ConsensusSettingsGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSettingsGetRequest);

    /** ConsensusSettingsGetRequest blockId. */
    public blockId: Uint8Array;

    /** ConsensusSettingsGetRequest keys. */
    public keys: string[];

    /**
     * Creates a new ConsensusSettingsGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSettingsGetRequest instance
     */
    public static create(properties?: IConsensusSettingsGetRequest): ConsensusSettingsGetRequest;

    /**
     * Encodes the specified ConsensusSettingsGetRequest message. Does not implicitly {@link ConsensusSettingsGetRequest.verify|verify} messages.
     * @param message ConsensusSettingsGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSettingsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSettingsGetRequest message, length delimited. Does not implicitly {@link ConsensusSettingsGetRequest.verify|verify} messages.
     * @param message ConsensusSettingsGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSettingsGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSettingsGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSettingsGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSettingsGetRequest;

    /**
     * Decodes a ConsensusSettingsGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSettingsGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSettingsGetRequest;

    /**
     * Verifies a ConsensusSettingsGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSettingsGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSettingsGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSettingsGetRequest;

    /**
     * Creates a plain object from a ConsensusSettingsGetRequest message. Also converts values to other types if specified.
     * @param message ConsensusSettingsGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSettingsGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSettingsGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSettingsGetResponse. */
export interface IConsensusSettingsGetResponse {
    /** ConsensusSettingsGetResponse status */
    status?: ConsensusSettingsGetResponse.Status | null;

    /** ConsensusSettingsGetResponse entries */
    entries?: IConsensusSettingsEntry[] | null;
}

/** Represents a ConsensusSettingsGetResponse. */
export class ConsensusSettingsGetResponse implements IConsensusSettingsGetResponse {
    /**
     * Constructs a new ConsensusSettingsGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSettingsGetResponse);

    /** ConsensusSettingsGetResponse status. */
    public status: ConsensusSettingsGetResponse.Status;

    /** ConsensusSettingsGetResponse entries. */
    public entries: IConsensusSettingsEntry[];

    /**
     * Creates a new ConsensusSettingsGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSettingsGetResponse instance
     */
    public static create(properties?: IConsensusSettingsGetResponse): ConsensusSettingsGetResponse;

    /**
     * Encodes the specified ConsensusSettingsGetResponse message. Does not implicitly {@link ConsensusSettingsGetResponse.verify|verify} messages.
     * @param message ConsensusSettingsGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSettingsGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSettingsGetResponse message, length delimited. Does not implicitly {@link ConsensusSettingsGetResponse.verify|verify} messages.
     * @param message ConsensusSettingsGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSettingsGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSettingsGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSettingsGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusSettingsGetResponse;

    /**
     * Decodes a ConsensusSettingsGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSettingsGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusSettingsGetResponse;

    /**
     * Verifies a ConsensusSettingsGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusSettingsGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSettingsGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSettingsGetResponse;

    /**
     * Creates a plain object from a ConsensusSettingsGetResponse message. Also converts values to other types if specified.
     * @param message ConsensusSettingsGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusSettingsGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusSettingsGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusSettingsGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a ConsensusStateGetRequest. */
export interface IConsensusStateGetRequest {
    /** ConsensusStateGetRequest blockId */
    blockId?: Uint8Array | null;

    /** ConsensusStateGetRequest addresses */
    addresses?: string[] | null;
}

/** Represents a ConsensusStateGetRequest. */
export class ConsensusStateGetRequest implements IConsensusStateGetRequest {
    /**
     * Constructs a new ConsensusStateGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusStateGetRequest);

    /** ConsensusStateGetRequest blockId. */
    public blockId: Uint8Array;

    /** ConsensusStateGetRequest addresses. */
    public addresses: string[];

    /**
     * Creates a new ConsensusStateGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusStateGetRequest instance
     */
    public static create(properties?: IConsensusStateGetRequest): ConsensusStateGetRequest;

    /**
     * Encodes the specified ConsensusStateGetRequest message. Does not implicitly {@link ConsensusStateGetRequest.verify|verify} messages.
     * @param message ConsensusStateGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusStateGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusStateGetRequest message, length delimited. Does not implicitly {@link ConsensusStateGetRequest.verify|verify} messages.
     * @param message ConsensusStateGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusStateGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusStateGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusStateGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusStateGetRequest;

    /**
     * Decodes a ConsensusStateGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusStateGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusStateGetRequest;

    /**
     * Verifies a ConsensusStateGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusStateGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusStateGetRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusStateGetRequest;

    /**
     * Creates a plain object from a ConsensusStateGetRequest message. Also converts values to other types if specified.
     * @param message ConsensusStateGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusStateGetRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusStateGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusStateGetResponse. */
export interface IConsensusStateGetResponse {
    /** ConsensusStateGetResponse status */
    status?: ConsensusStateGetResponse.Status | null;

    /** ConsensusStateGetResponse entries */
    entries?: IConsensusStateEntry[] | null;
}

/** Represents a ConsensusStateGetResponse. */
export class ConsensusStateGetResponse implements IConsensusStateGetResponse {
    /**
     * Constructs a new ConsensusStateGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusStateGetResponse);

    /** ConsensusStateGetResponse status. */
    public status: ConsensusStateGetResponse.Status;

    /** ConsensusStateGetResponse entries. */
    public entries: IConsensusStateEntry[];

    /**
     * Creates a new ConsensusStateGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusStateGetResponse instance
     */
    public static create(properties?: IConsensusStateGetResponse): ConsensusStateGetResponse;

    /**
     * Encodes the specified ConsensusStateGetResponse message. Does not implicitly {@link ConsensusStateGetResponse.verify|verify} messages.
     * @param message ConsensusStateGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusStateGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusStateGetResponse message, length delimited. Does not implicitly {@link ConsensusStateGetResponse.verify|verify} messages.
     * @param message ConsensusStateGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusStateGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusStateGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusStateGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ConsensusStateGetResponse;

    /**
     * Decodes a ConsensusStateGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusStateGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ConsensusStateGetResponse;

    /**
     * Verifies a ConsensusStateGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsensusStateGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusStateGetResponse
     */
    public static fromObject(object: { [k: string]: any }): ConsensusStateGetResponse;

    /**
     * Creates a plain object from a ConsensusStateGetResponse message. Also converts values to other types if specified.
     * @param message ConsensusStateGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: ConsensusStateGetResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConsensusStateGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusStateGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        BAD_REQUEST = 2,
        SERVICE_ERROR = 3,
        NOT_READY = 4,
        UNKNOWN_BLOCK = 5,
    }
}

/** Properties of a GenesisData. */
export interface IGenesisData {
    /** GenesisData batches */
    batches?: IBatch[] | null;
}

/** Represents a GenesisData. */
export class GenesisData implements IGenesisData {
    /**
     * Constructs a new GenesisData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenesisData);

    /** GenesisData batches. */
    public batches: IBatch[];

    /**
     * Creates a new GenesisData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenesisData instance
     */
    public static create(properties?: IGenesisData): GenesisData;

    /**
     * Encodes the specified GenesisData message. Does not implicitly {@link GenesisData.verify|verify} messages.
     * @param message GenesisData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenesisData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenesisData message, length delimited. Does not implicitly {@link GenesisData.verify|verify} messages.
     * @param message GenesisData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenesisData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenesisData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenesisData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GenesisData;

    /**
     * Decodes a GenesisData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenesisData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GenesisData;

    /**
     * Verifies a GenesisData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GenesisData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenesisData
     */
    public static fromObject(object: { [k: string]: any }): GenesisData;

    /**
     * Creates a plain object from a GenesisData message. Also converts values to other types if specified.
     * @param message GenesisData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenesisData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenesisData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Policy. */
export interface IPolicy {
    /** Policy name */
    name?: string | null;

    /** Policy entries */
    entries?: Policy.IEntry[] | null;
}

/** Represents a Policy. */
export class Policy implements IPolicy {
    /**
     * Constructs a new Policy.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPolicy);

    /** Policy name. */
    public name: string;

    /** Policy entries. */
    public entries: Policy.IEntry[];

    /**
     * Creates a new Policy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Policy instance
     */
    public static create(properties?: IPolicy): Policy;

    /**
     * Encodes the specified Policy message. Does not implicitly {@link Policy.verify|verify} messages.
     * @param message Policy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Policy message, length delimited. Does not implicitly {@link Policy.verify|verify} messages.
     * @param message Policy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Policy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Policy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Policy;

    /**
     * Decodes a Policy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Policy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Policy;

    /**
     * Verifies a Policy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Policy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Policy
     */
    public static fromObject(object: { [k: string]: any }): Policy;

    /**
     * Creates a plain object from a Policy message. Also converts values to other types if specified.
     * @param message Policy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Policy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Policy {
    /** EntryType enum. */
    enum EntryType {
        ENTRY_TYPE_UNSET = 0,
        PERMIT_KEY = 1,
        DENY_KEY = 2,
    }

    /** Properties of an Entry. */
    interface IEntry {
        /** Entry type */
        type?: Policy.EntryType | null;

        /** Entry key */
        key?: string | null;
    }

    /** Represents an Entry. */
    class Entry implements IEntry {
        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: Policy.IEntry);

        /** Entry type. */
        public type: Policy.EntryType;

        /** Entry key. */
        public key: string;

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: Policy.IEntry): Policy.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link Policy.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Policy.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link Policy.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Policy.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Policy.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Policy.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): Policy.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Policy.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a PolicyList. */
export interface IPolicyList {
    /** PolicyList policies */
    policies?: IPolicy[] | null;
}

/** Represents a PolicyList. */
export class PolicyList implements IPolicyList {
    /**
     * Constructs a new PolicyList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPolicyList);

    /** PolicyList policies. */
    public policies: IPolicy[];

    /**
     * Creates a new PolicyList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PolicyList instance
     */
    public static create(properties?: IPolicyList): PolicyList;

    /**
     * Encodes the specified PolicyList message. Does not implicitly {@link PolicyList.verify|verify} messages.
     * @param message PolicyList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPolicyList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PolicyList message, length delimited. Does not implicitly {@link PolicyList.verify|verify} messages.
     * @param message PolicyList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPolicyList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PolicyList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PolicyList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PolicyList;

    /**
     * Decodes a PolicyList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PolicyList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PolicyList;

    /**
     * Verifies a PolicyList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PolicyList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PolicyList
     */
    public static fromObject(object: { [k: string]: any }): PolicyList;

    /**
     * Creates a plain object from a PolicyList message. Also converts values to other types if specified.
     * @param message PolicyList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PolicyList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PolicyList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Role. */
export interface IRole {
    /** Role name */
    name?: string | null;

    /** Role policyName */
    policyName?: string | null;
}

/** Represents a Role. */
export class Role implements IRole {
    /**
     * Constructs a new Role.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRole);

    /** Role name. */
    public name: string;

    /** Role policyName. */
    public policyName: string;

    /**
     * Creates a new Role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Role instance
     */
    public static create(properties?: IRole): Role;

    /**
     * Encodes the specified Role message. Does not implicitly {@link Role.verify|verify} messages.
     * @param message Role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRole, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Role message, length delimited. Does not implicitly {@link Role.verify|verify} messages.
     * @param message Role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRole, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Role;

    /**
     * Decodes a Role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Role;

    /**
     * Verifies a Role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Role
     */
    public static fromObject(object: { [k: string]: any }): Role;

    /**
     * Creates a plain object from a Role message. Also converts values to other types if specified.
     * @param message Role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoleList. */
export interface IRoleList {
    /** RoleList roles */
    roles?: IRole[] | null;
}

/** Represents a RoleList. */
export class RoleList implements IRoleList {
    /**
     * Constructs a new RoleList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoleList);

    /** RoleList roles. */
    public roles: IRole[];

    /**
     * Creates a new RoleList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoleList instance
     */
    public static create(properties?: IRoleList): RoleList;

    /**
     * Encodes the specified RoleList message. Does not implicitly {@link RoleList.verify|verify} messages.
     * @param message RoleList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoleList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoleList message, length delimited. Does not implicitly {@link RoleList.verify|verify} messages.
     * @param message RoleList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoleList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoleList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoleList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): RoleList;

    /**
     * Decodes a RoleList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoleList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): RoleList;

    /**
     * Verifies a RoleList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a RoleList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoleList
     */
    public static fromObject(object: { [k: string]: any }): RoleList;

    /**
     * Creates a plain object from a RoleList message. Also converts values to other types if specified.
     * @param message RoleList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoleList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoleList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChangeLogEntry. */
export interface IChangeLogEntry {
    /** ChangeLogEntry parent */
    parent?: Uint8Array | null;

    /** ChangeLogEntry additions */
    additions?: Uint8Array[] | null;

    /** ChangeLogEntry successors */
    successors?: ChangeLogEntry.ISuccessor[] | null;
}

/** Represents a ChangeLogEntry. */
export class ChangeLogEntry implements IChangeLogEntry {
    /**
     * Constructs a new ChangeLogEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeLogEntry);

    /** ChangeLogEntry parent. */
    public parent: Uint8Array;

    /** ChangeLogEntry additions. */
    public additions: Uint8Array[];

    /** ChangeLogEntry successors. */
    public successors: ChangeLogEntry.ISuccessor[];

    /**
     * Creates a new ChangeLogEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeLogEntry instance
     */
    public static create(properties?: IChangeLogEntry): ChangeLogEntry;

    /**
     * Encodes the specified ChangeLogEntry message. Does not implicitly {@link ChangeLogEntry.verify|verify} messages.
     * @param message ChangeLogEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeLogEntry message, length delimited. Does not implicitly {@link ChangeLogEntry.verify|verify} messages.
     * @param message ChangeLogEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeLogEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeLogEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ChangeLogEntry;

    /**
     * Decodes a ChangeLogEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeLogEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ChangeLogEntry;

    /**
     * Verifies a ChangeLogEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChangeLogEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeLogEntry
     */
    public static fromObject(object: { [k: string]: any }): ChangeLogEntry;

    /**
     * Creates a plain object from a ChangeLogEntry message. Also converts values to other types if specified.
     * @param message ChangeLogEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeLogEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ChangeLogEntry {
    /** Properties of a Successor. */
    interface ISuccessor {
        /** Successor successor */
        successor?: Uint8Array | null;

        /** Successor deletions */
        deletions?: Uint8Array[] | null;
    }

    /** Represents a Successor. */
    class Successor implements ISuccessor {
        /**
         * Constructs a new Successor.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChangeLogEntry.ISuccessor);

        /** Successor successor. */
        public successor: Uint8Array;

        /** Successor deletions. */
        public deletions: Uint8Array[];

        /**
         * Creates a new Successor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Successor instance
         */
        public static create(properties?: ChangeLogEntry.ISuccessor): ChangeLogEntry.Successor;

        /**
         * Encodes the specified Successor message. Does not implicitly {@link ChangeLogEntry.Successor.verify|verify} messages.
         * @param message Successor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChangeLogEntry.ISuccessor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Successor message, length delimited. Does not implicitly {@link ChangeLogEntry.Successor.verify|verify} messages.
         * @param message Successor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChangeLogEntry.ISuccessor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Successor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Successor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ChangeLogEntry.Successor;

        /**
         * Decodes a Successor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Successor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ChangeLogEntry.Successor;

        /**
         * Verifies a Successor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Successor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Successor
         */
        public static fromObject(object: { [k: string]: any }): ChangeLogEntry.Successor;

        /**
         * Creates a plain object from a Successor message. Also converts values to other types if specified.
         * @param message Successor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: ChangeLogEntry.Successor,
            options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        /**
         * Converts this Successor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a DisconnectMessage. */
export interface IDisconnectMessage {}

/** Represents a DisconnectMessage. */
export class DisconnectMessage implements IDisconnectMessage {
    /**
     * Constructs a new DisconnectMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnectMessage);

    /**
     * Creates a new DisconnectMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisconnectMessage instance
     */
    public static create(properties?: IDisconnectMessage): DisconnectMessage;

    /**
     * Encodes the specified DisconnectMessage message. Does not implicitly {@link DisconnectMessage.verify|verify} messages.
     * @param message DisconnectMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisconnectMessage message, length delimited. Does not implicitly {@link DisconnectMessage.verify|verify} messages.
     * @param message DisconnectMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisconnectMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisconnectMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): DisconnectMessage;

    /**
     * Decodes a DisconnectMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisconnectMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): DisconnectMessage;

    /**
     * Verifies a DisconnectMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DisconnectMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisconnectMessage
     */
    public static fromObject(object: { [k: string]: any }): DisconnectMessage;

    /**
     * Creates a plain object from a DisconnectMessage message. Also converts values to other types if specified.
     * @param message DisconnectMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisconnectMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisconnectMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PeerRegisterRequest. */
export interface IPeerRegisterRequest {
    /** PeerRegisterRequest endpoint */
    endpoint?: string | null;

    /** PeerRegisterRequest protocolVersion */
    protocolVersion?: number | null;
}

/** Represents a PeerRegisterRequest. */
export class PeerRegisterRequest implements IPeerRegisterRequest {
    /**
     * Constructs a new PeerRegisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPeerRegisterRequest);

    /** PeerRegisterRequest endpoint. */
    public endpoint: string;

    /** PeerRegisterRequest protocolVersion. */
    public protocolVersion: number;

    /**
     * Creates a new PeerRegisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PeerRegisterRequest instance
     */
    public static create(properties?: IPeerRegisterRequest): PeerRegisterRequest;

    /**
     * Encodes the specified PeerRegisterRequest message. Does not implicitly {@link PeerRegisterRequest.verify|verify} messages.
     * @param message PeerRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPeerRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PeerRegisterRequest message, length delimited. Does not implicitly {@link PeerRegisterRequest.verify|verify} messages.
     * @param message PeerRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPeerRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PeerRegisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PeerRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PeerRegisterRequest;

    /**
     * Decodes a PeerRegisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PeerRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PeerRegisterRequest;

    /**
     * Verifies a PeerRegisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PeerRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PeerRegisterRequest
     */
    public static fromObject(object: { [k: string]: any }): PeerRegisterRequest;

    /**
     * Creates a plain object from a PeerRegisterRequest message. Also converts values to other types if specified.
     * @param message PeerRegisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PeerRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PeerRegisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PeerUnregisterRequest. */
export interface IPeerUnregisterRequest {}

/** Represents a PeerUnregisterRequest. */
export class PeerUnregisterRequest implements IPeerUnregisterRequest {
    /**
     * Constructs a new PeerUnregisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPeerUnregisterRequest);

    /**
     * Creates a new PeerUnregisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PeerUnregisterRequest instance
     */
    public static create(properties?: IPeerUnregisterRequest): PeerUnregisterRequest;

    /**
     * Encodes the specified PeerUnregisterRequest message. Does not implicitly {@link PeerUnregisterRequest.verify|verify} messages.
     * @param message PeerUnregisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPeerUnregisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PeerUnregisterRequest message, length delimited. Does not implicitly {@link PeerUnregisterRequest.verify|verify} messages.
     * @param message PeerUnregisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPeerUnregisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PeerUnregisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PeerUnregisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PeerUnregisterRequest;

    /**
     * Decodes a PeerUnregisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PeerUnregisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PeerUnregisterRequest;

    /**
     * Verifies a PeerUnregisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PeerUnregisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PeerUnregisterRequest
     */
    public static fromObject(object: { [k: string]: any }): PeerUnregisterRequest;

    /**
     * Creates a plain object from a PeerUnregisterRequest message. Also converts values to other types if specified.
     * @param message PeerUnregisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: PeerUnregisterRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this PeerUnregisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetPeersRequest. */
export interface IGetPeersRequest {}

/** Represents a GetPeersRequest. */
export class GetPeersRequest implements IGetPeersRequest {
    /**
     * Constructs a new GetPeersRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetPeersRequest);

    /**
     * Creates a new GetPeersRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPeersRequest instance
     */
    public static create(properties?: IGetPeersRequest): GetPeersRequest;

    /**
     * Encodes the specified GetPeersRequest message. Does not implicitly {@link GetPeersRequest.verify|verify} messages.
     * @param message GetPeersRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetPeersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetPeersRequest message, length delimited. Does not implicitly {@link GetPeersRequest.verify|verify} messages.
     * @param message GetPeersRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetPeersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetPeersRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPeersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GetPeersRequest;

    /**
     * Decodes a GetPeersRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPeersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GetPeersRequest;

    /**
     * Verifies a GetPeersRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetPeersRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetPeersRequest
     */
    public static fromObject(object: { [k: string]: any }): GetPeersRequest;

    /**
     * Creates a plain object from a GetPeersRequest message. Also converts values to other types if specified.
     * @param message GetPeersRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetPeersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetPeersRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetPeersResponse. */
export interface IGetPeersResponse {
    /** GetPeersResponse peerEndpoints */
    peerEndpoints?: string[] | null;
}

/** Represents a GetPeersResponse. */
export class GetPeersResponse implements IGetPeersResponse {
    /**
     * Constructs a new GetPeersResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetPeersResponse);

    /** GetPeersResponse peerEndpoints. */
    public peerEndpoints: string[];

    /**
     * Creates a new GetPeersResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPeersResponse instance
     */
    public static create(properties?: IGetPeersResponse): GetPeersResponse;

    /**
     * Encodes the specified GetPeersResponse message. Does not implicitly {@link GetPeersResponse.verify|verify} messages.
     * @param message GetPeersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetPeersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetPeersResponse message, length delimited. Does not implicitly {@link GetPeersResponse.verify|verify} messages.
     * @param message GetPeersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetPeersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetPeersResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPeersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GetPeersResponse;

    /**
     * Decodes a GetPeersResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPeersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GetPeersResponse;

    /**
     * Verifies a GetPeersResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetPeersResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetPeersResponse
     */
    public static fromObject(object: { [k: string]: any }): GetPeersResponse;

    /**
     * Creates a plain object from a GetPeersResponse message. Also converts values to other types if specified.
     * @param message GetPeersResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetPeersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetPeersResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PingRequest. */
export interface IPingRequest {}

/** Represents a PingRequest. */
export class PingRequest implements IPingRequest {
    /**
     * Constructs a new PingRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPingRequest);

    /**
     * Creates a new PingRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingRequest instance
     */
    public static create(properties?: IPingRequest): PingRequest;

    /**
     * Encodes the specified PingRequest message. Does not implicitly {@link PingRequest.verify|verify} messages.
     * @param message PingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link PingRequest.verify|verify} messages.
     * @param message PingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PingRequest;

    /**
     * Decodes a PingRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PingRequest;

    /**
     * Verifies a PingRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PingRequest
     */
    public static fromObject(object: { [k: string]: any }): PingRequest;

    /**
     * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
     * @param message PingRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PingRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PingResponse. */
export interface IPingResponse {}

/** Represents a PingResponse. */
export class PingResponse implements IPingResponse {
    /**
     * Constructs a new PingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPingResponse);

    /**
     * Creates a new PingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingResponse instance
     */
    public static create(properties?: IPingResponse): PingResponse;

    /**
     * Encodes the specified PingResponse message. Does not implicitly {@link PingResponse.verify|verify} messages.
     * @param message PingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link PingResponse.verify|verify} messages.
     * @param message PingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PingResponse;

    /**
     * Decodes a PingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PingResponse;

    /**
     * Verifies a PingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PingResponse
     */
    public static fromObject(object: { [k: string]: any }): PingResponse;

    /**
     * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
     * @param message PingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GossipMessage. */
export interface IGossipMessage {
    /** GossipMessage content */
    content?: Uint8Array | null;

    /** GossipMessage contentType */
    contentType?: GossipMessage.ContentType | null;

    /** GossipMessage timeToLive */
    timeToLive?: number | null;
}

/** Represents a GossipMessage. */
export class GossipMessage implements IGossipMessage {
    /**
     * Constructs a new GossipMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipMessage);

    /** GossipMessage content. */
    public content: Uint8Array;

    /** GossipMessage contentType. */
    public contentType: GossipMessage.ContentType;

    /** GossipMessage timeToLive. */
    public timeToLive: number;

    /**
     * Creates a new GossipMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipMessage instance
     */
    public static create(properties?: IGossipMessage): GossipMessage;

    /**
     * Encodes the specified GossipMessage message. Does not implicitly {@link GossipMessage.verify|verify} messages.
     * @param message GossipMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipMessage message, length delimited. Does not implicitly {@link GossipMessage.verify|verify} messages.
     * @param message GossipMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGossipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GossipMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipMessage;

    /**
     * Decodes a GossipMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipMessage;

    /**
     * Verifies a GossipMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipMessage
     */
    public static fromObject(object: { [k: string]: any }): GossipMessage;

    /**
     * Creates a plain object from a GossipMessage message. Also converts values to other types if specified.
     * @param message GossipMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GossipMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GossipMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace GossipMessage {
    /** ContentType enum. */
    enum ContentType {
        CONTENT_TYPE_UNSET = 0,
        BLOCK = 1,
        BATCH = 2,
    }
}

/** Properties of a NetworkAcknowledgement. */
export interface INetworkAcknowledgement {
    /** NetworkAcknowledgement status */
    status?: NetworkAcknowledgement.Status | null;
}

/** Represents a NetworkAcknowledgement. */
export class NetworkAcknowledgement implements INetworkAcknowledgement {
    /**
     * Constructs a new NetworkAcknowledgement.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetworkAcknowledgement);

    /** NetworkAcknowledgement status. */
    public status: NetworkAcknowledgement.Status;

    /**
     * Creates a new NetworkAcknowledgement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetworkAcknowledgement instance
     */
    public static create(properties?: INetworkAcknowledgement): NetworkAcknowledgement;

    /**
     * Encodes the specified NetworkAcknowledgement message. Does not implicitly {@link NetworkAcknowledgement.verify|verify} messages.
     * @param message NetworkAcknowledgement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetworkAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetworkAcknowledgement message, length delimited. Does not implicitly {@link NetworkAcknowledgement.verify|verify} messages.
     * @param message NetworkAcknowledgement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetworkAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetworkAcknowledgement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetworkAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): NetworkAcknowledgement;

    /**
     * Decodes a NetworkAcknowledgement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetworkAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): NetworkAcknowledgement;

    /**
     * Verifies a NetworkAcknowledgement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a NetworkAcknowledgement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetworkAcknowledgement
     */
    public static fromObject(object: { [k: string]: any }): NetworkAcknowledgement;

    /**
     * Creates a plain object from a NetworkAcknowledgement message. Also converts values to other types if specified.
     * @param message NetworkAcknowledgement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: NetworkAcknowledgement,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this NetworkAcknowledgement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace NetworkAcknowledgement {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }
}

/** Properties of a GossipBlockRequest. */
export interface IGossipBlockRequest {
    /** GossipBlockRequest blockId */
    blockId?: string | null;

    /** GossipBlockRequest nonce */
    nonce?: string | null;

    /** GossipBlockRequest timeToLive */
    timeToLive?: number | null;
}

/** Represents a GossipBlockRequest. */
export class GossipBlockRequest implements IGossipBlockRequest {
    /**
     * Constructs a new GossipBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipBlockRequest);

    /** GossipBlockRequest blockId. */
    public blockId: string;

    /** GossipBlockRequest nonce. */
    public nonce: string;

    /** GossipBlockRequest timeToLive. */
    public timeToLive: number;

    /**
     * Creates a new GossipBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipBlockRequest instance
     */
    public static create(properties?: IGossipBlockRequest): GossipBlockRequest;

    /**
     * Encodes the specified GossipBlockRequest message. Does not implicitly {@link GossipBlockRequest.verify|verify} messages.
     * @param message GossipBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipBlockRequest message, length delimited. Does not implicitly {@link GossipBlockRequest.verify|verify} messages.
     * @param message GossipBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGossipBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GossipBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipBlockRequest;

    /**
     * Decodes a GossipBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipBlockRequest;

    /**
     * Verifies a GossipBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): GossipBlockRequest;

    /**
     * Creates a plain object from a GossipBlockRequest message. Also converts values to other types if specified.
     * @param message GossipBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GossipBlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GossipBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GossipBlockResponse. */
export interface IGossipBlockResponse {
    /** GossipBlockResponse content */
    content?: Uint8Array | null;
}

/** Represents a GossipBlockResponse. */
export class GossipBlockResponse implements IGossipBlockResponse {
    /**
     * Constructs a new GossipBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipBlockResponse);

    /** GossipBlockResponse content. */
    public content: Uint8Array;

    /**
     * Creates a new GossipBlockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipBlockResponse instance
     */
    public static create(properties?: IGossipBlockResponse): GossipBlockResponse;

    /**
     * Encodes the specified GossipBlockResponse message. Does not implicitly {@link GossipBlockResponse.verify|verify} messages.
     * @param message GossipBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipBlockResponse message, length delimited. Does not implicitly {@link GossipBlockResponse.verify|verify} messages.
     * @param message GossipBlockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGossipBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GossipBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipBlockResponse;

    /**
     * Decodes a GossipBlockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipBlockResponse;

    /**
     * Verifies a GossipBlockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipBlockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipBlockResponse
     */
    public static fromObject(object: { [k: string]: any }): GossipBlockResponse;

    /**
     * Creates a plain object from a GossipBlockResponse message. Also converts values to other types if specified.
     * @param message GossipBlockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GossipBlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GossipBlockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GossipBatchResponse. */
export interface IGossipBatchResponse {
    /** GossipBatchResponse content */
    content?: Uint8Array | null;
}

/** Represents a GossipBatchResponse. */
export class GossipBatchResponse implements IGossipBatchResponse {
    /**
     * Constructs a new GossipBatchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipBatchResponse);

    /** GossipBatchResponse content. */
    public content: Uint8Array;

    /**
     * Creates a new GossipBatchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipBatchResponse instance
     */
    public static create(properties?: IGossipBatchResponse): GossipBatchResponse;

    /**
     * Encodes the specified GossipBatchResponse message. Does not implicitly {@link GossipBatchResponse.verify|verify} messages.
     * @param message GossipBatchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipBatchResponse message, length delimited. Does not implicitly {@link GossipBatchResponse.verify|verify} messages.
     * @param message GossipBatchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGossipBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GossipBatchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipBatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipBatchResponse;

    /**
     * Decodes a GossipBatchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipBatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipBatchResponse;

    /**
     * Verifies a GossipBatchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipBatchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipBatchResponse
     */
    public static fromObject(object: { [k: string]: any }): GossipBatchResponse;

    /**
     * Creates a plain object from a GossipBatchResponse message. Also converts values to other types if specified.
     * @param message GossipBatchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GossipBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GossipBatchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GossipBatchByBatchIdRequest. */
export interface IGossipBatchByBatchIdRequest {
    /** GossipBatchByBatchIdRequest id */
    id?: string | null;

    /** GossipBatchByBatchIdRequest nonce */
    nonce?: string | null;

    /** GossipBatchByBatchIdRequest timeToLive */
    timeToLive?: number | null;
}

/** Represents a GossipBatchByBatchIdRequest. */
export class GossipBatchByBatchIdRequest implements IGossipBatchByBatchIdRequest {
    /**
     * Constructs a new GossipBatchByBatchIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipBatchByBatchIdRequest);

    /** GossipBatchByBatchIdRequest id. */
    public id: string;

    /** GossipBatchByBatchIdRequest nonce. */
    public nonce: string;

    /** GossipBatchByBatchIdRequest timeToLive. */
    public timeToLive: number;

    /**
     * Creates a new GossipBatchByBatchIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipBatchByBatchIdRequest instance
     */
    public static create(properties?: IGossipBatchByBatchIdRequest): GossipBatchByBatchIdRequest;

    /**
     * Encodes the specified GossipBatchByBatchIdRequest message. Does not implicitly {@link GossipBatchByBatchIdRequest.verify|verify} messages.
     * @param message GossipBatchByBatchIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipBatchByBatchIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipBatchByBatchIdRequest message, length delimited. Does not implicitly {@link GossipBatchByBatchIdRequest.verify|verify} messages.
     * @param message GossipBatchByBatchIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGossipBatchByBatchIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GossipBatchByBatchIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipBatchByBatchIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipBatchByBatchIdRequest;

    /**
     * Decodes a GossipBatchByBatchIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipBatchByBatchIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipBatchByBatchIdRequest;

    /**
     * Verifies a GossipBatchByBatchIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipBatchByBatchIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipBatchByBatchIdRequest
     */
    public static fromObject(object: { [k: string]: any }): GossipBatchByBatchIdRequest;

    /**
     * Creates a plain object from a GossipBatchByBatchIdRequest message. Also converts values to other types if specified.
     * @param message GossipBatchByBatchIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: GossipBatchByBatchIdRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GossipBatchByBatchIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GossipBatchByTransactionIdRequest. */
export interface IGossipBatchByTransactionIdRequest {
    /** GossipBatchByTransactionIdRequest ids */
    ids?: string[] | null;

    /** GossipBatchByTransactionIdRequest nonce */
    nonce?: string | null;

    /** GossipBatchByTransactionIdRequest timeToLive */
    timeToLive?: number | null;
}

/** Represents a GossipBatchByTransactionIdRequest. */
export class GossipBatchByTransactionIdRequest implements IGossipBatchByTransactionIdRequest {
    /**
     * Constructs a new GossipBatchByTransactionIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipBatchByTransactionIdRequest);

    /** GossipBatchByTransactionIdRequest ids. */
    public ids: string[];

    /** GossipBatchByTransactionIdRequest nonce. */
    public nonce: string;

    /** GossipBatchByTransactionIdRequest timeToLive. */
    public timeToLive: number;

    /**
     * Creates a new GossipBatchByTransactionIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipBatchByTransactionIdRequest instance
     */
    public static create(properties?: IGossipBatchByTransactionIdRequest): GossipBatchByTransactionIdRequest;

    /**
     * Encodes the specified GossipBatchByTransactionIdRequest message. Does not implicitly {@link GossipBatchByTransactionIdRequest.verify|verify} messages.
     * @param message GossipBatchByTransactionIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipBatchByTransactionIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipBatchByTransactionIdRequest message, length delimited. Does not implicitly {@link GossipBatchByTransactionIdRequest.verify|verify} messages.
     * @param message GossipBatchByTransactionIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IGossipBatchByTransactionIdRequest,
        writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GossipBatchByTransactionIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipBatchByTransactionIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipBatchByTransactionIdRequest;

    /**
     * Decodes a GossipBatchByTransactionIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipBatchByTransactionIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipBatchByTransactionIdRequest;

    /**
     * Verifies a GossipBatchByTransactionIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipBatchByTransactionIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipBatchByTransactionIdRequest
     */
    public static fromObject(object: { [k: string]: any }): GossipBatchByTransactionIdRequest;

    /**
     * Creates a plain object from a GossipBatchByTransactionIdRequest message. Also converts values to other types if specified.
     * @param message GossipBatchByTransactionIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: GossipBatchByTransactionIdRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GossipBatchByTransactionIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GossipConsensusMessage. */
export interface IGossipConsensusMessage {
    /** GossipConsensusMessage message */
    message?: Uint8Array | null;

    /** GossipConsensusMessage senderId */
    senderId?: Uint8Array | null;

    /** GossipConsensusMessage timeToLive */
    timeToLive?: number | null;
}

/** Represents a GossipConsensusMessage. */
export class GossipConsensusMessage implements IGossipConsensusMessage {
    /**
     * Constructs a new GossipConsensusMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGossipConsensusMessage);

    /** GossipConsensusMessage message. */
    public message: Uint8Array;

    /** GossipConsensusMessage senderId. */
    public senderId: Uint8Array;

    /** GossipConsensusMessage timeToLive. */
    public timeToLive: number;

    /**
     * Creates a new GossipConsensusMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GossipConsensusMessage instance
     */
    public static create(properties?: IGossipConsensusMessage): GossipConsensusMessage;

    /**
     * Encodes the specified GossipConsensusMessage message. Does not implicitly {@link GossipConsensusMessage.verify|verify} messages.
     * @param message GossipConsensusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGossipConsensusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GossipConsensusMessage message, length delimited. Does not implicitly {@link GossipConsensusMessage.verify|verify} messages.
     * @param message GossipConsensusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGossipConsensusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GossipConsensusMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GossipConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GossipConsensusMessage;

    /**
     * Decodes a GossipConsensusMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GossipConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GossipConsensusMessage;

    /**
     * Verifies a GossipConsensusMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GossipConsensusMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GossipConsensusMessage
     */
    public static fromObject(object: { [k: string]: any }): GossipConsensusMessage;

    /**
     * Creates a plain object from a GossipConsensusMessage message. Also converts values to other types if specified.
     * @param message GossipConsensusMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: GossipConsensusMessage,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GossipConsensusMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpRegisterRequest. */
export interface ITpRegisterRequest {
    /** TpRegisterRequest family */
    family?: string | null;

    /** TpRegisterRequest version */
    version?: string | null;

    /** TpRegisterRequest namespaces */
    namespaces?: string[] | null;

    /** TpRegisterRequest maxOccupancy */
    maxOccupancy?: number | null;
}

/** Represents a TpRegisterRequest. */
export class TpRegisterRequest implements ITpRegisterRequest {
    /**
     * Constructs a new TpRegisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpRegisterRequest);

    /** TpRegisterRequest family. */
    public family: string;

    /** TpRegisterRequest version. */
    public version: string;

    /** TpRegisterRequest namespaces. */
    public namespaces: string[];

    /** TpRegisterRequest maxOccupancy. */
    public maxOccupancy: number;

    /**
     * Creates a new TpRegisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpRegisterRequest instance
     */
    public static create(properties?: ITpRegisterRequest): TpRegisterRequest;

    /**
     * Encodes the specified TpRegisterRequest message. Does not implicitly {@link TpRegisterRequest.verify|verify} messages.
     * @param message TpRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpRegisterRequest message, length delimited. Does not implicitly {@link TpRegisterRequest.verify|verify} messages.
     * @param message TpRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpRegisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpRegisterRequest;

    /**
     * Decodes a TpRegisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpRegisterRequest;

    /**
     * Verifies a TpRegisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpRegisterRequest
     */
    public static fromObject(object: { [k: string]: any }): TpRegisterRequest;

    /**
     * Creates a plain object from a TpRegisterRequest message. Also converts values to other types if specified.
     * @param message TpRegisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpRegisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpRegisterResponse. */
export interface ITpRegisterResponse {
    /** TpRegisterResponse status */
    status?: TpRegisterResponse.Status | null;
}

/** Represents a TpRegisterResponse. */
export class TpRegisterResponse implements ITpRegisterResponse {
    /**
     * Constructs a new TpRegisterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpRegisterResponse);

    /** TpRegisterResponse status. */
    public status: TpRegisterResponse.Status;

    /**
     * Creates a new TpRegisterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpRegisterResponse instance
     */
    public static create(properties?: ITpRegisterResponse): TpRegisterResponse;

    /**
     * Encodes the specified TpRegisterResponse message. Does not implicitly {@link TpRegisterResponse.verify|verify} messages.
     * @param message TpRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpRegisterResponse message, length delimited. Does not implicitly {@link TpRegisterResponse.verify|verify} messages.
     * @param message TpRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpRegisterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpRegisterResponse;

    /**
     * Decodes a TpRegisterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpRegisterResponse;

    /**
     * Verifies a TpRegisterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpRegisterResponse
     */
    public static fromObject(object: { [k: string]: any }): TpRegisterResponse;

    /**
     * Creates a plain object from a TpRegisterResponse message. Also converts values to other types if specified.
     * @param message TpRegisterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpRegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpRegisterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpRegisterResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }
}

/** Properties of a TpUnregisterRequest. */
export interface ITpUnregisterRequest {}

/** Represents a TpUnregisterRequest. */
export class TpUnregisterRequest implements ITpUnregisterRequest {
    /**
     * Constructs a new TpUnregisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpUnregisterRequest);

    /**
     * Creates a new TpUnregisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpUnregisterRequest instance
     */
    public static create(properties?: ITpUnregisterRequest): TpUnregisterRequest;

    /**
     * Encodes the specified TpUnregisterRequest message. Does not implicitly {@link TpUnregisterRequest.verify|verify} messages.
     * @param message TpUnregisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpUnregisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpUnregisterRequest message, length delimited. Does not implicitly {@link TpUnregisterRequest.verify|verify} messages.
     * @param message TpUnregisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpUnregisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpUnregisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpUnregisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpUnregisterRequest;

    /**
     * Decodes a TpUnregisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpUnregisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpUnregisterRequest;

    /**
     * Verifies a TpUnregisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpUnregisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpUnregisterRequest
     */
    public static fromObject(object: { [k: string]: any }): TpUnregisterRequest;

    /**
     * Creates a plain object from a TpUnregisterRequest message. Also converts values to other types if specified.
     * @param message TpUnregisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpUnregisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpUnregisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpUnregisterResponse. */
export interface ITpUnregisterResponse {
    /** TpUnregisterResponse status */
    status?: TpUnregisterResponse.Status | null;
}

/** Represents a TpUnregisterResponse. */
export class TpUnregisterResponse implements ITpUnregisterResponse {
    /**
     * Constructs a new TpUnregisterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpUnregisterResponse);

    /** TpUnregisterResponse status. */
    public status: TpUnregisterResponse.Status;

    /**
     * Creates a new TpUnregisterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpUnregisterResponse instance
     */
    public static create(properties?: ITpUnregisterResponse): TpUnregisterResponse;

    /**
     * Encodes the specified TpUnregisterResponse message. Does not implicitly {@link TpUnregisterResponse.verify|verify} messages.
     * @param message TpUnregisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpUnregisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpUnregisterResponse message, length delimited. Does not implicitly {@link TpUnregisterResponse.verify|verify} messages.
     * @param message TpUnregisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpUnregisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpUnregisterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpUnregisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpUnregisterResponse;

    /**
     * Decodes a TpUnregisterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpUnregisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpUnregisterResponse;

    /**
     * Verifies a TpUnregisterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpUnregisterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpUnregisterResponse
     */
    public static fromObject(object: { [k: string]: any }): TpUnregisterResponse;

    /**
     * Creates a plain object from a TpUnregisterResponse message. Also converts values to other types if specified.
     * @param message TpUnregisterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpUnregisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpUnregisterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpUnregisterResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }
}

/** Properties of a TpProcessRequest. */
export interface ITpProcessRequest {
    /** TpProcessRequest header */
    header?: ITransactionHeader | null;

    /** TpProcessRequest payload */
    payload?: Uint8Array | null;

    /** TpProcessRequest signature */
    signature?: string | null;

    /** TpProcessRequest contextId */
    contextId?: string | null;
}

/** Represents a TpProcessRequest. */
export class TpProcessRequest implements ITpProcessRequest {
    /**
     * Constructs a new TpProcessRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpProcessRequest);

    /** TpProcessRequest header. */
    public header?: ITransactionHeader | null;

    /** TpProcessRequest payload. */
    public payload: Uint8Array;

    /** TpProcessRequest signature. */
    public signature: string;

    /** TpProcessRequest contextId. */
    public contextId: string;

    /**
     * Creates a new TpProcessRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpProcessRequest instance
     */
    public static create(properties?: ITpProcessRequest): TpProcessRequest;

    /**
     * Encodes the specified TpProcessRequest message. Does not implicitly {@link TpProcessRequest.verify|verify} messages.
     * @param message TpProcessRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpProcessRequest message, length delimited. Does not implicitly {@link TpProcessRequest.verify|verify} messages.
     * @param message TpProcessRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpProcessRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpProcessRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpProcessRequest;

    /**
     * Decodes a TpProcessRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpProcessRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpProcessRequest;

    /**
     * Verifies a TpProcessRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpProcessRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpProcessRequest
     */
    public static fromObject(object: { [k: string]: any }): TpProcessRequest;

    /**
     * Creates a plain object from a TpProcessRequest message. Also converts values to other types if specified.
     * @param message TpProcessRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpProcessRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpProcessRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpProcessResponse. */
export interface ITpProcessResponse {
    /** TpProcessResponse status */
    status?: TpProcessResponse.Status | null;

    /** TpProcessResponse message */
    message?: string | null;

    /** TpProcessResponse extendedData */
    extendedData?: Uint8Array | null;
}

/** Represents a TpProcessResponse. */
export class TpProcessResponse implements ITpProcessResponse {
    /**
     * Constructs a new TpProcessResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpProcessResponse);

    /** TpProcessResponse status. */
    public status: TpProcessResponse.Status;

    /** TpProcessResponse message. */
    public message: string;

    /** TpProcessResponse extendedData. */
    public extendedData: Uint8Array;

    /**
     * Creates a new TpProcessResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpProcessResponse instance
     */
    public static create(properties?: ITpProcessResponse): TpProcessResponse;

    /**
     * Encodes the specified TpProcessResponse message. Does not implicitly {@link TpProcessResponse.verify|verify} messages.
     * @param message TpProcessResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpProcessResponse message, length delimited. Does not implicitly {@link TpProcessResponse.verify|verify} messages.
     * @param message TpProcessResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpProcessResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpProcessResponse;

    /**
     * Decodes a TpProcessResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpProcessResponse;

    /**
     * Verifies a TpProcessResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpProcessResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpProcessResponse
     */
    public static fromObject(object: { [k: string]: any }): TpProcessResponse;

    /**
     * Creates a plain object from a TpProcessResponse message. Also converts values to other types if specified.
     * @param message TpProcessResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpProcessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpProcessResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpProcessResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        INVALID_TRANSACTION = 2,
        INTERNAL_ERROR = 3,
    }
}

/** Properties of a Setting. */
export interface ISetting {
    /** Setting entries */
    entries?: Setting.IEntry[] | null;
}

/** Represents a Setting. */
export class Setting implements ISetting {
    /**
     * Constructs a new Setting.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetting);

    /** Setting entries. */
    public entries: Setting.IEntry[];

    /**
     * Creates a new Setting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Setting instance
     */
    public static create(properties?: ISetting): Setting;

    /**
     * Encodes the specified Setting message. Does not implicitly {@link Setting.verify|verify} messages.
     * @param message Setting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Setting message, length delimited. Does not implicitly {@link Setting.verify|verify} messages.
     * @param message Setting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Setting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Setting;

    /**
     * Decodes a Setting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Setting;

    /**
     * Verifies a Setting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Setting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Setting
     */
    public static fromObject(object: { [k: string]: any }): Setting;

    /**
     * Creates a plain object from a Setting message. Also converts values to other types if specified.
     * @param message Setting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Setting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Setting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Setting {
    /** Properties of an Entry. */
    interface IEntry {
        /** Entry key */
        key?: string | null;

        /** Entry value */
        value?: string | null;
    }

    /** Represents an Entry. */
    class Entry implements IEntry {
        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: Setting.IEntry);

        /** Entry key. */
        public key: string;

        /** Entry value. */
        public value: string;

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: Setting.IEntry): Setting.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Setting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Setting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Setting.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Setting.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): Setting.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Setting.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a TpStateEntry. */
export interface ITpStateEntry {
    /** TpStateEntry address */
    address?: string | null;

    /** TpStateEntry data */
    data?: Uint8Array | null;
}

/** Represents a TpStateEntry. */
export class TpStateEntry implements ITpStateEntry {
    /**
     * Constructs a new TpStateEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateEntry);

    /** TpStateEntry address. */
    public address: string;

    /** TpStateEntry data. */
    public data: Uint8Array;

    /**
     * Creates a new TpStateEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateEntry instance
     */
    public static create(properties?: ITpStateEntry): TpStateEntry;

    /**
     * Encodes the specified TpStateEntry message. Does not implicitly {@link TpStateEntry.verify|verify} messages.
     * @param message TpStateEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateEntry message, length delimited. Does not implicitly {@link TpStateEntry.verify|verify} messages.
     * @param message TpStateEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateEntry;

    /**
     * Decodes a TpStateEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateEntry;

    /**
     * Verifies a TpStateEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateEntry
     */
    public static fromObject(object: { [k: string]: any }): TpStateEntry;

    /**
     * Creates a plain object from a TpStateEntry message. Also converts values to other types if specified.
     * @param message TpStateEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpStateEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpStateEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpStateGetRequest. */
export interface ITpStateGetRequest {
    /** TpStateGetRequest contextId */
    contextId?: string | null;

    /** TpStateGetRequest addresses */
    addresses?: string[] | null;
}

/** Represents a TpStateGetRequest. */
export class TpStateGetRequest implements ITpStateGetRequest {
    /**
     * Constructs a new TpStateGetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateGetRequest);

    /** TpStateGetRequest contextId. */
    public contextId: string;

    /** TpStateGetRequest addresses. */
    public addresses: string[];

    /**
     * Creates a new TpStateGetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateGetRequest instance
     */
    public static create(properties?: ITpStateGetRequest): TpStateGetRequest;

    /**
     * Encodes the specified TpStateGetRequest message. Does not implicitly {@link TpStateGetRequest.verify|verify} messages.
     * @param message TpStateGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateGetRequest message, length delimited. Does not implicitly {@link TpStateGetRequest.verify|verify} messages.
     * @param message TpStateGetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateGetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateGetRequest;

    /**
     * Decodes a TpStateGetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateGetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateGetRequest;

    /**
     * Verifies a TpStateGetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateGetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateGetRequest
     */
    public static fromObject(object: { [k: string]: any }): TpStateGetRequest;

    /**
     * Creates a plain object from a TpStateGetRequest message. Also converts values to other types if specified.
     * @param message TpStateGetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpStateGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpStateGetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpStateGetResponse. */
export interface ITpStateGetResponse {
    /** TpStateGetResponse entries */
    entries?: ITpStateEntry[] | null;

    /** TpStateGetResponse status */
    status?: TpStateGetResponse.Status | null;
}

/** Represents a TpStateGetResponse. */
export class TpStateGetResponse implements ITpStateGetResponse {
    /**
     * Constructs a new TpStateGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateGetResponse);

    /** TpStateGetResponse entries. */
    public entries: ITpStateEntry[];

    /** TpStateGetResponse status. */
    public status: TpStateGetResponse.Status;

    /**
     * Creates a new TpStateGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateGetResponse instance
     */
    public static create(properties?: ITpStateGetResponse): TpStateGetResponse;

    /**
     * Encodes the specified TpStateGetResponse message. Does not implicitly {@link TpStateGetResponse.verify|verify} messages.
     * @param message TpStateGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateGetResponse message, length delimited. Does not implicitly {@link TpStateGetResponse.verify|verify} messages.
     * @param message TpStateGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateGetResponse;

    /**
     * Decodes a TpStateGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateGetResponse;

    /**
     * Verifies a TpStateGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateGetResponse
     */
    public static fromObject(object: { [k: string]: any }): TpStateGetResponse;

    /**
     * Creates a plain object from a TpStateGetResponse message. Also converts values to other types if specified.
     * @param message TpStateGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpStateGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpStateGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpStateGetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        AUTHORIZATION_ERROR = 2,
    }
}

/** Properties of a TpStateSetRequest. */
export interface ITpStateSetRequest {
    /** TpStateSetRequest contextId */
    contextId?: string | null;

    /** TpStateSetRequest entries */
    entries?: ITpStateEntry[] | null;
}

/** Represents a TpStateSetRequest. */
export class TpStateSetRequest implements ITpStateSetRequest {
    /**
     * Constructs a new TpStateSetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateSetRequest);

    /** TpStateSetRequest contextId. */
    public contextId: string;

    /** TpStateSetRequest entries. */
    public entries: ITpStateEntry[];

    /**
     * Creates a new TpStateSetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateSetRequest instance
     */
    public static create(properties?: ITpStateSetRequest): TpStateSetRequest;

    /**
     * Encodes the specified TpStateSetRequest message. Does not implicitly {@link TpStateSetRequest.verify|verify} messages.
     * @param message TpStateSetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateSetRequest message, length delimited. Does not implicitly {@link TpStateSetRequest.verify|verify} messages.
     * @param message TpStateSetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateSetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateSetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateSetRequest;

    /**
     * Decodes a TpStateSetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateSetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateSetRequest;

    /**
     * Verifies a TpStateSetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateSetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateSetRequest
     */
    public static fromObject(object: { [k: string]: any }): TpStateSetRequest;

    /**
     * Creates a plain object from a TpStateSetRequest message. Also converts values to other types if specified.
     * @param message TpStateSetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpStateSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpStateSetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpStateSetResponse. */
export interface ITpStateSetResponse {
    /** TpStateSetResponse addresses */
    addresses?: string[] | null;

    /** TpStateSetResponse status */
    status?: TpStateSetResponse.Status | null;
}

/** Represents a TpStateSetResponse. */
export class TpStateSetResponse implements ITpStateSetResponse {
    /**
     * Constructs a new TpStateSetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateSetResponse);

    /** TpStateSetResponse addresses. */
    public addresses: string[];

    /** TpStateSetResponse status. */
    public status: TpStateSetResponse.Status;

    /**
     * Creates a new TpStateSetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateSetResponse instance
     */
    public static create(properties?: ITpStateSetResponse): TpStateSetResponse;

    /**
     * Encodes the specified TpStateSetResponse message. Does not implicitly {@link TpStateSetResponse.verify|verify} messages.
     * @param message TpStateSetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateSetResponse message, length delimited. Does not implicitly {@link TpStateSetResponse.verify|verify} messages.
     * @param message TpStateSetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateSetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateSetResponse;

    /**
     * Decodes a TpStateSetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateSetResponse;

    /**
     * Verifies a TpStateSetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateSetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateSetResponse
     */
    public static fromObject(object: { [k: string]: any }): TpStateSetResponse;

    /**
     * Creates a plain object from a TpStateSetResponse message. Also converts values to other types if specified.
     * @param message TpStateSetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpStateSetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpStateSetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpStateSetResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        AUTHORIZATION_ERROR = 2,
    }
}

/** Properties of a TpStateDeleteRequest. */
export interface ITpStateDeleteRequest {
    /** TpStateDeleteRequest contextId */
    contextId?: string | null;

    /** TpStateDeleteRequest addresses */
    addresses?: string[] | null;
}

/** Represents a TpStateDeleteRequest. */
export class TpStateDeleteRequest implements ITpStateDeleteRequest {
    /**
     * Constructs a new TpStateDeleteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateDeleteRequest);

    /** TpStateDeleteRequest contextId. */
    public contextId: string;

    /** TpStateDeleteRequest addresses. */
    public addresses: string[];

    /**
     * Creates a new TpStateDeleteRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateDeleteRequest instance
     */
    public static create(properties?: ITpStateDeleteRequest): TpStateDeleteRequest;

    /**
     * Encodes the specified TpStateDeleteRequest message. Does not implicitly {@link TpStateDeleteRequest.verify|verify} messages.
     * @param message TpStateDeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateDeleteRequest message, length delimited. Does not implicitly {@link TpStateDeleteRequest.verify|verify} messages.
     * @param message TpStateDeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateDeleteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateDeleteRequest;

    /**
     * Decodes a TpStateDeleteRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateDeleteRequest;

    /**
     * Verifies a TpStateDeleteRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateDeleteRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateDeleteRequest
     */
    public static fromObject(object: { [k: string]: any }): TpStateDeleteRequest;

    /**
     * Creates a plain object from a TpStateDeleteRequest message. Also converts values to other types if specified.
     * @param message TpStateDeleteRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpStateDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpStateDeleteRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpStateDeleteResponse. */
export interface ITpStateDeleteResponse {
    /** TpStateDeleteResponse addresses */
    addresses?: string[] | null;

    /** TpStateDeleteResponse status */
    status?: TpStateDeleteResponse.Status | null;
}

/** Represents a TpStateDeleteResponse. */
export class TpStateDeleteResponse implements ITpStateDeleteResponse {
    /**
     * Constructs a new TpStateDeleteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpStateDeleteResponse);

    /** TpStateDeleteResponse addresses. */
    public addresses: string[];

    /** TpStateDeleteResponse status. */
    public status: TpStateDeleteResponse.Status;

    /**
     * Creates a new TpStateDeleteResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpStateDeleteResponse instance
     */
    public static create(properties?: ITpStateDeleteResponse): TpStateDeleteResponse;

    /**
     * Encodes the specified TpStateDeleteResponse message. Does not implicitly {@link TpStateDeleteResponse.verify|verify} messages.
     * @param message TpStateDeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpStateDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpStateDeleteResponse message, length delimited. Does not implicitly {@link TpStateDeleteResponse.verify|verify} messages.
     * @param message TpStateDeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpStateDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpStateDeleteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpStateDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpStateDeleteResponse;

    /**
     * Decodes a TpStateDeleteResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpStateDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpStateDeleteResponse;

    /**
     * Verifies a TpStateDeleteResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpStateDeleteResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpStateDeleteResponse
     */
    public static fromObject(object: { [k: string]: any }): TpStateDeleteResponse;

    /**
     * Creates a plain object from a TpStateDeleteResponse message. Also converts values to other types if specified.
     * @param message TpStateDeleteResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: TpStateDeleteResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this TpStateDeleteResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpStateDeleteResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        AUTHORIZATION_ERROR = 2,
    }
}

/** Properties of a TpReceiptAddDataRequest. */
export interface ITpReceiptAddDataRequest {
    /** TpReceiptAddDataRequest contextId */
    contextId?: string | null;

    /** TpReceiptAddDataRequest data */
    data?: Uint8Array | null;
}

/** Represents a TpReceiptAddDataRequest. */
export class TpReceiptAddDataRequest implements ITpReceiptAddDataRequest {
    /**
     * Constructs a new TpReceiptAddDataRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpReceiptAddDataRequest);

    /** TpReceiptAddDataRequest contextId. */
    public contextId: string;

    /** TpReceiptAddDataRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new TpReceiptAddDataRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpReceiptAddDataRequest instance
     */
    public static create(properties?: ITpReceiptAddDataRequest): TpReceiptAddDataRequest;

    /**
     * Encodes the specified TpReceiptAddDataRequest message. Does not implicitly {@link TpReceiptAddDataRequest.verify|verify} messages.
     * @param message TpReceiptAddDataRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpReceiptAddDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpReceiptAddDataRequest message, length delimited. Does not implicitly {@link TpReceiptAddDataRequest.verify|verify} messages.
     * @param message TpReceiptAddDataRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpReceiptAddDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpReceiptAddDataRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpReceiptAddDataRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpReceiptAddDataRequest;

    /**
     * Decodes a TpReceiptAddDataRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpReceiptAddDataRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpReceiptAddDataRequest;

    /**
     * Verifies a TpReceiptAddDataRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpReceiptAddDataRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpReceiptAddDataRequest
     */
    public static fromObject(object: { [k: string]: any }): TpReceiptAddDataRequest;

    /**
     * Creates a plain object from a TpReceiptAddDataRequest message. Also converts values to other types if specified.
     * @param message TpReceiptAddDataRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: TpReceiptAddDataRequest,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this TpReceiptAddDataRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpReceiptAddDataResponse. */
export interface ITpReceiptAddDataResponse {
    /** TpReceiptAddDataResponse status */
    status?: TpReceiptAddDataResponse.Status | null;
}

/** Represents a TpReceiptAddDataResponse. */
export class TpReceiptAddDataResponse implements ITpReceiptAddDataResponse {
    /**
     * Constructs a new TpReceiptAddDataResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpReceiptAddDataResponse);

    /** TpReceiptAddDataResponse status. */
    public status: TpReceiptAddDataResponse.Status;

    /**
     * Creates a new TpReceiptAddDataResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpReceiptAddDataResponse instance
     */
    public static create(properties?: ITpReceiptAddDataResponse): TpReceiptAddDataResponse;

    /**
     * Encodes the specified TpReceiptAddDataResponse message. Does not implicitly {@link TpReceiptAddDataResponse.verify|verify} messages.
     * @param message TpReceiptAddDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpReceiptAddDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpReceiptAddDataResponse message, length delimited. Does not implicitly {@link TpReceiptAddDataResponse.verify|verify} messages.
     * @param message TpReceiptAddDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpReceiptAddDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpReceiptAddDataResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpReceiptAddDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpReceiptAddDataResponse;

    /**
     * Decodes a TpReceiptAddDataResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpReceiptAddDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpReceiptAddDataResponse;

    /**
     * Verifies a TpReceiptAddDataResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpReceiptAddDataResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpReceiptAddDataResponse
     */
    public static fromObject(object: { [k: string]: any }): TpReceiptAddDataResponse;

    /**
     * Creates a plain object from a TpReceiptAddDataResponse message. Also converts values to other types if specified.
     * @param message TpReceiptAddDataResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: TpReceiptAddDataResponse,
        options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this TpReceiptAddDataResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpReceiptAddDataResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }
}

/** Properties of a TpEventAddRequest. */
export interface ITpEventAddRequest {
    /** TpEventAddRequest contextId */
    contextId?: string | null;

    /** TpEventAddRequest event */
    event?: IEvent | null;
}

/** Represents a TpEventAddRequest. */
export class TpEventAddRequest implements ITpEventAddRequest {
    /**
     * Constructs a new TpEventAddRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpEventAddRequest);

    /** TpEventAddRequest contextId. */
    public contextId: string;

    /** TpEventAddRequest event. */
    public event?: IEvent | null;

    /**
     * Creates a new TpEventAddRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpEventAddRequest instance
     */
    public static create(properties?: ITpEventAddRequest): TpEventAddRequest;

    /**
     * Encodes the specified TpEventAddRequest message. Does not implicitly {@link TpEventAddRequest.verify|verify} messages.
     * @param message TpEventAddRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpEventAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpEventAddRequest message, length delimited. Does not implicitly {@link TpEventAddRequest.verify|verify} messages.
     * @param message TpEventAddRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpEventAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpEventAddRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpEventAddRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpEventAddRequest;

    /**
     * Decodes a TpEventAddRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpEventAddRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpEventAddRequest;

    /**
     * Verifies a TpEventAddRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpEventAddRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpEventAddRequest
     */
    public static fromObject(object: { [k: string]: any }): TpEventAddRequest;

    /**
     * Creates a plain object from a TpEventAddRequest message. Also converts values to other types if specified.
     * @param message TpEventAddRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpEventAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpEventAddRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TpEventAddResponse. */
export interface ITpEventAddResponse {
    /** TpEventAddResponse status */
    status?: TpEventAddResponse.Status | null;
}

/** Represents a TpEventAddResponse. */
export class TpEventAddResponse implements ITpEventAddResponse {
    /**
     * Constructs a new TpEventAddResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITpEventAddResponse);

    /** TpEventAddResponse status. */
    public status: TpEventAddResponse.Status;

    /**
     * Creates a new TpEventAddResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpEventAddResponse instance
     */
    public static create(properties?: ITpEventAddResponse): TpEventAddResponse;

    /**
     * Encodes the specified TpEventAddResponse message. Does not implicitly {@link TpEventAddResponse.verify|verify} messages.
     * @param message TpEventAddResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITpEventAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TpEventAddResponse message, length delimited. Does not implicitly {@link TpEventAddResponse.verify|verify} messages.
     * @param message TpEventAddResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITpEventAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TpEventAddResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpEventAddResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TpEventAddResponse;

    /**
     * Decodes a TpEventAddResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpEventAddResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TpEventAddResponse;

    /**
     * Verifies a TpEventAddResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpEventAddResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpEventAddResponse
     */
    public static fromObject(object: { [k: string]: any }): TpEventAddResponse;

    /**
     * Creates a plain object from a TpEventAddResponse message. Also converts values to other types if specified.
     * @param message TpEventAddResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TpEventAddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TpEventAddResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TpEventAddResponse {
    /** Status enum. */
    enum Status {
        STATUS_UNSET = 0,
        OK = 1,
        ERROR = 2,
    }
}

/** Properties of a MessageList. */
export interface IMessageList {
    /** MessageList messages */
    messages?: IMessage[] | null;
}

/** Represents a MessageList. */
export class MessageList implements IMessageList {
    /**
     * Constructs a new MessageList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageList);

    /** MessageList messages. */
    public messages: IMessage[];

    /**
     * Creates a new MessageList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageList instance
     */
    public static create(properties?: IMessageList): MessageList;

    /**
     * Encodes the specified MessageList message. Does not implicitly {@link MessageList.verify|verify} messages.
     * @param message MessageList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageList message, length delimited. Does not implicitly {@link MessageList.verify|verify} messages.
     * @param message MessageList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): MessageList;

    /**
     * Decodes a MessageList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): MessageList;

    /**
     * Verifies a MessageList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MessageList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageList
     */
    public static fromObject(object: { [k: string]: any }): MessageList;

    /**
     * Creates a plain object from a MessageList message. Also converts values to other types if specified.
     * @param message MessageList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {
    /** Message messageType */
    messageType?: Message.MessageType | null;

    /** Message correlationId */
    correlationId?: string | null;

    /** Message content */
    content?: Uint8Array | null;
}

/** Represents a Message. */
export class Message implements IMessage {
    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message messageType. */
    public messageType: Message.MessageType;

    /** Message correlationId. */
    public correlationId: string;

    /** Message content. */
    public content: Uint8Array;

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Message {
    /** MessageType enum. */
    enum MessageType {
        DEFAULT = 0,
        TP_REGISTER_REQUEST = 1,
        TP_REGISTER_RESPONSE = 2,
        TP_UNREGISTER_REQUEST = 3,
        TP_UNREGISTER_RESPONSE = 4,
        TP_PROCESS_REQUEST = 5,
        TP_PROCESS_RESPONSE = 6,
        TP_STATE_GET_REQUEST = 7,
        TP_STATE_GET_RESPONSE = 8,
        TP_STATE_SET_REQUEST = 9,
        TP_STATE_SET_RESPONSE = 10,
        TP_STATE_DELETE_REQUEST = 11,
        TP_STATE_DELETE_RESPONSE = 12,
        TP_RECEIPT_ADD_DATA_REQUEST = 13,
        TP_RECEIPT_ADD_DATA_RESPONSE = 14,
        TP_EVENT_ADD_REQUEST = 15,
        TP_EVENT_ADD_RESPONSE = 16,
        CLIENT_BATCH_SUBMIT_REQUEST = 100,
        CLIENT_BATCH_SUBMIT_RESPONSE = 101,
        CLIENT_BLOCK_LIST_REQUEST = 102,
        CLIENT_BLOCK_LIST_RESPONSE = 103,
        CLIENT_BLOCK_GET_BY_ID_REQUEST = 104,
        CLIENT_BLOCK_GET_RESPONSE = 105,
        CLIENT_BATCH_LIST_REQUEST = 106,
        CLIENT_BATCH_LIST_RESPONSE = 107,
        CLIENT_BATCH_GET_REQUEST = 108,
        CLIENT_BATCH_GET_RESPONSE = 109,
        CLIENT_TRANSACTION_LIST_REQUEST = 110,
        CLIENT_TRANSACTION_LIST_RESPONSE = 111,
        CLIENT_TRANSACTION_GET_REQUEST = 112,
        CLIENT_TRANSACTION_GET_RESPONSE = 113,
        CLIENT_STATE_CURRENT_REQUEST = 114,
        CLIENT_STATE_CURRENT_RESPONSE = 115,
        CLIENT_STATE_LIST_REQUEST = 116,
        CLIENT_STATE_LIST_RESPONSE = 117,
        CLIENT_STATE_GET_REQUEST = 118,
        CLIENT_STATE_GET_RESPONSE = 119,
        CLIENT_BATCH_STATUS_REQUEST = 120,
        CLIENT_BATCH_STATUS_RESPONSE = 121,
        CLIENT_RECEIPT_GET_REQUEST = 122,
        CLIENT_RECEIPT_GET_RESPONSE = 123,
        CLIENT_BLOCK_GET_BY_NUM_REQUEST = 124,
        CLIENT_PEERS_GET_REQUEST = 125,
        CLIENT_PEERS_GET_RESPONSE = 126,
        CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST = 127,
        CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST = 128,
        CLIENT_STATUS_GET_REQUEST = 129,
        CLIENT_STATUS_GET_RESPONSE = 130,
        CLIENT_EVENTS_SUBSCRIBE_REQUEST = 500,
        CLIENT_EVENTS_SUBSCRIBE_RESPONSE = 501,
        CLIENT_EVENTS_UNSUBSCRIBE_REQUEST = 502,
        CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE = 503,
        CLIENT_EVENTS = 504,
        CLIENT_EVENTS_GET_REQUEST = 505,
        CLIENT_EVENTS_GET_RESPONSE = 506,
        GOSSIP_MESSAGE = 200,
        GOSSIP_REGISTER = 201,
        GOSSIP_UNREGISTER = 202,
        GOSSIP_BLOCK_REQUEST = 205,
        GOSSIP_BLOCK_RESPONSE = 206,
        GOSSIP_BATCH_BY_BATCH_ID_REQUEST = 207,
        GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST = 208,
        GOSSIP_BATCH_RESPONSE = 209,
        GOSSIP_GET_PEERS_REQUEST = 210,
        GOSSIP_GET_PEERS_RESPONSE = 211,
        GOSSIP_CONSENSUS_MESSAGE = 212,
        NETWORK_ACK = 300,
        NETWORK_CONNECT = 301,
        NETWORK_DISCONNECT = 302,
        AUTHORIZATION_CONNECTION_RESPONSE = 600,
        AUTHORIZATION_VIOLATION = 601,
        AUTHORIZATION_TRUST_REQUEST = 602,
        AUTHORIZATION_TRUST_RESPONSE = 603,
        AUTHORIZATION_CHALLENGE_REQUEST = 604,
        AUTHORIZATION_CHALLENGE_RESPONSE = 605,
        AUTHORIZATION_CHALLENGE_SUBMIT = 606,
        AUTHORIZATION_CHALLENGE_RESULT = 607,
        PING_REQUEST = 700,
        PING_RESPONSE = 701,
        CONSENSUS_REGISTER_REQUEST = 800,
        CONSENSUS_REGISTER_RESPONSE = 801,
        CONSENSUS_SEND_TO_REQUEST = 802,
        CONSENSUS_SEND_TO_RESPONSE = 803,
        CONSENSUS_BROADCAST_REQUEST = 804,
        CONSENSUS_BROADCAST_RESPONSE = 805,
        CONSENSUS_INITIALIZE_BLOCK_REQUEST = 806,
        CONSENSUS_INITIALIZE_BLOCK_RESPONSE = 807,
        CONSENSUS_FINALIZE_BLOCK_REQUEST = 808,
        CONSENSUS_FINALIZE_BLOCK_RESPONSE = 809,
        CONSENSUS_SUMMARIZE_BLOCK_REQUEST = 828,
        CONSENSUS_SUMMARIZE_BLOCK_RESPONSE = 829,
        CONSENSUS_CANCEL_BLOCK_REQUEST = 810,
        CONSENSUS_CANCEL_BLOCK_RESPONSE = 811,
        CONSENSUS_CHECK_BLOCKS_REQUEST = 812,
        CONSENSUS_CHECK_BLOCKS_RESPONSE = 813,
        CONSENSUS_COMMIT_BLOCK_REQUEST = 814,
        CONSENSUS_COMMIT_BLOCK_RESPONSE = 815,
        CONSENSUS_IGNORE_BLOCK_REQUEST = 816,
        CONSENSUS_IGNORE_BLOCK_RESPONSE = 817,
        CONSENSUS_FAIL_BLOCK_REQUEST = 818,
        CONSENSUS_FAIL_BLOCK_RESPONSE = 819,
        CONSENSUS_SETTINGS_GET_REQUEST = 820,
        CONSENSUS_SETTINGS_GET_RESPONSE = 821,
        CONSENSUS_STATE_GET_REQUEST = 822,
        CONSENSUS_STATE_GET_RESPONSE = 823,
        CONSENSUS_BLOCKS_GET_REQUEST = 824,
        CONSENSUS_BLOCKS_GET_RESPONSE = 825,
        CONSENSUS_CHAIN_HEAD_GET_REQUEST = 826,
        CONSENSUS_CHAIN_HEAD_GET_RESPONSE = 827,
        CONSENSUS_NOTIFY_PEER_CONNECTED = 900,
        CONSENSUS_NOTIFY_PEER_DISCONNECTED = 901,
        CONSENSUS_NOTIFY_PEER_MESSAGE = 902,
        CONSENSUS_NOTIFY_BLOCK_NEW = 903,
        CONSENSUS_NOTIFY_BLOCK_VALID = 904,
        CONSENSUS_NOTIFY_BLOCK_INVALID = 905,
        CONSENSUS_NOTIFY_BLOCK_COMMIT = 906,
        CONSENSUS_NOTIFY_ACK = 999,
    }
}
