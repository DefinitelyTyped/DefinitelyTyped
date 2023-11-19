/// <reference types="node" />

export function setLogLevel(level: number): void;

export class Model {
    constructor(modelPath: string);
    free(): void;
}

export class SpeakerModel {
    constructor(modelPath: string);
    free(): void;
}

export interface WordResult {
    conf: number;
    start: number;
    end: number;
    word: string;
}

export interface RecognitionResults {
    result: WordResult[];
    text: string;
}

export interface SpeakerResults {
    spk: number[];
    spk_frames: number;
}

export interface BaseRecognizerParam {
    model: Model;
    sampleRate: number;
}

export interface GrammarRecognizerParam {
    grammar: string[];
}

export interface SpeakerRecognizerParam {
    speakerModel: SpeakerModel;
}

export type Result<T> = T extends SpeakerRecognizerParam ? SpeakerResults & RecognitionResults
    : RecognitionResults;

export interface PartialResults {
    partial: string;
}

export type Grammar = string[];

export class Recognizer<T extends SpeakerRecognizerParam | GrammarRecognizerParam | {}> {
    constructor(param: T & BaseRecognizerParam);
    free(): void;
    setMaxAlternatives(max_alternatives: number): void;
    setWords(words: boolean): void;
    setPartialWords(partial_words: boolean): void;
    setSpkModel(spk_model: SpeakerModel): void;
    acceptWaveform(data: Buffer): boolean;
    acceptWaveformAsync(data: Buffer): Promise<boolean>;
    resultString(): string;
    result(): Result<T>;
    partialResult(): PartialResults;
    finalResult(): Result<T>;
    reset(): void;
}

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
