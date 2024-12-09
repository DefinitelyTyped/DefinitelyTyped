import JSONObject = NC.JSONObject;

declare class NU {
    /**
     * Create an object instance of Alert with the N() function.
     * ```
     * var alert = N(context).alert(opts|msg);
     * var alert = N(context).alert(opts|msg, vars);
     * ```
     *
     * @this {NJS<HTMLElement[]>} - The context element on which the modal overlay of Alert will be displayed.
     * @param {NU.Options.Alert | string} msg - Specifies an initialization option object for the component or a string representing the contents of the warning message.
     * @param {string[]} [vars] - This is an array of strings to replace the message variable with.
     * @returns {NU.Alert} An instance of an alert object, configured according to the provided options.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040103.html }
     */
    alert(msg: NU.Options.Alert | string, vars?: string[]): NU.Alert;
    /**
     * Creates an object instance of Button with the N() function.
     * ```
     * var button = N(context).button(opts);
     * ```
     *
     * @this {NJS<HTMLElement[]>} - The context element to which the Button will be applied.
     * @param {NU.Options.Button} [opts] - Specifies the initialization option object for the component.
     * @returns {NU.Button} An instance of a Button object, configured according to the provided options.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040203.html }
     */
    button(opts?: NU.Options.Button): NU.Button;
    /**
     * Creates an object instance of Datepicker with the N() function.
     * ```
     * var datepicker = N(context).datepicker(opts);
     * ```
     *
     * @this {NJS<HTMLElement[]>} - The context element to which the Datepicker will be applied.
     * @param {NU.Options.Datepicker} [opts] - Specifies the initialization option object for the component.
     * @returns {NU.Datepicker} An instance of a Datepicker object, configured according to the provided options.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040303.html }
     */
    datepicker(opts?: NU.Options.Datepicker): NU.Datepicker;
    /**
     * Creates an object instance of Popup with the N() function.
     * ```
     * var popup = N(context).popup(opts);
     * ```
     *
     * @this {NJS<HTMLElement[]>} - The context element to which the Popup will be applied.
     * @param {NU.Options.Popup} [opts] - Specifies the initialization option object for the component.
     * @returns {NU.Popup} An instance of a Popup object, configured according to the provided options.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040403.html }
     */
    popup(opts?: NU.Options.Popup): NU.Popup;
    /**
     * Creates an object instance of Tab with the N() function.
     * ```
     * var tab = N(context).tab(opts);
     * ```
     *
     * @this {NJS<HTMLElement[]>} - The context element to which the Tab will be applied.
     * @param {NU.Options.Tab} [opts] - Specifies the initialization option object for the component.
     * @returns {NU.Tab} An instance of a Tab object, configured according to the provided options.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040503.html }
     */
    tab(opts?: NU.Options.Tab): NU.Tab;
    /**
     * Creates a new Select instance.
     * ```
     * var select = N(data).select(opts|context);
     * ```
     *
     * @this {NJS<NC.JSONObject[]> | NC.JSONObject[]} - Data to be bound to the component.
     * @param {NU.Options.Select | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
     * @returns {NU.Select} An instance of a Select object, configured according to the provided parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040603.html }
     */
    select(opts?: NU.Options.Select | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Select;
    /**
     * Creates a new Form instance.
     * ```
     * var form = N(data).form(opts|context);
     * ```
     *
     * @this {NJS<NC.JSONObject[]> | NC.JSONObject[]} - Data to be bound to the component.
     * @param {NU.Options.Form | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
     * @returns {NU.Form} An instance of a Form object, configured according to the provided parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040703.html }
     */
    form(opts?: NU.Options.Form | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Form;
    /**
     * Creates a new List instance.
     * ```
     * var list = N(data).list(opts|context);
     * ```
     *
     * @this {NJS<NC.JSONObject[]> | NC.JSONObject[]} - Data to be bound to the component.
     * @param {NU.Options.List | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
     * @returns {NU.List} An instance of a List object, configured according to the provided parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040803.html }
     */
    list(opts?: NU.Options.List | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.List;
    /**
     * Creates a new Grid instance.
     * ```
     * var grid = N(data).grid(opts|context);
     * ```
     *
     * @this {NJS<NC.JSONObject[]> | NC.JSONObject[]} - Data to be bound to the component.
     * @param {NU.Options.Grid | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
     * @returns {NU.Grid} An instance of a Grid object, configured according to the provided parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040903.html }
     */
    grid(opts?: NU.Options.Grid | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Grid;
    /**
     * Creates a new Pagination instance.
     * ```
     * var pagination = N(data).pagination(opts|context);
     * ```
     *
     * @this {NJS<NC.JSONObject[]> | NC.JSONObject[]} - Data to be bound to the component.
     * @param {NU.Options.Pagination | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
     * @returns {NU.Pagination} An instance of a Pagination object, configured according to the provided parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041003.html }
     */
    pagination(opts: NU.Options.Pagination | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Pagination;
    /**
     * Creates a new Tree instance.
     * ```
     * var tree = N(data).tree(opts|context);
     * ```
     *
     * @this {NJS<NC.JSONObject[]> | NC.JSONObject[]} - Data to be bound to the component.
     * @param {NU.Options.Tree | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
     * @returns {NU.Tree} An instance of a Tree object, configured according to the provided parameters.
     *
     * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041103.html }
     */
    tree(opts: NU.Options.Tree | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Tree;

    static ui: {
        iteration: {
            render: (i: any, limit: any, delay: any, lastIdx: any, callType: any) => void;
            select: (compNm: any) => void;
            checkAll: (compNm: any) => void;
            checkSingle: (compNm: any) => void;
            move: (fromRow: any, toRow: any, compNm: any) => any;
            copy: (fromRow: any, toRow: any, compNm: any) => any;
        };
        draggable: {
            events: (eventNameSpace: any, startHandler: any, moveHandler: any, endHandler: any) => void;
            moveX: (x: any, min: any, max: any) => boolean;
            moveY: (y: any, min: any, max: any) => boolean;
        };
        scroll: {
            paging: (contextWrapEle: any, defSPSize: any, rowEleLength: any, rowTagName: any, bindOpt: any) => void;
        };
        utils: {
            wrapHandler: (opts: any, compNm: any, eventNm: any) => void;
            isTextInput: (tagName: any, type: any) => boolean;
        };
    };

    static alert: {
        /**
         * Creates an object instance of Alert.
         * ```
         * var alert = new N.alert(context, opts|msg);
         * var alert = new N.alert(context, opts|msg, vars);
         * ```
         *
         * @param {NJS<HTMLElement[]>} obj - Specifies the element on which Alert's modal overlay will be displayed.
         * @param {NU.Options.Alert | string} msg - Either an initialization option object that defines how the alert should behave, or a string representing the alert message content.
         * @param {string[]} [vars] - This is an array of strings to replace the message variable with.
         * @returns {NU.Alert} An instance of an Alert object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040103.html }
         */
        new(obj: NJS<HTMLElement[]>, msg: NU.Options.Alert | string, vars?: string[]): NU.Alert;
        wrapEle(): void;
        resetOffSetEle(opts: NU.Options.Alert): void;
        wrapInputEle(): void;
    };

    static button: {
        /**
         * Creates an object instance of Button.
         * ```
         * var button = new N.button(context, opts);
         * ```
         *
         * @param {NJS<HTMLElement[]>} obj - Specifies the context element to which the Button will be applied.
         * @param {NU.Options.Button} [opts] - Specifies the initialization option object for the component.
         * @returns {NU.Button} An instance of a Button object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040203.html }
         */
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Button): NU.Button;
        wrapEle(): void;
    };

    static datepicker: {
        /**
         * Creates an object instance of Datepicker.
         * ```
         * var datepicker = new N.datepicker(context, opts);
         * ```
         *
         * @param {NJS<HTMLElement[]>} obj - Specifies the context element to which the Datepicker will be applied.
         * @param {NU.Options.Datepicker} [opts] - Specifies the initialization option object for the component.
         * @returns {NU.Datepicker} An instance of a Datepicker object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040303.html }
         */
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Datepicker): NU.Datepicker;
        checkMinMaxDate(): boolean;
        wrapEle(): void;
        createContents(): any;
        yearPaging(yearItems: NJS<HTMLElement[]>, currYear: number | string, addCnt: number, absolute?: boolean): void;
        selectItems(opts: NU.Options.Datepicker, value: string, format: string, yearsPanel: NJS<HTMLElement[]>, monthsPanel: NJS<HTMLElement[]>, daysPanel: NJS<HTMLElement[]>): void;
    };

    static popup: {
        /**
         * Creates an object instance of Popup.
         * ```
         * var popup = new N.popup(context, opts);
         * ```
         *
         * @param {NJS<HTMLElement[]>} obj - Specifies the context element to which the Popup will be applied.
         * @param {NU.Options.Popup} [opts] - Specifies the initialization option object for the component.
         * @returns {NU.Popup} An instance of a Popup object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040403.html }
         */
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Popup): NU.Popup;
        wrapEle(): void;
        loadContent(callback: NU.Callbacks.Popup.LoadContent): void;
        popOpen(onOpenData: any, cont: NA.Objects.Controller.Object): void;
    };

    static tab: {
        /**
         * Creates an object instance of Tab.
         * ```
         * var tab = new N.tab(context, opts);
         * ```
         *
         * @param {NJS<HTMLElement[]>} obj - Specifies the context element to which the Tab will be applied.
         * @param {NU.Options.Tab} [opts] - Specifies the initialization option object for the component.
         * @returns {NU.Tab} An instance of a Tab object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040503.html }
         */
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Tab): NU.Tab;
        wrapEle(): void;
        wrapScroll(): void;
        loadContent(url: string, targetIdx: number, callback: NU.Callbacks.Tab.LoadContent, isFirst: boolean): void;
    };

    static select: {
        /**
         * Creates a new Select instance.
         * ```
         * var select = new N.select(data, opts|context);
         * ```
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} data - Specifies data to bind to the component.
         * @param {NU.Options.Select | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
         * @returns {NU.Select} An instance of a Select object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040603.html }
         */
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Select | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Select;
        wrapEle(): void;
    };

    static form: {
        /**
         * Creates a new Form instance.
         * ```
         * var form = new N.form(data, opts|context);
         * ```
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} data - Specifies data to bind to the component.
         * @param {NU.Options.Form | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
         * @returns {NU.Form} An instance of a Form object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040703.html }
         */
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Form | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Form;
    };

    static list: {
        /**
         * Creates a new List instance.
         * ```
         * var list = new N.list(data, opts|context);
         * ```
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} data - Specifies data to bind to the component.
         * @param {NU.Options.List | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
         * @returns {NU.List} An instance of a List object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040803.html }
         */
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.List | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.List;
        createScroll(): void;
        vResize(contextWrapEle: NJS<NC.JSONObject[]>): void;
    };

    static grid: {
        /**
         * Creates a new Grid instance.
         * ```
         * var grid = new N.grid(data, opts|context);
         * ```
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} data - Specifies data to bind to the component.
         * @param {NU.Options.Grid | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
         * @returns {NU.Grid} An instance of a Grid object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040903.html }
         */
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Grid | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Grid;
        tableCells(tbl: any, opt_cellValueGetter: any): any[][];
        tableMap(): NU.Objects.Grid.TableMap;
        setTheadCellInfo(): void;
        removeColgroup(): void;
        fixColumn(): void;
        fixHeader(): void;
        vResize(gridWrap: NJS<HTMLElement[]>, contextWrapEle: NJS<HTMLElement[]>, tfootWrap: NJS<HTMLElement[]>): void;
        more(): void;
        resize(): void;
        sort(): void;
        dataFilter(): void;
        rowSpan(i: number, rowEle: NJS<HTMLElement[]>, bfRowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject, bfRowData: NC.JSONObject, colId: string): void;
        paste(): void;
    };

    static pagination: {
        /**
         * Creates a new Pagination instance.
         * ```
         * var pagination = new N.pagination(data, opts|context);
         * ```
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} data - Specifies data to bind to the component.
         * @param {NU.Options.Pagination | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
         * @returns {NU.Pagination} An instance of a Pagination object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041003.html }
         */
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Pagination | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Pagination;
        wrapEle: NU.Objects.Pagination.LinkEles
        changePageSet(linkEles: NU.Objects.Pagination.LinkEles, opts: NU.Options.Pagination, isRemake: boolean): NU.Options.CurrPageNavInfo;
    };

    static tree: {
        /**
         * Creates a new Tree instance.
         * ```
         * var tree = new N.tree(data, opts|context);
         * ```
         *
         * @param {NJS<NC.JSONObject[]> | NC.JSONObject[]} data - Specifies data to bind to the component.
         * @param {NU.Options.Tree | NJS<HTMLElement[]} [opts] - Specifies the component's initialization options object or context element.
         * @returns {NU.Tree} An instance of a Tree object, configured according to the provided parameters.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041103.html }
         */
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Tree | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Tree;
    };

}

declare namespace NU {

    interface Alert {
        options: NU.Options.Alert;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040105.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Shows a message dialog box.
         *
         * @return {NU.Alert} Returns the `Alert` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040105.html }
         */
        show(): NU.Alert;
        /**
         * Hides the message dialog box.
         *
         * @return {NU.Alert} Returns the `Alert` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040105.html }
         */
        hide(): NU.Alert;
        /**
         * Removes all elements related to Alert.
         *
         * @return {NU.Alert} Returns the `Alert` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040105.html }
         */
        remove(): NU.Alert;
    }

    interface Button {
        options: NU.Options.Button;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040206.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Disable the button.
         *
         * @return {NU.Button} Returns the `Button` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040206.html }
         */
        disable(): NU.Button;
        /**
         * Enable the button.
         *
         * @return {NU.Button} Returns the `Button` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040206.html }
         */
        enable(): NU.Button;
    }

