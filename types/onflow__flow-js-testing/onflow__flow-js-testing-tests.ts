import {
    getAccountAddress,
    createAccount,
    deployContractByName,
    deployContract,
    HashAlgorithm,
    SignatureAlgorithm,
    pubFlowKey,
    emulator,
    getFlowBalance,
    mintFlow,
    init,
    getBlockOffset,
    setBlockOffset,
    getTimestampOffset,
    setTimestampOffset,
    shallPass,
    shallRevert,
    shallResolve,
    executeScript,
    sendTransaction,
    getTemplate,
    getContractCode,
    getTransactionCode,
    getScriptCode,
    isAddress,
} from '@onflow/flow-js-testing';

/** Accounts */

// $ExpectType Promise<string>
getAccountAddress('Will');

// @ts-expect-error
getAccountAddress(1);

// $ExpectType Promise<string>
createAccount({ name: 'Will' });

// $ExpectType Promise<string>
createAccount({ name: 'Will', keys: [{ privateKey: '...private key...' }] });

async () => {
    // $ExpectType Promise<string>
    createAccount({ name: 'Will', keys: [await pubFlowKey({ privateKey: '...private key...' })] });
};

// @ts-expect-error
createAccount(1);

/** Contracts */

// $ExpectType Promise<TransactionResponse>
deployContractByName({ name: 'HelloWorld' });

// $ExpectType Promise<TransactionResponse>
deployContractByName({
    name: 'HelloWorld',
    to: '0x02fadds834n31g8e',
    addressMap: { '0xHelloWorld': '0x02fadds834n31g8e' },
    args: ['Hello World'],
    update: false,
});

// @ts-expect-error
deployContractByName({});

// $ExpectType Promise<TransactionResponse>
deployContract({ name: 'HelloWorld', code: '...contract code...' });

// $ExpectType Promise<TransactionResponse>
deployContract({
    name: 'HelloWorld',
    code: '...contract code...',
    to: '0x02fadds834n31g8e',
    addressMap: { '0xHelloWorld': '0x02fadds834n31g8e' },
    args: ['Hello World'],
    update: false,
});

// @ts-expect-error
deployContract({});

/** Cryptography */

// $ExpectType HashAlgorithm
HashAlgorithm;

// $ExpectType SignatureAlgorithm
SignatureAlgorithm;

// $ExpectType Promise<Buffer>
pubFlowKey({ privateKey: '...private key...' });

// $ExpectType Promise<Buffer>
pubFlowKey({
    privateKey: '...private key...',
    hashAlgorithm: HashAlgorithm.SHA2_256,
    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256,
    weight: 100,
});

// @ts-expect-error
pubFlowKey({});

/** Emulator */

// $ExpectType Promise<boolean>
emulator.start();

// $ExpectType Promise<boolean>
emulator.start({
    logging: true,
    flags: '',
    adminPort: 123,
    restPort: 456,
    grpcPort: 789,
});

// @ts-expect-error
emulator.start(1);

// $ExpectType Promise<boolean>
emulator.stop();

// $ExpectType void
emulator.setLogging(true);

// @ts-expect-error
emulator.setLogging(1);

/** FLOW Management */

// $ExpectType Promise<string>
getFlowBalance('0x02fadds834n31g8e');

// @ts-expect-error
getFlowBalance(1);

// $ExpectType Promise<TransactionResponse>
mintFlow('0x02fadds834n31g8e', '1');

// @ts-expect-error
mintFlow(1, '1');

// @ts-expect-error
mintFlow('0x02fadds834n31g8e', 1);

/** Init */

// $ExpectType Promise<boolean>
init('./');

// $ExpectType Promise<boolean>
init('./', { pkey: '...private key...' });

// @ts-expect-error
init(1);

/** Environment */

// $ExpectType Promise<string>
getBlockOffset();

// $ExpectType Promise<string>
setBlockOffset('1');

// @ts-expect-error
setBlockOffset(1);

// $ExpectType Promise<string>
getTimestampOffset();

// $ExpectType Promise<string>
setTimestampOffset('1');

// @ts-expect-error
setTimestampOffset(1);

/** Jest Helpers */

// $ExpectType Promise<TransactionResponse>
shallPass(sendTransaction('set_greeting', [], ['Hello World']));

// @ts-expect-error
shallPass(1);

// $ExpectType Promise<TransactionResponse>
shallRevert(sendTransaction('set_greeting', [], ['Hello World']));

// @ts-expect-error
shallRevert(1);

// $ExpectType Promise<ScriptResponse>
shallResolve(executeScript('get_greeting'));

// @ts-expect-error
shallResolve(1);

/** Scripts */

// $ExpectType Promise<ScriptResponse>
executeScript({ name: 'get_greeting', args: ['0x02fadds834n31g8e'], transformers: [(code: string): string => code] });

// $ExpectType Promise<ScriptResponse>
executeScript({ code: '...script code...', args: ['0x02fadds834n31g8e'] });

// $ExpectType Promise<ScriptResponse>
executeScript('get_greeting', ['0x02fadds834n31g8e']);

// @ts-expect-error
executeScript({});

// @ts-expect-error
executeScript('get_greeting', 1);

/** Transactions */

// $ExpectType Promise<TransactionResponse>
sendTransaction({
    name: 'set_greeting',
    args: ['Hello World'],
    signers: ['0x02fadds834n31g8e'],
    addressMap: { '0xHelloWorld': '0x02fadds834n31g8e' },
});

// $ExpectType Promise<TransactionResponse>
sendTransaction({
    name: 'set_greeting',
    args: ['Hello World'],
    signers: [{ addr: '0x02fadds834n31g8e' }],
    addressMap: { '0xHelloWorld': '0x02fadds834n31g8e' },
});

// $ExpectType Promise<TransactionResponse>
sendTransaction({ code: '...transaction code...', args: ['Hello World'], signers: ['0x02fadds834n31g8e'] });

// $ExpectType Promise<TransactionResponse>
sendTransaction('set_greeting', [], ['Hello World']);

// @ts-expect-error
sendTransaction({});

// @ts-expect-error
sendTransaction('set_greeting', 1);

/** Templates */

// $ExpectType Promise<string>
getTemplate('../cadence/contracts.HelloWorld.cdc');

// $ExpectType Promise<string>
getTemplate('../cadence/contracts.HelloWorld.cdc', { '0xHelloWorld': '0x02fadds834n31g8e' });

// @ts-expect-error
getTemplate('../cadence/contracts.HelloWorld.cdc', 1);

// $ExpectType Promise<string>
getContractCode({ name: 'HelloWorld' });

// $ExpectType Promise<string>
getContractCode({ name: 'HelloWorld', addressMap: { '0xHelloMars': '0x02fadds834n31g8e' } });

// @ts-expect-error
getContractCode({});

// $ExpectType Promise<string>
getTransactionCode({ name: 'set_greeting' });

// $ExpectType Promise<string>
getTransactionCode({ name: 'set_greeting', addressMap: { '0xHelloWorld': '0x02fadds834n31g8e' } });

// @ts-expect-error
getTransactionCode({});

// $ExpectType Promise<string>
getScriptCode({ name: 'get_greeting' });

// $ExpectType Promise<string>
getScriptCode({ name: 'get_greeting', addressMap: { '0xHelloWorld': '0x02fadds834n31g8e' } });

// @ts-expect-error
getScriptCode({});

/** Utilities */

// $ExpectType boolean
isAddress('0x02fadds834n31g8e');
