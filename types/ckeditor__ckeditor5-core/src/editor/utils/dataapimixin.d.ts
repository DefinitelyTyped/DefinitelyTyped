export interface DataApi {
    setData(data: string): void;
    getData(options?: { rootName?: string | undefined; trim?: "empty" | "none" | undefined }): string;
}

declare const DataApiMixin: DataApi;

export default DataApiMixin;
