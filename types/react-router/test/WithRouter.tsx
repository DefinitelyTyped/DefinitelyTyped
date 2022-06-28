import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';

interface TOwnProps extends RouteComponentProps {
    username: string;
}

const ComponentFunction = (props: TOwnProps) => (
    <h2>Welcome {props.username}</h2>
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
    // @ts-expect-error
    <RoutedReadable kind="magazine" author="Hejlsberg" />;
}
