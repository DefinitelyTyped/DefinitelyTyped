// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Content_v2 {
    namespace Collection {
      export interface AccountsCollection {
        // Returns information about the authenticated user.
        authinfo(): Content_v2.Schema.AccountsAuthInfoResponse;
        // Claims the website of a Merchant Center sub-account.
        claimwebsite(merchantId: string, accountId: string): Content_v2.Schema.AccountsClaimWebsiteResponse;
        // Claims the website of a Merchant Center sub-account.
        claimwebsite(merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.AccountsClaimWebsiteResponse;
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch(resource: Schema.AccountsCustomBatchRequest): Content_v2.Schema.AccountsCustomBatchResponse;
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch(resource: Schema.AccountsCustomBatchRequest, optionalArgs: object): Content_v2.Schema.AccountsCustomBatchResponse;
        // Retrieves a Merchant Center account.
        get(merchantId: string, accountId: string): Content_v2.Schema.Account;
        // Creates a Merchant Center sub-account.
        insert(resource: Schema.Account, merchantId: string): Content_v2.Schema.Account;
        // Creates a Merchant Center sub-account.
        insert(resource: Schema.Account, merchantId: string, optionalArgs: object): Content_v2.Schema.Account;
        // Performs an action on a link between a Merchant Center account and another account.
        link(resource: Schema.AccountsLinkRequest, merchantId: string, accountId: string): Content_v2.Schema.AccountsLinkResponse;
        // Lists the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.AccountsListResponse;
        // Lists the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.AccountsListResponse;
        // Updates a Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Account, merchantId: string, accountId: string): Content_v2.Schema.Account;
        // Updates a Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.Account;
        // Deletes a Merchant Center sub-account.
        remove(merchantId: string, accountId: string): void;
        // Deletes a Merchant Center sub-account.
        remove(merchantId: string, accountId: string, optionalArgs: object): void;
        // Updates a Merchant Center account.
        update(resource: Schema.Account, merchantId: string, accountId: string): Content_v2.Schema.Account;
        // Updates a Merchant Center account.
        update(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.Account;
      }
      export interface AccountstatusesCollection {
        // Retrieves multiple Merchant Center account statuses in a single request.
        custombatch(resource: Schema.AccountstatusesCustomBatchRequest): Content_v2.Schema.AccountstatusesCustomBatchResponse;
        // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
        get(merchantId: string, accountId: string): Content_v2.Schema.AccountStatus;
        // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
        get(merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.AccountStatus;
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.AccountstatusesListResponse;
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.AccountstatusesListResponse;
      }
      export interface AccounttaxCollection {
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch(resource: Schema.AccounttaxCustomBatchRequest): Content_v2.Schema.AccounttaxCustomBatchResponse;
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch(resource: Schema.AccounttaxCustomBatchRequest, optionalArgs: object): Content_v2.Schema.AccounttaxCustomBatchResponse;
        // Retrieves the tax settings of the account.
        get(merchantId: string, accountId: string): Content_v2.Schema.AccountTax;
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.AccounttaxListResponse;
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.AccounttaxListResponse;
        // Updates the tax settings of the account. This method supports patch semantics.
        patch(resource: Schema.AccountTax, merchantId: string, accountId: string): Content_v2.Schema.AccountTax;
        // Updates the tax settings of the account. This method supports patch semantics.
        patch(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.AccountTax;
        // Updates the tax settings of the account.
        update(resource: Schema.AccountTax, merchantId: string, accountId: string): Content_v2.Schema.AccountTax;
        // Updates the tax settings of the account.
        update(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.AccountTax;
      }
      export interface DatafeedsCollection {
        // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        custombatch(resource: Schema.DatafeedsCustomBatchRequest): Content_v2.Schema.DatafeedsCustomBatchResponse;
        // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        custombatch(resource: Schema.DatafeedsCustomBatchRequest, optionalArgs: object): Content_v2.Schema.DatafeedsCustomBatchResponse;
        // Invokes a fetch for the datafeed in your Merchant Center account.
        fetchnow(merchantId: string, datafeedId: string): Content_v2.Schema.DatafeedsFetchNowResponse;
        // Invokes a fetch for the datafeed in your Merchant Center account.
        fetchnow(merchantId: string, datafeedId: string, optionalArgs: object): Content_v2.Schema.DatafeedsFetchNowResponse;
        // Retrieves a datafeed configuration from your Merchant Center account.
        get(merchantId: string, datafeedId: string): Content_v2.Schema.Datafeed;
        // Registers a datafeed configuration with your Merchant Center account.
        insert(resource: Schema.Datafeed, merchantId: string): Content_v2.Schema.Datafeed;
        // Registers a datafeed configuration with your Merchant Center account.
        insert(resource: Schema.Datafeed, merchantId: string, optionalArgs: object): Content_v2.Schema.Datafeed;
        // Lists the configurations for datafeeds in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.DatafeedsListResponse;
        // Lists the configurations for datafeeds in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.DatafeedsListResponse;
        // Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Content_v2.Schema.Datafeed;
        // Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Content_v2.Schema.Datafeed;
        // Deletes a datafeed configuration from your Merchant Center account.
        remove(merchantId: string, datafeedId: string): void;
        // Deletes a datafeed configuration from your Merchant Center account.
        remove(merchantId: string, datafeedId: string, optionalArgs: object): void;
        // Updates a datafeed configuration of your Merchant Center account.
        update(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Content_v2.Schema.Datafeed;
        // Updates a datafeed configuration of your Merchant Center account.
        update(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Content_v2.Schema.Datafeed;
      }
      export interface DatafeedstatusesCollection {
        // Gets multiple Merchant Center datafeed statuses in a single request.
        custombatch(resource: Schema.DatafeedstatusesCustomBatchRequest): Content_v2.Schema.DatafeedstatusesCustomBatchResponse;
        // Retrieves the status of a datafeed from your Merchant Center account.
        get(merchantId: string, datafeedId: string): Content_v2.Schema.DatafeedStatus;
        // Retrieves the status of a datafeed from your Merchant Center account.
        get(merchantId: string, datafeedId: string, optionalArgs: object): Content_v2.Schema.DatafeedStatus;
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.DatafeedstatusesListResponse;
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.DatafeedstatusesListResponse;
      }
      export interface InventoryCollection {
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch(resource: Schema.InventoryCustomBatchRequest): Content_v2.Schema.InventoryCustomBatchResponse;
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch(resource: Schema.InventoryCustomBatchRequest, optionalArgs: object): Content_v2.Schema.InventoryCustomBatchResponse;
        // Updates price and availability of a product in your Merchant Center account.
        set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string): Content_v2.Schema.InventorySetResponse;
        // Updates price and availability of a product in your Merchant Center account.
        set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string, optionalArgs: object): Content_v2.Schema.InventorySetResponse;
      }
      export interface LiasettingsCollection {
        // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        custombatch(resource: Schema.LiasettingsCustomBatchRequest): Content_v2.Schema.LiasettingsCustomBatchResponse;
        // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        custombatch(resource: Schema.LiasettingsCustomBatchRequest, optionalArgs: object): Content_v2.Schema.LiasettingsCustomBatchResponse;
        // Retrieves the LIA settings of the account.
        get(merchantId: string, accountId: string): Content_v2.Schema.LiaSettings;
        // Retrieves the list of accessible Google My Business accounts.
        getaccessiblegmbaccounts(merchantId: string, accountId: string): Content_v2.Schema.LiasettingsGetAccessibleGmbAccountsResponse;
        // Lists the LIA settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.LiasettingsListResponse;
        // Lists the LIA settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.LiasettingsListResponse;
        // Retrieves the list of POS data providers that have active settings for the all eiligible countries.
        listposdataproviders(): Content_v2.Schema.LiasettingsListPosDataProvidersResponse;
        // Updates the LIA settings of the account. This method supports patch semantics.
        patch(resource: Schema.LiaSettings, merchantId: string, accountId: string): Content_v2.Schema.LiaSettings;
        // Updates the LIA settings of the account. This method supports patch semantics.
        patch(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.LiaSettings;
        // Requests access to a specified Google My Business account.
        requestgmbaccess(merchantId: string, accountId: string, gmbEmail: string): Content_v2.Schema.LiasettingsRequestGmbAccessResponse;
        // Requests inventory validation for the specified country.
        requestinventoryverification(merchantId: string, accountId: string, country: string): Content_v2.Schema.LiasettingsRequestInventoryVerificationResponse;
        // Sets the inventory verification contract for the specified country.
        setinventoryverificationcontact(merchantId: string, accountId: string, contactEmail: string, contactName: string, country: string, language: string): Content_v2.Schema.LiasettingsSetInventoryVerificationContactResponse;
        // Sets the POS data provider for the specified country.
        setposdataprovider(merchantId: string, accountId: string, country: string): Content_v2.Schema.LiasettingsSetPosDataProviderResponse;
        // Sets the POS data provider for the specified country.
        setposdataprovider(merchantId: string, accountId: string, country: string, optionalArgs: object): Content_v2.Schema.LiasettingsSetPosDataProviderResponse;
        // Updates the LIA settings of the account.
        update(resource: Schema.LiaSettings, merchantId: string, accountId: string): Content_v2.Schema.LiaSettings;
        // Updates the LIA settings of the account.
        update(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.LiaSettings;
      }
      export interface OrderinvoicesCollection {
        // Creates a charge invoice for a shipment group, and triggers a charge capture for non-facilitated payment orders.
        createchargeinvoice(resource: Schema.OrderinvoicesCreateChargeInvoiceRequest, merchantId: string, orderId: string): Content_v2.Schema.OrderinvoicesCreateChargeInvoiceResponse;
        // Creates a refund invoice for one or more shipment groups, and triggers a refund for non-facilitated payment orders. This can only be used for line items that have previously been charged using createChargeInvoice. All amounts (except for the summary) are incremental with respect to the previous invoice.
        createrefundinvoice(resource: Schema.OrderinvoicesCreateRefundInvoiceRequest, merchantId: string, orderId: string): Content_v2.Schema.OrderinvoicesCreateRefundInvoiceResponse;
      }
      export interface OrderpaymentsCollection {
        // Notify about successfully authorizing user's payment method for a given amount.
        notifyauthapproved(resource: Schema.OrderpaymentsNotifyAuthApprovedRequest, merchantId: string, orderId: string): Content_v2.Schema.OrderpaymentsNotifyAuthApprovedResponse;
        // Notify about failure to authorize user's payment method.
        notifyauthdeclined(resource: Schema.OrderpaymentsNotifyAuthDeclinedRequest, merchantId: string, orderId: string): Content_v2.Schema.OrderpaymentsNotifyAuthDeclinedResponse;
        // Notify about charge on user's selected payments method.
        notifycharge(resource: Schema.OrderpaymentsNotifyChargeRequest, merchantId: string, orderId: string): Content_v2.Schema.OrderpaymentsNotifyChargeResponse;
        // Notify about refund on user's selected payments method.
        notifyrefund(resource: Schema.OrderpaymentsNotifyRefundRequest, merchantId: string, orderId: string): Content_v2.Schema.OrderpaymentsNotifyRefundResponse;
      }
      export interface OrderreportsCollection {
        // Retrieves a report for disbursements from your Merchant Center account.
        listdisbursements(merchantId: string, disbursementStartDate: string): Content_v2.Schema.OrderreportsListDisbursementsResponse;
        // Retrieves a report for disbursements from your Merchant Center account.
        listdisbursements(merchantId: string, disbursementStartDate: string, optionalArgs: object): Content_v2.Schema.OrderreportsListDisbursementsResponse;
        // Retrieves a list of transactions for a disbursement from your Merchant Center account.
        listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string): Content_v2.Schema.OrderreportsListTransactionsResponse;
        // Retrieves a list of transactions for a disbursement from your Merchant Center account.
        listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string, optionalArgs: object): Content_v2.Schema.OrderreportsListTransactionsResponse;
      }
      export interface OrderreturnsCollection {
        // Retrieves an order return from your Merchant Center account.
        get(merchantId: string, returnId: string): Content_v2.Schema.MerchantOrderReturn;
        // Lists order returns in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.OrderreturnsListResponse;
        // Lists order returns in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.OrderreturnsListResponse;
      }
      export interface OrdersCollection {
        // Marks an order as acknowledged.
        acknowledge(resource: Schema.OrdersAcknowledgeRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersAcknowledgeResponse;
        // Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".
        advancetestorder(merchantId: string, orderId: string): Content_v2.Schema.OrdersAdvanceTestOrderResponse;
        // Cancels all line items in an order, making a full refund.
        cancel(resource: Schema.OrdersCancelRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersCancelResponse;
        // Cancels a line item, making a full refund.
        cancellineitem(resource: Schema.OrdersCancelLineItemRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersCancelLineItemResponse;
        // Sandbox only. Cancels a test order for customer-initiated cancellation.
        canceltestorderbycustomer(resource: Schema.OrdersCancelTestOrderByCustomerRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersCancelTestOrderByCustomerResponse;
        // Sandbox only. Creates a test order.
        createtestorder(resource: Schema.OrdersCreateTestOrderRequest, merchantId: string): Content_v2.Schema.OrdersCreateTestOrderResponse;
        // Sandbox only. Creates a test return.
        createtestreturn(resource: Schema.OrdersCreateTestReturnRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersCreateTestReturnResponse;
        // Retrieves or modifies multiple orders in a single request.
        custombatch(resource: Schema.OrdersCustomBatchRequest): Content_v2.Schema.OrdersCustomBatchResponse;
        // Retrieves an order from your Merchant Center account.
        get(merchantId: string, orderId: string): Content_v2.Schema.Order;
        // Retrieves an order using merchant order ID.
        getbymerchantorderid(merchantId: string, merchantOrderId: string): Content_v2.Schema.OrdersGetByMerchantOrderIdResponse;
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate(merchantId: string, templateName: string): Content_v2.Schema.OrdersGetTestOrderTemplateResponse;
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate(merchantId: string, templateName: string, optionalArgs: object): Content_v2.Schema.OrdersGetTestOrderTemplateResponse;
        // Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store).
        // Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
        instorerefundlineitem(resource: Schema.OrdersInStoreRefundLineItemRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersInStoreRefundLineItemResponse;
        // Lists the orders in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.OrdersListResponse;
        // Lists the orders in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.OrdersListResponse;
        // Deprecated, please use returnRefundLineItem instead.
        refund(resource: Schema.OrdersRefundRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersRefundResponse;
        // Rejects return on an line item.
        rejectreturnlineitem(resource: Schema.OrdersRejectReturnLineItemRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersRejectReturnLineItemResponse;
        // Returns a line item.
        returnlineitem(resource: Schema.OrdersReturnLineItemRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersReturnLineItemResponse;
        // Returns and refunds a line item. Note that this method can only be called on fully shipped orders.
        returnrefundlineitem(resource: Schema.OrdersReturnRefundLineItemRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersReturnRefundLineItemResponse;
        // Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
        setlineitemmetadata(resource: Schema.OrdersSetLineItemMetadataRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersSetLineItemMetadataResponse;
        // Marks line item(s) as shipped.
        shiplineitems(resource: Schema.OrdersShipLineItemsRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersShipLineItemsResponse;
        // Updates ship by and delivery by dates for a line item.
        updatelineitemshippingdetails(resource: Schema.OrdersUpdateLineItemShippingDetailsRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersUpdateLineItemShippingDetailsResponse;
        // Updates the merchant order ID for a given order.
        updatemerchantorderid(resource: Schema.OrdersUpdateMerchantOrderIdRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersUpdateMerchantOrderIdResponse;
        // Updates a shipment's status, carrier, and/or tracking ID.
        updateshipment(resource: Schema.OrdersUpdateShipmentRequest, merchantId: string, orderId: string): Content_v2.Schema.OrdersUpdateShipmentResponse;
      }
      export interface PosCollection {
        // Batches multiple POS-related calls in a single request.
        custombatch(resource: Schema.PosCustomBatchRequest): Content_v2.Schema.PosCustomBatchResponse;
        // Batches multiple POS-related calls in a single request.
        custombatch(resource: Schema.PosCustomBatchRequest, optionalArgs: object): Content_v2.Schema.PosCustomBatchResponse;
        // Retrieves information about the given store.
        get(merchantId: string, targetMerchantId: string, storeCode: string): Content_v2.Schema.PosStore;
        // Creates a store for the given merchant.
        insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string): Content_v2.Schema.PosStore;
        // Creates a store for the given merchant.
        insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string, optionalArgs: object): Content_v2.Schema.PosStore;
        // Submit inventory for the given merchant.
        inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string): Content_v2.Schema.PosInventoryResponse;
        // Submit inventory for the given merchant.
        inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Content_v2.Schema.PosInventoryResponse;
        // Lists the stores of the target merchant.
        list(merchantId: string, targetMerchantId: string): Content_v2.Schema.PosListResponse;
        // Deletes a store for the given merchant.
        remove(merchantId: string, targetMerchantId: string, storeCode: string): void;
        // Deletes a store for the given merchant.
        remove(merchantId: string, targetMerchantId: string, storeCode: string, optionalArgs: object): void;
        // Submit a sale event for the given merchant.
        sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string): Content_v2.Schema.PosSaleResponse;
        // Submit a sale event for the given merchant.
        sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Content_v2.Schema.PosSaleResponse;
      }
      export interface ProductsCollection {
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch(resource: Schema.ProductsCustomBatchRequest): Content_v2.Schema.ProductsCustomBatchResponse;
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch(resource: Schema.ProductsCustomBatchRequest, optionalArgs: object): Content_v2.Schema.ProductsCustomBatchResponse;
        // Retrieves a product from your Merchant Center account.
        get(merchantId: string, productId: string): Content_v2.Schema.Product;
        // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
        insert(resource: Schema.Product, merchantId: string): Content_v2.Schema.Product;
        // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
        insert(resource: Schema.Product, merchantId: string, optionalArgs: object): Content_v2.Schema.Product;
        // Lists the products in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.ProductsListResponse;
        // Lists the products in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.ProductsListResponse;
        // Deletes a product from your Merchant Center account.
        remove(merchantId: string, productId: string): void;
        // Deletes a product from your Merchant Center account.
        remove(merchantId: string, productId: string, optionalArgs: object): void;
      }
      export interface ProductstatusesCollection {
        // Gets the statuses of multiple products in a single request.
        custombatch(resource: Schema.ProductstatusesCustomBatchRequest): Content_v2.Schema.ProductstatusesCustomBatchResponse;
        // Gets the statuses of multiple products in a single request.
        custombatch(resource: Schema.ProductstatusesCustomBatchRequest, optionalArgs: object): Content_v2.Schema.ProductstatusesCustomBatchResponse;
        // Gets the status of a product from your Merchant Center account.
        get(merchantId: string, productId: string): Content_v2.Schema.ProductStatus;
        // Gets the status of a product from your Merchant Center account.
        get(merchantId: string, productId: string, optionalArgs: object): Content_v2.Schema.ProductStatus;
        // Lists the statuses of the products in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.ProductstatusesListResponse;
        // Lists the statuses of the products in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.ProductstatusesListResponse;
      }
      export interface ShippingsettingsCollection {
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch(resource: Schema.ShippingsettingsCustomBatchRequest): Content_v2.Schema.ShippingsettingsCustomBatchResponse;
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch(resource: Schema.ShippingsettingsCustomBatchRequest, optionalArgs: object): Content_v2.Schema.ShippingsettingsCustomBatchResponse;
        // Retrieves the shipping settings of the account.
        get(merchantId: string, accountId: string): Content_v2.Schema.ShippingSettings;
        // Retrieves supported carriers and carrier services for an account.
        getsupportedcarriers(merchantId: string): Content_v2.Schema.ShippingsettingsGetSupportedCarriersResponse;
        // Retrieves supported holidays for an account.
        getsupportedholidays(merchantId: string): Content_v2.Schema.ShippingsettingsGetSupportedHolidaysResponse;
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content_v2.Schema.ShippingsettingsListResponse;
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content_v2.Schema.ShippingsettingsListResponse;
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Content_v2.Schema.ShippingSettings;
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.ShippingSettings;
        // Updates the shipping settings of the account.
        update(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Content_v2.Schema.ShippingSettings;
        // Updates the shipping settings of the account.
        update(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Content_v2.Schema.ShippingSettings;
      }
    }
    namespace Schema {
      export interface Account {
        adultContent?: boolean;
        adwordsLinks?: Content_v2.Schema.AccountAdwordsLink[];
        businessInformation?: Content_v2.Schema.AccountBusinessInformation;
        googleMyBusinessLink?: Content_v2.Schema.AccountGoogleMyBusinessLink;
        id?: string;
        kind?: string;
        name?: string;
        reviewsUrl?: string;
        sellerId?: string;
        users?: Content_v2.Schema.AccountUser[];
        websiteUrl?: string;
        youtubeChannelLinks?: Content_v2.Schema.AccountYouTubeChannelLink[];
      }
      export interface AccountAddress {
        country?: string;
        locality?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
      }
      export interface AccountAdwordsLink {
        adwordsId?: string;
        status?: string;
      }
      export interface AccountBusinessInformation {
        address?: Content_v2.Schema.AccountAddress;
        customerService?: Content_v2.Schema.AccountCustomerService;
        phoneNumber?: string;
      }
      export interface AccountCustomerService {
        email?: string;
        phoneNumber?: string;
        url?: string;
      }
      export interface AccountGoogleMyBusinessLink {
        gmbEmail?: string;
        status?: string;
      }
      export interface AccountIdentifier {
        aggregatorId?: string;
        merchantId?: string;
      }
      export interface AccountStatus {
        accountId?: string;
        accountLevelIssues?: Content_v2.Schema.AccountStatusAccountLevelIssue[];
        dataQualityIssues?: Content_v2.Schema.AccountStatusDataQualityIssue[];
        kind?: string;
        products?: Content_v2.Schema.AccountStatusProducts[];
        websiteClaimed?: boolean;
      }
      export interface AccountStatusAccountLevelIssue {
        country?: string;
        destination?: string;
        detail?: string;
        documentation?: string;
        id?: string;
        severity?: string;
        title?: string;
      }
      export interface AccountStatusDataQualityIssue {
        country?: string;
        destination?: string;
        detail?: string;
        displayedValue?: string;
        exampleItems?: Content_v2.Schema.AccountStatusExampleItem[];
        id?: string;
        lastChecked?: string;
        location?: string;
        numItems?: number;
        severity?: string;
        submittedValue?: string;
      }
      export interface AccountStatusExampleItem {
        itemId?: string;
        link?: string;
        submittedValue?: string;
        title?: string;
        valueOnLandingPage?: string;
      }
      export interface AccountStatusItemLevelIssue {
        attributeName?: string;
        code?: string;
        description?: string;
        detail?: string;
        documentation?: string;
        numItems?: string;
        resolution?: string;
        servability?: string;
      }
      export interface AccountStatusProducts {
        channel?: string;
        country?: string;
        destination?: string;
        itemLevelIssues?: Content_v2.Schema.AccountStatusItemLevelIssue[];
        statistics?: Content_v2.Schema.AccountStatusStatistics;
      }
      export interface AccountStatusStatistics {
        active?: string;
        disapproved?: string;
        expiring?: string;
        pending?: string;
      }
      export interface AccountTax {
        accountId?: string;
        kind?: string;
        rules?: Content_v2.Schema.AccountTaxTaxRule[];
      }
      export interface AccountTaxTaxRule {
        country?: string;
        locationId?: string;
        ratePercent?: string;
        shippingTaxed?: boolean;
        useGlobalRate?: boolean;
      }
      export interface AccountUser {
        admin?: boolean;
        emailAddress?: string;
        orderManager?: boolean;
        paymentsAnalyst?: boolean;
        paymentsManager?: boolean;
      }
      export interface AccountYouTubeChannelLink {
        channelId?: string;
        status?: string;
      }
      export interface AccountsAuthInfoResponse {
        accountIdentifiers?: Content_v2.Schema.AccountIdentifier[];
        kind?: string;
      }
      export interface AccountsClaimWebsiteResponse {
        kind?: string;
      }
      export interface AccountsCustomBatchRequest {
        entries?: Content_v2.Schema.AccountsCustomBatchRequestEntry[];
      }
      export interface AccountsCustomBatchRequestEntry {
        account?: Content_v2.Schema.Account;
        accountId?: string;
        batchId?: number;
        force?: boolean;
        linkRequest?: Content_v2.Schema.AccountsCustomBatchRequestEntryLinkRequest;
        merchantId?: string;
        method?: string;
        overwrite?: boolean;
      }
      export interface AccountsCustomBatchRequestEntryLinkRequest {
        action?: string;
        linkType?: string;
        linkedAccountId?: string;
      }
      export interface AccountsCustomBatchResponse {
        entries?: Content_v2.Schema.AccountsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface AccountsCustomBatchResponseEntry {
        account?: Content_v2.Schema.Account;
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        kind?: string;
        linkStatus?: string;
      }
      export interface AccountsLinkRequest {
        action?: string;
        linkType?: string;
        linkedAccountId?: string;
      }
      export interface AccountsLinkResponse {
        kind?: string;
      }
      export interface AccountsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.Account[];
      }
      export interface AccountstatusesCustomBatchRequest {
        entries?: Content_v2.Schema.AccountstatusesCustomBatchRequestEntry[];
      }
      export interface AccountstatusesCustomBatchRequestEntry {
        accountId?: string;
        batchId?: number;
        destinations?: string[];
        merchantId?: string;
        method?: string;
      }
      export interface AccountstatusesCustomBatchResponse {
        entries?: Content_v2.Schema.AccountstatusesCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface AccountstatusesCustomBatchResponseEntry {
        accountStatus?: Content_v2.Schema.AccountStatus;
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
      }
      export interface AccountstatusesListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.AccountStatus[];
      }
      export interface AccounttaxCustomBatchRequest {
        entries?: Content_v2.Schema.AccounttaxCustomBatchRequestEntry[];
      }
      export interface AccounttaxCustomBatchRequestEntry {
        accountId?: string;
        accountTax?: Content_v2.Schema.AccountTax;
        batchId?: number;
        merchantId?: string;
        method?: string;
      }
      export interface AccounttaxCustomBatchResponse {
        entries?: Content_v2.Schema.AccounttaxCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface AccounttaxCustomBatchResponseEntry {
        accountTax?: Content_v2.Schema.AccountTax;
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        kind?: string;
      }
      export interface AccounttaxListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.AccountTax[];
      }
      export interface Amount {
        pretax?: Content_v2.Schema.Price;
        tax?: Content_v2.Schema.Price;
      }
      export interface CarrierRate {
        carrierName?: string;
        carrierService?: string;
        flatAdjustment?: Content_v2.Schema.Price;
        name?: string;
        originPostalCode?: string;
        percentageAdjustment?: string;
      }
      export interface CarriersCarrier {
        country?: string;
        name?: string;
        services?: string[];
      }
      export interface CustomAttribute {
        name?: string;
        type?: string;
        unit?: string;
        value?: string;
      }
      export interface CustomGroup {
        attributes?: Content_v2.Schema.CustomAttribute[];
        name?: string;
      }
      export interface CustomerReturnReason {
        description?: string;
        reasonCode?: string;
      }
      export interface CutoffTime {
        hour?: number;
        minute?: number;
        timezone?: string;
      }
      export interface Datafeed {
        attributeLanguage?: string;
        contentLanguage?: string;
        contentType?: string;
        fetchSchedule?: Content_v2.Schema.DatafeedFetchSchedule;
        fileName?: string;
        format?: Content_v2.Schema.DatafeedFormat;
        id?: string;
        intendedDestinations?: string[];
        kind?: string;
        name?: string;
        targetCountry?: string;
        targets?: Content_v2.Schema.DatafeedTarget[];
      }
      export interface DatafeedFetchSchedule {
        dayOfMonth?: number;
        fetchUrl?: string;
        hour?: number;
        minuteOfHour?: number;
        password?: string;
        paused?: boolean;
        timeZone?: string;
        username?: string;
        weekday?: string;
      }
      export interface DatafeedFormat {
        columnDelimiter?: string;
        fileEncoding?: string;
        quotingMode?: string;
      }
      export interface DatafeedStatus {
        country?: string;
        datafeedId?: string;
        errors?: Content_v2.Schema.DatafeedStatusError[];
        itemsTotal?: string;
        itemsValid?: string;
        kind?: string;
        language?: string;
        lastUploadDate?: string;
        processingStatus?: string;
        warnings?: Content_v2.Schema.DatafeedStatusError[];
      }
      export interface DatafeedStatusError {
        code?: string;
        count?: string;
        examples?: Content_v2.Schema.DatafeedStatusExample[];
        message?: string;
      }
      export interface DatafeedStatusExample {
        itemId?: string;
        lineNumber?: string;
        value?: string;
      }
      export interface DatafeedTarget {
        country?: string;
        excludedDestinations?: string[];
        includedDestinations?: string[];
        language?: string;
      }
      export interface DatafeedsCustomBatchRequest {
        entries?: Content_v2.Schema.DatafeedsCustomBatchRequestEntry[];
      }
      export interface DatafeedsCustomBatchRequestEntry {
        batchId?: number;
        datafeed?: Content_v2.Schema.Datafeed;
        datafeedId?: string;
        merchantId?: string;
        method?: string;
      }
      export interface DatafeedsCustomBatchResponse {
        entries?: Content_v2.Schema.DatafeedsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface DatafeedsCustomBatchResponseEntry {
        batchId?: number;
        datafeed?: Content_v2.Schema.Datafeed;
        errors?: Content_v2.Schema.Errors;
      }
      export interface DatafeedsFetchNowResponse {
        kind?: string;
      }
      export interface DatafeedsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.Datafeed[];
      }
      export interface DatafeedstatusesCustomBatchRequest {
        entries?: Content_v2.Schema.DatafeedstatusesCustomBatchRequestEntry[];
      }
      export interface DatafeedstatusesCustomBatchRequestEntry {
        batchId?: number;
        country?: string;
        datafeedId?: string;
        language?: string;
        merchantId?: string;
        method?: string;
      }
      export interface DatafeedstatusesCustomBatchResponse {
        entries?: Content_v2.Schema.DatafeedstatusesCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface DatafeedstatusesCustomBatchResponseEntry {
        batchId?: number;
        datafeedStatus?: Content_v2.Schema.DatafeedStatus;
        errors?: Content_v2.Schema.Errors;
      }
      export interface DatafeedstatusesListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.DatafeedStatus[];
      }
      export interface DeliveryTime {
        cutoffTime?: Content_v2.Schema.CutoffTime;
        holidayCutoffs?: Content_v2.Schema.HolidayCutoff[];
        maxHandlingTimeInDays?: number;
        maxTransitTimeInDays?: number;
        minHandlingTimeInDays?: number;
        minTransitTimeInDays?: number;
        transitTimeTable?: Content_v2.Schema.TransitTable;
      }
      export interface Error {
        domain?: string;
        message?: string;
        reason?: string;
      }
      export interface Errors {
        code?: number;
        errors?: Content_v2.Schema.Error[];
        message?: string;
      }
      export interface GmbAccounts {
        accountId?: string;
        gmbAccounts?: Content_v2.Schema.GmbAccountsGmbAccount[];
      }
      export interface GmbAccountsGmbAccount {
        email?: string;
        listingCount?: string;
        name?: string;
        type?: string;
      }
      export interface Headers {
        locations?: Content_v2.Schema.LocationIdSet[];
        numberOfItems?: string[];
        postalCodeGroupNames?: string[];
        prices?: Content_v2.Schema.Price[];
        weights?: Content_v2.Schema.Weight[];
      }
      export interface HolidayCutoff {
        deadlineDate?: string;
        deadlineHour?: number;
        deadlineTimezone?: string;
        holidayId?: string;
        visibleFromDate?: string;
      }
      export interface HolidaysHoliday {
        countryCode?: string;
        date?: string;
        deliveryGuaranteeDate?: string;
        deliveryGuaranteeHour?: string;
        id?: string;
        type?: string;
      }
      export interface Installment {
        amount?: Content_v2.Schema.Price;
        months?: string;
      }
      export interface Inventory {
        availability?: string;
        customLabel0?: string;
        customLabel1?: string;
        customLabel2?: string;
        customLabel3?: string;
        customLabel4?: string;
        installment?: Content_v2.Schema.Installment;
        instoreProductLocation?: string;
        kind?: string;
        loyaltyPoints?: Content_v2.Schema.LoyaltyPoints;
        pickup?: Content_v2.Schema.InventoryPickup;
        price?: Content_v2.Schema.Price;
        quantity?: number;
        salePrice?: Content_v2.Schema.Price;
        salePriceEffectiveDate?: string;
        sellOnGoogleQuantity?: number;
      }
      export interface InventoryCustomBatchRequest {
        entries?: Content_v2.Schema.InventoryCustomBatchRequestEntry[];
      }
      export interface InventoryCustomBatchRequestEntry {
        batchId?: number;
        inventory?: Content_v2.Schema.Inventory;
        merchantId?: string;
        productId?: string;
        storeCode?: string;
      }
      export interface InventoryCustomBatchResponse {
        entries?: Content_v2.Schema.InventoryCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface InventoryCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        kind?: string;
      }
      export interface InventoryPickup {
        pickupMethod?: string;
        pickupSla?: string;
      }
      export interface InventorySetRequest {
        availability?: string;
        customLabel0?: string;
        customLabel1?: string;
        customLabel2?: string;
        customLabel3?: string;
        customLabel4?: string;
        installment?: Content_v2.Schema.Installment;
        instoreProductLocation?: string;
        loyaltyPoints?: Content_v2.Schema.LoyaltyPoints;
        pickup?: Content_v2.Schema.InventoryPickup;
        price?: Content_v2.Schema.Price;
        quantity?: number;
        salePrice?: Content_v2.Schema.Price;
        salePriceEffectiveDate?: string;
        sellOnGoogleQuantity?: number;
      }
      export interface InventorySetResponse {
        kind?: string;
      }
      export interface InvoiceSummary {
        additionalChargeSummaries?: Content_v2.Schema.InvoiceSummaryAdditionalChargeSummary[];
        customerBalance?: Content_v2.Schema.Amount;
        googleBalance?: Content_v2.Schema.Amount;
        merchantBalance?: Content_v2.Schema.Amount;
        productTotal?: Content_v2.Schema.Amount;
        promotionSummaries?: Content_v2.Schema.Promotion[];
      }
      export interface InvoiceSummaryAdditionalChargeSummary {
        totalAmount?: Content_v2.Schema.Amount;
        type?: string;
      }
      export interface LiaAboutPageSettings {
        status?: string;
        url?: string;
      }
      export interface LiaCountrySettings {
        about?: Content_v2.Schema.LiaAboutPageSettings;
        country?: string;
        hostedLocalStorefrontActive?: boolean;
        inventory?: Content_v2.Schema.LiaInventorySettings;
        onDisplayToOrder?: Content_v2.Schema.LiaOnDisplayToOrderSettings;
        posDataProvider?: Content_v2.Schema.LiaPosDataProvider;
        storePickupActive?: boolean;
      }
      export interface LiaInventorySettings {
        inventoryVerificationContactEmail?: string;
        inventoryVerificationContactName?: string;
        inventoryVerificationContactStatus?: string;
        status?: string;
      }
      export interface LiaOnDisplayToOrderSettings {
        shippingCostPolicyUrl?: string;
        status?: string;
      }
      export interface LiaPosDataProvider {
        posDataProviderId?: string;
        posExternalAccountId?: string;
      }
      export interface LiaSettings {
        accountId?: string;
        countrySettings?: Content_v2.Schema.LiaCountrySettings[];
        kind?: string;
      }
      export interface LiasettingsCustomBatchRequest {
        entries?: Content_v2.Schema.LiasettingsCustomBatchRequestEntry[];
      }
      export interface LiasettingsCustomBatchRequestEntry {
        accountId?: string;
        batchId?: number;
        contactEmail?: string;
        contactName?: string;
        country?: string;
        gmbEmail?: string;
        liaSettings?: Content_v2.Schema.LiaSettings;
        merchantId?: string;
        method?: string;
        posDataProviderId?: string;
        posExternalAccountId?: string;
      }
      export interface LiasettingsCustomBatchResponse {
        entries?: Content_v2.Schema.LiasettingsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface LiasettingsCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        gmbAccounts?: Content_v2.Schema.GmbAccounts;
        kind?: string;
        liaSettings?: Content_v2.Schema.LiaSettings;
        posDataProviders?: Content_v2.Schema.PosDataProviders[];
      }
      export interface LiasettingsGetAccessibleGmbAccountsResponse {
        accountId?: string;
        gmbAccounts?: Content_v2.Schema.GmbAccountsGmbAccount[];
        kind?: string;
      }
      export interface LiasettingsListPosDataProvidersResponse {
        kind?: string;
        posDataProviders?: Content_v2.Schema.PosDataProviders[];
      }
      export interface LiasettingsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.LiaSettings[];
      }
      export interface LiasettingsRequestGmbAccessResponse {
        kind?: string;
      }
      export interface LiasettingsRequestInventoryVerificationResponse {
        kind?: string;
      }
      export interface LiasettingsSetInventoryVerificationContactResponse {
        kind?: string;
      }
      export interface LiasettingsSetPosDataProviderResponse {
        kind?: string;
      }
      export interface LocationIdSet {
        locationIds?: string[];
      }
      export interface LoyaltyPoints {
        name?: string;
        pointsValue?: string;
        ratio?: Number;
      }
      export interface MerchantOrderReturn {
        creationDate?: string;
        merchantOrderId?: string;
        orderId?: string;
        orderReturnId?: string;
        returnItems?: Content_v2.Schema.MerchantOrderReturnItem[];
        returnShipments?: Content_v2.Schema.ReturnShipment[];
      }
      export interface MerchantOrderReturnItem {
        customerReturnReason?: Content_v2.Schema.CustomerReturnReason;
        itemId?: string;
        merchantReturnReason?: Content_v2.Schema.RefundReason;
        product?: Content_v2.Schema.OrderLineItemProduct;
        returnShipmentIds?: string[];
        state?: string;
      }
      export interface Order {
        acknowledged?: boolean;
        channelType?: string;
        customer?: Content_v2.Schema.OrderCustomer;
        deliveryDetails?: Content_v2.Schema.OrderDeliveryDetails;
        id?: string;
        kind?: string;
        lineItems?: Content_v2.Schema.OrderLineItem[];
        merchantId?: string;
        merchantOrderId?: string;
        netAmount?: Content_v2.Schema.Price;
        paymentMethod?: Content_v2.Schema.OrderPaymentMethod;
        paymentStatus?: string;
        placedDate?: string;
        promotions?: Content_v2.Schema.OrderLegacyPromotion[];
        refunds?: Content_v2.Schema.OrderRefund[];
        shipments?: Content_v2.Schema.OrderShipment[];
        shippingCost?: Content_v2.Schema.Price;
        shippingCostTax?: Content_v2.Schema.Price;
        shippingOption?: string;
        status?: string;
        taxCollector?: string;
      }
      export interface OrderAddress {
        country?: string;
        fullAddress?: string[];
        isPostOfficeBox?: boolean;
        locality?: string;
        postalCode?: string;
        recipientName?: string;
        region?: string;
        streetAddress?: string[];
      }
      export interface OrderCancellation {
        actor?: string;
        creationDate?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrderCustomer {
        email?: string;
        explicitMarketingPreference?: boolean;
        fullName?: string;
        marketingRightsInfo?: Content_v2.Schema.OrderCustomerMarketingRightsInfo;
      }
      export interface OrderCustomerMarketingRightsInfo {
        explicitMarketingPreference?: string;
        lastUpdatedTimestamp?: string;
        marketingEmailAddress?: string;
      }
      export interface OrderDeliveryDetails {
        address?: Content_v2.Schema.OrderAddress;
        phoneNumber?: string;
      }
      export interface OrderLegacyPromotion {
        benefits?: Content_v2.Schema.OrderLegacyPromotionBenefit[];
        effectiveDates?: string;
        genericRedemptionCode?: string;
        id?: string;
        longTitle?: string;
        productApplicability?: string;
        redemptionChannel?: string;
      }
      export interface OrderLegacyPromotionBenefit {
        discount?: Content_v2.Schema.Price;
        offerIds?: string[];
        subType?: string;
        taxImpact?: Content_v2.Schema.Price;
        type?: string;
      }
      export interface OrderLineItem {
        annotations?: Content_v2.Schema.OrderMerchantProvidedAnnotation[];
        cancellations?: Content_v2.Schema.OrderCancellation[];
        id?: string;
        price?: Content_v2.Schema.Price;
        product?: Content_v2.Schema.OrderLineItemProduct;
        quantityCanceled?: number;
        quantityDelivered?: number;
        quantityOrdered?: number;
        quantityPending?: number;
        quantityReturned?: number;
        quantityShipped?: number;
        returnInfo?: Content_v2.Schema.OrderLineItemReturnInfo;
        returns?: Content_v2.Schema.OrderReturn[];
        shippingDetails?: Content_v2.Schema.OrderLineItemShippingDetails;
        tax?: Content_v2.Schema.Price;
      }
      export interface OrderLineItemProduct {
        brand?: string;
        channel?: string;
        condition?: string;
        contentLanguage?: string;
        fees?: Content_v2.Schema.OrderLineItemProductFee[];
        gtin?: string;
        id?: string;
        imageLink?: string;
        itemGroupId?: string;
        mpn?: string;
        offerId?: string;
        price?: Content_v2.Schema.Price;
        shownImage?: string;
        targetCountry?: string;
        title?: string;
        variantAttributes?: Content_v2.Schema.OrderLineItemProductVariantAttribute[];
      }
      export interface OrderLineItemProductFee {
        amount?: Content_v2.Schema.Price;
        name?: string;
      }
      export interface OrderLineItemProductVariantAttribute {
        dimension?: string;
        value?: string;
      }
      export interface OrderLineItemReturnInfo {
        daysToReturn?: number;
        isReturnable?: boolean;
        policyUrl?: string;
      }
      export interface OrderLineItemShippingDetails {
        deliverByDate?: string;
        method?: Content_v2.Schema.OrderLineItemShippingDetailsMethod;
        shipByDate?: string;
      }
      export interface OrderLineItemShippingDetailsMethod {
        carrier?: string;
        maxDaysInTransit?: number;
        methodName?: string;
        minDaysInTransit?: number;
      }
      export interface OrderMerchantProvidedAnnotation {
        key?: string;
        value?: string;
      }
      export interface OrderPaymentMethod {
        billingAddress?: Content_v2.Schema.OrderAddress;
        expirationMonth?: number;
        expirationYear?: number;
        lastFourDigits?: string;
        phoneNumber?: string;
        type?: string;
      }
      export interface OrderRefund {
        actor?: string;
        amount?: Content_v2.Schema.Price;
        creationDate?: string;
        reason?: string;
        reasonText?: string;
      }
      export interface OrderReportDisbursement {
        disbursementAmount?: Content_v2.Schema.Price;
        disbursementCreationDate?: string;
        disbursementDate?: string;
        disbursementId?: string;
        merchantId?: string;
      }
      export interface OrderReportTransaction {
        disbursementAmount?: Content_v2.Schema.Price;
        disbursementCreationDate?: string;
        disbursementDate?: string;
        disbursementId?: string;
        merchantId?: string;
        merchantOrderId?: string;
        orderId?: string;
        productAmount?: Content_v2.Schema.Amount;
        productAmountWithRemittedTax?: Content_v2.Schema.ProductAmount;
        transactionDate?: string;
      }
      export interface OrderReturn {
        actor?: string;
        creationDate?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrderShipment {
        carrier?: string;
        creationDate?: string;
        deliveryDate?: string;
        id?: string;
        lineItems?: Content_v2.Schema.OrderShipmentLineItemShipment[];
        status?: string;
        trackingId?: string;
      }
      export interface OrderShipmentLineItemShipment {
        lineItemId?: string;
        productId?: string;
        quantity?: number;
      }
      export interface OrderinvoicesCreateChargeInvoiceRequest {
        invoiceId?: string;
        invoiceSummary?: Content_v2.Schema.InvoiceSummary;
        lineItemInvoices?: Content_v2.Schema.ShipmentInvoiceLineItemInvoice[];
        operationId?: string;
        shipmentGroupId?: string;
      }
      export interface OrderinvoicesCreateChargeInvoiceResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderinvoicesCreateRefundInvoiceRequest {
        invoiceId?: string;
        operationId?: string;
        refundOnlyOption?: Content_v2.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
        returnOption?: Content_v2.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
        shipmentInvoices?: Content_v2.Schema.ShipmentInvoice[];
      }
      export interface OrderinvoicesCreateRefundInvoiceResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
        description?: string;
        reason?: string;
      }
      export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
        description?: string;
        reason?: string;
      }
      export interface OrderpaymentsNotifyAuthApprovedRequest {
        authAmountPretax?: Content_v2.Schema.Price;
        authAmountTax?: Content_v2.Schema.Price;
      }
      export interface OrderpaymentsNotifyAuthApprovedResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderpaymentsNotifyAuthDeclinedRequest {
        declineReason?: string;
      }
      export interface OrderpaymentsNotifyAuthDeclinedResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderpaymentsNotifyChargeRequest {
        chargeState?: string;
        invoiceId?: string;
        invoiceIds?: string[];
      }
      export interface OrderpaymentsNotifyChargeResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderpaymentsNotifyRefundRequest {
        invoiceId?: string;
        invoiceIds?: string[];
        refundState?: string;
      }
      export interface OrderpaymentsNotifyRefundResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderreportsListDisbursementsResponse {
        disbursements?: Content_v2.Schema.OrderReportDisbursement[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface OrderreportsListTransactionsResponse {
        kind?: string;
        nextPageToken?: string;
        transactions?: Content_v2.Schema.OrderReportTransaction[];
      }
      export interface OrderreturnsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.MerchantOrderReturn[];
      }
      export interface OrdersAcknowledgeRequest {
        operationId?: string;
      }
      export interface OrdersAcknowledgeResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersAdvanceTestOrderResponse {
        kind?: string;
      }
      export interface OrdersCancelLineItemRequest {
        amount?: Content_v2.Schema.Price;
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCancelLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersCancelRequest {
        operationId?: string;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCancelResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersCancelTestOrderByCustomerRequest {
        reason?: string;
      }
      export interface OrdersCancelTestOrderByCustomerResponse {
        kind?: string;
      }
      export interface OrdersCreateTestOrderRequest {
        country?: string;
        templateName?: string;
        testOrder?: Content_v2.Schema.TestOrder;
      }
      export interface OrdersCreateTestOrderResponse {
        kind?: string;
        orderId?: string;
      }
      export interface OrdersCreateTestReturnRequest {
        items?: Content_v2.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
      }
      export interface OrdersCreateTestReturnResponse {
        kind?: string;
        returnId?: string;
      }
      export interface OrdersCustomBatchRequest {
        entries?: Content_v2.Schema.OrdersCustomBatchRequestEntry[];
      }
      export interface OrdersCustomBatchRequestEntry {
        batchId?: number;
        cancel?: Content_v2.Schema.OrdersCustomBatchRequestEntryCancel;
        cancelLineItem?: Content_v2.Schema.OrdersCustomBatchRequestEntryCancelLineItem;
        inStoreRefundLineItem?: Content_v2.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
        merchantId?: string;
        merchantOrderId?: string;
        method?: string;
        operationId?: string;
        orderId?: string;
        refund?: Content_v2.Schema.OrdersCustomBatchRequestEntryRefund;
        rejectReturnLineItem?: Content_v2.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
        returnLineItem?: Content_v2.Schema.OrdersCustomBatchRequestEntryReturnLineItem;
        returnRefundLineItem?: Content_v2.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
        setLineItemMetadata?: Content_v2.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
        shipLineItems?: Content_v2.Schema.OrdersCustomBatchRequestEntryShipLineItems;
        updateLineItemShippingDetails?: Content_v2.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
        updateShipment?: Content_v2.Schema.OrdersCustomBatchRequestEntryUpdateShipment;
      }
      export interface OrdersCustomBatchRequestEntryCancel {
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryCancelLineItem {
        amount?: Content_v2.Schema.Price;
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {
        lineItemId?: string;
        quantity?: number;
      }
      export interface OrdersCustomBatchRequestEntryInStoreRefundLineItem {
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryRefund {
        amount?: Content_v2.Schema.Price;
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryRejectReturnLineItem {
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryReturnLineItem {
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryReturnRefundLineItem {
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntrySetLineItemMetadata {
        annotations?: Content_v2.Schema.OrderMerchantProvidedAnnotation[];
        lineItemId?: string;
        productId?: string;
      }
      export interface OrdersCustomBatchRequestEntryShipLineItems {
        carrier?: string;
        lineItems?: Content_v2.Schema.OrderShipmentLineItemShipment[];
        shipmentGroupId?: string;
        shipmentId?: string;
        shipmentInfos?: Content_v2.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
        trackingId?: string;
      }
      export interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
        carrier?: string;
        shipmentId?: string;
        trackingId?: string;
      }
      export interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
        deliverByDate?: string;
        lineItemId?: string;
        productId?: string;
        shipByDate?: string;
      }
      export interface OrdersCustomBatchRequestEntryUpdateShipment {
        carrier?: string;
        deliveryDate?: string;
        shipmentId?: string;
        status?: string;
        trackingId?: string;
      }
      export interface OrdersCustomBatchResponse {
        entries?: Content_v2.Schema.OrdersCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface OrdersCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        executionStatus?: string;
        kind?: string;
        order?: Content_v2.Schema.Order;
      }
      export interface OrdersGetByMerchantOrderIdResponse {
        kind?: string;
        order?: Content_v2.Schema.Order;
      }
      export interface OrdersGetTestOrderTemplateResponse {
        kind?: string;
        template?: Content_v2.Schema.TestOrder;
      }
      export interface OrdersInStoreRefundLineItemRequest {
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersInStoreRefundLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.Order[];
      }
      export interface OrdersRefundRequest {
        amount?: Content_v2.Schema.Price;
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        operationId?: string;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersRefundResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersRejectReturnLineItemRequest {
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersRejectReturnLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersReturnLineItemRequest {
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersReturnLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersReturnRefundLineItemRequest {
        amountPretax?: Content_v2.Schema.Price;
        amountTax?: Content_v2.Schema.Price;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersReturnRefundLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersSetLineItemMetadataRequest {
        annotations?: Content_v2.Schema.OrderMerchantProvidedAnnotation[];
        lineItemId?: string;
        operationId?: string;
        productId?: string;
      }
      export interface OrdersSetLineItemMetadataResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersShipLineItemsRequest {
        carrier?: string;
        lineItems?: Content_v2.Schema.OrderShipmentLineItemShipment[];
        operationId?: string;
        shipmentGroupId?: string;
        shipmentId?: string;
        shipmentInfos?: Content_v2.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
        trackingId?: string;
      }
      export interface OrdersShipLineItemsResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersUpdateLineItemShippingDetailsRequest {
        deliverByDate?: string;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        shipByDate?: string;
      }
      export interface OrdersUpdateLineItemShippingDetailsResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersUpdateMerchantOrderIdRequest {
        merchantOrderId?: string;
        operationId?: string;
      }
      export interface OrdersUpdateMerchantOrderIdResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersUpdateShipmentRequest {
        carrier?: string;
        deliveryDate?: string;
        operationId?: string;
        shipmentId?: string;
        status?: string;
        trackingId?: string;
      }
      export interface OrdersUpdateShipmentResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface PosCustomBatchRequest {
        entries?: Content_v2.Schema.PosCustomBatchRequestEntry[];
      }
      export interface PosCustomBatchRequestEntry {
        batchId?: number;
        inventory?: Content_v2.Schema.PosInventory;
        merchantId?: string;
        method?: string;
        sale?: Content_v2.Schema.PosSale;
        store?: Content_v2.Schema.PosStore;
        storeCode?: string;
        targetMerchantId?: string;
      }
      export interface PosCustomBatchResponse {
        entries?: Content_v2.Schema.PosCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface PosCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        inventory?: Content_v2.Schema.PosInventory;
        kind?: string;
        sale?: Content_v2.Schema.PosSale;
        store?: Content_v2.Schema.PosStore;
      }
      export interface PosDataProviders {
        country?: string;
        posDataProviders?: Content_v2.Schema.PosDataProvidersPosDataProvider[];
      }
      export interface PosDataProvidersPosDataProvider {
        displayName?: string;
        fullName?: string;
        providerId?: string;
      }
      export interface PosInventory {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content_v2.Schema.Price;
        quantity?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosInventoryRequest {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        price?: Content_v2.Schema.Price;
        quantity?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosInventoryResponse {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content_v2.Schema.Price;
        quantity?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosListResponse {
        kind?: string;
        resources?: Content_v2.Schema.PosStore[];
      }
      export interface PosSale {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content_v2.Schema.Price;
        quantity?: string;
        saleId?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosSaleRequest {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        price?: Content_v2.Schema.Price;
        quantity?: string;
        saleId?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosSaleResponse {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content_v2.Schema.Price;
        quantity?: string;
        saleId?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosStore {
        kind?: string;
        storeAddress?: string;
        storeCode?: string;
      }
      export interface PostalCodeGroup {
        country?: string;
        name?: string;
        postalCodeRanges?: Content_v2.Schema.PostalCodeRange[];
      }
      export interface PostalCodeRange {
        postalCodeRangeBegin?: string;
        postalCodeRangeEnd?: string;
      }
      export interface Price {
        currency?: string;
        value?: string;
      }
      export interface Product {
        additionalImageLinks?: string[];
        additionalProductTypes?: string[];
        adult?: boolean;
        adwordsGrouping?: string;
        adwordsLabels?: string[];
        adwordsRedirect?: string;
        ageGroup?: string;
        aspects?: Content_v2.Schema.ProductAspect[];
        availability?: string;
        availabilityDate?: string;
        brand?: string;
        channel?: string;
        color?: string;
        condition?: string;
        contentLanguage?: string;
        costOfGoodsSold?: Content_v2.Schema.Price;
        customAttributes?: Content_v2.Schema.CustomAttribute[];
        customGroups?: Content_v2.Schema.CustomGroup[];
        customLabel0?: string;
        customLabel1?: string;
        customLabel2?: string;
        customLabel3?: string;
        customLabel4?: string;
        description?: string;
        destinations?: Content_v2.Schema.ProductDestination[];
        displayAdsId?: string;
        displayAdsLink?: string;
        displayAdsSimilarIds?: string[];
        displayAdsTitle?: string;
        displayAdsValue?: Number;
        energyEfficiencyClass?: string;
        expirationDate?: string;
        gender?: string;
        googleProductCategory?: string;
        gtin?: string;
        id?: string;
        identifierExists?: boolean;
        imageLink?: string;
        installment?: Content_v2.Schema.Installment;
        isBundle?: boolean;
        itemGroupId?: string;
        kind?: string;
        link?: string;
        loyaltyPoints?: Content_v2.Schema.LoyaltyPoints;
        material?: string;
        maxEnergyEfficiencyClass?: string;
        maxHandlingTime?: string;
        minEnergyEfficiencyClass?: string;
        minHandlingTime?: string;
        mobileLink?: string;
        mpn?: string;
        multipack?: string;
        offerId?: string;
        onlineOnly?: boolean;
        pattern?: string;
        price?: Content_v2.Schema.Price;
        productType?: string;
        promotionIds?: string[];
        salePrice?: Content_v2.Schema.Price;
        salePriceEffectiveDate?: string;
        sellOnGoogleQuantity?: string;
        shipping?: Content_v2.Schema.ProductShipping[];
        shippingHeight?: Content_v2.Schema.ProductShippingDimension;
        shippingLabel?: string;
        shippingLength?: Content_v2.Schema.ProductShippingDimension;
        shippingWeight?: Content_v2.Schema.ProductShippingWeight;
        shippingWidth?: Content_v2.Schema.ProductShippingDimension;
        sizeSystem?: string;
        sizeType?: string;
        sizes?: string[];
        source?: string;
        targetCountry?: string;
        taxes?: Content_v2.Schema.ProductTax[];
        title?: string;
        unitPricingBaseMeasure?: Content_v2.Schema.ProductUnitPricingBaseMeasure;
        unitPricingMeasure?: Content_v2.Schema.ProductUnitPricingMeasure;
        validatedDestinations?: string[];
        warnings?: Content_v2.Schema.Error[];
      }
      export interface ProductAmount {
        priceAmount?: Content_v2.Schema.Price;
        remittedTaxAmount?: Content_v2.Schema.Price;
        taxAmount?: Content_v2.Schema.Price;
      }
      export interface ProductAspect {
        aspectName?: string;
        destinationName?: string;
        intention?: string;
      }
      export interface ProductDestination {
        destinationName?: string;
        intention?: string;
      }
      export interface ProductShipping {
        country?: string;
        locationGroupName?: string;
        locationId?: string;
        postalCode?: string;
        price?: Content_v2.Schema.Price;
        region?: string;
        service?: string;
      }
      export interface ProductShippingDimension {
        unit?: string;
        value?: Number;
      }
      export interface ProductShippingWeight {
        unit?: string;
        value?: Number;
      }
      export interface ProductStatus {
        creationDate?: string;
        dataQualityIssues?: Content_v2.Schema.ProductStatusDataQualityIssue[];
        destinationStatuses?: Content_v2.Schema.ProductStatusDestinationStatus[];
        googleExpirationDate?: string;
        itemLevelIssues?: Content_v2.Schema.ProductStatusItemLevelIssue[];
        kind?: string;
        lastUpdateDate?: string;
        link?: string;
        product?: Content_v2.Schema.Product;
        productId?: string;
        title?: string;
      }
      export interface ProductStatusDataQualityIssue {
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
      export interface ProductStatusDestinationStatus {
        approvalPending?: boolean;
        approvalStatus?: string;
        destination?: string;
        intention?: string;
      }
      export interface ProductStatusItemLevelIssue {
        attributeName?: string;
        code?: string;
        description?: string;
        destination?: string;
        detail?: string;
        documentation?: string;
        resolution?: string;
        servability?: string;
      }
      export interface ProductTax {
        country?: string;
        locationId?: string;
        postalCode?: string;
        rate?: Number;
        region?: string;
        taxShip?: boolean;
      }
      export interface ProductUnitPricingBaseMeasure {
        unit?: string;
        value?: string;
      }
      export interface ProductUnitPricingMeasure {
        unit?: string;
        value?: Number;
      }
      export interface ProductsCustomBatchRequest {
        entries?: Content_v2.Schema.ProductsCustomBatchRequestEntry[];
      }
      export interface ProductsCustomBatchRequestEntry {
        batchId?: number;
        merchantId?: string;
        method?: string;
        product?: Content_v2.Schema.Product;
        productId?: string;
      }
      export interface ProductsCustomBatchResponse {
        entries?: Content_v2.Schema.ProductsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface ProductsCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        kind?: string;
        product?: Content_v2.Schema.Product;
      }
      export interface ProductsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.Product[];
      }
      export interface ProductstatusesCustomBatchRequest {
        entries?: Content_v2.Schema.ProductstatusesCustomBatchRequestEntry[];
      }
      export interface ProductstatusesCustomBatchRequestEntry {
        batchId?: number;
        destinations?: string[];
        includeAttributes?: boolean;
        merchantId?: string;
        method?: string;
        productId?: string;
      }
      export interface ProductstatusesCustomBatchResponse {
        entries?: Content_v2.Schema.ProductstatusesCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface ProductstatusesCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        kind?: string;
        productStatus?: Content_v2.Schema.ProductStatus;
      }
      export interface ProductstatusesListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.ProductStatus[];
      }
      export interface Promotion {
        promotionAmount?: Content_v2.Schema.Amount;
        promotionId?: string;
      }
      export interface RateGroup {
        applicableShippingLabels?: string[];
        carrierRates?: Content_v2.Schema.CarrierRate[];
        mainTable?: Content_v2.Schema.Table;
        name?: string;
        singleValue?: Content_v2.Schema.Value;
        subtables?: Content_v2.Schema.Table[];
      }
      export interface RefundReason {
        description?: string;
        reasonCode?: string;
      }
      export interface ReturnShipment {
        creationDate?: string;
        deliveryDate?: string;
        returnMethodType?: string;
        shipmentId?: string;
        shipmentTrackingInfos?: Content_v2.Schema.ShipmentTrackingInfo[];
        shippingDate?: string;
        state?: string;
      }
      export interface Row {
        cells?: Content_v2.Schema.Value[];
      }
      export interface Service {
        active?: boolean;
        currency?: string;
        deliveryCountry?: string;
        deliveryTime?: Content_v2.Schema.DeliveryTime;
        eligibility?: string;
        minimumOrderValue?: Content_v2.Schema.Price;
        name?: string;
        rateGroups?: Content_v2.Schema.RateGroup[];
      }
      export interface ShipmentInvoice {
        invoiceSummary?: Content_v2.Schema.InvoiceSummary;
        lineItemInvoices?: Content_v2.Schema.ShipmentInvoiceLineItemInvoice[];
        shipmentGroupId?: string;
      }
      export interface ShipmentInvoiceLineItemInvoice {
        lineItemId?: string;
        productId?: string;
        shipmentUnitIds?: string[];
        unitInvoice?: Content_v2.Schema.UnitInvoice;
      }
      export interface ShipmentTrackingInfo {
        carrier?: string;
        trackingNumber?: string;
      }
      export interface ShippingSettings {
        accountId?: string;
        postalCodeGroups?: Content_v2.Schema.PostalCodeGroup[];
        services?: Content_v2.Schema.Service[];
      }
      export interface ShippingsettingsCustomBatchRequest {
        entries?: Content_v2.Schema.ShippingsettingsCustomBatchRequestEntry[];
      }
      export interface ShippingsettingsCustomBatchRequestEntry {
        accountId?: string;
        batchId?: number;
        merchantId?: string;
        method?: string;
        shippingSettings?: Content_v2.Schema.ShippingSettings;
      }
      export interface ShippingsettingsCustomBatchResponse {
        entries?: Content_v2.Schema.ShippingsettingsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface ShippingsettingsCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content_v2.Schema.Errors;
        kind?: string;
        shippingSettings?: Content_v2.Schema.ShippingSettings;
      }
      export interface ShippingsettingsGetSupportedCarriersResponse {
        carriers?: Content_v2.Schema.CarriersCarrier[];
        kind?: string;
      }
      export interface ShippingsettingsGetSupportedHolidaysResponse {
        holidays?: Content_v2.Schema.HolidaysHoliday[];
        kind?: string;
      }
      export interface ShippingsettingsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content_v2.Schema.ShippingSettings[];
      }
      export interface Table {
        columnHeaders?: Content_v2.Schema.Headers;
        name?: string;
        rowHeaders?: Content_v2.Schema.Headers;
        rows?: Content_v2.Schema.Row[];
      }
      export interface TestOrder {
        customer?: Content_v2.Schema.TestOrderCustomer;
        enableOrderinvoices?: boolean;
        kind?: string;
        lineItems?: Content_v2.Schema.TestOrderLineItem[];
        notificationMode?: string;
        paymentMethod?: Content_v2.Schema.TestOrderPaymentMethod;
        predefinedDeliveryAddress?: string;
        promotions?: Content_v2.Schema.OrderLegacyPromotion[];
        shippingCost?: Content_v2.Schema.Price;
        shippingCostTax?: Content_v2.Schema.Price;
        shippingOption?: string;
      }
      export interface TestOrderCustomer {
        email?: string;
        explicitMarketingPreference?: boolean;
        fullName?: string;
        marketingRightsInfo?: Content_v2.Schema.TestOrderCustomerMarketingRightsInfo;
      }
      export interface TestOrderCustomerMarketingRightsInfo {
        explicitMarketingPreference?: string;
        lastUpdatedTimestamp?: string;
      }
      export interface TestOrderLineItem {
        product?: Content_v2.Schema.TestOrderLineItemProduct;
        quantityOrdered?: number;
        returnInfo?: Content_v2.Schema.OrderLineItemReturnInfo;
        shippingDetails?: Content_v2.Schema.OrderLineItemShippingDetails;
        unitTax?: Content_v2.Schema.Price;
      }
      export interface TestOrderLineItemProduct {
        brand?: string;
        channel?: string;
        condition?: string;
        contentLanguage?: string;
        gtin?: string;
        imageLink?: string;
        itemGroupId?: string;
        mpn?: string;
        offerId?: string;
        price?: Content_v2.Schema.Price;
        targetCountry?: string;
        title?: string;
        variantAttributes?: Content_v2.Schema.OrderLineItemProductVariantAttribute[];
      }
      export interface TestOrderPaymentMethod {
        expirationMonth?: number;
        expirationYear?: number;
        lastFourDigits?: string;
        predefinedBillingAddress?: string;
        type?: string;
      }
      export interface TransitTable {
        postalCodeGroupNames?: string[];
        rows?: Content_v2.Schema.TransitTableTransitTimeRow[];
        transitTimeLabels?: string[];
      }
      export interface TransitTableTransitTimeRow {
        values?: Content_v2.Schema.TransitTableTransitTimeRowTransitTimeValue[];
      }
      export interface TransitTableTransitTimeRowTransitTimeValue {
        maxTransitTimeInDays?: number;
        minTransitTimeInDays?: number;
      }
      export interface UnitInvoice {
        additionalCharges?: Content_v2.Schema.UnitInvoiceAdditionalCharge[];
        promotions?: Content_v2.Schema.Promotion[];
        unitPricePretax?: Content_v2.Schema.Price;
        unitPriceTaxes?: Content_v2.Schema.UnitInvoiceTaxLine[];
      }
      export interface UnitInvoiceAdditionalCharge {
        additionalChargeAmount?: Content_v2.Schema.Amount;
        additionalChargePromotions?: Content_v2.Schema.Promotion[];
        type?: string;
      }
      export interface UnitInvoiceTaxLine {
        taxAmount?: Content_v2.Schema.Price;
        taxName?: string;
        taxType?: string;
      }
      export interface Value {
        carrierRateName?: string;
        flatRate?: Content_v2.Schema.Price;
        noShipping?: boolean;
        pricePercentage?: string;
        subtableName?: string;
      }
      export interface Weight {
        unit?: string;
        value?: string;
      }
    }
  }
  export interface Content_v2 {
    Accounts?: Content_v2.Collection.AccountsCollection;
    Accountstatuses?: Content_v2.Collection.AccountstatusesCollection;
    Accounttax?: Content_v2.Collection.AccounttaxCollection;
    Datafeeds?: Content_v2.Collection.DatafeedsCollection;
    Datafeedstatuses?: Content_v2.Collection.DatafeedstatusesCollection;
    Inventory?: Content_v2.Collection.InventoryCollection;
    Liasettings?: Content_v2.Collection.LiasettingsCollection;
    Orderinvoices?: Content_v2.Collection.OrderinvoicesCollection;
    Orderpayments?: Content_v2.Collection.OrderpaymentsCollection;
    Orderreports?: Content_v2.Collection.OrderreportsCollection;
    Orderreturns?: Content_v2.Collection.OrderreturnsCollection;
    Orders?: Content_v2.Collection.OrdersCollection;
    Pos?: Content_v2.Collection.PosCollection;
    Products?: Content_v2.Collection.ProductsCollection;
    Productstatuses?: Content_v2.Collection.ProductstatusesCollection;
    Shippingsettings?: Content_v2.Collection.ShippingsettingsCollection;
    // Create a new instance of Account
    newAccount(): Content_v2.Schema.Account;
    // Create a new instance of AccountAddress
    newAccountAddress(): Content_v2.Schema.AccountAddress;
    // Create a new instance of AccountAdwordsLink
    newAccountAdwordsLink(): Content_v2.Schema.AccountAdwordsLink;
    // Create a new instance of AccountBusinessInformation
    newAccountBusinessInformation(): Content_v2.Schema.AccountBusinessInformation;
    // Create a new instance of AccountCustomerService
    newAccountCustomerService(): Content_v2.Schema.AccountCustomerService;
    // Create a new instance of AccountGoogleMyBusinessLink
    newAccountGoogleMyBusinessLink(): Content_v2.Schema.AccountGoogleMyBusinessLink;
    // Create a new instance of AccountTax
    newAccountTax(): Content_v2.Schema.AccountTax;
    // Create a new instance of AccountTaxTaxRule
    newAccountTaxTaxRule(): Content_v2.Schema.AccountTaxTaxRule;
    // Create a new instance of AccountUser
    newAccountUser(): Content_v2.Schema.AccountUser;
    // Create a new instance of AccountYouTubeChannelLink
    newAccountYouTubeChannelLink(): Content_v2.Schema.AccountYouTubeChannelLink;
    // Create a new instance of AccountsCustomBatchRequest
    newAccountsCustomBatchRequest(): Content_v2.Schema.AccountsCustomBatchRequest;
    // Create a new instance of AccountsCustomBatchRequestEntry
    newAccountsCustomBatchRequestEntry(): Content_v2.Schema.AccountsCustomBatchRequestEntry;
    // Create a new instance of AccountsCustomBatchRequestEntryLinkRequest
    newAccountsCustomBatchRequestEntryLinkRequest(): Content_v2.Schema.AccountsCustomBatchRequestEntryLinkRequest;
    // Create a new instance of AccountsLinkRequest
    newAccountsLinkRequest(): Content_v2.Schema.AccountsLinkRequest;
    // Create a new instance of AccountstatusesCustomBatchRequest
    newAccountstatusesCustomBatchRequest(): Content_v2.Schema.AccountstatusesCustomBatchRequest;
    // Create a new instance of AccountstatusesCustomBatchRequestEntry
    newAccountstatusesCustomBatchRequestEntry(): Content_v2.Schema.AccountstatusesCustomBatchRequestEntry;
    // Create a new instance of AccounttaxCustomBatchRequest
    newAccounttaxCustomBatchRequest(): Content_v2.Schema.AccounttaxCustomBatchRequest;
    // Create a new instance of AccounttaxCustomBatchRequestEntry
    newAccounttaxCustomBatchRequestEntry(): Content_v2.Schema.AccounttaxCustomBatchRequestEntry;
    // Create a new instance of Amount
    newAmount(): Content_v2.Schema.Amount;
    // Create a new instance of CarrierRate
    newCarrierRate(): Content_v2.Schema.CarrierRate;
    // Create a new instance of CustomAttribute
    newCustomAttribute(): Content_v2.Schema.CustomAttribute;
    // Create a new instance of CustomGroup
    newCustomGroup(): Content_v2.Schema.CustomGroup;
    // Create a new instance of CutoffTime
    newCutoffTime(): Content_v2.Schema.CutoffTime;
    // Create a new instance of Datafeed
    newDatafeed(): Content_v2.Schema.Datafeed;
    // Create a new instance of DatafeedFetchSchedule
    newDatafeedFetchSchedule(): Content_v2.Schema.DatafeedFetchSchedule;
    // Create a new instance of DatafeedFormat
    newDatafeedFormat(): Content_v2.Schema.DatafeedFormat;
    // Create a new instance of DatafeedTarget
    newDatafeedTarget(): Content_v2.Schema.DatafeedTarget;
    // Create a new instance of DatafeedsCustomBatchRequest
    newDatafeedsCustomBatchRequest(): Content_v2.Schema.DatafeedsCustomBatchRequest;
    // Create a new instance of DatafeedsCustomBatchRequestEntry
    newDatafeedsCustomBatchRequestEntry(): Content_v2.Schema.DatafeedsCustomBatchRequestEntry;
    // Create a new instance of DatafeedstatusesCustomBatchRequest
    newDatafeedstatusesCustomBatchRequest(): Content_v2.Schema.DatafeedstatusesCustomBatchRequest;
    // Create a new instance of DatafeedstatusesCustomBatchRequestEntry
    newDatafeedstatusesCustomBatchRequestEntry(): Content_v2.Schema.DatafeedstatusesCustomBatchRequestEntry;
    // Create a new instance of DeliveryTime
    newDeliveryTime(): Content_v2.Schema.DeliveryTime;
    // Create a new instance of Error
    newError(): Content_v2.Schema.Error;
    // Create a new instance of Headers
    newHeaders(): Content_v2.Schema.Headers;
    // Create a new instance of HolidayCutoff
    newHolidayCutoff(): Content_v2.Schema.HolidayCutoff;
    // Create a new instance of Installment
    newInstallment(): Content_v2.Schema.Installment;
    // Create a new instance of Inventory
    newInventory(): Content_v2.Schema.Inventory;
    // Create a new instance of InventoryCustomBatchRequest
    newInventoryCustomBatchRequest(): Content_v2.Schema.InventoryCustomBatchRequest;
    // Create a new instance of InventoryCustomBatchRequestEntry
    newInventoryCustomBatchRequestEntry(): Content_v2.Schema.InventoryCustomBatchRequestEntry;
    // Create a new instance of InventoryPickup
    newInventoryPickup(): Content_v2.Schema.InventoryPickup;
    // Create a new instance of InventorySetRequest
    newInventorySetRequest(): Content_v2.Schema.InventorySetRequest;
    // Create a new instance of InvoiceSummary
    newInvoiceSummary(): Content_v2.Schema.InvoiceSummary;
    // Create a new instance of InvoiceSummaryAdditionalChargeSummary
    newInvoiceSummaryAdditionalChargeSummary(): Content_v2.Schema.InvoiceSummaryAdditionalChargeSummary;
    // Create a new instance of LiaAboutPageSettings
    newLiaAboutPageSettings(): Content_v2.Schema.LiaAboutPageSettings;
    // Create a new instance of LiaCountrySettings
    newLiaCountrySettings(): Content_v2.Schema.LiaCountrySettings;
    // Create a new instance of LiaInventorySettings
    newLiaInventorySettings(): Content_v2.Schema.LiaInventorySettings;
    // Create a new instance of LiaOnDisplayToOrderSettings
    newLiaOnDisplayToOrderSettings(): Content_v2.Schema.LiaOnDisplayToOrderSettings;
    // Create a new instance of LiaPosDataProvider
    newLiaPosDataProvider(): Content_v2.Schema.LiaPosDataProvider;
    // Create a new instance of LiaSettings
    newLiaSettings(): Content_v2.Schema.LiaSettings;
    // Create a new instance of LiasettingsCustomBatchRequest
    newLiasettingsCustomBatchRequest(): Content_v2.Schema.LiasettingsCustomBatchRequest;
    // Create a new instance of LiasettingsCustomBatchRequestEntry
    newLiasettingsCustomBatchRequestEntry(): Content_v2.Schema.LiasettingsCustomBatchRequestEntry;
    // Create a new instance of LocationIdSet
    newLocationIdSet(): Content_v2.Schema.LocationIdSet;
    // Create a new instance of LoyaltyPoints
    newLoyaltyPoints(): Content_v2.Schema.LoyaltyPoints;
    // Create a new instance of OrderLegacyPromotion
    newOrderLegacyPromotion(): Content_v2.Schema.OrderLegacyPromotion;
    // Create a new instance of OrderLegacyPromotionBenefit
    newOrderLegacyPromotionBenefit(): Content_v2.Schema.OrderLegacyPromotionBenefit;
    // Create a new instance of OrderLineItemProductVariantAttribute
    newOrderLineItemProductVariantAttribute(): Content_v2.Schema.OrderLineItemProductVariantAttribute;
    // Create a new instance of OrderLineItemReturnInfo
    newOrderLineItemReturnInfo(): Content_v2.Schema.OrderLineItemReturnInfo;
    // Create a new instance of OrderLineItemShippingDetails
    newOrderLineItemShippingDetails(): Content_v2.Schema.OrderLineItemShippingDetails;
    // Create a new instance of OrderLineItemShippingDetailsMethod
    newOrderLineItemShippingDetailsMethod(): Content_v2.Schema.OrderLineItemShippingDetailsMethod;
    // Create a new instance of OrderMerchantProvidedAnnotation
    newOrderMerchantProvidedAnnotation(): Content_v2.Schema.OrderMerchantProvidedAnnotation;
    // Create a new instance of OrderShipmentLineItemShipment
    newOrderShipmentLineItemShipment(): Content_v2.Schema.OrderShipmentLineItemShipment;
    // Create a new instance of OrderinvoicesCreateChargeInvoiceRequest
    newOrderinvoicesCreateChargeInvoiceRequest(): Content_v2.Schema.OrderinvoicesCreateChargeInvoiceRequest;
    // Create a new instance of OrderinvoicesCreateRefundInvoiceRequest
    newOrderinvoicesCreateRefundInvoiceRequest(): Content_v2.Schema.OrderinvoicesCreateRefundInvoiceRequest;
    // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption
    newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption(): Content_v2.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
    // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption
    newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption(): Content_v2.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
    // Create a new instance of OrderpaymentsNotifyAuthApprovedRequest
    newOrderpaymentsNotifyAuthApprovedRequest(): Content_v2.Schema.OrderpaymentsNotifyAuthApprovedRequest;
    // Create a new instance of OrderpaymentsNotifyAuthDeclinedRequest
    newOrderpaymentsNotifyAuthDeclinedRequest(): Content_v2.Schema.OrderpaymentsNotifyAuthDeclinedRequest;
    // Create a new instance of OrderpaymentsNotifyChargeRequest
    newOrderpaymentsNotifyChargeRequest(): Content_v2.Schema.OrderpaymentsNotifyChargeRequest;
    // Create a new instance of OrderpaymentsNotifyRefundRequest
    newOrderpaymentsNotifyRefundRequest(): Content_v2.Schema.OrderpaymentsNotifyRefundRequest;
    // Create a new instance of OrdersAcknowledgeRequest
    newOrdersAcknowledgeRequest(): Content_v2.Schema.OrdersAcknowledgeRequest;
    // Create a new instance of OrdersCancelLineItemRequest
    newOrdersCancelLineItemRequest(): Content_v2.Schema.OrdersCancelLineItemRequest;
    // Create a new instance of OrdersCancelRequest
    newOrdersCancelRequest(): Content_v2.Schema.OrdersCancelRequest;
    // Create a new instance of OrdersCancelTestOrderByCustomerRequest
    newOrdersCancelTestOrderByCustomerRequest(): Content_v2.Schema.OrdersCancelTestOrderByCustomerRequest;
    // Create a new instance of OrdersCreateTestOrderRequest
    newOrdersCreateTestOrderRequest(): Content_v2.Schema.OrdersCreateTestOrderRequest;
    // Create a new instance of OrdersCreateTestReturnRequest
    newOrdersCreateTestReturnRequest(): Content_v2.Schema.OrdersCreateTestReturnRequest;
    // Create a new instance of OrdersCustomBatchRequest
    newOrdersCustomBatchRequest(): Content_v2.Schema.OrdersCustomBatchRequest;
    // Create a new instance of OrdersCustomBatchRequestEntry
    newOrdersCustomBatchRequestEntry(): Content_v2.Schema.OrdersCustomBatchRequestEntry;
    // Create a new instance of OrdersCustomBatchRequestEntryCancel
    newOrdersCustomBatchRequestEntryCancel(): Content_v2.Schema.OrdersCustomBatchRequestEntryCancel;
    // Create a new instance of OrdersCustomBatchRequestEntryCancelLineItem
    newOrdersCustomBatchRequestEntryCancelLineItem(): Content_v2.Schema.OrdersCustomBatchRequestEntryCancelLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryCreateTestReturnReturnItem
    newOrdersCustomBatchRequestEntryCreateTestReturnReturnItem(): Content_v2.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem;
    // Create a new instance of OrdersCustomBatchRequestEntryInStoreRefundLineItem
    newOrdersCustomBatchRequestEntryInStoreRefundLineItem(): Content_v2.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryRefund
    newOrdersCustomBatchRequestEntryRefund(): Content_v2.Schema.OrdersCustomBatchRequestEntryRefund;
    // Create a new instance of OrdersCustomBatchRequestEntryRejectReturnLineItem
    newOrdersCustomBatchRequestEntryRejectReturnLineItem(): Content_v2.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryReturnLineItem
    newOrdersCustomBatchRequestEntryReturnLineItem(): Content_v2.Schema.OrdersCustomBatchRequestEntryReturnLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryReturnRefundLineItem
    newOrdersCustomBatchRequestEntryReturnRefundLineItem(): Content_v2.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntrySetLineItemMetadata
    newOrdersCustomBatchRequestEntrySetLineItemMetadata(): Content_v2.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
    // Create a new instance of OrdersCustomBatchRequestEntryShipLineItems
    newOrdersCustomBatchRequestEntryShipLineItems(): Content_v2.Schema.OrdersCustomBatchRequestEntryShipLineItems;
    // Create a new instance of OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
    newOrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(): Content_v2.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
    // Create a new instance of OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails
    newOrdersCustomBatchRequestEntryUpdateLineItemShippingDetails(): Content_v2.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
    // Create a new instance of OrdersCustomBatchRequestEntryUpdateShipment
    newOrdersCustomBatchRequestEntryUpdateShipment(): Content_v2.Schema.OrdersCustomBatchRequestEntryUpdateShipment;
    // Create a new instance of OrdersInStoreRefundLineItemRequest
    newOrdersInStoreRefundLineItemRequest(): Content_v2.Schema.OrdersInStoreRefundLineItemRequest;
    // Create a new instance of OrdersRefundRequest
    newOrdersRefundRequest(): Content_v2.Schema.OrdersRefundRequest;
    // Create a new instance of OrdersRejectReturnLineItemRequest
    newOrdersRejectReturnLineItemRequest(): Content_v2.Schema.OrdersRejectReturnLineItemRequest;
    // Create a new instance of OrdersReturnLineItemRequest
    newOrdersReturnLineItemRequest(): Content_v2.Schema.OrdersReturnLineItemRequest;
    // Create a new instance of OrdersReturnRefundLineItemRequest
    newOrdersReturnRefundLineItemRequest(): Content_v2.Schema.OrdersReturnRefundLineItemRequest;
    // Create a new instance of OrdersSetLineItemMetadataRequest
    newOrdersSetLineItemMetadataRequest(): Content_v2.Schema.OrdersSetLineItemMetadataRequest;
    // Create a new instance of OrdersShipLineItemsRequest
    newOrdersShipLineItemsRequest(): Content_v2.Schema.OrdersShipLineItemsRequest;
    // Create a new instance of OrdersUpdateLineItemShippingDetailsRequest
    newOrdersUpdateLineItemShippingDetailsRequest(): Content_v2.Schema.OrdersUpdateLineItemShippingDetailsRequest;
    // Create a new instance of OrdersUpdateMerchantOrderIdRequest
    newOrdersUpdateMerchantOrderIdRequest(): Content_v2.Schema.OrdersUpdateMerchantOrderIdRequest;
    // Create a new instance of OrdersUpdateShipmentRequest
    newOrdersUpdateShipmentRequest(): Content_v2.Schema.OrdersUpdateShipmentRequest;
    // Create a new instance of PosCustomBatchRequest
    newPosCustomBatchRequest(): Content_v2.Schema.PosCustomBatchRequest;
    // Create a new instance of PosCustomBatchRequestEntry
    newPosCustomBatchRequestEntry(): Content_v2.Schema.PosCustomBatchRequestEntry;
    // Create a new instance of PosInventory
    newPosInventory(): Content_v2.Schema.PosInventory;
    // Create a new instance of PosInventoryRequest
    newPosInventoryRequest(): Content_v2.Schema.PosInventoryRequest;
    // Create a new instance of PosSale
    newPosSale(): Content_v2.Schema.PosSale;
    // Create a new instance of PosSaleRequest
    newPosSaleRequest(): Content_v2.Schema.PosSaleRequest;
    // Create a new instance of PosStore
    newPosStore(): Content_v2.Schema.PosStore;
    // Create a new instance of PostalCodeGroup
    newPostalCodeGroup(): Content_v2.Schema.PostalCodeGroup;
    // Create a new instance of PostalCodeRange
    newPostalCodeRange(): Content_v2.Schema.PostalCodeRange;
    // Create a new instance of Price
    newPrice(): Content_v2.Schema.Price;
    // Create a new instance of Product
    newProduct(): Content_v2.Schema.Product;
    // Create a new instance of ProductAspect
    newProductAspect(): Content_v2.Schema.ProductAspect;
    // Create a new instance of ProductDestination
    newProductDestination(): Content_v2.Schema.ProductDestination;
    // Create a new instance of ProductShipping
    newProductShipping(): Content_v2.Schema.ProductShipping;
    // Create a new instance of ProductShippingDimension
    newProductShippingDimension(): Content_v2.Schema.ProductShippingDimension;
    // Create a new instance of ProductShippingWeight
    newProductShippingWeight(): Content_v2.Schema.ProductShippingWeight;
    // Create a new instance of ProductTax
    newProductTax(): Content_v2.Schema.ProductTax;
    // Create a new instance of ProductUnitPricingBaseMeasure
    newProductUnitPricingBaseMeasure(): Content_v2.Schema.ProductUnitPricingBaseMeasure;
    // Create a new instance of ProductUnitPricingMeasure
    newProductUnitPricingMeasure(): Content_v2.Schema.ProductUnitPricingMeasure;
    // Create a new instance of ProductsCustomBatchRequest
    newProductsCustomBatchRequest(): Content_v2.Schema.ProductsCustomBatchRequest;
    // Create a new instance of ProductsCustomBatchRequestEntry
    newProductsCustomBatchRequestEntry(): Content_v2.Schema.ProductsCustomBatchRequestEntry;
    // Create a new instance of ProductstatusesCustomBatchRequest
    newProductstatusesCustomBatchRequest(): Content_v2.Schema.ProductstatusesCustomBatchRequest;
    // Create a new instance of ProductstatusesCustomBatchRequestEntry
    newProductstatusesCustomBatchRequestEntry(): Content_v2.Schema.ProductstatusesCustomBatchRequestEntry;
    // Create a new instance of Promotion
    newPromotion(): Content_v2.Schema.Promotion;
    // Create a new instance of RateGroup
    newRateGroup(): Content_v2.Schema.RateGroup;
    // Create a new instance of Row
    newRow(): Content_v2.Schema.Row;
    // Create a new instance of Service
    newService(): Content_v2.Schema.Service;
    // Create a new instance of ShipmentInvoice
    newShipmentInvoice(): Content_v2.Schema.ShipmentInvoice;
    // Create a new instance of ShipmentInvoiceLineItemInvoice
    newShipmentInvoiceLineItemInvoice(): Content_v2.Schema.ShipmentInvoiceLineItemInvoice;
    // Create a new instance of ShippingSettings
    newShippingSettings(): Content_v2.Schema.ShippingSettings;
    // Create a new instance of ShippingsettingsCustomBatchRequest
    newShippingsettingsCustomBatchRequest(): Content_v2.Schema.ShippingsettingsCustomBatchRequest;
    // Create a new instance of ShippingsettingsCustomBatchRequestEntry
    newShippingsettingsCustomBatchRequestEntry(): Content_v2.Schema.ShippingsettingsCustomBatchRequestEntry;
    // Create a new instance of Table
    newTable(): Content_v2.Schema.Table;
    // Create a new instance of TestOrder
    newTestOrder(): Content_v2.Schema.TestOrder;
    // Create a new instance of TestOrderCustomer
    newTestOrderCustomer(): Content_v2.Schema.TestOrderCustomer;
    // Create a new instance of TestOrderCustomerMarketingRightsInfo
    newTestOrderCustomerMarketingRightsInfo(): Content_v2.Schema.TestOrderCustomerMarketingRightsInfo;
    // Create a new instance of TestOrderLineItem
    newTestOrderLineItem(): Content_v2.Schema.TestOrderLineItem;
    // Create a new instance of TestOrderLineItemProduct
    newTestOrderLineItemProduct(): Content_v2.Schema.TestOrderLineItemProduct;
    // Create a new instance of TestOrderPaymentMethod
    newTestOrderPaymentMethod(): Content_v2.Schema.TestOrderPaymentMethod;
    // Create a new instance of TransitTable
    newTransitTable(): Content_v2.Schema.TransitTable;
    // Create a new instance of TransitTableTransitTimeRow
    newTransitTableTransitTimeRow(): Content_v2.Schema.TransitTableTransitTimeRow;
    // Create a new instance of TransitTableTransitTimeRowTransitTimeValue
    newTransitTableTransitTimeRowTransitTimeValue(): Content_v2.Schema.TransitTableTransitTimeRowTransitTimeValue;
    // Create a new instance of UnitInvoice
    newUnitInvoice(): Content_v2.Schema.UnitInvoice;
    // Create a new instance of UnitInvoiceAdditionalCharge
    newUnitInvoiceAdditionalCharge(): Content_v2.Schema.UnitInvoiceAdditionalCharge;
    // Create a new instance of UnitInvoiceTaxLine
    newUnitInvoiceTaxLine(): Content_v2.Schema.UnitInvoiceTaxLine;
    // Create a new instance of Value
    newValue(): Content_v2.Schema.Value;
    // Create a new instance of Weight
    newWeight(): Content_v2.Schema.Weight;
  }
}

declare var Content_v2: GoogleAppsScript.Content_v2;