import * as React from "react";

declare namespace GatewayDest {
    interface GatewayDestProps {
        name: string;
        tagName?: string | undefined;
        component?: string | React.ComponentType | undefined;
    }
}
declare class GatewayDest extends React.Component<GatewayDest.GatewayDestProps> {}
export = GatewayDest;
