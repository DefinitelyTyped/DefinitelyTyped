import * as xar from 'xar';

const buffer = Buffer.from([]);

xar.getToc(buffer, (err, xmlBuffer, json, header) => {
    err; // $ExpectType Error | null
    xmlBuffer; // $ExpectType Buffer
    json; // $ExpectType Record<string, any>
    header; // $ExpectType TOCHeader
});

xar.unpack(buffer, (error, file, content) => {
    error; // $ExpectType Error | null
    file; // $ExpectType Record<string, any>
    content; // $ExpectType string | undefined
});

xar.extract(buffer, (error, file, content) => {
    error; // $ExpectType Error | null
    file; // $ExpectType Record<string, any>
    content; // $ExpectType string | undefined
});

xar.pack('dir');
xar.pack('dir', { compression: 'gzip' });
xar.create('dir', { compression: 'gzip' });
