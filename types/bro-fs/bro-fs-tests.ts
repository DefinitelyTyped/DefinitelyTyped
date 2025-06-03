import * as fs from "bro-fs";

!(async () => {
    // $ExpectType FileSystem
    await fs.init({ type: window.TEMPORARY, bytes: 5 * 1024 * 1024 });

    // $ExpectType FileSystemDirectoryEntry
    await fs.mkdir("dir");

    // $ExpectType FileSystemFileEntry
    await fs.writeFile("dir/file.txt", "hello world");

    // $ExpectType string
    const content = await fs.readFile("dir/file.txt", { type: "Text" });
    console.log(content); // => "hello world"

    // $ExpectType FileSystemEntry
    await fs.getEntry("dir/file.txt");

    // $ExpectType FileSystemEntry
    await fs.getEntry("dir/file-2.txt");

    // $ExpectType boolean
    await fs.exists("dir/file.txt");

    // $ExpectType string
    await fs.getUrl("dir/file.txt");

    // $ExpectType ReadableStream<any>
    await fs.createReadStream("dir/file.txt");

    // $ExpectType WritableStream<any>
    await fs.createWriteStream("dir/file.txt");

    // $ExpectType StatObject
    await fs.stat("dir/file.txt");

    // $ExpectType FileSystemEntry[]
    await fs.readdir("dir");

    // $ExpectType FileSystemEntryWithChildren[]
    await fs.readdir("dir", { deep: true });

    // $ExpectType void
    await fs.clear();
})();
