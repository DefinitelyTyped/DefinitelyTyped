interface HotModuleReplacementData {
    // user-defined attributes
}

declare namespace NodeJS {
    interface Module {
        readonly hot?: {
            accept(): void;
            decline(): void;
            dispose(callback: (data: HotModuleReplacementData) => void): void;
            data: HotModuleReplacementData | null;
            onRequire<T>(callbacks: {
                before?(requiredModule: Module, parentId: string): T;
                after?(requiredModule: Module, data: T): void;
            }): void;
        }
    }
}

declare var module: NodeJS.Module;
