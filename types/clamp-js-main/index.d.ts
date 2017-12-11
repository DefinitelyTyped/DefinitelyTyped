// Type definitions for clamp-js-main 0.11
// Project: https://github.com/jmenglis/clamp-js-main#readme
// Definitions by: Sinziana Nicolae <https://github.com/sinziananicolae>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ClampOptions {
    clamp?: number|string;
    useNativeClamp?: boolean;
    splitOnChars?: string[];
    animate?: boolean;
    truncationChar?: string;
    truncationHTML?: string | null;
}

export interface ClampResponse {
    original: string;
    clamped: string;
}

export default function clamp(element: HTMLElement, options?: ClampOptions): ClampResponse;
