// Type definitions for react-hook-form-persist 2.0
// Project: https://github.com/tiaanduplessis/react-hook-form-persist
// Definitions by: Kuboczoch <https://github.com/Kuboczoch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

declare function useFormPersist(
    name: string,
    {
        watch,
        setValue,
    }: {
        watch: (values: string[]) => { [key: string]: string };
        setValue: (name: any, value: any, config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean }>) => void;
    },
    {
        storage,
        exclude,
        include,
        onDataRestored,
    }: {
        storage?: Storage;
        exclude?: string[];
        include?: string[];
        onDataRestored?: (data: { [key: string]: string }) => void;
    },
): void;

export default useFormPersist;
