import * as React from 'react';
import * as Highlight from 'react-highlighter';

export class ReactHolderTest extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Highlight
                    search="test">test</Highlight>
            </div>
        );
    }
}