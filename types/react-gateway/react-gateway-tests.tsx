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

class ReactGatewayProvider extends React.Component {
    render() {
        return (
            <GatewayProvider>
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
