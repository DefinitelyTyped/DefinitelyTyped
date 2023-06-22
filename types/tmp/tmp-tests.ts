import {
    DirResult,
    FileResult,
    tmpdir,
    tmpName,
    tmpNameSync,
    dir,
    dirSync,
    file,
    fileSync,
    setGracefulCleanup,
    TmpNameOptions,
    FileOptions,
    FileOptionsDiscardFd,
    DirOptions,
    FileResultNoFd,
    FileCallback,
    FileCallbackNoFd,
    DirCallback,
    TmpNameCallback,
} from 'tmp';

// test type exports
type NameOpts = TmpNameOptions;
type FileOpts = FileOptions;
type FileOptsDiscardFd = FileOptionsDiscardFd;
type DirOpts = DirOptions;
type FileRes = FileResult;
type FileResNoFd = FileResultNoFd;
type FileCb = FileCallback;
type FileCbNoFd = FileCallbackNoFd;
type DirCb = DirCallback;
type TmpNameCb = TmpNameCallback;

tmpdir; // $ExpectType string

setGracefulCleanup(); // $ExpectType void

file({ dir: 'foo' }, () => {}); // $ExpectType void
file({ name: 'bar' }, () => {}); // $ExpectType void
file({ prefix: 'prefix-' }, () => {}); // $ExpectType void
file({ postfix: '.txt' }, () => {}); // $ExpectType void
file({ template: 'foo-bar-XXXXXX' }, () => {}); // $ExpectType void
file({ tmpdir: '/' }, () => {}); // $ExpectType void
file({ tries: 5 }, () => {}); // $ExpectType void
file({ detachDescriptor: true }, () => {}); // $ExpectType void
file({ discardDescriptor: true }, () => {}); // $ExpectType void
file({ keep: true }, () => {}); // $ExpectType void
file({ mode: 644 }, () => {}); // $ExpectType void

// $ExpectType void
file((err, name, fd, cleanupCallback) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
    fd; // $ExpectType number
    cleanupCallback; // $ExpectType () => void
});

// $ExpectType void
file({ mode: 644, prefix: 'prefix-', postfix: '.txt' }, (err, name, fd, cleanupCallback) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
    fd; // $ExpectType number
    cleanupCallback; // $ExpectType () => void
});

// $ExpectType void
file({ discardDescriptor: true }, (err, name, fd, cleanupCallback) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
    fd; // $ExpectType undefined
    cleanupCallback; // $ExpectType () => void
});

dir({ dir: 'foo' }, () => {}); // $ExpectType void
dir({ name: 'bar' }, () => {}); // $ExpectType void
dir({ prefix: 'prefix-' }, () => {}); // $ExpectType void
dir({ postfix: '.txt' }, () => {}); // $ExpectType void
dir({ template: 'foo-bar-XXXXXX' }, () => {}); // $ExpectType void
dir({ tmpdir: '/' }, () => {}); // $ExpectType void
dir({ tries: 5 }, () => {}); // $ExpectType void
dir({ keep: true }, () => {}); // $ExpectType void
dir({ mode: 644 }, () => {}); // $ExpectType void
dir({ unsafeCleanup: true }, () => {}); // $ExpectType void

// $ExpectType void
dir((err, name, removeCallback) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
    removeCallback; // $ExpectType () => void
});

// $ExpectType void
dir({ mode: 750, prefix: 'myTmpDir_' }, (err, name, removeCallback) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
    removeCallback; // $ExpectType () => void
});

tmpName({ dir: 'foo' }, () => {}); // $ExpectType void
tmpName({ name: 'bar' }, () => {}); // $ExpectType void
tmpName({ prefix: 'prefix-' }, () => {}); // $ExpectType void
tmpName({ postfix: '.txt' }, () => {}); // $ExpectType void
tmpName({ template: 'foo-bar-XXXXXX' }, () => {}); // $ExpectType void
tmpName({ tmpdir: '/' }, () => {}); // $ExpectType void
tmpName({ tries: 5 }, () => {}); // $ExpectType void

// $ExpectType void
tmpName((err, name) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
});

// $ExpectType void
tmpName({ template: '/tmp/tmp-XXXXXX' }, (err, name) => {
    err; // $ExpectType Error | null
    name; // $ExpectType string
});

const dirResult: DirResult = dirSync(); // $ExpectType DirResult
dirSync({ dir: 'foo' }); // $ExpectType DirResult
dirSync({ name: 'bar' }); // $ExpectType DirResult
dirSync({ prefix: 'prefix-' }); // $ExpectType DirResult
dirSync({ postfix: '.txt' }); // $ExpectType DirResult
dirSync({ template: 'foo-bar-XXXXXX' }); // $ExpectType DirResult
dirSync({ tmpdir: '/' }); // $ExpectType DirResult
dirSync({ tries: 5 }); // $ExpectType DirResult
dirSync({ keep: true }); // $ExpectType DirResult
dirSync({ mode: 644 }); // $ExpectType DirResult
dirSync({ unsafeCleanup: true }); // $ExpectType DirResult

dirResult.name; // $ExpectType string
dirResult.removeCallback; // $ExpectType () => void

const fileResult = fileSync(); // $ExpectType FileResult
fileSync({ dir: 'foo' }); // $ExpectType FileResult
fileSync({ name: 'bar' }); // $ExpectType FileResult
fileSync({ prefix: 'prefix-' }); // $ExpectType FileResult
fileSync({ postfix: '.txt' }); // $ExpectType FileResult
fileSync({ template: 'foo-bar-XXXXXX' }); // $ExpectType FileResult
fileSync({ tmpdir: '/' }); // $ExpectType FileResult
fileSync({ tries: 5 }); // $ExpectType FileResult
fileSync({ detachDescriptor: true }); // $ExpectType FileResult
fileSync({ keep: true }); // $ExpectType FileResult
fileSync({ mode: 644 }); // $ExpectType FileResult

// need to test this type via assignments, TS4.1 resolves this type
// as Pick<FileResult, "name" | "removeCallback"> instead of FileResultNoFd
// @ts-expect-error
const fileResult_: FileResult = fileSync({ discardDescriptor: true });
const fileResultNoFd: FileResultNoFd = fileSync({ discardDescriptor: true });

fileResult.fd; // $ExpectType number
fileResult.name; // $ExpectType string
fileResult.removeCallback; // $ExpectType () => void

// @ts-expect-error
fileResultNoFd.fd;
fileResultNoFd.name; // $ExpectType string
fileResultNoFd.removeCallback; // $ExpectType () => void

tmpNameSync(); // $ExpectType string
tmpNameSync({ dir: 'foo' }); // $ExpectType string
tmpNameSync({ name: 'bar' }); // $ExpectType string
tmpNameSync({ prefix: 'prefix-' }); // $ExpectType string
tmpNameSync({ postfix: '.txt' }); // $ExpectType string
tmpNameSync({ template: 'foo-bar-XXXXXX' }); // $ExpectType string
tmpNameSync({ tmpdir: '/' }); // $ExpectType string
tmpNameSync({ tries: 5 }); // $ExpectType string
