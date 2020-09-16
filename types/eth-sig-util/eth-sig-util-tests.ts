import * as util from 'eth-sig-util';

const hex32 = '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
const buffer32 = Buffer.from(hex32, 'hex');

util.concatSig(28, buffer32, buffer32);
util.normalize(hex32);
util.normalize(42);

////////////////////////////////////////////////////////////////////////////////
// Personal message signing utils

const messageSig = util.personalSign(buffer32, { data: 'test data' });
util.recoverPersonalSignature({ data: 'test data', sig: messageSig });
util.extractPublicKey({ data: 'test data', sig: messageSig });

////////////////////////////////////////////////////////////////////////////////
// EIP-712 legacy draft utils

const legacyTypedData = [{
    type: 'uint32',
    name: 'testValue',
    value: 42,
}, {
    type: 'string',
    name: 'testName',
    value: 'test value',
}];
util.typedSignatureHash(legacyTypedData);
const typedSigLegacy = util.signTypedDataLegacy(buffer32, { data: legacyTypedData });
util.recoverTypedSignatureLegacy({ data: legacyTypedData, sig: typedSigLegacy });

////////////////////////////////////////////////////////////////////////////////
// Elliptic curve encryption utils

util.getEncryptionPublicKey(hex32);
const encPubkey = util.getEncryptionPublicKey(buffer32);
const encMessage = util.encrypt(encPubkey, { data: 'test data' }, 'x25519-xsalsa20-poly1305');
util.decrypt(encMessage, buffer32);
util.decrypt(encMessage, hex32);
const encData = util.encryptSafely(encPubkey, { data: legacyTypedData }, 'x25519-xsalsa20-poly1305');
util.decryptSafely(encData, buffer32);
util.decryptSafely(encData, hex32);

////////////////////////////////////////////////////////////////////////////////
// EIP-712 current draft utils

// Sample data from the official EIP-712 example:
// https://github.com/ethereum/EIPs/blob/master/assets/eip-712/Example.js
const typedData = {
    types: {
        EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
        ],
        Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' }
        ],
        Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' }
        ],
    },
    primaryType: 'Mail',
    domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: 1,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    },
    message: {
        from: {
            name: 'Cow',
            wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
            name: 'Bob',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
    },
};
const typedMessage = typedData.message;
const types = typedData.types;
const primaryType = typedData.primaryType;
util.TypedDataUtils.encodeData(primaryType, typedMessage, types);
util.TypedDataUtils.encodeType(primaryType, types);
util.TypedDataUtils.findTypeDependencies(primaryType, types);
util.TypedDataUtils.hashStruct(primaryType, typedMessage, types);
util.TypedDataUtils.hashType(primaryType, types);
util.TypedDataUtils.sanitizeData(typedData);
util.TypedDataUtils.sign(typedData);
const typedSig = util.signTypedData(buffer32, { data: typedData });
util.recoverTypedSignature({ data: typedData, sig: typedSig });
