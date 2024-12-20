declare namespace NT {
    namespace Options {
        interface Extra {
            /**
             * After the component is initialized, the specified function is immediately executed.
             *  - string: Function name
             *  - ...any[]: Arguments of the function
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            action?: string | [string, ...any[]];
            /**
             * Purpose of Form - When you enter the string "search-box", the specified area is created as a search box Form. You can specify more detailed options with the object type.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            usage?: string | {
                "search-box": {
                    defaultButton?: JQuery.Selector;
                    events?: {
                        event: string;
                        target: JQuery.Selector;
                        handler: NT.Objects.Controller.EventHandler;
                    }[];
                };
            };
        }
        /**
         * Represents a function type for filtering an array of JSON objects.
         *
         * @param {NJS<JSONObject[]>} data - Data to process.
         * @returns {NJS<JSONObject[]>} - Processed data.
         */
        interface SelectFilter {
            (data: NJS<NC.JSONObject[]>): NJS<NC.JSONObject[]>;
        }
        interface Select {
            /**
             * Common code classification code - Set the classification code value of the code list to bind.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            code?: string;
            /**
             * The Communicator to retrieve the list - Specify `c.{serviceName}` declared in the Controller object.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            comm?: string;
            /**
             * Data to bind - You can directly create and bind data like [{}, {}] through the `data` option without specifying the `comm` option.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            data?: NC.JSONObject[];
            /**
             * Property name of the data bound to the label of the selection element - Set the property name to bind from the retrieved data object.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            key?: string;
            /**
             * Property name of the data bound to the value of the selection element - Set the property name to bind from the retrieved data object.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            val?: string;
            /**
             * Data filter - Filters the common code data before binding.
             *
             * ```
             * "filter": function (data) {
             *     // If you process data (original data) and return it, the processed data is bound.
             *     return N(N.array.deduplicate(data, "age")).datasort("age"); // Sort after removing duplicates.
             * }
             * ```
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            filter?: SelectFilter;
            /**
             * Default selected value - Set the value of the default selection when the component is initialized.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            selected?: string;
        }
    }

    namespace Objects {
        namespace Controller {
            /**
             * EventHandler is a type definition for a callback function used to handle events.
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/template/documents/template-guide.html
             */
            interface EventHandler {
                (this: HTMLElement, e: JQuery.Event, ...args: any[]): void;
            }

            type InitialObject =
                & {
                    [K in `p.alert.${string}`]: (NT.Options.Extra & NU.Options.Alert);
                }
                & {
                    [K in `p.button.${string}`]: (NT.Options.Extra & NU.Options.Button);
                }
                & {
                    [K in `p.datepicker.${string}`]: (NT.Options.Extra & NU.Options.Datepicker);
                }
                & {
                    [K in `p.popup.${string}`]: (NT.Options.Extra & NU.Options.Popup);
                }
                & {
                    [K in `p.tab.${string}`]: (NT.Options.Extra & NU.Options.Tab);
                }
                & {
                    [K in `p.select.${string}`]:
                        | [string, string?, string?, NT.Options.SelectFilter?]
                        | NT.Options.Select;
                }
                & {
                    [K in `p.form.${string}`]: (NT.Options.Extra & NU.Options.Form);
                }
                & {
                    [K in `p.list.${string}`]: (NT.Options.Extra & NU.Options.List);
                }
                & {
                    [K in `p.grid.${string}`]: (NT.Options.Extra & NU.Options.Grid);
                }
                & {
                    [K in `p.pagination.${string}`]: (NT.Options.Extra & NU.Options.Pagination);
                }
                & {
                    [K in `p.tree.${string}`]: (NT.Options.Extra & NU.Options.Tree);
                }
                & {
                    [K in `c.${string}`]: (...args: any[]) => NA.Communicator;
                }
                & {
                    [K in `e.${string}`]: EventHandler | {
                        target: JQuery.Selector;
                        handler: EventHandler;
                    };
                };

            type Object =
                & NA.Objects.Controller.BaseObject
                & InitialObject
                & {
                    [K in `p.alert.${string}`]: NU.Alert;
                }
                & {
                    [K in `p.button.${string}`]: NU.Button;
                }
                & {
                    [K in `p.datepicker.${string}`]: NU.Datepicker;
                }
                & {
                    [K in `p.popup.${string}`]: NU.Popup;
                }
                & {
                    [K in `p.tab.${string}`]: NU.Tab;
                }
                & {
                    [K in `p.select.${string}`]: NU.Select;
                }
                & {
                    [K in `p.form.${string}`]: NU.Form;
                }
                & {
                    [K in `p.list.${string}`]: NU.List;
                }
                & {
                    [K in `p.grid.${string}`]: NU.Grid;
                }
                & {
                    [K in `p.pagination.${string}`]: NU.Pagination;
                }
                & {
                    [K in `p.tree.${string}`]: NU.Tree;
                }
                & {
                    [K in `e.${string}`]: NJS<HTMLElement[]>;
                };
        }
    }
}
