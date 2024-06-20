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
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createCatalogStore(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<StoreCatalogSettings>;
    getCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCategory(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalogCategory>;
    getCheckBatchRequestStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborativeAdsLsbImageBank(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborativeAdsShareSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCpasLsbImageBank(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CPASLsbImageBank>;
    getCreatorAssetCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDataSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDiagnostics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getEventStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
    getExternalEventSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createExternalEventSource(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createHomeListing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<HomeListing>;
    getHotelRoomsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createHotelRoomsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createHotel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Hotel>;
    createItemsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createLocalizedItemsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getPricingVariablesBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPricingVariablesBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getProductFeeds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeed>;
    getProductGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductGroup>;
    getProductSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductSet>;
    getProductSetsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createVehicle(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Vehicle>;
    createVersionItemsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;    get(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
}
