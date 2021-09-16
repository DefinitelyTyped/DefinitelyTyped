// Type definitions for aero__sanitizer 1.2
// Project: https://git.farfrom.earth/aero/forks/sanitizer
// Definitions by: Rodry <https://github.com/ImRodry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Sanitizes a given input string by transforming all characters into latin characters and removing accents.
 * @param str The string to sanitize.
 * @example
 * clean("aéà)àçé"); // 'aea)ace'
 * @example
 * clean("に間違いがないか、再度確認してください。再読み込みしてください。"); // niJian Wei iganaika, Zai Du Que Ren sitekudasai. Zai Du miIp misitekudasai.
 */
declare function clean(str: string): string;

export = clean;
