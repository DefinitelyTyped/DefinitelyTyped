import { deserialize, serialize } from "@phc/format";

// same cases from https://github.com/simonepri/phc-format/blob/master/test/fixtures/serialize-deserialize.js
function test_serialize() {
    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2 },
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 4294967295, p: 2 },
    });

    serialize({
        id: "argon2i",
        params: { m: 2040, t: 5000, p: 255 },
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, keyid: "Hj5+dsK0" },
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, keyid: "Hj5+dsK0ZQ" },
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, keyid: "Hj5+dsK0ZQA" },
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, data: "sRlHhRmKUGzdOmXn01XmXygd5Kc" },
    });

    serialize({
        id: "argon2i",
        params: {
            m: 120,
            t: 5000,
            p: 2,
            keyid: "Hj5+dsK0",
            data: "sRlHhRmKUGzdOmXn01XmXygd5Kc",
        },
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2 },
        salt: Buffer.from("/LtFjH5rVL8", "base64"),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2 },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2 },
        salt: Buffer.from(
            "BwUgJHHQaynE+a4nZrYRzOllGSjjxuxNXxyNRUtI6Dlw/zlbt6PzOL8Onfqs6TcG",
            "base64",
        ),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, keyid: "Hj5+dsK0" },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, data: "sRlHhRmKUGzdOmXn01XmXygd5Kc" },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
    });

    serialize({
        id: "argon2i",
        params: {
            m: 120,
            t: 5000,
            p: 2,
            keyid: "Hj5+dsK0",
            data: "sRlHhRmKUGzdOmXn01XmXygd5Kc",
        },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2 },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
        hash: Buffer.from("iPBVuORECm5biUsjq33hn9/7BKqy9aPWKhFfK2haEsM", "base64"),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, keyid: "Hj5+dsK0" },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
        hash: Buffer.from("iPBVuORECm5biUsjq33hn9/7BKqy9aPWKhFfK2haEsM", "base64"),
    });

    serialize({
        id: "argon2i",
        params: { m: 120, t: 5000, p: 2, data: "sRlHhRmKUGzdOmXn01XmXygd5Kc" },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
        hash: Buffer.from("iPBVuORECm5biUsjq33hn9/7BKqy9aPWKhFfK2haEsM", "base64"),
    });

    serialize({
        id: "argon2i",
        params: {
            m: 120,
            t: 5000,
            p: 2,
            keyid: "Hj5+dsK0",
            data: "sRlHhRmKUGzdOmXn01XmXygd5Kc",
        },
        salt: Buffer.from("4fXXG0spB92WPB1NitT8/OH0VKI", "base64"),
        hash: Buffer.from("iPBVuORECm5biUsjq33hn9/7BKqy9aPWKhFfK2haEsM", "base64"),
    });

    serialize({
        id: "argon2i",
        params: {
            m: 120,
            t: 5000,
            p: 2,
            keyid: "Hj5+dsK0",
            data: "sRlHhRmKUGzdOmXn01XmXygd5Kc",
        },
        salt: Buffer.from("iHSDPHzUhPzK7rCcJgOFfg", "base64"),
        hash: Buffer.from("EkCWX6pSTqWruiR0", "base64"),
    });

    serialize({
        id: "argon2i",
        params: {
            m: 120,
            t: 5000,
            p: 2,
            keyid: "Hj5+dsK0",
            data: "sRlHhRmKUGzdOmXn01XmXygd5Kc",
        },
        salt: Buffer.from("iHSDPHzUhPzK7rCcJgOFfg", "base64"),
        hash: Buffer.from(
            "J4moa2MM0/6uf3HbY2Tf5Fux8JIBTwIhmhxGRbsY14qhTltQt+Vw3b7tcJNEbk8ium8AQfZeD4tabCnNqfkD1g",
            "base64",
        ),
    });

    serialize({
        id: "scrypt",
        params: {
            ln: 1,
            r: 16,
            p: 1,
        },
        salt: Buffer.from("", "hex"),
        hash: Buffer.from(
            "d9ZXYjhleyA7GcpCwYoEl/FrSETjB0ro39/6P+3iFEL80Aad7QlI+DJqdToPyB8X6NPg+y4NNijPNeIMONGJBg",
            "base64",
        ),
    });

    serialize({
        id: "argon2i",
        version: 19,
        params: {
            m: 120,
            t: 5000,
            p: 2,
            keyid: "Hj5+dsK0",
            data: "sRlHhRmKUGzdOmXn01XmXygd5Kc",
        },
        salt: Buffer.from("iHSDPHzUhPzK7rCcJgOFfg", "base64"),
        hash: Buffer.from(
            "J4moa2MM0/6uf3HbY2Tf5Fux8JIBTwIhmhxGRbsY14qhTltQt+Vw3b7tcJNEbk8ium8AQfZeD4tabCnNqfkD1g",
            "base64",
        ),
    });
}

// same cases from https://github.com/simonepri/phc-format/blob/master/test/fixtures/serialize-deserialize.js
function test_deserialize() {
    deserialize("$argon2i$m=120,t=5000,p=2,keyid=Hj5+dsK0,data=sRlHhRmKUGzdOmXn01XmXygd5Kc");
}
