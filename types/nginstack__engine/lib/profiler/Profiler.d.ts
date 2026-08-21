export = Profiler;
declare function Profiler(): void;
declare class Profiler {
    startOperation(name: string, details?: string, sumInteractions?: boolean): void;
    endOperation(details?: string): void;
    getHtmlStatistics(): string;
    getTxtStatistics(): string;
    forcedLog: boolean;
    enabled: boolean;
    excludeFunction(func: (...args: any[]) => any): void;
}
declare namespace Profiler {
    function getInstance(): Profiler;
}
