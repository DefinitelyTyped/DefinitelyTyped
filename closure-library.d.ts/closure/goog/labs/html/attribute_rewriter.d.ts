declare module goog.labs.html {

    /**
     * The type of an attribute value.
     * <p>
     * Many HTML attributes contain structured data like URLs, CSS, or even entire
     * HTML documents, so the type is a union of several variants.
     *
     * @typedef {(string |
     *            goog.html.SafeHtml | goog.html.SafeStyle | goog.html.SafeUrl)}
     */
    type AttributeValue = string|goog.html.SafeHtml|goog.html.SafeStyle|goog.html.SafeUrl;

    /**
     * A function that takes an attribute value, and returns a safe value.
     * <p>
     * Since rewriters can be chained, a rewriter must be able to accept the output
     * of another rewriter, instead of just a string though a rewriter that coerces
     * its input to a string before checking its safety will fail safe.
     * <p>
     * The meaning of the result is:
     * <table>
     *   <tr><td>{@code null}</td>
     *       <td>Unsafe.  The attribute should not be output.</tr>
     *   <tr><td>a string</td>
     *       <td>The plain text (not HTML-entity encoded) of a safe attribute
     *           value.</td>
     *   <tr><td>a {@link goog.html.SafeHtml}</td>
     *       <td>A fragment that is safe to be included as embedded HTML as in
     *           {@code <iframe srchtml="...">}</td></tr>
     *   <tr><td>a {@link goog.html.SafeUrl}</td>
     *       <td>A URL that does not need to be further checked against the URL
     *           white-list.</td></tr>
     *   <tr><td>a {@link goog.html.SafeStyle}</td>
     *       <td>A safe value for a <code>style="..."</code> attribute.</td></tr>
     * </table>
     * <p>
     * Implementations are responsible for making sure that "safe" complies with
     * the contract established by the safe string types in {@link goog.html}.
     * </p>
     *
     * @typedef {function(goog.labs.html.AttributeValue) :
     *           goog.labs.html.AttributeValue}
     */
    type AttributeRewriter = (arg0: goog.labs.html.AttributeValue) => goog.labs.html.AttributeValue;

    /**
     * g4 presubmit complains about requires of this file because its clients
     * don't use any symbols from it outside JSCompiler comment annotations.
     * genjsdeps.sh doesn't generate the right dependency graph unless this
     * file is required.
     * Clients can mention this noop.
     */
    function attributeRewriterPresubmitWorkaround(): void;
}
