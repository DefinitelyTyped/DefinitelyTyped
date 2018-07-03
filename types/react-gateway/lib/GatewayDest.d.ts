import * as React from 'react';

declare namespace GatewayDest {
    export type GatewayDestProps = {
        name: string;
        tagName?: string;
        component?: string | React.Component;
    }
}
declare class GatewayDest extends React.Component<GatewayDest.GatewayDestProps> { }
export = GatewayDest;
