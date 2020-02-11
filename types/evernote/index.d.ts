// Type definitions for evernote v2.0.5
// Project: https://www.npmjs.com/package/evernote
// Definitions by: Zachary Collins <https://github.com/corps>
//                 Felipe Castillo <https://github.com/fcastilloec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//              https://dev.evernote.com/doc/reference/
// TypeScript Version: 2.3

declare module 'evernote' {
    /* NoteStore: Data types and Constants */
    export namespace NoteStore {
        export class CreateOrUpdateNotebookSharesResult {
            updateSequenceNum?: number
            matchingShares?: Types.SharedNotebook[]
            constructor(args?: { updateSequenceNum?: number; matchingShares?: Types.SharedNotebook[] })
        }
        export class InvitationShareRelationship {
            displayName?: string
            recipientUserIdentity?: Types.UserIdentity
            privilege?: ShareRelationshipPrivilegeLevel
            sharerUserId?: Types.UserID
            constructor(args?: {
                displayName?: string
                recipientUserIdentity?: Types.UserIdentity
                privilege?: ShareRelationshipPrivilegeLevel
                sharerUserId?: Types.UserID
            })
        }
        export class ManageNoteSharesError {
            identityID?: Types.IdentityID
            userID?: Types.UserID
            userException?: Errors.EDAMUserException
            notFoundException?: Errors.EDAMNotFoundException
            constructor(args?: {
                identityID?: Types.IdentityID
                userID?: Types.UserID
                userException?: Errors.EDAMUserException
                notFoundException?: Errors.EDAMNotFoundException
            })
        }
        export class ManageNoteSharesParameters {
            noteGuid?: string
            membershipsToUpdate?: NoteMemberShareRelationship[]
            invitationsToUpdate?: NoteInvitationShareRelationship[]
            membershipsToUnshare?: Types.UserID[]
            invitationsToUnshare?: Types.IdentityID[]
            constructor(args?: {
                noteGuid?: string
                membershipsToUpdate?: NoteMemberShareRelationship[]
                invitationsToUpdate?: NoteInvitationShareRelationship[]
                membershipsToUnshare?: Types.UserID[]
                invitationsToUnshare?: Types.IdentityID[]
            })
        }
        export class ManageNoteSharesResult {
            errors?: ManageNoteSharesError[]
            constructor(args?: { errors?: ManageNoteSharesError[] })
        }
        export class ManageNotebookSharesError {
            userIdentity?: Types.UserIdentity
            userException?: Errors.EDAMUserException
            notFoundException?: Errors.EDAMNotFoundException
            constructor(args?: {
                userIdentity?: Types.UserIdentity
                userException?: Errors.EDAMUserException
                notFoundException?: Errors.EDAMNotFoundException
            })
        }
        export class ManageNotebookSharesParameters {
            notebookGuid?: string
            inviteMessage?: string
            membershipsToUpdate?: MemberShareRelationship[]
            invitationsToCreateOrUpdate?: InvitationShareRelationship[]
            unshares?: Types.UserIdentity[]
            constructor(args?: {
                notebookGuid?: string
                inviteMessage?: string
                membershipsToUpdate?: MemberShareRelationship[]
                invitationsToCreateOrUpdate?: InvitationShareRelationship[]
                unshares?: Types.UserIdentity[]
            })
        }
        export class ManageNotebookSharesResult {
            errors?: ManageNotebookSharesError[]
            constructor(args?: { errors?: ManageNotebookSharesError[] })
        }
        export class MemberShareRelationship {
            displayName?: string
            recipientUserId?: Types.UserID
            privilege?: Types.SharedNotePrivilegeLevel
            restrictions?: NoteShareRelationshipRestrictions
            sharerUserId?: Types.UserID
            constructor(args?: {
                displayName?: string
                recipientUserId?: Types.UserID
                privilege?: Types.SharedNotePrivilegeLevel
                restrictions?: NoteShareRelationshipRestrictions
                sharerUserId?: Types.UserID
            })
        }
        export class NoteCollectionCounts {
            notebookCounts?: Map<Types.Guid, number>
            tagCounts?: Map<Types.Guid, number>
            trashCount?: number
            constructor(args?: {
                notebookCounts?: Map<Types.Guid, number>
                tagCounts?: Map<Types.Guid, number>
                trashCount?: number
            })
        }
        export class NoteEmailParameters {
            guid?: string
            note?: Types.Note
            toAddresses?: string[]
            ccAddresses?: string[]
            subject?: string
            message?: string
            constructor(args?: {
                guid?: string
                note?: Types.Note
                toAddresses?: string[]
                ccAddresses?: string[]
                subject?: string
                message?: string
            })
        }
        export class NoteFilter {
            order: number
            ascending: boolean
            words: string
            notebookGuid: Types.Guid
            tagGuids: Types.Guid[]
            timeZone: string
            inactive: boolean
            emphasized: string
            includeAllReadableNotebooks: boolean
            constructor(args?: {
                order?: number
                ascending?: boolean
                words?: string
                notebookGuid?: string
                tagGuids?: string[]
                timeZone?: string
                inactive?: boolean
                emphasized?: string
            })
        }
        export class NoteInvitationShareRelationship {
            displayName?: string
            recipientIdentityId?: Types.IdentityID
            privilege?: Types.SharedNotePrivilegeLevel
            sharerUserId?: Types.UserID
            constructor(args?: {
                displayName?: string
                recipientIdentityId?: Types.IdentityID
                privilege?: Types.SharedNotePrivilegeLevel
                sharerUserId?: Types.UserID
            })
        }
        export class NoteList {
            startIndex?: number
            totalNotes?: number
            notes?: Types.Note[]
            stoppedWords?: string[]
            searchedWords?: string[]
            updateCount?: number
            constructor(args?: {
                startIndex?: number
                totalNotes?: number
                notes?: Types.Note[]
                stoppedWords?: string[]
                searchedWords?: string[]
                updateCount?: number
            })
        }
        export class NoteMemberShareRelationship {
            displayName?: string
            recipientUserId?: Types.UserID
            privilege?: Types.SharedNotePrivilegeLevel
            restrictions?: NoteShareRelationshipRestrictions
            sharerUserId?: Types.UserID
            constructor(args?: {
                displayName?: string
                recipientUserId?: Types.UserID
                privilege?: Types.SharedNotePrivilegeLevel
                restrictions?: NoteShareRelationshipRestrictions
                sharerUserId?: Types.UserID
            })
        }
        export class NoteMetadata {
            guid?: Types.Guid
            title?: string
            contentLength?: number
            created?: Types.Timestamp
            updated?: Types.Timestamp
            deleted?: Types.Timestamp
            updateSequenceNum?: number
            notebookGuid?: string
            tagGuids?: Types.Guid[]
            attributes?: Types.NoteAttributes
            largestResourceMime?: string
            largestResourceSize?: number
            constructor(args?: {
                guid?: Types.Guid
                title?: string
                contentLength?: number
                created?: Types.Timestamp
                updated?: Types.Timestamp
                deleted?: Types.Timestamp
                updateSequenceNum?: number
                notebookGuid?: string
                tagGuids?: Types.Guid[]
                attributes?: Types.NoteAttributes
                largestResourceMime?: string
                largestResourceSize?: number
            })
        }
        export class NoteResultSpec {
            includeContent?: boolean
            includeResourcesData?: boolean
            includeResourcesRecognition?: boolean
            includeResourcesAlternateData?: boolean
            includeSharedNotes?: boolean
            includeNoteAppDataValues?: boolean
            includeResourceAppDataValues?: boolean
            includeAccountLimits?: boolean
            constructor(args?: {
                includeContent?: boolean
                includeResourcesData?: boolean
                includeResourcesRecognition?: boolean
                includeResourcesAlternateData?: boolean
                includeSharedNotes?: boolean
                includeNoteAppDataValues?: boolean
                includeResourceAppDataValues?: boolean
                includeAccountLimits?: boolean
            })
        }
        export class NoteShareRelationshipRestrictions {
            noSetReadNote?: boolean
            noSetModifyNote?: boolean
            noSetFullAccess?: boolean
            constructor(args?: { noSetReadNote?: boolean; noSetModifyNote?: boolean; noSetFullAccess?: boolean })
        }
        export class NoteShareRelationships {
            invitations?: NoteInvitationShareRelationship[]
            memberships?: NoteMemberShareRelationship[]
            invitationRestrictions?: NoteShareRelationshipRestrictions
            constructor(args?: {
                invitations?: NoteInvitationShareRelationship[]
                memberships?: NoteMemberShareRelationship[]
                invitationRestrictions?: NoteShareRelationshipRestrictions
            })
        }
        export class NoteVersionId {
            updateSequenceNum?: number
            updated?: Types.Timestamp
            saved?: Types.Timestamp
            title?: string
            lastEditorId?: Types.UserID
            constructor(args?: {
                updateSequenceNum?: number
                updated?: Types.Timestamp
                saved?: Types.Timestamp
                title?: string
                lastEditorId?: Types.UserID
            })
        }
        export class NotebookShareTemplate {
            notebookGuid?: Types.Guid
            recipientThreadId?: Types.MessageThreadID
            recipientContacts?: Types.Contact[]
            privilege?: Types.SharedNotebookPrivilegeLevel
            constructor(args?: {
                notebookGuid?: Types.Guid
                recipientThreadId?: Types.MessageThreadID
                recipientContacts?: Types.Contact[]
                privilege?: Types.SharedNotebookPrivilegeLevel
            })
        }
        export class NotesMetadataList {
            startIndex?: number
            totalNotes?: number
            notes?: NoteMetadata[]
            stoppedWords?: string[]
            searchedWords?: string[]
            updateCount?: number
            constructor(args?: {
                startIndex?: number
                totalNotes?: number
                notes?: NoteMetadata[]
                stoppedWords?: string[]
                searchedWords?: string[]
                updateCount?: number
            })
        }
        export class NotesMetadataResultSpec {
            includeTitle?: boolean
            includeContentLength?: boolean
            includeCreated?: boolean
            includeUpdated?: boolean
            includeDeleted?: boolean
            includeUpdateSequenceNum?: boolean
            includeNotebookGuid?: boolean
            includeTagGuids?: boolean
            includeAttributes?: boolean
            includeLargestResourceMime?: boolean
            includeLargestResourceSize?: boolean
            constructor(args?: {
                includeTitle?: boolean
                includeContentLength?: boolean
                includeCreated?: boolean
                includeUpdated?: boolean
                includeDeleted?: boolean
                includeUpdateSequenceNum?: boolean
                includeNotebookGuid?: boolean
                includeTagGuids?: boolean
                includeAttributes?: boolean
                includeLargestResourceMime?: boolean
                includeLargestResourceSize?: boolean
            })
        }
        export class RelatedQuery {
            noteGuid?: string
            plainText?: string
            filter?: NoteFilter
            referenceUri?: string
            context?: string
            cacheKey?: string
            constructor(args?: {
                noteGuid?: string
                plainText?: string
                filter?: NoteFilter
                referenceUri?: string
                context?: string
                cacheKey?: string
            })
        }
        export class RelatedResult {
            notes?: Types.Note[]
            notebooks?: Types.Notebook[]
            tags?: Types.Tag[]
            containingNotebooks?: Types.NotebookDescriptor[]
            debugInfo?: string
            experts?: Types.UserProfile[]
            relatedContent?: Types.RelatedContent[]
            cacheKey?: string
            cacheExpires?: number
            constructor(args?: {
                notes?: Types.Note[]
                notebooks?: Types.Notebook[]
                tags?: Types.Tag[]
                containingNotebooks?: Types.NotebookDescriptor[]
                debugInfo?: string
                experts?: Types.UserProfile[]
                relatedContent?: Types.RelatedContent[]
                cacheKey?: string
                cacheExpires?: number
            })
        }
        export class RelatedResultSpec {
            maxNotes?: number
            maxNotebooks?: number
            maxTags?: number
            writableNotebooksOnly?: boolean
            includeContainingNotebooks?: boolean
            includeDebugInfo?: boolean
            maxExperts?: number
            maxRelatedContent?: number
            relatedContentTypes?: Set<Types.RelatedContentType>
            constructor(args?: {
                maxNotes?: number
                maxNotebooks?: number
                maxTags?: number
                writableNotebooksOnly?: boolean
                includeContainingNotebooks?: boolean
                includeDebugInfo?: boolean
                maxExperts?: number
                maxRelatedContent?: number
                relatedContentTypes?: Set<Types.RelatedContentType>
            })
        }
        export enum ShareRelationshipPrivilegeLevel {
            READ_NOTEBOOK = 0,
            READ_NOTEBOOK_PLUS_ACTIVITY = 10,
            MODIFY_NOTEBOOK_PLUS_ACTIVITY = 20,
            FULL_ACCESS = 30
        }
        export class ShareRelationshipRestrictions {
            noSetReadOnly?: boolean
            noSetReadPlusActivity?: boolean
            noSetModify?: boolean
            noSetFullAccess?: boolean
            constructor(args?: {
                noSetReadOnly?: boolean
                noSetReadPlusActivity?: boolean
                noSetModify?: boolean
                noSetFullAccess?: boolean
            })
        }
        export class ShareRelationships {
            invitations?: InvitationShareRelationship[]
            memberships?: MemberShareRelationship[]
            invitationRestrictions?: ShareRelationshipRestrictions
            constructor(args?: {
                invitations?: InvitationShareRelationship[]
                memberships?: MemberShareRelationship[]
                invitationRestrictions?: ShareRelationshipRestrictions
            })
        }
        export class SharedNoteTemplate {
            noteGuid?: Types.Guid
            recipientThreadId?: Types.MessageThreadID
            recipientContacts?: Types.Contact[]
            privilege?: Types.SharedNotePrivilegeLevel
            constructor (args?: {
                noteGuid?: Types.Guid
                recipientThreadId?: Types.MessageThreadID
                recipientContacts?: Types.Contact[]
                privilege?: Types.SharedNotePrivilegeLevel
            })
        }
        export class SyncChunk {
            currentTime?: Types.Timestamp
            chunkHighUSN?: number
            updateCount?: number
            notes?: Types.Note[]
            notebooks?: Types.Notebook[]
            tags?: Types.Tag[]
            searches?: Types.SavedSearch[]
            resources?: Types.Resource[]
            expungedNotes?: Types.Guid[]
            expungedNotebooks?: Types.Guid[]
            expungedTags?: Types.Guid[]
            expungedSearches?: Types.Guid[]
            linkedNotebooks?: Types.LinkedNotebook[]
            expungedLinkedNotebooks?: Types.Guid[]
            constructor(args?: {
                currentTime?: Types.Timestamp
                chunkHighUSN?: number
                updateCount?: number
                notes?: Types.Note[]
                notebooks?: Types.Notebook[]
                tags?: Types.Tag[]
                searches?: Types.SavedSearch[]
                resources?: Types.Resource[]
                expungedNotes?: Types.Guid[]
                expungedNotebooks?: Types.Guid[]
                expungedTags?: Types.Guid[]
                expungedSearches?: Types.Guid[]
                linkedNotebooks?: Types.LinkedNotebook[]
                expungedLinkedNotebooks?: Types.Guid[]
            })
        }
        export class SyncChunkFilter {
            includeNotes?: boolean
            includeNoteResources?: boolean
            includeNoteAttributes?: boolean
            includeNotebooks?: boolean
            includeTags?: boolean
            includeSearches?: boolean
            includeResources?: boolean
            includeLinkedNotebooks?: boolean
            includeExpunged?: boolean
            includeNoteApplicationDataFullMap?: boolean
            includeResourceApplicationDataFullMap?: boolean
            includeNoteResourceApplicationDataFullMap?: boolean
            includeSharedNotes?: boolean
            omitSharedNotebooks?: boolean
            requireNoteContentClass?: string
            notebookGuids?: Set<string>
            constructor(args?: {
                includeNotes?: boolean
                includeNoteResources?: boolean
                includeNoteAttributes?: boolean
                includeNotebooks?: boolean
                includeTags?: boolean
                includeSearches?: boolean
                includeResources?: boolean
                includeLinkedNotebooks?: boolean
                includeExpunged?: boolean
                includeNoteApplicationDataFullMap?: boolean
                includeResourceApplicationDataFullMap?: boolean
                includeNoteResourceApplicationDataFullMap?: boolean
                includeSharedNotes?: boolean
                omitSharedNotebooks?: boolean
                requireNoteContentClass?: string
                notebookGuids?: Set<string>
            })
        }
        export class SyncState {
            currentTime?: Types.Timestamp
            fullSyncBefore?: Types.Timestamp
            updateCount?: number
            uploaded?: number
            userLastUpdated?: Types.Timestamp
            userMaxMessageEventId?: Types.MessageEventID
            constructor(args?: {
                currentTime?: Types.Timestamp
                fullSyncBefore?: Types.Timestamp
                updateCount?: number
                uploaded?: number
                userLastUpdated?: Types.Timestamp
                userMaxMessageEventId?: Types.MessageEventID
            })
        }
        export class UpdateNoteIfUsnMatchesResult {
            note?: Types.Note
            updated?: boolean
            constructor(args?: { note?: Types.Note, updated?: boolean })
        }
        export enum UserSetting {
            RECEIVE_REMINDER_EMAIL = 1,
            TIMEZONE = 2
        }
    }

