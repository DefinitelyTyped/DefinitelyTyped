import libnpmpublish = require("libnpmpublish");
import fetch = require("npm-registry-fetch");
import { Manifest } from "pacote";

async function test() {
    // declare variables to be used
    const options: fetch.Options = {
        "always-auth": true,
        alwaysAuth: true,
        email: "testemail@gmail.com", // no, thats not a real email
        password: "pa33w0rdH34r",
        _password: undefined,
        otp: undefined,
        token: "t0k3nH34r",
        _authToken: undefined,
        username: "blahblahblah",
        fetchRetries: 3,
        fetchRetryFactor: 1,
        fetchRetryMintimeout: 20000,
        fetchRetryMaxtimeout: 50000,
        agent: undefined,
        body: "bodyhere"
    };
    const manifest: Manifest = {
        name: "",
        version: "",
        dist: {
            tarball: ""
        }
    };
    const tarballData: Buffer = Buffer.from("thisisafillerforthebuffertowork");
    // test param requirements and return values
    await libnpmpublish.publish(); // $ExpectError
    await libnpmpublish.publish(manifest); // $ExpectError
    await libnpmpublish.publish(manifest, tarballData); // $ExpectType Response
    await libnpmpublish.publish(manifest, tarballData, options); // $ExpectType Response

    await libnpmpublish.unpublish(); // $ExpectError
    await libnpmpublish.unpublish("npmpackage"); // $ExpectType boolean
    await libnpmpublish.unpublish("npmpackage", options); // $ExpectType boolean
}
