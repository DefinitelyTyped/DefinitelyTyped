/**
 * Default options.
 */
export const options: {
    /**
     * merge all passed/found config files, see `cjson.extend`
     * @default false;
     */
    merge: boolean;
    /**
     * allows you to do some string replacements, see `cjson.replace`.
     * @default null;
     */
    replace: (
        json: string,
        data: {
            [key: string]: string;
        },
    ) => any;
    /**
     * freeze config recursively, see `cjson.freeze`
     * @default false
     */
    freeze: boolean;
    /**
     * you can use any other extension for your config files, f.e. *.cjson
     * @default '.json'
     */
    ext: string;
    /**
     * you can use any parser you want. the default uses JSON.parse for maximum
     * speed, if it throws it uses uses an alternative parser to give more
     * helpful errors
     */
    parse: typeof JSON.parse;
};

/**
 * Remove single and multilie comments. Make sure to
 * leave them inside of strings.
 *
 * @param json file.
 * @return json without comments.
 */
export function decomment(str: string): string;

/**
 * Decomment the string and parse json.
 *
 * @param json.
 * @param [reviver] will be called for every key and value at every
 * level of the final result.
 * @return parsed json object.
 */
export const parse: typeof JSON.parse;

/**
 * Replace templates with data. {{toReplace}}
 *
 * @param json.
 * @param data data hash.
 * @return json string with replaced data.
 */
export function replace(
    str: string,
    data: {
        [key: string]: unknown;
    },
): string;

/**
 * Merge objects to the first one
 *
 * @param deep if set true, deep merge will be done.
 * @param obj1 any object.
 * @param obj2 any object.
 * @return target merged object.
 */
export function extend<T1 extends object, T2 extends object>(deep: boolean, obj1: T1, obj2: T2): T1 & T2;

/**
 * Merge objects to the first one
 *
 * @param obj1 any object.
 * @param obj2 any object.
 * @param obj3 any object.
 * @return target merged object.
 */
export function extend<T1 extends object, T2 extends object, T3 extends object>(
    obj1: T1,
    obj2: T2,
    obj3: T3,
): T1 & T2 & T3;

/**
 * Freeze the object recursively.
 *
 * @param obj.
 */
export function freeze<T>(obj: T): Readonly<T>;

/**
 * Load and parse a config file/files.
 *
 * @param path absolute path/paths to the file/files or dir.
 * @param [options] if true, extend all jsons to the first one,
 * it can be also object {merge: true, replace: {key: 'value'}}
 * @return conf parsed json object.
 */
export function load(
    path: string | string[],
    options?:
        | boolean
        | {
            [key: string]: string;
        },
): any;
