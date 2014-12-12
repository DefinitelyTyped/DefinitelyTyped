// http://www.w3.org/TR/2012/WD-webaudio-20121213/

/// <reference path="waa.d.ts" />

declare var dogBarkingBuffer: any;

()=>{
	var context = new AudioContext();

	function playSound() {
	    var source = context.createBufferSource();
	    source.buffer = dogBarkingBuffer;
	    source.connect(context.destination);
	    source.start(0);
	}
};

declare var manTalkingBuffer: any;
declare var footstepsBuffer: any;

()=>{

    var context = new AudioContext();

    // Create the effects nodes.
    var lowpassFilter = context.createBiquadFilter();
    var waveShaper = context.createWaveShaper();
    var panner = context.createPanner();
    var compressor = context.createDynamicsCompressor();
    var reverb = context.createConvolver();

    // Create master wet and dry.
    var masterDry = context.createGain();
    var masterWet = context.createGain();

    // Connect final compressor to final destination.
    compressor.connect(context.destination);

    // Connect master dry and wet to compressor.
    masterDry.connect(compressor);
    masterWet.connect(compressor);

    // Connect reverb to master wet.
    reverb.connect(masterWet);

    // Create a few sources.
    var source1 = context.createBufferSource();
    var source2 = context.createBufferSource();
    var source3 = context.createOscillator();

    source1.buffer = manTalkingBuffer;
    source2.buffer = footstepsBuffer;
    source3.frequency.value = 440;

    // Connect source1
    var dry1 = context.createGain();
    var wet1 = context.createGain();
    source1.connect(lowpassFilter);
    lowpassFilter.connect(dry1);
    lowpassFilter.connect(wet1);
    dry1.connect(masterDry);
    wet1.connect(reverb);
    source1.loop = true;
    source1.loopStart = 0;
    source1.loopEnd = 300;

    // Connect source2
    var dry2 = context.createGain();
    var wet2 = context.createGain();
    source2.connect(waveShaper);
    waveShaper.connect(dry2);
    waveShaper.connect(wet2);
    dry2.connect(masterDry);
    wet2.connect(reverb);

    // Connect source3
    var dry3 = context.createGain();
    var wet3 = context.createGain();
    source3.connect(panner);
    panner.connect(dry3);
    panner.connect(wet3);
    dry3.connect(masterDry);
    wet3.connect(reverb);

    // Start the sources now.
    source1.start(0);
    // MEMO: should be when parameter is 0
    // http://www.w3.org/TR/webaudio/#AudioBufferSourceNode
    source2.start();
    source3.start(0);

    // Stop the sources are 2 seconds later.
    source1.stop(2);
    // MEMO: should be when parameter is 0
    // http://www.w3.org/TR/webaudio/#AudioBufferSourceNode
    source2.stop();
    source3.stop(2);
};

()=>{
	var context: AudioContext;
	var compressor: DynamicsCompressorNode;
	var gainNode1: GainNode;
	var streamingAudioSource: MediaElementAudioSourceNode;

	// Initial setup of the "long-lived" part of the routing graph  
	function setupAudioContext() {
	    context = new AudioContext();

	    compressor = context.createDynamicsCompressor();
	    gainNode1 = context.createGain();

	    // Create a streaming audio source.
	    var audioElement = <HTMLAudioElement> document.getElementById('audioTagID');
	    streamingAudioSource = context.createMediaElementSource(audioElement);
	    streamingAudioSource.connect(gainNode1);

	    gainNode1.connect(compressor);
	    compressor.connect(context.destination);
	}

	// Later in response to some user action (typically mouse or key event) 
	// a one-shot sound can be played. 
	function playSound() {
	    var oneShotSound = context.createBufferSource();
	    oneShotSound.buffer = dogBarkingBuffer;

	    // Create a filter, panner, and gain node. 
	    var lowpass = context.createBiquadFilter();
	    var panner = context.createPanner();
	    var gainNode2 = context.createGain();

	    // Make connections 
	    oneShotSound.connect(lowpass);
	    lowpass.connect(panner);
	    panner.connect(gainNode2);
	    gainNode2.connect(compressor);

	    // Play 0.75 seconds from now (to play immediately pass in 0)
	    oneShotSound.start(context.currentTime + 0.75);
	}
};


()=>{
	var param:AudioParam;

	var t0 = 0;
	var t1 = 0.1;
	var t2 = 0.2;
	var t3 = 0.3;
	var t4 = 0.4;
	var t5 = 0.6;
	var t6 = 0.7;
	var t7 = 1.0;

	var curveLength = 44100;
	var curve = new Float32Array(curveLength);
	for (var i = 0; i < curveLength; ++i)
	    curve[i] = Math.sin(Math.PI * i / curveLength);

	param.setValueAtTime(0.2, t0);
	param.setValueAtTime(0.3, t1);
	param.setValueAtTime(0.4, t2);
	param.linearRampToValueAtTime(1, t3);
	param.linearRampToValueAtTime(0.15, t4);
	param.exponentialRampToValueAtTime(0.75, t5);
	param.exponentialRampToValueAtTime(0.05, t6);
	param.setValueCurveAtTime(curve, t6, t7 - t6);

};

