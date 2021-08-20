// Type definitions for parse-reminder 1.3
// Project: https://github.com/bkeepers/parse-reminder#readme
// Definitions by: newt! <https://github.com/definitelytyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function parseReminder(reminder: string): ParsedReminder;

export interface ParsedReminder {
    who: string;
    what: string;
    when: Date;
}
