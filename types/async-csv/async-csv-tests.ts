import {
    CastingContext,
    CastingDateFunction,
    ColumnOption,
    CsvGenerateOptions,
    CsvParseOptions,
    CsvStringifyOptions,
    generate,
    parse,
    stringify,
    transform,
    TransformOptions,
} from 'async-csv';
import { readFileSync } from 'fs';

(async (): Promise<void> => {
    const csvString = 'foo,bar,baz\n1,2,3';
    const csvBuffer: Buffer = readFileSync('data.csv');

    const defaultAnyRows = await parse(csvString);
    const numRows = await parse(csvString);

    const autoParseBoolean: CsvParseOptions = {
        auto_parse_date: false,
        auto_parse: true,
    };

    const autoParseCastingFunction: CsvParseOptions = {
        auto_parse_date: false,
        auto_parse: (value: string, context: CastingContext): void => {},
    };

    const castingDateFunction: CastingDateFunction = (value: string, context: CastingContext): Date => new Date(value);

    const autoParseCastingDateFunction: CsvParseOptions = {
        auto_parse_date: castingDateFunction,
    };

    const castCastingFunction: CsvParseOptions = {
        cast: (value: string, context: CastingContext): null => null,
    };

    const castDateCastingFunction: CsvParseOptions = {
        cast: castingDateFunction,
    };

    const columnsBoolean: CsvParseOptions = {
        columns: true,
    };

    const columnsArray: CsvParseOptions = {
        columns: [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }],
    };

    const columnsCallback: CsvParseOptions = {
        columns: (record: any): ColumnOption[] => {
            return ['', undefined, null, false, { name: 'foo' }];
        },
    };

    const delimiterBuffer: CsvParseOptions = {
        delimiter: Buffer.from([42]),
    };

    const escapeBuffer: CsvParseOptions = {
        escape: Buffer.from([42]),
    };

    const quoteBuffer: CsvParseOptions = {
        quote: Buffer.from([42]),
    };

    const quoteBoolean: CsvParseOptions = {
        quote: false,
    };

    const recordDelimiterString: CsvParseOptions = {
        record_delimiter: 'foo',
    };

    const recordDelimiterStringArray: CsvParseOptions = {
        record_delimiter: ['foo', 'bar'],
    };

    const recordDelimiterBuffer: CsvParseOptions = {
        record_delimiter: Buffer.from([42]),
    };

    const recordDelimiterBufferArray: CsvParseOptions = {
        record_delimiter: [Buffer.from([42]), Buffer.from([21])],
    };

    const allParseOptions: CsvParseOptions = {
        auto_parse: true,
        auto_parse_date: true,
        bom: true,
        cast: true,
        cast_date: true,
        columns: true,
        comment: 'foo',
        delimiter: ',',
        escape: '\\',
        from: 0,
        from_line: 0,
        info: true,
        ltrim: true,
        max_record_size: 8192,
        objname: 'o',
        quote: '"',
        raw: true,
        relax: true,
        relax_column_count: true,
        record_delimiter: ['\r\n', '\n'],
        rtrim: true,
        skip_empty_lines: true,
        skip_lines_with_error: true,
        skip_lines_with_empty_values: true,
        to: 42,
        to_line: 42,
        trim: true,
    };

    const castingContext: CastingContext = {
        column: 42,
        empty_lines: 42,
        header: true,
        index: 42,
        quoting: true,
        lines: 42,
        records: 42,
        invalid_field_length: 42,
    };

    const castingContextWithoutColumn: CastingContext = {
        empty_lines: 42,
        header: true,
        index: 42,
        quoting: true,
        lines: 42,
        records: 42,
        invalid_field_length: 42,
    };

    const castingContextWithStringColumn: CastingContext = {
        column: 'foo',
        empty_lines: 42,
        header: true,
        index: 42,
        quoting: true,
        lines: 42,
        records: 42,
        invalid_field_length: 42,
    };

    const generateColumnsStringArray: CsvGenerateOptions = {
        columns: ['foo', 'bar', 'baz'],
    };

    const generateEndDate: CsvGenerateOptions = {
        end: new Date(),
    };

    const generateEofBoolean: CsvGenerateOptions = {
        eof: false,
    };

    const generateEofString: CsvGenerateOptions = {
        eof: 'foo',
    };

    const generateOptions: CsvGenerateOptions = {
        columns: 42,
        delimiter: ',',
        duration: 3600,
        encoding: 'UTF-8',
        end: 3600,
        eof: true,
        fixed_size: true,
        fixedSize: true,
        high_water_mark: 4092,
        highWaterMark: 4092,
        length: 400,
        max_word_length: 20,
        maxWordLength: 20,
        object_mode: true,
        objectMode: true,
        row_delimiter: '\n',
        seed: true,
        sleep: 42,
    };

    const transformOptions: TransformOptions = {
        consume: true,
        parallel: 4,
        params: 'test',
    };

    const stringifyColumnsStringArray: CsvStringifyOptions = {
        columns: ['foo', 'bar', 'baz'],
    };

    const stringifyColumnsPlainObject: CsvStringifyOptions = {
        columns: { foo: 'bar' },
    };

    const stringifyColumnsColumnOptionArray: CsvStringifyOptions = {
        columns: ['foo', undefined, null],
    };

    const stringifyBufferDelimiter: CsvStringifyOptions = {
        delimiter: Buffer.from([42]),
    };

    const stringifyBufferEscape: CsvStringifyOptions = {
        escape: Buffer.from([42]),
    };

    const stringifyBufferQuote: CsvStringifyOptions = {
        quote: Buffer.from([42]),
    };

    const stringifyBooleanQuote: CsvStringifyOptions = {
        quote: false,
    };

    const stringifyRecordDelimiterString: CsvStringifyOptions = {
        record_delimiter: 'foo',
    };

    const stringifyRecordDelimiterBuffer: CsvStringifyOptions = {
        record_delimiter: Buffer.from([42]),
    };

    const stringifyOptions: CsvStringifyOptions = {
        cast: {
            boolean: (value: boolean, context: CastingContext): string => (value ? 'yes' : 'no'),
            date: (value: Date, context: CastingContext): string => value.toISOString(),
            number: (value: number, context: CastingContext): string => value.toString(),
            object: (value: Record<string, any>, context: CastingContext): string => JSON.stringify(value),
            string: (value: string, context: CastingContext): string => value,
        },
        columns: [],
        delimiter: ',',
        eof: true,
        escape: '\\',
        header: true,
        quote: true,
        quoted: true,
        quoted_empty: true,
        quoted_match: true,
        quoted_string: true,
        record_delimiter: 'auto',
    };

    const resultGenerateWithoutOptions = await generate();
    const resultGenerateWithOptions = await generate(generateOptions);

    const resultParseWithoutOptions: string[][] = (await parse(csvString)) as string[][];
    const resultParseWithOptions: string[][] = (await parse(csvString, allParseOptions)) as string[][];

    const cb = (err?: Error | null, record?: unknown): void => {};

    const resultTransformWithoutOptions: number[][] = await transform<string[], number[]>(
        resultParseWithOptions,
        (row: string[], cb, transformOptions): number[] => [42],
    );

    const resultTransformWithOptions: number[][] = await transform<string[], number[]>(
        resultParseWithOptions,
        (row: string[], cb, transformOptions): number[] => [42],
        transformOptions,
    );

    const resultStringifyWithoutOptions: Promise<string> = stringify(resultParseWithOptions);
    const resultStringifyWithOptions: Promise<string> = stringify(resultParseWithOptions, stringifyOptions);
})();
