import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export class ReactRouterBootstrapTest extends Component {
    callback() {
        alert('Callback: ' + JSON.stringify(arguments));
    }

    public render() {
        let style: CSSProperties = { padding: '50px' };
        return (
            <div style={style}>

                <div style={style}>
                    <LinkContainer to="/page"><Button>Link</Button></LinkContainer>
                    <LinkContainer to="/page" className="myclass" activeClassName="active"><Button>Link</Button></LinkContainer>
                </div>
            </div>
        );
    }
}
