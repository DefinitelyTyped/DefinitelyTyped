// Type definitions for @hapi/content 6.0
// Project: https://github.com/hapijs/subtext#readme
// Definitions by: Sebastian Malton <https://github.com/nokel81>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ContentType {
  mime: string;
  charset?: string;
  boundary?: string;
}

export function type(header: string | undefined): ContentType;

export interface ContentDisposition {
  name: string;
  filename: string;
}

export function disposition(header: string | undefined): ContentDisposition;
