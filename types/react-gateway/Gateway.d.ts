import * as React from "react";

declare namespace Gateway {
    interface GatewayProps {
        into: string;
        children?: React.ReactNode;
    }
}
declare class Gateway extends React.Component<Gateway.GatewayProps> {}
export = Gateway;
