import dynamic, * as d from "next/dynamic";
import * as React from "react";

// typically you'd use this with an esnext-style import() statement, but we'll make do without
interface DynamicComponentProps {
    foo: string;
    bar: number;
}
async function getComponent() {
    return (props: DynamicComponentProps) => (
        <div>
            I'm an async component! {props.foo} {props.bar}
        </div>
    );
}

interface LoadingComponentProps {
    baz: boolean;
}

const DynamicComponent = dynamic(getComponent(), {
    loading: (props: LoadingComponentProps) => <div>Loading! {props.baz}</div>,
});

const jsx = <DynamicComponent foo="five" bar={5} baz />;
