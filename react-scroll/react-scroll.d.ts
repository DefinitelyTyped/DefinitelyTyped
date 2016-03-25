// Type definitions for redux-immutable v3.0.5
// Project: https://github.com/fisshy/react-scroll
// Definitions by: Pedro Pereira <https://github.com/oizie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-scroll" {
    import React = __React

    interface Link extends React.ClassicComponentClass<any> {}
    interface Element extends React.ClassicComponentClass<any> {}

    interface scrollEvnt {
        register(evtName: string, callback: Function) : void,
        remove(evtName: string) : void
    }

    interface Events {
        scrollEvent: scrollEvnt
    }

    interface scroller {
        scrollTo(to: any, animate?: any, duration?: any, offset?: any) : void
    }

    const Link: Link;
    const Element: Element;
    const Events: Events;
    const scroller: scroller;

    export {
        Link,
        Element,
        Events,
        scroller
    }
}