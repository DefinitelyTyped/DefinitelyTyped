export = CriticalSection;
declare function CriticalSection(): void;
declare class CriticalSection {
    enter(criticalSectionName: string): void;
    leave(criticalSectionName: string): void;
}
declare namespace CriticalSection {
    function getInstance(): CriticalSection;
}
