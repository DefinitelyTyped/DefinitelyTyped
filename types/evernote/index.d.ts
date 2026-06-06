import { OAuth, oauth1tokenCallback } from "oauth";

/* NoteStore: Data types and Constants */
export namespace NoteStore {
    class CreateOrUpdateNotebookSharesResult {
        updateSequenceNum?: number | undefined;
        matchingShares?: Types.SharedNotebook[] | undefined;
        constructor(
            args?: { updateSequenceNum?: number | undefined; matchingShares?: Types.SharedNotebook[] | undefined },
        );
    }
    class InvitationShareRelationship {
        displayName?: string | undefined;
        recipientUserIdentity?: Types.UserIdentity | undefined;
        privilege?: ShareRelationshipPrivilegeLevel | undefined;
        sharerUserId?: Types.UserID | undefined;
        constructor(args?: {
            displayName?: string | undefined;
            recipientUserIdentity?: Types.UserIdentity | undefined;
            privilege?: ShareRelationshipPrivilegeLevel | undefined;
            sharerUserId?: Types.UserID | undefined;
        });
    }
    class ManageNoteSharesError {
        identityID?: Types.IdentityID | undefined;
        userID?: Types.UserID | undefined;
        userException?: Errors.EDAMUserException | undefined;
        notFoundException?: Errors.EDAMNotFoundException | undefined;
        constructor(args?: {
            identityID?: Types.IdentityID | undefined;
            userID?: Types.UserID | undefined;
            userException?: Errors.EDAMUserException | undefined;
            notFoundException?: Errors.EDAMNotFoundException | undefined;
        });
    }
    class ManageNoteSharesParameters {
        noteGuid?: string | undefined;
        membershipsToUpdate?: NoteMemberShareRelationship[] | undefined;
        invitationsToUpdate?: NoteInvitationShareRelationship[] | undefined;
        membershipsToUnshare?: Types.UserID[] | undefined;
        invitationsToUnshare?: Types.IdentityID[] | undefined;
        constructor(args?: {
            noteGuid?: string | undefined;
            membershipsToUpdate?: NoteMemberShareRelationship[] | undefined;
            invitationsToUpdate?: NoteInvitationShareRelationship[] | undefined;
            membershipsToUnshare?: Types.UserID[] | undefined;
            invitationsToUnshare?: Types.IdentityID[] | undefined;
        });
    }
    class ManageNoteSharesResult {
        errors?: ManageNoteSharesError[] | undefined;
        constructor(args?: { errors?: ManageNoteSharesError[] | undefined });
    }
    class ManageNotebookSharesError {
        userIdentity?: Types.UserIdentity | undefined;
        userException?: Errors.EDAMUserException | undefined;
        notFoundException?: Errors.EDAMNotFoundException | undefined;
        constructor(args?: {
            userIdentity?: Types.UserIdentity | undefined;
            userException?: Errors.EDAMUserException | undefined;
            notFoundException?: Errors.EDAMNotFoundException | undefined;
        });
    }
    class ManageNotebookSharesParameters {
        notebookGuid?: string | undefined;
        inviteMessage?: string | undefined;
        membershipsToUpdate?: MemberShareRelationship[] | undefined;
        invitationsToCreateOrUpdate?: InvitationShareRelationship[] | undefined;
        unshares?: Types.UserIdentity[] | undefined;
        constructor(args?: {
            notebookGuid?: string | undefined;
            inviteMessage?: string | undefined;
            membershipsToUpdate?: MemberShareRelationship[] | undefined;
            invitationsToCreateOrUpdate?: InvitationShareRelationship[] | undefined;
            unshares?: Types.UserIdentity[] | undefined;
        });
    }
    class ManageNotebookSharesResult {
        errors?: ManageNotebookSharesError[] | undefined;
        constructor(args?: { errors?: ManageNotebookSharesError[] | undefined });
    }
    class MemberShareRelationship {
        displayName?: string | undefined;
        recipientUserId?: Types.UserID | undefined;
        privilege?: Types.SharedNotePrivilegeLevel | undefined;
        restrictions?: NoteShareRelationshipRestrictions | undefined;
        sharerUserId?: Types.UserID | undefined;
        constructor(args?: {
            displayName?: string | undefined;
            recipientUserId?: Types.UserID | undefined;
            privilege?: Types.SharedNotePrivilegeLevel | undefined;
            restrictions?: NoteShareRelationshipRestrictions | undefined;
            sharerUserId?: Types.UserID | undefined;
        });
    }
    class NoteCollectionCounts {
        notebookCounts?: Record<Types.Guid, number> | undefined;
        tagCounts?: Record<Types.Guid, number> | undefined;
        trashCount?: number | undefined;
        constructor(args?: {
            notebookCounts?: Record<Types.Guid, number> | undefined;
            tagCounts?: Record<Types.Guid, number> | undefined;
            trashCount?: number | undefined;
        });
    }
    class NoteEmailParameters {
        guid?: string | undefined;
        note?: Types.Note | undefined;
        toAddresses?: string[] | undefined;
        ccAddresses?: string[] | undefined;
        subject?: string | undefined;
        message?: string | undefined;
        constructor(args?: {
            guid?: string | undefined;
            note?: Types.Note | undefined;
            toAddresses?: string[] | undefined;
            ccAddresses?: string[] | undefined;
            subject?: string | undefined;
            message?: string | undefined;
        });
    }
    class NoteFilter {
        order: number;
        ascending: boolean;
        words: string;
        notebookGuid: Types.Guid;
        tagGuids: Types.Guid[];
        timeZone: string;
        inactive: boolean;
        emphasized: string;
        includeAllReadableNotebooks: boolean;
        constructor(args?: {
            order?: number | undefined;
            ascending?: boolean | undefined;
            words?: string | undefined;
            notebookGuid?: string | undefined;
            tagGuids?: string[] | undefined;
            timeZone?: string | undefined;
            inactive?: boolean | undefined;
            emphasized?: string | undefined;
        });
    }
    class NoteInvitationShareRelationship {
        displayName?: string | undefined;
        recipientIdentityId?: Types.IdentityID | undefined;
        privilege?: Types.SharedNotePrivilegeLevel | undefined;
        sharerUserId?: Types.UserID | undefined;
        constructor(args?: {
            displayName?: string | undefined;
            recipientIdentityId?: Types.IdentityID | undefined;
            privilege?: Types.SharedNotePrivilegeLevel | undefined;
            sharerUserId?: Types.UserID | undefined;
        });
    }
    class NoteList {
        startIndex?: number | undefined;
        totalNotes?: number | undefined;
        notes?: Types.Note[] | undefined;
        stoppedWords?: string[] | undefined;
        searchedWords?: string[] | undefined;
        updateCount?: number | undefined;
        constructor(args?: {
            startIndex?: number | undefined;
            totalNotes?: number | undefined;
            notes?: Types.Note[] | undefined;
            stoppedWords?: string[] | undefined;
            searchedWords?: string[] | undefined;
            updateCount?: number | undefined;
        });
    }
    class NoteMemberShareRelationship {
        displayName?: string | undefined;
        recipientUserId?: Types.UserID | undefined;
        privilege?: Types.SharedNotePrivilegeLevel | undefined;
        restrictions?: NoteShareRelationshipRestrictions | undefined;
        sharerUserId?: Types.UserID | undefined;
        constructor(args?: {
            displayName?: string | undefined;
            recipientUserId?: Types.UserID | undefined;
            privilege?: Types.SharedNotePrivilegeLevel | undefined;
            restrictions?: NoteShareRelationshipRestrictions | undefined;
            sharerUserId?: Types.UserID | undefined;
        });
    }
    class NoteMetadata {
        guid?: Types.Guid | undefined;
        title?: string | undefined;
        contentLength?: number | undefined;
        created?: Types.Timestamp | undefined;
        updated?: Types.Timestamp | undefined;
        deleted?: Types.Timestamp | undefined;
        updateSequenceNum?: number | undefined;
        notebookGuid?: string | undefined;
        tagGuids?: Types.Guid[] | undefined;
        attributes?: Types.NoteAttributes | undefined;
        largestResourceMime?: string | undefined;
        largestResourceSize?: number | undefined;
        constructor(args?: {
            guid?: Types.Guid | undefined;
            title?: string | undefined;
            contentLength?: number | undefined;
            created?: Types.Timestamp | undefined;
            updated?: Types.Timestamp | undefined;
            deleted?: Types.Timestamp | undefined;
            updateSequenceNum?: number | undefined;
            notebookGuid?: string | undefined;
            tagGuids?: Types.Guid[] | undefined;
            attributes?: Types.NoteAttributes | undefined;
            largestResourceMime?: string | undefined;
            largestResourceSize?: number | undefined;
        });
    }
    class NoteResultSpec {
        includeContent?: boolean | undefined;
        includeResourcesData?: boolean | undefined;
        includeResourcesRecognition?: boolean | undefined;
        includeResourcesAlternateData?: boolean | undefined;
        includeSharedNotes?: boolean | undefined;
        includeNoteAppDataValues?: boolean | undefined;
        includeResourceAppDataValues?: boolean | undefined;
        includeAccountLimits?: boolean | undefined;
        constructor(args?: {
            includeContent?: boolean | undefined;
            includeResourcesData?: boolean | undefined;
            includeResourcesRecognition?: boolean | undefined;
            includeResourcesAlternateData?: boolean | undefined;
            includeSharedNotes?: boolean | undefined;
            includeNoteAppDataValues?: boolean | undefined;
            includeResourceAppDataValues?: boolean | undefined;
            includeAccountLimits?: boolean | undefined;
        });
    }
    class NoteShareRelationshipRestrictions {
        noSetReadNote?: boolean | undefined;
        noSetModifyNote?: boolean | undefined;
        noSetFullAccess?: boolean | undefined;
        constructor(
            args?: {
                noSetReadNote?: boolean | undefined;
                noSetModifyNote?: boolean | undefined;
                noSetFullAccess?: boolean | undefined;
            },
        );
    }
    class NoteShareRelationships {
        invitations?: NoteInvitationShareRelationship[] | undefined;
        memberships?: NoteMemberShareRelationship[] | undefined;
        invitationRestrictions?: NoteShareRelationshipRestrictions | undefined;
        constructor(args?: {
            invitations?: NoteInvitationShareRelationship[] | undefined;
            memberships?: NoteMemberShareRelationship[] | undefined;
            invitationRestrictions?: NoteShareRelationshipRestrictions | undefined;
        });
    }
    class NoteVersionId {
        updateSequenceNum?: number | undefined;
        updated?: Types.Timestamp | undefined;
        saved?: Types.Timestamp | undefined;
        title?: string | undefined;
        lastEditorId?: Types.UserID | undefined;
        constructor(args?: {
            updateSequenceNum?: number | undefined;
            updated?: Types.Timestamp | undefined;
            saved?: Types.Timestamp | undefined;
            title?: string | undefined;
            lastEditorId?: Types.UserID | undefined;
        });
    }
    class NotebookShareTemplate {
        notebookGuid?: Types.Guid | undefined;
        recipientThreadId?: Types.MessageThreadID | undefined;
        recipientContacts?: Types.Contact[] | undefined;
        privilege?: Types.SharedNotebookPrivilegeLevel | undefined;
        constructor(args?: {
            notebookGuid?: Types.Guid | undefined;
            recipientThreadId?: Types.MessageThreadID | undefined;
            recipientContacts?: Types.Contact[] | undefined;
            privilege?: Types.SharedNotebookPrivilegeLevel | undefined;
        });
    }
    class NotesMetadataList {
        startIndex?: number | undefined;
        totalNotes?: number | undefined;
        notes?: NoteMetadata[] | undefined;
        stoppedWords?: string[] | undefined;
        searchedWords?: string[] | undefined;
        updateCount?: number | undefined;
        constructor(args?: {
            startIndex?: number | undefined;
            totalNotes?: number | undefined;
            notes?: NoteMetadata[] | undefined;
            stoppedWords?: string[] | undefined;
            searchedWords?: string[] | undefined;
            updateCount?: number | undefined;
        });
    }
    class NotesMetadataResultSpec {
        includeTitle?: boolean | undefined;
        includeContentLength?: boolean | undefined;
        includeCreated?: boolean | undefined;
        includeUpdated?: boolean | undefined;
        includeDeleted?: boolean | undefined;
        includeUpdateSequenceNum?: boolean | undefined;
        includeNotebookGuid?: boolean | undefined;
        includeTagGuids?: boolean | undefined;
        includeAttributes?: boolean | undefined;
        includeLargestResourceMime?: boolean | undefined;
        includeLargestResourceSize?: boolean | undefined;
        constructor(args?: {
            includeTitle?: boolean | undefined;
            includeContentLength?: boolean | undefined;
            includeCreated?: boolean | undefined;
            includeUpdated?: boolean | undefined;
            includeDeleted?: boolean | undefined;
            includeUpdateSequenceNum?: boolean | undefined;
            includeNotebookGuid?: boolean | undefined;
            includeTagGuids?: boolean | undefined;
            includeAttributes?: boolean | undefined;
            includeLargestResourceMime?: boolean | undefined;
            includeLargestResourceSize?: boolean | undefined;
        });
    }
    class RelatedQuery {
        noteGuid?: string | undefined;
        plainText?: string | undefined;
        filter?: NoteFilter | undefined;
        referenceUri?: string | undefined;
        context?: string | undefined;
        cacheKey?: string | undefined;
        constructor(args?: {
            noteGuid?: string | undefined;
            plainText?: string | undefined;
            filter?: NoteFilter | undefined;
            referenceUri?: string | undefined;
            context?: string | undefined;
            cacheKey?: string | undefined;
        });
    }
    class RelatedResult {
        notes?: Types.Note[] | undefined;
        notebooks?: Types.Notebook[] | undefined;
        tags?: Types.Tag[] | undefined;
        containingNotebooks?: Types.NotebookDescriptor[] | undefined;
        debugInfo?: string | undefined;
        experts?: Types.UserProfile[] | undefined;
        relatedContent?: Types.RelatedContent[] | undefined;
        cacheKey?: string | undefined;
        cacheExpires?: number | undefined;
        constructor(args?: {
            notes?: Types.Note[] | undefined;
            notebooks?: Types.Notebook[] | undefined;
            tags?: Types.Tag[] | undefined;
            containingNotebooks?: Types.NotebookDescriptor[] | undefined;
            debugInfo?: string | undefined;
            experts?: Types.UserProfile[] | undefined;
            relatedContent?: Types.RelatedContent[] | undefined;
            cacheKey?: string | undefined;
            cacheExpires?: number | undefined;
        });
    }
    class RelatedResultSpec {
        maxNotes?: number | undefined;
        maxNotebooks?: number | undefined;
        maxTags?: number | undefined;
        writableNotebooksOnly?: boolean | undefined;
        includeContainingNotebooks?: boolean | undefined;
        includeDebugInfo?: boolean | undefined;
        maxExperts?: number | undefined;
        maxRelatedContent?: number | undefined;
        relatedContentTypes?: Set<Types.RelatedContentType> | undefined;
        constructor(args?: {
            maxNotes?: number | undefined;
            maxNotebooks?: number | undefined;
            maxTags?: number | undefined;
            writableNotebooksOnly?: boolean | undefined;
            includeContainingNotebooks?: boolean | undefined;
            includeDebugInfo?: boolean | undefined;
            maxExperts?: number | undefined;
            maxRelatedContent?: number | undefined;
            relatedContentTypes?: Set<Types.RelatedContentType> | undefined;
        });
    }
    enum ShareRelationshipPrivilegeLevel {
        READ_NOTEBOOK = 0,
        READ_NOTEBOOK_PLUS_ACTIVITY = 10,
        MODIFY_NOTEBOOK_PLUS_ACTIVITY = 20,
        FULL_ACCESS = 30,
    }
    class ShareRelationshipRestrictions {
        noSetReadOnly?: boolean | undefined;
        noSetReadPlusActivity?: boolean | undefined;
        noSetModify?: boolean | undefined;
        noSetFullAccess?: boolean | undefined;
        constructor(args?: {
            noSetReadOnly?: boolean | undefined;
            noSetReadPlusActivity?: boolean | undefined;
            noSetModify?: boolean | undefined;
            noSetFullAccess?: boolean | undefined;
        });
    }
    class ShareRelationships {
        invitations?: InvitationShareRelationship[] | undefined;
        memberships?: MemberShareRelationship[] | undefined;
        invitationRestrictions?: ShareRelationshipRestrictions | undefined;
        constructor(args?: {
            invitations?: InvitationShareRelationship[] | undefined;
            memberships?: MemberShareRelationship[] | undefined;
            invitationRestrictions?: ShareRelationshipRestrictions | undefined;
        });
    }
    class SharedNoteTemplate {
        noteGuid?: Types.Guid | undefined;
        recipientThreadId?: Types.MessageThreadID | undefined;
        recipientContacts?: Types.Contact[] | undefined;
        privilege?: Types.SharedNotePrivilegeLevel | undefined;
        constructor(args?: {
            noteGuid?: Types.Guid | undefined;
            recipientThreadId?: Types.MessageThreadID | undefined;
            recipientContacts?: Types.Contact[] | undefined;
            privilege?: Types.SharedNotePrivilegeLevel | undefined;
        });
    }
    class SyncChunk {
        currentTime?: Types.Timestamp | undefined;
        chunkHighUSN?: number | undefined;
        updateCount?: number | undefined;
        notes?: Types.Note[] | undefined;
        notebooks?: Types.Notebook[] | undefined;
        tags?: Types.Tag[] | undefined;
        searches?: Types.SavedSearch[] | undefined;
        resources?: Types.Resource[] | undefined;
        expungedNotes?: Types.Guid[] | undefined;
        expungedNotebooks?: Types.Guid[] | undefined;
        expungedTags?: Types.Guid[] | undefined;
        expungedSearches?: Types.Guid[] | undefined;
        linkedNotebooks?: Types.LinkedNotebook[] | undefined;
        expungedLinkedNotebooks?: Types.Guid[] | undefined;
        constructor(args?: {
            currentTime?: Types.Timestamp | undefined;
            chunkHighUSN?: number | undefined;
            updateCount?: number | undefined;
            notes?: Types.Note[] | undefined;
            notebooks?: Types.Notebook[] | undefined;
            tags?: Types.Tag[] | undefined;
            searches?: Types.SavedSearch[] | undefined;
            resources?: Types.Resource[] | undefined;
            expungedNotes?: Types.Guid[] | undefined;
            expungedNotebooks?: Types.Guid[] | undefined;
            expungedTags?: Types.Guid[] | undefined;
            expungedSearches?: Types.Guid[] | undefined;
            linkedNotebooks?: Types.LinkedNotebook[] | undefined;
            expungedLinkedNotebooks?: Types.Guid[] | undefined;
        });
    }
    class SyncChunkFilter {
        includeNotes?: boolean | undefined;
        includeNoteResources?: boolean | undefined;
        includeNoteAttributes?: boolean | undefined;
        includeNotebooks?: boolean | undefined;
        includeTags?: boolean | undefined;
        includeSearches?: boolean | undefined;
        includeResources?: boolean | undefined;
        includeLinkedNotebooks?: boolean | undefined;
        includeExpunged?: boolean | undefined;
        includeNoteApplicationDataFullMap?: boolean | undefined;
        includeResourceApplicationDataFullMap?: boolean | undefined;
        includeNoteResourceApplicationDataFullMap?: boolean | undefined;
        includeSharedNotes?: boolean | undefined;
        omitSharedNotebooks?: boolean | undefined;
        requireNoteContentClass?: string | undefined;
        notebookGuids?: Set<string> | undefined;
        constructor(args?: {
            includeNotes?: boolean | undefined;
            includeNoteResources?: boolean | undefined;
            includeNoteAttributes?: boolean | undefined;
            includeNotebooks?: boolean | undefined;
            includeTags?: boolean | undefined;
            includeSearches?: boolean | undefined;
            includeResources?: boolean | undefined;
            includeLinkedNotebooks?: boolean | undefined;
            includeExpunged?: boolean | undefined;
            includeNoteApplicationDataFullMap?: boolean | undefined;
            includeResourceApplicationDataFullMap?: boolean | undefined;
            includeNoteResourceApplicationDataFullMap?: boolean | undefined;
            includeSharedNotes?: boolean | undefined;
            omitSharedNotebooks?: boolean | undefined;
            requireNoteContentClass?: string | undefined;
            notebookGuids?: Set<string> | undefined;
        });
    }
    class SyncState {
        currentTime?: Types.Timestamp | undefined;
        fullSyncBefore?: Types.Timestamp | undefined;
        updateCount?: number | undefined;
        uploaded?: number | undefined;
        userLastUpdated?: Types.Timestamp | undefined;
        userMaxMessageEventId?: Types.MessageEventID | undefined;
        constructor(args?: {
            currentTime?: Types.Timestamp | undefined;
            fullSyncBefore?: Types.Timestamp | undefined;
            updateCount?: number | undefined;
            uploaded?: number | undefined;
            userLastUpdated?: Types.Timestamp | undefined;
            userMaxMessageEventId?: Types.MessageEventID | undefined;
        });
    }
    class UpdateNoteIfUsnMatchesResult {
        note?: Types.Note | undefined;
        updated?: boolean | undefined;
        constructor(args?: { note?: Types.Note | undefined; updated?: boolean | undefined });
    }
    enum UserSetting {
        RECEIVE_REMINDER_EMAIL = 1,
        TIMEZONE = 2,
    }
}

