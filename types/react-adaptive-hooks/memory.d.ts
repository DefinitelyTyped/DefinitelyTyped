export interface MemoryStatus {
    deviceMemory: number;
    totalJSHeapSize: number | null;
    usedJSHeapSize: number | null;
    jsHeapSizeLimit: number | null;
}

export function useMemoryStatus<T = Partial<MemoryStatus>>(
    initialMemoryStatus?: T,
):
    | ({ unsupported: true } & T)
    | ({
          unsupported: false;
      } & MemoryStatus);
