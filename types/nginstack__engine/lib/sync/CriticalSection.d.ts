export = CriticalSection;
declare function CriticalSection(name: string): void;
declare class CriticalSection {
    constructor(name: string);
    enter(timeout?: number): void;
    tryEnter(timeout?: number): boolean;
    leave(): void;
}
declare namespace CriticalSection {
    function enter(sectionName: string, timeout?: number): void;
    function tryEnter(sectionName: string, timeout?: number): boolean;
    function leave(sectionName: string): void;
    function getInstance(): CriticalSection;
}
