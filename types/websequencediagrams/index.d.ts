// Type definitions for websequencediagrams 0.1
// Project: https://github.com/hildjj/node-websequencediagrams
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type OutputType = 'png' | 'svg' | 'pdf';
export type Style = 'default' | 'earth' | 'modern-blue' | 'mscgen' | 'omegapple' | 'qsd' | 'rose' | 'roundgreen' | 'napkin' | 'magazine' | 'vs2010' | 'patent';
export type diagramCallback = (error: Error | null, buffer?: Buffer, mimeType?: string) => void;
export type diagramUrlCallback = (error: Error | null, url?: string) => void;

export const root: string;
export const styles: Style[];

export function diagram(description: string | Buffer, style: Style | null, format: OutputType | null, callback: diagramCallback): void;
export function diagram_url(description: string | Buffer, style: Style | null, format: OutputType | null, callback: diagramUrlCallback): void;
