/// <reference types="node" />

import { ChildProcess } from "node:child_process";
import { Readable } from "node:stream";

export type SoxRecordingOptions = {
    recorder?: 'sox'
} & Partial<{
    sampleRate: number;
    channels: number;
    threshold: number;
    thresholdStart: number;
    thresholdEnd: number;
    silence: string;
    endOnSilence: boolean;
    device: string;
    audioType: string;
}> & Record<string, unknown>;

export type RecRecordingOptions = {
    recorder: 'rec'
} & Partial<{
    sampleRate: number;
    channels: number;
    threshold: number;
    thresholdStart: number;
    thresholdEnd: number;
    silence: string;
    endOnSilence: boolean;
    audioType: string;
}> & Record<string, unknown>;

export type ArecordRecordingOptions = {
    recorder: 'arecord'
} & Partial<{
    sampleRate: number;
    channels: number;
    audioType: string;
    device: string;
}> & Record<string, unknown>;

export type RecordingOptions =
    SoxRecordingOptions |
    RecRecordingOptions |
    ArecordRecordingOptions;

export interface Recording {
    cmd: string;
    args: string[];
    options: RecordingOptions;
    cmdOptions: Record<string, string>;
    process: ChildProcess;

    /**
     * Start recording
     * @returns This Recording
     */
    start(): Recording;
    /**
     * Stop recording
     */
    stop(): void;
    /**
     * Pause recording
     */
    pause(): void;
    /**
     * Resume recording
     */
    resume(): void;
    /**
     * Returns whether recording is paused or not.
     */
    isPaused(): boolean;
    /**
     * Returns a readable Node.js stream
     */
    stream(): Readable;
}

export function record(args: RecordingOptions): Recording;
