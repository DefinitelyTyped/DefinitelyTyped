export = retargetEvents;

/**
 * Fixes events for react components rendered in a `shadow dom`.
 *
 * When you render a react component inside `shadow dom` events will not be dispatched to react. I.e. when a user clicks in your react component nothing happens. This happens (or does not happen)
 * with any events.
 *
 * A bug is filed at [#10422](https://github.com/facebook/react/issues/10422).
 */
declare function retargetEvents(shadowRoot: ShadowRoot): void;
