import * as H from 'history';
import * as React from 'react';
import { match } from 'react-router';
import { HashLink, NavHashLink, NavHashLinkProps } from 'react-router-hash-link';

interface Props extends NavHashLinkProps {
  extraProp: string;
}

const getIsActive = (extraProp: string) => (match: match<any>, location: H.Location) => !!extraProp;

export default function(props: Props) {
  const {extraProp, ...rest} = props;
  const isActive = getIsActive(extraProp);
  return (
    <NavHashLink {...rest} isActive={isActive} />
  );
}

<HashLink to="url" />;

const acceptRef = (node: HTMLAnchorElement | null) => {
};
<HashLink to="/url" replace={true} innerRef={acceptRef} />;
