import loadware = require("loadware");

interface Context { __ContextMarker: never; }
interface Response { __ResponseMarker: never; }
type Middleware = (ctx: Context) => void;

loadware<Middleware>(
    (_: Context) => {},
    [
        (_: Context) => {},
        'loadware/requires-strings'
    ],
    [
        [
            [
                (_: Context) => {}
            ]
        ]
    ]
);
