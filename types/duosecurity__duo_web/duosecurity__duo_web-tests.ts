import * as Duo from "@duosecurity/duo_web";

Duo.sign_request("ikey", "skey", "akey", "username");
Duo.verify_response("ikey", "skey", "akey", "sig_response");
