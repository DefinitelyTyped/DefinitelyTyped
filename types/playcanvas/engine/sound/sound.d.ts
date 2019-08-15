declare namespace pc {

    /**
    * @name pc.Sound
    * @class Represents the resource of an audio asset.
    * @property {AudioBuffer} buffer If the Web Audio API is supported this contains the audio data
    * @property {Audio} audio If the Web Audio API is not supported this contains the audio data
    * @property {Number} duration Returns the duration of the sound. If the sound is not loaded it returns 0.
    */
    class Sound {
        constructor(resource: HTMLAudioElement | AudioBuffer)

        buffer?: AudioBuffer;
        audio?: HTMLAudioElement;
        duration: number;
    }
}