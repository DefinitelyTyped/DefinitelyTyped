import * as React from 'react';
import { Gateway, GatewayProvider, GatewayDest } from 'react-gateway';

class GatewayComponent extends React.Component<{ children?: React.ReactNode }> {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

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
                <GatewayDest name="test" component={GatewayComponent} />
                <GatewayDest name="test2" component="span" />
                <GatewayDest name="test3" />
                <div>
                    All the way down...
                    <div>
                        Almost there...
                        <div>
                            Getting close...
                            <div>
                                <ReactGateway into="test" />
                                <ReactGateway into="test2" />
                                <ReactGateway into="test3" />
                            </div>
                        </div>
                    </div>
                </div>
            </GatewayProvider>
        );
    }
}
