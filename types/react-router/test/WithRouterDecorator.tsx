import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface TOwnProps {
  username: string;
}

// $ExpectType Component
@withRouter
class Component extends React.Component<TOwnProps> {
	render() {
		return (
			<h2>Welcome {this.props.username}</h2>
		);
	}
}

const WithRouterTest = () => (<Component username="John" />);

// $ExpectType Element
WithRouterTest();

export default WithRouterTest;
