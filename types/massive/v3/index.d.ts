/// <reference types="node" />

export = massive;

declare function massive(
    connection: massive.ConnectionInfo | string,
    loaderConfig?: object,
    driverConfig?: object,
): Promise<massive.Database>;

declare namespace massive {
    interface ConnectionInfo {
        user?: string | undefined;
        database?: string | undefined;
        password?: string | null | undefined;
        port?: number | undefined;
        host?: string | undefined;
        ssl?: boolean | undefined;
        application_name?: string | undefined;
        fallback_application_name?: boolean | undefined;
    }

    interface QueryOptions {
        columns?: string[] | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        only?: boolean | undefined;
        order?: string[] | undefined;
        orderBody?: boolean | undefined;
        build?: boolean | undefined;
        document?: boolean | undefined;
        single?: boolean | undefined;
        stream?: boolean | undefined;
    }

    interface SearchCriteria {
        fields: string[];
        term: string;
    }

    interface Table<T> {
        find(criteria: object | {}, queryOptions?: QueryOptions): Promise<T[]>;
        findOne(criteria: number | object, queryOptions?: QueryOptions): Promise<T>;
        count(criteria: object): Promise<string>;
        where(query: string, params: any[] | object): Promise<T[]>;
        search(criteria: SearchCriteria, queryOptions?: QueryOptions): Promise<any>;
        save(data: object): Promise<T>;
        insert(data: object): Promise<T>;
        insert(data: object[]): Promise<T[]>;
        update(dataOrCriteria: object, changesMap?: object): Promise<T>;
        update(dataOrCriteria: object[], changesMap?: object): Promise<T[]>;
        destroy(criteria: object): Promise<T[]>;
    }

    interface Document {
        countDoc(criteria: object): Promise<number>;
        findDoc(criteria: number | string | object): Promise<object>;
        searchDoc(criteria: SearchCriteria): Promise<object[]>;
        saveDoc(doc: object): Promise<object>;
        modify(docId: number | string, doc: object, fieldName?: string): Promise<object>;
    }

    interface Database {
        attach(ctor: any, ...sources: any[]): Promise<any>;
        detach(entity: string, collection: string): void;
        reload(): void;
        query(query: any, params: any, options: any): Promise<any>;
        saveDoc(collectionName: string, doc: object): Promise<any>;
        createDocumentTable(path: any): Promise<any>;
        getObject(path: any, collection: any): object;
        dropTable(table: string, options: any): void;
        createSchema(schemaName: string): void;
        dropSchema(schemaName: string, options: any): void;
        run(query: string, params: any[] | object): Promise<object[]>;
    }
}