    /* UserStore: Data types and Constants */
    export namespace UserStore {
        export const EDAM_VERSION_MAJOR: number
        export const EDAM_VERSION_MINOR: number
        export class AuthenticationResult {
            currentTime?: Types.Timestamp
            authenticationToken?: string
            expiration?: Types.Timestamp
            user?: Types.User
            publicUserInfo?: PublicUserInfo
            noteStoreUrl?: string
            webApiUrlPrefix?: string
            secondFactorRequired?: boolean
            secondFactorDeliveryHint?: string
            urls?: UserUrls
            constructor(args?: {
                currentTime?: Types.Timestamp
                authenticationToken?: string
                expiration?: Types.Timestamp
                user?: Types.User
                publicUserInfo?: PublicUserInfo
                noteStoreUrl?: string
                webApiUrlPrefix?: string
                secondFactorRequired?: boolean
                secondFactorDeliveryHint?: string
                urls?: UserUrls
            })
        }
        export class BootstrapInfo {
            profiles?: BootstrapProfile[]
            constructor(args?: { profiles?: BootstrapProfile[] })
        }
        export class BootstrapProfile {
            name?: string
            settings?: BootstrapSettings
            constructor(args?: { name?: string, settings?: BootstrapSettings })
        }
        export class BootstrapSettings {
            serviceHost?: string
            marketingUrl?: string
            supportUrl?: string
            accountEmailDomain?: string
            enableFacebookSharing?: boolean
            enableGiftSubscriptions?: boolean
            enableSupportTickets?: boolean
            enableSharedNotebooks?: boolean
            enableSingleNoteSharing?: boolean
            enableSponsoredAccounts?: boolean
            enableTwitterSharing?: boolean
            enableLinkedInSharing?: boolean
            enablePublicNotebooks?: boolean
            enableGoogle?: boolean
            constructor(args?: {
                serviceHost?: string
                marketingUrl?: string
                supportUrl?: string
                accountEmailDomain?: string
                enableFacebookSharing?: boolean
                enableGiftSubscriptions?: boolean
                enableSupportTickets?: boolean
                enableSharedNotebooks?: boolean
                enableSingleNoteSharing?: boolean
                enableSponsoredAccounts?: boolean
                enableTwitterSharing?: boolean
                enableLinkedInSharing?: boolean
                enablePublicNotebooks?: boolean
                enableGoogle?: boolean
            })
        }
        export class PublicUserInfo {
            userId?: Types.UserID
            serviceLevel?: Types.ServiceLevel
            username?: string
            noteStoreUrl?: string
            webApiUrlPrefix?: string
            constructor(args?: {
                userId?: Types.UserID
                serviceLevel?: Types.ServiceLevel
                username?: string
                noteStoreUrl?: string
                webApiUrlPrefix?: string
            })
        }
        export class UserUrls {
            noteStoreUrl?: string
            webApiUrlPrefix?: string
            userStoreUrl?: string
            utilityUrl?: string
            messageStoreUrl?: string
            userWebSocketUrl?: string
            constructor(args?: {
                noteStoreUrl?: string
                webApiUrlPrefix?: string
                userStoreUrl?: string
                utilityUrl?: string
                messageStoreUrl?: string
                userWebSocketUrl?: string
            })
        }
    }

