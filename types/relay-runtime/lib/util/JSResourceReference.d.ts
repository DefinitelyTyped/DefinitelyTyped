export interface JSResourceReference<TModule> {
    getModuleId(): string;
    getModuleIfRequired(): TModule | null | undefined;
    load(): Promise<TModule>;
}
