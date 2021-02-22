// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Gmail {
        namespace Collection {
            namespace Users {
                namespace Messages {
                    interface AttachmentsCollection {
                        // Gets the specified message attachment.
                        get(userId: string, messageId: string, id: string): Schema.MessagePartBody;
                    }
                }
                namespace Settings {
                    namespace SendAs {
                        interface SmimeInfoCollection {
                            // Gets the specified S/MIME config for the specified send-as alias.
                            get(userId: string, sendAsEmail: string, id: string): Schema.SmimeInfo;
                            // Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the
                            // key.
                            insert(resource: Schema.SmimeInfo, userId: string, sendAsEmail: string): Schema.SmimeInfo;
                            // Lists S/MIME configs for the specified send-as alias.
                            list(userId: string, sendAsEmail: string): Schema.ListSmimeInfoResponse;
                            // Deletes the specified S/MIME config for the specified send-as alias.
                            remove(userId: string, sendAsEmail: string, id: string): void;
                            // Sets the default S/MIME config for the specified send-as alias.
                            setDefault(userId: string, sendAsEmail: string, id: string): void;
                        }
                    }
                    interface DelegatesCollection {
                        // Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The
                        // delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the
                        // number of delegates and delegators each user in a G Suite organization can have. These limits depend on your
                        // organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user
                        // must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is
                        // created, there may be up to a one minute delay before the new delegate is available for use. This method is only
                        // available to service account clients that have been delegated domain-wide authority.
                        create(resource: Schema.Delegate, userId: string): Schema.Delegate;
                        // Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an
                        // email alias. This method is only available to service account clients that have been delegated domain-wide authority.
                        get(userId: string, delegateEmail: string): Schema.Delegate;
                        // Lists the delegates for the specified account. This method is only available to service account clients that have been
                        // delegated domain-wide authority.
                        list(userId: string): Schema.ListDelegatesResponse;
                        // Removes the specified delegate (which can be of any verification status), and revokes any verification that may have
                        // been required for using it. Note that a delegate user must be referred to by their primary email address, and not an
                        // email alias. This method is only available to service account clients that have been delegated domain-wide authority.
                        remove(userId: string, delegateEmail: string): void;
                    }
                    interface FiltersCollection {
                        // Creates a filter. Note: you can only create a maximum of 1,000 filters.
                        create(resource: Schema.Filter, userId: string): Schema.Filter;
                        // Gets a filter.
                        get(userId: string, id: string): Schema.Filter;
                        // Lists the message filters of a Gmail user.
                        list(userId: string): Schema.ListFiltersResponse;
                        // Deletes a filter.
                        remove(userId: string, id: string): void;
                    }
                    interface ForwardingAddressesCollection {
                        // Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the
                        // resource's verification status will be set to `pending`; otherwise, the resource will be created with verification
                        // status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide
                        // authority.
                        create(resource: Schema.ForwardingAddress, userId: string): Schema.ForwardingAddress;
                        // Gets the specified forwarding address.
                        get(userId: string, forwardingEmail: string): Schema.ForwardingAddress;
                        // Lists the forwarding addresses for the specified account.
                        list(userId: string): Schema.ListForwardingAddressesResponse;
                        // Deletes the specified forwarding address and revokes any verification that may have been required. This method is only
                        // available to service account clients that have been delegated domain-wide authority.
                        remove(userId: string, forwardingEmail: string): void;
                    }
                    interface SendAsCollection {
                        SmimeInfo?: Collection.Users.Settings.SendAs.SmimeInfoCollection;
                        // Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to
                        // validate the configuration before creating the alias. If ownership verification is required for the alias, a message
                        // will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the
                        // resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the
                        // HTML before saving it with the alias. This method is only available to service account clients that have been delegated
                        // domain-wide authority.
                        create(resource: Schema.SendAs, userId: string): Schema.SendAs;
                        // Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the
                        // collection.
                        get(userId: string, sendAsEmail: string): Schema.SendAs;
                        // Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the
                        // account as well as any custom "from" aliases.
                        list(userId: string): Schema.ListSendAsResponse;
                        // Patch the specified send-as alias.
                        patch(resource: Schema.SendAs, userId: string, sendAsEmail: string): Schema.SendAs;
                        // Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is
                        // only available to service account clients that have been delegated domain-wide authority.
                        remove(userId: string, sendAsEmail: string): void;
                        // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
                        // Addresses other than the primary address for the account can only be updated by service account clients that have been
                        // delegated domain-wide authority.
                        update(resource: Schema.SendAs, userId: string, sendAsEmail: string): Schema.SendAs;
                        // Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This
                        // method is only available to service account clients that have been delegated domain-wide authority.
                        verify(userId: string, sendAsEmail: string): void;
                    }
                }
                interface DraftsCollection {
                    // Creates a new draft with the `DRAFT` label.
                    create(resource: Schema.Draft, userId: string): Schema.Draft;
                    // Creates a new draft with the `DRAFT` label.
                    create(resource: Schema.Draft, userId: string, mediaData: Base.Blob): Schema.Draft;
                    // Gets the specified draft.
                    get(userId: string, id: string): Schema.Draft;
                    // Gets the specified draft.
                    get(userId: string, id: string, optionalArgs: object): Schema.Draft;
                    // Lists the drafts in the user's mailbox.
                    list(userId: string): Schema.ListDraftsResponse;
                    // Lists the drafts in the user's mailbox.
                    list(userId: string, optionalArgs: object): Schema.ListDraftsResponse;
                    // Immediately and permanently deletes the specified draft. Does not simply trash it.
                    remove(userId: string, id: string): void;
                    // Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
                    send(resource: Schema.Draft, userId: string): Schema.Message;
                    // Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
                    send(resource: Schema.Draft, userId: string, mediaData: Base.Blob): Schema.Message;
                    // Replaces a draft's content.
                    update(resource: Schema.Draft, userId: string, id: string): Schema.Draft;
                    // Replaces a draft's content.
                    update(resource: Schema.Draft, userId: string, id: string, mediaData: Base.Blob): Schema.Draft;
                }
                interface HistoryCollection {
                    // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing
                    // `historyId`).
                    list(userId: string): Schema.ListHistoryResponse;
                    // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing
                    // `historyId`).
                    list(userId: string, optionalArgs: object): Schema.ListHistoryResponse;
                }
                interface LabelsCollection {
                    // Creates a new label.
                    create(resource: Schema.Label, userId: string): Schema.Label;
                    // Gets the specified label.
                    get(userId: string, id: string): Schema.Label;
                    // Lists all labels in the user's mailbox.
                    list(userId: string): Schema.ListLabelsResponse;
                    // Patch the specified label.
                    patch(resource: Schema.Label, userId: string, id: string): Schema.Label;
                    // Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied
                    // to.
                    remove(userId: string, id: string): void;
                    // Updates the specified label.
                    update(resource: Schema.Label, userId: string, id: string): Schema.Label;
                }
                interface MessagesCollection {
                    Attachments?: Collection.Users.Messages.AttachmentsCollection;
                    // Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at
                    // all.
                    batchDelete(resource: Schema.BatchDeleteMessagesRequest, userId: string): void;
                    // Modifies the labels on the specified messages.
                    batchModify(resource: Schema.BatchModifyMessagesRequest, userId: string): void;
                    // Gets the specified message.
                    get(userId: string, id: string): Schema.Message;
                    // Gets the specified message.
                    get(userId: string, id: string, optionalArgs: object): Schema.Message;
                    // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to
                    // receiving via SMTP. Does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by
                    // the user.
                    import(resource: Schema.Message, userId: string): Schema.Message;
                    // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to
                    // receiving via SMTP. Does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by
                    // the user.
                    import(resource: Schema.Message, userId: string, mediaData: Base.Blob): Schema.Message;
                    // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to
                    // receiving via SMTP. Does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by
                    // the user.
                    import(resource: Schema.Message, userId: string, mediaData: Base.Blob, optionalArgs: object): Schema.Message;
                    // Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and
                    // classification. Does not send a message.
                    insert(resource: Schema.Message, userId: string): Schema.Message;
                    // Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and
                    // classification. Does not send a message.
                    insert(resource: Schema.Message, userId: string, mediaData: Base.Blob): Schema.Message;
                    // Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and
                    // classification. Does not send a message.
                    insert(resource: Schema.Message, userId: string, mediaData: Base.Blob, optionalArgs: object): Schema.Message;
                    // Lists the messages in the user's mailbox.
                    list(userId: string): Schema.ListMessagesResponse;
                    // Lists the messages in the user's mailbox.
                    list(userId: string, optionalArgs: object): Schema.ListMessagesResponse;
                    // Modifies the labels on the specified message.
                    modify(resource: Schema.ModifyMessageRequest, userId: string, id: string): Schema.Message;
                    // Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash`
                    // instead.
                    remove(userId: string, id: string): void;
                    // Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
                    send(resource: Schema.Message, userId: string): Schema.Message;
                    // Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
                    send(resource: Schema.Message, userId: string, mediaData: Base.Blob): Schema.Message;
                    // Moves the specified message to the trash.
                    trash(userId: string, id: string): Schema.Message;
                    // Removes the specified message from the trash.
                    untrash(userId: string, id: string): Schema.Message;
                }
                interface SettingsCollection {
                    Delegates?: Collection.Users.Settings.DelegatesCollection;
                    Filters?: Collection.Users.Settings.FiltersCollection;
                    ForwardingAddresses?: Collection.Users.Settings.ForwardingAddressesCollection;
                    SendAs?: Collection.Users.Settings.SendAsCollection;
                    // Gets the auto-forwarding setting for the specified account.
                    getAutoForwarding(userId: string): Schema.AutoForwarding;
                    // Gets IMAP settings.
                    getImap(userId: string): Schema.ImapSettings;
                    // Gets language settings.
                    getLanguage(userId: string): Schema.LanguageSettings;
                    // Gets POP settings.
                    getPop(userId: string): Schema.PopSettings;
                    // Gets vacation responder settings.
                    getVacation(userId: string): Schema.VacationSettings;
                    // Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when
                    // auto-forwarding is enabled. This method is only available to service account clients that have been delegated
                    // domain-wide authority.
                    updateAutoForwarding(resource: Schema.AutoForwarding, userId: string): Schema.AutoForwarding;
                    // Updates IMAP settings.
                    updateImap(resource: Schema.ImapSettings, userId: string): Schema.ImapSettings;
                    // Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user,
                    // which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be
                    // directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
                    updateLanguage(resource: Schema.LanguageSettings, userId: string): Schema.LanguageSettings;
                    // Updates POP settings.
                    updatePop(resource: Schema.PopSettings, userId: string): Schema.PopSettings;
                    // Updates vacation responder settings.
                    updateVacation(resource: Schema.VacationSettings, userId: string): Schema.VacationSettings;
                }
                interface ThreadsCollection {
                    // Gets the specified thread.
                    get(userId: string, id: string): Schema.Thread;
                    // Gets the specified thread.
                    get(userId: string, id: string, optionalArgs: object): Schema.Thread;
                    // Lists the threads in the user's mailbox.
                    list(userId: string): Schema.ListThreadsResponse;
                    // Lists the threads in the user's mailbox.
                    list(userId: string, optionalArgs: object): Schema.ListThreadsResponse;
                    // Modifies the labels applied to the thread. This applies to all messages in the thread.
                    modify(resource: Schema.ModifyThreadRequest, userId: string, id: string): Schema.Thread;
                    // Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer `threads.trash`
                    // instead.
                    remove(userId: string, id: string): void;
                    // Moves the specified thread to the trash.
                    trash(userId: string, id: string): Schema.Thread;
                    // Removes the specified thread from the trash.
                    untrash(userId: string, id: string): Schema.Thread;
                }
            }
            interface UsersCollection {
                Drafts?: Collection.Users.DraftsCollection;
                History?: Collection.Users.HistoryCollection;
                Labels?: Collection.Users.LabelsCollection;
                Messages?: Collection.Users.MessagesCollection;
                Settings?: Collection.Users.SettingsCollection;
                Threads?: Collection.Users.ThreadsCollection;
                // Gets the current user's Gmail profile.
                getProfile(userId: string): Schema.Profile;
                // Stop receiving push notifications for the given user mailbox.
                stop(userId: string): void;
                // Set up or update a push notification watch on the given user mailbox.
                watch(resource: Schema.WatchRequest, userId: string): Schema.WatchResponse;
            }
        }
        namespace Schema {
            // Auto-forwarding settings for an account.
            interface AutoForwarding {
                // The state that a message should be left in after it has been forwarded.
                disposition?: string;
                // Email address to which all incoming messages are forwarded. This email address must be a verified member of the
                // forwarding addresses.
                emailAddress?: string;
                // Whether all incoming mail is automatically forwarded to another address.
                enabled?: boolean;
            }
            interface BatchDeleteMessagesRequest {
                // The IDs of the messages to delete.
                ids?: string[];
            }
            interface BatchModifyMessagesRequest {
                // A list of label IDs to add to messages.
                addLabelIds?: string[];
                // The IDs of the messages to modify. There is a limit of 1000 ids per request.
                ids?: string[];
                // A list of label IDs to remove from messages.
                removeLabelIds?: string[];
            }
            // Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the
            // delegator's account. See "Set up mail delegation" for more information about delegates.
            interface Delegate {
                // The email address of the delegate.
                delegateEmail?: string;
                // Indicates whether this address has been verified and can act as a delegate for the account. Read-only.
                verificationStatus?: string;
            }
            // A draft email in the user's mailbox.
            interface Draft {
                // The immutable ID of the draft.
                id?: string;
                // The message content of the draft.
                message?: Schema.Message;
            }
            // Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
            interface Filter {
                // Action that the filter performs.
                action?: Schema.FilterAction;
                // Matching criteria for the filter.
                criteria?: Schema.FilterCriteria;
                // The server assigned ID of the filter.
                id?: string;
            }
            // A set of actions to perform on a message.
            interface FilterAction {
                // List of labels to add to the message.
                addLabelIds?: string[];
                // Email address that the message should be forwarded to.
                forward?: string;
                // List of labels to remove from the message.
                removeLabelIds?: string[];
            }
            // Message matching criteria.
            interface FilterCriteria {
                // Whether the response should exclude chats.
                excludeChats?: boolean;
                // The sender's display name or email address.
                from?: string;
                // Whether the message has any attachment.
                hasAttachment?: boolean;
                // Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For
                // example, `"from:someuser@example.com rfc822msgid: is:unread"`.
                negatedQuery?: string;
                // Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example,
                // `"from:someuser@example.com rfc822msgid: is:unread"`.
                query?: string;
                // The size of the entire RFC822 message in bytes, including all headers and attachments.
                size?: Integer;
                // How the message size in bytes should be in relation to the size field.
                sizeComparison?: string;
                // Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent
                // spaces are collapsed.
                subject?: string;
                // The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can
                // use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com".
                // This field is case-insensitive.
                to?: string;
            }
            // Settings for a forwarding address.
            interface ForwardingAddress {
                // An email address to which messages can be forwarded.
                forwardingEmail?: string;
                // Indicates whether this address has been verified and is usable for forwarding. Read-only.
                verificationStatus?: string;
            }
            // A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
            interface History {
                // The mailbox sequence ID.
                id?: string;
                // Labels added to messages in this history record.
                labelsAdded?: Schema.HistoryLabelAdded[];
                // Labels removed from messages in this history record.
                labelsRemoved?: Schema.HistoryLabelRemoved[];
                // List of messages changed in this history record. The fields for specific change types, such as `messagesAdded` may
                // duplicate messages in this field. We recommend using the specific change-type fields instead of this.
                messages?: Schema.Message[];
                // Messages added to the mailbox in this history record.
                messagesAdded?: Schema.HistoryMessageAdded[];
                // Messages deleted (not Trashed) from the mailbox in this history record.
                messagesDeleted?: Schema.HistoryMessageDeleted[];
            }
            interface HistoryLabelAdded {
                // Label IDs added to the message.
                labelIds?: string[];
                message?: Schema.Message;
            }
            interface HistoryLabelRemoved {
                // Label IDs removed from the message.
                labelIds?: string[];
                message?: Schema.Message;
            }
            interface HistoryMessageAdded {
                message?: Schema.Message;
            }
            interface HistoryMessageDeleted {
                message?: Schema.Message;
            }
            // IMAP settings for an account.
            interface ImapSettings {
                // If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail
                // will wait for an update from the client before expunging messages marked as deleted.
                autoExpunge?: boolean;
                // Whether IMAP is enabled for the account.
                enabled?: boolean;
                // The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP
                // folder.
                expungeBehavior?: string;
                // An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or
                // 10000. A value of zero is interpreted to mean that there is no limit.
                maxFolderSize?: Integer;
            }
            // Labels are used to categorize messages and threads within the user's mailbox.
            interface Label {
                // The color to assign to the label. Color is only available for labels that have their `type` set to `user`.
                color?: Schema.LabelColor;
                // The immutable ID of the label.
                id?: string;
                // The visibility of the label in the label list in the Gmail web interface.
                labelListVisibility?: string;
                // The visibility of messages with this label in the message list in the Gmail web interface.
                messageListVisibility?: string;
                // The total number of messages with the label.
                messagesTotal?: Integer;
                // The number of unread messages with the label.
                messagesUnread?: Integer;
                // The display name of the label.
                name?: string;
                // The total number of threads with the label.
                threadsTotal?: Integer;
                // The number of unread threads with the label.
                threadsUnread?: Integer;
                // The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be
                // applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System
                // labels may be able to be applied to or removed from messages and threads under some circumstances but this is not
                // guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but
                // cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.
                type?: string;
            }
            interface LabelColor {
                // The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of
                // a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc,
                // #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7,
                // #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1,
                // #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60,
                // #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111,
                // #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4,
                // #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07,
                // #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46,
                // \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
                backgroundColor?: string;
                // The text color of the label, represented as hex string. This field is required in order to set the color of a label.
                // Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef,
                // #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1,
                // #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9,
                // \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789,
                // #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21,
                // #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e,
                // #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1,
                // #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37,
                // #ebdbde, #cca6ac, #094228, #42d692, #16a765
                textColor?: string;
            }
            // Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.
            interface LanguageSettings {
                // The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British
                // English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer
                // to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help
                // article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can
                // display the same set of languages. In the case that a user's display language is not available for use on a particular
                // client, said client automatically chooses to display in the closest supported variant (or a reasonable default).
                displayLanguage?: string;
            }
            // Response for the ListDelegates method.
            interface ListDelegatesResponse {
                // List of the user's delegates (with any verification status). If an account doesn't have delegates, this field doesn't
                // appear.
                delegates?: Schema.Delegate[];
            }
            interface ListDraftsResponse {
                // List of drafts. Note that the `Message` property in each `Draft` resource only contains an `id` and a `threadId`. The
                // messages.get method can fetch additional message details.
                drafts?: Schema.Draft[];
                // Token to retrieve the next page of results in the list.
                nextPageToken?: string;
                // Estimated total number of results.
                resultSizeEstimate?: Integer;
            }
            // Response for the ListFilters method.
            interface ListFiltersResponse {
                // List of a user's filters.
                filter?: Schema.Filter[];
            }
            // Response for the ListForwardingAddresses method.
            interface ListForwardingAddressesResponse {
                // List of addresses that may be used for forwarding.
                forwardingAddresses?: Schema.ForwardingAddress[];
            }
            interface ListHistoryResponse {
                // List of history records. Any `messages` contained in the response will typically only have `id` and `threadId` fields
                // populated.
                history?: Schema.History[];
                // The ID of the mailbox's current history record.
                historyId?: string;
                // Page token to retrieve the next page of results in the list.
                nextPageToken?: string;
            }
            interface ListLabelsResponse {
                // List of labels. Note that each label resource only contains an `id`, `name`, `messageListVisibility`,
                // `labelListVisibility`, and `type`. The labels.get method can fetch additional label details.
                labels?: Schema.Label[];
            }
            interface ListMessagesResponse {
                // List of messages. Note that each message resource contains only an `id` and a `threadId`. Additional message details can
                // be fetched using the messages.get method.
                messages?: Schema.Message[];
                // Token to retrieve the next page of results in the list.
                nextPageToken?: string;
                // Estimated total number of results.
                resultSizeEstimate?: Integer;
            }
            // Response for the ListSendAs method.
            interface ListSendAsResponse {
                // List of send-as aliases.
                sendAs?: Schema.SendAs[];
            }
            interface ListSmimeInfoResponse {
                // List of SmimeInfo.
                smimeInfo?: Schema.SmimeInfo[];
            }
            interface ListThreadsResponse {
                // Page token to retrieve the next page of results in the list.
                nextPageToken?: string;
                // Estimated total number of results.
                resultSizeEstimate?: Integer;
                // List of threads. Note that each thread resource does not contain a list of `messages`. The list of `messages` for a
                // given thread can be fetched using the threads.get method.
                threads?: Schema.Thread[];
            }
            // An email message.
            interface Message {
                // The ID of the last history record that modified this message.
                historyId?: string;
                // The immutable ID of the message.
                id?: string;
                // The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received
                // email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date`
                // header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.
                internalDate?: string;
                // List of IDs of labels applied to this message.
                labelIds?: string[];
                // The parsed email structure in the message parts.
                payload?: Schema.MessagePart;
                // The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and
                // `drafts.get` responses when the `format=RAW` parameter is supplied.
                raw?: Byte[];
                // Estimated size in bytes of the message.
                sizeEstimate?: Integer;
                // A short part of the message text.
                snippet?: string;
                // The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met:
                // 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The
                // `References` and `In-Reply-To` headers must be set in compliance with the [RFC
                // 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match.
                threadId?: string;
            }
            // A single MIME message part.
            interface MessagePart {
                // The message part body for this part, which may be empty for container MIME message parts.
                body?: Schema.MessagePartBody;
                // The filename of the attachment. Only present if this message part represents an attachment.
                filename?: string;
                // List of headers on this message part. For the top-level message part, representing the entire message payload, it will
                // contain the standard RFC 2822 email headers such as `To`, `From`, and `Subject`.
                headers?: Schema.MessagePartHeader[];
                // The MIME type of the message part.
                mimeType?: string;
                // The immutable ID of the message part.
                partId?: string;
                // The child MIME message parts of this part. This only applies to container MIME message parts, for example `multipart/*`.
                // For non- container MIME message part types, such as `text/plain`, this field is empty. For more information, see RFC
                // 1521.
                parts?: Schema.MessagePart[];
            }
            // The body of a single MIME message part.
            interface MessagePartBody {
                // When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get`
                // request. When not present, the entire content of the message part body is contained in the data field.
                attachmentId?: string;
                // The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no
                // message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is
                // contained in a separate attachment.
                data?: Byte[];
                // Number of bytes for the message part data (encoding notwithstanding).
                size?: Integer;
            }
            interface MessagePartHeader {
                // The name of the header before the `:` separator. For example, `To`.
                name?: string;
                // The value of the header after the `:` separator. For example, `someuser@example.com`.
                value?: string;
            }
            interface ModifyMessageRequest {
                // A list of IDs of labels to add to this message.
                addLabelIds?: string[];
                // A list IDs of labels to remove from this message.
                removeLabelIds?: string[];
            }
            interface ModifyThreadRequest {
                // A list of IDs of labels to add to this thread.
                addLabelIds?: string[];
                // A list of IDs of labels to remove from this thread.
                removeLabelIds?: string[];
            }
            // POP settings for an account.
            interface PopSettings {
                // The range of messages which are accessible via POP.
                accessWindow?: string;
                // The action that will be executed on a message after it has been fetched via POP.
                disposition?: string;
            }
            // Profile for a Gmail user.
            interface Profile {
                // The user's email address.
                emailAddress?: string;
                // The ID of the mailbox's current history record.
                historyId?: string;
                // The total number of messages in the mailbox.
                messagesTotal?: Integer;
                // The total number of threads in the mailbox.
                threadsTotal?: Integer;
            }
            // Settings associated with a send-as alias, which can be either the primary login address associated with the account or a
            // custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
            interface SendAs {
                // A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is
                // empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the
                // account. If the admin has disabled the ability for users to update their name format, requests to update this field for
                // the primary login will silently fail.
                displayName?: string;
                // Whether this address is selected as the default "From:" address in situations such as composing a new message or sending
                // a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients
                // may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field
                // becoming `false` for the other previous default address.
                isDefault?: boolean;
                // Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary
                // address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.
                isPrimary?: boolean;
                // An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty,
                // Gmail will not generate a "Reply-To:" header.
                replyToAddress?: string;
                // The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all
                // operations except create.
                sendAsEmail?: string;
                // An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.
                signature?: string;
                // An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty,
                // outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to
                // custom "from" aliases.
                smtpMsa?: Schema.SmtpMsa;
                // Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to
                // custom "from" aliases.
                treatAsAlias?: boolean;
                // Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to
                // custom "from" aliases.
                verificationStatus?: string;
            }
            // An S/MIME email config.
            interface SmimeInfo {
                // Encrypted key password, when key is encrypted.
                encryptedKeyPassword?: string;
                // When the certificate expires (in milliseconds since epoch).
                expiration?: string;
                // The immutable ID for the SmimeInfo.
                id?: string;
                // Whether this SmimeInfo is the default one for this user's send-as address.
                isDefault?: boolean;
                // The S/MIME certificate issuer's common name.
                issuerCn?: string;
                // PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which
                // includes public key as well as certificate chain (not private key).
                pem?: string;
                // PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from
                // client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported.
                // PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.
                pkcs12?: Byte[];
            }
            // Configuration for communication with an SMTP service.
            interface SmtpMsa {
                // The hostname of the SMTP service. Required.
                host?: string;
                // The password that will be used for authentication with the SMTP service. This is a write-only field that can be
                // specified in requests to create or update SendAs settings; it is never populated in responses.
                password?: string;
                // The port of the SMTP service. Required.
                port?: Integer;
                // The protocol that will be used to secure communication with the SMTP service. Required.
                securityMode?: string;
                // The username that will be used for authentication with the SMTP service. This is a write-only field that can be
                // specified in requests to create or update SendAs settings; it is never populated in responses.
                username?: string;
            }
            // A collection of messages representing a conversation.
            interface Thread {
                // The ID of the last history record that modified this thread.
                historyId?: string;
                // The unique ID of the thread.
                id?: string;
                // The list of messages in the thread.
                messages?: Schema.Message[];
                // A short part of the message text.
                snippet?: string;
            }
            // Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web
            // interface.
            interface VacationSettings {
                // Flag that controls whether Gmail automatically replies to messages.
                enableAutoReply?: boolean;
                // An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to
                // messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede
                // `endTime`.
                endTime?: string;
                // Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and
                // `response_body_html` are specified, `response_body_html` will be used.
                responseBodyHtml?: string;
                // Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified,
                // `response_body_html` will be used.
                responseBodyPlainText?: string;
                // Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response
                // subject or the response body must be nonempty.
                responseSubject?: string;
                // Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
                restrictToContacts?: boolean;
                // Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only
                // available for G Suite users.
                restrictToDomain?: boolean;
                // An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only
                // to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must
                // precede `endTime`.
                startTime?: string;
            }
            // Set up or update a new push notification watch on this user's mailbox.
            interface WatchRequest {
                // Filtering behavior of labelIds list specified.
                labelFilterAction?: string;
                // List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified
                // then dictates which labels are required for a push notification to be generated.
                labelIds?: string[];
                // A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist
                // in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example,
                // "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the
                // "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch
                // request).
                topicName?: string;
            }
            // Push notification watch response.
            interface WatchResponse {
                // When Gmail will stop sending notifications for mailbox updates (epoch millis). Call `watch` again before this time to
                // renew the watch.
                expiration?: string;
                // The ID of the mailbox's current history record.
                historyId?: string;
            }
        }
    }
    // The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.
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
        // Create a new instance of LanguageSettings
        newLanguageSettings(): Gmail.Schema.LanguageSettings;
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
declare const Gmail: GoogleAppsScript.Gmail;