/* UserStore: Data types and Constants */
export namespace UserStore {
    const EDAM_VERSION_MAJOR: number;
    const EDAM_VERSION_MINOR: number;
    class AuthenticationResult {
        currentTime?: Types.Timestamp | undefined;
        authenticationToken?: string | undefined;
        expiration?: Types.Timestamp | undefined;
        user?: Types.User | undefined;
        publicUserInfo?: PublicUserInfo | undefined;
        noteStoreUrl?: string | undefined;
        webApiUrlPrefix?: string | undefined;
        secondFactorRequired?: boolean | undefined;
        secondFactorDeliveryHint?: string | undefined;
        urls?: UserUrls | undefined;
        constructor(args?: {
            currentTime?: Types.Timestamp | undefined;
            authenticationToken?: string | undefined;
            expiration?: Types.Timestamp | undefined;
            user?: Types.User | undefined;
            publicUserInfo?: PublicUserInfo | undefined;
            noteStoreUrl?: string | undefined;
            webApiUrlPrefix?: string | undefined;
            secondFactorRequired?: boolean | undefined;
            secondFactorDeliveryHint?: string | undefined;
            urls?: UserUrls | undefined;
        });
    }
    class BootstrapInfo {
        profiles?: BootstrapProfile[] | undefined;
        constructor(args?: { profiles?: BootstrapProfile[] | undefined });
    }
    class BootstrapProfile {
        name?: string | undefined;
        settings?: BootstrapSettings | undefined;
        constructor(args?: { name?: string | undefined; settings?: BootstrapSettings | undefined });
    }
    class BootstrapSettings {
        serviceHost?: string | undefined;
        marketingUrl?: string | undefined;
        supportUrl?: string | undefined;
        accountEmailDomain?: string | undefined;
        enableFacebookSharing?: boolean | undefined;
        enableGiftSubscriptions?: boolean | undefined;
        enableSupportTickets?: boolean | undefined;
        enableSharedNotebooks?: boolean | undefined;
        enableSingleNoteSharing?: boolean | undefined;
        enableSponsoredAccounts?: boolean | undefined;
        enableTwitterSharing?: boolean | undefined;
        enableLinkedInSharing?: boolean | undefined;
        enablePublicNotebooks?: boolean | undefined;
        enableGoogle?: boolean | undefined;
        constructor(args?: {
            serviceHost?: string | undefined;
            marketingUrl?: string | undefined;
            supportUrl?: string | undefined;
            accountEmailDomain?: string | undefined;
            enableFacebookSharing?: boolean | undefined;
            enableGiftSubscriptions?: boolean | undefined;
            enableSupportTickets?: boolean | undefined;
            enableSharedNotebooks?: boolean | undefined;
            enableSingleNoteSharing?: boolean | undefined;
            enableSponsoredAccounts?: boolean | undefined;
            enableTwitterSharing?: boolean | undefined;
            enableLinkedInSharing?: boolean | undefined;
            enablePublicNotebooks?: boolean | undefined;
            enableGoogle?: boolean | undefined;
        });
    }
    class PublicUserInfo {
        userId?: Types.UserID | undefined;
        serviceLevel?: Types.ServiceLevel | undefined;
        username?: string | undefined;
        noteStoreUrl?: string | undefined;
        webApiUrlPrefix?: string | undefined;
        constructor(args?: {
            userId?: Types.UserID | undefined;
            serviceLevel?: Types.ServiceLevel | undefined;
            username?: string | undefined;
            noteStoreUrl?: string | undefined;
            webApiUrlPrefix?: string | undefined;
        });
    }
    class UserUrls {
        noteStoreUrl?: string | undefined;
        webApiUrlPrefix?: string | undefined;
        userStoreUrl?: string | undefined;
        utilityUrl?: string | undefined;
        messageStoreUrl?: string | undefined;
        userWebSocketUrl?: string | undefined;
        constructor(args?: {
            noteStoreUrl?: string | undefined;
            webApiUrlPrefix?: string | undefined;
            userStoreUrl?: string | undefined;
            utilityUrl?: string | undefined;
            messageStoreUrl?: string | undefined;
            userWebSocketUrl?: string | undefined;
        });
    }
}

