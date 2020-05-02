import bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
const hash = 'fake-hash';

// $ExpectType void
bcrypt.genSalt(saltRounds, 'a', (err, salt): void => {
    err; // $ExpectType Error
    salt; // $ExpectType string
});
bcrypt.genSalt(saltRounds, 'b'); // $ExpectType Promise<string>
// $ExpectType string
bcrypt.genSaltSync(saltRounds);
// $ExpectType void
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    err; // $ExpectType Error
    hash; // $ExpectType string
});
bcrypt.hash(myPlaintextPassword, saltRounds); // $ExpectType Promise<string>
bcrypt.hashSync(myPlaintextPassword, saltRounds); // $ExpectType string
// $ExpectType void
bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
    err; // $ExpectType Error
    result; // $ExpectType boolean
});
bcrypt.compare(myPlaintextPassword, hash); // $ExpectType Promise<boolean>
bcrypt.compareSync(myPlaintextPassword, hash); // $ExpectType boolean
// async/await https://github.com/kelektiv/node.bcrypt.js#with-promises
(async () => {
    await bcrypt.genSalt(saltRounds, 'b'); // $ExpectType string
    await bcrypt.hash(myPlaintextPassword, saltRounds); // $ExpectType string
    await bcrypt.compare(myPlaintextPassword, hash); // $ExpectType boolean
})();
