// eslint-disable-next-line @definitelytyped/no-self-import
import CoreView from "@ember/component/-private/core-view";
// eslint-disable-next-line @definitelytyped/no-self-import
import ClassNamesSupport from "@ember/component/-private/class-names-support";
// eslint-disable-next-line @definitelytyped/no-self-import
import ViewMixin from "@ember/component/-private/view-mixin";
import { Opaque } from "ember/-private/type-utils";
import { Capabilities, ComponentManager } from "./-private/glimmer-interfaces";

// Re-export these types so people can use them!
export { Capabilities, ComponentManager };

interface TemplateFactory {
    __htmlbars_inline_precompile_template_factory: any;
}

// The generic here is for a *signature: a way to hang information for tools
// like Glint which can provide typey checking for component templates using
// information supplied via this generic. While it may appear useless on this
// class definition and extension, it is used by external tools and should not
// be removed.
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export default interface Component<S = unknown> extends ViewMixin, ClassNamesSupport, Opaque<S> {}
export default class Component<S = unknown> extends CoreView {
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

    /**
     * `reopen()` was deprecated and removed from `Component`. It is given an
     * illegitimate type in these types so that you cannot call it or use it!
     * Unfortunately, it cannot actually be *removed* from this type, because TS
     * rightly complains that `Component` is no longer a valid subtype of the
     * `EmberObject` base class, and will not let you use it.
     */
    static reopen(): never;
}

/**
 * Associate a class with a component manager (an object that is responsible for
 * coordinating the lifecycle events that occurs when invoking, rendering and
 * re-rendering a component).
 *
 * @param managerFactory a function to create the owner for an object
 * @param object the object to associate with the componetn manager
 * @return the same object passed in, now associated with the manager
 */
export function setComponentManager<T>(managerFactory: (owner: unknown) => ComponentManager<unknown>, object: T): T;

/**
 * Takes a component class and returns the template associated with the given component class,
 * if any, or one of its superclasses, if any, or undefined if no template association was found.
 *
 * @param object the component object
 * @return the template factory of the given component
 */
export function getComponentTemplate(obj: object): TemplateFactory | undefined;

export function setComponentTemplate<T>(factory: TemplateFactory, obj: T): T;

// In normal TypeScript, these built-in components are essentially opaque tokens
// that just need to be importable. Declaring them with unique interfaces
// like this, however, gives tools like Glint (that DO have a richer
// notion of what they are) a place to install more detailed type information.
export interface Input extends Opaque<"component:input"> {}
export interface Textarea extends Opaque<"component:textarea"> {}

/**
 * The `Input` component lets you create an HTML `<input>` element.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.components/methods/Input?anchor=Input
 */
export const Input: Input;

/**
 * The `Textarea` component inserts a new instance of `<textarea>` tag into the template.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.components/methods/Textarea?anchor=Textarea
 */
export const Textarea: Textarea;

// Do not export anything but what we *explicitly* say to export.
export {};
