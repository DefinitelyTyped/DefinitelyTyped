import EasySpeech from "easy-speech";

// helper guard for speechSynthesisVoice
const isSpeechSynthesisVoice = (voice: SpeechSynthesisVoice): voice is SpeechSynthesisVoice => {
    return (
        typeof voice.default === "boolean"
        && typeof voice.lang === "string"
        && typeof voice.localService === "boolean"
        && typeof voice.name === "string"
        && typeof voice.voiceURI === "string"
    );
};

// samples from official documentation

EasySpeech.init();
EasySpeech.init({ maxTimeout: 5000, interval: 250 })
    .then(() => console.log("load complete"))
    .catch(e => console.error(e));

EasySpeech.speak({
    text: "Hello, world!",
    voice: window.speechSynthesis.getVoices()[0],
    pitch: 1,
    rate: 1,
    volume: 1,
    boundary: e => console.debug("boundary reached"),
});

EasySpeech.debug(arg => console.log("EasySpeech:", arg));

// further samples

// .debug(fn)
EasySpeech.debug(arg => console.log("EasySpeech:", arg));

// .detect() ⇒ object
// should return an object with the following properties:
// {
//     speechSynthesis: SpeechSynthesis|undefined,
//     speechSynthesisUtterance: SpeechSynthesisUtterance|undefined,
//     speechSynthesisVoice: SpeechSynthesisVoice|undefined,
//     speechSynthesisEvent: SpeechSynthesisEvent|undefined,
//     speechSynthesisErrorEvent: SpeechSynthesisErrorEvent|undefined,
//     onvoiceschanged: Boolean,
//     onboundary: Boolean,
//     onend: Boolean,
//     onerror: Boolean,
//     onmark: Boolean,
//     onpause: Boolean,
//     onresume: Boolean,
//     onstart: Boolean
// }

// verify the types of the properties
const detection = EasySpeech.detect();
if (typeof detection.speechSynthesis !== "undefined" && typeof detection.speechSynthesis !== "object") {
    throw new Error("invalid type for speechSynthesis");
}
if (
    typeof detection.speechSynthesisUtterance !== "undefined"
    && !(new detection.speechSynthesisUtterance() instanceof SpeechSynthesisUtterance)
) {
    throw new Error("invalid type for speechSynthesisUtterance");
}
if (typeof detection.speechSynthesisVoice !== "undefined" && !isSpeechSynthesisVoice(detection.speechSynthesisVoice)) {
    throw new Error("invalid type for speechSynthesisVoice");
}
if (
    typeof detection.speechSynthesisEvent !== "undefined"
    && !(
        new detection.speechSynthesisEvent("type", {
            utterance: new SpeechSynthesisUtterance(),
        }) instanceof SpeechSynthesisEvent
    )
) {
    throw new Error("invalid type for speechSynthesisEvent");
}
if (
    typeof detection.speechSynthesisErrorEvent !== "undefined"
    && !(
        new detection.speechSynthesisErrorEvent("type", {
            utterance: new SpeechSynthesisUtterance(),
            error: "audio-busy",
        }) instanceof SpeechSynthesisErrorEvent
    )
) {
    throw new Error("invalid type for speechSynthesisErrorEvent");
}
if (typeof detection.onvoiceschanged !== "boolean") {
    throw new Error("invalid type for onvoiceschanged");
}
if (typeof detection.onboundary !== "boolean") {
    throw new Error("invalid type for onboundary");
}
if (typeof detection.onend !== "boolean") {
    throw new Error("invalid type for onend");
}
if (typeof detection.onerror !== "boolean") {
    throw new Error("invalid type for onerror");
}
if (typeof detection.onmark !== "boolean") {
    throw new Error("invalid type for onmark");
}
if (typeof detection.onpause !== "boolean") {
    throw new Error("invalid type for onpause");
}
if (typeof detection.onresume !== "boolean") {
    throw new Error("invalid type for onresume");
}
if (typeof detection.onstart !== "boolean") {
    throw new Error("invalid type for onstart");
}

// .status() ⇒ Object
// uninitialized
// EasySpeech.status() // { status: 'created' }
// after EasySpeech.init
// EasySpeech.status()
// returns {
//     status: string;
//     initialized?: boolean;
//     speechSynthesis?: SpeechSynthesis;
//     speechSynthesisUtterance?: SpeechSynthesisUtterance;
//     speechSynthesisVoice?: SpeechSynthesisVoice;
//     speechSynthesisEvent?: SpeechSynthesisEvent;
//     speechSynthesisErrorEvent?: SpeechSynthesisErrorEvent;
//     voices?: SpeechSynthesisVoice[];
//     defaults?: Defaults;
//     handlers?: Handlers;
// }

