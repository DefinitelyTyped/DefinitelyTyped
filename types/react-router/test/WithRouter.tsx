import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';

interface TPartialProps extends Partial<RouteComponentProps> {
    username: string;
}

const PartialComponentFunction = (props: TPartialProps) => (
    props.location
        ? <h2>Welcome {props.username} from {props.location.pathname}</h2>
        : <h2>Welcome {props.username}</h2>
);

const PartialFunctionComponent: React.FunctionComponent<TPartialProps> = props => (
    <h2>Welcome {props.username}</h2>
);

class PartialComponentClass extends React.Component<TPartialProps> {
    render() {
        return <h2>Welcome {this.props.username}</h2>;
    }
}

const TestComponent = () => (
    <PartialComponentFunction username="foobar" />
);

const PartialWithRouterComponentFunction = withRouter(PartialComponentFunction);
const PartialWithRouterFunctionComponent = withRouter(PartialFunctionComponent);
const PartialWithRouterComponentClass = withRouter(PartialComponentClass);
PartialWithRouterComponentClass.WrappedComponent; // $ExpectType typeof PartialComponentClass

// can use unwrapped component with partials
{
    type FooProps = { username: string } & Partial<RouteComponentProps>;

    const FooComp: React.FC<FooProps> = props => {
        props.location; // $ExpectType Location<UnknownFacade> | undefined
        props.history; // $ExpectType History<UnknownFacade> | undefined

        return <div>user: {props.username}</div>;
    };

    const RoutedFoo = withRouter(FooComp);

    <FooComp username="Joe" />;
}

interface TOwnProps extends RouteComponentProps {
    username: string;
}

const ComponentFunction = (props: TOwnProps) => (
    <h2>Welcome {props.username} from {props.location.pathname}</h2>
);

const FunctionComponent: React.FunctionComponent<TOwnProps> = props => (
    <h2>Welcome {props.username}</h2>
);

class ComponentClass extends React.Component<TOwnProps> {
    render() {
        return <h2>Welcome {this.props.username}</h2>;
    }
}

const WithRouterComponentFunction = withRouter(ComponentFunction);
const WithRouterFunctionComponent = withRouter(FunctionComponent);
const WithRouterComponentClass = withRouter(ComponentClass);
WithRouterComponentClass.WrappedComponent; // $ExpectType typeof ComponentClass

// Fix introduced in https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38326
// caused more common use cases with `strictFunctionTypes` to fail
// declare const Component: React.ComponentType<TOwnProps>;
// $ExpectError ^3.6.3
// const WithRouterComponent = withRouter(Component);

const WithRouterTestFunction = () => (
    <WithRouterComponentFunction username="John" />
);
const OnWrappedRefFn = (ref: ComponentClass | null) => {};
const WithRouterTestClass = () => <WithRouterComponentClass username="John" wrappedComponentRef={OnWrappedRefFn} />;

const OnWrappedRef = React.createRef<ComponentClass>();
const WithRouterTestClass2 = () => <WithRouterComponentClass username="John" wrappedComponentRef={OnWrappedRef} />;

// union props
{
    interface Book {
        kind: 'book';
        author: string;
    }

    interface Magazine {
        kind: 'magazine';
        issue: number;
    }

    interface State { foo: number; }

    type SomethingToRead = (Book | Magazine) & RouteComponentProps<{}, StaticContext, State>;

    const Readable: React.FC<SomethingToRead> = props => {
        props.location.state; // $ExpectType State
        props.history.location.state; // $ExpectType State

        if (props.kind === 'magazine') {
            return <div>magazine #{props.issue}</div>;
        }

        return <div>magazine #{props.author}</div>;
    };

    const RoutedReadable = withRouter(Readable);

    <RoutedReadable kind="book" author="Hejlsberg" />;
    <RoutedReadable kind="magazine" author="Hejlsberg" />; // $ExpectError
}
