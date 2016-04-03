declare module goog {
    function require(name: 'goog.labs.html.Sanitizer'): typeof goog.labs.html.Sanitizer;
}

declare module goog.labs.html {

    /**
     * A sanitizer that converts untrusted, messy HTML into more regular HTML
     * that cannot abuse high-authority constructs like the ability to execute
     * arbitrary JavaScript.
     * @constructor
     */
    class Sanitizer {
        constructor();
        
        /**
         * Yields a string of safe HTML that contains all and only the safe
         * text-nodes and elements in the input.
         *
         * <p>
         * For the purposes of this function, "safe" is defined thus:
         * <ul>
         *   <li>Contains only elements explicitly allowed via {@code this.allow*}.
         *   <li>Contains only attributes explicitly allowed via {@code this.allow*}
         *       and having had all relevant transformations applied.
         *   <li>Contains an end tag for all and only non-void open tags.
         *   <li>Tags nest per XHTML rules.
         *   <li>Tags do not nest beyond a finite but fairly large level.
         * </ul>
         *
         * @param {!string} unsafeHtml A string of HTML which need not originate with
         *    a trusted source.
         * @return {!string} A string of HTML that contains only tags and attributes
         *    explicitly allowed by this sanitizer, and with end tags for all and only
         *    non-void elements.
         */
        sanitize(unsafeHtml: string): string;
        
        /**
         * Adds the element names to the white-list of elements that are allowed
         * in the safe HTML output.
         * <p>
         * Allowing elements does not, by itself, allow any attributes on
         * those elements.
         *
         * @param {...!string} var_args element names that should be allowed in the
         *     safe HTML output.
         * @return {!goog.labs.html.Sanitizer} {@code this}.
         */
        allowElements(...var_args: string[]): goog.labs.html.Sanitizer;
        
        /**
         * Allows in the sanitized output
         * <tt>&lt;<i>element</i> <i>attr</i>="..."&gt;</tt>
         * when <i>element</i> is in {@code elementNames} and
         * <i>attrNames</i> is in {@code attrNames}.
         *
         * If specified, {@code opt_valueXform} is a function that takes the
         * HTML-entity-decoded attribute value, and can choose to disallow the
         * attribute by returning {@code null} or substitute a new value
         * by returning a string with the new value.
         *
         * @param {!Array<string>|string} elementNames names (or name) on which the
         *     attributes are allowed.
         *
         *     Element names should be allowed via {@code allowElements(...)} prior
         *     to white-listing attributes.
         *
         *     The special element name {@code "*"} has the same meaning as in CSS
         *     selectors: it can be used to white-list attributes like {@code title}
         *     and {@code id} which are widely available with element-agnostic
         *     meanings.
         *
         *     It should not be used for attributes like {@code type} whose meaning
         *     differs based on the element on which it appears:
         *     e.g. {@code <input type=text>} vs {@code <style type=text/css>}.
         *
         * @param {!Array<string>|string} attrNames names (or name) of the attribute
         *     that should be allowed.
         *
         * @param {goog.labs.html.AttributeRewriter=} opt_rewriteValue A function
         *     that receives the HTML-entity-decoded attribute value and can return
         *     {@code null} to disallow the attribute entirely or the value for the
         *     attribute as a string.
         *     <p>
         *     The default is the identity function ({@code function(x){return x}}),
         *     and the value rewriter is composed with an attribute specific handler:
         *     <table>
         *      <tr>
         *        <th>href, src</th>
         *        <td>Requires that the value be an absolute URL with a protocol in
         *            (http, https, mailto) or a protocol relative URL.
         *      </tr>
         *     </table>
         *
         * @return {!goog.labs.html.Sanitizer} {@code this}.
         */
        allowAttributes(elementNames: Array<string>|string, attrNames: Array<string>|string, opt_rewriteValue?: goog.labs.html.AttributeRewriter): goog.labs.html.Sanitizer;
    }
}
