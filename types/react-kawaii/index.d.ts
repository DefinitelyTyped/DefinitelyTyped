// Type definitions for react-kawaii 0.10
// Project: https://github.com/miukimiu/react-kawaii#readme
// Definitions by: cubbK <https://github.com/cubbK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface Props {
    color?: string;
    mood?:
        | "sad"
        | "shocked"
        | "happy"
        | "blissful"
        | "lovestruck"
        | "excited"
        | "ko";
    size?: number;
    className?: string;
}

export const Backpack: React.FunctionComponent<Props>;
export const Browser: React.FunctionComponent<Props>;
export const Cat: React.FunctionComponent<Props>;
export const CreditCard: React.FunctionComponent<Props>;
export const Ghost: React.FunctionComponent<Props>;
export const IceCream: React.FunctionComponent<Props>;
export const Mug: React.FunctionComponent<Props>;
export const Planet: React.FunctionComponent<Props>;
export const SpeechBubble: React.FunctionComponent<Props>;
