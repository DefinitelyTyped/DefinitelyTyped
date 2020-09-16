// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Gmail {
    namespace Collection {
      namespace Users {
        namespace Messages {
          interface AttachmentsCollection {
            // Gets the specified message attachment.
            get(userId: string, messageId: string, id: string): Gmail.Schema.MessagePartBody;
          }
        }
        namespace Settings {
          namespace SendAs {
            interface SmimeInfoCollection {
              // Gets the specified S/MIME config for the specified send-as alias.
              get(userId: string, sendAsEmail: string, id: string): Gmail.Schema.SmimeInfo;
              // Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
              insert(resource: Schema.SmimeInfo, userId: string, sendAsEmail: string): Gmail.Schema.SmimeInfo;
              // Lists S/MIME configs for the specified send-as alias.
              list(userId: string, sendAsEmail: string): Gmail.Schema.ListSmimeInfoResponse;
              // Deletes the specified S/MIME config for the specified send-as alias.
              remove(userId: string, sendAsEmail: string, id: string): void;
              // Sets the default S/MIME config for the specified send-as alias.
              setDefault(userId: string, sendAsEmail: string, id: string): void;
            }
          }
          interface DelegatesCollection {
            // Adds a delegate with its verification status set directly to accepted, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user.
            // Gmail imposes limtations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators.
            // Note that a delegate user must be referred to by their primary email address, and not an email alias.
            // Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            create(resource: Schema.Delegate, userId: string): Gmail.Schema.Delegate;
            // Gets the specified delegate.
            // Note that a delegate user must be referred to by their primary email address, and not an email alias.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            get(userId: string, delegateEmail: string): Gmail.Schema.Delegate;
            // Lists the delegates for the specified account.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            list(userId: string): Gmail.Schema.ListDelegatesResponse;
            // Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it.
            // Note that a delegate user must be referred to by their primary email address, and not an email alias.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            remove(userId: string, delegateEmail: string): void;
          }
          interface FiltersCollection {
            // Creates a filter.
            create(resource: Schema.Filter, userId: string): Gmail.Schema.Filter;
            // Gets a filter.
            get(userId: string, id: string): Gmail.Schema.Filter;
            // Lists the message filters of a Gmail user.
            list(userId: string): Gmail.Schema.ListFiltersResponse;
            // Deletes a filter.
            remove(userId: string, id: string): void;
          }
          interface ForwardingAddressesCollection {
            // Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            create(resource: Schema.ForwardingAddress, userId: string): Gmail.Schema.ForwardingAddress;
            // Gets the specified forwarding address.
            get(userId: string, forwardingEmail: string): Gmail.Schema.ForwardingAddress;
            // Lists the forwarding addresses for the specified account.
            list(userId: string): Gmail.Schema.ListForwardingAddressesResponse;
            // Deletes the specified forwarding address and revokes any verification that may have been required.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            remove(userId: string, forwardingEmail: string): void;
          }
          interface SendAsCollection {
            SmimeInfo?: Gmail.Collection.Users.Settings.SendAs.SmimeInfoCollection;
            // Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            create(resource: Schema.SendAs, userId: string): Gmail.Schema.SendAs;
            // Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
            get(userId: string, sendAsEmail: string): Gmail.Schema.SendAs;
            // Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
            list(userId: string): Gmail.Schema.ListSendAsResponse;
            // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
            // Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.
            patch(resource: Schema.SendAs, userId: string, sendAsEmail: string): Gmail.Schema.SendAs;
            // Deletes the specified send-as alias. Revokes any verification that may have been required for using it.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            remove(userId: string, sendAsEmail: string): void;
            // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
            // Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
            update(resource: Schema.SendAs, userId: string, sendAsEmail: string): Gmail.Schema.SendAs;
            // Sends a verification email to the specified send-as alias address. The verification status must be pending.
            // This method is only available to service account clients that have been delegated domain-wide authority.
            verify(userId: string, sendAsEmail: string): void;
          }
        }
        interface DraftsCollection {
          // Creates a new draft with the DRAFT label.
          create(resource: Schema.Draft, userId: string): Gmail.Schema.Draft;
          // Creates a new draft with the DRAFT label.
          create(resource: Schema.Draft, userId: string, mediaData: any): Gmail.Schema.Draft;
          // Gets the specified draft.
          get(userId: string, id: string): Gmail.Schema.Draft;
          // Gets the specified draft.
          get(userId: string, id: string, optionalArgs: object): Gmail.Schema.Draft;
          // Lists the drafts in the user's mailbox.
          list(userId: string): Gmail.Schema.ListDraftsResponse;
          // Lists the drafts in the user's mailbox.
          list(userId: string, optionalArgs: object): Gmail.Schema.ListDraftsResponse;
          // Immediately and permanently deletes the specified draft. Does not simply trash it.
          remove(userId: string, id: string): void;
          // Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Draft, userId: string): Gmail.Schema.Message;
          // Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Draft, userId: string, mediaData: any): Gmail.Schema.Message;
          // Replaces a draft's content.
          update(resource: Schema.Draft, userId: string, id: string): Gmail.Schema.Draft;
          // Replaces a draft's content.
          update(resource: Schema.Draft, userId: string, id: string, mediaData: any): Gmail.Schema.Draft;
        }
        interface HistoryCollection {
          // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
          list(userId: string): Gmail.Schema.ListHistoryResponse;
          // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
          list(userId: string, optionalArgs: object): Gmail.Schema.ListHistoryResponse;
        }
        interface LabelsCollection {
          // Creates a new label.
          create(resource: Schema.Label, userId: string): Gmail.Schema.Label;
          // Gets the specified label.
          get(userId: string, id: string): Gmail.Schema.Label;
          // Lists all labels in the user's mailbox.
          list(userId: string): Gmail.Schema.ListLabelsResponse;
          // Updates the specified label. This method supports patch semantics.
          patch(resource: Schema.Label, userId: string, id: string): Gmail.Schema.Label;
          // Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
          remove(userId: string, id: string): void;
          // Updates the specified label.
          update(resource: Schema.Label, userId: string, id: string): Gmail.Schema.Label;
        }
        interface MessagesCollection {
          Attachments?: Gmail.Collection.Users.Messages.AttachmentsCollection;
          // Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
          batchDelete(resource: Schema.BatchDeleteMessagesRequest, userId: string): void;
          // Modifies the labels on the specified messages.
          batchModify(resource: Schema.BatchModifyMessagesRequest, userId: string): void;
          // Gets the specified message.
          get(userId: string, id: string): Gmail.Schema.Message;
          // Gets the specified message.
          get(userId: string, id: string, optionalArgs: object): Gmail.Schema.Message;
          // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
          import(resource: Schema.Message, userId: string): Gmail.Schema.Message;
          // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
          import(resource: Schema.Message, userId: string, mediaData: any): Gmail.Schema.Message;
          // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
          import(resource: Schema.Message, userId: string, mediaData: any, optionalArgs: object): Gmail.Schema.Message;
          // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
          insert(resource: Schema.Message, userId: string): Gmail.Schema.Message;
          // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
          insert(resource: Schema.Message, userId: string, mediaData: any): Gmail.Schema.Message;
          // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
          insert(resource: Schema.Message, userId: string, mediaData: any, optionalArgs: object): Gmail.Schema.Message;
          // Lists the messages in the user's mailbox.
          list(userId: string): Gmail.Schema.ListMessagesResponse;
          // Lists the messages in the user's mailbox.
          list(userId: string, optionalArgs: object): Gmail.Schema.ListMessagesResponse;
          // Modifies the labels on the specified message.
          modify(resource: Schema.ModifyMessageRequest, userId: string, id: string): Gmail.Schema.Message;
          // Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.
          remove(userId: string, id: string): void;
          // Sends the specified message to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Message, userId: string): Gmail.Schema.Message;
          // Sends the specified message to the recipients in the To, Cc, and Bcc headers.
          send(resource: Schema.Message, userId: string, mediaData: any): Gmail.Schema.Message;
          // Moves the specified message to the trash.
          trash(userId: string, id: string): Gmail.Schema.Message;
          // Removes the specified message from the trash.
          untrash(userId: string, id: string): Gmail.Schema.Message;
        }
        interface SettingsCollection {
          Delegates?: Gmail.Collection.Users.Settings.DelegatesCollection;
          Filters?: Gmail.Collection.Users.Settings.FiltersCollection;
          ForwardingAddresses?: Gmail.Collection.Users.Settings.ForwardingAddressesCollection;
          SendAs?: Gmail.Collection.Users.Settings.SendAsCollection;
          // Gets the auto-forwarding setting for the specified account.
          getAutoForwarding(userId: string): Gmail.Schema.AutoForwarding;
          // Gets IMAP settings.
          getImap(userId: string): Gmail.Schema.ImapSettings;
          // Gets POP settings.
          getPop(userId: string): Gmail.Schema.PopSettings;
          // Gets vacation responder settings.
          getVacation(userId: string): Gmail.Schema.VacationSettings;
          // Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.
          // This method is only available to service account clients that have been delegated domain-wide authority.
          updateAutoForwarding(resource: Schema.AutoForwarding, userId: string): Gmail.Schema.AutoForwarding;
          // Updates IMAP settings.
          updateImap(resource: Schema.ImapSettings, userId: string): Gmail.Schema.ImapSettings;
          // Updates POP settings.
          updatePop(resource: Schema.PopSettings, userId: string): Gmail.Schema.PopSettings;
          // Updates vacation responder settings.
          updateVacation(resource: Schema.VacationSettings, userId: string): Gmail.Schema.VacationSettings;
        }
        interface ThreadsCollection {
          // Gets the specified thread.
          get(userId: string, id: string): Gmail.Schema.Thread;
          // Gets the specified thread.
          get(userId: string, id: string, optionalArgs: object): Gmail.Schema.Thread;
          // Lists the threads in the user's mailbox.
          list(userId: string): Gmail.Schema.ListThreadsResponse;
          // Lists the threads in the user's mailbox.
          list(userId: string, optionalArgs: object): Gmail.Schema.ListThreadsResponse;
          // Modifies the labels applied to the thread. This applies to all messages in the thread.
          modify(resource: Schema.ModifyThreadRequest, userId: string, id: string): Gmail.Schema.Thread;
          // Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.
          remove(userId: string, id: string): void;
          // Moves the specified thread to the trash.
          trash(userId: string, id: string): Gmail.Schema.Thread;
          // Removes the specified thread from the trash.
          untrash(userId: string, id: string): Gmail.Schema.Thread;
        }
      }
      interface UsersCollection {
        Drafts?: Gmail.Collection.Users.DraftsCollection;
        History?: Gmail.Collection.Users.HistoryCollection;
        Labels?: Gmail.Collection.Users.LabelsCollection;
        Messages?: Gmail.Collection.Users.MessagesCollection;
        Settings?: Gmail.Collection.Users.SettingsCollection;
        Threads?: Gmail.Collection.Users.ThreadsCollection;
        // Gets the current user's Gmail profile.
        getProfile(userId: string): Gmail.Schema.Profile;
        // Stop receiving push notifications for the given user mailbox.
        stop(userId: string): void;
        // Set up or update a push notification watch on the given user mailbox.
        watch(resource: Schema.WatchRequest, userId: string): Gmail.Schema.WatchResponse;
      }
    }
    namespace Schema {
      interface AutoForwarding {
        disposition?: string;
        emailAddress?: string;
        enabled?: boolean;
      }
      interface BatchDeleteMessagesRequest {
        ids?: string[];
      }
      interface BatchModifyMessagesRequest {
        addLabelIds?: string[];
        ids?: string[];
        removeLabelIds?: string[];
      }
      interface Delegate {
        delegateEmail?: string;
        verificationStatus?: string;
      }
      interface Draft {
        id?: string;
        message?: Gmail.Schema.Message;
      }
      interface Filter {
        action?: Gmail.Schema.FilterAction;
        criteria?: Gmail.Schema.FilterCriteria;
        id?: string;
      }
      interface FilterAction {
        addLabelIds?: string[];
        forward?: string;
        removeLabelIds?: string[];
      }
      interface FilterCriteria {
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
      interface ForwardingAddress {
        forwardingEmail?: string;
        verificationStatus?: string;
      }
      interface History {
        id?: string;
        labelsAdded?: Gmail.Schema.HistoryLabelAdded[];
        labelsRemoved?: Gmail.Schema.HistoryLabelRemoved[];
        messages?: Gmail.Schema.Message[];
        messagesAdded?: Gmail.Schema.HistoryMessageAdded[];
        messagesDeleted?: Gmail.Schema.HistoryMessageDeleted[];
      }
      interface HistoryLabelAdded {
        labelIds?: string[];
        message?: Gmail.Schema.Message;
      }
      interface HistoryLabelRemoved {
        labelIds?: string[];
        message?: Gmail.Schema.Message;
      }
      interface HistoryMessageAdded {
        message?: Gmail.Schema.Message;
      }
      interface HistoryMessageDeleted {
        message?: Gmail.Schema.Message;
      }
      interface ImapSettings {
        autoExpunge?: boolean;
        enabled?: boolean;
        expungeBehavior?: string;
        maxFolderSize?: number;
      }
      interface Label {
        color?: Gmail.Schema.LabelColor;
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
      interface LabelColor {
        backgroundColor?: string;
        textColor?: string;
      }
      interface ListDelegatesResponse {
        delegates?: Gmail.Schema.Delegate[];
      }
      interface ListDraftsResponse {
        drafts?: Gmail.Schema.Draft[];
        nextPageToken?: string;
        resultSizeEstimate?: number;
      }
      interface ListFiltersResponse {
        filter?: Gmail.Schema.Filter[];
      }
      interface ListForwardingAddressesResponse {
        forwardingAddresses?: Gmail.Schema.ForwardingAddress[];
      }
      interface ListHistoryResponse {
        history?: Gmail.Schema.History[];
        historyId?: string;
        nextPageToken?: string;
      }
      interface ListLabelsResponse {
        labels?: Gmail.Schema.Label[];
      }
      interface ListMessagesResponse {
        messages?: Gmail.Schema.Message[];
        nextPageToken?: string;
        resultSizeEstimate?: number;
      }
      interface ListSendAsResponse {
        sendAs?: Gmail.Schema.SendAs[];
      }
      interface ListSmimeInfoResponse {
        smimeInfo?: Gmail.Schema.SmimeInfo[];
      }
      interface ListThreadsResponse {
        nextPageToken?: string;
        resultSizeEstimate?: number;
        threads?: Gmail.Schema.Thread[];
      }
      interface Message {
        historyId?: string;
        id?: string;
        internalDate?: string;
        labelIds?: string[];
        payload?: Gmail.Schema.MessagePart;
        raw?: string;
        sizeEstimate?: number;
        snippet?: string;
        threadId?: string;
      }
      interface MessagePart {
        body?: Gmail.Schema.MessagePartBody;
        filename?: string;
        headers?: Gmail.Schema.MessagePartHeader[];
        mimeType?: string;
        partId?: string;
        parts?: Gmail.Schema.MessagePart[];
      }
      interface MessagePartBody {
        attachmentId?: string;
        data?: string;
        size?: number;
      }
      interface MessagePartHeader {
        name?: string;
        value?: string;
      }
      interface ModifyMessageRequest {
        addLabelIds?: string[];
        removeLabelIds?: string[];
      }
      interface ModifyThreadRequest {
        addLabelIds?: string[];
        removeLabelIds?: string[];
      }
      interface PopSettings {
        accessWindow?: string;
        disposition?: string;
      }
      interface Profile {
        emailAddress?: string;
        historyId?: string;
        messagesTotal?: number;
        threadsTotal?: number;
      }
      interface SendAs {
        displayName?: string;
        isDefault?: boolean;
        isPrimary?: boolean;
        replyToAddress?: string;
        sendAsEmail?: string;
        signature?: string;
        smtpMsa?: Gmail.Schema.SmtpMsa;
        treatAsAlias?: boolean;
        verificationStatus?: string;
      }
      interface SmimeInfo {
        encryptedKeyPassword?: string;
        expiration?: string;
        id?: string;
        isDefault?: boolean;
        issuerCn?: string;
        pem?: string;
        pkcs12?: string;
      }
      interface SmtpMsa {
        host?: string;
        password?: string;
        port?: number;
        securityMode?: string;
        username?: string;
      }
      interface Thread {
        historyId?: string;
        id?: string;
        messages?: Gmail.Schema.Message[];
        snippet?: string;
      }
      interface VacationSettings {
        enableAutoReply?: boolean;
        endTime?: string;
        responseBodyHtml?: string;
        responseBodyPlainText?: string;
        responseSubject?: string;
        restrictToContacts?: boolean;
        restrictToDomain?: boolean;
        startTime?: string;
      }
      interface WatchRequest {
        labelFilterAction?: string;
        labelIds?: string[];
        topicName?: string;
      }
      interface WatchResponse {
        expiration?: string;
        historyId?: string;
      }
    }
  }
  interface Gmail {
    Users?: Gmail.Collection.UsersCollection;
    // Create a new instance of AutoForwarding
    newAutoForwarding(): Gmail.Schema.AutoForwarding;
    // Create a new instance of BatchDeleteMessagesRequest
    newBatchDeleteMessagesRequest(): Gmail.Schema.BatchDeleteMessagesRequest;
    // Create a new instance of BatchModifyMessagesRequest
    newBatchModifyMessagesRequest(): Gmail.Schema.BatchModifyMessagesRequest;
    // Create a new instance of Delegate
    newDelegate(): Gmail.Schema.Delegate;
    // Create a new instance of Draft
    newDraft(): Gmail.Schema.Draft;
    // Create a new instance of Filter
    newFilter(): Gmail.Schema.Filter;
    // Create a new instance of FilterAction
    newFilterAction(): Gmail.Schema.FilterAction;
    // Create a new instance of FilterCriteria
    newFilterCriteria(): Gmail.Schema.FilterCriteria;
    // Create a new instance of ForwardingAddress
    newForwardingAddress(): Gmail.Schema.ForwardingAddress;
    // Create a new instance of ImapSettings
    newImapSettings(): Gmail.Schema.ImapSettings;
    // Create a new instance of Label
    newLabel(): Gmail.Schema.Label;
    // Create a new instance of LabelColor
    newLabelColor(): Gmail.Schema.LabelColor;
    // Create a new instance of Message
    newMessage(): Gmail.Schema.Message;
    // Create a new instance of MessagePart
    newMessagePart(): Gmail.Schema.MessagePart;
    // Create a new instance of MessagePartBody
    newMessagePartBody(): Gmail.Schema.MessagePartBody;
    // Create a new instance of MessagePartHeader
    newMessagePartHeader(): Gmail.Schema.MessagePartHeader;
    // Create a new instance of ModifyMessageRequest
    newModifyMessageRequest(): Gmail.Schema.ModifyMessageRequest;
    // Create a new instance of ModifyThreadRequest
    newModifyThreadRequest(): Gmail.Schema.ModifyThreadRequest;
    // Create a new instance of PopSettings
    newPopSettings(): Gmail.Schema.PopSettings;
    // Create a new instance of SendAs
    newSendAs(): Gmail.Schema.SendAs;
    // Create a new instance of SmimeInfo
    newSmimeInfo(): Gmail.Schema.SmimeInfo;
    // Create a new instance of SmtpMsa
    newSmtpMsa(): Gmail.Schema.SmtpMsa;
    // Create a new instance of VacationSettings
    newVacationSettings(): Gmail.Schema.VacationSettings;
    // Create a new instance of WatchRequest
    newWatchRequest(): Gmail.Schema.WatchRequest;
  }
}

declare var Gmail: GoogleAppsScript.Gmail;
