import Redact = require("redact-secrets");

const redact = Redact("[REDACTED]");

const info = {
    username: "watson",
    password: "hhGu38gf",
};

redact.map(info); // $ExpectType { username: string; password: string; }
redact.forEach(info); // $ExpectType void
