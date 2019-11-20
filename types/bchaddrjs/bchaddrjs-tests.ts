import * as bchaddr from 'bchaddrjs';

const formatLegacy: string = bchaddr.Format.Legacy;
const formatBitpay: string = bchaddr.Format.Bitpay;
const formatCashaddr: string = bchaddr.Format.Cashaddr;
const networkMainnet: string = bchaddr.Network.Mainnet;
const networkTestnet: string = bchaddr.Network.Testnet;
const typeP2PKH: string = bchaddr.Type.P2PKH;
const typeP2SH: string = bchaddr.Type.P2SH;
const someAddress = 'qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk';
const someFormat: string = bchaddr.detectAddressFormat(someAddress);
const someNetwork: string = bchaddr.detectAddressNetwork(someAddress);
const someType: string = bchaddr.detectAddressType(someAddress);
let someBoolean: boolean;
someBoolean = bchaddr.isValidAddress(someAddress);
someBoolean = bchaddr.isLegacyAddress(someAddress);
someBoolean = bchaddr.isBitpayAddress(someAddress);
someBoolean = bchaddr.isCashAddress(someAddress);
someBoolean = bchaddr.isMainnetAddress(someAddress);
someBoolean = bchaddr.isTestnetAddress(someAddress);
someBoolean = bchaddr.isP2PKHAddress(someAddress);
someBoolean = bchaddr.isP2SHAddress(someAddress);
let someOtherAddress: string;
someOtherAddress = bchaddr.toLegacyAddress(someAddress);
someOtherAddress = bchaddr.toBitpayAddress(someAddress);
someOtherAddress = bchaddr.toCashAddress(someAddress);
const someInvalidInput = 'abcdefghijklmn';
try {
    bchaddr.detectAddressFormat(someInvalidInput);
} catch (err) {
    if (err instanceof bchaddr.InvalidAddressError) {
        // As expected.
    } else {
        throw new bchaddr.InvalidAddressError();
    }
}
