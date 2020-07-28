import bcrypt = require('bcrypt-nodejs');

function test_sync() {
    const salt1 = bcrypt.genSaltSync();
    const salt2 = bcrypt.genSaltSync(8);

    const hash1 = bcrypt.hashSync('super secret');
    const hash2 = bcrypt.hashSync('super secret', salt1);

    const compare1 = bcrypt.compareSync('super secret', hash1);

    const rounds1 = bcrypt.getRounds(hash2);
}

function test_async() {
    const cbString = (error: Error, result: string) => {};
    const cbVoid = () => {};
    const cbBoolean = (error: Error, result: boolean) => {};

    bcrypt.genSalt(8, cbString);

    const salt = bcrypt.genSaltSync();
    bcrypt.hash('super secret', salt, cbString);
    bcrypt.hash('super secret', salt, cbVoid, cbString);

    const hash = bcrypt.hashSync('super secret');
    bcrypt.compare('super secret', hash, cbBoolean);

    bcrypt.hash('bacon', salt, null, (err, hash) => {
        // Store hash in your password DB.
    });

    // Load hash from your password DB.
    bcrypt.compare('bacon', hash, (err, res) => {
        // res == true
    });
    bcrypt.compare('veggies', hash, (err, res) => {
        // res = false
    });
}
