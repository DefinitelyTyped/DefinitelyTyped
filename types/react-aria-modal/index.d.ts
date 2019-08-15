// Type definitions for react-aria-modal 2.12
// Project: https://github.com/davidtheclark/react-aria-modal#readme
// Definitions by: forabi <https://github.com/forabi>
//                 dkrk <https://github.com/grgr-dkrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import React = require('react');

export interface AriaModalProps {
    /**
     * If true, the modal will receive a role of alertdialog,
     * instead of its default dialog.
     */
    alert?: boolean;

    /**
     * By default, the modal is active when mounted, deactivated when unmounted.
     * However, you can also control its active/inactive state by changing
     * its mounted property instead.
     */
    mounted?: boolean;

    /**
     * Provide your main application node here (which the modal should
     * render outside of), and when the modal is open this application
     * node will receive the attribute `aria-hidden="true"`.
     * This can help screen readers understand what's going on.
     */
    applicationNode?: Node | Element;

    /**
     * Same as `applicationNode`, but a function that returns the node
     * instead of the node itself. This can be useful or necessary in
     * a variety of situations, one of which is server-side React
     * rendering. The function will not be called until after the
     * component mounts, so it is safe to use browser globals
     * and refer to DOM nodes within it (e.g. `document.getElementById(..)`),
     * without ruining your server-side rendering.
     */
    getApplicationNode?(): Node | Element;

    /**
     * By default, styles are applied inline to the dialog and underlay
     * portions of the component. However, you can disable all inline
     * styles by setting `includeDefaultStyles` to false. If set, you
     * must specify all styles externally, including positioning.
     * This is helpful if your project uses external CSS assets.
     *
     * _Note_: underlayStyle and dialogStyle can still be set inline,
     * but these will be the only styles applied.
     */
    includeDefaultStyles?: boolean;

    /**
     * Apply a class to the dialog in order to custom-style it.
     *
     * Be aware that, _by default_, this module does apply various
     * inline styles to the dialog element in order position it.
     * To disable _all inline styles_, see `includeDefaultStyles`.
     */
    dialogClass?: string;

    /**
     * Choose your own id attribute for the dialog element.
     *
     * Default: `react-aria-modal-dialog`.
     */
    dialogId?: string;

    /**
     * Customize properties of the style prop that is passed to the dialog.
     */
    dialogStyle?: React.CSSProperties;

    /**
     * By default, when the modal activates its first focusable child will
     * receive focus. However, if `focusDialog` is true, the dialog itself
     * will receive initial focus — and that focus will be hidden.
     * (This is essentially what Bootstrap does with their modal.)
     */
    focusDialog?: boolean;

    /**
     * By default, when the modal activates its first focusable child will
     * receive focus. If, instead, you want to identify a specific element
     * that should receive initial focus, pass a selector string to this
     * prop. (That selector is passed to `document.querySelector()` to find
     * the DOM node.)
     */
    initialFocus?: string;

    /**
     * A string to use as the modal's accessible title. This value is passed
     * to the modal's `aria-label` attribute. You must use either `titleId` or
     * `titleText`, but not both.
     */
    titleText?: string;

    /**
     * The `id` of the element that should be used as the modal's accessible
     * title. This value is passed to the modal's `aria-labelledby` attribute.
     * You must use either `titleId` or `titleText`, but not both.
     */
    titleId?: string;

    /**
     * Customize properties of the `style` prop that is passed to the underlay.
     * The best way to add some vertical displacement to the dialog is to add
     * top & bottom padding to the underlay.
     * This is illustrated in the demo examples.
     */
    underlayStyle?: React.CSSProperties;

    /**
     * Apply a class to the underlay in order to custom-style it.
     * This module does apply various inline styles, though, so be aware that
     * overriding some styles might be difficult. If, for example, you want
     * to change the underlay's color, you should probably use the
     * `underlayColor` prop instead of a class.
     * If you would rather control all CSS, see `includeDefaultStyles`.
     */
    underlayClass?: string;

    /**
     * By default, a click on the underlay will exit the modal.
     * Pass `false`, and clicking on the underlay will do nothing.
     */
    underlayClickExits?: boolean;

    /**
     * By default, the Escape key exits the modal. Pass `false`, and it won't.
     */
    escapeExits?: boolean;

    /**
     * If you want to change the underlay's color, you can
     * do that with this prop. If `false`, no background color will be
     * applied with inline styles. Presumably you will apply then
     * yourself via an `underlayClass`.
     *
     * Default: rgba(0,0,0,0.5)
     */
    underlayColor?: string;

    /**
     * If `true`, the modal's contents will be vertically (as well as horizontally) centered.
     */
    verticallyCenter?: boolean;

    /**
     * This function is called in the modal's `componentDidMount()` lifecycle method.
     * You can use it to do whatever diverse and sundry things you feel like
     * doing after the modal activates.
     */
    onEnter?(): any;

    /**
     * This function needs to handles the state change of exiting (or deactivating) the modal.
     * Maybe it's just a wrapper around `setState()`; or maybe you use some more involved
     * Flux-inspired state management — whatever the case, this module leaves the state
     * management up to you instead of making assumptions.
     * That also makes it easier to create your own "close modal" buttons; because you
     * have the function that closes the modal right there, written by you, at your disposal.
     */
    onExit(): any;
}

/**
 * This difinition is for require one parameter of 'titleId' or 'title' (and not both) on AriaModal props.
 */
export type RequiredAriaTypes<T = Pick<AriaModalProps, 'titleId'>, U = Pick<AriaModalProps, 'titleText'>> =
    { [K in keyof T]-? : T[K] } & { [P in keyof U]: never} | { [X in keyof T]: never } & { [Y in keyof U]-?: U[Y]};

export default class AriaModal extends React.PureComponent<AriaModalProps & RequiredAriaTypes> {
    static renderTo(node: HTMLElement | string): void;
}
