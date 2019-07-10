import * as React from "react";
import { Breadcrumbs, Breadcrumb } from "react-breadcrumbs";

class Wrapper extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

function FunctionWrapper(props: { children?: React.ReactNode }) {
    return <div>{props.children}</div>;
}

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumbs
                    className="demo__crumbs"
                    hidden
                    setCrumbs={crumbs => null}
                    wrapper={Wrapper}
                />

                <Breadcrumbs
                    className="demo__crumbs"
                    wrapper={FunctionWrapper}
                />

                <Breadcrumb data={{ title: "Dashboard", pathname: "/" }} />

                <Breadcrumb data={{ pathname: "/dashboard" }} hidden />
            </div>
        );
    }
}
