import * as React from 'react';
import {
  BrowserRouter as Router,
  RouteComponentProps,
  Route,
  Link,
  match
} from 'react-router-dom';
import * as H from 'history';

const PEEPS = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
];

const find = (id: string) => PEEPS.find(p => p.id === parseInt(id, 10));
// original code example relies upon == rather than === for comparison;
// allowing for string / number coercion in comparison; the change to use
// parseInt and === above makes this behaviour explicit
// const find = id => PEEPS.find(p => p.id == id);

const RecursiveExample = () => (
  <Router>
    <Person match={{ params: { id: '0' }, url: '' }}/>
  </Router>
);

interface InitialPersonProps {
  match: {
    params: {
      id: string;
    };
    url: string;
  };
}

type PersonProps = RouteComponentProps<{ id: string }>;

const Person: React.SFC<InitialPersonProps | PersonProps> = ({ match }) => {
  const person = find(match.params.id);

  return (
    <div>
      <h3>{person!.name}’s Friends</h3>
      <ul>
        {person!.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id.toString())!.name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person as React.SFC<PersonProps>}/>
    </div>
  );
};

export default RecursiveExample;
