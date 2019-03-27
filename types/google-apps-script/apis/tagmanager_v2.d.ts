// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Tagmanager_v2 {
    namespace Collection {
      namespace Accounts {
        namespace Containers {
          namespace Workspaces {
            export interface Built_in_variablesCollection {
              // Creates one or more GTM Built-In Variables.
              create(parent: string): Tagmanager_v2.Schema.CreateBuiltInVariableResponse;
              // Creates one or more GTM Built-In Variables.
              create(parent: string, optionalArgs: object): Tagmanager_v2.Schema.CreateBuiltInVariableResponse;
              // Lists all the enabled Built-In Variables of a GTM Container.
              list(parent: string): Tagmanager_v2.Schema.ListEnabledBuiltInVariablesResponse;
              // Lists all the enabled Built-In Variables of a GTM Container.
              list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListEnabledBuiltInVariablesResponse;
              // Deletes one or more GTM Built-In Variables.
              remove(path: string): void;
              // Deletes one or more GTM Built-In Variables.
              remove(path: string, optionalArgs: object): void;
              // Reverts changes to a GTM Built-In Variables in a GTM Workspace.
              revert(path: string): Tagmanager_v2.Schema.RevertBuiltInVariableResponse;
              // Reverts changes to a GTM Built-In Variables in a GTM Workspace.
              revert(path: string, optionalArgs: object): Tagmanager_v2.Schema.RevertBuiltInVariableResponse;
            }
            export interface FoldersCollection {
              // Creates a GTM Folder.
              create(resource: Schema.Folder, parent: string): Tagmanager_v2.Schema.Folder;
              // List all entities in a GTM Folder.
              entities(path: string): Tagmanager_v2.Schema.FolderEntities;
              // List all entities in a GTM Folder.
              entities(path: string, optionalArgs: object): Tagmanager_v2.Schema.FolderEntities;
              // Gets a GTM Folder.
              get(path: string): Tagmanager_v2.Schema.Folder;
              // Lists all GTM Folders of a Container.
              list(parent: string): Tagmanager_v2.Schema.ListFoldersResponse;
              // Lists all GTM Folders of a Container.
              list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListFoldersResponse;
              // Moves entities to a GTM Folder.
              move_entities_to_folder(resource: Schema.Folder, path: string): void;
              // Moves entities to a GTM Folder.
              move_entities_to_folder(resource: Schema.Folder, path: string, optionalArgs: object): void;
              // Deletes a GTM Folder.
              remove(path: string): void;
              // Reverts changes to a GTM Folder in a GTM Workspace.
              revert(path: string): Tagmanager_v2.Schema.RevertFolderResponse;
              // Reverts changes to a GTM Folder in a GTM Workspace.
              revert(path: string, optionalArgs: object): Tagmanager_v2.Schema.RevertFolderResponse;
              // Updates a GTM Folder.
              update(resource: Schema.Folder, path: string): Tagmanager_v2.Schema.Folder;
              // Updates a GTM Folder.
              update(resource: Schema.Folder, path: string, optionalArgs: object): Tagmanager_v2.Schema.Folder;
            }
            export interface TagsCollection {
              // Creates a GTM Tag.
              create(resource: Schema.Tag, parent: string): Tagmanager_v2.Schema.Tag;
              // Gets a GTM Tag.
              get(path: string): Tagmanager_v2.Schema.Tag;
              // Lists all GTM Tags of a Container.
              list(parent: string): Tagmanager_v2.Schema.ListTagsResponse;
              // Lists all GTM Tags of a Container.
              list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListTagsResponse;
              // Deletes a GTM Tag.
              remove(path: string): void;
              // Reverts changes to a GTM Tag in a GTM Workspace.
              revert(path: string): Tagmanager_v2.Schema.RevertTagResponse;
              // Reverts changes to a GTM Tag in a GTM Workspace.
              revert(path: string, optionalArgs: object): Tagmanager_v2.Schema.RevertTagResponse;
              // Updates a GTM Tag.
              update(resource: Schema.Tag, path: string): Tagmanager_v2.Schema.Tag;
              // Updates a GTM Tag.
              update(resource: Schema.Tag, path: string, optionalArgs: object): Tagmanager_v2.Schema.Tag;
            }
            export interface TriggersCollection {
              // Creates a GTM Trigger.
              create(resource: Schema.Trigger, parent: string): Tagmanager_v2.Schema.Trigger;
              // Gets a GTM Trigger.
              get(path: string): Tagmanager_v2.Schema.Trigger;
              // Lists all GTM Triggers of a Container.
              list(parent: string): Tagmanager_v2.Schema.ListTriggersResponse;
              // Lists all GTM Triggers of a Container.
              list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListTriggersResponse;
              // Deletes a GTM Trigger.
              remove(path: string): void;
              // Reverts changes to a GTM Trigger in a GTM Workspace.
              revert(path: string): Tagmanager_v2.Schema.RevertTriggerResponse;
              // Reverts changes to a GTM Trigger in a GTM Workspace.
              revert(path: string, optionalArgs: object): Tagmanager_v2.Schema.RevertTriggerResponse;
              // Updates a GTM Trigger.
              update(resource: Schema.Trigger, path: string): Tagmanager_v2.Schema.Trigger;
              // Updates a GTM Trigger.
              update(resource: Schema.Trigger, path: string, optionalArgs: object): Tagmanager_v2.Schema.Trigger;
            }
            export interface VariablesCollection {
              // Creates a GTM Variable.
              create(resource: Schema.Variable, parent: string): Tagmanager_v2.Schema.Variable;
              // Gets a GTM Variable.
              get(path: string): Tagmanager_v2.Schema.Variable;
              // Lists all GTM Variables of a Container.
              list(parent: string): Tagmanager_v2.Schema.ListVariablesResponse;
              // Lists all GTM Variables of a Container.
              list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListVariablesResponse;
              // Deletes a GTM Variable.
              remove(path: string): void;
              // Reverts changes to a GTM Variable in a GTM Workspace.
              revert(path: string): Tagmanager_v2.Schema.RevertVariableResponse;
              // Reverts changes to a GTM Variable in a GTM Workspace.
              revert(path: string, optionalArgs: object): Tagmanager_v2.Schema.RevertVariableResponse;
              // Updates a GTM Variable.
              update(resource: Schema.Variable, path: string): Tagmanager_v2.Schema.Variable;
              // Updates a GTM Variable.
              update(resource: Schema.Variable, path: string, optionalArgs: object): Tagmanager_v2.Schema.Variable;
            }
            export interface ZonesCollection {
              // Creates a GTM Zone.
              create(resource: Schema.Zone, parent: string): Tagmanager_v2.Schema.Zone;
              // Gets a GTM Zone.
              get(path: string): Tagmanager_v2.Schema.Zone;
              // Lists all GTM Zones of a GTM container workspace.
              list(parent: string): Tagmanager_v2.Schema.ListZonesResponse;
              // Lists all GTM Zones of a GTM container workspace.
              list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListZonesResponse;
              // Deletes a GTM Zone.
              remove(path: string): void;
              // Reverts changes to a GTM Zone in a GTM Workspace.
              revert(path: string): Tagmanager_v2.Schema.RevertZoneResponse;
              // Reverts changes to a GTM Zone in a GTM Workspace.
              revert(path: string, optionalArgs: object): Tagmanager_v2.Schema.RevertZoneResponse;
              // Updates a GTM Zone.
              update(resource: Schema.Zone, path: string): Tagmanager_v2.Schema.Zone;
              // Updates a GTM Zone.
              update(resource: Schema.Zone, path: string, optionalArgs: object): Tagmanager_v2.Schema.Zone;
            }
          }
          export interface EnvironmentsCollection {
            // Creates a GTM Environment.
            create(resource: Schema.Environment, parent: string): Tagmanager_v2.Schema.Environment;
            // Gets a GTM Environment.
            get(path: string): Tagmanager_v2.Schema.Environment;
            // Lists all GTM Environments of a GTM Container.
            list(parent: string): Tagmanager_v2.Schema.ListEnvironmentsResponse;
            // Lists all GTM Environments of a GTM Container.
            list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListEnvironmentsResponse;
            // Re-generates the authorization code for a GTM Environment.
            reauthorize(resource: Schema.Environment, path: string): Tagmanager_v2.Schema.Environment;
            // Deletes a GTM Environment.
            remove(path: string): void;
            // Updates a GTM Environment.
            update(resource: Schema.Environment, path: string): Tagmanager_v2.Schema.Environment;
            // Updates a GTM Environment.
            update(resource: Schema.Environment, path: string, optionalArgs: object): Tagmanager_v2.Schema.Environment;
          }
          export interface Version_headersCollection {
            // Gets the latest container version header
            latest(parent: string): Tagmanager_v2.Schema.ContainerVersionHeader;
            // Lists all Container Versions of a GTM Container.
            list(parent: string): Tagmanager_v2.Schema.ListContainerVersionsResponse;
            // Lists all Container Versions of a GTM Container.
            list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListContainerVersionsResponse;
          }
          export interface VersionsCollection {
            // Gets a Container Version.
            get(path: string): Tagmanager_v2.Schema.ContainerVersion;
            // Gets a Container Version.
            get(path: string, optionalArgs: object): Tagmanager_v2.Schema.ContainerVersion;
            // Gets the live (i.e. published) container version
            live(parent: string): Tagmanager_v2.Schema.ContainerVersion;
            // Publishes a Container Version.
            publish(path: string): Tagmanager_v2.Schema.PublishContainerVersionResponse;
            // Publishes a Container Version.
            publish(path: string, optionalArgs: object): Tagmanager_v2.Schema.PublishContainerVersionResponse;
            // Deletes a Container Version.
            remove(path: string): void;
            // Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
            set_latest(path: string): Tagmanager_v2.Schema.ContainerVersion;
            // Undeletes a Container Version.
            undelete(path: string): Tagmanager_v2.Schema.ContainerVersion;
            // Updates a Container Version.
            update(resource: Schema.ContainerVersion, path: string): Tagmanager_v2.Schema.ContainerVersion;
            // Updates a Container Version.
            update(resource: Schema.ContainerVersion, path: string, optionalArgs: object): Tagmanager_v2.Schema.ContainerVersion;
          }
          export interface WorkspacesCollection {
            Built_in_variables?: Tagmanager_v2.Collection.Accounts.Containers.Workspaces.Built_in_variablesCollection;
            Folders?: Tagmanager_v2.Collection.Accounts.Containers.Workspaces.FoldersCollection;
            Tags?: Tagmanager_v2.Collection.Accounts.Containers.Workspaces.TagsCollection;
            Triggers?: Tagmanager_v2.Collection.Accounts.Containers.Workspaces.TriggersCollection;
            Variables?: Tagmanager_v2.Collection.Accounts.Containers.Workspaces.VariablesCollection;
            Zones?: Tagmanager_v2.Collection.Accounts.Containers.Workspaces.ZonesCollection;
            // Creates a Workspace.
            create(resource: Schema.Workspace, parent: string): Tagmanager_v2.Schema.Workspace;
            // Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
            create_version(resource: Schema.CreateContainerVersionRequestVersionOptions, path: string): Tagmanager_v2.Schema.CreateContainerVersionResponse;
            // Gets a Workspace.
            get(path: string): Tagmanager_v2.Schema.Workspace;
            // Finds conflicting and modified entities in the workspace.
            getStatus(path: string): Tagmanager_v2.Schema.GetWorkspaceStatusResponse;
            // Lists all Workspaces that belong to a GTM Container.
            list(parent: string): Tagmanager_v2.Schema.ListWorkspacesResponse;
            // Lists all Workspaces that belong to a GTM Container.
            list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListWorkspacesResponse;
            // Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
            quick_preview(path: string): Tagmanager_v2.Schema.QuickPreviewResponse;
            // Deletes a Workspace.
            remove(path: string): void;
            // Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
            resolve_conflict(resource: Schema.Entity, path: string): void;
            // Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
            resolve_conflict(resource: Schema.Entity, path: string, optionalArgs: object): void;
            // Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
            sync(path: string): Tagmanager_v2.Schema.SyncWorkspaceResponse;
            // Updates a Workspace.
            update(resource: Schema.Workspace, path: string): Tagmanager_v2.Schema.Workspace;
            // Updates a Workspace.
            update(resource: Schema.Workspace, path: string, optionalArgs: object): Tagmanager_v2.Schema.Workspace;
          }
        }
        export interface ContainersCollection {
          Environments?: Tagmanager_v2.Collection.Accounts.Containers.EnvironmentsCollection;
          Version_headers?: Tagmanager_v2.Collection.Accounts.Containers.Version_headersCollection;
          Versions?: Tagmanager_v2.Collection.Accounts.Containers.VersionsCollection;
          Workspaces?: Tagmanager_v2.Collection.Accounts.Containers.WorkspacesCollection;
          // Creates a Container.
          create(resource: Schema.Container, parent: string): Tagmanager_v2.Schema.Container;
          // Gets a Container.
          get(path: string): Tagmanager_v2.Schema.Container;
          // Lists all Containers that belongs to a GTM Account.
          list(parent: string): Tagmanager_v2.Schema.ListContainersResponse;
          // Lists all Containers that belongs to a GTM Account.
          list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListContainersResponse;
          // Deletes a Container.
          remove(path: string): void;
          // Updates a Container.
          update(resource: Schema.Container, path: string): Tagmanager_v2.Schema.Container;
          // Updates a Container.
          update(resource: Schema.Container, path: string, optionalArgs: object): Tagmanager_v2.Schema.Container;
        }
        export interface User_permissionsCollection {
          // Creates a user's Account & Container access.
          create(resource: Schema.UserPermission, parent: string): Tagmanager_v2.Schema.UserPermission;
          // Gets a user's Account & Container access.
          get(path: string): Tagmanager_v2.Schema.UserPermission;
          // List all users that have access to the account along with Account and Container user access granted to each of them.
          list(parent: string): Tagmanager_v2.Schema.ListUserPermissionsResponse;
          // List all users that have access to the account along with Account and Container user access granted to each of them.
          list(parent: string, optionalArgs: object): Tagmanager_v2.Schema.ListUserPermissionsResponse;
          // Removes a user from the account, revoking access to it and all of its containers.
          remove(path: string): void;
          // Updates a user's Account & Container access.
          update(resource: Schema.UserPermission, path: string): Tagmanager_v2.Schema.UserPermission;
        }
      }
      export interface AccountsCollection {
        Containers?: Tagmanager_v2.Collection.Accounts.ContainersCollection;
        User_permissions?: Tagmanager_v2.Collection.Accounts.User_permissionsCollection;
        // Gets a GTM Account.
        get(path: string): Tagmanager_v2.Schema.Account;
        // Lists all GTM Accounts that a user has access to.
        list(): Tagmanager_v2.Schema.ListAccountsResponse;
        // Lists all GTM Accounts that a user has access to.
        list(optionalArgs: object): Tagmanager_v2.Schema.ListAccountsResponse;
        // Updates a GTM Account.
        update(resource: Schema.Account, path: string): Tagmanager_v2.Schema.Account;
        // Updates a GTM Account.
        update(resource: Schema.Account, path: string, optionalArgs: object): Tagmanager_v2.Schema.Account;
      }
    }
    namespace Schema {
      export interface Account {
        accountId?: string;
        fingerprint?: string;
        name?: string;
        path?: string;
        shareData?: boolean;
        tagManagerUrl?: string;
      }
      export interface AccountAccess {
        permission?: string;
      }
      export interface BuiltInVariable {
        accountId?: string;
        containerId?: string;
        name?: string;
        path?: string;
        type?: string;
        workspaceId?: string;
      }
      export interface Condition {
        parameter?: Tagmanager_v2.Schema.Parameter[];
        type?: string;
      }
      export interface Container {
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
      export interface ContainerAccess {
        containerId?: string;
        permission?: string;
      }
      export interface ContainerVersion {
        accountId?: string;
        builtInVariable?: Tagmanager_v2.Schema.BuiltInVariable[];
        container?: Tagmanager_v2.Schema.Container;
        containerId?: string;
        containerVersionId?: string;
        customTemplate?: Tagmanager_v2.Schema.CustomTemplate[];
        deleted?: boolean;
        description?: string;
        fingerprint?: string;
        folder?: Tagmanager_v2.Schema.Folder[];
        name?: string;
        path?: string;
        tag?: Tagmanager_v2.Schema.Tag[];
        tagManagerUrl?: string;
        trigger?: Tagmanager_v2.Schema.Trigger[];
        variable?: Tagmanager_v2.Schema.Variable[];
        zone?: Tagmanager_v2.Schema.Zone[];
      }
      export interface ContainerVersionHeader {
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
      export interface CreateBuiltInVariableResponse {
        builtInVariable?: Tagmanager_v2.Schema.BuiltInVariable[];
      }
      export interface CreateContainerVersionRequestVersionOptions {
        name?: string;
        notes?: string;
      }
      export interface CreateContainerVersionResponse {
        compilerError?: boolean;
        containerVersion?: Tagmanager_v2.Schema.ContainerVersion;
        newWorkspacePath?: string;
        syncStatus?: Tagmanager_v2.Schema.SyncStatus;
      }
      export interface CustomTemplate {
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
      export interface Entity {
        changeStatus?: string;
        folder?: Tagmanager_v2.Schema.Folder;
        tag?: Tagmanager_v2.Schema.Tag;
        trigger?: Tagmanager_v2.Schema.Trigger;
        variable?: Tagmanager_v2.Schema.Variable;
      }
      export interface Environment {
        accountId?: string;
        authorizationCode?: string;
        authorizationTimestamp?: Tagmanager_v2.Schema.Timestamp;
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
      export interface Folder {
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
      export interface FolderEntities {
        nextPageToken?: string;
        tag?: Tagmanager_v2.Schema.Tag[];
        trigger?: Tagmanager_v2.Schema.Trigger[];
        variable?: Tagmanager_v2.Schema.Variable[];
      }
      export interface GetWorkspaceStatusResponse {
        mergeConflict?: Tagmanager_v2.Schema.MergeConflict[];
        workspaceChange?: Tagmanager_v2.Schema.Entity[];
      }
      export interface ListAccountsResponse {
        account?: Tagmanager_v2.Schema.Account[];
        nextPageToken?: string;
      }
      export interface ListContainerVersionsResponse {
        containerVersionHeader?: Tagmanager_v2.Schema.ContainerVersionHeader[];
        nextPageToken?: string;
      }
      export interface ListContainersResponse {
        container?: Tagmanager_v2.Schema.Container[];
        nextPageToken?: string;
      }
      export interface ListEnabledBuiltInVariablesResponse {
        builtInVariable?: Tagmanager_v2.Schema.BuiltInVariable[];
        nextPageToken?: string;
      }
      export interface ListEnvironmentsResponse {
        environment?: Tagmanager_v2.Schema.Environment[];
        nextPageToken?: string;
      }
      export interface ListFoldersResponse {
        folder?: Tagmanager_v2.Schema.Folder[];
        nextPageToken?: string;
      }
      export interface ListTagsResponse {
        nextPageToken?: string;
        tag?: Tagmanager_v2.Schema.Tag[];
      }
      export interface ListTriggersResponse {
        nextPageToken?: string;
        trigger?: Tagmanager_v2.Schema.Trigger[];
      }
      export interface ListUserPermissionsResponse {
        nextPageToken?: string;
        userPermission?: Tagmanager_v2.Schema.UserPermission[];
      }
      export interface ListVariablesResponse {
        nextPageToken?: string;
        variable?: Tagmanager_v2.Schema.Variable[];
      }
      export interface ListWorkspacesResponse {
        nextPageToken?: string;
        workspace?: Tagmanager_v2.Schema.Workspace[];
      }
      export interface ListZonesResponse {
        nextPageToken?: string;
        zone?: Tagmanager_v2.Schema.Zone[];
      }
      export interface MergeConflict {
        entityInBaseVersion?: Tagmanager_v2.Schema.Entity;
        entityInWorkspace?: Tagmanager_v2.Schema.Entity;
      }
      export interface Parameter {
        key?: string;
        list?: Tagmanager_v2.Schema.Parameter[];
        map?: Tagmanager_v2.Schema.Parameter[];
        type?: string;
        value?: string;
      }
      export interface PublishContainerVersionResponse {
        compilerError?: boolean;
        containerVersion?: Tagmanager_v2.Schema.ContainerVersion;
      }
      export interface QuickPreviewResponse {
        compilerError?: boolean;
        containerVersion?: Tagmanager_v2.Schema.ContainerVersion;
        syncStatus?: Tagmanager_v2.Schema.SyncStatus;
      }
      export interface RevertBuiltInVariableResponse {
        enabled?: boolean;
      }
      export interface RevertFolderResponse {
        folder?: Tagmanager_v2.Schema.Folder;
      }
      export interface RevertTagResponse {
        tag?: Tagmanager_v2.Schema.Tag;
      }
      export interface RevertTriggerResponse {
        trigger?: Tagmanager_v2.Schema.Trigger;
      }
      export interface RevertVariableResponse {
        variable?: Tagmanager_v2.Schema.Variable;
      }
      export interface RevertZoneResponse {
        zone?: Tagmanager_v2.Schema.Zone;
      }
      export interface SetupTag {
        stopOnSetupFailure?: boolean;
        tagName?: string;
      }
      export interface SyncStatus {
        mergeConflict?: boolean;
        syncError?: boolean;
      }
      export interface SyncWorkspaceResponse {
        mergeConflict?: Tagmanager_v2.Schema.MergeConflict[];
        syncStatus?: Tagmanager_v2.Schema.SyncStatus;
      }
      export interface Tag {
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
        parameter?: Tagmanager_v2.Schema.Parameter[];
        parentFolderId?: string;
        path?: string;
        paused?: boolean;
        priority?: Tagmanager_v2.Schema.Parameter;
        scheduleEndMs?: string;
        scheduleStartMs?: string;
        setupTag?: Tagmanager_v2.Schema.SetupTag[];
        tagFiringOption?: string;
        tagId?: string;
        tagManagerUrl?: string;
        teardownTag?: Tagmanager_v2.Schema.TeardownTag[];
        type?: string;
        workspaceId?: string;
      }
      export interface TeardownTag {
        stopTeardownOnFailure?: boolean;
        tagName?: string;
      }
      export interface Timestamp {
        nanos?: number;
        seconds?: string;
      }
      export interface Trigger {
        accountId?: string;
        autoEventFilter?: Tagmanager_v2.Schema.Condition[];
        checkValidation?: Tagmanager_v2.Schema.Parameter;
        containerId?: string;
        continuousTimeMinMilliseconds?: Tagmanager_v2.Schema.Parameter;
        customEventFilter?: Tagmanager_v2.Schema.Condition[];
        eventName?: Tagmanager_v2.Schema.Parameter;
        filter?: Tagmanager_v2.Schema.Condition[];
        fingerprint?: string;
        horizontalScrollPercentageList?: Tagmanager_v2.Schema.Parameter;
        interval?: Tagmanager_v2.Schema.Parameter;
        intervalSeconds?: Tagmanager_v2.Schema.Parameter;
        limit?: Tagmanager_v2.Schema.Parameter;
        maxTimerLengthSeconds?: Tagmanager_v2.Schema.Parameter;
        name?: string;
        notes?: string;
        parameter?: Tagmanager_v2.Schema.Parameter[];
        parentFolderId?: string;
        path?: string;
        selector?: Tagmanager_v2.Schema.Parameter;
        tagManagerUrl?: string;
        totalTimeMinMilliseconds?: Tagmanager_v2.Schema.Parameter;
        triggerId?: string;
        type?: string;
        uniqueTriggerId?: Tagmanager_v2.Schema.Parameter;
        verticalScrollPercentageList?: Tagmanager_v2.Schema.Parameter;
        visibilitySelector?: Tagmanager_v2.Schema.Parameter;
        visiblePercentageMax?: Tagmanager_v2.Schema.Parameter;
        visiblePercentageMin?: Tagmanager_v2.Schema.Parameter;
        waitForTags?: Tagmanager_v2.Schema.Parameter;
        waitForTagsTimeout?: Tagmanager_v2.Schema.Parameter;
        workspaceId?: string;
      }
      export interface UserPermission {
        accountAccess?: Tagmanager_v2.Schema.AccountAccess;
        accountId?: string;
        containerAccess?: Tagmanager_v2.Schema.ContainerAccess[];
        emailAddress?: string;
        path?: string;
      }
      export interface Variable {
        accountId?: string;
        containerId?: string;
        disablingTriggerId?: string[];
        enablingTriggerId?: string[];
        fingerprint?: string;
        formatValue?: Tagmanager_v2.Schema.VariableFormatValue;
        name?: string;
        notes?: string;
        parameter?: Tagmanager_v2.Schema.Parameter[];
        parentFolderId?: string;
        path?: string;
        scheduleEndMs?: string;
        scheduleStartMs?: string;
        tagManagerUrl?: string;
        type?: string;
        variableId?: string;
        workspaceId?: string;
      }
      export interface VariableFormatValue {
        caseConversionType?: string;
        convertFalseToValue?: Tagmanager_v2.Schema.Parameter;
        convertNullToValue?: Tagmanager_v2.Schema.Parameter;
        convertTrueToValue?: Tagmanager_v2.Schema.Parameter;
        convertUndefinedToValue?: Tagmanager_v2.Schema.Parameter;
      }
      export interface Workspace {
        accountId?: string;
        containerId?: string;
        description?: string;
        fingerprint?: string;
        name?: string;
        path?: string;
        tagManagerUrl?: string;
        workspaceId?: string;
      }
      export interface Zone {
        accountId?: string;
        boundary?: Tagmanager_v2.Schema.ZoneBoundary;
        childContainer?: Tagmanager_v2.Schema.ZoneChildContainer[];
        containerId?: string;
        fingerprint?: string;
        name?: string;
        notes?: string;
        path?: string;
        tagManagerUrl?: string;
        typeRestriction?: Tagmanager_v2.Schema.ZoneTypeRestriction;
        workspaceId?: string;
        zoneId?: string;
      }
      export interface ZoneBoundary {
        condition?: Tagmanager_v2.Schema.Condition[];
        customEvaluationTriggerId?: string[];
      }
      export interface ZoneChildContainer {
        nickname?: string;
        publicId?: string;
      }
      export interface ZoneTypeRestriction {
        enable?: boolean;
        whitelistedTypeId?: string[];
      }
    }
  }
  export interface Tagmanager_v2 {
    Accounts?: Tagmanager_v2.Collection.AccountsCollection;
    // Create a new instance of Account
    newAccount(): Tagmanager_v2.Schema.Account;
    // Create a new instance of AccountAccess
    newAccountAccess(): Tagmanager_v2.Schema.AccountAccess;
    // Create a new instance of BuiltInVariable
    newBuiltInVariable(): Tagmanager_v2.Schema.BuiltInVariable;
    // Create a new instance of Condition
    newCondition(): Tagmanager_v2.Schema.Condition;
    // Create a new instance of Container
    newContainer(): Tagmanager_v2.Schema.Container;
    // Create a new instance of ContainerAccess
    newContainerAccess(): Tagmanager_v2.Schema.ContainerAccess;
    // Create a new instance of ContainerVersion
    newContainerVersion(): Tagmanager_v2.Schema.ContainerVersion;
    // Create a new instance of CreateContainerVersionRequestVersionOptions
    newCreateContainerVersionRequestVersionOptions(): Tagmanager_v2.Schema.CreateContainerVersionRequestVersionOptions;
    // Create a new instance of CustomTemplate
    newCustomTemplate(): Tagmanager_v2.Schema.CustomTemplate;
    // Create a new instance of Entity
    newEntity(): Tagmanager_v2.Schema.Entity;
    // Create a new instance of Environment
    newEnvironment(): Tagmanager_v2.Schema.Environment;
    // Create a new instance of Folder
    newFolder(): Tagmanager_v2.Schema.Folder;
    // Create a new instance of Parameter
    newParameter(): Tagmanager_v2.Schema.Parameter;
    // Create a new instance of SetupTag
    newSetupTag(): Tagmanager_v2.Schema.SetupTag;
    // Create a new instance of Tag
    newTag(): Tagmanager_v2.Schema.Tag;
    // Create a new instance of TeardownTag
    newTeardownTag(): Tagmanager_v2.Schema.TeardownTag;
    // Create a new instance of Timestamp
    newTimestamp(): Tagmanager_v2.Schema.Timestamp;
    // Create a new instance of Trigger
    newTrigger(): Tagmanager_v2.Schema.Trigger;
    // Create a new instance of UserPermission
    newUserPermission(): Tagmanager_v2.Schema.UserPermission;
    // Create a new instance of Variable
    newVariable(): Tagmanager_v2.Schema.Variable;
    // Create a new instance of VariableFormatValue
    newVariableFormatValue(): Tagmanager_v2.Schema.VariableFormatValue;
    // Create a new instance of Workspace
    newWorkspace(): Tagmanager_v2.Schema.Workspace;
    // Create a new instance of Zone
    newZone(): Tagmanager_v2.Schema.Zone;
    // Create a new instance of ZoneBoundary
    newZoneBoundary(): Tagmanager_v2.Schema.ZoneBoundary;
    // Create a new instance of ZoneChildContainer
    newZoneChildContainer(): Tagmanager_v2.Schema.ZoneChildContainer;
    // Create a new instance of ZoneTypeRestriction
    newZoneTypeRestriction(): Tagmanager_v2.Schema.ZoneTypeRestriction;
  }
}

declare var Tagmanager_v2: GoogleAppsScript.Tagmanager_v2;