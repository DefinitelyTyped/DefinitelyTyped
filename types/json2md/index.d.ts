// Type definitions for json2md 1.5
// Project: https://github.com/IonicaBizau/json2md#readme
// Definitions by: MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = json2md;

declare function json2md(data: json2md.ConverterObject | json2md.ConverterObject[] | string | string[], prefix?: string): string;
type json2md = typeof json2md;

declare namespace json2md {
    interface ConverterObject {
        [converter: string]: any;
        blockquote?: string | string[];
        code?: CodeInput;
        h1?: string | string[];
        h2?: string | string[];
        h3?: string | string[];
        h4?: string | string[];
        h5?: string | string[];
        h6?: string | string[];
        img?: ImgInput | ImgInput[];
        ol?: string[];
        p?: string | string[];
        table?: TableInput;
        ul?: string[];
    }

    type ConverterCallback<TInput> = (input: TInput, json2md: json2md) => string;

    const converters: ConvertersMethods;

    interface ConvertersMethods {
        [converter: string]: ConverterCallback<any>;

        blockquote(input: string | string[], json2md: json2md): string;
        code(input: CodeInput, json2md: json2md): string;
        h1(input: string, json2md: json2md): string;
        h2(input: string, json2md: json2md): string;
        h3(input: string, json2md: json2md): string;
        h4(input: string, json2md: json2md): string;
        h5(input: string, json2md: json2md): string;
        h6(input: string, json2md: json2md): string;
        img(input: ImgInput | ImgInput[] | string, json2md: json2md): string;
        ol(input: string, json2md: json2md): string;
        p(input: string, json2md: json2md): string;
        table(input: TableInput, json2md: json2md): string;
        ul(input: string, json2md: json2md): string;
    }

    interface ImgInput {
        title: string;
        source: string;
    }

    interface CodeInput {
        language?: string;
        content: string | string[];
    }

    interface TableInput {
        headers: string[];
        rows: Array<{ [column: string]: string }> | string[][];
    }
}
