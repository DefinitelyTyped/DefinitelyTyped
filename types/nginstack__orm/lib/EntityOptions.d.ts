export = EntityOptions;
declare function EntityOptions(): void;
declare class EntityOptions {
    fields: string[] | ((arg0: any) => boolean);
    userKey: number;
    create: boolean;
    modelDef: any;
}
