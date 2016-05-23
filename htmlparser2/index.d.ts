// Type definitions for htmlparser2 v3.7.x
// Project: https://github.com/fb55/htmlparser2/
// Definitions by: James Roland Cabresos <https://github.com/staticfunction/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




export interface Handler {
    onopentag?: (name: string, attribs: { [type: string]: string }) => void;
    onopentagname?: (name: string) => void;
    onattribute?: (name: string, value: string) => void;
    ontext?: (text: string) => void;
    onclosetag?: (text: string) => void;
    onprocessinginstruction?: (name: string, data: string) => void;
    oncomment?: (data: string) => void;
    oncommentend?: () => void;
    oncdatastart?: () => void;
    oncdataend?: () => void;
    onerror?: (error: Error) => void;
    onreset?: () => void;
    onend?: () => void;
}

export interface Options {

    /***
     * Indicates whether special tags (<script> and <style>) should get special treatment
     * and if "empty" tags (eg. <br>) can have children.  If false, the content of special tags
     * will be text only. For feeds and other XML content (documents that don't consist of HTML),
     * set this to true. Default: false.
     */
    xmlMode?: boolean;

    /***
     * If set to true, entities within the document will be decoded. Defaults to false.
     */
    decodeEntities?: boolean;

    /***
     * If set to true, all tags will be lowercased. If xmlMode is disabled, this defaults to true.
     */
    lowerCaseTags?: boolean;

    /***
     * If set to true, all attribute names will be lowercased. This has noticeable impact on speed, so it defaults to false.
     */
    lowerCaseAttributeNames?: boolean;

    /***
     * If set to true, CDATA sections will be recognized as text even if the xmlMode option is not enabled.
     * NOTE: If xmlMode is set to true then CDATA sections will always be recognized as text.
     */
    recognizeCDATA?: boolean;

    /***
     * If set to true, self-closing tags will trigger the onclosetag event even if xmlMode is not set to true.
     * NOTE: If xmlMode is set to true then self-closing tags will always be recognized.
     */
    recognizeSelfClosing?: boolean;
}

export declare class Parser {
    constructor(handler: Handler, options?: Options);

    /***
     * Parses a chunk of data and calls the corresponding callbacks.
     * @param input
     */
    write(input: string): void;
    /***
     * alias for backwards compat
     */
    parseChunk(input: string): void;

    /***
     * Parses the end of the buffer and clears the stack, calls onend.
     */
    end(): void;
    /***
     * alias for backwards compat
     */
    done(): void;


    /***
     * Resets the parser, parses the data & calls end.
     * @param input
     */
    parseComplete(input: string): void;

    /***
     * Resets buffer & stack, calls onreset.
     */
    reset(): void;
}
