(async () => {
    let [fileHandle]: [FileSystemFileHandle] = await showOpenFilePicker();
    [fileHandle] = await showOpenFilePicker({ multiple: false });
    const fileHandles: FileSystemFileHandle[] = await showOpenFilePicker({
        excludeAcceptAllOption: true,
        multiple: true,
        types: [{ accept: { 'image/*': ['.png', '.jpg'], 'text/plain': '.txt' } }],
    });
    let w: FileSystemWritableFileStream = await fileHandle.createWritable();
    w = await fileHandle.createWritable({ keepExistingData: true });
    await w.write('abc');
    await w.write(new Uint8Array([1, 2, 3]));
    await w.write({ type: 'seek', position: 0 });
    await w.seek(1);
    await w.write(new Blob(['xyz']));
    await w.write({ type: 'write', position: 3, data: new Uint8Array([4, 5, 6]) });
    await w.write({ type: 'truncate', size: 2 });
    await w.truncate(1);
    await w.close();

    let permissionState: PermissionState = await fileHandle.queryPermission();
    permissionState = await fileHandle.requestPermission({ mode: 'read' });
    permissionState = await fileHandle.requestPermission({ mode: 'readwrite' });

    const saveFilePickerOptions = {
        suggestedName: 'image.svg'
    };
    const filePickerOptions = {
        excludeAcceptAllOption: true,
        types: [{ description: 'SVG images', accept: { 'image/svg': ['svg'] } }],
    };

    fileHandle = await showSaveFilePicker();
    fileHandle = await showSaveFilePicker({
        ...filePickerOptions
    });
    fileHandle = await showSaveFilePicker({
        ...saveFilePickerOptions
    });
    fileHandle = await showSaveFilePicker({
        ...saveFilePickerOptions,
        ...filePickerOptions
    });

    const file: File = await fileHandle.getFile();
    new ReadableStream().pipeTo(await fileHandle.createWritable());

    let dirHandle: FileSystemDirectoryHandle = await showDirectoryPicker();
    dirHandle = await showDirectoryPicker({});

    (async function* recursivelyWalkDir(dirHandle: FileSystemDirectoryHandle): AsyncIterable<File> {
        // Disable due to a bug in TSLint https://github.com/palantir/tslint/issues/3997:
        // tslint:disable-next-line await-promise
        for await (const [name, handle] of dirHandle) {
            if (handle.kind === 'file') {
                yield handle.getFile();
            } else {
                yield* recursivelyWalkDir(handle);
            }
        }
    })(dirHandle);

    const maybePath = await dirHandle.resolve(fileHandle);
    if (maybePath) {
        const pathItems: string[] = maybePath;
    }

    fileHandle = await dirHandle.getFileHandle('temp.txt');
    fileHandle = await dirHandle.getFileHandle('temp.txt', { create: true });

    dirHandle = await dirHandle.getDirectoryHandle('subdir', { create: false });

    await dirHandle.removeEntry('temp.txt');
    await dirHandle.removeEntry('nested-dir', { recursive: true });

    dirHandle = await navigator.storage.getDirectory();

    // Testing Chromium <=85 methods, remove when all Chromium-based browsers have upgraded.

    fileHandle = await chooseFileSystemEntries();
    fileHandle = await chooseFileSystemEntries({
        type: 'open-file',
        accepts: [{ description: 'Images', extensions: ['png', 'jpg'], mimeTypes: ['image/*'] }],
        excludeAcceptAllOption: false,
        multiple: false,
    });
    fileHandle = await chooseFileSystemEntries({ type: 'save-file' });
    dirHandle = await chooseFileSystemEntries({ type: 'open-directory' });
    dirHandle = await dirHandle.getDirectory('subdir', { create: true });
    fileHandle = await dirHandle.getFile('file.txt');

    permissionState = await fileHandle.requestPermission({ writable: false });
    permissionState = await fileHandle.requestPermission({ writable: true });

    (async function* recursivelyWalkDir(dirHandle: FileSystemDirectoryHandle): AsyncIterable<File> {
        for await (const handle of dirHandle.getEntries()) {
            if (handle.isFile) {
                yield handle.getFile();
            } else {
                yield* recursivelyWalkDir(handle);
            }
        }
    })(dirHandle);
})();
