import Transport from "@ledgerhq/hw-transport-u2f";

// $ExpectType Promise<boolean>
Transport.isSupported();
// $ExpectType Promise<ReadonlyArray<string>>
Transport.list();
// $ExpectType Promise<TransportU2F>
Transport.open("test");

const test = Transport.open("test").then(transport => {
    // $ExpectType void
    transport.setScrambleKey("BTC");

    // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
    transport.exchange(Buffer.from("test", "hex"));

    // $ExpectType Promise<void>
    transport.close();
});
