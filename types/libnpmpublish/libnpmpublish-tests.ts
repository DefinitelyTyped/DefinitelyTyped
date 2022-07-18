import { PackageJson } from "@npm/types";
import libnpmpublish = require("libnpmpublish");
import fetch = require("npm-registry-fetch");

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
        body: "bodyhere",
    };
    const manifest: PackageJson = {
        name: "",
        version: "",
    };
    const tarballData: Buffer = Buffer.from("thisisafillerforthebuffertowork");
    // test param requirements and return values
    // @ts-expect-error
    await libnpmpublish.publish();
    // @ts-expect-error
    await libnpmpublish.publish(manifest);
    await libnpmpublish.publish(manifest, tarballData); // $ExpectType Response
    await libnpmpublish.publish(manifest, tarballData, options); // $ExpectType Response

    // @ts-expect-error
    await libnpmpublish.unpublish();
    await libnpmpublish.unpublish("npmpackage"); // $ExpectType boolean
    await libnpmpublish.unpublish("npmpackage", options); // $ExpectType boolean
}
