// Type definitions for pym.js 1.3
// Project: https://github.com/nprapps/pym.js/
// Definitions by: James Lin <https://github.com/igowerf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Callback {
    (value: string): void;
}

/**
 * An optional configuraiton object for `pym.Child`
 */
export interface ChildOptions {
    /**
     * callback invoked after receiving a resize event from the parent
     */
    renderCallback?: (message: string) => {} | null;

    /**
     * xdomain to validate messages received. defaults to '*'.
     */
    xdomain?: string;

    /**
     *  polling frequency in milliseconds to send height to parent. defaults to 0.
     */
    polling?: number;

    /**
     * parent container id used when navigating the child iframe to a new page but we want to keep it responsive
     */
    id?: number;

    /**
     * if passed it will be override the default parentUrl query string parameter name expected on the iframe src
     */
    parenturlparam?: string;
}

/**
 * Optional configuration for the parent instance.
 */
export interface ParentOptions {
    /**
     * defaults to '*'. xdomain to validate messages received
     */
    xdomain?: string;

    /**
     * if passed it will be assigned to the iframe title attribute
     */
    title?: string;

    /**
     * if passed it will be assigned to the iframe name attribute
     */
    name?: string;

    /**
     * if passed it will be assigned to the iframe id attribute
     */
    id?: string;

    /**
     * if passed and different than false it will be assigned to the iframe allowfullscreen attribute
     */
    allowfullscreen?: boolean;

    /**
     * if passed it will be assigned to the iframe sandbox attribute (we do not validate the syntax so be careful!!)
     */
    sandbox?: string;

    /**
     * if passed it will be override the default parentUrl query string parameter name passed to the iframe src
     */
    parenturlparam?: string;

    /**
     * if passed it will be override the default parentUrl query string parameter value passed to the iframe src
     */
    parenturlvalue?: string;

    /**
     * if passed and different than false it will strip the querystring params parentUrl and parentTitle passed to the iframe src
     */
    optionalparams?: string;

    /**
     * if passed it will activate scroll tracking on the parent
     */
    trackscroll?: boolean;

    /**
     * if passed it will set the throttle wait in order to fire scroll messaging. Defaults to 100 ms.
     */
    scrollwait?: number;
}

/**
 * The Child half of a response iframe.
 *
 * @param config Optional configuration for the child instance.
 */
export class Child {
    constructor(config?: ChildOptions);
    navigateParentTo(url: string): void;
    onMessage(messageType: string, callback: Callback): void;
    sendMessage(messageType: string, message: string): void;
    getParentPositionInfo(): void;
    scrollParentTo(hash: string): void;
    scrollParentToChildEl(id: string): void;
    scrollParentToChildPos(pos: number): void;
    sendHeight(): void;
    remove(): void;
}

/**
 * The Parent half of a response iframe.
 *
 * @param id The id of the div into which the iframe will be rendered.
 * @param url The url of the iframe source.
 * @param config Optional configuration for the parent instance.
 */
export class Parent {
    constructor(id: string, url: string, config?: ParentOptions);
    onMessage(messageType: string, callback: Callback): void;
    sendMessage(messageType: string, message: string): void;
    sendWidth(): void;
    sendViewportAndIFramePosition(): void;
    remove(): void;
}

export function autoInit(doNotRaiseEvents: boolean): [Parent];

export const autoInitInstances: Parent[];

export as namespace pym;
