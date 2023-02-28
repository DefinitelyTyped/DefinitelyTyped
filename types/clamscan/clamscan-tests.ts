import NodeClam = require('clamscan');
import { PassThrough, Readable } from 'stream';

import axios from 'axios';

const fakeVirusUrl = 'https://secure.eicar.org/eicar.com.txt';

(async () => {
    try {
        const clamscan = await new NodeClam().init({
            debugMode: false,
            clamdscan: {
                bypassTest: true,
                host: 'localhost',
                port: 3310,
            },
        });

        const version = await clamscan.getVersion();
        console.log('Version: ', version);

        const { data } = await axios.get<Readable>(fakeVirusUrl, {
            responseType: 'stream',
        });

        const { isInfected, viruses } = await clamscan.scanStream(data.pipe(new PassThrough()));

        if (isInfected) {
            console.log(
                `You've downloaded a virus (${viruses.join(
                    '',
                )})! Don't worry, it's only a test one and is not malicious...`,
            );
        } else if (isInfected === null) {
            console.log("Something didn't work right...");
        } else if (!isInfected) {
            console.log(`The file (${fakeVirusUrl}) you downloaded was just fine... Carry on...`);
        }
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
