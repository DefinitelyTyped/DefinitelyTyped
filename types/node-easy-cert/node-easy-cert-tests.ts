import CertManager = require('node-easy-cert');

const options = {
    rootDirPath: '/the/full/path/of/the/dir',
    defaultCertAttrs: [
        { name: 'countryName', value: 'CN' },
        { name: 'organizationName', value: 'CertManager' },
        { shortName: 'ST', value: 'SH' },
        { shortName: 'OU', value: 'CertManager SSL' },
    ],
};

const crtMgr = new CertManager(options);

/*
 * generateRootCA
 */

const rootCaOptions = {
    commonName: 'the-name-you-like',
};

crtMgr.generateRootCA(rootCaOptions, (err, keyPath, certPath) => {
    if (err === 'ROOT_CA_EXISTED') {
        // log that overwrite should be specified to force generation
    }

    if (err === 'ROOT_CA_COMMON_NAME_UNSPECIFIED') {
        // can't append in typescript :)
    }

    // log keyPath and certPath to allow users to trust them
});

/*
 * getCertificate
 */

crtMgr.getCertificate('localhost', (err, keyContent, crtContent) => {
    if (err === 'ROOT_CA_NOT_EXISTS') {
        // log that the user should call generateRootCA before trying to generate certificates.
    }

    // log keyContent, crtContent
});

/*
 * getRootDirPath
 */

const rootPath = crtMgr.getRootDirPath();

/*
 * getRootCAFilePath
 */

const rootCAFile = crtMgr.getRootCAFilePath();

/*
 * isRootCAFileExists
 */

if (crtMgr.isRootCAFileExists()) {
    // generate certs
}

/*
 * ifRootCATrusted
 */

if (!crtMgr.ifRootCATrusted()) {
    // ask user to trust CA certificate
}

/*
 * clearCerts
 */

crtMgr.clearCerts();
crtMgr.clearCerts(() => {
    // all certificates cleared!
});
