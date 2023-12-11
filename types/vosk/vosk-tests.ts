import vosk from "vosk";

main().catch(function(error) {
    throw error;
});

async function main(): Promise<void> {
    const result: unknown[] = [];
    const model = new vosk.Model("../models/vosk");
    const recognizer = new vosk.Recognizer({ model: model, sampleRate: 16000 });

    const chunk = new ArrayBuffer(0);

    if (recognizer.acceptWaveform(chunk)) {
        console.log(recognizer.result());
    } else {
        console.log(recognizer.partialResult());
    }

    console.log(recognizer.finalResult());
}
