import TransportWebUSB from '@ledgerhq/hw-transport-webusb';

// $ExpectType Promise<boolean>
TransportWebUSB.isSupported();
// $ExpectType Promise<ReadonlyArray<string>>
TransportWebUSB.list();
// $ExpectType Promise<TransportWebUSB>
TransportWebUSB.request();
// $ExpectType Promise<TransportWebUSB>
TransportWebUSB.open('test');
// $ExpectType Promise<TransportWebUSB>
TransportWebUSB.openConnection();

const test = TransportWebUSB.open('test').then(transport => {
    // $ExpectType void
    transport.setScrambleKey('BTC');

    // $ExpectType Promise<Buffer>
    transport.exchange(Buffer.from('test', 'hex'));

    // $ExpectType Promise<void>
    transport.close();
});
