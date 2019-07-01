export interface FieldInterface {
    name: string;
    primitiveType?: string | null;
    originalType?: string | null;
    path: string[];
    repetitionType: string;
    encoding?: string;
    compression?: string;
    typeLength: number | null | undefined;
    rLevelMax: number;
    dLevelMax: number;
    isNested?: boolean;
    fieldCount?: number;
    fields?: {[key: string]: FieldInterface};
}
