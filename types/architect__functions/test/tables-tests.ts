import * as arc from "@architect/functions";

async function test() {
    const data = await arc.tables();
    arc.tables.db;
    arc.tables.doc;

    const tn: string | undefined = data._name("foo");
    const tn2: string | undefined = data.name("foo");

    data.notes.get("foo", console.log);
    data.notes.get("foo").then(console.log);
    data.notes.query({}, console.log);
    data.notes.query({}).then(console.log);
    data.notes.scan({}, console.log);
    data.notes.scan({}).then(console.log);
    data.notes.put("foo", console.log);
    data.notes.put("foo").then(console.log);
    data.notes.delete({}, console.log);
    data.notes.delete({}).then(console.log);
    data.notes.update("foo", console.log);
    data.notes.update("foo").then(console.log);
}

test();
