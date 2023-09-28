import * as React from "react";
import CSSTransitionGroup = require("react-addons-css-transition-group");

declare const ComponentClass: React.ClassicComponentClass<{}>;

React.createFactory(CSSTransitionGroup)({
    component: ComponentClass,
    childFactory: c => c,
    transitionName: "transition",
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true,
    id: "some-id",
    className: "some-class",
});

React.createFactory(CSSTransitionGroup)({
    transitionName: {
        enter: "enter",
        enterActive: "enterActive",
        leave: "leave",
        leaveActive: "leaveActive",
        appear: "appear",
        appearActive: "appearActive",
    },
});
