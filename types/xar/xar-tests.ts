import * as xar from 'xar';

const data = Buffer.from([]);

xar.getToc(data, (err, xmlBuffer, json, header) => {
    err;
    xmlBuffer;
    json;
    header; // $ExpectType TOCHeader
});

xar.unpack(data, (error, file, content) => {
    error;
    file;
    content;
});
