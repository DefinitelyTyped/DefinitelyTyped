import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AutomotiveModel from "./automotive-model";
import Destination from "./destination";
import Flight from "./flight";
import HomeListing from "./home-listing";
import Hotel from "./hotel";
import MediaTitle from "./media-title";
import ProductItem from "./product-item";
import ProductFeedRule from "./product-feed-rule";
import ProductFeedSchedule from "./product-feed-schedule";
import ProductFeedUpload from "./product-feed-upload";
import VehicleOffer from "./vehicle-offer";
import Vehicle from "./vehicle";
/**
 * ProductFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeed extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      country: 'country',
      created_time: 'created_time',
      default_currency: 'default_currency',
      deletion_enabled: 'deletion_enabled',
      delimiter: 'delimiter',
      encoding: 'encoding',
      file_name: 'file_name',
      id: 'id',
      ingestion_source_type: 'ingestion_source_type',
      item_sub_type: 'item_sub_type',
      latest_upload: 'latest_upload',
      migrated_from_feed_id: 'migrated_from_feed_id',
      name: 'name',
      override_type: 'override_type',
      primary_feeds: 'primary_feeds',
      product_count: 'product_count',
      quoted_fields_mode: 'quoted_fields_mode',
      schedule: 'schedule',
      supplementary_feeds: 'supplementary_feeds',
      update_schedule: 'update_schedule'
    });
  }

  static get Delimiter() {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      bar: 'BAR',
      comma: 'COMMA',
      semicolon: 'SEMICOLON',
      tab: 'TAB',
      tilde: 'TILDE'
    });
  }

  static get IngestionSourceType() {
    return Object.freeze({
      primary_feed: 'primary_feed',
      supplementary_feed: 'supplementary_feed'
    });
  }

  static get QuotedFieldsMode() {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      off: 'OFF',
      on: 'ON'
    });
  }

  static get Encoding() {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      latin1: 'LATIN1',
      utf16be: 'UTF16BE',
      utf16le: 'UTF16LE',
      utf32be: 'UTF32BE',
      utf32le: 'UTF32LE',
      utf8: 'UTF8'
    });
  }

  static get FeedType() {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      hotel_room: 'HOTEL_ROOM',
      local_inventory: 'LOCAL_INVENTORY',
      media_title: 'MEDIA_TITLE',
      offer: 'OFFER',
      products: 'PRODUCTS',
      transactable_items: 'TRANSACTABLE_ITEMS',
      vehicles: 'VEHICLES',
      vehicle_offer: 'VEHICLE_OFFER'
    });
  }

  static get ItemSubType() {
    return Object.freeze({
      appliances: 'APPLIANCES',
      baby_feeding: 'BABY_FEEDING',
      baby_transport: 'BABY_TRANSPORT',
      beauty: 'BEAUTY',
      bedding: 'BEDDING',
      cameras: 'CAMERAS',
      cell_phones_and_smart_watches: 'CELL_PHONES_AND_SMART_WATCHES',
      cleaning_supplies: 'CLEANING_SUPPLIES',
      clothing: 'CLOTHING',
      clothing_accessories: 'CLOTHING_ACCESSORIES',
      computers_and_tablets: 'COMPUTERS_AND_TABLETS',
      diapering_and_potty_training: 'DIAPERING_AND_POTTY_TRAINING',
      electronics_accessories: 'ELECTRONICS_ACCESSORIES',
      furniture: 'FURNITURE',
      health: 'HEALTH',
      home_goods: 'HOME_GOODS',
      jewelry: 'JEWELRY',
      nursery: 'NURSERY',
      printers_and_scanners: 'PRINTERS_AND_SCANNERS',
      projectors: 'PROJECTORS',
      shoes_and_footwear: 'SHOES_AND_FOOTWEAR',
      software: 'SOFTWARE',
      toys: 'TOYS',
      tvs_and_monitors: 'TVS_AND_MONITORS',
      video_game_consoles_and_video_games: 'VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES',
      watches: 'WATCHES'
    });
  }

  static get OverrideType() {
    return Object.freeze({
      batch_api_language_or_country: 'BATCH_API_LANGUAGE_OR_COUNTRY',
      catalog_segment_customize_default: 'CATALOG_SEGMENT_CUSTOMIZE_DEFAULT',
      country: 'COUNTRY',
      language: 'LANGUAGE',
      language_and_country: 'LANGUAGE_AND_COUNTRY',
      local: 'LOCAL',
      smart_pixel_language_or_country: 'SMART_PIXEL_LANGUAGE_OR_COUNTRY',
      version: 'VERSION'
    });
  }

  getAutomotiveModels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AutomotiveModel, fields, params, fetchFirstPage, '/automotive_models');
  }

  getDestinations(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Destination, fields, params, fetchFirstPage, '/destinations');
  }

  getFlights(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Flight, fields, params, fetchFirstPage, '/flights');
  }

  getHomeListings(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(HomeListing, fields, params, fetchFirstPage, '/home_listings');
  }

  getHotels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Hotel, fields, params, fetchFirstPage, '/hotels');
  }

  getMediaTitles(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(MediaTitle, fields, params, fetchFirstPage, '/media_titles');
  }

  getProducts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductItem, fields, params, fetchFirstPage, '/products');
  }

  getRules(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductFeedRule, fields, params, fetchFirstPage, '/rules');
  }

  createRule(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ProductFeedRule> {
    return this.createEdge('/rules', fields, params, ProductFeedRule, pathOverride);
  }

  createSupplementaryFeedAssoc(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/supplementary_feed_assocs', fields, params, null, pathOverride);
  }

  getUploadSchedules(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductFeedSchedule, fields, params, fetchFirstPage, '/upload_schedules');
  }

  createUploadSchedule(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ProductFeed> {
    return this.createEdge('/upload_schedules', fields, params, ProductFeed, pathOverride);
  }

  getUploads(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductFeedUpload, fields, params, fetchFirstPage, '/uploads');
  }

  createUpload(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ProductFeedUpload> {
    return this.createEdge('/uploads', fields, params, ProductFeedUpload, pathOverride);
  }

  getVehicleOffers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(VehicleOffer, fields, params, fetchFirstPage, '/vehicle_offers');
  }

  getVehicles(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Vehicle, fields, params, fetchFirstPage, '/vehicles');
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductFeed {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): ProductFeed {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}