import MarkdownIt = require("..");
import Token = require("../token");

export = StateCore;

declare class StateCore {
    
    constructor(src: string, md: MarkdownIt, env: any)

    env: any;
    level: number;

    /** Link to parser instance */
    md: MarkdownIt;

    /** The markdown source code that is being parsed. */
    src: string;

    tokens: Token[];

    /** Return any for a yet untyped property */
    [undocumented: string]: any;
}
