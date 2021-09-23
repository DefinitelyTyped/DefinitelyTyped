/**
 * Creates a spy function (ala Sinon.js) that can be used to inspect call to it.
 *
 * The following are the present features:
 *
 * * spy.called: property set to `true` if the function has been called at least once.
 *
 */
interface SpyReturn {
    (): any;
    called: boolean;
}
declare const spy: { (): SpyReturn };

export default spy;
