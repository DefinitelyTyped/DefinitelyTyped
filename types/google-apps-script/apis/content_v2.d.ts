// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Content {
    namespace Collection {
      interface AccountsCollection {
        // Returns information about the authenticated user.
        authinfo(): Content.Schema.AccountsAuthInfoResponse;
        // Claims the website of a Merchant Center sub-account.
        claimwebsite(merchantId: string, accountId: string): Content.Schema.AccountsClaimWebsiteResponse;
        // Claims the website of a Merchant Center sub-account.
        claimwebsite(merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountsClaimWebsiteResponse;
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch(resource: Schema.AccountsCustomBatchRequest): Content.Schema.AccountsCustomBatchResponse;
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch(resource: Schema.AccountsCustomBatchRequest, optionalArgs: object): Content.Schema.AccountsCustomBatchResponse;
        // Retrieves a Merchant Center account.
        get(merchantId: string, accountId: string): Content.Schema.Account;
        // Creates a Merchant Center sub-account.
        insert(resource: Schema.Account, merchantId: string): Content.Schema.Account;
        // Creates a Merchant Center sub-account.
        insert(resource: Schema.Account, merchantId: string, optionalArgs: object): Content.Schema.Account;
        // Performs an action on a link between a Merchant Center account and another account.
        link(resource: Schema.AccountsLinkRequest, merchantId: string, accountId: string): Content.Schema.AccountsLinkResponse;
        // Lists the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.AccountsListResponse;
        // Lists the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.AccountsListResponse;
        // Updates a Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Account, merchantId: string, accountId: string): Content.Schema.Account;
        // Updates a Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.Account;
        // Deletes a Merchant Center sub-account.
        remove(merchantId: string, accountId: string): void;
        // Deletes a Merchant Center sub-account.
        remove(merchantId: string, accountId: string, optionalArgs: object): void;
        // Updates a Merchant Center account.
        update(resource: Schema.Account, merchantId: string, accountId: string): Content.Schema.Account;
        // Updates a Merchant Center account.
        update(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.Account;
      }
      interface AccountstatusesCollection {
        // Retrieves multiple Merchant Center account statuses in a single request.
        custombatch(resource: Schema.AccountstatusesCustomBatchRequest): Content.Schema.AccountstatusesCustomBatchResponse;
        // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
        get(merchantId: string, accountId: string): Content.Schema.AccountStatus;
        // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
        get(merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountStatus;
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.AccountstatusesListResponse;
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.AccountstatusesListResponse;
      }
      interface AccounttaxCollection {
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch(resource: Schema.AccounttaxCustomBatchRequest): Content.Schema.AccounttaxCustomBatchResponse;
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch(resource: Schema.AccounttaxCustomBatchRequest, optionalArgs: object): Content.Schema.AccounttaxCustomBatchResponse;
        // Retrieves the tax settings of the account.
        get(merchantId: string, accountId: string): Content.Schema.AccountTax;
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.AccounttaxListResponse;
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.AccounttaxListResponse;
        // Updates the tax settings of the account. This method supports patch semantics.
        patch(resource: Schema.AccountTax, merchantId: string, accountId: string): Content.Schema.AccountTax;
        // Updates the tax settings of the account. This method supports patch semantics.
        patch(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountTax;
        // Updates the tax settings of the account.
        update(resource: Schema.AccountTax, merchantId: string, accountId: string): Content.Schema.AccountTax;
        // Updates the tax settings of the account.
        update(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountTax;
      }
      interface DatafeedsCollection {
        // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        custombatch(resource: Schema.DatafeedsCustomBatchRequest): Content.Schema.DatafeedsCustomBatchResponse;
        // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        custombatch(resource: Schema.DatafeedsCustomBatchRequest, optionalArgs: object): Content.Schema.DatafeedsCustomBatchResponse;
        // Invokes a fetch for the datafeed in your Merchant Center account.
        fetchnow(merchantId: string, datafeedId: string): Content.Schema.DatafeedsFetchNowResponse;
        // Invokes a fetch for the datafeed in your Merchant Center account.
        fetchnow(merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.DatafeedsFetchNowResponse;
        // Retrieves a datafeed configuration from your Merchant Center account.
        get(merchantId: string, datafeedId: string): Content.Schema.Datafeed;
        // Registers a datafeed configuration with your Merchant Center account.
        insert(resource: Schema.Datafeed, merchantId: string): Content.Schema.Datafeed;
        // Registers a datafeed configuration with your Merchant Center account.
        insert(resource: Schema.Datafeed, merchantId: string, optionalArgs: object): Content.Schema.Datafeed;
        // Lists the configurations for datafeeds in your Merchant Center account.
        list(merchantId: string): Content.Schema.DatafeedsListResponse;
        // Lists the configurations for datafeeds in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.DatafeedsListResponse;
        // Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Content.Schema.Datafeed;
        // Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.Datafeed;
        // Deletes a datafeed configuration from your Merchant Center account.
        remove(merchantId: string, datafeedId: string): void;
        // Deletes a datafeed configuration from your Merchant Center account.
        remove(merchantId: string, datafeedId: string, optionalArgs: object): void;
        // Updates a datafeed configuration of your Merchant Center account.
        update(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Content.Schema.Datafeed;
        // Updates a datafeed configuration of your Merchant Center account.
        update(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.Datafeed;
      }
      interface DatafeedstatusesCollection {
        // Gets multiple Merchant Center datafeed statuses in a single request.
        custombatch(resource: Schema.DatafeedstatusesCustomBatchRequest): Content.Schema.DatafeedstatusesCustomBatchResponse;
        // Retrieves the status of a datafeed from your Merchant Center account.
        get(merchantId: string, datafeedId: string): Content.Schema.DatafeedStatus;
        // Retrieves the status of a datafeed from your Merchant Center account.
        get(merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.DatafeedStatus;
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list(merchantId: string): Content.Schema.DatafeedstatusesListResponse;
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.DatafeedstatusesListResponse;
      }
      interface InventoryCollection {
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch(resource: Schema.InventoryCustomBatchRequest): Content.Schema.InventoryCustomBatchResponse;
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch(resource: Schema.InventoryCustomBatchRequest, optionalArgs: object): Content.Schema.InventoryCustomBatchResponse;
        // Updates price and availability of a product in your Merchant Center account.
        set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string): Content.Schema.InventorySetResponse;
        // Updates price and availability of a product in your Merchant Center account.
        set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string, optionalArgs: object): Content.Schema.InventorySetResponse;
      }
      interface LiasettingsCollection {
        // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        custombatch(resource: Schema.LiasettingsCustomBatchRequest): Content.Schema.LiasettingsCustomBatchResponse;
        // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        custombatch(resource: Schema.LiasettingsCustomBatchRequest, optionalArgs: object): Content.Schema.LiasettingsCustomBatchResponse;
        // Retrieves the LIA settings of the account.
        get(merchantId: string, accountId: string): Content.Schema.LiaSettings;
        // Retrieves the list of accessible Google My Business accounts.
        getaccessiblegmbaccounts(merchantId: string, accountId: string): Content.Schema.LiasettingsGetAccessibleGmbAccountsResponse;
        // Lists the LIA settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.LiasettingsListResponse;
        // Lists the LIA settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.LiasettingsListResponse;
        // Retrieves the list of POS data providers that have active settings for the all eiligible countries.
        listposdataproviders(): Content.Schema.LiasettingsListPosDataProvidersResponse;
        // Updates the LIA settings of the account. This method supports patch semantics.
        patch(resource: Schema.LiaSettings, merchantId: string, accountId: string): Content.Schema.LiaSettings;
        // Updates the LIA settings of the account. This method supports patch semantics.
        patch(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.LiaSettings;
        // Requests access to a specified Google My Business account.
        requestgmbaccess(merchantId: string, accountId: string, gmbEmail: string): Content.Schema.LiasettingsRequestGmbAccessResponse;
        // Requests inventory validation for the specified country.
        requestinventoryverification(merchantId: string, accountId: string, country: string): Content.Schema.LiasettingsRequestInventoryVerificationResponse;
        // Sets the inventory verification contract for the specified country.
        setinventoryverificationcontact(merchantId: string, accountId: string, contactEmail: string, contactName: string, country: string, language: string): Content.Schema.LiasettingsSetInventoryVerificationContactResponse;
        // Sets the POS data provider for the specified country.
        setposdataprovider(merchantId: string, accountId: string, country: string): Content.Schema.LiasettingsSetPosDataProviderResponse;
        // Sets the POS data provider for the specified country.
        setposdataprovider(merchantId: string, accountId: string, country: string, optionalArgs: object): Content.Schema.LiasettingsSetPosDataProviderResponse;
        // Updates the LIA settings of the account.
        update(resource: Schema.LiaSettings, merchantId: string, accountId: string): Content.Schema.LiaSettings;
        // Updates the LIA settings of the account.
        update(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.LiaSettings;
      }
      interface OrderinvoicesCollection {
        // Creates a charge invoice for a shipment group, and triggers a charge capture for non-facilitated payment orders.
        createchargeinvoice(resource: Schema.OrderinvoicesCreateChargeInvoiceRequest, merchantId: string, orderId: string): Content.Schema.OrderinvoicesCreateChargeInvoiceResponse;
        // Creates a refund invoice for one or more shipment groups, and triggers a refund for non-facilitated payment orders. This can only be used for line items that have previously been charged using createChargeInvoice. All amounts (except for the summary) are incremental with respect to the previous invoice.
        createrefundinvoice(resource: Schema.OrderinvoicesCreateRefundInvoiceRequest, merchantId: string, orderId: string): Content.Schema.OrderinvoicesCreateRefundInvoiceResponse;
      }
      interface OrderpaymentsCollection {
        // Notify about successfully authorizing user's payment method for a given amount.
        notifyauthapproved(resource: Schema.OrderpaymentsNotifyAuthApprovedRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyAuthApprovedResponse;
        // Notify about failure to authorize user's payment method.
        notifyauthdeclined(resource: Schema.OrderpaymentsNotifyAuthDeclinedRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyAuthDeclinedResponse;
        // Notify about charge on user's selected payments method.
        notifycharge(resource: Schema.OrderpaymentsNotifyChargeRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyChargeResponse;
        // Notify about refund on user's selected payments method.
        notifyrefund(resource: Schema.OrderpaymentsNotifyRefundRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyRefundResponse;
      }
      interface OrderreportsCollection {
        // Retrieves a report for disbursements from your Merchant Center account.
        listdisbursements(merchantId: string, disbursementStartDate: string): Content.Schema.OrderreportsListDisbursementsResponse;
        // Retrieves a report for disbursements from your Merchant Center account.
        listdisbursements(merchantId: string, disbursementStartDate: string, optionalArgs: object): Content.Schema.OrderreportsListDisbursementsResponse;
        // Retrieves a list of transactions for a disbursement from your Merchant Center account.
        listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string): Content.Schema.OrderreportsListTransactionsResponse;
        // Retrieves a list of transactions for a disbursement from your Merchant Center account.
        listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string, optionalArgs: object): Content.Schema.OrderreportsListTransactionsResponse;
      }
      interface OrderreturnsCollection {
        // Retrieves an order return from your Merchant Center account.
        get(merchantId: string, returnId: string): Content.Schema.MerchantOrderReturn;
        // Lists order returns in your Merchant Center account.
        list(merchantId: string): Content.Schema.OrderreturnsListResponse;
        // Lists order returns in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.OrderreturnsListResponse;
      }
      interface OrdersCollection {
        // Marks an order as acknowledged.
        acknowledge(resource: Schema.OrdersAcknowledgeRequest, merchantId: string, orderId: string): Content.Schema.OrdersAcknowledgeResponse;
        // Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".
        advancetestorder(merchantId: string, orderId: string): Content.Schema.OrdersAdvanceTestOrderResponse;
        // Cancels all line items in an order, making a full refund.
        cancel(resource: Schema.OrdersCancelRequest, merchantId: string, orderId: string): Content.Schema.OrdersCancelResponse;
        // Cancels a line item, making a full refund.
        cancellineitem(resource: Schema.OrdersCancelLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersCancelLineItemResponse;
        // Sandbox only. Cancels a test order for customer-initiated cancellation.
        canceltestorderbycustomer(resource: Schema.OrdersCancelTestOrderByCustomerRequest, merchantId: string, orderId: string): Content.Schema.OrdersCancelTestOrderByCustomerResponse;
        // Sandbox only. Creates a test order.
        createtestorder(resource: Schema.OrdersCreateTestOrderRequest, merchantId: string): Content.Schema.OrdersCreateTestOrderResponse;
        // Sandbox only. Creates a test return.
        createtestreturn(resource: Schema.OrdersCreateTestReturnRequest, merchantId: string, orderId: string): Content.Schema.OrdersCreateTestReturnResponse;
        // Retrieves or modifies multiple orders in a single request.
        custombatch(resource: Schema.OrdersCustomBatchRequest): Content.Schema.OrdersCustomBatchResponse;
        // Retrieves an order from your Merchant Center account.
        get(merchantId: string, orderId: string): Content.Schema.Order;
        // Retrieves an order using merchant order ID.
        getbymerchantorderid(merchantId: string, merchantOrderId: string): Content.Schema.OrdersGetByMerchantOrderIdResponse;
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate(merchantId: string, templateName: string): Content.Schema.OrdersGetTestOrderTemplateResponse;
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate(merchantId: string, templateName: string, optionalArgs: object): Content.Schema.OrdersGetTestOrderTemplateResponse;
        // Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store).
        // Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
        instorerefundlineitem(resource: Schema.OrdersInStoreRefundLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersInStoreRefundLineItemResponse;
        // Lists the orders in your Merchant Center account.
        list(merchantId: string): Content.Schema.OrdersListResponse;
        // Lists the orders in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.OrdersListResponse;
        // Deprecated, please use returnRefundLineItem instead.
        refund(resource: Schema.OrdersRefundRequest, merchantId: string, orderId: string): Content.Schema.OrdersRefundResponse;
        // Rejects return on an line item.
        rejectreturnlineitem(resource: Schema.OrdersRejectReturnLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersRejectReturnLineItemResponse;
        // Returns a line item.
        returnlineitem(resource: Schema.OrdersReturnLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersReturnLineItemResponse;
        // Returns and refunds a line item. Note that this method can only be called on fully shipped orders.
        returnrefundlineitem(resource: Schema.OrdersReturnRefundLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersReturnRefundLineItemResponse;
        // Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
        setlineitemmetadata(resource: Schema.OrdersSetLineItemMetadataRequest, merchantId: string, orderId: string): Content.Schema.OrdersSetLineItemMetadataResponse;
        // Marks line item(s) as shipped.
        shiplineitems(resource: Schema.OrdersShipLineItemsRequest, merchantId: string, orderId: string): Content.Schema.OrdersShipLineItemsResponse;
        // Updates ship by and delivery by dates for a line item.
        updatelineitemshippingdetails(resource: Schema.OrdersUpdateLineItemShippingDetailsRequest, merchantId: string, orderId: string): Content.Schema.OrdersUpdateLineItemShippingDetailsResponse;
        // Updates the merchant order ID for a given order.
        updatemerchantorderid(resource: Schema.OrdersUpdateMerchantOrderIdRequest, merchantId: string, orderId: string): Content.Schema.OrdersUpdateMerchantOrderIdResponse;
        // Updates a shipment's status, carrier, and/or tracking ID.
        updateshipment(resource: Schema.OrdersUpdateShipmentRequest, merchantId: string, orderId: string): Content.Schema.OrdersUpdateShipmentResponse;
      }
      interface PosCollection {
        // Batches multiple POS-related calls in a single request.
        custombatch(resource: Schema.PosCustomBatchRequest): Content.Schema.PosCustomBatchResponse;
        // Batches multiple POS-related calls in a single request.
        custombatch(resource: Schema.PosCustomBatchRequest, optionalArgs: object): Content.Schema.PosCustomBatchResponse;
        // Retrieves information about the given store.
        get(merchantId: string, targetMerchantId: string, storeCode: string): Content.Schema.PosStore;
        // Creates a store for the given merchant.
        insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string): Content.Schema.PosStore;
        // Creates a store for the given merchant.
        insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string, optionalArgs: object): Content.Schema.PosStore;
        // Submit inventory for the given merchant.
        inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string): Content.Schema.PosInventoryResponse;
        // Submit inventory for the given merchant.
        inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Content.Schema.PosInventoryResponse;
        // Lists the stores of the target merchant.
        list(merchantId: string, targetMerchantId: string): Content.Schema.PosListResponse;
        // Deletes a store for the given merchant.
        remove(merchantId: string, targetMerchantId: string, storeCode: string): void;
        // Deletes a store for the given merchant.
        remove(merchantId: string, targetMerchantId: string, storeCode: string, optionalArgs: object): void;
        // Submit a sale event for the given merchant.
        sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string): Content.Schema.PosSaleResponse;
        // Submit a sale event for the given merchant.
        sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Content.Schema.PosSaleResponse;
      }
      interface ProductsCollection {
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch(resource: Schema.ProductsCustomBatchRequest): Content.Schema.ProductsCustomBatchResponse;
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch(resource: Schema.ProductsCustomBatchRequest, optionalArgs: object): Content.Schema.ProductsCustomBatchResponse;
        // Retrieves a product from your Merchant Center account.
        get(merchantId: string, productId: string): Content.Schema.Product;
        // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
        insert(resource: Schema.Product, merchantId: string): Content.Schema.Product;
        // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
        insert(resource: Schema.Product, merchantId: string, optionalArgs: object): Content.Schema.Product;
        // Lists the products in your Merchant Center account.
        list(merchantId: string): Content.Schema.ProductsListResponse;
        // Lists the products in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.ProductsListResponse;
        // Deletes a product from your Merchant Center account.
        remove(merchantId: string, productId: string): void;
        // Deletes a product from your Merchant Center account.
        remove(merchantId: string, productId: string, optionalArgs: object): void;
      }
      interface ProductstatusesCollection {
        // Gets the statuses of multiple products in a single request.
        custombatch(resource: Schema.ProductstatusesCustomBatchRequest): Content.Schema.ProductstatusesCustomBatchResponse;
        // Gets the statuses of multiple products in a single request.
        custombatch(resource: Schema.ProductstatusesCustomBatchRequest, optionalArgs: object): Content.Schema.ProductstatusesCustomBatchResponse;
        // Gets the status of a product from your Merchant Center account.
        get(merchantId: string, productId: string): Content.Schema.ProductStatus;
        // Gets the status of a product from your Merchant Center account.
        get(merchantId: string, productId: string, optionalArgs: object): Content.Schema.ProductStatus;
        // Lists the statuses of the products in your Merchant Center account.
        list(merchantId: string): Content.Schema.ProductstatusesListResponse;
        // Lists the statuses of the products in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.ProductstatusesListResponse;
      }
      interface ShippingsettingsCollection {
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch(resource: Schema.ShippingsettingsCustomBatchRequest): Content.Schema.ShippingsettingsCustomBatchResponse;
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch(resource: Schema.ShippingsettingsCustomBatchRequest, optionalArgs: object): Content.Schema.ShippingsettingsCustomBatchResponse;
        // Retrieves the shipping settings of the account.
        get(merchantId: string, accountId: string): Content.Schema.ShippingSettings;
        // Retrieves supported carriers and carrier services for an account.
        getsupportedcarriers(merchantId: string): Content.Schema.ShippingsettingsGetSupportedCarriersResponse;
        // Retrieves supported holidays for an account.
        getsupportedholidays(merchantId: string): Content.Schema.ShippingsettingsGetSupportedHolidaysResponse;
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.ShippingsettingsListResponse;
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.ShippingsettingsListResponse;
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Content.Schema.ShippingSettings;
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.ShippingSettings;
        // Updates the shipping settings of the account.
        update(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Content.Schema.ShippingSettings;
        // Updates the shipping settings of the account.
        update(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.ShippingSettings;
      }
    }
    namespace Schema {
      interface Account {
        adultContent?: boolean | undefined;
        adwordsLinks?: Content.Schema.AccountAdwordsLink[] | undefined;
        businessInformation?: Content.Schema.AccountBusinessInformation | undefined;
        googleMyBusinessLink?: Content.Schema.AccountGoogleMyBusinessLink | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        name?: string | undefined;
        reviewsUrl?: string | undefined;
        sellerId?: string | undefined;
        users?: Content.Schema.AccountUser[] | undefined;
        websiteUrl?: string | undefined;
        youtubeChannelLinks?: Content.Schema.AccountYouTubeChannelLink[] | undefined;
      }
      interface AccountAddress {
        country?: string | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        region?: string | undefined;
        streetAddress?: string | undefined;
      }
      interface AccountAdwordsLink {
        adwordsId?: string | undefined;
        status?: string | undefined;
      }
      interface AccountBusinessInformation {
        address?: Content.Schema.AccountAddress | undefined;
        customerService?: Content.Schema.AccountCustomerService | undefined;
        phoneNumber?: string | undefined;
      }
      interface AccountCustomerService {
        email?: string | undefined;
        phoneNumber?: string | undefined;
        url?: string | undefined;
      }
      interface AccountGoogleMyBusinessLink {
        gmbEmail?: string | undefined;
        status?: string | undefined;
      }
      interface AccountIdentifier {
        aggregatorId?: string | undefined;
        merchantId?: string | undefined;
      }
      interface AccountStatus {
        accountId?: string | undefined;
        accountLevelIssues?: Content.Schema.AccountStatusAccountLevelIssue[] | undefined;
        dataQualityIssues?: Content.Schema.AccountStatusDataQualityIssue[] | undefined;
        kind?: string | undefined;
        products?: Content.Schema.AccountStatusProducts[] | undefined;
        websiteClaimed?: boolean | undefined;
      }
      interface AccountStatusAccountLevelIssue {
        country?: string | undefined;
        destination?: string | undefined;
        detail?: string | undefined;
        documentation?: string | undefined;
        id?: string | undefined;
        severity?: string | undefined;
        title?: string | undefined;
      }
      interface AccountStatusDataQualityIssue {
        country?: string | undefined;
        destination?: string | undefined;
        detail?: string | undefined;
        displayedValue?: string | undefined;
        exampleItems?: Content.Schema.AccountStatusExampleItem[] | undefined;
        id?: string | undefined;
        lastChecked?: string | undefined;
        location?: string | undefined;
        numItems?: number | undefined;
        severity?: string | undefined;
        submittedValue?: string | undefined;
      }
      interface AccountStatusExampleItem {
        itemId?: string | undefined;
        link?: string | undefined;
        submittedValue?: string | undefined;
        title?: string | undefined;
        valueOnLandingPage?: string | undefined;
      }
      interface AccountStatusItemLevelIssue {
        attributeName?: string | undefined;
        code?: string | undefined;
        description?: string | undefined;
        detail?: string | undefined;
        documentation?: string | undefined;
        numItems?: string | undefined;
        resolution?: string | undefined;
        servability?: string | undefined;
      }
      interface AccountStatusProducts {
        channel?: string | undefined;
        country?: string | undefined;
        destination?: string | undefined;
        itemLevelIssues?: Content.Schema.AccountStatusItemLevelIssue[] | undefined;
        statistics?: Content.Schema.AccountStatusStatistics | undefined;
      }
      interface AccountStatusStatistics {
        active?: string | undefined;
        disapproved?: string | undefined;
        expiring?: string | undefined;
        pending?: string | undefined;
      }
      interface AccountTax {
        accountId?: string | undefined;
        kind?: string | undefined;
        rules?: Content.Schema.AccountTaxTaxRule[] | undefined;
      }
      interface AccountTaxTaxRule {
        country?: string | undefined;
        locationId?: string | undefined;
        ratePercent?: string | undefined;
        shippingTaxed?: boolean | undefined;
        useGlobalRate?: boolean | undefined;
      }
      interface AccountUser {
        admin?: boolean | undefined;
        emailAddress?: string | undefined;
        orderManager?: boolean | undefined;
        paymentsAnalyst?: boolean | undefined;
        paymentsManager?: boolean | undefined;
      }
      interface AccountYouTubeChannelLink {
        channelId?: string | undefined;
        status?: string | undefined;
      }
      interface AccountsAuthInfoResponse {
        accountIdentifiers?: Content.Schema.AccountIdentifier[] | undefined;
        kind?: string | undefined;
      }
      interface AccountsClaimWebsiteResponse {
        kind?: string | undefined;
      }
      interface AccountsCustomBatchRequest {
        entries?: Content.Schema.AccountsCustomBatchRequestEntry[] | undefined;
      }
      interface AccountsCustomBatchRequestEntry {
        account?: Content.Schema.Account | undefined;
        accountId?: string | undefined;
        batchId?: number | undefined;
        force?: boolean | undefined;
        linkRequest?: Content.Schema.AccountsCustomBatchRequestEntryLinkRequest | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
        overwrite?: boolean | undefined;
      }
      interface AccountsCustomBatchRequestEntryLinkRequest {
        action?: string | undefined;
        linkType?: string | undefined;
        linkedAccountId?: string | undefined;
      }
      interface AccountsCustomBatchResponse {
        entries?: Content.Schema.AccountsCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface AccountsCustomBatchResponseEntry {
        account?: Content.Schema.Account | undefined;
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        kind?: string | undefined;
        linkStatus?: string | undefined;
      }
      interface AccountsLinkRequest {
        action?: string | undefined;
        linkType?: string | undefined;
        linkedAccountId?: string | undefined;
      }
      interface AccountsLinkResponse {
        kind?: string | undefined;
      }
      interface AccountsListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.Account[] | undefined;
      }
      interface AccountstatusesCustomBatchRequest {
        entries?: Content.Schema.AccountstatusesCustomBatchRequestEntry[] | undefined;
      }
      interface AccountstatusesCustomBatchRequestEntry {
        accountId?: string | undefined;
        batchId?: number | undefined;
        destinations?: string[] | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
      }
      interface AccountstatusesCustomBatchResponse {
        entries?: Content.Schema.AccountstatusesCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface AccountstatusesCustomBatchResponseEntry {
        accountStatus?: Content.Schema.AccountStatus | undefined;
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
      }
      interface AccountstatusesListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.AccountStatus[] | undefined;
      }
      interface AccounttaxCustomBatchRequest {
        entries?: Content.Schema.AccounttaxCustomBatchRequestEntry[] | undefined;
      }
      interface AccounttaxCustomBatchRequestEntry {
        accountId?: string | undefined;
        accountTax?: Content.Schema.AccountTax | undefined;
        batchId?: number | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
      }
      interface AccounttaxCustomBatchResponse {
        entries?: Content.Schema.AccounttaxCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface AccounttaxCustomBatchResponseEntry {
        accountTax?: Content.Schema.AccountTax | undefined;
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        kind?: string | undefined;
      }
      interface AccounttaxListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.AccountTax[] | undefined;
      }
      interface Amount {
        pretax?: Content.Schema.Price | undefined;
        tax?: Content.Schema.Price | undefined;
      }
      interface CarrierRate {
        carrierName?: string | undefined;
        carrierService?: string | undefined;
        flatAdjustment?: Content.Schema.Price | undefined;
        name?: string | undefined;
        originPostalCode?: string | undefined;
        percentageAdjustment?: string | undefined;
      }
      interface CarriersCarrier {
        country?: string | undefined;
        name?: string | undefined;
        services?: string[] | undefined;
      }
      interface CustomAttribute {
        name?: string | undefined;
        type?: string | undefined;
        unit?: string | undefined;
        value?: string | undefined;
      }
      interface CustomGroup {
        attributes?: Content.Schema.CustomAttribute[] | undefined;
        name?: string | undefined;
      }
      interface CustomerReturnReason {
        description?: string | undefined;
        reasonCode?: string | undefined;
      }
      interface CutoffTime {
        hour?: number | undefined;
        minute?: number | undefined;
        timezone?: string | undefined;
      }
      interface Datafeed {
        attributeLanguage?: string | undefined;
        contentLanguage?: string | undefined;
        contentType?: string | undefined;
        fetchSchedule?: Content.Schema.DatafeedFetchSchedule | undefined;
        fileName?: string | undefined;
        format?: Content.Schema.DatafeedFormat | undefined;
        id?: string | undefined;
        intendedDestinations?: string[] | undefined;
        kind?: string | undefined;
        name?: string | undefined;
        targetCountry?: string | undefined;
        targets?: Content.Schema.DatafeedTarget[] | undefined;
      }
      interface DatafeedFetchSchedule {
        dayOfMonth?: number | undefined;
        fetchUrl?: string | undefined;
        hour?: number | undefined;
        minuteOfHour?: number | undefined;
        password?: string | undefined;
        paused?: boolean | undefined;
        timeZone?: string | undefined;
        username?: string | undefined;
        weekday?: string | undefined;
      }
      interface DatafeedFormat {
        columnDelimiter?: string | undefined;
        fileEncoding?: string | undefined;
        quotingMode?: string | undefined;
      }
      interface DatafeedStatus {
        country?: string | undefined;
        datafeedId?: string | undefined;
        errors?: Content.Schema.DatafeedStatusError[] | undefined;
        itemsTotal?: string | undefined;
        itemsValid?: string | undefined;
        kind?: string | undefined;
        language?: string | undefined;
        lastUploadDate?: string | undefined;
        processingStatus?: string | undefined;
        warnings?: Content.Schema.DatafeedStatusError[] | undefined;
      }
      interface DatafeedStatusError {
        code?: string | undefined;
        count?: string | undefined;
        examples?: Content.Schema.DatafeedStatusExample[] | undefined;
        message?: string | undefined;
      }
      interface DatafeedStatusExample {
        itemId?: string | undefined;
        lineNumber?: string | undefined;
        value?: string | undefined;
      }
      interface DatafeedTarget {
        country?: string | undefined;
        excludedDestinations?: string[] | undefined;
        includedDestinations?: string[] | undefined;
        language?: string | undefined;
      }
      interface DatafeedsCustomBatchRequest {
        entries?: Content.Schema.DatafeedsCustomBatchRequestEntry[] | undefined;
      }
      interface DatafeedsCustomBatchRequestEntry {
        batchId?: number | undefined;
        datafeed?: Content.Schema.Datafeed | undefined;
        datafeedId?: string | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
      }
      interface DatafeedsCustomBatchResponse {
        entries?: Content.Schema.DatafeedsCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface DatafeedsCustomBatchResponseEntry {
        batchId?: number | undefined;
        datafeed?: Content.Schema.Datafeed | undefined;
        errors?: Content.Schema.Errors | undefined;
      }
      interface DatafeedsFetchNowResponse {
        kind?: string | undefined;
      }
      interface DatafeedsListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.Datafeed[] | undefined;
      }
      interface DatafeedstatusesCustomBatchRequest {
        entries?: Content.Schema.DatafeedstatusesCustomBatchRequestEntry[] | undefined;
      }
      interface DatafeedstatusesCustomBatchRequestEntry {
        batchId?: number | undefined;
        country?: string | undefined;
        datafeedId?: string | undefined;
        language?: string | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
      }
      interface DatafeedstatusesCustomBatchResponse {
        entries?: Content.Schema.DatafeedstatusesCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface DatafeedstatusesCustomBatchResponseEntry {
        batchId?: number | undefined;
        datafeedStatus?: Content.Schema.DatafeedStatus | undefined;
        errors?: Content.Schema.Errors | undefined;
      }
      interface DatafeedstatusesListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.DatafeedStatus[] | undefined;
      }
      interface DeliveryTime {
        cutoffTime?: Content.Schema.CutoffTime | undefined;
        holidayCutoffs?: Content.Schema.HolidayCutoff[] | undefined;
        maxHandlingTimeInDays?: number | undefined;
        maxTransitTimeInDays?: number | undefined;
        minHandlingTimeInDays?: number | undefined;
        minTransitTimeInDays?: number | undefined;
        transitTimeTable?: Content.Schema.TransitTable | undefined;
      }
      interface Error {
        domain?: string | undefined;
        message?: string | undefined;
        reason?: string | undefined;
      }
      interface Errors {
        code?: number | undefined;
        errors?: Content.Schema.Error[] | undefined;
        message?: string | undefined;
      }
      interface GmbAccounts {
        accountId?: string | undefined;
        gmbAccounts?: Content.Schema.GmbAccountsGmbAccount[] | undefined;
      }
      interface GmbAccountsGmbAccount {
        email?: string | undefined;
        listingCount?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
      }
      interface Headers {
        locations?: Content.Schema.LocationIdSet[] | undefined;
        numberOfItems?: string[] | undefined;
        postalCodeGroupNames?: string[] | undefined;
        prices?: Content.Schema.Price[] | undefined;
        weights?: Content.Schema.Weight[] | undefined;
      }
      interface HolidayCutoff {
        deadlineDate?: string | undefined;
        deadlineHour?: number | undefined;
        deadlineTimezone?: string | undefined;
        holidayId?: string | undefined;
        visibleFromDate?: string | undefined;
      }
      interface HolidaysHoliday {
        countryCode?: string | undefined;
        date?: string | undefined;
        deliveryGuaranteeDate?: string | undefined;
        deliveryGuaranteeHour?: string | undefined;
        id?: string | undefined;
        type?: string | undefined;
      }
      interface Installment {
        amount?: Content.Schema.Price | undefined;
        months?: string | undefined;
      }
      interface Inventory {
        availability?: string | undefined;
        customLabel0?: string | undefined;
        customLabel1?: string | undefined;
        customLabel2?: string | undefined;
        customLabel3?: string | undefined;
        customLabel4?: string | undefined;
        installment?: Content.Schema.Installment | undefined;
        instoreProductLocation?: string | undefined;
        kind?: string | undefined;
        loyaltyPoints?: Content.Schema.LoyaltyPoints | undefined;
        pickup?: Content.Schema.InventoryPickup | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: number | undefined;
        salePrice?: Content.Schema.Price | undefined;
        salePriceEffectiveDate?: string | undefined;
        sellOnGoogleQuantity?: number | undefined;
      }
      interface InventoryCustomBatchRequest {
        entries?: Content.Schema.InventoryCustomBatchRequestEntry[] | undefined;
      }
      interface InventoryCustomBatchRequestEntry {
        batchId?: number | undefined;
        inventory?: Content.Schema.Inventory | undefined;
        merchantId?: string | undefined;
        productId?: string | undefined;
        storeCode?: string | undefined;
      }
      interface InventoryCustomBatchResponse {
        entries?: Content.Schema.InventoryCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface InventoryCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        kind?: string | undefined;
      }
      interface InventoryPickup {
        pickupMethod?: string | undefined;
        pickupSla?: string | undefined;
      }
      interface InventorySetRequest {
        availability?: string | undefined;
        customLabel0?: string | undefined;
        customLabel1?: string | undefined;
        customLabel2?: string | undefined;
        customLabel3?: string | undefined;
        customLabel4?: string | undefined;
        installment?: Content.Schema.Installment | undefined;
        instoreProductLocation?: string | undefined;
        loyaltyPoints?: Content.Schema.LoyaltyPoints | undefined;
        pickup?: Content.Schema.InventoryPickup | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: number | undefined;
        salePrice?: Content.Schema.Price | undefined;
        salePriceEffectiveDate?: string | undefined;
        sellOnGoogleQuantity?: number | undefined;
      }
      interface InventorySetResponse {
        kind?: string | undefined;
      }
      interface InvoiceSummary {
        additionalChargeSummaries?: Content.Schema.InvoiceSummaryAdditionalChargeSummary[] | undefined;
        customerBalance?: Content.Schema.Amount | undefined;
        googleBalance?: Content.Schema.Amount | undefined;
        merchantBalance?: Content.Schema.Amount | undefined;
        productTotal?: Content.Schema.Amount | undefined;
        promotionSummaries?: Content.Schema.Promotion[] | undefined;
      }
      interface InvoiceSummaryAdditionalChargeSummary {
        totalAmount?: Content.Schema.Amount | undefined;
        type?: string | undefined;
      }
      interface LiaAboutPageSettings {
        status?: string | undefined;
        url?: string | undefined;
      }
      interface LiaCountrySettings {
        about?: Content.Schema.LiaAboutPageSettings | undefined;
        country?: string | undefined;
        hostedLocalStorefrontActive?: boolean | undefined;
        inventory?: Content.Schema.LiaInventorySettings | undefined;
        onDisplayToOrder?: Content.Schema.LiaOnDisplayToOrderSettings | undefined;
        posDataProvider?: Content.Schema.LiaPosDataProvider | undefined;
        storePickupActive?: boolean | undefined;
      }
      interface LiaInventorySettings {
        inventoryVerificationContactEmail?: string | undefined;
        inventoryVerificationContactName?: string | undefined;
        inventoryVerificationContactStatus?: string | undefined;
        status?: string | undefined;
      }
      interface LiaOnDisplayToOrderSettings {
        shippingCostPolicyUrl?: string | undefined;
        status?: string | undefined;
      }
      interface LiaPosDataProvider {
        posDataProviderId?: string | undefined;
        posExternalAccountId?: string | undefined;
      }
      interface LiaSettings {
        accountId?: string | undefined;
        countrySettings?: Content.Schema.LiaCountrySettings[] | undefined;
        kind?: string | undefined;
      }
      interface LiasettingsCustomBatchRequest {
        entries?: Content.Schema.LiasettingsCustomBatchRequestEntry[] | undefined;
      }
      interface LiasettingsCustomBatchRequestEntry {
        accountId?: string | undefined;
        batchId?: number | undefined;
        contactEmail?: string | undefined;
        contactName?: string | undefined;
        country?: string | undefined;
        gmbEmail?: string | undefined;
        liaSettings?: Content.Schema.LiaSettings | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
        posDataProviderId?: string | undefined;
        posExternalAccountId?: string | undefined;
      }
      interface LiasettingsCustomBatchResponse {
        entries?: Content.Schema.LiasettingsCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface LiasettingsCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        gmbAccounts?: Content.Schema.GmbAccounts | undefined;
        kind?: string | undefined;
        liaSettings?: Content.Schema.LiaSettings | undefined;
        posDataProviders?: Content.Schema.PosDataProviders[] | undefined;
      }
      interface LiasettingsGetAccessibleGmbAccountsResponse {
        accountId?: string | undefined;
        gmbAccounts?: Content.Schema.GmbAccountsGmbAccount[] | undefined;
        kind?: string | undefined;
      }
      interface LiasettingsListPosDataProvidersResponse {
        kind?: string | undefined;
        posDataProviders?: Content.Schema.PosDataProviders[] | undefined;
      }
      interface LiasettingsListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.LiaSettings[] | undefined;
      }
      interface LiasettingsRequestGmbAccessResponse {
        kind?: string | undefined;
      }
      interface LiasettingsRequestInventoryVerificationResponse {
        kind?: string | undefined;
      }
      interface LiasettingsSetInventoryVerificationContactResponse {
        kind?: string | undefined;
      }
      interface LiasettingsSetPosDataProviderResponse {
        kind?: string | undefined;
      }
      interface LocationIdSet {
        locationIds?: string[] | undefined;
      }
      interface LoyaltyPoints {
        name?: string | undefined;
        pointsValue?: string | undefined;
        ratio?: number | undefined;
      }
      interface MerchantOrderReturn {
        creationDate?: string | undefined;
        merchantOrderId?: string | undefined;
        orderId?: string | undefined;
        orderReturnId?: string | undefined;
        returnItems?: Content.Schema.MerchantOrderReturnItem[] | undefined;
        returnShipments?: Content.Schema.ReturnShipment[] | undefined;
      }
      interface MerchantOrderReturnItem {
        customerReturnReason?: Content.Schema.CustomerReturnReason | undefined;
        itemId?: string | undefined;
        merchantReturnReason?: Content.Schema.RefundReason | undefined;
        product?: Content.Schema.OrderLineItemProduct | undefined;
        returnShipmentIds?: string[] | undefined;
        state?: string | undefined;
      }
      interface Order {
        acknowledged?: boolean | undefined;
        channelType?: string | undefined;
        customer?: Content.Schema.OrderCustomer | undefined;
        deliveryDetails?: Content.Schema.OrderDeliveryDetails | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        lineItems?: Content.Schema.OrderLineItem[] | undefined;
        merchantId?: string | undefined;
        merchantOrderId?: string | undefined;
        netAmount?: Content.Schema.Price | undefined;
        paymentMethod?: Content.Schema.OrderPaymentMethod | undefined;
        paymentStatus?: string | undefined;
        placedDate?: string | undefined;
        promotions?: Content.Schema.OrderLegacyPromotion[] | undefined;
        refunds?: Content.Schema.OrderRefund[] | undefined;
        shipments?: Content.Schema.OrderShipment[] | undefined;
        shippingCost?: Content.Schema.Price | undefined;
        shippingCostTax?: Content.Schema.Price | undefined;
        shippingOption?: string | undefined;
        status?: string | undefined;
        taxCollector?: string | undefined;
      }
      interface OrderAddress {
        country?: string | undefined;
        fullAddress?: string[] | undefined;
        isPostOfficeBox?: boolean | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        recipientName?: string | undefined;
        region?: string | undefined;
        streetAddress?: string[] | undefined;
      }
      interface OrderCancellation {
        actor?: string | undefined;
        creationDate?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrderCustomer {
        email?: string | undefined;
        explicitMarketingPreference?: boolean | undefined;
        fullName?: string | undefined;
        marketingRightsInfo?: Content.Schema.OrderCustomerMarketingRightsInfo | undefined;
      }
      interface OrderCustomerMarketingRightsInfo {
        explicitMarketingPreference?: string | undefined;
        lastUpdatedTimestamp?: string | undefined;
        marketingEmailAddress?: string | undefined;
      }
      interface OrderDeliveryDetails {
        address?: Content.Schema.OrderAddress | undefined;
        phoneNumber?: string | undefined;
      }
      interface OrderLegacyPromotion {
        benefits?: Content.Schema.OrderLegacyPromotionBenefit[] | undefined;
        effectiveDates?: string | undefined;
        genericRedemptionCode?: string | undefined;
        id?: string | undefined;
        longTitle?: string | undefined;
        productApplicability?: string | undefined;
        redemptionChannel?: string | undefined;
      }
      interface OrderLegacyPromotionBenefit {
        discount?: Content.Schema.Price | undefined;
        offerIds?: string[] | undefined;
        subType?: string | undefined;
        taxImpact?: Content.Schema.Price | undefined;
        type?: string | undefined;
      }
      interface OrderLineItem {
        annotations?: Content.Schema.OrderMerchantProvidedAnnotation[] | undefined;
        cancellations?: Content.Schema.OrderCancellation[] | undefined;
        id?: string | undefined;
        price?: Content.Schema.Price | undefined;
        product?: Content.Schema.OrderLineItemProduct | undefined;
        quantityCanceled?: number | undefined;
        quantityDelivered?: number | undefined;
        quantityOrdered?: number | undefined;
        quantityPending?: number | undefined;
        quantityReturned?: number | undefined;
        quantityShipped?: number | undefined;
        returnInfo?: Content.Schema.OrderLineItemReturnInfo | undefined;
        returns?: Content.Schema.OrderReturn[] | undefined;
        shippingDetails?: Content.Schema.OrderLineItemShippingDetails | undefined;
        tax?: Content.Schema.Price | undefined;
      }
      interface OrderLineItemProduct {
        brand?: string | undefined;
        channel?: string | undefined;
        condition?: string | undefined;
        contentLanguage?: string | undefined;
        fees?: Content.Schema.OrderLineItemProductFee[] | undefined;
        gtin?: string | undefined;
        id?: string | undefined;
        imageLink?: string | undefined;
        itemGroupId?: string | undefined;
        mpn?: string | undefined;
        offerId?: string | undefined;
        price?: Content.Schema.Price | undefined;
        shownImage?: string | undefined;
        targetCountry?: string | undefined;
        title?: string | undefined;
        variantAttributes?: Content.Schema.OrderLineItemProductVariantAttribute[] | undefined;
      }
      interface OrderLineItemProductFee {
        amount?: Content.Schema.Price | undefined;
        name?: string | undefined;
      }
      interface OrderLineItemProductVariantAttribute {
        dimension?: string | undefined;
        value?: string | undefined;
      }
      interface OrderLineItemReturnInfo {
        daysToReturn?: number | undefined;
        isReturnable?: boolean | undefined;
        policyUrl?: string | undefined;
      }
      interface OrderLineItemShippingDetails {
        deliverByDate?: string | undefined;
        method?: Content.Schema.OrderLineItemShippingDetailsMethod | undefined;
        shipByDate?: string | undefined;
      }
      interface OrderLineItemShippingDetailsMethod {
        carrier?: string | undefined;
        maxDaysInTransit?: number | undefined;
        methodName?: string | undefined;
        minDaysInTransit?: number | undefined;
      }
      interface OrderMerchantProvidedAnnotation {
        key?: string | undefined;
        value?: string | undefined;
      }
      interface OrderPaymentMethod {
        billingAddress?: Content.Schema.OrderAddress | undefined;
        expirationMonth?: number | undefined;
        expirationYear?: number | undefined;
        lastFourDigits?: string | undefined;
        phoneNumber?: string | undefined;
        type?: string | undefined;
      }
      interface OrderRefund {
        actor?: string | undefined;
        amount?: Content.Schema.Price | undefined;
        creationDate?: string | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrderReportDisbursement {
        disbursementAmount?: Content.Schema.Price | undefined;
        disbursementCreationDate?: string | undefined;
        disbursementDate?: string | undefined;
        disbursementId?: string | undefined;
        merchantId?: string | undefined;
      }
      interface OrderReportTransaction {
        disbursementAmount?: Content.Schema.Price | undefined;
        disbursementCreationDate?: string | undefined;
        disbursementDate?: string | undefined;
        disbursementId?: string | undefined;
        merchantId?: string | undefined;
        merchantOrderId?: string | undefined;
        orderId?: string | undefined;
        productAmount?: Content.Schema.Amount | undefined;
        productAmountWithRemittedTax?: Content.Schema.ProductAmount | undefined;
        transactionDate?: string | undefined;
      }
      interface OrderReturn {
        actor?: string | undefined;
        creationDate?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrderShipment {
        carrier?: string | undefined;
        creationDate?: string | undefined;
        deliveryDate?: string | undefined;
        id?: string | undefined;
        lineItems?: Content.Schema.OrderShipmentLineItemShipment[] | undefined;
        status?: string | undefined;
        trackingId?: string | undefined;
      }
      interface OrderShipmentLineItemShipment {
        lineItemId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
      }
      interface OrderinvoicesCreateChargeInvoiceRequest {
        invoiceId?: string | undefined;
        invoiceSummary?: Content.Schema.InvoiceSummary | undefined;
        lineItemInvoices?: Content.Schema.ShipmentInvoiceLineItemInvoice[] | undefined;
        operationId?: string | undefined;
        shipmentGroupId?: string | undefined;
      }
      interface OrderinvoicesCreateChargeInvoiceResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrderinvoicesCreateRefundInvoiceRequest {
        invoiceId?: string | undefined;
        operationId?: string | undefined;
        refundOnlyOption?: Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption | undefined;
        returnOption?: Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption | undefined;
        shipmentInvoices?: Content.Schema.ShipmentInvoice[] | undefined;
      }
      interface OrderinvoicesCreateRefundInvoiceResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
        description?: string | undefined;
        reason?: string | undefined;
      }
      interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
        description?: string | undefined;
        reason?: string | undefined;
      }
      interface OrderpaymentsNotifyAuthApprovedRequest {
        authAmountPretax?: Content.Schema.Price | undefined;
        authAmountTax?: Content.Schema.Price | undefined;
      }
      interface OrderpaymentsNotifyAuthApprovedResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrderpaymentsNotifyAuthDeclinedRequest {
        declineReason?: string | undefined;
      }
      interface OrderpaymentsNotifyAuthDeclinedResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrderpaymentsNotifyChargeRequest {
        chargeState?: string | undefined;
        invoiceId?: string | undefined;
        invoiceIds?: string[] | undefined;
      }
      interface OrderpaymentsNotifyChargeResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrderpaymentsNotifyRefundRequest {
        invoiceId?: string | undefined;
        invoiceIds?: string[] | undefined;
        refundState?: string | undefined;
      }
      interface OrderpaymentsNotifyRefundResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrderreportsListDisbursementsResponse {
        disbursements?: Content.Schema.OrderReportDisbursement[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface OrderreportsListTransactionsResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        transactions?: Content.Schema.OrderReportTransaction[] | undefined;
      }
      interface OrderreturnsListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.MerchantOrderReturn[] | undefined;
      }
      interface OrdersAcknowledgeRequest {
        operationId?: string | undefined;
      }
      interface OrdersAcknowledgeResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersAdvanceTestOrderResponse {
        kind?: string | undefined;
      }
      interface OrdersCancelLineItemRequest {
        amount?: Content.Schema.Price | undefined;
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCancelLineItemResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersCancelRequest {
        operationId?: string | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCancelResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersCancelTestOrderByCustomerRequest {
        reason?: string | undefined;
      }
      interface OrdersCancelTestOrderByCustomerResponse {
        kind?: string | undefined;
      }
      interface OrdersCreateTestOrderRequest {
        country?: string | undefined;
        templateName?: string | undefined;
        testOrder?: Content.Schema.TestOrder | undefined;
      }
      interface OrdersCreateTestOrderResponse {
        kind?: string | undefined;
        orderId?: string | undefined;
      }
      interface OrdersCreateTestReturnRequest {
        items?: Content.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[] | undefined;
      }
      interface OrdersCreateTestReturnResponse {
        kind?: string | undefined;
        returnId?: string | undefined;
      }
      interface OrdersCustomBatchRequest {
        entries?: Content.Schema.OrdersCustomBatchRequestEntry[] | undefined;
      }
      interface OrdersCustomBatchRequestEntry {
        batchId?: number | undefined;
        cancel?: Content.Schema.OrdersCustomBatchRequestEntryCancel | undefined;
        cancelLineItem?: Content.Schema.OrdersCustomBatchRequestEntryCancelLineItem | undefined;
        inStoreRefundLineItem?: Content.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem | undefined;
        merchantId?: string | undefined;
        merchantOrderId?: string | undefined;
        method?: string | undefined;
        operationId?: string | undefined;
        orderId?: string | undefined;
        refund?: Content.Schema.OrdersCustomBatchRequestEntryRefund | undefined;
        rejectReturnLineItem?: Content.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem | undefined;
        returnLineItem?: Content.Schema.OrdersCustomBatchRequestEntryReturnLineItem | undefined;
        returnRefundLineItem?: Content.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem | undefined;
        setLineItemMetadata?: Content.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata | undefined;
        shipLineItems?: Content.Schema.OrdersCustomBatchRequestEntryShipLineItems | undefined;
        updateLineItemShippingDetails?: Content.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails | undefined;
        updateShipment?: Content.Schema.OrdersCustomBatchRequestEntryUpdateShipment | undefined;
      }
      interface OrdersCustomBatchRequestEntryCancel {
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryCancelLineItem {
        amount?: Content.Schema.Price | undefined;
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        lineItemId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {
        lineItemId?: string | undefined;
        quantity?: number | undefined;
      }
      interface OrdersCustomBatchRequestEntryInStoreRefundLineItem {
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        lineItemId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryRefund {
        amount?: Content.Schema.Price | undefined;
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryRejectReturnLineItem {
        lineItemId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryReturnLineItem {
        lineItemId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryReturnRefundLineItem {
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        lineItemId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntrySetLineItemMetadata {
        annotations?: Content.Schema.OrderMerchantProvidedAnnotation[] | undefined;
        lineItemId?: string | undefined;
        productId?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryShipLineItems {
        carrier?: string | undefined;
        lineItems?: Content.Schema.OrderShipmentLineItemShipment[] | undefined;
        shipmentGroupId?: string | undefined;
        shipmentId?: string | undefined;
        shipmentInfos?: Content.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] | undefined;
        trackingId?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
        carrier?: string | undefined;
        shipmentId?: string | undefined;
        trackingId?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
        deliverByDate?: string | undefined;
        lineItemId?: string | undefined;
        productId?: string | undefined;
        shipByDate?: string | undefined;
      }
      interface OrdersCustomBatchRequestEntryUpdateShipment {
        carrier?: string | undefined;
        deliveryDate?: string | undefined;
        shipmentId?: string | undefined;
        status?: string | undefined;
        trackingId?: string | undefined;
      }
      interface OrdersCustomBatchResponse {
        entries?: Content.Schema.OrdersCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface OrdersCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        executionStatus?: string | undefined;
        kind?: string | undefined;
        order?: Content.Schema.Order | undefined;
      }
      interface OrdersGetByMerchantOrderIdResponse {
        kind?: string | undefined;
        order?: Content.Schema.Order | undefined;
      }
      interface OrdersGetTestOrderTemplateResponse {
        kind?: string | undefined;
        template?: Content.Schema.TestOrder | undefined;
      }
      interface OrdersInStoreRefundLineItemRequest {
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersInStoreRefundLineItemResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.Order[] | undefined;
      }
      interface OrdersRefundRequest {
        amount?: Content.Schema.Price | undefined;
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        operationId?: string | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersRefundResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersRejectReturnLineItemRequest {
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersRejectReturnLineItemResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersReturnLineItemRequest {
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersReturnLineItemResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersReturnRefundLineItemRequest {
        amountPretax?: Content.Schema.Price | undefined;
        amountTax?: Content.Schema.Price | undefined;
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
        quantity?: number | undefined;
        reason?: string | undefined;
        reasonText?: string | undefined;
      }
      interface OrdersReturnRefundLineItemResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersSetLineItemMetadataRequest {
        annotations?: Content.Schema.OrderMerchantProvidedAnnotation[] | undefined;
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
      }
      interface OrdersSetLineItemMetadataResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersShipLineItemsRequest {
        carrier?: string | undefined;
        lineItems?: Content.Schema.OrderShipmentLineItemShipment[] | undefined;
        operationId?: string | undefined;
        shipmentGroupId?: string | undefined;
        shipmentId?: string | undefined;
        shipmentInfos?: Content.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] | undefined;
        trackingId?: string | undefined;
      }
      interface OrdersShipLineItemsResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersUpdateLineItemShippingDetailsRequest {
        deliverByDate?: string | undefined;
        lineItemId?: string | undefined;
        operationId?: string | undefined;
        productId?: string | undefined;
        shipByDate?: string | undefined;
      }
      interface OrdersUpdateLineItemShippingDetailsResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersUpdateMerchantOrderIdRequest {
        merchantOrderId?: string | undefined;
        operationId?: string | undefined;
      }
      interface OrdersUpdateMerchantOrderIdResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface OrdersUpdateShipmentRequest {
        carrier?: string | undefined;
        deliveryDate?: string | undefined;
        operationId?: string | undefined;
        shipmentId?: string | undefined;
        status?: string | undefined;
        trackingId?: string | undefined;
      }
      interface OrdersUpdateShipmentResponse {
        executionStatus?: string | undefined;
        kind?: string | undefined;
      }
      interface PosCustomBatchRequest {
        entries?: Content.Schema.PosCustomBatchRequestEntry[] | undefined;
      }
      interface PosCustomBatchRequestEntry {
        batchId?: number | undefined;
        inventory?: Content.Schema.PosInventory | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
        sale?: Content.Schema.PosSale | undefined;
        store?: Content.Schema.PosStore | undefined;
        storeCode?: string | undefined;
        targetMerchantId?: string | undefined;
      }
      interface PosCustomBatchResponse {
        entries?: Content.Schema.PosCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface PosCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        inventory?: Content.Schema.PosInventory | undefined;
        kind?: string | undefined;
        sale?: Content.Schema.PosSale | undefined;
        store?: Content.Schema.PosStore | undefined;
      }
      interface PosDataProviders {
        country?: string | undefined;
        posDataProviders?: Content.Schema.PosDataProvidersPosDataProvider[] | undefined;
      }
      interface PosDataProvidersPosDataProvider {
        displayName?: string | undefined;
        fullName?: string | undefined;
        providerId?: string | undefined;
      }
      interface PosInventory {
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        itemId?: string | undefined;
        kind?: string | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: string | undefined;
        storeCode?: string | undefined;
        targetCountry?: string | undefined;
        timestamp?: string | undefined;
      }
      interface PosInventoryRequest {
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        itemId?: string | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: string | undefined;
        storeCode?: string | undefined;
        targetCountry?: string | undefined;
        timestamp?: string | undefined;
      }
      interface PosInventoryResponse {
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        itemId?: string | undefined;
        kind?: string | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: string | undefined;
        storeCode?: string | undefined;
        targetCountry?: string | undefined;
        timestamp?: string | undefined;
      }
      interface PosListResponse {
        kind?: string | undefined;
        resources?: Content.Schema.PosStore[] | undefined;
      }
      interface PosSale {
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        itemId?: string | undefined;
        kind?: string | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: string | undefined;
        saleId?: string | undefined;
        storeCode?: string | undefined;
        targetCountry?: string | undefined;
        timestamp?: string | undefined;
      }
      interface PosSaleRequest {
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        itemId?: string | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: string | undefined;
        saleId?: string | undefined;
        storeCode?: string | undefined;
        targetCountry?: string | undefined;
        timestamp?: string | undefined;
      }
      interface PosSaleResponse {
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        itemId?: string | undefined;
        kind?: string | undefined;
        price?: Content.Schema.Price | undefined;
        quantity?: string | undefined;
        saleId?: string | undefined;
        storeCode?: string | undefined;
        targetCountry?: string | undefined;
        timestamp?: string | undefined;
      }
      interface PosStore {
        kind?: string | undefined;
        storeAddress?: string | undefined;
        storeCode?: string | undefined;
      }
      interface PostalCodeGroup {
        country?: string | undefined;
        name?: string | undefined;
        postalCodeRanges?: Content.Schema.PostalCodeRange[] | undefined;
      }
      interface PostalCodeRange {
        postalCodeRangeBegin?: string | undefined;
        postalCodeRangeEnd?: string | undefined;
      }
      interface Price {
        currency?: string | undefined;
        value?: string | undefined;
      }
      interface Product {
        additionalImageLinks?: string[] | undefined;
        additionalProductTypes?: string[] | undefined;
        adult?: boolean | undefined;
        adwordsGrouping?: string | undefined;
        adwordsLabels?: string[] | undefined;
        adwordsRedirect?: string | undefined;
        ageGroup?: string | undefined;
        aspects?: Content.Schema.ProductAspect[] | undefined;
        availability?: string | undefined;
        availabilityDate?: string | undefined;
        brand?: string | undefined;
        channel?: string | undefined;
        color?: string | undefined;
        condition?: string | undefined;
        contentLanguage?: string | undefined;
        costOfGoodsSold?: Content.Schema.Price | undefined;
        customAttributes?: Content.Schema.CustomAttribute[] | undefined;
        customGroups?: Content.Schema.CustomGroup[] | undefined;
        customLabel0?: string | undefined;
        customLabel1?: string | undefined;
        customLabel2?: string | undefined;
        customLabel3?: string | undefined;
        customLabel4?: string | undefined;
        description?: string | undefined;
        destinations?: Content.Schema.ProductDestination[] | undefined;
        displayAdsId?: string | undefined;
        displayAdsLink?: string | undefined;
        displayAdsSimilarIds?: string[] | undefined;
        displayAdsTitle?: string | undefined;
        displayAdsValue?: number | undefined;
        energyEfficiencyClass?: string | undefined;
        expirationDate?: string | undefined;
        gender?: string | undefined;
        googleProductCategory?: string | undefined;
        gtin?: string | undefined;
        id?: string | undefined;
        identifierExists?: boolean | undefined;
        imageLink?: string | undefined;
        installment?: Content.Schema.Installment | undefined;
        isBundle?: boolean | undefined;
        itemGroupId?: string | undefined;
        kind?: string | undefined;
        link?: string | undefined;
        loyaltyPoints?: Content.Schema.LoyaltyPoints | undefined;
        material?: string | undefined;
        maxEnergyEfficiencyClass?: string | undefined;
        maxHandlingTime?: string | undefined;
        minEnergyEfficiencyClass?: string | undefined;
        minHandlingTime?: string | undefined;
        mobileLink?: string | undefined;
        mpn?: string | undefined;
        multipack?: string | undefined;
        offerId?: string | undefined;
        onlineOnly?: boolean | undefined;
        pattern?: string | undefined;
        price?: Content.Schema.Price | undefined;
        productType?: string | undefined;
        promotionIds?: string[] | undefined;
        salePrice?: Content.Schema.Price | undefined;
        salePriceEffectiveDate?: string | undefined;
        sellOnGoogleQuantity?: string | undefined;
        shipping?: Content.Schema.ProductShipping[] | undefined;
        shippingHeight?: Content.Schema.ProductShippingDimension | undefined;
        shippingLabel?: string | undefined;
        shippingLength?: Content.Schema.ProductShippingDimension | undefined;
        shippingWeight?: Content.Schema.ProductShippingWeight | undefined;
        shippingWidth?: Content.Schema.ProductShippingDimension | undefined;
        sizeSystem?: string | undefined;
        sizeType?: string | undefined;
        sizes?: string[] | undefined;
        source?: string | undefined;
        targetCountry?: string | undefined;
        taxes?: Content.Schema.ProductTax[] | undefined;
        title?: string | undefined;
        unitPricingBaseMeasure?: Content.Schema.ProductUnitPricingBaseMeasure | undefined;
        unitPricingMeasure?: Content.Schema.ProductUnitPricingMeasure | undefined;
        validatedDestinations?: string[] | undefined;
        warnings?: Content.Schema.Error[] | undefined;
      }
      interface ProductAmount {
        priceAmount?: Content.Schema.Price | undefined;
        remittedTaxAmount?: Content.Schema.Price | undefined;
        taxAmount?: Content.Schema.Price | undefined;
      }
      interface ProductAspect {
        aspectName?: string | undefined;
        destinationName?: string | undefined;
        intention?: string | undefined;
      }
      interface ProductDestination {
        destinationName?: string | undefined;
        intention?: string | undefined;
      }
      interface ProductShipping {
        country?: string | undefined;
        locationGroupName?: string | undefined;
        locationId?: string | undefined;
        postalCode?: string | undefined;
        price?: Content.Schema.Price | undefined;
        region?: string | undefined;
        service?: string | undefined;
      }
      interface ProductShippingDimension {
        unit?: string | undefined;
        value?: number | undefined;
      }
      interface ProductShippingWeight {
        unit?: string | undefined;
        value?: number | undefined;
      }
      interface ProductStatus {
        creationDate?: string | undefined;
        dataQualityIssues?: Content.Schema.ProductStatusDataQualityIssue[] | undefined;
        destinationStatuses?: Content.Schema.ProductStatusDestinationStatus[] | undefined;
        googleExpirationDate?: string | undefined;
        itemLevelIssues?: Content.Schema.ProductStatusItemLevelIssue[] | undefined;
        kind?: string | undefined;
        lastUpdateDate?: string | undefined;
        link?: string | undefined;
        product?: Content.Schema.Product | undefined;
        productId?: string | undefined;
        title?: string | undefined;
      }
      interface ProductStatusDataQualityIssue {
        destination?: string | undefined;
        detail?: string | undefined;
        fetchStatus?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        severity?: string | undefined;
        timestamp?: string | undefined;
        valueOnLandingPage?: string | undefined;
        valueProvided?: string | undefined;
      }
      interface ProductStatusDestinationStatus {
        approvalPending?: boolean | undefined;
        approvalStatus?: string | undefined;
        destination?: string | undefined;
        intention?: string | undefined;
      }
      interface ProductStatusItemLevelIssue {
        attributeName?: string | undefined;
        code?: string | undefined;
        description?: string | undefined;
        destination?: string | undefined;
        detail?: string | undefined;
        documentation?: string | undefined;
        resolution?: string | undefined;
        servability?: string | undefined;
      }
      interface ProductTax {
        country?: string | undefined;
        locationId?: string | undefined;
        postalCode?: string | undefined;
        rate?: number | undefined;
        region?: string | undefined;
        taxShip?: boolean | undefined;
      }
      interface ProductUnitPricingBaseMeasure {
        unit?: string | undefined;
        value?: string | undefined;
      }
      interface ProductUnitPricingMeasure {
        unit?: string | undefined;
        value?: number | undefined;
      }
      interface ProductsCustomBatchRequest {
        entries?: Content.Schema.ProductsCustomBatchRequestEntry[] | undefined;
      }
      interface ProductsCustomBatchRequestEntry {
        batchId?: number | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
        product?: Content.Schema.Product | undefined;
        productId?: string | undefined;
      }
      interface ProductsCustomBatchResponse {
        entries?: Content.Schema.ProductsCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface ProductsCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        kind?: string | undefined;
        product?: Content.Schema.Product | undefined;
      }
      interface ProductsListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.Product[] | undefined;
      }
      interface ProductstatusesCustomBatchRequest {
        entries?: Content.Schema.ProductstatusesCustomBatchRequestEntry[] | undefined;
      }
      interface ProductstatusesCustomBatchRequestEntry {
        batchId?: number | undefined;
        destinations?: string[] | undefined;
        includeAttributes?: boolean | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
        productId?: string | undefined;
      }
      interface ProductstatusesCustomBatchResponse {
        entries?: Content.Schema.ProductstatusesCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface ProductstatusesCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        kind?: string | undefined;
        productStatus?: Content.Schema.ProductStatus | undefined;
      }
      interface ProductstatusesListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.ProductStatus[] | undefined;
      }
      interface Promotion {
        promotionAmount?: Content.Schema.Amount | undefined;
        promotionId?: string | undefined;
      }
      interface RateGroup {
        applicableShippingLabels?: string[] | undefined;
        carrierRates?: Content.Schema.CarrierRate[] | undefined;
        mainTable?: Content.Schema.Table | undefined;
        name?: string | undefined;
        singleValue?: Content.Schema.Value | undefined;
        subtables?: Content.Schema.Table[] | undefined;
      }
      interface RefundReason {
        description?: string | undefined;
        reasonCode?: string | undefined;
      }
      interface ReturnShipment {
        creationDate?: string | undefined;
        deliveryDate?: string | undefined;
        returnMethodType?: string | undefined;
        shipmentId?: string | undefined;
        shipmentTrackingInfos?: Content.Schema.ShipmentTrackingInfo[] | undefined;
        shippingDate?: string | undefined;
        state?: string | undefined;
      }
      interface Row {
        cells?: Content.Schema.Value[] | undefined;
      }
      interface Service {
        active?: boolean | undefined;
        currency?: string | undefined;
        deliveryCountry?: string | undefined;
        deliveryTime?: Content.Schema.DeliveryTime | undefined;
        eligibility?: string | undefined;
        minimumOrderValue?: Content.Schema.Price | undefined;
        name?: string | undefined;
        rateGroups?: Content.Schema.RateGroup[] | undefined;
      }
      interface ShipmentInvoice {
        invoiceSummary?: Content.Schema.InvoiceSummary | undefined;
        lineItemInvoices?: Content.Schema.ShipmentInvoiceLineItemInvoice[] | undefined;
        shipmentGroupId?: string | undefined;
      }
      interface ShipmentInvoiceLineItemInvoice {
        lineItemId?: string | undefined;
        productId?: string | undefined;
        shipmentUnitIds?: string[] | undefined;
        unitInvoice?: Content.Schema.UnitInvoice | undefined;
      }
      interface ShipmentTrackingInfo {
        carrier?: string | undefined;
        trackingNumber?: string | undefined;
      }
      interface ShippingSettings {
        accountId?: string | undefined;
        postalCodeGroups?: Content.Schema.PostalCodeGroup[] | undefined;
        services?: Content.Schema.Service[] | undefined;
      }
      interface ShippingsettingsCustomBatchRequest {
        entries?: Content.Schema.ShippingsettingsCustomBatchRequestEntry[] | undefined;
      }
      interface ShippingsettingsCustomBatchRequestEntry {
        accountId?: string | undefined;
        batchId?: number | undefined;
        merchantId?: string | undefined;
        method?: string | undefined;
        shippingSettings?: Content.Schema.ShippingSettings | undefined;
      }
      interface ShippingsettingsCustomBatchResponse {
        entries?: Content.Schema.ShippingsettingsCustomBatchResponseEntry[] | undefined;
        kind?: string | undefined;
      }
      interface ShippingsettingsCustomBatchResponseEntry {
        batchId?: number | undefined;
        errors?: Content.Schema.Errors | undefined;
        kind?: string | undefined;
        shippingSettings?: Content.Schema.ShippingSettings | undefined;
      }
      interface ShippingsettingsGetSupportedCarriersResponse {
        carriers?: Content.Schema.CarriersCarrier[] | undefined;
        kind?: string | undefined;
      }
      interface ShippingsettingsGetSupportedHolidaysResponse {
        holidays?: Content.Schema.HolidaysHoliday[] | undefined;
        kind?: string | undefined;
      }
      interface ShippingsettingsListResponse {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        resources?: Content.Schema.ShippingSettings[] | undefined;
      }
      interface Table {
        columnHeaders?: Content.Schema.Headers | undefined;
        name?: string | undefined;
        rowHeaders?: Content.Schema.Headers | undefined;
        rows?: Content.Schema.Row[] | undefined;
      }
      interface TestOrder {
        customer?: Content.Schema.TestOrderCustomer | undefined;
        enableOrderinvoices?: boolean | undefined;
        kind?: string | undefined;
        lineItems?: Content.Schema.TestOrderLineItem[] | undefined;
        notificationMode?: string | undefined;
        paymentMethod?: Content.Schema.TestOrderPaymentMethod | undefined;
        predefinedDeliveryAddress?: string | undefined;
        promotions?: Content.Schema.OrderLegacyPromotion[] | undefined;
        shippingCost?: Content.Schema.Price | undefined;
        shippingCostTax?: Content.Schema.Price | undefined;
        shippingOption?: string | undefined;
      }
      interface TestOrderCustomer {
        email?: string | undefined;
        explicitMarketingPreference?: boolean | undefined;
        fullName?: string | undefined;
        marketingRightsInfo?: Content.Schema.TestOrderCustomerMarketingRightsInfo | undefined;
      }
      interface TestOrderCustomerMarketingRightsInfo {
        explicitMarketingPreference?: string | undefined;
        lastUpdatedTimestamp?: string | undefined;
      }
      interface TestOrderLineItem {
        product?: Content.Schema.TestOrderLineItemProduct | undefined;
        quantityOrdered?: number | undefined;
        returnInfo?: Content.Schema.OrderLineItemReturnInfo | undefined;
        shippingDetails?: Content.Schema.OrderLineItemShippingDetails | undefined;
        unitTax?: Content.Schema.Price | undefined;
      }
      interface TestOrderLineItemProduct {
        brand?: string | undefined;
        channel?: string | undefined;
        condition?: string | undefined;
        contentLanguage?: string | undefined;
        gtin?: string | undefined;
        imageLink?: string | undefined;
        itemGroupId?: string | undefined;
        mpn?: string | undefined;
        offerId?: string | undefined;
        price?: Content.Schema.Price | undefined;
        targetCountry?: string | undefined;
        title?: string | undefined;
        variantAttributes?: Content.Schema.OrderLineItemProductVariantAttribute[] | undefined;
      }
      interface TestOrderPaymentMethod {
        expirationMonth?: number | undefined;
        expirationYear?: number | undefined;
        lastFourDigits?: string | undefined;
        predefinedBillingAddress?: string | undefined;
        type?: string | undefined;
      }
      interface TransitTable {
        postalCodeGroupNames?: string[] | undefined;
        rows?: Content.Schema.TransitTableTransitTimeRow[] | undefined;
        transitTimeLabels?: string[] | undefined;
      }
      interface TransitTableTransitTimeRow {
        values?: Content.Schema.TransitTableTransitTimeRowTransitTimeValue[] | undefined;
      }
      interface TransitTableTransitTimeRowTransitTimeValue {
        maxTransitTimeInDays?: number | undefined;
        minTransitTimeInDays?: number | undefined;
      }
      interface UnitInvoice {
        additionalCharges?: Content.Schema.UnitInvoiceAdditionalCharge[] | undefined;
        promotions?: Content.Schema.Promotion[] | undefined;
        unitPricePretax?: Content.Schema.Price | undefined;
        unitPriceTaxes?: Content.Schema.UnitInvoiceTaxLine[] | undefined;
      }
      interface UnitInvoiceAdditionalCharge {
        additionalChargeAmount?: Content.Schema.Amount | undefined;
        additionalChargePromotions?: Content.Schema.Promotion[] | undefined;
        type?: string | undefined;
      }
      interface UnitInvoiceTaxLine {
        taxAmount?: Content.Schema.Price | undefined;
        taxName?: string | undefined;
        taxType?: string | undefined;
      }
      interface Value {
        carrierRateName?: string | undefined;
        flatRate?: Content.Schema.Price | undefined;
        noShipping?: boolean | undefined;
        pricePercentage?: string | undefined;
        subtableName?: string | undefined;
      }
      interface Weight {
        unit?: string | undefined;
        value?: string | undefined;
      }
    }
  }
  interface Content {
    Accounts?: Content.Collection.AccountsCollection | undefined;
    Accountstatuses?: Content.Collection.AccountstatusesCollection | undefined;
    Accounttax?: Content.Collection.AccounttaxCollection | undefined;
    Datafeeds?: Content.Collection.DatafeedsCollection | undefined;
    Datafeedstatuses?: Content.Collection.DatafeedstatusesCollection | undefined;
    Inventory?: Content.Collection.InventoryCollection | undefined;
    Liasettings?: Content.Collection.LiasettingsCollection | undefined;
    Orderinvoices?: Content.Collection.OrderinvoicesCollection | undefined;
    Orderpayments?: Content.Collection.OrderpaymentsCollection | undefined;
    Orderreports?: Content.Collection.OrderreportsCollection | undefined;
    Orderreturns?: Content.Collection.OrderreturnsCollection | undefined;
    Orders?: Content.Collection.OrdersCollection | undefined;
    Pos?: Content.Collection.PosCollection | undefined;
    Products?: Content.Collection.ProductsCollection | undefined;
    Productstatuses?: Content.Collection.ProductstatusesCollection | undefined;
    Shippingsettings?: Content.Collection.ShippingsettingsCollection | undefined;
    // Create a new instance of Account
    newAccount(): Content.Schema.Account;
    // Create a new instance of AccountAddress
    newAccountAddress(): Content.Schema.AccountAddress;
    // Create a new instance of AccountAdwordsLink
    newAccountAdwordsLink(): Content.Schema.AccountAdwordsLink;
    // Create a new instance of AccountBusinessInformation
    newAccountBusinessInformation(): Content.Schema.AccountBusinessInformation;
    // Create a new instance of AccountCustomerService
    newAccountCustomerService(): Content.Schema.AccountCustomerService;
    // Create a new instance of AccountGoogleMyBusinessLink
    newAccountGoogleMyBusinessLink(): Content.Schema.AccountGoogleMyBusinessLink;
    // Create a new instance of AccountTax
    newAccountTax(): Content.Schema.AccountTax;
    // Create a new instance of AccountTaxTaxRule
    newAccountTaxTaxRule(): Content.Schema.AccountTaxTaxRule;
    // Create a new instance of AccountUser
    newAccountUser(): Content.Schema.AccountUser;
    // Create a new instance of AccountYouTubeChannelLink
    newAccountYouTubeChannelLink(): Content.Schema.AccountYouTubeChannelLink;
    // Create a new instance of AccountsCustomBatchRequest
    newAccountsCustomBatchRequest(): Content.Schema.AccountsCustomBatchRequest;
    // Create a new instance of AccountsCustomBatchRequestEntry
    newAccountsCustomBatchRequestEntry(): Content.Schema.AccountsCustomBatchRequestEntry;
    // Create a new instance of AccountsCustomBatchRequestEntryLinkRequest
    newAccountsCustomBatchRequestEntryLinkRequest(): Content.Schema.AccountsCustomBatchRequestEntryLinkRequest;
    // Create a new instance of AccountsLinkRequest
    newAccountsLinkRequest(): Content.Schema.AccountsLinkRequest;
    // Create a new instance of AccountstatusesCustomBatchRequest
    newAccountstatusesCustomBatchRequest(): Content.Schema.AccountstatusesCustomBatchRequest;
    // Create a new instance of AccountstatusesCustomBatchRequestEntry
    newAccountstatusesCustomBatchRequestEntry(): Content.Schema.AccountstatusesCustomBatchRequestEntry;
    // Create a new instance of AccounttaxCustomBatchRequest
    newAccounttaxCustomBatchRequest(): Content.Schema.AccounttaxCustomBatchRequest;
    // Create a new instance of AccounttaxCustomBatchRequestEntry
    newAccounttaxCustomBatchRequestEntry(): Content.Schema.AccounttaxCustomBatchRequestEntry;
    // Create a new instance of Amount
    newAmount(): Content.Schema.Amount;
    // Create a new instance of CarrierRate
    newCarrierRate(): Content.Schema.CarrierRate;
    // Create a new instance of CustomAttribute
    newCustomAttribute(): Content.Schema.CustomAttribute;
    // Create a new instance of CustomGroup
    newCustomGroup(): Content.Schema.CustomGroup;
    // Create a new instance of CutoffTime
    newCutoffTime(): Content.Schema.CutoffTime;
    // Create a new instance of Datafeed
    newDatafeed(): Content.Schema.Datafeed;
    // Create a new instance of DatafeedFetchSchedule
    newDatafeedFetchSchedule(): Content.Schema.DatafeedFetchSchedule;
    // Create a new instance of DatafeedFormat
    newDatafeedFormat(): Content.Schema.DatafeedFormat;
    // Create a new instance of DatafeedTarget
    newDatafeedTarget(): Content.Schema.DatafeedTarget;
    // Create a new instance of DatafeedsCustomBatchRequest
    newDatafeedsCustomBatchRequest(): Content.Schema.DatafeedsCustomBatchRequest;
    // Create a new instance of DatafeedsCustomBatchRequestEntry
    newDatafeedsCustomBatchRequestEntry(): Content.Schema.DatafeedsCustomBatchRequestEntry;
    // Create a new instance of DatafeedstatusesCustomBatchRequest
    newDatafeedstatusesCustomBatchRequest(): Content.Schema.DatafeedstatusesCustomBatchRequest;
    // Create a new instance of DatafeedstatusesCustomBatchRequestEntry
    newDatafeedstatusesCustomBatchRequestEntry(): Content.Schema.DatafeedstatusesCustomBatchRequestEntry;
    // Create a new instance of DeliveryTime
    newDeliveryTime(): Content.Schema.DeliveryTime;
    // Create a new instance of Error
    newError(): Content.Schema.Error;
    // Create a new instance of Headers
    newHeaders(): Content.Schema.Headers;
    // Create a new instance of HolidayCutoff
    newHolidayCutoff(): Content.Schema.HolidayCutoff;
    // Create a new instance of Installment
    newInstallment(): Content.Schema.Installment;
    // Create a new instance of Inventory
    newInventory(): Content.Schema.Inventory;
    // Create a new instance of InventoryCustomBatchRequest
    newInventoryCustomBatchRequest(): Content.Schema.InventoryCustomBatchRequest;
    // Create a new instance of InventoryCustomBatchRequestEntry
    newInventoryCustomBatchRequestEntry(): Content.Schema.InventoryCustomBatchRequestEntry;
    // Create a new instance of InventoryPickup
    newInventoryPickup(): Content.Schema.InventoryPickup;
    // Create a new instance of InventorySetRequest
    newInventorySetRequest(): Content.Schema.InventorySetRequest;
    // Create a new instance of InvoiceSummary
    newInvoiceSummary(): Content.Schema.InvoiceSummary;
    // Create a new instance of InvoiceSummaryAdditionalChargeSummary
    newInvoiceSummaryAdditionalChargeSummary(): Content.Schema.InvoiceSummaryAdditionalChargeSummary;
    // Create a new instance of LiaAboutPageSettings
    newLiaAboutPageSettings(): Content.Schema.LiaAboutPageSettings;
    // Create a new instance of LiaCountrySettings
    newLiaCountrySettings(): Content.Schema.LiaCountrySettings;
    // Create a new instance of LiaInventorySettings
    newLiaInventorySettings(): Content.Schema.LiaInventorySettings;
    // Create a new instance of LiaOnDisplayToOrderSettings
    newLiaOnDisplayToOrderSettings(): Content.Schema.LiaOnDisplayToOrderSettings;
    // Create a new instance of LiaPosDataProvider
    newLiaPosDataProvider(): Content.Schema.LiaPosDataProvider;
    // Create a new instance of LiaSettings
    newLiaSettings(): Content.Schema.LiaSettings;
    // Create a new instance of LiasettingsCustomBatchRequest
    newLiasettingsCustomBatchRequest(): Content.Schema.LiasettingsCustomBatchRequest;
    // Create a new instance of LiasettingsCustomBatchRequestEntry
    newLiasettingsCustomBatchRequestEntry(): Content.Schema.LiasettingsCustomBatchRequestEntry;
    // Create a new instance of LocationIdSet
    newLocationIdSet(): Content.Schema.LocationIdSet;
    // Create a new instance of LoyaltyPoints
    newLoyaltyPoints(): Content.Schema.LoyaltyPoints;
    // Create a new instance of OrderLegacyPromotion
    newOrderLegacyPromotion(): Content.Schema.OrderLegacyPromotion;
    // Create a new instance of OrderLegacyPromotionBenefit
    newOrderLegacyPromotionBenefit(): Content.Schema.OrderLegacyPromotionBenefit;
    // Create a new instance of OrderLineItemProductVariantAttribute
    newOrderLineItemProductVariantAttribute(): Content.Schema.OrderLineItemProductVariantAttribute;
    // Create a new instance of OrderLineItemReturnInfo
    newOrderLineItemReturnInfo(): Content.Schema.OrderLineItemReturnInfo;
    // Create a new instance of OrderLineItemShippingDetails
    newOrderLineItemShippingDetails(): Content.Schema.OrderLineItemShippingDetails;
    // Create a new instance of OrderLineItemShippingDetailsMethod
    newOrderLineItemShippingDetailsMethod(): Content.Schema.OrderLineItemShippingDetailsMethod;
    // Create a new instance of OrderMerchantProvidedAnnotation
    newOrderMerchantProvidedAnnotation(): Content.Schema.OrderMerchantProvidedAnnotation;
    // Create a new instance of OrderShipmentLineItemShipment
    newOrderShipmentLineItemShipment(): Content.Schema.OrderShipmentLineItemShipment;
    // Create a new instance of OrderinvoicesCreateChargeInvoiceRequest
    newOrderinvoicesCreateChargeInvoiceRequest(): Content.Schema.OrderinvoicesCreateChargeInvoiceRequest;
    // Create a new instance of OrderinvoicesCreateRefundInvoiceRequest
    newOrderinvoicesCreateRefundInvoiceRequest(): Content.Schema.OrderinvoicesCreateRefundInvoiceRequest;
    // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption
    newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption(): Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
    // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption
    newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption(): Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
    // Create a new instance of OrderpaymentsNotifyAuthApprovedRequest
    newOrderpaymentsNotifyAuthApprovedRequest(): Content.Schema.OrderpaymentsNotifyAuthApprovedRequest;
    // Create a new instance of OrderpaymentsNotifyAuthDeclinedRequest
    newOrderpaymentsNotifyAuthDeclinedRequest(): Content.Schema.OrderpaymentsNotifyAuthDeclinedRequest;
    // Create a new instance of OrderpaymentsNotifyChargeRequest
    newOrderpaymentsNotifyChargeRequest(): Content.Schema.OrderpaymentsNotifyChargeRequest;
    // Create a new instance of OrderpaymentsNotifyRefundRequest
    newOrderpaymentsNotifyRefundRequest(): Content.Schema.OrderpaymentsNotifyRefundRequest;
    // Create a new instance of OrdersAcknowledgeRequest
    newOrdersAcknowledgeRequest(): Content.Schema.OrdersAcknowledgeRequest;
    // Create a new instance of OrdersCancelLineItemRequest
    newOrdersCancelLineItemRequest(): Content.Schema.OrdersCancelLineItemRequest;
    // Create a new instance of OrdersCancelRequest
    newOrdersCancelRequest(): Content.Schema.OrdersCancelRequest;
    // Create a new instance of OrdersCancelTestOrderByCustomerRequest
    newOrdersCancelTestOrderByCustomerRequest(): Content.Schema.OrdersCancelTestOrderByCustomerRequest;
    // Create a new instance of OrdersCreateTestOrderRequest
    newOrdersCreateTestOrderRequest(): Content.Schema.OrdersCreateTestOrderRequest;
    // Create a new instance of OrdersCreateTestReturnRequest
    newOrdersCreateTestReturnRequest(): Content.Schema.OrdersCreateTestReturnRequest;
    // Create a new instance of OrdersCustomBatchRequest
    newOrdersCustomBatchRequest(): Content.Schema.OrdersCustomBatchRequest;
    // Create a new instance of OrdersCustomBatchRequestEntry
    newOrdersCustomBatchRequestEntry(): Content.Schema.OrdersCustomBatchRequestEntry;
    // Create a new instance of OrdersCustomBatchRequestEntryCancel
    newOrdersCustomBatchRequestEntryCancel(): Content.Schema.OrdersCustomBatchRequestEntryCancel;
    // Create a new instance of OrdersCustomBatchRequestEntryCancelLineItem
    newOrdersCustomBatchRequestEntryCancelLineItem(): Content.Schema.OrdersCustomBatchRequestEntryCancelLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryCreateTestReturnReturnItem
    newOrdersCustomBatchRequestEntryCreateTestReturnReturnItem(): Content.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem;
    // Create a new instance of OrdersCustomBatchRequestEntryInStoreRefundLineItem
    newOrdersCustomBatchRequestEntryInStoreRefundLineItem(): Content.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryRefund
    newOrdersCustomBatchRequestEntryRefund(): Content.Schema.OrdersCustomBatchRequestEntryRefund;
    // Create a new instance of OrdersCustomBatchRequestEntryRejectReturnLineItem
    newOrdersCustomBatchRequestEntryRejectReturnLineItem(): Content.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryReturnLineItem
    newOrdersCustomBatchRequestEntryReturnLineItem(): Content.Schema.OrdersCustomBatchRequestEntryReturnLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryReturnRefundLineItem
    newOrdersCustomBatchRequestEntryReturnRefundLineItem(): Content.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntrySetLineItemMetadata
    newOrdersCustomBatchRequestEntrySetLineItemMetadata(): Content.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
    // Create a new instance of OrdersCustomBatchRequestEntryShipLineItems
    newOrdersCustomBatchRequestEntryShipLineItems(): Content.Schema.OrdersCustomBatchRequestEntryShipLineItems;
    // Create a new instance of OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
    newOrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(): Content.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
    // Create a new instance of OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails
    newOrdersCustomBatchRequestEntryUpdateLineItemShippingDetails(): Content.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
    // Create a new instance of OrdersCustomBatchRequestEntryUpdateShipment
    newOrdersCustomBatchRequestEntryUpdateShipment(): Content.Schema.OrdersCustomBatchRequestEntryUpdateShipment;
    // Create a new instance of OrdersInStoreRefundLineItemRequest
    newOrdersInStoreRefundLineItemRequest(): Content.Schema.OrdersInStoreRefundLineItemRequest;
    // Create a new instance of OrdersRefundRequest
    newOrdersRefundRequest(): Content.Schema.OrdersRefundRequest;
    // Create a new instance of OrdersRejectReturnLineItemRequest
    newOrdersRejectReturnLineItemRequest(): Content.Schema.OrdersRejectReturnLineItemRequest;
    // Create a new instance of OrdersReturnLineItemRequest
    newOrdersReturnLineItemRequest(): Content.Schema.OrdersReturnLineItemRequest;
    // Create a new instance of OrdersReturnRefundLineItemRequest
    newOrdersReturnRefundLineItemRequest(): Content.Schema.OrdersReturnRefundLineItemRequest;
    // Create a new instance of OrdersSetLineItemMetadataRequest
    newOrdersSetLineItemMetadataRequest(): Content.Schema.OrdersSetLineItemMetadataRequest;
    // Create a new instance of OrdersShipLineItemsRequest
    newOrdersShipLineItemsRequest(): Content.Schema.OrdersShipLineItemsRequest;
    // Create a new instance of OrdersUpdateLineItemShippingDetailsRequest
    newOrdersUpdateLineItemShippingDetailsRequest(): Content.Schema.OrdersUpdateLineItemShippingDetailsRequest;
    // Create a new instance of OrdersUpdateMerchantOrderIdRequest
    newOrdersUpdateMerchantOrderIdRequest(): Content.Schema.OrdersUpdateMerchantOrderIdRequest;
    // Create a new instance of OrdersUpdateShipmentRequest
    newOrdersUpdateShipmentRequest(): Content.Schema.OrdersUpdateShipmentRequest;
    // Create a new instance of PosCustomBatchRequest
    newPosCustomBatchRequest(): Content.Schema.PosCustomBatchRequest;
    // Create a new instance of PosCustomBatchRequestEntry
    newPosCustomBatchRequestEntry(): Content.Schema.PosCustomBatchRequestEntry;
    // Create a new instance of PosInventory
    newPosInventory(): Content.Schema.PosInventory;
    // Create a new instance of PosInventoryRequest
    newPosInventoryRequest(): Content.Schema.PosInventoryRequest;
    // Create a new instance of PosSale
    newPosSale(): Content.Schema.PosSale;
    // Create a new instance of PosSaleRequest
    newPosSaleRequest(): Content.Schema.PosSaleRequest;
    // Create a new instance of PosStore
    newPosStore(): Content.Schema.PosStore;
    // Create a new instance of PostalCodeGroup
    newPostalCodeGroup(): Content.Schema.PostalCodeGroup;
    // Create a new instance of PostalCodeRange
    newPostalCodeRange(): Content.Schema.PostalCodeRange;
    // Create a new instance of Price
    newPrice(): Content.Schema.Price;
    // Create a new instance of Product
    newProduct(): Content.Schema.Product;
    // Create a new instance of ProductAspect
    newProductAspect(): Content.Schema.ProductAspect;
    // Create a new instance of ProductDestination
    newProductDestination(): Content.Schema.ProductDestination;
    // Create a new instance of ProductShipping
    newProductShipping(): Content.Schema.ProductShipping;
    // Create a new instance of ProductShippingDimension
    newProductShippingDimension(): Content.Schema.ProductShippingDimension;
    // Create a new instance of ProductShippingWeight
    newProductShippingWeight(): Content.Schema.ProductShippingWeight;
    // Create a new instance of ProductTax
    newProductTax(): Content.Schema.ProductTax;
    // Create a new instance of ProductUnitPricingBaseMeasure
    newProductUnitPricingBaseMeasure(): Content.Schema.ProductUnitPricingBaseMeasure;
    // Create a new instance of ProductUnitPricingMeasure
    newProductUnitPricingMeasure(): Content.Schema.ProductUnitPricingMeasure;
    // Create a new instance of ProductsCustomBatchRequest
    newProductsCustomBatchRequest(): Content.Schema.ProductsCustomBatchRequest;
    // Create a new instance of ProductsCustomBatchRequestEntry
    newProductsCustomBatchRequestEntry(): Content.Schema.ProductsCustomBatchRequestEntry;
    // Create a new instance of ProductstatusesCustomBatchRequest
    newProductstatusesCustomBatchRequest(): Content.Schema.ProductstatusesCustomBatchRequest;
    // Create a new instance of ProductstatusesCustomBatchRequestEntry
    newProductstatusesCustomBatchRequestEntry(): Content.Schema.ProductstatusesCustomBatchRequestEntry;
    // Create a new instance of Promotion
    newPromotion(): Content.Schema.Promotion;
    // Create a new instance of RateGroup
    newRateGroup(): Content.Schema.RateGroup;
    // Create a new instance of Row
    newRow(): Content.Schema.Row;
    // Create a new instance of Service
    newService(): Content.Schema.Service;
    // Create a new instance of ShipmentInvoice
    newShipmentInvoice(): Content.Schema.ShipmentInvoice;
    // Create a new instance of ShipmentInvoiceLineItemInvoice
    newShipmentInvoiceLineItemInvoice(): Content.Schema.ShipmentInvoiceLineItemInvoice;
    // Create a new instance of ShippingSettings
    newShippingSettings(): Content.Schema.ShippingSettings;
    // Create a new instance of ShippingsettingsCustomBatchRequest
    newShippingsettingsCustomBatchRequest(): Content.Schema.ShippingsettingsCustomBatchRequest;
    // Create a new instance of ShippingsettingsCustomBatchRequestEntry
    newShippingsettingsCustomBatchRequestEntry(): Content.Schema.ShippingsettingsCustomBatchRequestEntry;
    // Create a new instance of Table
    newTable(): Content.Schema.Table;
    // Create a new instance of TestOrder
    newTestOrder(): Content.Schema.TestOrder;
    // Create a new instance of TestOrderCustomer
    newTestOrderCustomer(): Content.Schema.TestOrderCustomer;
    // Create a new instance of TestOrderCustomerMarketingRightsInfo
    newTestOrderCustomerMarketingRightsInfo(): Content.Schema.TestOrderCustomerMarketingRightsInfo;
    // Create a new instance of TestOrderLineItem
    newTestOrderLineItem(): Content.Schema.TestOrderLineItem;
    // Create a new instance of TestOrderLineItemProduct
    newTestOrderLineItemProduct(): Content.Schema.TestOrderLineItemProduct;
    // Create a new instance of TestOrderPaymentMethod
    newTestOrderPaymentMethod(): Content.Schema.TestOrderPaymentMethod;
    // Create a new instance of TransitTable
    newTransitTable(): Content.Schema.TransitTable;
    // Create a new instance of TransitTableTransitTimeRow
    newTransitTableTransitTimeRow(): Content.Schema.TransitTableTransitTimeRow;
    // Create a new instance of TransitTableTransitTimeRowTransitTimeValue
    newTransitTableTransitTimeRowTransitTimeValue(): Content.Schema.TransitTableTransitTimeRowTransitTimeValue;
    // Create a new instance of UnitInvoice
    newUnitInvoice(): Content.Schema.UnitInvoice;
    // Create a new instance of UnitInvoiceAdditionalCharge
    newUnitInvoiceAdditionalCharge(): Content.Schema.UnitInvoiceAdditionalCharge;
    // Create a new instance of UnitInvoiceTaxLine
    newUnitInvoiceTaxLine(): Content.Schema.UnitInvoiceTaxLine;
    // Create a new instance of Value
    newValue(): Content.Schema.Value;
    // Create a new instance of Weight
    newWeight(): Content.Schema.Weight;
  }
}

declare var Content: GoogleAppsScript.Content;
