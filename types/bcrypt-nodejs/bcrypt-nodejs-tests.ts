
import bCrypt = require("bcrypt-nodejs");

function test_sync() {
    var salt1 = bCrypt.genSaltSync();
    var salt2 = bCrypt.genSaltSync(8);

    var hash1 = bCrypt.hashSync('super secret');
    var hash2 = bCrypt.hashSync('super secret', salt1);

    var compare1 = bCrypt.compareSync('super secret', hash1);

    var rounds1 = bCrypt.getRounds(hash2);
}

function test_async() {
    var cbString = (error: Error, result: string) => {};
    var cbVoid = () => {};
    var cbBoolean = (error: Error, result: boolean) => {};

    bCrypt.genSalt(8, cbString);

    var salt = bCrypt.genSaltSync();
    bCrypt.hash('super secret', salt, cbString);
    bCrypt.hash('super secret', salt, cbVoid, cbString);

    var hash = bCrypt.hashSync('super secret');
    bCrypt.compare('super secret', hash, cbBoolean);
}