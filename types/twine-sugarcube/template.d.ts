export  interface TemplateExpansionContext {
    /**
     * The template's name.
     */
    readonly name: string;
}

export type TemplateExpander = (this: TemplateExpansionContext) => string;

export interface TemplateAPI {
    /**
     * Returns the number of existing templates.
     * @since 2.29.0
     * @example
     * if (Template.size === 0) {
     *     // No templates exist.
     * }
     */
    readonly size: number;

    /**
     * Add new template(s).
     * @param name Name, or array of names, of the template(s) to add. **NOTE**: Names must consist of characters from the basic Latin
     * alphabet and start with a letter, which may be optionally followed by any number of letters, numbers, the underscore, or the hyphen.
     * @param definition Definition of the template(s), which may be a: function, string, or an array of either. **NOTE**: Each time array
     * definitions are referenced, one of their member templates is randomly selected to be the output source.
     * @since 2.29.0
     * @example
     * // Basic usage
     * // Define a function template named ?yolo.
     * Template.add('yolo', function () {
     *     return either('YOLO', 'You Only Live Once');
     * });
     *
     * // Define a string template named ?nolf.
     * Template.add('nolf', 'No One Lives Forever');
     *
     * // Define an array of string templates named ?alsoYolo.
     * Template.add('alsoYolo', ['YOLO', 'You Only Live Once']);
     *
     * // Define an array of mixed string and function templates named ?cmyk.
     * Template.add('cmyk', [
     *     'Cyan',
     *     function () {
     *         return either('Magenta', 'Yellow');
     *     },
     *     'Black'
     * ]);
     *
     * // Using the context object (this)
     * // Define a function template with two names, ?color and ?Color, whose output changes based on its name.
     * Template.add(['color', 'Color'], function () {
     *     var color = either('red', 'green', 'blue');
     *     return this.name === 'Color' ? color.toUpperFirst() : color;
     * });
     */
    add(name: string | string[], definition: string | string[] | TemplateExpander | TemplateExpander[]): void;

    /**
     * Remove existing template(s).
     * @param name Name, or array of names, of the template(s) to remove.
     * @since 2.29.0
     * @example
     * // Deletes the template ?yolo.
     * Template.delete('yolo');
     *
     * // Deletes the templates ?yolo and ?nolf.
     * Template.delete(['yolo', 'nolf']);
     */
    delete(name: string|string[]): void;

    /**
     * Return the named template definition, or null on failure.
     * @param name Name of the template whose definition should be returned.
     * @since 2.29.0
     * @example
     * // Returns the template ?yolo, or null if it doesn't exist.
     * var yolo = Template.get('yolo');
     */
    get(name: string): string | string[] | TemplateExpander | TemplateExpander[] | null;

    /**
     * Returns whether the named template exists.
     * @param name Name of the template to search for.
     * @since 2.29.0
     * @example
     * if (Template.has('yolo')) {
     *     // A ?yolo template exists.
     * }
     */
    has(name: string): boolean;
}

export {};
