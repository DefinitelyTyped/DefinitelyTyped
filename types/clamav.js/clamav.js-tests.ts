import * as clamavjs from 'clamav.js';

import { Stream } from 'stream';

clamavjs.ping(3310, 'localhost', 30, error => {});
clamavjs.version(3310, 'localhost', 30, error => {});

const scanner = clamavjs.createScanner(3310, 'localhost');
scanner.host;
scanner.port;
scanner.scan('abc123', (error: Error, object: any, result: string) => {});

clamavjs.clamavfilescan(3310, 'localhost', 'file.txt', (error: Error, object: any, result: string) => {});
clamavjs.clamavpathscan(3310, 'localhost', 'file.txt', (error: Error, object: any, result: string) => {});
clamavjs.clamavstreamscan(
    3310,
    'localhost',
    new Stream(),
    stream => {},
    'any',
    (error: Error, object: any, result: string) => {},
);
