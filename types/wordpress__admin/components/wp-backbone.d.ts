import * as Backbone from 'backbone';
import * as _ from 'lodash';

export type WpBackboneViewList = WpBackBoneView[] | { [key: string]: WpBackBoneView[] };

export interface WpBackBoneViewOptions {
    template?: _.TemplateExecutor;
    [key: string]: any;
}

export interface WpSubViewSetOptions {
    silent?: boolean;
    add?: boolean;
    at?: number;
}

/**
 * WordPress Backbone instance
 */
export interface WpBackbone {
    View: WpBackBoneView;
    Subviews: WpBackboneSubviews;
}

/**
 * A backbone subview manager.
 */
export type WpBackboneSubviews = Backbone.Model & {
    (view: WpBackBoneView, views: WpBackboneViewList): void;

    /**
     * Fetches all of the subviews.
     */
    all: () => WpBackBoneView[];

    /**
     * Fetches all subviews that match a given `selector`.
     *
     * If no `selector` is provided, it will grab all subviews attached
     * to the view's root.
     *
     * @param selector A jQuery selector.
     */
    get: (selector: string) => WpBackBoneView | undefined;

    /**
     * Fetches the first subview that matches a given `selector`.
     *
     * If no `selector` is provided, it will grab the first subview attached to the
     * view's root.
     *
     * Useful when a selector only has one subview at a time.
     *
     * @param selector A jQuery selector.
     */
    first: (selector: string) => WpBackBoneView | null;

    /**
     * Registers subview(s).
     *
     * Registers any number of `views` to a `selector`.
     *
     * When no `selector` is provided, the root selector (the empty string)
     * is used. `views` accepts a `Backbone.View` instance or an array of
     * `Backbone.View` instances.
     */
    set: (selector: string, views: WpBackboneViewList, options?: WpSubViewSetOptions) => WpBackboneSubviews;

    /**
     * Add subview(s) to existing subviews.
     *
     * An alias to `Views.set()`, which defaults `options.add` to true.
     *
     * Adds any number of `views` to a `selector`.
     *
     * When no `selector` is provided, the root selector (the empty string)
     * is used. `views` accepts a `Backbone.View` instance or an array of
     * `Backbone.View` instances.
     */
    add: (selector: string, views: WpBackboneViewList, options?: WpSubViewSetOptions) => WpBackboneSubviews;

    /**
     * Removes an added subview.
     *
     * Stops tracking `views` registered to a `selector`. If no `views` are
     * set, then all of the `selector`'s subviews will be unregistered and
     * removed.
     */
    unset: (selector: string, views: WpBackboneViewList, options?: WpSubViewSetOptions) => WpBackboneSubviews;

    /**
     * Detaches all subviews.
     *
     * Helps to preserve all subview events when re-rendering the master
     * view. Used in conjunction with `Views.render()`.
     */
    detach: () => WpBackboneSubviews;

    /**
     * Renders all subviews.
     *
     * Used in conjunction with `Views.detach()`.
     */
    render: () => WpBackboneSubviews;

    /**
     * Removes all subviews.
     *
     * Triggers the `remove()` method on all subviews. Detaches the master
     * view from its parent. Resets the internals of the views manager.
     *
     * Accepts an `options` object. If `options.silent` is set, `unset`
     * will *not* be triggered on the master view's parent.
     *
     */
    remove: (options: false | { silent: boolean }) => WpBackboneSubviews;

    /**
     * Replaces a selector's subviews
     *
     * By default, sets the `$target` selector's html to the subview `els`.
     *
     * @param $target Selector where to put the elements.
     * @param els HTML or elements to put into the selector's HTML.
     *
     * Can be overridden in subclasses.
     */
    replace: ($target: JQuery, els: string | HTMLElement | HTMLElement[]) => WpBackboneSubviews;

    /**
     * Insert subviews into a selector.
     *
     * By default, appends the subview `els` to the end of the `$target`
     * selector. If `options.at` is set, inserts the subview `els` at the
     * provided index.
     */
    insert: (
        $target: JQuery,
        els: string | HTMLElement | HTMLElement[],
        options: WpSubViewSetOptions,
    ) => WpBackboneSubviews;

    /**
     * Triggers the ready event.
     *
     * Only use this method if you know what you're doing. For performance reasons,
     * this method does not check if the view is actually attached to the DOM. It's
     * taking your word for it.
     *
     * Fires the ready event on the current view and all attached subviews.
     */
    ready: () => WpBackboneSubviews;
};

/**
 * The base view class.
 *
 * This extends the backbone view to have a build-in way to use subviews. This
 * makes it easier to have nested views.
 *
 */
export type WpBackBoneView = Backbone.View & {
    Subviews: WpBackboneSubviews;
    extend(): typeof Backbone.Model.extend;

    constructor: (options: WpBackBoneViewOptions) => void;
    /**
     * Removes this view and all subviews.
     */
    remove: () => WpBackboneSubviews;

    /**
     * Renders this view and all subviews.
     */
    render: () => WpBackBoneView;

    /**
     * Returns the options for this view.
     */
    prepare: () => WpBackBoneViewOptions;

    /**
     * Method that is called when the ready event is triggered.
     */
    ready: () => void;
};
