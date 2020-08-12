// Type definitions for react-speech-recognition 3.1
// Project: https://github.com/JamesBrill/react-speech-recognition#readme
// Definitions by: OleksandrYehorov <https://github.com/OleksandrYehorov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Command {
    command: string | RegExp;
    callback: (...args: any[]) => unknown;
    isFuzzyMatch?: boolean;
    matchInterim?: boolean;
    fuzzyMatchingThreshold?: number;
}

export interface ListeningOptions {
    continuous?: boolean;
    language?: string;
}

interface SpeechRecognition {
    getRecognition(): SpeechRecognition | null;
    startListening(options?: ListeningOptions): Promise<void>;
    stopListening(): void;
    abortListening(): void;
    browserSupportsSpeechRecognition(): boolean;
}

export interface SpeechRecognitionOptions {
    transcribing?: boolean;
    clearTranscriptOnListen?: boolean;
    commands?: ReadonlyArray<Command>;
}

export function useSpeechRecognition(
    options?: SpeechRecognitionOptions,
): {
    transcript: string;
    interimTranscript: string;
    finalTranscript: string;
    listening: boolean;
    resetTranscript: () => void;
};

declare const SpeechRecognition: SpeechRecognition;

export default SpeechRecognition;
