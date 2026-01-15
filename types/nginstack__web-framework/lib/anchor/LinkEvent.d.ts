export = LinkEvent;
declare function LinkEvent(...args: any[]): void;
declare class LinkEvent {
    constructor(...args: any[]);
    target: import('./Link.js');
    link: import('./Link.js');
    field: import('../classdef/ViewDefField.js') | null;
    grid: import('../grid/Grid.js') | null;
    process: import('../process/Process.js') | null;
}
