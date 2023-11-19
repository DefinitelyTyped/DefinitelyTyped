declare module "vosk" {
    export function setLogLevel(level: number): void;

    export class Model {
        constructor(modelPath: string);
        free(): void;
    }

    export class SpeakerModel {
        constructor(modelPath: string);
        free(): void;
    }

    export type WordResult = {
        conf: number;
        start: number;
        end: number;
        word: string;
    };

    export type RecognitionResults = {
        result: WordResult[];
        text: string;
    };

    export type SpeakerResults = {
        spk: number[];
        spk_frames: number;
    };

    export type SimpleRecognizerParam = {};

    export type BaseRecognizerParam = {
        model: Model;
        sampleRate: number;
    };

    export type GrammarRecognizerParam = {
        grammar: string[];
    };

    export type SpeakerRecognizerParam = {
        speakerModel: SpeakerModel;
    };

    export type Result<T> = T extends SpeakerRecognizerParam ? SpeakerResults & RecognitionResults
        : RecognitionResults;

    export type PartialResults = {
        partial: string;
    };

    export type Grammar = string[];

    export class Recognizer<T extends SpeakerRecognizerParam | GrammarRecognizerParam | SimpleRecognizerParam> {
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
}
