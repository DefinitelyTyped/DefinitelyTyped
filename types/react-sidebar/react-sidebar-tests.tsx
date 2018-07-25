import * as React from 'react';
import Sidebar, { SidebarStyles } from 'react-sidebar';

const sidebar = <ul><li>Item 1</li><li>Item 2</li></ul>;

const sidebarStyle: SidebarStyles = {
    content: { width: "300px" }
};

const sidebar1 = (
    <Sidebar
        defaultSidebarWidth={30}
        docked={true}
        open={true}
        sidebar={sidebar}
        styles={sidebarStyle}
        onSetOpen={(open: boolean) => { }}
    >
        <h1>Content</h1>
    </Sidebar>
);
