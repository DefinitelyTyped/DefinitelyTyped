// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace TagManager {
    namespace Collection {
      namespace Accounts {
        namespace Containers {
          namespace Workspaces {
            interface Built_in_variablesCollection {
              // Creates one or more GTM Built-In Variables.
              create(parent: string): TagManager.Schema.CreateBuiltInVariableResponse;
              // Creates one or more GTM Built-In Variables.
              create(parent: string, optionalArgs: object): TagManager.Schema.CreateBuiltInVariableResponse;
              // Lists all the enabled Built-In Variables of a GTM Container.
              list(parent: string): TagManager.Schema.ListEnabledBuiltInVariablesResponse;
              // Lists all the enabled Built-In Variables of a GTM Container.
              list(parent: string, optionalArgs: object): TagManager.Schema.ListEnabledBuiltInVariablesResponse;
              // Deletes one or more GTM Built-In Variables.
              remove(path: string): void;
              // Deletes one or more GTM Built-In Variables.
              remove(path: string, optionalArgs: object): void;
              // Reverts changes to a GTM Built-In Variables in a GTM Workspace.
              revert(path: string): TagManager.Schema.RevertBuiltInVariableResponse;
              // Reverts changes to a GTM Built-In Variables in a GTM Workspace.
              revert(path: string, optionalArgs: object): TagManager.Schema.RevertBuiltInVariableResponse;
            }
            interface FoldersCollection {
              // Creates a GTM Folder.
              create(resource: Schema.Folder, parent: string): TagManager.Schema.Folder;
              // List all entities in a GTM Folder.
              entities(path: string): TagManager.Schema.FolderEntities;
              // List all entities in a GTM Folder.
              entities(path: string, optionalArgs: object): TagManager.Schema.FolderEntities;
              // Gets a GTM Folder.
              get(path: string): TagManager.Schema.Folder;
              // Lists all GTM Folders of a Container.
              list(parent: string): TagManager.Schema.ListFoldersResponse;
              // Lists all GTM Folders of a Container.
              list(parent: string, optionalArgs: object): TagManager.Schema.ListFoldersResponse;
              // Moves entities to a GTM Folder.
              move_entities_to_folder(resource: Schema.Folder, path: string): void;
              // Moves entities to a GTM Folder.
              move_entities_to_folder(resource: Schema.Folder, path: string, optionalArgs: object): void;
              // Deletes a GTM Folder.
              remove(path: string): void;
              // Reverts changes to a GTM Folder in a GTM Workspace.
              revert(path: string): TagManager.Schema.RevertFolderResponse;
              // Reverts changes to a GTM Folder in a GTM Workspace.
              revert(path: string, optionalArgs: object): TagManager.Schema.RevertFolderResponse;
              // Updates a GTM Folder.
              update(resource: Schema.Folder, path: string): TagManager.Schema.Folder;
              // Updates a GTM Folder.
              update(resource: Schema.Folder, path: string, optionalArgs: object): TagManager.Schema.Folder;
            }
            interface TagsCollection {
              // Creates a GTM Tag.
              create(resource: Schema.Tag, parent: string): TagManager.Schema.Tag;
              // Gets a GTM Tag.
              get(path: string): TagManager.Schema.Tag;
              // Lists all GTM Tags of a Container.
              list(parent: string): TagManager.Schema.ListTagsResponse;
              // Lists all GTM Tags of a Container.
              list(parent: string, optionalArgs: object): TagManager.Schema.ListTagsResponse;
              // Deletes a GTM Tag.
              remove(path: string): void;
              // Reverts changes to a GTM Tag in a GTM Workspace.
              revert(path: string): TagManager.Schema.RevertTagResponse;
              // Reverts changes to a GTM Tag in a GTM Workspace.
              revert(path: string, optionalArgs: object): TagManager.Schema.RevertTagResponse;
              // Updates a GTM Tag.
              update(resource: Schema.Tag, path: string): TagManager.Schema.Tag;
              // Updates a GTM Tag.
              update(resource: Schema.Tag, path: string, optionalArgs: object): TagManager.Schema.Tag;
            }
            interface TriggersCollection {
              // Creates a GTM Trigger.
              create(resource: Schema.Trigger, parent: string): TagManager.Schema.Trigger;
              // Gets a GTM Trigger.
              get(path: string): TagManager.Schema.Trigger;
              // Lists all GTM Triggers of a Container.
              list(parent: string): TagManager.Schema.ListTriggersResponse;
              // Lists all GTM Triggers of a Container.
              list(parent: string, optionalArgs: object): TagManager.Schema.ListTriggersResponse;
              // Deletes a GTM Trigger.
              remove(path: string): void;
              // Reverts changes to a GTM Trigger in a GTM Workspace.
              revert(path: string): TagManager.Schema.RevertTriggerResponse;
              // Reverts changes to a GTM Trigger in a GTM Workspace.
              revert(path: string, optionalArgs: object): TagManager.Schema.RevertTriggerResponse;
              // Updates a GTM Trigger.
              update(resource: Schema.Trigger, path: string): TagManager.Schema.Trigger;
              // Updates a GTM Trigger.
              update(resource: Schema.Trigger, path: string, optionalArgs: object): TagManager.Schema.Trigger;
            }
            interface VariablesCollection {
              // Creates a GTM Variable.
              create(resource: Schema.Variable, parent: string): TagManager.Schema.Variable;
              // Gets a GTM Variable.
              get(path: string): TagManager.Schema.Variable;
              // Lists all GTM Variables of a Container.
              list(parent: string): TagManager.Schema.ListVariablesResponse;
              // Lists all GTM Variables of a Container.
              list(parent: string, optionalArgs: object): TagManager.Schema.ListVariablesResponse;
              // Deletes a GTM Variable.
              remove(path: string): void;
              // Reverts changes to a GTM Variable in a GTM Workspace.
              revert(path: string): TagManager.Schema.RevertVariableResponse;
              // Reverts changes to a GTM Variable in a GTM Workspace.
              revert(path: string, optionalArgs: object): TagManager.Schema.RevertVariableResponse;
              // Updates a GTM Variable.
              update(resource: Schema.Variable, path: string): TagManager.Schema.Variable;
              // Updates a GTM Variable.
              update(resource: Schema.Variable, path: string, optionalArgs: object): TagManager.Schema.Variable;
            }
            interface ZonesCollection {
              // Creates a GTM Zone.
              create(resource: Schema.Zone, parent: string): TagManager.Schema.Zone;
              // Gets a GTM Zone.
              get(path: string): TagManager.Schema.Zone;
              // Lists all GTM Zones of a GTM container workspace.
              list(parent: string): TagManager.Schema.ListZonesResponse;
              // Lists all GTM Zones of a GTM container workspace.
              list(parent: string, optionalArgs: object): TagManager.Schema.ListZonesResponse;
              // Deletes a GTM Zone.
              remove(path: string): void;
              // Reverts changes to a GTM Zone in a GTM Workspace.
              revert(path: string): TagManager.Schema.RevertZoneResponse;
              // Reverts changes to a GTM Zone in a GTM Workspace.
              revert(path: string, optionalArgs: object): TagManager.Schema.RevertZoneResponse;
              // Updates a GTM Zone.
              update(resource: Schema.Zone, path: string): TagManager.Schema.Zone;
              // Updates a GTM Zone.
              update(resource: Schema.Zone, path: string, optionalArgs: object): TagManager.Schema.Zone;
            }
          }
          interface EnvironmentsCollection {
            // Creates a GTM Environment.
            create(resource: Schema.Environment, parent: string): TagManager.Schema.Environment;
            // Gets a GTM Environment.
            get(path: string): TagManager.Schema.Environment;
            // Lists all GTM Environments of a GTM Container.
            list(parent: string): TagManager.Schema.ListEnvironmentsResponse;
            // Lists all GTM Environments of a GTM Container.
            list(parent: string, optionalArgs: object): TagManager.Schema.ListEnvironmentsResponse;
            // Re-generates the authorization code for a GTM Environment.
            reauthorize(resource: Schema.Environment, path: string): TagManager.Schema.Environment;
            // Deletes a GTM Environment.
            remove(path: string): void;
            // Updates a GTM Environment.
            update(resource: Schema.Environment, path: string): TagManager.Schema.Environment;
            // Updates a GTM Environment.
            update(resource: Schema.Environment, path: string, optionalArgs: object): TagManager.Schema.Environment;
          }
          interface Version_headersCollection {
            // Gets the latest container version header
            latest(parent: string): TagManager.Schema.ContainerVersionHeader;
            // Lists all Container Versions of a GTM Container.
            list(parent: string): TagManager.Schema.ListContainerVersionsResponse;
            // Lists all Container Versions of a GTM Container.
            list(parent: string, optionalArgs: object): TagManager.Schema.ListContainerVersionsResponse;
          }
          interface VersionsCollection {
            // Gets a Container Version.
            get(path: string): TagManager.Schema.ContainerVersion;
            // Gets a Container Version.
            get(path: string, optionalArgs: object): TagManager.Schema.ContainerVersion;
            // Gets the live (i.e. published) container version
            live(parent: string): TagManager.Schema.ContainerVersion;
            // Publishes a Container Version.
            publish(path: string): TagManager.Schema.PublishContainerVersionResponse;
            // Publishes a Container Version.
            publish(path: string, optionalArgs: object): TagManager.Schema.PublishContainerVersionResponse;
            // Deletes a Container Version.
            remove(path: string): void;
            // Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
            set_latest(path: string): TagManager.Schema.ContainerVersion;
            // Undeletes a Container Version.
            undelete(path: string): TagManager.Schema.ContainerVersion;
            // Updates a Container Version.
            update(resource: Schema.ContainerVersion, path: string): TagManager.Schema.ContainerVersion;
            // Updates a Container Version.
            update(resource: Schema.ContainerVersion, path: string, optionalArgs: object): TagManager.Schema.ContainerVersion;
          }
          interface WorkspacesCollection {
            Built_in_variables?: TagManager.Collection.Accounts.Containers.Workspaces.Built_in_variablesCollection | undefined;
            Folders?: TagManager.Collection.Accounts.Containers.Workspaces.FoldersCollection | undefined;
            Tags?: TagManager.Collection.Accounts.Containers.Workspaces.TagsCollection | undefined;
            Triggers?: TagManager.Collection.Accounts.Containers.Workspaces.TriggersCollection | undefined;
            Variables?: TagManager.Collection.Accounts.Containers.Workspaces.VariablesCollection | undefined;
            Zones?: TagManager.Collection.Accounts.Containers.Workspaces.ZonesCollection | undefined;
            // Creates a Workspace.
            create(resource: Schema.Workspace, parent: string): TagManager.Schema.Workspace;
            // Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
            create_version(resource: Schema.CreateContainerVersionRequestVersionOptions, path: string): TagManager.Schema.CreateContainerVersionResponse;
            // Gets a Workspace.
            get(path: string): TagManager.Schema.Workspace;
            // Finds conflicting and modified entities in the workspace.
            getStatus(path: string): TagManager.Schema.GetWorkspaceStatusResponse;
            // Lists all Workspaces that belong to a GTM Container.
            list(parent: string): TagManager.Schema.ListWorkspacesResponse;
            // Lists all Workspaces that belong to a GTM Container.
            list(parent: string, optionalArgs: object): TagManager.Schema.ListWorkspacesResponse;
            // Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
            quick_preview(path: string): TagManager.Schema.QuickPreviewResponse;
            // Deletes a Workspace.
            remove(path: string): void;
            // Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
            resolve_conflict(resource: Schema.Entity, path: string): void;
            // Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
            resolve_conflict(resource: Schema.Entity, path: string, optionalArgs: object): void;
            // Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
            sync(path: string): TagManager.Schema.SyncWorkspaceResponse;
            // Updates a Workspace.
            update(resource: Schema.Workspace, path: string): TagManager.Schema.Workspace;
            // Updates a Workspace.
            update(resource: Schema.Workspace, path: string, optionalArgs: object): TagManager.Schema.Workspace;
          }
        }
        interface ContainersCollection {
          Environments?: TagManager.Collection.Accounts.Containers.EnvironmentsCollection | undefined;
          Version_headers?: TagManager.Collection.Accounts.Containers.Version_headersCollection | undefined;
          Versions?: TagManager.Collection.Accounts.Containers.VersionsCollection | undefined;
          Workspaces?: TagManager.Collection.Accounts.Containers.WorkspacesCollection | undefined;
          // Creates a Container.
          create(resource: Schema.Container, parent: string): TagManager.Schema.Container;
          // Gets a Container.
          get(path: string): TagManager.Schema.Container;
          // Lists all Containers that belongs to a GTM Account.
          list(parent: string): TagManager.Schema.ListContainersResponse;
          // Lists all Containers that belongs to a GTM Account.
          list(parent: string, optionalArgs: object): TagManager.Schema.ListContainersResponse;
          // Deletes a Container.
          remove(path: string): void;
          // Updates a Container.
          update(resource: Schema.Container, path: string): TagManager.Schema.Container;
          // Updates a Container.
          update(resource: Schema.Container, path: string, optionalArgs: object): TagManager.Schema.Container;
        }
        interface User_permissionsCollection {
          // Creates a user's Account & Container access.
          create(resource: Schema.UserPermission, parent: string): TagManager.Schema.UserPermission;
          // Gets a user's Account & Container access.
          get(path: string): TagManager.Schema.UserPermission;
          // List all users that have access to the account along with Account and Container user access granted to each of them.
          list(parent: string): TagManager.Schema.ListUserPermissionsResponse;
          // List all users that have access to the account along with Account and Container user access granted to each of them.
          list(parent: string, optionalArgs: object): TagManager.Schema.ListUserPermissionsResponse;
          // Removes a user from the account, revoking access to it and all of its containers.
          remove(path: string): void;
          // Updates a user's Account & Container access.
          update(resource: Schema.UserPermission, path: string): TagManager.Schema.UserPermission;
        }
      }
      interface AccountsCollection {
        Containers?: TagManager.Collection.Accounts.ContainersCollection | undefined;
        User_permissions?: TagManager.Collection.Accounts.User_permissionsCollection | undefined;
        // Gets a GTM Account.
        get(path: string): TagManager.Schema.Account;
        // Lists all GTM Accounts that a user has access to.
        list(): TagManager.Schema.ListAccountsResponse;
        // Lists all GTM Accounts that a user has access to.
        list(optionalArgs: object): TagManager.Schema.ListAccountsResponse;
        // Updates a GTM Account.
        update(resource: Schema.Account, path: string): TagManager.Schema.Account;
        // Updates a GTM Account.
        update(resource: Schema.Account, path: string, optionalArgs: object): TagManager.Schema.Account;
      }
    }
    namespace Schema {
      interface Account {
        accountId?: string | undefined;
        fingerprint?: string | undefined;
        name?: string | undefined;
        path?: string | undefined;
        shareData?: boolean | undefined;
        tagManagerUrl?: string | undefined;
      }
      interface AccountAccess {
        permission?: string | undefined;
      }
      interface BuiltInVariable {
        accountId?: string | undefined;
        containerId?: string | undefined;
        name?: string | undefined;
        path?: string | undefined;
        type?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface Condition {
        parameter?: TagManager.Schema.Parameter[] | undefined;
        type?: string | undefined;
      }
      interface Container {
        accountId?: string | undefined;
        containerId?: string | undefined;
        domainName?: string[] | undefined;
        fingerprint?: string | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        path?: string | undefined;
        publicId?: string | undefined;
        tagManagerUrl?: string | undefined;
        usageContext?: string[] | undefined;
      }
      interface ContainerAccess {
        containerId?: string | undefined;
        permission?: string | undefined;
      }
      interface ContainerVersion {
        accountId?: string | undefined;
        builtInVariable?: TagManager.Schema.BuiltInVariable[] | undefined;
        container?: TagManager.Schema.Container | undefined;
        containerId?: string | undefined;
        containerVersionId?: string | undefined;
        customTemplate?: TagManager.Schema.CustomTemplate[] | undefined;
        deleted?: boolean | undefined;
        description?: string | undefined;
        fingerprint?: string | undefined;
        folder?: TagManager.Schema.Folder[] | undefined;
        name?: string | undefined;
        path?: string | undefined;
        tag?: TagManager.Schema.Tag[] | undefined;
        tagManagerUrl?: string | undefined;
        trigger?: TagManager.Schema.Trigger[] | undefined;
        variable?: TagManager.Schema.Variable[] | undefined;
        zone?: TagManager.Schema.Zone[] | undefined;
      }
      interface ContainerVersionHeader {
        accountId?: string | undefined;
        containerId?: string | undefined;
        containerVersionId?: string | undefined;
        deleted?: boolean | undefined;
        name?: string | undefined;
        numCustomTemplates?: string | undefined;
        numMacros?: string | undefined;
        numRules?: string | undefined;
        numTags?: string | undefined;
        numTriggers?: string | undefined;
        numVariables?: string | undefined;
        numZones?: string | undefined;
        path?: string | undefined;
      }
      interface CreateBuiltInVariableResponse {
        builtInVariable?: TagManager.Schema.BuiltInVariable[] | undefined;
      }
      interface CreateContainerVersionRequestVersionOptions {
        name?: string | undefined;
        notes?: string | undefined;
      }
      interface CreateContainerVersionResponse {
        compilerError?: boolean | undefined;
        containerVersion?: TagManager.Schema.ContainerVersion | undefined;
        newWorkspacePath?: string | undefined;
        syncStatus?: TagManager.Schema.SyncStatus | undefined;
      }
      interface CustomTemplate {
        accountId?: string | undefined;
        containerId?: string | undefined;
        fingerprint?: string | undefined;
        name?: string | undefined;
        path?: string | undefined;
        tagManagerUrl?: string | undefined;
        templateData?: string | undefined;
        templateId?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface Entity {
        changeStatus?: string | undefined;
        folder?: TagManager.Schema.Folder | undefined;
        tag?: TagManager.Schema.Tag | undefined;
        trigger?: TagManager.Schema.Trigger | undefined;
        variable?: TagManager.Schema.Variable | undefined;
      }
      interface Environment {
        accountId?: string | undefined;
        authorizationCode?: string | undefined;
        authorizationTimestamp?: TagManager.Schema.Timestamp | undefined;
        containerId?: string | undefined;
        containerVersionId?: string | undefined;
        description?: string | undefined;
        enableDebug?: boolean | undefined;
        environmentId?: string | undefined;
        fingerprint?: string | undefined;
        name?: string | undefined;
        path?: string | undefined;
        tagManagerUrl?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface Folder {
        accountId?: string | undefined;
        containerId?: string | undefined;
        fingerprint?: string | undefined;
        folderId?: string | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        path?: string | undefined;
        tagManagerUrl?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface FolderEntities {
        nextPageToken?: string | undefined;
        tag?: TagManager.Schema.Tag[] | undefined;
        trigger?: TagManager.Schema.Trigger[] | undefined;
        variable?: TagManager.Schema.Variable[] | undefined;
      }
      interface GetWorkspaceStatusResponse {
        mergeConflict?: TagManager.Schema.MergeConflict[] | undefined;
        workspaceChange?: TagManager.Schema.Entity[] | undefined;
      }
      interface ListAccountsResponse {
        account?: TagManager.Schema.Account[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface ListContainerVersionsResponse {
        containerVersionHeader?: TagManager.Schema.ContainerVersionHeader[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface ListContainersResponse {
        container?: TagManager.Schema.Container[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface ListEnabledBuiltInVariablesResponse {
        builtInVariable?: TagManager.Schema.BuiltInVariable[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface ListEnvironmentsResponse {
        environment?: TagManager.Schema.Environment[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface ListFoldersResponse {
        folder?: TagManager.Schema.Folder[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface ListTagsResponse {
        nextPageToken?: string | undefined;
        tag?: TagManager.Schema.Tag[] | undefined;
      }
      interface ListTriggersResponse {
        nextPageToken?: string | undefined;
        trigger?: TagManager.Schema.Trigger[] | undefined;
      }
      interface ListUserPermissionsResponse {
        nextPageToken?: string | undefined;
        userPermission?: TagManager.Schema.UserPermission[] | undefined;
      }
      interface ListVariablesResponse {
        nextPageToken?: string | undefined;
        variable?: TagManager.Schema.Variable[] | undefined;
      }
      interface ListWorkspacesResponse {
        nextPageToken?: string | undefined;
        workspace?: TagManager.Schema.Workspace[] | undefined;
      }
      interface ListZonesResponse {
        nextPageToken?: string | undefined;
        zone?: TagManager.Schema.Zone[] | undefined;
      }
      interface MergeConflict {
        entityInBaseVersion?: TagManager.Schema.Entity | undefined;
        entityInWorkspace?: TagManager.Schema.Entity | undefined;
      }
      interface Parameter {
        key?: string | undefined;
        list?: TagManager.Schema.Parameter[] | undefined;
        map?: TagManager.Schema.Parameter[] | undefined;
        type?: string | undefined;
        value?: string | undefined;
      }
      interface PublishContainerVersionResponse {
        compilerError?: boolean | undefined;
        containerVersion?: TagManager.Schema.ContainerVersion | undefined;
      }
      interface QuickPreviewResponse {
        compilerError?: boolean | undefined;
        containerVersion?: TagManager.Schema.ContainerVersion | undefined;
        syncStatus?: TagManager.Schema.SyncStatus | undefined;
      }
      interface RevertBuiltInVariableResponse {
        enabled?: boolean | undefined;
      }
      interface RevertFolderResponse {
        folder?: TagManager.Schema.Folder | undefined;
      }
      interface RevertTagResponse {
        tag?: TagManager.Schema.Tag | undefined;
      }
      interface RevertTriggerResponse {
        trigger?: TagManager.Schema.Trigger | undefined;
      }
      interface RevertVariableResponse {
        variable?: TagManager.Schema.Variable | undefined;
      }
      interface RevertZoneResponse {
        zone?: TagManager.Schema.Zone | undefined;
      }
      interface SetupTag {
        stopOnSetupFailure?: boolean | undefined;
        tagName?: string | undefined;
      }
      interface SyncStatus {
        mergeConflict?: boolean | undefined;
        syncError?: boolean | undefined;
      }
      interface SyncWorkspaceResponse {
        mergeConflict?: TagManager.Schema.MergeConflict[] | undefined;
        syncStatus?: TagManager.Schema.SyncStatus | undefined;
      }
      interface Tag {
        accountId?: string | undefined;
        blockingRuleId?: string[] | undefined;
        blockingTriggerId?: string[] | undefined;
        containerId?: string | undefined;
        fingerprint?: string | undefined;
        firingRuleId?: string[] | undefined;
        firingTriggerId?: string[] | undefined;
        liveOnly?: boolean | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        parameter?: TagManager.Schema.Parameter[] | undefined;
        parentFolderId?: string | undefined;
        path?: string | undefined;
        paused?: boolean | undefined;
        priority?: TagManager.Schema.Parameter | undefined;
        scheduleEndMs?: string | undefined;
        scheduleStartMs?: string | undefined;
        setupTag?: TagManager.Schema.SetupTag[] | undefined;
        tagFiringOption?: string | undefined;
        tagId?: string | undefined;
        tagManagerUrl?: string | undefined;
        teardownTag?: TagManager.Schema.TeardownTag[] | undefined;
        type?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface TeardownTag {
        stopTeardownOnFailure?: boolean | undefined;
        tagName?: string | undefined;
      }
      interface Timestamp {
        nanos?: number | undefined;
        seconds?: string | undefined;
      }
      interface Trigger {
        accountId?: string | undefined;
        autoEventFilter?: TagManager.Schema.Condition[] | undefined;
        checkValidation?: TagManager.Schema.Parameter | undefined;
        containerId?: string | undefined;
        continuousTimeMinMilliseconds?: TagManager.Schema.Parameter | undefined;
        customEventFilter?: TagManager.Schema.Condition[] | undefined;
        eventName?: TagManager.Schema.Parameter | undefined;
        filter?: TagManager.Schema.Condition[] | undefined;
        fingerprint?: string | undefined;
        horizontalScrollPercentageList?: TagManager.Schema.Parameter | undefined;
        interval?: TagManager.Schema.Parameter | undefined;
        intervalSeconds?: TagManager.Schema.Parameter | undefined;
        limit?: TagManager.Schema.Parameter | undefined;
        maxTimerLengthSeconds?: TagManager.Schema.Parameter | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        parameter?: TagManager.Schema.Parameter[] | undefined;
        parentFolderId?: string | undefined;
        path?: string | undefined;
        selector?: TagManager.Schema.Parameter | undefined;
        tagManagerUrl?: string | undefined;
        totalTimeMinMilliseconds?: TagManager.Schema.Parameter | undefined;
        triggerId?: string | undefined;
        type?: string | undefined;
        uniqueTriggerId?: TagManager.Schema.Parameter | undefined;
        verticalScrollPercentageList?: TagManager.Schema.Parameter | undefined;
        visibilitySelector?: TagManager.Schema.Parameter | undefined;
        visiblePercentageMax?: TagManager.Schema.Parameter | undefined;
        visiblePercentageMin?: TagManager.Schema.Parameter | undefined;
        waitForTags?: TagManager.Schema.Parameter | undefined;
        waitForTagsTimeout?: TagManager.Schema.Parameter | undefined;
        workspaceId?: string | undefined;
      }
      interface UserPermission {
        accountAccess?: TagManager.Schema.AccountAccess | undefined;
        accountId?: string | undefined;
        containerAccess?: TagManager.Schema.ContainerAccess[] | undefined;
        emailAddress?: string | undefined;
        path?: string | undefined;
      }
      interface Variable {
        accountId?: string | undefined;
        containerId?: string | undefined;
        disablingTriggerId?: string[] | undefined;
        enablingTriggerId?: string[] | undefined;
        fingerprint?: string | undefined;
        formatValue?: TagManager.Schema.VariableFormatValue | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        parameter?: TagManager.Schema.Parameter[] | undefined;
        parentFolderId?: string | undefined;
        path?: string | undefined;
        scheduleEndMs?: string | undefined;
        scheduleStartMs?: string | undefined;
        tagManagerUrl?: string | undefined;
        type?: string | undefined;
        variableId?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface VariableFormatValue {
        caseConversionType?: string | undefined;
        convertFalseToValue?: TagManager.Schema.Parameter | undefined;
        convertNullToValue?: TagManager.Schema.Parameter | undefined;
        convertTrueToValue?: TagManager.Schema.Parameter | undefined;
        convertUndefinedToValue?: TagManager.Schema.Parameter | undefined;
      }
      interface Workspace {
        accountId?: string | undefined;
        containerId?: string | undefined;
        description?: string | undefined;
        fingerprint?: string | undefined;
        name?: string | undefined;
        path?: string | undefined;
        tagManagerUrl?: string | undefined;
        workspaceId?: string | undefined;
      }
      interface Zone {
        accountId?: string | undefined;
        boundary?: TagManager.Schema.ZoneBoundary | undefined;
        childContainer?: TagManager.Schema.ZoneChildContainer[] | undefined;
        containerId?: string | undefined;
        fingerprint?: string | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        path?: string | undefined;
        tagManagerUrl?: string | undefined;
        typeRestriction?: TagManager.Schema.ZoneTypeRestriction | undefined;
        workspaceId?: string | undefined;
        zoneId?: string | undefined;
      }
      interface ZoneBoundary {
        condition?: TagManager.Schema.Condition[] | undefined;
        customEvaluationTriggerId?: string[] | undefined;
      }
      interface ZoneChildContainer {
        nickname?: string | undefined;
        publicId?: string | undefined;
      }
      interface ZoneTypeRestriction {
        enable?: boolean | undefined;
        whitelistedTypeId?: string[] | undefined;
      }
    }
  }
  interface TagManager {
    Accounts?: TagManager.Collection.AccountsCollection | undefined;
    // Create a new instance of Account
    newAccount(): TagManager.Schema.Account;
    // Create a new instance of AccountAccess
    newAccountAccess(): TagManager.Schema.AccountAccess;
    // Create a new instance of BuiltInVariable
    newBuiltInVariable(): TagManager.Schema.BuiltInVariable;
    // Create a new instance of Condition
    newCondition(): TagManager.Schema.Condition;
    // Create a new instance of Container
    newContainer(): TagManager.Schema.Container;
    // Create a new instance of ContainerAccess
    newContainerAccess(): TagManager.Schema.ContainerAccess;
    // Create a new instance of ContainerVersion
    newContainerVersion(): TagManager.Schema.ContainerVersion;
    // Create a new instance of CreateContainerVersionRequestVersionOptions
    newCreateContainerVersionRequestVersionOptions(): TagManager.Schema.CreateContainerVersionRequestVersionOptions;
    // Create a new instance of CustomTemplate
    newCustomTemplate(): TagManager.Schema.CustomTemplate;
    // Create a new instance of Entity
    newEntity(): TagManager.Schema.Entity;
    // Create a new instance of Environment
    newEnvironment(): TagManager.Schema.Environment;
    // Create a new instance of Folder
    newFolder(): TagManager.Schema.Folder;
    // Create a new instance of Parameter
    newParameter(): TagManager.Schema.Parameter;
    // Create a new instance of SetupTag
    newSetupTag(): TagManager.Schema.SetupTag;
    // Create a new instance of Tag
    newTag(): TagManager.Schema.Tag;
    // Create a new instance of TeardownTag
    newTeardownTag(): TagManager.Schema.TeardownTag;
    // Create a new instance of Timestamp
    newTimestamp(): TagManager.Schema.Timestamp;
    // Create a new instance of Trigger
    newTrigger(): TagManager.Schema.Trigger;
    // Create a new instance of UserPermission
    newUserPermission(): TagManager.Schema.UserPermission;
    // Create a new instance of Variable
    newVariable(): TagManager.Schema.Variable;
    // Create a new instance of VariableFormatValue
    newVariableFormatValue(): TagManager.Schema.VariableFormatValue;
    // Create a new instance of Workspace
    newWorkspace(): TagManager.Schema.Workspace;
    // Create a new instance of Zone
    newZone(): TagManager.Schema.Zone;
    // Create a new instance of ZoneBoundary
    newZoneBoundary(): TagManager.Schema.ZoneBoundary;
    // Create a new instance of ZoneChildContainer
    newZoneChildContainer(): TagManager.Schema.ZoneChildContainer;
    // Create a new instance of ZoneTypeRestriction
    newZoneTypeRestriction(): TagManager.Schema.ZoneTypeRestriction;
  }
}

declare var TagManager: GoogleAppsScript.TagManager;
