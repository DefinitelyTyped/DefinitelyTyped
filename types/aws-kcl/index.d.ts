// Type definitions for aws-kcl 2.0
// Project: https://github.com/awslabs/amazon-kinesis-client-nodejs
// Definitions by: Vlad Shlosberg <https://github.com/vshlos>
//                 Foqal <https://github.com/foqal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as fs from "fs";

export type Callback = () => void;

export type CheckpointCallback = (error: string | undefined, checkpointedSequenceNumber: string) => void;

export interface Checkpointer {
    /**
     * Checkpoints at a given sequence number.
     * @param sequenceNumber        Sequence number of the record to checkpoint;
     * @param callback              Function that is invoked after the checkpoint operation completes.
     */
    checkpoint(sequenceNumber: string, callback: CheckpointCallback): void;

    /**
     * Checkpoints at the checkpoint will be at the end of the most
     * recently-delivered list of records.
     * @param callback              Function that is invoked after the checkpoint
     *                              operation completes.
     */
    checkpoint(callback: CheckpointCallback): void;
}

export interface InitializeInput {
    shardId: string;
    sequenceNumber?: string;
    subSequenceNumber?: number;
}

export interface CheckpointInput {
    checkpointer: Checkpointer;
}

export interface Record {
    data: string;
    partitionKey: string;
    sequenceNumber: string;
}

export interface ProcessRecordsInput extends CheckpointInput {
    records: Record[];
    millisBehindLatest?: number;
}

export interface LeaseLossInput {} // tslint:disable-line:no-empty-interface

export interface ShardEndedInput extends CheckpointInput {} // tslint:disable-line:no-empty-interface

export interface RecordProcessor {
    /**
     * Called once by the KCL before any calls to processRecords. Any initialization
     * logic for record processing can go here.
     *
     * @param initializeInput - Initialization related information.
     * @param completeCallback - The callback that must be invoked
     *          once the initialization operation is complete.
     */
    initialize(initializeInput: InitializeInput, completeCallback: Callback): void;

    /**
     * Called by KCL with a list of records to be processed and checkpointed.
     * A record looks like:
     *
     * The checkpointer can optionally be used to checkpoint a particular sequence
     * number (from a record). If checkpointing, the checkpoint must always be
     * invoked before calling `completeCallback` for processRecords. Moreover,
     * `completeCallback` should only be invoked once the checkpoint operation
     * callback is received.
     *
     * @param processRecordsInput       Process records information with
     *             array of records that are to be processed.
     * @param completeCallback          The callback that must be invoked
     *             once all records are processed and checkpoint (optional) is
     *             complete.
     */
    processRecords(processRecordsInput: ProcessRecordsInput, completeCallback: Callback): void;

    /**
     * Called by the KCL to indicate that this record processor should shut down.
     * After the lease lost operation is complete, there will not be any more calls to
     * any other functions of this record processor. Clients should not attempt to
     * checkpoint because the lease has been lost by this Worker.
     *
     * @param leaseLostInput    Lease lost information.
     * @param completeCallback  The callback must be invoked once lease
     *             lost operations are completed.
     */
    leaseLost(leaseLostInput: LeaseLossInput, completeCallback: Callback): void;
    /**
     * Called by the KCL to indicate that this record processor should shutdown.
     * After the shard ended operation is complete, there will not be any more calls to
     * any other functions of this record processor. Clients are required to checkpoint
     * at this time. This indicates that the current record processor has finished
     * processing and new record processors for the children will be created.
     *
     * @param shardEndedInput       ShardEnded information.
     * @param completeCallback      The callback must be invoked once shard
     *               ended operations are completed.
     */
    shardEnded(shardEndedInput: ShardEndedInput, completeCallback: Callback): void;
}

interface KCLInput {
    recordProcessor: RecordProcessor;
    version: symbol;
}

export class KCLManager {
    constructor(
        kclManagerInput: KCLInput,
        inputFile?: fs.ReadStream,
        outputFile?: fs.WriteStream,
        errorFile?: fs.WriteStream,
    );
    checkpoint(sequenceNumber: string): void;
    run(): void;
}

declare function KCLProcess(
    recordProcessor: RecordProcessor,
    inputFile?: fs.ReadStream,
    outputFile?: fs.WriteStream,
    errorFile?: fs.WriteStream,
): KCLManager;

export default KCLProcess;