()=>{
	var param: AudioParam;

	var t0 = 0;
	var t1 = 0.1;
	var t2 = 0.2;
	var t3 = 0.3;
	var t4 = 0.4;
	var t5 = 0.6;
	var t6 = 0.7;
	var t7 = 1.0;

	var curveLength = 44100;
	var curve = new Float32Array(curveLength);
	for (var i = 0; i < curveLength; ++i)
	    curve[i] = Math.sin(Math.PI * i / curveLength);

	param.setValueAtTime(0.2, t0);
	param.setValueAtTime(0.3, t1);
	param.setValueAtTime(0.4, t2);
	param.linearRampToValueAtTime(1, t3);
	param.linearRampToValueAtTime(0.15, t4);
	param.exponentialRampToValueAtTime(0.75, t5);
	param.exponentialRampToValueAtTime(0.05, t6);
	param.setValueCurveAtTime(curve, t6, t7 - t6);
};


()=>{
	var context: AudioContext;
	var filterNode: AudioNode;

	var mediaElement = <HTMLMediaElement> document.getElementById('mediaElementID');
	var sourceNode = context.createMediaElementSource(mediaElement);
	sourceNode.connect(filterNode);
};

()=>{

	// Setup routing graph 
	function setupRoutingGraph() {
	    var context = new AudioContext();

	    var compressor = context.createDynamicsCompressor();

	    // Send1 effect 
	    var reverb = context.createConvolver();
	    // Convolver impulse response may be set here or later 

	    // Send2 effect 
	    var delay = context.createDelay();

	    // Connect final compressor to final destination 
	    compressor.connect(context.destination);

	    // Connect sends 1 & 2 through effects to main mixer 
	    var s1 = context.createGain();
	    reverb.connect(s1);
	    s1.connect(compressor);
	    
	    var s2 = context.createGain();
	    delay.connect(s2);
	    s2.connect(compressor);

	    // Create a couple of sources 
	    var source1 = context.createBufferSource();
	    var source2 = context.createBufferSource();
	    source1.buffer = manTalkingBuffer;
	    source2.buffer = footstepsBuffer;

	    // Connect source1 
	    var g1_1 = context.createGain();
	    var g2_1 = context.createGain();
	    var g3_1 = context.createGain();
	    source1.connect(g1_1);
	    source1.connect(g2_1);
	    source1.connect(g3_1);
	    g1_1.connect(compressor);
	    g2_1.connect(reverb);
	    g3_1.connect(delay);

	    // Connect source2 
	    var g1_2 = context.createGain();
	    var g2_2 = context.createGain();
	    var g3_2 = context.createGain();
	    source2.connect(g1_2);
	    source2.connect(g2_2);
	    source2.connect(g3_2);
	    g1_2.connect(compressor);
	    g2_2.connect(reverb);
	    g3_2.connect(delay);

	    // We now have explicit control over all the volumes g1_1, g2_1, ..., s1, s2 
	    g2_1.gain.value = 0.2;  // For example, set source1 reverb gain 

	     // Because g2_1.gain is an "AudioParam", 
	     // an automation curve could also be attached to it. 
	     // A "mixing board" UI could be created in canvas or WebGL controlling these gains. 
	}
};

()=>{
	var context: AudioContext;
	var compressor: DynamicsCompressorNode;
	var gainNode1: GainNode;
	var streamingAudioSource: MediaElementAudioSourceNode;

	// Initial setup of the "long-lived" part of the routing graph  
	function setupAudioContext() {
	    context = new AudioContext();

	    compressor = context.createDynamicsCompressor();
	    gainNode1 = context.createGain();

	    // Create a streaming audio source.
	    var audioElement = <HTMLAudioElement> document.getElementById('audioTagID');
	    streamingAudioSource = context.createMediaElementSource(audioElement);
	    streamingAudioSource.connect(gainNode1);

	    gainNode1.connect(compressor);
	    compressor.connect(context.destination);
	}

	// Later in response to some user action (typically mouse or key event) 
	// a one-shot sound can be played. 
	function playSound() {
	    var oneShotSound = context.createBufferSource();
	    oneShotSound.buffer = dogBarkingBuffer;

	    // Create a filter, panner, and gain node. 
	    var lowpass = context.createBiquadFilter();
	    var panner = context.createPanner();
	    var gainNode2 = context.createGain();

	    // Make connections 
	    oneShotSound.connect(lowpass);
	    lowpass.connect(panner);
	    panner.connect(gainNode2);
	    gainNode2.connect(compressor);

	    // Play 0.75 seconds from now (to play immediately pass in 0)
	    oneShotSound.start(context.currentTime + 0.75);
	}
};

()=>{
    var context = new webkitOfflineAudioContext(1, 2, 44100.5);
    context.startRendering();
    context.oncomplete(context.createBufferSource().buffer);
}

