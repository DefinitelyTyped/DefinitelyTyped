import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface TOwnProps extends RouteComponentProps<{}> {
  username: string;
}

const Component = (props: TOwnProps) => <h2>Welcome {props.username}</h2>;

const WithRouterComponent = withRouter(Component);

const WithRouterTest = () => (<WithRouterComponent username="John" />);

export default WithRouterTest;
