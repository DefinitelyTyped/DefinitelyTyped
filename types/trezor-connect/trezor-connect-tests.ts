import TrezorConnect from 'trezor-connect';

async function test() {
    await TrezorConnect.getPublicKey({
        path: "m/49'/0'/4'",
        coin: "btc"
    });

    const res = await TrezorConnect.getPublicKey({
        bundle: [
            { path: "m/49'/0'/0'" }, // account 1
            { path: "m/49'/0'/1'" }, // account 2
            { path: "m/49'/0'/2'" }  // account 3
        ]
    });
    if (res.success) {
        res.payload[0].xpub;
    }

    const features = await TrezorConnect.getFeatures();
    if (features.success) {
        features.payload.label;
    }

    TrezorConnect.cancel();
}