/* Types: Data types and Constants */
export namespace Types {
    const CLASSIFICATION_RECIPE_USER_NON_RECIPE: string;
    const CLASSIFICATION_RECIPE_USER_RECIPE: string;
    const CLASSIFICATION_RECIPE_SERVICE_RECIPE: string;
    const EDAM_NOTE_SOURCE_WEB_CLIP: string;
    const EDAM_NOTE_SOURCE_WEB_CLIP_SIMPLIFIED: string;
    const EDAM_NOTE_SOURCE_MAIL_CLIP: string;
    const EDAM_NOTE_SOURCE_MAIL_SMTP_GATEWAY: string;
    class AccountLimits {
        userMailLimitDaily?: number | undefined;
        noteSizeMax?: number | undefined;
        resourceSizeMax?: number | undefined;
        userLinkedNotebookMax?: number | undefined;
        uploadLimit?: number | undefined;
        userNoteCountMax?: number | undefined;
        userNotebookCountMax?: number | undefined;
        userTagCountMax?: number | undefined;
        noteTagCountMax?: number | undefined;
        userSavedSearchesMax?: number | undefined;
        noteResourceCountMax?: number | undefined;
        constructor(args?: {
            userMailLimitDaily?: number | undefined;
            noteSizeMax?: number | undefined;
            resourceSizeMax?: number | undefined;
            userLinkedNotebookMax?: number | undefined;
            uploadLimit?: number | undefined;
            userNoteCountMax?: number | undefined;
            userNotebookCountMax?: number | undefined;
            userTagCountMax?: number | undefined;
            noteTagCountMax?: number | undefined;
            userSavedSearchesMax?: number | undefined;
            noteResourceCountMax?: number | undefined;
        });
    }
    class Accounting {
        uploadLimitEnd?: Timestamp | undefined;
        uploadLimitNextMonth?: number | undefined;
        premiumServiceStatus?: PremiumOrderStatus | undefined;
        premiumOrderNumber?: string | undefined;
        premiumCommerceService?: string | undefined;
        premiumServiceStart?: Timestamp | undefined;
        premiumServiceSKU?: string | undefined;
        lastSuccessfulCharge?: Timestamp | undefined;
        lastFailedCharge?: Timestamp | undefined;
        lastFailedChargeReason?: string | undefined;
        nextPaymentDue?: Timestamp | undefined;
        premiumLockUntil?: Timestamp | undefined;
        updated?: Timestamp | undefined;
        premiumSubscriptionNumber?: string | undefined;
        lastRequestedCharge?: Timestamp | undefined;
        currency?: string | undefined;
        unitPrice?: number | undefined;
        businessId?: number | undefined;
        businessName?: string | undefined;
        businessRole?: BusinessUserRole | undefined;
        unitDiscount?: number | undefined;
        nextChargeDate?: Timestamp | undefined;
        availablePoints?: number | undefined;
        constructor(args?: {
            uploadLimitEnd?: Timestamp | undefined;
            uploadLimitNextMonth?: number | undefined;
            premiumServiceStatus?: PremiumOrderStatus | undefined;
            premiumOrderNumber?: string | undefined;
            premiumCommerceService?: string | undefined;
            premiumServiceStart?: Timestamp | undefined;
            premiumServiceSKU?: string | undefined;
            lastSuccessfulCharge?: Timestamp | undefined;
            lastFailedCharge?: Timestamp | undefined;
            lastFailedChargeReason?: string | undefined;
            nextPaymentDue?: Timestamp | undefined;
            premiumLockUntil?: Timestamp | undefined;
            updated?: Timestamp | undefined;
            premiumSubscriptionNumber?: string | undefined;
            lastRequestedCharge?: Timestamp | undefined;
            currency?: string | undefined;
            unitPrice?: number | undefined;
            businessId?: number | undefined;
            businessName?: string | undefined;
            businessRole?: BusinessUserRole | undefined;
            unitDiscount?: number | undefined;
            nextChargeDate?: Timestamp | undefined;
            availablePoints?: number | undefined;
        });
    }
    class Ad {
        id?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        advertiserName?: string | undefined;
        imageUrl?: string | undefined;
        destinationUrl?: string | undefined;
        displaySeconds?: number | undefined;
        score?: number | undefined;
        image?: string | undefined;
        imageMime?: string | undefined;
        html?: string | undefined;
        displayFrequency?: number | undefined;
        openInTrunk?: boolean | undefined;
        constructor(args?: {
            id?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            advertiserName?: string | undefined;
            imageUrl?: string | undefined;
            destinationUrl?: string | undefined;
            displaySeconds?: number | undefined;
            score?: number | undefined;
            image?: string | undefined;
            imageMime?: string | undefined;
            html?: string | undefined;
            displayFrequency?: number | undefined;
            openInTrunk?: boolean | undefined;
        });
    }
    class BusinessInvitation {
        businessId?: number | undefined;
        email?: string | undefined;
        role?: BusinessUserRole | undefined;
        status?: BusinessInvitationStatus | undefined;
        requesterId?: UserID | undefined;
        fromWorkChat?: boolean | undefined;
        created?: Timestamp | undefined;
        constructor(args?: {
            businessId?: number | undefined;
            email?: string | undefined;
            role?: BusinessUserRole | undefined;
            status?: BusinessInvitationStatus | undefined;
            requesterId?: UserID | undefined;
            fromWorkChat?: boolean | undefined;
            created?: Timestamp | undefined;
        });
    }
    enum BusinessInvitationStatus {
        APPROVED = 0,
        REQUESTED = 1,
        REDEEMED = 2,
    }
    class BusinessNotebook {
        notebookDescription?: string | undefined;
        privilege?: SharedNotebookPrivilegeLevel | undefined;
        recommended?: boolean | undefined;
        constructor(
            args?: {
                notebookDescription?: string | undefined;
                privilege?: SharedNotebookPrivilegeLevel | undefined;
                recommended?: boolean | undefined;
            },
        );
    }
    class BusinessUserAttributes {
        title?: string | undefined;
        location?: string | undefined;
        department?: string | undefined;
        mobilePhone?: string | undefined;
        linkedInProfileUrl?: string | undefined;
        workPhone?: string | undefined;
        companyStartDate?: Timestamp | undefined;
        constructor(args?: {
            title?: string | undefined;
            location?: string | undefined;
            department?: string | undefined;
            mobilePhone?: string | undefined;
            linkedInProfileUrl?: string | undefined;
            workPhone?: string | undefined;
            companyStartDate?: Timestamp | undefined;
        });
    }
    class BusinessUserInfo {
        businessId?: number | undefined;
        businessName?: string | undefined;
        role?: BusinessUserRole | undefined;
        email?: string | undefined;
        updated?: Timestamp | undefined;
        constructor(args?: {
            businessId?: number | undefined;
            businessName?: string | undefined;
            role?: BusinessUserRole | undefined;
            email?: string | undefined;
            updated?: Timestamp | undefined;
        });
    }
    enum BusinessUserRole {
        ADMIN = 1,
        NORMAL = 2,
    }
    class Contact {
        name?: string | undefined;
        id?: string | undefined;
        type?: ContactType | undefined;
        photoUrl?: string | undefined;
        photoLastUpdated?: Timestamp | undefined;
        messagingPermit?: string | undefined;
        messagingPermitExpires?: Timestamp | undefined;
        constructor(args?: {
            name?: string | undefined;
            id?: string | undefined;
            type?: ContactType | undefined;
            photoUrl?: string | undefined;
            photoLastUpdated?: Timestamp | undefined;
            messagingPermit?: string | undefined;
            messagingPermitExpires?: Timestamp | undefined;
        });
    }
    enum ContactType {
        EVERNOTE = 1,
        SMS = 2,
        FACEBOOK = 3,
        EMAIL = 4,
        TWITTER = 5,
        LINKEDIN = 6,
    }
    class Data {
        bodyHash?: string | undefined;
        size?: number | undefined;
        body?: string | undefined;
        constructor(args?: { bodyHash?: string | undefined; size?: number | undefined; body?: string | undefined });
    }
    type Guid = string;
    class Identity {
        id?: IdentityID | undefined;
        contact?: Contact | undefined;
        userId?: UserID | undefined;
        deactivated?: boolean | undefined;
        sameBusiness?: boolean | undefined;
        blocked?: boolean | undefined;
        userConnected?: boolean | undefined;
        eventId?: MessageEventID | undefined;
        constructor(args?: {
            id?: IdentityID | undefined;
            contact?: Contact | undefined;
            userId?: UserID | undefined;
            deactivated?: boolean | undefined;
            sameBusiness?: boolean | undefined;
            blocked?: boolean | undefined;
            userConnected?: boolean | undefined;
            eventId?: MessageEventID | undefined;
        });
    }
    type IdentityID = number;
    type InvalidationSequenceNumber = number;
    class LazyMap {
        keysOnly?: Set<string> | undefined;
        fullMap?: Map<string, string> | undefined;
        constructor(args?: { keysOnly?: Set<string> | undefined; fullMap?: Map<string, string> | undefined });
    }
    class LinkedNotebook {
        shareName?: string | undefined;
        username?: string | undefined;
        shardId?: string | undefined;
        shareKey?: string | undefined;
        uri?: string | undefined;
        guid?: Guid | undefined;
        updateSequenceNum?: number | undefined;
        noteStoreUrl?: string | undefined;
        webApiUrlPrefix?: string | undefined;
        stack?: string | undefined;
        businessId?: number | undefined;
        constructor(args?: {
            shareName?: string | undefined;
            username?: string | undefined;
            shardId?: string | undefined;
            shareKey?: string | undefined;
            uri?: string | undefined;
            guid?: Guid | undefined;
            updateSequenceNum?: number | undefined;
            noteStoreUrl?: string | undefined;
            webApiUrlPrefix?: string | undefined;
            stack?: string | undefined;
            businessId?: number | undefined;
        });
    }
    type MessageEventID = number;
    type MessageThreadID = number;
    class Note {
        guid?: Guid | undefined;
        title?: string | undefined;
        content?: string | undefined;
        contentHash?: string | undefined;
        contentLength?: number | undefined;
        created?: number | undefined;
        updated?: number | undefined;
        deleted?: number | undefined;
        active?: boolean | undefined;
        updateSequenceNum?: number | undefined;
        notebookGuid?: Guid | undefined;
        tagGuids?: string[] | undefined;
        resources?: Resource[] | undefined;
        attributes?: NoteAttributes | undefined;
        tagNames?: string[] | undefined;
        sharedNotes?: SharedNote[] | undefined;
        restrictions?: NoteRestrictions | undefined;
        limits?: NoteLimits | undefined;
        constructor(args?: {
            guid?: Guid | undefined;
            title?: string | undefined;
            content?: string | undefined;
            contentHash?: string | undefined;
            contentLength?: number | undefined;
            created?: number | undefined;
            updated?: number | undefined;
            deleted?: number | undefined;
            active?: boolean | undefined;
            updateSequenceNum?: number | undefined;
            notebookGuid?: Guid | undefined;
            tagGuids?: string[] | undefined;
            resources?: Resource[] | undefined;
            attributes?: NoteAttributes | undefined;
            tagNames?: string[] | undefined;
            sharedNotes?: SharedNote[] | undefined;
            restrictions?: NoteRestrictions | undefined;
            limits?: NoteLimits | undefined;
        });
    }
    class NoteAttributes {
        subjectDate?: Timestamp | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        author?: string | undefined;
        source?: string | undefined;
        sourceURL?: string | undefined;
        sourceApplication?: string | undefined;
        shareDate?: Timestamp | undefined;
        reminderOrder?: number | undefined;
        reminderDoneTime?: Timestamp | undefined;
        reminderTime?: Timestamp | undefined;
        placeName?: string | undefined;
        contentClass?: string | undefined;
        applicationData?: LazyMap | undefined;
        lastEditedBy?: string | undefined;
        classifications?: Map<string, string> | undefined;
        creatorId?: UserID | undefined;
        lastEditorId?: UserID | undefined;
        sharedWithBusiness?: boolean | undefined;
        conflictSourceNoteGuid?: Guid | undefined;
        noteTitleQuality?: number | undefined;
        constructor(args?: {
            subjectDate?: Timestamp | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            author?: string | undefined;
            source?: string | undefined;
            sourceURL?: string | undefined;
            sourceApplication?: string | undefined;
            shareDate?: Timestamp | undefined;
            reminderOrder?: number | undefined;
            reminderDoneTime?: Timestamp | undefined;
            reminderTime?: Timestamp | undefined;
            placeName?: string | undefined;
            contentClass?: string | undefined;
            applicationData?: LazyMap | undefined;
            lastEditedBy?: string | undefined;
            classifications?: Map<string, string> | undefined;
            creatorId?: UserID | undefined;
            lastEditorId?: UserID | undefined;
            sharedWithBusiness?: boolean | undefined;
            conflictSourceNoteGuid?: Guid | undefined;
            noteTitleQuality?: number | undefined;
        });
    }
    class NoteLimits {
        noteResourceCountMax?: number | undefined;
        uploadLimit?: number | undefined;
        resourceSizeMax?: number | undefined;
        noteSizeMax?: number | undefined;
        uploaded?: number | undefined;
        constructor(args?: {
            noteResourceCountMax?: number | undefined;
            uploadLimit?: number | undefined;
            resourceSizeMax?: number | undefined;
            noteSizeMax?: number | undefined;
            uploaded?: number | undefined;
        });
    }
    class NoteRestrictions {
        noUpdateTitle?: boolean | undefined;
        noUpdateContent?: boolean | undefined;
        noEmail?: boolean | undefined;
        noShare?: boolean | undefined;
        noSharePublicly?: boolean | undefined;
        constructor(args?: {
            noUpdateTitle?: boolean | undefined;
            noUpdateContent?: boolean | undefined;
            noEmail?: boolean | undefined;
            noShare?: boolean | undefined;
            noSharePublicly?: boolean | undefined;
        });
    }
    enum NoteSortOrder {
        CREATED = 1,
        UPDATED = 2,
        RELEVANCE = 3,
        UPDATE_SEQUENCE_NUMBER = 4,
        TITLE = 5,
    }
    class Notebook {
        guid?: Guid | undefined;
        name?: string | undefined;
        updateSequenceNum?: number | undefined;
        defaultNotebook?: boolean | undefined;
        serviceCreated?: number | undefined;
        serviceUpdated?: number | undefined;
        publishing?: Publishing | undefined;
        published?: boolean | undefined;
        stack?: string | undefined;
        sharedNotebookIds?: number[] | undefined;
        sharedNotebooks?: SharedNotebook[] | undefined;
        businessNotebook?: BusinessNotebook | undefined;
        contact?: User | undefined;
        restrictions?: NotebookRestrictions | undefined;
        recipientSettings?: NotebookRecipientSettings | undefined;
        constructor(args?: {
            guid?: Guid | undefined;
            name?: string | undefined;
            updateSequenceNum?: number | undefined;
            defaultNotebook?: boolean | undefined;
            serviceCreated?: number | undefined;
            serviceUpdated?: number | undefined;
            publishing?: Publishing | undefined;
            published?: boolean | undefined;
            stack?: string | undefined;
            sharedNotebookIds?: number[] | undefined;
            sharedNotebooks?: SharedNotebook[] | undefined;
            businessNotebook?: BusinessNotebook | undefined;
            contact?: User | undefined;
            restrictions?: NotebookRestrictions | undefined;
            recipientSettings?: NotebookRecipientSettings | undefined;
        });
    }
    class NotebookDescriptor {
        guid?: Guid | undefined;
        notebookDisplayName?: string | undefined;
        contactName?: string | undefined;
        hasSharedNotebook?: boolean | undefined;
        joinedUserCount?: number | undefined;
        constructor(args?: {
            guid?: Guid | undefined;
            notebookDisplayName?: string | undefined;
            contactName?: string | undefined;
            hasSharedNotebook?: boolean | undefined;
            joinedUserCount?: number | undefined;
        });
    }
    class NotebookRecipientSettings {
        reminderNotifyEmail?: boolean | undefined;
        reminderNotifyInApp?: boolean | undefined;
        inMyList?: boolean | undefined;
        stack?: string | undefined;
        constructor(
            args?: {
                reminderNotifyEmail?: boolean | undefined;
                reminderNotifyInApp?: boolean | undefined;
                inMyList?: boolean | undefined;
                stack?: string | undefined;
            },
        );
    }
    class NotebookRestrictions {
        noReadNotes?: boolean | undefined;
        noCreateNotes?: boolean | undefined;
        noUpdateNotes?: boolean | undefined;
        noExpungeNotes?: boolean | undefined;
        noShareNotes?: boolean | undefined;
        noEmailNotes?: boolean | undefined;
        noSendMessageToRecipients?: boolean | undefined;
        noUpdateNotebook?: boolean | undefined;
        noExpungeNotebook?: boolean | undefined;
        noSetDefaultNotebook?: boolean | undefined;
        noSetNotebookStack?: boolean | undefined;
        noPublishToPublic?: boolean | undefined;
        noPublishToBusinessLibrary?: boolean | undefined;
        noCreateTags?: boolean | undefined;
        noUpdateTags?: boolean | undefined;
        noExpungeTags?: boolean | undefined;
        noSetParentTag?: boolean | undefined;
        noCreateSharedNotebooks?: boolean | undefined;
        updateWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions | undefined;
        expungeWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions | undefined;
        noShareNotesWithBusiness?: boolean | undefined;
        noRenameNotebook?: boolean | undefined;
        constructor(args?: {
            noReadNotes?: boolean | undefined;
            noCreateNotes?: boolean | undefined;
            noUpdateNotes?: boolean | undefined;
            noExpungeNotes?: boolean | undefined;
            noShareNotes?: boolean | undefined;
            noEmailNotes?: boolean | undefined;
            noSendMessageToRecipients?: boolean | undefined;
            noUpdateNotebook?: boolean | undefined;
            noExpungeNotebook?: boolean | undefined;
            noSetDefaultNotebook?: boolean | undefined;
            noSetNotebookStack?: boolean | undefined;
            noPublishToPublic?: boolean | undefined;
            noPublishToBusinessLibrary?: boolean | undefined;
            noCreateTags?: boolean | undefined;
            noUpdateTags?: boolean | undefined;
            noExpungeTags?: boolean | undefined;
            noSetParentTag?: boolean | undefined;
            noCreateSharedNotebooks?: boolean | undefined;
            updateWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions | undefined;
            expungeWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions | undefined;
            noShareNotesWithBusiness?: boolean | undefined;
            noRenameNotebook?: boolean | undefined;
        });
    }
    class PremiumInfo {
        currentTime?: Timestamp | undefined;
        premium?: boolean | undefined;
        premiumRecurring?: boolean | undefined;
        premiumExpirationDate?: Timestamp | undefined;
        premiumExtendable?: boolean | undefined;
        premiumPending?: boolean | undefined;
        premiumCancellationPending?: boolean | undefined;
        canPurchaseUploadAllowance?: boolean | undefined;
        premiumUpgradable?: boolean | undefined;
        constructor(args?: {
            currentTime?: Timestamp | undefined;
            premium?: boolean | undefined;
            premiumRecurring?: boolean | undefined;
            premiumExpirationDate?: Timestamp | undefined;
            premiumExtendable?: boolean | undefined;
            premiumPending?: boolean | undefined;
            premiumCancellationPending?: boolean | undefined;
            canPurchaseUploadAllowance?: boolean | undefined;
            premiumUpgradable?: boolean | undefined;
        });
    }
    enum PremiumOrderStatus {
        NONE = 0,
        PENDING = 1,
        ACTIVE = 2,
        FAILED = 3,
        CANCELLATION_PENDING = 4,
        CANCELED = 5,
    }
    enum PrivilegeLevel {
        NORMAL = 1,
        PREMIUM = 3,
        VIP = 5,
        MANAGER = 7,
        SUPPORT = 8,
        ADMIN = 9,
    }
    class Publishing {
        uri?: string | undefined;
        order?: NoteSortOrder | undefined;
        ascending?: boolean | undefined;
        publicDescription?: string | undefined;
        constructor(
            args?: {
                uri?: string | undefined;
                order?: NoteSortOrder | undefined;
                ascending?: boolean | undefined;
                publicDescription?: string | undefined;
            },
        );
    }
    enum QueryFormat {
        "USER" = 1,
        "SEXP" = 2,
    }
    class RelatedContent {
        contentId?: string | undefined;
        title?: string | undefined;
        url?: string | undefined;
        sourceId?: string | undefined;
        sourceUrl?: string | undefined;
        sourceFaviconUrl?: string | undefined;
        sourceName?: string | undefined;
        date?: Timestamp | undefined;
        teaser?: string | undefined;
        thumbnails?: RelatedContentImage[] | undefined;
        contentType?: RelatedContentType | undefined;
        accessType?: RelatedContentAccess | undefined;
        visibleUrl?: string | undefined;
        clipUrl?: string | undefined;
        contact?: Contact | undefined;
        authors?: string[] | undefined;
        constructor(args?: {
            contentId?: string | undefined;
            title?: string | undefined;
            url?: string | undefined;
            sourceId?: string | undefined;
            sourceUrl?: string | undefined;
            sourceFaviconUrl?: string | undefined;
            sourceName?: string | undefined;
            date?: Timestamp | undefined;
            teaser?: string | undefined;
            thumbnails?: RelatedContentImage[] | undefined;
            contentType?: RelatedContentType | undefined;
            accessType?: RelatedContentAccess | undefined;
            visibleUrl?: string | undefined;
            clipUrl?: string | undefined;
            contact?: Contact | undefined;
            authors?: string[] | undefined;
        });
    }
    enum RelatedContentAccess {
        NOT_ACCESSIBLE = 0,
        DIRECT_LINK_ACCESS_OK = 1,
        DIRECT_LINK_LOGIN_REQUIRED = 2,
        DIRECT_LINK_EMBEDDED_VIEW = 3,
    }
    class RelatedContentImage {
        url?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        pixelRatio?: number | undefined;
        fileSize?: number | undefined;
        constructor(
            args?: {
                url?: string | undefined;
                width?: number | undefined;
                height?: number | undefined;
                pixelRatio?: number | undefined;
                fileSize?: number | undefined;
            },
        );
    }
    enum RelatedContentType {
        NEWS_ARTICLE = 1,
        PROFILE_PERSON = 2,
        PROFILE_ORGANIZATION = 3,
        REFERENCE_MATERIAL = 4,
    }
    enum ReminderEmailConfig {
        DO_NOT_SEND = 1,
        SEND_DAILY_EMAIL = 2,
    }
    class Resource {
        guid?: Guid | undefined;
        noteguid?: Guid | undefined;
        data?: Data | undefined;
        mime?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        duration?: number | undefined;
        active?: boolean | undefined;
        recognition?: Data | undefined;
        attributes?: ResourceAttributes | undefined;
        updateSequenceNum?: number | undefined;
        alternateData?: Data | undefined;
        constructor(args?: {
            guid?: Guid | undefined;
            noteguid?: Guid | undefined;
            data?: Data | undefined;
            mime?: string | undefined;
            width?: number | undefined;
            height?: number | undefined;
            duration?: number | undefined;
            active?: boolean | undefined;
            recognition?: Data | undefined;
            attributes?: ResourceAttributes | undefined;
            updateSequenceNum?: number | undefined;
            alternateData?: Data | undefined;
        });
    }
    class ResourceAttributes {
        sourceURL?: string | undefined;
        timestamp?: number | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        cameraMake?: string | undefined;
        cameraModel?: string | undefined;
        clientWillIndex?: boolean | undefined;
        recoType?: string | undefined;
        fileName?: string | undefined;
        attachment?: boolean | undefined;
        applicationData?: LazyMap | undefined;
        constructor(args?: {
            sourceURL?: string | undefined;
            timestamp?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            cameraMake?: string | undefined;
            cameraModel?: string | undefined;
            clientWillIndex?: boolean | undefined;
            recoType?: string | undefined;
            fileName?: string | undefined;
            attachment?: boolean | undefined;
            applicationData?: LazyMap | undefined;
        });
    }
    class SavedSearch {
        guid?: Guid | undefined;
        name?: string | undefined;
        query?: string | undefined;
        format?: QueryFormat | undefined;
        updateSequenceNum?: number | undefined;
        scope?: SavedSearchScope | undefined;
        constructor(args?: {
            guid?: Guid | undefined;
            name?: string | undefined;
            query?: string | undefined;
            format?: QueryFormat | undefined;
            updateSequenceNum?: number | undefined;
            scope?: SavedSearchScope | undefined;
        });
    }
    class SavedSearchScope {
        includeAccount?: boolean | undefined;
        includePersonalLinkedNotebooks?: boolean | undefined;
        includeBusinessLinkedNotebooks?: boolean | undefined;
        constructor(
            args?: {
                includeAccount?: boolean | undefined;
                includePersonalLinkedNotebooks?: boolean | undefined;
                includeBusinessLinkedNotebooks?: boolean | undefined;
            },
        );
    }
    enum ServiceLevel {
        BASIC = 1,
        PLUS = 2,
        PREMIUM = 3,
    }
    class SharedNote {
        sharerUserID?: UserID | undefined;
        recipientIdentity?: Identity | undefined;
        privilege?: SharedNotePrivilegeLevel | undefined;
        serviceCreated?: Timestamp | undefined;
        serviceUpdated?: Timestamp | undefined;
        serviceAssigned?: Timestamp | undefined;
        constructor(args?: {
            sharerUserID?: UserID | undefined;
            recipientIdentity?: Identity | undefined;
            privilege?: SharedNotePrivilegeLevel | undefined;
            serviceCreated?: Timestamp | undefined;
            serviceUpdated?: Timestamp | undefined;
            serviceAssigned?: Timestamp | undefined;
        });
    }
    enum SharedNotePrivilegeLevel {
        READ_NOTE = 0,
        MODIFY_NOTE = 1,
        FULL_ACCESS = 2,
    }
    class SharedNotebook {
        id?: number | undefined;
        userId?: UserID | undefined;
        notebookGuid?: Guid | undefined;
        email?: string | undefined;
        recipientIdentityId?: IdentityID | undefined;
        notebookModifiable?: boolean | undefined;
        serviceCreated?: Timestamp | undefined;
        serviceUpdated?: Timestamp | undefined;
        globalId?: string | undefined;
        username?: string | undefined;
        privilege?: SharedNotebookPrivilegeLevel | undefined;
        recipientSettings?: SharedNotebookRecipientSettings | undefined;
        sharerUserId?: UserID | undefined;
        recipientUsername?: string | undefined;
        recipientUserId?: UserID | undefined;
        serviceAssigned?: Timestamp | undefined;
        constructor(args?: {
            id?: number | undefined;
            userId?: UserID | undefined;
            notebookGuid?: Guid | undefined;
            email?: string | undefined;
            recipientIdentityId?: IdentityID | undefined;
            notebookModifiable?: boolean | undefined;
            serviceCreated?: Timestamp | undefined;
            serviceUpdated?: Timestamp | undefined;
            globalId?: string | undefined;
            username?: string | undefined;
            privilege?: SharedNotebookPrivilegeLevel | undefined;
            recipientSettings?: SharedNotebookRecipientSettings | undefined;
            sharerUserId?: UserID | undefined;
            recipientUsername?: string | undefined;
            recipientUserId?: UserID | undefined;
            serviceAssigned?: Timestamp | undefined;
        });
    }
    enum SharedNotebookInstanceRestrictions {
        ONLY_JOINED_OR_PREVIEW = 1,
        NO_SHARED_NOTEBOOKS = 2,
    }
    enum SharedNotebookPrivilegeLevel {
        READ_NOTEBOOK = 0,
        MODIFY_NOTEBOOK_PLUS_ACTIVITY = 1,
        READ_NOTEBOOK_PLUS_ACTIVITY = 2,
        GROUP = 3,
        FULL_ACCESS = 4,
        BUSINESS_FULL_ACCESS = 5,
    }
    class SharedNotebookRecipientSettings {
        reminderNotifyEmail?: boolean | undefined;
        reminderNotifyInApp?: boolean | undefined;
        constructor(args?: { reminderNotifyEmail?: boolean | undefined; reminderNotifyInApp?: boolean | undefined });
    }
    enum SponsoredGroupRole {
        GROUP_MEMBER = 1,
        GROUP_ADMIN = 2,
        GROUP_OWNER = 3,
    }
    class Tag {
        guid?: Guid | undefined;
        name?: string | undefined;
        parentGuid?: Guid | undefined;
        updateSequenceNum?: number | undefined;
        constructor(
            args?: {
                guid?: Guid | undefined;
                name?: string | undefined;
                parentGuid?: Guid | undefined;
                updateSequenceNum?: number | undefined;
            },
        );
    }
    type Timestamp = number;
    class User {
        id?: UserID | undefined;
        username?: string | undefined;
        email?: string | undefined;
        name?: string | undefined;
        timezone?: string | undefined;
        privilege?: PrivilegeLevel | undefined;
        serviceLevel?: ServiceLevel | undefined;
        created?: Timestamp | undefined;
        updated?: Timestamp | undefined;
        deleted?: Timestamp | undefined;
        active?: boolean | undefined;
        shardId?: string | undefined;
        attributes?: UserAttributes | undefined;
        accounting?: Accounting | undefined;
        businessUserInfo?: BusinessUserInfo | undefined;
        photoUrl?: string | undefined;
        photoLastUpdated?: Timestamp | undefined;
        accountLimits?: AccountLimits | undefined;
        constructor(args?: {
            id?: UserID | undefined;
            username?: string | undefined;
            email?: string | undefined;
            name?: string | undefined;
            timezone?: string | undefined;
            privilege?: PrivilegeLevel | undefined;
            serviceLevel?: ServiceLevel | undefined;
            created?: Timestamp | undefined;
            updated?: Timestamp | undefined;
            deleted?: Timestamp | undefined;
            active?: boolean | undefined;
            shardId?: string | undefined;
            attributes?: UserAttributes | undefined;
            accounting?: Accounting | undefined;
            businessUserInfo?: BusinessUserInfo | undefined;
            photoUrl?: string | undefined;
            photoLastUpdated?: Timestamp | undefined;
            accountLimits?: AccountLimits | undefined;
        });
    }
    class UserAttributes {
        defaultLocationName?: string | undefined;
        defaultLatitude?: number | undefined;
        defaultLongitude?: number | undefined;
        preactivation?: boolean | undefined;
        viewedPromotions?: string[] | undefined;
        incomingEmailAddress?: string | undefined;
        recentMailedAddresses?: string[] | undefined;
        comments?: string | undefined;
        dateAgreedToTermsOfService?: Timestamp | undefined;
        maxReferrals?: number | undefined;
        referralCount?: number | undefined;
        refererCode?: string | undefined;
        sentEmailDate?: Timestamp | undefined;
        sentEmailCount?: number | undefined;
        dailyEmailLimit?: number | undefined;
        emailOptOutDate?: Timestamp | undefined;
        partnerEmailOptInDate?: Timestamp | undefined;
        preferredLanguage?: string | undefined;
        preferredCountry?: string | undefined;
        clipFullPage?: boolean | undefined;
        twitterUserName?: string | undefined;
        twitterId?: string | undefined;
        groupName?: string | undefined;
        recognitionLanguage?: string | undefined;
        referralProof?: string | undefined;
        educationalDiscount?: boolean | undefined;
        businessAddress?: string | undefined;
        hideSponsorBilling?: boolean | undefined;
        taxExempt?: boolean | undefined;
        useEmailAutoFiling?: boolean | undefined;
        reminderEmailConfig?: ReminderEmailConfig | undefined;
        emailAddressLastConfirmed?: Timestamp | undefined;
        passwordUpdated?: Timestamp | undefined;
        salesforcePushEnabled?: boolean | undefined;
        constructor(args?: {
            defaultLocationName?: string | undefined;
            defaultLatitude?: number | undefined;
            defaultLongitude?: number | undefined;
            preactivation?: boolean | undefined;
            viewedPromotions?: string[] | undefined;
            incomingEmailAddress?: string | undefined;
            recentMailedAddresses?: string[] | undefined;
            comments?: string | undefined;
            dateAgreedToTermsOfService?: Timestamp | undefined;
            maxReferrals?: number | undefined;
            referralCount?: number | undefined;
            refererCode?: string | undefined;
            sentEmailDate?: Timestamp | undefined;
            sentEmailCount?: number | undefined;
            dailyEmailLimit?: number | undefined;
            emailOptOutDate?: Timestamp | undefined;
            partnerEmailOptInDate?: Timestamp | undefined;
            preferredLanguage?: string | undefined;
            preferredCountry?: string | undefined;
            clipFullPage?: boolean | undefined;
            twitterUserName?: string | undefined;
            twitterId?: string | undefined;
            groupName?: string | undefined;
            recognitionLanguage?: string | undefined;
            referralProof?: string | undefined;
            educationalDiscount?: boolean | undefined;
            businessAddress?: string | undefined;
            hideSponsorBilling?: boolean | undefined;
            taxExempt?: boolean | undefined;
            useEmailAutoFiling?: boolean | undefined;
            reminderEmailConfig?: ReminderEmailConfig | undefined;
            emailAddressLastConfirmed?: Timestamp | undefined;
            passwordUpdated?: Timestamp | undefined;
            salesforcePushEnabled?: boolean | undefined;
        });
    }
    type UserID = number;
    class UserIdentity {
        type?: UserIdentityType | undefined;
        stringIdentifier?: string | undefined;
        longIdentifier?: number | undefined;
        constructor(args?: {
            type?: UserIdentityType | undefined;
            stringIdentifier?: string | undefined;
            longIdentifier?: number | undefined;
        });
    }
    enum UserIdentityType {
        EVERNOTE_USERID = 1,
        EMAIL = 2,
        IDENTITYID = 3,
    }
    class UserProfile {
        id?: UserID | undefined;
        name?: string | undefined;
        email?: string | undefined;
        username?: string | undefined;
        attributes?: BusinessUserAttributes | undefined;
        joined?: Timestamp | undefined;
        photoLastUpdated?: Timestamp | undefined;
        photoUrl?: string | undefined;
        role?: BusinessUserRole | undefined;
        constructor(args?: {
            id?: UserID | undefined;
            name?: string | undefined;
            email?: string | undefined;
            username?: string | undefined;
            attributes?: BusinessUserAttributes | undefined;
            joined?: Timestamp | undefined;
            photoLastUpdated?: Timestamp | undefined;
            photoUrl?: string | undefined;
            role?: BusinessUserRole | undefined;
        });
    }
}