    /* Types: Data types and Constants */
    export namespace Types {
        export const CLASSIFICATION_RECIPE_USER_NON_RECIPE: string
        export const CLASSIFICATION_RECIPE_USER_RECIPE: string
        export const CLASSIFICATION_RECIPE_SERVICE_RECIPE: string
        export const EDAM_NOTE_SOURCE_WEB_CLIP: string
        export const EDAM_NOTE_SOURCE_WEB_CLIP_SIMPLIFIED: string
        export const EDAM_NOTE_SOURCE_MAIL_CLIP: string
        export const EDAM_NOTE_SOURCE_MAIL_SMTP_GATEWAY: string
        export class AccountLimits {
            userMailLimitDaily?: number
            noteSizeMax?: number
            resourceSizeMax?: number
            userLinkedNotebookMax?: number
            uploadLimit?: number
            userNoteCountMax?: number
            userNotebookCountMax?: number
            userTagCountMax?: number
            noteTagCountMax?: number
            userSavedSearchesMax?: number
            noteResourceCountMax?: number
            constructor(args?: {
                userMailLimitDaily?: number
                noteSizeMax?: number
                resourceSizeMax?: number
                userLinkedNotebookMax?: number
                uploadLimit?: number
                userNoteCountMax?: number
                userNotebookCountMax?: number
                userTagCountMax?: number
                noteTagCountMax?: number
                userSavedSearchesMax?: number
                noteResourceCountMax?: number
            })
        }
        export class Accounting {
            uploadLimitEnd?: Timestamp
            uploadLimitNextMonth?: number
            premiumServiceStatus?: PremiumOrderStatus
            premiumOrderNumber?: string
            premiumCommerceService?: string
            premiumServiceStart?: Timestamp
            premiumServiceSKU?: string
            lastSuccessfulCharge?: Timestamp
            lastFailedCharge?: Timestamp
            lastFailedChargeReason?: string
            nextPaymentDue?: Timestamp
            premiumLockUntil?: Timestamp
            updated?: Timestamp
            premiumSubscriptionNumber?: string
            lastRequestedCharge?: Timestamp
            currency?: string
            unitPrice?: number
            businessId?: number
            businessName?: string
            businessRole?: BusinessUserRole
            unitDiscount?: number
            nextChargeDate?: Timestamp
            availablePoints?: number
            constructor(args?: {
                uploadLimitEnd?: Timestamp
                uploadLimitNextMonth?: number
                premiumServiceStatus?: PremiumOrderStatus
                premiumOrderNumber?: string
                premiumCommerceService?: string
                premiumServiceStart?: Timestamp
                premiumServiceSKU?: string
                lastSuccessfulCharge?: Timestamp
                lastFailedCharge?: Timestamp
                lastFailedChargeReason?: string
                nextPaymentDue?: Timestamp
                premiumLockUntil?: Timestamp
                updated?: Timestamp
                premiumSubscriptionNumber?: string
                lastRequestedCharge?: Timestamp
                currency?: string
                unitPrice?: number
                businessId?: number
                businessName?: string
                businessRole?: BusinessUserRole
                unitDiscount?: number
                nextChargeDate?: Timestamp
                availablePoints?: number
            })
        }
        export class Ad {
            id?: number
            width?: number
            height?: number
            advertiserName?: string
            imageUrl?: string
            destinationUrl?: string
            displaySeconds?: number
            score?: number
            image?: string
            imageMime?: string
            html?: string
            displayFrequency?: number
            openInTrunk?: boolean
            constructor(args?: {
                id?: number
                width?: number
                height?: number
                advertiserName?: string
                imageUrl?: string
                destinationUrl?: string
                displaySeconds?: number
                score?: number
                image?: string
                imageMime?: string
                html?: string
                displayFrequency?: number
                openInTrunk?: boolean
            })
        }
        export class BusinessInvitation {
            businessId?: number
            email?: string
            role?: BusinessUserRole
            status?: BusinessInvitationStatus
            requesterId?: UserID
            fromWorkChat?: boolean
            created?: Timestamp
            constructor(args?: {
                businessId?: number
                email?: string
                role?: BusinessUserRole
                status?: BusinessInvitationStatus
                requesterId?: UserID
                fromWorkChat?: boolean
                created?: Timestamp
            })
        }
        export enum BusinessInvitationStatus {
            APPROVED = 0,
            REQUESTED = 1,
            REDEEMED = 2
        }
        export class BusinessNotebook {
            notebookDescription?: string
            privilege?: SharedNotebookPrivilegeLevel
            recommended?: boolean
            constructor(args?: { notebookDescription?: string, privilege?: SharedNotebookPrivilegeLevel, recommended?: boolean })
        }
        export class BusinessUserAttributes {
            title?: string
            location?: string
            department?: string
            mobilePhone?: string
            linkedInProfileUrl?: string
            workPhone?: string
            companyStartDate?: Timestamp
            constructor(args?: {
                title?: string
                location?: string
                department?: string
                mobilePhone?: string
                linkedInProfileUrl?: string
                workPhone?: string
                companyStartDate?: Timestamp
            })
        }
        export class BusinessUserInfo {
            businessId?: number
            businessName?: string
            role?: BusinessUserRole
            email?: string
            updated?: Timestamp
            constructor(args?: {
                businessId?: number
                businessName?: string
                role?: BusinessUserRole
                email?: string
                updated?: Timestamp
            })
        }
        export enum BusinessUserRole {
            ADMIN = 1,
            NORMAL = 2
        }
        export class Contact {
            name?: string
            id?: string
            type?: ContactType
            photoUrl?: string
            photoLastUpdated?: Timestamp
            messagingPermit?: string
            messagingPermitExpires?: Timestamp
            constructor(args?: {
                name?: string
                id?: string
                type?: ContactType
                photoUrl?: string
                photoLastUpdated?: Timestamp
                messagingPermit?: string
                messagingPermitExpires?: Timestamp
            })
        }
        export enum ContactType {
            EVERNOTE = 1,
            SMS = 2,
            FACEBOOK = 3,
            EMAIL = 4,
            TWITTER = 5,
            LINKEDIN = 6
        }
        export class Data {
            bodyHash?: string
            size?: number
            body?: string
            constructor(args?: { bodyHash?: string, size?: number, body?: string })
        }
        type Guid = string
        export class Identity {
            id?: IdentityID
            contact?: Contact
            userId?: UserID
            deactivated?: boolean
            sameBusiness?: boolean
            blocked?: boolean
            userConnected?: boolean
            eventId?: MessageEventID
            constructor(args?: {
                id?: IdentityID
                contact?: Contact
                userId?: UserID
                deactivated?: boolean
                sameBusiness?: boolean
                blocked?: boolean
                userConnected?: boolean
                eventId?: MessageEventID
            })
        }
        type IdentityID = number
        type InvalidationSequenceNumber = number
        export class LazyMap {
            keysOnly?: Set<string>
            fullMap?: Map<string, string>
            constructor(args?: { keysOnly?: Set<string>, fullMap?: Map<string, string> })
        }
        export class LinkedNotebook {
            shareName?: string
            username?: string
            shardId?: string
            shareKey?: string
            uri?: string
            guid?: Guid
            updateSequenceNum?: number
            noteStoreUrl?: string
            webApiUrlPrefix?: string
            stack?: string
            businessId?: number
            constructor(args?: {
                shareName?: string
                username?: string
                shardId?: string
                shareKey?: string
                uri?: string
                guid?: Guid
                updateSequenceNum?: number
                noteStoreUrl?: string
                webApiUrlPrefix?: string
                stack?: string
                businessId?: number
            })
        }
        type MessageEventID = number
        type MessageThreadID = number
        export class Note {
            guid?: Guid
            title?: string
            content?: string
            contentHash?: string
            contentLength?: number
            created?: number
            updated?: number
            deleted?: number
            active?: boolean
            updateSequenceNum?: number
            notebookGuid?: Guid
            tagGuids?: string[]
            resources?: Resource[]
            attributes?: NoteAttributes
            tagNames?: string[]
            sharedNotes?: SharedNote[]
            restrictions?: NoteRestrictions
            limits?: NoteLimits
            constructor(args?: {
                guid?: Guid
                title?: string
                content?: string
                contentHash?: string
                contentLength?: number
                created?: number
                updated?: number
                deleted?: number
                active?: boolean
                updateSequenceNum?: number
                notebookGuid?: Guid
                tagGuids?: string[]
                resources?: Resource[]
                attributes?: NoteAttributes
                tagNames?: string[]
                sharedNotes?: SharedNote[]
                restrictions?: NoteRestrictions
                limits?: NoteLimits
            })
        }
        export class NoteAttributes {
            subjectDate?: Types.Timestamp
            latitude?: number
            longitude?: number
            altitude?: number
            author?: string
            source?: string
            sourceURL?: string
            sourceApplication?: string
            shareDate?: Types.Timestamp
            reminderOrder?: number
            reminderDoneTime?: Types.Timestamp
            reminderTime?: Types.Timestamp
            placeName?: string
            contentClass?: string
            applicationData?: LazyMap
            lastEditedBy?: string
            classifications?: Map<string, string>
            creatorId?: UserID
            lastEditorId?: UserID
            sharedWithBusiness?: boolean
            conflictSourceNoteGuid?: Guid
            noteTitleQuality?: number
            constructor(args?: {
                subjectDate?: Types.Timestamp
                latitude?: number
                longitude?: number
                altitude?: number
                author?: string
                source?: string
                sourceURL?: string
                sourceApplication?: string
                shareDate?: Types.Timestamp
                reminderOrder?: number
                reminderDoneTime?: Types.Timestamp
                reminderTime?: Types.Timestamp
                placeName?: string
                contentClass?: string
                applicationData?: LazyMap
                lastEditedBy?: string
                classifications?: Map<string, string>
                creatorId?: UserID
                lastEditorId?: UserID
                sharedWithBusiness?: boolean
                conflictSourceNoteGuid?: Guid
                noteTitleQuality?: number
            })
        }
        export class NoteLimits {
            noteResourceCountMax?: number
            uploadLimit?: number
            resourceSizeMax?: number
            noteSizeMax?: number
            uploaded?: number
            constructor(args?: {
                noteResourceCountMax?: number
                uploadLimit?: number
                resourceSizeMax?: number
                noteSizeMax?: number
                uploaded?: number
            })
        }
        export class NoteRestrictions {
            noUpdateTitle?: boolean
            noUpdateContent?: boolean
            noEmail?: boolean
            noShare?: boolean
            noSharePublicly?: boolean
            constructor(args?: {
                noUpdateTitle?: boolean
                noUpdateContent?: boolean
                noEmail?: boolean
                noShare?: boolean
                noSharePublicly?: boolean
            })
        }
        export enum NoteSortOrder {
            CREATED = 1,
            UPDATED = 2,
            RELEVANCE = 3,
            UPDATE_SEQUENCE_NUMBER = 4,
            TITLE = 5
        }
        export class Notebook {
            guid?: Guid
            name?: string
            updateSequenceNum?: number
            defaultNotebook?: boolean
            serviceCreated?: number
            serviceUpdated?: number
            publishing?: Publishing
            published?: boolean
            stack?: string
            sharedNotebookIds?: number[]
            sharedNotebooks?: SharedNotebook[]
            businessNotebook?: BusinessNotebook
            contact?: User
            restrictions?: NotebookRestrictions
            recipientSettings?: NotebookRecipientSettings
            constructor(args?: {
                guid?: Guid
                name?: string
                updateSequenceNum?: number
                defaultNotebook?: boolean
                serviceCreated?: number
                serviceUpdated?: number
                publishing?: Publishing
                published?: boolean
                stack?: string
                sharedNotebookIds?: number[]
                sharedNotebooks?: SharedNotebook[]
                businessNotebook?: BusinessNotebook
                contact?: User
                restrictions?: NotebookRestrictions
                recipientSettings?: NotebookRecipientSettings
            })
        }
        export class NotebookDescriptor {
            guid?: Guid
            notebookDisplayName?: string
            contactName?: string
            hasSharedNotebook?: boolean
            joinedUserCount?: number
            constructor(args?: {
                guid?: Guid
                notebookDisplayName?: string
                contactName?: string
                hasSharedNotebook?: boolean
                joinedUserCount?: number
            })
        }
        export class NotebookRecipientSettings {
            reminderNotifyEmail?: boolean
            reminderNotifyInApp?: boolean
            inMyList?: boolean
            stack?: string
            constructor(args?: { reminderNotifyEmail?: boolean, reminderNotifyInApp?: boolean, inMyList?: boolean, stack?: string })
        }
        export class NotebookRestrictions {
            noReadNotes?: boolean
            noCreateNotes?: boolean
            noUpdateNotes?: boolean
            noExpungeNotes?: boolean
            noShareNotes?: boolean
            noEmailNotes?: boolean
            noSendMessageToRecipients?: boolean
            noUpdateNotebook?: boolean
            noExpungeNotebook?: boolean
            noSetDefaultNotebook?: boolean
            noSetNotebookStack?: boolean
            noPublishToPublic?: boolean
            noPublishToBusinessLibrary?: boolean
            noCreateTags?: boolean
            noUpdateTags?: boolean
            noExpungeTags?: boolean
            noSetParentTag?: boolean
            noCreateSharedNotebooks?: boolean
            updateWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions
            expungeWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions
            noShareNotesWithBusiness?: boolean
            noRenameNotebook?: boolean
            constructor(args?: {
                noReadNotes?: boolean
                noCreateNotes?: boolean
                noUpdateNotes?: boolean
                noExpungeNotes?: boolean
                noShareNotes?: boolean
                noEmailNotes?: boolean
                noSendMessageToRecipients?: boolean
                noUpdateNotebook?: boolean
                noExpungeNotebook?: boolean
                noSetDefaultNotebook?: boolean
                noSetNotebookStack?: boolean
                noPublishToPublic?: boolean
                noPublishToBusinessLibrary?: boolean
                noCreateTags?: boolean
                noUpdateTags?: boolean
                noExpungeTags?: boolean
                noSetParentTag?: boolean
                noCreateSharedNotebooks?: boolean
                updateWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions
                expungeWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions
                noShareNotesWithBusiness?: boolean
                noRenameNotebook?: boolean
            })
        }
        export class PremiumInfo {
            currentTime?: Timestamp
            premium?: boolean
            premiumRecurring?: boolean
            premiumExpirationDate?: Timestamp
            premiumExtendable?: boolean
            premiumPending?: boolean
            premiumCancellationPending?: boolean
            canPurchaseUploadAllowance?: boolean
            premiumUpgradable?: boolean
            constructor(args?: {
                currentTime?: Timestamp
                premium?: boolean
                premiumRecurring?: boolean
                premiumExpirationDate?: Timestamp
                premiumExtendable?: boolean
                premiumPending?: boolean
                premiumCancellationPending?: boolean
                canPurchaseUploadAllowance?: boolean
                premiumUpgradable?: boolean
            })
        }
        export enum PremiumOrderStatus {
            NONE = 0,
            PENDING = 1,
            ACTIVE = 2,
            FAILED = 3,
            CANCELLATION_PENDING = 4,
            CANCELED = 5
        }
        export enum PrivilegeLevel {
            NORMAL = 1,
            PREMIUM = 3,
            VIP = 5,
            MANAGER = 7,
            SUPPORT = 8,
            ADMIN = 9
        }
        export class Publishing {
            uri?: string
            order?: NoteSortOrder
            ascending?: boolean
            publicDescription?: string
            constructor(args?: { uri?: string, order?: NoteSortOrder, ascending?: boolean, publicDescription?: string })
        }
        export enum QueryFormat {
            'USER' = 1,
            'SEXP' = 2,
        }
        export class RelatedContent {
            contentId?: string
            title?: string
            url?: string
            sourceId?: string
            sourceUrl?: string
            sourceFaviconUrl?: string
            sourceName?: string
            date?: Timestamp
            teaser?: string
            thumbnails?: RelatedContentImage[]
            contentType?: RelatedContentType
            accessType?: RelatedContentAccess
            visibleUrl?: string
            clipUrl?: string
            contact?: Contact
            authors?: string[]
            constructor(args?: {
                contentId?: string
                title?: string
                url?: string
                sourceId?: string
                sourceUrl?: string
                sourceFaviconUrl?: string
                sourceName?: string
                date?: Timestamp
                teaser?: string
                thumbnails?: RelatedContentImage[]
                contentType?: RelatedContentType
                accessType?: RelatedContentAccess
                visibleUrl?: string
                clipUrl?: string
                contact?: Contact
                authors?: string[]
            })
        }
        export enum RelatedContentAccess {
            NOT_ACCESSIBLE = 0,
            DIRECT_LINK_ACCESS_OK = 1,
            DIRECT_LINK_LOGIN_REQUIRED = 2,
            DIRECT_LINK_EMBEDDED_VIEW = 3
        }
        export class RelatedContentImage {
            url?: string
            width?: number
            height?: number
            pixelRatio?: number
            fileSize?: number
            constructor(args?: { url?: string, width?: number, height?: number, pixelRatio?: number, fileSize?: number })
        }
        export enum RelatedContentType {
            NEWS_ARTICLE = 1,
            PROFILE_PERSON = 2,
            PROFILE_ORGANIZATION = 3,
            REFERENCE_MATERIAL = 4
        }
        export enum ReminderEmailConfig {
            DO_NOT_SEND = 1,
            SEND_DAILY_EMAIL = 2
        }
        export class Resource {
            guid?: Guid
            noteguid?: Guid
            data?: Data
            mime?: string
            width?: number
            height?: number
            duration?: number
            active?: boolean
            recognition?: Data
            attributes?: ResourceAttributes
            updateSequenceNum?: number
            alternateData?: Data
            constructor(args?: {
                guid?: Guid
                noteguid?: Guid
                data?: Data
                mime?: string
                width?: number
                height?: number
                duration?: number
                active?: boolean
                recognition?: Data
                attributes?: ResourceAttributes
                updateSequenceNum?: number
                alternateData?: Data
            })
        }
        export class ResourceAttributes {
            sourceURL?: string
            timestamp?: number
            latitude?: number
            longitude?: number
            altitude?: number
            cameraMake?: string
            cameraModel?: string
            clientWillIndex?: boolean
            recoType?: string
            fileName?: string
            attachment?: boolean
            applicationData?: LazyMap
            constructor(args?: {
                sourceURL?: string
                timestamp?: number
                latitude?: number
                longitude?: number
                altitude?: number
                cameraMake?: string
                cameraModel?: string
                clientWillIndex?: boolean
                recoType?: string
                fileName?: string
                attachment?: boolean
                applicationData?: LazyMap
            })
        }
        export class SavedSearch {
            guid?: Guid
            name?: string
            query?: string
            format?: QueryFormat
            updateSequenceNum?: number
            scope?: SavedSearchScope
            constructor(args?: {
                guid?: Guid
                name?: string
                query?: string
                format?: QueryFormat
                updateSequenceNum?: number
                scope?: SavedSearchScope
            })
        }
        export class SavedSearchScope {
            includeAccount?: boolean
            includePersonalLinkedNotebooks?: boolean
            includeBusinessLinkedNotebooks?: boolean
            constructor(args?: { includeAccount?: boolean, includePersonalLinkedNotebooks?: boolean, includeBusinessLinkedNotebooks?: boolean })
        }
        export enum ServiceLevel {
            BASIC = 1,
            PLUS = 2,
            PREMIUM = 3
        }
        export class SharedNote {
            sharerUserID?: UserID
            recipientIdentity?: Identity
            privilege?: SharedNotePrivilegeLevel
            serviceCreated?: Timestamp
            serviceUpdated?: Timestamp
            serviceAssigned?: Timestamp
            constructor(args?: {
                sharerUserID?: UserID
                recipientIdentity?: Identity
                privilege?: SharedNotePrivilegeLevel
                serviceCreated?: Timestamp
                serviceUpdated?: Timestamp
                serviceAssigned?: Timestamp
            })
        }
        export enum SharedNotePrivilegeLevel {
            READ_NOTE = 0,
            MODIFY_NOTE = 1,
            FULL_ACCESS = 2
        }
        export class SharedNotebook {
            id?: number
            userId?: UserID
            notebookGuid?: Guid
            email?: string
            recipientIdentityId?: IdentityID
            notebookModifiable?: boolean
            serviceCreated?: Timestamp
            serviceUpdated?: Timestamp
            globalId?: string
            username?: string
            privilege?: SharedNotebookPrivilegeLevel
            recipientSettings?: SharedNotebookRecipientSettings
            sharerUserId?: UserID
            recipientUsername?: string
            recipientUserId?: UserID
            serviceAssigned?: Timestamp
            constructor(args?: {
                id?: number
                userId?: UserID
                notebookGuid?: Guid
                email?: string
                recipientIdentityId?: IdentityID
                notebookModifiable?: boolean
                serviceCreated?: Timestamp
                serviceUpdated?: Timestamp
                globalId?: string
                username?: string
                privilege?: SharedNotebookPrivilegeLevel
                recipientSettings?: SharedNotebookRecipientSettings
                sharerUserId?: UserID
                recipientUsername?: string
                recipientUserId?: UserID
                serviceAssigned?: Timestamp
            })
        }
        export enum SharedNotebookInstanceRestrictions {
            ONLY_JOINED_OR_PREVIEW = 1,
            NO_SHARED_NOTEBOOKS = 2
        }
        export enum SharedNotebookPrivilegeLevel {
            READ_NOTEBOOK = 0,
            MODIFY_NOTEBOOK_PLUS_ACTIVITY = 1,
            READ_NOTEBOOK_PLUS_ACTIVITY = 2,
            GROUP = 3,
            FULL_ACCESS = 4,
            BUSINESS_FULL_ACCESS = 5
        }
        export class SharedNotebookRecipientSettings {
            reminderNotifyEmail?: boolean
            reminderNotifyInApp?: boolean
            constructor(args?: { reminderNotifyEmail?: boolean, reminderNotifyInApp?: boolean })
        }
        export enum SponsoredGroupRole {
            GROUP_MEMBER = 1,
            GROUP_ADMIN = 2,
            GROUP_OWNER = 3
        }
        export class Tag {
            guid?: Guid
            name?: string
            parentGuid?: Guid
            updateSequenceNum?: number
            constructor(args?: { guid?: Guid, name?: string, parentGuid?: Guid, updateSequenceNum?: number })
        }
        type Timestamp = number
        export class User {
            id?: UserID
            username?: string
            email?: string
            name?: string
            timezone?: string
            privilege?: PrivilegeLevel
            serviceLevel?: ServiceLevel
            created?: Timestamp
            updated?: Timestamp
            deleted?: Timestamp
            active?: boolean
            shardId?: string
            attributes?: UserAttributes
            accounting?: Accounting
            businessUserInfo?: BusinessUserInfo
            photoUrl?: string
            photoLastUpdated?: Timestamp
            accountLimits?: AccountLimits
            constructor(args?: {
                id?: UserID
                username?: string
                email?: string
                name?: string
                timezone?: string
                privilege?: PrivilegeLevel
                serviceLevel?: ServiceLevel
                created?: Timestamp
                updated?: Timestamp
                deleted?: Timestamp
                active?: boolean
                shardId?: string
                attributes?: UserAttributes
                accounting?: Accounting
                businessUserInfo?: BusinessUserInfo
                photoUrl?: string
                photoLastUpdated?: Timestamp
                accountLimits?: AccountLimits
            })
        }
        export class UserAttributes {
            defaultLocationName?: string
            defaultLatitude?: number
            defaultLongitude?: number
            preactivation?: boolean
            viewedPromotions?: string[]
            incomingEmailAddress?: string
            recentMailedAddresses?: string[]
            comments?: string
            dateAgreedToTermsOfService?: Timestamp
            maxReferrals?: number
            referralCount?: number
            refererCode?: string
            sentEmailDate?: Timestamp
            sentEmailCount?: number
            dailyEmailLimit?: number
            emailOptOutDate?: Timestamp
            partnerEmailOptInDate?: Timestamp
            preferredLanguage?: string
            preferredCountry?: string
            clipFullPage?: boolean
            twitterUserName?: string
            twitterId?: string
            groupName?: string
            recognitionLanguage?: string
            referralProof?: string
            educationalDiscount?: boolean
            businessAddress?: string
            hideSponsorBilling?: boolean
            taxExempt?: boolean
            useEmailAutoFiling?: boolean
            reminderEmailConfig?: ReminderEmailConfig
            emailAddressLastConfirmed?: Timestamp
            passwordUpdated?: Timestamp
            salesforcePushEnabled?: boolean
            constructor(args?: {
                defaultLocationName?: string
                defaultLatitude?: number
                defaultLongitude?: number
                preactivation?: boolean
                viewedPromotions?: string[]
                incomingEmailAddress?: string
                recentMailedAddresses?: string[]
                comments?: string
                dateAgreedToTermsOfService?: Timestamp
                maxReferrals?: number
                referralCount?: number
                refererCode?: string
                sentEmailDate?: Timestamp
                sentEmailCount?: number
                dailyEmailLimit?: number
                emailOptOutDate?: Timestamp
                partnerEmailOptInDate?: Timestamp
                preferredLanguage?: string
                preferredCountry?: string
                clipFullPage?: boolean
                twitterUserName?: string
                twitterId?: string
                groupName?: string
                recognitionLanguage?: string
                referralProof?: string
                educationalDiscount?: boolean
                businessAddress?: string
                hideSponsorBilling?: boolean
                taxExempt?: boolean
                useEmailAutoFiling?: boolean
                reminderEmailConfig?: ReminderEmailConfig
                emailAddressLastConfirmed?: Timestamp
                passwordUpdated?: Timestamp
                salesforcePushEnabled?: boolean
            })
        }
        type UserID = number
        export class UserIdentity {
            type?: UserIdentityType
            stringIdentifier?: string
            longIdentifier?: number
            constructor(args?: {
                type?: UserIdentityType
                stringIdentifier?: string
                longIdentifier?: number
            })
        }
        export enum UserIdentityType {
            EVERNOTE_USERID = 1,
            EMAIL = 2,
            IDENTITYID = 3
        }
        export class UserProfile {
            id?: UserID
            name?: string
            email?: string
            username?: string
            attributes?: BusinessUserAttributes
            joined?: Timestamp
            photoLastUpdated?: Timestamp
            photoUrl?: string
            role?: BusinessUserRole
            constructor(args?: {
                id?: UserID
                name?: string
                email?: string
                username?: string
                attributes?: BusinessUserAttributes
                joined?: Timestamp
                photoLastUpdated?: Timestamp
                photoUrl?: string
                role?: BusinessUserRole
            })
        }
    }

