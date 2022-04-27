/**
 * Creates a spy function (ala Sinon.js) that can be used to inspect call to it.
 *
 * The following are the present features:
 *
 * * spy.called: property set to `true` if the function has been called at least once.
 */
type Spy = () => {
    called?: true | undefined;
} & (() => void);

declare const spy: Spy;
export default spy;
