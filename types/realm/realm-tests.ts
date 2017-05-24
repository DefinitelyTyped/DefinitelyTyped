import * as Realm from 'realm';

class Person {
    // schema test
    static personSchema = {
        name: 'Person',
        primaryKey: 'id',
        properties: {
            id: 'int',
            name: { type: 'string', default: 'anonymous', indexed: true },
            profilePic: { type: 'string', optional: true }
        }
    }
}

// encryptionKey
const key = new Int8Array(64);

// constructor test
const realm = new Realm({
    schema: [Person.personSchema],
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
const allPerson = realm.objects<Person>('Person');
realm.write(() => {
    realm.delete(allPerson);
})
// filtered test
const allJack = allPerson.filtered('name = "Jack"');

// sorted test
allJack.sorted('id');
allJack.sorted('id', true);

for (let a of allJack.values()) {
    console.log(a)
}

// limiting results test
allJack.slice(0, 2);

// change events test
realm.addListener('change', () => {
    return 'updated';
});

// remove all events
realm.removeAllListeners();

allPerson.find((person) => {
    return person
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
Realm.Sync.User.registerWithProvider('http://localhost:9080', {
    provider: 'facebook',
    providerToken: fbAccessToken,
    userInfo: {

    }
}, (error: Error | null, user: Realm.Sync.User | null) => { /* ... */ });

// user test
const user = Realm.Sync.User.current;
const users = Realm.Sync.User.all;


const adapter = new Realm.Sync.Adapter('', '', {} as Realm.Sync.User, '', () => { })

// access control test
const managementRealm = user.openManagementRealm();
