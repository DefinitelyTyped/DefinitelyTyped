// Type definitions for terminal-kit 1.28
// Project: https://github.com/cronvel/terminal-kit#readme
// Definitions by: katsanva <https://github.com/katsanva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import Rect = require("./Rect");
import ScreenBuffer = require("./ScreenBuffer");
import ScreenBufferHD = require("./ScreenBufferHD");
import Terminal = require("./Terminal");
import TextBuffer = require("./TextBuffer");

export const terminal: Terminal;

export const realTerminal: Terminal;

export function createTerminal(
  createOptions?: Terminal.CreateOptions
): Terminal;

export function getParentTerminalInfo(
  callback: (error: any, codename?: string, name?: string, pid?: number) => void
): void;

export function getDetectedTerminal(
  calback: (error: any, term: Terminal) => void
): void;

export function autoComplete(
  array: ReadonlyArray<string>,
  startString: string,
  returnAlternatives?: boolean,
  prefix?: string,
  postfix?: string
): string;

export function stripEscapeSequences(str: string): string;

export function stringWidth(str: string): number;

export function truncateString(str: string, maxWidth: number): string;

export { Rect, ScreenBuffer, ScreenBufferHD, Terminal, TextBuffer };
