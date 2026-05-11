import VPK = require("vpk");

// $ExpectType VPK
const archive = new VPK("path/to/archive.vpk");

// $ExpectType string
archive.directoryPath;

// $ExpectType VPKHeader
archive.header;

// $ExpectType Record<string, VPKDirectoryEntry>
archive.tree;

// $ExpectType boolean
archive.isValid();

// $ExpectType void
archive.load();

// $ExpectType string[]
archive.files;

// $ExpectType Buffer | null || Buffer<ArrayBufferLike> | null
archive.getFile("some/file.txt");

// Manual construction of types for testing

const header: VPK.VPKHeader = {
    version: 2,
    treeLength: 1024,
    unknown1: 0,
    footerLength: 512,
    unknown3: 1,
    unknown4: 2,
};

// $ExpectType VPKHeader
header;

const entry: VPK.VPKDirectoryEntry = {
    crc: 123456,
    preloadBytes: 128,
    archiveIndex: 1,
    entryOffset: 2048,
    entryLength: 4096,
    preloadOffset: 64,
};

// $ExpectType VPKDirectoryEntry
entry;
