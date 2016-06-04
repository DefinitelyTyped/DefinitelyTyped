/// <reference path="../node/node.d.ts" />
/// <reference path="co-view.d.ts" />

import views = require('co-views');

const render = views('views', {
    map: { 
        html: 'swig' 
    },
    default: 'jade'
});

const fileName = 'xxx'; // template file name
const locals = {}; // template locals data

async function test() {
    var html = await render(fileName, locals);
    console.log(html);
}

// or use generator

// function* test() {
//     var html = yield render(fileName, locals);
//     console.log(html);
// }
