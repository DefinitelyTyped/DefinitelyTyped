import { Component } from '@wordpress/element';
import * as C from '@wordpress/compose';

//
// utils/create-higher-order-component
//
(() => {
    const withFoo = C.createHigherOrderComponent<{ foo: string }>(
        OriginalComponent => props => <OriginalComponent foo="hello" {...props} />,
        'withFoo'
    );

    const Enhanced = withFoo(({ foo, bar }: { foo: string; bar: string }) => (
        <div>
            {foo} and {bar}
        </div>
    ));

    <Enhanced bar="bar" />;
})();

//
// higher-order/if-condition
//
(() => {
    interface Props {
        isVisible: boolean;
        foo: string;
        bar: string;
    }
    const Original = ({ isVisible, foo, bar }: Props) => (
        <div>
            {foo} and {bar}
        </div>
    );
    const Enhanced = C.ifCondition<Props>(({ isVisible }) => isVisible)(Original);
    <Enhanced isVisible={false} foo="foo" bar="bar" />;
})();

//
// higher-order/pure
//
(() => {
    const Original = ({ foo, bar }: { foo: string; bar: string }) => (
        <div>
            {foo} and {bar}
        </div>
    );

    const Enhanced = C.pure(Original);

    <Original foo="foo" bar="bar" />;
    <Enhanced foo="foo" bar="bar" />;
})();

//
// higher-order/with-global-events
//
(() => {
    const Enhanced = C.withGlobalEvents({ resize: 'handleResize' })(
        class extends Component<{ foo: string }> {
            handleResize() {
                console.log('resized');
            }
            render() {
                return <h1>{this.props.foo}</h1>;
            }
        }
    );
    <Enhanced foo="foo" />;
})();

//
// higher-order/with-instance-id
//
(() => {
    interface Props {
        foo: string;
        instanceId: string;
    }
    const Enhanced = C.withInstanceId(({ foo, instanceId }: Props) => <div id={instanceId}>{foo}</div>);
    <Enhanced foo="foo" />;
})();

//
// higher-order/with-safe-timeout
//
(() => {
    interface Props {
        foo: string;
        setTimeout: typeof setTimeout;
    }
    const Enhanced = C.withSafeTimeout(({ foo, setTimeout }: Props) => (
        <div onClick={() => setTimeout(() => console.log('Hello World', 100))}>{foo}</div>
    ));
    <Enhanced foo="foo" />;
})();

//
// higher-order/with-state
//
(() => {
    interface Props {
        count: number;
        setState(obj: any): void;
    }
    const Enhanced = C.withState<{ count: number }>({ count: 0 })(({ count, setState }: Props) => (
        <button onClick={() => setState({ count: count + 1 })}>Clicked {count} times</button>
    ));
    <Enhanced />;
})();

//
// hooks/use-media-query
//
(() => {
    const MyComponent = () => {
        const shouldRender = C.useMediaQuery('(min-width: 800px)');
        if (shouldRender) {
            return <h1>Hello World</h1>;
        }
        return null;
    };
    <MyComponent />;
})();

//
// hooks/use-reduced-motion
//
(() => {
    const MyComponent = () => {
        const shouldUseReducedMotiion = C.useReducedMotion();
        if (shouldUseReducedMotiion) {
            return <h1>Using reduced motion!</h1>;
        }
        return <h1>Not using reduced motion!</h1>;
    };
    <MyComponent />;
})();
