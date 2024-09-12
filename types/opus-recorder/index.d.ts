/**
 * Type definitions for opus-recorder 1.0
 * Project: https://github.com/chris-rudmin/opus-recorder
 * Definitions by: KenjiGinjo <https://github.com/KenjiGinjo>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */



/**
 * A javascript library to encode the output of Web Audio API nodes in Ogg Opus or WAV format using WebAssembly.
 * Libraries Used
 * - Libopus: v1.3.1 compiled with emscripten 2.0.31
 * - speexDSP: 1.2.0 compiled with emscripten 2.0.31
 *
 * Required Files
 *
 * The required files are in the dist folder. Unminified sources are in dist-unminified.
 * Examples for recording, encoding, and decoding are in examples folder.
 * https://github.com/chris-rudmin/opus-recorder/tree/master/example
 *
 * Gotchas
 * - To be able to read the mic stream, the page must be served over https. Use ngrok for local development with https.
 * - All browsers require that rec.start() to be called from a user initiated event. In iOS and macOS Safari, the mic stream will be empty with no logged errors. In Chrome and Firefox the audioContext could be suspended.
 * - macOS and iOS Safari native opus playback is not yet supported
 * - The worker files need to be hosted on the same domain as the page recording as cross-domain workers and worklets are not supported.
 *
 * Browser Support
 * - Chrome v58
 * - Firefox v53
 * - Microsoft Edge v41
 * - Opera v44
 * - macOS Safari v11
 * - iOS Safari v11
 *
 * Unsupported
 * - IE 11 and below
 * - iOS 11 Chrome
 *
 * Known Issues
 * - iOS 11.2.2 and iOS 11.2.5 are not working due to a regression in WebAssembly: https://bugs.webkit.org/show_bug.cgi?id=181781
 * - Firefox does not support sample rates above 48000Hz: https://bugzilla.mozilla.org/show_bug.cgi?id=1124981
 * - macOS Safari v11 does not support sample rates above 44100Hz
 */
declare module "opus-recorder" {
    interface GeneralConfigOptions {
      /**
       * The length of the buffer that the scriptProcessorNode uses to capture the audio.
       * Defaults to 4096.
       */
      bufferLength?: number;
  
      /**
       * Path to desired worker script.
       * Defaults to encoderWorker.min.js
       *
       * Getting started with webpack
       * - To use in a web-app built with webpack, be sure to load the worker files as a chunk. This can be done with file-loader plugin.
       * Add to your webpack.config.js before all other loaders.
       *
       * ```
       *   module.exports = {
       *   module: {
       *     rules: [
       *       {
       *         test: /encoderWorker\.min\.js$/,
       *         use: [{ loader: 'file-loader' }]
       *       }
       *     ]
       *   }
       * };
       * ```
       *
       * Then get the encoderPath using an import
       * ```
       * import Recorder from 'opus-recorder';
       * import encoderPath from 'opus-recorder/dist/encoderWorker.min.js';
       * const rec = new Recorder({ encoderPath });
       * ```
       */
      encoderPath?: string;
  
      /**
       * Object to specify media track constraints.
       * Defaults to true.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints
       *
       */
      mediaTrackConstraints?: MediaTrackConstraints;
  
      /**
       * Sets the gain of the monitoring output. Gain is an a-weighted value between 0 and 1.
       * Defaults to 0
       */
      monitorGain?: number;
  
      /**
       * The number of channels to record.
       * 1 = mono, 2 = stereo. Defaults to 1.
       * Maximum 2 channels are supported.
       */
      numberOfChannels?: number;
  
      /**
       * Sets the gain of the recording input.
       * Gain is an a-weighted value between 0 and 1.
       * Defaults to 1
       */
      recordingGain?: number;
  
      /**
       * An Instance of MediaStreamAudioSourceNode to use.
       * If a sourceNode is provided, then closing the stream and audioContext will need to be managed by the implementation.
       */
      sourceNode?: AudioNode;
    }
  
    /**
     * Config options for OGG OPUS encoder
     */
    interface OGGEncoderConfigOptions {
      /**
       *  Supported values are:
       *  1. 2048 - Voice
       *  2. 2049 - Full Band Audio
       *  3. 2051 - Restricted Low Delay.
       *  Defaults to 2049.
       */
      encoderApplication?: 2048 | 2049 | 2051;
  
      /**
       * Target bitrate in bits/sec.
       * The encoder selects an application-specific default when this is not specified.
       */
      encoderBitRate?: number;
  
      /**
       * Value between 0 and 10 which determines latency and processing for encoding.
       * 0 is fastest with lowest complexity.
       * 10 is slowest with highest complexity.
       * The encoder selects a default when this is not specified.
       */
      encoderComplexity?: number;
  
