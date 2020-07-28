// Type definitions for json-form-data 1.7
// Project: https://github.com/hyperatom/json-form-data
// Definitions by: Aaron Ross <https://github.com/superhawk610>
//                 Kamil Socha <https://github.com/ksocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ValidJSON {
    [key: string]: ValidJSON | ValidJSONValue | ValidJSONValue[] | FileList;
}

type ValidJSONValue = string | number | boolean | File | Blob | Date | null | undefined;

interface InitialFormData {
    append: FormData['append'];
}

/**
 * Formatting options for modifying the final generated FormData object.
 *
 * ## Defaults
 *
 *     const defaultOpts = {
 *       initialFormData: new FormData(),
 *       showLeafArrayIndexes: true,
 *       includeNullValues: false,
 *       mapping: value => {
 *         if (typeof value === 'boolean') {
 *           return +value ? '1' : '0';
 *         }
 *
 *         return value;
 *       }
 *     }
 */
interface FormatOptions {
    /**
     * Existing form data which values will be appended to  (default: `new FormData()`).
     * This can be used to support environments that do not have a global FormData object.
     */
    initialFormData?: InitialFormData;
    /**
     * Include index values in arrays (default: `true`).
     *
     * ## Examples
     *
     *     const json = { ids: [1, 2, 3] };
     *     const withArrayIndices = asFormData(json, { showLeafArrayIndex: true });
     *     // => FormData {
     *     //   ids[0]: '1',
     *     //   ids[1]: '2',
     *     //   ids[2]: '3',
     *     // }
     *     const withoutArrayIndices = asFormData(json, { showLeafArrayIndex: false });
     *     // => FormData {
     *     //   ids[]: '1',
     *     //   ids[]: '2',
     *     //   ids[]: '3',
     *     // }
     *
     */
    showLeafArrayIndexes?: boolean;
    /**
     * Include null values in output (default: `false`).
     *
     * ## Examples
     *
     *     const json = { foo: 1, bar: null };
     *     const withoutNullValues = asFormData(json, { includeNullValues: false });
     *     // => FormData {
     *     //   foo: '1'
     *     // }
     *     const withNullValues = asFormData(json, { includeNullValues: true });
     *     // => FormData {
     *     //   foo: '1'
     *     //   bar: 'null'
     *     // }
     *
     */
    includeNullValues?: boolean;
    /**
     * Modify outmost leaf values before calling formData.append. Default behaviour
     * is to output boolean values as '1'/'0' (true/false) and all other values
     * without modification.
     *
     * ## Examples
     *
     *     const json = { foo: true, bar: false };
     *     const data = asFormData(json);
     *     // => FormData {
     *     //   foo: '1',
     *     //   bar: '0',
     *     // }
     *     const mapping = value => `foo_${value}`;
     *     const custom = asFormData(json, { mapping });
     *     // => FormData {
     *     //   foo: 'foo_true',
     *     //   bar: 'foo_false'
     *     // }
     *
     */
    mapping?: (value: ValidJSONValue) => string | Blob;
}

/**
 * Iterate all keys/values in a JSON object (including nested values/arrays) and
 * generate a FormData object with corresponding keys/values.
 *
 * ## Example Usage
 *
 *     const json = {
 *         prop1: 'test',
 *         prop2: 2,
 *         prop3: null,
 *         prop4: undefined,
 *         prop5: true,
 *         prop6: false,
 *         prop7: new File(['file content'], 'my_file.txt'),
 *         prop8: {
 *             prop1: 'test',
 *             prop2: 2,
 *             prop3: null,
 *             prop4: undefined,
 *             prop5: true,
 *             prop6: false,
 *             prop7: [
 *                 'test',
 *                 2,
 *                 null,
 *                 undefined,
 *                 true,
 *                 false
 *             ]
 *         }
 *     };
 *     asFormData(json);
 *
 * generates the following FormData:
 *
 *     prop1
 *     test
 *
 *     prop2
 *     2
 *
 *     prop5
 *     1
 *
 *     prop6
 *     0
 *
 *     prop7
 *     Content-Disposition: form-data; name="My File"; filename="my_file.txt"
 *     Content-Type: text/plain
 *
 *     prop8[prop1]
 *     test
 *
 *     prop8[prop2]
 *     2
 *
 *     prop8[prop5]
 *     1
 *
 *     prop8[prop6]
 *     0
 *
 *     prop8[prop7][0]
 *     test
 *
 *     prop8[prop7][1]
 *     2
 *
 *     prop8[prop7][2]
 *     1
 *
 *     prop8[prop7][3]
 *     0
 */
declare const asFormData: FormDataFormatter;
type FormDataFormatter = (json: ValidJSON, opts?: FormatOptions) => FormData;

export = asFormData;