/* Limits: Constants */
export namespace Limits {
    const EDAM_APPLICATIONDATA_ENTRY_LEN_MAX: number;
    const EDAM_APPLICATIONDATA_NAME_LEN_MAX: number;
    const EDAM_APPLICATIONDATA_NAME_LEN_MIN: number;
    const EDAM_APPLICATIONDATA_NAME_REGEX: string;
    const EDAM_APPLICATIONDATA_VALUE_LEN_MAX: number;
    const EDAM_APPLICATIONDATA_VALUE_LEN_MIN: number;
    const EDAM_APPLICATIONDATA_VALUE_REGEX: string;
    const EDAM_ATTRIBUTE_LEN_MAX: number;
    const EDAM_ATTRIBUTE_LEN_MIN: number;
    const EDAM_ATTRIBUTE_LIST_MAX: number;
    const EDAM_ATTRIBUTE_MAP_MAX: number;
    const EDAM_ATTRIBUTE_REGEX: string;
    const EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MAX: number;
    const EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MIN: number;
    const EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_REGEX: string;
    const EDAM_BUSINESS_NOTEBOOKS_MAX: number;
    const EDAM_BUSINESS_NOTES_MAX: number;
    const EDAM_BUSINESS_PHONE_NUMBER_LEN_MAX: number;
    const EDAM_BUSINESS_TAGS_MAX: number;
    const EDAM_BUSINESS_URI_LEN_MAX: number;
    const EDAM_CONTENT_CLASS_FOOD_MEAL: string;
    const EDAM_CONTENT_CLASS_HELLO_ENCOUNTER: string;
    const EDAM_CONTENT_CLASS_HELLO_PROFILE: string;
    const EDAM_CONTENT_CLASS_PENULTIMATE_NOTEBOOK: string;
    const EDAM_CONTENT_CLASS_PENULTIMATE_PREFIX: string;
    const EDAM_CONTENT_CLASS_SKITCH_PDF: string;
    const EDAM_CONTENT_CLASS_SKITCH_PREFIX: string;
    const EDAM_CONTENT_CLASS_SKITCH: string;
    const EDAM_DEVICE_DESCRIPTION_LEN_MAX: number;
    const EDAM_DEVICE_DESCRIPTION_REGEX: string;
    const EDAM_DEVICE_ID_LEN_MAX: number;
    const EDAM_DEVICE_ID_REGEX: string;
    const EDAM_EMAIL_DOMAIN_REGEX: string;
    const EDAM_EMAIL_LEN_MAX: number;
    const EDAM_EMAIL_LEN_MIN: number;
    const EDAM_EMAIL_LOCAL_REGEX: string;
    const EDAM_EMAIL_REGEX: string;
    const EDAM_FOOD_APP_CONTENT_CLASS_PREFIX: string;
    const EDAM_GUID_LEN_MAX: number;
    const EDAM_GUID_LEN_MIN: number;
    const EDAM_GUID_REGEX: string;
    const EDAM_HASH_LEN: number;
    const EDAM_HELLO_APP_CONTENT_CLASS_PREFIX: string;
    const EDAM_INDEXABLE_RESOURCE_MIME_TYPES: string[];
    const EDAM_MAX_PREFERENCES: number;
    const EDAM_MAX_VALUES_PER_PREFERENCE: number;
    const EDAM_MIME_LEN_MAX: number;
    const EDAM_MIME_LEN_MIN: number;
    const EDAM_MIME_REGEX: string;
    const EDAM_MIME_TYPE_AAC: string;
    const EDAM_MIME_TYPE_AMR: string;
    const EDAM_MIME_TYPE_DEFAULT: string;
    const EDAM_MIME_TYPE_GIF: string;
    const EDAM_MIME_TYPE_INK: string;
    const EDAM_MIME_TYPE_JPEG: string;
    const EDAM_MIME_TYPE_M4A: string;
    const EDAM_MIME_TYPE_MP3: string;
    const EDAM_MIME_TYPE_MP4_VIDEO: string;
    const EDAM_MIME_TYPE_PDF: string;
    const EDAM_MIME_TYPE_PNG: string;
    const EDAM_MIME_TYPE_WAV: string;
    const EDAM_MIME_TYPES: string[];
    const EDAM_NOTE_CONTENT_CLASS_LEN_MAX: number;
    const EDAM_NOTE_CONTENT_CLASS_LEN_MIN: number;
    const EDAM_NOTE_CONTENT_CLASS_REGEX: string;
    const EDAM_NOTE_CONTENT_LEN_MAX: number;
    const EDAM_NOTE_CONTENT_LEN_MIN: number;
    const EDAM_NOTE_RESOURCES_MAX: number;
    const EDAM_NOTE_SIZE_MAX_FREE: number;
    const EDAM_NOTE_SIZE_MAX_PREMIUM: number;
    const EDAM_NOTE_TAGS_MAX: number;
    const EDAM_NOTE_TITLE_LEN_MAX: number;
    const EDAM_NOTE_TITLE_LEN_MIN: number;
    const EDAM_NOTE_TITLE_REGEX: string;
    const EDAM_NOTEBOOK_NAME_LEN_MAX: number;
    const EDAM_NOTEBOOK_NAME_LEN_MIN: number;
    const EDAM_NOTEBOOK_NAME_REGEX: string;
    const EDAM_NOTEBOOK_SHARED_NOTEBOOK_MAX: number;
    const EDAM_NOTEBOOK_STACK_LEN_MAX: number;
    const EDAM_NOTEBOOK_STACK_LEN_MIN: number;
    const EDAM_NOTEBOOK_STACK_REGEX: string;
    const EDAM_PREFERENCE_NAME_LEN_MAX: number;
    const EDAM_PREFERENCE_NAME_LEN_MIN: number;
    const EDAM_PREFERENCE_NAME_REGEX: string;
    const EDAM_PREFERENCE_SHORTCUTS_MAX_VALUES: number;
    const EDAM_PREFERENCE_SHORTCUTS: string;
    const EDAM_PREFERENCE_VALUE_LEN_MAX: number;
    const EDAM_PREFERENCE_VALUE_LEN_MIN: number;
    const EDAM_PREFERENCE_VALUE_REGEX: string;
    const EDAM_PUBLISHING_DESCRIPTION_LEN_MAX: number;
    const EDAM_PUBLISHING_DESCRIPTION_LEN_MIN: number;
    const EDAM_PUBLISHING_DESCRIPTION_REGEX: string;
    const EDAM_PUBLISHING_URI_LEN_MAX: number;
    const EDAM_PUBLISHING_URI_LEN_MIN: number;
    const EDAM_PUBLISHING_URI_PROHIBITED: string[];
    const EDAM_PUBLISHING_URI_REGEX: string;
    const EDAM_RELATED_MAX_NOTEBOOKS: number;
    const EDAM_RELATED_MAX_NOTES: number;
    const EDAM_RELATED_MAX_TAGS: number;
    const EDAM_RELATED_PLAINTEXT_LEN_MAX: number;
    const EDAM_RELATED_PLAINTEXT_LEN_MIN: number;
    const EDAM_RESOURCE_SIZE_MAX_FREE: number;
    const EDAM_RESOURCE_SIZE_MAX_PREMIUM: number;
    const EDAM_SAVED_SEARCH_NAME_LEN_MAX: number;
    const EDAM_SAVED_SEARCH_NAME_LEN_MIN: number;
    const EDAM_SAVED_SEARCH_NAME_REGEX: string;
    const EDAM_SEARCH_QUERY_LEN_MAX: number;
    const EDAM_SEARCH_QUERY_LEN_MIN: number;
    const EDAM_SEARCH_QUERY_REGEX: string;
    const EDAM_SEARCH_SUGGESTIONS_MAX: number;
    const EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MAX: number;
    const EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MIN: number;
    const EDAM_TAG_NAME_LEN_MAX: number;
    const EDAM_TAG_NAME_LEN_MIN: number;
    const EDAM_TAG_NAME_REGEX: string;
    const EDAM_TIMEZONE_LEN_MAX: number;
    const EDAM_TIMEZONE_LEN_MIN: number;
    const EDAM_TIMEZONE_REGEX: string;
    const EDAM_USER_LINKED_NOTEBOOK_MAX_PREMIUM: number;
    const EDAM_USER_LINKED_NOTEBOOK_MAX: number;
    const EDAM_USER_MAIL_LIMIT_DAILY_FREE: number;
    const EDAM_USER_MAIL_LIMIT_DAILY_PREMIUM: number;
    const EDAM_USER_NAME_LEN_MAX: number;
    const EDAM_USER_NAME_LEN_MIN: number;
    const EDAM_USER_NAME_REGEX: string;
    const EDAM_USER_NOTEBOOKS_MAX: number;
    const EDAM_USER_NOTES_MAX: number;
    const EDAM_USER_PASSWORD_LEN_MAX: number;
    const EDAM_USER_PASSWORD_LEN_MIN: number;
    const EDAM_USER_PASSWORD_REGEX: string;
    const EDAM_USER_RECENT_MAILED_ADDRESSES_MAX: number;
    const EDAM_USER_SAVED_SEARCHES_MAX: number;
    const EDAM_USER_TAGS_MAX: number;
    const EDAM_USER_UPLOAD_LIMIT_BUSINESS: number;
    const EDAM_USER_UPLOAD_LIMIT_FREE: number;
    const EDAM_USER_UPLOAD_LIMIT_PREMIUM: number;
    const EDAM_USER_USERNAME_LEN_MAX: number;
    const EDAM_USER_USERNAME_LEN_MIN: number;
    const EDAM_USER_USERNAME_REGEX: string;
    const EDAM_VAT_REGEX: string;
}