    /* Limits: Constants */
    export namespace Limits {
        export const EDAM_APPLICATIONDATA_ENTRY_LEN_MAX: number
        export const EDAM_APPLICATIONDATA_NAME_LEN_MAX: number
        export const EDAM_APPLICATIONDATA_NAME_LEN_MIN: number
        export const EDAM_APPLICATIONDATA_NAME_REGEX: string
        export const EDAM_APPLICATIONDATA_VALUE_LEN_MAX: number
        export const EDAM_APPLICATIONDATA_VALUE_LEN_MIN: number
        export const EDAM_APPLICATIONDATA_VALUE_REGEX: string
        export const EDAM_ATTRIBUTE_LEN_MAX: number
        export const EDAM_ATTRIBUTE_LEN_MIN: number
        export const EDAM_ATTRIBUTE_LIST_MAX: number
        export const EDAM_ATTRIBUTE_MAP_MAX: number
        export const EDAM_ATTRIBUTE_REGEX: string
        export const EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MAX: number
        export const EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MIN: number
        export const EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_REGEX: string
        export const EDAM_BUSINESS_NOTEBOOKS_MAX: number
        export const EDAM_BUSINESS_NOTES_MAX: number
        export const EDAM_BUSINESS_PHONE_NUMBER_LEN_MAX: number
        export const EDAM_BUSINESS_TAGS_MAX: number
        export const EDAM_BUSINESS_URI_LEN_MAX: number
        export const EDAM_CONTENT_CLASS_FOOD_MEAL: string
        export const EDAM_CONTENT_CLASS_HELLO_ENCOUNTER: string
        export const EDAM_CONTENT_CLASS_HELLO_PROFILE: string
        export const EDAM_CONTENT_CLASS_PENULTIMATE_NOTEBOOK: string
        export const EDAM_CONTENT_CLASS_PENULTIMATE_PREFIX: string
        export const EDAM_CONTENT_CLASS_SKITCH_PDF: string
        export const EDAM_CONTENT_CLASS_SKITCH_PREFIX: string
        export const EDAM_CONTENT_CLASS_SKITCH: string
        export const EDAM_DEVICE_DESCRIPTION_LEN_MAX: number
        export const EDAM_DEVICE_DESCRIPTION_REGEX: string
        export const EDAM_DEVICE_ID_LEN_MAX: number
        export const EDAM_DEVICE_ID_REGEX: string
        export const EDAM_EMAIL_DOMAIN_REGEX: string
        export const EDAM_EMAIL_LEN_MAX: number
        export const EDAM_EMAIL_LEN_MIN: number
        export const EDAM_EMAIL_LOCAL_REGEX: string
        export const EDAM_EMAIL_REGEX: string
        export const EDAM_FOOD_APP_CONTENT_CLASS_PREFIX: string
        export const EDAM_GUID_LEN_MAX: number
        export const EDAM_GUID_LEN_MIN: number
        export const EDAM_GUID_REGEX: string
        export const EDAM_HASH_LEN: number
        export const EDAM_HELLO_APP_CONTENT_CLASS_PREFIX: string
        export const EDAM_INDEXABLE_RESOURCE_MIME_TYPES: string[]
        export const EDAM_MAX_PREFERENCES: number
        export const EDAM_MAX_VALUES_PER_PREFERENCE: number
        export const EDAM_MIME_LEN_MAX: number
        export const EDAM_MIME_LEN_MIN: number
        export const EDAM_MIME_REGEX: string
        export const EDAM_MIME_TYPE_AAC: string
        export const EDAM_MIME_TYPE_AMR: string
        export const EDAM_MIME_TYPE_DEFAULT: string
        export const EDAM_MIME_TYPE_GIF: string
        export const EDAM_MIME_TYPE_INK: string
        export const EDAM_MIME_TYPE_JPEG: string
        export const EDAM_MIME_TYPE_M4A: string
        export const EDAM_MIME_TYPE_MP3: string
        export const EDAM_MIME_TYPE_MP4_VIDEO: string
        export const EDAM_MIME_TYPE_PDF: string
        export const EDAM_MIME_TYPE_PNG: string
        export const EDAM_MIME_TYPE_WAV: string
        export const EDAM_MIME_TYPES: string[]
        export const EDAM_NOTE_CONTENT_CLASS_LEN_MAX: number
        export const EDAM_NOTE_CONTENT_CLASS_LEN_MIN: number
        export const EDAM_NOTE_CONTENT_CLASS_REGEX: string
        export const EDAM_NOTE_CONTENT_LEN_MAX: number
        export const EDAM_NOTE_CONTENT_LEN_MIN: number
        export const EDAM_NOTE_RESOURCES_MAX: number
        export const EDAM_NOTE_SIZE_MAX_FREE: number
        export const EDAM_NOTE_SIZE_MAX_PREMIUM: number
        export const EDAM_NOTE_TAGS_MAX: number
        export const EDAM_NOTE_TITLE_LEN_MAX: number
        export const EDAM_NOTE_TITLE_LEN_MIN: number
        export const EDAM_NOTE_TITLE_REGEX: string
        export const EDAM_NOTEBOOK_NAME_LEN_MAX: number
        export const EDAM_NOTEBOOK_NAME_LEN_MIN: number
        export const EDAM_NOTEBOOK_NAME_REGEX: string
        export const EDAM_NOTEBOOK_SHARED_NOTEBOOK_MAX: number
        export const EDAM_NOTEBOOK_STACK_LEN_MAX: number
        export const EDAM_NOTEBOOK_STACK_LEN_MIN: number
        export const EDAM_NOTEBOOK_STACK_REGEX: string
        export const EDAM_PREFERENCE_NAME_LEN_MAX: number
        export const EDAM_PREFERENCE_NAME_LEN_MIN: number
        export const EDAM_PREFERENCE_NAME_REGEX: string
        export const EDAM_PREFERENCE_SHORTCUTS_MAX_VALUES: number
        export const EDAM_PREFERENCE_SHORTCUTS: string
        export const EDAM_PREFERENCE_VALUE_LEN_MAX: number
        export const EDAM_PREFERENCE_VALUE_LEN_MIN: number
        export const EDAM_PREFERENCE_VALUE_REGEX: string
        export const EDAM_PUBLISHING_DESCRIPTION_LEN_MAX: number
        export const EDAM_PUBLISHING_DESCRIPTION_LEN_MIN: number
        export const EDAM_PUBLISHING_DESCRIPTION_REGEX: string
        export const EDAM_PUBLISHING_URI_LEN_MAX: number
        export const EDAM_PUBLISHING_URI_LEN_MIN: number
        export const EDAM_PUBLISHING_URI_PROHIBITED: string[]
        export const EDAM_PUBLISHING_URI_REGEX: string
        export const EDAM_RELATED_MAX_NOTEBOOKS: number
        export const EDAM_RELATED_MAX_NOTES: number
        export const EDAM_RELATED_MAX_TAGS: number
        export const EDAM_RELATED_PLAINTEXT_LEN_MAX: number
        export const EDAM_RELATED_PLAINTEXT_LEN_MIN: number
        export const EDAM_RESOURCE_SIZE_MAX_FREE: number
        export const EDAM_RESOURCE_SIZE_MAX_PREMIUM: number
        export const EDAM_SAVED_SEARCH_NAME_LEN_MAX: number
        export const EDAM_SAVED_SEARCH_NAME_LEN_MIN: number
        export const EDAM_SAVED_SEARCH_NAME_REGEX: string
        export const EDAM_SEARCH_QUERY_LEN_MAX: number
        export const EDAM_SEARCH_QUERY_LEN_MIN: number
        export const EDAM_SEARCH_QUERY_REGEX: string
        export const EDAM_SEARCH_SUGGESTIONS_MAX: number
        export const EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MAX: number
        export const EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MIN: number
        export const EDAM_TAG_NAME_LEN_MAX: number
        export const EDAM_TAG_NAME_LEN_MIN: number
        export const EDAM_TAG_NAME_REGEX: string
        export const EDAM_TIMEZONE_LEN_MAX: number
        export const EDAM_TIMEZONE_LEN_MIN: number
        export const EDAM_TIMEZONE_REGEX: string
        export const EDAM_USER_LINKED_NOTEBOOK_MAX_PREMIUM: number
        export const EDAM_USER_LINKED_NOTEBOOK_MAX: number
        export const EDAM_USER_MAIL_LIMIT_DAILY_FREE: number
        export const EDAM_USER_MAIL_LIMIT_DAILY_PREMIUM: number
        export const EDAM_USER_NAME_LEN_MAX: number
        export const EDAM_USER_NAME_LEN_MIN: number
        export const EDAM_USER_NAME_REGEX: string
        export const EDAM_USER_NOTEBOOKS_MAX: number
        export const EDAM_USER_NOTES_MAX: number
        export const EDAM_USER_PASSWORD_LEN_MAX: number
        export const EDAM_USER_PASSWORD_LEN_MIN: number
        export const EDAM_USER_PASSWORD_REGEX: string
        export const EDAM_USER_RECENT_MAILED_ADDRESSES_MAX: number
        export const EDAM_USER_SAVED_SEARCHES_MAX: number
        export const EDAM_USER_TAGS_MAX: number
        export const EDAM_USER_UPLOAD_LIMIT_BUSINESS: number
        export const EDAM_USER_UPLOAD_LIMIT_FREE: number
        export const EDAM_USER_UPLOAD_LIMIT_PREMIUM: number
        export const EDAM_USER_USERNAME_LEN_MAX: number
        export const EDAM_USER_USERNAME_LEN_MIN: number
        export const EDAM_USER_USERNAME_REGEX: string
        export const EDAM_VAT_REGEX: string
    }

