// Type definitions for react-no-ssr 1.1.0
// Project: https://github.com/kadirahq/react-no-ssr
// Definitions by: Rafał Filipek <https://github.com/rafalfilipek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';
import NoSSR from 'react-no-ssr';

export class NoSSRTest extends React.Component {
    render() {
        return (
            <div>
                <NoSSR>
                    <div />
                </NoSSR>
                <NoSSR onSSR={<span />}>
                    <div />
                </NoSSR>
            </div>
        );
    }
}
