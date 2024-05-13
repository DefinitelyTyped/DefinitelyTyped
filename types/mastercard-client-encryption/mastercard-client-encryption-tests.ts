import { JweEncryption, EncryptionUtils } from 'mastercard-client-encryption'

const jwe = new JweEncryption({
    mode: 'JWE',
    paths: [
        {
            path: '',
            toEncrypt: [],
            toDecrypt: []
        }
    ],
    encryptedValueFieldName: 'encryptedData',
    encryptionCertificate: '',
})

jwe.encrypt('/', {}, {});
jwe.decrypt({
    request: { url: '' },
    body: {}
});

EncryptionUtils.bytesToString('', 'base64')
EncryptionUtils.bytesToString('', 'hex')

EncryptionUtils.stringToBytes('', 'base64')
EncryptionUtils.stringToBytes('', 'hex')

EncryptionUtils.stringToJson('{"name":""}')
EncryptionUtils.jsonToString({ name: '' })

EncryptionUtils.toByteArray('', 'utf-8')

EncryptionUtils.isSet(null)
EncryptionUtils.isSet(undefined)
EncryptionUtils.isSet('')
EncryptionUtils.isSet([])
EncryptionUtils.isSet(true)
EncryptionUtils.isSet(false)
EncryptionUtils.isSet(1)
EncryptionUtils.isSet(0)

EncryptionUtils.getPrivateKey({
    privateKey: ''
})
EncryptionUtils.getPrivateKey({
    keyStore: '',
    keyStoreAlias: '',
    keyStorePassword: '',
})

// @ts-expect-error
EncryptionUtils.getPrivateKeyFromContent({ keystore: '' })

EncryptionUtils.getPrivateKeyFromContent({ privateKey: '' })

EncryptionUtils.readPublicCertificate('path/to/certificate')

EncryptionUtils.computePublicFingerprint(
    { publicKeyFingerprintType: 'certificate', },
    // @ts-expect-error
    { publicKey: '' },
    'base64'
)

EncryptionUtils.computePublicFingerprint(
    { publicKeyFingerprintType: 'publicKey' },
    // @ts-ignore no public key initialization to test whole public key shape
    { publicKey: '' },
    'base64'
)

EncryptionUtils.nodeVersionSupportsJWE()

EncryptionUtils.checkConfigFieldsArePopulated(
    { paths: [] },
    ['path'],
    ['field'],
    ['header']
)

EncryptionUtils.validateRootMapping({
    paths: [
        {
            path: '/',
            toEncrypt: [],
            toDecrypt: []
        }
    ]
})

EncryptionUtils.hasConfig({
    paths: []
}, '/')

EncryptionUtils.elemFromPath('path.to.object', {
    to: {
        object: ''
    }
})

EncryptionUtils.isJsonRoot({})

EncryptionUtils.computeBody(
    [
        { element: '', obj: '' }
    ],
    {},
    []
)

EncryptionUtils.addEncryptedDataToBody(
    {},
    { element: '', obj: '', },
    '',
    {}
)

