export function Chart(options: any): void;
export class Chart {
    constructor(options: any);
    _renderDiv: boolean;
    config_: import('@nginstack/engine/lib/classdef/ConfigDef');
    hasHint_(): boolean;
    options: any;
    html(): string;
    getClientLibraries(): any[];
    _createId(): string;
}
export namespace Chart {
    const _lastId: number;
    function dateFormat(): never;
    function numberFormat(): never;
}
export function Axis(): void;
export class Axis {}
export function Series(): void;
export class Series {}
export function Point(): void;
export class Point {}
export function isAvailable(): boolean;
export function addOptionsFile(uri: any): void;
