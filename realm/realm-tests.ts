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
let realm = new Realm({
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
