import streamSaver from 'streamsaver';

streamSaver.WritableStream = WritableStream;
streamSaver.TransformStream = TransformStream;
streamSaver.mitm = 'https://example.com/custom_mitm.html';

const fileStream = streamSaver.createWriteStream('filename.txt', {
    size: 22,
    writableStrategy: undefined,
    readableStrategy: new ByteLengthQueuingStrategy({highWaterMark: 120}),
});

const body = (new Response('StreamSaver is awesome').body as ReadableStream<Uint8Array>);
body.pipeTo(fileStream).catch(() => {
});

console.log(streamSaver.version.full);
