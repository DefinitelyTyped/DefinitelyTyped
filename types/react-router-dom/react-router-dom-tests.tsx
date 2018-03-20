import * as React from 'react';
import {
  NavLink,
  NavLinkProps,
  BrowserRouter as Router,
  match,
} from 'react-router-dom';
import * as H from 'history';

const history = H.createBrowserHistory();

const getIsActive = (extraProp: string) => (match: match<any>, location: H.Location) => !!extraProp;

interface Props extends NavLinkProps {
  extraProp: string;
}

export const router = <Router history={history}></Router>;

export default function(props: Props) {
  const {extraProp, ...rest} = props;
  const isActive = getIsActive(extraProp);
  return (
    <NavLink {...rest} isActive={isActive}/>
  );
}
