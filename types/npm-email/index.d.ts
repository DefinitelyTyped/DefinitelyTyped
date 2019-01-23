// Type definitions for npm-email 3.0
// Project: https://github.com/sindresorhus/npm-email#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmEmail;

/**
 * Get the email of an npm user.
 *
 * @param username npm username to look up.
 * @returns A promise for the user's email address.
 */
declare function npmEmail(username: string): Promise<string>;
