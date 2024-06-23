import { BasicOptions } from "readline-sync";

export interface ChoiceOptions {
    allowNoAnswer?: boolean | undefined;
    returnNumeric?: boolean | undefined;
}

export interface NumberOptions {
    allowNoAnswer?: boolean | undefined;
    requireInteger?: boolean | undefined;
}

export function getChar(promptText: string, allowedCharsAsString: string, flagAllowNoAnswer?: boolean): string;
export function getChoice(title: string, choices: string[], opts: ChoiceOptions & { returnNumeric: true }): number;
export function getChoice(title: string, choices: string[], opts?: ChoiceOptions): string;
export function getChoiceByChar(title: string, choices: string[], flagAllowNoAnswer?: boolean): string;
export function getInteger(promptText: string): number;
export function getIPversion(flagAllowNoAnswer?: boolean): string;
export function getNumber(promptText: string, opts?: boolean | NumberOptions): number;
export function getYesNo(title: string, flagAllowNoAnswer: true): boolean | undefined;
export function getYesNo(title: string, flagAllowNoAnswer?: false): boolean;
export function question(prompt: string, options?: BasicOptions): string;
