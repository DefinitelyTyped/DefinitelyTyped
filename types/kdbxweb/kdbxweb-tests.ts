import * as kdbxweb from "kdbxweb";

const dataarr = new ArrayBuffer(0);

const credentials = new kdbxweb.Credentials(
    kdbxweb.ProtectedValue.fromString("demo"),
    "nFWx&e5SzT"
);

kdbxweb.Kdbx.load(dataarr, credentials).then(db => db);
kdbxweb.Kdbx.loadXml("data", credentials).then(db =>  db);

const newDb = kdbxweb.Kdbx.create(credentials, 'My new db');
const group = newDb.createGroup(newDb.getDefaultGroup(), 'subgroup');
const entry = newDb.createEntry(group);

newDb.save().then(dataAsArrayBuffer => dataAsArrayBuffer);
newDb.saveXml().then(xmlAsString => xmlAsString);
