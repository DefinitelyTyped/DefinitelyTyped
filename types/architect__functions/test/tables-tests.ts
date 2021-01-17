import * as arc from '../index';

async function test() {
    let data = await arc.tables();

    const tn: string = data._name('foo');
    console.log('table resource name:', tn);

    data.notes.get('foo', console.log);
    data.notes.query({}, console.log);
    data.notes.scan({}, console.log);
    data.notes.put('foo', console.log);
    data.notes.delete({}, console.log);
    data.notes.update('foo', console.log);
}

test();
