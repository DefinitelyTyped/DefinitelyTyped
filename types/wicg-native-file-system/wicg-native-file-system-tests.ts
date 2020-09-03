(async () => {
    let [fileHandle]: [FileSystemFileHandle] = await showOpenFilePicker();
    [fileHandle] = await showOpenFilePicker({ multiple: false });
    const fileHandles: FileSystemFileHandle[] = await showOpenFilePicker({
        excludeAcceptAllOption: true,
        multiple: true,
        types: [{ accept: { 'image/*': ['png', 'gif', 'jpeg', 'jpg'] } }],
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
    permissionState = await fileHandle.requestPermission({ writable: true });

    fileHandle = await showSaveFilePicker();
    fileHandle = await showSaveFilePicker({
        excludeAcceptAllOption: true,
        types: [{ description: 'SVG images', accept: { 'image/svg': ['svg'] } }],
    });

    const file: File = await fileHandle.getFile();
    new ReadableStream().pipeTo(await fileHandle.createWritable());

    let dirHandle: FileSystemDirectoryHandle = await showDirectoryPicker();
    dirHandle = await showDirectoryPicker({});

    (async function* recursivelyWalkDir(dirHandle: FileSystemDirectoryHandle): AsyncIterable<File> {
        for await (const handle of dirHandle.getEntries()) {
            if (handle.isFile) {
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

    fileHandle = await dirHandle.getFile('temp.txt');
    fileHandle = await dirHandle.getFile('temp.txt', { create: true });

    dirHandle = await dirHandle.getDirectory('subdir', { create: false });

    await dirHandle.removeEntry('temp.txt');
    await dirHandle.removeEntry('nested-dir', { recursive: true });

    dirHandle = await getOriginPrivateDirectory();

    // Testing old / stable Chrome methods, remove when they're removed.

    fileHandle = await chooseFileSystemEntries();
    fileHandle = await chooseFileSystemEntries({
        type: 'open-file',
        accepts: [{ description: 'Images', extensions: ['png', 'jpg'], mimeTypes: ['image/*'] }],
        excludeAcceptAllOption: false,
        multiple: false,
    });
    fileHandle = await chooseFileSystemEntries({ type: 'save-file' });
    dirHandle = await chooseFileSystemEntries({ type: 'open-directory' });
    dirHandle = await FileSystemDirectoryHandle.getSystemDirectory({ type: 'sandbox' });
})();