/* Errors: Data types */
export namespace Errors {
    enum EDAMErrorCode {
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
        DEVICE_LIMIT_REACHED = 21,
    }
    enum EDAMInvalidContactReason {
        BAD_ADDRESS = 0,
        DUPLICATE_CONTACT = 1,
        NO_CONNECTION = 2,
    }
    class EDAMInvalidContactsException extends Error {
        contacts: Types.Contact[];
        parameter: string;
        reasons: EDAMInvalidContactReason[];
    }
    class EDAMNotFoundException extends Error {
        identifier: string;
        key: string;
    }
    class EDAMSystemException extends Error {
        errorCode: EDAMErrorCode;
        message: string;
        rateLimitDuration: number;
    }
    class EDAMUserException extends Error {
        errorCode: EDAMErrorCode;
        parameter: string;
    }
}

/* Classes */
export class Client {
    constructor(config: {
        consumerKey?: string | undefined;
        consumerSecret?: string | undefined;
        sandbox?: boolean | undefined;
        china?: boolean | undefined;
        token?: string | undefined;
        serviceHost?: string | undefined;
    });
    getRequestToken(callbackUrl: string, callback: oauth1tokenCallback): void;
    getAuthorizeUrl(oauthToken: string): string;
    getAccessToken(
        oauthToken: string,
        oauthTokenSecret: string,
        oauthVerifier: string,
        callback: oauth1tokenCallback,
    ): void;
    getNoteStore(noteStoreUrl?: string): NoteStoreClient;
    getUserStore(): UserStoreClient;
    getSharedNoteStore(linkedNotebook: Types.LinkedNotebook): NoteStoreClient;
    getBusinessNoteStore(): NoteStoreClient;
    getEndpoint(path: string): string;
    getOAuthClient(callbackUrl: string): OAuth;
}

