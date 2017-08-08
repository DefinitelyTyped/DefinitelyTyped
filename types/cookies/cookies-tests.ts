import * as Cookies from 'cookies';
import * as http from 'http';

const server = http.createServer((req, res) => {
    const cookies = new Cookies(req, res);
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
            .set("tampered.sig", "bogus");

        res.writeHead(302, { Location: "/" });
        return res.end("Now let's check.");
    }

    unsigned = cookies.get("unsigned");
    signed = cookies.get("signed", { signed: true });
    tampered = cookies.get("tampered", { signed: true });

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
        "unsigned expected: foo\n\n" +
        "unsigned actual: " + unsigned + "\n\n" +
        "signed expected: bar\n\n" +
        "signed actual: " + signed + "\n\n" +
        "tampered expected: undefined\n\n" +
        "tampered: " + tampered + "\n\n"
    );
});
