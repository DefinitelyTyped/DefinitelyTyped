// Type definitions for ityped 1.0
// Project: https://github.com/luisvinicius167/ityped
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 MaySoMusician <https://github.com/MaySoMusician>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Configuration {
    strings?: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    startDelay?: number;
    cursorChar?: string;
    placeholder?: boolean;
    showCursor?: boolean;
    disableBackTyping?: boolean;
    onFinished?: () => void;
    loop?: boolean;
}

export function init(element: string | Element, config: Configuration): void;

export as namespace ityped;