const status = EasySpeech.status();
if (typeof status.status !== "string") {
    throw new Error("invalid type for status");
}
if (status.initialized !== undefined && typeof status.initialized !== "boolean") {
    throw new Error("invalid type for initialized");
}
if (status.speechSynthesis !== undefined && typeof status.speechSynthesis !== "object") {
    throw new Error("invalid type for speechSynthesis");
}
if (
    status.speechSynthesisUtterance !== undefined
    && !(new status.speechSynthesisUtterance() instanceof SpeechSynthesisUtterance)
) {
    throw new Error("invalid type for speechSynthesisUtterance");
}
if (status.speechSynthesisVoice !== undefined && !isSpeechSynthesisVoice(status.speechSynthesisVoice)) {
    throw new Error("invalid type for speechSynthesisVoice");
}
if (
    status.speechSynthesisEvent !== undefined
    && !(
        new status.speechSynthesisEvent("type", {
            utterance: new SpeechSynthesisUtterance(),
        }) instanceof SpeechSynthesisEvent
    )
) {
    throw new Error("invalid type for speechSynthesisEvent");
}
if (
    status.speechSynthesisErrorEvent !== undefined
    && !(
        new status.speechSynthesisErrorEvent("type", {
            utterance: new SpeechSynthesisUtterance(),
            error: "audio-busy",
        }) instanceof SpeechSynthesisErrorEvent
    )
) {
    throw new Error("invalid type for speechSynthesisErrorEvent");
}
if (status.voices !== undefined && !status.voices.every(isSpeechSynthesisVoice)) {
    throw new Error("invalid type for voices");
}
if (status.defaults !== undefined && typeof status.defaults !== "object") {
    throw new Error("invalid type for defaults");
}
if (status.handlers !== undefined && typeof status.handlers !== "object") {
    throw new Error("invalid type for handlers");
}

// .init() ⇒ Promise.<Boolean>
// tested in part one

// .voices() ⇒ Array.<SpeechSynthesisVoice>

const voices = EasySpeech.voices();
if (!voices.every(isSpeechSynthesisVoice)) {
    throw new Error("invalid type for voices");
}

// .on(handlers) ⇒ Object
//  * @param {function=} handlers.boundary - optional, event handler
//  * @param {function=} handlers.end - optional, event handler
//  * @param {function=} handlers.error - optional, event handler
//  * @param {function=} handlers.mark - optional, event handler
//  * @param {function=} handlers.pause - optional, event handler
//  * @param {function=} handlers.resume - optional, event handler
//  * @param {function=} handlers.start - optional, event handler

EasySpeech.on({
    boundary: e => console.log("boundary", e),
    end: e => console.log("end", e),
    error: e => console.log("error", e),
    mark: e => console.log("mark", e),
    pause: e => console.log("pause", e),
    resume: e => console.log("resume", e),
    start: e => console.log("start", e),
});

// .defaults([options]) ⇒ object
const defaults = EasySpeech.defaults({
    voice: EasySpeech.voices()[0],
    rate: 1,
    pitch: 1,
    volume: 1,
});

// .speak(options, text, [voice], [handlers]) ⇒ Promise.<(SpeechSynthesisEvent|SpeechSynthesisErrorEvent)>

EasySpeech.speak({
    text: "Hello world",
    rate: 1,
    pitch: 1,
    volume: 1,
    voice: EasySpeech.voices().find(voice => voice.lang === "en-US"),
    boundary: e => console.log("boundary (within)", e),
    end: e => console.log("end (within)", e),
    error: e => console.log("error (within)", e),
    mark: e => console.log("mark (within)", e),
    pause: e => console.log("pause (within)", e),
    resume: e => console.log("resume (within)", e),
    start: e => console.log("start (within)", e),
});

// .cancel()

if (typeof EasySpeech.cancel !== "function") {
    throw new Error("invalid type for cancel");
}

// .pause()

EasySpeech.pause();

// .resume()

EasySpeech.resume();

// .reset()

if (typeof EasySpeech.reset !== "function") {
    throw new Error("invalid type for reset");
}
