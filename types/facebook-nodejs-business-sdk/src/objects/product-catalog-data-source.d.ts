import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductCatalogDataSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogDataSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        id: "id";
        ingestion_source_type: "ingestion_source_type";
        name: "name";
        upload_type: "upload_type";
    }>;
    static get IngestionSourceType(): Readonly<{
        all: "ALL";
        primary: "PRIMARY";
        supplementary: "SUPPLEMENTARY";
    }>;
}
