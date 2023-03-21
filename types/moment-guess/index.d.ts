// Type definitions for moment-guess 1.2
// Project: https://github.com/apoorv-mishra/moment-guess#readme
// Definitions by: Robin Van den Broeck <https://github.com/RobinVdBroeck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Date = string;
type Format = string;
declare function guessFormat(date: Date, format?: string): Format[] | Format;
export = guessFormat;
