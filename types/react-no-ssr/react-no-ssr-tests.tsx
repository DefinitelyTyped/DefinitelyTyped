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
