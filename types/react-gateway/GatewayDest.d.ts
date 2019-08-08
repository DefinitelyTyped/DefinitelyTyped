import * as React from 'react';

declare namespace GatewayDest {
    interface GatewayDestProps {
        name: string;
        tagName?: string;
        component?: string | React.ComponentType;
    }
}
declare class GatewayDest extends React.Component<GatewayDest.GatewayDestProps> { }
export = GatewayDest;
