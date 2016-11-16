import * as utf8 from "utf8";

function test_encode(): void {
    utf8.encode("\x49");
    utf8.encode("\uD800\uDC01");
}

function test_decode(): void {
    utf8.decode("\xC2\x49");
    utf8.decode("\xF0\x90\x80\x81");
}

function test_version(): void {
    if (typeof utf8.version === "string") {
        console.log(utf8.version);
    }
}
