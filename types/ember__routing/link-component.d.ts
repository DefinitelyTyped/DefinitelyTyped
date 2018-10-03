import Component from "@ember/component";

/**
 * `Ember.LinkComponent` renders an element whose `click` event triggers a
 * transition of the application's instance of `Ember.Router` to
 * a supplied route by name.
 */
export default class LinkComponent extends Component {
    /**
     * Used to determine when this `LinkComponent` is active.
     */
    currentWhen: any;
    /**
     * Sets the `title` attribute of the `LinkComponent`'s HTML element.
     */
    title: string | null;
    /**
     * Sets the `rel` attribute of the `LinkComponent`'s HTML element.
     */
    rel: string | null;
    /**
     * Sets the `tabindex` attribute of the `LinkComponent`'s HTML element.
     */
    tabindex: string | null;
    /**
     * Sets the `target` attribute of the `LinkComponent`'s HTML element.
     */
    target: string | null;
    /**
     * The CSS class to apply to `LinkComponent`'s element when its `active`
     * property is `true`.
     */
    activeClass: string;
    /**
     * Determines whether the `LinkComponent` will trigger routing via
     * the `replaceWith` routing strategy.
     */
    replace: boolean;
}
