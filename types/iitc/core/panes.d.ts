export {};

declare global {
    var currentPane: string;

    function show(id: string): void;
    function hideall(): void;
}
