declare namespace GoogleAppsScript {
    namespace Gmail {
        namespace Collection {
            namespace Users {
                namespace Messages {
                    interface AttachmentsCollection {
                        get(
                            userId: string,
                            messageId: string,
                            id: string,
                        ): Gmail.Schema.MessagePartBody;
                    }
                }
                namespace Settings {
                    namespace Cse {
                        interface IdentitiesCollection {
                            create(
                                $resource: Gmail.Schema.CseIdentity,
                                userId: string,
                            ): Gmail.Schema.CseIdentity;
                            get(
                                userId: string,
                                cseEmailAddress: string,
                            ): Gmail.Schema.CseIdentity;
                            list(
                                userId: string,
                                args?: {
                                    pageSize?: number | undefined;
                                    pageToken?: string | undefined;
                                },
                            ): Gmail.Schema.ListCseIdentitiesResponse;
                            patch(
                                $resource: Gmail.Schema.CseIdentity,
                                userId: string,
                                emailAddress: string,
                            ): Gmail.Schema.CseIdentity;
                            remove(
                                userId: string,
                                cseEmailAddress: string,
                            ): void;
                        }
                        interface KeypairsCollection {
                            create(
                                $resource: Gmail.Schema.CseKeyPair,
                                userId: string,
                                args?: {
                                    chainValidation?: "all" | "none" | undefined;
                                },
                            ): Gmail.Schema.CseKeyPair;
                            disable(
                                $resource: Gmail.Schema.DisableCseKeyPairRequest,
                                userId: string,
                                keyPairId: string,
                            ): Gmail.Schema.CseKeyPair;
                            enable(
                                $resource: Gmail.Schema.EnableCseKeyPairRequest,
                                userId: string,
                                keyPairId: string,
                            ): Gmail.Schema.CseKeyPair;
                            get(
                                userId: string,
                                keyPairId: string,
                            ): Gmail.Schema.CseKeyPair;
                            list(
                                userId: string,
                                args?: {
                                    pageSize?: number | undefined;
                                    pageToken?: string | undefined;
                                },
                            ): Gmail.Schema.ListCseKeyPairsResponse;
                            obliterate(
                                $resource: Gmail.Schema.ObliterateCseKeyPairRequest,
                                userId: string,
                                keyPairId: string,
                            ): void;
                        }
                    }
                    namespace SendAs {
                        interface SmimeInfoCollection {
                            get(
                                userId: string,
                                sendAsEmail: string,
                                id: string,
                            ): Gmail.Schema.SmimeInfo;
                            insert(
                                $resource: Gmail.Schema.SmimeInfo,
                                userId: string,
                                sendAsEmail: string,
                            ): Gmail.Schema.SmimeInfo;
                            list(
                                userId: string,
                                sendAsEmail: string,
                            ): Gmail.Schema.ListSmimeInfoResponse;
                            remove(
                                userId: string,
                                sendAsEmail: string,
                                id: string,
                            ): void;
                            setDefault(
                                userId: string,
                                sendAsEmail: string,
                                id: string,
                            ): void;
                        }
                    }
                    interface CseCollection {
                        Identities: Cse.IdentitiesCollection;
                        Keypairs: Cse.KeypairsCollection;
                    }
                    interface DelegatesCollection {
                        create(
                            $resource: Gmail.Schema.Delegate,
                            userId: string,
                        ): Gmail.Schema.Delegate;
                        get(
                            userId: string,
                            delegateEmail: string,
                        ): Gmail.Schema.Delegate;
                        list(
                            userId: string,
                        ): Gmail.Schema.ListDelegatesResponse;
                        remove(
                            userId: string,
                            delegateEmail: string,
                        ): void;
                    }
                    interface FiltersCollection {
                        create(
                            $resource: Gmail.Schema.Filter,
                            userId: string,
                        ): Gmail.Schema.Filter;
                        get(
                            userId: string,
                            id: string,
                        ): Gmail.Schema.Filter;
                        list(
                            userId: string,
                        ): Gmail.Schema.ListFiltersResponse;
                        remove(
                            userId: string,
                            id: string,
                        ): void;
                    }
                    interface ForwardingAddressesCollection {
                        create(
                            $resource: Gmail.Schema.ForwardingAddress,
                            userId: string,
                        ): Gmail.Schema.ForwardingAddress;
                        get(
                            userId: string,
                            forwardingEmail: string,
                        ): Gmail.Schema.ForwardingAddress;
                        list(
                            userId: string,
                        ): Gmail.Schema.ListForwardingAddressesResponse;
                        remove(
                            userId: string,
                            forwardingEmail: string,
                        ): void;
                    }
                    interface SendAsCollection {
                        SmimeInfo: SendAs.SmimeInfoCollection;
                        create(
                            $resource: Gmail.Schema.SendAs,
                            userId: string,
                        ): Gmail.Schema.SendAs;
                        get(
                            userId: string,
                            sendAsEmail: string,
                        ): Gmail.Schema.SendAs;
                        list(
                            userId: string,
                        ): Gmail.Schema.ListSendAsResponse;
                        patch(
                            $resource: Gmail.Schema.SendAs,
                            userId: string,
                            sendAsEmail: string,
                        ): Gmail.Schema.SendAs;
                        remove(
                            userId: string,
                            sendAsEmail: string,
                        ): void;
                        update(
                            $resource: Gmail.Schema.SendAs,
                            userId: string,
                            sendAsEmail: string,
                        ): Gmail.Schema.SendAs;
                        verify(
                            userId: string,
                            sendAsEmail: string,
                        ): void;
                    }
                }
                interface DraftsCollection {
                    create(
                        $resource: Gmail.Schema.Draft,
                        userId: string,
                        $mediaUpload?: Blob,
                    ): Gmail.Schema.Draft;
                    get(
                        userId: string,
                        id: string,
                        args?: {
                            format?: "minimal" | "full" | "raw" | "metadata" | undefined;
                        },
                    ): Gmail.Schema.Draft;
                    list(
                        userId: string,
                        args?: {
                            includeSpamTrash?: boolean | undefined;
                            maxResults?: number | undefined;
                            pageToken?: string | undefined;
                            q?: string | undefined;
                        },
                    ): Gmail.Schema.ListDraftsResponse;
                    remove(
                        userId: string,
                        id: string,
                    ): void;
                    send(
                        $resource: Gmail.Schema.Draft,
                        userId: string,
                        $mediaUpload?: Blob,
                    ): Gmail.Schema.Message;
                    update(
                        $resource: Gmail.Schema.Draft,
                        userId: string,
                        id: string,
                        $mediaUpload?: Blob,
                    ): Gmail.Schema.Draft;
                }
                interface HistoryCollection {
                    list(
                        userId: string,
                        args?: {
                            historyTypes?:
                                | Array<"messageAdded" | "messageDeleted" | "labelAdded" | "labelRemoved">
                                | undefined;
                            labelId?: string | undefined;
                            maxResults?: number | undefined;
                            pageToken?: string | undefined;
                            startHistoryId?: string | undefined;
                        },
                    ): Gmail.Schema.ListHistoryResponse;
                }
                interface LabelsCollection {
                    create(
                        $resource: Gmail.Schema.Label,
                        userId: string,
                    ): Gmail.Schema.Label;
                    get(
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Label;
                    list(
                        userId: string,
                    ): Gmail.Schema.ListLabelsResponse;
                    patch(
                        $resource: Gmail.Schema.Label,
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Label;
                    remove(
                        userId: string,
                        id: string,
                    ): void;
                    update(
                        $resource: Gmail.Schema.Label,
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Label;
                }
                interface MessagesCollection {
                    Attachments: Messages.AttachmentsCollection;
                    batchDelete(
                        $resource: Gmail.Schema.BatchDeleteMessagesRequest,
                        userId: string,
                    ): void;
                    batchModify(
                        $resource: Gmail.Schema.BatchModifyMessagesRequest,
                        userId: string,
                    ): void;
                    get(
                        userId: string,
                        id: string,
                        args?: {
                            format?: "minimal" | "full" | "raw" | "metadata" | undefined;
                            metadataHeaders?: Array<string> | undefined;
                        },
                    ): Gmail.Schema.Message;
                    import(
                        $resource: Gmail.Schema.Message,
                        userId: string,
                        $mediaUpload?: Blob,
                        args?: {
                            deleted?: boolean | undefined;
                            internalDateSource?: "receivedTime" | "dateHeader" | undefined;
                            neverMarkSpam?: boolean | undefined;
                            processForCalendar?: boolean | undefined;
                        },
                    ): Gmail.Schema.Message;
                    insert(
                        $resource: Gmail.Schema.Message,
                        userId: string,
                        $mediaUpload?: Blob,
                        args?: {
                            deleted?: boolean | undefined;
                            internalDateSource?: "receivedTime" | "dateHeader" | undefined;
                        },
                    ): Gmail.Schema.Message;
                    list(
                        userId: string,
                        args?: {
                            includeSpamTrash?: boolean | undefined;
                            labelIds?: Array<string> | undefined;
                            maxResults?: number | undefined;
                            pageToken?: string | undefined;
                            q?: string | undefined;
                        },
                    ): Gmail.Schema.ListMessagesResponse;
                    modify(
                        $resource: Gmail.Schema.ModifyMessageRequest,
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Message;
                    remove(
                        userId: string,
                        id: string,
                    ): void;
                    send(
                        $resource: Gmail.Schema.Message,
                        userId: string,
                        $mediaUpload?: Blob,
                    ): Gmail.Schema.Message;
                    trash(
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Message;
                    untrash(
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Message;
                }
                interface SettingsCollection {
                    Cse: Settings.CseCollection;
                    Delegates: Settings.DelegatesCollection;
                    Filters: Settings.FiltersCollection;
                    ForwardingAddresses: Settings.ForwardingAddressesCollection;
                    SendAs: Settings.SendAsCollection;
                    getAutoForwarding(
                        userId: string,
                    ): Gmail.Schema.AutoForwarding;
                    getImap(
                        userId: string,
                    ): Gmail.Schema.ImapSettings;
                    getLanguage(
                        userId: string,
                    ): Gmail.Schema.LanguageSettings;
                    getPop(
                        userId: string,
                    ): Gmail.Schema.PopSettings;
                    getVacation(
                        userId: string,
                    ): Gmail.Schema.VacationSettings;
                    updateAutoForwarding(
                        $resource: Gmail.Schema.AutoForwarding,
                        userId: string,
                    ): Gmail.Schema.AutoForwarding;
                    updateImap(
                        $resource: Gmail.Schema.ImapSettings,
                        userId: string,
                    ): Gmail.Schema.ImapSettings;
                    updateLanguage(
                        $resource: Gmail.Schema.LanguageSettings,
                        userId: string,
                    ): Gmail.Schema.LanguageSettings;
                    updatePop(
                        $resource: Gmail.Schema.PopSettings,
                        userId: string,
                    ): Gmail.Schema.PopSettings;
                    updateVacation(
                        $resource: Gmail.Schema.VacationSettings,
                        userId: string,
                    ): Gmail.Schema.VacationSettings;
                }
                interface ThreadsCollection {
                    get(
                        userId: string,
                        id: string,
                        args?: {
                            format?: "full" | "metadata" | "minimal" | undefined;
                            metadataHeaders?: Array<string> | undefined;
                        },
                    ): Gmail.Schema.Thread;
                    list(
                        userId: string,
                        args?: {
                            includeSpamTrash?: boolean | undefined;
                            labelIds?: Array<string> | undefined;
                            maxResults?: number | undefined;
                            pageToken?: string | undefined;
                            q?: string | undefined;
                        },
                    ): Gmail.Schema.ListThreadsResponse;
                    modify(
                        $resource: Gmail.Schema.ModifyThreadRequest,
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Thread;
                    remove(
                        userId: string,
                        id: string,
                    ): void;
                    trash(
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Thread;
                    untrash(
                        userId: string,
                        id: string,
                    ): Gmail.Schema.Thread;
                }
            }
            interface UsersCollection {
                Drafts: Users.DraftsCollection;
                History: Users.HistoryCollection;
                Labels: Users.LabelsCollection;
                Messages: Users.MessagesCollection;
                Settings: Users.SettingsCollection;
                Threads: Users.ThreadsCollection;
                getProfile(
                    userId: string,
                ): Gmail.Schema.Profile;
                stop(
                    userId: string,
                ): void;
                watch(
                    $resource: Gmail.Schema.WatchRequest,
                    userId: string,
                ): Gmail.Schema.WatchResponse;
            }
        }
        namespace Schema {
            interface AutoForwarding {
                disposition?: "dispositionUnspecified" | "leaveInInbox" | "archive" | "trash" | "markRead" | undefined;
                emailAddress?: string | undefined;
                enabled?: boolean | undefined;
            }
            interface BatchDeleteMessagesRequest {
                ids?: Array<string> | undefined;
            }
            interface BatchModifyMessagesRequest {
                addClassificationLabels?: Gmail.Schema.ClassificationLabelValue[] | undefined;
                addLabelIds?: Array<string> | undefined;
                ids?: Array<string> | undefined;
                removeClassificationLabelIds?: Array<string> | undefined;
                removeLabelIds?: Array<string> | undefined;
            }
            interface ClassificationLabelFieldValue {
                fieldId?: string | undefined;
                selection?: string | undefined;
            }
            interface ClassificationLabelValue {
                fields?: Gmail.Schema.ClassificationLabelFieldValue[] | undefined;
                labelId?: string | undefined;
            }
            interface CseIdentity {
                emailAddress?: string | undefined;
                primaryKeyPairId?: string | undefined;
                signAndEncryptKeyPairs?: Gmail.Schema.SignAndEncryptKeyPairs | undefined;
            }
            interface CseKeyPair {
                disableTime?: string | undefined;
                enablementState?: "stateUnspecified" | "enabled" | "disabled" | undefined;
                keyPairId?: string | undefined;
                pem?: string | undefined;
                pkcs7?: string | undefined;
                privateKeyMetadata?: Gmail.Schema.CsePrivateKeyMetadata[] | undefined;
                subjectEmailAddresses?: Array<string> | undefined;
            }
            interface CsePrivateKeyMetadata {
                hardwareKeyMetadata?: Gmail.Schema.HardwareKeyMetadata | undefined;
                kaclsKeyMetadata?: Gmail.Schema.KaclsKeyMetadata | undefined;
                privateKeyMetadataId?: string | undefined;
            }
            interface Delegate {
                delegateEmail?: string | undefined;
                verificationStatus?:
                    | "verificationStatusUnspecified"
                    | "accepted"
                    | "pending"
                    | "rejected"
                    | "expired"
                    | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface DisableCseKeyPairRequest {
            }
            interface Draft {
                id?: string | undefined;
                message?: Gmail.Schema.Message | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface EnableCseKeyPairRequest {
            }
            interface Filter {
                action?: Gmail.Schema.FilterAction | undefined;
                criteria?: Gmail.Schema.FilterCriteria | undefined;
                id?: string | undefined;
            }
            interface FilterAction {
                addLabelIds?: Array<string> | undefined;
                forward?: string | undefined;
                removeLabelIds?: Array<string> | undefined;
            }
            interface FilterCriteria {
                excludeChats?: boolean | undefined;
                from?: string | undefined;
                hasAttachment?: boolean | undefined;
                negatedQuery?: string | undefined;
                query?: string | undefined;
                size?: number | undefined;
                sizeComparison?: "unspecified" | "smaller" | "larger" | undefined;
                subject?: string | undefined;
                to?: string | undefined;
            }
            interface ForwardingAddress {
                forwardingEmail?: string | undefined;
                verificationStatus?: "verificationStatusUnspecified" | "accepted" | "pending" | undefined;
            }
            interface HardwareKeyMetadata {
                description?: string | undefined;
            }
            interface History {
                id?: string | undefined;
                labelsAdded?: Gmail.Schema.HistoryLabelAdded[] | undefined;
                labelsRemoved?: Gmail.Schema.HistoryLabelRemoved[] | undefined;
                messages?: Gmail.Schema.Message[] | undefined;
                messagesAdded?: Gmail.Schema.HistoryMessageAdded[] | undefined;
                messagesDeleted?: Gmail.Schema.HistoryMessageDeleted[] | undefined;
            }
            interface HistoryLabelAdded {
                labelIds?: Array<string> | undefined;
                message?: Gmail.Schema.Message | undefined;
            }
            interface HistoryLabelRemoved {
                labelIds?: Array<string> | undefined;
                message?: Gmail.Schema.Message | undefined;
            }
            interface HistoryMessageAdded {
                message?: Gmail.Schema.Message | undefined;
            }
            interface HistoryMessageDeleted {
                message?: Gmail.Schema.Message | undefined;
            }
            interface ImapSettings {
                autoExpunge?: boolean | undefined;
                enabled?: boolean | undefined;
                expungeBehavior?: "expungeBehaviorUnspecified" | "archive" | "trash" | "deleteForever" | undefined;
                maxFolderSize?: number | undefined;
            }
            interface KaclsKeyMetadata {
                kaclsData?: string | undefined;
                kaclsUri?: string | undefined;
            }
            interface Label {
                color?: Gmail.Schema.LabelColor | undefined;
                id?: string | undefined;
                labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide" | undefined;
                messageListVisibility?: "show" | "hide" | undefined;
                messagesTotal?: number | undefined;
                messagesUnread?: number | undefined;
                name?: string | undefined;
                threadsTotal?: number | undefined;
                threadsUnread?: number | undefined;
                type?: "system" | "user" | undefined;
            }
            interface LabelColor {
                backgroundColor?: string | undefined;
                textColor?: string | undefined;
            }
            interface LanguageSettings {
                displayLanguage?: string | undefined;
            }
            interface ListCseIdentitiesResponse {
                cseIdentities?: Gmail.Schema.CseIdentity[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface ListCseKeyPairsResponse {
                cseKeyPairs?: Gmail.Schema.CseKeyPair[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface ListDelegatesResponse {
                delegates?: Gmail.Schema.Delegate[] | undefined;
            }
            interface ListDraftsResponse {
                drafts?: Gmail.Schema.Draft[] | undefined;
                nextPageToken?: string | undefined;
                resultSizeEstimate?: number | undefined;
            }
            interface ListFiltersResponse {
                filter?: Gmail.Schema.Filter[] | undefined;
            }
            interface ListForwardingAddressesResponse {
                forwardingAddresses?: Gmail.Schema.ForwardingAddress[] | undefined;
            }
            interface ListHistoryResponse {
                history?: Gmail.Schema.History[] | undefined;
                historyId?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface ListLabelsResponse {
                labels?: Gmail.Schema.Label[] | undefined;
            }
            interface ListMessagesResponse {
                messages?: Gmail.Schema.Message[] | undefined;
                nextPageToken?: string | undefined;
                resultSizeEstimate?: number | undefined;
            }
            interface ListSendAsResponse {
                sendAs?: Gmail.Schema.SendAs[] | undefined;
            }
            interface ListSmimeInfoResponse {
                smimeInfo?: Gmail.Schema.SmimeInfo[] | undefined;
            }
            interface ListThreadsResponse {
                nextPageToken?: string | undefined;
                resultSizeEstimate?: number | undefined;
                threads?: Gmail.Schema.Thread[] | undefined;
            }
            interface Message {
                classificationLabelValues?: Gmail.Schema.ClassificationLabelValue[] | undefined;
                historyId?: string | undefined;
                id?: string | undefined;
                internalDate?: string | undefined;
                labelIds?: Array<string> | undefined;
                payload?: Gmail.Schema.MessagePart | undefined;
                raw?: string | undefined;
                sizeEstimate?: number | undefined;
                snippet?: string | undefined;
                threadId?: string | undefined;
            }
            interface MessagePart {
                body?: Gmail.Schema.MessagePartBody | undefined;
                filename?: string | undefined;
                headers?: Gmail.Schema.MessagePartHeader[] | undefined;
                mimeType?: string | undefined;
                partId?: string | undefined;
                parts?: Gmail.Schema.MessagePart[] | undefined;
            }
            interface MessagePartBody {
                attachmentId?: string | undefined;
                data?: string | undefined;
                size?: number | undefined;
            }
            interface MessagePartHeader {
                name?: string | undefined;
                value?: string | undefined;
            }
            interface ModifyMessageRequest {
                addClassificationLabels?: Gmail.Schema.ClassificationLabelValue[] | undefined;
                addLabelIds?: Array<string> | undefined;
                removeClassificationLabelIds?: Array<string> | undefined;
                removeLabelIds?: Array<string> | undefined;
            }
            interface ModifyThreadRequest {
                addLabelIds?: Array<string> | undefined;
                removeLabelIds?: Array<string> | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface ObliterateCseKeyPairRequest {
            }
            interface PopSettings {
                accessWindow?: "accessWindowUnspecified" | "disabled" | "fromNowOn" | "allMail" | undefined;
                disposition?: "dispositionUnspecified" | "leaveInInbox" | "archive" | "trash" | "markRead" | undefined;
            }
            interface Profile {
                emailAddress?: string | undefined;
                historyId?: string | undefined;
                messagesTotal?: number | undefined;
                threadsTotal?: number | undefined;
            }
            interface SendAs {
                displayName?: string | undefined;
                isDefault?: boolean | undefined;
                isPrimary?: boolean | undefined;
                replyToAddress?: string | undefined;
                sendAsEmail?: string | undefined;
                signature?: string | undefined;
                smtpMsa?: Gmail.Schema.SmtpMsa | undefined;
                treatAsAlias?: boolean | undefined;
                verificationStatus?: "verificationStatusUnspecified" | "accepted" | "pending" | undefined;
            }
            interface SignAndEncryptKeyPairs {
                encryptionKeyPairId?: string | undefined;
                signingKeyPairId?: string | undefined;
            }
            interface SmimeInfo {
                encryptedKeyPassword?: string | undefined;
                expiration?: string | undefined;
                id?: string | undefined;
                isDefault?: boolean | undefined;
                issuerCn?: string | undefined;
                pem?: string | undefined;
                pkcs12?: string | undefined;
            }
            interface SmtpMsa {
                host?: string | undefined;
                password?: string | undefined;
                port?: number | undefined;
                securityMode?: "securityModeUnspecified" | "none" | "ssl" | "starttls" | undefined;
                username?: string | undefined;
            }
            interface Thread {
                historyId?: string | undefined;
                id?: string | undefined;
                messages?: Gmail.Schema.Message[] | undefined;
                snippet?: string | undefined;
            }
            interface VacationSettings {
                enableAutoReply?: boolean | undefined;
                endTime?: string | undefined;
                responseBodyHtml?: string | undefined;
                responseBodyPlainText?: string | undefined;
                responseSubject?: string | undefined;
                restrictToContacts?: boolean | undefined;
                restrictToDomain?: boolean | undefined;
                startTime?: string | undefined;
            }
            interface WatchRequest {
                labelFilterAction?: "include" | "exclude" | undefined;
                labelFilterBehavior?: "include" | "exclude" | undefined;
                labelIds?: Array<string> | undefined;
                topicName?: string | undefined;
            }
            interface WatchResponse {
                expiration?: string | undefined;
                historyId?: string | undefined;
            }
        }
    }
    interface Gmail {
        Users: Gmail.Collection.UsersCollection;
        // Create a new instance of AutoForwarding
        newAutoForwarding(): Gmail.Schema.AutoForwarding;
        // Create a new instance of BatchDeleteMessagesRequest
        newBatchDeleteMessagesRequest(): Gmail.Schema.BatchDeleteMessagesRequest;
        // Create a new instance of BatchModifyMessagesRequest
        newBatchModifyMessagesRequest(): Gmail.Schema.BatchModifyMessagesRequest;
        // Create a new instance of ClassificationLabelFieldValue
        newClassificationLabelFieldValue(): Gmail.Schema.ClassificationLabelFieldValue;
        // Create a new instance of ClassificationLabelValue
        newClassificationLabelValue(): Gmail.Schema.ClassificationLabelValue;
        // Create a new instance of CseIdentity
        newCseIdentity(): Gmail.Schema.CseIdentity;
        // Create a new instance of CseKeyPair
        newCseKeyPair(): Gmail.Schema.CseKeyPair;
        // Create a new instance of CsePrivateKeyMetadata
        newCsePrivateKeyMetadata(): Gmail.Schema.CsePrivateKeyMetadata;
        // Create a new instance of Delegate
        newDelegate(): Gmail.Schema.Delegate;
        // Create a new instance of DisableCseKeyPairRequest
        newDisableCseKeyPairRequest(): Gmail.Schema.DisableCseKeyPairRequest;
        // Create a new instance of Draft
        newDraft(): Gmail.Schema.Draft;
        // Create a new instance of EnableCseKeyPairRequest
        newEnableCseKeyPairRequest(): Gmail.Schema.EnableCseKeyPairRequest;
        // Create a new instance of Filter
        newFilter(): Gmail.Schema.Filter;
        // Create a new instance of FilterAction
        newFilterAction(): Gmail.Schema.FilterAction;
        // Create a new instance of FilterCriteria
        newFilterCriteria(): Gmail.Schema.FilterCriteria;
        // Create a new instance of ForwardingAddress
        newForwardingAddress(): Gmail.Schema.ForwardingAddress;
        // Create a new instance of HardwareKeyMetadata
        newHardwareKeyMetadata(): Gmail.Schema.HardwareKeyMetadata;
        // Create a new instance of ImapSettings
        newImapSettings(): Gmail.Schema.ImapSettings;
        // Create a new instance of KaclsKeyMetadata
        newKaclsKeyMetadata(): Gmail.Schema.KaclsKeyMetadata;
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
        // Create a new instance of ObliterateCseKeyPairRequest
        newObliterateCseKeyPairRequest(): Gmail.Schema.ObliterateCseKeyPairRequest;
        // Create a new instance of PopSettings
        newPopSettings(): Gmail.Schema.PopSettings;
        // Create a new instance of SendAs
        newSendAs(): Gmail.Schema.SendAs;
        // Create a new instance of SignAndEncryptKeyPairs
        newSignAndEncryptKeyPairs(): Gmail.Schema.SignAndEncryptKeyPairs;
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

/**
 * The `Gmail` advanced service must be enabled.
 */
declare var Gmail: GoogleAppsScript.Gmail | undefined;
