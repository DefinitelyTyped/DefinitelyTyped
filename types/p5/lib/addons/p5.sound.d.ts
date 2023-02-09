// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class SoundFile {
        /**
         *   SoundFile object with a path to a file. The
         *   p5.SoundFile may not be available immediately
         *   because it loads the file information
         *   asynchronously.
         *
         *   To do something with the sound as soon as it loads
         *   pass the name of a function as the second
         *   parameter.
         *
         *   Only one file path is required. However, audio
         *   file formats (i.e. mp3, ogg, wav and m4a/aac) are
         *   not supported by all web browsers. If you want to
         *   ensure compatability, instead of a single file
         *   path, you may include an Array of filepaths, and
         *   the browser will choose a format that works.
         *
         *   @param path path to a sound file (String).
         *   Optionally, you may include multiple file formats
         *   in an array. Alternately, accepts an object from
         *   the HTML5 File API, or a p5.File.
         *   @param [successCallback] Name of a function to
         *   call once file loads
         *   @param [errorCallback] Name of a function to call
         *   if file fails to load. This function will receive
         *   an error or XMLHttpRequest object with information
         *   about what went wrong.
         *   @param [whileLoadingCallback] Name of a function
         *   to call while file is loading. That function will
         *   receive progress of the request to load the sound
         *   file (between 0 and 1) as its first parameter.
         *   This progress does not account for the additional
         *   time needed to decode the audio data.
         */
        constructor(
            path: string | any[],
            successCallback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any,
            whileLoadingCallback?: (...args: any[]) => any
        );

        /**
         *   Returns true if the sound file finished loading
         *   successfully.
         */
        isLoaded(): boolean;

        /**
         *   Play the p5.SoundFile
         *   @param [startTime] (optional) schedule playback to
         *   start (in seconds from now).
         *   @param [rate] (optional) playback rate
         *   @param [amp] (optional) amplitude (volume) of
         *   playback
         *   @param [cueStart] (optional) cue start time in
         *   seconds
         *   @param [duration] (optional) duration of playback
         *   in seconds
         */
        play(startTime?: number, rate?: number, amp?: number, cueStart?: number, duration?: number): void;

        /**
         *   p5.SoundFile has two play modes: restart and
         *   sustain. Play Mode determines what happens to a
         *   p5.SoundFile if it is triggered while in the
         *   middle of playback. In sustain mode, playback will
         *   continue simultaneous to the new playback. In
         *   restart mode, play() will stop playback and start
         *   over. With untilDone, a sound will play only if
         *   it's not already playing. Sustain is the default
         *   mode.
         *   @param str 'restart' or 'sustain' or 'untilDone'
         */
        playMode(str: string): void;

        /**
         *   Pauses a file that is currently playing. If the
         *   file is not playing, then nothing will happen.
         *   After pausing, .play() will resume from the paused
         *   position. If p5.SoundFile had been set to loop
         *   before it was paused, it will continue to loop
         *   after it is unpaused with .play().
         *   @param [startTime] (optional) schedule event to
         *   occur seconds from now
         */
        pause(startTime?: number): void;

        /**
         *   Loop the p5.SoundFile. Accepts optional parameters
         *   to set the playback rate, playback volume,
         *   loopStart, loopEnd.
         *   @param [startTime] (optional) schedule event to
         *   occur seconds from now
         *   @param [rate] (optional) playback rate
         *   @param [amp] (optional) playback volume
         *   @param [cueLoopStart] (optional) startTime in
         *   seconds
         *   @param [duration] (optional) loop duration in
         *   seconds
         */
        loop(startTime?: number, rate?: number, amp?: number, cueLoopStart?: number, duration?: number): void;

        /**
         *   Set a p5.SoundFile's looping flag to true or
         *   false. If the sound is currently playing, this
         *   change will take effect when it reaches the end of
         *   the current playback.
         *   @param Boolean set looping to true or false
         */
        setLoop(Boolean: boolean): void;

        /**
         *   Returns 'true' if a p5.SoundFile is currently
         *   looping and playing, 'false' if not.
         */
        isLooping(): boolean;

        /**
         *   Returns true if a p5.SoundFile is playing, false
         *   if not (i.e. paused or stopped).
         */
        isPlaying(): boolean;

        /**
         *   Returns true if a p5.SoundFile is paused, false if
         *   not (i.e. playing or stopped).
         */
        isPaused(): boolean;

        /**
         *   Stop soundfile playback.
         *   @param [startTime] (optional) schedule event to
         *   occur in seconds from now
         */
        stop(startTime?: number): void;

        /**
         *   Set the stereo panning of a p5.sound object to a
         *   floating point number between -1.0 (left) and 1.0
         *   (right). Default is 0.0 (center).
         *   @param [panValue] Set the stereo panner
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         */
        pan(panValue?: number, timeFromNow?: number): void;

        /**
         *   Returns the current stereo pan position (-1.0 to
         *   1.0)
         *   @return Returns the stereo pan setting of the
         *   Oscillator as a number between -1.0 (left) and 1.0
         *   (right). 0.0 is center and default.
         */
        getPan(): number;

        /**
         *   Set the playback rate of a sound file. Will change
         *   the speed and the pitch. Values less than zero
         *   will reverse the audio buffer.
         *   @param [playbackRate] Set the playback rate. 1.0
         *   is normal, .5 is half-speed, 2.0 is twice as fast.
         *   Values less than zero play backwards.
         */
        rate(playbackRate?: number): void;

        /**
         *   Multiply the output volume (amplitude) of a sound
         *   file between 0.0 (silence) and 1.0 (full volume).
         *   1.0 is the maximum amplitude of a digital sound,
         *   so multiplying by greater than 1.0 may cause
         *   digital distortion. To fade, provide a rampTime
         *   parameter. For more complex fades, see the
         *   Envelope class. Alternately, you can pass in a
         *   signal source such as an oscillator to modulate
         *   the amplitude with an audio signal.
         *   @param volume Volume (amplitude) between 0.0 and
         *   1.0 or modulating signal/oscillator
         *   @param [rampTime] Fade for t seconds
         *   @param [timeFromNow] Schedule this event to happen
         *   at t seconds in the future
         */
        setVolume(volume: number | object, rampTime?: number, timeFromNow?: number): void;

        /**
         *   Returns the duration of a sound file in seconds.
         *   @return The duration of the soundFile in seconds.
         */
        duration(): number;

        /**
         *   Return the current position of the p5.SoundFile
         *   playhead, in seconds. Time is relative to the
         *   normal buffer direction, so if reverseBuffer has
         *   been called, currentTime will count backwards.
         *   @return currentTime of the soundFile in seconds.
         */
        currentTime(): number;

        /**
         *   Move the playhead of a soundfile that is currently
         *   playing to a new position and a new duration, in
         *   seconds. If none are given, will reset the file to
         *   play entire duration from start to finish. To set
         *   the position of a soundfile that is not currently
         *   playing, use the play or loop methods.
         *   @param cueTime cueTime of the soundFile in
         *   seconds.
         *   @param duration duration in seconds.
         */
        jump(cueTime: number, duration: number): void;

        /**
         *   Return the number of channels in a sound file. For
         *   example, Mono = 1, Stereo = 2.
         *   @return [channels]
         */
        channels(): number;

        /**
         *   Return the sample rate of the sound file.
         *   @return [sampleRate]
         */
        sampleRate(): number;

        /**
         *   Return the number of samples in a sound file.
         *   Equal to sampleRate * duration.
         *   @return [sampleCount]
         */
        frames(): number;

        /**
         *   Returns an array of amplitude peaks in a
         *   p5.SoundFile that can be used to draw a static
         *   waveform. Scans through the p5.SoundFile's audio
         *   buffer to find the greatest amplitudes. Accepts
         *   one parameter, 'length', which determines size of
         *   the array. Larger arrays result in more precise
         *   waveform visualizations. Inspired by
         *   Wavesurfer.js.
         *   @param [length] length is the size of the returned
         *   array. Larger length results in more precision.
         *   Defaults to 5*width of the browser window.
         *   @return Array of peaks.
         */
        getPeaks(length?: number): Float32Array;

        /**
         *   Reverses the p5.SoundFile's buffer source.
         *   Playback must be handled separately (see example).
         */
        reverseBuffer(): void;

        /**
         *   Schedule an event to be called when the soundfile
         *   reaches the end of a buffer. If the soundfile is
         *   playing through once, this will be called when it
         *   ends. If it is looping, it will be called when
         *   stop is called.
         *   @param callback function to call when the
         *   soundfile has ended.
         */
        onended(callback: (...args: any[]) => any): void;

        /**
         *   Connects the output of a p5sound object to input
         *   of another p5.sound object. For example, you may
         *   connect a p5.SoundFile to an FFT or an Effect. If
         *   no parameter is given, it will connect to the main
         *   output. Most p5sound objects connect to the master
         *   output when they are created.
         *   @param [object] Audio object that accepts an input
         */
        connect(object?: object): void;

        /**
         *   Disconnects the output of this p5sound object.
         */
        disconnect(): void;

        /**
         *   Reset the source for this SoundFile to a new path
         *   (URL).
         *   @param path path to audio file
         *   @param callback Callback
         */
        setPath(path: string, callback: (...args: any[]) => any): void;

        /**
         *   Replace the current Audio Buffer with a new
         *   Buffer.
         *   @param buf Array of Float32 Array(s). 2 Float32
         *   Arrays will create a stereo source. 1 will create
         *   a mono source.
         */
        setBuffer(buf: any[]): void;

        /**
         *   Schedule events to trigger every time a
         *   MediaElement (audio/video) reaches a playback cue
         *   point. Accepts a callback function, a time (in
         *   seconds) at which to trigger the callback, and an
         *   optional parameter for the callback.
         *
         *   Time will be passed as the first parameter to the
         *   callback function, and param will be the second
         *   parameter.
         *   @param time Time in seconds, relative to this
         *   media element's playback. For example, to trigger
         *   an event every time playback reaches two seconds,
         *   pass in the number 2. This will be passed as the
         *   first parameter to the callback function.
         *   @param callback Name of a function that will be
         *   called at the given time. The callback will
         *   receive time and (optionally) param as its two
         *   parameters.
         *   @param [value] An object to be passed as the
         *   second parameter to the callback function.
         *   @return id ID of this cue, useful for
         *   removeCue(id)
         */
        addCue(time: number, callback: (...args: any[]) => any, value?: object): number;

        /**
         *   Remove a callback based on its ID. The ID is
         *   returned by the addCue method.
         *   @param id ID of the cue, as returned by addCue
         */
        removeCue(id: number): void;

        /**
         *   Remove all of the callbacks that had originally
         *   been scheduled via the addCue method.
         */
        clearCues(): void;

        /**
         *   Save a p5.SoundFile as a .wav file. The browser
         *   will prompt the user to download the file to their
         *   device. To upload a file to a server, see getBlob
         *   @param [fileName] name of the resulting .wav file.
         */
        save(fileName?: string): void;

        /**
         *   This method is useful for sending a SoundFile to a
         *   server. It returns the .wav-encoded audio data as
         *   a "Blob". A Blob is a file-like data object that
         *   can be uploaded to a server with an http request.
         *   We'll use the httpDo options object to send a POST
         *   request with some specific options: we encode the
         *   request as multipart/form-data, and attach the
         *   blob as one of the form values using FormData.
         *   @return A file-like data object
         */
        getBlob(): Blob;
    }
    class Amplitude {
        /**
         *   Amplitude measures volume between 0.0 and 1.0.
         *   Listens to all p5sound by default, or use
         *   setInput() to listen to a specific sound source.
         *   Accepts an optional smoothing value, which
         *   defaults to 0.
         *
         *   @param [smoothing] between 0.0 and .999 to smooth
         *   amplitude readings (defaults to 0)
         */
        constructor(smoothing?: number);

        /**
         *   Connects to the p5sound instance (main output) by
         *   default. Optionally, you can pass in a specific
         *   source (i.e. a soundfile).
         *   @param [snd] set the sound source (optional,
         *   defaults to main output)
         *   @param [smoothing] a range between 0.0 and 1.0 to
         *   smooth amplitude readings
         */
        setInput(snd?: any, smoothing?: number): void;

        /**
         *   Returns a single Amplitude reading at the moment
         *   it is called. For continuous readings, run in the
         *   draw loop.
         *   @param [channel] Optionally return only channel 0
         *   (left) or 1 (right)
         *   @return Amplitude as a number between 0.0 and 1.0
         */
        getLevel(channel?: number): number;

        /**
         *   Determines whether the results of
         *   Amplitude.process() will be Normalized. To
         *   normalize, Amplitude finds the difference the
         *   loudest reading it has processed and the maximum
         *   amplitude of 1.0. Amplitude adds this difference
         *   to all values to produce results that will
         *   reliably map between 0.0 and 1.0. However, if a
         *   louder moment occurs, the amount that Normalize
         *   adds to all the values will change. Accepts an
         *   optional boolean parameter (true or false).
         *   Normalizing is off by default.
         *   @param [boolean] set normalize to true (1) or
         *   false (0)
         */
        toggleNormalize(boolean?: boolean): void;

        /**
         *   Smooth Amplitude analysis by averaging with the
         *   last analysis frame. Off by default.
         *   @param set smoothing from 0.0 <= 1
         */
        smooth(set: number): void;
    }
    class FFT {
        /**
         *   FFT (Fast Fourier Transform) is an analysis
         *   algorithm that isolates individual  audio
         *   frequencies within a waveform. Once instantiated,
         *   a p5.FFT object can return an array based on two
         *   types of analyses:
         *
         *   • FFT.waveform() computes amplitude values along
         *   the time domain. The array indices correspond to
         *   samples across a brief moment in time. Each value
         *   represents amplitude of the waveform at that
         *   sample of time.
         *
         *   • FFT.analyze()  computes amplitude values along
         *   the frequency domain. The array indices correspond
         *   to frequencies (i.e. pitches), from the lowest to
         *   the highest that humans can hear. Each value
         *   represents amplitude at that slice of the
         *   frequency spectrum. Use with getEnergy() to
         *   measure amplitude at specific frequencies, or
         *   within a range of frequencies.
         *
         *   FFT analyzes a very short snapshot of sound called
         *   a sample buffer. It returns an array of amplitude
         *   measurements, referred to as bins. The array is
         *   1024 bins long by default. You can change the bin
         *   array length, but it must be a power of 2 between
         *   16 and 1024 in order for the FFT algorithm to
         *   function correctly. The actual size of the FFT
         *   buffer is twice the number of bins, so given a
         *   standard sample rate, the buffer is 2048/44100
         *   seconds long.
         *
         *   @param [smoothing] Smooth results of Freq
         *   Spectrum. 0.0 < smoothing < 1.0. Defaults to 0.8.
         *   @param [bins] Length of resulting array. Must be a
         *   power of two between 16 and 1024. Defaults to
         *   1024.
         */
        constructor(smoothing?: number, bins?: number);

        /**
         *   Set the input source for the FFT analysis. If no
         *   source is provided, FFT will analyze all sound in
         *   the sketch.
         *   @param [source] p5.sound object (or web audio API
         *   source node)
         */
        setInput(source?: object): void;

        /**
         *   Returns an array of amplitude values (between -1.0
         *   and +1.0) that represent a snapshot of amplitude
         *   readings in a single buffer. Length will be equal
         *   to bins (defaults to 1024). Can be used to draw
         *   the waveform of a sound.
         *   @param [bins] Must be a power of two between 16
         *   and 1024. Defaults to 1024.
         *   @param [precision] If any value is provided, will
         *   return results in a Float32 Array which is more
         *   precise than a regular array.
         *   @return Array Array of amplitude values (-1 to 1)
         *   over time. Array length = bins.
         */
        waveform(bins?: number, precision?: string): any[];

        /**
         *   Returns an array of amplitude values (between 0
         *   and 255) across the frequency spectrum. Length is
         *   equal to FFT bins (1024 by default). The array
         *   indices correspond to frequencies (i.e. pitches),
         *   from the lowest to the highest that humans can
         *   hear. Each value represents amplitude at that
         *   slice of the frequency spectrum. Must be called
         *   prior to using getEnergy().
         *   @param [bins] Must be a power of two between 16
         *   and 1024. Defaults to 1024.
         *   @param [scale] If "dB," returns decibel float
         *   measurements between -140 and 0 (max). Otherwise
         *   returns integers from 0-255.
         *   @return spectrum Array of energy
         *   (amplitude/volume) values across the frequency
         *   spectrum. Lowest energy (silence) = 0, highest
         *   possible is 255.
         */
        analyze(bins?: number, scale?: number): any[];

        /**
         *   Returns the amount of energy (volume) at a
         *   specific  frequency, or the average amount of
         *   energy between two frequencies. Accepts Number(s)
         *   corresponding to frequency (in Hz), or a "string"
         *   corresponding to predefined frequency ranges
         *   ("bass", "lowMid", "mid", "highMid", "treble").
         *   Returns a range between 0 (no energy/volume at
         *   that frequency) and 255 (maximum energy). NOTE:
         *   analyze() must be called prior to getEnergy().
         *   analyze() tells the FFT to analyze frequency data,
         *   and getEnergy() uses the results to determine the
         *   value at a specific frequency or range of
         *   frequencies.
         *   @param frequency1 Will return a value representing
         *   energy at this frequency. Alternately, the strings
         *   "bass", "lowMid" "mid", "highMid", and "treble"
         *   will return predefined frequency ranges.
         *   @param [frequency2] If a second frequency is
         *   given, will return average amount of energy that
         *   exists between the two frequencies.
         *   @return Energy Energy (volume/amplitude) from 0
         *   and 255.
         */
        getEnergy(frequency1: number | string, frequency2?: number): number;

        /**
         *   Returns the  spectral centroid of the input
         *   signal. NOTE: analyze() must be called prior to
         *   getCentroid(). Analyze() tells the FFT to analyze
         *   frequency data, and getCentroid() uses the results
         *   determine the spectral centroid.
         *   @return Spectral Centroid Frequency of the
         *   spectral centroid in Hz.
         */
        getCentroid(): number;

        /**
         *   Smooth FFT analysis by averaging with the last
         *   analysis frame.
         *   @param smoothing 0.0 < smoothing < 1.0. Defaults
         *   to 0.8.
         */
        smooth(smoothing: number): void;

        /**
         *   Returns an array of average amplitude values for a
         *   given number of frequency bands split equally. N
         *   defaults to 16. NOTE: analyze() must be called
         *   prior to linAverages(). Analyze() tells the FFT to
         *   analyze frequency data, and linAverages() uses the
         *   results to group them into a smaller set of
         *   averages.
         *   @param N Number of returned frequency groups
         *   @return linearAverages Array of average amplitude
         *   values for each group
         */
        linAverages(N: number): any[];

        /**
         *   Returns an array of average amplitude values of
         *   the spectrum, for a given set of  Octave Bands
         *   NOTE: analyze() must be called prior to
         *   logAverages(). Analyze() tells the FFT to analyze
         *   frequency data, and logAverages() uses the results
         *   to group them into a smaller set of averages.
         *   @param octaveBands Array of Octave Bands objects
         *   for grouping
         *   @return logAverages Array of average amplitude
         *   values for each group
         */
        logAverages(octaveBands: any[]): any[];

        /**
         *   Calculates and Returns the 1/N Octave Bands N
         *   defaults to 3 and minimum central frequency to
         *   15.625Hz. (1/3 Octave Bands ~= 31 Frequency Bands)
         *   Setting fCtr0 to a central value of a higher
         *   octave will ignore the lower bands and produce
         *   less frequency groups.
         *   @param N Specifies the 1/N type of generated
         *   octave bands
         *   @param fCtr0 Minimum central frequency for the
         *   lowest band
         *   @return octaveBands Array of octave band objects
         *   with their bounds
         */
        getOctaveBands(N: number, fCtr0: number): any[];
    }
    class Oscillator {
        /**
         *   Creates a signal that oscillates between -1.0 and
         *   1.0. By default, the oscillation takes the form of
         *   a sinusoidal shape ('sine'). Additional types
         *   include 'triangle', 'sawtooth' and 'square'. The
         *   frequency defaults to 440 oscillations per second
         *   (440Hz, equal to the pitch of an 'A' note). Set
         *   the type of oscillation with setType(), or by
         *   instantiating a specific oscillator: p5.SinOsc,
         *   p5.TriOsc, p5.SqrOsc, or p5.SawOsc.
         *
         *   @param [freq] frequency defaults to 440Hz
         *   @param [type] type of oscillator. Options: 'sine'
         *   (default), 'triangle', 'sawtooth', 'square'
         */
        constructor(freq?: number, type?: string);

        /**
         *   Start an oscillator. Starting an oscillator on a
         *   user gesture will enable audio in browsers that
         *   have a strict autoplay policy, including Chrome
         *   and most mobile devices. See also:
         *   userStartAudio().
         *   @param [time] startTime in seconds from now.
         *   @param [frequency] frequency in Hz.
         */
        start(time?: number, frequency?: number): void;

        /**
         *   Stop an oscillator. Accepts an optional parameter
         *   to determine how long (in seconds from now) until
         *   the oscillator stops.
         *   @param secondsFromNow Time, in seconds from now.
         */
        stop(secondsFromNow: number): void;

        /**
         *   Set the amplitude between 0 and 1.0. Or, pass in
         *   an object such as an oscillator to modulate
         *   amplitude with an audio signal.
         *   @param vol between 0 and 1.0 or a modulating
         *   signal/oscillator
         *   @param [rampTime] create a fade that lasts
         *   rampTime
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         *   @return gain If no value is provided, returns the
         *   Web Audio API AudioParam that controls this
         *   oscillator's gain/amplitude/volume)
         */
        amp(vol: number | object, rampTime?: number, timeFromNow?: number): AudioParam;

        /**
         *   Returns the value of output gain
         *   @return Amplitude value between 0.0 and 1.0
         */
        getAmp(): number;

        /**
         *   Set frequency of an oscillator to a value. Or,
         *   pass in an object such as an oscillator to
         *   modulate the frequency with an audio signal.
         *   @param Frequency Frequency in Hz or modulating
         *   signal/oscillator
         *   @param [rampTime] Ramp time (in seconds)
         *   @param [timeFromNow] Schedule this event to happen
         *   at x seconds from now
         *   @return Frequency If no value is provided, returns
         *   the Web Audio API AudioParam that controls this
         *   oscillator's frequency
         */
        freq(Frequency: number | object, rampTime?: number, timeFromNow?: number): AudioParam;

        /**
         *   Returns the value of frequency of oscillator
         *   @return Frequency of oscillator in Hertz
         */
        getFreq(): number;

        /**
         *   Set type to 'sine', 'triangle', 'sawtooth' or
         *   'square'.
         *   @param type 'sine', 'triangle', 'sawtooth' or
         *   'square'.
         */
        setType(type: string): void;

        /**
         *   Returns current type of oscillator eg. 'sine',
         *   'triangle', 'sawtooth' or 'square'.
         *   @return type of oscillator eg . 'sine',
         *   'triangle', 'sawtooth' or 'square'.
         */
        getType(): string;

        /**
         *   Connect to a p5.sound / Web Audio object.
         *   @param unit A p5.sound or Web Audio object
         */
        connect(unit: object): void;

        /**
         *   Disconnect all outputs
         */
        disconnect(): void;

        /**
         *   Pan between Left (-1) and Right (1)
         *   @param panning Number between -1 and 1
         *   @param timeFromNow schedule this event to happen
         *   seconds from now
         */
        pan(panning: number, timeFromNow: number): void;

        /**
         *   Returns the current value of panPosition , between
         *   Left (-1) and Right (1)
         *   @return panPosition of oscillator , between Left
         *   (-1) and Right (1)
         */
        getPan(): number;

        /**
         *   Set the phase of an oscillator between 0.0 and
         *   1.0. In this implementation, phase is a delay time
         *   based on the oscillator's current frequency.
         *   @param phase float between 0.0 and 1.0
         */
        phase(phase: number): void;

        /**
         *   Add a value to the p5.Oscillator's output
         *   amplitude, and return the oscillator. Calling this
         *   method again will override the initial add() with
         *   a new value.
         *   @param number Constant number to add
         *   @return Oscillator Returns this oscillator with
         *   scaled output
         */
        add(number: number): Oscillator;

        /**
         *   Multiply the p5.Oscillator's output amplitude by a
         *   fixed value (i.e. turn it up!). Calling this
         *   method again will override the initial mult() with
         *   a new value.
         *   @param number Constant number to multiply
         *   @return Oscillator Returns this oscillator with
         *   multiplied output
         */
        mult(number: number): Oscillator;

        /**
         *   Scale this oscillator's amplitude values to a
         *   given range, and return the oscillator. Calling
         *   this method again will override the initial
         *   scale() with new values.
         *   @param inMin input range minumum
         *   @param inMax input range maximum
         *   @param outMin input range minumum
         *   @param outMax input range maximum
         *   @return Oscillator Returns this oscillator with
         *   scaled output
         */
        scale(inMin: number, inMax: number, outMin: number, outMax: number): Oscillator;
    }
    class Envelope {
        /**
         *   Envelopes are pre-defined amplitude distribution
         *   over time. Typically, envelopes are used to
         *   control the output volume of an object, a series
         *   of fades referred to as Attack, Decay, Sustain and
         *   Release ( ADSR ). Envelopes can also control other
         *   Web Audio Parameters—for example, a p5.Envelope
         *   can control an Oscillator's frequency like this:
         *   osc.freq(env). Use setRange to change the
         *   attack/release level. Use setADSR to change
         *   attackTime, decayTime, sustainPercent and
         *   releaseTime.
         *
         *   Use the play method to play the entire envelope,
         *   the ramp method for a pingable trigger, or
         *   triggerAttack/ triggerRelease to trigger
         *   noteOn/noteOff.
         *
         */
        constructor();

        /**
         *   Reset the envelope with a series of time/value
         *   pairs.
         *   @param attackTime Time (in seconds) before level
         *   reaches attackLevel
         *   @param attackLevel Typically an amplitude between
         *   0.0 and 1.0
         *   @param decayTime Time
         *   @param decayLevel Amplitude (In a standard ADSR
         *   envelope, decayLevel = sustainLevel)
         *   @param releaseTime Release Time (in seconds)
         *   @param releaseLevel Amplitude
         */
        set(
            attackTime: number,
            attackLevel: number,
            decayTime: number,
            decayLevel: number,
            releaseTime: number,
            releaseLevel: number
        ): void;

        /**
         *   Set values like a traditional  ADSR envelope .
         *   @param attackTime Time (in seconds before envelope
         *   reaches Attack Level
         *   @param [decayTime] Time (in seconds) before
         *   envelope reaches Decay/Sustain Level
         *   @param [susRatio] Ratio between attackLevel and
         *   releaseLevel, on a scale from 0 to 1, where 1.0 =
         *   attackLevel, 0.0 = releaseLevel. The susRatio
         *   determines the decayLevel and the level at which
         *   the sustain portion of the envelope will sustain.
         *   For example, if attackLevel is 0.4, releaseLevel
         *   is 0, and susAmt is 0.5, the decayLevel would be
         *   0.2. If attackLevel is increased to 1.0 (using
         *   setRange), then decayLevel would increase
         *   proportionally, to become 0.5.
         *   @param [releaseTime] Time in seconds from now
         *   (defaults to 0)
         */
        setADSR(attackTime: number, decayTime?: number, susRatio?: number, releaseTime?: number): void;

        /**
         *   Set max (attackLevel) and min (releaseLevel) of
         *   envelope.
         *   @param aLevel attack level (defaults to 1)
         *   @param rLevel release level (defaults to 0)
         */
        setRange(aLevel: number, rLevel: number): void;

        /**
         *   Assign a parameter to be controlled by this
         *   envelope. If a p5.Sound object is given, then the
         *   p5.Envelope will control its output gain. If
         *   multiple inputs are provided, the env will control
         *   all of them.
         *   @param [inputs] A p5.sound object or Web Audio
         *   Param.
         */
        setInput(inputs?: object): void;

        /**
         *   Set whether the envelope ramp is linear (default)
         *   or exponential. Exponential ramps can be useful
         *   because we perceive amplitude and frequency
         *   logarithmically.
         *   @param isExp true is exponential, false is linear
         */
        setExp(isExp: boolean): void;

        /**
         *   Play tells the envelope to start acting on a given
         *   input. If the input is a p5.sound object (i.e.
         *   AudioIn, Oscillator, SoundFile), then Envelope
         *   will control its output volume. Envelopes can also
         *   be used to control any  Web Audio Audio Param.
         *   @param unit A p5.sound object or Web Audio Param.
         *   @param [startTime] time from now (in seconds) at
         *   which to play
         *   @param [sustainTime] time to sustain before
         *   releasing the envelope
         */
        play(unit: object, startTime?: number, sustainTime?: number): void;

        /**
         *   Trigger the Attack, and Decay portion of the
         *   Envelope. Similar to holding down a key on a
         *   piano, but it will hold the sustain level until
         *   you let go. Input can be any p5.sound object, or a
         *   Web Audio Param.
         *   @param unit p5.sound Object or Web Audio Param
         *   @param secondsFromNow time from now (in seconds)
         */
        triggerAttack(unit: object, secondsFromNow: number): void;

        /**
         *   Trigger the Release of the Envelope. This is
         *   similar to releasing the key on a piano and
         *   letting the sound fade according to the release
         *   level and release time.
         *   @param unit p5.sound Object or Web Audio Param
         *   @param secondsFromNow time to trigger the release
         */
        triggerRelease(unit: object, secondsFromNow: number): void;

        /**
         *   Exponentially ramp to a value using the first two
         *   values from setADSR(attackTime, decayTime) as
         *   time constants for simple exponential ramps. If
         *   the value is higher than current value, it uses
         *   attackTime, while a decrease uses decayTime.
         *   @param unit p5.sound Object or Web Audio Param
         *   @param secondsFromNow When to trigger the ramp
         *   @param v Target value
         *   @param [v2] Second target value
         */
        ramp(unit: object, secondsFromNow: number, v: number, v2?: number): void;

        /**
         *   Add a value to the p5.Oscillator's output
         *   amplitude, and return the oscillator. Calling this
         *   method again will override the initial add() with
         *   new values.
         *   @param number Constant number to add
         *   @return Envelope Returns this envelope with scaled
         *   output
         */
        add(number: number): Envelope;

        /**
         *   Multiply the p5.Envelope's output amplitude by a
         *   fixed value. Calling this method again will
         *   override the initial mult() with new values.
         *   @param number Constant number to multiply
         *   @return Envelope Returns this envelope with scaled
         *   output
         */
        mult(number: number): Envelope;

        /**
         *   Scale this envelope's amplitude values to a given
         *   range, and return the envelope. Calling this
         *   method again will override the initial scale()
         *   with new values.
         *   @param inMin input range minumum
         *   @param inMax input range maximum
         *   @param outMin input range minumum
         *   @param outMax input range maximum
         *   @return Envelope Returns this envelope with scaled
         *   output
         */
        scale(inMin: number, inMax: number, outMin: number, outMax: number): Envelope;

        /**
         *   Time until envelope reaches attackLevel
         */
        attackTime: any;

        /**
         *   Level once attack is complete.
         */
        attackLevel: any;

        /**
         *   Time until envelope reaches decayLevel.
         */
        decayTime: any;

        /**
         *   Level after decay. The envelope will sustain here
         *   until it is released.
         */
        decayLevel: any;

        /**
         *   Duration of the release portion of the envelope.
         */
        releaseTime: any;

        /**
         *   Level at the end of the release.
         */
        releaseLevel: any;
    }
    class Noise extends Oscillator {
        /**
         *   Noise is a type of oscillator that generates a
         *   buffer with random values.
         *
         *   @param type Type of noise can be 'white'
         *   (default), 'brown' or 'pink'.
         */
        constructor(type: string);

        /**
         *   Set type of noise to 'white', 'pink' or 'brown'.
         *   White is the default.
         *   @param [type] 'white', 'pink' or 'brown'
         */
        setType(type?: string): void;
    }
    class Pulse extends Oscillator {
        /**
         *   Creates a Pulse object, an oscillator that
         *   implements Pulse Width Modulation. The pulse is
         *   created with two oscillators. Accepts a parameter
         *   for frequency, and to set the width between the
         *   pulses. See  p5.Oscillator for a full list of
         *   methods.
         *
         *   @param [freq] Frequency in oscillations per second
         *   (Hz)
         *   @param [w] Width between the pulses (0 to 1.0,
         *   defaults to 0)
         */
        constructor(freq?: number, w?: number);

        /**
         *   Set the width of a Pulse object (an oscillator
         *   that implements Pulse Width Modulation).
         *   @param [width] Width between the pulses (0 to 1.0,
         *   defaults to 0)
         */
        width(width?: number): void;
    }
    class AudioIn {
        /**
         *   Get audio from an input, i.e. your computer's
         *   microphone. Turn the mic on/off with the start()
         *   and stop() methods. When the mic is on, its volume
         *   can be measured with getLevel or by connecting an
         *   FFT object.
         *
         *   If you want to hear the AudioIn, use the
         *   .connect() method. AudioIn does not connect to
         *   p5.sound output by default to prevent feedback.
         *
         *   Note: This uses the getUserMedia/ Stream API,
         *   which is not supported by certain browsers. Access
         *   in Chrome browser is limited to localhost and
         *   https, but access over http may be limited.
         *
         *   @param [errorCallback] A function to call if there
         *   is an error accessing the AudioIn. For example,
         *   Safari and iOS devices do not currently allow
         *   microphone access.
         */
        constructor(errorCallback?: (...args: any[]) => any);

        /**
         *   Start processing audio input. This enables the use
         *   of other AudioIn methods like getLevel(). Note
         *   that by default, AudioIn is not connected to
         *   p5.sound's output. So you won't hear anything
         *   unless you use the connect() method.
         *
         *   Certain browsers limit access to the user's
         *   microphone. For example, Chrome only allows access
         *   from localhost and over https. For this reason,
         *   you may want to include an errorCallback—a
         *   function that is called in case the browser won't
         *   provide mic access.
         *   @param [successCallback] Name of a function to
         *   call on success.
         *   @param [errorCallback] Name of a function to call
         *   if there was an error. For example, some browsers
         *   do not support getUserMedia.
         */
        start(successCallback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): void;

        /**
         *   Turn the AudioIn off. If the AudioIn is stopped,
         *   it cannot getLevel(). If re-starting, the user may
         *   be prompted for permission access.
         */
        stop(): void;

        /**
         *   Connect to an audio unit. If no parameter is
         *   provided, will connect to the main output (i.e.
         *   your speakers).
         *   @param [unit] An object that accepts audio input,
         *   such as an FFT
         */
        connect(unit?: object): void;

        /**
         *   Disconnect the AudioIn from all audio units. For
         *   example, if connect() had been called,
         *   disconnect() will stop sending signal to your
         *   speakers.
         */
        disconnect(): void;

        /**
         *   Read the Amplitude (volume level) of an AudioIn.
         *   The AudioIn class contains its own instance of the
         *   Amplitude class to help make it easy to get a
         *   microphone's volume level. Accepts an optional
         *   smoothing value (0.0 < 1.0). NOTE: AudioIn must
         *   .start() before using .getLevel().
         *   @param [smoothing] Smoothing is 0.0 by default.
         *   Smooths values based on previous values.
         *   @return Volume level (between 0.0 and 1.0)
         */
        getLevel(smoothing?: number): number;

        /**
         *   Set amplitude (volume) of a mic input between 0
         *   and 1.0.
         *   @param vol between 0 and 1.0
         *   @param [time] ramp time (optional)
         */
        amp(vol: number, time?: number): void;

        /**
         *   Returns a list of available input sources. This is
         *   a wrapper for  MediaDevices.enumerateDevices() -
         *   Web APIs | MDN and it returns a Promise.
         *   @param [successCallback] This callback function
         *   handles the sources when they have been
         *   enumerated. The callback function receives the
         *   deviceList array as its only argument
         *   @param [errorCallback] This optional callback
         *   receives the error message as its argument.
         *   @return Returns a Promise that can be used in
         *   place of the callbacks, similar to the
         *   enumerateDevices() method
         */
        getSources(successCallback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): Promise<any>;

        /**
         *   Set the input source. Accepts a number
         *   representing a position in the array returned by
         *   getSources(). This is only available in browsers
         *   that support
         *   navigator.mediaDevices.enumerateDevices()
         *   @param num position of input source in the array
         */
        setSource(num: number): void;
        input: GainNode;
        output: GainNode;
        stream: MediaStream | null;
        mediaStream: MediaStreamAudioSourceNode | null;
        currentSource: number | null;

        /**
         *   Client must allow browser to access their
         *   microphone / audioin source. Default: false. Will
         *   become true when the client enables access.
         */
        enabled: boolean;

        /**
         *   Input amplitude, connect to it by default but not
         *   to master out
         */
        amplitude: Amplitude;
    }
    class Effect {
        /**
         *   Effect is a base class for audio effects in p5.
         *   This module handles the nodes and methods that are
         *   common and useful for current and future effects.
         *
         *   This class is extended by p5.Distortion,
         *   p5.Compressor, p5.Delay, p5.Filter, p5.Reverb.
         *
         *   @param [ac] Reference to the audio context of the
         *   p5 object
         *   @param [input] Gain Node effect wrapper
         *   @param [output] Gain Node effect wrapper
         *   @param [_drywet] Tone.JS CrossFade node (defaults
         *   to value: 1)
         *   @param [wet] Effects that extend this class should
         *   connect to the wet signal to this gain node, so
         *   that dry and wet signals are mixed properly.
         */
        constructor(ac?: object, input?: AudioNode, output?: AudioNode, _drywet?: object, wet?: AudioNode);

        /**
         *   Set the output volume of the filter.
         *   @param [vol] amplitude between 0 and 1.0
         *   @param [rampTime] create a fade that lasts until
         *   rampTime
         *   @param [tFromNow] schedule this event to happen in
         *   tFromNow seconds
         */
        amp(vol?: number, rampTime?: number, tFromNow?: number): void;

        /**
         *   Link effects together in a chain Example usage:
         *   filter.chain(reverb, delay, panner); May be used
         *   with an open-ended number of arguments
         *   @param [arguments] Chain together multiple sound
         *   objects
         */
        chain(arguments?: object): void;

        /**
         *   Adjust the dry/wet value.
         *   @param [fade] The desired drywet value (0 - 1.0)
         */
        drywet(fade?: number): void;

        /**
         *   Send output to a p5.js-sound, Web Audio Node, or
         *   use signal to control an AudioParam
         */
        connect(unit: object): void;

        /**
         *   Disconnect all output.
         */
        disconnect(): void;
    }
    class Filter extends Effect {
        /**
         *   A p5.Filter uses a Web Audio Biquad Filter to
         *   filter the frequency response of an input source.
         *   Subclasses include: p5.LowPass: Allows frequencies
         *   below the cutoff frequency to pass through, and
         *   attenuates frequencies above the cutoff.
         *   p5.HighPass: The opposite of a lowpass filter.
         *
         *   p5.BandPass: Allows a range of frequencies to pass
         *   through and attenuates the frequencies below and
         *   above this frequency range.
         *
         *
         *   The .res() method controls either width of the
         *   bandpass, or resonance of the low/highpass cutoff
         *   frequency.
         *
         *   This class extends p5.Effect. Methods amp(),
         *   chain(), drywet(), connect(), and disconnect() are
         *   available.
         *
         *   @param [type] 'lowpass' (default), 'highpass',
         *   'bandpass'
         */
        constructor(type?: string);

        /**
         *   Filter an audio signal according to a set of
         *   filter parameters.
         *   @param Signal An object that outputs audio
         *   @param [freq] Frequency in Hz, from 10 to 22050
         *   @param [res] Resonance/Width of the filter
         *   frequency from 0.001 to 1000
         */
        process(Signal: object, freq?: number, res?: number): void;

        /**
         *   Set the frequency and the resonance of the filter.
         *   @param [freq] Frequency in Hz, from 10 to 22050
         *   @param [res] Resonance (Q) from 0.001 to 1000
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         */
        set(freq?: number, res?: number, timeFromNow?: number): void;

        /**
         *   Set the filter frequency, in Hz, from 10 to 22050
         *   (the range of human hearing, although in reality
         *   most people hear in a narrower range).
         *   @param freq Filter Frequency
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         *   @return value Returns the current frequency value
         */
        freq(freq: number, timeFromNow?: number): number;

        /**
         *   Controls either width of a bandpass frequency, or
         *   the resonance of a low/highpass cutoff frequency.
         *   @param res Resonance/Width of filter freq from
         *   0.001 to 1000
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         *   @return value Returns the current res value
         */
        res(res: number, timeFromNow?: number): number;

        /**
         *   Controls the gain attribute of a Biquad Filter.
         *   This is distinctly different from .amp() which is
         *   inherited from p5.Effect .amp() controls the
         *   volume via the output gain node p5.Filter.gain()
         *   controls the gain parameter of a Biquad Filter
         *   node.
         *   @return Returns the current or updated gain value
         */
        gain(gain: number): number;

        /**
         *   Toggle function. Switches between the specified
         *   type and allpass
         *   @return [Toggle value]
         */
        toggle(): boolean;

        /**
         *   Set the type of a p5.Filter. Possible types
         *   include: "lowpass" (default), "highpass",
         *   "bandpass", "lowshelf", "highshelf", "peaking",
         *   "notch", "allpass".
         */
        setType(t: string): void;

        /**
         *   The p5.Filter is built with a  Web Audio
         *   BiquadFilter Node.
         */
        biquadFilter: DelayNode;
    }
    class EQ extends Effect {
        /**
         *   p5.EQ is an audio effect that performs the
         *   function of a multiband audio equalizer.
         *   Equalization is used to adjust the balance of
         *   frequency compoenents of an audio signal. This
         *   process is commonly used in sound production and
         *   recording to change the waveform before it reaches
         *   a sound output device. EQ can also be used as an
         *   audio effect to create interesting distortions by
         *   filtering out parts of the spectrum. p5.EQ is
         *   built using a chain of Web Audio Biquad Filter
         *   Nodes and can be instantiated with 3 or 8 bands.
         *   Bands can be added or removed from the EQ by
         *   directly modifying p5.EQ.bands (the array that
         *   stores filters). This class extends p5.Effect.
         *   Methods amp(), chain(), drywet(), connect(), and
         *   disconnect() are available.
         *
         *   @param [_eqsize] Constructor will accept 3 or 8,
         *   defaults to 3
         *   @return p5.EQ object
         */
        constructor(_eqsize?: number);

        /**
         *   Process an input by connecting it to the EQ
         *   @param src Audio source
         */
        process(src: object): void;

        /**
         *   The p5.EQ is built with abstracted p5.Filter
         *   objects. To modify any bands, use methods of the
         *   p5.Filter API, especially gain and freq. Bands are
         *   stored in an array, with indices 0 - 3, or 0 - 7
         */
        bands: any[];
    }
    class Panner3D {
        /**
         *   Panner3D is based on the  Web Audio Spatial Panner
         *   Node. This panner is a spatial processing node
         *   that allows audio to be positioned and oriented in
         *   3D space. The position is relative to an  Audio
         *   Context Listener, which can be accessed by
         *   p5.soundOut.audiocontext.listener
         *
         */
        constructor();

        /**
         *   Connect an audio sorce
         *   @param src Input source
         */
        process(src: object): void;

        /**
         *   Set the X,Y,Z position of the Panner
         *   @return Updated x, y, z values as an array
         */
        set(xVal: number, yVal: number, zVal: number, time: number): any[];

        /**
         *   Getter and setter methods for position coordinates
         *   @return updated coordinate value
         */
        positionX(): number;

        /**
         *   Getter and setter methods for position coordinates
         *   @return updated coordinate value
         */
        positionY(): number;

        /**
         *   Getter and setter methods for position coordinates
         *   @return updated coordinate value
         */
        positionZ(): number;

        /**
         *   Set the X,Y,Z position of the Panner
         *   @return Updated x, y, z values as an array
         */
        orient(xVal: number, yVal: number, zVal: number, time: number): any[];

        /**
         *   Getter and setter methods for orient coordinates
         *   @return updated coordinate value
         */
        orientX(): number;

        /**
         *   Getter and setter methods for orient coordinates
         *   @return updated coordinate value
         */
        orientY(): number;

        /**
         *   Getter and setter methods for orient coordinates
         *   @return updated coordinate value
         */
        orientZ(): number;

        /**
         *   Set the rolloff factor and max distance
         */
        setFalloff(maxDistance?: number, rolloffFactor?: number): void;

        /**
         *   Maxium distance between the source and the
         *   listener
         *   @return updated value
         */
        maxDist(maxDistance: number): number;

        /**
         *   How quickly the volume is reduced as the source
         *   moves away from the listener
         *   @return updated value
         */
        rollof(rolloffFactor: number): number;

        /**
         *   Web Audio Spatial Panner Node Properties include
         *
         *   Panning Model : "equal power" or "HRTF"
         *
         *   DistanceModel : "linear", "inverse", or
         *   "exponential"
         */
        panner: AudioNode;
    }
    class Delay extends Effect {
        /**
         *   Delay is an echo effect. It processes an existing
         *   sound source, and outputs a delayed version of
         *   that sound. The p5.Delay can produce different
         *   effects depending on the delayTime, feedback,
         *   filter, and type. In the example below, a feedback
         *   of 0.5 (the default value) will produce a looping
         *   delay that decreases in volume by 50% each repeat.
         *   A filter will cut out the high frequencies so that
         *   the delay does not sound as piercing as the
         *   original source. This class extends p5.Effect.
         *   Methods amp(), chain(), drywet(), connect(), and
         *   disconnect() are available.
         *
         */
        constructor();

        /**
         *   Add delay to an audio signal according to a set of
         *   delay parameters.
         *   @param Signal An object that outputs audio
         *   @param [delayTime] Time (in seconds) of the
         *   delay/echo. Some browsers limit delayTime to 1
         *   second.
         *   @param [feedback] sends the delay back through
         *   itself in a loop that decreases in volume each
         *   time.
         *   @param [lowPass] Cutoff frequency. Only
         *   frequencies below the lowPass will be part of the
         *   delay.
         */
        process(Signal: object, delayTime?: number, feedback?: number, lowPass?: number): void;

        /**
         *   Set the delay (echo) time, in seconds. Usually
         *   this value will be a floating point number between
         *   0.0 and 1.0.
         *   @param delayTime Time (in seconds) of the delay
         */
        delayTime(delayTime: number): void;

        /**
         *   Feedback occurs when Delay sends its signal back
         *   through its input in a loop. The feedback amount
         *   determines how much signal to send each time
         *   through the loop. A feedback greater than 1.0 is
         *   not desirable because it will increase the overall
         *   output each time through the loop, creating an
         *   infinite feedback loop. The default value is 0.5
         *   @param feedback 0.0 to 1.0, or an object such as
         *   an Oscillator that can be used to modulate this
         *   param
         *   @return Feedback value
         */
        feedback(feedback: number | object): number;

        /**
         *   Set a lowpass filter frequency for the delay. A
         *   lowpass filter will cut off any frequencies higher
         *   than the filter frequency.
         *   @param cutoffFreq A lowpass filter will cut off
         *   any frequencies higher than the filter frequency.
         *   @param res Resonance of the filter frequency
         *   cutoff, or an object (i.e. a p5.Oscillator) that
         *   can be used to modulate this parameter. High
         *   numbers (i.e. 15) will produce a resonance, low
         *   numbers (i.e. .2) will produce a slope.
         */
        filter(cutoffFreq: number | object, res: number | object): void;

        /**
         *   Choose a preset type of delay. 'pingPong' bounces
         *   the signal from the left to the right channel to
         *   produce a stereo effect. Any other parameter will
         *   revert to the default delay setting.
         *   @param type 'pingPong' (1) or 'default' (0)
         */
        setType(type: string | number): void;

        /**
         *   Set the output level of the delay effect.
         *   @param volume amplitude between 0 and 1.0
         *   @param [rampTime] create a fade that lasts
         *   rampTime
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         */
        amp(volume: number, rampTime?: number, timeFromNow?: number): void;

        /**
         *   Send output to a p5.sound or web audio object
         */
        connect(unit: object): void;

        /**
         *   Disconnect all output.
         */
        disconnect(): void;

        /**
         *   The p5.Delay is built with two  Web Audio Delay
         *   Nodes, one for each stereo channel.
         */
        leftDelay: DelayNode;

        /**
         *   The p5.Delay is built with two  Web Audio Delay
         *   Nodes, one for each stereo channel.
         */
        rightDelay: DelayNode;
    }
    class Reverb extends Effect {
        /**
         *   Reverb adds depth to a sound through a large
         *   number of decaying echoes. It creates the
         *   perception that sound is occurring in a physical
         *   space. The p5.Reverb has paramters for Time (how
         *   long does the reverb last) and decayRate (how much
         *   the sound decays with each echo) that can be set
         *   with the .set() or .process() methods. The
         *   p5.Convolver extends p5.Reverb allowing you to
         *   recreate the sound of actual physical spaces
         *   through convolution. This class extends p5.Effect.
         *   Methods amp(), chain(), drywet(), connect(), and
         *   disconnect() are available.
         *
         */
        constructor();

        /**
         *   Connect a source to the reverb, and assign reverb
         *   parameters.
         *   @param src p5.sound / Web Audio object with a
         *   sound output.
         *   @param [seconds] Duration of the reverb, in
         *   seconds. Min: 0, Max: 10. Defaults to 3.
         *   @param [decayRate] Percentage of decay with each
         *   echo. Min: 0, Max: 100. Defaults to 2.
         *   @param [reverse] Play the reverb backwards or
         *   forwards.
         */
        process(src: object, seconds?: number, decayRate?: number, reverse?: boolean): void;

        /**
         *   Set the reverb settings. Similar to .process(),
         *   but without assigning a new input.
         *   @param [seconds] Duration of the reverb, in
         *   seconds. Min: 0, Max: 10. Defaults to 3.
         *   @param [decayRate] Percentage of decay with each
         *   echo. Min: 0, Max: 100. Defaults to 2.
         *   @param [reverse] Play the reverb backwards or
         *   forwards.
         */
        set(seconds?: number, decayRate?: number, reverse?: boolean): void;

        /**
         *   Set the output level of the reverb effect.
         *   @param volume amplitude between 0 and 1.0
         *   @param [rampTime] create a fade that lasts
         *   rampTime
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         */
        amp(volume: number, rampTime?: number, timeFromNow?: number): void;

        /**
         *   Send output to a p5.sound or web audio object
         */
        connect(unit: object): void;

        /**
         *   Disconnect all output.
         */
        disconnect(): void;
    }
    class Convolver extends Effect {
        /**
         *   p5.Convolver extends p5.Reverb. It can emulate the
         *   sound of real physical spaces through a process
         *   called  convolution. Convolution multiplies any
         *   audio input by an "impulse response" to simulate
         *   the dispersion of sound over time. The impulse
         *   response is generated from an audio file that you
         *   provide. One way to generate an impulse response
         *   is to pop a balloon in a reverberant space and
         *   record the echo. Convolution can also be used to
         *   experiment with sound.
         *
         *   Use the method createConvolution(path) to
         *   instantiate a p5.Convolver with a path to your
         *   impulse response audio file.
         *
         *   @param path path to a sound file
         *   @param [callback] function to call when loading
         *   succeeds
         *   @param [errorCallback] function to call if loading
         *   fails. This function will receive an error or
         *   XMLHttpRequest object with information about what
         *   went wrong.
         */
        constructor(path: string, callback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any);

        /**
         *   Connect a source to the convolver.
         *   @param src p5.sound / Web Audio object with a
         *   sound output.
         */
        process(src: object): void;

        /**
         *   Load and assign a new Impulse Response to the
         *   p5.Convolver. The impulse is added to the
         *   .impulses array. Previous impulses can be accessed
         *   with the .toggleImpulse(id) method.
         *   @param path path to a sound file
         *   @param callback function (optional)
         *   @param errorCallback function (optional)
         */
        addImpulse(path: string, callback: (...args: any[]) => any, errorCallback: (...args: any[]) => any): void;

        /**
         *   Similar to .addImpulse, except that the .impulses
         *   Array is reset to save memory. A new .impulses
         *   array is created with this impulse as the only
         *   item.
         *   @param path path to a sound file
         *   @param callback function (optional)
         *   @param errorCallback function (optional)
         */
        resetImpulse(path: string, callback: (...args: any[]) => any, errorCallback: (...args: any[]) => any): void;

        /**
         *   If you have used .addImpulse() to add multiple
         *   impulses to a p5.Convolver, then you can use this
         *   method to toggle between the items in the
         *   .impulses Array. Accepts a parameter to identify
         *   which impulse you wish to use, identified either
         *   by its original filename (String) or by its
         *   position in the .impulses  Array (Number). You can
         *   access the objects in the .impulses Array
         *   directly. Each Object has two attributes: an
         *   .audioBuffer (type: Web Audio  AudioBuffer) and a
         *   .name, a String that corresponds with the original
         *   filename.
         *   @param id Identify the impulse by its original
         *   filename (String), or by its position in the
         *   .impulses Array (Number).
         */
        toggleImpulse(id: string | number): void;

        /**
         *   Internally, the p5.Convolver uses the a  Web Audio
         *   Convolver Node.
         */
        convolverNode: ConvolverNode;

        /**
         *   If you load multiple impulse files using the
         *   .addImpulse method, they will be stored as Objects
         *   in this Array. Toggle between them with the
         *   toggleImpulse(id) method.
         */
        impulses: any[];
    }
    class Phrase {
        /**
         *   A phrase is a pattern of musical events over time,
         *   i.e. a series of notes and rests. Phrases must be
         *   added to a p5.Part for playback, and each part can
         *   play multiple phrases at the same time. For
         *   example, one Phrase might be a kick drum, another
         *   could be a snare, and another could be the
         *   bassline.
         *
         *   The first parameter is a name so that the phrase
         *   can be modified or deleted later. The callback is
         *   a a function that this phrase will call at every
         *   step—for example it might be called
         *   playNote(value){}. The array determines which
         *   value is passed into the callback at each step of
         *   the phrase. It can be numbers, an object with
         *   multiple numbers, or a zero (0) indicates a rest
         *   so the callback won't be called).
         *
         *   @param name Name so that you can access the
         *   Phrase.
         *   @param callback The name of a function that this
         *   phrase will call. Typically it will play a sound,
         *   and accept two parameters: a time at which to play
         *   the sound (in seconds from now), and a value from
         *   the sequence array. The time should be passed into
         *   the play() or start() method to ensure precision.
         *   @param sequence Array of values to pass into the
         *   callback at each step of the phrase.
         */
        constructor(name: string, callback: (...args: any[]) => any, sequence: any[]);

        /**
         *   Array of values to pass into the callback at each
         *   step of the phrase. Depending on the callback
         *   function's requirements, these values may be
         *   numbers, strings, or an object with multiple
         *   parameters. Zero (0) indicates a rest.
         */
        sequence: any[];
    }
    class Part {
        /**
         *   A p5.Part plays back one or more p5.Phrases.
         *   Instantiate a part with steps and tatums. By
         *   default, each step represents a 1/16th note. See
         *   p5.Phrase for more about musical timing.
         *
         *   @param [steps] Steps in the part
         *   @param [tatums] Divisions of a beat, e.g. use 1/4,
         *   or 0.25 for a quater note (default is 1/16, a
         *   sixteenth note)
         */
        constructor(steps?: number, tatums?: number);

        /**
         *   Set the tempo of this part, in Beats Per Minute.
         *   @param BPM Beats Per Minute
         *   @param [rampTime] Seconds from now
         */
        setBPM(BPM: number, rampTime?: number): void;

        /**
         *   Returns the tempo, in Beats Per Minute, of this
         *   part.
         */
        getBPM(): number;

        /**
         *   Start playback of this part. It will play through
         *   all of its phrases at a speed determined by
         *   setBPM.
         *   @param [time] seconds from now
         */
        start(time?: number): void;

        /**
         *   Loop playback of this part. It will begin looping
         *   through all of its phrases at a speed determined
         *   by setBPM.
         *   @param [time] seconds from now
         */
        loop(time?: number): void;

        /**
         *   Tell the part to stop looping.
         */
        noLoop(): void;

        /**
         *   Stop the part and cue it to step 0. Playback will
         *   resume from the begining of the Part when it is
         *   played again.
         *   @param [time] seconds from now
         */
        stop(time?: number): void;

        /**
         *   Pause the part. Playback will resume from the
         *   current step.
         *   @param time seconds from now
         */
        pause(time: number): void;

        /**
         *   Add a p5.Phrase to this Part.
         *   @param phrase reference to a p5.Phrase
         */
        addPhrase(phrase: Phrase): void;

        /**
         *   Remove a phrase from this part, based on the name
         *   it was given when it was created.
         */
        removePhrase(phraseName: string): void;

        /**
         *   Get a phrase from this part, based on the name it
         *   was given when it was created. Now you can modify
         *   its array.
         */
        getPhrase(phraseName: string): void;

        /**
         *   Find all sequences with the specified name, and
         *   replace their patterns with the specified array.
         *   @param sequence Array of values to pass into the
         *   callback at each step of the phrase.
         */
        replaceSequence(phraseName: string, sequence: any[]): void;

        /**
         *   Set the function that will be called at every
         *   step. This will clear the previous function.
         *   @param callback The name of the callback you want
         *   to fire on every beat/tatum.
         */
        onStep(callback: (...args: any[]) => any): void;
    }
    class Score {
        /**
         *   A Score consists of a series of Parts. The parts
         *   will be played back in order. For example, you
         *   could have an A part, a B part, and a C part, and
         *   play them back in this order new p5.Score(a, a, b,
         *   a, c)
         *
         *   @param [parts] One or multiple parts, to be played
         *   in sequence.
         */
        constructor(parts?: Part);

        /**
         *   Start playback of the score.
         */
        start(): void;

        /**
         *   Stop playback of the score.
         */
        stop(): void;

        /**
         *   Pause playback of the score.
         */
        pause(): void;

        /**
         *   Loop playback of the score.
         */
        loop(): void;

        /**
         *   Stop looping playback of the score. If it is
         *   currently playing, this will go into effect after
         *   the current round of playback completes.
         */
        noLoop(): void;

        /**
         *   Set the tempo for all parts in the score
         *   @param BPM Beats Per Minute
         *   @param rampTime Seconds from now
         */
        setBPM(BPM: number, rampTime: number): void;
    }
    class SoundLoop {
        /**
         *   SoundLoop
         *
         *   @param callback this function will be called on
         *   each iteration of theloop
         *   @param [interval] amount of time (if a number) or
         *   beats (if a string, following Tone.Time
         *   convention) for each iteration of the loop.
         *   Defaults to 1 second.
         */
        constructor(callback: (...args: any[]) => any, interval?: number | string);

        /**
         *   Start the loop
         *   @param [timeFromNow] schedule a starting time
         */
        start(timeFromNow?: number): void;

        /**
         *   Stop the loop
         *   @param [timeFromNow] schedule a stopping time
         */
        stop(timeFromNow?: number): void;

        /**
         *   Pause the loop
         *   @param [timeFromNow] schedule a pausing time
         */
        pause(timeFromNow?: number): void;

        /**
         *   Synchronize loops. Use this method to start two or
         *   more loops in synchronization or to start a loop
         *   in synchronization with a loop that is already
         *   playing This method will schedule the implicit
         *   loop in sync with the explicit master loop i.e.
         *   loopToStart.syncedStart(loopToSyncWith)
         *   @param otherLoop a p5.SoundLoop to sync with
         *   @param [timeFromNow] Start the loops in sync after
         *   timeFromNow seconds
         */
        syncedStart(otherLoop: object, timeFromNow?: number): void;

        /**
         *   Getters and Setters, setting any paramter will
         *   result in a change in the clock's frequency, that
         *   will be reflected after the next callback beats
         *   per minute (defaults to 60)
         */
        bpm: number;

        /**
         *   number of quarter notes in a measure (defaults to
         *   4)
         */
        timeSignature: number;

        /**
         *   length of the loops interval
         */
        interval: number | string;

        /**
         *   how many times the callback has been called so far
         */
        iterations: number;

        /**
         *   musicalTimeMode uses Tone.Time convention true if
         *   string, false if number
         */
        musicalTimeMode: boolean;

        /**
         *   Set a limit to the number of loops to play.
         *   defaults to Infinity
         */
        maxIterations: number;
    }
    class Compressor extends Effect {
        /**
         *   Compressor is an audio effect class that performs
         *   dynamics compression on an audio input source.
         *   This is a very commonly used technique in music
         *   and sound production. Compression creates an
         *   overall louder, richer, and fuller sound by
         *   lowering the volume of louds and raising that of
         *   softs. Compression can be used to avoid clipping
         *   (sound distortion due to peaks in volume) and is
         *   especially useful when many sounds are played at
         *   once. Compression can be used on indivudal sound
         *   sources in addition to the main output. This class
         *   extends p5.Effect. Methods amp(), chain(),
         *   drywet(), connect(), and disconnect() are
         *   available.
         *
         */
        constructor();

        /**
         *   Performs the same function as .connect, but also
         *   accepts optional parameters to set compressor's
         *   audioParams
         *   @param src Sound source to be connected
         *   @param [attack] The amount of time (in seconds) to
         *   reduce the gain by 10dB, default = .003, range 0 -
         *   1
         *   @param [knee] A decibel value representing the
         *   range above the threshold where the curve smoothly
         *   transitions to the "ratio" portion. default = 30,
         *   range 0 - 40
         *   @param [ratio] The amount of dB change in input
         *   for a 1 dB change in output default = 12, range 1
         *   - 20
         *   @param [threshold] The decibel value above which
         *   the compression will start taking effect default =
         *   -24, range -100 - 0
         *   @param [release] The amount of time (in seconds)
         *   to increase the gain by 10dB default = .25, range
         *   0 - 1
         */
        process(
            src: object,
            attack?: number,
            knee?: number,
            ratio?: number,
            threshold?: number,
            release?: number
        ): void;

        /**
         *   Set the paramters of a compressor.
         *   @param attack The amount of time (in seconds) to
         *   reduce the gain by 10dB, default = .003, range 0 -
         *   1
         *   @param knee A decibel value representing the range
         *   above the threshold where the curve smoothly
         *   transitions to the "ratio" portion. default = 30,
         *   range 0 - 40
         *   @param ratio The amount of dB change in input for
         *   a 1 dB change in output default = 12, range 1 - 20
         *   @param threshold The decibel value above which the
         *   compression will start taking effect default =
         *   -24, range -100 - 0
         *   @param release The amount of time (in seconds) to
         *   increase the gain by 10dB default = .25, range 0 -
         *   1
         */
        set(attack: number, knee: number, ratio: number, threshold: number, release: number): void;

        /**
         *   Get current attack or set value w/ time ramp
         *   @param [attack] Attack is the amount of time (in
         *   seconds) to reduce the gain by 10dB, default =
         *   .003, range 0 - 1
         *   @param [time] Assign time value to schedule the
         *   change in value
         */
        attack(attack?: number, time?: number): void;

        /**
         *   Get current knee or set value w/ time ramp
         *   @param [knee] A decibel value representing the
         *   range above the threshold where the curve smoothly
         *   transitions to the "ratio" portion. default = 30,
         *   range 0 - 40
         *   @param [time] Assign time value to schedule the
         *   change in value
         */
        knee(knee?: number, time?: number): void;

        /**
         *   Get current ratio or set value w/ time ramp
         *   @param [ratio] The amount of dB change in input
         *   for a 1 dB change in output default = 12, range 1
         *   - 20
         *   @param [time] Assign time value to schedule the
         *   change in value
         */
        ratio(ratio?: number, time?: number): void;

        /**
         *   Get current threshold or set value w/ time ramp
         *   @param threshold The decibel value above which the
         *   compression will start taking effect default =
         *   -24, range -100 - 0
         *   @param [time] Assign time value to schedule the
         *   change in value
         */
        threshold(threshold: number, time?: number): void;

        /**
         *   Get current release or set value w/ time ramp
         *   @param release The amount of time (in seconds) to
         *   increase the gain by 10dB default = .25, range 0 -
         *   1
         *   @param [time] Assign time value to schedule the
         *   change in value
         */
        release(release: number, time?: number): void;

        /**
         *   Return the current reduction value
         *   @return Value of the amount of gain reduction that
         *   is applied to the signal
         */
        reduction(): number;

        /**
         *   The p5.Compressor is built with a Web Audio
         *   Dynamics Compressor Node
         */
        compressor: AudioNode;
    }
    class PeakDetect {
        /**
         *   PeakDetect works in conjunction with p5.FFT to
         *   look for onsets in some or all of the frequency
         *   spectrum.   To use p5.PeakDetect, call update in
         *   the draw loop and pass in a p5.FFT object.
         *
         *
         *   You can listen for a specific part of the
         *   frequency spectrum by setting the range between
         *   freq1 and freq2.
         *
         *   threshold is the threshold for detecting a peak,
         *   scaled between 0 and 1. It is logarithmic, so 0.1
         *   is half as loud as 1.0.
         *
         *
         *   The update method is meant to be run in the draw
         *   loop, and frames determines how many loops must
         *   pass before another peak can be detected. For
         *   example, if the frameRate() = 60, you could detect
         *   the beat of a 120 beat-per-minute song with this
         *   equation:  framesPerPeak = 60 / (estimatedBPM / 60
         *   );
         *
         *
         *   Based on example contribtued by @b2renger, and a
         *   simple beat detection explanation by Felix Turner.
         *
         *   @param [freq1] lowFrequency - defaults to 20Hz
         *   @param [freq2] highFrequency - defaults to 20000
         *   Hz
         *   @param [threshold] Threshold for detecting a beat
         *   between 0 and 1 scaled logarithmically where 0.1
         *   is 1/2 the loudness of 1.0. Defaults to 0.35.
         *   @param [framesPerPeak] Defaults to 20.
         */
        constructor(freq1?: number, freq2?: number, threshold?: number, framesPerPeak?: number);

        /**
         *   The update method is run in the draw loop. Accepts
         *   an FFT object. You must call .analyze() on the FFT
         *   object prior to updating the peakDetect because it
         *   relies on a completed FFT analysis.
         *   @param fftObject A p5.FFT object
         */
        update(fftObject: FFT): void;

        /**
         *   onPeak accepts two arguments: a function to call
         *   when a peak is detected. The value of the peak,
         *   between 0.0 and 1.0, is passed to the callback.
         *   @param callback Name of a function that will be
         *   called when a peak is detected.
         *   @param [val] Optional value to pass into the
         *   function when a peak is detected.
         */
        onPeak(callback: (...args: any[]) => any, val?: object): void;
    }
    class SoundRecorder {
        /**
         *   Record sounds for playback and/or to save as a
         *   .wav file. The p5.SoundRecorder records all sound
         *   output from your sketch, or can be assigned a
         *   specific source with setInput(). The record()
         *   method accepts a p5.SoundFile as a parameter. When
         *   playback is stopped (either after the given amount
         *   of time, or with the stop() method), the
         *   p5.SoundRecorder will send its recording to that
         *   p5.SoundFile for playback.
         *
         */
        constructor();

        /**
         *   Connect a specific device to the p5.SoundRecorder.
         *   If no parameter is given, p5.SoundRecorer will
         *   record all audible p5.sound from your sketch.
         *   @param [unit] p5.sound object or a web audio unit
         *   that outputs sound
         */
        setInput(unit?: object): void;

        /**
         *   Start recording. To access the recording, provide
         *   a p5.SoundFile as the first parameter. The
         *   p5.SoundRecorder will send its recording to that
         *   p5.SoundFile for playback once recording is
         *   complete. Optional parameters include duration (in
         *   seconds) of the recording, and a callback function
         *   that will be called once the complete recording
         *   has been transfered to the p5.SoundFile.
         *   @param soundFile p5.SoundFile
         *   @param [duration] Time (in seconds)
         *   @param [callback] The name of a function that will
         *   be called once the recording completes
         */
        record(soundFile: SoundFile, duration?: number, callback?: (...args: any[]) => any): void;

        /**
         *   Stop the recording. Once the recording is stopped,
         *   the results will be sent to the p5.SoundFile that
         *   was given on .record(), and if a callback function
         *   was provided on record, that function will be
         *   called.
         */
        stop(): void;
    }
    class Distortion extends Effect {
        /**
         *   A Distortion effect created with a Waveshaper
         *   Node, with an approach adapted from Kevin Ennis
         *   This class extends p5.Effect. Methods amp(),
         *   chain(), drywet(), connect(), and disconnect() are
         *   available.
         *
         *   @param [amount] Unbounded distortion amount.
         *   Normal values range from 0-1.
         *   @param [oversample] 'none', '2x', or '4x'.
         */
        constructor(amount?: number, oversample?: string);

        /**
         *   Process a sound source, optionally specify amount
         *   and oversample values.
         *   @param [amount] Unbounded distortion amount.
         *   Normal values range from 0-1.
         *   @param [oversample] 'none', '2x', or '4x'.
         */
        process(amount?: number, oversample?: string): void;

        /**
         *   Set the amount and oversample of the waveshaper
         *   distortion.
         *   @param [amount] Unbounded distortion amount.
         *   Normal values range from 0-1.
         *   @param [oversample] 'none', '2x', or '4x'.
         */
        set(amount?: number, oversample?: string): void;

        /**
         *   Return the distortion amount, typically between
         *   0-1.
         *   @return Unbounded distortion amount. Normal values
         *   range from 0-1.
         */
        getAmount(): number;

        /**
         *   Return the oversampling.
         *   @return Oversample can either be 'none', '2x', or
         *   '4x'.
         */
        getOversample(): string;

        /**
         *   The p5.Distortion is built with a  Web Audio
         *   WaveShaper Node.
         */
        WaveShaperNode: AudioNode;
    }
    class Gain {
        /**
         *   A gain node is usefull to set the relative volume
         *   of sound. It's typically used to build mixers.
         *
         */
        constructor();

        /**
         *   Connect a source to the gain node.
         *   @param src p5.sound / Web Audio object with a
         *   sound output.
         */
        setInput(src: object): void;

        /**
         *   Send output to a p5.sound or web audio object
         */
        connect(unit: object): void;

        /**
         *   Disconnect all output.
         */
        disconnect(): void;

        /**
         *   Set the output level of the gain node.
         *   @param volume amplitude between 0 and 1.0
         *   @param [rampTime] create a fade that lasts
         *   rampTime
         *   @param [timeFromNow] schedule this event to happen
         *   seconds from now
         */
        amp(volume: number, rampTime?: number, timeFromNow?: number): void;
    }
    class AudioVoice {
        /**
         *   Base class for monophonic synthesizers. Any
         *   extensions of this class should follow the API and
         *   implement the methods below in order to remain
         *   compatible with p5.PolySynth();
         *
         */
        constructor();

        /**
         *   Connect to p5 objects or Web Audio Nodes
         */
        connect(unit: object): void;

        /**
         *   Disconnect from soundOut
         */
        disconnect(): void;
    }
    class MonoSynth {
        /**
         *   A MonoSynth is used as a single voice for sound
         *   synthesis. This is a class to be used in
         *   conjunction with the PolySynth class. Custom
         *   synthetisers should be built inheriting from this
         *   class.
         *
         */
        constructor();

        /**
         *   Play tells the MonoSynth to start playing a note.
         *   This method schedules the calling of
         *   .triggerAttack and .triggerRelease.
         *   @param note the note you want to play, specified
         *   as a frequency in Hertz (Number) or as a midi
         *   value in Note/Octave format ("C4", "Eb3"...etc")
         *   See  Tone. Defaults to 440 hz.
         *   @param [velocity] velocity of the note to play
         *   (ranging from 0 to 1)
         *   @param [secondsFromNow] time from now (in seconds)
         *   at which to play
         *   @param [sustainTime] time to sustain before
         *   releasing the envelope. Defaults to 0.15 seconds.
         */
        play(note: string | number, velocity?: number, secondsFromNow?: number, sustainTime?: number): void;

        /**
         *   Trigger the Attack, and Decay portion of the
         *   Envelope. Similar to holding down a key on a
         *   piano, but it will hold the sustain level until
         *   you let go.
         *   @param note the note you want to play, specified
         *   as a frequency in Hertz (Number) or as a midi
         *   value in Note/Octave format ("C4", "Eb3"...etc")
         *   See  Tone. Defaults to 440 hz
         *   @param [velocity] velocity of the note to play
         *   (ranging from 0 to 1)
         *   @param [secondsFromNow] time from now (in seconds)
         *   at which to play
         */
        triggerAttack(note: string | number, velocity?: number, secondsFromNow?: number): void;

        /**
         *   Trigger the release of the Envelope. This is
         *   similar to releasing the key on a piano and
         *   letting the sound fade according to the release
         *   level and release time.
         *   @param secondsFromNow time to trigger the release
         */
        triggerRelease(secondsFromNow: number): void;

        /**
         *   Set values like a traditional  ADSR envelope .
         *   @param attackTime Time (in seconds before envelope
         *   reaches Attack Level
         *   @param [decayTime] Time (in seconds) before
         *   envelope reaches Decay/Sustain Level
         *   @param [susRatio] Ratio between attackLevel and
         *   releaseLevel, on a scale from 0 to 1, where 1.0 =
         *   attackLevel, 0.0 = releaseLevel. The susRatio
         *   determines the decayLevel and the level at which
         *   the sustain portion of the envelope will sustain.
         *   For example, if attackLevel is 0.4, releaseLevel
         *   is 0, and susAmt is 0.5, the decayLevel would be
         *   0.2. If attackLevel is increased to 1.0 (using
         *   setRange), then decayLevel would increase
         *   proportionally, to become 0.5.
         *   @param [releaseTime] Time in seconds from now
         *   (defaults to 0)
         */
        setADSR(attackTime: number, decayTime?: number, susRatio?: number, releaseTime?: number): void;

        /**
         *   MonoSynth amp
         *   @param vol desired volume
         *   @param [rampTime] Time to reach new volume
         *   @return new volume value
         */
        amp(vol: number, rampTime?: number): number;

        /**
         *   Connect to a p5.sound / Web Audio object.
         *   @param unit A p5.sound or Web Audio object
         */
        connect(unit: object): void;

        /**
         *   Disconnect all outputs
         */
        disconnect(): void;

        /**
         *   Get rid of the MonoSynth and free up its resources
         *   / memory.
         */
        dispose(): void;

        /**
         *   Getters and Setters
         */
        attack: number;
        decay: number;
        sustain: number;
        release: number;
    }
    class PolySynth {
        /**
         *   An AudioVoice is used as a single voice for sound
         *   synthesis. The PolySynth class holds an array of
         *   AudioVoice, and deals with voices allocations,
         *   with setting notes to be played, and parameters to
         *   be set.
         *
         *   @param [synthVoice] A monophonic synth voice
         *   inheriting the AudioVoice class. Defaults to
         *   p5.MonoSynth
         *   @param [maxVoices] Number of voices, defaults to
         *   8;
         */
        constructor(synthVoice?: number, maxVoices?: number);

        /**
         *   Play a note by triggering noteAttack and
         *   noteRelease with sustain time
         *   @param [note] midi note to play (ranging from 0 to
         *   127 - 60 being a middle C)
         *   @param [velocity] velocity of the note to play
         *   (ranging from 0 to 1)
         *   @param [secondsFromNow] time from now (in seconds)
         *   at which to play
         *   @param [sustainTime] time to sustain before
         *   releasing the envelope
         */
        play(note?: number, velocity?: number, secondsFromNow?: number, sustainTime?: number): void;

        /**
         *   noteADSR sets the envelope for a specific note
         *   that has just been triggered. Using this method
         *   modifies the envelope of whichever audiovoice is
         *   being used to play the desired note. The envelope
         *   should be reset before noteRelease is called in
         *   order to prevent the modified envelope from being
         *   used on other notes.
         *   @param [note] Midi note on which ADSR should be
         *   set.
         *   @param [attackTime] Time (in seconds before
         *   envelope reaches Attack Level
         *   @param [decayTime] Time (in seconds) before
         *   envelope reaches Decay/Sustain Level
         *   @param [susRatio] Ratio between attackLevel and
         *   releaseLevel, on a scale from 0 to 1, where 1.0 =
         *   attackLevel, 0.0 = releaseLevel. The susRatio
         *   determines the decayLevel and the level at which
         *   the sustain portion of the envelope will sustain.
         *   For example, if attackLevel is 0.4, releaseLevel
         *   is 0, and susAmt is 0.5, the decayLevel would be
         *   0.2. If attackLevel is increased to 1.0 (using
         *   setRange), then decayLevel would increase
         *   proportionally, to become 0.5.
         *   @param [releaseTime] Time in seconds from now
         *   (defaults to 0)
         */
        noteADSR(note?: number, attackTime?: number, decayTime?: number, susRatio?: number, releaseTime?: number): void;

        /**
         *   Set the PolySynths global envelope. This method
         *   modifies the envelopes of each monosynth so that
         *   all notes are played with this envelope.
         *   @param [attackTime] Time (in seconds before
         *   envelope reaches Attack Level
         *   @param [decayTime] Time (in seconds) before
         *   envelope reaches Decay/Sustain Level
         *   @param [susRatio] Ratio between attackLevel and
         *   releaseLevel, on a scale from 0 to 1, where 1.0 =
         *   attackLevel, 0.0 = releaseLevel. The susRatio
         *   determines the decayLevel and the level at which
         *   the sustain portion of the envelope will sustain.
         *   For example, if attackLevel is 0.4, releaseLevel
         *   is 0, and susAmt is 0.5, the decayLevel would be
         *   0.2. If attackLevel is increased to 1.0 (using
         *   setRange), then decayLevel would increase
         *   proportionally, to become 0.5.
         *   @param [releaseTime] Time in seconds from now
         *   (defaults to 0)
         */
        setADSR(attackTime?: number, decayTime?: number, susRatio?: number, releaseTime?: number): void;

        /**
         *   Trigger the Attack, and Decay portion of a
         *   MonoSynth. Similar to holding down a key on a
         *   piano, but it will hold the sustain level until
         *   you let go.
         *   @param [note] midi note on which attack should be
         *   triggered.
         *   @param [velocity] velocity of the note to play
         *   (ranging from 0 to 1)/
         *   @param [secondsFromNow] time from now (in seconds)
         */
        noteAttack(note?: number, velocity?: number, secondsFromNow?: number): void;

        /**
         *   Trigger the Release of an AudioVoice note. This is
         *   similar to releasing the key on a piano and
         *   letting the sound fade according to the release
         *   level and release time.
         *   @param [note] midi note on which attack should be
         *   triggered. If no value is provided, all notes will
         *   be released.
         *   @param [secondsFromNow] time to trigger the
         *   release
         */
        noteRelease(note?: number, secondsFromNow?: number): void;

        /**
         *   Connect to a p5.sound / Web Audio object.
         *   @param unit A p5.sound or Web Audio object
         */
        connect(unit: object): void;

        /**
         *   Disconnect all outputs
         */
        disconnect(): void;

        /**
         *   Get rid of the MonoSynth and free up its resources
         *   / memory.
         */
        dispose(): void;

        /**
         *   An object that holds information about which notes
         *   have been played and which notes are currently
         *   being played. New notes are added as keys on the
         *   fly. While a note has been attacked, but not
         *   released, the value of the key is the audiovoice
         *   which is generating that note. When notes are
         *   released, the value of the key becomes undefined.
         */
        notes: any;

        /**
         *   A PolySynth must have at least 1 voice, defaults
         *   to 8
         */
        polyvalue: any;

        /**
         *   Monosynth that generates the sound for each note
         *   that is triggered. The p5.PolySynth defaults to
         *   using the p5.MonoSynth as its voice.
         */
        AudioVoice: any;
    }
    class SinOsc extends Oscillator {
        /**
         *   Constructor: new p5.SinOsc(). This creates a Sine
         *   Wave Oscillator and is equivalent to  new
         *   p5.Oscillator('sine')  or creating a p5.Oscillator
         *   and then calling its method setType('sine'). See
         *   p5.Oscillator for methods.
         *
         *   @param [freq] Set the frequency
         */
        constructor(freq?: number);
    }
    class TriOsc extends Oscillator {
        /**
         *   Constructor: new p5.TriOsc(). This creates a
         *   Triangle Wave Oscillator and is equivalent to new
         *   p5.Oscillator('triangle')  or creating a
         *   p5.Oscillator and then calling its method
         *   setType('triangle'). See p5.Oscillator for
         *   methods.
         *
         *   @param [freq] Set the frequency
         */
        constructor(freq?: number);
    }
    class SawOsc extends Oscillator {
        /**
         *   Constructor: new p5.SawOsc(). This creates a
         *   SawTooth Wave Oscillator and is equivalent to  new
         *   p5.Oscillator('sawtooth')  or creating a
         *   p5.Oscillator and then calling its method
         *   setType('sawtooth'). See p5.Oscillator for
         *   methods.
         *
         *   @param [freq] Set the frequency
         */
        constructor(freq?: number);
    }
    class SqrOsc extends Oscillator {
        /**
         *   Constructor: new p5.SqrOsc(). This creates a
         *   Square Wave Oscillator and is equivalent to  new
         *   p5.Oscillator('square')  or creating a
         *   p5.Oscillator and then calling its method
         *   setType('square'). See p5.Oscillator for methods.
         *
         *   @param [freq] Set the frequency
         */
        constructor(freq?: number);
    }
    class LowPass extends Filter {
        /**
         *   Constructor: new p5.LowPass() Filter. This is the
         *   same as creating a p5.Filter and then calling its
         *   method setType('lowpass'). See p5.Filter for
         *   methods.
         *
         */
        constructor();
    }
    class HighPass extends Filter {
        /**
         *   Constructor: new p5.HighPass() Filter. This is the
         *   same as creating a p5.Filter and then calling its
         *   method setType('highpass'). See p5.Filter for
         *   methods.
         *
         */
        constructor();
    }
    class BandPass extends Filter {
        /**
         *   Constructor: new p5.BandPass() Filter. This is the
         *   same as creating a p5.Filter and then calling its
         *   method setType('bandpass'). See p5.Filter for
         *   methods.
         *
         */
        constructor();
    }
    class OnsetDetect {
        /**
         *   Listen for onsets (a sharp increase in volume)
         *   within a given frequency range.
         *
         *   @param freqLow Low frequency
         *   @param freqHigh High frequency
         *   @param threshold Amplitude threshold between 0 (no
         *   energy) and 1 (maximum)
         *   @param callback Function to call when an onset is
         *   detected
         */
        constructor(freqLow: number, freqHigh: number, threshold: number, callback: (...args: any[]) => any);
    }
    interface p5InstanceExtensions {
        /**
         *   Returns the Audio Context for this sketch. Useful
         *   for users who would like to dig deeper into the
         *   Web Audio API . Some browsers require users to
         *   startAudioContext with a user gesture, such as
         *   touchStarted in the example below.
         *   @return AudioContext for this sketch
         */
        getAudioContext(): object;

        /**
         *   It is not only a good practice to give users
         *   control over starting audio. This policy is
         *   enforced by many web browsers, including iOS and
         *   Google Chrome, which create the Web Audio API's
         *   Audio Context in a suspended state. In these
         *   browser-specific policies, sound will not play
         *   until a user interaction event (i.e.
         *   mousePressed()) explicitly resumes the
         *   AudioContext, or starts an audio node. This can be
         *   accomplished by calling start() on a
         *   p5.Oscillator,  play() on a p5.SoundFile, or
         *   simply userStartAudio().
         *
         *   userStartAudio() starts the AudioContext on a user
         *   gesture. The default behavior will enable audio on
         *   any mouseUp or touchEnd event. It can also be
         *   placed in a specific interaction function, such as
         *   mousePressed() as in the example below. This
         *   method utilizes StartAudioContext , a library by
         *   Yotam Mann (MIT Licence, 2016).
         *   @param [elements] This argument can be an Element,
         *   Selector String, NodeList, p5.Element, jQuery
         *   Element, or an Array of any of those.
         *   @param [callback] Callback to invoke when the
         *   AudioContext has started
         *   @return Returns a Promise that resolves when the
         *   AudioContext state is 'running'
         */
        userStartAudio(elements?: Element | any[], callback?: (...args: any[]) => any): Promise<any>;

        /**
         *   Returns a number representing the output volume
         *   for sound in this sketch.
         *   @return Output volume for sound in this sketch.
         *   Should be between 0.0 (silence) and 1.0.
         */
        getOutputVolume(): number;

        /**
         *   Scale the output of all sound in this sketch
         *   Scaled between 0.0 (silence) and 1.0 (full
         *   volume). 1.0 is the maximum amplitude of a digital
         *   sound, so multiplying by greater than 1.0 may
         *   cause digital distortion. To fade, provide a
         *   rampTime parameter. For more complex fades, see
         *   the Envelope class. Alternately, you can pass in a
         *   signal source such as an oscillator to modulate
         *   the amplitude with an audio signal.
         *
         *   How This Works: When you load the p5.sound module,
         *   it creates a single instance of p5sound. All sound
         *   objects in this module output to p5sound before
         *   reaching your computer's output. So if you change
         *   the amplitude of p5sound, it impacts all of the
         *   sound in this module.
         *
         *   If no value is provided, returns a Web Audio API
         *   Gain Node
         *   @param volume Volume (amplitude) between 0.0 and
         *   1.0 or modulating signal/oscillator
         *   @param [rampTime] Fade for t seconds
         *   @param [timeFromNow] Schedule this event to happen
         *   at t seconds in the future
         */
        outputVolume(volume: number | object, rampTime?: number, timeFromNow?: number): void;

        /**
         *   Returns a number representing the sample rate, in
         *   samples per second, of all sound objects in this
         *   audio context. It is determined by the sampling
         *   rate of your operating system's sound card, and it
         *   is not currently possile to change. It is often
         *   44100, or twice the range of human hearing.
         *   @return samplerate samples per second
         */
        sampleRate(): number;

        /**
         *   Returns the closest MIDI note value for a given
         *   frequency.
         *   @param frequency A freqeuncy, for example, the "A"
         *   above Middle C is 440Hz
         *   @return MIDI note value
         */
        freqToMidi(frequency: number): number;

        /**
         *   Returns the frequency value of a MIDI note value.
         *   General MIDI treats notes as integers where middle
         *   C is 60, C# is 61, D is 62 etc. Useful for
         *   generating musical frequencies with oscillators.
         *   @param midiNote The number of a MIDI note
         *   @return Frequency value of the given MIDI note
         */
        midiToFreq(midiNote: number): number;

        /**
         *   List the SoundFile formats that you will include.
         *   LoadSound will search your directory for these
         *   extensions, and will pick a format that is
         *   compatable with the client's web browser. Here is
         *   a free online file converter.
         *   @param [formats] i.e. 'mp3', 'wav', 'ogg'
         */
        soundFormats(formats?: string): void;

        /**
         *   Save a p5.SoundFile as a .wav file. The browser
         *   will prompt the user to download the file to their
         *   device. For uploading audio to a server, use
         *   p5.SoundFile.saveBlob.
         *   @param soundFile p5.SoundFile that you wish to
         *   save
         *   @param fileName name of the resulting .wav file.
         */
        saveSound(soundFile: SoundFile, fileName: string): void;

        /**
         *   loadSound() returns a new p5.SoundFile from a
         *   specified path. If called during preload(), the
         *   p5.SoundFile will be ready to play in time for
         *   setup() and draw(). If called outside of preload,
         *   the p5.SoundFile will not be ready immediately, so
         *   loadSound accepts a callback as the second
         *   parameter. Using a  local server is recommended
         *   when loading external files.
         *   @param path Path to the sound file, or an array
         *   with paths to soundfiles in multiple formats i.e.
         *   ['sound.ogg', 'sound.mp3']. Alternately, accepts
         *   an object: either from the HTML5 File API, or a
         *   p5.File.
         *   @param [successCallback] Name of a function to
         *   call once file loads
         *   @param [errorCallback] Name of a function to call
         *   if there is an error loading the file.
         *   @param [whileLoading] Name of a function to call
         *   while file is loading. This function will receive
         *   the percentage loaded so far, from 0.0 to 1.0.
         *   @return Returns a p5.SoundFile
         */
        loadSound(
            path: string | any[],
            successCallback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any,
            whileLoading?: (...args: any[]) => any
        ): SoundFile;

        /**
         *   Create a p5.Convolver. Accepts a path to a
         *   soundfile that will be used to generate an impulse
         *   response.
         *   @param path path to a sound file
         *   @param [callback] function to call if loading is
         *   successful. The object will be passed in as the
         *   argument to the callback function.
         *   @param [errorCallback] function to call if loading
         *   is not successful. A custom error will be passed
         *   in as the argument to the callback function.
         */
        createConvolver(
            path: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Convolver;

        /**
         *   Set the global tempo, in beats per minute, for all
         *   p5.Parts. This method will impact all active
         *   p5.Parts.
         *   @param BPM Beats Per Minute
         *   @param rampTime Seconds from now
         */
        setBPM(BPM: number, rampTime: number): void;

        /**
         *   p5.soundOut is the p5.sound final output bus. It
         *   sends output to the destination of this window's
         *   web audio context. It contains Web Audio API nodes
         *   including a dyanmicsCompressor (.limiter), and
         *   Gain Nodes for .input and .output.
         */
        soundOut: object;
    }
}
