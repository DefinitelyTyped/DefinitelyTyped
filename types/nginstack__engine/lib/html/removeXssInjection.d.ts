export = removeXssInjection;
declare function removeXssInjection(content: string, preserveSymbols?: boolean): string;
declare namespace removeXssInjection {
    function disable(): void;
}
