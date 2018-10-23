import * as React from 'react';
import Helmet = require('react-helmet');

<Helmet title="My Title" />

const head = Helmet.rewind();
const html = `
    <!doctype html>
    <html>
        <head>
            ${ head.title.toString() }
            ${ head.meta.toString() }
            ${ head.link.toString() }
        </head>
        <body>
            <div id="content">
                // React stuff here
            </div>
        </body>
    </html>
`;

function HTML() {
    return (
        <html>
            <head>
                { head.title.toComponent() }
                { head.meta.toComponent() }
                { head.link.toComponent() }
            </head>
            <body>
                <div id="content">
                    // React stuff here
                </div>
            </body>
        </html>
    );
}

function log(datum: Helmet.HelmetDatum) {
    return console.log('logging a helmet datum:', datum.toString());
}

log(head.title);
