declare namespace pc {

    /**
    * @name pc.SoundInstance
    * @class A pc.SoundInstance plays a {@link pc.Sound}
    * @param {pc.SoundManager} manager The sound manager
    * @param {pc.Sound} sound The sound to play
    * @param {Object} options Options for the instance
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
    * @param {Number} [options.startTime=0] The time from which the playback will start. Default is 0 to start at the beginning.
    * @param {Number} [options.duration=null] The total time after the startTime when playback will stop or restart if loop is true.
    * @param {Function} [options.onPlay=null] Function called when the instance starts playing.
    * @param {Function} [options.onPause=null] Function called when the instance is paused.
    * @param {Function} [options.onResume=null] Function called when the instance is resumed.
    * @param {Function} [options.onStop=null] Function called when the instance is stopped.
    * @param {Function} [options.onEnd=null] Function called when the instance ends.
    * @property {Number} volume The volume modifier to play the sound with. In range 0-1.
    * @property {Number} pitch The pitch modifier to play the sound with. Must be larger than 0.01
    * @property {Number} startTime The start time from which the sound will start playing.
    * @property {Number} currentTime Gets or sets the current time of the sound that is playing. If the value provided is bigger than the duration of the instance it will wrap from the beginning.
    * @property {Number} duration The duration of the sound that the instance will play starting from startTime.
    * @property {Boolean} loop If true the instance will restart when it finishes playing
    * @property {Boolean} isPlaying Returns true if the instance is currently playing.
    * @property {Boolean} isPaused Returns true if the instance is currently paused.
    * @property {Boolean} isStopped Returns true if the instance is currently stopped.
    * @property {Boolean} isSuspended Returns true if the instance is currently suspended because the window is not focused.
    * @property {AudioBufferSourceNode} source Gets the source that plays the sound resource. If the Web Audio API is not supported the type of source is <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">Audio</a>. Source is only available after calling play.
    * @property {pc.Sound} sound The sound resource that the instance will play.
    */
    class SoundInstance {
        constructor(manager: pc.SoundManager, sound: pc.Sound, options: {
            volume?: number;
            pitch?: number;
            loop?: boolean;
            startTime?: number;
            duration?: number;
            onPlay?: Function;
            onPause?: Function;
            onResume?: Function;
            onStop?: Function;
            onEnd?: Function;
        })

        volume: number;
        pitch: number;
        startTime: number;
        currentTime: number;
        duration: number;
        loop: boolean;
        isPlaying: boolean;
        isPaused: boolean;
        isStopped: boolean;
        isSuspended: boolean;
        source: AudioBufferSourceNode;
        sound: pc.Sound;

        /**
         * @function
         * @private
         * @name pc.SoundInstance#_initializeNodes
         * @description Creates internal audio nodes and connects them
         */
        private _initializeNodes(): void;

        /**
         * @function
         * @name pc.SoundInstance#play
         * @description Begins playback of sound. If the sound is not loaded this will return false.
         * If the sound is already playing this will restart the sound.
         * @returns {Boolean} True if the sound was started.
         */
        play(): boolean;

        /**
         * @function
         * @name pc.SoundInstance#pause
         * @description Pauses playback of sound. Call resume() to resume playback from the same position.
         * @returns {Boolean} Returns true if the sound was paused
         */
        pause(): boolean;

        /**
         * @function
         * @name pc.SoundInstance#resume
         * @description Resumes playback of the sound. Playback resumes at the point that the audio was paused
         * @returns {Boolean} Returns true if the sound was resumed.
         */
        resume(): void;

        /**
         * @function
         * @name pc.SoundInstance#stop
         * @description Stops playback of sound. Calling play() again will restart playback from the beginning of the sound.
         */
        stop(): boolean;

        /**
         * @function
         * @name pc.SoundInstance#setExternalNodes
         * @description Connects external Web Audio API nodes. You need to pass
         * the first node of the node graph that you created externally and the last node of that graph. The first
         * node will be connected to the audio source and the last node will be connected to the destination of the
         * AudioContext (e.g. speakers). Requires Web Audio API support.
         * @param {AudioNode} firstNode The first node that will be connected to the audio source of sound instances.
         * @param {AudioNode} [lastNode] The last node that will be connected to the destination of the AudioContext.
         * If unspecified then the firstNode will be connected to the destination instead.
         * @example
         * var context = app.systems.sound.context;
         * var analyzer = context.createAnalyzer();
         * var distortion = context.createWaveShaper();
         * var filter = context.createBiquadFilter();
         * analyzer.connect(distortion);
         * distortion.connect(filter);
         * instance.setExternalNodes(analyzer, filter);
         */
        setExternalNodes(firstNode: AudioNode, lastNode?: AudioNode): void;

        /**
         * @function
         * @name pc.SoundInstance#clearExternalNodes
         * @description Clears any external nodes set by {@link pc.SoundInstance#setExternalNodes}.
         */
        clearExternalNodes(): void;


        /**
         * @function
         * @name pc.SoundInstance#getExternalNodes
         * @description Gets any external nodes set by {@link pc.SoundInstance#setExternalNodes}.
         * @return {AudioNode[]} Returns an array that contains the two nodes set by {@link pc.SoundInstance#setExternalNodes}.
         */
        getExternalNodes(): AudioNode[];

        /**
         * @private
         * @function
         * @description Creates the source for the instance
         */

        private _createSource(): AudioBufferSourceNode;

        /**
        * @private
        * @function
        * @name pc.SoundInstance#_updateCurrentTime
        * @description Sets the current time taking into account the time the instance started playing, the current pitch and the current time offset.
        */
        private _updateCurrentTime(): void;

        /**
         * @private
         * @function
         * @name pc.SoundInstance#_onManagerDestroy
         * @description Handle the manager's 'destroy' event.
         */
        private _onManagerDestroy(): void;

        /**
         * @private
         * @function
         * @name pc.SoundInstance#_onManagerVolumeChange
         * @description Handle the manager's 'volumechange' event.
         */
        private _onManagerVolumeChange(): void;

        /**
         * @private
         * @function
         * @name pc.SoundInstance#_onManagerSuspend
         * @description Handle the manager's 'suspend' event.
         */
        private _onManagerSuspend(): void;

        /**
         * @private
         * @function
         * @name pc.SoundInstance#_onManagerResume
         * @description Handle the manager's 'resume' event.
         */
        private _onManagerResume(): void;


        // Events

        /**
         * @function
         * @name pc.SoundInstance#on
         * @description Attach an event handler to an event
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.on('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         */
        on(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.SoundInstance#off
         * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
         * if scope is not provided then all events with the callback will be unbound.
         * @param {String} [name] Name of the event to unbind
         * @param {Function} [callback] Function to be unbound
         * @param {Object} [scope] Scope that was used as the this when the event is fired
         * @example
         * var handler = function () {
         * };
         * obj.on('test', handler);
         *
         * obj.off(); // Removes all events
         * obj.off('test'); // Removes all events called 'test'
         * obj.off('test', handler); // Removes all handler functions, called 'test'
         * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
         */
        off(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.SoundInstance#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.SoundInstance#once
         * @description Attach an event handler to an event. This handler will be removed after being fired once.
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.once('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         * obj.fire('test', 1, 2); // not going to get handled
         */
        once(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
        * @function
        * @name pc.SoundInstance#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;
    }
}
