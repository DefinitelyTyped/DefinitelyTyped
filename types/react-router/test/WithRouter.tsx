import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface TOwnProps extends RouteComponentProps {
    username: string;
}

const ComponentFunction = (props: TOwnProps) => (
    <h2>Welcome {props.username}</h2>
);

class ComponentClass extends React.Component<TOwnProps> {
    render() {
        return <h2>Welcome {this.props.username}</h2>;
    }
}

const WithRouterComponentFunction = withRouter(ComponentFunction);
const WithRouterComponentClass = withRouter(ComponentClass);
WithRouterComponentClass.WrappedComponent; // $ExpectType typeof ComponentClass

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

    type SomethingToRead = (Book | Magazine) & RouteComponentProps;

    const Readable: React.SFC<SomethingToRead> = props => {
        if (props.kind === 'magazine') {
            return <div>magazine #{props.issue}</div>;
        }

        return <div>magazine #{props.author}</div>;
    };

    const RoutedReadable = withRouter(Readable);

    <RoutedReadable kind="book" author="Hejlsberg" />;
    <RoutedReadable kind="magazine" author="Hejlsberg" />; // $ExpectError
}
