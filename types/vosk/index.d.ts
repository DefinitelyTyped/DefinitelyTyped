/// <reference types="node" />
export interface WordResult {
    /**
     * The confidence rate in the detection. 0 For unlikely, and 1 for totally accurate.
     */
    conf: number;
    /**
     * The start of the timeframe when the word is pronounced in seconds
     */
    start: number;
    /**
     * The end of the timeframe when the word is pronounced in seconds
     */
    end: number;
    /**
     * The word detected
     */
    word: string;
}
export interface RecognitionResults {
    /**
     * Details about the words that have been detected
     */
    result: WordResult[];
    /**
     * The complete sentence that have been detected
     */
    text: string;
}
export interface SpeakerResults {
    /**
     * A floating vector representing speaker identity. It is usually about 128 numbers which uniquely represent speaker voice.
     */
    spk: number[];
    /**
     * The number of frames used to extract speaker vector. The more frames you have the more reliable is speaker vector.
     */
    spk_frames: number;
}
export interface BaseRecognizerParam {
    /**
     * The language model to be used
     */
    model: Model;
    /**
     * The sample rate. Most models are trained at 16kHz
     */
    sampleRate: number;
}
export interface GrammarRecognizerParam {
    /**
     * The list of sentences to be recognized.
     */
    grammar: string[];
}
export interface SpeakerRecognizerParam {
    /**
     * The SpeakerModel that will enable speaker identification
     */
    speakerModel: SpeakerModel;
}
export type Result<T extends XOR<SpeakerRecognizerParam, Partial<GrammarRecognizerParam>>> = T extends
    SpeakerRecognizerParam ? SpeakerResults & RecognitionResults : RecognitionResults;
export interface PartialResults {
    /**
     * The partial sentence that have been detected until now
     */
    partial: string;
}
/**
 * The list of strings to be recognized
 */
export type Grammar = string[];
export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
/**
 * Set log level for Kaldi messages
 * @param {number} level The higher, the more verbose. 0 for infos and errors. Less than 0 for silence.
 */
export function setLogLevel(level: number): void;
/**
 * Build a Model from a model file.
 * @see models [models](https://alphacephei.com/vosk/models)
 */
export class Model {
    /**
     * Build a Model to be used with the voice recognition. Each language should have it's own Model
     * for the speech recognition to work.
     * @param {string} modelPath The abstract pathname to the model
     * @see models [models](https://alphacephei.com/vosk/models)
     */
    constructor(modelPath: string);
    /**
     * Store the handle.
     * For internal use only
     */
    handle: unknown;
    /**
     * Releases the model memory
     *
     * The model object is reference-counted so if some recognizer
     * depends on this model, model might still stay alive. When
     * last recognizer is released, model will be released too.
     */
    free(): void;
}
/**
 * Build a Speaker Model from a speaker model file.
 * The Speaker Model enables speaker identification.
 * @see models [models](https://alphacephei.com/vosk/models)
 */
export class SpeakerModel {
    /**
     * Loads speaker model data from the file and returns the model object
     *
     * @param {string} modelPath the path of the model on the filesystem
     * @see models [models](https://alphacephei.com/vosk/models)
     */
    constructor(modelPath: string);
    /**
     * Store the handle.
     * For internal use only
     */
    handle: unknown;
    /**
     * Releases the model memory
     *
     * The model object is reference-counted so if some recognizer
     * depends on this model, model might still stay alive. When
     * last recognizer is released, model will be released too.
     */
    free(): void;
}
/**
 * @template T
 * @template U
 */
/**
 * @template T
 * @template U
 */
/**
 * Create a Recognizer that will be able to transform audio streams into text using a Model.
 * @template {XOR<SpeakerRecognizerParam, Partial<GrammarRecognizerParam>>} T extra parameter
 * @see Model
 */
