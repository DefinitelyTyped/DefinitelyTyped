import { CompressedFile } from 'libarchive.js/compressed-file';

import { Archive, FilesObject } from 'libarchive.js/main';

let testFile: File = new File([""], "filename");
const testArchive = new Archive(testFile, { workerUrl: 'test'});

Archive.init({ workerUrl: 'test' });
Archive.open(testFile);
Archive.open(testFile, { workerUrl: 'test' });

const compressedFile = new CompressedFile(
    'test',
    120,
    'test/test',
    testArchive
);

const FilesObject1: FilesObject = {
    test1: compressedFile,
    test2: testFile
};

let FilesObject2: FilesObject = {
    test2: FilesObject1
};

let testArray: Array<{ file: File | CompressedFile, path: string }> = [];

testArchive.hasEncryptedData().then((res) => {
    console.log(res);
});
testArchive.usePassword('qwe').then(() => {});
testArchive.getFilesObject().then((res) => {
    FilesObject2 = res;
});
testArchive.getFilesArray().then((res) => {
    testArray = res;
});
testArchive.extractFiles((entry) => {
    testArray.push(entry);
}).then(() => {});
testArchive.extractFiles().then((res) => {
    FilesObject2 = res;
});
testArchive.extractSingleFile('qwe').then((res) => {
    testFile = res;
});
