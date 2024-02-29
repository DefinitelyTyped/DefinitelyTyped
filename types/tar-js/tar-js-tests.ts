/// <reference types="node" />
import * as Tar from "tar-js";

const tar = new Tar();
console.log(tar.written === 0);
const out: Uint8Array = tar.out;
console.log(out);
tar.append("foo.txt", "foo");
tar.append("bar.txt", "bar", { mode: 0o755, mtime: 123, uid: 0, gid: 0, owner: "owner", group: "group" });
tar.append("baz.txt", "baz", (out1) => {
    const out2: Uint8Array = out1;
    console.log(out2);
});
tar.append("hoge.txt", "hoge", { mode: 0o755, mtime: 123, uid: 0, gid: 0, owner: "owner", group: "group" }, (out1) => {
    const out2: Uint8Array = out1;
    console.log(out2);
});
tar.append("fuga.txt", new Uint8Array(Buffer.from("fuga")));
tar.clear();
const tar2 = new Tar(1024);
console.log(tar2);
