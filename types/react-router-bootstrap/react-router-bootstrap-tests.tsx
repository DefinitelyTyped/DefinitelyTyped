import * as React from "react";
import { Component, CSSProperties, MouseEvent } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class ReactRouterBootstrapTest extends Component {
    callback() {
        alert("Callback: " + JSON.stringify(arguments));
    }

    public render() {
        let style: CSSProperties = { padding: "50px" };
        return (
            <div style={style}>
                <div style={style}>
                    <LinkContainer to={{ search: "page=2" }}>
                        <Button>Link</Button>
                    </LinkContainer>
                    <LinkContainer to="/page" onClick={(_ev: MouseEvent) => {}} style={{ color: "red" }}>
                        <Button>Link</Button>
                    </LinkContainer>
                    <LinkContainer to="/page" className="myclass" activeClassName="active">
                        <Button>Link</Button>
                    </LinkContainer>
                    <LinkContainer to="/page" isActive>
                        <Button>Link</Button>
                    </LinkContainer>
                    <LinkContainer to="/page" isActive={(_match, _location) => true}>
                        <Button>Link</Button>
                    </LinkContainer>
                </div>
            </div>
        );
    }
}
