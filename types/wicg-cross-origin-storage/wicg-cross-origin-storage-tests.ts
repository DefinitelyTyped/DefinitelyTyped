const hash: CrossOriginStorageRequestFileHandleHash = {
    algorithm: "SHA-256",
    value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
};

async function testLookup() {
    const handle: FileSystemFileHandle = await navigator.crossOriginStorage.requestFileHandle(hash);
    const file: File = await handle.getFile();
}

async function testCreate() {
    const handle: FileSystemFileHandle = await navigator.crossOriginStorage.requestFileHandle(hash, {
        create: true,
    });
    const writable = await handle.createWritable();
    await writable.write(new Blob(["export default 1;"], { type: "text/javascript" }));
    await writable.close();
}

async function testCreateWithOrigins() {
    await navigator.crossOriginStorage.requestFileHandle(hash, { create: true, origins: "*" });
    await navigator.crossOriginStorage.requestFileHandle(hash, {
        create: true,
        origins: ["https://example.com", "https://example.org"],
    });
}

async function testWorkerNavigator(workerNavigator: WorkerNavigator) {
    const handle: FileSystemFileHandle = await workerNavigator.crossOriginStorage.requestFileHandle(hash);
}
