import RouteInfo from './route-info';

export default interface Transition {
    /**
     * This property is a `RouteInfo` object that represents where transition originated from.
     * It's important to note that a `RouteInfo` is a linked list and this property is simply the head node of the list.
     * In the case of an initial render, `from` will be set to `null`.
     */
    readonly from: RouteInfo | null;
    /**
     * This property is a `RouteInfo` object that represents where the router is transitioning to.
     * It's important to note that a `RouteInfo` is a linked list and this property is simply the leafmost route.
     */
    readonly to: RouteInfo;
    /**
     * Aborts the Transition. Note you can also implicitly abort a transition
     * by initiating another transition while a previous one is underway.
     */
    abort(): Transition;
    /**
     * Retries a previously-aborted transition (making sure to abort the
     * transition if it's still active). Returns a new transition that
     * represents the new attempt to transition.
     */
    retry(): Transition;
}