    interface Datepicker {
        options: NU.Options.Datepicker;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040306.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Shows the Datepicker.
         *
         * @return {NU.Datepicker} Returns the `Datepicker` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040306.html }
         */
        show(): NU.Datepicker;
        /**
         * Hides the Datepicker.
         *
         * @return {NU.Datepicker} Returns the `Datepicker` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040306.html }
         */
        hide(): NU.Datepicker;
    }

    interface Popup {
        options: NU.Options.Popup;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040405.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Opens the Popup.
         *
         * @param {any} [onOpenData] - Optional data to be processed or used when the popup is opened.
         * > Pass onOpenData as the first argument to the onOpen function specified by the onOpen event option.
         * @return {NU.Popup} Returns the `Popup` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040405.html }
         */
        open(onOpenData?: any): NU.Popup;
        /**
         * Close the Popup.
         *
         * @param {any} [onCloseData] - Optional data to be processed or used when the popup is closed.
         * > Pass onCloseData as the first argument to the onClose function specified by the onClose event option.
         * @return {NU.Popup} Returns the `Popup` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040405.html }
         */
        close(onCloseData?: any): NU.Popup;
        /**
         * Removes all elements related to Popup.
         *
         * @return {NU.Popup} Returns the `Popup` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040405.html }
         */
        remove(): NU.Popup;
    }

    interface Tab {
        options: NU.Options.Tab;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040506.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Opens the specified tab.
         *
         * @param {number} idx - The index of the tab to open.
         * @param {any} [onOpenData] - Optional data to be processed or used when the tab is opened.
         * > Pass onOpenData as the first argument to the onOpen function specified by the onOpen event option.
         * @param {boolean} [isFirst] - This is an option used inside a component that is set to true when a tab is instantiated and the default active tab is automatically selected.
         * @return {NU.Tab} - Returns the `Tab` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040506.html }
         */
        open(idx: number, onOpenData?: any, isFirst?: boolean): NU.Tab;
        /**
         * Opens the specified tab.
         *
         * @param {number} [idx] - The index of the tab to open. If no arguments are specified, a status information object is returned.
         * @param {any} [onOpenData] - Optional data to be processed or used when the tab is opened.
         * > Pass onOpenData as the first argument to the onOpen function specified by the onOpen event option.
         * @param {boolean} [isFirst] - This is an option used inside a component that is set to true when a tab is instantiated and the default active tab is automatically selected.
         * @return {Object} If all arguments are not entered, the following tab status information is returned in object type.
         * @return {number} return.index - Index of the activated tab.
         * @return {NJS<HTMLElement[]>} return.tab - Activated tab navigation element.
         * @return {NJS<HTMLElement[]>} return.content - Activated tab content element.
         * @return {NA.Objects.Controller.Object} return.cont - Controller object of the activated tab content.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040506.html }
         */
        open(idx?: number, onOpenData?: any, isFirst?: boolean): {
            index: number;
            tab: NJS<HTMLElement[]>;
            content: NJS<HTMLElement[]>;
            cont: NA.Objects.Controller.Object;
        };
        /**
         * Disables the specified tab.
         *
         * @param {number} idx - The index of the tab to disable.
         * @return {NU.Tab} Returns the `Tab` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040506.html }
         */
        disable(idx: number): NU.Tab;
        /**
         * Enables the specified tab.
         *
         * @param {number} idx - The index of the tab to be enabled.
         * @return {NU.Tab} Returns the `Tab` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040506.html }
         */
        enable(idx: number): NU.Tab;
        /**
         * Returns the Controller object of the tab content.
         * > If the tab content is created internally or the preload option is false, undefined is returned because there is no Controller object.
         *
         * @param {number} [idx] - Enter the tab index where the controller object you want to look up is located. If no index is provided, the method returns the controller object that is active.
         * @return {NA.Objects.Controller.Object} The controller object corresponding to the specified index.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040506.html }
         */
        cont(idx?: number): NA.Objects.Controller.Object;
    }

    interface Select {
        options: NU.Options.Select;
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - true: Extracts only the currently selected row data and returns it as `JSONObject[]` type.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        data(selFlag: true): JSONObject[];
        /**
         * Returns the latest data bound to the component.
         *
         * @param {false} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - true: Extracts only the currently selected row data and returns it as `JSONObject[]` type.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         * @return {NJS<NC.JSONObject[]>} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        data(selFlag: false): NJS<NC.JSONObject[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        data(): JSONObject[];
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Binds data to the element specified by the context option.
         * > If the context element is a checkbox and is checked, the elements created when data is bound are also created in a checked state.
         *
         * > When data is bound to a radio or checkbox input element, the element set as context has an id attribute and a name attribute, and only the name attribute is added to the additionally created option element.
         * > When binding an event to a created checkbox or radio, if you select an element with the id selector, the event is applied only to the first option element, so select the element with the name attribute.
         * ```
         * $("input[name='name']").on("click", function(e) { ... });
         * ```
         *
         * @param {NJS<NC.JSONObject[]>} [data] - Specifies the data to bind.
         * @return {NU.Select} Returns the `Select` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        bind(data?: NJS<NC.JSONObject[]>): NU.Select;
        /**
         * Returns the index of the selected option.
         *
         * @return {number} Index of selected option
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        index(): number;
        /**
         * Select the option corresponding to the specified index.
         *
         * @param {number} idx - Index of the option to select
         * @return {NU.Select} Returns the `Select` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        index(idx: number): NU.Select;
        /**
         * Returns the value of the selected option.
         *
         * @return {NC.Primitive | NC.Primitive[]} Selected option value.
         */
        val(): NC.Primitive | NC.Primitive[];
        /**
         * Select the option corresponding to the specified value.
         *
         * @param {NC.Primitive | NC.Primitive[]} [val] - Option value to select.
         * @return {NU.Select} Returns the `Select` instance for chaining.
         */
        val(val?: NC.Primitive | NC.Primitive[]): NU.Select;
        /**
         * Removes option elements and row data objects equal to the value specified by the val argument..
         *
         * @param {NC.Primitive} val -
         * @return {NU.Select} Returns the `Select` instance for chaining.
         */
        remove(val: NC.Primitive): NU.Select;
        /**
         * Reset selection.
         *
         * @param {boolean} [selFlag] - For select elements, setting it to true will select nothing and setting it to false will select the default (first) option element.
         * @return {NU.Select} - Returns the `Select` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040605.html }
         */
        reset(selFlag?: boolean): NU.Select;
    }

    interface Form {
        options: NU.Options.Form;
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - true: Extracts only the currently selected row data and returns it as `JSONObject[]` type.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         * @param {...string} cols - If you specify the property name of the data as an argument from the second argument to the nth argument of the data method, an object from which only the specified property value is extracted is returned.
         * ```
         * var formInst = N([]).form(".context")
         *     .bind(0, [{ col01: "", col02: "", col03: "", col04: "", col05: "", col06: "" }]);
         * formInst.data(true, "col01", "col02", "col03");
         *     // [{ col01: "", col02: "", col03: "" }]
         * ```
         * > This only works if you specify the first argument as true.
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040706.html }
         */
        data(selFlag: true, ...cols: string[]): JSONObject[];
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - true: Extracts only the currently selected row data and returns it as `JSONObject[]` type.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040706.html }
         */
        data(selFlag: false): NJS<NC.JSONObject[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040706.html }
         */
        data(): JSONObject[];
        /**
         * Returns the index of the data bound to the Form from the bound data array.
         *
         * @param {string} [before] - If "before" is specified, the index of the data bound just before is returned.
         * @return {number} Row index.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040706.html }
         */
        row(before?: "before"): number;
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040706.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        bindEvents: {
            validate(ele: NJS<HTMLElement[]>, opts: NU.Options.Form, eleType: string, isTextInput: boolean): void;
            dataSync(ele: NJS<HTMLElement[]>, opts: NU.Options.Form, vals: NC.JSONObject, eleType: string): void;
            enterKey(ele: NJS<HTMLElement[]>, opts: NU.Options.Form): void;
            format(ele: NJS<HTMLElement[]>, opts: NU.Options.Form, eleType: string, key: string): void;
        };
        /**
         * Binds data to elements that have an id attribute value within the element specified by the context option.
         *
         * > If you change only the data and bind it again, N.form may not work properly.
         * > When rebinding to a context element that has data bound to it, you must first run the unbind method and then run the bind method.
         *
         * @param {number} row - Specifies the row index of the data array to bind.
         * @param {NJS<NC.JSONObject[]>} [data] - Specifies the data to bind.
         * @param {...string} [cols] - If you specify the property name of the data from the third to the nth argument of the bind method, only the elements whose property name and id attribute value match will be bound to the data.
         * ```
         * // Data to bind
         * var data = [{ col01 : "", col02 : "", col03 : "", col04 : "", col05 : "", col06 : "" }]
         * // Binds only to elements that have the id attribute values “col01”, “col02”, and “col03”.
         * formInstance.bind(0, data, "col01", "col02", "col03");
         * ```
         * ```
         * // After directly modifying the bound data, bind only to elements that have the id attribute values “col01”, “col02”, and “col03”.
         * var data = formInstance.data()[formInstance.row()]
         * data.col01 = "val";
         * data.col02 = "123";
         * data.col03 = "temp";
         * formInstance.bind(0, data, "col01", "col02", "col03");
         * ```
         * @return {NU.Form} Returns the `Form` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040705.html }
         */
        bind(row: number, data?: NJS<NC.JSONObject[]>, ...cols: string[]): NU.Form;
        add(data?: number | NC.JSONObject, row?: number): NU.Form;
        remove(): NU.Form;
        revert(): NU.Form;
        validate(): boolean;
        val(key: string): NC.Primitive | NC.Primitive[];
        val(key: string, val?: NC.Primitive | NC.Primitive[], notify?: boolean): NU.Form;
        /**
         * Processes real-time data synchronization logic for two-way data binding between data components.
         *
         * @param {number} row - The index of the row to be updated.
         * @param {string} [key] - This is the column name of the row data to be updated.
         * @return {NU.Form} Returns the `Form` instance for chaining.
         */
        update(row: number, key?: string): NU.Form;
    }

    interface List {
        options: NU.Options.List;
        /**
         * The default row(li) element of a list. Create row elements by duplicating this element.
         */
        tempRowEle: NJS<HTMLElement[]>;
        /**
         * This is an element specified by the context option of the list component. An instance of the original context element is assigned to the processed element.
         */
        contextEle: NJS<HTMLElement[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         *  - modified: Returns inserted, updated and deleted data as `JSONObject[]` type.
         *  - selected: When the select option or multiselect option is set, the selected data is returned as `JSONObject[]` type.
         *  - checked: When the checkAll option, checkAllTarget option, or checkOnlyTarget option is set, the checked data is returned as `JSONObject[]` type.
         *  - insert: Returns the inserted data as `JSONObject[]` type.
         *  - update: Returns the inserted data as `JSONObject[]` type.
         *  - delete: Returns the inserted data as `JSONObject[]` type.
         * @param {...string} cols - If you specify the property name of the data as an argument from the second argument to the nth argument of the data method, an object from which only the specified property value is extracted is returned.
         * ```
         * var listInst = N([]).list(".context")
         *     .bind([{ col01 : "", col02 : "", col03 : "", col04 : "", col05 : "", col06 : "" }]);
         * listInst.data("modified", "col01", "col02", "col03");
         *     // [{ col01 : "", col02 : "", col03 : "" }]
         * ```
         * > This only works if the first argument is "modified", "selected", "checked", "insert", "update", or "delete".
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040806.html }
         */
        data(selFlag: "modified" | "selected" | "checked" | "insert" | "update" | "delete", ...cols: string[]): JSONObject[];
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         *  - modified: Returns inserted, updated and deleted data as `JSONObject[]` type.
         *  - selected: When the select option or multiselect option is set, the selected data is returned as `JSONObject[]` type.
         *  - checked: When the checkAll option, checkAllTarget option, or checkOnlyTarget option is set, the checked data is returned as `JSONObject[]` type.
         *  - insert: Returns the inserted data as `JSONObject[]` type.
         *  - update: Returns the inserted data as `JSONObject[]` type.
         *  - delete: Returns the inserted data as `JSONObject[]` type.
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040806.html }
         */
        data(selFlag: false): NJS<NC.JSONObject[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040806.html }
         */
        data(): JSONObject[];
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040806.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        contextBodyTemplate(sel?: NJS<HTMLElement[]> | JQuery.Selector): NJS<HTMLElement[]>;
        select(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.List;
        check(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.List;
        /**
         * Binds data to elements with an id attribute value within the element specified by the context option and creates row elements equal to the length of data.
         *
         * @param {NJS<NC.JSONObject[]>} [data] - Specifies the data to bind.
         * @param {"append" | "list.bind" | "list.update"} [callType]
         *  - append: Merges previously bound data and newly bound data and adds new row elements to previously created row elements.
         *  - list.bind: This is an option for processing status inside a component. Set opts.scrollPaging.idx to 0.
         *  - list.update: This is an option for processing status inside a component. This is a flag to branch the logic processed when called from the logic for two-way data binding(update function).
         * > When the "append" argument value is set, the scrollPaging.size option value is automatically set to 0, disabling the scroll paging feature.
         * @return {NU.List} Returns the `List` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040806.html }
         */
        bind(data?: NJS<NC.JSONObject[]>, callType?: "append" | "list.bind" | "list.update"): NU.List;
        add(data?: number | NC.JSONObject, row?: number): NU.List;
        remove(row?: number): NU.List;
        revert(row?: number): NU.List;
        validate(row?: number): boolean;
        val(row: number, key: string): NC.Primitive | NC.Primitive[];
        val(row: number, key: string, val?: NC.Primitive | NC.Primitive[]): NU.List;
        move(fromRow: number, toRow: number): NU.List;
        copy(fromRow: number, toRow: number): NU.List;
        /**
         * Processes real-time data synchronization logic for two-way data binding between data components.
         *
         * @param {number} row - The index of the row to be updated.
         * @param {string} [key] - This is the column name of the row data to be updated.
         * @return {NU.Form} Returns the `Form` instance for chaining.
         */
        update(row: number, key?: string): NU.List;
    }

    interface Grid {
        options: NU.Options.Grid;
        /**
         * The default row(tbody) element of a grid. Create row elements by duplicating this element.
         */
        tempRowEle: NJS<HTMLElement[]>;
        tableMap: NU.Objects.Grid.TableMap;
        thead: NJS<HTMLElement[]>;
        /**
         * This is an element specified by the context option of the list component. An instance of the original context element is assigned to the processed element.
         */
        contextEle: NJS<HTMLElement[]>;
        rowSpanIds: NJS<string[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         *  - modified: Returns inserted, updated and deleted data as `JSONObject[]` type.
         *  - selected: When the select option or multiselect option is set, the selected data is returned as `JSONObject[]` type.
         *  - checked: When the checkAll option, checkAllTarget option, or checkOnlyTarget option is set, the checked data is returned as `JSONObject[]` type.
         *  - insert: Returns the inserted data as `JSONObject[]` type.
         *  - update: Returns the inserted data as `JSONObject[]` type.
         *  - delete: Returns the inserted data as `JSONObject[]` type.
         * @param {...string} cols - If you specify the property name of the data as an argument from the second argument to the nth argument of the data method, an object from which only the specified property value is extracted is returned.
         * ```
         * var gridInst = N([]).grid(".context")
         *     .bind([{ col01 : "", col02 : "", col03 : "", col04 : "", col05 : "", col06 : "" }]);
         * gridInst.data("modified", "col01", "col02", "col03");
         *     // [{ col01 : "", col02 : "", col03 : "" }]
         * ```
         * > This only works if the first argument is "modified", "selected", "checked", "insert", "update", or "delete".
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040906.html }
         */
        data(selFlag: "modified" | "selected" | "checked" | "insert" | "update" | "delete", ...cols: string[]): JSONObject[];
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         *  - modified: Returns inserted, updated and deleted data as `JSONObject[]` type.
         *  - selected: When the select option or multiselect option is set, the selected data is returned as `JSONObject[]` type.
         *  - checked: When the checkAll option, checkAllTarget option, or checkOnlyTarget option is set, the checked data is returned as `JSONObject[]` type.
         *  - insert: Returns the inserted data as `JSONObject[]` type.
         *  - update: Returns the inserted data as `JSONObject[]` type.
         *  - delete: Returns the inserted data as `JSONObject[]` type.
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040906.html }
         */
        data(selFlag: false): NJS<NC.JSONObject[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040906.html }
         */
        data(): JSONObject[];
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040906.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        contextHead(sel?: NJS<HTMLElement[]> | JQuery.Selector): NJS<HTMLElement[]>;
        contextBodyTemplate(sel?: NJS<HTMLElement[]> | JQuery.Selector): NJS<HTMLElement[]>;
        select(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.Grid;
        check(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.Grid;
        /**
         * Binds data to elements with an id attribute value within the element specified by the context option and creates row elements equal to the length of data.
         *
         * @param {NJS<NC.JSONObject[]>} [data] - Specifies the data to bind.
         * @param {"append" | "grid.bind" | "grid.update"} [callType]
         *  - append: Merges previously bound data and newly bound data and adds new row elements to previously created row elements.
         *  - grid.bind: This is an option for processing status inside a component. Set opts.scrollPaging.idx to 0.
         *  - grid.dataFilter: This is an option for processing status inside a component. This is a flag to branch the logic processed when called from the logic for the grid data filter function.
         *  - grid.sort: This is an option for processing status inside a component. This is a flag to branch the logic processed when called from the logic for the grid data sort function.
         *  - grid.update: This is an option for processing status inside a component. This is a flag to branch the logic processed when called from the logic for two-way data binding(update function).
         * > When the "append" argument value is set, the scrollPaging.size option value is automatically set to 0, disabling the scroll paging feature.
         * @return {NU.Grid} Returns the `Grid` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040906.html }
         */
        bind(data?: NJS<NC.JSONObject[]>, callType?: "append" | "grid.bind" | "grid.dataFilter" | "grid.sort" | "grid.update"): NU.Grid;
        add(data?: number | JSONObject, row?: number): NU.Grid;
        remove(row?: number): NU.Grid;
        revert(row?: number): NU.Grid;
        validate(row?: number): boolean;
        val(row: number, key: string): NC.Primitive | NC.Primitive[];
        val(row: number, key: string, val?: NC.Primitive | NC.Primitive[]): NU.Grid;
        move(fromRow: number, toRow: number): NU.Grid;
        copy(fromRow: number, toRow: number): NU.Grid;
        show(colIdxs: number): NU.Grid;
        hide(colIdxs: number): NU.Grid;
        /**
         * Processes real-time data synchronization logic for two-way data binding between data components.
         *
         * @param {number} row - The index of the row to be updated.
         * @param {string} [key] - This is the column name of the row data to be updated.
         * @return {NU.Form} Returns the `Form` instance for chaining.
         */
        update(row: number, key?: string): NU.Grid;
    }

    interface Pagination {
        options: NU.Options.Pagination;
        linkEles: NU.Objects.Pagination.LinkEles;
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041006.html }
         */
        data(selFlag: false): NJS<NC.JSONObject[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041006.html }
         */
        data(): JSONObject[];
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041005.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Creates a Pagination element by binding data to the element specified with the context option.
         *
         * @param {NJS<NC.JSONObject[]> | number} [data] - Specify data to bind or set totalCount.
         * If the argument type is number, it is set to totalCount, and if the argument type is array type, it is set to data.
         * @param {number} [totalCount] - Enter the total number of rows of data for pagination.
         * @return {NU.Pagination} Returns the `Pagination` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041005.html }
         */
        bind(data?: NJS<NC.JSONObject[]> | number, totalCount?: number): NU.Pagination;
        totalCount(): number;
        totalCount(totalCount: number): NU.Pagination;
        pageNo(): number;
        pageNo(pageNo: number): NU.Pagination;
        countPerPage(): number;
        countPerPage(countPerPage: number): NU.Pagination;
        countPerPageSet(): number;
        countPerPageSet(countPerPageSet: number): NU.Pagination;
        currPageNavInfo(): NU.Options.CurrPageNavInfo;
    }

    interface Tree {
        options: NU.Options.Tree;
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         *  - selected: Returns the data of the selected node as `JSONObject[]` type.
         *  - checked: Returns the data of the checked node as `JSONObject[]` type.
         *  - checkedInLastNode: Returns the data of the last node of all checked elements in `JSONObject[]` type.
         * @param {...string} cols - If you specify the property name of the data as an argument from the second argument to the nth argument of the data method, an object from which only the specified property value is extracted is returned.
         * ```
         * var treeInst = N([]).tree(".context")
         *     .bind([{ col01 : "", col02 : "", col03 : "", col04 : "", col05 : "", col06 : "" }]);
         * treeInst.data("checked", "col01", "col02", "col03");
         *     // [{ col01 : "", col02 : "", col03 : "" }]
         * ```
         * > This only works if the first argument is "selected", "selected", "checked", or "checkedInLastNode".
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041106.html }
         */
        data(selFlag: "selected" | "checked" | "checkedInLastNode", ...cols: string[]): JSONObject[];
        /**
         * Returns the latest data bound to the component.
         *
         * @param {true} selFlag - Depending on the argument values, it returns the following data:
         *  - undefined(If the selFlag option is not specified): Returns data of type `JSONObject[]`.
         *  - false: Returns data of the original type of type `NJS<NC.JSONObject[]>` bound to the component.
         *    > When binding data retrieved with the data method to another data-related component, you must set it to "false" to bind the original type of data to enable two-way data binding.
         *  - selected: Returns the data of the selected node as `JSONObject[]` type.
         *  - checked: Returns the data of the checked node as `JSONObject[]` type.
         *  - checkedInLastNode: Returns the data of the last node of all checked elements in `JSONObject[]` type.
         * ```
         * var treeInst = N([]).tree(".context")
         *     .bind([{ col01 : "", col02 : "", col03 : "", col04 : "", col05 : "", col06 : "" }]);
         * treeInst.data("checked", "col01", "col02", "col03");
         *     // [{ col01 : "", col02 : "", col03 : "" }]
         * ```
         * > This only works if the first argument is "selected", "checked", or "checkedInLastNode".
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041106.html }
         */
        data(selFlag: false): NJS<NC.JSONObject[]>;
        /**
         * Returns the latest data bound to the component.
         *
         * @return {JSONObject[]} The data currently bound to the component is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041106.html }
         */
        data(): JSONObject[];
        /**
         * Returns the context element.
         *
         * @param {JQuery.Selector} [sel] - An optional jQuery selector to refine the context.
         * @return {NJS<HTMLElement[]>} The context element or the element selected in the context is returned.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041105.html }
         */
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        /**
         * Creates a Tree within the element specified by the context option.
         *
         * @param {NJS<NC.JSONObject[]>} [data] - Specifies the data to bind.
         * @return {NU.Tree} Returns the `Tree` instance for chaining.
         *
         * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041105.html }
         */
        bind(data?: NJS<NC.JSONObject[]>): NU.Tree;
        select(val?: NC.Primitive): NC.Primitive | NU.Tree;
        expand(): NU.Tree;
        collapse(): NU.Tree;
    }

}


