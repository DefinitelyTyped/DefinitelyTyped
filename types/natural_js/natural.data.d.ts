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
     * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0301.html }
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
     * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0302.html }
     */
    validator(rules?: NJS<HTMLElement[]> | HTMLElement | ND.ValidationRuleObject | string): ND.Validator;

    datafilter(condition: ND.ConditionCallback | string): NJS<NC.JSONObject[]>;

    datasort(key: string, reverse?: boolean): NJS<NC.JSONObject[]>;

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
         * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0301.html }
         */
        new(data: NJS<NC.JSONObject[]>, rules?: NJS<HTMLElement[]> | HTMLElement | ND.FormatRuleObject | string): ND.Formatter;

        commas(str: string): string;
        rrn(str: string, args: NC.Primitive[]): string;
        ssn(str: string): string;
        kbrn(str: string): string;
        kcn(str: string): string;
        upper(str: string): string;
        lower(str: string): string;
        capitalize(str: string): string;
        zipcode(str: string): string;
        phone(str: string): string;
        realnum(str: string): string;
        trimtoempty(str: string): string;
        trimtozero(str: string): string;
        trimtoval(str: string, args: NC.Primitive[]): string;
        date(str: string, args: NC.Primitive[], ele: NJS<HTMLElement[]>): string;
        time(str: string, args: NC.Primitive[]): string;
        limit(str: string, args: NC.Primitive[], ele: NJS<HTMLElement[]>): string;
        replace(str: string, args: NC.Primitive[], ele: NJS<HTMLElement[]>): string;
        lpad(str: string, args: NC.Primitive[]): string;
        rpad(str: string, args: NC.Primitive[]): string;
        mask(str: string, args: NC.Primitive[]): string;
        generic(str: string, args: NC.Primitive[]): string | true;
        numeric(str: string, args: NC.Primitive[]): string | true;
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
         * @see {@link https://bbalganjjm.github.io/natural_js/#html/naturaljs/refr/refr0302.html }
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
