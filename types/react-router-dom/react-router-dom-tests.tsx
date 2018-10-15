import * as React from 'react';
import {
  NavLink,
  NavLinkProps,
  match,
  Link
} from 'react-router-dom';
import * as H from 'history';

const getIsActive = (extraProp: string) => (match: match<any>, location: H.Location) => !!extraProp;

interface Props extends NavLinkProps {
  extraProp: string;
}

export default function(props: Props) {
  const {extraProp, ...rest} = props;
  const isActive = getIsActive(extraProp);
  return (
    <NavLink {...rest} isActive={isActive}/>
  );
}

<Link to="/url" />;

const acceptRef = (node: HTMLAnchorElement | null) => {};
<Link to="/url" replace={true} innerRef={acceptRef} />;
