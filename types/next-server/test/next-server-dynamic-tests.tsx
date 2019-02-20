import * as React from "react";
import dynamic, { LoadingComponentProps } from "next-server/dynamic";

const asyncComponent = import('./imports/with-default');

// Examples from
// https://github.com/zeit/next.js/#dynamic-import

const LoadingComponent: React.StatelessComponent<LoadingComponentProps> = ({
    isLoading,
    error
}) => <p>loading...</p>;

// 1. Basic Usage (Also does SSR)
const DynamicComponent = dynamic(asyncComponent);
const dynamicComponentJSX = <DynamicComponent foo />;

// 1.1 Basic Usage (Loader function)
const DynamicComponent2 = dynamic(() => asyncComponent);
const dynamicComponent2JSX = <DynamicComponent2 foo />;

// 2. With Custom Loading Component
const DynamicComponentWithCustomLoading = dynamic(() => asyncComponent, {
    loading: LoadingComponent
});
const dynamicComponentWithCustomLoadingJSX = <DynamicComponentWithCustomLoading foo />;

// 3. With No SSR
const DynamicComponentWithNoSSR = dynamic(() => asyncComponent, {
    ssr: false
});

// 4. With Multiple Modules At Once
// TODO: Mapped components still doesn't infer their props.
interface BundleComponentProps {
    foo: string;
}

const HelloBundle = dynamic<BundleComponentProps>({
    modules: () => {
        const components = {
            Hello1: () => asyncComponent,
            Hello2: () => asyncComponent
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
const DynamicComponentWithNoLoading = dynamic(() => asyncComponent, {
    loading: () => null
});
