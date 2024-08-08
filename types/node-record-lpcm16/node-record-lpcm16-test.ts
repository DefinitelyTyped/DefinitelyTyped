import { record } from "node-record-lpcm16";

const recording = record({
    channels: 1,
    sampleRate: 16_000,
    audioType: "wav",
});

const stream = recording.stream();
const recordings: string[] = [];
stream.on("data", (data: string) => recordings.push(data));

recording.stop();
