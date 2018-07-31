import * as React from 'react';

declare module 'react-no-ssr' {
    export default class NoSSR extends React.Component<
        {
            onSSR?: React.ReactChild;
        },
        {}
    > {}
}
