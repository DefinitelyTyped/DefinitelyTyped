(async () => {
    const filePickerOptions: FilePickerOptions = {
        types: [{ description: "SVG images", accept: { "image/svg": ".svg" } }],
        excludeAcceptAllOption: true,
        startIn: "downloads",
        id: "uniqueFileId"
    };

    const saveFilePickerOptions: SaveFilePickerOptions = {
        suggestedName: "image.svg",
    };

    const openFilePickerOptions: OpenFilePickerOptions = {
        multiple: true
    }

    const directoryPickerOptions: DirectoryPickerOptions = {
        id: "uniqueDirId",
        startIn: undefined,
        mode: "readwrite",
    }

    // showOpenFilePicker

    const [defaultFileHandle]: [FileSystemFileHandle] = await showOpenFilePicker();
    const [fileHandleNoMultipleExplicit]: [FileSystemFileHandle] = await showOpenFilePicker({multiple: false});
    const [fileHandleMultiple1, fileHandleMultiple2]: FileSystemFileHandle[] = await showOpenFilePicker({ multiple: true });
    const fileHandles: FileSystemFileHandle[] = await showOpenFilePicker({
        excludeAcceptAllOption: true,
        multiple: true,
        types: [{ accept: { "image/*": [".png", ".jpg"], "text/plain": ".txt" } }],
    });
    const [fileHandleFromFilePickerOptions]: [FileSystemFileHandle] = await showOpenFilePicker({...filePickerOptions})
    const fileHandlesFromOpenFilePickerOptions: FileSystemFileHandle[] = await showOpenFilePicker({
        ...openFilePickerOptions,
        ...filePickerOptions
    })

    // showSaveFilePicker

    const defaultSaveFileHandle: FileSystemFileHandle = await showSaveFilePicker();
    const saveFileHandle = await showSaveFilePicker({
        excludeAcceptAllOption: true,
        types: [{ description: "Any text", accept: { "text/*": [".txt", '.json'] } }],
    });
    const saveFileHandleFromFilePickerOptions: FileSystemFileHandle = await showSaveFilePicker({
        ...filePickerOptions,
    });
    const saveFileHandlesFromSaveFilePickerOptions = await showSaveFilePicker({
        ...saveFilePickerOptions,
        ...filePickerOptions,
    });


    // showDirectoryFilePicker

    const defaultDirectoryHandle: FileSystemDirectoryHandle = await showDirectoryPicker();
    const directoryHandleStartInDir: FileSystemDirectoryHandle = await showDirectoryPicker({
        id: "uniqueDirIdManuaDir",
        startIn: defaultDirectoryHandle,
    });
    const directoryHandleStartInFile: FileSystemDirectoryHandle = await showDirectoryPicker({
        id: "uniqueDirIdManualFile",
        startIn: defaultFileHandle,
    });
    const directoryHandleFromDirectoryPickerOptions: FileSystemDirectoryHandle = await showDirectoryPicker(directoryPickerOptions);

    // permissions

    const [permissionFileHandle] = await showOpenFilePicker();
    const defaultPermissionState: PermissionState = await permissionFileHandle.queryPermission();
    const permissionStateRead: PermissionState = await permissionFileHandle.requestPermission({ mode: "read" });
    const permissionStateReadWrite: PermissionState = await permissionFileHandle.requestPermission({ mode: "readwrite" });

    // reading, writing, deleting

    const [rwFileHandle] = await showOpenFilePicker();
    const file: File = await rwFileHandle.getFile();

    new ReadableStream().pipeTo(await rwFileHandle.createWritable());

    const fileStream: FileSystemWritableFileStream = await rwFileHandle.createWritable();
    await fileStream.close();

    const fileStreamCustom: FileSystemWritableFileStream = await rwFileHandle.createWritable({ keepExistingData: true });

    await fileStreamCustom.write("abc");
    await fileStreamCustom.write(new Uint8Array([1, 2, 3]));
    await fileStreamCustom.write({ type: "seek", position: 0 });
    await fileStreamCustom.seek(1);
    await fileStreamCustom.write(new Blob(["xyz"]));
    await fileStreamCustom.write({ type: "write", position: 3, data: new Uint8Array([4, 5, 6]) });
    await fileStreamCustom.write({ type: "truncate", size: 2 });
    await fileStreamCustom.truncate(1);
    await fileStreamCustom.close();

    // drag and drop

    addEventListener('drop', async (e) => {
        e.preventDefault();
      
        const dataTransferItemList: DataTransferItemList = e.dataTransfer!.items
        const firstDataTranferItem: DataTransferItem = dataTransferItemList[0]
        const maybeItemAsFileSystemHandle = await firstDataTranferItem.getAsFileSystemHandle()

        if (maybeItemAsFileSystemHandle) {
            const itemAsFileHandle: FileSystemHandle = maybeItemAsFileSystemHandle
        }
    })

    // Testing Chromium <=85 methods, remove when all Chromium-based browsers have upgraded.

    let fileHandle: FileSystemHandle;
    let dirHandle: FileSystemDirectoryHandle;
    let permissionState: PermissionState;

    fileHandle = await chooseFileSystemEntries();
    fileHandle = await chooseFileSystemEntries({
        type: "open-file",
        accepts: [{ description: "Images", extensions: ["png", "jpg"], mimeTypes: ["image/*"] }],
        excludeAcceptAllOption: false,
        multiple: false,
    });
    fileHandle = await chooseFileSystemEntries({ type: "save-file" });
    dirHandle = await chooseFileSystemEntries({ type: "open-directory" });
    dirHandle = await dirHandle.getDirectory("subdir", { create: true });
    fileHandle = await dirHandle.getFile("file.txt");

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
