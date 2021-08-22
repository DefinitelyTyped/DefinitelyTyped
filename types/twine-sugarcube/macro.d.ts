export interface MacroTags {
    /**
     * Return the named macro tag's parents array (includes the names of all macros who have registered the tag as a
     * child), or null on failure.
     * @param name Name of the macro tag whose parents array should be returned.
     * @since 2.0.0
     * @example
     * Macro.tags.get("else") // For the standard library, returns: ["if"]
     */
    get(name: string): string[];

    /**
     * Returns whether the named macro tag exists.
     * @param name Name of the macro tag to search for.
     * @since 2.0.0
     */
    has(name: string): boolean;
}

export interface MacroArgsArray extends Array<any> {
    /**
     * The current tag's argument string after converting all TwineScript syntax elements into their
     * native JavaScript counterparts. Equivalent in function to <MacroContext>.args.full.
     */
    full: string;
    /**
     * The current tag's unprocessed argument string. Equivalent in function to <MacroContext>.args.raw.
     */
    raw: string;
}

export interface MacroContextObject {
    /**
     * Name of the current tag.
     */
    name: string;
    /**
     * The current tag's argument string parsed into an array of discrete arguments.
     * Equivalent in function to <MacroContext>.args.
     */
    args: MacroArgsArray;

    /**
     * The current tag's contents — i.e. the text between the current tag and the next.
     */
    contents: string;
}

export interface MacroContext {
    /**
     * The argument string parsed into an array of discrete arguments.
     * @since 2.0.0
     */
    args: MacroArgsArray;

    /**
     * The name of the macro.
     * @since 2.0.0
     */
    name: string;

    /**
     * The current output element.
     * @since 2.0.0
     */
    output: ParentNode;

    /**
     * The (execution) context object of the macro's parent, or null if the macro has no parent.
     * @since 2.0.0
     */
    parent: object;

    /**
     * The text of a container macro parsed into discrete payload objects by tag.
     * @since 2.0.0
     */
    payload: MacroContextObject[];

    /**
     * The macro's definition — created via @see Macro.add()
     * @since 2.0.0
     */
    self: object;

    /**
     * Returns whether any of the macro's ancestors passed the test implemented by the given
     * filter function.
     * @param filter he function used to test each ancestor execution context object, which
     * is passed in as its sole parameter.
     * @since 2.0.0
     */
    contextHas(filter: (context: MacroContextObject) => boolean): boolean;

    /**
     * Returns the first of the macro's ancestors which passed the test implemented by the given
     * filter function or null, if no members pass.
     * @param filter The function used to test each ancestor execution context object, which is
     * passed in as its sole parameter.
     * @since 2.0.0
     */
    contextSelect(filter: (context: MacroContextObject) => boolean): object;

    /**
     * Returns a new array containing all of the macro's ancestors which passed the test implemented
     * by the given filter function or an empty array, if no members pass.
     * @since 2.0.0
     * @param filter
     */
    contextSelectAll(filter: (context: MacroContextObject) => boolean): object[];

    /**
     * Renders the message prefixed with the name of the macro and returns false.
     * @param message The error message to output.
     * @since 2.0.0
     */
    error(message: string): false;
}

export interface MacroDefinition {
    handler: (this: MacroContext) => void;
    tags?: string[] | null | undefined;
    skipArgs?: boolean | undefined;
}

export interface MacroAPI {
    /**
     * Add new macro(s).
     * @param name Name, or array of names, of the macro(s) to add.
     * @param definition Definition of the macro(s) or the name of an existing macro whose definition to copy.
     * Definition object:
     * A macro definition object should have some of the following properties (only handler is absolutely required):
     * skipArgs: (optional, boolean) Disables parsing argument strings into discrete arguments. Used by macros which
     * only use the raw/full argument strings.
     * tags: (optional, null | string array) Signifies that the macro is a container macro—i.e. not self-closing. An
     * array of the names of the child tags, or null if there are no child tags.
     * handler: (function) The macro's main function. It will be called without arguments, but with its this set to a
     * macro context object.
     * @param deep Enables deep cloning of the definition. Used to give macros separate instances of the same
     * definition.
     * @since 2.0.0
     * @example
     * // Example of a very simple/naive <<if>>/<<elseif>>/<<else>> macro implementation.
     * Macro.add('if', {
     *    skipArgs: true,
     *    tags: ['elseif', 'else'],
     *    handler: function () {
     *        try {
     *            for (var i = 0, len = this.payload.length; i < len; ++i) {
     *                if (
     *                    this.payload[i].name === 'else' ||
     *                    !!Scripting.evalJavaScript(this.payload[i].args.full)
     *                ) {
     *                    jQuery(this.output).wiki(this.payload[i].contents);
     *                    break;
     *                }
     *            }
     *        }
     *        catch (ex) {
     *            return this.error('bad conditional expression: ' + ex.message);
     *        }
     *    }
     * });
     */
    add(name: string | string[],
        definition: MacroDefinition,
        deep?: boolean): void;

    /**
     * Remove existing macro(s).
     * @param name Name, or array of names, of the macro(s) to remove.
     * @since 2.0.0
     */
    delete(name: string | string[]): void;

    /**
     * Return the named macro definition, or null on failure.
     * @param name Name of the macro whose definition should be returned.
     * @since 2.0.0
     */
    get(name: string): MacroDefinition;

    /**
     * Returns whether the named macro exists.
     * @param name Name of the macro to search for.
     * @since 2.0.0
     */
    has(name: string): boolean;

    /**
     * @since 2.0.0
     */
    tags: MacroTags;
}

export {};
