import { parseArgs } from '@pkgjs/parseargs';

{
    // util.parseArgs: happy path
    // tslint:disable-next-line:no-object-literal-type-assertion
    const config = {
        allowPositionals: true,
        options: {
            foo: { type: 'string' },
            bar: { type: 'boolean', multiple: true },
        },
    } as const;

    // $ExpectType { values: { foo: string | undefined; bar: boolean[] | undefined; }; positionals: string[]; }
    parseArgs(config);
}

{
    // util.parseArgs: positionals not enabled
    // tslint:disable-next-line:no-object-literal-type-assertion
    const config = {
        options: {
            foo: { type: 'string' },
            bar: { type: 'boolean', multiple: true },
        },
    } as const;

    // @ts-expect-error
    parseArgs(config).positionals[0];
}

{
    // util.parseArgs: tokens
    // tslint:disable-next-line:no-object-literal-type-assertion
    const config = {
        tokens: true,
        allowPositionals: true,
        options: {
            foo: { type: 'string' },
            bar: { type: 'boolean' },
        },
    } as const;

    // tslint:disable-next-line:max-line-length
    // $ExpectType { kind: "positional"; index: number; value: string; } | { kind: "option-terminator"; index: number; } | { kind: "option"; index: number; name: "foo"; rawName: string; value: string; inlineValue: boolean; } | { kind: "option"; index: number; name: "bar"; rawName: string; value: undefined; inlineValue: undefined; }
    parseArgs(config).tokens[0];
}

{
    // util.parseArgs: strict: false

    // $ExpectType { values: { [longOption: string]: string | boolean | undefined; }; positionals: string[]; }
    const result = parseArgs({
        strict: false,
    });
}

{
    // util.parseArgs: strict: false

    const result = parseArgs({
        strict: false,
        options: {
            x: { type: 'string', multiple: true },
        },
    });
    // $ExpectType (string | boolean)[] | undefined
    result.values.x;
    // $ExpectType string | boolean | undefined
    result.values.y;
}

{
    // util.parseArgs: config not inferred precisely
    const config = {};

    // $ExpectType { values: { [longOption: string]: string | boolean | (string | boolean)[] | undefined; }; positionals: string[]; tokens?: Token[] | undefined; }
    const result = parseArgs(config);
}
