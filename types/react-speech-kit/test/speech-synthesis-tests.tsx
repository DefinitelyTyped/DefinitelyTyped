import { useSpeechSynthesis } from "react-speech-kit";

// $ExpectType UseSpeechSynthesisReturn
const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

// Validate the function signatures

// $ExpectType void
speak({ text: "Hello world" }); // Should work
// $ExpectType void
speak({ text: "Hello", pitch: 1.2, rate: 1.0 }); // Should work

// $ExpectType void
cancel(); // Should work

// Validate the properties
const isSpeaking: boolean = speaking; // Should work
const isSupported: boolean = supported; // Should work
const voiceList: SpeechSynthesisVoice[] = voices; // Should work

// Error cases
// @ts-expect-error
speak(); // Missing text parameter
// @ts-expect-error
speak({ text: "Hello", prop: 123 }); // Invalid property
