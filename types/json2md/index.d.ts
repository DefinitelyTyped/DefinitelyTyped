export = json2md;

/**
 * Converts a JSON input to markdown.
 *
 * @param data The input JSON data.
 * @param prefix A snippet to add before each line.
 * @return The generated markdown result.
 */
declare function json2md(data: json2md.DataObject | json2md.DataObject[] | string | string[], prefix?: string): string;
type json2md = typeof json2md;

declare namespace json2md {
    const converters: ConvertersMethods;

    namespace DefaultConverters {
        interface Converters {
            [converter: string]: any;
            blockquote: string | string[];
            code: CodeInput;
            h1: string | string[];
            h2: string | string[];
            h3: string | string[];
            h4: string | string[];
            h5: string | string[];
            h6: string | string[];
            img: ImgInput | ImgInput[];
            ol: string[];
            p: string | string[];
            table: TableInput;
            ul: string[];
        }

        interface ImgInput {
            title: string;
            source: string;
        }

        interface CodeInput {
            language?: string | undefined;
            content: string | string[];
        }

        interface TableInput {
            headers: string[];
            rows: Array<{ [column: string]: string }> | string[][];
        }
    }

    type DataObject = {
        [TConverter in keyof DefaultConverters.Converters]?: DefaultConverters.Converters[TConverter];
    };

    type ConverterCallback<TInput> = (input: TInput, json2md: json2md) => string;

    type ConvertersMethods = {
        [TConverter in keyof DefaultConverters.Converters]: ConverterCallback<DefaultConverters.Converters[TConverter]>;
    };
}
