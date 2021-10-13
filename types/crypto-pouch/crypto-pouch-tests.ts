function testCryptoPouch() {
    let options: PouchDB.CryptoPouch.Options = { password: 'password', ignore: ['field1', 'field2'] };

    const db = new PouchDB<{ foo: number }>();
    options = { password: 'password' };

    db.crypto('password');
    db.crypto('password', ['field1', 'field2']);
    db.crypto({ password: 'password' });
    db.crypto({ password: 'password', ignore: ['field1', 'field2'] });

    db.removeCrypto();
}
