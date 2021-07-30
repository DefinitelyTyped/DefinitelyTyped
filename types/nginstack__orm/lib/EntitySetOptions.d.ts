export = EntitySetOptions;
declare function EntitySetOptions(): void;
declare class EntitySetOptions {
    fields: string[] | ((arg0: any) => boolean);
    userKey: number;
    modelDef: any;
}
