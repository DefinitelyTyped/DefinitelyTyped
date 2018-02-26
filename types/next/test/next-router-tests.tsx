import Router, * as r from "next/router";
import * as React from "react";
import * as qs from "querystring";

Router.readyCallbacks.push(() => {
    console.log("I'll get called when the router initializes.");
});
Router.ready(() => {
    console.log(
        "I'll get called immediately if the router initializes, or when it eventually does.",
    );
});

// Access readonly properties of the router.

Object.keys(Router.components).forEach(key => {
    const c = Router.components[key];
    c.err.isAnAny;

    return <c.Component />;
});

function split(routeLike: string) {
    routeLike.split("/").forEach(part => {
        console.log("path part: ", part);
    });
}

if (Router.asPath) {
    split(Router.asPath);
    split(Router.asPath);
}

split(Router.pathname);

const query = `?${qs.stringify(Router.query)}`;

// Assign some callback methods.
Router.onAppUpdated = (nextRoute: string) => console.log(nextRoute);
Router.onRouteChangeStart = (url: string) =>
    console.log("Route is starting to change.", url);
Router.onBeforeHistoryChange = (as: string) =>
    console.log("History hasn't changed yet.", as);
Router.onRouteChangeComplete = (url: string) =>
    console.log("Route chaneg is complete.", url);
Router.onRouteChangeError = (err: any, url: string) =>
    console.log("Route is starting to change.", url, err);

// Call methods on the router itself.
Router.reload("/route").then(() => console.log("route was reloaded"));
Router.back();

Router.push("/route").then((success: boolean) =>
    console.log("route push success: ", success),
);
Router.push("/route", "/asRoute").then((success: boolean) =>
    console.log("route push success: ", success),
);
Router.push("/route", "/asRoute", { shallow: false }).then((success: boolean) =>
    console.log("route push success: ", success),
);

Router.replace("/route").then((success: boolean) =>
    console.log("route replace success: ", success),
);
Router.replace("/route", "/asRoute").then((success: boolean) =>
    console.log("route replace success: ", success),
);
Router.replace("/route", "/asRoute", {
    shallow: false,
}).then((success: boolean) => console.log("route replace success: ", success));

Router.prefetch("/route").then(Component => {
    const element = <Component />;
});

r.withRouter(props => <div />);
