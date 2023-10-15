/**
 * Simple function for formatting strings.
 *
 * Replaces placeholders with values passed as extra arguments
 */
declare function sprintf(format: string, ...args: any[]): string;
declare namespace sprintf {}
export = sprintf;
