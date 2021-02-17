import AppBtc from '@ledgerhq/hw-app-btc';
import Transport from '@ledgerhq/hw-transport';

const transport = new Transport();

// $ExpectType AppBtc
const btc = new AppBtc(transport);

// $ExpectType Promise<{ publicKey: string; bitcoinAddress: string; chainCode: string; }>
btc.getWalletPublicKey('');

// $ExpectType Promise<string>
btc.getTrustedInput(0, { version: Buffer.alloc(0), inputs: [] });

btc.startUntrustedHashTransactionInput(
    true,
    { version: Buffer.alloc(0), inputs: [] },
    [{ trustedInput: false, value: Buffer.alloc(0) }],
    [''],
);

btc.startUntrustedHashTransactionInputRaw(true, true, Buffer.alloc(0), ['']);
