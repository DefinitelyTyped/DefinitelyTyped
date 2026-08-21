import untar = require("js-untar");

// Create a minimal tar ArrayBuffer for type testing
function createMinimalTarArrayBuffer(): ArrayBuffer {
    const encoder = new TextEncoder();
    const header = new Uint8Array(512);
    encoder.encode("hello.txt").forEach((b, i) => header[i] = b);
    encoder.encode("0000777").forEach((b, i) => header[100 + i] = b);
    encoder.encode("0000000").forEach((b, i) => header[108 + i] = b);
    encoder.encode("0000000").forEach((b, i) => header[116 + i] = b);
    encoder.encode("0000004").forEach((b, i) => header[124 + i] = b);
    encoder.encode("00000000000").forEach((b, i) => header[136 + i] = b);
    encoder.encode("        ").forEach((b, i) => header[148 + i] = b);
    header[156] = "0".charCodeAt(0);
    encoder.encode("ustar  ").forEach((b, i) => header[257 + i] = b);
    encoder.encode("00").forEach((b, i) => header[263 + i] = b);
    const content = encoder.encode("hi\n");
    const tar = new Uint8Array(512 + 4 + 512);
    tar.set(header, 0);
    tar.set(content, 512);
    return tar.buffer;
}

const arrayBuffer = createMinimalTarArrayBuffer();
const promise = untar(arrayBuffer); // $ExpectType ProgressivePromise<TarFile[], TarFile>

promise.progress((file) => {
    file; // $ExpectType TarFile
    file.name; // $ExpectType string
    file.mode; // $ExpectType string
    file.uid; // $ExpectType number
    file.gid; // $ExpectType number
    file.size; // $ExpectType number
    file.mtime; // $ExpectType number
    file.checksum; // $ExpectType number
    file.type; // $ExpectType string
    file.linkname; // $ExpectType string
    file.ustarFormat; // $ExpectType string
    file.buffer; // $ExpectType ArrayBuffer
    file.blob(); // $ExpectType Blob
    file.getBlobUrl(); // $ExpectType URL
    file.readAsString(); // $ExpectType string
    file.readAsJSON(); // $ExpectType any

    file.version; // $ExpectType string | undefined
    file.uname; // $ExpectType string | undefined
    file.gname; // $ExpectType string | undefined
    file.devmajor; // $ExpectType number | undefined
    file.devminor; // $ExpectType number | undefined
    file.namePrefix; // $ExpectType string | undefined
});

promise.then((files) => {
    files; // $ExpectType TarFile[]
    files.forEach((file) => {
        file; // $ExpectType TarFile
        file.name; // $ExpectType string
        file.mode; // $ExpectType string
        file.uid; // $ExpectType number
        file.gid; // $ExpectType number
        file.size; // $ExpectType number
        file.mtime; // $ExpectType number
        file.checksum; // $ExpectType number
        file.type; // $ExpectType string
        file.linkname; // $ExpectType string
        file.ustarFormat; // $ExpectType string
        file.buffer; // $ExpectType ArrayBuffer
        file.blob(); // $ExpectType Blob
        file.getBlobUrl(); // $ExpectType URL
        file.readAsString(); // $ExpectType string
        file.readAsJSON(); // $ExpectType any

        file.version; // $ExpectType string | undefined
        file.uname; // $ExpectType string | undefined
        file.gname; // $ExpectType string | undefined
        file.devmajor; // $ExpectType number | undefined
        file.devminor; // $ExpectType number | undefined
        file.namePrefix; // $ExpectType string | undefined
    });
});
