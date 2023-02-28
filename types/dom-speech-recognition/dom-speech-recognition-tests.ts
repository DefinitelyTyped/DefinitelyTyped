function eventMap(ev: Event, errorEv: SpeechRecognitionErrorEvent, srEvent: SpeechRecognitionEvent): void {
    const speechRecognitionEventMap: SpeechRecognitionEventMap = {
        audioend: ev,
        audiostart: ev,
        end: ev,
        error: errorEv,
        nomatch: srEvent,
        result: srEvent,
        soundend: ev,
        soundstart: ev,
        speechend: ev,
        speechstart: ev,
        start: ev,
    };
}

const speechGrammar = new SpeechGrammar();
const speechGrammar2: SpeechGrammar = {
    src: 'abc',
    weight: 3,
};

const speechGrammarList = new SpeechGrammarList();
const speechGrammarList2: SpeechGrammarList = {
    length: 1,
    addFromString: (string: string, weight?: number) => undefined,
    addFromURI: (src: string, weight?: number) => undefined,
    item: (index: number) => speechGrammar2,
};
const speechGrammarList3 = new webkitSpeechGrammarList();

const speechRecognition = new SpeechRecognition();
const speechRecognition2: SpeechRecognition = {
    continuous: true,
    grammars: speechGrammarList,
    interimResults: false,
    lang: 'eng',
    maxAlternatives: 2,
    onaudioend: null,
    onaudiostart: null,
    onend: null,
    onerror: null,
    onnomatch: null,
    onresult: null,
    onsoundend: null,
    onsoundstart: null,
    onspeechend: null,
    onspeechstart: null,
    onstart: null,
    abort: () => undefined,
    start: () => undefined,
    stop: () => undefined,
    dispatchEvent: (ev: Event) => true,
    addEventListener: (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ) => undefined,
    removeEventListener: (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ) => undefined,
};
const speechRecognition3 = new webkitSpeechRecognition();

const speechRecognitionResultList = new SpeechRecognitionResultList();

const speechRecognitionEventInit: SpeechRecognitionEventInit = {
    resultIndex: 5,
    results: speechRecognitionResultList,
};

const speechRecognitionEvent = new SpeechRecognitionEvent('type', speechRecognitionEventInit);
const speechRecognitionEvent2 = new webkitSpeechRecognitionEvent('type', speechRecognitionEventInit);

const speechRecognitionErrorEventInit: SpeechRecognitionErrorEventInit = {
    error: 'aborted',
    message: 'abcde',
};
const speechRecognitionErrorEvent = new SpeechRecognitionErrorEvent('type', speechRecognitionErrorEventInit);
