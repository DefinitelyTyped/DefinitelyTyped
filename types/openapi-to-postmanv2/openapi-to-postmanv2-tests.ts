import { convert, getMetaData, getOptions, mergeAndValidate, Input, validate, SchemaPack } from 'openapi-to-postmanv2';

const input: Input = {type: 'string', data: ''};

{
    const schemaPack = new SchemaPack(input);

    schemaPack.convert(
         (err, result) => {
            if (result.result) {
                result.output[0].type; // $ExpectType "collection"
                result.output[0].data; // $ExpectType CollectionDefinition
            } else {
                // @ts-expect-error
                result.output;
            }
        }
    );

    schemaPack.getMetaData((err, result) => {
        if (result.result) {
            result.output[0].type; // $ExpectType "collection"
            result.output[0].name; // $ExpectType string
        } else {
            // @ts-expect-error
            result.output;
        }
    });

    // TODO: get these tests working on all supported typescript versions
    // SchemaPack.getOptions('document', { usage: ['CONVERSION'] }); // $ExpectType OptionsDocument<"string" | "boolean" | "enum" | "integer" | "array">
    // SchemaPack.getOptions('use', { usage: ['CONVERSION'] }); // $ExpectType Record<string, string | number | boolean | readonly unknown[]>

    schemaPack.mergeAndValidate((err, result) => {
        if (result.result) {
            // @ts-expect-error
            result.output;
            // @ts-expect-error
            result.reason;
        } else {
            result.reason; // $ExpectType string
        }
    });

    {
        const result = schemaPack.validate();
        if (result.result) {
            // @ts-expect-error
            result.output;
            // @ts-expect-error
            result.reason;
        } else {
            result.reason; // $ExpectType string
        }
    }
}

convert(input,
    undefined, (err, result) => {
        if (result.result) {
            result.output[0].type; // $ExpectType "collection"
            result.output[0].data; // $ExpectType CollectionDefinition
        } else {
            // @ts-expect-error
            result.output;
        }
    }
);

getMetaData(input, (err, result) => {
    if (result.result) {
        result.output[0].type; // $ExpectType "collection"
        result.output[0].name; // $ExpectType string
    } else {
        // @ts-expect-error
        result.output;
    }
});

// TODO: get these tests working on all supported typescript versions
// getOptions('document', { usage: ['CONVERSION'] }); // $ExpectType OptionsDocument<"string" | "boolean" | "enum" | "integer" | "array">
// getOptions('use', { usage: ['CONVERSION'] }); // $ExpectType Record<string, string | number | boolean | readonly unknown[]>

mergeAndValidate(input, (err, result) => {
    if (result.result) {
        // @ts-expect-error
        result.output;
        // @ts-expect-error
        result.reason;
    } else {
        result.reason; // $ExpectType string
    }
});

{
    const result = validate(input);
    if (result.result) {
        // @ts-expect-error
        result.output;
        // @ts-expect-error
        result.reason;
    } else {
        result.reason; // $ExpectType string
    }
}
