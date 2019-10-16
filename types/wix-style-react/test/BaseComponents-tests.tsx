import * as React from 'react';
import WixComponent from 'wix-style-react/BaseComponents';

function WixComponentWithMandatoryProps() {
    return <WixComponent />;
}

function WixComponentWithAllProps() {
    return <WixComponent dataHook="hook" styles="14px" />;
}
