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
    getAgencies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getArEffectsBatchStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getArEffectsBatchStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getArEffectsBatchStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAutomotiveModels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createCatalogWebsiteSetting(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getCategories(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCategories(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCategory(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalogCategory>;
    getCheckBatchRequestStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCheckBatchRequestStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCheckBatchRequestStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCollaborativeAdsLsbImageBank(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCollaborativeAdsLsbImageBank(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCollaborativeAdsLsbImageBank(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCollaborativeAdsShareSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCollaborativeAdsShareSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCollaborativeAdsShareSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCpasLsbImageBank(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getDataSources(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDataSources(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDataSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDestinations(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDestinations(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDiagnostics(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDiagnostics(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDiagnostics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getEventStats(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getEventStats(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getEventStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
    getExternalEventSources(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getExternalEventSources(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getExternalEventSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExternalEventSource(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getFlights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFlights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHomeListings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHomeListings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createHomeListing(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<HomeListing>;
    getHotelRoomsBatch(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHotelRoomsBatch(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHotelRoomsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createHotelRoomsBatch(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getHotels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHotels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
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
    getMediaTitles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMediaTitles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMediaTitle(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<MediaTitle>;
    getPricingVariablesBatch(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPricingVariablesBatch(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPricingVariablesBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPricingVariablesBatch(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getProductFeeds(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductFeeds(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductFeeds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductFeed(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeed>;
    getProductGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductGroup(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductGroup>;
    getProductSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductSet>;
    getProductSetsBatch(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductSetsBatch(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductSetsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProducts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    getVehicleOffers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVehicleOffers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVehicles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVehicles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVehicle(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Vehicle>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
}