export class Recognizer<T extends XOR<SpeakerRecognizerParam, Partial<GrammarRecognizerParam>>> {
    /**
     * Create a Recognizer that will handle speech to text recognition.
     * @param {T & BaseRecognizerParam} param The Recognizer parameters
     *
     *  Sometimes when you want to improve recognition accuracy and when you don't need
     *  to recognize large vocabulary you can specify a list of phrases to recognize. This
     *  will improve recognizer speed and accuracy but might return [unk] if user said
     *  something different.
     *
     *  Only recognizers with lookahead models support this type of quick configuration.
     *  Precompiled HCLG graph models are not supported.
     */
    constructor(param: T & BaseRecognizerParam);
    /**
     * Store the handle.
     * For internal use only
     */
    handle: unknown;
    /**
     * Releases the model memory
     *
     * The model object is reference-counted so if some recognizer
     * depends on this model, model might still stay alive. When
     * last recognizer is released, model will be released too.
     */
    free(): void;
    /** Configures recognizer to output n-best results
     *
     * <pre>
     *   {
     *      "alternatives": [
     *          { "text": "one two three four five", "confidence": 0.97 },
     *          { "text": "one two three for five", "confidence": 0.03 },
     *      ]
     *   }
     * </pre>
     *
     * @param {number} max_alternatives - maximum alternatives to return from recognition results
     */
    setMaxAlternatives(max_alternatives: number): void;
    /** Configures recognizer to output words with times
     *
     * <pre>
     *   "result" : [{
     *       "conf" : 1.000000,
     *       "end" : 1.110000,
     *       "start" : 0.870000,
     *       "word" : "what"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 1.530000,
     *       "start" : 1.110000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 1.950000,
     *       "start" : 1.530000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 2.340000,
     *       "start" : 1.950000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 2.610000,
     *       "start" : 2.340000,
     *       "word" : "one"
     *     }],
     * </pre>
     *
     * @param {boolean} words - boolean value
     */
    setWords(words: boolean): void;
    /** Same as above, but for partial results*/
    setPartialWords(partial_words: boolean): void;
    /** Adds speaker recognition model to already created recognizer. Helps to initialize
     * speaker recognition for grammar-based recognizer.
     *
     * @param spk_model Speaker recognition model
     */
    setSpkModel(spk_model: SpeakerModel): void;
    /**
     * Accept voice data
     *
     * accept and process new chunk of voice data
     *
     * @param {Buffer} data audio data in PCM 16-bit mono format
     * @returns {boolean} true if silence is occured and you can retrieve a new utterance with result method
     */
    acceptWaveform(data: Buffer): boolean;
    /**
     * Accept voice data
     *
     * accept and process new chunk of voice data
     *
     * @param {Buffer} data audio data in PCM 16-bit mono format
     * @returns {Promise<boolean>}true if silence is occured and you can retrieve a new utterance with result method
     */
    acceptWaveformAsync(data: Buffer): Promise<boolean>;
    /** Returns speech recognition result in a string
     *
     * @returns the result in JSON format which contains decoded line, decoded
     *          words, times in seconds and confidences. You can parse this result
     *          with any json parser
     * <pre>
     * {
     *   "result" : [{
     *       "conf" : 1.000000,
     *       "end" : 1.110000,
     *       "start" : 0.870000,
     *       "word" : "what"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 1.530000,
     *       "start" : 1.110000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 1.950000,
     *       "start" : 1.530000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 2.340000,
     *       "start" : 1.950000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *      "end" : 2.610000,
     *       "start" : 2.340000,
     *       "word" : "one"
     *     }],
     *   "text" : "what zero zero zero one"
     *  }
     * </pre>
     *
     * @returns {string}
     */
    resultString(): string;
    /**
     * Returns speech recognition results
     * @returns {Result<T>} The results
     */
    result(): Result<T>;
    /**
     * speech recognition text which is not yet finalized.
     * result may change as recognizer process more data.
     *
     * @returns {PartialResults} The partial results
     */
    partialResult(): PartialResults;
    /**
     * Returns speech recognition result. Same as result, but doesn't wait for silence
     * You usually call it in the end of the stream to get final bits of audio. It
     * flushes the feature pipeline, so all remaining audio chunks got processed.
     *
     * @returns {Result<T>} speech result.
     */
    finalResult(): Result<T>;
    /**
     * Resets current results so the recognition can continue from scratch
     */
    reset(): void;
}
