// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace AdminReseller {
        namespace Collection {
            interface CustomersCollection {
                // Get a customer account. Use this operation to see a customer account already in your reseller management, or to see the
                // minimal account information for an existing customer that you do not manage. For more information about the API response
                // for existing customers, see [retrieving a customer
                // account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).
                get(customerId: string): Schema.Customer;
                // Order a new customer's account. Before ordering a new customer account, establish whether the customer account already
                // exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a
                // direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described
                // in [order a resold account for an existing
                // customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering
                // a new customer account, see [order a new customer
                // account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you
                // must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and
                // sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via
                // Reseller agreement on the customer's behalf. For more information, see [order a new customer
                // account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
                insert(resource: Schema.Customer): Schema.Customer;
                // Order a new customer's account. Before ordering a new customer account, establish whether the customer account already
                // exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a
                // direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described
                // in [order a resold account for an existing
                // customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering
                // a new customer account, see [order a new customer
                // account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you
                // must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and
                // sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via
                // Reseller agreement on the customer's behalf. For more information, see [order a new customer
                // account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
                insert(resource: Schema.Customer, optionalArgs: object): Schema.Customer;
                // Update a customer account's settings. This method supports patch semantics.
                patch(resource: Schema.Customer, customerId: string): Schema.Customer;
                // Update a customer account's settings. For more information, see [update a customer's
                // settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).
                update(resource: Schema.Customer, customerId: string): Schema.Customer;
            }
            interface ResellernotifyCollection {
                // Returns all the details of the watch corresponding to the reseller.
                getwatchdetails(): Schema.ResellernotifyGetwatchdetailsResponse;
                // Registers a Reseller for receiving notifications.
                register(): Schema.ResellernotifyResource;
                // Registers a Reseller for receiving notifications.
                register(optionalArgs: object): Schema.ResellernotifyResource;
                // Unregisters a Reseller for receiving notifications.
                unregister(): Schema.ResellernotifyResource;
                // Unregisters a Reseller for receiving notifications.
                unregister(optionalArgs: object): Schema.ResellernotifyResource;
            }
            interface SubscriptionsCollection {
                // Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it
                // is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the
                // customer subscription.
                activate(customerId: string, subscriptionId: string): Schema.Subscription;
                // Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an
                // annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the
                // products. For more information, see the description in [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
                changePlan(resource: Schema.ChangePlanRequest, customerId: string, subscriptionId: string): Schema.Subscription;
                // Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more
                // information, see the description in [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
                changeRenewalSettings(resource: Schema.RenewalSettings, customerId: string, subscriptionId: string): Schema.Subscription;
                // Update a subscription's user license settings. For more information about updating an annual commitment plan or a
                // flexible plan subscription’s licenses, see [Manage
                // Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
                changeSeats(resource: Schema.Seats, customerId: string, subscriptionId: string): Schema.Subscription;
                // Get a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information
                // about retrieving a specific subscription, see the information descrived in [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
                get(customerId: string, subscriptionId: string): Schema.Subscription;
                // Create or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a
                // new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about
                // creating a subscription for different payment plans, see [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the
                // customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription
                // for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription,
                // use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more
                // information, see how to [transfer
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
                insert(resource: Schema.Subscription, customerId: string): Schema.Subscription;
                // Create or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a
                // new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about
                // creating a subscription for different payment plans, see [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the
                // customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription
                // for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription,
                // use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more
                // information, see how to [transfer
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
                insert(resource: Schema.Subscription, customerId: string, optionalArgs: object): Schema.Subscription;
                // List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or
                // all of a customer's transferable subscriptions. Optionally, this method can filter the response by a
                // `customerNamePrefix`. For more information, see [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
                list(): Schema.Subscriptions;
                // List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or
                // all of a customer's transferable subscriptions. Optionally, this method can filter the response by a
                // `customerNamePrefix`. For more information, see [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
                list(optionalArgs: object): Schema.Subscriptions;
                // Cancel, suspend, or transfer a subscription to direct.
                remove(customerId: string, subscriptionId: string, deletionType: string): void;
                // Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a
                // payment plan has already been set up for the 30-day trial subscription. For more information, see [manage
                // subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
                startPaidService(customerId: string, subscriptionId: string): Schema.Subscription;
                // Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the
                // `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY`
                // subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A
                // suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual
                // subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only
                // for short periods of time as suspensions over 60 days may result in the subscription being cancelled.
                suspend(customerId: string, subscriptionId: string): Schema.Subscription;
            }
        }
        namespace Schema {
            // JSON template for address of a customer.
            interface Address {
                // A customer's physical address. An address can be composed of one to three lines. The `addressline2` and `addressLine3`
                // are optional.
                addressLine1?: string;
                // Line 2 of the address.
                addressLine2?: string;
                // Line 3 of the address.
                addressLine3?: string;
                // The customer contact's name. This is required.
                contactName?: string;
                // For `countryCode` information, see the ISO 3166 country code elements. Verify that country is approved for resale of
                // Google products. This property is required when creating a new customer.
                countryCode?: string;
                // Identifies the resource as a customer address. Value: `customers#address`
                kind?: string;
                // An example of a `locality` value is the city of `San Francisco`.
                locality?: string;
                // The company or company division name. This is required.
                organizationName?: string;
                // A `postalCode` example is a postal zip code such as `94043`. This property is required when creating a new customer.
                postalCode?: string;
                // An example of a `region` value is `CA` for the state of California.
                region?: string;
            }
            // JSON template for the ChangePlan rpc request.
            interface ChangePlanRequest {
                // Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in
                // `changePlan` request in order to receive discounted rate. This property is optional. If a deal code has already been
                // added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not
                // empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a
                // subscription and this property is left blank, regular pricing will apply.
                dealCode?: string;
                // Identifies the resource as a subscription change plan request. Value: `subscriptions#changePlanRequest`
                kind?: string;
                // The `planName` property is required. This is the name of the subscription's payment plan. For more information about the
                // Google payment plans, see API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` - The annual commitment plan with
                // monthly payments *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` -
                // The annual commitment plan with yearly payments - `FLEXIBLE` - The flexible plan - `TRIAL` - The 30-day free trial plan
                planName?: string;
                // This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking
                // usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property
                // accepts up to 80 plain text characters.
                purchaseOrderId?: string;
                // This is a required property. The seats property is the number of user seat licenses.
                seats?: Schema.Seats;
            }
            // When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are
            // managed by this reseller. A customer is described by a primary domain name and a physical address.
            interface Customer {
                // Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the
                // customer's service such as service outage or a security issue. This property is required when creating a new customer
                // and should not use the same domain as `customerDomain`.
                alternateEmail?: string;
                // The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the
                // `www` prefix in the domain when adding a customer.
                customerDomain?: string;
                // Whether the customer's primary domain has been verified.
                customerDomainVerified?: boolean;
                // This property will always be returned in a response as the unique identifier generated by Google. In a request, this
                // property can be either the primary domain or the unique identifier generated by Google.
                customerId?: string;
                // Identifies the resource as a customer. Value: `reseller#customer`
                kind?: string;
                // Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be
                // contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for
                // example, "123". This field is silently ignored if invalid.
                phoneNumber?: string;
                // A customer's address information. Each field has a limit of 255 charcters.
                postalAddress?: Schema.Address;
                // URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your
                // client application requires the customer to complete a task in the Admin console.
                resourceUiUrl?: string;
            }
            // JSON template for a subscription renewal settings.
            interface RenewalSettings {
                // Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings`
                kind?: string;
                // Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator
                // help center. When renewing a subscription, the `renewalType` is a required property.
                renewalType?: string;
            }
            // JSON template for resellernotify getwatchdetails response.
            interface ResellernotifyGetwatchdetailsResponse {
                // List of registered service accounts.
                serviceAccountEmailAddresses?: string[];
                // Topic name of the PubSub
                topicName?: string;
            }
            // JSON template for resellernotify response.
            interface ResellernotifyResource {
                // Topic name of the PubSub
                topicName?: string;
            }
            // JSON template for subscription seats.
            interface Seats {
                // Identifies the resource as a subscription seat setting. Value: `subscriptions#seats`
                kind?: string;
                // Read-only field containing the current number of users that are assigned a license for the product defined in `skuId`.
                // This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method:
                // [`listForProductAndSku`](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku).
                licensedNumberOfSeats?: Integer;
                // This is a required property and is exclusive to subscriptions with `FLEXIBLE` or `TRIAL` plans. This property sets the
                // maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit
                // defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note:
                // *G Suite subscriptions automatically assign a license to every user.
                maximumNumberOfSeats?: Integer;
                // This is a required property and is exclusive to subscriptions with `ANNUAL_MONTHLY_PAY` and `ANNUAL_YEARLY_PAY` plans.
                // This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more
                // licenses, but once set, the `numberOfSeats` cannot be reduced until renewal. The reseller is invoiced based on the
                // `numberOfSeats` value regardless of how many of these user licenses are assigned. *Note: *G Suite subscriptions
                // automatically assign a license to every user.
                numberOfSeats?: Integer;
            }
            // JSON template for a subscription.
            interface Subscription {
                // Read-only field that returns the current billing method for a subscription.
                billingMethod?: string;
                // The `creationTime` property is the date when subscription was created. It is in milliseconds using the Epoch format. See
                // an example Epoch converter.
                creationTime?: string;
                // Primary domain name of the customer
                customerDomain?: string;
                // This property will always be returned in a response as the unique identifier generated by Google. In a request, this
                // property can be either the primary domain or the unique identifier generated by Google.
                customerId?: string;
                // Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `insert`
                // requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty.
                dealCode?: string;
                // Identifies the resource as a Subscription. Value: `reseller#subscription`
                kind?: string;
                // The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment
                // plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
                plan?: Schema.SubscriptionPlan;
                // This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking
                // usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property
                // accepts up to 80 plain text characters.
                purchaseOrderId?: string;
                // Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator
                // help center.
                renewalSettings?: Schema.RenewalSettings;
                // URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is
                // used if your client application requires the customer to complete a task using the Subscriptions page in the Admin
                // console.
                resourceUiUrl?: string;
                // This is a required property. The number and limit of user seat licenses in the plan.
                seats?: Schema.Seats;
                // A required property. The `skuId` is a unique system identifier for a product's SKU assigned to a customer in the
                // subscription. For products and SKUs available in this version of the API, see Product and SKU IDs.
                skuId?: string;
                // Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to
                // change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs.
                skuName?: string;
                // This is an optional property.
                status?: string;
                // The `subscriptionId` is the subscription identifier and is unique for each customer. This is a required property. Since
                // a `subscriptionId` changes when a subscription is updated, we recommend not using this ID as a key for persistent data.
                // Use the `subscriptionId` as described in retrieve all reseller subscriptions.
                subscriptionId?: string;
                // Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a
                // subscription to have many concurrent, overlapping suspension reasons. A subscription's `STATUS` is `SUSPENDED` until all
                // pending suspensions are removed. Possible options include: - `PENDING_TOS_ACCEPTANCE` - The customer has not logged in
                // and accepted the G Suite Resold Terms of Services. - `RENEWAL_WITH_TYPE_CANCEL` - The customer's commitment ended and
                // their service was cancelled at the end of their term. - `RESELLER_INITIATED` - A manual suspension invoked by a
                // Reseller. - `TRIAL_ENDED` - The customer's trial expired without a plan selected. - `OTHER` - The customer is suspended
                // for an internal Google reason (e.g. abuse or otherwise).
                suspensionReasons?: string[];
                // Read-only transfer related information for the subscription. For more information, see retrieve transferable
                // subscriptions for a customer.
                transferInfo?: Schema.SubscriptionTransferInfo;
                // The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the
                // API concepts.
                trialSettings?: Schema.SubscriptionTrialSettings;
            }
            // The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment
            // plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
            interface SubscriptionPlan {
                // In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is
                // `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses.
                commitmentInterval?: Schema.SubscriptionPlanCommitmentInterval;
                // The `isCommitmentPlan` property's boolean value identifies the plan as an annual commitment plan: - `true` — The
                // subscription's plan is an annual commitment plan. - `false` — The plan is not an annual commitment plan.
                isCommitmentPlan?: boolean;
                // The `planName` property is required. This is the name of the subscription's plan. For more information about the Google
                // payment plans, see the API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` — The annual commitment plan with
                // monthly payments. *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` —
                // The annual commitment plan with yearly payments - `FLEXIBLE` — The flexible plan - `TRIAL` — The 30-day free trial plan.
                // A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling `changePlan`
                // will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned
                // payment plan after its 30th free day or immediately after calling `startPaidService`. - `FREE` — The free plan is
                // exclusive to the Cloud Identity SKU and does not incur any billing.
                planName?: string;
            }
            // In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is
            // `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses.
            interface SubscriptionPlanCommitmentInterval {
                // An annual commitment plan's interval's `endTime` in milliseconds using the UNIX Epoch format. See an example Epoch
                // converter.
                endTime?: string;
                // An annual commitment plan's interval's `startTime` in milliseconds using UNIX Epoch format. See an example Epoch
                // converter.
                startTime?: string;
            }
            // Read-only transfer related information for the subscription. For more information, see retrieve transferable
            // subscriptions for a customer.
            interface SubscriptionTransferInfo {
                // When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For
                // example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats.
                minimumTransferableSeats?: Integer;
                // The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format.
                transferabilityExpirationTime?: string;
            }
            // The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the
            // API concepts.
            interface SubscriptionTrialSettings {
                // Determines if a subscription's plan is in a 30-day free trial or not: - `true` — The plan is in trial. - `false` — The
                // plan is not in trial.
                isInTrial?: boolean;
                // Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter.
                trialEndTime?: string;
            }
            // A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day
            // free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.
            interface Subscriptions {
                // Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions
                kind?: string;
                // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the
                // next page of results.
                nextPageToken?: string;
                // The subscriptions in this page of results.
                subscriptions?: Schema.Subscription[];
            }
        }
    }
    // Perform common functions that are available on the Channel Services console at scale, like placing orders and viewing
    // customer information
    interface AdminReseller {
        Customers?: AdminReseller.Collection.CustomersCollection;
        Resellernotify?: AdminReseller.Collection.ResellernotifyCollection;
        Subscriptions?: AdminReseller.Collection.SubscriptionsCollection;
        // Create a new instance of Address
        newAddress(): AdminReseller.Schema.Address;
        // Create a new instance of ChangePlanRequest
        newChangePlanRequest(): AdminReseller.Schema.ChangePlanRequest;
        // Create a new instance of Customer
        newCustomer(): AdminReseller.Schema.Customer;
        // Create a new instance of RenewalSettings
        newRenewalSettings(): AdminReseller.Schema.RenewalSettings;
        // Create a new instance of Seats
        newSeats(): AdminReseller.Schema.Seats;
        // Create a new instance of Subscription
        newSubscription(): AdminReseller.Schema.Subscription;
        // Create a new instance of SubscriptionPlan
        newSubscriptionPlan(): AdminReseller.Schema.SubscriptionPlan;
        // Create a new instance of SubscriptionPlanCommitmentInterval
        newSubscriptionPlanCommitmentInterval(): AdminReseller.Schema.SubscriptionPlanCommitmentInterval;
        // Create a new instance of SubscriptionTransferInfo
        newSubscriptionTransferInfo(): AdminReseller.Schema.SubscriptionTransferInfo;
        // Create a new instance of SubscriptionTrialSettings
        newSubscriptionTrialSettings(): AdminReseller.Schema.SubscriptionTrialSettings;
    }
}
declare const AdminReseller: GoogleAppsScript.AdminReseller;
