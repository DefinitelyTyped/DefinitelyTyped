import Transport from "@ledgerhq/hw-transport";

// $ExpectType Promise<boolean>
Transport.isSupported();
// $ExpectType Promise<ReadonlyArray<string>>
Transport.list();
// $ExpectType Promise<Transport<string>>
Transport.open("test");

const test = Transport.open("test").then(transport => {
    // $ExpectType void
    transport.setScrambleKey('test');

    // $ExpectType Promise<Buffer>
    transport.exchange(Buffer.from("test", "hex"));

    // $ExpectType Promise<void>
    transport.close();
});
