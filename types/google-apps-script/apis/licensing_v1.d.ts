// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminLicenseManager {
    namespace Collection {
      interface LicenseAssignmentsCollection {
        // Get license assignment of a particular product and sku for a user
        get(productId: string, skuId: string, userId: string): AdminLicenseManager.Schema.LicenseAssignment;
        // Assign License.
        insert(resource: Schema.LicenseAssignmentInsert, productId: string, skuId: string): AdminLicenseManager.Schema.LicenseAssignment;
        // List license assignments for given product of the customer.
        listForProduct(productId: string, customerId: string): AdminLicenseManager.Schema.LicenseAssignmentList;
        // List license assignments for given product of the customer.
        listForProduct(productId: string, customerId: string, optionalArgs: object): AdminLicenseManager.Schema.LicenseAssignmentList;
        // List license assignments for given product and sku of the customer.
        listForProductAndSku(productId: string, skuId: string, customerId: string): AdminLicenseManager.Schema.LicenseAssignmentList;
        // List license assignments for given product and sku of the customer.
        listForProductAndSku(productId: string, skuId: string, customerId: string, optionalArgs: object): AdminLicenseManager.Schema.LicenseAssignmentList;
        // Assign License. This method supports patch semantics.
        patch(resource: Schema.LicenseAssignment, productId: string, skuId: string, userId: string): AdminLicenseManager.Schema.LicenseAssignment;
        // Revoke License.
        remove(productId: string, skuId: string, userId: string): void;
        // Assign License.
        update(resource: Schema.LicenseAssignment, productId: string, skuId: string, userId: string): AdminLicenseManager.Schema.LicenseAssignment;
      }
    }
    namespace Schema {
      interface LicenseAssignment {
        etags?: string;
        kind?: string;
        productId?: string;
        productName?: string;
        selfLink?: string;
        skuId?: string;
        skuName?: string;
        userId?: string;
      }
      interface LicenseAssignmentInsert {
        userId?: string;
      }
      interface LicenseAssignmentList {
        etag?: string;
        items?: AdminLicenseManager.Schema.LicenseAssignment[];
        kind?: string;
        nextPageToken?: string;
      }
    }
  }
  interface AdminLicenseManager {
    LicenseAssignments?: AdminLicenseManager.Collection.LicenseAssignmentsCollection;
    // Create a new instance of LicenseAssignment
    newLicenseAssignment(): AdminLicenseManager.Schema.LicenseAssignment;
    // Create a new instance of LicenseAssignmentInsert
    newLicenseAssignmentInsert(): AdminLicenseManager.Schema.LicenseAssignmentInsert;
  }
}

declare var AdminLicenseManager: GoogleAppsScript.AdminLicenseManager;