    /* Errors: Data types */
    export namespace Errors {
        export enum EDAMErrorCode {
            UNKNOWN = 1,
            BAD_DATA_FORMAT = 2,
            PERMISSION_DENIED = 3,
            INTERNAL_ERROR = 4,
            DATA_REQUIRED = 5,
            LIMIT_REACHED = 6,
            QUOTA_REACHED = 7,
            INVALID_AUTH = 8,
            AUTH_EXPIRED = 9,
            DATA_CONFLICT = 10,
            ENML_VALIDATION = 11,
            SHARD_UNAVAILABLE = 12,
            LEN_TOO_SHORT = 13,
            LEN_TOO_LONG = 14,
            TOO_FEW = 15,
            TOO_MANY = 16,
            UNSUPPORTED_OPERATION = 17,
            TAKEN_DOWN = 18,
            RATE_LIMIT_REACHED = 19,
            BUSINESS_SECURITY_LOGIN_REQUIRED = 20,
            DEVICE_LIMIT_REACHED = 21
        }
        export enum EDAMInvalidContactReason {
            BAD_ADDRESS = 0,
            DUPLICATE_CONTACT = 1,
            NO_CONNECTION = 2
        }
        export class EDAMInvalidContactsException extends Error {
            contacts: Types.Contact[]
            parameter: string
            reasons: EDAMInvalidContactReason[]
        }
        export class EDAMNotFoundException extends Error {
            identifier: string
            key: string
        }
        export class EDAMSystemException extends Error {
            errorCode: EDAMErrorCode
            message: string
            rateLimitDuration: number
        }
        export class EDAMUserException extends Error {
            errorCode: EDAMErrorCode
            parameter: string
        }
    }

