import * as intercom from "intercom-client";

intercom.IdentityVerification.userHash({ secretKey: "", identifier: "" }); // $ExpectType string
