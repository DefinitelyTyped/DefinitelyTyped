declare namespace GoogleAppsScript {
    namespace AdminLicenseManager {
        namespace Collection {
            interface LicenseAssignmentsCollection {
                // Get license assignment of a particular product and sku for a user
                get(productId: string, skuId: string, userId: string): AdminLicenseManager.Schema.LicenseAssignment;
                // Assign License.
                insert(
                    resource: Schema.LicenseAssignmentInsert,
                    productId: string,
                    skuId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
                // List license assignments for given product of the customer.
                listForProduct(productId: string, customerId: string): AdminLicenseManager.Schema.LicenseAssignmentList;
                // List license assignments for given product of the customer.
                listForProduct(
                    productId: string,
                    customerId: string,
                    optionalArgs: object,
                ): AdminLicenseManager.Schema.LicenseAssignmentList;
                // List license assignments for given product and sku of the customer.
                listForProductAndSku(
                    productId: string,
                    skuId: string,
                    customerId: string,
                ): AdminLicenseManager.Schema.LicenseAssignmentList;
                // List license assignments for given product and sku of the customer.
                listForProductAndSku(
                    productId: string,
                    skuId: string,
                    customerId: string,
                    optionalArgs: object,
                ): AdminLicenseManager.Schema.LicenseAssignmentList;
                // Assign License. This method supports patch semantics.
                patch(
                    resource: Schema.LicenseAssignment,
                    productId: string,
                    skuId: string,
                    userId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
                // Revoke License.
                remove(productId: string, skuId: string, userId: string): void;
                // Assign License.
                update(
                    resource: Schema.LicenseAssignment,
                    productId: string,
                    skuId: string,
                    userId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
            }
        }
        namespace Schema {
            interface LicenseAssignment {
                etags?: string | undefined;
                kind?: string | undefined;
                productId?: string | undefined;
                productName?: string | undefined;
                selfLink?: string | undefined;
                skuId?: string | undefined;
                skuName?: string | undefined;
                userId?: string | undefined;
            }
            interface LicenseAssignmentInsert {
                userId?: string | undefined;
            }
            interface LicenseAssignmentList {
                etag?: string | undefined;
                items?: AdminLicenseManager.Schema.LicenseAssignment[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
        }
    }
    interface AdminLicenseManager {
        LicenseAssignments: AdminLicenseManager.Collection.LicenseAssignmentsCollection;
        // Create a new instance of LicenseAssignment
        newLicenseAssignment(): AdminLicenseManager.Schema.LicenseAssignment;
        // Create a new instance of LicenseAssignmentInsert
        newLicenseAssignmentInsert(): AdminLicenseManager.Schema.LicenseAssignmentInsert;
    }
}

/**
 * The `AdminLicenseManager` advanced service must be enabled.
 */
declare var AdminLicenseManager: GoogleAppsScript.AdminLicenseManager | undefined;
