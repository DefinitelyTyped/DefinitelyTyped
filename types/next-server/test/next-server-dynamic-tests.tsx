import * as React from "react";
import dynamic, { LoadingComponentProps } from "next-server/dynamic";

// You'd typically do this via import('./MyComponent')
interface MyComponentProps {
    foo: string;
}
const MyComponent: React.StatelessComponent<MyComponentProps> = () => <div>I'm async!</div>;
const asyncComponent = Promise.resolve(MyComponent);

// Examples from
// https://github.com/zeit/next.js/#dynamic-import

const LoadingComponent: React.StatelessComponent<LoadingComponentProps> = ({
    isLoading,
    error
}) => <p>loading...</p>;

// 1. Basic Usage (Also does SSR)
const DynamicComponent = dynamic(asyncComponent);
const dynamicComponentJSX = <DynamicComponent foo="bar" />;

// 2. With Custom Loading Component
const DynamicComponentWithCustomLoading = dynamic(asyncComponent, {
    loading: LoadingComponent
});
const dynamicComponentWithCustomLoadingJSX = <DynamicComponentWithCustomLoading foo="bar" />;

// 3. With No SSR
const DynamicComponentWithNoSSR = dynamic(asyncComponent, {
    ssr: false
});

// 4. With Multiple Modules At Once
const HelloBundle = dynamic<MyComponentProps>({
    modules: () => {
        const components = {
            Hello1: asyncComponent,
            Hello2: asyncComponent
        };

        return components;
    },
    render: (props, { Hello1, Hello2 }) => (
        <div>
            <h1>{props.foo}</h1>
            <Hello1 />
            <Hello2 />
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
const DynamicComponentWithNoLoading = dynamic(asyncComponent, {
    loading: () => null
});
