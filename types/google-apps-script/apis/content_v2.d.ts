// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace ShoppingContent {
        namespace Collection {
            interface AccountsCollection {
                // Returns information about the authenticated user.
                authinfo(): Schema.AccountsAuthInfoResponse;
                // Claims the website of a Merchant Center sub-account.
                claimwebsite(merchantId: string, accountId: string): Schema.AccountsClaimWebsiteResponse;
                // Claims the website of a Merchant Center sub-account.
                claimwebsite(merchantId: string, accountId: string, optionalArgs: object): Schema.AccountsClaimWebsiteResponse;
                // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
                custombatch(resource: Schema.AccountsCustomBatchRequest): Schema.AccountsCustomBatchResponse;
                // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
                custombatch(resource: Schema.AccountsCustomBatchRequest, optionalArgs: object): Schema.AccountsCustomBatchResponse;
                // Retrieves a Merchant Center account.
                get(merchantId: string, accountId: string): Schema.Account;
                // Creates a Merchant Center sub-account.
                insert(resource: Schema.Account, merchantId: string): Schema.Account;
                // Creates a Merchant Center sub-account.
                insert(resource: Schema.Account, merchantId: string, optionalArgs: object): Schema.Account;
                // Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
                link(resource: Schema.AccountsLinkRequest, merchantId: string, accountId: string): Schema.AccountsLinkResponse;
                // Lists the sub-accounts in your Merchant Center account.
                list(merchantId: string): Schema.AccountsListResponse;
                // Lists the sub-accounts in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.AccountsListResponse;
                // Deletes a Merchant Center sub-account.
                remove(merchantId: string, accountId: string): void;
                // Deletes a Merchant Center sub-account.
                remove(merchantId: string, accountId: string, optionalArgs: object): void;
                // Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.Account, merchantId: string, accountId: string): Schema.Account;
                // Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Schema.Account;
            }
            interface AccountstatusesCollection {
                // Retrieves multiple Merchant Center account statuses in a single request.
                custombatch(resource: Schema.AccountstatusesCustomBatchRequest): Schema.AccountstatusesCustomBatchResponse;
                // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
                get(merchantId: string, accountId: string): Schema.AccountStatus;
                // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
                get(merchantId: string, accountId: string, optionalArgs: object): Schema.AccountStatus;
                // Lists the statuses of the sub-accounts in your Merchant Center account.
                list(merchantId: string): Schema.AccountstatusesListResponse;
                // Lists the statuses of the sub-accounts in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.AccountstatusesListResponse;
            }
            interface AccounttaxCollection {
                // Retrieves and updates tax settings of multiple accounts in a single request.
                custombatch(resource: Schema.AccounttaxCustomBatchRequest): Schema.AccounttaxCustomBatchResponse;
                // Retrieves and updates tax settings of multiple accounts in a single request.
                custombatch(resource: Schema.AccounttaxCustomBatchRequest, optionalArgs: object): Schema.AccounttaxCustomBatchResponse;
                // Retrieves the tax settings of the account.
                get(merchantId: string, accountId: string): Schema.AccountTax;
                // Lists the tax settings of the sub-accounts in your Merchant Center account.
                list(merchantId: string): Schema.AccounttaxListResponse;
                // Lists the tax settings of the sub-accounts in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.AccounttaxListResponse;
                // Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.AccountTax, merchantId: string, accountId: string): Schema.AccountTax;
                // Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Schema.AccountTax;
            }
            interface DatafeedsCollection {
                // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
                custombatch(resource: Schema.DatafeedsCustomBatchRequest): Schema.DatafeedsCustomBatchResponse;
                // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
                custombatch(resource: Schema.DatafeedsCustomBatchRequest, optionalArgs: object): Schema.DatafeedsCustomBatchResponse;
                // Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per
                // day, we recommend you use the Products service to update your product data.
                fetchnow(merchantId: string, datafeedId: string): Schema.DatafeedsFetchNowResponse;
                // Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per
                // day, we recommend you use the Products service to update your product data.
                fetchnow(merchantId: string, datafeedId: string, optionalArgs: object): Schema.DatafeedsFetchNowResponse;
                // Retrieves a datafeed configuration from your Merchant Center account.
                get(merchantId: string, datafeedId: string): Schema.Datafeed;
                // Registers a datafeed configuration with your Merchant Center account.
                insert(resource: Schema.Datafeed, merchantId: string): Schema.Datafeed;
                // Registers a datafeed configuration with your Merchant Center account.
                insert(resource: Schema.Datafeed, merchantId: string, optionalArgs: object): Schema.Datafeed;
                // Lists the configurations for datafeeds in your Merchant Center account.
                list(merchantId: string): Schema.DatafeedsListResponse;
                // Lists the configurations for datafeeds in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.DatafeedsListResponse;
                // Deletes a datafeed configuration from your Merchant Center account.
                remove(merchantId: string, datafeedId: string): void;
                // Deletes a datafeed configuration from your Merchant Center account.
                remove(merchantId: string, datafeedId: string, optionalArgs: object): void;
                // Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the
                // resource.
                update(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Schema.Datafeed;
                // Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the
                // resource.
                update(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Schema.Datafeed;
            }
            interface DatafeedstatusesCollection {
                // Gets multiple Merchant Center datafeed statuses in a single request.
                custombatch(resource: Schema.DatafeedstatusesCustomBatchRequest): Schema.DatafeedstatusesCustomBatchResponse;
                // Retrieves the status of a datafeed from your Merchant Center account.
                get(merchantId: string, datafeedId: string): Schema.DatafeedStatus;
                // Retrieves the status of a datafeed from your Merchant Center account.
                get(merchantId: string, datafeedId: string, optionalArgs: object): Schema.DatafeedStatus;
                // Lists the statuses of the datafeeds in your Merchant Center account.
                list(merchantId: string): Schema.DatafeedstatusesListResponse;
                // Lists the statuses of the datafeeds in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.DatafeedstatusesListResponse;
            }
            interface InventoryCollection {
                // Updates price and availability for multiple products or stores in a single request. This operation does not update the
                // expiration date of the products.
                custombatch(resource: Schema.InventoryCustomBatchRequest): Schema.InventoryCustomBatchResponse;
                // Updates price and availability for multiple products or stores in a single request. This operation does not update the
                // expiration date of the products.
                custombatch(resource: Schema.InventoryCustomBatchRequest, optionalArgs: object): Schema.InventoryCustomBatchResponse;
                // Updates price and availability of a product in your Merchant Center account.
                set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string): Schema.InventorySetResponse;
                // Updates price and availability of a product in your Merchant Center account.
                set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string, optionalArgs: object): Schema.InventorySetResponse;
            }
            interface LiasettingsCollection {
                // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
                custombatch(resource: Schema.LiasettingsCustomBatchRequest): Schema.LiasettingsCustomBatchResponse;
                // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
                custombatch(resource: Schema.LiasettingsCustomBatchRequest, optionalArgs: object): Schema.LiasettingsCustomBatchResponse;
                // Retrieves the LIA settings of the account.
                get(merchantId: string, accountId: string): Schema.LiaSettings;
                // Retrieves the list of accessible Google My Business accounts.
                getaccessiblegmbaccounts(merchantId: string, accountId: string): Schema.LiasettingsGetAccessibleGmbAccountsResponse;
                // Lists the LIA settings of the sub-accounts in your Merchant Center account.
                list(merchantId: string): Schema.LiasettingsListResponse;
                // Lists the LIA settings of the sub-accounts in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.LiasettingsListResponse;
                // Retrieves the list of POS data providers that have active settings for the all eiligible countries.
                listposdataproviders(): Schema.LiasettingsListPosDataProvidersResponse;
                // Requests access to a specified Google My Business account.
                requestgmbaccess(merchantId: string, accountId: string, gmbEmail: string): Schema.LiasettingsRequestGmbAccessResponse;
                // Requests inventory validation for the specified country.
                requestinventoryverification(merchantId: string, accountId: string, country: string): Schema.LiasettingsRequestInventoryVerificationResponse;
                // Sets the inventory verification contract for the specified country.
                setinventoryverificationcontact(merchantId: string, accountId: string, country: string, language: string, contactName: string, contactEmail: string): Schema.LiasettingsSetInventoryVerificationContactResponse;
                // Sets the POS data provider for the specified country.
                setposdataprovider(merchantId: string, accountId: string, country: string): Schema.LiasettingsSetPosDataProviderResponse;
                // Sets the POS data provider for the specified country.
                setposdataprovider(merchantId: string, accountId: string, country: string, optionalArgs: object): Schema.LiasettingsSetPosDataProviderResponse;
                // Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.LiaSettings, merchantId: string, accountId: string): Schema.LiaSettings;
                // Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Schema.LiaSettings;
            }
            interface OrderinvoicesCollection {
                // Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
                createchargeinvoice(resource: Schema.OrderinvoicesCreateChargeInvoiceRequest, merchantId: string, orderId: string): Schema.OrderinvoicesCreateChargeInvoiceResponse;
                // Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This
                // can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for
                // the summary) are incremental with respect to the previous invoice.
                createrefundinvoice(resource: Schema.OrderinvoicesCreateRefundInvoiceRequest, merchantId: string, orderId: string): Schema.OrderinvoicesCreateRefundInvoiceResponse;
            }
            interface OrderreportsCollection {
                // Retrieves a report for disbursements from your Merchant Center account.
                listdisbursements(merchantId: string): Schema.OrderreportsListDisbursementsResponse;
                // Retrieves a report for disbursements from your Merchant Center account.
                listdisbursements(merchantId: string, optionalArgs: object): Schema.OrderreportsListDisbursementsResponse;
                // Retrieves a list of transactions for a disbursement from your Merchant Center account.
                listtransactions(merchantId: string, disbursementId: string): Schema.OrderreportsListTransactionsResponse;
                // Retrieves a list of transactions for a disbursement from your Merchant Center account.
                listtransactions(merchantId: string, disbursementId: string, optionalArgs: object): Schema.OrderreportsListTransactionsResponse;
            }
            interface OrderreturnsCollection {
                // Retrieves an order return from your Merchant Center account.
                get(merchantId: string, returnId: string): Schema.MerchantOrderReturn;
                // Lists order returns in your Merchant Center account.
                list(merchantId: string): Schema.OrderreturnsListResponse;
                // Lists order returns in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.OrderreturnsListResponse;
            }
            interface OrdersCollection {
                // Marks an order as acknowledged.
                acknowledge(resource: Schema.OrdersAcknowledgeRequest, merchantId: string, orderId: string): Schema.OrdersAcknowledgeResponse;
                // Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
                advancetestorder(merchantId: string, orderId: string): Schema.OrdersAdvanceTestOrderResponse;
                // Cancels all line items in an order, making a full refund.
                cancel(resource: Schema.OrdersCancelRequest, merchantId: string, orderId: string): Schema.OrdersCancelResponse;
                // Cancels a line item, making a full refund.
                cancellineitem(resource: Schema.OrdersCancelLineItemRequest, merchantId: string, orderId: string): Schema.OrdersCancelLineItemResponse;
                // Sandbox only. Cancels a test order for customer-initiated cancellation.
                canceltestorderbycustomer(resource: Schema.OrdersCancelTestOrderByCustomerRequest, merchantId: string, orderId: string): Schema.OrdersCancelTestOrderByCustomerResponse;
                // Sandbox only. Creates a test order.
                createtestorder(resource: Schema.OrdersCreateTestOrderRequest, merchantId: string): Schema.OrdersCreateTestOrderResponse;
                // Sandbox only. Creates a test return.
                createtestreturn(resource: Schema.OrdersCreateTestReturnRequest, merchantId: string, orderId: string): Schema.OrdersCreateTestReturnResponse;
                // Retrieves or modifies multiple orders in a single request.
                custombatch(resource: Schema.OrdersCustomBatchRequest): Schema.OrdersCustomBatchResponse;
                // Retrieves an order from your Merchant Center account.
                get(merchantId: string, orderId: string): Schema.Order;
                // Retrieves an order using merchant order ID.
                getbymerchantorderid(merchantId: string, merchantOrderId: string): Schema.OrdersGetByMerchantOrderIdResponse;
                // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
                gettestordertemplate(merchantId: string, templateName: string): Schema.OrdersGetTestOrderTemplateResponse;
                // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
                gettestordertemplate(merchantId: string, templateName: string, optionalArgs: object): Schema.OrdersGetTestOrderTemplateResponse;
                // Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing
                // (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns.
                // We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant
                // and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that
                // customers do not receive a double refund by first refunding via Google then via an in-store return.
                instorerefundlineitem(resource: Schema.OrdersInStoreRefundLineItemRequest, merchantId: string, orderId: string): Schema.OrdersInStoreRefundLineItemResponse;
                // Lists the orders in your Merchant Center account.
                list(merchantId: string): Schema.OrdersListResponse;
                // Lists the orders in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.OrdersListResponse;
                // Deprecated, please use returnRefundLineItem instead.
                refund(resource: Schema.OrdersRefundRequest, merchantId: string, orderId: string): Schema.OrdersRefundResponse;
                // Rejects return on an line item.
                rejectreturnlineitem(resource: Schema.OrdersRejectReturnLineItemRequest, merchantId: string, orderId: string): Schema.OrdersRejectReturnLineItemResponse;
                // Returns a line item.
                returnlineitem(resource: Schema.OrdersReturnLineItemRequest, merchantId: string, orderId: string): Schema.OrdersReturnLineItemResponse;
                // Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that
                // the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use
                // Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the
                // refund. If the return cannot be found, then we recommend using this API to issue a refund.
                returnrefundlineitem(resource: Schema.OrdersReturnRefundLineItemRequest, merchantId: string, orderId: string): Schema.OrdersReturnRefundLineItemResponse;
                // Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case
                // would be to supply us with additional structured information about a line item that cannot be provided via other
                // methods. Submitted key-value pairs can be retrieved as part of the orders resource.
                setlineitemmetadata(resource: Schema.OrdersSetLineItemMetadataRequest, merchantId: string, orderId: string): Schema.OrdersSetLineItemMetadataResponse;
                // Marks line item(s) as shipped.
                shiplineitems(resource: Schema.OrdersShipLineItemsRequest, merchantId: string, orderId: string): Schema.OrdersShipLineItemsResponse;
                // Updates ship by and delivery by dates for a line item.
                updatelineitemshippingdetails(resource: Schema.OrdersUpdateLineItemShippingDetailsRequest, merchantId: string, orderId: string): Schema.OrdersUpdateLineItemShippingDetailsResponse;
                // Updates the merchant order ID for a given order.
                updatemerchantorderid(resource: Schema.OrdersUpdateMerchantOrderIdRequest, merchantId: string, orderId: string): Schema.OrdersUpdateMerchantOrderIdResponse;
                // Updates a shipment's status, carrier, and/or tracking ID.
                updateshipment(resource: Schema.OrdersUpdateShipmentRequest, merchantId: string, orderId: string): Schema.OrdersUpdateShipmentResponse;
            }
            interface PosCollection {
                // Batches multiple POS-related calls in a single request.
                custombatch(resource: Schema.PosCustomBatchRequest): Schema.PosCustomBatchResponse;
                // Batches multiple POS-related calls in a single request.
                custombatch(resource: Schema.PosCustomBatchRequest, optionalArgs: object): Schema.PosCustomBatchResponse;
                // Retrieves information about the given store.
                get(merchantId: string, targetMerchantId: string, storeCode: string): Schema.PosStore;
                // Creates a store for the given merchant.
                insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string): Schema.PosStore;
                // Creates a store for the given merchant.
                insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string, optionalArgs: object): Schema.PosStore;
                // Submit inventory for the given merchant.
                inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string): Schema.PosInventoryResponse;
                // Submit inventory for the given merchant.
                inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Schema.PosInventoryResponse;
                // Lists the stores of the target merchant.
                list(merchantId: string, targetMerchantId: string): Schema.PosListResponse;
                // Deletes a store for the given merchant.
                remove(merchantId: string, targetMerchantId: string, storeCode: string): void;
                // Deletes a store for the given merchant.
                remove(merchantId: string, targetMerchantId: string, storeCode: string, optionalArgs: object): void;
                // Submit a sale event for the given merchant.
                sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string): Schema.PosSaleResponse;
                // Submit a sale event for the given merchant.
                sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Schema.PosSaleResponse;
            }
            interface ProductsCollection {
                // Retrieves, inserts, and deletes multiple products in a single request.
                custombatch(resource: Schema.ProductsCustomBatchRequest): Schema.ProductsCustomBatchResponse;
                // Retrieves, inserts, and deletes multiple products in a single request.
                custombatch(resource: Schema.ProductsCustomBatchRequest, optionalArgs: object): Schema.ProductsCustomBatchResponse;
                // Retrieves a product from your Merchant Center account.
                get(merchantId: string, productId: string): Schema.Product;
                // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and
                // targetCountry already exists, this method updates that entry.
                insert(resource: Schema.Product, merchantId: string): Schema.Product;
                // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and
                // targetCountry already exists, this method updates that entry.
                insert(resource: Schema.Product, merchantId: string, optionalArgs: object): Schema.Product;
                // Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults.
                // Rely on nextPageToken to determine if there are more items to be requested.
                list(merchantId: string): Schema.ProductsListResponse;
                // Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults.
                // Rely on nextPageToken to determine if there are more items to be requested.
                list(merchantId: string, optionalArgs: object): Schema.ProductsListResponse;
                // Deletes a product from your Merchant Center account.
                remove(merchantId: string, productId: string): void;
                // Deletes a product from your Merchant Center account.
                remove(merchantId: string, productId: string, optionalArgs: object): void;
            }
            interface ProductstatusesCollection {
                // Gets the statuses of multiple products in a single request.
                custombatch(resource: Schema.ProductstatusesCustomBatchRequest): Schema.ProductstatusesCustomBatchResponse;
                // Gets the statuses of multiple products in a single request.
                custombatch(resource: Schema.ProductstatusesCustomBatchRequest, optionalArgs: object): Schema.ProductstatusesCustomBatchResponse;
                // Gets the status of a product from your Merchant Center account.
                get(merchantId: string, productId: string): Schema.ProductStatus;
                // Gets the status of a product from your Merchant Center account.
                get(merchantId: string, productId: string, optionalArgs: object): Schema.ProductStatus;
                // Lists the statuses of the products in your Merchant Center account.
                list(merchantId: string): Schema.ProductstatusesListResponse;
                // Lists the statuses of the products in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.ProductstatusesListResponse;
            }
            interface ShippingsettingsCollection {
                // Retrieves and updates the shipping settings of multiple accounts in a single request.
                custombatch(resource: Schema.ShippingsettingsCustomBatchRequest): Schema.ShippingsettingsCustomBatchResponse;
                // Retrieves and updates the shipping settings of multiple accounts in a single request.
                custombatch(resource: Schema.ShippingsettingsCustomBatchRequest, optionalArgs: object): Schema.ShippingsettingsCustomBatchResponse;
                // Retrieves the shipping settings of the account.
                get(merchantId: string, accountId: string): Schema.ShippingSettings;
                // Retrieves supported carriers and carrier services for an account.
                getsupportedcarriers(merchantId: string): Schema.ShippingsettingsGetSupportedCarriersResponse;
                // Retrieves supported holidays for an account.
                getsupportedholidays(merchantId: string): Schema.ShippingsettingsGetSupportedHolidaysResponse;
                // Retrieves supported pickup services for an account.
                getsupportedpickupservices(merchantId: string): Schema.ShippingsettingsGetSupportedPickupServicesResponse;
                // Lists the shipping settings of the sub-accounts in your Merchant Center account.
                list(merchantId: string): Schema.ShippingsettingsListResponse;
                // Lists the shipping settings of the sub-accounts in your Merchant Center account.
                list(merchantId: string, optionalArgs: object): Schema.ShippingsettingsListResponse;
                // Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Schema.ShippingSettings;
                // Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
                update(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Schema.ShippingSettings;
            }
        }
        namespace Schema {
            // Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods
            // delete, insert, and update require the admin role.
            interface Account {
                // Indicates whether the merchant sells adult content.
                adultContent?: boolean;
                // List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with
                // status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords
                // interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list.
                adwordsLinks?: Schema.AccountAdwordsLink[];
                // The business information of the account.
                businessInformation?: Schema.AccountBusinessInformation;
                // The GMB account which is linked or in the process of being linked with the Merchant Center account.
                googleMyBusinessLink?: Schema.AccountGoogleMyBusinessLink;
                // Required for update. Merchant Center account ID.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#account`"
                kind?: string;
                // Required. Display name for the account.
                name?: string;
                // [DEPRECATED] This field is never returned and will be ignored if provided.
                reviewsUrl?: string;
                // Client-specific, locally-unique, internal ID for the child account.
                sellerId?: string;
                // Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
                users?: Schema.AccountUser[];
                // The merchant's website.
                websiteUrl?: string;
                // List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with
                // status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio
                // interface. To delete an active link, or to cancel a link request, remove it from the list.
                youtubeChannelLinks?: Schema.AccountYouTubeChannelLink[];
            }
            interface AccountAddress {
                // CLDR country code (e.g. "US"). This value cannot be set for a sub-account of an MCA. All MCA sub-accounts inherit the
                // country of their parent MCA.
                country?: string;
                // City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
                locality?: string;
                // Postal code or ZIP (e.g. "94043").
                postalCode?: string;
                // Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like
                // Quebec ("QC").
                region?: string;
                // Street-level part of the address.
                streetAddress?: string;
            }
            interface AccountAdwordsLink {
                // Customer ID of the AdWords account.
                adwordsId?: string;
                // Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the
                // actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it's pending
                // approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when
                // it's still pending or with status `pending` when it's already active will have no effect: the status will remain
                // unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and
                // will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`"
                // - "`pending`"
                status?: string;
            }
            interface AccountBusinessInformation {
                // The address of the business.
                address?: Schema.AccountAddress;
                // The customer service information of the business.
                customerService?: Schema.AccountCustomerService;
                // The phone number of the business.
                phoneNumber?: string;
            }
            interface AccountCustomerService {
                // Customer service email.
                email?: string;
                // Customer service phone number.
                phoneNumber?: string;
                // Customer service URL.
                url?: string;
            }
            interface AccountGoogleMyBusinessLink {
                // The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a
                // business account with set of locations, managed under the GMB account.
                gmbEmail?: string;
                // Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" -
                // "`pending`"
                status?: string;
            }
            interface AccountIdentifier {
                // The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
                aggregatorId?: string;
                // The merchant account ID, set for individual accounts and subaccounts.
                merchantId?: string;
            }
            // The status of an account, i.e., information about its products, which is computed offline and not returned immediately
            // at insertion time.
            interface AccountStatus {
                // The ID of the account for which the status is reported.
                accountId?: string;
                // A list of account level issues.
                accountLevelIssues?: Schema.AccountStatusAccountLevelIssue[];
                // DEPRECATED - never populated.
                dataQualityIssues?: Schema.AccountStatusDataQualityIssue[];
                // Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`"
                kind?: string;
                // List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30
                // minutes.
                products?: Schema.AccountStatusProducts[];
                // Whether the account's website is claimed or not.
                websiteClaimed?: boolean;
            }
            interface AccountStatusAccountLevelIssue {
                // Country for which this issue is reported.
                country?: string;
                // The destination the issue applies to. If this field is empty then the issue applies to all available destinations.
                destination?: string;
                // Additional details about the issue.
                detail?: string;
                // The URL of a web page to help resolving this issue.
                documentation?: string;
                // Issue identifier.
                id?: string;
                // Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`"
                severity?: string;
                // Short description of the issue.
                title?: string;
            }
            interface AccountStatusDataQualityIssue {
                country?: string;
                destination?: string;
                detail?: string;
                displayedValue?: string;
                exampleItems?: Schema.AccountStatusExampleItem[];
                id?: string;
                lastChecked?: string;
                location?: string;
                numItems?: Integer;
                //  Acceptable values are: - "`critical`" - "`error`" - "`suggestion`"
                severity?: string;
                submittedValue?: string;
            }
            interface AccountStatusExampleItem {
                itemId?: string;
                link?: string;
                submittedValue?: string;
                title?: string;
                valueOnLandingPage?: string;
            }
            interface AccountStatusItemLevelIssue {
                // The attribute's name, if the issue is caused by a single attribute.
                attributeName?: string;
                // The error code of the issue.
                code?: string;
                // A short issue description in English.
                description?: string;
                // A detailed issue description in English.
                detail?: string;
                // The URL of a web page to help with resolving this issue.
                documentation?: string;
                // Number of items with this issue.
                numItems?: string;
                // Whether the issue can be resolved by the merchant.
                resolution?: string;
                // How this issue affects serving of the offer.
                servability?: string;
            }
            interface AccountStatusProducts {
                // The channel the data applies to. Acceptable values are: - "`local`" - "`online`"
                channel?: string;
                // The country the data applies to.
                country?: string;
                // The destination the data applies to.
                destination?: string;
                // List of item-level issues.
                itemLevelIssues?: Schema.AccountStatusItemLevelIssue[];
                // Aggregated product statistics.
                statistics?: Schema.AccountStatusStatistics;
            }
            interface AccountStatusStatistics {
                // Number of active offers.
                active?: string;
                // Number of disapproved offers.
                disapproved?: string;
                // Number of expiring offers.
                expiring?: string;
                // Number of pending offers.
                pending?: string;
            }
            // The tax settings of a merchant account. All methods require the admin role.
            interface AccountTax {
                // Required. The ID of the account to which these account tax settings belong.
                accountId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#accountTax".
                kind?: string;
                // Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging
                // tax at all.
                rules?: Schema.AccountTaxTaxRule[];
            }
            // Tax calculation rule to apply in a state or province (USA only).
            interface AccountTaxTaxRule {
                // Country code in which tax is applicable.
                country?: string;
                // Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID).
                locationId?: string;
                // Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be
                // negative.
                ratePercent?: string;
                // If true, shipping charges are also taxed.
                shippingTaxed?: boolean;
                // Whether the tax rate is taken from a global tax table or specified explicitly.
                useGlobalRate?: boolean;
            }
            interface AccountUser {
                // Whether user is an admin.
                admin?: boolean;
                // User's email address.
                emailAddress?: string;
                // Whether user is an order manager.
                orderManager?: boolean;
                // Whether user can access payment statements.
                paymentsAnalyst?: boolean;
                // Whether user can manage payment settings.
                paymentsManager?: boolean;
            }
            interface AccountYouTubeChannelLink {
                // Channel ID.
                channelId?: string;
                // Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the
                // actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's
                // pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status
                // `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will
                // remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all
                // and will delete the link if it was active or cancel the link request if it was pending.
                status?: string;
            }
            interface AccountsAuthInfoResponse {
                // The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is
                // defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and
                // the aggregator ID are defined.
                accountIdentifiers?: Schema.AccountIdentifier[];
                // Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse".
                kind?: string;
            }
            interface AccountsClaimWebsiteResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse".
                kind?: string;
            }
            interface AccountsCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.AccountsCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch accounts request.
            interface AccountsCustomBatchRequestEntry {
                // The account to create or update. Only defined if the method is `insert` or `update`.
                account?: Schema.Account;
                // The ID of the targeted account. Only defined if the method is not `insert`.
                accountId?: string;
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`.
                force?: boolean;
                // Label IDs for the 'updatelabels' request.
                labelIds?: string[];
                // Details about the `link` request.
                linkRequest?: Schema.AccountsCustomBatchRequestEntryLinkRequest;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`"
                // - "`update`"
                method?: string;
                // Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case
                // there is a conflict.
                overwrite?: boolean;
            }
            interface AccountsCustomBatchRequestEntryLinkRequest {
                // Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: -
                // "`approve`" - "`remove`" - "`request`"
                action?: string;
                // Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`"
                linkType?: string;
                // The ID of the linked account.
                linkedAccountId?: string;
            }
            interface AccountsCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.AccountsCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch accounts response.
            interface AccountsCustomBatchResponseEntry {
                // The retrieved, created, or updated account. Not defined if the method was `delete`, `claimwebsite` or `link`.
                account?: Schema.Account;
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
                // Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`"
                kind?: string;
                // Deprecated. This field is never set. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
                linkStatus?: string;
            }
            interface AccountsLinkRequest {
                // Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: -
                // "`approve`" - "`remove`" - "`request`"
                action?: string;
                // Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`"
                linkType?: string;
                // The ID of the linked account.
                linkedAccountId?: string;
            }
            interface AccountsLinkResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse".
                kind?: string;
            }
            interface AccountsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
                kind?: string;
                // The token for the retrieval of the next page of accounts.
                nextPageToken?: string;
                resources?: Schema.Account[];
            }
            interface AccountstatusesCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.AccountstatusesCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch accountstatuses request.
            interface AccountstatusesCustomBatchRequestEntry {
                // The ID of the (sub-)account whose status to get.
                accountId?: string;
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
                destinations?: string[];
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`get`"
                method?: string;
            }
            interface AccountstatusesCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.AccountstatusesCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch accountstatuses response.
            interface AccountstatusesCustomBatchResponseEntry {
                // The requested account status. Defined if and only if the request was successful.
                accountStatus?: Schema.AccountStatus;
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
            }
            interface AccountstatusesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse".
                kind?: string;
                // The token for the retrieval of the next page of account statuses.
                nextPageToken?: string;
                resources?: Schema.AccountStatus[];
            }
            interface AccounttaxCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.AccounttaxCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch accounttax request.
            interface AccounttaxCustomBatchRequestEntry {
                // The ID of the account for which to get/update account tax settings.
                accountId?: string;
                // The account tax settings to update. Only defined if the method is `update`.
                accountTax?: Schema.AccountTax;
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`get`" - "`update`"
                method?: string;
            }
            interface AccounttaxCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.AccounttaxCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch accounttax response.
            interface AccounttaxCustomBatchResponseEntry {
                // The retrieved or updated account tax settings.
                accountTax?: Schema.AccountTax;
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
                // Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`"
                kind?: string;
            }
            interface AccounttaxListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".
                kind?: string;
                // The token for the retrieval of the next page of account tax settings.
                nextPageToken?: string;
                resources?: Schema.AccountTax[];
            }
            interface Amount {
                // [required] Value before taxes.
                pretax?: Schema.Price;
                // [required] Tax value.
                tax?: Schema.Price;
            }
            interface BusinessDayConfig {
                // Regular business days. May not be empty.
                businessDays?: string[];
            }
            interface CarrierRate {
                // Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the
                // `getSupportedCarriers` method. Required.
                carrierName?: string;
                // Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the
                // `getSupportedCarriers` method. Required.
                carrierService?: string;
                // Additive shipping rate modifier. Can be negative. For example `{ "value": "1", "currency" : "USD" }` adds $1 to the
                // rate, `{ "value": "-3", "currency" : "USD" }` removes $3 from the rate. Optional.
                flatAdjustment?: Schema.Price;
                // Name of the carrier rate. Must be unique per rate group. Required.
                name?: string;
                // Shipping origin for this carrier rate. Required.
                originPostalCode?: string;
                // Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases
                // the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional.
                percentageAdjustment?: string;
            }
            interface CarriersCarrier {
                // The CLDR country code of the carrier (e.g., "US"). Always present.
                country?: string;
                // The name of the carrier (e.g., `"UPS"`). Always present.
                name?: string;
                // A list of supported services (e.g., `"ground"`) for that carrier. Contains at least one service.
                services?: string[];
            }
            interface CustomAttribute {
                // The name of the attribute. Underscores will be replaced by spaces upon insertion.
                name?: string;
                // The type of the attribute. Acceptable values are: - "`boolean`" - "`datetimerange`" - "`float`" - "`group`" - "`int`" -
                // "`price`" - "`text`" - "`time`" - "`url`"
                type?: string;
                // Free-form unit of the attribute. Unit can only be used for values of type int, float, or price.
                unit?: string;
                // The value of the attribute.
                value?: string;
            }
            interface CustomGroup {
                // The sub-attributes.
                attributes?: Schema.CustomAttribute[];
                // The name of the group. Underscores will be replaced by spaces upon insertion.
                name?: string;
            }
            interface CustomerReturnReason {
                // Description of the reason.
                description?: string;
                // Code of the return reason. Acceptable values are: - "`betterPriceFound`" - "`changedMind`" - "`damagedOrDefectiveItem`"
                // - "`didNotMatchDescription`" - "`doesNotFit`" - "`expiredItem`" - "`incorrectItemReceived`" - "`noLongerNeeded`" -
                // "`notSpecified`" - "`orderedWrongItem`" - "`other`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`undeliverable`"
                reasonCode?: string;
            }
            interface CutoffTime {
                // Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required.
                hour?: Integer;
                // Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required.
                minute?: Integer;
                // Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g.
                // "Europe/Zurich". Required.
                timezone?: string;
            }
            // Datafeed configuration data.
            interface Datafeed {
                // The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
                attributeLanguage?: string;
                // [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be
                // a valid language for `targetCountry`.
                contentLanguage?: string;
                // Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are
                // supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`"
                contentType?: string;
                // Fetch schedule for the feed file.
                fetchSchedule?: Schema.DatafeedFetchSchedule;
                // Required. The filename of the feed. All feeds must have a unique file name.
                fileName?: string;
                // Format of the feed file.
                format?: Schema.DatafeedFormat;
                // Required for update. The ID of the data feed.
                id?: string;
                // [DEPRECATED] Please use targets[].includedDestinations instead. The list of intended destinations (corresponds to
                // checked check boxes in Merchant Center).
                intendedDestinations?: string[];
                // Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`"
                kind?: string;
                // Required for insert. A descriptive name of the data feed.
                name?: string;
                // [DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the
                // search index, represented as a CLDR territory code.
                targetCountry?: string;
                // The targets this feed should apply to (country, language, destinations).
                targets?: Schema.DatafeedTarget[];
            }
            // The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are
            // required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
            interface DatafeedFetchSchedule {
                // The day of the month the feed file should be fetched (1-31).
                dayOfMonth?: Integer;
                // The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the
                // HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
                fetchUrl?: string;
                // The hour of the day the feed file should be fetched (0-23).
                hour?: Integer;
                // The minute of the hour the feed file should be fetched (0-59). Read-only.
                minuteOfHour?: Integer;
                // An optional password for fetch_url.
                password?: string;
                // Whether the scheduled fetch is paused or not.
                paused?: boolean;
                // Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".
                timeZone?: string;
                // An optional user name for fetch_url.
                username?: string;
                // The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" -
                // "`thursday`" - "`friday`" - "`saturday`" - "`sunday`"
                weekday?: string;
            }
            interface DatafeedFormat {
                // Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be
                // auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`"
                columnDelimiter?: string;
                // Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are:
                // - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`"
                fileEncoding?: string;
                // Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data
                // feeds. Acceptable values are: - "`normal character`" - "`value quoting`"
                quotingMode?: string;
            }
            // The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed
            // processing is finished.
            interface DatafeedStatus {
                // The country for which the status is reported, represented as a CLDR territory code.
                country?: string;
                // The ID of the feed for which the status is reported.
                datafeedId?: string;
                // The list of errors occurring in the feed.
                errors?: Schema.DatafeedStatusError[];
                // The number of items in the feed that were processed.
                itemsTotal?: string;
                // The number of items in the feed that were valid.
                itemsValid?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`"
                kind?: string;
                // The two-letter ISO 639-1 language for which the status is reported.
                language?: string;
                // The last date at which the feed was uploaded.
                lastUploadDate?: string;
                // The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items
                // had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For
                // example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed
                // successfully, though some items might have had errors.
                processingStatus?: string;
                // The list of errors occurring in the feed.
                warnings?: Schema.DatafeedStatusError[];
            }
            // An error occurring in the feed, like "invalid price".
            interface DatafeedStatusError {
                // The code of the error, e.g., "validation/invalid_value".
                code?: string;
                // The number of occurrences of the error in the feed.
                count?: string;
                // A list of example occurrences of the error, grouped by product.
                examples?: Schema.DatafeedStatusExample[];
                // The error message, e.g., "Invalid price".
                message?: string;
            }
            // An example occurrence for a particular error.
            interface DatafeedStatusExample {
                // The ID of the example item.
                itemId?: string;
                // Line number in the data feed where the example is found.
                lineNumber?: string;
                // The problematic value.
                value?: string;
            }
            interface DatafeedTarget {
                // The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
                country?: string;
                // The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
                excludedDestinations?: string[];
                // The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default
                // destinations are always included unless provided in `excludedDestinations`. List of supported destinations (if available
                // to the account): - DisplayAds - Shopping - ShoppingActions - SurfacesAcrossGoogle
                includedDestinations?: string[];
                // The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.
                language?: string;
            }
            interface DatafeedsCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.DatafeedsCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch datafeeds request.
            interface DatafeedsCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // The data feed to insert.
                datafeed?: Schema.Datafeed;
                // The ID of the data feed to get, delete or fetch.
                datafeedId?: string;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`"
                method?: string;
            }
            interface DatafeedsCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.DatafeedsCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch datafeeds response.
            interface DatafeedsCustomBatchResponseEntry {
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // The requested data feed. Defined if and only if the request was successful.
                datafeed?: Schema.Datafeed;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
            }
            interface DatafeedsFetchNowResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#datafeedsFetchNowResponse".
                kind?: string;
            }
            interface DatafeedsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
                kind?: string;
                // The token for the retrieval of the next page of datafeeds.
                nextPageToken?: string;
                resources?: Schema.Datafeed[];
            }
            interface DatafeedstatusesCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.DatafeedstatusesCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch datafeedstatuses request.
            interface DatafeedstatusesCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // The country for which to get the datafeed status. If this parameter is provided then language must also be provided.
                // Note that for multi-target datafeeds this parameter is required.
                country?: string;
                // The ID of the data feed to get.
                datafeedId?: string;
                // The language for which to get the datafeed status. If this parameter is provided then country must also be provided.
                // Note that for multi-target datafeeds this parameter is required.
                language?: string;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`get`"
                method?: string;
            }
            interface DatafeedstatusesCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.DatafeedstatusesCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch datafeedstatuses response.
            interface DatafeedstatusesCustomBatchResponseEntry {
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // The requested data feed status. Defined if and only if the request was successful.
                datafeedStatus?: Schema.DatafeedStatus;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
            }
            interface DatafeedstatusesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".
                kind?: string;
                // The token for the retrieval of the next page of datafeed statuses.
                nextPageToken?: string;
                resources?: Schema.DatafeedStatus[];
            }
            interface DeliveryTime {
                // Business days cutoff time definition. If not configured the cutoff time will be defaulted to 8AM PST.
                cutoffTime?: Schema.CutoffTime;
                // The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed.
                handlingBusinessDayConfig?: Schema.BusinessDayConfig;
                // Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping.
                holidayCutoffs?: Schema.HolidayCutoff[];
                // Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.
                // Must be greater than or equal to `minHandlingTimeInDays`.
                maxHandlingTimeInDays?: Integer;
                // Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be
                // greater than or equal to `minTransitTimeInDays`.
                maxTransitTimeInDays?: Integer;
                // Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.
                minHandlingTimeInDays?: Integer;
                // Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either
                // `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both.
                minTransitTimeInDays?: Integer;
                // The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be
                // assumed.
                transitBusinessDayConfig?: Schema.BusinessDayConfig;
                // Transit time table, number of business days spent in transit based on row and column dimensions. Either
                // `{min,max}TransitTimeInDays` or `transitTimeTable` can be set, but not both.
                transitTimeTable?: Schema.TransitTable;
            }
            // An error returned by the API.
            interface Error {
                // The domain of the error.
                domain?: string;
                // A description of the error.
                message?: string;
                // The error code.
                reason?: string;
            }
            // A list of errors returned by a failed batch entry.
            interface Errors {
                // The HTTP status of the first error in `errors`.
                code?: Integer;
                // A list of errors.
                errors?: Schema.Error[];
                // The message of the first error in `errors`.
                message?: string;
            }
            interface GmbAccounts {
                // The ID of the Merchant Center account.
                accountId?: string;
                // A list of GMB accounts which are available to the merchant.
                gmbAccounts?: Schema.GmbAccountsGmbAccount[];
            }
            interface GmbAccountsGmbAccount {
                // The email which identifies the GMB account.
                email?: string;
                // Number of listings under this account.
                listingCount?: string;
                // The name of the GMB account.
                name?: string;
                // The type of the GMB account (User or Business).
                type?: string;
            }
            // A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`,
            // `postalCodeGroupNames`, or `location` must be set.
            interface Headers {
                // A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
                locations?: Schema.LocationIdSet[];
                // A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50",
                // "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "> 50 items". Must be non-empty. Can only be set
                // if all other fields are not set.
                numberOfItems?: string[];
                // A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other
                // locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can
                // only be set if all other fields are not set.
                postalCodeGroupNames?: string[];
                // A list of inclusive order price upper bounds. The last price's value can be `"infinity"`. For example `[{"value": "10",
                // "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]` represents the
                // headers "<= $10", "<= $500", and "> $500". All prices within a service must have the same currency. Must be non-empty.
                // Can only be set if all other fields are not set.
                prices?: Schema.Price[];
                // A list of inclusive order weight upper bounds. The last weight's value can be `"infinity"`. For example `[{"value":
                // "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}]` represents the headers "<=
                // 10kg", "<= 50kg", and "> 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set
                // if all other fields are not set.
                weights?: Schema.Weight[];
            }
            interface HolidayCutoff {
                // Date of the order deadline, in ISO 8601 format. E.g. "2016-11-29" for 29th November 2016. Required.
                deadlineDate?: string;
                // Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee.
                // Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.
                deadlineHour?: Integer;
                // Timezone identifier for the deadline hour. A list of identifiers can be found in the AdWords API documentation. E.g.
                // "Europe/Zurich". Required.
                deadlineTimezone?: string;
                // Unique identifier for the holiday. Required.
                holidayId?: string;
                // Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. "2016-10-31" for 31st October 2016.
                // Required.
                visibleFromDate?: string;
            }
            interface HolidaysHoliday {
                // The CLDR territory code of the country in which the holiday is available. E.g. "US", "DE", "GB". A holiday cutoff can
                // only be configured in a shipping settings service with matching delivery country. Always present.
                countryCode?: string;
                // Date of the holiday, in ISO 8601 format. E.g. "2016-12-25" for Christmas 2016. Always present.
                date?: string;
                // Date on which the order has to arrive at the customer's, in ISO 8601 format. E.g. "2016-12-24" for 24th December 2016.
                // Always present.
                deliveryGuaranteeDate?: string;
                // Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at
                // the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present.
                deliveryGuaranteeHour?: string;
                // Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present.
                id?: string;
                // The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`"
                // - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`"
                type?: string;
            }
            interface Installment {
                // The amount the buyer has to pay per month.
                amount?: Schema.Price;
                // The number of installments the buyer has to pay.
                months?: string;
            }
            interface Inventory {
                // The availability of the product. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`"
                availability?: string;
                // Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel0?: string;
                // Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel1?: string;
                // Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel2?: string;
                // Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel3?: string;
                // Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel4?: string;
                // Number and amount of installments to pay for an item. Brazil only.
                installment?: Schema.Installment;
                // The instore product location. Supported only for local products.
                instoreProductLocation?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#inventory`"
                kind?: string;
                // Loyalty points that users receive after purchasing the item. Japan only.
                loyaltyPoints?: Schema.LoyaltyPoints;
                // Store pickup information. Only supported for local inventory. Not setting `pickup` means "don't update" while setting it
                // to the empty value (`{}` in JSON) means "delete". Otherwise, `pickupMethod` and `pickupSla` must be set together, unless
                // `pickupMethod` is "not supported".
                pickup?: Schema.InventoryPickup;
                // The price of the product.
                price?: Schema.Price;
                // The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
                quantity?: Integer;
                // The sale price of the product. Mandatory if `sale_price_effective_date` is defined.
                salePrice?: Schema.Price;
                // A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be
                // specified as 'null' if undecided.
                salePriceEffectiveDate?: string;
                // The quantity of the product that is available for selling on Google. Supported only for online products.
                sellOnGoogleQuantity?: Integer;
            }
            interface InventoryCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.InventoryCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch inventory request.
            interface InventoryCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // Price and availability of the product.
                inventory?: Schema.Inventory;
                // The ID of the managing account.
                merchantId?: string;
                // The ID of the product for which to update price and availability.
                productId?: string;
                // The code of the store for which to update price and availability. Use `online` to update price and availability of an
                // online product.
                storeCode?: string;
            }
            interface InventoryCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.InventoryCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch inventory response.
            interface InventoryCustomBatchResponseEntry {
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
                // Identifies what kind of resource this is. Value: the fixed string "`content#inventoryCustomBatchResponseEntry`"
                kind?: string;
            }
            interface InventoryPickup {
                // Whether store pickup is available for this offer and whether the pickup option should be shown as buy, reserve, or not
                // supported. Only supported for local inventory. Unless the value is "not supported", must be submitted together with
                // `pickupSla`. Acceptable values are: - "`buy`" - "`not supported`" - "`reserve`" - "`ship to store`"
                pickupMethod?: string;
                // The expected date that an order will be ready for pickup, relative to when the order is placed. Only supported for local
                // inventory. Must be submitted together with `pickupMethod`. Acceptable values are: - "`five day`" - "`four day`" -
                // "`multi day`" - "`multi week`" - "`next day`" - "`same day`" - "`seven day`" - "`six day`" - "`three day`" - "`two day`"
                pickupSla?: string;
            }
            interface InventorySetRequest {
                // The availability of the product. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`"
                availability?: string;
                // Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel0?: string;
                // Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel1?: string;
                // Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel2?: string;
                // Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel3?: string;
                // Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
                customLabel4?: string;
                // Number and amount of installments to pay for an item. Brazil only.
                installment?: Schema.Installment;
                // The instore product location. Supported only for local products.
                instoreProductLocation?: string;
                // Loyalty points that users receive after purchasing the item. Japan only.
                loyaltyPoints?: Schema.LoyaltyPoints;
                // Store pickup information. Only supported for local inventory. Not setting `pickup` means "don't update" while setting it
                // to the empty value (`{}` in JSON) means "delete". Otherwise, `pickupMethod` and `pickupSla` must be set together, unless
                // `pickupMethod` is "not supported".
                pickup?: Schema.InventoryPickup;
                // The price of the product.
                price?: Schema.Price;
                // The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
                quantity?: Integer;
                // The sale price of the product. Mandatory if `sale_price_effective_date` is defined.
                salePrice?: Schema.Price;
                // A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be
                // specified as 'null' if undecided.
                salePriceEffectiveDate?: string;
                // The quantity of the product that is available for selling on Google. Supported only for online products.
                sellOnGoogleQuantity?: Integer;
            }
            interface InventorySetResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse".
                kind?: string;
            }
            interface InvoiceSummary {
                // Summary of the total amounts of the additional charges.
                additionalChargeSummaries?: Schema.InvoiceSummaryAdditionalChargeSummary[];
                // Deprecated.
                customerBalance?: Schema.Amount;
                // Deprecated.
                googleBalance?: Schema.Amount;
                // Deprecated.
                merchantBalance?: Schema.Amount;
                // [required] Total price for the product.
                productTotal?: Schema.Amount;
                // Deprecated.
                promotionSummaries?: Schema.Promotion[];
            }
            interface InvoiceSummaryAdditionalChargeSummary {
                // [required] Total additional charge for this type.
                totalAmount?: Schema.Amount;
                // [required] Type of the additional charge. Acceptable values are: - "`shipping`"
                type?: string;
            }
            interface LiaAboutPageSettings {
                // The status of the verification process for the About page. Acceptable values are: - "`active`" - "`inactive`" -
                // "`pending`"
                status?: string;
                // The URL for the About page.
                url?: string;
            }
            interface LiaCountrySettings {
                // The settings for the About page.
                about?: Schema.LiaAboutPageSettings;
                // Required. CLDR country code (e.g. "US").
                country?: string;
                // The status of the "Merchant hosted local storefront" feature.
                hostedLocalStorefrontActive?: boolean;
                // LIA inventory verification settings.
                inventory?: Schema.LiaInventorySettings;
                // LIA "On Display To Order" settings.
                onDisplayToOrder?: Schema.LiaOnDisplayToOrderSettings;
                // The POS data provider linked with this country.
                posDataProvider?: Schema.LiaPosDataProvider;
                // The status of the "Store pickup" feature.
                storePickupActive?: boolean;
            }
            interface LiaInventorySettings {
                // The email of the contact for the inventory verification process.
                inventoryVerificationContactEmail?: string;
                // The name of the contact for the inventory verification process.
                inventoryVerificationContactName?: string;
                // The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
                inventoryVerificationContactStatus?: string;
                // The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
                status?: string;
            }
            interface LiaOnDisplayToOrderSettings {
                // Shipping cost and policy URL.
                shippingCostPolicyUrl?: string;
                // The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
                status?: string;
            }
            interface LiaPosDataProvider {
                // The ID of the POS data provider.
                posDataProviderId?: string;
                // The account ID by which this merchant is known to the POS data provider.
                posExternalAccountId?: string;
            }
            // Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
            interface LiaSettings {
                // The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses.
                accountId?: string;
                // The LIA settings for each country.
                countrySettings?: Schema.LiaCountrySettings[];
                // Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`"
                kind?: string;
            }
            interface LiasettingsCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.LiasettingsCustomBatchRequestEntry[];
            }
            interface LiasettingsCustomBatchRequestEntry {
                // The ID of the account for which to get/update account LIA settings.
                accountId?: string;
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // Inventory validation contact email. Required only for SetInventoryValidationContact.
                contactEmail?: string;
                // Inventory validation contact name. Required only for SetInventoryValidationContact.
                contactName?: string;
                // The country code. Required only for RequestInventoryVerification.
                country?: string;
                // The GMB account. Required only for RequestGmbAccess.
                gmbEmail?: string;
                // The account Lia settings to update. Only defined if the method is `update`.
                liaSettings?: Schema.LiaSettings;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" -
                // "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`"
                method?: string;
                // The ID of POS data provider. Required only for SetPosProvider.
                posDataProviderId?: string;
                // The account ID by which this merchant is known to the POS provider.
                posExternalAccountId?: string;
            }
            interface LiasettingsCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.LiasettingsCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse".
                kind?: string;
            }
            interface LiasettingsCustomBatchResponseEntry {
                // The ID of the request entry to which this entry responds.
                batchId?: Integer;
                // A list of errors defined if, and only if, the request failed.
                errors?: Schema.Errors;
                // The list of accessible GMB accounts.
                gmbAccounts?: Schema.GmbAccounts;
                // Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`"
                kind?: string;
                // The retrieved or updated Lia settings.
                liaSettings?: Schema.LiaSettings;
                // The list of POS data providers.
                posDataProviders?: Schema.PosDataProviders[];
            }
            interface LiasettingsGetAccessibleGmbAccountsResponse {
                // The ID of the Merchant Center account.
                accountId?: string;
                // A list of GMB accounts which are available to the merchant.
                gmbAccounts?: Schema.GmbAccountsGmbAccount[];
                // Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse".
                kind?: string;
            }
            interface LiasettingsListPosDataProvidersResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListPosDataProvidersResponse".
                kind?: string;
                // The list of POS data providers for each eligible country
                posDataProviders?: Schema.PosDataProviders[];
            }
            interface LiasettingsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListResponse".
                kind?: string;
                // The token for the retrieval of the next page of LIA settings.
                nextPageToken?: string;
                resources?: Schema.LiaSettings[];
            }
            interface LiasettingsRequestGmbAccessResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestGmbAccessResponse".
                kind?: string;
            }
            interface LiasettingsRequestInventoryVerificationResponse {
                // Identifies what kind of resource this is. Value: the fixed string
                // "content#liasettingsRequestInventoryVerificationResponse".
                kind?: string;
            }
            interface LiasettingsSetInventoryVerificationContactResponse {
                // Identifies what kind of resource this is. Value: the fixed string
                // "content#liasettingsSetInventoryVerificationContactResponse".
                kind?: string;
            }
            interface LiasettingsSetPosDataProviderResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse".
                kind?: string;
            }
            interface LocationIdSet {
                // A non-empty list of location IDs. They must all be of the same location type (e.g., state).
                locationIds?: string[];
            }
            interface LoyaltyPoints {
                // Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
                name?: string;
                // The retailer's loyalty points in absolute value.
                pointsValue?: string;
                // The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is
                // left out, it defaults to 1.0.
                ratio?: number;
            }
            // Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
            interface MerchantOrderReturn {
                // The date of creation of the return, in ISO 8601 format.
                creationDate?: string;
                // Merchant defined order ID.
                merchantOrderId?: string;
                // Google order ID.
                orderId?: string;
                // Order return ID generated by Google.
                orderReturnId?: string;
                // Items of the return.
                returnItems?: Schema.MerchantOrderReturnItem[];
                // Shipments of the return.
                returnShipments?: Schema.ReturnShipment[];
            }
            interface MerchantOrderReturnItem {
                // The reason that the customer chooses to return an item.
                customerReturnReason?: Schema.CustomerReturnReason;
                // Product level item ID. If the returned items are of the same product, they will have the same ID.
                itemId?: string;
                // The reason that merchant chooses to accept a return item.
                merchantReturnReason?: Schema.RefundReason;
                // Product data from the time of the order placement.
                product?: Schema.OrderLineItemProduct;
                // IDs of the return shipments that this return item belongs to.
                returnShipmentIds?: string[];
                // State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`"
                state?: string;
            }
            interface MinimumOrderValueTable {
                storeCodeSetWithMovs?: Schema.MinimumOrderValueTableStoreCodeSetWithMov[];
            }
            // A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be
            // empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices
            // within a service must have the same currency.
            interface MinimumOrderValueTableStoreCodeSetWithMov {
                // A list of unique store codes or empty for the catch all.
                storeCodes?: string[];
                // The minimum order value for the given stores.
                value?: Schema.Price;
            }
            // Order. Production access (all methods) requires the order manager role. Sandbox access does not.
            interface Order {
                // Whether the order was acknowledged.
                acknowledged?: boolean;
                // Deprecated. Acceptable values are: - "`googleExpress`" - "`purchasesOnGoogle`"
                channelType?: string;
                // The details of the customer who placed the order.
                customer?: Schema.OrderCustomer;
                // Delivery details for shipments of type `delivery`.
                deliveryDetails?: Schema.OrderDeliveryDetails;
                // The REST ID of the order. Globally unique.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#order`"
                kind?: string;
                // Line items that are ordered.
                lineItems?: Schema.OrderLineItem[];
                merchantId?: string;
                // Merchant-provided ID of the order.
                merchantOrderId?: string;
                // The net amount for the order. For example, if an order was originally for a grand total of $100 and a refund was issued
                // for $20, the net amount will be $80.
                netAmount?: Schema.Price;
                // The details of the payment method.
                paymentMethod?: Schema.OrderPaymentMethod;
                // The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" -
                // "`pendingAuthorization`"
                paymentStatus?: string;
                // Pickup details for shipments of type `pickup`.
                pickupDetails?: Schema.OrderPickupDetails;
                // The date when the order was placed, in ISO 8601 format.
                placedDate?: string;
                // The details of the merchant provided promotions applied to the order. To determine which promotions apply to which
                // products, check the `Promotions[].Benefits[].OfferIds` field against the `LineItems[].Product.OfferId` field for each
                // promotion. If a promotion is applied to more than 1 `offerId`, divide the discount value by the number of affected
                // offers to determine how much discount to apply to each `offerId`. Examples: 1. To calculate the line item level discount
                // for a single specific item: For each promotion, subtract the `Promotions[].Benefits[].Discount.value` amount from the
                // `LineItems[].Price.value`. 2. To calculate the line item level discount for multiple quantity of a specific item: For
                // each promotion, divide the `Promotions[].Benefits[].Discount.value` by the quantity of products and substract it from
                // `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given
                // order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the
                // promotion discount from the item price. More details about the program are here.
                promotions?: Schema.OrderLegacyPromotion[];
                // Refunds for the order.
                refunds?: Schema.OrderRefund[];
                // Shipments of the order.
                shipments?: Schema.OrderShipment[];
                // The total cost of shipping for all items.
                shippingCost?: Schema.Price;
                // The tax for the total shipping cost.
                shippingCostTax?: Schema.Price;
                // Deprecated. Shipping details are provided with line items instead. Acceptable values are: - "`economy`" - "`expedited`"
                // - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`"
                shippingOption?: string;
                // The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`"
                // - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`"
                status?: string;
                // The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" -
                // "`merchant`"
                taxCollector?: string;
            }
            interface OrderAddress {
                // CLDR country code (e.g. "US").
                country?: string;
                // Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre
                // Parkway Mountain View, CA, 94043 United States
                fullAddress?: string[];
                // Whether the address is a post office box.
                isPostOfficeBox?: boolean;
                // City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
                locality?: string;
                // Postal Code or ZIP (e.g. "94043").
                postalCode?: string;
                // Name of the recipient.
                recipientName?: string;
                // Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like
                // Quebec ("QC").
                region?: string;
                // Street-level part of the address.
                streetAddress?: string[];
            }
            interface OrderCancellation {
                // The actor that created the cancellation. Acceptable values are: - "`customer`" - "`googleBot`" -
                // "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`"
                actor?: string;
                // Date on which the cancellation has been created, in ISO 8601 format.
                creationDate?: string;
                // The quantity that was canceled.
                quantity?: Integer;
                // The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the
                // product from Buy on Google until you make an update to that product. This will not affect your Shopping ads. Acceptable
                // values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" -
                // "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" -
                // "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" -
                // "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" -
                // "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" -
                // "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" -
                // "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" -
                // "`unsupportedPoBoxAddress`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrderCustomer {
                // Deprecated.
                email?: string;
                // Deprecated. Please use marketingRightsInfo instead.
                explicitMarketingPreference?: boolean;
                // Full name of the customer.
                fullName?: string;
                // Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document
                // sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google.
                invoiceReceivingEmail?: string;
                // Customer's marketing preferences. Contains the marketing opt-in information that is current at the time that the
                // merchant call. User preference selections can change from one order to the next so preferences must be checked with
                // every order.
                marketingRightsInfo?: Schema.OrderCustomerMarketingRightsInfo;
            }
            interface OrderCustomerMarketingRightsInfo {
                // Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so
                // this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to
                // marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already
                // opted-in. Acceptable values are: - "`denied`" - "`granted`"
                explicitMarketingPreference?: string;
                // Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
                lastUpdatedTimestamp?: string;
                // Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is
                // 'granted'. This happens when retrieving an old order from the customer who deleted their account.
                marketingEmailAddress?: string;
            }
            interface OrderDeliveryDetails {
                // The delivery address
                address?: Schema.OrderAddress;
                // The phone number of the person receiving the delivery.
                phoneNumber?: string;
            }
            interface OrderLegacyPromotion {
                benefits?: Schema.OrderLegacyPromotionBenefit[];
                // The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time
                // may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash
                // (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the
                // sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in
                // the same format.
                effectiveDates?: string;
                // Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
                genericRedemptionCode?: string;
                // The unique ID of the promotion.
                id?: string;
                // The full title of the promotion.
                longTitle?: string;
                // Whether the promotion is applicable to all products or only specific products. Acceptable values are: - "`allProducts`"
                // - "`specificProducts`"
                productApplicability?: string;
                // Indicates that the promotion is valid online. Acceptable values are: - "`online`"
                redemptionChannel?: string;
            }
            interface OrderLegacyPromotionBenefit {
                // The discount in the order price when the promotion is applied.
                discount?: Schema.Price;
                // The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
                offerIds?: string[];
                // Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion
                // sub-types. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" -
                // "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeOvernightShipping`" -
                // "`freeShipping`" - "`freeTwoDayShipping`" - "`moneyOff`" - "`percentageOff`" - "`rewardPoints`" - "`salePrice`"
                subType?: string;
                // The impact on tax when the promotion is applied.
                taxImpact?: Schema.Price;
                // Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable
                // values are: - "`product`" - "`shipping`"
                type?: string;
            }
            interface OrderLineItem {
                // Annotations that are attached to the line item.
                annotations?: Schema.OrderMerchantProvidedAnnotation[];
                // Cancellations of the line item.
                cancellations?: Schema.OrderCancellation[];
                // The ID of the line item.
                id?: string;
                // Total price for the line item. For example, if two items for $10 are purchased, the total price will be $20.
                price?: Schema.Price;
                // Product data as seen by customer from the time of the order placement. Note that certain attributes values (e.g. title
                // or gtin) might be reformatted and no longer match values submitted via product feed.
                product?: Schema.OrderLineItemProduct;
                // Number of items canceled.
                quantityCanceled?: Integer;
                // Number of items delivered.
                quantityDelivered?: Integer;
                // Number of items ordered.
                quantityOrdered?: Integer;
                // Number of items pending.
                quantityPending?: Integer;
                // Number of items ready for pickup.
                quantityReadyForPickup?: Integer;
                // Number of items returned.
                quantityReturned?: Integer;
                // Number of items shipped.
                quantityShipped?: Integer;
                // Details of the return policy for the line item.
                returnInfo?: Schema.OrderLineItemReturnInfo;
                // Returns of the line item.
                returns?: Schema.OrderReturn[];
                // Details of the requested shipping for the line item.
                shippingDetails?: Schema.OrderLineItemShippingDetails;
                // Total tax amount for the line item. For example, if two items are purchased, and each have a cost tax of $2, the total
                // tax amount will be $4.
                tax?: Schema.Price;
            }
            interface OrderLineItemProduct {
                // Brand of the item.
                brand?: string;
                // The item's channel (online or local). Acceptable values are: - "`local`" - "`online`"
                channel?: string;
                // Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`"
                condition?: string;
                // The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Associated fees at order creation time.
                fees?: Schema.OrderLineItemProductFee[];
                // Global Trade Item Number (GTIN) of the item.
                gtin?: string;
                // The REST ID of the product.
                id?: string;
                // URL of an image of the item.
                imageLink?: string;
                // Shared identifier for all variants of the same product.
                itemGroupId?: string;
                // Manufacturer Part Number (MPN) of the item.
                mpn?: string;
                // An identifier of the item.
                offerId?: string;
                // Price of the item.
                price?: Schema.Price;
                // URL to the cached image shown to the user when order was placed.
                shownImage?: string;
                // The CLDR territory // code of the target country of the product.
                targetCountry?: string;
                // The title of the product.
                title?: string;
                // Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and
                // size. You can find a comprehensive list of variant attributes here.
                variantAttributes?: Schema.OrderLineItemProductVariantAttribute[];
            }
            interface OrderLineItemProductFee {
                // Amount of the fee.
                amount?: Schema.Price;
                // Name of the fee.
                name?: string;
            }
            interface OrderLineItemProductVariantAttribute {
                // The dimension of the variant.
                dimension?: string;
                // The value for the dimension.
                value?: string;
            }
            interface OrderLineItemReturnInfo {
                // Required. How many days later the item can be returned.
                daysToReturn?: Integer;
                // Required. Whether the item is returnable.
                isReturnable?: boolean;
                // Required. URL of the item return policy.
                policyUrl?: string;
            }
            interface OrderLineItemShippingDetails {
                // Required. The delivery by date, in ISO 8601 format.
                deliverByDate?: string;
                // Required. Details of the shipping method.
                method?: Schema.OrderLineItemShippingDetailsMethod;
                // Required. The ship by date, in ISO 8601 format.
                shipByDate?: string;
                // Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable
                // values are: - "`delivery`" - "`pickup`"
                type?: string;
            }
            interface OrderLineItemShippingDetailsMethod {
                // The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values.
                carrier?: string;
                // Required. Maximum transit time.
                maxDaysInTransit?: Integer;
                // Required. The name of the shipping method.
                methodName?: string;
                // Required. Minimum transit time.
                minDaysInTransit?: Integer;
            }
            interface OrderMerchantProvidedAnnotation {
                // Key for additional merchant provided (as key-value pairs) annotation about the line item.
                key?: string;
                // Value for additional merchant provided (as key-value pairs) annotation about the line item.
                value?: string;
            }
            interface OrderPaymentMethod {
                // The billing address.
                billingAddress?: Schema.OrderAddress;
                // The card expiration month (January = 1, February = 2 etc.).
                expirationMonth?: Integer;
                // The card expiration year (4-digit, e.g. 2015).
                expirationYear?: Integer;
                // The last four digits of the card number.
                lastFourDigits?: string;
                // The billing phone number.
                phoneNumber?: string;
                // The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" -
                // "`VISA`" - "``"
                type?: string;
            }
            interface OrderPickupDetails {
                // Address of the pickup location where the shipment should be sent. Note that `recipientName` in the address is the name
                // of the business at the pickup location.
                address?: Schema.OrderAddress;
                // Collectors authorized to pick up shipment from the pickup location.
                collectors?: Schema.OrderPickupDetailsCollector[];
                // ID of the pickup location.
                locationId?: string;
            }
            interface OrderPickupDetailsCollector {
                // Name of the person picking up the shipment.
                name?: string;
                // Phone number of the person picking up the shipment.
                phoneNumber?: string;
            }
            interface OrderRefund {
                // The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" -
                // "`googlePayments`" - "`googleSabre`" - "`merchant`"
                actor?: string;
                // The amount that is refunded.
                amount?: Schema.Price;
                // Date on which the item has been created, in ISO 8601 format.
                creationDate?: string;
                // The reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" -
                // "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" -
                // "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" -
                // "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" -
                // "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" -
                // "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" -
                // "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" -
                // "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" -
                // "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" -
                // "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" -
                // "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            // Order disbursement. All methods require the payment analyst role.
            interface OrderReportDisbursement {
                // The disbursement amount.
                disbursementAmount?: Schema.Price;
                // The disbursement date, in ISO 8601 format.
                disbursementCreationDate?: string;
                // The date the disbursement was initiated, in ISO 8601 format.
                disbursementDate?: string;
                // The ID of the disbursement.
                disbursementId?: string;
                // The ID of the managing account.
                merchantId?: string;
            }
            interface OrderReportTransaction {
                // The disbursement amount.
                disbursementAmount?: Schema.Price;
                // The date the disbursement was created, in ISO 8601 format.
                disbursementCreationDate?: string;
                // The date the disbursement was initiated, in ISO 8601 format.
                disbursementDate?: string;
                // The ID of the disbursement.
                disbursementId?: string;
                // The ID of the managing account.
                merchantId?: string;
                // Merchant-provided ID of the order.
                merchantOrderId?: string;
                // The ID of the order.
                orderId?: string;
                // Total amount for the items.
                productAmount?: Schema.Amount;
                // Total amount with remitted tax for the items.
                productAmountWithRemittedTax?: Schema.ProductAmount;
                // The date of the transaction, in ISO 8601 format.
                transactionDate?: string;
            }
            interface OrderReturn {
                // The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" -
                // "`googlePayments`" - "`googleSabre`" - "`merchant`"
                actor?: string;
                // Date on which the item has been created, in ISO 8601 format.
                creationDate?: string;
                // Quantity that is returned.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrderShipment {
                // The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails
                // to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided
                // shipment ID. *Note:* You can also use unsupported carriers, but emails to customers will not include the carrier name or
                // tracking URL, and there will be no automatic order status updates. Supported carriers for US are: - "`ups`" (United
                // Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* -
                // "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) -
                // "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`"
                // (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`"
                // (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China
                // Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos
                // Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) -
                // "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india
                // post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC
                // India) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo
                // by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`"
                // (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`"
                // (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db
                // schenker`" (DB Schenker) - "`aramex`" (Aramex)
                carrier?: string;
                // Date on which the shipment has been created, in ISO 8601 format.
                creationDate?: string;
                // Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered`
                deliveryDate?: string;
                // The ID of the shipment.
                id?: string;
                // The line items that are shipped.
                lineItems?: Schema.OrderShipmentLineItemShipment[];
                // Delivery details of the shipment if scheduling is needed.
                scheduledDeliveryDetails?: Schema.OrderShipmentScheduledDeliveryDetails;
                // The status of the shipment. Acceptable values are: - "`delivered`" - "`readyForPickup`" - "`shipped`" -
                // "`undeliverable`"
                status?: string;
                // The tracking ID for the shipment.
                trackingId?: string;
            }
            interface OrderShipmentLineItemShipment {
                // The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or
                // productId is required.
                lineItemId?: string;
                // The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity that is shipped.
                quantity?: Integer;
            }
            interface OrderShipmentScheduledDeliveryDetails {
                // The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in
                // ITU-T Recommendation E.123 (e.g., "+41 44 668 1800").
                carrierPhoneNumber?: string;
                // The date a shipment is scheduled for delivery, in ISO 8601 format.
                scheduledDate?: string;
            }
            interface OrderinvoicesCreateChargeInvoiceRequest {
                // [required] The ID of the invoice.
                invoiceId?: string;
                // [required] Invoice summary.
                invoiceSummary?: Schema.InvoiceSummary;
                // [required] Invoice details per line item.
                lineItemInvoices?: Schema.ShipmentInvoiceLineItemInvoice[];
                // [required] The ID of the operation, unique across all operations for a given order.
                operationId?: string;
                // [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group
                // multiple line items that have the same kind of shipping charges.
                shipmentGroupId?: string;
            }
            interface OrderinvoicesCreateChargeInvoiceResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateChargeInvoiceResponse".
                kind?: string;
            }
            interface OrderinvoicesCreateRefundInvoiceRequest {
                // [required] The ID of the invoice.
                invoiceId?: string;
                // [required] The ID of the operation, unique across all operations for a given order.
                operationId?: string;
                // Option to create a refund-only invoice. Exactly one of `refundOnlyOption` or `returnOption` must be provided.
                refundOnlyOption?: Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
                // Option to create an invoice for a refund and mark all items within the invoice as returned. Exactly one of
                // `refundOnlyOption` or `returnOption` must be provided.
                returnOption?: Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
                // Invoice details for different shipment groups.
                shipmentInvoices?: Schema.ShipmentInvoice[];
            }
            interface OrderinvoicesCreateRefundInvoiceResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateRefundInvoiceResponse".
                kind?: string;
            }
            interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
                // Optional description of the refund reason.
                description?: string;
                // [required] Reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" -
                // "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" -
                // "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" -
                // "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" -
                // "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" -
                // "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" -
                // "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" -
                // "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" -
                // "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" -
                // "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" -
                // "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
            }
            interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
                // Optional description of the return reason.
                description?: string;
                // [required] Reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
            }
            interface OrderreportsListDisbursementsResponse {
                // The list of disbursements.
                disbursements?: Schema.OrderReportDisbursement[];
                // Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse".
                kind?: string;
                // The token for the retrieval of the next page of disbursements.
                nextPageToken?: string;
            }
            interface OrderreportsListTransactionsResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse".
                kind?: string;
                // The token for the retrieval of the next page of transactions.
                nextPageToken?: string;
                // The list of transactions.
                transactions?: Schema.OrderReportTransaction[];
            }
            interface OrderreturnsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse".
                kind?: string;
                // The token for the retrieval of the next page of returns.
                nextPageToken?: string;
                resources?: Schema.MerchantOrderReturn[];
            }
            interface OrdersAcknowledgeRequest {
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
            }
            interface OrdersAcknowledgeResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".
                kind?: string;
            }
            interface OrdersAdvanceTestOrderResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".
                kind?: string;
            }
            interface OrdersCancelLineItemRequest {
                // Deprecated. Please use amountPretax and amountTax instead.
                amount?: Schema.Price;
                // Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax
                // of the items involved. The amount must not be larger than the net amount left on the order.
                amountPretax?: Schema.Price;
                // Tax amount that corresponds to cancellation amount in amountPretax. Optional, but if filled, then amountPretax must be
                // set. Calculated automatically if not provided.
                amountTax?: Schema.Price;
                // The ID of the line item to cancel. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to cancel.
                quantity?: Integer;
                // The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCancelLineItemResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".
                kind?: string;
            }
            interface OrdersCancelRequest {
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCancelResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".
                kind?: string;
            }
            interface OrdersCancelTestOrderByCustomerRequest {
                // The reason for the cancellation. Acceptable values are: - "`changedMind`" - "`orderedWrongItem`" - "`other`"
                reason?: string;
            }
            interface OrdersCancelTestOrderByCustomerResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelTestOrderByCustomerResponse".
                kind?: string;
            }
            interface OrdersCreateTestOrderRequest {
                // The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created
                // via `template_name`, or the addresses of orders created via `test_order`. Acceptable values are: - "`US`" - "`FR`"
                // Defaults to `US`.
                country?: string;
                // The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and
                // then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" -
                // "`template2`" - "`template3`"
                templateName?: string;
                // The test order to create.
                testOrder?: Schema.TestOrder;
            }
            interface OrdersCreateTestOrderResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".
                kind?: string;
                // The ID of the newly created test order.
                orderId?: string;
            }
            interface OrdersCreateTestReturnRequest {
                // Returned items.
                items?: Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
            }
            interface OrdersCreateTestReturnResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestReturnResponse".
                kind?: string;
                // The ID of the newly created test order return.
                returnId?: string;
            }
            interface OrdersCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.OrdersCustomBatchRequestEntry[];
            }
            interface OrdersCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // Required for `cancel` method.
                cancel?: Schema.OrdersCustomBatchRequestEntryCancel;
                // Required for `cancelLineItem` method.
                cancelLineItem?: Schema.OrdersCustomBatchRequestEntryCancelLineItem;
                // Required for `inStoreReturnLineItem` method.
                inStoreRefundLineItem?: Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
                // The ID of the managing account.
                merchantId?: string;
                // The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods.
                merchantOrderId?: string;
                // The method of the batch entry. Acceptable values are: - "`acknowledge`" - "`cancel`" - "`cancelLineItem`" - "`get`" -
                // "`getByMerchantOrderId`" - "`inStoreRefundLineItem`" - "`refund`" - "`rejectReturnLineItem`" - "`returnLineItem`" -
                // "`returnRefundLineItem`" - "`setLineItemMetadata`" - "`shipLineItems`" - "`updateLineItemShippingDetails`" -
                // "`updateMerchantOrderId`" - "`updateShipment`"
                method?: string;
                // The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and
                // `getByMerchantOrderId`.
                operationId?: string;
                // The ID of the order. Required for all methods beside `getByMerchantOrderId`.
                orderId?: string;
                // Required for `refund` method.
                refund?: Schema.OrdersCustomBatchRequestEntryRefund;
                // Required for `rejectReturnLineItem` method.
                rejectReturnLineItem?: Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
                // Required for `returnLineItem` method.
                returnLineItem?: Schema.OrdersCustomBatchRequestEntryReturnLineItem;
                // Required for `returnRefundLineItem` method.
                returnRefundLineItem?: Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
                // Required for `setLineItemMetadata` method.
                setLineItemMetadata?: Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
                // Required for `shipLineItems` method.
                shipLineItems?: Schema.OrdersCustomBatchRequestEntryShipLineItems;
                // Required for `updateLineItemShippingDate` method.
                updateLineItemShippingDetails?: Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
                // Required for `updateShipment` method.
                updateShipment?: Schema.OrdersCustomBatchRequestEntryUpdateShipment;
            }
            interface OrdersCustomBatchRequestEntryCancel {
                // The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntryCancelLineItem {
                // Deprecated. Please use amountPretax and amountTax instead.
                amount?: Schema.Price;
                // Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax
                // of the items involved. The amount must not be larger than the net amount left on the order.
                amountPretax?: Schema.Price;
                // Tax amount that corresponds to cancellation amount in amountPretax. Optional, but if filled, then amountPretax must be
                // set. Calculated automatically if not provided.
                amountTax?: Schema.Price;
                // The ID of the line item to cancel. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to cancel.
                quantity?: Integer;
                // The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {
                // The ID of the line item to return.
                lineItemId?: string;
                // Quantity that is returned.
                quantity?: Integer;
            }
            interface OrdersCustomBatchRequestEntryInStoreRefundLineItem {
                // The amount that is refunded. Required.
                amountPretax?: Schema.Price;
                // Tax amount that correspond to refund amount in amountPretax. Required.
                amountTax?: Schema.Price;
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return and refund.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntryRefund {
                // Deprecated. Please use amountPretax and amountTax instead.
                amount?: Schema.Price;
                // The amount that is refunded. Either amount or amountPretax should be filled.
                amountPretax?: Schema.Price;
                // Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, amountPretax must be set.
                // Calculated automatically if not provided.
                amountTax?: Schema.Price;
                // The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" -
                // "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" -
                // "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntryRejectReturnLineItem {
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return and refund.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" -
                // "`other`" - "`outOfReturnWindow`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntryReturnLineItem {
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntryReturnRefundLineItem {
                // The amount that is refunded. If omitted, refundless return is assumed (same as calling returnLineItem method).
                amountPretax?: Schema.Price;
                // Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, then amountPretax must be set.
                // Calculated automatically if not provided.
                amountTax?: Schema.Price;
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return and refund.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersCustomBatchRequestEntrySetLineItemMetadata {
                annotations?: Schema.OrderMerchantProvidedAnnotation[];
                // The ID of the line item to set metadata. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId
                // is required.
                productId?: string;
            }
            interface OrdersCustomBatchRequestEntryShipLineItems {
                // Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders
                // resource representation for a list of acceptable values.
                carrier?: string;
                // Line items to ship.
                lineItems?: Schema.OrderShipmentLineItemShipment[];
                // ID of the shipment group. Required for orders that use the orderinvoices service.
                shipmentGroupId?: string;
                // Deprecated. Please use shipmentInfo instead. The ID of the shipment.
                shipmentId?: string;
                // Shipment information. This field is repeated because a single line item can be shipped in several packages (and have
                // several tracking IDs).
                shipmentInfos?: Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
                // Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.
                trackingId?: string;
            }
            interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
                // The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of
                // acceptable values.
                carrier?: string;
                // Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment.
                shipmentId?: string;
                // The tracking ID for the shipment.
                trackingId?: string;
            }
            interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
                // Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be
                // within 1 year timeframe and can not be a date in the past.
                deliverByDate?: string;
                // The ID of the line item to set metadata. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId
                // is required.
                productId?: string;
                // Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be
                // within 1 year timeframe and can not be a date in the past.
                shipByDate?: string;
            }
            interface OrdersCustomBatchRequestEntryUpdateShipment {
                // The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource
                // representation for a list of acceptable values.
                carrier?: string;
                // Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is
                // `delivered`.
                deliveryDate?: string;
                // The ID of the shipment.
                shipmentId?: string;
                // New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" -
                // "`readyForPickup`"
                status?: string;
                // The tracking ID for the shipment. Not updated if missing.
                trackingId?: string;
            }
            interface OrdersCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.OrdersCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".
                kind?: string;
            }
            interface OrdersCustomBatchResponseEntry {
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
                // The status of the execution. Only defined if 1. the request was successful; and 2. the method is not `get`,
                // `getByMerchantOrderId`, or one of the test methods. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`"
                kind?: string;
                // The retrieved order. Only defined if the method is `get` and if the request was successful.
                order?: Schema.Order;
            }
            interface OrdersGetByMerchantOrderIdResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
                kind?: string;
                // The requested order.
                order?: Schema.Order;
            }
            interface OrdersGetTestOrderTemplateResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".
                kind?: string;
                // The requested test order template.
                template?: Schema.TestOrder;
            }
            interface OrdersInStoreRefundLineItemRequest {
                // The amount that is refunded. Required.
                amountPretax?: Schema.Price;
                // Tax amount that correspond to refund amount in amountPretax. Required.
                amountTax?: Schema.Price;
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return and refund.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersInStoreRefundLineItemResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersInStoreRefundLineItemResponse".
                kind?: string;
            }
            interface OrdersListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
                kind?: string;
                // The token for the retrieval of the next page of orders.
                nextPageToken?: string;
                resources?: Schema.Order[];
            }
            interface OrdersRefundRequest {
                // Deprecated. Please use amountPretax and amountTax instead.
                amount?: Schema.Price;
                // The amount that is refunded. Either amount or amountPretax should be filled.
                amountPretax?: Schema.Price;
                // Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, amountPretax must be set.
                // Calculated automatically if not provided.
                amountTax?: Schema.Price;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" -
                // "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" -
                // "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersRefundResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".
                kind?: string;
            }
            interface OrdersRejectReturnLineItemRequest {
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return and refund.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" -
                // "`other`" - "`outOfReturnWindow`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersRejectReturnLineItemResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersRejectReturnLineItemResponse".
                kind?: string;
            }
            interface OrdersReturnLineItemRequest {
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersReturnLineItemResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".
                kind?: string;
            }
            interface OrdersReturnRefundLineItemRequest {
                // The amount that is refunded. If omitted, refundless return is assumed (same as calling returnLineItem method).
                amountPretax?: Schema.Price;
                // Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, then amountPretax must be set.
                // Calculated automatically if not provided.
                amountTax?: Schema.Price;
                // The ID of the line item to return. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is
                // required.
                productId?: string;
                // The quantity to return and refund. Quantity is required.
                quantity?: Integer;
                // The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" -
                // "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" -
                // "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" -
                // "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reason?: string;
                // The explanation of the reason.
                reasonText?: string;
            }
            interface OrdersReturnRefundLineItemResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnRefundLineItemResponse".
                kind?: string;
            }
            interface OrdersSetLineItemMetadataRequest {
                annotations?: Schema.OrderMerchantProvidedAnnotation[];
                // The ID of the line item to set metadata. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId
                // is required.
                productId?: string;
            }
            interface OrdersSetLineItemMetadataResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersSetLineItemMetadataResponse".
                kind?: string;
            }
            interface OrdersShipLineItemsRequest {
                // Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders
                // resource representation for a list of acceptable values.
                carrier?: string;
                // Line items to ship.
                lineItems?: Schema.OrderShipmentLineItemShipment[];
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // ID of the shipment group. Required for orders that use the orderinvoices service.
                shipmentGroupId?: string;
                // Deprecated. Please use shipmentInfo instead. The ID of the shipment.
                shipmentId?: string;
                // Shipment information. This field is repeated because a single line item can be shipped in several packages (and have
                // several tracking IDs).
                shipmentInfos?: Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
                // Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.
                trackingId?: string;
            }
            interface OrdersShipLineItemsResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".
                kind?: string;
            }
            interface OrdersUpdateLineItemShippingDetailsRequest {
                // Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be
                // within 1 year timeframe and can not be a date in the past.
                deliverByDate?: string;
                // The ID of the line item to set metadata. Either lineItemId or productId is required.
                lineItemId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId
                // is required.
                productId?: string;
                // Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be
                // within 1 year timeframe and can not be a date in the past.
                shipByDate?: string;
            }
            interface OrdersUpdateLineItemShippingDetailsResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateLineItemShippingDetailsResponse".
                kind?: string;
            }
            interface OrdersUpdateMerchantOrderIdRequest {
                // The merchant order id to be assigned to the order. Must be unique per merchant.
                merchantOrderId?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
            }
            interface OrdersUpdateMerchantOrderIdResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".
                kind?: string;
            }
            interface OrdersUpdateShipmentRequest {
                // The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource
                // representation for a list of acceptable values.
                carrier?: string;
                // Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is
                // `delivered`.
                deliveryDate?: string;
                // The ID of the operation. Unique across all operations for a given order.
                operationId?: string;
                // The ID of the shipment.
                shipmentId?: string;
                // New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" -
                // "`readyForPickup`"
                status?: string;
                // The tracking ID for the shipment. Not updated if missing.
                trackingId?: string;
            }
            interface OrdersUpdateShipmentResponse {
                // The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`"
                executionStatus?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".
                kind?: string;
            }
            interface PickupCarrierService {
                // The name of the pickup carrier (e.g., `"UPS"`). Required.
                carrierName?: string;
                // The name of the pickup service (e.g., `"Access point"`). Required.
                serviceName?: string;
            }
            interface PickupServicesPickupService {
                // The name of the carrier (e.g., `"UPS"`). Always present.
                carrierName?: string;
                // The CLDR country code of the carrier (e.g., "US"). Always present.
                country?: string;
                // The name of the pickup service (e.g., `"Access point"`). Always present.
                serviceName?: string;
            }
            interface PosCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.PosCustomBatchRequestEntry[];
            }
            interface PosCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // The inventory to submit. This should be set only if the method is `inventory`.
                inventory?: Schema.PosInventory;
                // The ID of the POS data provider.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`"
                method?: string;
                // The sale information to submit. This should be set only if the method is `sale`.
                sale?: Schema.PosSale;
                // The store information to submit. This should be set only if the method is `insert`.
                store?: Schema.PosStore;
                // The store code. This should be set only if the method is `delete` or `get`.
                storeCode?: string;
                // The ID of the account for which to get/submit data.
                targetMerchantId?: string;
            }
            interface PosCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.PosCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#posCustomBatchResponse".
                kind?: string;
            }
            interface PosCustomBatchResponseEntry {
                // The ID of the request entry to which this entry responds.
                batchId?: Integer;
                // A list of errors defined if, and only if, the request failed.
                errors?: Schema.Errors;
                // The updated inventory information.
                inventory?: Schema.PosInventory;
                // Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`"
                kind?: string;
                // The updated sale information.
                sale?: Schema.PosSale;
                // The retrieved or updated store information.
                store?: Schema.PosStore;
            }
            interface PosDataProviders {
                // Country code.
                country?: string;
                // A list of POS data providers.
                posDataProviders?: Schema.PosDataProvidersPosDataProvider[];
            }
            interface PosDataProvidersPosDataProvider {
                // The display name of Pos data Provider.
                displayName?: string;
                // The full name of this POS data Provider.
                fullName?: string;
                // The ID of the account.
                providerId?: string;
            }
            // The absolute quantity of an item available at the given store.
            interface PosInventory {
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Global Trade Item Number.
                gtin?: string;
                // Required. A unique identifier for the item.
                itemId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`"
                kind?: string;
                // Required. The current price of the item.
                price?: Schema.Price;
                // Required. The available quantity of the item.
                quantity?: string;
                // Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in
                // Google My Business.
                storeCode?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Required. The inventory timestamp, in ISO 8601 format.
                timestamp?: string;
            }
            interface PosInventoryRequest {
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Global Trade Item Number.
                gtin?: string;
                // Required. A unique identifier for the item.
                itemId?: string;
                // Required. The current price of the item.
                price?: Schema.Price;
                // Required. The available quantity of the item.
                quantity?: string;
                // Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in
                // Google My Business.
                storeCode?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Required. The inventory timestamp, in ISO 8601 format.
                timestamp?: string;
            }
            interface PosInventoryResponse {
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Global Trade Item Number.
                gtin?: string;
                // Required. A unique identifier for the item.
                itemId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#posInventoryResponse".
                kind?: string;
                // Required. The current price of the item.
                price?: Schema.Price;
                // Required. The available quantity of the item.
                quantity?: string;
                // Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in
                // Google My Business.
                storeCode?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Required. The inventory timestamp, in ISO 8601 format.
                timestamp?: string;
            }
            interface PosListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#posListResponse".
                kind?: string;
                resources?: Schema.PosStore[];
            }
            // The change of the available quantity of an item at the given store.
            interface PosSale {
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Global Trade Item Number.
                gtin?: string;
                // Required. A unique identifier for the item.
                itemId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#posSale`"
                kind?: string;
                // Required. The price of the item.
                price?: Schema.Price;
                // Required. The relative change of the available quantity. Negative for items returned.
                quantity?: string;
                // A unique ID to group items from the same sale event.
                saleId?: string;
                // Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in
                // Google My Business.
                storeCode?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Required. The inventory timestamp, in ISO 8601 format.
                timestamp?: string;
            }
            interface PosSaleRequest {
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Global Trade Item Number.
                gtin?: string;
                // Required. A unique identifier for the item.
                itemId?: string;
                // Required. The price of the item.
                price?: Schema.Price;
                // Required. The relative change of the available quantity. Negative for items returned.
                quantity?: string;
                // A unique ID to group items from the same sale event.
                saleId?: string;
                // Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in
                // Google My Business.
                storeCode?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Required. The inventory timestamp, in ISO 8601 format.
                timestamp?: string;
            }
            interface PosSaleResponse {
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Global Trade Item Number.
                gtin?: string;
                // Required. A unique identifier for the item.
                itemId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "content#posSaleResponse".
                kind?: string;
                // Required. The price of the item.
                price?: Schema.Price;
                // Required. The relative change of the available quantity. Negative for items returned.
                quantity?: string;
                // A unique ID to group items from the same sale event.
                saleId?: string;
                // Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in
                // Google My Business.
                storeCode?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Required. The inventory timestamp, in ISO 8601 format.
                timestamp?: string;
            }
            // Store resource.
            interface PosStore {
                // Identifies what kind of resource this is. Value: the fixed string "`content#posStore`"
                kind?: string;
                // Required. The street address of the store.
                storeAddress?: string;
                // Required. A store identifier that is unique for the given merchant.
                storeCode?: string;
            }
            interface PostalCodeGroup {
                // The CLDR territory code of the country the postal code group applies to. Required.
                country?: string;
                // The name of the postal code group, referred to in headers. Required.
                name?: string;
                // A range of postal codes. Required.
                postalCodeRanges?: Schema.PostalCodeRange[];
            }
            interface PostalCodeRange {
                // A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area.
                // Examples values: `"94108"`, `"9410*"`, `"9*"`. Required.
                postalCodeRangeBegin?: string;
                // A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It
                // must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then
                // `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be
                // a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes
                // matching `postalCodeRangeBegin`.
                postalCodeRangeEnd?: string;
            }
            interface Price {
                // The currency of the price.
                currency?: string;
                // The price represented as a number.
                value?: string;
            }
            //  Required product attributes are primarily defined by the products data specification. See the Products Data
            // Specification Help Center article for information. Some attributes are country-specific, so make sure you select the
            // appropriate country in the drop-down selector at the top of the page. Product data. After inserting, updating, or
            // deleting a product, it may take several minutes before changes take effect.
            interface Product {
                // Additional URLs of images of the item.
                additionalImageLinks?: string[];
                // Additional categories of the item (formatted as in products data specification).
                additionalProductTypes?: string[];
                // Should be set to true if the item is targeted towards adults.
                adult?: boolean;
                // Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
                adwordsGrouping?: string;
                // Similar to adwords_grouping, but only works on CPC.
                adwordsLabels?: string[];
                // Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
                adwordsRedirect?: string;
                // Target age group of the item. Acceptable values are: - "`adult`" - "`infant`" - "`kids`" - "`newborn`" - "`toddler`" -
                // "`youngAdult`"
                ageGroup?: string;
                // Deprecated. Do not use.
                aspects?: Schema.ProductAspect[];
                // Availability status of the item. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`"
                availability?: string;
                // The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
                availabilityDate?: string;
                // Brand of the item.
                brand?: string;
                // URL for the canonical version of your item's landing page.
                canonicalLink?: string;
                // Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`"
                channel?: string;
                // Color of the item.
                color?: string;
                // Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`"
                condition?: string;
                // Required. The two-letter ISO 639-1 language code for the item.
                contentLanguage?: string;
                // Cost of goods sold. Used for gross profit reporting.
                costOfGoodsSold?: Schema.Price;
                // A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed
                // specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting
                // attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as
                // Shopping Actions).
                customAttributes?: Schema.CustomAttribute[];
                // A list of custom (merchant-provided) custom attribute groups.
                customGroups?: Schema.CustomGroup[];
                // Custom label 0 for custom grouping of items in a Shopping campaign.
                customLabel0?: string;
                // Custom label 1 for custom grouping of items in a Shopping campaign.
                customLabel1?: string;
                // Custom label 2 for custom grouping of items in a Shopping campaign.
                customLabel2?: string;
                // Custom label 3 for custom grouping of items in a Shopping campaign.
                customLabel3?: string;
                // Custom label 4 for custom grouping of items in a Shopping campaign.
                customLabel4?: string;
                // Description of the item.
                description?: string;
                // Specifies the intended destinations for the product.
                destinations?: Schema.ProductDestination[];
                // An identifier for an item for dynamic remarketing campaigns.
                displayAdsId?: string;
                // URL directly to your item's landing page for dynamic remarketing campaigns.
                displayAdsLink?: string;
                // Advertiser-specified recommendations.
                displayAdsSimilarIds?: string[];
                // Title of an item for dynamic remarketing campaigns.
                displayAdsTitle?: string;
                // Offer margin for dynamic remarketing campaigns.
                displayAdsValue?: number;
                // The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" -
                // "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`"
                energyEfficiencyClass?: string;
                // Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in
                // Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is
                // too far in the future.
                expirationDate?: string;
                // Target gender of the item. Acceptable values are: - "`female`" - "`male`" - "`unisex`"
                gender?: string;
                // Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When
                // querying products, this field will contain the user provided value. There is currently no way to get back the auto
                // assigned google product categories through the API.
                googleProductCategory?: string;
                // Global Trade Item Number (GTIN) of the item.
                gtin?: string;
                // The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The
                // REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId.
                id?: string;
                // False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand.
                // Required according to the Unique Product Identifier Rules for all target countries except for Canada.
                identifierExists?: boolean;
                // URL of an image of the item.
                imageLink?: string;
                // Number and amount of installments to pay for an item.
                installment?: Schema.Installment;
                // Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant
                // for a single price.
                isBundle?: boolean;
                // Shared identifier for all variants of the same product.
                itemGroupId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "`content#product`"
                kind?: string;
                // URL directly linking to your item's page on your website.
                link?: string;
                // Loyalty points that users receive after purchasing the item. Japan only.
                loyaltyPoints?: Schema.LoyaltyPoints;
                // The material of which the item is made.
                material?: string;
                // The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" -
                // "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`"
                maxEnergyEfficiencyClass?: string;
                // Maximal product handling time (in business days).
                maxHandlingTime?: string;
                // The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" -
                // "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`"
                minEnergyEfficiencyClass?: string;
                // Minimal product handling time (in business days).
                minHandlingTime?: string;
                // URL for the mobile-optimized version of your item's landing page.
                mobileLink?: string;
                // Manufacturer Part Number (MPN) of the item.
                mpn?: string;
                // The number of identical products in a merchant-defined multipack.
                multipack?: string;
                // Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are
                // replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed
                // specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not*
                // this identifier.
                offerId?: string;
                // Deprecated.
                onlineOnly?: boolean;
                // The item's pattern (e.g. polka dots).
                pattern?: string;
                // Price of the item.
                price?: Schema.Price;
                // Your category of the item (formatted as in products data specification).
                productType?: string;
                // The unique ID of a promotion.
                promotionIds?: string[];
                // Advertised sale price of the item.
                salePrice?: Schema.Price;
                // Date range during which the item is on sale (see products data specification ).
                salePriceEffectiveDate?: string;
                // The quantity of the product that is available for selling on Google. Supported only for online products.
                sellOnGoogleQuantity?: string;
                // Shipping rules.
                shipping?: Schema.ProductShipping[];
                // Height of the item for shipping.
                shippingHeight?: Schema.ProductShippingDimension;
                // The shipping label of the product, used to group product in account-level shipping rules.
                shippingLabel?: string;
                // Length of the item for shipping.
                shippingLength?: Schema.ProductShippingDimension;
                // Weight of the item for shipping.
                shippingWeight?: Schema.ProductShippingWeight;
                // Width of the item for shipping.
                shippingWidth?: Schema.ProductShippingDimension;
                // System in which the size is specified. Recommended for apparel items. Acceptable values are: - "`AU`" - "`BR`" - "`CN`"
                // - "`DE`" - "`EU`" - "`FR`" - "`IT`" - "`JP`" - "`MEX`" - "`UK`" - "`US`"
                sizeSystem?: string;
                // The cut of the item. Recommended for apparel items. Acceptable values are: - "`big and tall`" - "`maternity`" -
                // "`oversize`" - "`petite`" - "`plus`" - "`regular`"
                sizeType?: string;
                // Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size
                // with the same `itemGroupId` value (see size definition).
                sizes?: string[];
                // The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`"
                source?: string;
                // Required. The CLDR territory code for the item.
                targetCountry?: string;
                // Tax information.
                taxes?: Schema.ProductTax[];
                // Title of the item.
                title?: string;
                // The preference of the denominator of the unit price.
                unitPricingBaseMeasure?: Schema.ProductUnitPricingBaseMeasure;
                // The measure and dimension of an item.
                unitPricingMeasure?: Schema.ProductUnitPricingMeasure;
                // Deprecated. The read-only list of intended destinations which passed validation.
                validatedDestinations?: string[];
                // Read-only warnings.
                warnings?: Schema.Error[];
            }
            interface ProductAmount {
                // The pre-tax or post-tax price depending on the location of the order.
                priceAmount?: Schema.Price;
                // Remitted tax value.
                remittedTaxAmount?: Schema.Price;
                // Tax value.
                taxAmount?: Schema.Price;
            }
            interface ProductAspect {
                // Deprecated.
                aspectName?: string;
                // Deprecated.
                destinationName?: string;
                // Deprecated.
                intention?: string;
            }
            interface ProductDestination {
                // The name of the destination.
                destinationName?: string;
                // Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" -
                // "`excluded`" - "`optional`" - "`required`"
                intention?: string;
            }
            interface ProductShipping {
                // The CLDR territory code of the country to which an item will ship.
                country?: string;
                // The location where the shipping is applicable, represented by a location group name.
                locationGroupName?: string;
                // The numeric ID of a location that the shipping rate applies to as defined in the AdWords API.
                locationId?: string;
                // The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by
                // a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
                postalCode?: string;
                // Fixed shipping price, represented as a number.
                price?: Schema.Price;
                // The geographic region to which a shipping rate applies.
                region?: string;
                // A free-form description of the service class or delivery speed.
                service?: string;
            }
            interface ProductShippingDimension {
                // The unit of value.
                unit?: string;
                // The dimension of the product used to calculate the shipping cost of the item.
                value?: number;
            }
            interface ProductShippingWeight {
                // The unit of value.
                unit?: string;
                // The weight of the product used to calculate the shipping cost of the item.
                value?: number;
            }
            // The status of a product, i.e., information about a product computed asynchronously.
            interface ProductStatus {
                // Date on which the item has been created, in ISO 8601 format.
                creationDate?: string;
                // DEPRECATED - never populated
                dataQualityIssues?: Schema.ProductStatusDataQualityIssue[];
                // The intended destinations for the product.
                destinationStatuses?: Schema.ProductStatusDestinationStatus[];
                // Date on which the item expires in Google Shopping, in ISO 8601 format.
                googleExpirationDate?: string;
                // A list of all issues associated with the product.
                itemLevelIssues?: Schema.ProductStatusItemLevelIssue[];
                // Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`"
                kind?: string;
                // Date on which the item has been last updated, in ISO 8601 format.
                lastUpdateDate?: string;
                // The link to the product.
                link?: string;
                // Product data after applying all the join inputs.
                product?: Schema.Product;
                // The ID of the product for which status is reported.
                productId?: string;
                // The title of the product.
                title?: string;
            }
            interface ProductStatusDataQualityIssue {
                destination?: string;
                detail?: string;
                fetchStatus?: string;
                id?: string;
                location?: string;
                severity?: string;
                timestamp?: string;
                valueOnLandingPage?: string;
                valueProvided?: string;
            }
            interface ProductStatusDestinationStatus {
                // Whether the approval status might change due to further processing.
                approvalPending?: boolean;
                // The destination's approval status. Acceptable values are: - "`approved`" - "`disapproved`"
                approvalStatus?: string;
                // The name of the destination
                destination?: string;
                // Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`"
                // - "`optional`" - "`required`"
                intention?: string;
            }
            interface ProductStatusItemLevelIssue {
                // The attribute's name, if the issue is caused by a single attribute.
                attributeName?: string;
                // The error code of the issue.
                code?: string;
                // A short issue description in English.
                description?: string;
                // The destination the issue applies to.
                destination?: string;
                // A detailed issue description in English.
                detail?: string;
                // The URL of a web page to help with resolving this issue.
                documentation?: string;
                // Whether the issue can be resolved by the merchant.
                resolution?: string;
                // How this issue affects serving of the offer.
                servability?: string;
            }
            interface ProductTax {
                // The country within which the item is taxed, specified as a CLDR territory code.
                country?: string;
                // The numeric ID of a location that the tax rate applies to as defined in the AdWords API.
                locationId?: string;
                // The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a
                // range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
                postalCode?: string;
                // The percentage of tax rate that applies to the item price.
                rate?: number;
                // The geographic region to which the tax rate applies.
                region?: string;
                // Should be set to true if tax is charged on shipping.
                taxShip?: boolean;
            }
            interface ProductUnitPricingBaseMeasure {
                // The unit of the denominator.
                unit?: string;
                // The denominator of the unit price.
                value?: string;
            }
            interface ProductUnitPricingMeasure {
                // The unit of the measure.
                unit?: string;
                // The measure of an item.
                value?: number;
            }
            interface ProductsCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.ProductsCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch products request.
            interface ProductsCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`"
                method?: string;
                // The product to insert. Only required if the method is `insert`.
                product?: Schema.Product;
                // The ID of the product to get or delete. Only defined if the method is `get` or `delete`.
                productId?: string;
            }
            interface ProductsCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.ProductsCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch products response.
            interface ProductsCustomBatchResponseEntry {
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors defined if and only if the request failed.
                errors?: Schema.Errors;
                // Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`"
                kind?: string;
                // The inserted product. Only defined if the method is `insert` and if the request was successful.
                product?: Schema.Product;
            }
            interface ProductsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
                kind?: string;
                // The token for the retrieval of the next page of products.
                nextPageToken?: string;
                resources?: Schema.Product[];
            }
            interface ProductstatusesCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.ProductstatusesCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch productstatuses request.
            interface ProductstatusesCustomBatchRequestEntry {
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
                destinations?: string[];
                includeAttributes?: boolean;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`get`"
                method?: string;
                // The ID of the product whose status to get.
                productId?: string;
            }
            interface ProductstatusesCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.ProductstatusesCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch productstatuses response.
            interface ProductstatusesCustomBatchResponseEntry {
                // The ID of the request entry this entry responds to.
                batchId?: Integer;
                // A list of errors, if the request failed.
                errors?: Schema.Errors;
                // Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`"
                kind?: string;
                // The requested product status. Only defined if the request was successful.
                productStatus?: Schema.ProductStatus;
            }
            interface ProductstatusesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".
                kind?: string;
                // The token for the retrieval of the next page of products statuses.
                nextPageToken?: string;
                resources?: Schema.ProductStatus[];
            }
            interface Promotion {
                // [required] Amount of the promotion. The values here are the promotion applied to the unit price pretax and to the total
                // of the tax amounts.
                promotionAmount?: Schema.Amount;
                // [required] ID of the promotion.
                promotionId?: string;
            }
            interface RateGroup {
                // A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of
                // the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.
                applicableShippingLabels?: string[];
                // A list of carrier rates that can be referred to by `mainTable` or `singleValue`.
                carrierRates?: Schema.CarrierRate[];
                // A table defining the rate group, when `singleValue` is not expressive enough. Can only be set if `singleValue` is not
                // set.
                mainTable?: Schema.Table;
                // Name of the rate group. Optional. If set has to be unique within shipping service.
                name?: string;
                // The value of the rate group (e.g. flat rate $10). Can only be set if `mainTable` and `subtables` are not set.
                singleValue?: Schema.Value;
                // A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set.
                subtables?: Schema.Table[];
            }
            interface RefundReason {
                // Description of the reason.
                description?: string;
                // Code of the refund reason. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" -
                // "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" -
                // "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" -
                // "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" -
                // "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" -
                // "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" -
                // "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" -
                // "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" -
                // "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" -
                // "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" -
                // "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" -
                // "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
                reasonCode?: string;
            }
            interface ReturnShipment {
                // The date of creation of the shipment, in ISO 8601 format.
                creationDate?: string;
                // The date of delivery of the shipment, in ISO 8601 format.
                deliveryDate?: string;
                // Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`"
                returnMethodType?: string;
                // Shipment ID generated by Google.
                shipmentId?: string;
                // Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially.
                shipmentTrackingInfos?: Schema.ShipmentTrackingInfo[];
                // The date of shipping of the shipment, in ISO 8601 format.
                shippingDate?: string;
                // State of the shipment. Acceptable values are: - "`completed`" - "`new`" - "`shipped`" - "`undeliverable`" - "`pending`"
                state?: string;
            }
            interface Row {
                // The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a
                // length of 1 for one-dimensional tables. Required.
                cells?: Schema.Value[];
            }
            interface Service {
                // A boolean exposing the active status of the shipping service. Required.
                active?: boolean;
                // The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
                currency?: string;
                // The CLDR territory code of the country to which the service applies. Required.
                deliveryCountry?: string;
                // Time spent in various aspects from order to the delivery of the product. Required.
                deliveryTime?: Schema.DeliveryTime;
                // Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" -
                // "`Shopping Actions`"
                eligibility?: string;
                // Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All
                // prices within a service must have the same currency. Cannot be set together with minimum_order_value_table.
                minimumOrderValue?: Schema.Price;
                // Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with
                // minimum_order_value.
                minimumOrderValueTable?: Schema.MinimumOrderValueTable;
                // Free-form name of the service. Must be unique within target account. Required.
                name?: string;
                // The carrier-service pair delivering items to collection points. The list of supported pickup services can be retrieved
                // via the `getSupportedPickupServices` method. Required if and only if the service delivery type is `pickup`.
                pickupService?: Schema.PickupCarrierService;
                // Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means
                // "everything else". The other `applicableShippingLabels` must not overlap.
                rateGroups?: Schema.RateGroup[];
                // Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup`"
                shipmentType?: string;
            }
            interface ShipmentInvoice {
                // [required] Invoice summary.
                invoiceSummary?: Schema.InvoiceSummary;
                // [required] Invoice details per line item.
                lineItemInvoices?: Schema.ShipmentInvoiceLineItemInvoice[];
                // [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group
                // multiple line items that have the same kind of shipping charges.
                shipmentGroupId?: string;
            }
            interface ShipmentInvoiceLineItemInvoice {
                // ID of the line item. Either lineItemId or productId must be set.
                lineItemId?: string;
                // ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set.
                productId?: string;
                // [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The
                // same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example:
                // free or promotional units).
                shipmentUnitIds?: string[];
                // [required] Invoice details for a single unit.
                unitInvoice?: Schema.UnitInvoice;
            }
            interface ShipmentTrackingInfo {
                // The shipping carrier that handles the package. Acceptable values are: - "`boxtal`" - "`bpost`" - "`chronopost`" -
                // "`colisPrive`" - "`colissimo`" - "`cxt`" - "`deliv`" - "`dhl`" - "`dpd`" - "`dynamex`" - "`eCourier`" - "`easypost`" -
                // "`efw`" - "`fedex`" - "`fedexSmartpost`" - "`geodis`" - "`gls`" - "`googleCourier`" - "`gsx`" - "`jdLogistics`" -
                // "`laPoste`" - "`lasership`" - "`manual`" - "`mpx`" - "`onTrac`" - "`other`" - "`tnt`" - "`uds`" - "`ups`" - "`usps`"
                carrier?: string;
                // The tracking number for the package.
                trackingNumber?: string;
            }
            // The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the
            // admin role.
            interface ShippingSettings {
                // The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get
                // request responses.
                accountId?: string;
                // A list of postal code groups that can be referred to in `services`. Optional.
                postalCodeGroups?: Schema.PostalCodeGroup[];
                // The target account's list of services. Optional.
                services?: Schema.Service[];
            }
            interface ShippingsettingsCustomBatchRequest {
                // The request entries to be processed in the batch.
                entries?: Schema.ShippingsettingsCustomBatchRequestEntry[];
            }
            // A batch entry encoding a single non-batch shippingsettings request.
            interface ShippingsettingsCustomBatchRequestEntry {
                // The ID of the account for which to get/update account shipping settings.
                accountId?: string;
                // An entry ID, unique within the batch request.
                batchId?: Integer;
                // The ID of the managing account.
                merchantId?: string;
                // The method of the batch entry. Acceptable values are: - "`get`" - "`update`"
                method?: string;
                // The account shipping settings to update. Only defined if the method is `update`.
                shippingSettings?: Schema.ShippingSettings;
            }
            interface ShippingsettingsCustomBatchResponse {
                // The result of the execution of the batch requests.
                entries?: Schema.ShippingsettingsCustomBatchResponseEntry[];
                // Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse".
                kind?: string;
            }
            // A batch entry encoding a single non-batch shipping settings response.
            interface ShippingsettingsCustomBatchResponseEntry {
                // The ID of the request entry to which this entry responds.
                batchId?: Integer;
                // A list of errors defined if, and only if, the request failed.
                errors?: Schema.Errors;
                // Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`"
                kind?: string;
                // The retrieved or updated account shipping settings.
                shippingSettings?: Schema.ShippingSettings;
            }
            interface ShippingsettingsGetSupportedCarriersResponse {
                // A list of supported carriers. May be empty.
                carriers?: Schema.CarriersCarrier[];
                // Identifies what kind of resource this is. Value: the fixed string
                // "content#shippingsettingsGetSupportedCarriersResponse".
                kind?: string;
            }
            interface ShippingsettingsGetSupportedHolidaysResponse {
                // A list of holidays applicable for delivery guarantees. May be empty.
                holidays?: Schema.HolidaysHoliday[];
                // Identifies what kind of resource this is. Value: the fixed string
                // "content#shippingsettingsGetSupportedHolidaysResponse".
                kind?: string;
            }
            interface ShippingsettingsGetSupportedPickupServicesResponse {
                // Identifies what kind of resource this is. Value: the fixed string
                // "content#shippingsettingsGetSupportedPickupServicesResponse".
                kind?: string;
                // A list of supported pickup services. May be empty.
                pickupServices?: Schema.PickupServicesPickupService[];
            }
            interface ShippingsettingsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse".
                kind?: string;
                // The token for the retrieval of the next page of shipping settings.
                nextPageToken?: string;
                resources?: Schema.ShippingSettings[];
            }
            interface Table {
                // Headers of the table's columns. Optional: if not set then the table has only one dimension.
                columnHeaders?: Schema.Headers;
                // Name of the table. Required for subtables, ignored for the main table.
                name?: string;
                // Headers of the table's rows. Required.
                rowHeaders?: Schema.Headers;
                // The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required.
                rows?: Schema.Row[];
            }
            interface TestOrder {
                // Required. The details of the customer who placed the order.
                customer?: Schema.TestOrderCustomer;
                // Whether the orderinvoices service should support this order.
                enableOrderinvoices?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`"
                kind?: string;
                // Required. Line items that are ordered. At least one line item must be provided.
                lineItems?: Schema.TestOrderLineItem[];
                // Restricted. Do not use.
                notificationMode?: string;
                // The details of the payment method.
                paymentMethod?: Schema.TestOrderPaymentMethod;
                // Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" -
                // "`jim`" - "`pam`"
                predefinedDeliveryAddress?: string;
                // Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type
                // `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
                predefinedPickupDetails?: string;
                // Deprecated. Ignored if provided.
                promotions?: Schema.OrderLegacyPromotion[];
                // Required. The price of shipping for all items. Shipping tax is automatically calculated for orders where marketplace
                // facilitator tax laws are applicable. Otherwise, tax settings from Merchant Center are applied. Note that shipping is not
                // taxed in certain states.
                shippingCost?: Schema.Price;
                // Deprecated. Ignored if provided.
                shippingCostTax?: Schema.Price;
                // Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`"
                // - "`standard`" - "`twoDay`"
                shippingOption?: string;
            }
            interface TestOrderCustomer {
                // Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" -
                // "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`"
                email?: string;
                // Deprecated. Please use marketingRightsInfo instead.
                explicitMarketingPreference?: boolean;
                // Full name of the customer.
                fullName?: string;
                // Customer's marketing preferences.
                marketingRightsInfo?: Schema.TestOrderCustomerMarketingRightsInfo;
            }
            interface TestOrderCustomerMarketingRightsInfo {
                // Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field
                // would be empty. Acceptable values are: - "`denied`" - "`granted`"
                explicitMarketingPreference?: string;
                // Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
                lastUpdatedTimestamp?: string;
            }
            interface TestOrderLineItem {
                // Required. Product data from the time of the order placement.
                product?: Schema.TestOrderLineItemProduct;
                // Required. Number of items ordered.
                quantityOrdered?: Integer;
                // Required. Details of the return policy for the line item.
                returnInfo?: Schema.OrderLineItemReturnInfo;
                // Required. Details of the requested shipping for the line item.
                shippingDetails?: Schema.OrderLineItemShippingDetails;
                // Deprecated. Ignored if provided.
                unitTax?: Schema.Price;
            }
            interface TestOrderLineItemProduct {
                // Required. Brand of the item.
                brand?: string;
                // Deprecated. Acceptable values are: - "`online`"
                channel?: string;
                // Required. Condition or state of the item. Acceptable values are: - "`new`"
                condition?: string;
                // Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`"
                contentLanguage?: string;
                // Fees for the item. Optional.
                fees?: Schema.OrderLineItemProductFee[];
                // Global Trade Item Number (GTIN) of the item. Optional.
                gtin?: string;
                // Required. URL of an image of the item.
                imageLink?: string;
                // Shared identifier for all variants of the same product. Optional.
                itemGroupId?: string;
                // Manufacturer Part Number (MPN) of the item. Optional.
                mpn?: string;
                // Required. An identifier of the item.
                offerId?: string;
                // Required. The price for the product. Tax is automatically calculated for orders where marketplace facilitator tax laws
                // are applicable. Otherwise, tax settings from Merchant Center are applied.
                price?: Schema.Price;
                // Required. The CLDR territory // code of the target country of the product.
                targetCountry?: string;
                // Required. The title of the product.
                title?: string;
                // Variant attributes for the item. Optional.
                variantAttributes?: Schema.OrderLineItemProductVariantAttribute[];
            }
            interface TestOrderPaymentMethod {
                // The card expiration month (January = 1, February = 2 etc.).
                expirationMonth?: Integer;
                // The card expiration year (4-digit, e.g. 2015).
                expirationYear?: Integer;
                // The last four digits of the card number.
                lastFourDigits?: string;
                // The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
                predefinedBillingAddress?: string;
                // The type of instrument. Note that real orders might have different values than the four values accepted by
                // `createTestOrder`. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`MASTERCARD`" - "`VISA`"
                type?: string;
            }
            interface TransitTable {
                // A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other
                // locations"]`. The referred postal code groups must match the delivery country of the service.
                postalCodeGroupNames?: string[];
                rows?: Schema.TransitTableTransitTimeRow[];
                // A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other
                // labels"]`.
                transitTimeLabels?: string[];
            }
            interface TransitTableTransitTimeRow {
                values?: Schema.TransitTableTransitTimeRowTransitTimeValue[];
            }
            interface TransitTableTransitTimeRowTransitTimeValue {
                // Must be greater than or equal to `minTransitTimeInDays`.
                maxTransitTimeInDays?: Integer;
                // Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery.
                minTransitTimeInDays?: Integer;
            }
            interface UnitInvoice {
                // Additional charges for a unit, e.g. shipping costs.
                additionalCharges?: Schema.UnitInvoiceAdditionalCharge[];
                // Deprecated.
                promotions?: Schema.Promotion[];
                // [required] Price of the unit, before applying taxes.
                unitPricePretax?: Schema.Price;
                // Tax amounts to apply to the unit price.
                unitPriceTaxes?: Schema.UnitInvoiceTaxLine[];
            }
            interface UnitInvoiceAdditionalCharge {
                // [required] Amount of the additional charge.
                additionalChargeAmount?: Schema.Amount;
                // Deprecated.
                additionalChargePromotions?: Schema.Promotion[];
                // [required] Type of the additional charge. Acceptable values are: - "`shipping`"
                type?: string;
            }
            interface UnitInvoiceTaxLine {
                // [required] Tax amount for the tax type.
                taxAmount?: Schema.Price;
                // Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`.
                taxName?: string;
                // [required] Type of the tax. Acceptable values are: - "`otherFee`" - "`otherFeeTax`" - "`sales`"
                taxType?: string;
            }
            // The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`,
            // `pricePercentage`, `carrierRateName`, `subtableName` must be set.
            interface Value {
                // The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other
                // fields are not set.
                carrierRateName?: string;
                // A flat rate. Can only be set if all other fields are not set.
                flatRate?: Schema.Price;
                // If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.
                noShipping?: boolean;
                // A percentage of the price represented as a number in decimal notation (e.g., `"5.4"`). Can only be set if all other
                // fields are not set.
                pricePercentage?: string;
                // The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are
                // not set.
                subtableName?: string;
            }
            interface Weight {
                // Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`"
                unit?: string;
                // Required. The weight represented as a number.
                value?: string;
            }
        }
    }
    // Manage your product listings and accounts for Google Shopping
    interface ShoppingContent {
        Accounts?: ShoppingContent.Collection.AccountsCollection;
        Accountstatuses?: ShoppingContent.Collection.AccountstatusesCollection;
        Accounttax?: ShoppingContent.Collection.AccounttaxCollection;
        Datafeeds?: ShoppingContent.Collection.DatafeedsCollection;
        Datafeedstatuses?: ShoppingContent.Collection.DatafeedstatusesCollection;
        Inventory?: ShoppingContent.Collection.InventoryCollection;
        Liasettings?: ShoppingContent.Collection.LiasettingsCollection;
        Orderinvoices?: ShoppingContent.Collection.OrderinvoicesCollection;
        Orderreports?: ShoppingContent.Collection.OrderreportsCollection;
        Orderreturns?: ShoppingContent.Collection.OrderreturnsCollection;
        Orders?: ShoppingContent.Collection.OrdersCollection;
        Pos?: ShoppingContent.Collection.PosCollection;
        Products?: ShoppingContent.Collection.ProductsCollection;
        Productstatuses?: ShoppingContent.Collection.ProductstatusesCollection;
        Shippingsettings?: ShoppingContent.Collection.ShippingsettingsCollection;
        // Create a new instance of Account
        newAccount(): ShoppingContent.Schema.Account;
        // Create a new instance of AccountAddress
        newAccountAddress(): ShoppingContent.Schema.AccountAddress;
        // Create a new instance of AccountAdwordsLink
        newAccountAdwordsLink(): ShoppingContent.Schema.AccountAdwordsLink;
        // Create a new instance of AccountBusinessInformation
        newAccountBusinessInformation(): ShoppingContent.Schema.AccountBusinessInformation;
        // Create a new instance of AccountCustomerService
        newAccountCustomerService(): ShoppingContent.Schema.AccountCustomerService;
        // Create a new instance of AccountGoogleMyBusinessLink
        newAccountGoogleMyBusinessLink(): ShoppingContent.Schema.AccountGoogleMyBusinessLink;
        // Create a new instance of AccountTax
        newAccountTax(): ShoppingContent.Schema.AccountTax;
        // Create a new instance of AccountTaxTaxRule
        newAccountTaxTaxRule(): ShoppingContent.Schema.AccountTaxTaxRule;
        // Create a new instance of AccountUser
        newAccountUser(): ShoppingContent.Schema.AccountUser;
        // Create a new instance of AccountYouTubeChannelLink
        newAccountYouTubeChannelLink(): ShoppingContent.Schema.AccountYouTubeChannelLink;
        // Create a new instance of AccountsCustomBatchRequest
        newAccountsCustomBatchRequest(): ShoppingContent.Schema.AccountsCustomBatchRequest;
        // Create a new instance of AccountsCustomBatchRequestEntry
        newAccountsCustomBatchRequestEntry(): ShoppingContent.Schema.AccountsCustomBatchRequestEntry;
        // Create a new instance of AccountsCustomBatchRequestEntryLinkRequest
        newAccountsCustomBatchRequestEntryLinkRequest(): ShoppingContent.Schema.AccountsCustomBatchRequestEntryLinkRequest;
        // Create a new instance of AccountsLinkRequest
        newAccountsLinkRequest(): ShoppingContent.Schema.AccountsLinkRequest;
        // Create a new instance of AccountstatusesCustomBatchRequest
        newAccountstatusesCustomBatchRequest(): ShoppingContent.Schema.AccountstatusesCustomBatchRequest;
        // Create a new instance of AccountstatusesCustomBatchRequestEntry
        newAccountstatusesCustomBatchRequestEntry(): ShoppingContent.Schema.AccountstatusesCustomBatchRequestEntry;
        // Create a new instance of AccounttaxCustomBatchRequest
        newAccounttaxCustomBatchRequest(): ShoppingContent.Schema.AccounttaxCustomBatchRequest;
        // Create a new instance of AccounttaxCustomBatchRequestEntry
        newAccounttaxCustomBatchRequestEntry(): ShoppingContent.Schema.AccounttaxCustomBatchRequestEntry;
        // Create a new instance of Amount
        newAmount(): ShoppingContent.Schema.Amount;
        // Create a new instance of BusinessDayConfig
        newBusinessDayConfig(): ShoppingContent.Schema.BusinessDayConfig;
        // Create a new instance of CarrierRate
        newCarrierRate(): ShoppingContent.Schema.CarrierRate;
        // Create a new instance of CustomAttribute
        newCustomAttribute(): ShoppingContent.Schema.CustomAttribute;
        // Create a new instance of CustomGroup
        newCustomGroup(): ShoppingContent.Schema.CustomGroup;
        // Create a new instance of CutoffTime
        newCutoffTime(): ShoppingContent.Schema.CutoffTime;
        // Create a new instance of Datafeed
        newDatafeed(): ShoppingContent.Schema.Datafeed;
        // Create a new instance of DatafeedFetchSchedule
        newDatafeedFetchSchedule(): ShoppingContent.Schema.DatafeedFetchSchedule;
        // Create a new instance of DatafeedFormat
        newDatafeedFormat(): ShoppingContent.Schema.DatafeedFormat;
        // Create a new instance of DatafeedTarget
        newDatafeedTarget(): ShoppingContent.Schema.DatafeedTarget;
        // Create a new instance of DatafeedsCustomBatchRequest
        newDatafeedsCustomBatchRequest(): ShoppingContent.Schema.DatafeedsCustomBatchRequest;
        // Create a new instance of DatafeedsCustomBatchRequestEntry
        newDatafeedsCustomBatchRequestEntry(): ShoppingContent.Schema.DatafeedsCustomBatchRequestEntry;
        // Create a new instance of DatafeedstatusesCustomBatchRequest
        newDatafeedstatusesCustomBatchRequest(): ShoppingContent.Schema.DatafeedstatusesCustomBatchRequest;
        // Create a new instance of DatafeedstatusesCustomBatchRequestEntry
        newDatafeedstatusesCustomBatchRequestEntry(): ShoppingContent.Schema.DatafeedstatusesCustomBatchRequestEntry;
        // Create a new instance of DeliveryTime
        newDeliveryTime(): ShoppingContent.Schema.DeliveryTime;
        // Create a new instance of Error
        newError(): ShoppingContent.Schema.Error;
        // Create a new instance of Headers
        newHeaders(): ShoppingContent.Schema.Headers;
        // Create a new instance of HolidayCutoff
        newHolidayCutoff(): ShoppingContent.Schema.HolidayCutoff;
        // Create a new instance of Installment
        newInstallment(): ShoppingContent.Schema.Installment;
        // Create a new instance of Inventory
        newInventory(): ShoppingContent.Schema.Inventory;
        // Create a new instance of InventoryCustomBatchRequest
        newInventoryCustomBatchRequest(): ShoppingContent.Schema.InventoryCustomBatchRequest;
        // Create a new instance of InventoryCustomBatchRequestEntry
        newInventoryCustomBatchRequestEntry(): ShoppingContent.Schema.InventoryCustomBatchRequestEntry;
        // Create a new instance of InventoryPickup
        newInventoryPickup(): ShoppingContent.Schema.InventoryPickup;
        // Create a new instance of InventorySetRequest
        newInventorySetRequest(): ShoppingContent.Schema.InventorySetRequest;
        // Create a new instance of InvoiceSummary
        newInvoiceSummary(): ShoppingContent.Schema.InvoiceSummary;
        // Create a new instance of InvoiceSummaryAdditionalChargeSummary
        newInvoiceSummaryAdditionalChargeSummary(): ShoppingContent.Schema.InvoiceSummaryAdditionalChargeSummary;
        // Create a new instance of LiaAboutPageSettings
        newLiaAboutPageSettings(): ShoppingContent.Schema.LiaAboutPageSettings;
        // Create a new instance of LiaCountrySettings
        newLiaCountrySettings(): ShoppingContent.Schema.LiaCountrySettings;
        // Create a new instance of LiaInventorySettings
        newLiaInventorySettings(): ShoppingContent.Schema.LiaInventorySettings;
        // Create a new instance of LiaOnDisplayToOrderSettings
        newLiaOnDisplayToOrderSettings(): ShoppingContent.Schema.LiaOnDisplayToOrderSettings;
        // Create a new instance of LiaPosDataProvider
        newLiaPosDataProvider(): ShoppingContent.Schema.LiaPosDataProvider;
        // Create a new instance of LiaSettings
        newLiaSettings(): ShoppingContent.Schema.LiaSettings;
        // Create a new instance of LiasettingsCustomBatchRequest
        newLiasettingsCustomBatchRequest(): ShoppingContent.Schema.LiasettingsCustomBatchRequest;
        // Create a new instance of LiasettingsCustomBatchRequestEntry
        newLiasettingsCustomBatchRequestEntry(): ShoppingContent.Schema.LiasettingsCustomBatchRequestEntry;
        // Create a new instance of LocationIdSet
        newLocationIdSet(): ShoppingContent.Schema.LocationIdSet;
        // Create a new instance of LoyaltyPoints
        newLoyaltyPoints(): ShoppingContent.Schema.LoyaltyPoints;
        // Create a new instance of MinimumOrderValueTable
        newMinimumOrderValueTable(): ShoppingContent.Schema.MinimumOrderValueTable;
        // Create a new instance of MinimumOrderValueTableStoreCodeSetWithMov
        newMinimumOrderValueTableStoreCodeSetWithMov(): ShoppingContent.Schema.MinimumOrderValueTableStoreCodeSetWithMov;
        // Create a new instance of OrderLegacyPromotion
        newOrderLegacyPromotion(): ShoppingContent.Schema.OrderLegacyPromotion;
        // Create a new instance of OrderLegacyPromotionBenefit
        newOrderLegacyPromotionBenefit(): ShoppingContent.Schema.OrderLegacyPromotionBenefit;
        // Create a new instance of OrderLineItemProductFee
        newOrderLineItemProductFee(): ShoppingContent.Schema.OrderLineItemProductFee;
        // Create a new instance of OrderLineItemProductVariantAttribute
        newOrderLineItemProductVariantAttribute(): ShoppingContent.Schema.OrderLineItemProductVariantAttribute;
        // Create a new instance of OrderLineItemReturnInfo
        newOrderLineItemReturnInfo(): ShoppingContent.Schema.OrderLineItemReturnInfo;
        // Create a new instance of OrderLineItemShippingDetails
        newOrderLineItemShippingDetails(): ShoppingContent.Schema.OrderLineItemShippingDetails;
        // Create a new instance of OrderLineItemShippingDetailsMethod
        newOrderLineItemShippingDetailsMethod(): ShoppingContent.Schema.OrderLineItemShippingDetailsMethod;
        // Create a new instance of OrderMerchantProvidedAnnotation
        newOrderMerchantProvidedAnnotation(): ShoppingContent.Schema.OrderMerchantProvidedAnnotation;
        // Create a new instance of OrderShipmentLineItemShipment
        newOrderShipmentLineItemShipment(): ShoppingContent.Schema.OrderShipmentLineItemShipment;
        // Create a new instance of OrderinvoicesCreateChargeInvoiceRequest
        newOrderinvoicesCreateChargeInvoiceRequest(): ShoppingContent.Schema.OrderinvoicesCreateChargeInvoiceRequest;
        // Create a new instance of OrderinvoicesCreateRefundInvoiceRequest
        newOrderinvoicesCreateRefundInvoiceRequest(): ShoppingContent.Schema.OrderinvoicesCreateRefundInvoiceRequest;
        // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption
        newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption(): ShoppingContent.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
        // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption
        newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption(): ShoppingContent.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
        // Create a new instance of OrdersAcknowledgeRequest
        newOrdersAcknowledgeRequest(): ShoppingContent.Schema.OrdersAcknowledgeRequest;
        // Create a new instance of OrdersCancelLineItemRequest
        newOrdersCancelLineItemRequest(): ShoppingContent.Schema.OrdersCancelLineItemRequest;
        // Create a new instance of OrdersCancelRequest
        newOrdersCancelRequest(): ShoppingContent.Schema.OrdersCancelRequest;
        // Create a new instance of OrdersCancelTestOrderByCustomerRequest
        newOrdersCancelTestOrderByCustomerRequest(): ShoppingContent.Schema.OrdersCancelTestOrderByCustomerRequest;
        // Create a new instance of OrdersCreateTestOrderRequest
        newOrdersCreateTestOrderRequest(): ShoppingContent.Schema.OrdersCreateTestOrderRequest;
        // Create a new instance of OrdersCreateTestReturnRequest
        newOrdersCreateTestReturnRequest(): ShoppingContent.Schema.OrdersCreateTestReturnRequest;
        // Create a new instance of OrdersCustomBatchRequest
        newOrdersCustomBatchRequest(): ShoppingContent.Schema.OrdersCustomBatchRequest;
        // Create a new instance of OrdersCustomBatchRequestEntry
        newOrdersCustomBatchRequestEntry(): ShoppingContent.Schema.OrdersCustomBatchRequestEntry;
        // Create a new instance of OrdersCustomBatchRequestEntryCancel
        newOrdersCustomBatchRequestEntryCancel(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryCancel;
        // Create a new instance of OrdersCustomBatchRequestEntryCancelLineItem
        newOrdersCustomBatchRequestEntryCancelLineItem(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryCancelLineItem;
        // Create a new instance of OrdersCustomBatchRequestEntryCreateTestReturnReturnItem
        newOrdersCustomBatchRequestEntryCreateTestReturnReturnItem(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem;
        // Create a new instance of OrdersCustomBatchRequestEntryInStoreRefundLineItem
        newOrdersCustomBatchRequestEntryInStoreRefundLineItem(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
        // Create a new instance of OrdersCustomBatchRequestEntryRefund
        newOrdersCustomBatchRequestEntryRefund(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryRefund;
        // Create a new instance of OrdersCustomBatchRequestEntryRejectReturnLineItem
        newOrdersCustomBatchRequestEntryRejectReturnLineItem(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
        // Create a new instance of OrdersCustomBatchRequestEntryReturnLineItem
        newOrdersCustomBatchRequestEntryReturnLineItem(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryReturnLineItem;
        // Create a new instance of OrdersCustomBatchRequestEntryReturnRefundLineItem
        newOrdersCustomBatchRequestEntryReturnRefundLineItem(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
        // Create a new instance of OrdersCustomBatchRequestEntrySetLineItemMetadata
        newOrdersCustomBatchRequestEntrySetLineItemMetadata(): ShoppingContent.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
        // Create a new instance of OrdersCustomBatchRequestEntryShipLineItems
        newOrdersCustomBatchRequestEntryShipLineItems(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryShipLineItems;
        // Create a new instance of OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
        newOrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
        // Create a new instance of OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails
        newOrdersCustomBatchRequestEntryUpdateLineItemShippingDetails(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
        // Create a new instance of OrdersCustomBatchRequestEntryUpdateShipment
        newOrdersCustomBatchRequestEntryUpdateShipment(): ShoppingContent.Schema.OrdersCustomBatchRequestEntryUpdateShipment;
        // Create a new instance of OrdersInStoreRefundLineItemRequest
        newOrdersInStoreRefundLineItemRequest(): ShoppingContent.Schema.OrdersInStoreRefundLineItemRequest;
        // Create a new instance of OrdersRefundRequest
        newOrdersRefundRequest(): ShoppingContent.Schema.OrdersRefundRequest;
        // Create a new instance of OrdersRejectReturnLineItemRequest
        newOrdersRejectReturnLineItemRequest(): ShoppingContent.Schema.OrdersRejectReturnLineItemRequest;
        // Create a new instance of OrdersReturnLineItemRequest
        newOrdersReturnLineItemRequest(): ShoppingContent.Schema.OrdersReturnLineItemRequest;
        // Create a new instance of OrdersReturnRefundLineItemRequest
        newOrdersReturnRefundLineItemRequest(): ShoppingContent.Schema.OrdersReturnRefundLineItemRequest;
        // Create a new instance of OrdersSetLineItemMetadataRequest
        newOrdersSetLineItemMetadataRequest(): ShoppingContent.Schema.OrdersSetLineItemMetadataRequest;
        // Create a new instance of OrdersShipLineItemsRequest
        newOrdersShipLineItemsRequest(): ShoppingContent.Schema.OrdersShipLineItemsRequest;
        // Create a new instance of OrdersUpdateLineItemShippingDetailsRequest
        newOrdersUpdateLineItemShippingDetailsRequest(): ShoppingContent.Schema.OrdersUpdateLineItemShippingDetailsRequest;
        // Create a new instance of OrdersUpdateMerchantOrderIdRequest
        newOrdersUpdateMerchantOrderIdRequest(): ShoppingContent.Schema.OrdersUpdateMerchantOrderIdRequest;
        // Create a new instance of OrdersUpdateShipmentRequest
        newOrdersUpdateShipmentRequest(): ShoppingContent.Schema.OrdersUpdateShipmentRequest;
        // Create a new instance of PickupCarrierService
        newPickupCarrierService(): ShoppingContent.Schema.PickupCarrierService;
        // Create a new instance of PosCustomBatchRequest
        newPosCustomBatchRequest(): ShoppingContent.Schema.PosCustomBatchRequest;
        // Create a new instance of PosCustomBatchRequestEntry
        newPosCustomBatchRequestEntry(): ShoppingContent.Schema.PosCustomBatchRequestEntry;
        // Create a new instance of PosInventory
        newPosInventory(): ShoppingContent.Schema.PosInventory;
        // Create a new instance of PosInventoryRequest
        newPosInventoryRequest(): ShoppingContent.Schema.PosInventoryRequest;
        // Create a new instance of PosSale
        newPosSale(): ShoppingContent.Schema.PosSale;
        // Create a new instance of PosSaleRequest
        newPosSaleRequest(): ShoppingContent.Schema.PosSaleRequest;
        // Create a new instance of PosStore
        newPosStore(): ShoppingContent.Schema.PosStore;
        // Create a new instance of PostalCodeGroup
        newPostalCodeGroup(): ShoppingContent.Schema.PostalCodeGroup;
        // Create a new instance of PostalCodeRange
        newPostalCodeRange(): ShoppingContent.Schema.PostalCodeRange;
        // Create a new instance of Price
        newPrice(): ShoppingContent.Schema.Price;
        // Create a new instance of Product
        newProduct(): ShoppingContent.Schema.Product;
        // Create a new instance of ProductAspect
        newProductAspect(): ShoppingContent.Schema.ProductAspect;
        // Create a new instance of ProductDestination
        newProductDestination(): ShoppingContent.Schema.ProductDestination;
        // Create a new instance of ProductShipping
        newProductShipping(): ShoppingContent.Schema.ProductShipping;
        // Create a new instance of ProductShippingDimension
        newProductShippingDimension(): ShoppingContent.Schema.ProductShippingDimension;
        // Create a new instance of ProductShippingWeight
        newProductShippingWeight(): ShoppingContent.Schema.ProductShippingWeight;
        // Create a new instance of ProductTax
        newProductTax(): ShoppingContent.Schema.ProductTax;
        // Create a new instance of ProductUnitPricingBaseMeasure
        newProductUnitPricingBaseMeasure(): ShoppingContent.Schema.ProductUnitPricingBaseMeasure;
        // Create a new instance of ProductUnitPricingMeasure
        newProductUnitPricingMeasure(): ShoppingContent.Schema.ProductUnitPricingMeasure;
        // Create a new instance of ProductsCustomBatchRequest
        newProductsCustomBatchRequest(): ShoppingContent.Schema.ProductsCustomBatchRequest;
        // Create a new instance of ProductsCustomBatchRequestEntry
        newProductsCustomBatchRequestEntry(): ShoppingContent.Schema.ProductsCustomBatchRequestEntry;
        // Create a new instance of ProductstatusesCustomBatchRequest
        newProductstatusesCustomBatchRequest(): ShoppingContent.Schema.ProductstatusesCustomBatchRequest;
        // Create a new instance of ProductstatusesCustomBatchRequestEntry
        newProductstatusesCustomBatchRequestEntry(): ShoppingContent.Schema.ProductstatusesCustomBatchRequestEntry;
        // Create a new instance of Promotion
        newPromotion(): ShoppingContent.Schema.Promotion;
        // Create a new instance of RateGroup
        newRateGroup(): ShoppingContent.Schema.RateGroup;
        // Create a new instance of Row
        newRow(): ShoppingContent.Schema.Row;
        // Create a new instance of Service
        newService(): ShoppingContent.Schema.Service;
        // Create a new instance of ShipmentInvoice
        newShipmentInvoice(): ShoppingContent.Schema.ShipmentInvoice;
        // Create a new instance of ShipmentInvoiceLineItemInvoice
        newShipmentInvoiceLineItemInvoice(): ShoppingContent.Schema.ShipmentInvoiceLineItemInvoice;
        // Create a new instance of ShippingSettings
        newShippingSettings(): ShoppingContent.Schema.ShippingSettings;
        // Create a new instance of ShippingsettingsCustomBatchRequest
        newShippingsettingsCustomBatchRequest(): ShoppingContent.Schema.ShippingsettingsCustomBatchRequest;
        // Create a new instance of ShippingsettingsCustomBatchRequestEntry
        newShippingsettingsCustomBatchRequestEntry(): ShoppingContent.Schema.ShippingsettingsCustomBatchRequestEntry;
        // Create a new instance of Table
        newTable(): ShoppingContent.Schema.Table;
        // Create a new instance of TestOrder
        newTestOrder(): ShoppingContent.Schema.TestOrder;
        // Create a new instance of TestOrderCustomer
        newTestOrderCustomer(): ShoppingContent.Schema.TestOrderCustomer;
        // Create a new instance of TestOrderCustomerMarketingRightsInfo
        newTestOrderCustomerMarketingRightsInfo(): ShoppingContent.Schema.TestOrderCustomerMarketingRightsInfo;
        // Create a new instance of TestOrderLineItem
        newTestOrderLineItem(): ShoppingContent.Schema.TestOrderLineItem;
        // Create a new instance of TestOrderLineItemProduct
        newTestOrderLineItemProduct(): ShoppingContent.Schema.TestOrderLineItemProduct;
        // Create a new instance of TestOrderPaymentMethod
        newTestOrderPaymentMethod(): ShoppingContent.Schema.TestOrderPaymentMethod;
        // Create a new instance of TransitTable
        newTransitTable(): ShoppingContent.Schema.TransitTable;
        // Create a new instance of TransitTableTransitTimeRow
        newTransitTableTransitTimeRow(): ShoppingContent.Schema.TransitTableTransitTimeRow;
        // Create a new instance of TransitTableTransitTimeRowTransitTimeValue
        newTransitTableTransitTimeRowTransitTimeValue(): ShoppingContent.Schema.TransitTableTransitTimeRowTransitTimeValue;
        // Create a new instance of UnitInvoice
        newUnitInvoice(): ShoppingContent.Schema.UnitInvoice;
        // Create a new instance of UnitInvoiceAdditionalCharge
        newUnitInvoiceAdditionalCharge(): ShoppingContent.Schema.UnitInvoiceAdditionalCharge;
        // Create a new instance of UnitInvoiceTaxLine
        newUnitInvoiceTaxLine(): ShoppingContent.Schema.UnitInvoiceTaxLine;
        // Create a new instance of Value
        newValue(): ShoppingContent.Schema.Value;
        // Create a new instance of Weight
        newWeight(): ShoppingContent.Schema.Weight;
    }
}
declare const ShoppingContent: GoogleAppsScript.ShoppingContent;
