// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Licensing_v1 {
    namespace Collection {
      export interface LicenseAssignmentsCollection {
        // Get license assignment of a particular product and sku for a user
        get(productId: string, skuId: string, userId: string): Licensing_v1.Schema.LicenseAssignment;
        // Assign License.
        insert(resource: Schema.LicenseAssignmentInsert, productId: string, skuId: string): Licensing_v1.Schema.LicenseAssignment;
        // List license assignments for given product of the customer.
        listForProduct(productId: string, customerId: string): Licensing_v1.Schema.LicenseAssignmentList;
        // List license assignments for given product of the customer.
        listForProduct(productId: string, customerId: string, optionalArgs: object): Licensing_v1.Schema.LicenseAssignmentList;
        // List license assignments for given product and sku of the customer.
        listForProductAndSku(productId: string, skuId: string, customerId: string): Licensing_v1.Schema.LicenseAssignmentList;
        // List license assignments for given product and sku of the customer.
        listForProductAndSku(productId: string, skuId: string, customerId: string, optionalArgs: object): Licensing_v1.Schema.LicenseAssignmentList;
        // Assign License. This method supports patch semantics.
        patch(resource: Schema.LicenseAssignment, productId: string, skuId: string, userId: string): Licensing_v1.Schema.LicenseAssignment;
        // Revoke License.
        remove(productId: string, skuId: string, userId: string): void;
        // Assign License.
        update(resource: Schema.LicenseAssignment, productId: string, skuId: string, userId: string): Licensing_v1.Schema.LicenseAssignment;
      }
    }
    namespace Schema {
      export interface LicenseAssignment {
        etags?: string;
        kind?: string;
        productId?: string;
        productName?: string;
        selfLink?: string;
        skuId?: string;
        skuName?: string;
        userId?: string;
      }
      export interface LicenseAssignmentInsert {
        userId?: string;
      }
      export interface LicenseAssignmentList {
        etag?: string;
        items?: Licensing_v1.Schema.LicenseAssignment[];
        kind?: string;
        nextPageToken?: string;
      }
    }
  }
  export interface Licensing_v1 {
    LicenseAssignments?: Licensing_v1.Collection.LicenseAssignmentsCollection;
    // Create a new instance of LicenseAssignment
    newLicenseAssignment(): Licensing_v1.Schema.LicenseAssignment;
    // Create a new instance of LicenseAssignmentInsert
    newLicenseAssignmentInsert(): Licensing_v1.Schema.LicenseAssignmentInsert;
  }
}

declare var Licensing_v1: GoogleAppsScript.Licensing_v1;