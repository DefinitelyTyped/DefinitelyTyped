/// <reference types="node" />

import * as React from 'react';
let Json = require('react-json');

let TestObject = {
    s: "Hello, world",
    b: true,
    n: 666,
    o: {
        s: "Hello, world",
        b: true,
        n: 666,
        o: {
            s: "Hello, world",
            b: true,
            n: 666,
        }
    }
};

<Json value={TestObject} onChange={(val: any) => console.log(val)}/>;
