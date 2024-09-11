import { JSONValue } from ".";

/**
 * Parses a YAML string, constructing the JavaScript value or object described by the string.
 * https://mokapi.io/docs/javascript-api/mokapi-yaml/parse
 * @param text text - The string to parse as YAML.
 * @returns The value corresponding to the given YAML text.
 * @example
 * export default function() {
 *   const orders = parse(open('orders.yaml'))
 *   console.log(outout[0].orderId)
 * }
 */
export function parse(text: string): any;

/**
 * Converts a JavaScript value to a YAML string.
 * @param value value - The value to convert to a YAML string.
 * @returns A YAML string representing the given value
 * @example
 * export default function() {
 *   const orders = [
 *     {
 *       orderId: 345,
 *       customer: 'Bob'
 *     },
 *     {
 *       orderId: 874,
 *       customer: 'Alice'
 *     }
 *   ]
 *
 *   on('http', function(request, response) {
 *     response.body = stringify(orders)
 *   })
 * }
 */
export function stringify(value: JSONValue): string;
