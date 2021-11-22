import * as arc from '@architect/functions';

async function test() {
    await arc.ws.send({ id: 'anything', payload: { a: 4 }});
    arc.ws.send({ id: 'anything', payload: { a: 4 }}, err => {});
    await arc.ws.info({ id: 'anything'});
    arc.ws.info({ id: 'anything'}, (err, data) => {});
    await arc.ws.close({ id: 'anything'});
    arc.ws.close({ id: 'anything'}, (err) => {});
    console.log(arc.ws._api);
}

test();
