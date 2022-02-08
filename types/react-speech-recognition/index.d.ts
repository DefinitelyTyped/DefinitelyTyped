// Type definitions for react-speech-recognition 3.9
// Project: https://github.com/JamesBrill/react-speech-recognition#readme
// Definitions by: OleksandrYehorov <https://github.com/OleksandrYehorov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Command {
    command: string | string[] | RegExp;
    callback: (...args: any[]) => unknown;
    isFuzzyMatch?: boolean | undefined;
    matchInterim?: boolean | undefined;
    fuzzyMatchingThreshold?: number | undefined;
    bestMatchOnly?: boolean | undefined;
}

export interface ListeningOptions {
    continuous?: boolean | undefined;
    language?: string | undefined;
}

interface SpeechRecognition {
    getRecognition(): SpeechRecognition | null;
    startListening(options?: ListeningOptions): Promise<void>;
    stopListening(): void;
    abortListening(): void;
    browserSupportsSpeechRecognition(): boolean;
    applyPolyfill(speechRecognitionPolyfill: any): void;
}

export interface SpeechRecognitionOptions {
    transcribing?: boolean | undefined;
    clearTranscriptOnListen?: boolean | undefined;
    commands?: ReadonlyArray<Command> | undefined;
}

export function useSpeechRecognition(
    options?: SpeechRecognitionOptions,
): {
    transcript: string;
    interimTranscript: string;
    finalTranscript: string;
    listening: boolean;
    resetTranscript: () => void;
    browserSupportsSpeechRecognition: boolean;
    isMicrophoneAvailable: boolean;
};

declare const SpeechRecognition: SpeechRecognition;

export default SpeechRecognition;
