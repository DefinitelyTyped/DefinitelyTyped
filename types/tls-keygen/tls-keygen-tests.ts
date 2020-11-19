import * as TlsKeygen from 'tls-keygen';

async function testKeygen() {
    const {key, cert} = await TlsKeygen.keygen({
        key: TlsKeygen.defaultKey,
        cert: TlsKeygen.defaultCert,
        commonName: TlsKeygen.defaultCommonName,
        subjectAltName: TlsKeygen.defaultSubjectAltName,
        entrust: false,
    });

    let temp: string = key;
    temp = cert;
}

async function testEphemeral() {
    const {key, cert} = await TlsKeygen.ephemeral({
        key: TlsKeygen.defaultKey,
        cert: TlsKeygen.defaultCert,
        commonName: TlsKeygen.defaultCommonName,
        subjectAltName: TlsKeygen.defaultSubjectAltName,
        entrust: false,
    });

    let temp: Buffer = key;
    temp = cert;
}

testKeygen();
testEphemeral();
