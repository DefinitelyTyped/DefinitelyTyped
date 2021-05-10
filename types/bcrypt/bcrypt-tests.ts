import bcrypt = require("bcrypt");

bcrypt.genSaltSync(); // $ExpectType string
bcrypt.genSaltSync(10); // $ExpectType string
bcrypt.genSaltSync(10, "b"); // $ExpectType string
bcrypt.genSaltSync(10, "c"); // $ExpectError

bcrypt.genSalt(); // $ExpectType Promise<string>
bcrypt.genSalt(10); // $ExpectType Promise<string>
bcrypt.genSalt(10, "b"); // $ExpectType Promise<string>
bcrypt.genSalt(10, "c"); // $ExpectError

// $ExpectType void
bcrypt.genSalt((err, salt) => {
    err; // $ExpectType Error | undefined
    salt; // $ExpectType string
});
// $ExpectType void
bcrypt.genSalt(10, (err, salt) => {
    err; // $ExpectType Error | undefined
    salt; // $ExpectType string
});
// $ExpectType void
bcrypt.genSalt(10, "b", (err, salt) => {
    err; // $ExpectType Error | undefined
    salt; // $ExpectType string
});
// $ExpectError
bcrypt.genSalt(10, "c", (err, salt) => {
    err; // $ExpectType Error | undefined
    salt; // $ExpectType string
});

bcrypt.hashSync("password", "123"); // $ExpectType string
bcrypt.hashSync(Buffer.from("password"), "123"); // $ExpectType string
bcrypt.hashSync("password", 10); // $ExpectType string
bcrypt.hashSync(Buffer.from("password"), 10); // $ExpectType string

bcrypt.hash("password", "123"); // ExpectType Promise<string>
bcrypt.hash(Buffer.from("password"), "123"); // ExpectType Promise<string>
bcrypt.hash("password", 10); // ExpectType Promise<string>
bcrypt.hash(Buffer.from("password"), 10); // ExpectType Promise<string>

// $ExpectType void
bcrypt.hash("password", "123", (err, encrypted) => {
    err; // $ExpectType Error | undefined
    encrypted; // $ExpectType string
});
// $ExpectType void
bcrypt.hash(Buffer.from("password"), "123", (err, encrypted) => {
    err; // $ExpectType Error | undefined
    encrypted; // $ExpectType string
});
// $ExpectType void
bcrypt.hash("password", 10, (err, encrypted) => {
    err; // $ExpectType Error | undefined
    encrypted; // $ExpectType string
});
// $ExpectType void
bcrypt.hash(Buffer.from("password"), 10, (err, encrypted) => {
    err; // $ExpectType Error | undefined
    encrypted; // $ExpectType string
});

bcrypt.compareSync("password", "encrypted"); // $ExpectType boolean
bcrypt.compareSync(Buffer.from("password"), "encrypted"); // $ExpectType boolean

bcrypt.compare("password", "encrypted"); // $ExpectType Promise<boolean>
bcrypt.compare(Buffer.from("password"), "encrypted"); // $ExpectType Promise<boolean>

// $ExpectType void
bcrypt.compare("password", "encrypted", (err, same) => {
    err; // $ExpectType Error | undefined
    same; // $ExpectType boolean
});
// $ExpectType void
bcrypt.compare(Buffer.from("password"), "encrypted", (err, same) => {
    err; // $ExpectType Error | undefined
    same; // $ExpectType boolean
});

bcrypt.getRounds("encrypted"); // $ExpectType number
