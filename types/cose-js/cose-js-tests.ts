import cose = require('cose-js');

async function signMac() {
    const plaintext = 'Important message!';
    const headers = {
        p: { alg: 'SHA-256_64' },
        u: { kid: 'our-secret' },
    };
    const recipent = {
        key: Buffer.from('231f4c4d4d3051fdc2ec0a3851d5b383', 'hex'),
    };
    const buf = await cose.mac.create(headers, plaintext, recipent);
    console.log('MACed message: ' + buf.toString('hex'));
}

async function verifyMac() {
    const key = Buffer.from('231f4c4d4d3051fdc2ec0a3851d5b383', 'hex');
    const COSEMessage = Buffer.from(
        'd18443a10104a1044a6f75722d73656372657472496d706f7274616e74206d65737361676521488894981d4aa5d614',
        'hex',
    );
    const buf2 = await cose.mac.read(COSEMessage, key);
    console.log('Verified message: ' + buf2.toString('utf8'));
}

async function sign() {
    const plaintext = 'Important message!';
    const headers = {
        p: { alg: 'ES256' },
        u: { kid: '11' },
    };
    const signer = {
        key: {
            d: Buffer.from('6c1382765aec5358f117733d281c1c7bdc39884d04a45a1e6c67c858bc206c19', 'hex'),
        },
    };
    const buf = await cose.sign.create(headers, plaintext, signer);
    console.log('Signed message: ' + buf.toString('hex'));
}

async function verify() {
    const verifier = {
        key: {
            x: Buffer.from('143329cce7868e416927599cf65a34f3ce2ffda55a7eca69ed8919a394d42f0f', 'hex'),
            y: Buffer.from('60f7f1a780d8a783bfb7a2dd6b2796e8128dbbcef9d3d168db9529971a36e7b9', 'hex'),
        },
    };
    const COSEMessage = Buffer.from(
        'd28443a10126a10442313172496d706f7274616e74206d6573736167652158404c2b6b66dfedc4cfef0f221cf7ac7f95087a4c4245fef0063a0fd4' +
            '014b670f642d31e26d38345bb4efcdc7ded3083ab4fe71b62a23f766d83785f044b20534f9',
        'hex',
    );
    const buf = await cose.sign.verify(COSEMessage, verifier);
    console.log('Verified message: ' + buf.toString('utf8'));
}

async function encrypt() {
    const plaintext = 'Secret message!';
    const headers = {
        p: { alg: 'A128GCM' },
        u: { kid: 'our-secret' },
    };
    const recipient = {
        key: Buffer.from('231f4c4d4d3051fdc2ec0a3851d5b383', 'hex'),
    };
    const buf = await cose.encrypt.create(headers, plaintext, recipient);
    console.log('Encrypted message: ' + buf.toString('hex'));
}

async function decrypt() {
    const key = Buffer.from('231f4c4d4d3051fdc2ec0a3851d5b383', 'hex');
    const COSEMessage = Buffer.from(
        'd8608443a10101a2044a6f75722d736563726574054c291a40271067ff57b1623c30581f23b663aaf9dfb91c5a39a175118ad7d72d416385b1b610e28b3b3fd824a397818340a040',
        'hex',
    );
    const buf = await cose.encrypt.read(COSEMessage, key);
    console.log('Protected message: ' + buf.toString('utf8'));
}

signMac();
verifyMac();
sign();
verify();
encrypt();
decrypt();
