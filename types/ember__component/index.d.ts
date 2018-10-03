// Type definitions for @ember/component 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Fcomponent
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery" />

import CoreView from "@ember/component/-private/core-view";
import ClassNamesSupport from "@ember/component/-private/class-names-support";
import ViewMixin from "@ember/component/-private/view-mixin";
import ActionSupport from "@ember/component/-private/action-support";

// tslint:disable-next-line:strict-export-declare-modifiers
interface TemplateFactory {
    __htmlbars_inline_precompile_template_factory: any;
}

/**
 * A view that is completely isolated. Property access in its templates go to the view object
 * and actions are targeted at the view object. There is no access to the surrounding context or
 * outer controller; all contextual information is passed in.
 */
export default class Component extends CoreView.extend(
    ViewMixin,
    ActionSupport,
    ClassNamesSupport
) {
    // methods
    readDOMAttr(name: string): string;
    // properties
    /**
     * The WAI-ARIA role of the control represented by this view. For example, a button may have a
     * role of type 'button', or a pane may have a role of type 'alertdialog'. This property is
     * used by assistive software to help visually challenged users navigate rich web applications.
     */
    ariaRole: string;
    /**
     * The HTML id of the component's element in the DOM. You can provide this value yourself but
     * it must be unique (just as in HTML):
     *
     * If not manually set a default value will be provided by the framework. Once rendered an
     * element's elementId is considered immutable and you should never change it. If you need
     * to compute a dynamic value for the elementId, you should do this when the component or
     * element is being instantiated:
     */
    elementId: string;
    /**
     * If false, the view will appear hidden in DOM.
     */
    isVisible: boolean;
    /**
     * A component may contain a layout. A layout is a regular template but supersedes the template
     * property during rendering. It is the responsibility of the layout template to retrieve the
     * template property from the component (or alternatively, call Handlebars.helpers.yield,
     * {{yield}}) to render it in the correct location. This is useful for a component that has a
     * shared wrapper, but which delegates the rendering of the contents of the wrapper to the
     * template property on a subclass.
     */
    layout: TemplateFactory | string;
    /**
     * Enables components to take a list of parameters as arguments.
     */
    static positionalParams: string[] | string;
    // events
    /**
     * Called when the attributes passed into the component have been updated. Called both during the
     * initial render of a container and during a rerender. Can be used in place of an observer; code
     * placed here will be executed every time any attribute updates.
     */
    didReceiveAttrs(): void;
    /**
     * Called after a component has been rendered, both on initial render and in subsequent rerenders.
     */
    didRender(): void;
    /**
     * Called when the component has updated and rerendered itself. Called only during a rerender,
     * not during an initial render.
     */
    didUpdate(): void;
    /**
     * Called when the attributes passed into the component have been changed. Called only during a
     * rerender, not during an initial render.
     */
    didUpdateAttrs(): void;
    /**
     * Called before a component has been rendered, both on initial render and in subsequent rerenders.
     */
    willRender(): void;
    /**
     * Called when the component is about to update and rerender itself. Called only during a rerender,
     * not during an initial render.
     */
    willUpdate(): void;
}
