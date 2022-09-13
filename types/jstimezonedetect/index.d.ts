// Type definitions for jsTimezoneDetect 1.0
// Project: https://github.com/pellepim/jstimezonedetect
// Definitions by: Olivier Lamothe <https://github.com/olamothe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function determine(usingIntl?: boolean): {
    name(): string;
}

export as namespace jstz;
