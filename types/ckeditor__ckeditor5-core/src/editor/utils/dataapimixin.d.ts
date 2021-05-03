export interface DataApi {
    setData(data: string): void;
    getData(options?: { rootName?: string; trim?: "empty" | "none" }): string;
}

declare const DataApiMixin: DataApi;

export default DataApiMixin;
