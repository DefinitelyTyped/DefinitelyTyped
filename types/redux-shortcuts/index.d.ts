// Type definitions for redux-shortcuts 0.0
// Project: https://github.com/nak2k/node-redux-shortcuts
// Definitions by: Tim Stirrat <https://github.com/tstirrat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ActionCreator, Action, Dispatch } from "redux";
import Mousetrap = require('mousetrap');

export { Mousetrap };
export const mousetrap: MousetrapInstance;

export function bindShortcut(
    keys: KeyBindings,
    actionCreator: ActionBindings,
    preventDefault?: boolean
): (dispatch: Dispatch<any>) => void;

export function bindShortcuts(
    ...shortcut: ShortcutDefinition[]
): (dispatch: Dispatch<any>) => void;

export type KeyBindings = string | string[];

export type ActionBindings =
    | ActionCreator<Action>
    | Array<ActionCreator<Action>>;

export type ShortcutDefinition =
    | BasicShortcutDefinition
    | ShortcutDefinitionWithPreventDefault;

export type BasicShortcutDefinition = [KeyBindings, ActionBindings];

export type ShortcutDefinitionWithPreventDefault = [
    KeyBindings,
    ActionBindings,
    boolean
];
