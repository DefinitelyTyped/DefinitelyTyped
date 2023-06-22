import {
    File,
    Permissions,
    ParsingCallback,
    nodeTypes,
    permissions,
    access,
    parseEntries,
    parseFtpEntries,
    parseEntry,
} from 'parse-listing';

// test type exports
type Fil = File;
type Perm = Permissions;
type CB = ParsingCallback;
type types = nodeTypes;
type perms = permissions;
type acc = access;

nodeTypes.DIRECTORY_TYPE;
nodeTypes.FILE_TYPE;
nodeTypes.SYMBOLIC_LINK_TYPE;
nodeTypes.UNKNOWN_TYPE;

// $ExpectType void
parseEntries('some-listing', (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType File[]
});
// $ExpectType void
parseEntries(['some-listing'] as const, (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType File[]
});

// $ExpectType void
parseFtpEntries('some-listing', (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType File[]
});
// $ExpectType void
parseFtpEntries(['some-listing'] as const, (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType File[]
});

parseEntry('some-line'); // $ExpectType File | null
