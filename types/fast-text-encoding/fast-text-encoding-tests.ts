// Declare globals in non-DOM environment
declare let TextDecoder: fastTextEncoding.TextDecoder;
declare let TextEncoder: fastTextEncoding.TextEncoder;

const encoder1 = new TextEncoder();
const _encoder2 = new TextEncoder('utf-8');

const _encoderEncoding = encoder1.encoding;

const _encoded1 = encoder1.encode('foo');
const _encoded2 = encoder1.encode('foo', { stream: false });

const decoder1 = new TextDecoder();
const _decoder2 = new TextDecoder('utf-8');
const _decoder3 = new TextDecoder('utf-8', { fatal: false });

const _decoderEncoding = decoder1.encoding;
const _decoderFatal = decoder1.fatal;
const _decoderIgnoreBOM = decoder1.ignoreBOM;

const _decoded1 = decoder1.decode(new Uint8Array(16));
const _decoded2 = decoder1.decode(new Uint8Array(16), { stream: false });
