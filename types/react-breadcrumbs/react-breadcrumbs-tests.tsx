import * as React from "react";
import { Breadcrumbs, Breadcrumb } from "react-breadcrumbs";

class Wrapper extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return <div>{this.props.children}</div>;
    }
}

function FunctionWrapper(props: { children?: React.ReactNode | undefined }) {
    return <div>{props.children}</div>;
}

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumbs
                    className="demo__crumbs"
                    hidden
                    separator="|"
                    setCrumbs={crumbs => null}
                    wrapper={Wrapper}
                />

                <Breadcrumbs
                    className="demo__crumbs"
                    wrapper={FunctionWrapper}
                />

                <Breadcrumbs className="demo__crumbs">
                    Children
                </Breadcrumbs>

                <Breadcrumb data={{ title: "Dashboard", pathname: "/" }} />

                <Breadcrumb data={{ pathname: "/dashboard" }} hidden />

                <Breadcrumb data={{ title: "Dashboard", pathname: "/" }}>
                    Children
                </Breadcrumb>
            </div>
        );
    }
}
