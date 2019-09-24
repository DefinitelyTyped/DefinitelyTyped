import PizZip = require('pizzip');
import * as fs from 'fs';

const zip = new PizZip();

if (PizZip.support.blob) {
    /* amazing */
}

new PizZip('data', {
    base64: true,
    checkCRC32: true,
    createFolders: true,
    optimizedBinaryString: true,
    decodeFileName: a => '',
});

zip.file('Hello.txt', 'Hello World\n')
    .file('smile.gif', 'R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=', { base64: true })
    .file('smile.gif', fs.readFileSync('smile.gif'))
    .file('Xmas.txt', 'Ho ho ho !', { date: new Date('December 25, 2007 00:00:01') })
    .file('folder/file.txt', 'file in folder', { createFolders: true })
    .file('script.sh', "echo 'hello world'", { unixPermissions: '755' })
    .folder('css')
    .remove('css');

zip.load('content', { decodeFileName: bytes => 'encoding' });
zip.generate({ type: 'uint8array', encodeFileName: string => new Buffer('') });
zip.generate({ type: 'blob', mimeType: 'application/ods', compression: 'DEFLATE' });
zip.file(/file/).map(z => z);
zip.folder(/^vid/).map(z => z);
zip.filter((relativePath, file) => true).map(z => z);
zip.folder('subfolder').load('data');

const file = zip.file('');

if (file) {
    file.name.split('');
    file.asText();
    file.asArrayBuffer();
    file.asUint8Array();
    file.asNodeBuffer();
    file.asText();
}
