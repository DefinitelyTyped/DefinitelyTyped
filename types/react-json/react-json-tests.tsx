/// <reference types="node" />

import * as React from 'react';
const Json = require('react-json');

const TestObject = {
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
