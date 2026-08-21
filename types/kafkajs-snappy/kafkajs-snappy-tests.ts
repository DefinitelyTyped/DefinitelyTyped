import KafkaJSSnappy from "kafkajs-snappy";

const codec = KafkaJSSnappy();

const buffer = Buffer.alloc(100);

// @ts-expect-error Missing arg
codec.compress();
// @ts-expect-error Invalid arg
codec.compress([]);
codec.compress({ buffer: buffer }); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>

// @ts-expect-error Missing arg
codec.decompress();
// @ts-expect-error Invalid arg
codec.decompress([]);
codec.decompress(buffer); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
