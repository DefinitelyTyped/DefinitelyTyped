import { DKIMSign, DKIMSignOptions } from "dkim-signer";
import * as fs from "fs";

// generate a RFC822 message
const rfc822message = "Subject: test\r\n\r\nHello world";

// setup DKIM options
const dkimOptions: DKIMSignOptions = {
    domainName: "müriaad-polüteism.info",
    keySelector: "dkim",
    privateKey: fs.readFileSync("./test_private.pem")
};

// generate signature header field
// $ExpectType string
DKIMSign(rfc822message, dkimOptions);
