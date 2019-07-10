import * as React from 'react';

declare namespace Gateway {
    interface GatewayProps {
        into: string;
    }
}
declare class Gateway extends React.Component<Gateway.GatewayProps> { }
export = Gateway;
