import * as React from 'react';
import * as ReactDom from 'react-dom';
import Sidebar from 'react-sidebar';
import { SidebarStyles } from 'react-sidebar';

const sidebar = <ul><li>Item 1</li><li>Item 2</li></ul>;
const sidebarStyle = {
    CSSStyleDeclaration: {
        width: "300px"
    }
} as SidebarStyles;

let sidebar1 = <Sidebar docked={true} open={true} sidebar={sidebar} styles={sidebarStyle}>
                    <h1>Content</h1>
                </Sidebar>;

ReactDom.render(sidebar1, document.getElementsByName("body")[0]);

// save me
