// Type definitions for bbcode-to-react 0.2
// Project: https://github.com/JimLiu/bbcode-to-react#readme
// Definitions by: hkleungai <https://github.com/hkleungai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import { ReactNode } from 'react';

/**
 * A generic building block for Tag class and Parser class.
 * An optional interface can be provided for constructing the class
 * The class is NOT exported from the library.
 */
declare class Renderer<optionType = { linkify: boolean }> {
    /**
     * Initializing the class members "options" and "renderer"
     * @param options An object to be injected into the class memeber "options"
     */
    constructor(options: optionType);
    /**
     * An object storing some essential flags and params,
     * with default value { linkify: false }
     */
    options: optionType;
    /**
     * An array storing objects with type "optionType"
     */
    contexts: optionType[];
    /**
     * Injecting incoming context to class and return the input function
     * @param context An array storing objects with type "optionType"
     * @param func: A function to be returned
     * @returns A function returning a string array
     */
    context: (context: optionType, func: () => string[]) => () => string[];
    /**
     * Process incoming value by regexp and return the output
     * @param value Input to be processed
     * @returns A processed string
     */
    escape: (value: string) => string;
    /**
     * Process incoming value by regexp and return the output
     * @param value Input to be processed
     * @returns A processed string
     */
    linkify: (value: string) => string;
    /**
     * Process incoming value by regexp and return the output
     * @param value Input to be processed
     * @returns A processed string
     */
    strip: (value: string) => string;
    /**
     * Process incoming value by regexp and return the output
     * @param value Input to be processed
     * @returns A processed string
     */
    cosmeticReplace: (value: string) => string;
}

/**
 * An interface for class member in "Tag"
 */
interface TagType {
    /**
     * Tag name, with type string
     */
    name: string;
    /**
     * The parent of a tag object, with type ReactNode
     */
    parent: ReactNode;
    /**
     * The inner text of a tag object, with type string
     */
    text: string;
    /**
     * A "params" object for inner processing
     */
    params: object;
    /**
     * The children of a tag object, with type ReactNode array
     */
    children: ReactNode[];
}

/**
 * A class designed for handling bbcode.
 * The Tag class mostly is extended into another customized class,
 * and seldom an instance would be needed for bbcode parsing.
 * The class is exported from the library.
 */
declare class Tag<T = { linkify: boolean }> {
    /**
     * Initializing the class members
     * @param renderer A Renderer instance to be injected
     * @param settings
     * A "TagType" object (without children attribute)
     * for initializing the class member "params"
     */
    constructor(renderer: Renderer<T>, settings?: Partial<Omit<TagType, 'children'>>);
    /**
     * Tag name, with type string
     */
    protected name: TagType['name'];
    /**
     * The parent of a tag object, with type ReactNode
     */
    protected parent: TagType['parent'];
    /**
     * The inner text of a tag object, with type string
     */
    protected text: TagType['text'];
    /**
     * A "params" object for inner processing
     */
    protected params: TagType['params'];
    /**
     * The children of a tag object, with type ReactNode array
     */
    protected children: TagType['children'];
    /**
     * Getter method of the "children" member of the Tag instance
     * @returns A ReactNode array representing the "children" member of the Tag instance
     */
    protected getComponents(): ReactNode[];
    /**
     * Getter method for inner text of the Tag instance
     * @param raw If true, also convert a plain url to an "a" tag in text form
     * @returns Inner text of the Tag instance
     */
    protected getContent(raw?: boolean): string;
    /**
     * Method for converting a tag instance to HTML
     * @returns a HTML in string form
     */
    protected toHTML(): string;
    /**
     * Method for converting a tag instance to react component
     * @returns a react component
     */
    protected toReact(): ReactNode;
}

/**
 * A class designed for parsing bbcode.
 * The class exposes some public function
 * to make the conversion between bbcode and html/ReactNode possible.
 * The class is exported from the library,
 * and a class instance with pre-defined tags collections is exported as default.
 */
declare class Parser<T = { linkify: boolean }> {
    /**
     * Initializing the class members
     * @param allowedTags
     * An object to be combined with a set of default tags
     * for forming the class member "tag"
     */
    constructor(allowedTags?: object | null);
    /**
     * A tags collection for a parser instance
     */
    protected tags: { [name: string]: Tag };
    /**
     * A renderer member for a parser instance
     */
    protected renderer: Renderer<T>;
    /**
     * Method for parsing an input string into a tag instance
     * @param input A string to be parsed
     * @returns a tag instance
     */
    protected parse(input: string): Tag;
    /**
     * Method for adding an user-defined tag instance into the parser
     * @param name A tag name to be provided
     * @param tag A tag instance to be provided
     */
    registerTag(name: string, tag: typeof Tag): void;
    /**
     * Method for converting a bbcode to HTML
     * @param input a bbcode string
     * @returns a HTML in string form
     */
    toHTML(input: string): string;
    /**
     * Method for converting a bbcode to react component
     * @param input a bbcode string
     * @returns a react component
     */
    toReact(input: string): ReactNode;
}

/**
 * A defualt parser instance to be exported in this library
 */
declare const parser: Parser;

export { Tag, Parser };
export default parser;
