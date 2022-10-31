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
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAgency(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getArEffectsBatchStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBatch(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    createCatalogWebsiteSetting(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getCategories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCategory(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalogCategory>;
    getCheckBatchRequestStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCollaborativeAdsLsbImageBank(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCollaborativeAdsShareSettings(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createCpasLsbImageBank(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getDataSources(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDiagnostics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEventStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
    getExternalEventSources(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createExternalEventSource(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createHomeListing(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<HomeListing>;
    getHotelRoomsBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createHotelRoomsBatch(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createHotel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Hotel>;
    createItemsBatch(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    createLocalizedItemsBatch(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMediaTitle(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<MediaTitle>;
    getPricingVariablesBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPricingVariablesBatch(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getProductFeeds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductFeed(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductFeed>;
    getProductGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductGroup(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductGroup>;
    getProductSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductSet(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductSet>;
    getProductSetsBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProduct(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductItem>;
    getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVehicle(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Vehicle>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ProductCatalog>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ProductCatalog>;
}
