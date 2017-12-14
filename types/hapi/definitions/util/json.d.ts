export namespace Json {

    /**
     * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter}
     */
    export type StringifyReplacer = ((key: string, value: any) => any) | (string | number)[] | undefined;

    /**
     * Any value greater than 10 is truncated.
     */
    export type StringifySpace = number | string;

    /**
     * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsjson)
     */
    export interface StringifyArguments {
        /** the replacer function or array. Defaults to no action. */
        replacer?: StringifyReplacer;
        /** number of spaces to indent nested object keys. Defaults to no indentation. */
        space?: StringifySpace;
        /** tring suffix added after conversion to JSON string. Defaults to no suffix. **/
        suffix?: string;
        /** calls Hoek.jsonEscape() after conversion to JSON string. Defaults to false. **/
        escape?: boolean;
    }

}
