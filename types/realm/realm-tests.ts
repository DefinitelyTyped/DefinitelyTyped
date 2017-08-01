import * as Realm from 'realm';

// schema test
const personSchema = {
    name: 'Person',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: { type: 'string', default: 'anonymous', indexed: true },
        profilePic: { type: 'string', optional: true }
    }
};

// encryptionKey
const key = new Int8Array(64);

// constructor test
const realm = new Realm({
    schema: [personSchema],
    encryptionKey: key
});

realm.write(() => {
    // create test
    realm.create('Person', {
        id: 1,
        name: 'Tony'
    });

    // update test
    realm.create('Person', {
        id: 1,
        name: 'Jack'
    }, true);
});

// delete all person test
const allPerson = realm.objects('Person');
realm.delete(allPerson);

// filtered test
const allJack = allPerson.filtered('name = "Jack"');

// sorted test
allJack.sorted('id');
allJack.sorted('id', true);

// limiting results test
allJack.slice(0, 2);

// change events test
realm.addListener('change', () => {
    return 'updated';
});

// remove all events
realm.removeAllListeners();

allPerson.find((person: any) => {
    return person.name === 'Jack';
});

const currentVersion = Realm.schemaVersion(Realm.defaultPath);

// username/password authentication
Realm.Sync.User.register('http://localhost:9080', 'username@example.com', 'p@s$w0rd', (error, user) => { /* ... */ });

Realm.Sync.User.login('http://localhost.com:9080', 'username@example.com', 'p@s$w0rd', (error, user) => {
    const todoSchema = {
        name: 'Todo',
        primaryKey: 'id',
        properties: {
            id: 'int',
            task: 'string',
        }
    };

    // sync test
    const realm = new Realm({
        schema: [todoSchema],
        sync: { user, url: 'realm://localhost:9080/~/todos' }
    });

    // session test
    const session = realm.syncSession;
    const sessionUrl = session.config.url;
});

// facebook authentication
const fbAccessToken = 'acc3ssT0ken...';
Realm.Sync.User.registerWithProvider('http://localhost:9080', 'facebook', fbAccessToken, (error, user) => { /* ... */ });

// user test
const user = Realm.Sync.User.current;
const users = Realm.Sync.User.all;

// access control test
const managementRealm = user.openManagementRealm();
