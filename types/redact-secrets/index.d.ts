interface Redactor {
    /**
     * @param obj The object to redact.
     * @returns A clone of the given `obj` with its secret values redacted.
     */
    map<TObj extends Record<string, any>>(obj: TObj): TObj;
    /**
     * Redacts the secret values of the `obj` in-place.
     *
     * @param obj The object to redact.
     */
    forEach(obj: Record<string, unknown>): void;
}

/**
 * Create a redactor instance.
 *
 * @param redacted The string used as a replacement variable for values that are redacted.
 *
 * @example
 * const makeRedact = require('redact-secrets')
 *
 * const redact = makeRedact('[REDACTED]')
 *
 * const obj = {
 *   username: 'watson',
 *   password: 'hhGu38gf',
 *   extra: {
 *     id: 1,
 *     token: 'some-secret-stuff'
 *     card: '1234 1234 1234 1234'
 *   }
 * }
 *
 * console.log(redact.map(obj))
 * // {
 * //   username: 'watson',
 * //   password: '[REDACTED]',
 * //   extra: {
 * //     id: 1,
 * //     token: '[REDACTED]'
 * //     card: '[REDACTED]'
 * //   }
 * // }
 */
declare function Redact(redacted: string): Redactor;

export = Redact;
