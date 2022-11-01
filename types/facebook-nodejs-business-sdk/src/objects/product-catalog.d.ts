import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductCatalogCategory from './product-catalog-category';
import HomeListing from './home-listing';
import Hotel from './hotel';
import MediaTitle from './media-title';
import ProductFeed from './product-feed';
import ProductGroup from './product-group';
import ProductSet from './product-set';
import ProductItem from './product-item';
import Vehicle from './vehicle';
export default class ProductCatalog extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Vertical(): Record<string, any>;
    static get PermittedRoles(): Record<string, any>;
    static get PermittedTasks(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Standard(): Record<string, any>;
    static get ItemSubType(): Record<string, any>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getArEffectsBatchStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createCatalogWebsiteSetting(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCategory(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalogCategory>;
    getCheckBatchRequestStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCollaborativeAdsLsbImageBank(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCollaborativeAdsShareSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCpasLsbImageBank(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getDataSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDiagnostics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEventStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
    getExternalEventSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createExternalEventSource(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createHomeListing(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<HomeListing>;
    getHotelRoomsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createHotelRoomsBatch(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createHotel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Hotel>;
    createItemsBatch(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    createLocalizedItemsBatch(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMediaTitle(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<MediaTitle>;
    getPricingVariablesBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPricingVariablesBatch(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getProductFeeds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductFeed(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeed>;
    getProductGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductGroup(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductGroup>;
    getProductSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductSet>;
    getProductSetsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVehicle(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Vehicle>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
}
