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
        allowExternalMembers?: string;
        allowGoogleCommunication?: string;
        allowWebPosting?: string;
        archiveOnly?: string;
        customFooterText?: string;
        customReplyTo?: string;
        customRolesEnabledForSettingsToBeMerged?: string;
        defaultMessageDenyNotificationText?: string;
        description?: string;
        email?: string;
        enableCollaborativeInbox?: string;
        favoriteRepliesOnTop?: string;
        includeCustomFooter?: string;
        includeInGlobalAddressList?: string;
        isArchived?: string;
        kind?: string;
        maxMessageBytes?: number;
        membersCanPostAsTheGroup?: string;
        messageDisplayFont?: string;
        messageModerationLevel?: string;
        name?: string;
        primaryLanguage?: string;
        replyTo?: string;
        sendMessageDenyNotification?: string;
        showInGroupDirectory?: string;
        spamModerationLevel?: string;
        whoCanAdd?: string;
        whoCanAddReferences?: string;
        whoCanApproveMembers?: string;
        whoCanApproveMessages?: string;
        whoCanAssignTopics?: string;
        whoCanAssistContent?: string;
        whoCanBanUsers?: string;
        whoCanContactOwner?: string;
        whoCanDeleteAnyPost?: string;
        whoCanDeleteTopics?: string;
        whoCanDiscoverGroup?: string;
        whoCanEnterFreeFormTags?: string;
        whoCanHideAbuse?: string;
        whoCanInvite?: string;
        whoCanJoin?: string;
        whoCanLeaveGroup?: string;
        whoCanLockTopics?: string;
        whoCanMakeTopicsSticky?: string;
        whoCanMarkDuplicate?: string;
        whoCanMarkFavoriteReplyOnAnyTopic?: string;
        whoCanMarkFavoriteReplyOnOwnTopic?: string;
        whoCanMarkNoResponseNeeded?: string;
        whoCanModerateContent?: string;
        whoCanModerateMembers?: string;
        whoCanModifyMembers?: string;
        whoCanModifyTagsAndCategories?: string;
        whoCanMoveTopicsIn?: string;
        whoCanMoveTopicsOut?: string;
        whoCanPostAnnouncements?: string;
        whoCanPostMessage?: string;
        whoCanTakeTopics?: string;
        whoCanUnassignTopic?: string;
        whoCanUnmarkFavoriteReplyOnAnyTopic?: string;
        whoCanViewGroup?: string;
        whoCanViewMembership?: string;
      }
    }
  }
  interface AdminGroupsSettings {
    Groups?: AdminGroupsSettings.Collection.GroupsCollection;
    // Create a new instance of Groups
    newGroups(): AdminGroupsSettings.Schema.Groups;
  }
}

declare var AdminGroupsSettings: GoogleAppsScript.AdminGroupsSettings;
