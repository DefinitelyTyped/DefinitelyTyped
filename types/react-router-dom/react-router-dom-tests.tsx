import * as React from 'react';
import { NavLink, NavLinkProps, match, Link, RouteComponentProps, LinkProps } from 'react-router-dom';
import * as H from 'history';

const getIsActive = (extraProp: string) => (match: match | null, location: H.Location) => !!extraProp;

type Props = NavLinkProps & {
    extraProp: string;
}

export default function(props: Props) {
    const { extraProp, ...rest } = props;
    const isActive = getIsActive(extraProp);
    return <NavLink {...rest} isActive={isActive}>link</NavLink>;
}

type OtherProps = RouteComponentProps<{
    id: string;
}>;

const Component: React.FC<OtherProps> = props => {
    if (!props.match) {
        return null;
    }

    const { id } = props.match.params;
    return <div>{id}</div>;
};

<Link to="/url">link</Link>;

const MyLink: React.FC<LinkProps> = props => <Link style={{ color: 'red' }} {...props}>link</Link>;
<Link to="/url" component={MyLink}>link</Link>;

<Link to={location => ({ ...location, pathname: '/pizza' })}>link</Link>;
<NavLink to={location => ({ ...location, pathname: '/pizza' })}>link</NavLink>;

const refCallback: React.Ref<HTMLAnchorElement> = node => {};
<Link to="/url" replace={true} innerRef={refCallback}>link</Link>;
<Link to="/url" replace={true} ref={refCallback}>link</Link>;
<NavLink to="/url" replace={true} innerRef={refCallback}>link</NavLink>;
<NavLink to="/url" replace={true} ref={refCallback}>link</NavLink>;
const ref = React.createRef<HTMLAnchorElement>();
<Link to="/url" replace={true} innerRef={ref}>link</Link>;
<Link to="/url" replace={true} ref={ref}>link</Link>;
<NavLink to="/url" replace={true} innerRef={ref}>link</NavLink>;
<NavLink to="/url" replace={true} ref={ref}>link</NavLink>;

<Link to="/url" aria-current="page">link</Link>;

React.createElement<LinkProps<{ foo: number }> & React.RefAttributes<HTMLAnchorElement>>(Link, {
    to: { pathname: 'abc', state: { foo: 5 } },
    children: 'link',
});
React.createElement<NavLinkProps<{ foo: number }> & React.RefAttributes<HTMLAnchorElement>>(NavLink, {
    to: { pathname: 'abc', state: { foo: 5 } },
    children: 'link',
});
