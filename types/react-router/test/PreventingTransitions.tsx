import * as React from 'react';
import {
  BrowserRouter as Router,
  RouteComponentProps,
  Route,
  Link,
  Prompt
} from 'react-router-dom';

const PreventingTransitionsExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
      </ul>
      <Route path="/" exact component={Form}/>
      <Route path="/one" render={() => <h3>One</h3>}/>
      <Route path="/two" render={() => <h3>Two</h3>}/>
    </div>
  </Router>
);

class Form extends React.Component<undefined, {isBlocking: boolean}> {
  state = {
    isBlocking: false
  };

  render() {
    const { isBlocking } = this.state;

    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          (event.target as HTMLFormElement).reset();
          this.setState({
            isBlocking: false
          });
        }}
      >
        <Prompt
          when={isBlocking}
          message={location => (
            `Are you sure you want to go to ${location.pathname}`
          )}
        />

        <p>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size={50}
            placeholder="type something to block transitions"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              });
            }}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }
}

export default PreventingTransitionsExample;
