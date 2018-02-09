declare namespace adone.text {
    namespace table {
        namespace I {
            interface CharsOptions {
                top: string;
                "top-mid": string;
                "top-left": string;
                "top-right": string;
                bottom: string;
                "bottom-mid": string;
                "bottom-left": string;
                "bottom-right": string;
                left: string;
                "left-mid": string;
                mid: string;
                "mid-mid": string;
                right: string;
                "right-mid": string;
                middle: string;
            }

            interface StyleOptions {
                "padding-left": number;
                "padding-right": number;
                head: string[];
                border: string[];
                compact: boolean;
            }

            interface CommonOptions {
                truncate: string;
                colWidths: number[];
                rowHeights: number[];
                colAligns: Array<"left" | "center" | "right">;
                rowAligns: Array<"top" | "center" | "bottom">;
                head: string[];
            }

            interface Options extends CommonOptions {
                style: StyleOptions;
                chars: CharsOptions;
            }

            interface ConstructorOptions extends Partial<CommonOptions> {
                style?: Partial<StyleOptions>;
                chars?: Partial<CharsOptions>;
            }
        }

        class Table extends Array {
            constructor(options?: I.ConstructorOptions);

            toString(): string;

            readonly width: number;

            static readonly defaultOptions: I.Options;
        }

        namespace I {
            interface BorderlessConstructorOptions {
                colWidths?: number[];
                head?: string[];
                colAligns?: Array<"left" | "center" | "right">;
                style?: Partial<StyleOptions>;
            }
        }

        class BorderlessTable extends Table {
            constructor(options?: I.BorderlessConstructorOptions);
        }
    }
}
