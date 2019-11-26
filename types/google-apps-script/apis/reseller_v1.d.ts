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
        addressLine1?: string;
        addressLine2?: string;
        addressLine3?: string;
        contactName?: string;
        countryCode?: string;
        kind?: string;
        locality?: string;
        organizationName?: string;
        postalCode?: string;
        region?: string;
      }
      interface ChangePlanRequest {
        dealCode?: string;
        kind?: string;
        planName?: string;
        purchaseOrderId?: string;
        seats?: AdminReseller.Schema.Seats;
      }
      interface Customer {
        alternateEmail?: string;
        customerDomain?: string;
        customerDomainVerified?: boolean;
        customerId?: string;
        kind?: string;
        phoneNumber?: string;
        postalAddress?: AdminReseller.Schema.Address;
        resourceUiUrl?: string;
      }
      interface RenewalSettings {
        kind?: string;
        renewalType?: string;
      }
      interface ResellernotifyGetwatchdetailsResponse {
        serviceAccountEmailAddresses?: string[];
        topicName?: string;
      }
      interface ResellernotifyResource {
        topicName?: string;
      }
      interface Seats {
        kind?: string;
        licensedNumberOfSeats?: number;
        maximumNumberOfSeats?: number;
        numberOfSeats?: number;
      }
      interface Subscription {
        billingMethod?: string;
        creationTime?: string;
        customerDomain?: string;
        customerId?: string;
        dealCode?: string;
        kind?: string;
        plan?: AdminReseller.Schema.SubscriptionPlan;
        purchaseOrderId?: string;
        renewalSettings?: AdminReseller.Schema.RenewalSettings;
        resourceUiUrl?: string;
        seats?: AdminReseller.Schema.Seats;
        skuId?: string;
        skuName?: string;
        status?: string;
        subscriptionId?: string;
        suspensionReasons?: string[];
        transferInfo?: AdminReseller.Schema.SubscriptionTransferInfo;
        trialSettings?: AdminReseller.Schema.SubscriptionTrialSettings;
      }
      interface SubscriptionPlan {
        commitmentInterval?: AdminReseller.Schema.SubscriptionPlanCommitmentInterval;
        isCommitmentPlan?: boolean;
        planName?: string;
      }
      interface SubscriptionPlanCommitmentInterval {
        endTime?: string;
        startTime?: string;
      }
      interface SubscriptionTransferInfo {
        minimumTransferableSeats?: number;
        transferabilityExpirationTime?: string;
      }
      interface SubscriptionTrialSettings {
        isInTrial?: boolean;
        trialEndTime?: string;
      }
      interface Subscriptions {
        kind?: string;
        nextPageToken?: string;
        subscriptions?: AdminReseller.Schema.Subscription[];
      }
    }
  }
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

declare var AdminReseller: GoogleAppsScript.AdminReseller;
