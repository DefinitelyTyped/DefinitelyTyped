/// <reference types="node" />
interface KafkaJSSnappyCodec {
    compress: (encoder: { buffer: Buffer }) => Promise<Buffer>;
    decompress: (buffer: Buffer) => Promise<Buffer>;
}

declare function KafkaJSSnappy(): KafkaJSSnappyCodec;

export = KafkaJSSnappy;
