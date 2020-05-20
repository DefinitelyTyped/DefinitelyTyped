// Type definitions for react-shadow-dom-retarget-events 1.0
// Project: https://github.com/weltn24/react-shadow-dom-retarget-events#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
