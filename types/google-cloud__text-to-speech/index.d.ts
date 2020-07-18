// Type definitions for google-cloud__text-to-speech 0.5
// Project: https://github.com/googleapis/nodejs-text-to-speech
// Definitions by: Ben James <https://github.com/benhjames>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.8

/// <reference types="node" />

export type GoogleError = any;

export type APICallback<T = any> = (
    err: GoogleError | null,
    response?: T
) => void;

export interface PromiseLike<T> extends Promise<T> {
    /**
     * Cancel the ongoing promise
     */
    cancel(): void;
}

export interface MethodOverload<T, R> {
    (data: T, options?: CallOptions): PromiseLike<[R]>;
    (data: T, options: CallOptions, callback: APICallback<R>): void;
    (data: T, callback: APICallback<R>): void;
}

export interface CallOptions {
    timeout?: number;
    retry?: any;
    autoPaginate?: boolean;
    pageToken?: any;
    isBundling: boolean;
    longrunning?: any;
    promise?: any;
}

export interface ClientOptionsCredentials {
    client_email: string;
    private_key: string;
}

export interface ClientOptions {
    credentials?: ClientOptionsCredentials;
    email?: string;
    keyFilename?: string;
    port?: number;
    projectId?: string;
    promise?: any;
    servicePath?: string;
}

export interface ListVoicesRequest {
    languageCode?: string;
}

export type ListVoicesOptions = CallOptions;

export type SsmlVoiceGender =
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "MALE"
    | "FEMALE"
    | "NEUTRAL";

export interface Voice {
    language_codes: string[];
    name: string;
    ssmlGender: SsmlVoiceGender;
    naturalSampleRateHertz: number;
}

export type ListVoicesResponse = Voice[];

export type SynthesisInput = { text: string } | { ssml: string };

export interface VoiceSelectionParams {
    languageCode?: string;
    name?: string;
    ssmlGender?: SsmlVoiceGender;
}

export type AudioEncoding =
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "LINEAR16"
    | "MP3"
    | "OGG_OPUS";

export interface AudioConfig {
    audioEncoding: AudioEncoding;
    effectsProfileId?: string[];
    pitch?: number;
    sampleRateHertz?: number;
    speakingRate?: number;
    volumeGainDb?: number;
}

export interface SynthesizeSpeechRequest {
    input: SynthesisInput;
    voice: VoiceSelectionParams;
    audioConfig: AudioConfig;
}

export type SynthesizeSpeechOptions = CallOptions;

export interface SynthesizeSpeechResponse {
    audioContent: Buffer;
}

declare class TextToSpeechClient {
    constructor(options?: ClientOptions);

    listVoices: MethodOverload<ListVoicesRequest, ListVoicesResponse>;
    synthesizeSpeech: MethodOverload<
        SynthesizeSpeechRequest,
        SynthesizeSpeechResponse
    >;
}

declare const TextToSpeech: { TextToSpeechClient: typeof TextToSpeechClient };

export default TextToSpeech;
