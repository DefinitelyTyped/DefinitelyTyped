import * as React from "react";
import {
    BreadcrumbsProvider,
    Breadcrumbs,
    BreadcrumbsItem,
} from "react-breadcrumbs-dynamic";

class Test1 extends React.Component {
    render() {
        return (
            <BreadcrumbsProvider>
                <div>
                    <Breadcrumbs />
                    <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
                </div>
            </BreadcrumbsProvider>
        );
    }
}

const customProps = {
    yay: "yay"
};

class Test2 extends React.Component {
    render() {
        return (
            <BreadcrumbsProvider
                shouldBreadcrumbsUpdate={() => {}}
            >
                <div>
                    <Breadcrumbs
                        container={"nav"}
                        containerProps={customProps}
                        item={"a"}
                        finalItem={"strong"}
                        finalProps={customProps}
                        separator={"<span>/</span>"}
                        renameProps={customProps}
                        duplicateProps={customProps}
                    />
                    <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
                </div>
            </BreadcrumbsProvider>
        );
    }
}
