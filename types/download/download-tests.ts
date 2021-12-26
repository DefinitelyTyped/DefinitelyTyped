import * as fs from "fs";
import download = require("download");

// test type exports
type DownloadOptions = download.DownloadOptions;

download("http://unicorn.com/foo.jpg"); // $ExpectType Promise<Buffer> & GotEmitter & Duplex
download("http://unicorn.com/foo.jpg", "dist"); // $ExpectType Promise<Buffer> & GotEmitter & Duplex
download("http://unicorn.com/foo.jpg", "dist", { extract: true }); // $ExpectType Promise<Buffer> & GotEmitter & Duplex
download("http://unicorn.com/foo.jpg", "dist", { filename: "foo" }); // $ExpectType Promise<Buffer> & GotEmitter & Duplex
download("http://unicorn.com/foo.jpg", { extract: true }); // $ExpectType Promise<Buffer> & GotEmitter & Duplex
download("http://unicorn.com/foo.jpg", { filename: "foo" }); // $ExpectType Promise<Buffer> & GotEmitter & Duplex

download("http://unicorn.com/foo.jpg").then(data => {
    fs.writeFileSync("dist/foo.jpg", data);
});

download("unicorn.com/foo.jpg").pipe(fs.createWriteStream("dist/foo.jpg"));

// Got options
download("unicorn.com/foo.jpg", "dest", {
    decompress: true,
    encoding: "utf8",
    followRedirect: true,
    query: "",
    retries: (retry, error) => 4,
    timeout: {
        connect: 20,
        request: 20,
        socket: 20,
    },
    useElectronNet: true,
});

// Decompress options
download("unicorn.com/foo.jpg", "dest", {
    filter: file => true,
    map: file => file,
    plugins: [],
    strip: 1,
});
