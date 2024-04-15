import "../../";

declare module "../../" {
    /**
     * Provides a convenient way to syntax-highlight code snippets in a webpage. Depends on the runmode addon (or its standalone variant).
     * Can be called with an array (or other array-ish collection) of DOM nodes that represent the code snippets. By default, it'll get all pre tags.
     * Will read the data-lang attribute of these nodes to figure out their language, and syntax-color their content using the relevant CodeMirror
     * mode (you'll have to load the scripts for the relevant modes yourself).
     * A second argument may be provided to give a default mode, used when no language attribute is found for a node.
     */
    function colorize(collection?: ArrayLike<Element>, defaultMode?: string): void;
}
