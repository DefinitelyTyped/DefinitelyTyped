// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace AdminLicenseManager {
        namespace Collection {
            interface LicenseAssignmentsCollection {
                // Get a specific user's license by product SKU.
                get(productId: string, skuId: string, userId: string): Schema.LicenseAssignment;
                // Assign a license.
                insert(resource: Schema.LicenseAssignmentInsert, productId: string, skuId: string): Schema.LicenseAssignment;
                // List all users assigned licenses for a specific product SKU.
                listForProduct(productId: string, customerId: string): Schema.LicenseAssignmentList;
                // List all users assigned licenses for a specific product SKU.
                listForProduct(productId: string, customerId: string, optionalArgs: object): Schema.LicenseAssignmentList;
                // List all users assigned licenses for a specific product SKU.
                listForProductAndSku(productId: string, skuId: string, customerId: string): Schema.LicenseAssignmentList;
                // List all users assigned licenses for a specific product SKU.
                listForProductAndSku(productId: string, skuId: string, customerId: string, optionalArgs: object): Schema.LicenseAssignmentList;
                // Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
                patch(resource: Schema.LicenseAssignment, productId: string, skuId: string, userId: string): Schema.LicenseAssignment;
                // Revoke a license.
                remove(productId: string, skuId: string, userId: string): void;
                // Reassign a user's product SKU with a different SKU in the same product.
                update(resource: Schema.LicenseAssignment, productId: string, skuId: string, userId: string): Schema.LicenseAssignment;
            }
        }
        namespace Schema {
            // Representation of a license assignment.
            interface LicenseAssignment {
                // ETag of the resource.
                etags?: string;
                // Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.
                kind?: string;
                // A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.
                productId?: string;
                // Display Name of the product.
                productName?: string;
                // Link to this page.
                selfLink?: string;
                // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products
                // and SKUs.
                skuId?: string;
                // Display Name of the sku of the product.
                skuName?: string;
                // The user's current primary email address. If the user's email address changes, use the new email address in your API
                // requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key
                // could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                userId?: string;
            }
            // Representation of a license assignment.
            interface LicenseAssignmentInsert {
                // Email id of the user
                userId?: string;
            }
            interface LicenseAssignmentList {
                // ETag of the resource.
                etag?: string;
                // The LicenseAssignments in this page of results.
                items?: Schema.LicenseAssignment[];
                // Identifies the resource as a collection of LicenseAssignments.
                kind?: string;
                // The token that you must submit in a subsequent request to retrieve additional license results matching your query
                // parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many
                // entries are returned on each next page.
                nextPageToken?: string;
            }
        }
    }
    // The Google Enterprise License Manager API's allows you to license apps for all the users of a domain managed by you.
    interface AdminLicenseManager {
        LicenseAssignments?: AdminLicenseManager.Collection.LicenseAssignmentsCollection;
        // Create a new instance of LicenseAssignment
        newLicenseAssignment(): AdminLicenseManager.Schema.LicenseAssignment;
        // Create a new instance of LicenseAssignmentInsert
        newLicenseAssignmentInsert(): AdminLicenseManager.Schema.LicenseAssignmentInsert;
    }
}
declare const AdminLicenseManager: GoogleAppsScript.AdminLicenseManager;
