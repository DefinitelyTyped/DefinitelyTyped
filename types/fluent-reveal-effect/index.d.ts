// Type definitions for fluent-reveal-effect 2.0
// Project: https://www.npmjs.com/package/fluent-reveal-effect
// Definitions by: Alen Mukaca <https://github.com/ShinzenATT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface FluentRevealEffectType {
    applyEffect: (element: string, options: RevealOptions) => void;
}

export interface RevealOptions {
    lightColor?: string | "rgba(255,255,255,0.25)";
    gradientSize?: number | 150;
    clickEffect?: boolean | false;
    isContainer?: boolean | false;
    children?: {
        borderSelector?: string | ".eff-reveal-border";
        elementSelector?: string | ".eff-reveal";
        lightColor?: string | "rgba(255,255,255,0.25)";
        gradientSize?: number | 150;
    };
}

export const FluentRevealEffect: FluentRevealEffectType;

export {};
