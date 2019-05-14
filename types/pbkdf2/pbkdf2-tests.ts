import * as pbkdf2 from "pbkdf2";

pbkdf2.pbkdf2("password", "salt", 1000, 32, "sha1", (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2("password", "salt", 1000, 32, (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2Sync("password", "salt", 1000, 32, "sha1"); // $ExpectType Buffer
pbkdf2.pbkdf2Sync("password", "salt", 1000, 32); // $ExpectType Buffer
