import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const {
    finalTranscript, // $ExpectType string
    interimTranscript, // $ExpectType string
    listening, // $ExpectType boolean
    resetTranscript, // $ExpectType () => void
    transcript, // $ExpectType string
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
SpeechRecognition.startListening({ continuous: true, language: 'en' }); // $ExpectType Promise<void>
SpeechRecognition.stopListening(); // $ExpectType void
SpeechRecognition.abortListening(); // $ExpectType void
SpeechRecognition.browserSupportsSpeechRecognition(); // $ExpectType boolean
