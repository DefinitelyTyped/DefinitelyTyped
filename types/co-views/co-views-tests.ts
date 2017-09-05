import * as views from 'co-views';

const render = views('views', {
    map: {
        html: 'swig',
    },
    default: 'jade',
});

const fileName = 'xxx'; // template file name
const locals = {}; // template locals data

async function test() {
    const html = await render(fileName, locals);
}

// or use generator

// function* test() {
//     const html = yield render(fileName, locals);
//     console.log(html);
// }
