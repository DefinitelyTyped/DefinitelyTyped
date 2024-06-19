import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import StoreCatalogSettings from "./store-catalog-settings";
import ProductCatalogCategory from "./product-catalog-category";
import CPASLsbImageBank from "./cpas-lsb-image-bank";
import HomeListing from "./home-listing";
import Hotel from "./hotel";
import ProductFeed from "./product-feed";
import ProductGroup from "./product-group";
import ProductSet from "./product-set";
import ProductItem from "./product-item";
import Vehicle from "./vehicle";
/**
 * ProductCatalog
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalog extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdditionalVerticalOption(): Record<string, any>;
    static get Vertical(): Record<string, any>;
    static get PermittedRoles(): Record<string, any>;
    static get PermittedTasks(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Standard(): Record<string, any>;
    static get ItemSubType(): Record<string, any>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAgency(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBatch(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    createCatalogStore(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<StoreCatalogSettings>;
    getCategories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCategory(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalogCategory>;
    getCheckBatchRequestStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborativeAdsLsbImageBank(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborativeAdsShareSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCpasLsbImageBank(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CPASLsbImageBank>;
    getCreatorAssetCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDataSources(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDiagnostics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getEventStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
    getExternalEventSources(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createExternalEventSource(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createHomeListing(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<HomeListing>;
    getHotelRoomsBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createHotelRoomsBatch(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createHotel(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Hotel>;
    createItemsBatch(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    createLocalizedItemsBatch(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    getPricingVariablesBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPricingVariablesBatch(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    getProductFeeds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductFeed(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductFeed>;
    getProductGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductGroup(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductGroup>;
    getProductSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductSet(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductSet>;
    getProductSetsBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProduct(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductItem>;
    getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createVehicle(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Vehicle>;
    createVersionItemsBatch(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ProductCatalog;
    update(fields: Array<string>, params?: Record<string, any>): ProductCatalog;
}
