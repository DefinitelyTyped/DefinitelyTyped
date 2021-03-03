import * as arc from '@architect/functions';

async function test() {
    const data = await arc.tables();

    const tn: string = data._name('foo');
    console.log('table resource name:', tn);

    data.notes.get('foo', console.log);
    data.notes.get('foo').then(console.log);
    data.notes.query({}, console.log);
    data.notes.query({}).then(console.log);
    data.notes.scan({}, console.log);
    data.notes.scan({}).then(console.log);
    data.notes.put('foo', console.log);
    data.notes.put('foo').then(console.log);
    data.notes.delete({}, console.log);
    data.notes.delete({}).then(console.log);
    data.notes.update('foo', console.log);
    data.notes.update('foo').then(console.log);
}

test();