    /* Classes */
    export class Client {
        constructor(config: {
            consumerKey?: string
            consumerSecret?: string
            sandbox?: boolean
            china?: boolean
            token?: string
            serviceHost?: string
        })
        getRequestToken (callbackUrl: string, callback: Function): void
        getAuthorizeUrl (oauthToken: string): string
        getAccessToken (oauthToken: string, oauthTokenSecret: string, oauthVerifier: string, callback: Function): void
        getNoteStore (noteStoreUrl?: string): NoteStoreClient
        getUserStore (): UserStoreClient
        getSharedNoteStore (linkedNotebook: Types.LinkedNotebook): NoteStoreClient
        getBusinessNoteStore (): NoteStoreClient
        getEndpoint (path: string): string
        getOAuthClient (callbackUrl: string): Object
    }

    export class NoteStoreClient {
        authenticateToSharedNote (guid: Types.Guid, noteKey: string, authenticationToken?: string): Promise<UserStore.AuthenticationResult>
        authenticateToSharedNotebook (guid: Types.Guid, noteKey: string, authenticationToken?: string): Promise<UserStore.AuthenticationResult>
        copyNote (noteGuid: Types.Guid, toNotebookGuid: Types.Guid): Promise<Types.Note>
        createLinkedNotebook (linkedNotebook: Types.LinkedNotebook): Promise<Types.LinkedNotebook>
        createNote (note: Types.Note): Promise<Types.Note>
        createNotebook (notebook: Types.Notebook): Promise<Types.Notebook>
        createOrUpdateNotebookShares (shareTemplate: NoteStore.NotebookShareTemplate): Promise<NoteStore.CreateOrUpdateNotebookSharesResult>
        createSearch (search: Types.SavedSearch): Promise<Types.SavedSearch>
        createTag (tag: Types.Tag): Promise<Types.Tag>
        deleteNote (guid: Types.Guid): Promise<number>
        emailNote (parameters: NoteStore.NoteEmailParameters): Promise<void>
        expungeLinkedNotebook (guid: Types.Guid): Promise<number>
        expungeNote (guid: Types.Guid): Promise<number>
        expungeNotebook (guid: Types.Guid): Promise<number>
        expungeSearch (guid: Types.Guid): Promise<number>
        expungeTag (guid: Types.Guid): Promise<number>
        findNoteCounts (filter: NoteStore.NoteFilter, withTrash: boolean): Promise<NoteStore.NoteCollectionCounts>
        findNoteOffset (filter: NoteStore.NoteFilter, guid: Types.Guid): Promise<number>
        findNotesMetadata (filter: NoteStore.NoteFilter, offset: number, maxNotes: number, resultSpec: NoteStore.NotesMetadataResultSpec): Promise<NoteStore.NotesMetadataList>
        findRelated (query: NoteStore.RelatedQuery, resultSpec: NoteStore.RelatedResultSpec): Promise<NoteStore.RelatedResult>
        getDefaultNotebook (): Promise<Types.Notebook>
        getFilteredSyncChunk (afterUSN: number, maxEntries: number, filter: NoteStore.SyncChunkFilter): Promise<NoteStore.SyncChunk>
        getLinkedNotebookSyncChunk (linkedNotebook: Types.LinkedNotebook, afterUSN: number, maxEntries: number, fullSyncOnly: boolean): Promise<NoteStore.SyncChunk>
        getLinkedNotebookSyncState (linkedNotebook: Types.LinkedNotebook): Promise<NoteStore.SyncState>
        getNoteApplicationData (guid: Types.Guid): Promise<Types.LazyMap>
        getNoteApplicationDataEntry (guid: Types.Guid, key: string): Promise<string>
        getNoteWithResultSpec (guid: Types.Guid, resultSpec: NoteStore.NoteResultSpec): Promise<Types.Note>
        getNotebook (guid: Types.Guid): Promise<Types.Notebook>
        getNotebookShares (notebookGuid: string): Promise<NoteStore.ShareRelationships>
        getNoteContent (guid: Types.Guid): Promise<string>
        getNoteSearchText (guid: Types.Guid, noteOnly: boolean, tokenizeForIndexing: boolean): Promise<string>
        getNoteTagNames (guid: Types.Guid): Promise<string[]>
        getNoteVersion (noteguid: Types.Guid, updateSequenceNum: number, withResourcesData: boolean, withResourcesRecognition: boolean, withResourcesAlternateData: boolean): Promise<Types.Note>
        getPublicNotebook (userId: Types.UserID, publicUri: string): Promise<Types.Notebook>
        getResource (guid: Types.Guid, withData: boolean, withRecognition: boolean, withAttributes: boolean, withAlternateData: boolean): Promise<Types.Resource>
        getResourceAlternateData (guid: Types.Guid): Promise<string>
        getResourceApplicationData (guid: Types.Guid): Promise<Types.LazyMap>
        getResourceApplicationDataEntry (guid: Types.Guid, key: string): Promise<string>
        getResourceAttributes (guid: Types.Guid): Promise<Types.ResourceAttributes>
        getResourceByHash (noteguid: Types.Guid, contentHash: string, withData: boolean, withRecognition: boolean, withAlternateData: boolean): Promise<Types.Resource>
        getResourceData (guid: Types.Guid): Promise<string>
        getResourceRecognition (guid: Types.Guid): Promise<string>
        getResourceSearchText (guid: Types.Guid): Promise<string>
        getSearch (guid: Types.Guid): Promise<Types.SavedSearch>
        getSharedNotebookByAuth (): Promise<Types.SharedNotebook>
        getSyncState (): Promise<NoteStore.SyncState>
        getTag (guid: Types.Guid): Promise<Types.Tag>
        listAccessibleBusinessNotebooks (): Promise<Types.Notebook[]>
        listLinkedNotebooks (): Promise<Types.LinkedNotebook[]>
        listNotebooks (): Promise<Types.Notebook[]>
        listNoteVersions (noteguid: Types.Guid): Promise<NoteStore.NoteVersionId[]>
        listSearches (): Promise<Types.SavedSearch[]>
        listSharedNotebooks (): Promise<Types.SharedNotebook[]>
        listTags (): Promise<Types.Tag[]>
        listTagsByNotebook (notebookguid: Types.Guid): Promise<Types.Tag[]>
        manageNotebookShares (parameters: NoteStore.ManageNotebookSharesParameters): Promise<NoteStore.ManageNotebookSharesResult>
        setNoteApplicationDataEntry (guid: Types.Guid, key: string, value: string): Promise<number>
        setNotebookRecipientSettings (notebookGuid: string, recipientSettings: Types.NotebookRecipientSettings): Promise<Types.Notebook>
        setResourceApplicationDataEntry (guid: Types.Guid, key: string, value: string): Promise<number>
        shareNote (guid: Types.Guid): Promise<string>
        stopSharingNote (guid: Types.Guid): Promise<void>
        unsetNoteApplicationDataEntry (guid: Types.Guid, key: string): Promise<number>
        unsetResourceApplicationDataEntry (guid: Types.Guid, key: string): Promise<number>
        untagAll (guid: Types.Guid): Promise<void>
        updateLinkedNotebook (linkedNotebook: Types.LinkedNotebook): Promise<number>
        updateNote (note: Types.Note): Promise<Types.Note>
        updateNoteIfUsnMatches (note: Types.Note): Promise<NoteStore.UpdateNoteIfUsnMatchesResult>
        updateNotebook (notebook: Types.Notebook): Promise<number>
        updateResource (resource: Types.Resource): Promise<number>
        updateSearch (search: Types.SavedSearch): Promise<number>
        updateTag (tag: Types.Tag): Promise<number>

