import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

export class ReactRouterBootstrapTest extends Component {
    callback() {
        alert('Callback: ' + JSON.stringify(arguments));
    }

    public render() {
        let style: ReactDOM.CSSProperties = { padding: '50px' };
        return (
            <div style={style}>

                <div style={style}>
                    <LinkContainer to="/page"><Button>Link</Button></LinkContainer>
                    <LinkContainer to="/page" exact strict><Button>Link</Button></LinkContainer>
                    <IndexLinkContainer to="/index"><Button>Link</Button></IndexLinkContainer>
                </div>
            </div>
        );
    }
}
