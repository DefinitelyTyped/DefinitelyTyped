import { pgp } from "isomorphic-git__openpgp-plugin";

async function main() {
    const { signature } = await pgp.sign({
        payload: "...",
        secretKey: "...",
    });

    // $ExpectType string
    signature;

    const { invalid, valid } = await pgp.verify({
        payload: "...",
        publicKey: "...",
        signature,
    });

    // $ExpectType string[]
    invalid;

    // $ExpectType string[]
    valid;
}
