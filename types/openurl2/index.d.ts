// Type definitions for openurl2 1.0
// Project: https://github.com/rauschma/openurl
// Definitions by: Felix Hao <https://github.com/felixhao28>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function open(url: string, callback?: (err: Error) => void): void;
export function mailto(recipients: string[], fields: {[key: string]: string}, recipientsSeparator?: string, callback?: (err: Error) => void): void;
