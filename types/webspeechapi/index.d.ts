// Type definitions for Web Speech API
// Project: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// Definitions by: SaschaNaz <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Spec version: 19 October 2012
// Errata version: 6 June 2014
// Corrected unofficial spec version: 6 June 2014

interface SpeechRecognition extends EventTarget {
    grammars: SpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;

    start(): void;
    stop(): void;
    abort(): void;

    onaudiostart: (ev: Event) => any;
    onsoundstart: (ev: Event) => any;
    onspeechstart: (ev: Event) => any;
    onspeechend: (ev: Event) => any;
    onsoundend: (ev: Event) => any;
    onresult: (ev: SpeechRecognitionEvent) => any;
    onnomatch: (ev: SpeechRecognitionEvent) => any;
    onerror: (ev: SpeechRecognitionError) => any;
    onstart: (ev: Event) => any;
    onend: (ev: Event) => any;
}
interface SpeechRecognitionStatic {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
}
declare var SpeechRecognition: SpeechRecognitionStatic;
declare var webkitSpeechRecognition: SpeechRecognitionStatic;

interface SpeechRecognitionError extends Event {
    error: string;
    message: string;
}

interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}

interface SpeechRecognitionResult {
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
    /* Errata 02 */
    isFinal: boolean;
}

interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
    interpretation: any;
    emma: Document;
}

interface SpeechGrammar {
    src: string;
    weight: number;
}
interface SpeechGrammarStatic {
    prototype: SpeechGrammar;
    new (): SpeechGrammar;
}
declare var SpeechGrammar: SpeechGrammarStatic;
declare var webkitSpeechGrammar: SpeechGrammarStatic;

interface SpeechGrammarList {
    length: number;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
    addFromURI(src: string, weight: number): void;
    addFromString(string: string, weight: number): void;
}
interface SpeechGrammarListStatic {
    prototype: SpeechGrammarList;
    new (): SpeechGrammarList;
}
declare var SpeechGrammarList: SpeechGrammarListStatic;
declare var webkitSpeechGrammarList: SpeechGrammarListStatic;

/* Errata 08 */
interface SpeechSynthesis extends EventTarget {
    pending: boolean;
    speaking: boolean;
    paused: boolean;

    /* Errata 11 */
    onvoiceschanged: (ev: Event) => any;

    speak(utterance: SpeechSynthesisUtterance): void;
    cancel(): void;
    pause(): void;
    resume(): void;
    /* Errata 05 */
    getVoices(): SpeechSynthesisVoice[];
}

interface SpeechSynthesisGetter {
    speechSynthesis: SpeechSynthesis;
}
interface Window extends SpeechSynthesisGetter {
}
declare var speechSynthesis: SpeechSynthesis;

interface SpeechSynthesisUtterance extends EventTarget {
    text: string;
    lang: string;
    /* Errata 07 */
    voice: SpeechSynthesisVoice;
    volume: number;
    rate: number;
    pitch: number;

    onstart: (ev: SpeechSynthesisEvent) => any;
    onend: (ev: SpeechSynthesisEvent) => any;
    /* Errata 12 */
    onerror: (ev: SpeechSynthesisErrorEvent) => any;
    onpause: (ev: SpeechSynthesisEvent) => any;
    onresume: (ev: SpeechSynthesisEvent) => any;
    onmark: (ev: SpeechSynthesisEvent) => any;
    onboundary: (ev: SpeechSynthesisEvent) => any;
}
interface SpeechSynthesisUtteranceStatic {
    prototype: SpeechSynthesisUtterance;
    new (): SpeechSynthesisUtterance;
    new (text: string): SpeechSynthesisUtterance;
}
declare var SpeechSynthesisUtterance: SpeechSynthesisUtteranceStatic;

interface SpeechSynthesisEvent extends Event {
    /* Errata 08 */
    utterance: SpeechSynthesisUtterance;
    charIndex: number;
    elapsedTime: number;
    name: string;
}

/* Errata 12 */
interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    error: string;
}

interface SpeechSynthesisVoice {
    voiceURI: string;
    name: string;
    lang: string;
    localService: boolean;
    default: boolean;
}