import Drawer from 'rmc-drawer';
import * as React from 'react';

const sidebar = (<div>
    <h3>
        sidebar
    </h3>
    <p>this is content!</p>
</div>);

const drawer = <Drawer sidebar={sidebar} docked={false} open={false}
    style={{ overflow: 'auto' }} touch={true} enableDragHandle={true}
    position="left" dragToggleDistance={30} transitions={true}
    onOpenChange={_open => {}}>
    <div className="main">
        <p>React component</p>
        Testcontent
    </div>
</Drawer>;
