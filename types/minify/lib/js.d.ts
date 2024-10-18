import type { Options } from "./minify";

/**
 * minify js data.
 *
 * @param data
 * @param [userOptions] - (optional) object that may contain a `js` key with an object of options
 * @async
 */
export default function(data: string, userOptions?: Pick<Options, "js">): Promise<string>;
