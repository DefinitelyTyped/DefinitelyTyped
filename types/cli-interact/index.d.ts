// Type definitions for cli-interact 0.1
// Project: https://github.com/zhami/cli-interact
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BasicOptions } from 'readline-sync';

export interface ChoiceOptions {
    allowNoAnswer?: boolean;
    returnNumeric?: boolean;
}

export interface NumberOptions {
    allowNoAnswer?: boolean;
    requireInteger?: boolean;
}

export function getChar(promptText: string, allowedCharsAsString: string, flagAllowNoAnswer?: boolean): string;
export function getChoice(title: string, choices: string[], opts: ChoiceOptions & {returnNumeric: true}): number;
export function getChoice(title: string, choices: string[], opts?: ChoiceOptions): string;
export function getChoiceByChar(title: string, choices: string[], flagAllowNoAnswer?: boolean): string;
export function getInteger(promptText: string): number;
export function getIPversion(flagAllowNoAnswer?: boolean): string;
export function getNumber(promptText: string, opts?: boolean | NumberOptions): number;
export function getYesNo(title: string, flagAllowNoAnswer: true): boolean | undefined;
export function getYesNo(title: string, flagAllowNoAnswer?: false): boolean;
export function question(prompt: string, options?: BasicOptions): string;
