import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AssignedUser from "./assigned-user";
import ProductCatalog from "./product-catalog";
/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WhatsAppBusinessAccount extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_review_status: 'account_review_status',
      analytics: 'analytics',
      auth_international_rate_eligibility: 'auth_international_rate_eligibility',
      business_verification_status: 'business_verification_status',
      country: 'country',
      creation_time: 'creation_time',
      currency: 'currency',
      health_status: 'health_status',
      id: 'id',
      is_enabled_for_insights: 'is_enabled_for_insights',
      linked_commerce_account: 'linked_commerce_account',
      message_template_namespace: 'message_template_namespace',
      name: 'name',
      on_behalf_of_business_info: 'on_behalf_of_business_info',
      owner_business: 'owner_business',
      owner_business_info: 'owner_business_info',
      ownership_type: 'ownership_type',
      primary_business_location: 'primary_business_location',
      primary_funding_id: 'primary_funding_id',
      purchase_order_number: 'purchase_order_number',
      status: 'status',
      timezone_id: 'timezone_id'
    });
  }

  static get Tasks() {
    return Object.freeze({
      develop: 'DEVELOP',
      manage: 'MANAGE',
      manage_extensions: 'MANAGE_EXTENSIONS',
      manage_phone: 'MANAGE_PHONE',
      manage_phone_assets: 'MANAGE_PHONE_ASSETS',
      manage_templates: 'MANAGE_TEMPLATES',
      messaging: 'MESSAGING',
      view_cost: 'VIEW_COST',
      view_phone_assets: 'VIEW_PHONE_ASSETS',
      view_templates: 'VIEW_TEMPLATES'
    });
  }

  static get Category() {
    return Object.freeze({
      authentication: 'AUTHENTICATION',
      marketing: 'MARKETING',
      utility: 'UTILITY'
    });
  }

  static get DisplayFormat() {
    return Object.freeze({
      order_details: 'ORDER_DETAILS'
    });
  }

  static get SubCategory() {
    return Object.freeze({
      order_details: 'ORDER_DETAILS',
      order_status: 'ORDER_STATUS'
    });
  }

  deleteAssignedUsers(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/assigned_users', params);
  }

  getAssignedUsers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AssignedUser, fields, params, fetchFirstPage, '/assigned_users');
  }

  createAssignedUser(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge('/assigned_users', fields, params, WhatsAppBusinessAccount, pathOverride);
  }

  getAudiences(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/audiences');
  }

  getConversationAnalytics(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/conversation_analytics');
  }

  getDccConfig(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/dcc_config');
  }

  getFlows(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/flows');
  }

  createFlow(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/flows', fields, params, null, pathOverride);
  }

  getMessageCampaigns(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/message_campaigns');
  }

  getMessageTemplatePreviews(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/message_template_previews');
  }

  deleteMessageTemplates(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/message_templates', params);
  }

  getMessageTemplates(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/message_templates');
  }

  createMessageTemplate(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge('/message_templates', fields, params, WhatsAppBusinessAccount, pathOverride);
  }

  createMigrateMessageTemplate(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge('/migrate_message_templates', fields, params, WhatsAppBusinessAccount, pathOverride);
  }

  getPhoneNumbers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/phone_numbers');
  }

  createPhoneNumber(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/phone_numbers', fields, params, null, pathOverride);
  }

  deleteProductCatalogs(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/product_catalogs', params);
  }

  getProductCatalogs(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductCatalog, fields, params, fetchFirstPage, '/product_catalogs');
  }

  createProductCatalog(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ProductCatalog> {
    return this.createEdge('/product_catalogs', fields, params, ProductCatalog, pathOverride);
  }

  getSchedules(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/schedules');
  }

  createSetOboMobilityIntent(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/set_obo_mobility_intent', fields, params, null, pathOverride);
  }

  getSolutions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/solutions');
  }

  deleteSubscribedApps(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/subscribed_apps', params);
  }

  getSubscribedApps(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/subscribed_apps');
  }

  createSubscribedApp(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge('/subscribed_apps', fields, params, WhatsAppBusinessAccount, pathOverride);
  }

  getTemplateAnalytics(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/template_analytics');
  }

  getTemplatePerformanceMetrics(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/template_performance_metrics');
  }

  createUpsertMessageTemplate(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge('/upsert_message_templates', fields, params, WhatsAppBusinessAccount, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WhatsAppBusinessAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): WhatsAppBusinessAccount {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}