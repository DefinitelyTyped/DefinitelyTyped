import * as React from 'react';
import RelativePortal = require('react-relative-portal');

<React.Fragment>
    <RelativePortal component="div">
        <div>portalled content</div>
    </RelativePortal>

    <RelativePortal component="div" className="portal" fullWidth left={1} onOutClick={() => {}} right={2} top={3}>
        <div>portalled content</div>
    </RelativePortal>
</React.Fragment>;
