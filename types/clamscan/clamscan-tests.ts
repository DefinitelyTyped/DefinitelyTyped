import NodeClam = require("clamscan");
import * as http from "http";
import * as https from "https";
import { PassThrough, Readable, Writable } from "stream";

const fakeVirusUrl = "https://secure.eicar.org/eicar.com.txt";

(async () => {
    // $ExpectType NodeClam
    const clamscan = await new NodeClam().init({
        debugMode: false,
        clamdscan: {
            bypassTest: true,
            host: "localhost",
            port: 3310,
        },
    });
    // $ExpectType string
    const version = await clamscan.getVersion();

    const response = await new Promise<http.IncomingMessage>((resolve, reject) => {
        https.get(fakeVirusUrl, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Request failed with status code ${res.statusCode}`));
                return;
            }
            resolve(res);
        }).on("error", reject);
    });

    const { statusCode } = response;
    if (statusCode !== 200) {
        console.error(`Request failed with status code ${statusCode}`);
        return;
    }

    const data: Readable = response;
    // $ExpectType Response<{ file: string; isInfected: boolean; }>
    await clamscan.scanStream(data.pipe(new PassThrough()));
})();
