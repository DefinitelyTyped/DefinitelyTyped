import * as kdbxweb from "kdbxweb";

const dataarr = new ArrayBuffer(0);

const credentials = new kdbxweb.Credentials(
    kdbxweb.ProtectedValue.fromString("demo"),
    "nFWx&e5SzT"
);

kdbxweb.Kdbx.load(dataarr, credentials).then(db => db);
kdbxweb.Kdbx.loadXml("data", credentials).then(db => db);

const newDb = kdbxweb.Kdbx.create(credentials, "My new db");
const defaultGroup = newDb.getDefaultGroup();
const group = newDb.createGroup(defaultGroup, "subgroup");
const anotherGroup = newDb.createGroup(group, "subgroup-2");
const yetAnotherGroup = newDb.createGroup(group, "subgroup-3");
const deepGroup = defaultGroup.groups[0].groups[0];

if (newDb.getGroup(yetAnotherGroup.uuid)) {
    newDb.remove(yetAnotherGroup);
}
const entry = newDb.createEntry(group);
newDb.move(entry, anotherGroup);
newDb.remove(entry);

newDb.save().then(dataAsArrayBuffer => dataAsArrayBuffer);
newDb.saveXml().then(xmlAsString => xmlAsString);

newDb.cleanup({
    customIcons: true
});

newDb.upgrade();
