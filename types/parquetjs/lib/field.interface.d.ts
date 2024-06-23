export interface FieldInterface {
    name: string;
    primitiveType?: string | null | undefined;
    originalType?: string | null | undefined;
    path: string[];
    repetitionType: string;
    encoding?: string | undefined;
    compression?: string | undefined;
    typeLength: number | null | undefined;
    rLevelMax: number;
    dLevelMax: number;
    isNested?: boolean | undefined;
    fieldCount?: number | undefined;
    fields?: { [key: string]: FieldInterface } | undefined;
}
