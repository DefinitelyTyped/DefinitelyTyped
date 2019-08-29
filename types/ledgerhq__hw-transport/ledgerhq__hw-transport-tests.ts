import Transport from '@ledgerhq/hw-transport';

// $ExpectType Promise<boolean>
Transport.isSupported();
// $ExpectType Promise<ReadonlyArray<string>>
Transport.list();
// $ExpectType Promise<Transport<string>>
Transport.open('test');

const test = Transport.open('test').then(transport => {
    // $ExpectType void
    transport.setScrambleKey('test');

    // $ExpectType Promise<Buffer>
    transport.exchange(Buffer.from('test', 'hex'));

    // $ExpectType Promise<Buffer>
    transport.send(0, 1, 2, 3);
    // $ExpectType Promise<Buffer>
    transport.send(0, 1, 2, 3, Buffer.from('abcd', 'hex'));
    // $ExpectType Promise<Buffer>
    transport.send(0, 1, 2, 3, Buffer.from('abcd', 'hex'), [0x1111, 0x9000]);

    // $ExpectType Promise<void>
    transport.close();
});
