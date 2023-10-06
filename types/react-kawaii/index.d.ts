// Type definitions for react-kawaii 0.17
// Project: https://github.com/miukimiu/react-kawaii
// Definitions by: Zhang Yi Jiang <https://github.com/ZhangYiJiang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type KawaiiMood =
    | "sad"
    | "shocked"
    | "happy"
    | "blissful"
    | "lovestruck"
    | "excited"
    | "ko";

export interface KawaiiProps {
    size?: number | undefined;
    color?: string | undefined;
    mood?: KawaiiMood | undefined;
}

export const SpeechBubble: React.ComponentType<KawaiiProps>;
export const Mug: React.ComponentType<KawaiiProps>;
export const Browser: React.ComponentType<KawaiiProps>;
export const Ghost: React.ComponentType<KawaiiProps>;
export const Cat: React.ComponentType<KawaiiProps>;
export const IceCream: React.ComponentType<KawaiiProps>;
export const CreditCard: React.ComponentType<KawaiiProps>;
export const File: React.ComponentType<KawaiiProps>;
export const Backpack: React.ComponentType<KawaiiProps>;
export const Planet: React.ComponentType<KawaiiProps>;
export const Chocolate: React.ComponentType<KawaiiProps>;
export const Folder: React.ComponentType<KawaiiProps>;
