import vfs from "node:vfs";

{
    const myVfs = vfs.create();
    myVfs.mkdirSync("/dir", { recursive: true });
    myVfs.writeFileSync("/dir/hello.txt", "Hello, VFS!");

    console.log(myVfs.readFileSync("/dir/hello.txt", "utf8")); // 'Hello, VFS!'
}

{
    // Default in-memory provider
    const memoryVfs: vfs.VirtualFileSystem = vfs.create();

    // Explicit provider
    const realVfs: vfs.VirtualFileSystem = vfs.create(new vfs.RealFSProvider("/tmp/sandbox"));
}

void async function(): Promise<string> {
    const myVfs = vfs.create();
    await myVfs.promises.writeFile("/file.txt", "hello");
    const data = await myVfs.promises.readFile("/file.txt", "utf8");
    return data;
};

{
    class StaticProvider extends vfs.VirtualProvider {
        get readonly() {
            return true;
        }

        statSync(path: string) {/* ... */}
        openSync(path: string, flags: string) {/* ... */}
        readdirSync(path: string, options: object) {/* ... */}
        // ...
    }
}

{
    const provider = new vfs.MemoryProvider();
    const myVfs = vfs.create(provider);
    myVfs.writeFileSync("/seed.txt", "initial");

    provider.setReadOnly();

    myVfs.writeFileSync("/x.txt", "fail"); // throws EROFS
}

{
    const realVfs = vfs.create(new vfs.RealFSProvider("/tmp/sandbox"));
    realVfs.writeFileSync("/file.txt", "hello"); // writes /tmp/sandbox/file.txt
}
