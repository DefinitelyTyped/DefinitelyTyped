import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface TOwnProps extends RouteComponentProps<{}> {
    username: string;
}

const ComponentFunction = (props: TOwnProps) => (
    <h2>Welcome {props.username} on the {props.location.pathname} page</h2>
);

// Regression test for https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24070
const ComponentFunctionWithAnyProps = (props: any) => (
    <h2>Welcome {props.username} on the {props.location.pathname} page</h2>
);

class ComponentClass extends React.Component<TOwnProps> {
    render() {
        return <h2>Welcome {this.props.username} on the {this.props.location.pathname} page</h2>;
    }
}

const WithRouterComponentFunction = withRouter(ComponentFunction);
const WithRouterComponentFunctionWithAnyProps = withRouter(ComponentFunctionWithAnyProps);
const WithRouterComponentClass = withRouter(ComponentClass);

const WithRouterTestFunction = () => (
    <WithRouterComponentFunction username="John" />
);
const WithRouterTestFunctionWithAnyProps = () => (
    <WithRouterComponentFunctionWithAnyProps username="John" />
);
const WithRouterTestClass = () => <WithRouterComponentClass username="John" />;
