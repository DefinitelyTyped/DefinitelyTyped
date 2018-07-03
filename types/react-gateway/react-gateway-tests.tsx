import * as React from 'react';
import { Gateway, GatewayProvider, GatewayDest } from 'react-gateway';

class ReactGateway extends React.Component<Gateway.GatewayProps> {
    render() {
        return (
            <Gateway {...this.props}>
                <div>
                    Text goes here.
                </div>
            </Gateway>
        );
    }
}

class Provider extends React.Component<GatewayProvider.GatewayProviderProps> {
    render() {
        return (
            <GatewayProvider {...this.props}>
                <GatewayDest name="test" />
                <div>
                    All the way down...
                    <div>
                        Almost there...
                        <div>
                            Getting close...
                            <div>
                                <ReactGateway into="test" />
                            </div>
                        </div>
                    </div>
                </div>
            </GatewayProvider>
        );
    }
}
