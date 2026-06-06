declare namespace NodeJS {
    interface Module {
        readonly hot?: {
            accept(): void;
            decline(): void;
            dispose(callback: (data: object) => void): void;
            data: object | null;
            onRequire<T>(callbacks: {
                before?(requiredModule: Module, parentId: string): T;
                after?(requiredModule: Module, data: T): void;
            }): void;
        }
    }
}

declare var module: NodeJS.Module;
