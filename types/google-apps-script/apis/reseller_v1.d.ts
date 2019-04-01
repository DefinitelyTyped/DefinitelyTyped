// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Reseller_v1 {
    namespace Collection {
      export interface CustomersCollection {
        // Get a customer account.
        get(customerId: string): Reseller_v1.Schema.Customer;
        // Order a new customer's account.
        insert(resource: Schema.Customer): Reseller_v1.Schema.Customer;
        // Order a new customer's account.
        insert(resource: Schema.Customer, optionalArgs: object): Reseller_v1.Schema.Customer;
        // Update a customer account's settings. This method supports patch semantics.
        patch(resource: Schema.Customer, customerId: string): Reseller_v1.Schema.Customer;
        // Update a customer account's settings.
        update(resource: Schema.Customer, customerId: string): Reseller_v1.Schema.Customer;
      }
      export interface ResellernotifyCollection {
        // Returns all the details of the watch corresponding to the reseller.
        getwatchdetails(): Reseller_v1.Schema.ResellernotifyGetwatchdetailsResponse;
        // Registers a Reseller for receiving notifications.
        register(): Reseller_v1.Schema.ResellernotifyResource;
        // Registers a Reseller for receiving notifications.
        register(optionalArgs: object): Reseller_v1.Schema.ResellernotifyResource;
        // Unregisters a Reseller for receiving notifications.
        unregister(): Reseller_v1.Schema.ResellernotifyResource;
        // Unregisters a Reseller for receiving notifications.
        unregister(optionalArgs: object): Reseller_v1.Schema.ResellernotifyResource;
      }
      export interface SubscriptionsCollection {
        // Activates a subscription previously suspended by the reseller
        activate(customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
        // Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.
        changePlan(resource: Schema.ChangePlanRequest, customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
        // Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only.
        changeRenewalSettings(resource: Schema.RenewalSettings, customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
        // Update a subscription's user license settings.
        changeSeats(resource: Schema.Seats, customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
        // Get a specific subscription.
        get(customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
        // Create or transfer a subscription.
        insert(resource: Schema.Subscription, customerId: string): Reseller_v1.Schema.Subscription;
        // Create or transfer a subscription.
        insert(resource: Schema.Subscription, customerId: string, optionalArgs: object): Reseller_v1.Schema.Subscription;
        // List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.
        list(): Reseller_v1.Schema.Subscriptions;
        // List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.
        list(optionalArgs: object): Reseller_v1.Schema.Subscriptions;
        // Cancel or transfer a subscription to direct.
        remove(customerId: string, subscriptionId: string, deletionType: string): void;
        // Immediately move a 30-day free trial subscription to a paid service subscription.
        startPaidService(customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
        // Suspends an active subscription.
        suspend(customerId: string, subscriptionId: string): Reseller_v1.Schema.Subscription;
      }
    }
    namespace Schema {
      export interface Address {
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
      export interface ChangePlanRequest {
        dealCode?: string;
        kind?: string;
        planName?: string;
        purchaseOrderId?: string;
        seats?: Reseller_v1.Schema.Seats;
      }
      export interface Customer {
        alternateEmail?: string;
        customerDomain?: string;
        customerDomainVerified?: boolean;
        customerId?: string;
        kind?: string;
        phoneNumber?: string;
        postalAddress?: Reseller_v1.Schema.Address;
        resourceUiUrl?: string;
      }
      export interface RenewalSettings {
        kind?: string;
        renewalType?: string;
      }
      export interface ResellernotifyGetwatchdetailsResponse {
        serviceAccountEmailAddresses?: string[];
        topicName?: string;
      }
      export interface ResellernotifyResource {
        topicName?: string;
      }
      export interface Seats {
        kind?: string;
        licensedNumberOfSeats?: number;
        maximumNumberOfSeats?: number;
        numberOfSeats?: number;
      }
      export interface Subscription {
        billingMethod?: string;
        creationTime?: string;
        customerDomain?: string;
        customerId?: string;
        dealCode?: string;
        kind?: string;
        plan?: Reseller_v1.Schema.SubscriptionPlan;
        purchaseOrderId?: string;
        renewalSettings?: Reseller_v1.Schema.RenewalSettings;
        resourceUiUrl?: string;
        seats?: Reseller_v1.Schema.Seats;
        skuId?: string;
        skuName?: string;
        status?: string;
        subscriptionId?: string;
        suspensionReasons?: string[];
        transferInfo?: Reseller_v1.Schema.SubscriptionTransferInfo;
        trialSettings?: Reseller_v1.Schema.SubscriptionTrialSettings;
      }
      export interface SubscriptionPlan {
        commitmentInterval?: Reseller_v1.Schema.SubscriptionPlanCommitmentInterval;
        isCommitmentPlan?: boolean;
        planName?: string;
      }
      export interface SubscriptionPlanCommitmentInterval {
        endTime?: string;
        startTime?: string;
      }
      export interface SubscriptionTransferInfo {
        minimumTransferableSeats?: number;
        transferabilityExpirationTime?: string;
      }
      export interface SubscriptionTrialSettings {
        isInTrial?: boolean;
        trialEndTime?: string;
      }
      export interface Subscriptions {
        kind?: string;
        nextPageToken?: string;
        subscriptions?: Reseller_v1.Schema.Subscription[];
      }
    }
  }
  export interface Reseller_v1 {
    Customers?: Reseller_v1.Collection.CustomersCollection;
    Resellernotify?: Reseller_v1.Collection.ResellernotifyCollection;
    Subscriptions?: Reseller_v1.Collection.SubscriptionsCollection;
    // Create a new instance of Address
    newAddress(): Reseller_v1.Schema.Address;
    // Create a new instance of ChangePlanRequest
    newChangePlanRequest(): Reseller_v1.Schema.ChangePlanRequest;
    // Create a new instance of Customer
    newCustomer(): Reseller_v1.Schema.Customer;
    // Create a new instance of RenewalSettings
    newRenewalSettings(): Reseller_v1.Schema.RenewalSettings;
    // Create a new instance of Seats
    newSeats(): Reseller_v1.Schema.Seats;
    // Create a new instance of Subscription
    newSubscription(): Reseller_v1.Schema.Subscription;
    // Create a new instance of SubscriptionPlan
    newSubscriptionPlan(): Reseller_v1.Schema.SubscriptionPlan;
    // Create a new instance of SubscriptionPlanCommitmentInterval
    newSubscriptionPlanCommitmentInterval(): Reseller_v1.Schema.SubscriptionPlanCommitmentInterval;
    // Create a new instance of SubscriptionTransferInfo
    newSubscriptionTransferInfo(): Reseller_v1.Schema.SubscriptionTransferInfo;
    // Create a new instance of SubscriptionTrialSettings
    newSubscriptionTrialSettings(): Reseller_v1.Schema.SubscriptionTrialSettings;
  }
}

declare var Reseller_v1: GoogleAppsScript.Reseller_v1;