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
            Built_in_variables?: TagManager.Collection.Accounts.Containers.Workspaces.Built_in_variablesCollection;
            Folders?: TagManager.Collection.Accounts.Containers.Workspaces.FoldersCollection;
            Tags?: TagManager.Collection.Accounts.Containers.Workspaces.TagsCollection;
            Triggers?: TagManager.Collection.Accounts.Containers.Workspaces.TriggersCollection;
            Variables?: TagManager.Collection.Accounts.Containers.Workspaces.VariablesCollection;
            Zones?: TagManager.Collection.Accounts.Containers.Workspaces.ZonesCollection;
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
          Environments?: TagManager.Collection.Accounts.Containers.EnvironmentsCollection;
          Version_headers?: TagManager.Collection.Accounts.Containers.Version_headersCollection;
          Versions?: TagManager.Collection.Accounts.Containers.VersionsCollection;
          Workspaces?: TagManager.Collection.Accounts.Containers.WorkspacesCollection;
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
        Containers?: TagManager.Collection.Accounts.ContainersCollection;
        User_permissions?: TagManager.Collection.Accounts.User_permissionsCollection;
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
        accountId?: string;
        fingerprint?: string;
        name?: string;
        path?: string;
        shareData?: boolean;
        tagManagerUrl?: string;
      }
      interface AccountAccess {
        permission?: string;
      }
      interface BuiltInVariable {
        accountId?: string;
        containerId?: string;
        name?: string;
        path?: string;
        type?: string;
        workspaceId?: string;
      }
      interface Condition {
        parameter?: TagManager.Schema.Parameter[];
        type?: string;
      }
      interface Container {
        accountId?: string;
        containerId?: string;
        domainName?: string[];
        fingerprint?: string;
        name?: string;
        notes?: string;
        path?: string;
        publicId?: string;
        tagManagerUrl?: string;
        usageContext?: string[];
      }
      interface ContainerAccess {
        containerId?: string;
        permission?: string;
      }
      interface ContainerVersion {
        accountId?: string;
        builtInVariable?: TagManager.Schema.BuiltInVariable[];
        container?: TagManager.Schema.Container;
        containerId?: string;
        containerVersionId?: string;
        customTemplate?: TagManager.Schema.CustomTemplate[];
        deleted?: boolean;
        description?: string;
        fingerprint?: string;
        folder?: TagManager.Schema.Folder[];
        name?: string;
        path?: string;
        tag?: TagManager.Schema.Tag[];
        tagManagerUrl?: string;
        trigger?: TagManager.Schema.Trigger[];
        variable?: TagManager.Schema.Variable[];
        zone?: TagManager.Schema.Zone[];
      }
      interface ContainerVersionHeader {
        accountId?: string;
        containerId?: string;
        containerVersionId?: string;
        deleted?: boolean;
        name?: string;
        numCustomTemplates?: string;
        numMacros?: string;
        numRules?: string;
        numTags?: string;
        numTriggers?: string;
        numVariables?: string;
        numZones?: string;
        path?: string;
      }
      interface CreateBuiltInVariableResponse {
        builtInVariable?: TagManager.Schema.BuiltInVariable[];
      }
      interface CreateContainerVersionRequestVersionOptions {
        name?: string;
        notes?: string;
      }
      interface CreateContainerVersionResponse {
        compilerError?: boolean;
        containerVersion?: TagManager.Schema.ContainerVersion;
        newWorkspacePath?: string;
        syncStatus?: TagManager.Schema.SyncStatus;
      }
      interface CustomTemplate {
        accountId?: string;
        containerId?: string;
        fingerprint?: string;
        name?: string;
        path?: string;
        tagManagerUrl?: string;
        templateData?: string;
        templateId?: string;
        workspaceId?: string;
      }
      interface Entity {
        changeStatus?: string;
        folder?: TagManager.Schema.Folder;
        tag?: TagManager.Schema.Tag;
        trigger?: TagManager.Schema.Trigger;
        variable?: TagManager.Schema.Variable;
      }
      interface Environment {
        accountId?: string;
        authorizationCode?: string;
        authorizationTimestamp?: TagManager.Schema.Timestamp;
        containerId?: string;
        containerVersionId?: string;
        description?: string;
        enableDebug?: boolean;
        environmentId?: string;
        fingerprint?: string;
        name?: string;
        path?: string;
        tagManagerUrl?: string;
        type?: string;
        url?: string;
        workspaceId?: string;
      }
      interface Folder {
        accountId?: string;
        containerId?: string;
        fingerprint?: string;
        folderId?: string;
        name?: string;
        notes?: string;
        path?: string;
        tagManagerUrl?: string;
        workspaceId?: string;
      }
      interface FolderEntities {
        nextPageToken?: string;
        tag?: TagManager.Schema.Tag[];
        trigger?: TagManager.Schema.Trigger[];
        variable?: TagManager.Schema.Variable[];
      }
      interface GetWorkspaceStatusResponse {
        mergeConflict?: TagManager.Schema.MergeConflict[];
        workspaceChange?: TagManager.Schema.Entity[];
      }
      interface ListAccountsResponse {
        account?: TagManager.Schema.Account[];
        nextPageToken?: string;
      }
      interface ListContainerVersionsResponse {
        containerVersionHeader?: TagManager.Schema.ContainerVersionHeader[];
        nextPageToken?: string;
      }
      interface ListContainersResponse {
        container?: TagManager.Schema.Container[];
        nextPageToken?: string;
      }
      interface ListEnabledBuiltInVariablesResponse {
        builtInVariable?: TagManager.Schema.BuiltInVariable[];
        nextPageToken?: string;
      }
      interface ListEnvironmentsResponse {
        environment?: TagManager.Schema.Environment[];
        nextPageToken?: string;
      }
      interface ListFoldersResponse {
        folder?: TagManager.Schema.Folder[];
        nextPageToken?: string;
      }
      interface ListTagsResponse {
        nextPageToken?: string;
        tag?: TagManager.Schema.Tag[];
      }
      interface ListTriggersResponse {
        nextPageToken?: string;
        trigger?: TagManager.Schema.Trigger[];
      }
      interface ListUserPermissionsResponse {
        nextPageToken?: string;
        userPermission?: TagManager.Schema.UserPermission[];
      }
      interface ListVariablesResponse {
        nextPageToken?: string;
        variable?: TagManager.Schema.Variable[];
      }
      interface ListWorkspacesResponse {
        nextPageToken?: string;
        workspace?: TagManager.Schema.Workspace[];
      }
      interface ListZonesResponse {
        nextPageToken?: string;
        zone?: TagManager.Schema.Zone[];
      }
      interface MergeConflict {
        entityInBaseVersion?: TagManager.Schema.Entity;
        entityInWorkspace?: TagManager.Schema.Entity;
      }
      interface Parameter {
        key?: string;
        list?: TagManager.Schema.Parameter[];
        map?: TagManager.Schema.Parameter[];
        type?: string;
        value?: string;
      }
      interface PublishContainerVersionResponse {
        compilerError?: boolean;
        containerVersion?: TagManager.Schema.ContainerVersion;
      }
      interface QuickPreviewResponse {
        compilerError?: boolean;
        containerVersion?: TagManager.Schema.ContainerVersion;
        syncStatus?: TagManager.Schema.SyncStatus;
      }
      interface RevertBuiltInVariableResponse {
        enabled?: boolean;
      }
      interface RevertFolderResponse {
        folder?: TagManager.Schema.Folder;
      }
      interface RevertTagResponse {
        tag?: TagManager.Schema.Tag;
      }
      interface RevertTriggerResponse {
        trigger?: TagManager.Schema.Trigger;
      }
      interface RevertVariableResponse {
        variable?: TagManager.Schema.Variable;
      }
      interface RevertZoneResponse {
        zone?: TagManager.Schema.Zone;
      }
      interface SetupTag {
        stopOnSetupFailure?: boolean;
        tagName?: string;
      }
      interface SyncStatus {
        mergeConflict?: boolean;
        syncError?: boolean;
      }
      interface SyncWorkspaceResponse {
        mergeConflict?: TagManager.Schema.MergeConflict[];
        syncStatus?: TagManager.Schema.SyncStatus;
      }
      interface Tag {
        accountId?: string;
        blockingRuleId?: string[];
        blockingTriggerId?: string[];
        containerId?: string;
        fingerprint?: string;
        firingRuleId?: string[];
        firingTriggerId?: string[];
        liveOnly?: boolean;
        name?: string;
        notes?: string;
        parameter?: TagManager.Schema.Parameter[];
        parentFolderId?: string;
        path?: string;
        paused?: boolean;
        priority?: TagManager.Schema.Parameter;
        scheduleEndMs?: string;
        scheduleStartMs?: string;
        setupTag?: TagManager.Schema.SetupTag[];
        tagFiringOption?: string;
        tagId?: string;
        tagManagerUrl?: string;
        teardownTag?: TagManager.Schema.TeardownTag[];
        type?: string;
        workspaceId?: string;
      }
      interface TeardownTag {
        stopTeardownOnFailure?: boolean;
        tagName?: string;
      }
      interface Timestamp {
        nanos?: number;
        seconds?: string;
      }
      interface Trigger {
        accountId?: string;
        autoEventFilter?: TagManager.Schema.Condition[];
        checkValidation?: TagManager.Schema.Parameter;
        containerId?: string;
        continuousTimeMinMilliseconds?: TagManager.Schema.Parameter;
        customEventFilter?: TagManager.Schema.Condition[];
        eventName?: TagManager.Schema.Parameter;
        filter?: TagManager.Schema.Condition[];
        fingerprint?: string;
        horizontalScrollPercentageList?: TagManager.Schema.Parameter;
        interval?: TagManager.Schema.Parameter;
        intervalSeconds?: TagManager.Schema.Parameter;
        limit?: TagManager.Schema.Parameter;
        maxTimerLengthSeconds?: TagManager.Schema.Parameter;
        name?: string;
        notes?: string;
        parameter?: TagManager.Schema.Parameter[];
        parentFolderId?: string;
        path?: string;
        selector?: TagManager.Schema.Parameter;
        tagManagerUrl?: string;
        totalTimeMinMilliseconds?: TagManager.Schema.Parameter;
        triggerId?: string;
        type?: string;
        uniqueTriggerId?: TagManager.Schema.Parameter;
        verticalScrollPercentageList?: TagManager.Schema.Parameter;
        visibilitySelector?: TagManager.Schema.Parameter;
        visiblePercentageMax?: TagManager.Schema.Parameter;
        visiblePercentageMin?: TagManager.Schema.Parameter;
        waitForTags?: TagManager.Schema.Parameter;
        waitForTagsTimeout?: TagManager.Schema.Parameter;
        workspaceId?: string;
      }
      interface UserPermission {
        accountAccess?: TagManager.Schema.AccountAccess;
        accountId?: string;
        containerAccess?: TagManager.Schema.ContainerAccess[];
        emailAddress?: string;
        path?: string;
      }
      interface Variable {
        accountId?: string;
        containerId?: string;
        disablingTriggerId?: string[];
        enablingTriggerId?: string[];
        fingerprint?: string;
        formatValue?: TagManager.Schema.VariableFormatValue;
        name?: string;
        notes?: string;
        parameter?: TagManager.Schema.Parameter[];
        parentFolderId?: string;
        path?: string;
        scheduleEndMs?: string;
        scheduleStartMs?: string;
        tagManagerUrl?: string;
        type?: string;
        variableId?: string;
        workspaceId?: string;
      }
      interface VariableFormatValue {
        caseConversionType?: string;
        convertFalseToValue?: TagManager.Schema.Parameter;
        convertNullToValue?: TagManager.Schema.Parameter;
        convertTrueToValue?: TagManager.Schema.Parameter;
        convertUndefinedToValue?: TagManager.Schema.Parameter;
      }
      interface Workspace {
        accountId?: string;
        containerId?: string;
        description?: string;
        fingerprint?: string;
        name?: string;
        path?: string;
        tagManagerUrl?: string;
        workspaceId?: string;
      }
      interface Zone {
        accountId?: string;
        boundary?: TagManager.Schema.ZoneBoundary;
        childContainer?: TagManager.Schema.ZoneChildContainer[];
        containerId?: string;
        fingerprint?: string;
        name?: string;
        notes?: string;
        path?: string;
        tagManagerUrl?: string;
        typeRestriction?: TagManager.Schema.ZoneTypeRestriction;
        workspaceId?: string;
        zoneId?: string;
      }
      interface ZoneBoundary {
        condition?: TagManager.Schema.Condition[];
        customEvaluationTriggerId?: string[];
      }
      interface ZoneChildContainer {
        nickname?: string;
        publicId?: string;
      }
      interface ZoneTypeRestriction {
        enable?: boolean;
        whitelistedTypeId?: string[];
      }
    }
  }
  interface TagManager {
    Accounts?: TagManager.Collection.AccountsCollection;
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
