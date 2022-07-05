import type { Options } from './minify';

/**
 * minify html data.
 *
 * @param data
 * @param [userOptions] - (optional) object that may contain an `html` key with an object of options
 */
// tslint:disable-next-line:space-before-function-paren
export default function (data: string, userOptions?: Pick<Options, 'html'>): Promise<string>;
