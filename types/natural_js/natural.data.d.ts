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
     *   // { "columnPropertyName" : [["ruleName", arguments[0], arguments[1]...]] }
     *   new N.formatter(data, {
     *       "numeric" : [["trimtoempty"], ["numeric", "#,###.##0000"]],
     *       "generic" : [["trimtoempty"], ["generic", "@@ABCD"]],
     *       "limit" : [["trimtoempty"], ["limit", "13", "..."]],
     *       "etc" : [["date", 12]]
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
     *           init : function(view, request) {
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
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html }
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
     *    // { "columnName" : [["ruleName", arguments[0], arguments[1] ... ] }
     *    N.validator(data, {
     *        "numeric" : [["required"], ["integer+commas"]],
     *        "generic" : [["required"], ["korean"]],
     *        "limit" : [["required"], ["alphabet"]]
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
     *            init : function(view, request) {
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
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html }
     */
    validator(rules?: NJS<HTMLElement[]> | HTMLElement | ND.ValidationRuleObject | string): ND.Validator;

    datafilter(condition: ND.ConditionCallback | string): NJS<NC.JSONObject[]>;

    datasort(key: string, reverse?: boolean): NJS<NC.JSONObject[]>;

    /**
     * This class handles data synchronization logic for two-way data binding.
     */
    static ds: {
        instance(inst: Function, isReg?: boolean): ND.DataSync;
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
         *   // { "columnPropertyName" : [["ruleName", arguments[0], arguments[1]...]] }
         *   new N.formatter(data, {
         *       "numeric" : [["trimtoempty"], ["numeric", "#,###.##0000"]],
         *       "generic" : [["trimtoempty"], ["generic", "@@ABCD"]],
         *       "limit" : [["trimtoempty"], ["limit", "13", "..."]],
         *       "etc" : [["date", 12]]
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
         *           init : function(view, request) {
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
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html }
         */
        new(data: NJS<NC.JSONObject[]>, rules?: NJS<HTMLElement[]> | HTMLElement | ND.FormatRuleObject | string): ND.Formatter;
        /**
         * Adds commas(,) at thousand separators. It processes only the part before the decimal point, if present.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        commas(str: string): string;
        /**
         * Convert to South Korean resident registration number format.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args - Replaces the entered string with the specified character.
         * - args[0] Length of string to replace
         * - args[1] Character to replace
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        rrn(str: string, args: [number, string]): string;
        /**
         * Convert to US Social Security number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        ssn(str: string): string;
        /**
         * Convert to South Korean business registration number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        kbrn(str: string): string;
        /**
         * Convert to South Korean corporate number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        kcn(str: string): string;
        /**
         * Convert to uppercase.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        upper(str: string): string;
        /**
         * Convert to lowercase.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        lower(str: string): string;
        /**
         * Converts the first alphabetic character to uppercase.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        capitalize(str: string): string;
        /**
         * Convert to South Korean zip code format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        zipcode(str: string): string;
        /**
         * Convert to South Korean phone number format.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
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
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        realnum(str: string): string;
        /**
         * Removes the first and last whitespace from a string. If the input string is null or undefined, it is converted to an empty string.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        trimtoempty(str: string): string;
        /**
         * Removes the first and last whitespace from a string. If the input string is empty, null, or undefined, it is converted to 0.
         *
         * @param {string} str - The string to be formatted.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        trimtozero(str: string): string;
        /**
         * Removes the first and last whitespace from a string. If the input string is empty, null, or undefined, it is converted to valStr.
         *
         * @param {string} str - The string to be formatted.
         * @param {[string]} args - String to be replaced when the value is null or undefined
         *  - args[0] String to replace
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        trimtoval(str: string, args: [string]): string;
        /**
         * Converts or formats a date string according to specified options and returns the formatted date string.
         *
         * The global date format can be set in the N.context.attr("data").formatter.date property of [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010204.html).
         *
         * @param {string} str - The string to be formatted.
         * @param {[number | string, "date" | "month", NU.Options.Datepicker]} args - Specifies the date format and options for the Datepicker component applied to the element designated as the third argument of the function.
         *  - args[0]: Specifies the date format in either a numeric or string format as follows:
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
         *  - args[1]: If "date", a date picker is applied to the element specified as the third argument. If "month", a month picker is applied.
         *  - args[2]: You can specify options to create the Datepicker for the element designated as the third argument of the function.
         * @param {NJS<HTMLElement[]>} ele - If this argument is specified, the NU.datepicker component is automatically applied.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        date(str: string, args: [number | string, "date" | "month", NU.Options.Datepicker], ele?: NJS<HTMLElement[]>): string;
        /**
         * Convert to time format.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number]} args - Specifies the time format.
         * number If you specify the length by type, it is converted as follows:
         *  - 2: hour
         *  - 4: hour:minute
         *  - 6: hour:minute:second
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        time(str: string, args?: [number]): string;
        /**
         * Cuts the string to a specified length.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args
         *  - args[0] - String maximum length.
         *  - args[1] - Character to be appended after cutting the string.
         * @param {NJS<HTMLElement[]>} ele - An element that will display the original, uncut string as the title attribute.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        limit(str: string, args: [number, string], ele: NJS<HTMLElement[]>): string;
        /**
         * Replaces a string with a specified string.
         *
         * @param {string} str - The string to be formatted.
         * @param {[number, string]} args
         *  - args[0] - String to be replaced
         *  - args[1] - String to replace
         *  - args[2] - This is an argument used inside Formatter that is not generally used.
         * @param {NJS<HTMLElement[]>} ele - This is an argument used inside Formatter that is not generally used.
         * @return {string} The formatted string.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030106.html }
         */
        replace(str: string, args: [string, number, boolean], ele?: NJS<HTMLElement[]>): string;
        lpad(str: string, args: [number, string]): string;
        rpad(str: string, args: [number, string]): string;
        mask(str: string, args: ["phone" | "email" | "address" | "name" | "rrn", string]): string;
        generic(str: string, args: [string]): string | true;
        numeric(str: string, args: [string, string]): string | true;
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
         *    // { "columnName" : [["ruleName", arguments[0], arguments[1] ... ] }
         *    N.validator(data, {
         *        "numeric" : [["required"], ["integer+commas"]],
         *        "generic" : [["required"], ["korean"]],
         *        "limit" : [["required"], ["alphabet"]]
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
         *            init : function(view, request) {
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
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html }
         */
        new(data: NJS<NC.JSONObject[]>, rules?: NJS<HTMLElement[]> | HTMLElement | ND.ValidationRuleObject | string): ND.Validator;
        required(str: string): boolean;
        alphabet(str: string): boolean;
        integer(str: string): boolean;
        korean(str: string): boolean;
        alphabet_integer(str: string): boolean;
        integer_korean(str: string): boolean;
        alphabet_korean(str: string): boolean;
        alphabet_integer_korean(str: string): boolean;
        dash_integer(str: string): boolean;
        commas_integer(str: string): boolean;
        number(str: string): boolean;
        email(str: string): boolean;
        url(str: string): boolean;
        zipcode(str: string): boolean;
        decimal(str: string, args: NC.Primitive[]): boolean;
        phone(str: string, args: NC.Primitive[]): boolean;
        rrn(str: string): boolean;
        /**
         * US Social Security Number
         */
        ssn(str: string): boolean;
        frn(str: string): boolean;
        frn_rrn(str: string): boolean;
        /**
         * Korean business registration number
         */
        kbrn(str: string): boolean;
        /**
         * Korean corporation number
         */
        kcn(str: string): boolean;
        date(str: string): boolean;
        time(str: string): boolean;
        accept(str: string, args: NC.Primitive[]): boolean;
        match(str: string, args: NC.Primitive[]): boolean;
        acceptfileext(str: string, args: NC.Primitive[]): boolean;
        notaccept(str: string, args: NC.Primitive[]): boolean;
        notmatch(str: string, args: NC.Primitive[]): boolean;
        notacceptfileext(str: string, args: NC.Primitive[]): boolean;
        equalTo(str: string, args: NC.Primitive[]): boolean;
        maxlength(str: string, args: NC.Primitive[]): boolean;
        minlength(str: string, args: NC.Primitive[]): boolean;
        rangelength(str: string, args: NC.Primitive[]): boolean;
        maxbyte(str: string, args: NC.Primitive[]): boolean;
        minbyte(str: string, args: NC.Primitive[]): boolean;
        rangebyte(str: string, args: NC.Primitive[]): boolean;
        maxvalue(str: string, args: NC.Primitive[]): boolean;
        minvalue(str: string, args: NC.Primitive[]): boolean;
        rangevalue(str: string, args: NC.Primitive[]): boolean;
        regexp(str: string, args: NC.Primitive[]): boolean;
    };
    static data: {
        filter(arr: NJS<NC.JSONObject[]> | NC.JSONObject[], condition: ND.ConditionCallback | string): NJS<NC.JSONObject[]> | NC.JSONObject[];
        sortBy(key: string, reverse: 1 | -1): (a: number, b: number) => 1 | -1 | 0;
        sort(arr: NJS<NC.JSONObject[]> | NC.JSONObject[], key: string, reverse?: boolean): NJS<NC.JSONObject[]> | NC.JSONObject[];
    };

}

declare namespace ND {

    interface Formatter {
        format(row: number): ND.FormatResultObject;
        unformat(row: number, key: string): NC.Primitive;
    }

    interface Validator {
        validate(row: number): ND.ValidateResultObject;
    }

    interface DataSync {
        viewContext: NJS<HTMLElement[]>;
        remove(): DataSync;
        notify(row: number, key: string): DataSync;
    }

}
