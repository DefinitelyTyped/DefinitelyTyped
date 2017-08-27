/// <reference types="node" />

import * as React from 'react';
import json = require('react-json');
let Json = json.Json;

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
