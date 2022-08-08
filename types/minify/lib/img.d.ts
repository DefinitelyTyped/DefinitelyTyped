import type { Options } from './minify';

/**
 * minify css data.
 * if can not minify return data
 *
 * @param name
 * @param data
 * @param [userOptions] - (optional) object that may contain an `img` key with an object of options
 * @async
 */
// tslint:disable-next-line:space-before-function-paren
export default function (name: string, data: string, userOptions?: Pick<Options, 'img'>): Promise<string>;
