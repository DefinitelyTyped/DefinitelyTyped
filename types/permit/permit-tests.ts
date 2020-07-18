import { IncomingMessage, ServerResponse } from "http";
import { Permit, Basic, Bearer } from 'permit';

const permit = new Permit({
    scheme: "some-scheme",
    proxy: "some-proxy",
    realm: "auth"
});

const basic = new Basic({
    scheme: "some-scheme",
    proxy: "some-proxy",
    realm: "auth"
});

const bearer = new Bearer({
    basic: 'username',
    query: 'access_token',
});

function permitHandler(req: IncomingMessage, res: ServerResponse) {
    permit.check(req);

    permit.fail(res);
}

function basichHndler(req: IncomingMessage, res: ServerResponse) {
    const token = basic.check(req);

    if (!token) {
        basic.fail(res);
        throw new Error(`Authentication required!`);
    }

    const user = "some-user";

    if (!user) {
        basic.fail(res);
        throw new Error(`Authentication invalid!`);
    }

    return 'Success!';
}

function bearerHandler(req: IncomingMessage, res: ServerResponse) {
    const token = bearer.check(req);

    if (!token) {
        bearer.fail(res);
        throw new Error(`Authentication required!`);
    }

    const user = "some-user";

    if (!user) {
        bearer.fail(res);
        throw new Error(`Authentication invalid!`);
    }

    return 'Success!';
}