      /**
       * Specifies the frame size in ms used for encoding.
       * Defaults to 20.
       */
      encoderFrameSize?: number;
  
      /**
       * Specifies the sample rate to encode at. Defaults to 48000.
       * Supported values are 8000, 12000, 16000, 24000 or 48000.
       */
      encoderSampleRate?: 8000 | 12000 | 16000 | 24000 | 48000;
  
      /**
       * Maximum number of frames to collect before generating an Ogg page.
       * This can be used to lower the streaming latency.
       * The lower the value the more overhead the ogg stream will incur.
       * Defaults to 40.
       */
      maxFramesPerPage?: number;
  
      /**
       * Override the ogg opus 'input sample rate' field.
       * Google Speech API requires this field to be 16000.
       */
      originalSampleRateOverride?: number;
  
      /**
       * Value between 0 and 10 which determines latency and processing for resampling.
       * 0 is fastest with lowest quality. 10 is slowest with highest quality. Defaults to 3.
       */
      resampleQuality?: number;
  
      /**
       * dataAvailable event will fire after each encoded page.
       * Defaults to false.
       */
      streamPages?: boolean;
    }
  
    /**
     * Config options for WAV recorder
     */
    interface WAVEncoderConfigOptions {
      /**
       * Desired bit depth of the WAV file. Defaults to 16.
       * Supported values are 8, 16, 24 and 32 bits per sample.
       */
      wavBitDepth?: 8 | 16 | 24 | 32;
    }
  
    /**
     * An optional configuration object.
     */
    interface RecorderOptions
      extends GeneralConfigOptions,
        OGGEncoderConfigOptions,
        WAVEncoderConfigOptions {}
  
    export default class Recorder {
      constructor(options: RecorderOptions);
  
      /**
       * Returns a truthy value indicating if the browser supports recording.
       */
      static isRecordingSupported(): boolean;
  
      /**
       * The version of the library.
       */
      static version: string;
  
      /**
       * close will close the audioContext, destroy the workers, disconnect the audio nodes and close the mic stream.
       * A new Recorder instance will be required for additional recordings.
       * If a sourceNode was provided in the initial config, then the implementation will need to close the audioContext and close the mic stream.
       */
      close(): void;
  
      /**
       * pause will keep the stream and monitoring alive, but will not be recording the buffers.
       * If flush is true and streamPages is set, any pending encoded frames of data will be flushed,
       * and it will return a promise that only resolves after the frames have been flushed to ondataavailable.
       * Will call the onpause callback when paused.
       * Subsequent calls to resume will add to the current recording.
       */
      pause(flush?: boolean): void;
  
      /**
       * resume will resume the recording if paused.
       * Will call the onresume callback when recording is resumed.
       */
      resume(): void;
  
      /**
       * setRecordingGain will set the volume on what will be passed to the recorder.
       * Gain is an a-weighted value between 0 and 1.
       */
      setRecordingGain(gain: number): void;
  
      /**
       * setMonitorGain will set the volume on what will be passed to the monitor.
       * Monitor level does not affect the recording volume.
       * Gain is an a-weighted value between 0 and 1.
       */
      setMonitorGain(gain: number): void;
  
      /**
       * start Begins a new recording.
       * Returns a promise which resolves when recording is started.
       * Will callback onstart when started.
       * start needs to be initiated from a user action (click or touch) so that the audioContext can be resumed and the stream can have audio data.
       */
      start(): Promise<void>;
  
      /**
       * stop will cease capturing audio and disable the monitoring and mic input stream.
       * Will request the recorded data and then terminate the worker once the final data has been published.
       * Will call the onstop callback when stopped.
       */
      stop(): Promise<void>;
  
      /**
       * A callback which returns an array buffer of audio data.
       * If streamPages is true, this will be called with each page of encoded audio.
       * If streamPages is false, this will be called when the recording is finished with the complete data.
       */
      ondataavailable: (data: Uint8Array) => void;
  
      /**
       * A callback which occurs when media recording is paused.
       */
      onpause: () => void;
  
      /**
       * A callback which occurs when media recording resumes after being paused.
       */
      onresume: () => void;
  
      /**
       * A callback which occurs when media recording starts.
       */
      onstart: () => void;
  
      /**
       * A callback which occurs when media recording ends.
       */
      onstop: (data: Uint8Array) => void;
  
      /**
       * Instance Fields
       * ```
       * rec.encodedSamplePosition
       * ```
       * Reads the currently encoded sample position (the number of samples up to and including the most recent data provided to ondataavailable).
       * For Opus, the encoded sample rate is always 48kHz, so a time position can be determined by dividing by 48000.
       */
      encodedSamplePosition: number;
    }
  }
  
  declare module "opus-recorder/dist/encoderWorker.min.js" {
    const encoderPath: string;
  
    export default encoderPath;
  }
  