// Type definitions for ityped 1.0
// Project: https://github.com/luisvinicius167/ityped
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 MaySoMusician <https://github.com/MaySoMusician>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Configuration {
    strings?: string[] | undefined;
    typeSpeed?: number | undefined;
    backSpeed?: number | undefined;
    backDelay?: number | undefined;
    startDelay?: number | undefined;
    cursorChar?: string | undefined;
    placeholder?: boolean | undefined;
    showCursor?: boolean | undefined;
    disableBackTyping?: boolean | undefined;
    onFinished?: (() => void) | undefined;
    loop?: boolean | undefined;
}

export function init(element: string | Element, config: Configuration): void;

export as namespace ityped;
