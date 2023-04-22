import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const {
    finalTranscript, // $ExpectType string
    interimTranscript, // $ExpectType string
    listening, // $ExpectType boolean
    resetTranscript, // $ExpectType () => void
    transcript, // $ExpectType string
    browserSupportsSpeechRecognition, // $ExpectType boolean
    isMicrophoneAvailable, // $ExpectType boolean
} = useSpeechRecognition();

useSpeechRecognition({
    clearTranscriptOnListen: true,
    transcribing: true,
    commands: [
        {
            command: 'Command',
            callback: (command: string, spokenPhrase: string, similarityRatio: number) => {},
        },
        {
            command: 'Command',
            callback: (...match: string[]) => {},
        },
    ],
});

SpeechRecognition.getRecognition(); // $ExpectType SpeechRecognition | null
SpeechRecognition.startListening(); // $ExpectType Promise<void>
SpeechRecognition.startListening({ continuous: true, interimResults: true, language: 'en' }); // $ExpectType Promise<void>
SpeechRecognition.stopListening(); // $ExpectType Promise<void>
SpeechRecognition.abortListening(); // $ExpectType Promise<void>
SpeechRecognition.browserSupportsSpeechRecognition(); // $ExpectType boolean
SpeechRecognition.applyPolyfill(null); // $ExpectType void
