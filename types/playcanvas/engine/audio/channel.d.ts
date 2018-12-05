declare namespace pc {

    /**
    * @private
    * @name pc.Channel
    * @class A channel is created when the pc.AudioManager begins playback of a pc.Sound. Usually created internally by
    * pc.AudioManager#playSound or pc.AudioManager#playSound3d. Developers usually won't have to create Channels manually.
    * @param {pc.AudioManager} manager The AudioManager instance
    * @param {pc.Sound} sound The sound to playback
    * @param {Object} options
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
    */
    class Channel {
        constructor(manager: pc.SoundManager, sound: pc.Sound, options?: { volume: number, pitch: number, loop: boolean })

        /**
         * @private
         * @function
         * @name pc.Channel#play
         * @description Begin playback of sound
         */
        private play(): void;

        /**
         * @private
         * @function
         * @name pc.Channel#pause
         * @description Pause playback of sound. Call unpause() to resume playback from the same position
         */
        private pause(): void;

        /**
         * @private
         * @function
         * @name pc.Channel#unpause
         * @description Resume playback of the sound. Playback resumes at the point that the audio was paused
         */
        unpause(): void;

        /**
         * @private
         * @function
         * @name pc.Channel#stop
         * @description Stop playback of sound. Calling play() again will restart playback from the beginning of the sound.
         */
        private stop(): void;

        /**
         * @private
         * @function
         * @name pc.Channel#setLoop
         * @description Enable/disable the loop property to make the sound restart from the beginning when it reaches the end.
         */
        private setLoop(loop: boolean): void;

        /**
         * @private
         * @function
         * @name pc.Channel#setVolume
         * @description Set the volume of playback between 0 and 1.
         */
        private setVolume(volume: number): void;

        /**
         * @private
         * @function
         * @name pc.Channel#getVolume
         * @description Get the current value for the volume. Between 0 and 1.
         */
        private getVolume(): number;

        /**
         * @private
         * @function
         * @name pc.Channel#getLoop
         * @description Get the current looping state of the Channel
         */
        private getLoop(): boolean;

        /**
         * @private
         * @function
         * @name pc.Channel#getPitch
         * @description Get the current pitch of the Channel
         */
        private getPitch(): number;

        /**
         * @private
         * @function
         * @name pc.Channel#onManagerVolumeChange
         * @description Handle the manager's 'volumechange' event.
         */
        private onManagerVolumeChange(): void;

        /**
         * @private
         * @function
         * @name pc.Channel#onManagerSuspend
         * @description Handle the manager's 'suspend' event.
         */
        private onManagerSuspend(): void;

        /**
         * @private
         * @function
         * @name pc.Channel#onManagerResume
         * @description Handle the manager's 'resume' event.
         */
        private onManagerResume(): void;
    }
}
