// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Mirror {
    namespace Collection {
      namespace Timeline {
        interface AttachmentsCollection {
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
      interface AccountsCollection {
        // Inserts a new account for a user
        insert(resource: Schema.Account, userToken: string, accountType: string, accountName: string): Mirror.Schema.Account;
      }
      interface ContactsCollection {
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
      interface LocationsCollection {
        // Gets a single location by ID.
        get(id: string): Mirror.Schema.Location;
        // Retrieves a list of locations for the user.
        list(): Mirror.Schema.LocationsListResponse;
      }
      interface SettingsCollection {
        // Gets a single setting by ID.
        get(id: string): Mirror.Schema.Setting;
      }
      interface SubscriptionsCollection {
        // Creates a new subscription.
        insert(resource: Schema.Subscription): Mirror.Schema.Subscription;
        // Retrieves a list of subscriptions for the authenticated user and service.
        list(): Mirror.Schema.SubscriptionsListResponse;
        // Deletes a subscription.
        remove(id: string): void;
        // Updates an existing subscription in place.
        update(resource: Schema.Subscription, id: string): Mirror.Schema.Subscription;
      }
      interface TimelineCollection {
        Attachments?: Mirror.Collection.Timeline.AttachmentsCollection | undefined;
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
      interface Account {
        authTokens?: Mirror.Schema.AuthToken[] | undefined;
        features?: string[] | undefined;
        password?: string | undefined;
        userData?: Mirror.Schema.UserData[] | undefined;
      }
      interface Attachment {
        contentType?: string | undefined;
        contentUrl?: string | undefined;
        id?: string | undefined;
        isProcessingContent?: boolean | undefined;
      }
      interface AttachmentsListResponse {
        items?: Mirror.Schema.Attachment[] | undefined;
        kind?: string | undefined;
      }
      interface AuthToken {
        authToken?: string | undefined;
        type?: string | undefined;
      }
      interface Command {
        type?: string | undefined;
      }
      interface Contact {
        acceptCommands?: Mirror.Schema.Command[] | undefined;
        acceptTypes?: string[] | undefined;
        displayName?: string | undefined;
        id?: string | undefined;
        imageUrls?: string[] | undefined;
        kind?: string | undefined;
        phoneNumber?: string | undefined;
        priority?: number | undefined;
        sharingFeatures?: string[] | undefined;
        source?: string | undefined;
        speakableName?: string | undefined;
        type?: string | undefined;
      }
      interface ContactsListResponse {
        items?: Mirror.Schema.Contact[] | undefined;
        kind?: string | undefined;
      }
      interface Location {
        accuracy?: number | undefined;
        address?: string | undefined;
        displayName?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        timestamp?: string | undefined;
      }
      interface LocationsListResponse {
        items?: Mirror.Schema.Location[] | undefined;
        kind?: string | undefined;
      }
      interface MenuItem {
        action?: string | undefined;
        contextual_command?: string | undefined;
        id?: string | undefined;
        payload?: string | undefined;
        removeWhenSelected?: boolean | undefined;
        values?: Mirror.Schema.MenuValue[] | undefined;
      }
      interface MenuValue {
        displayName?: string | undefined;
        iconUrl?: string | undefined;
        state?: string | undefined;
      }
      interface Notification {
        collection?: string | undefined;
        itemId?: string | undefined;
        operation?: string | undefined;
        userActions?: Mirror.Schema.UserAction[] | undefined;
        userToken?: string | undefined;
        verifyToken?: string | undefined;
      }
      interface NotificationConfig {
        deliveryTime?: string | undefined;
        level?: string | undefined;
      }
      interface Setting {
        id?: string | undefined;
        kind?: string | undefined;
        value?: string | undefined;
      }
      interface Subscription {
        callbackUrl?: string | undefined;
        collection?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        notification?: Mirror.Schema.Notification | undefined;
        operation?: string[] | undefined;
        updated?: string | undefined;
        userToken?: string | undefined;
        verifyToken?: string | undefined;
      }
      interface SubscriptionsListResponse {
        items?: Mirror.Schema.Subscription[] | undefined;
        kind?: string | undefined;
      }
      interface TimelineItem {
        attachments?: Mirror.Schema.Attachment[] | undefined;
        bundleId?: string | undefined;
        canonicalUrl?: string | undefined;
        created?: string | undefined;
        creator?: Mirror.Schema.Contact | undefined;
        displayTime?: string | undefined;
        etag?: string | undefined;
        html?: string | undefined;
        id?: string | undefined;
        inReplyTo?: string | undefined;
        isBundleCover?: boolean | undefined;
        isDeleted?: boolean | undefined;
        isPinned?: boolean | undefined;
        kind?: string | undefined;
        location?: Mirror.Schema.Location | undefined;
        menuItems?: Mirror.Schema.MenuItem[] | undefined;
        notification?: Mirror.Schema.NotificationConfig | undefined;
        pinScore?: number | undefined;
        recipients?: Mirror.Schema.Contact[] | undefined;
        selfLink?: string | undefined;
        sourceItemId?: string | undefined;
        speakableText?: string | undefined;
        speakableType?: string | undefined;
        text?: string | undefined;
        title?: string | undefined;
        updated?: string | undefined;
      }
      interface TimelineListResponse {
        items?: Mirror.Schema.TimelineItem[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface UserAction {
        payload?: string | undefined;
        type?: string | undefined;
      }
      interface UserData {
        key?: string | undefined;
        value?: string | undefined;
      }
    }
  }
  interface Mirror {
    Accounts?: Mirror.Collection.AccountsCollection | undefined;
    Contacts?: Mirror.Collection.ContactsCollection | undefined;
    Locations?: Mirror.Collection.LocationsCollection | undefined;
    Settings?: Mirror.Collection.SettingsCollection | undefined;
    Subscriptions?: Mirror.Collection.SubscriptionsCollection | undefined;
    Timeline?: Mirror.Collection.TimelineCollection | undefined;
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
