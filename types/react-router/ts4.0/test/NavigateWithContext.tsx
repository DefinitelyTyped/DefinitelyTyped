import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  RouterChildContext,
  RouteComponentProps
} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

interface Params {
  id?: string;
}
type Props = RouteComponentProps<Params>;

class ComponentThatUsesContext extends React.Component<Props> {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  // tslint:disable-next-line:no-object-literal-type-assertion
  context = {} as RouterChildContext<Params>;
  private readonly onClick = () => {
    const {
      history,
      route: {
        location,
        match
      }
    } = this.context.router;
    history.push('/some/url');
  }
  render() {
    return <div/>;
  }
}

const Test = () => (
  <Router>
    <Route path='/' exact component={ComponentThatUsesContext}/>
  </Router>
);

export default Test;
