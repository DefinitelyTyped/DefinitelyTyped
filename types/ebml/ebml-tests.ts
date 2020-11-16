import { Decoder, Encoder, StateAndTagData, Tag } from 'ebml';

// based on "should emit correct tag events for simple data" test
const decoder = new Decoder();
decoder.on('data', ([state, tagData]: StateAndTagData) => {
    console.log(state === 'tag');
    console.log(tagData.tag === 0x4286);
    console.log(tagData.tagStr === '4286');
    console.log(tagData.dataSize === 0x01);
    console.log(tagData.type === 'u');
    console.log((tagData as Tag<any>).data === Buffer.from([0x01]));
    console.log(`${tagData.name} ${Decoder.getSchemaInfo(tagData.tag).webm ? 'is' : 'is not'} a WebM element type`);
});
decoder.write(Buffer.from([0x42, 0x86, 0x81, 0x01]));
decoder.end();

// based on "creates a valid tag when presented" test
const encoder = new Encoder();
encoder.startTag('ChapterTrackNumber', { end: -1 });
console.log(encoder.stack.length === 1);
const encoderStackItem = encoder.stack[0];
console.log(encoderStackItem.data === null);
console.log(encoderStackItem.id === 0x89);
console.log(encoderStackItem.name === 'ChapterTrackNumber');
console.log(Array.isArray(encoderStackItem.children) && encoderStackItem.children.length === 0);

decoder.pipe(encoder);
encoder.on('data', console.log);
