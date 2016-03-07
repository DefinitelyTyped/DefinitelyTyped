declare module goog.dom {

    /**
       * Returns nodes which match the given CSS3 selector, searching the
       * entire document by default but optionally taking a node to scope
       * the search by.
       *
       * dojo.query() is the swiss army knife of DOM node manipulation in
       * Dojo. Much like Prototype's "$$" (bling-bling) function or JQuery's
       * "$" function, dojo.query provides robust, high-performance
       * CSS-based node selector support with the option of scoping searches
       * to a particular sub-tree of a document.
       *
       * Supported Selectors:
       * --------------------
       *
       * dojo.query() supports a rich set of CSS3 selectors, including:
       *
       *   * class selectors (e.g., `.foo`)
       *   * node type selectors like `span`
       *   * ` ` descendant selectors
       *   * `>` child element selectors
       *   * `#foo` style ID selectors
       *   * `*` universal selector
       *   * `~`, the immediately preceded-by sibling selector
       *   * `+`, the preceded-by sibling selector
       *   * attribute queries:
       *   |  * `[foo]` attribute presence selector
       *   |  * `[foo='bar']` attribute value exact match
       *   |  * `[foo~='bar']` attribute value list item match
       *   |  * `[foo^='bar']` attribute start match
       *   |  * `[foo$='bar']` attribute end match
       *   |  * `[foo*='bar']` attribute substring match
       *   * `:first-child`, `:last-child` positional selectors
       *   * `:empty` content empty selector
       *   * `:empty` content empty selector
       *   * `:nth-child(n)`, `:nth-child(2n+1)` style positional calculations
       *   * `:nth-child(even)`, `:nth-child(odd)` positional selectors
       *   * `:not(...)` negation pseudo selectors
       *
       * Any legal combination of these selectors will work with
       * `dojo.query()`, including compound selectors ("," delimited).
       * Very complex and useful searches can be constructed with this
       * palette of selectors.
       *
       * Unsupported Selectors:
       * ----------------------
       *
       * While dojo.query handles many CSS3 selectors, some fall outside of
       * what's reasonable for a programmatic node querying engine to
       * handle. Currently unsupported selectors include:
       *
       *   * namespace-differentiated selectors of any form
       *   * all `::` pseudo-element selectors
       *   * certain pseudo-selectors which don't get a lot of day-to-day use:
       *   |  * `:root`, `:lang()`, `:target`, `:focus`
       *   * all visual and state selectors:
       *   |  * `:root`, `:active`, `:hover`, `:visited`, `:link`,
       *       `:enabled`, `:disabled`, `:checked`
       *   * `:*-of-type` pseudo selectors
       *
       * dojo.query and XML Documents:
       * -----------------------------
       *
       * `dojo.query` currently only supports searching XML documents
       * whose tags and attributes are 100% lower-case. This is a known
       * limitation and will [be addressed soon]
       * (http://trac.dojotoolkit.org/ticket/3866)
       *
       * Non-selector Queries:
       * ---------------------
       *
       * If something other than a String is passed for the query,
       * `dojo.query` will return a new array constructed from
       * that parameter alone and all further processing will stop. This
       * means that if you have a reference to a node or array or nodes, you
       * can quickly construct a new array of nodes from the original by
       * calling `dojo.query(node)` or `dojo.query(array)`.
       *
       * example:
       *   search the entire document for elements with the class "foo":
       * |  dojo.query(".foo");
       *   these elements will match:
       * |  <span class="foo"></span>
       * |  <span class="foo bar"></span>
       * |  <p class="thud foo"></p>
       * example:
       *   search the entire document for elements with the classes "foo" *and*
       *   "bar":
       * |  dojo.query(".foo.bar");
       *   these elements will match:
       * |  <span class="foo bar"></span>
       *   while these will not:
       * |  <span class="foo"></span>
       * |  <p class="thud foo"></p>
       * example:
       *   find `<span>` elements which are descendants of paragraphs and
       *   which have a "highlighted" class:
       * |  dojo.query("p span.highlighted");
       *   the innermost span in this fragment matches:
       * |  <p class="foo">
       * |    <span>...
       * |      <span class="highlighted foo bar">...</span>
       * |    </span>
       * |  </p>
       * example:
       *   find all odd table rows inside of the table
       *   `#tabular_data`, using the `>` (direct child) selector to avoid
       *   affecting any nested tables:
       * |  dojo.query("#tabular_data > tbody > tr:nth-child(odd)");
       *
       * @param {string|Array} query The CSS3 expression to match against.
       *     For details on the syntax of CSS3 selectors, see
       *     http://www.w3.org/TR/css3-selectors/#selectors.
       * @param {(string|Node)=} opt_root A Node (or node id) to scope the search
       *     from (optional).
       * @return { {length: number} } The elements that matched the query.
       *
       * @deprecated This is an all-software query selector. Use
       *     document.querySelector. See
       *     https://developer.mozilla.org/en-US/docs/DOM/Document.querySelector .
       */
    function query(query: string|Array<any>, opt_root?: string|Node): {length: number};
}
