import jwt = require("jwt-then");
import fs = require("fs");

const testObject = { foo: "bar" };

(async () => {
    const token = await jwt.sign(testObject, "foobar");
    const verified = await jwt.verify(token, "foobar");

    console.log(token, verified);
})();