export class NoteStoreClient {
    authenticateToSharedNote(
        guid: Types.Guid,
        noteKey: string,
        authenticationToken?: string,
    ): Promise<UserStore.AuthenticationResult>;
    authenticateToSharedNotebook(
        guid: Types.Guid,
        noteKey: string,
        authenticationToken?: string,
    ): Promise<UserStore.AuthenticationResult>;
    copyNote(noteGuid: Types.Guid, toNotebookGuid: Types.Guid): Promise<Types.Note>;
    createLinkedNotebook(linkedNotebook: Types.LinkedNotebook): Promise<Types.LinkedNotebook>;
    createNote(note: Types.Note): Promise<Types.Note>;
    createNotebook(notebook: Types.Notebook): Promise<Types.Notebook>;
    createOrUpdateNotebookShares(
        shareTemplate: NoteStore.NotebookShareTemplate,
    ): Promise<NoteStore.CreateOrUpdateNotebookSharesResult>;
    createSearch(search: Types.SavedSearch): Promise<Types.SavedSearch>;
    createTag(tag: Types.Tag): Promise<Types.Tag>;
    deleteNote(guid: Types.Guid): Promise<number>;
    emailNote(parameters: NoteStore.NoteEmailParameters): Promise<void>;
    expungeLinkedNotebook(guid: Types.Guid): Promise<number>;
    expungeNote(guid: Types.Guid): Promise<number>;
    expungeNotebook(guid: Types.Guid): Promise<number>;
    expungeSearch(guid: Types.Guid): Promise<number>;
    expungeTag(guid: Types.Guid): Promise<number>;
    findNoteCounts(filter: NoteStore.NoteFilter, withTrash: boolean): Promise<NoteStore.NoteCollectionCounts>;
    findNoteOffset(filter: NoteStore.NoteFilter, guid: Types.Guid): Promise<number>;
    findNotesMetadata(
        filter: NoteStore.NoteFilter,
        offset: number,
        maxNotes: number,
        resultSpec: NoteStore.NotesMetadataResultSpec,
    ): Promise<NoteStore.NotesMetadataList>;
    findRelated(
        query: NoteStore.RelatedQuery,
        resultSpec: NoteStore.RelatedResultSpec,
    ): Promise<NoteStore.RelatedResult>;
    getDefaultNotebook(): Promise<Types.Notebook>;
    getFilteredSyncChunk(
        afterUSN: number,
        maxEntries: number,
        filter: NoteStore.SyncChunkFilter,
    ): Promise<NoteStore.SyncChunk>;
    getLinkedNotebookSyncChunk(
        linkedNotebook: Types.LinkedNotebook,
        afterUSN: number,
        maxEntries: number,
        fullSyncOnly: boolean,
    ): Promise<NoteStore.SyncChunk>;
    getLinkedNotebookSyncState(linkedNotebook: Types.LinkedNotebook): Promise<NoteStore.SyncState>;
    getNoteApplicationData(guid: Types.Guid): Promise<Types.LazyMap>;
    getNoteApplicationDataEntry(guid: Types.Guid, key: string): Promise<string>;
    getNoteWithResultSpec(guid: Types.Guid, resultSpec: NoteStore.NoteResultSpec): Promise<Types.Note>;
    getNotebook(guid: Types.Guid): Promise<Types.Notebook>;
    getNotebookShares(notebookGuid: string): Promise<NoteStore.ShareRelationships>;
    getNoteContent(guid: Types.Guid): Promise<string>;
    getNoteSearchText(guid: Types.Guid, noteOnly: boolean, tokenizeForIndexing: boolean): Promise<string>;
    getNoteTagNames(guid: Types.Guid): Promise<string[]>;
    getNoteVersion(
        noteguid: Types.Guid,
        updateSequenceNum: number,
        withResourcesData: boolean,
        withResourcesRecognition: boolean,
        withResourcesAlternateData: boolean,
    ): Promise<Types.Note>;
    getPublicNotebook(userId: Types.UserID, publicUri: string): Promise<Types.Notebook>;
    getResource(
        guid: Types.Guid,
        withData: boolean,
        withRecognition: boolean,
        withAttributes: boolean,
        withAlternateData: boolean,
    ): Promise<Types.Resource>;
    getResourceAlternateData(guid: Types.Guid): Promise<string>;
    getResourceApplicationData(guid: Types.Guid): Promise<Types.LazyMap>;
    getResourceApplicationDataEntry(guid: Types.Guid, key: string): Promise<string>;
    getResourceAttributes(guid: Types.Guid): Promise<Types.ResourceAttributes>;
    getResourceByHash(
        noteguid: Types.Guid,
        contentHash: string,
        withData: boolean,
        withRecognition: boolean,
        withAlternateData: boolean,
    ): Promise<Types.Resource>;
    getResourceData(guid: Types.Guid): Promise<string>;
    getResourceRecognition(guid: Types.Guid): Promise<string>;
    getResourceSearchText(guid: Types.Guid): Promise<string>;
    getSearch(guid: Types.Guid): Promise<Types.SavedSearch>;
    getSharedNotebookByAuth(): Promise<Types.SharedNotebook>;
    getSyncState(): Promise<NoteStore.SyncState>;
    getTag(guid: Types.Guid): Promise<Types.Tag>;
    listAccessibleBusinessNotebooks(): Promise<Types.Notebook[]>;
    listLinkedNotebooks(): Promise<Types.LinkedNotebook[]>;
    listNotebooks(): Promise<Types.Notebook[]>;
    listNoteVersions(noteguid: Types.Guid): Promise<NoteStore.NoteVersionId[]>;
    listSearches(): Promise<Types.SavedSearch[]>;
    listSharedNotebooks(): Promise<Types.SharedNotebook[]>;
    listTags(): Promise<Types.Tag[]>;
    listTagsByNotebook(notebookguid: Types.Guid): Promise<Types.Tag[]>;
    manageNotebookShares(
        parameters: NoteStore.ManageNotebookSharesParameters,
    ): Promise<NoteStore.ManageNotebookSharesResult>;
    setNoteApplicationDataEntry(guid: Types.Guid, key: string, value: string): Promise<number>;
    setNotebookRecipientSettings(
        notebookGuid: string,
        recipientSettings: Types.NotebookRecipientSettings,
    ): Promise<Types.Notebook>;
    setResourceApplicationDataEntry(guid: Types.Guid, key: string, value: string): Promise<number>;
    shareNote(guid: Types.Guid): Promise<string>;
    stopSharingNote(guid: Types.Guid): Promise<void>;
    unsetNoteApplicationDataEntry(guid: Types.Guid, key: string): Promise<number>;
    unsetResourceApplicationDataEntry(guid: Types.Guid, key: string): Promise<number>;
    untagAll(guid: Types.Guid): Promise<void>;
    updateLinkedNotebook(linkedNotebook: Types.LinkedNotebook): Promise<number>;
    updateNote(note: Types.Note): Promise<Types.Note>;
    updateNoteIfUsnMatches(note: Types.Note): Promise<NoteStore.UpdateNoteIfUsnMatchesResult>;
    updateNotebook(notebook: Types.Notebook): Promise<number>;
    updateResource(resource: Types.Resource): Promise<number>;
    updateSearch(search: Types.SavedSearch): Promise<number>;
    updateTag(tag: Types.Tag): Promise<number>;

