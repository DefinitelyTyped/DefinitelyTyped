import * as React from 'react';
import {
  NavLink,
  NavLinkProps,
  match,
  Link,
  RouteComponentProps
} from 'react-router-dom';
import * as H from 'history';

const getIsActive = (extraProp: string) => (match: match, location: H.Location) => !!extraProp;

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

type OtherProps = RouteComponentProps<{
  id: string;
}>;

const Component: React.SFC<OtherProps> = props => {
  if (!props.match) {
    return null;
  }

  const { id } = props.match.params;
  return (
    <div>{id}</div>
  );
};

<Link to="/url" />;

const refCallback: React.Ref<HTMLAnchorElement> = node => {};
<Link to="/url" replace={true} innerRef={refCallback} />;
const ref = React.createRef<HTMLAnchorElement>();
<Link to="/url" replace={true} innerRef={ref} />;