        /* DEPRECATED */
        getNote (guid: Types.Guid, withContent: boolean, withResourcesData: boolean, withResourcesRecognition: boolean, withResourcesAlternateData: boolean): Promise<Types.Note>
        updateSharedNotebook (sharedNotebook: Types.SharedNotebook): Promise<number>
        shareNotebook (sharedNotebook: Types.SharedNotebook, message: string): Promise<Types.SharedNotebook>
    }

    export class UserStoreClient {
        authenticateLongSession (username: string, password: string, consumerKey: string, consumerSecret: string, deviceIdentifier: string, deviceDescription: string, supportsTwoFactor: boolean): Promise<UserStore.AuthenticationResult>
        authenticateToBusiness (): Promise<UserStore.AuthenticationResult>
        checkVersion (clientName: string, edamVersionMajor: number, edamVersionMinor: number): Promise<boolean>
        completeTwoFactorAuthentication (authenticationToken: string, oneTimeCode: string, deviceIdentifier: string, deviceDescription: string): Promise<UserStore.AuthenticationResult>
        getAccountLimits (serviceLevel: Types.ServiceLevel): Promise<Types.AccountLimits>
        getBootstrapInfo (locale: string): Promise<UserStore.BootstrapInfo>
        getPremiumInfo (): Promise<Types.PremiumInfo>
        getPublicUserInfo (username: string): Promise<UserStore.PublicUserInfo>
        getUser (): Promise<Types.User>
        getUserUrls (): Promise<UserStore.UserUrls>
        inviteToBusiness (emailAddress: string): Promise<void>
        listBusinessInvitations (includeRequestedInvitations: boolean): Promise<Types.BusinessInvitation[]>
        listBusinessUsers (): Promise<Types.UserProfile[]>
        removeFromBusiness (emailAddress: string): Promise<void>
        revokeLongSession (): Promise<void>
        updateBusinessUserIdentifier (oldEmailAddress: string, newEmailAddress: string): Promise<void>
    }
}
