// Type definitions for deepspeech 0.6
// Project: https://github.com/mozilla/DeepSpeech/tree/v0.6.0
// Definitions by: Anas Abou Allaban <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface MetadataItem {
    character: string;
    timestep: number;
    start_time: number;
}

export interface Metadata {
    items: MetadataItem[];
    num_items: number;
    confidence: number;
}

/**
 * An object providing an interface to a trained DeepSpeech model.
 *
 * @param aModelPath The path to the frozen model graph.
 * @param aBeamWidth The beam width used by the decoder. A larger beam width generates better results at the cost of decoding time.
 *
 * @throws on error
 */
export class Model {
constructor(aModelPath: string, aBeamWidth: number)

/**
 * Return the sample rate expected by the model.
 *
 * @return Sample rate.
 */
sampleRate(): number;

/**
 * Enable decoding using beam scoring with a KenLM language model.
 *
 * @param aLMPath The path to the language model binary file.
 * @param aTriePath The path to the trie file build from the same vocabulary as the language model binary.
 * @param aLMAlpha The alpha hyperparameter of the CTC decoder. Language Model weight.
 * @param aLMBeta The beta hyperparameter of the CTC decoder. Word insertion weight.
 *
 * @return Zero on success, non-zero on failure (invalid arguments).
 */
enableDecoderWithLM(aLMPath: string, aTriePath: string, aLMAlpha: number, aLMBeta: number): number;

/**
 * Use the DeepSpeech model to perform Speech-To-Text.
 *
 * @param aBuffer A 16-bit, mono raw audio signal at the appropriate sample rate (matching what the model was trained on).
 * @param aBufferSize The number of samples in the audio signal.
 *
 * @return The STT result. Returns undefined on error.
 */
stt(aBuffer: object, aBufferSize: number): string;

/**
 * Use the DeepSpeech model to perform Speech-To-Text and output metadata
 * about the results.
 *
 * @param aBuffer A 16-bit, mono raw audio signal at the appropriate sample rate (matching what the model was trained on).
 * @param aBufferSize The number of samples in the audio signal.
 *
 * @return Outputs a :js:func:`Metadata` struct of individual letters along with their timing information.
 * The user is responsible for freeing Metadata by calling :js:func:`FreeMetadata`. Returns undefined on error.
 */
sttWithMetadata(aBuffer: object, aBufferSize: number): Metadata;

/**
 * Create a new streaming inference state. The streaming state returned by this function can then be passed to :js:func:`Model.feedAudioContent` and :js:func:`Model.finishStream`.
 *
 * @return an opaque object that represents the streaming state.
 *
 * @throws on error
 */
createStream(): object;

/**
 * Feed audio samples to an ongoing streaming inference.
 *
 * @param aSctx A streaming state returned by :js:func:`Model.setupStream`.
 * @param aBuffer An array of 16-bit, mono raw audio samples at the
 *                 appropriate sample rate (matching what the model was trained on).
 */
feedAudioContent(aSctx: object, aBuffer: object): number;

/**
 * Compute the intermediate decoding of an ongoing streaming inference.
 *
 * @param aSctx A streaming state returned by :js:func:`Model.setupStream`.
 *
 * @return The STT intermediate result.
 */
intermediateDecode(aSctx: object): string;

/**
 * Signal the end of an audio signal to an ongoing streaming inference, returns the STT result over the whole audio signal.
 *
 * @param aSctx A streaming state returned by :js:func:`Model.setupStream`.
 *
 * @return The STT result.
 *
 * This method will free the state (@param aSctx).
 */
finishStream(aSctx: object): string;

/**
 * Signal the end of an audio signal to an ongoing streaming inference, returns per-letter metadata.
 *
 * @param aSctx A streaming state pointer returned by :js:func:`Model.setupStream`.
 *
 * @return Outputs a :js:func:`Metadata` struct of individual letters along with their timing information. The user is responsible for freeing Metadata by calling :js:func:`FreeMetadata`.
 *
 * This method will free the state pointer (@param aSctx).
 */
finishStreamWithMetadata(aSctx: object): Metadata;
}

/**
 * Frees associated resources and destroys model object.
 *
 * @param model A model pointer returned by :js:func:`Model`
 *
 */
export function FreeModel(model: Model): void;

/**
 * Free memory allocated for metadata information.
 *
 * @param metadata Object containing metadata as returned by :js:func:`Model.sttWithMetadata` or :js:func:`Model.finishStreamWithMetadata`
 */
export function FreeMetadata(metadata: Metadata): void;

/**
 * Destroy a streaming state without decoding the computed logits. This
 * can be used if you no longer need the result of an ongoing streaming
 * inference and don't want to perform a costly decode operation.
 *
 * @param stream A streaming state pointer returned by :js:func:`Model.createStream`.
 */
export function FreeStream(stream: object): void;

/**
 * Print version of this library and of the linked TensorFlow library on standard output.
 */
export function printVersions(): void;
