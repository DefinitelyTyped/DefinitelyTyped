// React-Router-Bootstrap Test
// ================================================================================
///<reference types="react"/>
///<reference types="react-bootstrap"/>

// Imports
// --------------------------------------------------------------------------------
import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


export class ReactRouterBootstrapTest extends Component<any, any> {
    callback() {
        alert('Callback: ' + JSON.stringify(arguments));
    }

    public render() {
        let style: CSSProperties = { padding: '50px' };
        return (
            <div style={style}>

                <div style={style}>
                    <LinkContainer to="/page"><button>Link</button></LinkContainer>
                    <IndexLinkContainer to="/index"><button>Link</button></IndexLinkContainer>
                </div>
            </div>
        );
    }
}
