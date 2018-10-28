import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet, { HelmetProvider, PopulatedContext } from 'react-helmet-async';

const helmetContext = {};

const markup = renderToString(
    <HelmetProvider context={helmetContext}>
        <div>
            <Helmet>
                <title>Hello, world!</title>
            </Helmet>
        </div>
    </HelmetProvider>
);
