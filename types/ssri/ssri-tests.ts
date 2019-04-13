/// <reference types="node" />

import ssri = require('ssri');
import { Hash as CryptoHash } from "crypto";
import { createReadStream } from 'fs';
import { Transform } from 'stream';

const integrityString = 'sha512-9KhgCRIx/AmzC8xqYJTZRrnO8OW2Pxyl2DIMZSBOr0oDvtEFyht3xpp71j/r/pAe1DM+JI/A+line3jUBgzQ7A==?foo';
const hash = { algorithm: 'sha512', digest: 'c0ffee', options: [] };

const integrity = {
    sha1: [{ algorithm: 'sha1', digest: 'deadbeef', options: [] }],
    sha512: [
        { algorithm: 'sha512', digest: 'c0ffee', options: [] },
        { algorithm: 'sha512', digest: 'bad1dea', options: ['foo'] }
    ],
};

const parseString1: ssri.IntegrityMap = ssri.parse(integrityString);
const parseHash: ssri.IntegrityMap = ssri.parse(hash);
const parseIntegrity: ssri.IntegrityMap = ssri.parse(integrity);
const parseStringSingle: ssri.Hash = ssri.parse(integrityString, { single: true, strict: true });
const parseStringWithOptions: ssri.IntegrityMap = ssri.parse(integrityString, { strict: true });

const stringifyString: string = ssri.stringify('\n\rsha512-foo\n\t\tsha384-bar');
const stringifyHash: string = ssri.stringify(hash);
const stringifyIntegrity: string = ssri.stringify(integrity);
const stringifyStringWithOptions: string = ssri.stringify(
    '\n\rsha512-foo\n\t\tsha384-bar',
    { strict: false, sep: ',' }
);

const integrityConcatString: ssri.IntegrityMap = new ssri.Integrity().concat(integrityString);
const integrityConcatHash: ssri.IntegrityMap = new ssri.Integrity().concat(hash);
const integrityConcatIntegrity: ssri.IntegrityMap = new ssri.Integrity().concat(integrity);
const integrityConcatStringWithOptions: ssri.IntegrityMap = new ssri.Integrity().concat(
    integrityString,
    { strict: true }
);

const integrityToString: string = new ssri.Integrity().toString();
const integrityToStringWithOptions: string = new ssri.Integrity().toString({ strict: false, sep: ',' });

const integrityToJson: string = new ssri.Integrity().toJSON();

const integrityMatchString: ssri.Hash | false = new ssri.Integrity().match(integrityString);
const integrityMatchHash: ssri.Hash | false = new ssri.Integrity().match(hash);
const integrityMatchIntegrity: ssri.Hash | false = new ssri.Integrity().match(integrity);
const integrityMatchStringWithOptions: ssri.Hash | false = new ssri.Integrity().match(
    integrityString,
    { strict: true, pickAlgorithm: (a, b) => a }
);

const integrityPickAlgorithm: string = new ssri.Integrity().pickAlgorithm();
const integrityPickAlgorithmWithOptions: string = new ssri.Integrity().pickAlgorithm({ pickAlgorithm: (a, b) => a });

const integrityHexDigest: string = new ssri.Integrity().hexDigest();

const fromHex: ssri.IntegrityMap = ssri.fromHex('75e69d6de79f', 'sha1');
const fromHexSingle: ssri.Hash = ssri.fromHex(
    '75e69d6de79f',
    'sha1',
    { single: true, strict: false, options: ['sriOpt'] }
);
const fromHexWithOptions: ssri.IntegrityMap = ssri.fromHex(
    '75e69d6de79f',
    'sha1',
    { strict: false, options: ['sriOpt'] }
);

const fromDataString: ssri.IntegrityMap = ssri.fromData('foobarbaz');
const fromDataBuffer: ssri.IntegrityMap = ssri.fromData(Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]));
const fromDataStringWithOptions: ssri.IntegrityMap = ssri.fromData(
    'foobarbaz', {
        algorithms: ['sha256', 'sha384', 'sha512'],
        strict: true,
        options: ['sriOpt']
    }
);

const fromStream: PromiseLike<ssri.IntegrityMap> = ssri.fromStream(createReadStream('index.js'));
const fromStreamWithOptions: PromiseLike<ssri.IntegrityMap> = ssri.fromStream(
    createReadStream('index.js'), {
        algorithms: ['sha1', 'sha512'],
        strict: true,
        options: ['sriOpt'],
        Promise
    }
);

const create: CryptoHash = ssri.create();
const createWithOptions: CryptoHash = ssri.create({
    algorithms: ['sha1', 'sha512'],
    strict: true,
    options: ['sriOpt']
});

const checkDataString: ssri.Hash | false = ssri.checkData('data', integrityString);
const checkDataBuffer: ssri.Hash | false = ssri.checkData(
    Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]),
    integrityString
);
const checkDataHash: ssri.Hash | false = ssri.checkData('data', hash);
const checkDataIntegrity: ssri.Hash | false = ssri.checkData('data', integrity);
const checkDataStringWithOptions: ssri.Hash | false = ssri.checkData(
    'data',
    integrityString,
    { strict: true, pickAlgorithm: (a, b) => a, error: true, size: 1 }
);

const checkStreamString: PromiseLike<ssri.Hash> = ssri.checkStream(createReadStream('index.js'), integrityString);
const checkStreamHash: PromiseLike<ssri.Hash> = ssri.checkStream(createReadStream('index.js'), hash);
const checkStreamIntegrity: PromiseLike<ssri.Hash> = ssri.checkStream(createReadStream('index.js'), integrity);
const checkStreamWithOptions: PromiseLike<ssri.Hash> = ssri.checkStream(
    createReadStream('index.js'),
    integrityString,
    {
        strict: true,
        options: ['sriOpt'],
        pickAlgorithm: (a, b) => a,
        size: 1,
        Promise
    }
);

const integrityStream: Transform = ssri.integrityStream();
const integrityStreamWithOptions: Transform = ssri.integrityStream({
    single: true,
    strict: true,
    options: ['sriOpt'],
    pickAlgorithm: (a, b) => a,
    size: 1,
    integrity,
    algorithms: ['sha1', 'sha256']
});
