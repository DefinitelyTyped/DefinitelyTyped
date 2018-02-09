declare namespace adone.text {
    namespace pretty {
        namespace I {
            interface JSONOptions {
                emptyArrayMsg?: string;
                keysColor?: string;
                dashColor?: string;
                numberColor?: string;
                stringColor?: string;
                defaultIndentation?: number;
                noColor?: boolean;
                noAlign?: boolean;
            }
        }

        function json(data: any, options?: I.JSONOptions, indentation?: number): string;

        namespace I {
            interface TableColumn {
                id: string;
                header?: string;
                align?: "right" | "center" | "left";
                width?: string | number;
                maxWidth?: number | string;
                wordwrap?: "soft" | "hard" | adone.text.I.WordWrapOptions;
                handle?: (item: object) => string;
                format?: string | ((val: any, item: object) => string);
                style?: string | ((val: any, str: string) => string);
            }

            type TableModel = TableColumn[];

            interface TableStyle {
                "padding-left"?: number;
                "padding-right"?: number;
                head?: string[];
                broder?: string[];
                compact?: boolean;
            }

            interface TableOptions {
                model: TableModel;
                noHeader?: boolean;
                borderless?: boolean;
                style?: TableStyle;
                width?: number | string;
                countAnsiEscapeCodes?: boolean;
            }

            type TableData = Array<{ [id: string]: any }>;
        }

        function table(data: I.TableData, options: I.TableOptions): string;
    }
}
