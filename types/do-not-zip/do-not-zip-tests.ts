import * as doNotZip from "do-not-zip";

const data = [
    {
        path: "file.png",
        data: Buffer.alloc(0),
    },
    {
        path: "file1.png",
        data: Buffer.alloc(0),
    },
];

// $ExpectType number[]
doNotZip.toArray(data);

// $ExpectType Buffer | Blob || Blob | Buffer || Buffer<ArrayBufferLike> | Blob
doNotZip.toAuto(data);

// $ExpectType Blob
doNotZip.toBlob(data);

// $ExpectType Buffer || Buffer<ArrayBufferLike>
doNotZip.toBuffer(data);

// @ts-expect-error
doNotZip.toBuffer(5);
