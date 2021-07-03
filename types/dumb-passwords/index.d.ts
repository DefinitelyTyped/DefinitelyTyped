// Type definitions for dumb-passwords 0.2
// Project: https://github.com/kn9ts/dumb-passwords#readme
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function check(password: string): boolean;
export function checkPassword(password: string): boolean;
export function rateOfUsage(
    password: string,
): {
    password: string;
    frequency: number;
    message?: string;
};
