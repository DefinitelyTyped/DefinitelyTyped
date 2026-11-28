declare namespace GoogleAppsScript {
    namespace AdminLicenseManager {
        namespace Collection {
            interface LicenseAssignmentsCollection {
                get(
                    productId: string,
                    skuId: string,
                    userId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
                insert(
                    $resource: AdminLicenseManager.Schema.LicenseAssignmentInsert,
                    productId: string,
                    skuId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
                listForProduct(
                    productId: string,
                    customerId: string,
                    args?: {
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): AdminLicenseManager.Schema.LicenseAssignmentList;
                listForProductAndSku(
                    productId: string,
                    skuId: string,
                    customerId: string,
                    args?: {
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): AdminLicenseManager.Schema.LicenseAssignmentList;
                patch(
                    $resource: AdminLicenseManager.Schema.LicenseAssignment,
                    productId: string,
                    skuId: string,
                    userId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
                remove(
                    productId: string,
                    skuId: string,
                    userId: string,
                ): AdminLicenseManager.Schema.Empty;
                update(
                    $resource: AdminLicenseManager.Schema.LicenseAssignment,
                    productId: string,
                    skuId: string,
                    userId: string,
                ): AdminLicenseManager.Schema.LicenseAssignment;
            }
        }
        namespace Schema {
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Empty {
            }
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
