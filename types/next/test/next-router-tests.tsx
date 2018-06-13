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

Object.keys(Router.router.components).forEach(key => {
    const c = Router.router.components[key];
    c.err.isAnAny;

    return <c.Component />;
});

function split(routeLike: string) {
    routeLike.split("/").forEach(part => {
        console.log("path part: ", part);
    });
}

if (Router.router.asPath) {
    split(Router.router.asPath);
    split(Router.router.asPath);
}

split(Router.router.pathname);

const query = `?${qs.stringify(Router.router.query)}`;

// Assign some callback methods.
Router.router.onAppUpdated = (nextRoute: string) => console.log(nextRoute);
Router.router.onRouteChangeStart = (url: string) =>
    console.log("Route is starting to change.", url);
Router.router.onBeforeHistoryChange = (as: string) =>
    console.log("History hasn't changed yet.", as);
Router.router.onRouteChangeComplete = (url: string) =>
    console.log("Route chaneg is complete.", url);
Router.router.onRouteChangeError = (err: any, url: string) =>
    console.log("Route is starting to change.", url, err);

// Call methods on the router itself.
Router.router.reload("/route").then(() => console.log("route was reloaded"));
Router.router.back();

Router.router.push("/route").then((success: boolean) =>
    console.log("route push success: ", success),
);
Router.router.push("/route", "/asRoute").then((success: boolean) =>
    console.log("route push success: ", success),
);
Router.router.push("/route", "/asRoute", { shallow: false }).then((success: boolean) =>
    console.log("route push success: ", success),
);

Router.router.replace("/route").then((success: boolean) =>
    console.log("route replace success: ", success),
);
Router.router.replace("/route", "/asRoute").then((success: boolean) =>
    console.log("route replace success: ", success),
);
Router.router.replace("/route", "/asRoute", {
    shallow: false,
}).then((success: boolean) => console.log("route replace success: ", success));

Router.router.prefetch("/route").then(Component => {
    const element = <Component />;
});

r.withRouter(props => <div />);
