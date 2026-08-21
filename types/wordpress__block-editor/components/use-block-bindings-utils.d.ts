export function useBlockBindingsUtils(clientId?: string): {
    updateBlockBindings(
        bindings: { [binding: string]: { source: string; args?: { [key: string]: unknown } } | undefined },
    ): void;
    removeAllBlockBindings(): void;
};
