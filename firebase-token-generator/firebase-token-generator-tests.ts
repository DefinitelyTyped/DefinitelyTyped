import FirebaseTokenGenerator = require('firebase-token-generator');

const tokenGenerator: FirebaseTokenGenerator = new FirebaseTokenGenerator("MY_SECRET");

let token: string = tokenGenerator.createToken({blah: 5, uid: "blah"});
log("Token should not be empty string", (token !== ""));
log("Token should consist of three parts", (token.split(".").length === 3));

token = tokenGenerator.createToken({blah: 5}, {expires : 1234, notBefore : 133234, admin : true, debug : false});
log("Token should take valid options", (token !== ""));

function log(description: string, statement: boolean) : void {
  console.log((statement? "SUCCESS" : "FAIL") + " " + description);
}
