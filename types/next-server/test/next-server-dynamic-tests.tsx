import * as React from "react";
import dynamic, { LoadingComponentProps } from "next-server/dynamic";

const asyncComponent = import('./imports/with-default');
const asyncSecond = import('./imports/with-default-second');

// Examples from
// https://github.com/zeit/next.js/#dynamic-import

const LoadingComponent: React.FunctionComponent<LoadingComponentProps> = ({
    isLoading,
    error
}) => <p>loading...</p>;

// 1. Basic Usage (Also does SSR)
const Test1 = dynamic(asyncComponent);
const test1JSX = <Test1 foo />;

// 1.1 Basic Usage (Loader function)
const Test1Func = dynamic(() => asyncComponent);
const test1FuncJSX = <Test1Func foo />;

// 2. With Custom Options
const Test2 = dynamic(() => asyncComponent, {
    loading: LoadingComponent,
    ssr: false
});
const test2JSX = <Test2 foo />;

// 4. With Multiple Modules At Once
interface BundleComponentProps {
    foo: string;
    bar?: boolean;
}

const HelloBundle = dynamic({
    modules: () => {
        const components = {
            Hello1: () => asyncComponent,
            Hello2: () => asyncSecond
        };

        return components;
    },
    render: (props: BundleComponentProps, { Hello1, Hello2 }) => (
        <div>
            <h1>{props.foo}</h1>
            <Hello1 foo />
            <Hello2 bar={props.bar} />
        </div>
    )
});
const helloBundleJSX = <HelloBundle foo="bar" />;

// 5. With plain Loadable options
const LoadableComponent = dynamic({
    loader: () => asyncComponent,
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});

// 6. No loading
const DynamicComponentWithNoLoading = dynamic(() => asyncComponent, {
    loading: () => null
});
