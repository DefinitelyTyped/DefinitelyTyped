import bcryptjs = require("bcryptjs");

let str: string;
let num: number;
let bool: boolean;
let arr: number[];
let error: Error;

str = bcryptjs.genSaltSync();
str = bcryptjs.genSaltSync(10);

bcryptjs.genSalt((err: Error, salt: string) => {
    str = salt;
});
bcryptjs.genSalt(10, (err: Error, salt: string) => {
    str = salt;
});
bcryptjs.genSalt()
        .then(salt => str = salt)
        .catch(err => error = err);
bcryptjs.genSalt(10)
        .then(salt => str = salt)
        .catch(err => error = err);

str = bcryptjs.hashSync("string");
str = bcryptjs.hashSync("string", 10);
str = bcryptjs.hashSync("string", "salt");

bcryptjs.hash("string", 10, (err: Error, hash: string) => {
    str = hash;
});
bcryptjs.hash("string", 10, (err: Error, hash: string) => {
    str = hash;
}, (percent: number) => {
    num = percent;
});
bcryptjs.hash("string", 10)
        .then(salt => str = salt)
        .catch(err => error = err);

bcryptjs.hash("string", "salt", (err: Error, hash: string) => {
    str = hash;
});
bcryptjs.hash("string", "salt", (err: Error, hash: string) => {
    str = hash;
}, (percent: number) => {
    num = percent;
});

bool = bcryptjs.compareSync("string1", "string2");

bcryptjs.compare("string1", "string2", (err: Error, success: boolean) => {
    bool = success;
});
bcryptjs.compare("string1", "string2", (err: Error, success: boolean) => {
    bool = success;
}, (percent: number) => {
    num = percent;
});
bcryptjs.compare("string1", "string2")
        .then(success => bool = success)
        .catch(err => error = err);

num = bcryptjs.getRounds("string");

str = bcryptjs.getSalt("string");

str = bcryptjs.encodeBase64([1, 2, 3, 4, 5], 5);

arr = bcryptjs.decodeBase64("string", 5);
