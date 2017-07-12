import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface TOwnProps {
  username: string;
}

const Component = (props: TOwnProps & RouteComponentProps<{}>) => <h2>Welcome {props.username}</h2>;

const WithRouterComponent = withRouter<TOwnProps>(Component);

const WithRouterTest = () => (<WithRouterComponent username="John" />);

export default WithRouterTest;
