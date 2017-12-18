import * as Cookies from 'cookies';
import * as http from 'http';
import * as Keygrip from 'keygrip';
import * as express from 'express';
import * as connect from 'connect';

const server = http.createServer((req, res) => {
    const cookies = new Cookies(req, res);
    new Cookies(req, res, {keys: []});
    new Cookies(req, res, {keys: new Keygrip([])});
    new Cookies(req, res, {secure: true});

    let unsigned: string;
    let signed: string;
    let tampered: string;

    if (req.url === "/set") {
        cookies
            // set a regular cookie
            .set("unsigned", "foo", { httpOnly: false })

            // set a signed cookie
            .set("signed", "bar", { signed: true })

            // mimic a signed cookie, but with a bogus signature
            .set("tampered", "baz")
            .set("tampered.sig", "bogus")

            // sameSite option
            .set("samesite", "same", {sameSite: 'lax'})
            .set("samesite", "same", {sameSite: 'strict'})
            .set("samesite", "same", {sameSite: false});

        res.writeHead(302, { Location: "/" });
        res.end("Now let's check.");
        return;
    }

    unsigned = cookies.get("unsigned");
    signed = cookies.get("signed", { signed: true });
    tampered = cookies.get("tampered", { signed: true });

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
        `unsigned expected: foo

unsigned actual: ${unsigned}

signed expected: bar

signed actual: ${signed}

tampered expected: undefined

tampered: ${tampered}

`);
});

const eApp = express();
eApp.use(Cookies.express([]));

const cApp = connect();
cApp.use(Cookies.connect([]));
