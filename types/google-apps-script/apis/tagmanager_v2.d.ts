// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace TagManager {
        namespace Collection {
            namespace Accounts {
                namespace Containers {
                    namespace Workspaces {
                        interface Built_in_variablesCollection {
                            // Creates one or more GTM Built-In Variables.
                            create(parent: string): Schema.CreateBuiltInVariableResponse;
                            // Creates one or more GTM Built-In Variables.
                            create(parent: string, optionalArgs: object): Schema.CreateBuiltInVariableResponse;
                            // Lists all the enabled Built-In Variables of a GTM Container.
                            list(parent: string): Schema.ListEnabledBuiltInVariablesResponse;
                            // Lists all the enabled Built-In Variables of a GTM Container.
                            list(parent: string, optionalArgs: object): Schema.ListEnabledBuiltInVariablesResponse;
                            // Deletes one or more GTM Built-In Variables.
                            remove(path: string): void;
                            // Deletes one or more GTM Built-In Variables.
                            remove(path: string, optionalArgs: object): void;
                            // Reverts changes to a GTM Built-In Variables in a GTM Workspace.
                            revert(path: string): Schema.RevertBuiltInVariableResponse;
                            // Reverts changes to a GTM Built-In Variables in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertBuiltInVariableResponse;
                        }
                        interface FoldersCollection {
                            // Creates a GTM Folder.
                            create(resource: Schema.Folder, parent: string): Schema.Folder;
                            // List all entities in a GTM Folder.
                            entities(path: string): Schema.FolderEntities;
                            // List all entities in a GTM Folder.
                            entities(path: string, optionalArgs: object): Schema.FolderEntities;
                            // Gets a GTM Folder.
                            get(path: string): Schema.Folder;
                            // Lists all GTM Folders of a Container.
                            list(parent: string): Schema.ListFoldersResponse;
                            // Lists all GTM Folders of a Container.
                            list(parent: string, optionalArgs: object): Schema.ListFoldersResponse;
                            // Moves entities to a GTM Folder.
                            move_entities_to_folder(resource: Schema.Folder, path: string): void;
                            // Moves entities to a GTM Folder.
                            move_entities_to_folder(resource: Schema.Folder, path: string, optionalArgs: object): void;
                            // Deletes a GTM Folder.
                            remove(path: string): void;
                            // Reverts changes to a GTM Folder in a GTM Workspace.
                            revert(path: string): Schema.RevertFolderResponse;
                            // Reverts changes to a GTM Folder in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertFolderResponse;
                            // Updates a GTM Folder.
                            update(resource: Schema.Folder, path: string): Schema.Folder;
                            // Updates a GTM Folder.
                            update(resource: Schema.Folder, path: string, optionalArgs: object): Schema.Folder;
                        }
                        interface TagsCollection {
                            // Creates a GTM Tag.
                            create(resource: Schema.Tag, parent: string): Schema.Tag;
                            // Gets a GTM Tag.
                            get(path: string): Schema.Tag;
                            // Lists all GTM Tags of a Container.
                            list(parent: string): Schema.ListTagsResponse;
                            // Lists all GTM Tags of a Container.
                            list(parent: string, optionalArgs: object): Schema.ListTagsResponse;
                            // Deletes a GTM Tag.
                            remove(path: string): void;
                            // Reverts changes to a GTM Tag in a GTM Workspace.
                            revert(path: string): Schema.RevertTagResponse;
                            // Reverts changes to a GTM Tag in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertTagResponse;
                            // Updates a GTM Tag.
                            update(resource: Schema.Tag, path: string): Schema.Tag;
                            // Updates a GTM Tag.
                            update(resource: Schema.Tag, path: string, optionalArgs: object): Schema.Tag;
                        }
                        interface TemplatesCollection {
                            // Creates a GTM Custom Template.
                            create(resource: Schema.CustomTemplate, parent: string): Schema.CustomTemplate;
                            // Gets a GTM Template.
                            get(path: string): Schema.CustomTemplate;
                            // Lists all GTM Templates of a GTM container workspace.
                            list(parent: string): Schema.ListTemplatesResponse;
                            // Lists all GTM Templates of a GTM container workspace.
                            list(parent: string, optionalArgs: object): Schema.ListTemplatesResponse;
                            // Deletes a GTM Template.
                            remove(path: string): void;
                            // Reverts changes to a GTM Template in a GTM Workspace.
                            revert(path: string): Schema.RevertTemplateResponse;
                            // Reverts changes to a GTM Template in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertTemplateResponse;
                            // Updates a GTM Template.
                            update(resource: Schema.CustomTemplate, path: string): Schema.CustomTemplate;
                            // Updates a GTM Template.
                            update(resource: Schema.CustomTemplate, path: string, optionalArgs: object): Schema.CustomTemplate;
                        }
                        interface TriggersCollection {
                            // Creates a GTM Trigger.
                            create(resource: Schema.Trigger, parent: string): Schema.Trigger;
                            // Gets a GTM Trigger.
                            get(path: string): Schema.Trigger;
                            // Lists all GTM Triggers of a Container.
                            list(parent: string): Schema.ListTriggersResponse;
                            // Lists all GTM Triggers of a Container.
                            list(parent: string, optionalArgs: object): Schema.ListTriggersResponse;
                            // Deletes a GTM Trigger.
                            remove(path: string): void;
                            // Reverts changes to a GTM Trigger in a GTM Workspace.
                            revert(path: string): Schema.RevertTriggerResponse;
                            // Reverts changes to a GTM Trigger in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertTriggerResponse;
                            // Updates a GTM Trigger.
                            update(resource: Schema.Trigger, path: string): Schema.Trigger;
                            // Updates a GTM Trigger.
                            update(resource: Schema.Trigger, path: string, optionalArgs: object): Schema.Trigger;
                        }
                        interface VariablesCollection {
                            // Creates a GTM Variable.
                            create(resource: Schema.Variable, parent: string): Schema.Variable;
                            // Gets a GTM Variable.
                            get(path: string): Schema.Variable;
                            // Lists all GTM Variables of a Container.
                            list(parent: string): Schema.ListVariablesResponse;
                            // Lists all GTM Variables of a Container.
                            list(parent: string, optionalArgs: object): Schema.ListVariablesResponse;
                            // Deletes a GTM Variable.
                            remove(path: string): void;
                            // Reverts changes to a GTM Variable in a GTM Workspace.
                            revert(path: string): Schema.RevertVariableResponse;
                            // Reverts changes to a GTM Variable in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertVariableResponse;
                            // Updates a GTM Variable.
                            update(resource: Schema.Variable, path: string): Schema.Variable;
                            // Updates a GTM Variable.
                            update(resource: Schema.Variable, path: string, optionalArgs: object): Schema.Variable;
                        }
                        interface ZonesCollection {
                            // Creates a GTM Zone.
                            create(resource: Schema.Zone, parent: string): Schema.Zone;
                            // Gets a GTM Zone.
                            get(path: string): Schema.Zone;
                            // Lists all GTM Zones of a GTM container workspace.
                            list(parent: string): Schema.ListZonesResponse;
                            // Lists all GTM Zones of a GTM container workspace.
                            list(parent: string, optionalArgs: object): Schema.ListZonesResponse;
                            // Deletes a GTM Zone.
                            remove(path: string): void;
                            // Reverts changes to a GTM Zone in a GTM Workspace.
                            revert(path: string): Schema.RevertZoneResponse;
                            // Reverts changes to a GTM Zone in a GTM Workspace.
                            revert(path: string, optionalArgs: object): Schema.RevertZoneResponse;
                            // Updates a GTM Zone.
                            update(resource: Schema.Zone, path: string): Schema.Zone;
                            // Updates a GTM Zone.
                            update(resource: Schema.Zone, path: string, optionalArgs: object): Schema.Zone;
                        }
                    }
                    interface EnvironmentsCollection {
                        // Creates a GTM Environment.
                        create(resource: Schema.Environment, parent: string): Schema.Environment;
                        // Gets a GTM Environment.
                        get(path: string): Schema.Environment;
                        // Lists all GTM Environments of a GTM Container.
                        list(parent: string): Schema.ListEnvironmentsResponse;
                        // Lists all GTM Environments of a GTM Container.
                        list(parent: string, optionalArgs: object): Schema.ListEnvironmentsResponse;
                        // Re-generates the authorization code for a GTM Environment.
                        reauthorize(resource: Schema.Environment, path: string): Schema.Environment;
                        // Deletes a GTM Environment.
                        remove(path: string): void;
                        // Updates a GTM Environment.
                        update(resource: Schema.Environment, path: string): Schema.Environment;
                        // Updates a GTM Environment.
                        update(resource: Schema.Environment, path: string, optionalArgs: object): Schema.Environment;
                    }
                    interface Version_headersCollection {
                        // Gets the latest container version header
                        latest(parent: string): Schema.ContainerVersionHeader;
                        // Lists all Container Versions of a GTM Container.
                        list(parent: string): Schema.ListContainerVersionsResponse;
                        // Lists all Container Versions of a GTM Container.
                        list(parent: string, optionalArgs: object): Schema.ListContainerVersionsResponse;
                    }
                    interface VersionsCollection {
                        // Gets a Container Version.
                        get(path: string): Schema.ContainerVersion;
                        // Gets a Container Version.
                        get(path: string, optionalArgs: object): Schema.ContainerVersion;
                        // Gets the live (i.e. published) container version
                        live(parent: string): Schema.ContainerVersion;
                        // Publishes a Container Version.
                        publish(path: string): Schema.PublishContainerVersionResponse;
                        // Publishes a Container Version.
                        publish(path: string, optionalArgs: object): Schema.PublishContainerVersionResponse;
                        // Deletes a Container Version.
                        remove(path: string): void;
                        // Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
                        set_latest(path: string): Schema.ContainerVersion;
                        // Undeletes a Container Version.
                        undelete(path: string): Schema.ContainerVersion;
                        // Updates a Container Version.
                        update(resource: Schema.ContainerVersion, path: string): Schema.ContainerVersion;
                        // Updates a Container Version.
                        update(resource: Schema.ContainerVersion, path: string, optionalArgs: object): Schema.ContainerVersion;
                    }
                    interface WorkspacesCollection {
                        Built_in_variables?: Collection.Accounts.Containers.Workspaces.Built_in_variablesCollection;
                        Folders?: Collection.Accounts.Containers.Workspaces.FoldersCollection;
                        Tags?: Collection.Accounts.Containers.Workspaces.TagsCollection;
                        Templates?: Collection.Accounts.Containers.Workspaces.TemplatesCollection;
                        Triggers?: Collection.Accounts.Containers.Workspaces.TriggersCollection;
                        Variables?: Collection.Accounts.Containers.Workspaces.VariablesCollection;
                        Zones?: Collection.Accounts.Containers.Workspaces.ZonesCollection;
                        // Creates a Workspace.
                        create(resource: Schema.Workspace, parent: string): Schema.Workspace;
                        // Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base
                        // container version to the newly created version.
                        create_version(resource: Schema.CreateContainerVersionRequestVersionOptions, path: string): Schema.CreateContainerVersionResponse;
                        // Gets a Workspace.
                        get(path: string): Schema.Workspace;
                        // Finds conflicting and modified entities in the workspace.
                        getStatus(path: string): Schema.GetWorkspaceStatusResponse;
                        // Lists all Workspaces that belong to a GTM Container.
                        list(parent: string): Schema.ListWorkspacesResponse;
                        // Lists all Workspaces that belong to a GTM Container.
                        list(parent: string, optionalArgs: object): Schema.ListWorkspacesResponse;
                        // Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
                        quick_preview(path: string): Schema.QuickPreviewResponse;
                        // Deletes a Workspace.
                        remove(path: string): void;
                        // Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
                        resolve_conflict(resource: Schema.Entity, path: string): void;
                        // Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
                        resolve_conflict(resource: Schema.Entity, path: string, optionalArgs: object): void;
                        // Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts
                        // for modified entities.
                        sync(path: string): Schema.SyncWorkspaceResponse;
                        // Updates a Workspace.
                        update(resource: Schema.Workspace, path: string): Schema.Workspace;
                        // Updates a Workspace.
                        update(resource: Schema.Workspace, path: string, optionalArgs: object): Schema.Workspace;
                    }
                }
                interface ContainersCollection {
                    Environments?: Collection.Accounts.Containers.EnvironmentsCollection;
                    Version_headers?: Collection.Accounts.Containers.Version_headersCollection;
                    Versions?: Collection.Accounts.Containers.VersionsCollection;
                    Workspaces?: Collection.Accounts.Containers.WorkspacesCollection;
                    // Creates a Container.
                    create(resource: Schema.Container, parent: string): Schema.Container;
                    // Gets a Container.
                    get(path: string): Schema.Container;
                    // Lists all Containers that belongs to a GTM Account.
                    list(parent: string): Schema.ListContainersResponse;
                    // Lists all Containers that belongs to a GTM Account.
                    list(parent: string, optionalArgs: object): Schema.ListContainersResponse;
                    // Deletes a Container.
                    remove(path: string): void;
                    // Updates a Container.
                    update(resource: Schema.Container, path: string): Schema.Container;
                    // Updates a Container.
                    update(resource: Schema.Container, path: string, optionalArgs: object): Schema.Container;
                }
                interface User_permissionsCollection {
                    // Creates a user's Account & Container access.
                    create(resource: Schema.UserPermission, parent: string): Schema.UserPermission;
                    // Gets a user's Account & Container access.
                    get(path: string): Schema.UserPermission;
                    // List all users that have access to the account along with Account and Container user access granted to each of them.
                    list(parent: string): Schema.ListUserPermissionsResponse;
                    // List all users that have access to the account along with Account and Container user access granted to each of them.
                    list(parent: string, optionalArgs: object): Schema.ListUserPermissionsResponse;
                    // Removes a user from the account, revoking access to it and all of its containers.
                    remove(path: string): void;
                    // Updates a user's Account & Container access.
                    update(resource: Schema.UserPermission, path: string): Schema.UserPermission;
                }
            }
            interface AccountsCollection {
                Containers?: Collection.Accounts.ContainersCollection;
                User_permissions?: Collection.Accounts.User_permissionsCollection;
                // Gets a GTM Account.
                get(path: string): Schema.Account;
                // Lists all GTM Accounts that a user has access to.
                list(): Schema.ListAccountsResponse;
                // Lists all GTM Accounts that a user has access to.
                list(optionalArgs: object): Schema.ListAccountsResponse;
                // Updates a GTM Account.
                update(resource: Schema.Account, path: string): Schema.Account;
                // Updates a GTM Account.
                update(resource: Schema.Account, path: string, optionalArgs: object): Schema.Account;
            }
        }
        namespace Schema {
            // Represents a Google Tag Manager Account.
            interface Account {
                // The Account ID uniquely identifies the GTM Account.
                accountId?: string;
                // The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is
                // modified.
                fingerprint?: string;
                // Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
                name?: string;
                // GTM Account's API relative path.
                path?: string;
                // Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data
                // in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds
                // of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create
                // @mutable tagmanager.accounts.update
                shareData?: boolean;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
            }
            // Defines the Google Tag Manager Account access permissions.
            interface AccountAccess {
                // Whether the user has no access, user access, or admin access to an account. @mutable
                // tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
                permission?: string;
            }
            // Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common
            // functionality like accessing propeties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
            interface BuiltInVariable {
                // GTM Account ID.
                accountId?: string;
                // GTM Container ID.
                containerId?: string;
                // Name of the built-in variable to be used to refer to the built-in variable.
                name?: string;
                // GTM BuiltInVariable's API relative path.
                path?: string;
                // Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable
                // tagmanager.accounts.containers.workspaces.built_in_variable.update
                type?: string;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            interface Client {
                // GTM Account ID.
                accountId?: string;
                // The Client ID uniquely identifies the GTM client.
                clientId?: string;
                // GTM Container ID.
                containerId?: string;
                // The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.
                fingerprint?: string;
                // Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable
                // tagmanager.accounts.containers.workspaces.clients.update
                name?: string;
                // The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable
                // tagmanager.accounts.containers.workspaces.clients.update
                parameter?: Schema.Parameter[];
                // Parent folder id.
                parentFolderId?: string;
                // GTM client's API relative path.
                path?: string;
                // Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable
                // tagmanager.accounts.containers.workspaces.clients.update
                priority?: Integer;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable
                // tagmanager.accounts.containers.workspaces.clients.update
                type?: string;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            // Represents a predicate.
            interface Condition {
                // A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include
                // parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left
                // operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter
                // named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive.
                // - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                parameter?: Schema.Parameter[];
                // The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                type?: string;
            }
            // Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and
            // retains container versions.
            interface Container {
                // GTM Account ID.
                accountId?: string;
                // The Container ID uniquely identifies the GTM Container.
                containerId?: string;
                // List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable
                // tagmanager.accounts.containers.update
                domainName?: string[];
                // The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is
                // modified.
                fingerprint?: string;
                // Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
                name?: string;
                // Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
                notes?: string;
                // GTM Container's API relative path.
                path?: string;
                // Container Public ID.
                publicId?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable
                // tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
                usageContext?: string[];
            }
            // Defines the Google Tag Manager Container access permissions.
            interface ContainerAccess {
                // GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
                containerId?: string;
                // List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable
                // tagmanager.accounts.permissions.update
                permission?: string;
            }
            // Represents a Google Tag Manager Container Version.
            interface ContainerVersion {
                // GTM Account ID.
                accountId?: string;
                // The built-in variables in the container that this version was taken from.
                builtInVariable?: Schema.BuiltInVariable[];
                // The clients in the container that this version was taken from.
                client?: Schema.Client[];
                // The container that this version was taken from.
                container?: Schema.Container;
                // GTM Container ID.
                containerId?: string;
                // The Container Version ID uniquely identifies the GTM Container Version.
                containerVersionId?: string;
                // The custom templates in the container that this version was taken from.
                customTemplate?: Schema.CustomTemplate[];
                // A value of true indicates this container version has been deleted.
                deleted?: boolean;
                // Container version description. @mutable tagmanager.accounts.containers.versions.update
                description?: string;
                // The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the
                // container version is modified.
                fingerprint?: string;
                // The folders in the container that this version was taken from.
                folder?: Schema.Folder[];
                // Container version display name. @mutable tagmanager.accounts.containers.versions.update
                name?: string;
                // GTM ContainerVersions's API relative path.
                path?: string;
                // The tags in the container that this version was taken from.
                tag?: Schema.Tag[];
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // The triggers in the container that this version was taken from.
                trigger?: Schema.Trigger[];
                // The variables in the container that this version was taken from.
                variable?: Schema.Variable[];
                // The zones in the container that this version was taken from.
                zone?: Schema.Zone[];
            }
            // Represents a Google Tag Manager Container Version Header.
            interface ContainerVersionHeader {
                // GTM Account ID.
                accountId?: string;
                // GTM Container ID.
                containerId?: string;
                // The Container Version ID uniquely identifies the GTM Container Version.
                containerVersionId?: string;
                // A value of true indicates this container version has been deleted.
                deleted?: boolean;
                // Container version display name.
                name?: string;
                // Number of clients in the container version.
                numClients?: string;
                // Number of custom templates in the container version.
                numCustomTemplates?: string;
                // Number of macros in the container version.
                numMacros?: string;
                // Number of rules in the container version.
                numRules?: string;
                // Number of tags in the container version.
                numTags?: string;
                // Number of triggers in the container version.
                numTriggers?: string;
                // Number of variables in the container version.
                numVariables?: string;
                // Number of zones in the container version.
                numZones?: string;
                // GTM Container Versions's API relative path.
                path?: string;
            }
            interface CreateBuiltInVariableResponse {
                // List of created built-in variables.
                builtInVariable?: Schema.BuiltInVariable[];
            }
            // Options for new container versions.
            interface CreateContainerVersionRequestVersionOptions {
                // The name of the container version to be created.
                name?: string;
                // The notes of the container version to be created.
                notes?: string;
            }
            // Create container versions response.
            interface CreateContainerVersionResponse {
                // Compiler errors or not.
                compilerError?: boolean;
                // The container version created.
                containerVersion?: Schema.ContainerVersion;
                // Auto generated workspace path created as a result of version creation. This field should only be populated if the
                // created version was not a quick preview.
                newWorkspacePath?: string;
                // Whether version creation failed when syncing the workspace to the latest container version.
                syncStatus?: Schema.SyncStatus;
            }
            // Represents a Google Tag Manager Custom Template's contents.
            interface CustomTemplate {
                // GTM Account ID.
                accountId?: string;
                // GTM Container ID.
                containerId?: string;
                // The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template
                // is modified.
                fingerprint?: string;
                // A reference to the Community Template Gallery entry.
                galleryReference?: Schema.GalleryReference;
                // Custom Template display name.
                name?: string;
                // GTM Custom Template's API relative path.
                path?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // The custom template in text format.
                templateData?: string;
                // The Custom Template ID uniquely identifies the GTM custom template.
                templateId?: string;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            // A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
            interface Entity {
                // Represents how the entity has been changed in the workspace.
                changeStatus?: string;
                // The client being represented by the entity.
                client?: Schema.Client;
                // The folder being represented by the entity.
                folder?: Schema.Folder;
                // The tag being represented by the entity.
                tag?: Schema.Tag;
                // The trigger being represented by the entity.
                trigger?: Schema.Trigger;
                // The variable being represented by the entity.
                variable?: Schema.Variable;
            }
            // Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER,
            // but can only update the enable_debug and url fields of environments of other types.
            interface Environment {
                // GTM Account ID.
                accountId?: string;
                // The environment authorization code.
                authorizationCode?: string;
                // The last update time-stamp for the authorization code.
                authorizationTimestamp?: string;
                // GTM Container ID.
                containerId?: string;
                // Represents a link to a container version.
                containerVersionId?: string;
                // The environment description. Can be set or changed only on USER type environments. @mutable
                // tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
                description?: string;
                // Whether or not to enable debug by default for the environment. @mutable
                // tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
                enableDebug?: boolean;
                // GTM Environment ID uniquely identifies the GTM Environment.
                environmentId?: string;
                // The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is
                // modified.
                fingerprint?: string;
                // The environment display name. Can be set or changed only on USER type environments. @mutable
                // tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
                name?: string;
                // GTM Environment's API relative path.
                path?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // The type of this environment.
                type?: string;
                // Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable
                // tagmanager.accounts.containers.environments.update
                url?: string;
                // Represents a link to a quick preview of a workspace.
                workspaceId?: string;
            }
            // Represents a Google Tag Manager Folder.
            interface Folder {
                // GTM Account ID.
                accountId?: string;
                // GTM Container ID.
                containerId?: string;
                // The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
                fingerprint?: string;
                // The Folder ID uniquely identifies the GTM Folder.
                folderId?: string;
                // Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable
                // tagmanager.accounts.containers.workspaces.folders.update
                name?: string;
                // User notes on how to apply this folder in the container. @mutable
                // tagmanager.accounts.containers.workspaces.folders.create @mutable
                // tagmanager.accounts.containers.workspaces.folders.update
                notes?: string;
                // GTM Folder's API relative path.
                path?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            // Represents a Google Tag Manager Folder's contents.
            interface FolderEntities {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // The list of tags inside the folder.
                tag?: Schema.Tag[];
                // The list of triggers inside the folder.
                trigger?: Schema.Trigger[];
                // The list of variables inside the folder.
                variable?: Schema.Variable[];
            }
            // Represents the link between a custom template and an entry on the Community Template Gallery site.
            interface GalleryReference {
                // The name of the host for the community gallery template.
                host?: string;
                // If a user has manually edited the community gallery template.
                isModified?: boolean;
                // The name of the owner for the community gallery template.
                owner?: string;
                // The name of the repository for the community gallery template.
                repository?: string;
                // The signature of the community gallery template as computed at import time. This value is recomputed whenever the
                // template is updated from the gallery.
                signature?: string;
                // The version of the community gallery template.
                version?: string;
            }
            // The changes that have occurred in the workspace since the base container version.
            interface GetWorkspaceStatusResponse {
                // The merge conflict after sync.
                mergeConflict?: Schema.MergeConflict[];
                // Entities that have been changed in the workspace.
                workspaceChange?: Schema.Entity[];
            }
            // List Accounts Response.
            interface ListAccountsResponse {
                // List of GTM Accounts that a user has access to.
                account?: Schema.Account[];
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
            }
            // List container versions response.
            interface ListContainerVersionsResponse {
                // All container version headers of a GTM Container.
                containerVersionHeader?: Schema.ContainerVersionHeader[];
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
            }
            // List Containers Response.
            interface ListContainersResponse {
                // All Containers of a GTM Account.
                container?: Schema.Container[];
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
            }
            // A list of enabled built-in variables.
            interface ListEnabledBuiltInVariablesResponse {
                // All GTM BuiltInVariables of a GTM container.
                builtInVariable?: Schema.BuiltInVariable[];
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
            }
            // List Environments Response.
            interface ListEnvironmentsResponse {
                // All Environments of a GTM Container.
                environment?: Schema.Environment[];
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
            }
            // List Folders Response.
            interface ListFoldersResponse {
                // All GTM Folders of a GTM Container.
                folder?: Schema.Folder[];
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
            }
            // List Tags Response.
            interface ListTagsResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All GTM Tags of a GTM Container.
                tag?: Schema.Tag[];
            }
            interface ListTemplatesResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All GTM Custom Templates of a GTM Container.
                template?: Schema.CustomTemplate[];
            }
            // List triggers response.
            interface ListTriggersResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All GTM Triggers of a GTM Container.
                trigger?: Schema.Trigger[];
            }
            // List user permissions response.
            interface ListUserPermissionsResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All GTM UserPermissions of a GTM Account.
                userPermission?: Schema.UserPermission[];
            }
            // List Variables Response.
            interface ListVariablesResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All GTM Variables of a GTM Container.
                variable?: Schema.Variable[];
            }
            // A list of workspaces in a container.
            interface ListWorkspacesResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All Workspaces of a GTM Container.
                workspace?: Schema.Workspace[];
            }
            interface ListZonesResponse {
                // Continuation token for fetching the next page of results.
                nextPageToken?: string;
                // All GTM Zones of a GTM Container.
                zone?: Schema.Zone[];
            }
            // Represents a merge conflict.
            interface MergeConflict {
                // The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If
                // this field is missing, it means the workspace entity is deleted from the base version.
                entityInBaseVersion?: Schema.Entity;
                // The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace,
                // it will still appear with a deleted change status.
                entityInWorkspace?: Schema.Entity;
            }
            // Represents a Google Tag Manager Parameter.
            interface Parameter {
                // The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored
                // for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                key?: string;
                // This list parameter's parameters (keys will be ignored). @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                list?: Schema.Parameter[];
                // This map parameter's parameters (must have keys; keys must be unique). @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                map?: Schema.Parameter[];
                // The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' -
                // integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified
                // - map: A map of parameters should be specified - template: The value represents any text; this can include variable
                // references (even variable references that might return non-string types) - trigger_reference: The value represents a
                // trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                type?: string;
                // A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type.
                // @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                value?: string;
            }
            // Publish container version response.
            interface PublishContainerVersionResponse {
                // Compiler errors or not.
                compilerError?: boolean;
                // The container version created.
                containerVersion?: Schema.ContainerVersion;
            }
            // Response to quick previewing a workspace.
            interface QuickPreviewResponse {
                // Were there compiler errors or not.
                compilerError?: boolean;
                // The quick previewed container version.
                containerVersion?: Schema.ContainerVersion;
                // Whether quick previewing failed when syncing the workspace to the latest container version.
                syncStatus?: Schema.SyncStatus;
            }
            // The result of reverting a built-in variable in a workspace.
            interface RevertBuiltInVariableResponse {
                // Whether the built-in variable is enabled after reversion.
                enabled?: boolean;
            }
            // The result of reverting folder changes in a workspace.
            interface RevertFolderResponse {
                // Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is
                // present, that means the folder was deleted in the latest container version.
                folder?: Schema.Folder;
            }
            // The result of reverting a tag in a workspace.
            interface RevertTagResponse {
                // Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is
                // present, that means the tag was deleted in the latest container version.
                tag?: Schema.Tag;
            }
            // The result of reverting a template in a workspace.
            interface RevertTemplateResponse {
                // Template as it appears in the latest container version since the last workspace synchronization operation. If no
                // template is present, that means the template was deleted in the latest container version.
                template?: Schema.CustomTemplate;
            }
            // The result of reverting a trigger in a workspace.
            interface RevertTriggerResponse {
                // Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger
                // is present, that means the trigger was deleted in the latest container version.
                trigger?: Schema.Trigger;
            }
            // The result of reverting a variable in a workspace.
            interface RevertVariableResponse {
                // Variable as it appears in the latest container version since the last workspace synchronization operation. If no
                // variable is present, that means the variable was deleted in the latest container version.
                variable?: Schema.Variable;
            }
            // The result of reverting a zone in a workspace.
            interface RevertZoneResponse {
                // Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is
                // present, that means the zone was deleted in the latest container version.
                zone?: Schema.Zone;
            }
            // Represents a reference to atag that fires before another tag in order to set up dependencies.
            interface SetupTag {
                // If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of
                // setup tag firing status.
                stopOnSetupFailure?: boolean;
                // The name of the setup tag.
                tagName?: string;
            }
            // The status of a workspace after synchronization.
            interface SyncStatus {
                // Synchornization operation detected a merge conflict.
                mergeConflict?: boolean;
                // An error occurred during the synchronization operation.
                syncError?: boolean;
            }
            // A response after synchronizing the workspace to the latest container version.
            interface SyncWorkspaceResponse {
                // The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot
                // be created until all conflicts are resolved.
                mergeConflict?: Schema.MergeConflict[];
                // Indicates whether synchronization caused a merge conflict or sync error.
                syncStatus?: Schema.SyncStatus;
            }
            // Represents a Google Tag Manager Tag.
            interface Tag {
                // GTM Account ID.
                accountId?: string;
                // Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable
                // tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
                blockingRuleId?: string[];
                // Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable
                // tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
                blockingTriggerId?: string[];
                // GTM Container ID.
                containerId?: string;
                // The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
                fingerprint?: string;
                // Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified)
                // are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable
                // tagmanager.accounts.containers.workspaces.tags.update
                firingRuleId?: string[];
                // Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any
                // specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable
                // tagmanager.accounts.containers.workspaces.tags.update
                firingTriggerId?: string[];
                // If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable
                // tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
                liveOnly?: boolean;
                // A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter
                // must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable
                // tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
                monitoringMetadata?: Schema.Parameter;
                // If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified.
                // @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable
                // tagmanager.accounts.containers.workspaces.tags.update
                monitoringMetadataTagNameKey?: string;
                // Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable
                // tagmanager.accounts.containers.workspaces.tags.update
                name?: string;
                // User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                notes?: string;
                // The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable
                // tagmanager.accounts.containers.workspaces.tags.update
                parameter?: Schema.Parameter[];
                // Parent folder id.
                parentFolderId?: string;
                // GTM Tag's API relative path.
                path?: string;
                // Indicates whether the tag is paused, which prevents the tag from firing. @mutable
                // tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
                paused?: boolean;
                // User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric
                // value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable
                // tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
                priority?: Schema.Parameter;
                // The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                scheduleEndMs?: string;
                // The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create
                // @mutable tagmanager.accounts.containers.workspaces.tags.update
                scheduleStartMs?: string;
                // The list of setup tags. Currently we only allow one.
                setupTag?: Schema.SetupTag[];
                // Option to fire this tag.
                tagFiringOption?: string;
                // The Tag ID uniquely identifies the GTM Tag.
                tagId?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // The list of teardown tags. Currently we only allow one.
                teardownTag?: Schema.TeardownTag[];
                // GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable
                // tagmanager.accounts.containers.workspaces.tags.update
                type?: string;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            // Represents a tag that fires after another tag in order to tear down dependencies.
            interface TeardownTag {
                // If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag
                // regardless of main tag firing status.
                stopTeardownOnFailure?: boolean;
                // The name of the teardown tag.
                tagName?: string;
            }
            // Represents a Google Tag Manager Trigger
            interface Trigger {
                // GTM Account ID.
                accountId?: string;
                // Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                autoEventFilter?: Schema.Condition[];
                // Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event
                // handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                checkValidation?: Schema.Parameter;
                // GTM Container ID.
                containerId?: string;
                // A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                continuousTimeMinMilliseconds?: Schema.Parameter;
                // Used in the case of custom event, which is fired iff all Conditions are true. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                customEventFilter?: Schema.Condition[];
                // Name of the GTM event that is fired. Only valid for Timer triggers. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                eventName?: Schema.Parameter;
                // The trigger will only fire iff all Conditions are true. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                filter?: Schema.Condition[];
                // The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is
                // modified.
                fingerprint?: string;
                // List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the
                // view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                horizontalScrollPercentageList?: Schema.Parameter;
                // Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                interval?: Schema.Parameter;
                // Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                intervalSeconds?: Schema.Parameter;
                // Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events
                // until the user leaves the page. Only valid for Timer triggers. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                limit?: Schema.Parameter;
                // Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                maxTimerLengthSeconds?: Schema.Parameter;
                // Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                name?: string;
                // User notes on how to apply this trigger in the container. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                notes?: string;
                // Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                parameter?: Schema.Parameter[];
                // Parent folder id.
                parentFolderId?: string;
                // GTM Trigger's API relative path.
                path?: string;
                // A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                selector?: Schema.Parameter;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                totalTimeMinMilliseconds?: Schema.Parameter;
                // The Trigger ID uniquely identifies the GTM Trigger.
                triggerId?: string;
                // Defines the data layer event that causes this trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                type?: string;
                // Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to
                // make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during
                // output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and
                // Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                uniqueTriggerId?: Schema.Parameter;
                // List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the
                // view is scrolled vertically. Only valid for AMP scroll triggers. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                verticalScrollPercentageList?: Schema.Parameter;
                // A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                visibilitySelector?: Schema.Parameter;
                // A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                visiblePercentageMax?: Schema.Parameter;
                // A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable
                // tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                visiblePercentageMin?: Schema.Parameter;
                // Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the
                // default action and later simulating the default action). Only valid for Form Submission and Link Click triggers.
                // @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                waitForTags?: Schema.Parameter;
                // How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form
                // Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable
                // tagmanager.accounts.containers.workspaces.triggers.update
                waitForTagsTimeout?: Schema.Parameter;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            // Represents a user's permissions to an account and its container.
            interface UserPermission {
                // GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable
                // tagmanager.accounts.permissions.update
                accountAccess?: Schema.AccountAccess;
                // The Account ID uniquely identifies the GTM Account.
                accountId?: string;
                // GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable
                // tagmanager.accounts.permissions.update
                containerAccess?: Schema.ContainerAccess[];
                // User's email address. @mutable tagmanager.accounts.permissions.create
                emailAddress?: string;
                // GTM UserPermission's API relative path.
                path?: string;
            }
            // Represents a Google Tag Manager Variable.
            interface Variable {
                // GTM Account ID.
                accountId?: string;
                // GTM Container ID.
                containerId?: string;
                // For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of
                // the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                disablingTriggerId?: string[];
                // For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of
                // the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                enablingTriggerId?: string[];
                // The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is
                // modified.
                fingerprint?: string;
                // Option to convert a variable value to other value.
                formatValue?: Schema.VariableFormatValue;
                // Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                name?: string;
                // User notes on how to apply this variable in the container. @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                notes?: string;
                // The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                parameter?: Schema.Parameter[];
                // Parent folder id.
                parentFolderId?: string;
                // GTM Variable's API relative path.
                path?: string;
                // The end timestamp in milliseconds to schedule a variable. @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                scheduleEndMs?: string;
                // The start timestamp in milliseconds to schedule a variable. @mutable
                // tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                scheduleStartMs?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable
                // tagmanager.accounts.containers.workspaces.variables.update
                type?: string;
                // The Variable ID uniquely identifies the GTM Variable.
                variableId?: string;
                // GTM Workspace ID.
                workspaceId?: string;
            }
            interface VariableFormatValue {
                // The option to convert a string-type variable value to either lowercase or uppercase.
                caseConversionType?: string;
                // The value to convert if a variable value is false.
                convertFalseToValue?: Schema.Parameter;
                // The value to convert if a variable value is null.
                convertNullToValue?: Schema.Parameter;
                // The value to convert if a variable value is true.
                convertTrueToValue?: Schema.Parameter;
                // The value to convert if a variable value is undefined.
                convertUndefinedToValue?: Schema.Parameter;
            }
            // Represents a Google Tag Manager Container Workspace.
            interface Workspace {
                // GTM Account ID.
                accountId?: string;
                // GTM Container ID.
                containerId?: string;
                // Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable
                // tagmanager.accounts.containers.workspaces.update
                description?: string;
                // The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is
                // modified.
                fingerprint?: string;
                // Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable
                // tagmanager.accounts.containers.workspaces.update
                name?: string;
                // GTM Workspace's API relative path.
                path?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // The Workspace ID uniquely identifies the GTM Workspace.
                workspaceId?: string;
            }
            // Represents a Google Tag Manager Zone's contents.
            interface Zone {
                // GTM Account ID.
                accountId?: string;
                // This Zone's boundary.
                boundary?: Schema.ZoneBoundary;
                // Containers that are children of this Zone.
                childContainer?: Schema.ZoneChildContainer[];
                // GTM Container ID.
                containerId?: string;
                // The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
                fingerprint?: string;
                // Zone display name.
                name?: string;
                // User notes on how to apply this zone in the container.
                notes?: string;
                // GTM Zone's API relative path.
                path?: string;
                // Auto generated link to the tag manager UI
                tagManagerUrl?: string;
                // This Zone's type restrictions.
                typeRestriction?: Schema.ZoneTypeRestriction;
                // GTM Workspace ID.
                workspaceId?: string;
                // The Zone ID uniquely identifies the GTM Zone.
                zoneId?: string;
            }
            // Represents a Zone's boundaries.
            interface ZoneBoundary {
                // The conditions that, when conjoined, make up the boundary.
                condition?: Schema.Condition[];
                // Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
                customEvaluationTriggerId?: string[];
            }
            // Represents a child container of a Zone.
            interface ZoneChildContainer {
                // The zone's nickname for the child container.
                nickname?: string;
                // The child container's public id.
                publicId?: string;
            }
            // Represents a Zone's type restrictions.
            interface ZoneTypeRestriction {
                // True if type restrictions have been enabled for this Zone.
                enable?: boolean;
                // List of type public ids that have been whitelisted for use in this Zone.
                whitelistedTypeId?: string[];
            }
        }
    }
    // This API allows clients to access and modify container and tag configuration.
    interface TagManager {
        Accounts?: TagManager.Collection.AccountsCollection;
        // Create a new instance of Account
        newAccount(): TagManager.Schema.Account;
        // Create a new instance of AccountAccess
        newAccountAccess(): TagManager.Schema.AccountAccess;
        // Create a new instance of BuiltInVariable
        newBuiltInVariable(): TagManager.Schema.BuiltInVariable;
        // Create a new instance of Client
        newClient(): TagManager.Schema.Client;
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
        // Create a new instance of GalleryReference
        newGalleryReference(): TagManager.Schema.GalleryReference;
        // Create a new instance of Parameter
        newParameter(): TagManager.Schema.Parameter;
        // Create a new instance of SetupTag
        newSetupTag(): TagManager.Schema.SetupTag;
        // Create a new instance of Tag
        newTag(): TagManager.Schema.Tag;
        // Create a new instance of TeardownTag
        newTeardownTag(): TagManager.Schema.TeardownTag;
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
declare const TagManager: GoogleAppsScript.TagManager;
