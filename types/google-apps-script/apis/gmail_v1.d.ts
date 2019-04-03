// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Gmail_v1 {
    namespace Collection {
      namespace Users {
        namespace Messages {
          export interface AttachmentsCollection {
            // Gets the specified message attachment.
            get(userId: string, messageId: string, id: string): Gmail_v1.Schema.MessagePartBody;
          }
        }
        namespace Settings {
          namespace SendAs {
            export interface SmimeInfoCollection {
              // Gets the specified S/MIME config for the specified send-as alias.
              get(userId: string, sendAsEmail: string, id: string): Gmail_v1.Schema.SmimeInfo;
              // Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
              insert(resource: Schema.SmimeInfo, userId: string, sendAsEmail: string): Gmail_v1.Schema.SmimeInfo;
              // Lists S/MIME configs for the specified send-as alias.
              list(userId: string, sendAsEmail: string): Gmail_v1.Schema.ListSmimeInfoResponse;
              // Deletes the specified S/MIME config for the specified send-as alias.
              remove(userId: string, sendAsEmail: string, id: string): void;
              // Sets the default S/MIME config for the specified send-as alias.
              setDefault(userId: string, sendAsEmail: string, id: string): void;
            }
          }
          export interface DelegatesCollection {
            // Adds a delegate with its verification status set directly to accepted, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user.
            // Gmail imposes limtations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators.
            // Note that a delegate user must be referred to by their primary email address, and not an email alias.
            // Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            create(resource: Schema.Delegate, userId: string): Gmail_v1.Schema.Delegate;
            // Gets the specified delegate.
            // Note that a delegate user must be referred to by their primary email address, and not an email alias.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            get(userId: string, delegateEmail: string): Gmail_v1.Schema.Delegate;
            // Lists the delegates for the specified account.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            list(userId: string): Gmail_v1.Schema.ListDelegatesResponse;
            // Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it.
            // Note that a delegate user must be referred to by their primary email address, and not an email alias.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            remove(userId: string, delegateEmail: string): void;
          }
          export interface FiltersCollection {
            // Creates a filter.
            create(resource: Schema.Filter, userId: string): Gmail_v1.Schema.Filter;
            // Gets a filter.
            get(userId: string, id: string): Gmail_v1.Schema.Filter;
            // Lists the message filters of a Gmail user.
            list(userId: string): Gmail_v1.Schema.ListFiltersResponse;
            // Deletes a filter.
            remove(userId: string, id: string): void;
          }
          export interface ForwardingAddressesCollection {
            // Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            create(resource: Schema.ForwardingAddress, userId: string): Gmail_v1.Schema.ForwardingAddress;
            // Gets the specified forwarding address.
            get(userId: string, forwardingEmail: string): Gmail_v1.Schema.ForwardingAddress;
            // Lists the forwarding addresses for the specified account.
            list(userId: string): Gmail_v1.Schema.ListForwardingAddressesResponse;
            // Deletes the specified forwarding address and revokes any verification that may have been required.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            remove(userId: string, forwardingEmail: string): void;
          }
          export interface SendAsCollection {
            SmimeInfo?: Gmail_v1.Collection.Users.Settings.SendAs.SmimeInfoCollection;
            // Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            create(resource: Schema.SendAs, userId: string): Gmail_v1.Schema.SendAs;
            // Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
            get(userId: string, sendAsEmail: string): Gmail_v1.Schema.SendAs;
            // Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
            list(userId: string): Gmail_v1.Schema.ListSendAsResponse;
            // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
            // Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.
            patch(resource: Schema.SendAs, userId: string, sendAsEmail: string): Gmail_v1.Schema.SendAs;
            // Deletes the specified send-as alias. Revokes any verification that may have been required for using it.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            remove(userId: string, sendAsEmail: string): void;
            // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
            // Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
            update(resource: Schema.SendAs, userId: string, sendAsEmail: string): Gmail_v1.Schema.SendAs;
            // Sends a verification email to the specified send-as alias address. The verification status must be pending.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            verify(userId: string, sendAsEmail: string): void;
          }
        }
        export interface DraftsCollection {
          // Creates a new draft with the DRAFT label.
          create(resource: Schema.Draft, userId: string): Gmail_v1.Schema.Draft;
          // Creates a new draft with the DRAFT label.
          create(resource: Schema.Draft, userId: string, mediaData: any): Gmail_v1.Schema.Draft;
          // Gets the specified draft.
          get(userId: string, id: string): Gmail_v1.Schema.Draft;
          // Gets the specified draft.
          get(userId: string, id: string, optionalArgs: object): Gmail_v1.Schema.Draft;
          // Lists the drafts in the user's mailbox.
          list(userId: string): Gmail_v1.Schema.ListDraftsResponse;
          // Lists the drafts in the user's mailbox.
          list(userId: string, optionalArgs: object): Gmail_v1.Schema.ListDraftsResponse;
          // Immediately and permanently deletes the specified draft. Does not simply trash it.
          remove(userId: string, id: string): void;
          // Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Draft, userId: string): Gmail_v1.Schema.Message;
          // Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Draft, userId: string, mediaData: any): Gmail_v1.Schema.Message;
          // Replaces a draft's content.
          update(resource: Schema.Draft, userId: string, id: string): Gmail_v1.Schema.Draft;
          // Replaces a draft's content.
          update(resource: Schema.Draft, userId: string, id: string, mediaData: any): Gmail_v1.Schema.Draft;
        }
        export interface HistoryCollection {
          // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
          list(userId: string): Gmail_v1.Schema.ListHistoryResponse;
          // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
          list(userId: string, optionalArgs: object): Gmail_v1.Schema.ListHistoryResponse;
        }
        export interface LabelsCollection {
          // Creates a new label.
          create(resource: Schema.Label, userId: string): Gmail_v1.Schema.Label;
          // Gets the specified label.
          get(userId: string, id: string): Gmail_v1.Schema.Label;
          // Lists all labels in the user's mailbox.
          list(userId: string): Gmail_v1.Schema.ListLabelsResponse;
          // Updates the specified label. This method supports patch semantics.
          patch(resource: Schema.Label, userId: string, id: string): Gmail_v1.Schema.Label;
          // Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
          remove(userId: string, id: string): void;
          // Updates the specified label.
          update(resource: Schema.Label, userId: string, id: string): Gmail_v1.Schema.Label;
        }
        export interface MessagesCollection {
          Attachments?: Gmail_v1.Collection.Users.Messages.AttachmentsCollection;
          // Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
          batchDelete(resource: Schema.BatchDeleteMessagesRequest, userId: string): void;
          // Modifies the labels on the specified messages.
          batchModify(resource: Schema.BatchModifyMessagesRequest, userId: string): void;
          // Gets the specified message.
          get(userId: string, id: string): Gmail_v1.Schema.Message;
          // Gets the specified message.
          get(userId: string, id: string, optionalArgs: object): Gmail_v1.Schema.Message;
          // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
          import(resource: Schema.Message, userId: string): Gmail_v1.Schema.Message;
          // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
          import(resource: Schema.Message, userId: string, mediaData: any): Gmail_v1.Schema.Message;
          // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
          import(resource: Schema.Message, userId: string, mediaData: any, optionalArgs: object): Gmail_v1.Schema.Message;
          // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
          insert(resource: Schema.Message, userId: string): Gmail_v1.Schema.Message;
          // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
          insert(resource: Schema.Message, userId: string, mediaData: any): Gmail_v1.Schema.Message;
          // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
          insert(resource: Schema.Message, userId: string, mediaData: any, optionalArgs: object): Gmail_v1.Schema.Message;
          // Lists the messages in the user's mailbox.
          list(userId: string): Gmail_v1.Schema.ListMessagesResponse;
          // Lists the messages in the user's mailbox.
          list(userId: string, optionalArgs: object): Gmail_v1.Schema.ListMessagesResponse;
          // Modifies the labels on the specified message.
          modify(resource: Schema.ModifyMessageRequest, userId: string, id: string): Gmail_v1.Schema.Message;
          // Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.
          remove(userId: string, id: string): void;
          // Sends the specified message to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Message, userId: string): Gmail_v1.Schema.Message;
          // Sends the specified message to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Message, userId: string, mediaData: any): Gmail_v1.Schema.Message;
          // Moves the specified message to the trash.
          trash(userId: string, id: string): Gmail_v1.Schema.Message;
          // Removes the specified message from the trash.
          untrash(userId: string, id: string): Gmail_v1.Schema.Message;
        }
        export interface SettingsCollection {
          Delegates?: Gmail_v1.Collection.Users.Settings.DelegatesCollection;
          Filters?: Gmail_v1.Collection.Users.Settings.FiltersCollection;
          ForwardingAddresses?: Gmail_v1.Collection.Users.Settings.ForwardingAddressesCollection;
          SendAs?: Gmail_v1.Collection.Users.Settings.SendAsCollection;
          // Gets the auto-forwarding setting for the specified account.
          getAutoForwarding(userId: string): Gmail_v1.Schema.AutoForwarding;
          // Gets IMAP settings.
          getImap(userId: string): Gmail_v1.Schema.ImapSettings;
          // Gets POP settings.
          getPop(userId: string): Gmail_v1.Schema.PopSettings;
          // Gets vacation responder settings.
          getVacation(userId: string): Gmail_v1.Schema.VacationSettings;
          // Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.
          // This method is only available to service account clients that have been delegated domain-wide authority.
          updateAutoForwarding(resource: Schema.AutoForwarding, userId: string): Gmail_v1.Schema.AutoForwarding;
          // Updates IMAP settings.
          updateImap(resource: Schema.ImapSettings, userId: string): Gmail_v1.Schema.ImapSettings;
          // Updates POP settings.
          updatePop(resource: Schema.PopSettings, userId: string): Gmail_v1.Schema.PopSettings;
          // Updates vacation responder settings.
          updateVacation(resource: Schema.VacationSettings, userId: string): Gmail_v1.Schema.VacationSettings;
        }
        export interface ThreadsCollection {
          // Gets the specified thread.
          get(userId: string, id: string): Gmail_v1.Schema.Thread;
          // Gets the specified thread.
          get(userId: string, id: string, optionalArgs: object): Gmail_v1.Schema.Thread;
          // Lists the threads in the user's mailbox.
          list(userId: string): Gmail_v1.Schema.ListThreadsResponse;
          // Lists the threads in the user's mailbox.
          list(userId: string, optionalArgs: object): Gmail_v1.Schema.ListThreadsResponse;
          // Modifies the labels applied to the thread. This applies to all messages in the thread.
          modify(resource: Schema.ModifyThreadRequest, userId: string, id: string): Gmail_v1.Schema.Thread;
          // Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.
          remove(userId: string, id: string): void;
          // Moves the specified thread to the trash.
          trash(userId: string, id: string): Gmail_v1.Schema.Thread;
          // Removes the specified thread from the trash.
          untrash(userId: string, id: string): Gmail_v1.Schema.Thread;
        }
      }
      export interface UsersCollection {
        Drafts?: Gmail_v1.Collection.Users.DraftsCollection;
        History?: Gmail_v1.Collection.Users.HistoryCollection;
        Labels?: Gmail_v1.Collection.Users.LabelsCollection;
        Messages?: Gmail_v1.Collection.Users.MessagesCollection;
        Settings?: Gmail_v1.Collection.Users.SettingsCollection;
        Threads?: Gmail_v1.Collection.Users.ThreadsCollection;
        // Gets the current user's Gmail profile.
        getProfile(userId: string): Gmail_v1.Schema.Profile;
        // Stop receiving push notifications for the given user mailbox.
        stop(userId: string): void;
        // Set up or update a push notification watch on the given user mailbox.
        watch(resource: Schema.WatchRequest, userId: string): Gmail_v1.Schema.WatchResponse;
      }
    }
    namespace Schema {
      export interface AutoForwarding {
        disposition?: string;
        emailAddress?: string;
        enabled?: boolean;
      }
      export interface BatchDeleteMessagesRequest {
        ids?: string[];
      }
      export interface BatchModifyMessagesRequest {
        addLabelIds?: string[];
        ids?: string[];
        removeLabelIds?: string[];
      }
      export interface Delegate {
        delegateEmail?: string;
        verificationStatus?: string;
      }
      export interface Draft {
        id?: string;
        message?: Gmail_v1.Schema.Message;
      }
      export interface Filter {
        action?: Gmail_v1.Schema.FilterAction;
        criteria?: Gmail_v1.Schema.FilterCriteria;
        id?: string;
      }
      export interface FilterAction {
        addLabelIds?: string[];
        forward?: string;
        removeLabelIds?: string[];
      }
      export interface FilterCriteria {
        excludeChats?: boolean;
        from?: string;
        hasAttachment?: boolean;
        negatedQuery?: string;
        query?: string;
        size?: number;
        sizeComparison?: string;
        subject?: string;
        to?: string;
      }
      export interface ForwardingAddress {
        forwardingEmail?: string;
        verificationStatus?: string;
      }
      export interface History {
        id?: string;
        labelsAdded?: Gmail_v1.Schema.HistoryLabelAdded[];
        labelsRemoved?: Gmail_v1.Schema.HistoryLabelRemoved[];
        messages?: Gmail_v1.Schema.Message[];
        messagesAdded?: Gmail_v1.Schema.HistoryMessageAdded[];
        messagesDeleted?: Gmail_v1.Schema.HistoryMessageDeleted[];
      }
      export interface HistoryLabelAdded {
        labelIds?: string[];
        message?: Gmail_v1.Schema.Message;
      }
      export interface HistoryLabelRemoved {
        labelIds?: string[];
        message?: Gmail_v1.Schema.Message;
      }
      export interface HistoryMessageAdded {
        message?: Gmail_v1.Schema.Message;
      }
      export interface HistoryMessageDeleted {
        message?: Gmail_v1.Schema.Message;
      }
      export interface ImapSettings {
        autoExpunge?: boolean;
        enabled?: boolean;
        expungeBehavior?: string;
        maxFolderSize?: number;
      }
      export interface Label {
        color?: Gmail_v1.Schema.LabelColor;
        id?: string;
        labelListVisibility?: string;
        messageListVisibility?: string;
        messagesTotal?: number;
        messagesUnread?: number;
        name?: string;
        threadsTotal?: number;
        threadsUnread?: number;
        type?: string;
      }
      export interface LabelColor {
        backgroundColor?: string;
        textColor?: string;
      }
      export interface ListDelegatesResponse {
        delegates?: Gmail_v1.Schema.Delegate[];
      }
      export interface ListDraftsResponse {
        drafts?: Gmail_v1.Schema.Draft[];
        nextPageToken?: string;
        resultSizeEstimate?: number;
      }
      export interface ListFiltersResponse {
        filter?: Gmail_v1.Schema.Filter[];
      }
      export interface ListForwardingAddressesResponse {
        forwardingAddresses?: Gmail_v1.Schema.ForwardingAddress[];
      }
      export interface ListHistoryResponse {
        history?: Gmail_v1.Schema.History[];
        historyId?: string;
        nextPageToken?: string;
      }
      export interface ListLabelsResponse {
        labels?: Gmail_v1.Schema.Label[];
      }
      export interface ListMessagesResponse {
        messages?: Gmail_v1.Schema.Message[];
        nextPageToken?: string;
        resultSizeEstimate?: number;
      }
      export interface ListSendAsResponse {
        sendAs?: Gmail_v1.Schema.SendAs[];
      }
      export interface ListSmimeInfoResponse {
        smimeInfo?: Gmail_v1.Schema.SmimeInfo[];
      }
      export interface ListThreadsResponse {
        nextPageToken?: string;
        resultSizeEstimate?: number;
        threads?: Gmail_v1.Schema.Thread[];
      }
      export interface Message {
        historyId?: string;
        id?: string;
        internalDate?: string;
        labelIds?: string[];
        payload?: Gmail_v1.Schema.MessagePart;
        raw?: string;
        sizeEstimate?: number;
        snippet?: string;
        threadId?: string;
      }
      export interface MessagePart {
        body?: Gmail_v1.Schema.MessagePartBody;
        filename?: string;
        headers?: Gmail_v1.Schema.MessagePartHeader[];
        mimeType?: string;
        partId?: string;
        parts?: Gmail_v1.Schema.MessagePart[];
      }
      export interface MessagePartBody {
        attachmentId?: string;
        data?: string;
        size?: number;
      }
      export interface MessagePartHeader {
        name?: string;
        value?: string;
      }
      export interface ModifyMessageRequest {
        addLabelIds?: string[];
        removeLabelIds?: string[];
      }
      export interface ModifyThreadRequest {
        addLabelIds?: string[];
        removeLabelIds?: string[];
      }
      export interface PopSettings {
        accessWindow?: string;
        disposition?: string;
      }
      export interface Profile {
        emailAddress?: string;
        historyId?: string;
        messagesTotal?: number;
        threadsTotal?: number;
      }
      export interface SendAs {
        displayName?: string;
        isDefault?: boolean;
        isPrimary?: boolean;
        replyToAddress?: string;
        sendAsEmail?: string;
        signature?: string;
        smtpMsa?: Gmail_v1.Schema.SmtpMsa;
        treatAsAlias?: boolean;
        verificationStatus?: string;
      }
      export interface SmimeInfo {
        encryptedKeyPassword?: string;
        expiration?: string;
        id?: string;
        isDefault?: boolean;
        issuerCn?: string;
        pem?: string;
        pkcs12?: string;
      }
      export interface SmtpMsa {
        host?: string;
        password?: string;
        port?: number;
        securityMode?: string;
        username?: string;
      }
      export interface Thread {
        historyId?: string;
        id?: string;
        messages?: Gmail_v1.Schema.Message[];
        snippet?: string;
      }
      export interface VacationSettings {
        enableAutoReply?: boolean;
        endTime?: string;
        responseBodyHtml?: string;
        responseBodyPlainText?: string;
        responseSubject?: string;
        restrictToContacts?: boolean;
        restrictToDomain?: boolean;
        startTime?: string;
      }
      export interface WatchRequest {
        labelFilterAction?: string;
        labelIds?: string[];
        topicName?: string;
      }
      export interface WatchResponse {
        expiration?: string;
        historyId?: string;
      }
    }
  }
  export interface Gmail_v1 {
    Users?: Gmail_v1.Collection.UsersCollection;
    // Create a new instance of AutoForwarding
    newAutoForwarding(): Gmail_v1.Schema.AutoForwarding;
    // Create a new instance of BatchDeleteMessagesRequest
    newBatchDeleteMessagesRequest(): Gmail_v1.Schema.BatchDeleteMessagesRequest;
    // Create a new instance of BatchModifyMessagesRequest
    newBatchModifyMessagesRequest(): Gmail_v1.Schema.BatchModifyMessagesRequest;
    // Create a new instance of Delegate
    newDelegate(): Gmail_v1.Schema.Delegate;
    // Create a new instance of Draft
    newDraft(): Gmail_v1.Schema.Draft;
    // Create a new instance of Filter
    newFilter(): Gmail_v1.Schema.Filter;
    // Create a new instance of FilterAction
    newFilterAction(): Gmail_v1.Schema.FilterAction;
    // Create a new instance of FilterCriteria
    newFilterCriteria(): Gmail_v1.Schema.FilterCriteria;
    // Create a new instance of ForwardingAddress
    newForwardingAddress(): Gmail_v1.Schema.ForwardingAddress;
    // Create a new instance of ImapSettings
    newImapSettings(): Gmail_v1.Schema.ImapSettings;
    // Create a new instance of Label
    newLabel(): Gmail_v1.Schema.Label;
    // Create a new instance of LabelColor
    newLabelColor(): Gmail_v1.Schema.LabelColor;
    // Create a new instance of Message
    newMessage(): Gmail_v1.Schema.Message;
    // Create a new instance of MessagePart
    newMessagePart(): Gmail_v1.Schema.MessagePart;
    // Create a new instance of MessagePartBody
    newMessagePartBody(): Gmail_v1.Schema.MessagePartBody;
    // Create a new instance of MessagePartHeader
    newMessagePartHeader(): Gmail_v1.Schema.MessagePartHeader;
    // Create a new instance of ModifyMessageRequest
    newModifyMessageRequest(): Gmail_v1.Schema.ModifyMessageRequest;
    // Create a new instance of ModifyThreadRequest
    newModifyThreadRequest(): Gmail_v1.Schema.ModifyThreadRequest;
    // Create a new instance of PopSettings
    newPopSettings(): Gmail_v1.Schema.PopSettings;
    // Create a new instance of SendAs
    newSendAs(): Gmail_v1.Schema.SendAs;
    // Create a new instance of SmimeInfo
    newSmimeInfo(): Gmail_v1.Schema.SmimeInfo;
    // Create a new instance of SmtpMsa
    newSmtpMsa(): Gmail_v1.Schema.SmtpMsa;
    // Create a new instance of VacationSettings
    newVacationSettings(): Gmail_v1.Schema.VacationSettings;
    // Create a new instance of WatchRequest
    newWatchRequest(): Gmail_v1.Schema.WatchRequest;
  }
}

declare var Gmail_v1: GoogleAppsScript.Gmail_v1;