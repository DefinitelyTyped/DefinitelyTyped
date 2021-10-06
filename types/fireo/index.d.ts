// Type definitions for fireo 1.0
// Project: https://github.com/octabytes/fireo-nodejs
// Definitions by: Azeem Haider https://github.com/AxeemHaider,
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Fireo {
    static runTransaction(callback: () => any): Promise<any>;

    static batch(): any;

    static GeoPoint(latitude: number, longitude: number): any;

    static listUnion(element: any[]): any;

    static listRemove(element: any[]): any;

    static increment(number: number): any;

    static get connection(): any;
}

interface GetCollectionOptions {
    id?: string;
    key?: string;
    transaction?: any;
}

interface DeleteCollectionOptions {
    id?: string;
    key?: string;
    child?: boolean;
}

declare class BaseManager {}

declare class Collection extends BaseManager {
    get(by: GetCollectionOptions): Promise<any>;

    delete(by: DeleteCollectionOptions): Promise<void>;

    where(field: string, operator: string, value: string): any;

    fetch(limit?: number): Promise<{
        cursor: string;
        list: any[];
    }>;

    limit(number: number): any;

    limitToLast(number: number): any;

    orderBy(field: string): any;

    cursor(queryCursor: string): any;

    offset(number: number): any;

    parent(key: string): any;

    transaction(t: any): any;
}

interface ModelOptions {
    parent?: string;
}

interface SaveModelOptions {
    merge?: boolean;
    transaction?: any;
    batch?: any;
}

interface UpsertModelOptions {
    transaction?: any;
    batch?: any;
}

interface UpdateModelOptions {
    id?: string;
    key?: string;
    transaction?: any;
    batch?: any;
}

interface DeleteModelOptions {
    transaction?: any;
    batch?: any;
}

declare class MetaModel {}

export class Model extends MetaModel {
    static parent(key?: string): Model;

    static init<Entity extends Model>(options?: ModelOptions): Entity;

    static fromObject(map: Object): Model;

    fromObject(map: Object): Model;

    toObject(): Object;

    save(options?: SaveModelOptions): Promise<void>;

    upsert(options?: UpsertModelOptions): Promise<void>;

    update(options?: UpdateModelOptions): Promise<void>;

    delete(options?: DeleteModelOptions): Promise<void>;

    static get collection(): Collection;
}

interface BaseFieldOptions {
    required?: boolean;
    default?: any;
    name?: string;
}

interface TextFieldOptions extends BaseFieldOptions {
    toLowercase?: boolean;
}

interface DateTimeFieldOptions extends BaseFieldOptions {
    auto?: boolean;
}

interface ReferenceFieldOptions extends BaseFieldOptions {
    autoLoad?: boolean;
}

interface BaseFieldConfig {
    modelName?: string;
    originalName?: string;
    toLowercase?: boolean;
}

export class BaseField {
    constructor(options?: BaseFieldOptions);

    configure(options?: BaseFieldConfig): void;

    get name(): string;

    setValue(value: any): void;

    setDbValue(value: any): void;

    get getValue(): any;

    getDBValue(): Promise<any>;
}

declare class IDField extends BaseField {}
declare class TextField extends BaseField {}
declare class NumberField extends BaseField {}
declare class BooleanField extends BaseField {}
declare class ListField extends BaseField {}
declare class MapField extends BaseField {}
declare class DateTimeField extends BaseField {}
declare class GeoPointField extends BaseField {}
declare class ReferenceField extends BaseField {}

export class Field {
    static ID(): IDField;

    static Text(options?: TextFieldOptions): TextField;

    static Number(options?: BaseFieldOptions): NumberField;

    static Boolean(options?: BaseFieldOptions): BooleanField;

    static List(options?: BaseFieldOptions): ListField;

    static Map(options?: BaseFieldOptions): MapField;

    static DateTime(options?: DateTimeFieldOptions): DateTimeField;

    static GeoPoint(options?: BaseFieldOptions): GeoPointField;

    static Reference(options?: ReferenceFieldOptions): ReferenceField;
}
