// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminReseller {
    namespace Collection {
      interface CustomersCollection {
        // Get a customer account.
        get(customerId: string): AdminReseller.Schema.Customer;
        // Order a new customer's account.
        insert(resource: Schema.Customer): AdminReseller.Schema.Customer;
        // Order a new customer's account.
        insert(resource: Schema.Customer, optionalArgs: object): AdminReseller.Schema.Customer;
        // Update a customer account's settings. This method supports patch semantics.
        patch(resource: Schema.Customer, customerId: string): AdminReseller.Schema.Customer;
        // Update a customer account's settings.
        update(resource: Schema.Customer, customerId: string): AdminReseller.Schema.Customer;
      }
      interface ResellernotifyCollection {
        // Returns all the details of the watch corresponding to the reseller.
        getwatchdetails(): AdminReseller.Schema.ResellernotifyGetwatchdetailsResponse;
        // Registers a Reseller for receiving notifications.
        register(): AdminReseller.Schema.ResellernotifyResource;
        // Registers a Reseller for receiving notifications.
        register(optionalArgs: object): AdminReseller.Schema.ResellernotifyResource;
        // Unregisters a Reseller for receiving notifications.
        unregister(): AdminReseller.Schema.ResellernotifyResource;
        // Unregisters a Reseller for receiving notifications.
        unregister(optionalArgs: object): AdminReseller.Schema.ResellernotifyResource;
      }
      interface SubscriptionsCollection {
        // Activates a subscription previously suspended by the reseller
        activate(customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
        // Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.
        changePlan(resource: Schema.ChangePlanRequest, customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
        // Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only.
        changeRenewalSettings(resource: Schema.RenewalSettings, customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
        // Update a subscription's user license settings.
        changeSeats(resource: Schema.Seats, customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
        // Get a specific subscription.
        get(customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
        // Create or transfer a subscription.
        insert(resource: Schema.Subscription, customerId: string): AdminReseller.Schema.Subscription;
        // Create or transfer a subscription.
        insert(resource: Schema.Subscription, customerId: string, optionalArgs: object): AdminReseller.Schema.Subscription;
        // List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.
        list(): AdminReseller.Schema.Subscriptions;
        // List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.
        list(optionalArgs: object): AdminReseller.Schema.Subscriptions;
        // Cancel or transfer a subscription to direct.
        remove(customerId: string, subscriptionId: string, deletionType: string): void;
        // Immediately move a 30-day free trial subscription to a paid service subscription.
        startPaidService(customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
        // Suspends an active subscription.
        suspend(customerId: string, subscriptionId: string): AdminReseller.Schema.Subscription;
      }
    }
    namespace Schema {
      interface Address {
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        addressLine3?: string | undefined;
        contactName?: string | undefined;
        countryCode?: string | undefined;
        kind?: string | undefined;
        locality?: string | undefined;
        organizationName?: string | undefined;
        postalCode?: string | undefined;
        region?: string | undefined;
      }
      interface ChangePlanRequest {
        dealCode?: string | undefined;
        kind?: string | undefined;
        planName?: string | undefined;
        purchaseOrderId?: string | undefined;
        seats?: AdminReseller.Schema.Seats | undefined;
      }
      interface Customer {
        alternateEmail?: string | undefined;
        customerDomain?: string | undefined;
        customerDomainVerified?: boolean | undefined;
        customerId?: string | undefined;
        kind?: string | undefined;
        phoneNumber?: string | undefined;
        postalAddress?: AdminReseller.Schema.Address | undefined;
        resourceUiUrl?: string | undefined;
      }
      interface RenewalSettings {
        kind?: string | undefined;
        renewalType?: string | undefined;
      }
      interface ResellernotifyGetwatchdetailsResponse {
        serviceAccountEmailAddresses?: string[] | undefined;
        topicName?: string | undefined;
      }
      interface ResellernotifyResource {
        topicName?: string | undefined;
      }
      interface Seats {
        kind?: string | undefined;
        licensedNumberOfSeats?: number | undefined;
        maximumNumberOfSeats?: number | undefined;
        numberOfSeats?: number | undefined;
      }
      interface Subscription {
        billingMethod?: string | undefined;
        creationTime?: string | undefined;
        customerDomain?: string | undefined;
        customerId?: string | undefined;
        dealCode?: string | undefined;
        kind?: string | undefined;
        plan?: AdminReseller.Schema.SubscriptionPlan | undefined;
        purchaseOrderId?: string | undefined;
        renewalSettings?: AdminReseller.Schema.RenewalSettings | undefined;
        resourceUiUrl?: string | undefined;
        seats?: AdminReseller.Schema.Seats | undefined;
        skuId?: string | undefined;
        skuName?: string | undefined;
        status?: string | undefined;
        subscriptionId?: string | undefined;
        suspensionReasons?: string[] | undefined;
        transferInfo?: AdminReseller.Schema.SubscriptionTransferInfo | undefined;
        trialSettings?: AdminReseller.Schema.SubscriptionTrialSettings | undefined;
      }
      interface SubscriptionPlan {
        commitmentInterval?: AdminReseller.Schema.SubscriptionPlanCommitmentInterval | undefined;
        isCommitmentPlan?: boolean | undefined;
        planName?: string | undefined;
      }
      interface SubscriptionPlanCommitmentInterval {
        endTime?: string | undefined;
        startTime?: string | undefined;
      }
      interface SubscriptionTransferInfo {
        minimumTransferableSeats?: number | undefined;
        transferabilityExpirationTime?: string | undefined;
      }
      interface SubscriptionTrialSettings {
        isInTrial?: boolean | undefined;
        trialEndTime?: string | undefined;
      }
      interface Subscriptions {
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        subscriptions?: AdminReseller.Schema.Subscription[] | undefined;
      }
    }
  }
  interface AdminReseller {
    Customers?: AdminReseller.Collection.CustomersCollection | undefined;
    Resellernotify?: AdminReseller.Collection.ResellernotifyCollection | undefined;
    Subscriptions?: AdminReseller.Collection.SubscriptionsCollection | undefined;
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

declare var AdminReseller: GoogleAppsScript.AdminReseller;
