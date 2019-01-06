import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface TOwnProps extends RouteComponentProps {
    username: string;
}

const ComponentFunction = (props: TOwnProps) => (
    <h2>Welcome {props.username}</h2>
);

class ComponentClass extends React.Component<TOwnProps> {
    render() {
        return <h2>Welcome {this.props.username}</h2>;
    }
}

const WithRouterComponentFunction = withRouter(ComponentFunction);
const WithRouterComponentClass = withRouter(ComponentClass);

const WithRouterTestFunction = () => (
    <WithRouterComponentFunction username="John" />
);
const WithRouterTestClass = () => <WithRouterComponentClass username="John" />;
