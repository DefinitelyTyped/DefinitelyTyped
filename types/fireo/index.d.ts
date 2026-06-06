export namespace Fireo {
    function runTransaction(callback: () => any): Promise<any>;

    function batch(): any;

    function GeoPoint(latitude: number, longitude: number): any;

    function listUnion(element: any[]): any;

    function listRemove(element: any[]): any;

    function increment(number: number): any;

    let connection: any;
}

export interface GetCollectionOptions {
    id?: string;
    key?: string;
    transaction?: any;
}

export interface DeleteCollectionOptions {
    id?: string;
    key?: string;
    child?: boolean;
}

export class BaseManager {}

export class Collection extends BaseManager {
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

export interface ModelOptions {
    parent?: string;
}

export interface SaveModelOptions {
    merge?: boolean;
    transaction?: any;
    batch?: any;
}

export interface UpsertModelOptions {
    transaction?: any;
    batch?: any;
}

export interface UpdateModelOptions {
    id?: string;
    key?: string;
    transaction?: any;
    batch?: any;
}

export interface DeleteModelOptions {
    transaction?: any;
    batch?: any;
}

export class MetaModel {}

export class Model extends MetaModel {
    static parent(key?: string): Model;

    static init(options?: ModelOptions): any;

    static fromObject(map: object): Model;

    fromObject(map: object): Model;

    toObject(): object;

    save(options?: SaveModelOptions): Promise<void>;

    upsert(options?: UpsertModelOptions): Promise<void>;

    update(options?: UpdateModelOptions): Promise<void>;

    delete(options?: DeleteModelOptions): Promise<void>;

    static get collection(): Collection;
}

export interface BaseFieldOptions {
    required?: boolean;
    default?: any;
    name?: string;
}

export interface TextFieldOptions extends BaseFieldOptions {
    toLowercase?: boolean;
}

export interface DateTimeFieldOptions extends BaseFieldOptions {
    auto?: boolean;
}

export interface ReferenceFieldOptions extends BaseFieldOptions {
    autoLoad?: boolean;
}

export interface BaseFieldConfig {
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

export class IDField extends BaseField {}
export class TextField extends BaseField {}
export class NumberField extends BaseField {}
export class BooleanField extends BaseField {}
export class ListField extends BaseField {}
export class MapField extends BaseField {}
export class DateTimeField extends BaseField {}
export class GeoPointField extends BaseField {}
export class ReferenceField extends BaseField {}

export namespace Field {
    function ID(): IDField;

    function Text(options?: TextFieldOptions): TextField;

    function Number(options?: BaseFieldOptions): NumberField;

    function Boolean(options?: BaseFieldOptions): BooleanField;

    function List(options?: BaseFieldOptions): ListField;

    function Map(options?: BaseFieldOptions): MapField;

    function DateTime(options?: DateTimeFieldOptions): DateTimeField;

    function GeoPoint(options?: BaseFieldOptions): GeoPointField;

    function Reference(options?: ReferenceFieldOptions): ReferenceField;
}
