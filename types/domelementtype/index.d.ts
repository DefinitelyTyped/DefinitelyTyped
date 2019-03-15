// Type definitions for domelementtype 1.3
// Project: https://github.com/fb55/domelementtype#readme
// Definitions by: Johan Davidsson <https://github.com/johandavidson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export namespace DomElementType {
    /***
     * Text
     */
    const Text = "text";
    /***
     * <? ... ?>
     */
    const Directive = "directive";
    /***
     * <!-- ... -->
     */
    const Comment = "comment";
    /***
     * <script> tags
     */
    const Script = "script";
    /***
     * <style> tags
     */
    const Style = "style";
    /***
     * Any tag
     */
    const Tag = "tag";
    /***
     * <![CDATA[ ... ]]>
     */
    const CDATA = "cdata";
    /***
     * <!DOCTYPE ... >
     */
    const Doctype = "doctype";

    /***
     * Checks whether element object is a tag
     */
    function isTag(elem: { type: string}): boolean;
}
