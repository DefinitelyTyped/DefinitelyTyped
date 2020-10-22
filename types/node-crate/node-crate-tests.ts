import * as crate from "node-crate";

crate.connect("127.0.0.1");
crate.connect("127.0.0.1", 1234);

crate.execute('select * from users');
crate.execute('select * from users where id = ?', ['test']);

crate.insert('users', {id: 'test', password: 'password'});

crate.create({users: {id: 'string primary key', password: 'string'}});

crate.createIfNotExists({users: {id: 'string primary key', password: 'string'}});

crate.drop('users');

crate.update('users', {password: 'newPassword'}, "id = 'test'");

crate.delete('users', "id = 'test'");

crate.createBlobTable('photos', 1, 2);

crate.insertBlob('photos', 'XXXXXXXX');

crate.insertBlobFile('photos', '/path/to/photo.png');

crate.getBlob('photos', 'WEWERTWERTWSHSDFG');
