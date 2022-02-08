// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminGroupsSettings {
    namespace Collection {
      interface GroupsCollection {
        // Gets one resource by id.
        get(groupUniqueId: string): AdminGroupsSettings.Schema.Groups;
        // Updates an existing resource. This method supports patch semantics.
        patch(resource: Schema.Groups, groupUniqueId: string): AdminGroupsSettings.Schema.Groups;
        // Updates an existing resource.
        update(resource: Schema.Groups, groupUniqueId: string): AdminGroupsSettings.Schema.Groups;
      }
    }
    namespace Schema {
      interface Groups {
        allowExternalMembers?: string | undefined;
        allowGoogleCommunication?: string | undefined;
        allowWebPosting?: string | undefined;
        archiveOnly?: string | undefined;
        customFooterText?: string | undefined;
        customReplyTo?: string | undefined;
        customRolesEnabledForSettingsToBeMerged?: string | undefined;
        defaultMessageDenyNotificationText?: string | undefined;
        description?: string | undefined;
        email?: string | undefined;
        enableCollaborativeInbox?: string | undefined;
        favoriteRepliesOnTop?: string | undefined;
        includeCustomFooter?: string | undefined;
        includeInGlobalAddressList?: string | undefined;
        isArchived?: string | undefined;
        kind?: string | undefined;
        maxMessageBytes?: number | undefined;
        membersCanPostAsTheGroup?: string | undefined;
        messageDisplayFont?: string | undefined;
        messageModerationLevel?: string | undefined;
        name?: string | undefined;
        primaryLanguage?: string | undefined;
        replyTo?: string | undefined;
        sendMessageDenyNotification?: string | undefined;
        showInGroupDirectory?: string | undefined;
        spamModerationLevel?: string | undefined;
        whoCanAdd?: string | undefined;
        whoCanAddReferences?: string | undefined;
        whoCanApproveMembers?: string | undefined;
        whoCanApproveMessages?: string | undefined;
        whoCanAssignTopics?: string | undefined;
        whoCanAssistContent?: string | undefined;
        whoCanBanUsers?: string | undefined;
        whoCanContactOwner?: string | undefined;
        whoCanDeleteAnyPost?: string | undefined;
        whoCanDeleteTopics?: string | undefined;
        whoCanDiscoverGroup?: string | undefined;
        whoCanEnterFreeFormTags?: string | undefined;
        whoCanHideAbuse?: string | undefined;
        whoCanInvite?: string | undefined;
        whoCanJoin?: string | undefined;
        whoCanLeaveGroup?: string | undefined;
        whoCanLockTopics?: string | undefined;
        whoCanMakeTopicsSticky?: string | undefined;
        whoCanMarkDuplicate?: string | undefined;
        whoCanMarkFavoriteReplyOnAnyTopic?: string | undefined;
        whoCanMarkFavoriteReplyOnOwnTopic?: string | undefined;
        whoCanMarkNoResponseNeeded?: string | undefined;
        whoCanModerateContent?: string | undefined;
        whoCanModerateMembers?: string | undefined;
        whoCanModifyMembers?: string | undefined;
        whoCanModifyTagsAndCategories?: string | undefined;
        whoCanMoveTopicsIn?: string | undefined;
        whoCanMoveTopicsOut?: string | undefined;
        whoCanPostAnnouncements?: string | undefined;
        whoCanPostMessage?: string | undefined;
        whoCanTakeTopics?: string | undefined;
        whoCanUnassignTopic?: string | undefined;
        whoCanUnmarkFavoriteReplyOnAnyTopic?: string | undefined;
        whoCanViewGroup?: string | undefined;
        whoCanViewMembership?: string | undefined;
      }
    }
  }
  interface AdminGroupsSettings {
    Groups?: AdminGroupsSettings.Collection.GroupsCollection | undefined;
    // Create a new instance of Groups
    newGroups(): AdminGroupsSettings.Schema.Groups;
  }
}

declare var AdminGroupsSettings: GoogleAppsScript.AdminGroupsSettings;
