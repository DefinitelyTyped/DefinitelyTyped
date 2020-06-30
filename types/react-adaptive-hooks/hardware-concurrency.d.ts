export function useHardwareConcurrency(): {
    unsupported: boolean;
    numberOfLogicalProcessors?: number;
};
