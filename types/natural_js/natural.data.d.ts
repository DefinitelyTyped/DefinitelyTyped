declare class ND {
    /**
     * Formatter(N.formatter) is a library that formats an input data set (array of JSON objects) and returns the formatted data set.
     * - Instead of using a ruleset, you can pass an element as an argument, where the element wraps elements with formatting rules declared in the data-format attribute. This will display the formatted string in those elements. If the element is a text input element, it will display the original string of the data when the cursor focuses in (focusin event), and display the formatted string when the cursor focuses out (focusout event).
     * - You can also format on a per-string basis rather than using a dataset.
     *
     * @param {NJS<HTMLElement[]> | HTMLElement | ND.FormatRuleObject | string} [rules] - Specifies formatting rules.
     * The formatting rule can be specified in two types as follows:
     * - If you specify the rules as an object option:
     *   ```
     *   // { "columnPropertyName": [["ruleName", arguments[0], arguments[1]...]] }
     *   new N.formatter(data, {
     *       "numeric": [["trimtoempty"], ["numeric", "#,###.##0000"]],
     *       "generic": [["trimtoempty"], ["generic", "@@ABCD"]],
     *       "limit": [["trimtoempty"], ["limit", "13", "..."]],
     *       "etc": [["date", 12]]
     *   }).format();
     *   ```
     * - If you specify the rules by providing a jQuery object which includes elements with data-validate attributes:
     *   ```
     *   ...
     *   <div class="formatter-context">
     *       <!-- [ ["ruleName", "arguments[0]", "arguments[1]"], ... ] -->
     *      <input id="limit" type="text" data-format='[["trimtoempty"], ["limit", "13", "..." ]]' />
     *   </div>
     *   ...
     *
     *   <script type="text/javascript">
     *       N(".formatter").cont({
     *           init: function(view, request) {
     *               N.formatter(data, N(".formatter-context", view)).format();
     *           }
     *       });
     *   </script>
     *   ```
     * If you set formatting rules declaratively and want to change the formatting rules dynamically, you just need to reassign the value of the "format" data attribute for the corresponding input element as follows:
     * ```
     * N("#limit").data("format", [["trimtoempty"]])
     * ```
     *
     * @returns {ND.Formatter} A new N.format instance.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html
     */
    formatter(rules?: NJS<HTMLElement[]> | HTMLElement | ND.FormatRuleObject | string): ND.Formatter;
    /**
     * Validator (N.validator) is a library that validates an input data set (array of JSON objects) and returns the result data set.
     * - Instead of a ruleset, if you pass an element that wraps input elements with validation rules declared in the data-validate attribute, it will validate the value entered in the element when the cursor focusout occurs on the input element. If validation fails, an error message is displayed in the form of a tooltip near the input element.
     * - Validation can also be performed on strings, not just datasets.
     *
     * @param {NJS<HTMLElement[]>|HTMLElement|ND.ValidationRuleObject|string} [rules] - Specifies the validation rules.
     * You can specify the validation rules in two ways as follows:
     * - Specifying rules as object options:
     *    ```
     *    // { "columnName": [["ruleName", arguments[0], arguments[1] ... ] }
     *    N.validator(data, {
     *        "numeric": [["required"], ["integer+commas"]],
     *        "generic": [["required"], ["korean"]],
     *        "limit": [["required"], ["alphabet"]]
     *    }).validate();
     *    ```
     *
     * - Specifying rules by passing a jQuery object that wraps elements with data-validate attributes:
     *   ```
     *    ...
     *    <div class="validator-context">
     *        <!-- [ ["ruleName", "ruleArguments[0]", "ruleArguments[1]"], ... ] -->
     *        <input id="numeric" type="text" data-validate='[["required"], ["integer+commas"]]'/>
     *    </div>
     *    ...
     *
     *    <script type="text/javascript">
     *        N(".validator").cont({
     *            init: function(view, request) {
     *                N.validator(data, N(".validator-context", view)).validate();
     *            }
     *        });
     *    </script>
     *    ```
     *
     * To dynamically change the validation rules when specifying validation rules declaratively, reassign the validation rules to the "validate" data attribute of the input element as follows:
     *
     * ```
     * N("#numeric").data("validate", [["required"], ["integer"]])
     * ```
     *
     * @returns {ND.Validator} A new N.validate instance.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html
     */
    validator(rules?: NJS<HTMLElement[]> | HTMLElement | ND.ValidationRuleObject | string): ND.Validator;
    /**
     * Extracts data that matches the specified condition.
     *
     * @param {ND.ConditionCallback | string} condition - Specifies the filtering condition.
     *
     * If you specify a function, only the rows for which the function returns true are filtered.
     * ```
     * var fData = N.data.filter([
     *     { name: "John", age: 18 },
     *     { name: "Mike", age: 16 },
     *     { name: "Mike", age: 14 }
     * ], function(item) {
     *     return item.name === "Mike" && item.age === 16;
     * });
     *
     * console.log(fData); // [{ name: "Mike", age: 16 }]
     * ```
     *
     * If you specify a condition string, only the rows that match the condition are filtered.
     * ```
     * var fData = N.data.filter([
     *     { name: "John", age: 18 },
     *     { name: "Mike", age: 16 },
     *     { name: "Mike", age: 14 }
     * ], 'name === "Mike"');
     *
     * console.log(fData); // [{ name: "Mike", age: 16 }, { name: "Mike", age: 14 }]
     * ```
     * > Processing conditions with a function is faster than specifying them with a string.
     *
     * > Specifying conditions with a string does not support and(&&) or or(||) expressions and supports only a single condition expression.
     * @return {NJS<NC.JSONObject[]>} A new JSON object array containing the elements that satisfy the provided condition.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0303.html&tab=html/naturaljs/refr/refr030302.html
     */
    datafilter(this: NJS<NC.JSONObject[]>, condition: ND.ConditionCallback | string): NJS<NC.JSONObject[]>;
    /**
     * Sorts the data based on the specified "key" argument value.
     *
     * @param {string} key - The property name of the JSON object to be used as the sorting criteria
     * @param {string} [reverse] - If set to true, sorts in descending order.
     * @return {NJS<NC.JSONObject[]>} A new JSON object array containing the sorted elements.
     *
     * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0303.html&tab=html/naturaljs/refr/refr030302.html
     */
    datasort(this: NJS<NC.JSONObject[]>, key: string, reverse?: boolean): NJS<NC.JSONObject[]>;
    /**
     * This class handles data synchronization logic for two-way data binding.
     */
    static ds: {
        instance(inst: NC.Instance, isReg?: boolean): ND.DataSync;
    };
    static formatter: {
        /**
         * Formatter(N.formatter) is a library that formats an input data set (array of JSON objects) and returns the formatted data set.
         * - Instead of using a ruleset, you can pass an element as an argument, where the element wraps elements with formatting rules declared in the data-format attribute. This will display the formatted string in those elements. If the element is a text input element, it will display the original string of the data when the cursor focuses in (focusin event), and display the formatted string when the cursor focuses out (focusout event).
         * - You can also format on a per-string basis rather than using a dataset.
         *
         * @param {NJS<NC.JSONObject[]>} data - The data to be formatted.
         * @param {NJS<HTMLElement[]> | HTMLElement | ND.FormatRuleObject | string} [rules] - Specifies formatting rules.
         * The formatting rule can be specified in two types as follows:
         * - If you specify the rules as an object option:
         *   ```
         *   // { "columnPropertyName": [["ruleName", arguments[0], arguments[1]...]] }
         *   new N.formatter(data, {
         *       "numeric": [["trimtoempty"], ["numeric", "#,###.##0000"]],
         *       "generic": [["trimtoempty"], ["generic", "@@ABCD"]],
         *       "limit": [["trimtoempty"], ["limit", "13", "..."]],
         *       "etc": [["date", 12]]
         *   }).format();
         *   ```
         * - If you specify the rules by providing a jQuery object which includes elements with data-validate attributes:
         *   ```
         *   ...
         *   <div class="formatter-context">
         *       <!-- [ ["ruleName", "arguments[0]", "arguments[1]"], ... ] -->
         *      <input id="limit" type="text" data-format='[["trimtoempty"], ["limit", "13", "..." ]]' />
         *   </div>
         *   ...
         *
         *   <script type="text/javascript">
         *       N(".formatter").cont({
         *           init: function(view, request) {
         *               N.formatter(data, N(".formatter-context", view)).format();
         *           }
         *       });
         *   </script>
         *   ```
         * If you set formatting rules declaratively and want to change the formatting rules dynamically, you just need to reassign the value of the "format" data attribute for the corresponding input element as follows:
         * ```
         * N("#limit").data("format", [["trimtoempty"]])
         * ```
         *
         * @returns {ND.Formatter} A new N.format instance.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html
         */
        new(
            data: NJS<NC.JSONObject[]>,
            rules?: NJS<HTMLElement[]> | HTMLElement | ND.FormatRuleObject | string,
        ): ND.Formatter;
        /**
         * Adds commas(,) at thousand separators. It processes only the part before the decimal point, if present.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        commas(str: string): string;
        /**
         * Convert to South Korea's resident registration number format.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args - Replaces the entered string with the specified character.
         * - args[0]: Length of string to replace
         * - args[1]: Character to replace
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        rrn(str: string, args: [number, string]): string;
        /**
         * Convert to US Social Security number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        ssn(str: string): string;
        /**
         * Convert to South Korea's business registration number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        kbrn(str: string): string;
        /**
         * Convert to South Korea's corporate number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        kcn(str: string): string;
        /**
         * Convert to uppercase.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        upper(str: string): string;
        /**
         * Convert to lowercase.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        lower(str: string): string;
        /**
         * Converts the first alphabetic character to uppercase.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        capitalize(str: string): string;
        /**
         * Convert to South Korea's zip code format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        zipcode(str: string): string;
        /**
         * Convert to South Korea's phone number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        phone(str: string): string;
        /**
         * Remove meaningless zeros.
         *  - 0100.0 -> 100
         *  - 0100.10 -> 100.1
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        realnum(str: string): string;
        /**
         * Removes the first and last whitespace from a string. If the input string is null or undefined, it is converted to an empty string.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        trimtoempty(str: string): string;
        /**
         * Removes the first and last whitespace from a string. If the input string is empty, null, or undefined, it is converted to 0.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        trimtozero(str: string): string;
        /**
         * Removes the first and last whitespace from a string. If the input string is empty, null, or undefined, it is converted to valStr.
         *
         * @param {string} str - The string to be formatted.
         * @param {[string]} args - String to be replaced when the value is null or undefined
         *  - args[0]: String to replace
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        trimtoval(str: string, args: [string]): string;
        /**
         * Converts or formats a date string according to specified options and returns the formatted date string.
         *
         * The global date format can be set in the N.context.attr("data").formatter.date property of [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010204.html).
         *
         * @param {string} str - The string to be formatted.
         * @param {[number | string, "date" | "month", NU.Options.Datepicker]} args - Specifies the date format and options for the Datepicker component applied to the element designated as the third argument of the function.
         *  - args[0]:: Specifies the date format in either a numeric or string format as follows:
         *    - number
         *      - 4: year
         *      - 6: year-month
         *      - 8: year-month-day
         *      - 10: year-month-day hour
         *      - 12: year-month-day hour:minute
         *      - 14: year-month-day hour:minute:second
         *    - string
         *      - Y: year (4 digits)
         *      - y: year (2 digits)
         *      - m: month
         *      - d: day
         *      - H: hour
         *      - i: minute
         *      - s: second
         *      ```
         *      "1999/12/31": "Y/m/d"
         *      "99/12/31": "y/m/d"
         *      "31/12": "d/m"
         *      "12/31/1999": "m/d/Y"
         *      "1999-12-31 12:01:59": "Y-m-d H:i:s"
         *      ```
         *  - args[1]:: If "date", a date picker is applied to the element specified as the third argument. If "month", a month picker is applied.
         *  - args[2]:: You can specify options to create the Datepicker for the element designated as the third argument of the function.
         * @param {NJS<HTMLElement[]>} [ele] - If this argument is specified, the NU.datepicker component is automatically applied.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        date(
            str: string,
            args: [number | string, "date" | "month", NU.Options.Datepicker],
            ele?: NJS<HTMLElement[]>,
        ): string;
        /**
         * Convert to time format.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number]} [args] - Specifies the time format.
         * number If you specify the length by type, it is converted as follows:
         *  - 2: hour
         *  - 4: hour:minute
         *  - 6: hour:minute:second
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        time(str: string, args?: [number]): string;
        /**
         * Cuts the string to a specified length.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args
         *  - args[0]: - String maximum length.
         *  - args[1]: - Character to be appended after cutting the string.
         * @param {NJS<HTMLElement[]>} ele - An element that will display the original, uncut string as the title attribute.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        limit(str: string, args: [number, string], ele: NJS<HTMLElement[]>): string;
        /**
         * Replaces a string with a specified string.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string, boolean]} args
         *  - args[0]: - String to be replaced
         *  - args[1]: - String to replace
         *  - args[2]: - This is an argument used inside Formatter that is not generally used.
         * @param {NJS<HTMLElement[]>} [ele] - This is an argument used inside Formatter that is not generally used.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        replace(str: string, args: [string, number, boolean], ele?: NJS<HTMLElement[]>): string;
        /**
         * Fill with filler characters from the left to the specified length.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args
         *  - args[0]: - Length of string to be converted.
         *  - args[1]: - Filler character.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        lpad(str: string, args: [number, string]): string;
        /**
         * Fill with filler characters from the right to the specified length.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args
         *  - args[0]: - Length of string to be converted.
         *  - args[1]: - Filler character.
         * @return {string} The formatted string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        rpad(str: string, args: [number, string]): string;
        /**
         * Fill with filler characters from the right to the specified length.
         *
         * @param {string} str - The string to be masked.
         * @param {[ND.FormatMaskingRules, string]} args
         *  - args[0]: - Masking Type
         *    - "phone": Masks phone number.
         *    - "email": Masks email address.
         *    - "address": Masks address.
         *    - "name": Masks name.
         *    - "rrn": Masks South Korea's resident registration number.
         *  - args[1]: - Masking character.
         *              If not entered, it will be replaced with the "*" character.
         * @return {string} The masked string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        mask(str: string, args: [ND.FormatMaskingRules, string]): string;
        /**
         * Format the string using a user format.
         *
         * > The generic and numeric rules are developed based on the [Mask JavaScript API (v0.4b)](https://pengoworks.com/workshop/js/mask/) library.
         * > The date masking part has been removed, and functionality has been changed to add recognition for Korean characters and handling for values less than 0 (values after the decimal point), allowing * characters and space characters (existing * characters are converted to ~ characters).
         * > For detailed usage and examples, please refer to the link [here](https://pengoworks.com/workshop/js/mask/).
         *
         *  - #: Numbers, spaces
         *  - @: Korean characters (consonants/vowels), English letters, spaces
         *  - ~: Korean characters (consonants/vowels), English letters, numbers, spaces
         *
         * Example)
         * ```
         * mask: ~~~~'~-~~~
         * string: namesdan
         * result: name's-dan
         *
         * mask: (###) ###-####
         * string: 614-777-6094
         * result: (614) 777-6094
         *
         * mask: (###) ###-####
         * string: 6147776094
         * result: (614) 777-6094
         *
         * mask: (###) ###-####
         * string: 614.777.6094
         * result: (614) 777-6094
         *
         * mask: (###) ###-####
         * string: 6147a76094
         * result: 6147a76094
         *
         * mask: (###) #x*-####
         * string: 6147a76094
         * result: (614) 7a7-6094
         *
         * mask: ###.###.####
         * string: 614-777-6094
         * result: 614.777.6094
         *
         * mask: ###/###.####
         * string: 614-777-6094
         * result: 614/777.6094
         *
         * mask: phone !#: ###/###.####
         * string: 614-777-6094
         * result: phone !: 614/777.6094
         * ```
         * @param {string} str - The string to be masked.
         * @param {[string]} args
         *  - args[0]: - User format string
         * @return {string} The masked string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        generic(str: string, args: [string]): string;
        /**
         * Format a numeric string using a custom format.
         *
         * > The generic and numeric rules are developed based on the [Mask JavaScript API (v0.4b)](https://pengoworks.com/workshop/js/mask/) library.
         * > The date masking part has been removed, and functionality has been changed to add recognition for Korean characters and handling for values less than 0 (values after the decimal point), allowing * characters and space characters(existing * characters are converted to ~ characters).
         * > For detailed usage and examples, please refer to the link [here](https://pengoworks.com/workshop/js/mask/).
         *
         *  - #: Numbers, spaces
         *  - @: Korean characters (consonants/vowels), English letters, spaces
         *  - ~: Korean characters (consonants/vowels), English letters, numbers, spaces
         *
         * Example)
         * ```
         * mask: ~~~~'~-~~~
         * string: namesdan
         * result: name's-dan
         *
         * mask: (###) ###-####
         * string: 614-777-6094
         * result: (614) 777-6094
         *
         * mask: (###) ###-####
         * string: 6147776094
         * result: (614) 777-6094
         *
         * mask: (###) ###-####
         * string: 614.777.6094
         * result: (614) 777-6094
         *
         * mask: (###) ###-####
         * string: 6147a76094
         * result: 6147a76094
         *
         * mask: (###) #x*-####
         * string: 6147a76094
         * result: (614) 7a7-6094
         *
         * mask: ###.###.####
         * string: 614-777-6094
         * result: 614.777.6094
         *
         * mask: ###/###.####
         * string: 614-777-6094
         * result: 614/777.6094
         *
         * mask: phone !#: ###/###.####
         * string: 614-777-6094
         * result: phone !: 614/777.6094
         * ```
         * @param {string} str - The string to be masked.
         * @param {[string, "ceil" | "floor" | "round"]} args
         *  - args[0]: - User format string
         *  - args[1]: - Depending on the entered value, decimal points are processed as follows.
         *    - ceil: Unconditionally round up (decimal point processing possible)
         *    - floor: Unconditionally discard (decimal point processing possible)
         *    - round: Rounding (possible to handle decimal points)
         * @return {string} The masked string.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html
         */
        numeric(str: string, args: [string, "ceil" | "floor" | "round"]): string;
    };

    static validator: {
        /**
         * Validator (N.validator) is a library that validates an input data set (array of JSON objects) and returns the result data set.
         * - Instead of a ruleset, if you pass an element that wraps input elements with validation rules declared in the data-validate attribute, it will validate the value entered in the element when the cursor focusout occurs on the input element. If validation fails, an error message is displayed in the form of a tooltip near the input element.
         * - Validation can also be performed on strings, not just datasets.
         *
         * @param {NJS<NC.JSONObject[]>} data - The data to be validated.
         * @param {NJS<HTMLElement[]>|HTMLElement|ND.ValidationRuleObject|string} [rules] - Specifies the validation rules.
         * You can specify the validation rules in two ways as follows:
         * - Specifying rules as object options:
         *    ```
         *    // { "columnName": [["ruleName", arguments[0], arguments[1] ... ] }
         *    N.validator(data, {
         *        "numeric": [["required"], ["integer+commas"]],
         *        "generic": [["required"], ["korean"]],
         *        "limit": [["required"], ["alphabet"]]
         *    }).validate();
         *    ```
         *
         * - Specifying rules by passing a jQuery object that wraps elements with data-validate attributes:
         *   ```
         *    ...
         *    <div class="validator-context">
         *        <!-- [ ["ruleName", "ruleArguments[0]", "ruleArguments[1]"], ... ] -->
         *        <input id="numeric" type="text" data-validate='[["required"], ["integer+commas"]]'/>
         *    </div>
         *    ...
         *
         *    <script type="text/javascript">
         *        N(".validator").cont({
         *            init: function(view, request) {
         *                N.validator(data, N(".validator-context", view)).validate();
         *            }
         *        });
         *    </script>
         *    ```
         *
         * To dynamically change the validation rules when specifying validation rules declaratively, reassign the validation rules to the "validate" data attribute of the input element as follows:
         *
         * ```
         * N("#numeric").data("validate", [["required"], ["integer"]])
         * ```
         *
         * @returns {ND.Validator} A new N.validate instance.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html
         */
        new(
            data: NJS<NC.JSONObject[]>,
            rules?: NJS<HTMLElement[]> | HTMLElement | ND.ValidationRuleObject | string,
        ): ND.Validator;
        /**
         * Checks required input.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        required(str: string): boolean;
        /**
         * Checks whether only English characters are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        alphabet(str: string): boolean;
        /**
         * Checks whether only numbers (integers) are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        integer(str: string): boolean;
        /**
         * Checks whether only Korean characters are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        korean(str: string): boolean;
        /**
         * Checks whether only English characters and numbers (integers) are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        alphabet_integer(str: string): boolean;
        /**
         * Checks whether only numbers (integers) and Korean characters are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        integer_korean(str: string): boolean;
        /**
         * Checks whether only English and Korean characters are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        alphabet_korean(str: string): boolean;
        /**
         * Checks whether only English characters, numbers (integers), and Korean characters are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        alphabet_integer_korean(str: string): boolean;
        /**
         * Checks whether only numbers (integers) and dashes (-) are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        dash_integer(str: string): boolean;
        /**
         * Checks whether only numbers (integers) and commas (,) are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        commas_integer(str: string): boolean;
        /**
         * Checks whether only numbers (integers), commas (,), and dots (.) are entered.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        number(str: string): boolean;
        /**
         * Checks if it matches email address format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        email(str: string): boolean;
        /**
         * Checks if it matches URL format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        url(str: string): boolean;
        /**
         * Checks if it matches South Korea's postal code format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        zipcode(str: string): boolean;
        /**
         * Checks whether the specified number of decimal places has been entered.
         *
         * @param {string} str - The string to be checked.
         * @param {[number]} args
         *  - args[0]: - Decimal point length.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        decimal(str: string, args: NC.Primitive[]): boolean;
        /**
         * Checks if it matches the South Korea's phone number format.
         *
         * @param {string} str - The string to be checked.
         * @param {[boolean]} args
         *  - args[0]: - If true, true is returned even if only 1 of the last 4 digits of the phone number is entered.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        phone(str: string, args: [boolean]): boolean;
        /**
         * Checks if it matches the South Korea's resident registration number format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        rrn(str: string): boolean;
        /**
         * Checks if it matches the U.S. Social Security number format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        ssn(str: string): boolean;
        /**
         * Checks if it matches the South Korea's alien registration number format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        frn(str: string): boolean;
        /**
         * Checks if it matches the South Korea's alien registration number or resident registration number format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        frn_rrn(str: string): boolean;
        /**
         * Checks if it matches the South Korea's corporate number format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        kbrn(str: string): boolean;
        /**
         * Checks if it matches the South Korea's business registration number format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        kcn(str: string): boolean;
        /**
         * Checks if it matches the date format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        date(str: string): boolean;
        /**
         * Checks if it matches the time format.
         *
         * @param {string} str - The string to be checked.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        time(str: string): boolean;
        /**
         * Checks whether the specified value has been entered.
         *
         * @param {string} str - The string to be checked.
         * @param {[string]} args
         *  - args[0]: String to compare.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        accept(str: string, args: [string]): boolean;
        /**
         * Checks whether an unspecified value has been entered.
         *
         * @param {string} str - The string to be checked.
         * @param {[string]} args
         *  - args[0]: String to compare.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        notaccept(str: string, args: [string]): boolean;
        /**
         * Checks whether the specified value is included.
         *
         * @param {string} str - The string to be checked.
         * @param {[string]} args
         *  - args[0]: String to compare.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        match(str: string, args: [string]): boolean;
        /**
         * Checks whether the specified value is not included.
         *
         * @param {string} str - The string to be checked.
         * @param {[string]} args
         *  - args[0]: String to compare.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        notmatch(str: string, args: [string]): boolean;
        /**
         * Checks whether the specified file extension has been entered.
         *
         * @param {string} str - The string to be checked.
         * @param {[string]} args
         *  - args[0]: String to compare.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        acceptfileext(str: string, args: [string]): boolean;
        /**
         * Checks whether an unspecified file extension has been entered.
         *
         * @param {string} str - The string to be checked.
         * @param {[string]} args
         *  - args[0]: String to compare.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        notacceptfileext(str: string, args: [string]): boolean;
        /**
         * Checks whether the value of the specified input element is equal to the value.
         *
         * @param {string} str - The string to be checked.
         * @param {[JQuery.Selector]} args
         *  - args[0]: jQuery selector string to select input element.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        equalTo(str: string, args: [JQuery.Selector]): boolean;
        /**
         * Checks whether the input string length is less than the specified length.
         *
         * @param {string} str - The string to be checked.
         * @param {[number]} args
         *  - args[0]: Maximum string length to allow.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        maxlength(str: string, args: [number]): boolean;
        /**
         * Checks whether the input string length is greater than the specified length.
         *
         * @param {string} str - The string to be checked.
         * @param {[number]} args
         *  - args[0]: Minimum string length to allow.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        /* eslint-disable-next-line @definitelytyped/no-single-element-tuple-type */
        minlength(str: string, args: [number]): boolean;
        /**
         * Checks whether the input string length is between the specified lengths.
         *
         * @param {string} str - The string to be checked.
         * @param {[number, number]} args
         *  - args[0]: Minimum string length to allow.
         *  - args[1]: Maximum string length to allow.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        rangelength(str: string, args: [number, number]): boolean;
        /**
         * Checks whether the byte length of input string is less than the specified length.
         *
         * @param {string} str - The string to be checked.
         * @param {[number, number]} args
         *  - args[0]: Maximum byte length to allow.
         *  - args[1]: This is the byte length of Hangul and Hangul special characters, excluding English characters, numbers, and basic special characters.
         *    > If not entered, the N.context.attr("core").charByteLength value from Config(natural.config.js) is applied.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        maxbyte(str: string, args: [number, number]): boolean;
        /**
         * Checks whether the byte length of input string is greater than the specified length.
         *
         * @param {string} str - The string to be checked.
         * @param {[number, number]} args
         *  - args[0]: Minimum byte length to allow.
         *  - args[1]: This is the byte length of Hangul and Hangul special characters, excluding English characters, numbers, and basic special characters.
         *    > If not entered, the N.context.attr("core").charByteLength value from Config(natural.config.js) is applied.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        minbyte(str: string, args: [number, number]): boolean;
        /**
         * Checks whether the byte length of input string is between the specified lengths.
         *
         * @param {string} str - The string to be checked.
         * @param {[number, number, number]} args
         *  - args[0]: Minimum byte length to allow.
         *  - args[1]: Maximum byte length to allow.
         *  - args[2]: This is the byte length of Hangul and Hangul special characters, excluding English characters, numbers, and basic special characters.
         *    > If not entered, the N.context.attr("core").charByteLength value from Config(natural.config.js) is applied.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        rangebyte(str: string, args: [number, number, number]): boolean;
        /**
         * Checks whether the input number value is less than the specified value.
         *
         * @param {string} str - The string to be checked.
         * @param {[number]} args
         *  - args[0]: Maximum number value to allow.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        maxvalue(str: string, args: [number, number]): boolean;
        /**
         * Checks whether the input number value is greater than the specified value.
         *
         * @param {string} str - The string to be checked.
         * @param {[number]} args
         *  - args[0]: Minimum number value to allow.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        minvalue(str: string, args: [number, number]): boolean;
        /**
         * Checks whether the input number value is between the specified values.
         *
         * @param {string} str - The string to be checked.
         * @param {[number, number]} args
         *  - args[0]: Minimum number value to allow.
         *  - args[1]: Maximum number value to allow.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        rangevalue(str: string, args: [number, number]): boolean;
        /**
         * Tests whether a string matches a given regular expression pattern.
         *
         * @param {string} str - The string to be tested against the regular expression.
         * @param {[string, string]} args
         *  - args[0]: Regular expression pattern.
         *  - args[1]: Flags used to define the search
         * behavior of the pattern.
         * @return {boolean} - Validation result.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030206.html
         */
        regexp(str: string, args: [string, string]): boolean;
    };
    static data: {
        /**
         * Extracts data that matches the specified condition.
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} arr - The data to filter
         * @param {ND.ConditionCallback | string} condition - Specifies the filtering condition.
         *
         * If you specify a function, only the rows for which the function returns true are filtered.
         * ```
         * var fData = N.data.filter([
         *     { name: "John", age: 18 },
         *     { name: "Mike", age: 16 },
         *     { name: "Mike", age: 14 }
         * ], function(item) {
         *     return item.name === "Mike" && item.age === 16;
         * });
         *
         * console.log(fData); // [{ name: "Mike", age: 16 }]
         * ```
         *
         * If you specify a condition string, only the rows that match the condition are filtered.
         * ```
         * var fData = N.data.filter([
         *     { name: "John", age: 18 },
         *     { name: "Mike", age: 16 },
         *     { name: "Mike", age: 14 }
         * ], 'name === "Mike"');
         *
         * console.log(fData); // [{ name: "Mike", age: 16 }, { name: "Mike", age: 14 }]
         * ```
         * > Processing conditions with a function is faster than specifying them with a string.
         *
         * > Specifying conditions with a string does not support and(&&) or or(||) expressions and supports only a single condition expression.
         * @return {NJS<NC.JSONObject[]>} A new JSON object array containing the elements that satisfy the provided condition.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0303.html&tab=html/naturaljs/refr/refr030302.html
         */
        filter(
            arr: NJS<NC.JSONObject[]> | NC.JSONObject[],
            condition: ND.ConditionCallback | string,
        ): NJS<NC.JSONObject[]> | NC.JSONObject[];
        sortBy(key: string, reverse: 1 | -1): (a: number, b: number) => 1 | -1 | 0;
        /**
         * Sorts the data based on the specified "key" argument value.
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} arr - Data to be sorted
         * @param {string} key - The property name of the JSON object to be used as the sorting criteria
         * @param {string} [reverse] - If set to true, sorts in descending order.
         * @return {NJS<NC.JSONObject[]>} A new JSON object array containing the sorted elements.
         *
         * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0303.html&tab=html/naturaljs/refr/refr030302.html
         */
        sort(
            arr: NJS<NC.JSONObject[]> | NC.JSONObject[],
            key: string,
            reverse?: boolean,
        ): NJS<NC.JSONObject[]> | NC.JSONObject[];
    };
}

declare namespace ND {
    interface Formatter {
        /**
         * TODO Please add a comment.
         */
        format(row: number): ND.FormatResultObject;
        /**
         * TODO Please add a comment.
         */
        unformat(row: number, key: string): NC.Primitive;
    }

    interface Validator {
        /**
         * TODO Please add a comment.
         */
        validate(row: number): ND.ValidateResultObject;
    }

    interface DataSync {
        viewContext: NJS<HTMLElement[]>;
        /**
         * TODO Please add a comment.
         */
        remove(): DataSync;
        /**
         * TODO Please add a comment.
         */
        notify(row: number, key: string): DataSync;
    }
}
