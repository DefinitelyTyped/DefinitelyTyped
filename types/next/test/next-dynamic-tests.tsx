import * as React from "react";
import dynamic, { LoadingComponentProps } from "next/dynamic";

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
const DynamicComponent = dynamic(Promise.resolve(MyComponent));
const dynamicComponentJSX = <DynamicComponent foo="bar" />;

// 1.1 Basic Usage (Loader function, module shape with 'export = Component' / 'module.exports = Component')
const DynamicComponent2 = dynamic(() => Promise.resolve(MyComponent));
const dynamicComponent2JSX = <DynamicComponent2 foo="bar" />;

// 1.2 Basic Usage (Loader function, module shape with 'export default Component')
const DynamicComponent3 = dynamic(() => Promise.resolve({ default: MyComponent }));
const dynamicComponent3JSX = <DynamicComponent3 foo="bar" />;

// TODO: Work with module shape 'export { Component }'

// 2. With Custom Loading Component
const DynamicComponentWithCustomLoading = dynamic(import('./imports/with-default'), {
    loading: LoadingComponent
});
const dynamicComponentWithCustomLoadingJSX = <DynamicComponentWithCustomLoading foo />;

// 2.1. With Custom Loading Component (() => import('') syntax)
const DynamicComponentWithCustomLoading2 = dynamic(() => import('./imports/with-default'), {
    loading: LoadingComponent
});
const dynamicComponentWithCustomLoading2JSX = <DynamicComponentWithCustomLoading2 foo />;

// 3. With No SSR
const DynamicComponentWithNoSSR = dynamic(() => import('./imports/with-default'), {
    ssr: false
});

// 4. With Multiple Modules At Once
const HelloBundle = dynamic<MyComponentProps>({
    modules: () => {
        const components = {
            Hello1: () => import('./imports/with-default'),
            Hello2: () => import('./imports/with-default')
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
    loader: () => import('./imports/with-default'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});

// 6. No loading
const DynamicComponentWithNoLoading = dynamic(asyncComponent, {
    loading: () => null
});
