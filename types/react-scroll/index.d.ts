// Type definitions for react-scroll
// Project: https://github.com/fisshy/react-scroll
// Definitions by: Ioannis Kokkinidis <www.github.com/sudoplz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

interface Link extends React.ClassicComponentClass<any> { }
interface Element extends React.ClassicComponentClass<any> { }
interface Button extends React.ClassicComponentClass<any> {}
interface DirectLink extends React.ClassicComponentClass<any> {}

interface scrollEvnt {
    register(evtName: string, callback: Function): void,
    remove(evtName: string): void
}

interface Events {
    scrollEvent: scrollEvnt
}

interface scroller {
    scrollTo(to: any, animate?: any, duration?: any, offset?: any): void
}

interface scrollSpy {
    update() : void
}

interface animateScroll {
    scrollToTop(options?: any) : void,
    scrollToBottom(options?: any) : void,
    scrollTo(toY: number, options?: any) : void,
    scrollMore(toY: number, options?: any) : void,
}

interface directScroller {
    get() : any
}

interface Helpers {
}

declare const Link: Link;
declare const Element: Element;
declare const Events: Events;
declare const scroller: scroller;
declare const DirectLink: DirectLink;
declare const Button: Button;
declare const scrollSpy: scrollSpy;
declare const directScroller: directScroller;
declare const Helpers: Helpers;
declare const animateScroll: animateScroll;

export {
    Link,
    Element,
    Events,
    scroller,
    scrollSpy,
    directScroller,
    DirectLink,
    Button,
    Helpers,
    animateScroll
}
