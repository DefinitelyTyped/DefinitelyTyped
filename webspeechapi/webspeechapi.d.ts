// Type definitions for Web Speech API
// Project: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// Definitions by: SaschaNaz <https://github.com/saschanaz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

    onaudiostart: (ev: SpeechRecognitionEvent) => any;
    onsoundstart: (ev: SpeechRecognitionEvent) => any;
    onspeechstart: (ev: SpeechRecognitionEvent) => any;
    onspeechend: (ev: SpeechRecognitionEvent) => any;
    onsoundend: (ev: SpeechRecognitionEvent) => any;
    onresult: (ev: SpeechRecognitionEvent) => any;
    onnomatch: (ev: SpeechRecognitionEvent) => any;
    onerror: (ev: SpeechRecognitionError) => any;
    onstart: (ev: SpeechRecognitionEvent) => any;
    onend: (ev: SpeechRecognitionEvent) => any;
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
    final: boolean;
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

interface SpeechSynthesis {
    pending: boolean;
    speaking: boolean;
    paused: boolean;

    speak(utterance: SpeechSynthesisUtterance): void;
    cancel(): void;
    pause(): void;
    resume(): void;
    getVoices(): SpeechSynthesisVoiceList;
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
    voiceURI: string;
    volume: number;
    rate: number;
    pitch: number;

    onstart: (ev: SpeechSynthesisEvent) => any;
    onend: (ev: SpeechSynthesisEvent) => any;
    onerror: (ev: ErrorEvent) => any;
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
    charIndex: number;
    elapsedTime: number;
    name: string;
}

interface SpeechSynthesisVoice {
    voiceURI: string;
    name: string;
    lang: string;
    localService: boolean;
    default: boolean;
}

interface SpeechSynthesisVoiceList {
    length: number;
    item(index: number): SpeechSynthesisVoice;
    [index: number]: SpeechSynthesisVoice;
}