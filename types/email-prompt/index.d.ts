/**
 * CLI email prompt featuring autocompletion and validation.
 * Powers [vercel](https://vercel.com/) `--login`.
 *
 * @example
 * import emailPrompt = require('email-prompt');
 *
 * let email;
 *
 * try {
 *   email = await emailPrompt({
 *     // options
 *   });
 * } catch (err) {
 *   console.log('\n> Aborted!');
 *   return;
 * }
 *
 * console.log('\n> Hello ' + email);
 */
export default function emailPrompt(options?: Options): Promise<string>;

export interface Options {
    /**
     * The beginning of the prompt.
     *
     * @default '> Enter your email: '
     */
    start?: string | undefined;

    /**
     * Domain names to autocomplete.
     *
     * @default new Set([
     *   'aol.com',
     *   'gmail.com',
     *   'google.com',
     *   'yahoo.com',
     *   'ymail.com',
     *   'hotmail.com',
     *   'live.com',
     *   'outlook.com',
     *   'inbox.com',
     *   'mail.com',
     *   'gmx.com',
     *   'icloud.com',
     *   'hey.com',
     *   'zeit.co',
     *   'vercel.com'
     * ])
     */
    domains?: Set<string> | undefined;

    /**
     * Converts all input to lowercase.
     *
     * @default true
     */
    forceLowerCase?: boolean | undefined;

    /**
     * A [chalk](https://github.com/chalk/chalk) color.
     *
     * @default 'gray'
     */
    suggestionColor?: string | undefined;

    /**
     * A set of chars that trigger autocompletion.
     *
     * @default new Set([
     *   '\t', // tab
     *   '\n', // return
     *   '\x1b[C', // right arrow
     *   ' ' // Spacebar
     * ])
     */
    autocompleteChars?: Set<string> | undefined;

    /**
     * A set of chars that resolve the promise.
     *
     * @default new Set(['\r'])
     */
    resolveChars?: Set<string> | undefined;

    /**
     * A set of chars that abort the process.
     *
     * @default new Set([
     *   '\x03' // Ctrl+C
     * ])
     */
    abortChars?: Set<string> | undefined;

    /**
     * Controls whether non-email chars are accepted.
     *
     * @default false
     */
    allowInvalidChars?: boolean | undefined;
}
