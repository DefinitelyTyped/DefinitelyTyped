import { Archive } from 'libarchive.js/main';

let testFile: File = new File([""], "filename");
const testArchive = new Archive(testFile, { workerUrl: 'test'});

Archive.init({ workerUrl: 'test' });
Archive.open(testFile).then(e => void e);
Archive.open(testFile, { workerUrl: 'test' }).then(e => void e);

const FilesObject1: { [key: string]: any } = {
    test2: testFile
};

let FilesObject2: { [key: string]: any } = {
    test2: FilesObject1
};

let testArray: Array<{ file: any, path: string }> = [];

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
