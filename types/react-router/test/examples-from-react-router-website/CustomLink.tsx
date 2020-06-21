import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  LinkProps,
  Link
} from 'react-router-dom';

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/">Home</OldSchoolMenuLink>
      <OldSchoolMenuLink to="/about">About</OldSchoolMenuLink>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

type OldSchoolMenuLinkProps = LinkProps & {
    activeOnlyWhenExact?: boolean;
    children: string;
};

const OldSchoolMenuLink: React.SFC<OldSchoolMenuLinkProps> = ({ children, to, activeOnlyWhenExact }) => (
  <Route path={to as string} exact={activeOnlyWhenExact} children={(params: { match: boolean }) => (
    <div className={params.match ? 'active' : ''}>
      {params.match ? '> ' : ''}<Link to={to}>{children}</Link>
    </div>
  )}/>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default CustomLinkExample;
