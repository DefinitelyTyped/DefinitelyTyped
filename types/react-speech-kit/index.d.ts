export interface SpeakOptions {
    text: string;
    voice?: SpeechSynthesisVoice;
    rate?: number;
    pitch?: number;
}

export interface UseSpeechSynthesisReturn {
    speak: (options: SpeakOptions) => void;
    cancel: () => void;
    speaking: boolean;
    supported: boolean;
    voices: SpeechSynthesisVoice[];
}

export interface UseSpeechSynthesisOptions {
    onEnd?: () => void;
}

export interface ListenOptions {
    interimResults?: boolean;
    lang: string;
}

export interface UseSpeechRecognitionReturn {
    listen: (options: ListenOptions) => void;
    stop: () => void;
    listening: boolean;
    supported: boolean;
}

export interface UseSpeechRecognitionOptions {
    onEnd?: () => void;
    onResult?: (result: SpeechRecognitionResult) => void;
    onError?: (event: ErrorEvent) => void;
}

export function useSpeechSynthesis(options?: UseSpeechSynthesisOptions): UseSpeechSynthesisReturn;
export function useSpeechRecognition(options?: UseSpeechRecognitionOptions): UseSpeechRecognitionReturn;