    /* DEPRECATED */
    getNote(
        guid: Types.Guid,
        withContent: boolean,
        withResourcesData: boolean,
        withResourcesRecognition: boolean,
        withResourcesAlternateData: boolean,
    ): Promise<Types.Note>;
    updateSharedNotebook(sharedNotebook: Types.SharedNotebook): Promise<number>;
    shareNotebook(sharedNotebook: Types.SharedNotebook, message: string): Promise<Types.SharedNotebook>;
}

export class UserStoreClient {
    authenticateLongSession(
        username: string,
        password: string,
        consumerKey: string,
        consumerSecret: string,
        deviceIdentifier: string,
        deviceDescription: string,
        supportsTwoFactor: boolean,
    ): Promise<UserStore.AuthenticationResult>;
    authenticateToBusiness(): Promise<UserStore.AuthenticationResult>;
    checkVersion(clientName: string, edamVersionMajor: number, edamVersionMinor: number): Promise<boolean>;
    completeTwoFactorAuthentication(
        authenticationToken: string,
        oneTimeCode: string,
        deviceIdentifier: string,
        deviceDescription: string,
    ): Promise<UserStore.AuthenticationResult>;
    getAccountLimits(serviceLevel: Types.ServiceLevel): Promise<Types.AccountLimits>;
    getBootstrapInfo(locale: string): Promise<UserStore.BootstrapInfo>;
    getPremiumInfo(): Promise<Types.PremiumInfo>;
    getPublicUserInfo(username: string): Promise<UserStore.PublicUserInfo>;
    getUser(): Promise<Types.User>;
    getUserUrls(): Promise<UserStore.UserUrls>;
    inviteToBusiness(emailAddress: string): Promise<void>;
    listBusinessInvitations(includeRequestedInvitations: boolean): Promise<Types.BusinessInvitation[]>;
    listBusinessUsers(): Promise<Types.UserProfile[]>;
    removeFromBusiness(emailAddress: string): Promise<void>;
    revokeLongSession(): Promise<void>;
    updateBusinessUserIdentifier(oldEmailAddress: string, newEmailAddress: string): Promise<void>;
}
