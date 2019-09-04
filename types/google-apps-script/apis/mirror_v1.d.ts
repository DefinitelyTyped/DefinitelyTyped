// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Mirror {
    namespace Collection {
      namespace Timeline {
        export interface AttachmentsCollection {
          // Retrieves an attachment on a timeline item by item ID and attachment ID.
          get(itemId: string, attachmentId: string): Mirror.Schema.Attachment;
          // Adds a new attachment to a timeline item.
          insert(itemId: string): Mirror.Schema.Attachment;
          // Adds a new attachment to a timeline item.
          insert(itemId: string, mediaData: any): Mirror.Schema.Attachment;
          // Returns a list of attachments for a timeline item.
          list(itemId: string): Mirror.Schema.AttachmentsListResponse;
          // Deletes an attachment from a timeline item.
          remove(itemId: string, attachmentId: string): void;
        }
      }
      export interface AccountsCollection {
        // Inserts a new account for a user
        insert(resource: Schema.Account, userToken: string, accountType: string, accountName: string): Mirror.Schema.Account;
      }
      export interface ContactsCollection {
        // Gets a single contact by ID.
        get(id: string): Mirror.Schema.Contact;
        // Inserts a new contact.
        insert(resource: Schema.Contact): Mirror.Schema.Contact;
        // Retrieves a list of contacts for the authenticated user.
        list(): Mirror.Schema.ContactsListResponse;
        // Updates a contact in place. This method supports patch semantics.
        patch(resource: Schema.Contact, id: string): Mirror.Schema.Contact;
        // Deletes a contact.
        remove(id: string): void;
        // Updates a contact in place.
        update(resource: Schema.Contact, id: string): Mirror.Schema.Contact;
      }
      export interface LocationsCollection {
        // Gets a single location by ID.
        get(id: string): Mirror.Schema.Location;
        // Retrieves a list of locations for the user.
        list(): Mirror.Schema.LocationsListResponse;
      }
      export interface SettingsCollection {
        // Gets a single setting by ID.
        get(id: string): Mirror.Schema.Setting;
      }
      export interface SubscriptionsCollection {
        // Creates a new subscription.
        insert(resource: Schema.Subscription): Mirror.Schema.Subscription;
        // Retrieves a list of subscriptions for the authenticated user and service.
        list(): Mirror.Schema.SubscriptionsListResponse;
        // Deletes a subscription.
        remove(id: string): void;
        // Updates an existing subscription in place.
        update(resource: Schema.Subscription, id: string): Mirror.Schema.Subscription;
      }
      export interface TimelineCollection {
        Attachments?: Mirror.Collection.Timeline.AttachmentsCollection;
        // Gets a single timeline item by ID.
        get(id: string): Mirror.Schema.TimelineItem;
        // Inserts a new item into the timeline.
        insert(resource: Schema.TimelineItem): Mirror.Schema.TimelineItem;
        // Inserts a new item into the timeline.
        insert(resource: Schema.TimelineItem, mediaData: any): Mirror.Schema.TimelineItem;
        // Retrieves a list of timeline items for the authenticated user.
        list(): Mirror.Schema.TimelineListResponse;
        // Retrieves a list of timeline items for the authenticated user.
        list(optionalArgs: object): Mirror.Schema.TimelineListResponse;
        // Updates a timeline item in place. This method supports patch semantics.
        patch(resource: Schema.TimelineItem, id: string): Mirror.Schema.TimelineItem;
        // Deletes a timeline item.
        remove(id: string): void;
        // Updates a timeline item in place.
        update(resource: Schema.TimelineItem, id: string): Mirror.Schema.TimelineItem;
        // Updates a timeline item in place.
        update(resource: Schema.TimelineItem, id: string, mediaData: any): Mirror.Schema.TimelineItem;
      }
    }
    namespace Schema {
      export interface Account {
        authTokens?: Mirror.Schema.AuthToken[];
        features?: string[];
        password?: string;
        userData?: Mirror.Schema.UserData[];
      }
      export interface Attachment {
        contentType?: string;
        contentUrl?: string;
        id?: string;
        isProcessingContent?: boolean;
      }
      export interface AttachmentsListResponse {
        items?: Mirror.Schema.Attachment[];
        kind?: string;
      }
      export interface AuthToken {
        authToken?: string;
        type?: string;
      }
      export interface Command {
        type?: string;
      }
      export interface Contact {
        acceptCommands?: Mirror.Schema.Command[];
        acceptTypes?: string[];
        displayName?: string;
        id?: string;
        imageUrls?: string[];
        kind?: string;
        phoneNumber?: string;
        priority?: number;
        sharingFeatures?: string[];
        source?: string;
        speakableName?: string;
        type?: string;
      }
      export interface ContactsListResponse {
        items?: Mirror.Schema.Contact[];
        kind?: string;
      }
      export interface Location {
        accuracy?: number;
        address?: string;
        displayName?: string;
        id?: string;
        kind?: string;
        latitude?: number;
        longitude?: number;
        timestamp?: string;
      }
      export interface LocationsListResponse {
        items?: Mirror.Schema.Location[];
        kind?: string;
      }
      export interface MenuItem {
        action?: string;
        contextual_command?: string;
        id?: string;
        payload?: string;
        removeWhenSelected?: boolean;
        values?: Mirror.Schema.MenuValue[];
      }
      export interface MenuValue {
        displayName?: string;
        iconUrl?: string;
        state?: string;
      }
      export interface Notification {
        collection?: string;
        itemId?: string;
        operation?: string;
        userActions?: Mirror.Schema.UserAction[];
        userToken?: string;
        verifyToken?: string;
      }
      export interface NotificationConfig {
        deliveryTime?: string;
        level?: string;
      }
      export interface Setting {
        id?: string;
        kind?: string;
        value?: string;
      }
      export interface Subscription {
        callbackUrl?: string;
        collection?: string;
        id?: string;
        kind?: string;
        notification?: Mirror.Schema.Notification;
        operation?: string[];
        updated?: string;
        userToken?: string;
        verifyToken?: string;
      }
      export interface SubscriptionsListResponse {
        items?: Mirror.Schema.Subscription[];
        kind?: string;
      }
      export interface TimelineItem {
        attachments?: Mirror.Schema.Attachment[];
        bundleId?: string;
        canonicalUrl?: string;
        created?: string;
        creator?: Mirror.Schema.Contact;
        displayTime?: string;
        etag?: string;
        html?: string;
        id?: string;
        inReplyTo?: string;
        isBundleCover?: boolean;
        isDeleted?: boolean;
        isPinned?: boolean;
        kind?: string;
        location?: Mirror.Schema.Location;
        menuItems?: Mirror.Schema.MenuItem[];
        notification?: Mirror.Schema.NotificationConfig;
        pinScore?: number;
        recipients?: Mirror.Schema.Contact[];
        selfLink?: string;
        sourceItemId?: string;
        speakableText?: string;
        speakableType?: string;
        text?: string;
        title?: string;
        updated?: string;
      }
      export interface TimelineListResponse {
        items?: Mirror.Schema.TimelineItem[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface UserAction {
        payload?: string;
        type?: string;
      }
      export interface UserData {
        key?: string;
        value?: string;
      }
    }
  }
  export interface Mirror {
    Accounts?: Mirror.Collection.AccountsCollection;
    Contacts?: Mirror.Collection.ContactsCollection;
    Locations?: Mirror.Collection.LocationsCollection;
    Settings?: Mirror.Collection.SettingsCollection;
    Subscriptions?: Mirror.Collection.SubscriptionsCollection;
    Timeline?: Mirror.Collection.TimelineCollection;
    // Create a new instance of Account
    newAccount(): Mirror.Schema.Account;
    // Create a new instance of Attachment
    newAttachment(): Mirror.Schema.Attachment;
    // Create a new instance of AuthToken
    newAuthToken(): Mirror.Schema.AuthToken;
    // Create a new instance of Command
    newCommand(): Mirror.Schema.Command;
    // Create a new instance of Contact
    newContact(): Mirror.Schema.Contact;
    // Create a new instance of Location
    newLocation(): Mirror.Schema.Location;
    // Create a new instance of MenuItem
    newMenuItem(): Mirror.Schema.MenuItem;
    // Create a new instance of MenuValue
    newMenuValue(): Mirror.Schema.MenuValue;
    // Create a new instance of Notification
    newNotification(): Mirror.Schema.Notification;
    // Create a new instance of NotificationConfig
    newNotificationConfig(): Mirror.Schema.NotificationConfig;
    // Create a new instance of Subscription
    newSubscription(): Mirror.Schema.Subscription;
    // Create a new instance of TimelineItem
    newTimelineItem(): Mirror.Schema.TimelineItem;
    // Create a new instance of UserAction
    newUserAction(): Mirror.Schema.UserAction;
    // Create a new instance of UserData
    newUserData(): Mirror.Schema.UserData;
  }
}

declare var Mirror: GoogleAppsScript.Mirror;
