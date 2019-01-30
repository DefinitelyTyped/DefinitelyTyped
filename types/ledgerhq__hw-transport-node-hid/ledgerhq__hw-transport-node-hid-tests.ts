import Transport from "@ledgerhq/hw-transport-node-hid";

// $ExpectType Promise<boolean>
Transport.isSupported();
// $ExpectType Promise<ReadonlyArray<string>>
Transport.list();
// $ExpectType Promise<TransportNodeHid>
Transport.open("test");

const test = Transport.open("test").then(transport => {
    // $ExpectType void
    transport.setScrambleKey();

    // $ExpectType Promise<Buffer>
    transport.exchange(Buffer.from("test", "hex"));

    // $ExpectType Promise<void>
    transport.close();
});
