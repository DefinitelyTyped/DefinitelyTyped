import { useSpeechRecognition } from "react-speech-kit";

// $ExpectType UseSpeechRecognitionReturn
const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: (result: SpeechRecognitionResult): void => {
        console.log(result);
    },
    onEnd: (): void => {
        console.log("ended");
    },
    onError: (error: ErrorEvent): void => {
        console.log(error);
    },
});

// $ExpectType void
listen({ lang: "en-AU", interimResults: true }); // Should work

// $ExpectType void
listen({ lang: "en-AU" }); // Should work

// $ExpectType void
stop(); // Should work

// Validate the properties
const isListening: boolean = listening;
const isSupported: boolean = supported;

// Error cases
// @ts-expect-error
listen(); // Missing text parameter
// @ts-expect-error
listen({ text: "Hello", prop: 123 }); // Invalid properties
// @ts-expect-error
listen({ text: 123 }); // Invalid type
