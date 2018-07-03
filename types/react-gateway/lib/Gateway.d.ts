import * as React from 'react';

declare namespace Gateway {
    export type GatewayProps = {
        into: string;
    }
}
declare class Gateway extends React.Component<Gateway.GatewayProps> { }
export = Gateway;
