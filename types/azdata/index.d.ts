// Type definitions for Azure Data Studio 1.39
// Project: https://github.com/microsoft/azuredatastudio
// Definitions by: Charles Gagnon <https://github.com/Charles-Gagnon>
//                 Alan Ren: <https://github.com/alanrenmsft>
//                 Karl Burtram: <https://github.com/kburtram>
//                 Ken Van Hyning: <https://github.com/kenvanhyning>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA.
 *  See https://github.com/microsoft/azuredatastudio/blob/main/LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Type Definition for Azure Data Studio 1.39 Extension API
 * See https://docs.microsoft.com/sql/azure-data-studio/extensibility-apis for more information
 */

declare module 'azdata' {
    import * as vscode from 'vscode';

    /**
     * The version of the application.
     */
    export const version: string;

    // EXPORTED NAMESPACES /////////////////////////////////////////////////
    /**
     * Namespace for Data Management Protocol global methods
     */
    export namespace dataprotocol {
        export function registerConnectionProvider(provider: ConnectionProvider): vscode.Disposable;

        export function registerBackupProvider(provider: BackupProvider): vscode.Disposable;

        export function registerRestoreProvider(provider: RestoreProvider): vscode.Disposable;

        export function registerScriptingProvider(provider: ScriptingProvider): vscode.Disposable;

        export function registerObjectExplorerProvider(provider: ObjectExplorerProvider): vscode.Disposable;

        export function registerObjectExplorerNodeProvider(provider: ObjectExplorerNodeProvider): vscode.Disposable;

        export function registerIconProvider(provider: IconProvider): vscode.Disposable;

        export function registerTaskServicesProvider(provider: TaskServicesProvider): vscode.Disposable;

        export function registerFileBrowserProvider(provider: FileBrowserProvider): vscode.Disposable;

        export function registerProfilerProvider(provider: ProfilerProvider): vscode.Disposable;

        export function registerMetadataProvider(provider: MetadataProvider): vscode.Disposable;

        export function registerQueryProvider(provider: QueryProvider, isLiveShare?: boolean): vscode.Disposable;

        export function registerAdminServicesProvider(provider: AdminServicesProvider): vscode.Disposable;

        export function registerAgentServicesProvider(provider: AgentServicesProvider): vscode.Disposable;

        export function registerCapabilitiesServiceProvider(provider: CapabilitiesProvider): vscode.Disposable;

        /**
         * Get the provider corresponding to the given provider ID and type
         * @param providerId The ID that the provider was registered with
         * @param providerType The type of the provider
         */
        export function getProvider<T extends DataProvider>(providerId: string, providerType: DataProviderType): T;

        /**
         * Get all registered providers of the given type
         * @param providerType The type of the providers
         */
        export function getProvidersByType<T extends DataProvider>(providerType: DataProviderType): T[];

        /**
         * An [event](#Event) which fires when the specific flavor of a language used in DMP
         * connections has changed. And example is for a SQL connection, the flavor changes
         * to MSSQL
         */
        export const onDidChangeLanguageFlavor: vscode.Event<DidChangeLanguageFlavorParams>;
    }

    /**
     * Namespace for credentials management global methods, available to all extensions
     */
    export namespace credentials {
        /**
         * Register a credential provider to handle credential requests.
         * @param provider The provider to register
         * @return Handle to the provider for disposal
         */
        export function registerProvider(provider: CredentialProvider): vscode.Disposable;

        /**
         * Retrieves a provider from the extension host if one has been registered. Any credentials
         * accessed with the returned provider will have the namespaceId appended to credential ID
         * to prevent extensions from trampling over each others' credentials.
         * @param namespaceId ID that will be appended to credential IDs.
         * @return Promise that returns the namespaced provider
         */
        export function getProvider(namespaceId: string): Thenable<CredentialProvider>;
    }

    /**
     * Namespace for connection management
     */
    export namespace connection {
        /**
         * Connection profile primary class
         */
        export class ConnectionProfile {
            providerId: string;
            connectionId: string;
            connectionName: string;
            serverName: string;
            databaseName: string;
            userName: string;
            password: string;
            authenticationType: string;
            savePassword: boolean;
            groupFullName: string;
            groupId: string;
            saveProfile: boolean;
            azureTenantId?: string | undefined;
            options: { [name: string]: any };

            static createFrom(options: { [key: string]: any }): ConnectionProfile;
        }

        /**
         * Get the current connection based on the active editor or Object Explorer selection
         */
        export function getCurrentConnection(): Thenable<ConnectionProfile>;

        /**
         * Get known connection profiles including active connections, recent connections and saved connections.
         * @param activeConnectionsOnly Indicates whether only get the active connections, default value is false.
         * @returns array of connections
         */
        export function getConnections(activeConnectionsOnly?: boolean): Thenable<ConnectionProfile[]>;

        /**
         * Get all active connections
         */
        export function getActiveConnections(): Thenable<Connection[]>;

        /**
         * Get connection string
         */
        export function getConnectionString(connectionId: string, includePassword: boolean): Thenable<string>;

        /**
         * Get the credentials for a connection
         * @param connectionId The id of the connection
         * @returns A dictionary containing the credentials as they would be included in the connection's options dictionary
         */
        export function getCredentials(connectionId: string): Thenable<{ [name: string]: string }>;

        /**
         * Get ServerInfo for a connectionId
         * @param connectionId The id of the connection
         * @returns ServerInfo
         */
        export function getServerInfo(connectionId: string): Thenable<ServerInfo>;

        /**
         * Interface for representing a connection when working with connection APIs
         */
        export interface Connection extends ConnectionInfo {
            /**
             * The name of the provider managing the connection (e.g. MSSQL)
             */
            providerName: string;

            /**
             * A unique identifier for the connection
             */
            connectionId: string;
        }

        /**
         * List the databases that can be accessed from the given connection
         * @param connectionId The ID of the connection
         * @returns An list of names of databases
         */
        export function listDatabases(connectionId: string): Thenable<string[]>;

        /**
         * Get a URI corresponding to the given connection so that it can be used with data
         * providers and other APIs that require a connection API.
         * Note: If the given connection corresponds to multiple URIs this may return any of them
         * @param connectionId The ID of the connection
         */
        export function getUriForConnection(connectionId: string): Thenable<string>;

        /**
         * Opens the connection dialog, calls the callback with the result. If connection was successful
         * returns the connection otherwise returns undefined
         */
        export function openConnectionDialog(
            providers?: string[],
            initialConnectionProfile?: IConnectionProfile,
            connectionCompletionOptions?: IConnectionCompletionOptions): Thenable<Connection>;

        /**
         * Attempts to open a new connection with the options from the given connection profile.
         * @param connectionProfile The {@link IConnectionProfile} containing the information for the connection
         * @param saveConnection Whether to save the connection in the saved connections list of the Servers view. Default is true
         * @param showDashboard Whether to show the dashboard for the connection upon success. Default is true
         */
        export function connect(connectionProfile: IConnectionProfile, saveConnection?: boolean, showDashboard?: boolean): Thenable<ConnectionResult>;

        /**
         * Supported connection event types
         */
        export type ConnectionEventType =
            | 'onConnect'
            | 'onDisconnect'
            | 'onConnectionChanged';

        /**
         * Connection Event Lister
         */
        export interface ConnectionEventListener {
            /**
             * Connection event handler
             * @param type Connection event type
             * @param ownerUri Connection's owner uri
             * @param args Connection profile
             */
            onConnectionEvent(type: ConnectionEventType, ownerUri: string, args: IConnectionProfile): void;
        }

        /**
         * Register a connection event listener
         * @param listener The connection event listener
         */
        export function registerConnectionEventListener(listener: ConnectionEventListener): vscode.Disposable;

        /**
         * Get connection profile by its owner uri
         * @param ownerUri The owner uri of the connection
         * @returns Thenable to return the connection profile matching the ownerUri
         */
        export function getConnection(ownerUri: string): Thenable<ConnectionProfile>;
    }

    /**
     * Namespace for interacting with Object Explorer
     */
    export namespace objectexplorer {
        /**
         * Get an Object Explorer node corresponding to the given connection and path. If no path
         * is given, it returns the top-level node for the given connection. If there is no node at
         * the given path, it returns undefined.
         * @param connectionId The id of the connection that the node exists on
         * @param nodePath The path of the node to get
         * @returns The node corresponding to the given connection and path,
         * or undefined if no such node exists.
         */
        export function getNode(connectionId: string, nodePath?: string): Thenable<ObjectExplorerNode>;

        /**
         * Get all active Object Explorer connection nodes
         * @returns The Object Explorer nodes for each saved connection
         */
        export function getActiveConnectionNodes(): Thenable<ObjectExplorerNode[]>;

        /**
         * Find Object Explorer nodes that match the given information
         * @param connectionId The id of the connection that the node exists on
         * @param type The type of the object to retrieve
         * @param schema The schema of the object, if applicable
         * @param name The name of the object
         * @param database The database the object exists under, if applicable
         * @param parentObjectNames A list of names of parent objects in the tree, ordered from highest to lowest level
         * (for example when searching for a table's column, provide the name of its parent table for this argument)
         */
        export function findNodes(connectionId: string, type: string, schema: string, name: string, database: string, parentObjectNames: string[]): Thenable<ObjectExplorerNode[]>;

        /**
         * Get connectionProfile from sessionId
         * @param sessionId The id of the session that the node exists on
         * @returns The IConnectionProfile for the session
         */
        export function getSessionConnectionProfile(sessionId: string): Thenable<IConnectionProfile>;

        /**
         * Interface for representing and interacting with items in Object Explorer
         */
        export interface ObjectExplorerNode extends NodeInfo {
            /**
             * The id of the connection that the node exists under
             */
            connectionId: string;

            /**
             * Whether the node is currently expanded in Object Explorer
             */
            isExpanded(): Thenable<boolean>;

            /**
             * Set whether the node is expanded or collapsed
             * @param expandedState The new state of the node. If 'None', the node will not be changed
             */
            setExpandedState(expandedState: vscode.TreeItemCollapsibleState): Thenable<void>;

            /**
             * Set whether the node is selected
             * @param selected Whether the node should be selected
             * @param clearOtherSelections If true, clear any other selections. If false, leave any existing selections.
             * Defaults to true when selected is true and false when selected is false.
             */
            setSelected(selected: boolean, clearOtherSelections?: boolean): Thenable<void>;

            /**
             * Get all the child nodes. Returns an empty list if there are no children.
             */
            getChildren(): Thenable<ObjectExplorerNode[]>;

            /**
             * Get the parent node. Returns undefined if there is none.
             */
            getParent(): Thenable<ObjectExplorerNode>;

            /**
             * Refresh the node, expanding it if it has children
             */
            refresh(): Thenable<void>;
        }
    }

    // EXPORTED INTERFACES /////////////////////////////////////////////////
    export interface ConnectionInfo {
        options: { [name: string]: any };
    }

    // Object Explorer interfaces  -----------------------------------------------------------------------
    export interface ObjectExplorerSession {
        success: boolean;
        sessionId?: string | undefined;
        rootNode: NodeInfo;
        errorMessage?: string | undefined;
    }

    /**
     * A NodeInfo object represents an element in the Object Explorer tree under
     * a connection.
     */
    export interface NodeInfo {
        nodePath: string;
        nodeType: string;
        nodeSubType?: string | undefined;
        nodeStatus?: string | undefined;
        label: string;
        isLeaf: boolean;
        metadata?: ObjectMetadata | undefined;
        errorMessage?: string | undefined;
        /**
         * Optional iconType for the object in the tree. Currently this only supports
         * an icon name or SqlThemeIcon name, rather than a path to an icon.
         * If not defined, the nodeType + nodeStatus / nodeSubType values
         * will be used instead.
         */
        iconType?: string | SqlThemeIcon | undefined;
        /**
         * Informs who provides the children to a node, used by data explorer tree view api
         */
        childProvider?: string | undefined;
        /**
         * Holds the connection profile for nodes, used by data explorer tree view api
         */
        payload?: any;
        /**
         * Specify the icon for the node. The value could the path to the icon or and ADS icon defined in {@link SqlThemeIcon}.
         */
        icon?: IconPath | SqlThemeIcon;
    }

    export interface IConnectionProfile extends ConnectionInfo {
        connectionName?: string | undefined;
        serverName: string;
        databaseName?: string | undefined;
        userName: string;
        password: string;
        authenticationType: string;
        savePassword: boolean;
        groupFullName?: string | undefined;
        groupId?: string | undefined;
        providerName: string;
        saveProfile: boolean;
        id: string;
        azureTenantId?: string | undefined;
    }

    /**
     * Options for the actions that could happen after connecting is complete
     */
    export interface IConnectionCompletionOptions {
        /**
         * Save the connection to MRU and settings (only save to setting if profile.saveProfile is set to true)
         * Default is true.
         */
        saveConnection: boolean;

        /**
         * If true, open the dashboard after connection is complete.
         * If undefined / false, dashboard won't be opened after connection completes.
         * Default is false.
         */
        showDashboard?: boolean | undefined;

        /**
         * If undefined / true, open the connection dialog if connection fails.
         * If false, connection dialog won't be opened even if connection fails.
         * Default is true.
         */
        showConnectionDialogOnError?: boolean | undefined;

        /**
         * If undefined / true, open the connection firewall rule dialog if connection fails.
         * If false, connection firewall rule dialog won't be opened even if connection fails.
         * Default is true.
         */
        showFirewallRuleOnError?: boolean | undefined;
    }

    export interface ConnectionInfoSummary {
        /**
         * URI identifying the owner of the connection
         */
        ownerUri: string;

        /**
         * connection id returned from service host.
         */
        connectionId: string;

        /**
         * any diagnostic messages return from the service host.
         */
        messages: string;

        /**
         * Error message returned from the engine, if any.
         */
        errorMessage: string;

        /**
         * Error number returned from the engine, if any.
         */
        errorNumber: number;
        /**
         * Information about the connected server.
         */
        serverInfo: ServerInfo;
        /**
         * information about the actual connection established
         */
        connectionSummary: ConnectionSummary;
        /**
         * Indicates whether the server version is supported by ADS. The default value is true. If the value is false, ADS will show a warning message.
         */
        isSupportedVersion?: boolean;
        /**
         * The messages that will be appended to the Azure Data Studio's warning message about unsupported versions.
         */
        unsupportedVersionMessage?: string;
    }

    /**
     * Summary that identifies a unique database connection.
     */
    export interface ConnectionSummary {
        /**
         * server name
         */
        serverName: string;
        /**
         * database name
         */
        databaseName?: string | undefined;
        /**
         * user name
         */
        userName: string;
    }

    /**
     * Information about a Server instance.
     */
    export interface ServerInfo {
        /**
         * The major version of the instance.
         */
        serverMajorVersion?: number | undefined;
        /**
         * The minor version of the instance.
         */
        serverMinorVersion?: number | undefined;
        /**
         * The build of the instance.
         */
        serverReleaseVersion: number;
        /**
         * The ID of the engine edition of the instance.
         */
        engineEditionId: number;
        /**
         * String containing the full server version text.
         */
        serverVersion: string;
        /**
         * String describing the product level of the server.
         */
        serverLevel: string;
        /**
         * The edition of the instance.
         */
        serverEdition: string;
        /**
         * Whether the instance is running in the cloud (Azure) or not.
         */
        isCloud: boolean;
        /**
         * The version of Azure that the instance is running on, if applicable.
         */
        azureVersion: number;
        /**
         * The Operating System version string of the machine running the instance.
         */
        osVersion: string;
        /**
         * The CPU count of the host running the server.
         */
        cpuCount?: number;
        /**
         * The physical memory of the host running the server.
         */
        physicalMemoryInMb?: number;
        /**
         * options for all new server properties.
         */
        options: { [key: string]: any };
    }

    /**
     * The possible values of the server engine edition
     */
    export enum DatabaseEngineEdition {
        Unknown = 0,
        Personal = 1,
        Standard = 2,
        Enterprise = 3,
        Express = 4,
        SqlDatabase = 5,
        SqlDataWarehouse = 6,
        SqlStretchDatabase = 7,
        SqlManagedInstance = 8,
        SqlOnDemand = 11
    }

    export interface DataProvider {
        handle?: number | undefined;
        readonly providerId: string;
    }

    export interface ConnectionProvider extends DataProvider {
        connect(connectionUri: string, connectionInfo: ConnectionInfo): Thenable<boolean>;

        disconnect(connectionUri: string): Thenable<boolean>;

        cancelConnect(connectionUri: string): Thenable<boolean>;

        listDatabases(connectionUri: string): Thenable<ListDatabasesResult>;

        changeDatabase(connectionUri: string, newDatabase: string): Thenable<boolean>;

        rebuildIntelliSenseCache(connectionUri: string): Thenable<void>;

        getConnectionString(connectionUri: string, includePassword: boolean): Thenable<string>;

        buildConnectionInfo?(connectionString: string): Thenable<ConnectionInfo>;

        /**
         * Registers a handler for ConnectionComplete events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnConnectionComplete(handler: (connSummary: ConnectionInfoSummary) => any): void;

        /**
         * Registers a handler for IntellisenseCacheComplete events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnIntelliSenseCacheComplete(handler: (connectionUri: string) => any): void;

        /**
         * Registers a handler for ConnectionChanged events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnConnectionChanged(handler: (changedConnInfo: ChangedConnectionInfo) => any): void;
    }

    export enum ServiceOptionType {
        string = 'string',
        multistring = 'multistring',
        password = 'password',
        number = 'number',
        category = 'category',
        boolean = 'boolean',
        object = 'object'
    }

    export enum ConnectionOptionSpecialType {
        connectionName = 'connectionName',
        serverName = 'serverName',
        databaseName = 'databaseName',
        authType = 'authType',
        userName = 'userName',
        password = 'password',
        appName = 'appName'
    }

    export interface CategoryValue {
        displayName: string;
        name: string;
    }

    export interface ConnectionOption {
        name: string;

        displayName: string;

        description: string;

        groupName: string;

        valueType: ServiceOptionType;

        specialValueType: ConnectionOptionSpecialType;

        defaultValue: string;

        categoryValues: CategoryValue[];

        isIdentity: boolean;

        isRequired: boolean;
    }

    export interface ConnectionProviderOptions {
        options: ConnectionOption[];
    }

    export interface ServiceOption {
        name: string;

        displayName: string;

        description: string;

        groupName: string;

        valueType: ServiceOptionType;

        defaultValue: string;

        objectType: string;

        categoryValues: CategoryValue[];

        isRequired: boolean;

        isArray: boolean;
    }

    export interface AdminServicesOptions {
        databaseInfoOptions: ServiceOption[];

        databaseFileInfoOptions: ServiceOption[];

        fileGroupInfoOptions: ServiceOption[];
    }

    // List Databases Request ----------------------------------------------------------------------
    export interface ListDatabasesResult {
        databaseNames: Array<string>;
        databases?: Array<DatabaseInfo> | undefined;
    }

    /**
     * Information about a connection changed event for a resource represented by a URI
     */
    export interface ChangedConnectionInfo {
        /**
         * Owner URI of the connection that changed.
         */
        connectionUri: string;

        /**
         * Summary of details containing any connection changes.
         */
        connection: ConnectionSummary;
    }

    export interface FeatureMetadataProvider {
        enabled: boolean;

        featureName: string;

        optionsMetadata: ServiceOption[];
    }

    export interface DataProtocolServerCapabilities {
        protocolVersion: string;

        providerName: string;

        providerDisplayName: string;

        connectionProvider: ConnectionProviderOptions;

        adminServicesProvider: AdminServicesOptions;

        features: FeatureMetadataProvider[];
    }

    export interface DataProtocolClientCapabilities {
        hostName: string;

        hostVersion: string;
    }

    export interface CapabilitiesProvider extends DataProvider {
        getServerCapabilities(client: DataProtocolClientCapabilities): Thenable<DataProtocolServerCapabilities>;
    }

    export enum MetadataType {
        Table = 0,
        View = 1,
        SProc = 2,
        Function = 3
    }

    export interface ObjectMetadata {
        metadataType: MetadataType;

        metadataTypeName: string;

        urn: string;

        name: string;

        schema: string;
    }

    export interface ColumnMetadata {
        hasExtendedProperties: boolean;

        defaultValue: string;

        /**
         * Escaped identifier for the name of the column
         */
        escapedName: string;

        /**
         * Whether or not the column is computed
         */
        isComputed: boolean;

        /**
         * Whether or not the column is deterministically computed
         */
        isDeterministic: boolean;

        /**
         * Whether or not the column is an identity column
         */
        isIdentity: boolean;

        /**
         * The ordinal ID of the column
         */
        ordinal: number;

        /**
         * Whether or not the column is calculated on the server side. This could be a computed
         * column or a identity column.
         */
        isCalculated: boolean;

        /**
         * Whether or not the column is used in a key to uniquely identify a row
         */
        isKey: boolean;

        /**
         * Whether or not the column can be trusted for uniqueness
         */
        isTrustworthyForUniqueness: boolean;
    }

    export interface TableMetadata {
        columns: ColumnMetadata;
    }

    export interface ProviderMetadata {
        objectMetadata: ObjectMetadata[];
    }

    export interface MetadataProvider extends DataProvider {
        getMetadata(connectionUri: string): Thenable<ProviderMetadata>;

        getDatabases(connectionUri: string): Thenable<string[] | DatabaseInfo[]>;

        getTableInfo(connectionUri: string, metadata: ObjectMetadata): Thenable<ColumnMetadata[]>;

        getViewInfo(connectionUri: string, metadata: ObjectMetadata): Thenable<ColumnMetadata[]>;
    }

    export enum ScriptOperation {
        Select = 0,
        Create = 1,
        Insert = 2,
        Update = 3,
        Delete = 4,
        Execute = 5,
        Alter = 6
    }

    export interface ScriptingResult {
        operationId: string;
        script: string;
    }

    export interface ScriptingParamDetails {
        filePath?: string | undefined;
        scriptCompatibilityOption: string;
        targetDatabaseEngineEdition: string;
        targetDatabaseEngineType: string;
    }

    export interface ScriptingProvider extends DataProvider {
        scriptAsOperation(connectionUri: string, operation: ScriptOperation, metadata: ObjectMetadata, paramDetails: ScriptingParamDetails): Thenable<ScriptingResult>;

        /**
         * Registers a handler for ScriptingComplete events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnScriptingComplete(handler: (scriptingCompleteResult: ScriptingCompleteResult) => any): void;
    }

    export interface ScriptingCompleteResult {
        errorDetails: string;

        errorMessage: string;

        hasError: boolean;

        canceled: boolean;

        success: boolean;

        operationId: string;
    }

    /**
     * Parameters to initialize a connection to a database
     */
    export interface Credential {
        /**
         * Unique ID identifying the credential
         */
        credentialId: string;

        /**
         * password
         */
        password: string;
    }

    export interface CredentialProvider {
        handle: number;

        saveCredential(credentialId: string, password: string): Thenable<boolean>;

        readCredential(credentialId: string): Thenable<Credential>;

        deleteCredential(credentialId: string): Thenable<boolean>;
    }

    export interface DidChangeLanguageFlavorParams {
        uri: string;
        language: string;
        flavor: string;
    }

    export interface QueryExecutionOptions {
        options: { [option: string]: any; };
    }

    export interface QueryProvider extends DataProvider {
        cancelQuery(ownerUri: string): Thenable<QueryCancelResult>;
        runQuery(ownerUri: string, selection: ISelectionData, runOptions?: ExecutionPlanOptions): Thenable<void>;
        runQueryStatement(ownerUri: string, line: number, column: number): Thenable<void>;
        runQueryString(ownerUri: string, queryString: string): Thenable<void>;
        runQueryAndReturn(ownerUri: string, queryString: string): Thenable<SimpleExecuteResult>;
        parseSyntax(ownerUri: string, query: string): Thenable<SyntaxParseResult>;
        getQueryRows(rowData: QueryExecuteSubsetParams): Thenable<QueryExecuteSubsetResult>;
        disposeQuery(ownerUri: string): Thenable<void>;
        saveResults(requestParams: SaveResultsRequestParams): Thenable<SaveResultRequestResult>;
        setQueryExecutionOptions(ownerUri: string, options: QueryExecutionOptions): Thenable<void>;

        // Notifications
        /**
         * Registers a handler for QueryComplete events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnQueryComplete(handler: (result: QueryExecuteCompleteNotificationResult) => any): void;
        /**
         * Registers a handler for BatchStart events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnBatchStart(handler: (batchInfo: QueryExecuteBatchNotificationParams) => any): void;
        /**
         * Registers a handler for BatchComplete events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnBatchComplete(handler: (batchInfo: QueryExecuteBatchNotificationParams) => any): void;
        /**
         * Registers a handler for ResultSetAvailable events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnResultSetAvailable(handler: (resultSetInfo: QueryExecuteResultSetNotificationParams) => any): void;
        /**
         * Registers a handler for ResultSetUpdated events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnResultSetUpdated(handler: (resultSetInfo: QueryExecuteResultSetNotificationParams) => any): void;
        /**
         * Registers a handler for Message events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnMessage(handler: (message: QueryExecuteMessageParams) => any): void;

        // Edit Data Requests
        commitEdit(ownerUri: string): Thenable<void>;
        createRow(ownerUri: string): Thenable<EditCreateRowResult>;
        deleteRow(ownerUri: string, rowId: number): Thenable<void>;
        disposeEdit(ownerUri: string): Thenable<void>;
        initializeEdit(ownerUri: string, schemaName: string, objectName: string, objectType: string, rowLimit: number, queryString: string): Thenable<void>;
        revertCell(ownerUri: string, rowId: number, columnId: number): Thenable<EditRevertCellResult>;
        revertRow(ownerUri: string, rowId: number): Thenable<void>;
        updateCell(ownerUri: string, rowId: number, columnId: number, newValue: string): Thenable<EditUpdateCellResult>;
        getEditRows(rowData: EditSubsetParams): Thenable<EditSubsetResult>;

        // Edit Data Notifications
        /**
         * Registers a handler for EditSessionReady events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnEditSessionReady(handler: (ownerUri: string, success: boolean, message: string) => any): void;
    }

    export interface IDbColumn {
        allowDBNull?: boolean | undefined;
        baseCatalogName: string;
        baseColumnName: string;
        baseSchemaName: string;
        baseServerName: string;
        baseTableName: string;
        columnName: string;
        columnOrdinal?: number | undefined;
        columnSize?: number | undefined;
        isAliased?: boolean | undefined;
        isAutoIncrement?: boolean | undefined;
        isExpression?: boolean | undefined;
        isHidden?: boolean | undefined;
        isIdentity?: boolean | undefined;
        isKey?: boolean | undefined;
        isBytes?: boolean | undefined;
        isChars?: boolean | undefined;
        isSqlVariant?: boolean | undefined;
        isUdt?: boolean | undefined;
        dataType: string;
        isXml?: boolean | undefined;
        isJson?: boolean | undefined;
        isLong?: boolean | undefined;
        isReadOnly?: boolean | undefined;
        isUnique?: boolean | undefined;
        numericPrecision?: number | undefined;
        numericScale?: number | undefined;
        udtAssemblyQualifiedName: string;
        dataTypeName: string;
    }

    export interface IGridResultSet {
        columns: IDbColumn[];
        rowsUri: string;
        numberOfRows: number;
    }

    export interface IResultMessage {
        batchId?: number | undefined;
        isError: boolean;
        time?: string | undefined;
        message: string;
    }

    export interface ISelectionData {
        startLine: number;
        startColumn: number;
        endLine: number;
        endColumn: number;
    }

    export interface ResultSetSummary {
        id: number;
        batchId: number;
        rowCount: number;
        columnInfo: IDbColumn[];
        complete: boolean;
        /**
         * The visualization options for the result set.
         */
        visualization?: VisualizationOptions;
    }

    /**
     * Defines all the supported visualization types
     */
    export type VisualizationType = 'bar' | 'count' | 'doughnut' | 'horizontalBar' | 'image' | 'line' | 'pie' | 'scatter' | 'table' | 'timeSeries';

    /**
     * Defines the configuration options for visualization
     */
    export interface VisualizationOptions {
        type: VisualizationType;
    }

    export interface BatchSummary {
        hasError: boolean;
        id: number;
        selection: ISelectionData;
        resultSetSummaries: ResultSetSummary[] | null;
        executionElapsed: string;
        executionEnd: string;
        executionStart: string;
    }

    export enum EditRowState {
        clean = 0,
        dirtyInsert = 1,
        dirtyDelete = 2,
        dirtyUpdate = 3
    }

    export interface EditRow {
        cells: DbCellValue[];
        id: number;
        isDirty: boolean;
        state: EditRowState;
    }

    export interface EditCell extends DbCellValue {
        isDirty: boolean;
    }

    export interface QueryExecuteCompleteNotificationResult {
        ownerUri: string;
        batchSummaries: BatchSummary[];
    }

    export interface ExecutionPlanOptions {
        displayEstimatedQueryPlan?: boolean | undefined;
        displayActualQueryPlan?: boolean | undefined;
    }

    export interface SimpleExecuteParams {
        queryString: string;
        ownerUri: string;
    }

    export interface SimpleExecuteResult {
        rowCount: number;
        columnInfo: IDbColumn[];
        rows: DbCellValue[][];
    }

    export interface SyntaxParseParams {
        ownerUri: string;
        query: string;
    }

    export interface SyntaxParseResult {
        parseable: boolean;
        errors: string[];
    }

    // Query Batch Notification -----------------------------------------------------------------------
    export interface QueryExecuteBatchNotificationParams {
        batchSummary: BatchSummary;
        ownerUri: string;
    }

    export interface QueryExecuteResultSetNotificationParams {
        resultSetSummary: ResultSetSummary;
        ownerUri: string;
    }

    export interface QueryExecuteMessageParams {
        message: IResultMessage;
        ownerUri: string;
    }

    export interface QueryExecuteSubsetParams {
        ownerUri: string;
        batchIndex: number;
        resultSetIndex: number;
        rowsStartIndex: number;
        rowsCount: number;
    }

    export interface DbCellValue {
        displayValue: string;
        isNull: boolean;
        invariantCultureDisplayValue: string;
    }

    export interface ResultSetSubset {
        rowCount: number;
        rows: DbCellValue[][];
    }

    export interface QueryExecuteSubsetResult {
        message: string;
        resultSubset: ResultSetSubset;
    }

    export interface QueryCancelResult {
        messages: string;
    }

    // Save Results ===============================================================================
    export interface SaveResultsRequestParams {
        /**
         * 'csv', 'json', 'excel', 'xml'
         */
        resultFormat: string;
        ownerUri: string;
        filePath: string;
        batchIndex: number;
        resultSetIndex: number;
        rowStartIndex: number;
        rowEndIndex: number;
        columnStartIndex: number;
        columnEndIndex: number;
        includeHeaders?: boolean | undefined;
        delimiter?: string | undefined;
        lineSeperator?: string | undefined;
        textIdentifier?: string | undefined;
        encoding?: string | undefined;
        formatted?: boolean | undefined;
    }

    export interface SaveResultRequestResult {
        messages: string;
    }

    // Edit Data ==================================================================================
    // Shared Interfaces --------------------------------------------------------------------------
    export interface IEditSessionOperationParams {
        ownerUri: string;
    }

    export interface IEditRowOperationParams extends IEditSessionOperationParams {
        rowId: number;
    }

    export interface EditCellResult {
        cell: EditCell;
        isRowDirty: boolean;
    }

    // edit/commit --------------------------------------------------------------------------------
    export interface EditCommitParams extends IEditSessionOperationParams { }
    export interface EditCommitResult { }

    // edit/createRow -----------------------------------------------------------------------------
    export interface EditCreateRowParams extends IEditSessionOperationParams { }
    export interface EditCreateRowResult {
        defaultValues: string[];
        newRowId: number;
    }

    // edit/deleteRow -----------------------------------------------------------------------------
    export interface EditDeleteRowParams extends IEditRowOperationParams { }
    export interface EditDeleteRowResult { }

    // edit/dispose -------------------------------------------------------------------------------
    export interface EditDisposeParams extends IEditSessionOperationParams { }
    export interface EditDisposeResult { }

    // edit/initialize ----------------------------------------------------------------------------
    export interface EditInitializeFiltering {
        LimitResults?: number | undefined;
    }

    export interface EditInitializeParams extends IEditSessionOperationParams {
        filters: EditInitializeFiltering;
        objectName: string;
        schemaName: string;
        objectType: string;
        queryString: string;
    }

    export interface EditInitializeResult { }

    // edit/revertCell ----------------------------------------------------------------------------
    export interface EditRevertCellParams extends IEditRowOperationParams {
        columnId: number;
    }
    export interface EditRevertCellResult extends EditCellResult {
    }

    // edit/revertRow -----------------------------------------------------------------------------
    export interface EditRevertRowParams extends IEditRowOperationParams { }
    export interface EditRevertRowResult { }

    // edit/sessionReady Event --------------------------------------------------------------------
    export interface EditSessionReadyParams {
        ownerUri: string;
        success: boolean;
        message: string;
    }

    // edit/updateCell ----------------------------------------------------------------------------
    export interface EditUpdateCellParams extends IEditRowOperationParams {
        columnId: number;
        newValue: string;
    }

    export interface EditUpdateCellResult extends EditCellResult {
    }

    // edit/subset --------------------------------------------------------------------------------
    export interface EditSubsetParams extends IEditSessionOperationParams {
        rowStartIndex: number;
        rowCount: number;
    }
    export interface EditSubsetResult {
        rowCount: number;
        subset: EditRow[];
    }

    /**
     * A reference to a named icon. Currently only a subset of the SQL icons are available.
     * Using a theme icon is preferred over a custom icon as it gives theme authors the possibility to change the icons.
     */
    export class SqlThemeIcon {
        static readonly Folder: SqlThemeIcon;
        static readonly Root: SqlThemeIcon;
        static readonly Database: SqlThemeIcon;
        static readonly Server: SqlThemeIcon;
        static readonly ScalarValuedFunction: SqlThemeIcon;
        static readonly TableValuedFunction: SqlThemeIcon;
        static readonly AggregateFunction: SqlThemeIcon;
        static readonly FileGroup: SqlThemeIcon;
        static readonly StoredProcedure: SqlThemeIcon;
        static readonly UserDefinedTableType: SqlThemeIcon;
        static readonly View: SqlThemeIcon;
        static readonly Table: SqlThemeIcon;
        static readonly HistoryTable: SqlThemeIcon;
        static readonly ServerLevelLinkedServerLogin: SqlThemeIcon;
        static readonly ServerLevelServerAudit: SqlThemeIcon;
        static readonly ServerLevelCryptographicProvider: SqlThemeIcon;
        static readonly ServerLevelCredential: SqlThemeIcon;
        static readonly ServerLevelServerRole: SqlThemeIcon;
        static readonly ServerLevelLogin: SqlThemeIcon;
        static readonly ServerLevelServerAuditSpecification: SqlThemeIcon;
        static readonly ServerLevelServerTrigger: SqlThemeIcon;
        static readonly ServerLevelLinkedServer: SqlThemeIcon;
        static readonly ServerLevelEndpoint: SqlThemeIcon;
        static readonly Synonym: SqlThemeIcon;
        static readonly DatabaseTrigger: SqlThemeIcon;
        static readonly Assembly: SqlThemeIcon;
        static readonly MessageType: SqlThemeIcon;
        static readonly Contract: SqlThemeIcon;
        static readonly Queue: SqlThemeIcon;
        static readonly Service: SqlThemeIcon;
        static readonly Route: SqlThemeIcon;
        static readonly DatabaseAndQueueEventNotification: SqlThemeIcon;
        static readonly RemoteServiceBinding: SqlThemeIcon;
        static readonly BrokerPriority: SqlThemeIcon;
        static readonly FullTextCatalog: SqlThemeIcon;
        static readonly FullTextStopList: SqlThemeIcon;
        static readonly SqlLogFile: SqlThemeIcon;
        static readonly PartitionFunction: SqlThemeIcon;
        static readonly PartitionScheme: SqlThemeIcon;
        static readonly SearchPropertyList: SqlThemeIcon;
        static readonly User: SqlThemeIcon;
        static readonly Schema: SqlThemeIcon;
        static readonly AsymmetricKey: SqlThemeIcon;
        static readonly Certificate: SqlThemeIcon;
        static readonly SymmetricKey: SqlThemeIcon;
        static readonly DatabaseEncryptionKey: SqlThemeIcon;
        static readonly MasterKey: SqlThemeIcon;
        static readonly DatabaseAuditSpecification: SqlThemeIcon;
        static readonly Column: SqlThemeIcon;
        static readonly Key: SqlThemeIcon;
        static readonly Constraint: SqlThemeIcon;
        static readonly Trigger: SqlThemeIcon;
        static readonly Index: SqlThemeIcon;
        static readonly Statistic: SqlThemeIcon;
        static readonly UserDefinedDataType: SqlThemeIcon;
        static readonly UserDefinedType: SqlThemeIcon;
        static readonly XmlSchemaCollection: SqlThemeIcon;
        static readonly SystemExactNumeric: SqlThemeIcon;
        static readonly SystemApproximateNumeric: SqlThemeIcon;
        static readonly SystemDateAndTime: SqlThemeIcon;
        static readonly SystemCharacterString: SqlThemeIcon;
        static readonly SystemUnicodeCharacterString: SqlThemeIcon;
        static readonly SystemBinaryString: SqlThemeIcon;
        static readonly SystemOtherDataType: SqlThemeIcon;
        static readonly SystemClrDataType: SqlThemeIcon;
        static readonly SystemSpatialDataType: SqlThemeIcon;
        static readonly UserDefinedTableTypeColumn: SqlThemeIcon;
        static readonly UserDefinedTableTypeKey: SqlThemeIcon;
        static readonly UserDefinedTableTypeConstraint: SqlThemeIcon;
        static readonly StoredProcedureParameter: SqlThemeIcon;
        static readonly TableValuedFunctionParameter: SqlThemeIcon;
        static readonly ScalarValuedFunctionParameter: SqlThemeIcon;
        static readonly AggregateFunctionParameter: SqlThemeIcon;
        static readonly DatabaseRole: SqlThemeIcon;
        static readonly ApplicationRole: SqlThemeIcon;
        static readonly FileGroupFile: SqlThemeIcon;
        static readonly SystemMessageType: SqlThemeIcon;
        static readonly SystemContract: SqlThemeIcon;
        static readonly SystemService: SqlThemeIcon;
        static readonly SystemQueue: SqlThemeIcon;
        static readonly Sequence: SqlThemeIcon;
        static readonly SecurityPolicy: SqlThemeIcon;
        static readonly DatabaseScopedCredential: SqlThemeIcon;
        static readonly ExternalResource: SqlThemeIcon;
        static readonly ExternalDataSource: SqlThemeIcon;
        static readonly ExternalFileFormat: SqlThemeIcon;
        static readonly ExternalTable: SqlThemeIcon;
        static readonly ColumnMasterKey: SqlThemeIcon;
        static readonly ColumnEncryptionKey: SqlThemeIcon;

        private constructor(id: string);

        /**
         * Gets the ID for the theme icon for help in cases where string comparison is needed
         */
        public readonly id: string;
    }

    export interface ObjectExplorerSessionResponse {
        sessionId: string;
    }

    export interface ObjectExplorerExpandInfo {
        sessionId?: string | undefined;
        nodePath: string;
        nodes: NodeInfo[];
        errorMessage?: string | undefined;
    }

    export interface ExpandNodeInfo {
        sessionId: string;
        nodePath: string | undefined;
    }

    export interface FindNodesInfo {
        sessionId: string;
        type: string;
        schema: string;
        name: string;
        database: string;
        parentObjectNames: string[];
    }

    export interface ObjectExplorerCloseSessionInfo {
        sessionId?: string | undefined;
    }

    export interface ObjectExplorerCloseSessionResponse {
        sessionId: string;
        success: boolean;
    }

    export interface ObjectExplorerFindNodesResponse {
        nodes: NodeInfo[];
    }

    export interface ObjectExplorerProviderBase extends DataProvider {
        expandNode(nodeInfo: ExpandNodeInfo): Thenable<boolean>;

        refreshNode(nodeInfo: ExpandNodeInfo): Thenable<boolean>;

        findNodes(findNodesInfo: FindNodesInfo): Thenable<ObjectExplorerFindNodesResponse>;

        /**
         * Registers a handler for ExpandCompleted events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnExpandCompleted(handler: (response: ObjectExplorerExpandInfo) => any): void;
    }

    export interface ObjectExplorerProvider extends ObjectExplorerProviderBase {
        createNewSession(connInfo: ConnectionInfo): Thenable<ObjectExplorerSessionResponse>;

        closeSession(closeSessionInfo: ObjectExplorerCloseSessionInfo): Thenable<ObjectExplorerCloseSessionResponse>;

        /**
         * Registers a handler for SessionCreated events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnSessionCreated(handler: (response: ObjectExplorerSession) => any): void;

        /**
         * Registers a handler for SessionDisconnected events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnSessionDisconnected?(handler: (response: ObjectExplorerSession) => any): void;
    }

    export interface ObjectExplorerNodeProvider extends ObjectExplorerProviderBase {
        /**
         * The providerId for whichever type of ObjectExplorer connection this can add folders and objects to
         */
        readonly supportedProviderId: string;

        /**
         * Optional group name used to sort nodes in the tree. If not defined, the node order will be added in order based on provider ID, with
         * nodes from the main ObjectExplorerProvider for this provider type added first
         */
        readonly group?: string | undefined;

        handleSessionOpen(session: ObjectExplorerSession): Thenable<boolean>;

        handleSessionClose(closeSessionInfo: ObjectExplorerCloseSessionInfo): void;
    }

    export interface IconProvider extends DataProvider {
        getConnectionIconId(connection: IConnectionProfile, serverInfo: ServerInfo): Thenable<string | undefined>;
    }

    // Admin Services interfaces  -----------------------------------------------------------------------
    export interface DatabaseInfo {
        options: { [key: string]: any };
    }

    export interface LoginInfo {
        name: string;
    }

    export interface CreateDatabaseResponse {
        result: boolean;
        taskId: number;
    }

    export interface CreateLoginResponse {
        result: boolean;
        taskId: number;
    }

    export interface AdminServicesProvider extends DataProvider {
        createDatabase(connectionUri: string, database: DatabaseInfo): Thenable<CreateDatabaseResponse>;

        createLogin(connectionUri: string, login: LoginInfo): Thenable<CreateLoginResponse>;

        getDefaultDatabaseInfo(connectionUri: string): Thenable<DatabaseInfo>;

        getDatabaseInfo(connectionUri: string): Thenable<DatabaseInfo>;
    }

    // Agent Services types
    export enum WeekDays {
        sunday = 1,
        monday = 2,
        tuesday = 4,
        wednesday = 8,
        thursday = 16,
        friday = 32,
        weekDays = 62,
        saturday = 64,
        weekEnds = 65,
        everyDay = 127
    }

    export enum NotifyMethods {
        none = 0,
        notifyEmail = 1,
        pager = 2,
        netSend = 4,
        notifyAll = 7
    }

    export enum AlertType {
        sqlServerEvent = 1,
        sqlServerPerformanceCondition = 2,
        nonSqlServerEvent = 3,
        wmiEvent = 4
    }

    export enum JobCompletionActionCondition {
        Never = 0,
        OnSuccess = 1,
        OnFailure = 2,
        Always = 3
    }

    export enum FrequencyTypes {
        Unknown,
        OneTime = 1 << 1,
        Daily = 1 << 2,
        Weekly = 1 << 3,
        Monthly = 1 << 4,
        MonthlyRelative = 1 << 5,
        AutoStart = 1 << 6,
        OnIdle = 1 << 7
    }

    export enum FrequencySubDayTypes {
        Unknown = 0,
        Once = 1,
        Second = 2,
        Minute = 4,
        Hour = 8
    }

    export enum FrequencyRelativeIntervals {
        First = 1,
        Second = 2,
        Third = 4,
        Fourth = 8,
        Last = 16
    }

    export enum JobExecutionStatus {
        Executing = 1,
        WaitingForWorkerThread = 2,
        BetweenRetries = 3,
        Idle = 4,
        Suspended = 5,
        WaitingForStepToFinish = 6,
        PerformingCompletionAction = 7
    }

    export interface AgentJobInfo {
        name: string;
        owner: string;
        description: string;
        currentExecutionStatus: number;
        lastRunOutcome: number;
        currentExecutionStep: string;
        enabled: boolean;
        hasTarget: boolean;
        hasSchedule: boolean;
        hasStep: boolean;
        runnable: boolean;
        category: string;
        categoryId: number;
        categoryType: number;
        lastRun: string;
        nextRun: string;
        jobId: string;
        startStepId: number;
        emailLevel: JobCompletionActionCondition;
        pageLevel: JobCompletionActionCondition;
        eventLogLevel: JobCompletionActionCondition;
        deleteLevel: JobCompletionActionCondition;
        operatorToEmail: string;
        operatorToPage: string;
        jobSteps: AgentJobStepInfo[];
        jobSchedules: AgentJobScheduleInfo[];
        alerts: AgentAlertInfo[];
    }

    export interface AgentNotebookInfo extends AgentJobInfo {
        templateId: number;
        targetDatabase: string;
        lastRunNotebookError: string;
        executeDatabase: string;
    }

    export interface AgentNotebookMaterializedInfo {
        materializedId: number;
        targetDatabase: string;
        materializedName: string;
        favorite: boolean;
    }

    export interface AgentJobScheduleInfo {
        id: number;
        name: string;
        jobName: string;
        isEnabled: boolean;
        frequencyTypes: FrequencyTypes;
        frequencySubDayTypes: FrequencySubDayTypes;
        frequencySubDayInterval: number;
        frequencyRelativeIntervals: FrequencyRelativeIntervals;
        frequencyRecurrenceFactor: number;
        frequencyInterval: number;
        dateCreated: string;
        activeStartTimeOfDay: string;
        activeStartDate: string;
        activeEndTimeOfDay: string;
        jobCount: number;
        activeEndDate: string;
        scheduleUid: string;
        description: string;
    }

    export interface AgentJobStep {
        jobId: string;
        stepId: string;
        stepName: string;
        message: string;
        runDate: string;
        runStatus: number;
        stepDetails: AgentJobStepInfo;
    }

    export enum AgentSubSystem {
        TransactSql = 1,
        ActiveScripting = 2,
        CmdExec = 3,
        Snapshot = 4,
        LogReader = 5,
        Distribution = 6,
        Merge = 7,
        QueueReader = 8,
        AnalysisQuery = 9,
        AnalysisCommands = 10,
        Ssis = 11,
        PowerShell = 12
    }

    export enum StepCompletionAction {
        QuitWithSuccess = 1,
        QuitWithFailure = 2,
        GoToNextStep = 3,
        GoToStep = 4
    }

    export interface AgentJobStepInfo {
        jobId: string;
        jobName: string;
        script: string;
        scriptName: string;
        stepName: string;
        subSystem: AgentSubSystem;
        id: number;
        failureAction: StepCompletionAction;
        successAction: StepCompletionAction;
        failStepId: number;
        successStepId: number;
        command: string;
        commandExecutionSuccessCode: number;
        databaseName: string;
        databaseUserName: string;
        server: string;
        outputFileName: string;
        appendToLogFile: boolean;
        appendToStepHist: boolean;
        writeLogToTable: boolean;
        appendLogToTable: boolean;
        retryAttempts: number;
        retryInterval: number;
        proxyName: string;
    }

    export interface AgentJobHistoryInfo {
        instanceId: number;
        sqlMessageId: string;
        message: string;
        stepId: string;
        stepName: string;
        sqlSeverity: string;
        jobId: string;
        jobName: string;
        runStatus: number;
        runDate: string;
        runDuration: string;
        operatorEmailed: string;
        operatorNetsent: string;
        operatorPaged: string;
        retriesAttempted: string;
        server: string;
        steps: AgentJobStep[];
    }

    export interface AgentNotebookHistoryInfo extends AgentJobHistoryInfo {
        materializedNotebookId: number;
        materializedNotebookName: string;
        materializedNotebookPin: boolean;
        materializedNotebookErrorInfo: string;
        materializedNotebookDeleted: boolean;
    }

    export interface AgentProxyInfo {
        id: number;
        accountName: string;
        description: string;
        credentialName: string;
        credentialIdentity: string;
        credentialId: number;
        isEnabled: boolean;
    }

    export interface AgentAlertInfo {
        id: number;
        name: string;
        delayBetweenResponses: number;
        eventDescriptionKeyword: string;
        eventSource: string;
        hasNotification: number;
        includeEventDescription: NotifyMethods;
        isEnabled: boolean;
        jobId: string;
        jobName: string;
        lastOccurrenceDate: string;
        lastResponseDate: string;
        messageId: number;
        notificationMessage: string;
        occurrenceCount: number;
        performanceCondition: string;
        severity: number;
        databaseName: string;
        countResetDate: string;
        categoryName: string;
        alertType: AlertType;
        wmiEventNamespace: string;
        wmiEventQuery: string;
    }

    export interface AgentOperatorInfo {
        name: string;
        id: number;
        emailAddress: string;
        enabled: boolean;
        lastEmailDate: string;
        lastNetSendDate: string;
        lastPagerDate: string;
        pagerAddress: string;
        categoryName: string;
        pagerDays: WeekDays;
        saturdayPagerEndTime: string;
        saturdayPagerStartTime: string;
        sundayPagerEndTime: string;
        sundayPagerStartTime: string;
        netSendAddress: string;
        weekdayPagerStartTime: string;
        weekdayPagerEndTime: string;
    }

    export interface ResultStatus {
        success: boolean;
        errorMessage: string;
    }

    export interface AgentJobsResult extends ResultStatus {
        jobs: AgentJobInfo[];
    }

    export interface AgentJobHistoryResult extends ResultStatus {
        histories: AgentJobHistoryInfo[];
        schedules: AgentJobScheduleInfo[];
        alerts: AgentAlertInfo[];
        steps: AgentJobStepInfo[];
    }

    export interface CreateAgentJobResult extends ResultStatus {
        job: AgentJobInfo;
    }

    export interface UpdateAgentJobResult extends ResultStatus {
        job: AgentJobInfo;
    }

    export interface AgentJobCategory {
        id: string;
        name: string;
    }

    export interface AgentJobDefaultsResult extends ResultStatus {
        owner: string;
        categories: AgentJobCategory[];
    }

    export interface AgentNotebooksResult extends ResultStatus {
        notebooks: AgentNotebookInfo[];
    }

    export interface AgentJobHistoryResult extends ResultStatus {
        histories: AgentJobHistoryInfo[];
        schedules: AgentJobScheduleInfo[];
        alerts: AgentAlertInfo[];
        steps: AgentJobStepInfo[];
    }

    export interface AgentNotebookHistoryResult extends ResultStatus {
        histories: AgentNotebookHistoryInfo[];
        schedules: AgentJobScheduleInfo[];
        steps: AgentJobStepInfo[];
    }

    export interface AgentNotebookMaterializedResult extends ResultStatus {
        notebookMaterialized: string;
    }

    export interface AgentNotebookTemplateResult extends ResultStatus {
        notebookTemplate: string;
    }

    export interface CreateAgentNotebookResult extends ResultStatus {
        notebook: AgentNotebookInfo;
    }

    export interface UpdateAgentNotebookResult extends ResultStatus {
        notebook: AgentNotebookInfo;
    }

    export interface CreateAgentJobStepResult extends ResultStatus {
        step: AgentJobStepInfo;
    }

    export interface UpdateAgentJobStepResult extends ResultStatus {
        step: AgentJobStepInfo;
    }

    export interface CreateAgentProxyResult extends ResultStatus {
        step: AgentJobStepInfo;
    }

    export interface UpdateAgentProxyResult extends ResultStatus {
        step: AgentJobStepInfo;
    }

    export interface AgentAlertsResult extends ResultStatus {
        alerts: AgentAlertInfo[];
    }

    export interface CreateAgentAlertResult extends ResultStatus {
        alert: AgentJobStepInfo;
    }

    export interface UpdateAgentAlertResult extends ResultStatus {
        alert: AgentJobStepInfo;
    }

    export interface AgentOperatorsResult extends ResultStatus {
        operators: AgentOperatorInfo[];
    }

    export interface CreateAgentOperatorResult extends ResultStatus {
        operator: AgentOperatorInfo;
    }

    export interface UpdateAgentOperatorResult extends ResultStatus {
        operator: AgentOperatorInfo;
    }

    export interface AgentProxiesResult extends ResultStatus {
        proxies: AgentProxyInfo[];
    }

    export interface CreateAgentProxyResult extends ResultStatus {
        proxy: AgentProxyInfo;
    }

    export interface UpdateAgentProxyResult extends ResultStatus {
        proxy: AgentProxyInfo;
    }

    export interface AgentJobSchedulesResult extends ResultStatus {
        schedules: AgentJobScheduleInfo[];
    }

    export interface CreateAgentJobScheduleResult extends ResultStatus {
        schedule: AgentJobScheduleInfo;
    }

    export interface UpdateAgentJobScheduleResult extends ResultStatus {
        schedule: AgentJobScheduleInfo;
    }

    export interface AgentServicesProvider extends DataProvider {
        // Job management methods
        getJobs(ownerUri: string): Thenable<AgentJobsResult>;
        getJobHistory(ownerUri: string, jobId: string, jobName: string): Thenable<AgentJobHistoryResult>;
        jobAction(ownerUri: string, jobName: string, action: string): Thenable<ResultStatus>;
        createJob(ownerUri: string, jobInfo: AgentJobInfo): Thenable<CreateAgentJobResult>;
        updateJob(ownerUri: string, originalJobName: string, jobInfo: AgentJobInfo): Thenable<UpdateAgentJobResult>;
        deleteJob(ownerUri: string, jobInfo: AgentJobInfo): Thenable<ResultStatus>;
        getJobDefaults(ownerUri: string): Thenable<AgentJobDefaultsResult>;

        // Notebook management methods
        getNotebooks(ownerUri: string): Thenable<AgentNotebooksResult>;
        getNotebookHistory(ownerUri: string, jobId: string, jobName: string, targetDatabase: string): Thenable<AgentNotebookHistoryResult>;
        getMaterializedNotebook(ownerUri: string, targetDatabase: string, notebookMaterializedId: number): Thenable<AgentNotebookMaterializedResult>;
        getTemplateNotebook(ownerUri: string, targetDatabase: string, jobId: string): Thenable<AgentNotebookTemplateResult>;
        createNotebook(ownerUri: string, notebook: AgentNotebookInfo, templateFilePath: string): Thenable<CreateAgentNotebookResult>;
        deleteNotebook(ownerUri: string, notebook: AgentNotebookInfo): Thenable<ResultStatus>;
        updateNotebook(ownerUri: string, originalNotebookName: string, notebook: AgentNotebookInfo, templateFilePath: string): Thenable<UpdateAgentNotebookResult>;
        updateNotebookMaterializedName(ownerUri: string, agentNotebookHistory: AgentNotebookHistoryInfo, targetDatabase: string, name: string): Thenable<ResultStatus>;
        updateNotebookMaterializedPin(ownerUri: string, agentNotebookHistory: AgentNotebookHistoryInfo, targetDatabase: string, pin: boolean): Thenable<ResultStatus>;
        deleteMaterializedNotebook(ownerUri: string, agentNotebookHistory: AgentNotebookHistoryInfo, targetDatabase: string): Thenable<ResultStatus>;

        // Job Step management methods
        createJobStep(ownerUri: string, stepInfo: AgentJobStepInfo): Thenable<CreateAgentJobStepResult>;
        updateJobStep(ownerUri: string, originalJobStepName: string, stepInfo: AgentJobStepInfo): Thenable<UpdateAgentJobStepResult>;
        deleteJobStep(ownerUri: string, stepInfo: AgentJobStepInfo): Thenable<ResultStatus>;

        // Alert management methods
        getAlerts(ownerUri: string): Thenable<AgentAlertsResult>;
        createAlert(ownerUri: string, alertInfo: AgentAlertInfo): Thenable<CreateAgentAlertResult>;
        updateAlert(ownerUri: string, originalAlertName: string, alertInfo: AgentAlertInfo): Thenable<UpdateAgentAlertResult>;
        deleteAlert(ownerUri: string, alertInfo: AgentAlertInfo): Thenable<ResultStatus>;

        // Operator management methods
        getOperators(ownerUri: string): Thenable<AgentOperatorsResult>;
        createOperator(ownerUri: string, operatorInfo: AgentOperatorInfo): Thenable<CreateAgentOperatorResult>;
        updateOperator(ownerUri: string, originalOperatorName: string, operatorInfo: AgentOperatorInfo): Thenable<UpdateAgentOperatorResult>;
        deleteOperator(ownerUri: string, operatorInfo: AgentOperatorInfo): Thenable<ResultStatus>;

        // Proxy management methods
        getProxies(ownerUri: string): Thenable<AgentProxiesResult>;
        createProxy(ownerUri: string, proxyInfo: AgentProxyInfo): Thenable<CreateAgentOperatorResult>;
        updateProxy(ownerUri: string, originalProxyName: string, proxyInfo: AgentProxyInfo): Thenable<UpdateAgentOperatorResult>;
        deleteProxy(ownerUri: string, proxyInfo: AgentProxyInfo): Thenable<ResultStatus>;

        // Credential method
        getCredentials(ownerUri: string): Thenable<GetCredentialsResult>;

        // Job Schedule management methods
        getJobSchedules(ownerUri: string): Thenable<AgentJobSchedulesResult>;
        createJobSchedule(ownerUri: string, scheduleInfo: AgentJobScheduleInfo): Thenable<CreateAgentJobScheduleResult>;
        updateJobSchedule(ownerUri: string, originalScheduleName: string, scheduleInfo: AgentJobScheduleInfo): Thenable<UpdateAgentJobScheduleResult>;
        deleteJobSchedule(ownerUri: string, scheduleInfo: AgentJobScheduleInfo): Thenable<ResultStatus>;

        registerOnUpdated(handler: () => any): void;
    }
    // DacFx interfaces  -----------------------------------------------------------------------

    // Security service interfaces ------------------------------------------------------------------------
    export interface CredentialInfo {
        id: number;
        identity: string;
        name: string;
        dateLastModified: string;
        createDate: string;
        providerName: string;
    }

    export interface GetCredentialsResult extends ResultStatus {
        credentials: CredentialInfo[];
    }

    // Task service interfaces ----------------------------------------------------------------------------
    export enum TaskStatus {
        NotStarted = 0,
        InProgress = 1,
        Succeeded = 2,
        SucceededWithWarning = 3,
        Failed = 4,
        Canceled = 5,
        Canceling = 6
    }

    export enum TaskExecutionMode {
        execute = 0,
        script = 1,
        executeAndScript = 2,
    }

    export interface ListTasksParams {
        listActiveTasksOnly: boolean;
    }

    export interface TaskInfo {
        connection?: connection.Connection | undefined;
        taskId: string;
        status: TaskStatus;
        taskExecutionMode: TaskExecutionMode;
        serverName: string;
        databaseName: string;
        name: string;
        description: string;
        providerName: string;
        isCancelable: boolean;
    }

    export interface ListTasksResponse {
        tasks: TaskInfo[];
    }

    export interface CancelTaskParams {
        taskId: string;
    }

    export interface TaskProgressInfo {
        taskId: string;
        status: TaskStatus;
        message: string;
        script?: string | undefined;
    }

    export interface TaskServicesProvider extends DataProvider {
        getAllTasks(listTasksParams: ListTasksParams): Thenable<ListTasksResponse>;

        cancelTask(cancelTaskParams: CancelTaskParams): Thenable<boolean>;

        /**
         * Registers a handler for TaskCreated events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnTaskCreated(handler: (response: TaskInfo) => any): void;

        /**
         * Registers a handler for TaskStatusChanged events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnTaskStatusChanged(handler: (response: TaskProgressInfo) => any): void;
    }

    // Disaster Recovery interfaces  -----------------------------------------------------------------------

    export interface BackupConfigInfo {
        recoveryModel: string;
        defaultBackupFolder: string;
        backupEncryptors: {
            encryptorType: number;
            encryptorName: string;
        }[];
    }

    export interface BackupResponse {
        result: boolean;
        taskId: number;
    }

    export interface BackupProvider extends DataProvider {
        backup(connectionUri: string, backupInfo: { [key: string]: any }, taskExecutionMode: TaskExecutionMode): Thenable<BackupResponse>;
        getBackupConfigInfo(connectionUri: string): Thenable<BackupConfigInfo>;
    }

    export interface RestoreProvider extends DataProvider {
        getRestorePlan(connectionUri: string, restoreInfo: RestoreInfo): Thenable<RestorePlanResponse>;
        cancelRestorePlan(connectionUri: string, restoreInfo: RestoreInfo): Thenable<boolean>;
        restore(connectionUri: string, restoreInfo: RestoreInfo): Thenable<RestoreResponse>;
        getRestoreConfigInfo(connectionUri: string): Thenable<RestoreConfigInfo>;
    }

    export interface RestoreInfo {
        options: { [key: string]: any };
        taskExecutionMode?: TaskExecutionMode | undefined;
    }

    export interface RestoreDatabaseFileInfo {
        fileType: string;

        logicalFileName: string;

        originalFileName: string;

        restoreAsFileName: string;
    }

    export interface DatabaseFileInfo {
        properties: LocalizedPropertyInfo[];
        id: string;
        isSelected: boolean;
    }

    export interface LocalizedPropertyInfo {
        propertyName: string;
        propertyValue: string;
        propertyDisplayName: string;
        propertyValueDisplayName: string;
    }

    export interface RestorePlanDetailInfo {
        name: string;
        currentValue: any;
        isReadOnly: boolean;
        isVisible: boolean;
        defaultValue: any;
    }

    export interface RestorePlanResponse {
        sessionId: string;
        backupSetsToRestore: DatabaseFileInfo[];
        canRestore: boolean;
        errorMessage?: string | undefined;
        dbFiles: RestoreDatabaseFileInfo[];
        databaseNamesFromBackupSets: string[];
        planDetails: { [key: string]: RestorePlanDetailInfo };
    }

    export interface RestoreConfigInfo {
        configInfo: { [key: string]: any };
    }

    export interface RestoreResponse {
        result: boolean;
        taskId: string;
        errorMessage: string;
    }

    export interface ProfilerProvider extends DataProvider {
        createSession(sessionId: string, sessionName: string, template: ProfilerSessionTemplate): Thenable<boolean>;
        startSession(sessionId: string, sessionName: string): Thenable<boolean>;
        stopSession(sessionId: string): Thenable<boolean>;
        pauseSession(sessionId: string): Thenable<boolean>;
        getXEventSessions(sessionId: string): Thenable<string[]>;
        connectSession(sessionId: string): Thenable<boolean>;
        disconnectSession(sessionId: string): Thenable<boolean>;

        registerOnSessionEventsAvailable(handler: (response: ProfilerSessionEvents) => any): void;
        registerOnSessionStopped(handler: (response: ProfilerSessionStoppedParams) => any): void;
        registerOnProfilerSessionCreated(handler: (response: ProfilerSessionCreatedParams) => any): void;
    }

    export interface IProfilerTableRow {
        /**
         * Name of the event; known issue this is not camel case, need to figure
         * out a better way to determine column id's from rendered column names
         */
        EventClass: string;
    }

    export interface IProfilerMoreRowsNotificationParams {
        uri: string;
        rowCount: number;
        data: IProfilerTableRow;
    }

    /**
     * Profiler Event
     */
    export interface ProfilerEvent {
        /**
         * Event class name
         */
        name: string;

        /**
         * Event timestamp
         */
        timestamp: string;

        /**
         * Event values
         */
        values: { [key: string]: any };
    }

    /**
     * Profiler Session Template
     */
    export interface ProfilerSessionTemplate {
        /**
         * Template name
         */
        name: string;

        /**
         * Default view for template
         */
        defaultView: string;

        /**
         * T-SQL for creating a session
         */
        createStatement: string;
    }

    export interface ProfilerSessionEvents {
        sessionId: string;

        events: ProfilerEvent[];

        eventsLost: boolean;
    }

    export interface ProfilerSessionStoppedParams {
        ownerUri: string;

        sessionId: number;
    }

    export interface ProfilerSessionCreatedParams {
        ownerUri: string;
        sessionName: string;
        templateName: string;
    }

    // File browser interfaces  -----------------------------------------------------------------------

    export interface FileBrowserProvider extends DataProvider {
        openFileBrowser(ownerUri: string, expandPath: string, fileFilters: string[], changeFilter: boolean): Thenable<boolean>;
        /**
         * Registers a handler for FileBrowserOpened events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnFileBrowserOpened(handler: (response: FileBrowserOpenedParams) => any): void;
        expandFolderNode(ownerUri: string, expandPath: string): Thenable<boolean>;
        /**
         * Registers a handler for FolderNodeExpanded events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnFolderNodeExpanded(handler: (response: FileBrowserExpandedParams) => any): void;
        validateFilePaths(ownerUri: string, serviceType: string, selectedFiles: string[]): Thenable<boolean>;
        /**
         * Registers a handler for FilePathsValidated events.
         *
         * **WARNING** This should only ever be called by the extension creating the provider. Any other extensions calling this
         * will overwrite the handler registered by the provider extension which will likely break this functionality.
         */
        registerOnFilePathsValidated(handler: (response: FileBrowserValidatedParams) => any): void;
        closeFileBrowser(ownerUri: string): Thenable<FileBrowserCloseResponse>;
    }

    export interface FileTreeNode {
        children: FileTreeNode[];
        isExpanded: boolean;
        isFile: boolean;
        name: string;
        fullPath: string;
    }

    export interface FileTree {
        rootNode: FileTreeNode;
        selectedNode: FileTreeNode;
    }

    export interface FileBrowserOpenedParams {
        ownerUri: string;
        fileTree: FileTree;
        succeeded: boolean;
        message: string;
    }

    export interface FileBrowserExpandedParams {
        ownerUri: string;
        expandPath: string;
        children: FileTreeNode[];
        succeeded: boolean;
        message: string;
    }

    export interface FileBrowserValidatedParams {
        succeeded: boolean;
        message: string;
    }

    export interface FileBrowserCloseResponse {
        succeeded: boolean;
        message: string;
    }

    // ACCOUNT MANAGEMENT //////////////////////////////////////////////////
    export namespace accounts {
        export function registerAccountProvider(providerMetadata: AccountProviderMetadata, provider: AccountProvider): vscode.Disposable;

        /**
         * Launches a flyout dialog that will display the information on how to complete device
         * code OAuth login to the user. Only one flyout can be opened at once and each must be closed
         * by calling {@link endAutoOAuthDeviceCode}.
         * @param providerId ID of the provider that's requesting the flyout be opened
         */
        export function beginAutoOAuthDeviceCode(providerId: string, title: string, message: string, userCode: string, uri: string): Thenable<void>;

        /**
         * Closes the flyout dialog opened by {@link beginAutoOAuthDeviceCode}
         */
        export function endAutoOAuthDeviceCode(): void;

        /**
         * Notifies the account management service that an account has updated (usually due to the
         * account going stale).
         * @param updatedAccount Account object with updated properties
         */
        export function accountUpdated(updatedAccount: Account): void;

        /**
         * Gets all added accounts.
         * @returns Promise to return the accounts
         */
        export function getAllAccounts(): Thenable<Account[]>;

        /**
         * Generates a security token by asking the account's provider
         * @param account Account to generate security token for
         * @param resource Type of resource to get the security token for (defaults to
         * AzureResource.ResourceManagement if not given)
         * @return Promise to return the security token
         * @deprecated use getAccountSecurityToken
         */
        export function getSecurityToken(account: Account, resource?: AzureResource): Thenable<{ [key: string]: any }>;

        /**
         * The token used to authenticate an account.
         */
        export interface AccountSecurityToken {
            /**
             * The token to use
             */
            token: string;
            /**
             * What type of token this is (such as Bearer)
             */
            tokenType?: string | undefined;
        }

        /**
         * Generates a security token by asking the account's provider
         * @param account The account to retrieve the security token for
         * @param tenantId The ID of the tenant associated with this account
         * @param resource Type of resource to get the security token for (defaults to
         * AzureResource.ResourceManagement if not given)
         */
        export function getAccountSecurityToken(account: Account, tenantId: string, resource: AzureResource): Thenable<AccountSecurityToken | undefined>;

        /**
         * An [event](#Event) which fires when the accounts have changed.
         */
        export const onDidChangeAccounts: vscode.Event<DidChangeAccountsParams>;
    }

    /**
     * Represents display information for an account.
     */
    export interface AccountDisplayInfo {
        /**
         * A display name that offers context for the account, such as "Contoso".
         */
        contextualDisplayName: string;

        /**
         * account provider (eg, Work/School vs Microsoft Account)
         */
        accountType: string;

        /**
         * A display name that identifies the account, such as "User Name".
         */
        displayName: string;

        /**
         * Unique user id that identifies the account.
         */
        userId: string;
    }

    /**
     * Represents a key that identifies an account.
     */
    export interface AccountKey {
        /**
         * Identifier of the provider
         */
        providerId: string;

        /**
         * Any arguments that identify an instantiation of the provider
         */
        providerArgs?: any;

        /**
         * Identifier for the account, unique to the provider
         */
        accountId: string;
    }

    /**
     * Represents an account.
     */
    export interface Account {
        /**
         * The key that identifies the account
         */
        key: AccountKey;

        /**
         * Display information for the account
         */
        displayInfo: AccountDisplayInfo;

        /**
         * Custom properties stored with the account
         */
        properties: any;

        /**
         * Indicates if the account needs refreshing
         */
        isStale: boolean;
    }

    export enum AzureResource {
        /**
         * Azure Resource Management (ARM)
         */
        ResourceManagement = 0,
        /**
         * SQL Azure
         */
        Sql = 1,
        /**
         * OSS RDMS
         */
        OssRdbms = 2,
        /**
         * Azure Key Vault
         */
        AzureKeyVault = 3,
        /**
         * Azure AD Graph
         */
        Graph = 4,
        /**
         * Microsoft Resource Management
         */
        MicrosoftResourceManagement = 5,
        /**
         * Azure Dev Ops
         */
        AzureDevOps = 6,
        /**
         * Microsoft Graph
         */
        MsGraph = 7,
        /**
         * Azure Log Analytics
         */
        AzureLogAnalytics = 8,
        /**
         * Azure Storage
         */
        AzureStorage = 9,
        /**
         * Kusto
         */
        AzureKusto = 10,
        /**
         * Power BI
         */
        PowerBi = 11
    }

    export interface DidChangeAccountsParams {
        /**
         * Updated accounts
         */
        accounts: Account[];
    }

    // - ACCOUNT PROVIDER //////////////////////////////////////////////////
    /**
     * Error to be used when the user has cancelled the prompt or refresh methods. When
     * AccountProvider.refresh or AccountProvider.prompt are rejected with this error, the error
     * will not be reported to the user.
     */
    export interface PromptFailedResult {
        /**
         * Type guard for differentiating user cancelled sign in errors from other errors
         */
        canceled: boolean;
    }

    /**
     * Represents a provider of accounts.
     */
    export interface AccountProviderMetadata {
        /**
         * The identifier of the provider
         */
        id: string;

        /**
         * Display name of the provider
         */
        displayName: string;

        /**
         * Any arguments that identify an instantiation of the provider
         */
        args?: any;

        /**
         * Optional settings that identify an instantiation of a provider
         */
        settings?: {} | undefined;
    }

    /**
     * Represents a provider of accounts for use with the account management service
     */
    export interface AccountProvider {
        /**
         * Initializes the account provider with the accounts restored from the memento,
         * @param storedAccounts Accounts restored from the memento
         * @return Account objects after being rehydrated (if necessary)
         */
        initialize(storedAccounts: Account[]): Thenable<Account[]>;

        /**
         * Generates a security token for the provided account
         * @param account The account to generate a security token for
         * @param resource The resource to get the token for
         * @return Promise to return a security token object
         * @deprecated use getAccountSecurityToken
         */
        getSecurityToken(account: Account, resource: AzureResource): Thenable<{} | undefined>;

        /**
         * Prompts the user to enter account information.
         * Returns an error if the user canceled the operation.
         */
        prompt(): Thenable<Account | PromptFailedResult>;

        /**
         * Refreshes a stale account.
         * Returns an error if the user canceled the operation.
         * Otherwise, returns a new updated account instance.
         * @param account - An account.
         */
        refresh(account: Account): Thenable<Account | PromptFailedResult>;

        /**
         * Clears sensitive information for an account. To be called when account is removed
         * @param accountKey - Key that uniquely identifies the account to clear
         */
        clear(accountKey: AccountKey): Thenable<void>;

        /**
         * Called from the account management service when the user has cancelled an auto OAuth
         * authorization process. Implementations should use this to cancel any polling process
         * and call the end OAuth method.
         */
        autoOAuthCancelled(): Thenable<void>;

        /**
         * Clears token cache
         */
        clearTokenCache(): Thenable<void>;
    }

    // Resource provider interfaces  -----------------------------------------------------------------------

    // - ACCOUNT PROVIDER //////////////////////////////////////////////////
    /**
     * Represents a provider of accounts.
     */
    export interface ResourceProviderMetadata {
        /**
         * The identifier of the provider
         */
        id: string;

        /**
         * Display name of the provider
         */
        displayName: string;

        /**
         * Optional settings that identify an instantiation of a provider
         */
        settings?: {} | undefined;
    }

    export namespace resources {
        /**
         * Registers a resource provider that can support
         */
        export function registerResourceProvider(providerMetadata: ResourceProviderMetadata, provider: ResourceProvider): vscode.Disposable;
    }

    /**
     * Represents a provider of resource
     */
    export interface ResourceProvider {
        createFirewallRule(account: Account, firewallruleInfo: FirewallRuleInfo): Thenable<CreateFirewallRuleResponse>;
        handleFirewallRule(errorCode: number, errorMessage: string, connectionTypeId: string): Thenable<HandleFirewallRuleResponse>;
    }

    export interface FirewallRuleInfo {
        startIpAddress?: string | undefined;
        endIpAddress?: string | undefined;
        serverName: string;
        securityTokenMappings: {};
    }

    export interface CreateFirewallRuleResponse {
        result: boolean;
        errorMessage: string;
    }

    export interface HandleFirewallRuleResponse {
        result: boolean;
        ipAddress: string;
    }

    export interface ModalDialog {
        /**
         * Title of the webview.
         */
        title: string;

        /**
         * Contents of the dialog body.
         */
        html: string;

        /**
         * The caption of the OK button.
         */
        okTitle: string;

        /**
         * The caption of the Close button.
         */
        closeTitle: string;

        /**
         * Opens the dialog.
         */
        open(): void;

        /**
         * Closes the dialog.
         */
        close(): void;

        /**
         * Raised when the webview posts a message.
         */
        readonly onMessage: vscode.Event<any>;

        /**
         * Raised when dialog closed.
         */
        readonly onClosed: vscode.Event<any>;

        /**
         * Post a message to the dialog.
         *
         * @param message Body of the message.
         */
        postMessage(message: any): Thenable<any>;
    }

    export interface DashboardWebview {
        /**
         * Raised when the webview posts a message.
         */
        readonly onMessage: vscode.Event<any>;

        /**
         * Raised when the webview closed.
         */
        readonly onClosed: vscode.Event<any>;

        /**
         * Post a message to the webview.
         *
         * @param message Body of the message.
         */
        postMessage(message: any): Thenable<any>;

        /**
         * The connection info for the dashboard the webview exists on
         */
        readonly connection: connection.Connection;

        /**
         * The info on the server for the webview dashboard
         */
        readonly serverInfo: ServerInfo;

        /**
         * Contents of the dialog body.
         */
        html: string;
    }

    export namespace dashboard {
        /**
         * Register a provider for a webview widget
         */
        export function registerWebviewProvider(widgetId: string, handler: (webview: DashboardWebview) => void): void;
    }

    /**
     * Namespace for interacting with the workspace
     */
    export namespace workspace {
        /**
         * An event that is emitted when a [dashboard](#DashboardDocument) is opened.
         */
        export const onDidOpenDashboard: vscode.Event<DashboardDocument>;

        /**
         * An event that is emitted when a [dashboard](#DashboardDocument) is focused.
         */
        export const onDidChangeToDashboard: vscode.Event<DashboardDocument>;

        /**
         * Create a new ModelView editor
         * @param title The title shown in the editor tab
         * @param options Options to configure the editor
         * @param name The name used to identify the editor in telemetry
         */
        export function createModelViewEditor(title: string, options?: ModelViewEditorOptions, name?: string): ModelViewEditor;

        export interface ModelViewEditor extends window.ModelViewPanel {
            /**
             * `true` if there are unpersisted changes.
             * This is editable to support extensions updating the dirty status.
             */
            isDirty: boolean;

            /**
             * Opens the editor
             */
            openEditor(position?: vscode.ViewColumn): Thenable<void>;

            /**
             * Registers a save handler for this editor. This will be called if [supportsSave](#ModelViewEditorOptions.supportsSave)
             * is set to true and the editor is marked as dirty
             */
            registerSaveHandler(handler: () => Thenable<boolean>): void;
        }
    }

    export interface DashboardDocument {
        profile: IConnectionProfile;
        serverInfo: ServerInfo;
    }

    export enum ExtensionNodeType {
        Server = 'Server',
        Database = 'Database'
    }

    export class TreeItem extends vscode.TreeItem {
        payload?: IConnectionProfile | undefined;
        childProvider?: string | undefined;
        type?: ExtensionNodeType | undefined;
    }

    export namespace tasks {
        export interface ITaskHandler {
            (profile: IConnectionProfile, ...args: any[]): any;
        }

        /**
         * Registers a task that can be invoked via a keyboard shortcut,
         * a menu item, an action, or directly.
         *
         * Registering a task with an existing task identifier twice
         * will cause an error.
         *
         * @param task A unique identifier for the task.
         * @param callback A task handler function.
         * @param thisArg The `this` context used when invoking the handler function.
         * @return Disposable which unregisters this task on disposal.
         */
        export function registerTask(task: string, callback: ITaskHandler, thisArg?: any): vscode.Disposable;

        /**
         * Starts an operation to run in the background
         * @param operationInfo Operation Information
         */
        export function startBackgroundOperation(operationInfo: BackgroundOperationInfo): void;
    }

    /**
     * Supports defining a model that can be instantiated as a view in the UI
     */
    export interface ModelBuilder {
        navContainer(): ContainerBuilder<NavContainer, any, any, ContainerProperties>;
        divContainer(): DivBuilder;
        flexContainer(): FlexBuilder;
        splitViewContainer(): SplitViewBuilder;
        /**
         * @deprecated please use radioCardGroup component.
         */
        card(): ComponentBuilder<CardComponent, CardProperties>;
        inputBox(): ComponentBuilder<InputBoxComponent, InputBoxProperties>;
        checkBox(): ComponentBuilder<CheckBoxComponent, CheckBoxProperties>;
        radioButton(): ComponentBuilder<RadioButtonComponent, RadioButtonProperties>;
        webView(): ComponentBuilder<WebViewComponent, WebViewProperties>;
        editor(): ComponentBuilder<EditorComponent, EditorProperties>;
        diffeditor(): ComponentBuilder<DiffEditorComponent, DiffEditorProperties>;
        text(): ComponentBuilder<TextComponent, TextComponentProperties>;
        image(): ComponentBuilder<ImageComponent, ImageComponentProperties>;
        button(): ComponentBuilder<ButtonComponent, ButtonProperties>;
        dropDown(): ComponentBuilder<DropDownComponent, DropDownProperties>;
        tree<T>(): ComponentBuilder<TreeComponent<T>, TreeProperties>;
        listBox(): ComponentBuilder<ListBoxComponent, ListBoxProperties>;
        table(): ComponentBuilder<TableComponent, TableComponentProperties>;
        declarativeTable(): ComponentBuilder<DeclarativeTableComponent, DeclarativeTableProperties>;
        dashboardWidget(widgetId: string): ComponentBuilder<DashboardWidgetComponent, ComponentProperties>;
        dashboardWebview(webviewId: string): ComponentBuilder<DashboardWebviewComponent, ComponentProperties>;
        formContainer(): FormBuilder;
        groupContainer(): GroupBuilder;
        toolbarContainer(): ToolbarBuilder;
        loadingComponent(): LoadingComponentBuilder;
        fileBrowserTree(): ComponentBuilder<FileBrowserTreeComponent, FileBrowserTreeProperties>;
        hyperlink(): ComponentBuilder<HyperlinkComponent, HyperlinkComponentProperties>;
        separator(): ComponentBuilder<SeparatorComponent, SeparatorComponentProperties>;
        infoBox(): ComponentBuilder<InfoBoxComponent, InfoBoxComponentProperties>;
        propertiesContainer(): ComponentBuilder<PropertiesContainerComponent, PropertiesContainerComponentProperties>;
        radioCardGroup(): ComponentBuilder<RadioCardGroupComponent, RadioCardGroupComponentProperties>;
        listView(): ComponentBuilder<ListViewComponent, ListViewComponentProperties>;
        tabbedPanel(): TabbedPanelComponentBuilder;
        slider(): ComponentBuilder<SliderComponent, SliderComponentProperties>;
    }

    export interface TreeComponentDataProvider<T> extends vscode.TreeDataProvider<T> {
        getTreeItem(element: T): TreeComponentItem | Thenable<TreeComponentItem>;
    }

    export interface NodeCheckedEventParameters<T> {
        element: T;
        checked: boolean;
    }

    export interface TreeComponentView<T> extends vscode.Disposable {
        onNodeCheckedChanged: vscode.Event<NodeCheckedEventParameters<T>>;
        onDidChangeSelection: vscode.Event<vscode.TreeViewSelectionChangeEvent<T>>;
    }

    export class TreeComponentItem extends vscode.TreeItem {
        checked?: boolean | undefined;
        enabled?: boolean | undefined;
    }

    export interface ComponentBuilder<TComponent extends Component, TPropertyBag extends ComponentProperties> {
        component(): TComponent;
        /**
         * @deprecated Use withProps instead
         */
        withProperties(properties: TPropertyBag): ComponentBuilder<TComponent, TPropertyBag>;
        /**
         * Sets the initial set of properties for the component being created
         * @param properties The properties to apply to the component
         */
        withProps(properties: TPropertyBag): ComponentBuilder<TComponent, TPropertyBag>;
        withValidation(validation: (component: TComponent) => boolean | Thenable<boolean>): ComponentBuilder<TComponent, TPropertyBag>;
    }
    export interface ContainerBuilder<TComponent extends Component, TLayout, TItemLayout, TPropertyBag extends ContainerProperties> extends ComponentBuilder<TComponent, TPropertyBag> {
        withLayout(layout: TLayout): ContainerBuilder<TComponent, TLayout, TItemLayout, TPropertyBag>;
        withItems(components: Array<Component>, itemLayout?: TItemLayout): ContainerBuilder<TComponent, TLayout, TItemLayout, TPropertyBag>;
    }

    export interface FlexBuilder extends ContainerBuilder<FlexContainer, FlexLayout, FlexItemLayout, ContainerProperties> {
    }

    // Building on top of flex item
    export interface SplitViewBuilder extends ContainerBuilder<SplitViewContainer, SplitViewLayout, FlexItemLayout, ContainerProperties> {
    }

    export interface DivBuilder extends ContainerBuilder<DivContainer, DivLayout, DivItemLayout, DivContainerProperties> {
    }

    export interface GroupBuilder extends ContainerBuilder<GroupContainer, GroupLayout, GroupItemLayout, GroupContainerProperties> {
    }

    export interface ToolbarBuilder extends ContainerBuilder<ToolbarContainer, ToolbarLayout, any, ContainerProperties> {
        withToolbarItems(components: ToolbarComponent[]): ContainerBuilder<ToolbarContainer, ToolbarLayout, any, ContainerProperties>;

        /**
         * Creates a collection of child components and adds them all to this container
         *
         * @param toolbarComponents the definitions
         */
        addToolbarItems(toolbarComponents: Array<ToolbarComponent>): void;

        /**
         * Creates a child component and adds it to this container.
         *
         * @param toolbarComponent the component to be added
         */
        addToolbarItem(toolbarComponent: ToolbarComponent): void;
    }

    export interface LoadingComponentBuilder extends ComponentBuilder<LoadingComponent, LoadingComponentProperties> {
        /**
         * Set the component wrapped by the LoadingComponent
         * @param component The component to wrap
         */
        withItem(component: Component): LoadingComponentBuilder;
    }

    export interface FormBuilder extends ContainerBuilder<FormContainer, FormLayout, FormItemLayout, ContainerProperties> {
        withFormItems(components: (FormComponent | FormComponentGroup)[], itemLayout?: FormItemLayout): FormBuilder;

        /**
         * Creates a collection of child components and adds them all to this container
         *
         * @param formComponents the definitions
         * @param [itemLayout] Optional layout for the child items
         */
        addFormItems(formComponents: Array<FormComponent | FormComponentGroup>, itemLayout?: FormItemLayout): void;

        /**
         * Creates a child component and adds it to this container.
         *
         * @param formComponent the component to be added
         * @param [itemLayout] Optional layout for this child item
         */
        addFormItem(formComponent: FormComponent | FormComponentGroup, itemLayout?: FormItemLayout): void;

        /**
         * Inserts a from component in a given position in the form. Returns error given invalid index
         * @param formComponent Form component
         * @param index index to insert the component to
         * @param itemLayout Item Layout
         */
        insertFormItem(formComponent: FormComponent | FormComponentGroup, index?: number, itemLayout?: FormItemLayout): void;

        /**
         * Removes a from item from the from
         */
        removeFormItem(formComponent: FormComponent | FormComponentGroup): boolean;
    }

    export interface Component extends ComponentProperties {
        readonly id: string;

        /**
         * Sends any updated properties of the component to the UI
         *
         * @returns Thenable that completes once the update
         * has been applied in the UI
         */
        updateProperties(properties: { [key: string]: any }): Thenable<void>;

        /**
         * Sends an updated property of the component to the UI
         *
         * @returns Thenable that completes once the update
         * has been applied in the UI
         */
        updateProperty(key: string, value: any): Thenable<void>;

        /**
         * Updates the specified CSS Styles and notifies the UI
         * @param cssStyles The styles to update
         * @returns Thenable that completes once the update has been applied to the UI
         */
        updateCssStyles(cssStyles: CssStyles): Thenable<void>;

        /**
         * Event fired to notify that the component's validity has changed
         */
        readonly onValidityChanged: vscode.Event<boolean>;

        /**
         * Whether the component is valid or not
         */
        readonly valid: boolean;

        /**
         * Run the component's validations
         */
        validate(): Thenable<boolean>;

        /**
         * Focuses the component.
         */
        focus(): Thenable<void>;
    }

    export interface FormComponent<T extends Component = Component> {
        component: T;
        title?: string | undefined;
        actions?: Component[] | undefined;
        required?: boolean | undefined;
    }

    /**
     * Used to create a group of components in a form layout
     */
    export interface FormComponentGroup {
        /**
         * The form components to display in the group along with optional layouts for each item
         */
        components: (FormComponent & { layout?: FormItemLayout | undefined })[];

        /**
         * The title of the group, displayed above its components
         */
        title: string;
    }

    export interface ToolbarComponent {
        component: Component;
        title?: string | undefined;
        toolbarSeparatorAfter?: boolean | undefined;
    }

    /**
     * A component that contains other components
     */
    export interface Container<TLayout, TItemLayout> extends Component {
        /**
         * A copy of the child items array. This cannot be added to directly -
         * components must be created using the create methods instead
         */
        readonly items: Component[];

        /**
         * Removes all child items from this container
         */
        clearItems(): void;
        /**
         * Creates a collection of child components and adds them all to this container
         *
         * @param itemConfigs the definitions
         * @param [itemLayout] Optional layout for the child items
         */
        addItems(itemConfigs: Array<Component>, itemLayout?: TItemLayout): void;

        /**
         * Creates a child component and adds it to this container.
         * Adding component to multiple containers is not supported
         *
         * @param component the component to be added
         * @param [itemLayout] Optional layout for this child item
         */
        addItem(component: Component, itemLayout?: TItemLayout): void;

        /**
         * Creates a child component and inserts it to this container. Returns error given invalid index
         * Adding component to multiple containers is not supported
         * @param component the component to be added
         * @param index the index to insert the component to
         * @param [itemLayout] Optional layout for this child item
         */
        insertItem(component: Component, index: number, itemLayout?: TItemLayout): void;

        /**
         *
         * @param component Removes a component from this container
         */
        removeItem(component: Component): boolean;

        /**
         * Defines the layout for this container
         *
         * @param layout object
         */
        setLayout(layout: TLayout): void;

        /**
         * Sets the layout for the specified child component
         * @param component The component to set the layout for
         * @param layout The layout to apply
         */
        setItemLayout(component: Component, layout: TItemLayout): void;
    }

    export interface NavContainer extends Container<any, any> {
    }

    /**
     * Valid values for the align-items CSS property
     */
    export type AlignItemsType =
        'normal' |
        'stretch' |
        'center' |
        'start' |
        'end' |
        'flex-start' |
        'flex-end' |
        'baseline' |
        'first baseline' |
        'last baseline' |
        'safe center' |
        'unsafe center' |
        'inherit' |
        'initial' |
        'unset';

    /**
     * Valid values for the justify-content CSS property
     */
    export type JustifyContentType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
    /**
     * Valid values for the align-content CSS property
     */
    export type AlignContentType = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit';
    /**
     * Valid values for flex-wrap CSS property
     */
    export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * Valid values for the text-align CSS property
     */
    export type TextAlignType = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
    /**
     * Valid values for the position CSS property
     */
    export type PositionType = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';
    /**
     * Valid values for the display CSS property
     */
    export type DisplayType =
        'inline' |
        'block' |
        'contents' |
        'flex' |
        'grid' |
        'inline-block' |
        'inline-flex' |
        'inline-grid' |
        'inline-table' |
        'list-item' |
        'run-in' |
        'table' |
        'table-caption' |
        'table-column-group' |
        'table-header-group' |
        'table-footer-group' |
        'table-row-group' |
        'table-cell' |
        'table-column' |
        'table-row' |
        'none' |
        'initial' |
        'inherit' |
        '';

    /**
     * Set of CSS key-value pairs
     */
    export type CssStyles = { [key: string]: string | number };

    /**
     * The config for a FlexBox-based container. This supports easy
     * addition of content to a container with a flexible layout
     * and use of space.
     */
    export interface FlexLayout {
        /**
         * Matches the flex-flow CSS property and its available values.
         * To layout as a vertical view use "column", and for horizontal
         * use "row".
         */
        flexFlow?: string | undefined;
        /**
         * Matches the justify-content CSS property.
         */
        justifyContent?: JustifyContentType | undefined;
        /**
         * Matches the align-items CSS property.
         */
        alignItems?: AlignItemsType | undefined;
        /**
         * Matches the align-content CSS property.
         */
        alignContent?: AlignContentType | undefined;
        /**
         *  Matches the flex-wrap CSS property.
         */
        flexWrap?: FlexWrapType | undefined;
        /**
         * Container Height
         */
        height?: number | string | undefined;

        /**
         * Container Width
         */
        width?: number | string | undefined;

        /**
         * Matches the text-align CSS property.
         */
        textAlign?: TextAlignType | undefined;

        /**
         * The position CSS property. Empty by default.
         * This is particularly useful if laying out components inside a FlexContainer and
         * the size of the component is meant to be a fixed size. In this case the position must be
         * set to 'absolute', with the parent FlexContainer having 'relative' position.
         * Without this the component will fail to correctly size itself.
         */
        position?: PositionType | undefined;
    }

    export interface SplitViewLayout extends FlexLayout {
        /**
         * Orientation of the views inside split
         */
        orientation: string;

        /**
         * SplitView height
         */
        splitViewHeight: number | string;
    }

    export interface FlexItemLayout {
        /**
         * Matches the order CSS property and its available values.
         */
        order?: number | undefined;
        /**
         * Matches the flex CSS property and its available values.
         * Default is "1 1 auto".
         */
        flex?: string | undefined;
        /**
         * Matches the CSS style key and its available values.
         */
        CSSStyles?: CssStyles | undefined;
    }

    export interface FormItemLayout {
        horizontal?: boolean | undefined;
        componentWidth?: number | string | undefined;
        componentHeight?: number | string | undefined;
        titleFontSize?: number | string | undefined;
        info?: string | undefined;
    }

    export interface FormLayout {
        width?: number | string | undefined;
        height?: number | string | undefined;
        padding?: string | undefined;
    }

    export interface GroupLayout {
        width?: number | string | undefined;
        header?: string | undefined;
        collapsible?: boolean | undefined;
        collapsed?: boolean | undefined;
    }

    export interface GroupItemLayout {
    }

    export interface DivLayout {
        /**
         * Container Height
         */
        height?: number | string | undefined;

        /**
         * Container Width
         */
        width?: number | string | undefined;
    }

    export interface DivItemLayout {
        /**
         * Matches the order CSS property and its available values.
         */
        order?: number | undefined;

        /**
         * Matches the CSS style key and its available values.
         */
        CSSStyles?: CssStyles | undefined;
    }

    export interface DivContainer extends Container<DivLayout, DivItemLayout>, DivContainerProperties {
        /**
         * An event called when the div is clicked
         */
        onDidClick: vscode.Event<any>;
    }

    export interface FlexContainer extends Container<FlexLayout, FlexItemLayout> {
    }

    export interface SplitViewContainer extends Container<SplitViewLayout, FlexItemLayout> {
    }

    export interface FormContainer extends Container<FormLayout, FormItemLayout> {
    }

    export interface GroupContainer extends Container<GroupLayout, GroupItemLayout>, GroupContainerProperties {
    }

    export enum Orientation {
        Horizontal = 'horizontal',
        Vertical = 'vertical'
    }

    export interface ToolbarLayout {
        orientation: Orientation;
    }
    export interface ToolbarContainer extends Container<ToolbarLayout, any> {
    }

    /**
     * Describes an action to be shown in the UI, with a user-readable label
     * and a callback to execute the action
     */
    export interface ActionDescriptor {
        /**
         * User-visible label to display
         */
        label: string;
        /**
         * Name of the clickable action. If not defined then no action will be shown
         */
        actionTitle?: string | undefined;
        /**
         * Data sent on callback being run.
         */
        callbackData?: any;
    }

    /**
     * Defines status indicators that can be shown to the user as part of
     * components such as the Card UI
     */
    export enum StatusIndicator {
        None = 0,
        Ok = 1,
        Warning = 2,
        Error = 3
    }

    export enum CardType {
        VerticalButton = 'VerticalButton',
        Details = 'Details',
        ListItem = 'ListItem',
        /**
         * Card with the icon as a background image
         */
        Image = 'Image'
    }

    /**
     * Properties representing the card component, can be used
     * when using ModelBuilder to create the component
     */
    export interface CardProperties extends ComponentWithIconProperties {
        label: string;
        value?: string | undefined;
        actions?: ActionDescriptor[] | undefined;
        descriptions?: CardDescriptionItem[] | undefined;
        status?: StatusIndicator | undefined;

        /**
         * Returns true if the card is selected
         */
        selected?: boolean | undefined;

        /**
         * Card Type, default: Details
         */
        cardType?: CardType | undefined;
    }

    export interface CardDescriptionItem {
        label: string;
        value?: string | undefined;
        tooltip?: string | undefined;
        fontWeight?: 'normal' | 'bold' | undefined;
    }

    export type InputBoxInputType = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'range' | 'search' | 'text' | 'time' | 'url' | 'week';

    export interface ComponentProperties {
        height?: number | string | undefined;
        width?: number | string | undefined;
        /**
         * The position CSS property. Empty by default.
         * This is particularly useful if laying out components inside a FlexContainer and
         * the size of the component is meant to be a fixed size. In this case the position must be
         * set to 'absolute', with the parent FlexContainer having 'relative' position.
         * Without this the component will fail to correctly size itself
         */
        position?: PositionType | undefined;
        /**
         * Whether the component is enabled in the DOM
         */
        enabled?: boolean | undefined;
        /**
         * Corresponds to the display CSS property for the element
         */
        display?: DisplayType | undefined;
        /**
         * Corresponds to the aria-label accessibility attribute for this component
         */
        ariaLabel?: string | undefined;
        /**
         * Corresponds to the role accessibility attribute for this component
         */
        ariaRole?: string | undefined;
        /**
         * Corresponds to the aria-selected accessibility attribute for this component
         */
        ariaSelected?: boolean | undefined;
        /**
         * Corresponds to the aria-hidden accessibility attribute for this component
         */
        ariaHidden?: boolean | undefined;
        /**
         * Matches the CSS style key and its available values.
         */
        CSSStyles?: CssStyles | undefined;
    }

    /**
     * Common properties for container components such as {@link DivContainer} or {@link FlexContainer}
     */
    export interface ContainerProperties extends ComponentProperties { }

    export type ThemedIconPath = { light: string | vscode.Uri; dark: string | vscode.Uri };
    export type IconPath = string | vscode.Uri | ThemedIconPath;

    export interface ComponentWithIcon extends Component, ComponentWithIconProperties { }

    export interface ComponentWithIconProperties extends ComponentProperties {
        /**
         * The path for the icon with optional dark-theme away alternative
         */
        iconPath?: IconPath | undefined;
        /**
         * The height of the icon
         */
        iconHeight?: number | string | undefined;
        /**
         * The width of the icon
         */
        iconWidth?: number | string | undefined;
        /**
         * The title for the icon. This title will show when hovered over
         */
        title?: string | undefined;
    }

    export interface InputBoxProperties extends ComponentProperties {
        value?: string | undefined;
        ariaLive?: string | undefined;
        placeHolder?: string | undefined;
        inputType?: InputBoxInputType | undefined;
        required?: boolean | undefined;
        multiline?: boolean | undefined;
        rows?: number | undefined;
        columns?: number | undefined;
        /**
         * The minimum value allowed for the input. Only valid for number inputs.
         */
        min?: number | undefined;
        /**
         * The maximum value allowed for the input. Only valid for number inputs.
         */
        max?: number | undefined;
        /**
         * Whether to stop key event propagation when enter is pressed in the input box. Leaving this as false
         * means the event will propagate up to any parents that have handlers (such as validate on Dialogs)
         */
        stopEnterPropagation?: boolean | undefined;
        /**
         * The error message to show when custom validation fails. Note that built-in validations
         * (such as min/max values) will use the default error messages for those validations
         * as appropriate.
         */
        validationErrorMessage?: string | undefined;
        /**
         * Whether the input box is marked with the 'readonly' attribute
         */
        readOnly?: boolean | undefined;
        /**
         * This title will show when hovered over
         */
        title?: string | undefined;
        /**
         * The maximum number of characters allowed in the input box.
         */
        maxLength?: number;
    }

    export interface TableColumn {
        value: string;
        width?: number | undefined;
        cssClass?: string | undefined;
        headerCssClass?: string | undefined;
        toolTip?: string | undefined;
        type?: ColumnType | undefined;
        /**
         * @deprecated options property is deprecated, use specific column types to access the options directly
         */
        options?: CheckboxColumnOption | TextColumnOption | undefined;
    }

    export enum ColumnType {
        text = 0,
        checkBox = 1,
        button = 2
    }

    export interface CheckboxColumnOption {
        actionOnCheckbox: ActionOnCellCheckboxCheck;
    }

    export interface TextColumnOption {
    }

    export enum ActionOnCellCheckboxCheck {
        selectRow = 0,
        customAction = 1
    }

    export enum ColumnSizingMode {
        /**
         * All columns will be sized to fit in viewable space, no horizontal scroll bar
         */
        ForceFit = 0,
        /**
         * Columns will be ForceFit up to a certain number; currently 3.  At 4 or more the behavior will switch to NO force fit
         */
        AutoFit = 1,
        /**
         * Columns use sizing based on cell data, horizontal scroll bar present if more cells than visible in view area
         */
        DataFit = 2
    }

    export interface TableComponentProperties extends ComponentProperties {
        data: any[][];
        columns: string[] | TableColumn[];
        fontSize?: number | string | undefined;
        selectedRows?: number[] | undefined;
        forceFitColumns?: ColumnSizingMode | undefined;
        title?: string | undefined;
        ariaRowCount?: number | undefined;
        ariaColumnCount?: number | undefined;
        updateCells?: TableCell[] | undefined;
        moveFocusOutWithTab?: boolean | undefined; // accessibility requirement for tables with no actionable cells
    }

    export interface CheckBoxCell extends TableCell {
        checked: boolean;
        columnName: string;
    }

    export interface FileBrowserTreeProperties extends ComponentProperties {
        ownerUri: string;
    }

    export interface CheckBoxProperties extends ComponentProperties {
        /**
         * Whether the checkbox is checked.
         */
        checked?: boolean | undefined;
        /**
         * The label to display next to the checkbox.
         */
        label?: string | undefined;
        /**
         * Whether the component is marked with the 'required' property - making
         * it required to be checked for component validation.
         */
        required?: boolean | undefined;
    }

    export interface TreeProperties extends ComponentProperties {
        withCheckbox?: boolean | undefined;
    }

    /**
     * The type of control of a declarative table column
     */
    export enum DeclarativeDataType {
        string = 'string',
        category = 'category',
        boolean = 'boolean',
        editableCategory = 'editableCategory',
        component = 'component',
        menu = 'menu'
    }

    /**
     * Details for the DeclarativeTableRowSelectedEvent event
     */
    export type DeclarativeTableRowSelectedEvent = {
        row: number
    };

    export interface RadioButtonProperties extends ComponentProperties {
        name?: string | undefined;
        label?: string | undefined;
        value?: string | undefined;
        checked?: boolean | undefined;
    }

    /**
     * The heading levels an HTML heading element can be.
     */
    export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * The type of text this is - used to determine display color and how the text is displayed
     */
    export enum TextType {
        Normal = 'Normal',
        Error = 'Error',
        UnorderedList = 'UnorderedList',
        OrderedList = 'OrderedList'
    }

    export interface TextComponentProperties extends ComponentProperties, TitledComponentProperties {
        /**
         * Provide value to be displayed in the text component. An array of values will be displayed as an unordered list.
         */
        value?: string | string[] | undefined;
        /**
         * List of links to embed within the text. If links are specified there must be placeholder
         * values in the value indicating where the links should be placed, in the format {i}
         *
         * e.g. "Click {0} for more information!""
         */
        links?: LinkArea[] | undefined;
        /**
         * If set then an info icon is displayed next to the text which will display the description text when hovered over.
         */
        description?: string | undefined;
        /**
         * Whether to display a * next to the text to indicate that the field is required. Default is false.
         */
        requiredIndicator?: boolean | undefined;
        /**
         * The heading level for this component - if set the text component will be created as an h#
         * HTML element with this value being the #.
         */
        headingLevel?: HeadingLevel;
        /**
         * Sets the type of text box to be displayed. Default is plain text.
         */
        textType?: TextType;
    }

    export interface ImageComponentProperties extends ComponentWithIconProperties {
    }

    export interface GroupContainerProperties extends ContainerProperties {
        collapsed: boolean;
    }

    export interface LinkArea {
        /**
         * The text that is visible to the user
         */
        text: string;
        /**
         * The URL that is navigated to when the link is clicked
         */
        url: string;
        /*
         * Accessibility information used when screen reader interacts with this link.
         * Generally, a link has no need to set the `role` of the accessibilityInformation;
         * but it is exposed for situations that may require it.
         */
        accessibilityInformation?: vscode.AccessibilityInformation;
    }

    export interface HyperlinkComponentProperties extends TitledComponentProperties {
        label: string;
        url: string;
        /**
         * Whether to show the 'external link' icon next to the hyperlink
         */
        showLinkIcon?: boolean | undefined;
    }

    export interface ImageComponent extends ComponentWithIcon { }

    export interface ImageComponentProperties extends ComponentWithIconProperties { }

    export interface DropDownProperties extends LoadingComponentProperties {
        value?: string | CategoryValue | undefined;
        values?: string[] | CategoryValue[] | undefined;
        editable?: boolean | undefined;
        fireOnTextChange?: boolean | undefined;
        required?: boolean | undefined;
        /**
         * Adds a short hint that describes the expected value for the editable dropdown
         */
        placeholder?: string;
        /**
         * Define error messages to show when custom validation fails. For empty required dropdowns we use a default error message.
         */
        validationErrorMessages?: string[];
    }

    export interface DeclarativeTableColumn {
        /**
         * The name of the column displayed to the user
         */
        displayName: string;
        /**
         * The type of column this is
         */
        valueType: DeclarativeDataType;
        /**
         * Whether the column is read-only
         */
        isReadOnly: boolean;
        /**
         * The width of the column, either as a number (in px) or a string
         */
        width: number | string;
        /**
         * The list of values when the valueType is category or editableCategory. Unused for other types. Default is an empty array.
         */
        categoryValues?: CategoryValue[] | undefined;
        /**
         * The optional CSS style attributes to assign to the header elements
         */
        headerCssStyles?: CssStyles;
        /**
         * The optional CSS style attributes to assign to each row
         */
        rowCssStyles?: CssStyles;
        /**
         * The optional accessibility label for the column. Default is the display name for the column.
         */
        ariaLabel?: string;
        /**
         * Whether to display the "Check All" checkbox in the header row. Only used when the valueType is boolean.
         */
        showCheckAll?: boolean;
        /**
         * Whether this column is hidden. Default is false.
         */
        hidden?: boolean;
    }

    export interface DeclarativeTableProperties extends ComponentProperties {
        /**
         * @deprecated Use dataValues instead.
         */
        data?: any[][] | undefined;
        /**
         * The column definitions for the table
         */
        columns: DeclarativeTableColumn[];
        /**
         * dataValues will only be used if data is an empty array.
         * To set the dataValues, it is recommended to use the setDataValues method that returns a promise.
         */
        dataValues?: DeclarativeTableCellValue[][];

        /**
         * Gets a boolean value determines whether the row selection is enabled. Default value is false.
         */
        enableRowSelection?: boolean;

        /**
         * Gets or sets the selected row number of the table. -1 means to no selected row.
         */
        selectedRow?: number;
    }

    export interface DeclarativeTableCellValue {
        /**
         * The cell value
         */
        value: string | number | boolean | Component | DeclarativeTableMenuCellValue;
        /**
         * The aria-label of the cell
         */
        ariaLabel?: string;
        /**
         * The CSS style of the cell
         */
        style?: CssStyles;
        /**
         * Whether the cell is enabled. Default value is true.
         * Only used when the valueType is boolean
         */
        enabled?: boolean;
    }

    export interface DeclarativeTableMenuCellValue {
        /**
         * commands for the menu. Use an array for a group and menu separators will be added.
         */
        commands: (string | string[])[];
        /**
         * context that will be passed to the commands.
         */
        context: { [key: string]: string | boolean | number } | string | boolean | number | undefined;
    }

    export interface ListBoxProperties extends ComponentProperties {
        selectedRow?: number | undefined;
        values?: string[] | undefined;
    }

    export interface WebViewProperties extends ComponentProperties {
        message?: any;

        /**
         * Contents of the webview.
         *
         * Should be a complete html document.
         */
        html?: string | undefined;
        /**
         * Content settings for the webview.
         */
        options?: vscode.WebviewOptions | undefined;
    }

    /**
     * Editor properties for the editor component
     */
    export interface EditorProperties extends ComponentProperties {
        /**
         * The content inside the text editor
         */
        content?: string | undefined;
        /**
         * The language mode for this text editor. The language mode is SQL by default.
         */
        languageMode?: string | undefined;
        /**
         * Minimum height for editor component
         */
        minimumHeight?: number | undefined;

        /**
         * The editor Uri which will be used as a reference for VSCode Language Service.
         * Currently this is auto-generated by the framework but can be queried after
         * view initialization is completed
         */
        readonly editorUri?: string;

        /**
         * Toggle for whether the editor should be automatically resized or not. Default value is false.
         */
        isAutoResizable?: boolean;
    }

    export enum ButtonType {
        /**
         * Opens up the File Picker dialog when clicked
         */
        File = 'File',
        /**
         * Normal button with no special behavior
         */
        Normal = 'Normal',
        /**
         * Button that displays additional information when hovered over
         */
        Informational = 'Informational'
    }

    export interface ButtonProperties extends ComponentWithIconProperties {
        /**
         * The label for the button
         */
        label?: string | undefined;

        /**
         * Whether the button opens the file browser dialog
         * @deprecated Use fileType instead
         */
        isFile?: boolean | undefined;

        /**
         * The content of the currently selected file
         */
        fileContent?: string | undefined;

        /**
         * Specifies the type of button this is. Default is Normal.
         */
        buttonType?: ButtonType;

        /**
         * Description text to display inside button element.
         */
        description?: string;

        /**
         * Specifies whether this is a secondary button. Default value is false.
         */
        secondary?: boolean;

        /**
         * The file type filter used for the file input dialog box - only used when the button type is File
         */
        fileType?: string;
    }

    export interface LoadingComponentProperties extends ComponentProperties {
        /**
         * Whether to show the loading spinner instead of the contained component. True by default
         */
        loading?: boolean | undefined;
        /**
         * Whether to show the loading text next to the spinner
         */
        showText?: boolean | undefined;
        /**
         * The text to display while loading is set to true
         */
        loadingText?: string | undefined;
        /**
         * The text to display while loading is set to false. Will also be announced through screen readers
         * once loading is completed.
         */
        loadingCompletedText?: string | undefined;
    }

    export interface DivContainerProperties extends ContainerProperties {
        /**
         * Matches the overflow-y CSS property and its available values.
         */
        overflowY?: string | undefined;

        /**
         * Setting the scroll based on the y offset
         * This is used when its child component is webview
         */
        yOffsetChange?: number | undefined;

        /**
         * Indicates whether the element is clickable
         */
        clickable?: boolean | undefined;
    }

    export interface TitledComponentProperties extends ComponentProperties {
        /**
         * The title for the component. This title will show when hovered over
         */
        title?: string | undefined;
    }

    export interface CardComponent extends Component, CardProperties {
        onDidActionClick: vscode.Event<ActionDescriptor>;
        onCardSelectedChanged: vscode.Event<any>;
    }

    export interface TextComponent extends Component, TextComponentProperties {
    }

    export interface ImageComponent extends Component, ImageComponentProperties {
    }

    export interface HyperlinkComponent extends Component, HyperlinkComponentProperties {
        /**
         * An event called when the hyperlink is clicked
         */
        onDidClick: vscode.Event<void>;
    }

    export interface InputBoxComponent extends Component, InputBoxProperties {
        onTextChanged: vscode.Event<any>;
        /**
         * Event that's fired whenever enter is pressed within the input box
         */
        onEnterKeyPressed: vscode.Event<string>;
    }

    export interface RadioButtonComponent extends Component, RadioButtonProperties {
        /**
         * @deprecated use onDidChangeCheckedState event instead
         * An event called when the radio button is clicked
         */
        onDidClick: vscode.Event<any>;
        /**
         * An event called when the value of radio button changes
         */
        onDidChangeCheckedState: vscode.Event<boolean>;
    }

    export interface CheckBoxComponent extends Component, CheckBoxProperties {
        onChanged: vscode.Event<any>;
    }

    export interface DropDownComponent extends Component, DropDownProperties {
        onValueChanged: vscode.Event<any>;
    }

    export interface TableCell {
        row: number;
        column: number;
        value: any;
    }

    export interface DeclarativeTableComponent extends Component, DeclarativeTableProperties {
        /**
         * Event that is fired whenever the data for a cell is changed
         */
        onDataChanged: vscode.Event<any>;
        /**
         * Event that is fired whenever a row in the table is selected
         */
        onRowSelected: vscode.Event<DeclarativeTableRowSelectedEvent>;
        /**
         * Sets the filter currently applied to this table - only rows with index in the given array will be visible. undefined
         * will clear the filter
         */
        setFilter(rowIndexes: number[] | undefined): void;

        /**
         * Sets the data values.
         * @param v The new data values
         */
        setDataValues(v: DeclarativeTableCellValue[][]): Promise<void>;
    }

    export interface ListBoxComponent extends Component, ListBoxProperties {
        onRowSelected: vscode.Event<any>;
    }

    export interface ICheckboxCellActionEventArgs extends ICellActionEventArgs {
        checked: boolean;
    }

    interface ICellActionEventArgs {
        row: number;
        column: number;
        columnName: number;
    }

    export interface TableComponent extends Component, TableComponentProperties {
        onRowSelected: vscode.Event<any>;
        onCellAction?: vscode.Event<ICellActionEventArgs> | undefined;
    }

    export interface FileBrowserTreeComponent extends Component, FileBrowserTreeProperties {
        onDidChange: vscode.Event<any>;
    }

    export interface TreeComponent<T> extends Component, TreeProperties {
        registerDataProvider<T>(dataProvider: TreeComponentDataProvider<T>): TreeComponentView<T>;
    }

    export interface WebViewComponent extends Component {
        html: string;
        message: any;
        onMessage: vscode.Event<any>;
        readonly options: vscode.WebviewOptions;
    }

    /**
     * Editor component for displaying the text code editor
     */
    export interface EditorComponent extends Component, EditorProperties {
        /**
         * An event called when the editor content is updated
         */
        readonly onContentChanged: vscode.Event<any>;

        /**
         * An event called when the editor is created
         */
        readonly onEditorCreated: vscode.Event<any>;
    }

    export interface DiffEditorProperties extends ComponentProperties {
        /**
         * Title of editor
         */
        title: string;

        /**
         * The content inside the left text editor
         */
        contentLeft: string;

        /**
         * The content inside the right text editor
         */
        contentRight: string;

        /**
         * The language mode for this text editor. The language mode is SQL by default.
         */
        languageMode?: string;

        /**
         * Toggle for whether the editor should be automatically resized or not
         */
        isAutoResizable?: boolean;

        /**
         * Minimum height for editor component
         */
        minimumHeight?: number;
    }
    export interface DiffEditorComponent extends DiffEditorProperties, Component {
        /**
         * The left editor Uri which will be used as a reference for VSCode Language Service.
         * Currently this is auto-generated by the framework but can be queried after
         * view initialization is completed
         */
        readonly editorUriLeft: string;
        /**
         * The right editor Uri which will be used as a reference for VSCode Language Service.
         * Currently this is auto-generated by the framework but can be queried after
         * view initialization is completed
         */
        readonly editorUriRight: string;
        /**
         * An event called when the editor content is updated
         */
        readonly onContentChanged: vscode.Event<any>;

        /**
         * An event called when the editor is created
         */
        readonly onEditorCreated: vscode.Event<any>;
    }

    export interface ButtonComponent extends ComponentWithIcon, ButtonProperties {
        /**
         * An event called when the button is clicked
         */
        onDidClick: vscode.Event<any>;
    }

    export interface DashboardWidgetComponent extends Component {
        widgetId: string;
    }

    export interface DashboardWebviewComponent extends Component {
        webviewId: string;
    }

    /**
     * Component used to wrap another component that needs to be loaded, and show a loading spinner
     * while the contained component is loading
     */
    export interface LoadingComponent extends Component, LoadingComponentProperties {
        /**
         * Whether to show the loading spinner instead of the contained component. True by default
         */
        loading: boolean;

        /**
         * The component displayed when the loading property is false
         */
        component: Component;
    }

    /**
     * A component that adds a line dividing UI components such as toolbar buttons
     */
    export interface SeparatorComponent extends Component { }

    /**
     * The properties for the separator component
     */
    export interface SeparatorComponentProperties extends ComponentProperties { }

    /**
     * Component to display text with an icon representing the severity
     */
    export interface InfoBoxComponent extends Component, InfoBoxComponentProperties { }

    export type InfoBoxStyle = 'information' | 'warning' | 'error' | 'success';

    /**
     * Properties for configuring a InfoBoxComponent
     */
    export interface InfoBoxComponentProperties extends ComponentProperties {
        /**
         * The style of the InfoBox
         */
        style: InfoBoxStyle;
        /**
         * The display text of the InfoBox
         */
        text: string;
        /**
         * Controls whether the text should be announced by the screen reader. Default value is false.
         */
        announceText?: boolean | undefined;
    }

    /**
     * A property to be displayed in the PropertiesContainerComponent
     */
    export interface PropertiesContainerItem {
        /**
         * The name of the property to display
         */
        displayName: string;
        /**
         * The value of the property to display
         */
        value: string;
    }

    /**
     * Component to display a list of property values.
     */
    export interface PropertiesContainerComponent extends Component, PropertiesContainerComponentProperties { }

    /**
     * Properties for configuring a PropertiesContainerComponent
     */
    export interface PropertiesContainerComponentProperties extends ComponentProperties {
        /**
         * The properties to display
         */
        propertyItems?: PropertiesContainerItem[] | undefined;
        /**
         * Whether to show the button that will hide/show the content of the container. Default value is false.
         */
        showToggleButton?: boolean;
    }

    /**
     * Represent a card in the radio card group component.
     */
    export interface RadioCard {
        /**
         * Id of the card.
         */
        id: string;
        /**
         * descriptions to be displayed in the card.
         */
        descriptions: RadioCardDescription[];
        /**
         * Icon of the card.
         */
        icon?: IconPath;
    }

    /**
     * Represents a text component inside the radio card.
     */
    export interface RadioCardDescription {
        /**
         * The text to be displayed.
         */
        textValue: string;
        /**
         * The link's display text.
         */
        linkDisplayValue?: string;
        /**
         * Whether to show the link icon.
         */
        displayLinkCodicon?: boolean;
        /**
         * CSS styles for the text.
         */
        textStyles?: CssStyles;
        /**
         * CSS styles for the link.
         */
        linkStyles?: CssStyles;
        /**
         * CSS styles for the link icon.
         */
        linkCodiconStyles?: CssStyles;
    }

    /**
     * Properties of radio card group component.
     */
    export interface RadioCardGroupComponentProperties extends ComponentProperties, TitledComponentProperties {
        /**
         * Cards information.
         */
        cards: RadioCard[];
        /**
         * Width of the card.
         */
        cardWidth: string;
        /**
         * Height of the card.
         */
        cardHeight: string;
        /**
         * Width of the icon.
         */
        iconWidth?: string;
        /**
         * Height of the icon.
         */
        iconHeight?: string;
        /**
         * Id of the currently selected card.
         */
        selectedCardId?: string;
        /**
         * Oritentation of the cards in the group. Default value is horizontal.
         */
        orientation?: Orientation;
        /**
         * Position of the icon. Default value is top.
         */
        iconPosition?: 'top' | 'left';
    }

    /**
     * Event arguments when the selected card is changed.
     */
    export type RadioCardSelectionChangedEvent = { cardId: string; card: RadioCard };
    /**
     * Event arguments when a link in the radio card is clicked.
     */
    export type RadioCardLinkClickEvent = { cardId: string, card: RadioCard, description: RadioCardDescription };

    /**
     * Defines the radio card group component.
     */
    export interface RadioCardGroupComponent extends Component, RadioCardGroupComponentProperties {
        /**
         * Raised when the selected card is changed.
         */
        onSelectionChanged: vscode.Event<RadioCardSelectionChangedEvent>;
        /**
         * Raised when a link a clicked in a card.
         */
        onLinkClick: vscode.Event<RadioCardLinkClickEvent>;
    }

    /**
     * Properties for the list view component.
     */
    export interface ListViewComponentProperties extends ComponentProperties {
        /**
         * Title of the component.
         */
        title?: ListViewTitle;
        /**
         * Items in the list view.
         */
        options: ListViewOption[];
        /**
         * Id of the currently selected option.
         */
        selectedOptionId?: string;
    }

    /**
     * Title of the list view component.
     */
    export interface ListViewTitle {
        /**
         * Display text.
         */
        text?: string;
        /**
         * CSS styles of the title.
         */
        style?: CssStyles;
    }

    /**
     * Defines an item in list view component.
     */
    export interface ListViewOption {
        /**
         * Display text of the item.
         */
        label: string;
        /**
         * Id of the item.
         */
        id: string;
    }

    /**
     * Event arg when a list view item is selected.
     */
    export type ListViewClickEvent = { id: string };

    /**
     * Defines the list view component.
     */
    export interface ListViewComponent extends Component, ListViewComponentProperties {
        /**
         * Fired when a list view item is selected.
         */
        onDidClick: vscode.Event<ListViewClickEvent>;
    }
    /**
     * Panel component with tabs
     */
    export interface TabbedPanelComponent extends Container<TabbedPanelLayout, any> {
        /**
         * An event triggered when the selected tab is changed.
         * The event argument is the id of the selected tab.
         */
        onTabChanged: vscode.Event<string>;

        /**
         * update the tabs.
         * @param tabs new tabs
         */
        updateTabs(tabs: (Tab | TabGroup)[]): void;

        /**
         * Selects the tab with the specified id
         * @param id The id of the tab to select
         */
        selectTab(id: string): void;
    }

    /**
     * Defines the tab orientation of TabbedPanelComponent
     */
    export enum TabOrientation {
        Vertical = 'vertical',
        Horizontal = 'horizontal'
    }

    /**
     * Layout of TabbedPanelComponent, can be used to initialize the component when using ModelBuilder
     */
    export interface TabbedPanelLayout {
        /**
         * Tab orientation. Default horizontal.
         */
        orientation?: TabOrientation;

        /**
         * Whether to show the tab icon. Default false.
         */
        showIcon?: boolean;

        /**
         * Whether to show the tab navigation pane even when there is only one tab. Default false.
         */
        alwaysShowTabs?: boolean;
    }

    /**
     * Represents the tab group of TabbedPanelComponent
     */
    export interface TabGroup {
        /**
         * Title of the tab group
         */
        title: string;

        /**
         * children of the tab group
         */
        tabs: Tab[];
    }

    /**
     * Builder for TabbedPanelComponent
     */
    export interface TabbedPanelComponentBuilder extends ContainerBuilder<TabbedPanelComponent, TabbedPanelLayout, any, ContainerProperties> {
        /**
         * Add the tabs to the component
         * @param tabs tabs/tab groups to be added
         */
        withTabs(tabs: (Tab | TabGroup)[]): ContainerBuilder<TabbedPanelComponent, TabbedPanelLayout, any, ContainerProperties>;
    }

    export interface SliderComponentProperties extends ComponentProperties {
        /**
         * The value selected on the slider. Default initial value is the minimum value.
         */
        value?: number;
        /**
         * The minimum value of the slider. Default value is 1.
         */
        min?: number;
        /**
         * The maximum value of the slider. Default value is 100.
         */
        max?: number;
        /**
         * The value between each "tick" of the slider. Default is 1.
         */
        step?: number;
        /**
         * Whether to show the tick marks on the slider. Default is false.
         */
        showTicks?: boolean;
        /**
         * The width of the slider, not including the value box.
         */
        width?: number | string;
    }

    /**
     * Defines the slider component
     */
    export interface SliderComponent extends Component, SliderComponentProperties {
        onChanged: vscode.Event<number>;
        onInput: vscode.Event<number>;
    }

    /**
     * A view backed by a model provided by an extension.
     * This model contains enough information to lay out the view
     */
    export interface ModelView {
        /**
         * Raised when the view closed.
         */
        readonly onClosed: vscode.Event<any>;

        /**
         * The connection info for the dashboard the webview exists on
         */
        readonly connection: connection.Connection;

        /**
         * The info on the server for the dashboard
         */
        readonly serverInfo: ServerInfo;

        /**
         * The model backing the model-based view
         */
        readonly modelBuilder: ModelBuilder;

        /**
         * Whether or not the model view's root component is valid
         */
        readonly valid: boolean;

        /**
         * Raised when the model view's valid property changes
         */
        readonly onValidityChanged: vscode.Event<boolean>;

        /**
         * Run the model view root component's validations
         */
        validate(): Thenable<boolean>;

        /**
         * Initializes the model with a root component definition.
         * Once this has been done, the components will be laid out in the UI and
         * can be accessed and altered as needed.
         */
        initializeModel<T extends Component>(root: T): Thenable<void>;
    }

    export namespace ui {
        /**
         * Register a provider for a model-view widget
         */
        export function registerModelViewProvider(widgetId: string, handler: (view: ModelView) => void): void;
    }

    export namespace window {
        /**
         * creates a web view dialog
         */
        export function createWebViewDialog(title: string): ModalDialog;

        /**
         * @deprecated please use the method createModelViewDialog(title: string, dialogName?: string, width?: DialogWidth) instead.
         * Create a dialog with the given title
         * @param title The title of the dialog, displayed at the top
         * @param isWide Indicates whether the dialog is wide or normal
         */
        export function createModelViewDialog(title: string, dialogName?: string, isWide?: boolean): Dialog;

        /**
         * Create a dialog with the given title
         * @param title Title of the dialog, displayed at the top.
         * @param dialogName Name of the dialog.
         * @param width Width of the dialog, default is 'narrow'.
         */
        export function createModelViewDialog(title: string, dialogName?: string, width?: DialogWidth): Dialog;

        /**
         * Create a dialog with the given title
         * @param title Title of the dialog, displayed at the top.
         * @param dialogName Name of the dialog.
         * @param width Width of the dialog, default is 'narrow'.
         * @param dialogStyle Defines the dialog style, default is 'flyout'.
         * @param dialogPosition Defines the dialog position, default is undefined
         * @param renderHeader Specify whether or not to render the Dialog header, default is true.
         * @param renderFooter Specify whether or not to render the Dialog footer, default is true.
         * @param dialogProperties Positional data prior to opening of dialog, default is undefined.
         */
        export function createModelViewDialog(
            title: string,
            dialogName?: string,
            width?: DialogWidth,
            dialogStyle?: DialogStyle,
            dialogPosition?: DialogPosition,
            renderHeader?: boolean,
            renderFooter?: boolean,
            dialogProperties?: IDialogProperties): Dialog;

        export interface ModelViewDashboard {
            /**
             * Registers the initial set of tabs for this dashboard
             * @param handler Callback for creating the initial set of tabs to display
             */
            registerTabs(handler: (view: ModelView) => Thenable<(DashboardTab | DashboardTabGroup)[]>): void;
            /**
             * Open the dashboard
             */
            open(): Thenable<void>;
            /**
             * Close the dashboard
             */
            close(): Thenable<void>;
            /**
             * Updates the tabs that are currently displayed
             * @param tabs The new set of tabs to display
             */
            updateTabs(tabs: (DashboardTab | DashboardTabGroup)[]): void;
            /**
             * Selects the tab with the given ID
             * @param id The ID of the tab to select
             */
            selectTab(id: string): void;
        }

        /**
         * Creates a ModelView Dashboard that when opened will be displayed in an editor pane.
         * @param title The title displayed in the editor tab for the dashboard
         * @param name The name used to identify this dashboard in telemetry
         * @param options Options to configure the dashboard
         */
        export function createModelViewDashboard(title: string, name?: string, options?: ModelViewDashboardOptions): ModelViewDashboard;

        /**
         * Create a dialog tab which can be included as part of the content of a dialog
         * @param title The title of the page, displayed on the tab to select the page
         */
        export function createTab(title: string): DialogTab;

        /**
         * Create a button which can be included in a dialog
         * @param label The label of the button
         */
        export function createButton(label: string, position?: DialogButtonPosition): Button;

        /**
         * Opens the given dialog if it is not already open
         */
        export function openDialog(dialog: Dialog): void;

        /**
         * Closes the given dialog if it is open
         */
        export function closeDialog(dialog: Dialog): void;

        /**
         * Create a wizard page with the given title, for inclusion in a wizard
         * @param title The title of the page
         * @param pageName The optional page name parameter will be used for telemetry
         */
        export function createWizardPage(title: string, pageName?: string): WizardPage;

        /**
         * Create a wizard with the given title and width
         * @param title The title of the wizard
         * @param name The name used to identify the wizard in telemetry
         * @param width The width of the wizard, default value is 'narrow'
         */
        export function createWizard(title: string, name?: string, width?: DialogWidth): Wizard;

        /**
         * Used to control whether a message in a dialog/wizard is displayed as an error,
         * warning, or informational message. Default is error.
         */
        export enum MessageLevel {
            Error = 0,
            Warning = 1,
            Information = 2
        }

        /**
         * The width of a dialog, either from a predetermined size list or a specific size (such as px)
         */
        export type DialogWidth = 'narrow' | 'medium' | 'wide' | number | string;

        /**
         * A message shown in a dialog. If the level is not set it defaults to error.
         */
        export type DialogMessage = {
            readonly text: string,
            readonly description?: string | undefined,
            readonly level?: MessageLevel | undefined
        };

        export interface ModelViewPanel {
            /**
             * Register model view content for the dialog.
             * Doesn't do anything if model view is already registered
             */
            registerContent(handler: (view: ModelView) => Thenable<void>): void;

            /**
             * Returns the model view content if registered. Returns undefined if model review is not registered
             */
            readonly modelView: ModelView;

            /**
             * Whether the panel's content is valid
             */
            readonly valid: boolean;

            /**
             * Fired whenever the panel's valid property changes
             */
            readonly onValidityChanged: vscode.Event<boolean>;
        }

        /**
         * The reason that the dialog was closed
         */
        export type CloseReason = 'close' | 'cancel' | 'ok';
        /**
         * These dialog styles affect how the dialog displays in the application.
         * normal: Positioned top and centered.
         * flyout (default): Positioned full screen height, opens from the right side of the application.
         * callout: Opens below or beside parent element, contains footer section with buttons.
         */
        export type DialogStyle = 'normal' | 'flyout' | 'callout';

        /**
         * Where to position the dialog relative to the parent element
         */
        export type DialogPosition = 'left' | 'below';

        /**
         * The p
         * They are needed for positioning relative to the element which triggers the opening of the dialog.
         */
        export interface IDialogProperties {
            /**
             * x position of the dialog relative to the parent element
             */
            xPos: number;
            /**
             * y position of the dialog relative to the parent element
             */
            yPos: number;
            /**
             * width of the dialog
             */
            width: number;
            /**
             * height of the dialog
             */
            height: number;
        }

        // Model view dialog classes
        export interface Dialog extends ModelViewPanel {
            /**
             * The title of the dialog
             */
            title: string;

            /**
             * Indicates the width of the dialog
             */
            isWide: boolean;

            /**
             * The content of the dialog. If multiple tabs are given they will be displayed with tabs
             * If a string is given, it should be the ID of the dialog's model view content
             */
            content: string | DialogTab[];

            /**
             * The ok button
             */
            okButton: Button;

            /**
             * The cancel button
             */
            cancelButton: Button;

            /**
             * Any additional buttons that should be displayed
             */
            customButtons: Button[];

            /**
             * Set the informational message shown in the dialog. Hidden when the message is
             * undefined or the text is empty or undefined. The default level is error.
             */
            message: DialogMessage;

            /**
             * Set the dialog name when opening
             * the dialog for telemetry
             */
            dialogName?: string | undefined;

            /**
             * Width of the dialog.
             * Default is 'narrow'.
             */
            width?: DialogWidth;

            /**
             * Dialog style type: normal, flyout, callout.
             * Default is 'flyout'.
             */
            dialogStyle?: DialogStyle;

            /**
             * Dialog position type: left, below and undefined.
             * Default is undefined.
             */
            dialogPosition?: DialogPosition;

            /**
             * Specify whether or not to render the Dialog header.
             * Default is true.
             */
            renderHeader?: boolean;

            /**
             * Specify whether or not to render the Dialog footer.
             * Default is true.
             */
            renderFooter?: boolean;

            /**
             * Positional data prior to opening of dialog.
             * Default is undefined.
             */
            dialogProperties?: IDialogProperties;

            /**
             * Register a callback that will be called when the user tries to click done. Only
             * one callback can be registered at once, so each registration call will clear
             * the previous registration.
             * @param validator The callback that gets executed when the user tries to click
             * done. Return true to allow the dialog to close or false to block it from closing
             */
            registerCloseValidator(validator: () => boolean | Thenable<boolean>): void;

            /**
             * Register an operation to run in the background when the dialog is done
             * @param operationInfo Operation Information
             */
            registerOperation(operationInfo: BackgroundOperationInfo): void;

            /**
             * Fired when the dialog is closed for any reason. The value indicates the reason it was closed (such as 'ok' or 'cancel')
             */
            onClosed: vscode.Event<CloseReason>;
        }

        export interface DialogTab extends ModelViewPanel {
            /**
             * The title of the tab
             */
            title: string;

            /**
             * A string giving the ID of the tab's model view content
             */
            content: string;
        }

        export interface Button {
            /**
             * The label displayed on the button
             */
            label: string;

            /**
             * Whether the button is enabled
             */
            enabled: boolean;

            /**
             * Whether the button is hidden
             */
            hidden: boolean;

            /**
             * Whether the button is focused
             */
            focused?: boolean | undefined;

            /**
             * Raised when the button is clicked
             */
            readonly onClick: vscode.Event<void>;

            /**
             * Position of the button on the dialog footer
             */
            position?: DialogButtonPosition | undefined;

            /**
             * Specifies whether this is a secondary button. Default is false.
             */
            secondary?: boolean;
        }

        export type DialogButtonPosition = 'left' | 'right';

        export interface WizardPageChangeInfo {
            /**
             * The page number that the wizard changed from
             */
            lastPage: number;

            /**
             * The new page number or undefined if the user is closing the wizard
             */
            newPage: number;
        }

        export interface WizardPage extends ModelViewPanel {
            /**
             * The title of the page
             */
            title: string;

            /**
             * A string giving the ID of the page's model view content
             */
            content: string;

            /**
             * Any additional buttons that should be displayed while the page is open
             */
            customButtons: Button[];

            /**
             * Whether the page is enabled. If the page is not enabled, the user will not be
             * able to advance to it. Defaults to true.
             */
            enabled: boolean;

            /**
             * An optional description for the page. If provided it will be displayed underneath the page title.
             */
            description: string;

            /**
             * An optional name for the page. If provided it will be used for telemetry
             */
            pageName?: string;
        }

        export interface Wizard {
            /**
             * The title of the wizard
             */
            title: string;

            /**
             * The name used to identify the wizard in telemetry
             */
            name?: string | undefined;

            /**
             * The wizard's pages. Pages can be added/removed while the dialog is open by using
             * the addPage and removePage methods
             */
            pages: WizardPage[];

            /**
             * The index in the pages array of the active page, or undefined if the wizard is
             * not currently visible
             */
            readonly currentPage: number;

            /**
             * The done button
             */
            doneButton: Button;

            /**
             * The cancel button
             */
            cancelButton: Button;

            /**
             * The generate script button
             */
            generateScriptButton: Button;

            /**
             * The next button
             */
            nextButton: Button;

            /**
             * The back button
             */
            backButton: Button;

            /**
             * Any additional buttons that should be displayed for all pages of the dialog. If
             * buttons are needed for specific pages they can be added using the customButtons
             * property on each page.
             */
            customButtons: Button[];

            /**
             * When set to false page titles and descriptions will not be displayed at the top
             * of each wizard page. The default is true.
             */
            displayPageTitles: boolean;

            /**
             * Width of the wizard
             */
            width?: DialogWidth;

            /**
             * Event fired when the wizard's page changes, containing information about the
             * previous page and the new page
             */
            onPageChanged: vscode.Event<WizardPageChangeInfo>;

            /**
             * Add a page to the wizard at the given index
             * @param page The page to add
             * @param index The index in the pages array to add the page at, or undefined to
             * add it at the end
             */
            addPage(page: WizardPage, index?: number): Thenable<void>;

            /**
             * Remove the page at the given index from the wizard
             * @param index The index in the pages array to remove
             */
            removePage(index: number): Thenable<void>;

            /**
             * Go to the page at the given index in the pages array.
             * @param index The index of the page to go to
             */
            setCurrentPage(index: number): Thenable<void>;

            /**
             * Open the wizard. Does nothing if the wizard is already open.
             * @param source Where the wizard was opened from for telemetry (ex: command palette, context menu)
             */
            open(source?: string): Thenable<void>;

            /**
             * Close the wizard. Does nothing if the wizard is not open.
             */
            close(): Thenable<void>;

            /**
             * Register a callback that will be called when the user tries to navigate by
             * changing pages or clicking done. Only one callback can be registered at once, so
             * each registration call will clear the previous registration.
             * @param validator The callback that gets executed when the user tries to
             * navigate. Return true to allow the navigation to proceed, or false to
             * cancel it.
             */
            registerNavigationValidator(validator: (pageChangeInfo: WizardPageChangeInfo) => boolean | Thenable<boolean>): void;

            /**
             * Set the informational message shown in the wizard. Hidden when the message is
             * undefined or the text is empty or undefined. The default level is error.
             */
            message: DialogMessage;

            /**
             * Register an operation to run in the background when the wizard is done
             * @param operationInfo Operation Information
             */
            registerOperation(operationInfo: BackgroundOperationInfo): void;
        }
    }

    /**
     * Namespace for interacting with query editor
     */
    export namespace queryeditor {
        export type QueryEventType =
            | 'queryStart'
            | 'queryUpdate'
            | 'queryStop'
            | 'executionPlan'
            | 'visualize';

        export interface QueryEventListener {
            /**
             * A callback that is called whenever a query event occurs
             * @param type The type of query event
             * @param document The document this event was sent by
             * @param args The extra information for the event, if any
             * The args sent depend on the type of event :
             * queryStart: undefined
             * queryStop: undefined
             * executionPlan: string (the plan itself)
             * visualize: ResultSetSummary (the result set to be visualized)
             */
            onQueryEvent(type: QueryEventType, document: QueryDocument, args: ResultSetSummary | string | undefined): void;
        }

        export interface QueryDocument {
            /**
             * The ID of the connection provider for this query document
             */
            providerId: string;

            /**
             * The URI identifying this document
             */
            uri: string;

            /**
             * Set the document's execution options, which will be used whenever a query is executed.
             * @param options The execution options
             */
            setExecutionOptions(options: Map<string, any>): Thenable<void>;

            /**
             * Adds a custom tab to the query editor results view
             * @param tab The tab to add
             */
            createQueryTab(tab: window.DialogTab): void;

            /**
             * Connect the query document using the given connection profile
             * @param connectionProfile The profile to use as the connection
             */
            connect(connectionProfile: connection.ConnectionProfile): Thenable<void>;
        }

        /**
         * Make connection for the query editor
         * @param fileUri file URI for the query editor
         * @param connectionId connection ID
         */
        export function connect(fileUri: string, connectionId: string): Thenable<void>;

        /**
         * Run query if it is a query editor and it is already opened.
         * @param fileUri file URI for the query editor
         * @param options options
         * @param runCurrentQuery true: run current query only, false: run all the queries in the file, default is true.
         */
        export function runQuery(fileUri: string, options?: Map<string, string>, runCurrentQuery?: boolean): void;

        /**
         * Register a query event listener
         */
        export function registerQueryEventListener(listener: QueryEventListener): vscode.Disposable;

        /**
         * Get a QueryDocument object for a file URI
         */
        export function getQueryDocument(fileUri: string): Thenable<QueryDocument>;

        /**
         * Opens an untitled text document. The editor will prompt the user for a file
         * path when the document is to be saved. The `options` parameter allows to
         * specify the *content* of the document.
         *
         * @param options Options to control how the document will be created.
         * @param providerId Optional provider ID this editor will be associated with. Defaults to MSSQL.
         * @return A promise that resolves to a [document](#QueryDocument).
         */
        export function openQueryDocument(options?: { content?: string; }, providerId?: string): Thenable<QueryDocument>;
    }

    /**
     * Represents the tab of TabbedPanelComponent
     */
    export interface Tab {
        /**
         * Title of the tab
         */
        title: string;

        /**
         * Content component of the tab
         */
        content: Component;

        /**
         * Id of the tab
         */
        id: string;

        /**
         * Icon of the tab
         */
        icon?: IconPath;
    }

    export interface DashboardTab extends Tab {
        /**
         * Toolbar of the tab, optional.
         */
        toolbar?: ToolbarContainer;
    }

    export interface DashboardTabGroup {
        /**
         * Title of the tab group
         */
        title: string;

        /**
         * Child tabs of the tab group
         */
        tabs: DashboardTab[];
    }

    export interface ModelViewDashboardOptions {
        /**
         * Whether to show the tab icon, default is true
         */
        showIcon?: boolean;

        /**
         * Whether to show the tab navigation pane even when there is only one tab, default is false
         */
        alwaysShowTabs?: boolean;
    }

    export interface ModelViewEditorOptions {
        /**
         * Should the model view editor's context be kept around even when the editor is no longer visible? It is false by default
         */
        readonly retainContextWhenHidden?: boolean | undefined;

        /**
         * Does this model view editor support save?
         */
        readonly supportsSave?: boolean | undefined;

        /**
         * Resource name for this editor
         * File icons might depend on file extension, language id or resource name
         * Resource name field needs to be set explicitly if file icon for a particular Model View Editor depends on editor resource name
         */
        readonly resourceName?: string | undefined;
    }

    export enum DataProviderType {
        ConnectionProvider = 'ConnectionProvider',
        BackupProvider = 'BackupProvider',
        RestoreProvider = 'RestoreProvider',
        ScriptingProvider = 'ScriptingProvider',
        ObjectExplorerProvider = 'ObjectExplorerProvider',
        TaskServicesProvider = 'TaskServicesProvider',
        FileBrowserProvider = 'FileBrowserProvider',
        ProfilerProvider = 'ProfilerProvider',
        MetadataProvider = 'MetadataProvider',
        QueryProvider = 'QueryProvider',
        AdminServicesProvider = 'AdminServicesProvider',
        AgentServicesProvider = 'AgentServicesProvider',
        CapabilitiesProvider = 'CapabilitiesProvider',
        ObjectExplorerNodeProvider = 'ObjectExplorerNodeProvider',
        IconProvider = 'IconProvider',
        SerializationProvider = 'SerializationProvider',
        SqlAssessmentServicesProvider = 'SqlAssessmentServicesProvider'
    }

    /**
     * Context object passed as an argument to command callbacks.
     * Defines properties that can be sent for any connected context,
     * whether that is the Object Explorer context menu or a command line
     * startup argument.
     */

    export interface ConnectedContext {
        /**
         * The connection information for the selected object.
         * Note that the connection is not guaranteed to be in a connected
         * state on click.
         */
        connectionProfile?: IConnectionProfile | undefined;
    }

    /**
     * Context object passed as an argument to command callbacks.
     * Defines the key properties required to identify a node in the object
     * explorer tree and take action against it.
     */
    export interface ObjectExplorerContext extends ConnectedContext {
        /**
         * Defines whether this is a Connection-level object.
         * If not, the object is expected to be a child object underneath
         * one of the connections.
         */
        isConnectionNode: boolean;
        /**
         * Node info for objects below a specific connection. This
         * may be null for a Connection-level object
         */
        nodeInfo?: NodeInfo | undefined;
    }

    /**
     * Background Operation
     */
    export interface BackgroundOperation {
        /**
         * Updates the operation status or adds progress message
         * @param status Operation Status
         * @param message Progress message
         */
        updateStatus(status: TaskStatus, message?: string): void;

        /**
         * Operation Id
         */
        id: string;

        /**
         * Event raised when operation is canceled in UI
         */
        onCanceled: vscode.Event<void>;
    }

    /**
     * Operation Information
     */
    export interface BackgroundOperationInfo {
        /**
         * The operation id. A unique id will be assigned to it If not specified a
         */
        operationId?: string | undefined;
        /**
         * Connection information
         */
        connection?: connection.Connection | undefined;

        /**
         * Operation Display Name
         */
        displayName: string;

        /**
         * Operation Description
         */
        description: string;

        /**
         * True if the operation is cancelable
         */
        isCancelable: boolean;

        /**
         * The actual operation to execute
         */
        operation: (operation: BackgroundOperation) => void;
    }

    export interface ConnectionResult {
        /**
         * Whether the connection was successful
         */
        connected: boolean;
        /**
         * The ID of the connection if it was successful. {@link connection.getUriForConnection} can be used to get
         * the URI for this connection used by many of the other Extension API functions.
         */
        connectionId?: string | undefined;
        /**
         * The error message if the connection was unsuccessful
         *
         * e.g. Login failed for user '<user>'.
         */
        errorMessage?: string | undefined;
        /**
         * The error code number associated with the error if the connection was unsuccessful.
         *
         * e.g. 18456
         * (https://docs.microsoft.com/sql/relational-databases/errors-events/mssqlserver-18456-database-engine-error)
         */
        errorCode?: number | undefined;
    }

    export namespace nb {
        /**
         * All notebook documents currently known to the system.
         */
        export let notebookDocuments: NotebookDocument[];

        /**
         * The currently active Notebook editor or `undefined`. The active editor is the one
         * that currently has focus or, when none has focus, the one that has changed
         * input most recently.
         */
        export let activeNotebookEditor: NotebookEditor | undefined;

        /**
         * The currently visible editors or an empty array.
         */
        export let visibleNotebookEditors: NotebookEditor[];

        /**
         * An event that is emitted when a [notebook document](#NotebookDocument) is opened.
         *
         * To add an event listener when a visible text document is opened, use the [TextEditor](#TextEditor) events in the
         * [window](#window) namespace. Note that:
         *
         * - The event is emitted before the [document](#NotebookDocument) is updated in the
         * [active notebook editor](#nb.activeNotebookEditor)
         * - When a [notebook document](#NotebookDocument) is already open (e.g.: open in another visible notebook editor) this event is not emitted
         *
         */
        export const onDidOpenNotebookDocument: vscode.Event<NotebookDocument>;

        /**
         * An event that is emitted when a [notebook's](#NotebookDocument) cell contents are changed.
         */
        export const onDidChangeNotebookCell: vscode.Event<NotebookCellChangeEvent>;

        /**
         * An event that is emitted when the active Notebook editor is changed.
         */
        export const onDidChangeActiveNotebookEditor: vscode.Event<NotebookEditor>;

        /**
         * Show the given document in a notebook editor. A [column](#ViewColumn) can be provided
         * to control where the editor is being shown. Might change the [active editor](#nb.activeNotebookEditor).
         *
         * The document is denoted by an [uri](#Uri). Depending on the [scheme](#Uri.scheme) the
         * following rules apply:
         * `file`-scheme: Open a file on disk, will be rejected if the file does not exist or cannot be loaded.
         * `untitled`-scheme: A new file that should be saved on disk, e.g. `untitled:c:\frodo\new.js`. The language
         * will be derived from the file name.
         * For all other schemes the registered notebook providers are consulted.
         *
         * @param document A document to be shown.
         * @param column A view column in which the [editor](#NotebookEditor) should be shown. The default is the [active](#ViewColumn.Active), other values
         * are adjusted to be `Min(column, columnCount + 1)`, the [active](#ViewColumn.Active)-column is not adjusted. Use [`ViewColumn.Beside`](#ViewColumn.Beside)
         * to open the editor to the side of the currently active one.
         * @param preserveFocus When `true` the editor will not take focus.
         * @return A promise that resolves to a [notebook editor](#NotebookEditor).
         */
        export function showNotebookDocument(uri: vscode.Uri, showOptions?: NotebookShowOptions): Thenable<NotebookEditor>;

        export interface NotebookDocument {
            /**
             * The associated uri for this notebook document.
             *
             * *Note* that most documents use the `file`-scheme, which means they are files on disk. However, **not** all documents are
             * saved on disk and therefore the `scheme` must be checked before trying to access the underlying file or siblings on disk.
             *
             */
            readonly uri: vscode.Uri;

            /**
             * The file system path of the associated resource. Shorthand
             * notation for [TextDocument.uri.fsPath](#TextDocument.uri). Independent of the uri scheme.
             */
            readonly fileName: string;

            /**
             * Is this document representing an untitled file which has never been saved yet. *Note* that
             * this does not mean the document will be saved to disk, use [`uri.scheme`](#Uri.scheme)
             * to figure out where a document will be [saved](#FileSystemProvider), e.g. `file`, `ftp` etc.
             */
            readonly isUntitled: boolean;

            /**
             * The identifier of the Notebook provider associated with this document.
             */
            readonly providerId: string;

            /**
             * `true` if there are unpersisted changes.
             */
            readonly isDirty: boolean;
            /**
             * `true` if the document have been closed. A closed document isn't synchronized anymore
             * and won't be re-used when the same resource is opened again.
             */
            readonly isClosed: boolean;

            /**
             * All cells.
             */
            readonly cells: NotebookCell[];

            /**
             * The spec for current kernel, if applicable. This will be undefined
             * until a kernel has been started
             */
            readonly kernelSpec: IKernelSpec;

            /**
             * Save the underlying file.
             *
             * @return A promise that will resolve to true when the file
             * has been saved. If the file was not dirty or the save failed,
             * will return false.
             */
            save(): Thenable<boolean>;

            /**
             * Ensure a cell range is completely contained in this document.
             *
             * @param range A cell range.
             * @return The given range or a new, adjusted range.
             */
            validateCellRange(range: CellRange): CellRange;
        }

        /**
         * A cell range represents an ordered pair of two positions in a list of cells.
         * It is guaranteed that [start](#CellRange.start).isBeforeOrEqual([end](#CellRange.end))
         *
         * CellRange objects are __immutable__.
         */
        export class CellRange {
            /**
             * The start index. It is before or equal to [end](#CellRange.end).
             */
            readonly start: number;

            /**
             * The end index. It is after or equal to [start](#CellRange.start).
             */
            readonly end: number;

            /**
             * Create a new range from two positions. If `start` is not
             * before or equal to `end`, the values will be swapped.
             *
             * @param start A number.
             * @param end A number.
             */
            constructor(start: number, end: number);
        }

        export interface NotebookEditor {
            /**
             * The document associated with this editor. The document will be the same for the entire lifetime of this editor.
             */
            readonly document: NotebookDocument;
            /**
             * The column in which this editor shows. Will be `undefined` in case this
             * isn't one of the main editors, e.g an embedded editor, or when the editor
             * column is larger than three.
             */
            viewColumn?: vscode.ViewColumn | undefined;

            /**
             * Perform an edit on the document associated with this notebook editor.
             *
             * The given callback-function is invoked with an [edit-builder](#NotebookEditorEdit) which must
             * be used to make edits. Note that the edit-builder is only valid while the
             * callback executes.
             *
             * @param callback A function which can create edits using an [edit-builder](#NotebookEditorEdit).
             * @param options The undo/redo behavior around this edit. By default, undo stops will be created before and after this edit.
             * @return A promise that resolves with a value indicating if the edits could be applied.
             */
            edit(callback: (editBuilder: NotebookEditorEdit) => void, options?: { undoStopBefore: boolean; undoStopAfter: boolean; }): Thenable<boolean>;

            /**
             * Kicks off execution of a cell. Thenable will resolve only once the full execution is completed.
             *
             *
             * @param cell An optional cell in this notebook which should be executed. If no cell is defined, it will run the active cell instead
             * @return A promise that resolves with a value indicating if the cell was run or not.
             */
            runCell(cell?: NotebookCell): Thenable<boolean>;

            /**
             * Kicks off execution of all code cells. Thenable will resolve only when full execution of all cells is completed.
             */
            runAllCells(startCell?: NotebookCell, endCell?: NotebookCell): Thenable<boolean>;

            /**
             * Clears the outputs of the active code cell in a notebook.
             */
            clearOutput(cell?: NotebookCell): Thenable<boolean>;

            /**
             * Clears the outputs of all code cells in a Notebook
             * @return A promise that resolves with a value indicating if the outputs are cleared or not.
             */
            clearAllOutputs(): Thenable<boolean>;

            /**
             * Changes the Notebook's kernel. Thenable will resolve only after kernel change is complete.
             */
            changeKernel(kernel: IKernelSpec): Thenable<boolean>;
        }

        export interface NotebookCell {
            contents: ICellContents;
            uri?: vscode.Uri | undefined;
        }

        export interface NotebookShowOptions {
            /**
             * An optional view column in which the [editor](#NotebookEditor) should be shown.
             * The default is the [active](#ViewColumn.Active), other values are adjusted to
             * be `Min(column, columnCount + 1)`, the [active](#ViewColumn.Active)-column is
             * not adjusted. Use [`ViewColumn.Beside`](#ViewColumn.Beside) to open the
             * editor to the side of the currently active one.
             */
            viewColumn?: vscode.ViewColumn | undefined;

            /**
             * An optional flag that when `true` will stop the [editor](#NotebookEditor) from taking focus.
             */
            preserveFocus?: boolean | undefined;

            /**
             * An optional flag that controls if an [editor](#NotebookEditor)-tab will be replaced
             * with the next editor or if it will be kept.
             */
            preview?: boolean | undefined;

            /**
             * An optional string indicating which notebook provider to initially use
             */
            providerId?: string | undefined;

            /**
             * Optional profile indicating the initial connection to use for this editor
             */
            connectionProfile?: IConnectionProfile | undefined;

            /**
             * Default kernel for notebook
             */
            defaultKernel?: IKernelSpec | undefined;

            /**
             * Optional content used to give an initial notebook state
             */
            initialContent?: INotebookContents | string | undefined;

            /**
             * A optional boolean value indicating the dirty state after the initial content is loaded, default value is true
             */
            initialDirtyState?: boolean | undefined;
        }

        /**
         * Represents an event describing the change in a [notebook document's cells](#NotebookDocument.cells).
         */
        export interface NotebookCellChangeEvent {
            /**
             * The [notebook document](#NotebookDocument) for which the selections have changed.
             */
            notebook: NotebookDocument;
            /**
             * The new value for the [notebook document's cells](#NotebookDocument.cells).
             */
            cells: NotebookCell[];
            /**
             * The [change kind](#NotebookChangeKind) which has triggered this
             * event. Can be `undefined`.
             */
            kind?: NotebookChangeKind | undefined;
        }

        export enum NotebookChangeKind {
            ContentUpdated = 0,
            MetadataUpdated = 1,
            Save = 2,
            CellExecuted = 3
        }

        /**
         * A complex edit that will be applied in one transaction on a NotebookEditor.
         * This holds a description of the edits and if the edits are valid (i.e. no overlapping regions, document was not changed in the meantime, etc.)
         * they can be applied on a [document](#NotebookDocument) associated with a [Notebook editor](#NotebookEditor).
         *
         */
        export interface NotebookEditorEdit {
            /**
             * Replace a cell range with a new cell.
             *
             * @param location The range this operation should remove.
             * @param value The new cell this operation should insert after removing `location`.
             */
            replace(location: number | CellRange, value: ICellContents): void;

            /**
             * Insert a cell (optionally) at a specific index. Any index outside of the length of the cells
             * will result in the cell being added at the end.
             *
             * @param index The position where the new text should be inserted.
             * @param value The new text this operation should insert.
             * @param collapsed The collapsed state of the new cell. Default value is `false` if not provided.
             */
            insertCell(value: ICellContents, index?: number, collapsed?: boolean): void;

            /**
             * Delete a certain cell.
             *
             * @param index The index of the cell to remove.
             */
            deleteCell(index: number): void;
        }

        export function registerSerializationProvider(provider: NotebookSerializationProvider): vscode.Disposable;
        export function registerExecuteProvider(provider: NotebookExecuteProvider): vscode.Disposable;

        export interface IStandardKernel {
            readonly name: string;
            readonly displayName: string;
            readonly connectionProviderIds: string[];
        }

        export interface NotebookSerializationProvider {
            readonly providerId: string;
            getSerializationManager(notebookUri: vscode.Uri): Thenable<SerializationManager>;
        }

        export interface NotebookExecuteProvider {
            readonly providerId: string;
            getExecuteManager(notebookUri: vscode.Uri): Thenable<ExecuteManager>;
            handleNotebookClosed(notebookUri: vscode.Uri): void;
        }

        export interface SerializationManager {
            /**
             * Manages reading and writing contents to/from files.
             * Files may be local or remote, with this manager giving them a chance to convert and migrate
             * from specific notebook file types to and from a standard type for this UI
             */
            readonly contentManager: ContentManager;
        }

        export interface ExecuteManager {
            /**
             * A SessionManager that handles starting, stopping and handling notifications around sessions.
             * Each notebook has 1 session associated with it, and the session is responsible
             * for kernel management
             */
            readonly sessionManager: SessionManager;
            /**
             * (Optional) ServerManager to handle server lifetime management operations.
             * Depending on the implementation this may not be needed.
             */
            readonly serverManager?: ServerManager | undefined;
        }

        /**
         * Defines the contracts needed to manage the lifetime of a notebook server.
         */
        export interface ServerManager {
            /**
             * Indicates if the server is started at the current time
             */
            readonly isStarted: boolean;

            /**
             * Event sent when the server has started. This can be used to query
             * the manager for server settings
             */
            readonly onServerStarted: vscode.Event<void>;

            /**
             * Starts the server. Some server types may not support or require this.
             * Should no-op if server is already started
             */
            startServer(kernelSpec: IKernelSpec): Thenable<void>;

            /**
             * Stops the server. Some server types may not support or require this
             */
            stopServer(): Thenable<void>;
        }

        //#region Content APIs
        /**
         * Handles interacting with file and folder contents
         */
        export interface ContentManager {
            /* Reads contents from a Uri representing a local or remote notebook and returns a
             * JSON object containing the cells and metadata about the notebook
             */
            deserializeNotebook(contents: string): Thenable<INotebookContents>;

            /**
             * Save a file.
             *
             * @param notebookUri - The desired file path.
             *
             * @param notebook - notebook to be saved.
             *
             * @returns A thenable which resolves with the file content model when the
             *   file is saved.
             */
            serializeNotebook(notebook: INotebookContents): Thenable<string>;
        }

        /**
         * Interface defining the file format contents of a notebook, usually in a serializable
         * format. This interface does not have any methods for manipulating or interacting
         * with a notebook object.
         *
         */
        export interface INotebookContents {
            readonly cells: ICellContents[];
            readonly metadata: INotebookMetadata;
            readonly nbformat: number;
            readonly nbformat_minor: number;
        }

        export interface INotebookMetadata {
            kernelspec?: IKernelSpec | undefined;
            language_info?: ILanguageInfo | undefined;
            tags?: string[] | undefined;
        }

        export interface ILanguageInfo {
            name: string;
            version?: string | undefined;
            mimetype?: string | undefined;
            codemirror_mode?: string | ICodeMirrorMode | undefined;
        }

        export interface ICodeMirrorMode {
            name: string;
            version: string;
        }

        /**
         * Interface defining the file format contents of a notebook cell, usually in a serializable
         * format. This interface does not have any methods for manipulating or interacting
         * with a cell object.
         *
         */
        export interface ICellContents {
            cell_type: CellType;
            source: string | string[];
            metadata?: ICellMetadata | undefined;
            execution_count?: number | undefined;
            outputs?: ICellOutput[] | undefined;
        }

        export type CellType = 'code' | 'markdown' | 'raw';

        export interface ICellMetadata {
            language?: string | undefined;
            tags?: string[] | undefined;
            azdata_cell_guid?: string | undefined;
        }

        export interface ICellOutput {
            output_type: OutputTypeName;
            metadata?: ICellOutputMetadata | undefined;
        }

        export interface ICellOutputMetadata {
            azdata_chartOptions?: any;
        }

        /**
         * An alias for a stream type.
         */
        export type StreamType = 'stdout' | 'stderr';

        /**
         * A multiline string.
         */
        export type MultilineString = string | string[];

        export interface IStreamResult extends ICellOutput {
            output_type: 'stream';
            /**
             * Stream output field defining the stream name, for example stdout
             */
            name: StreamType;
            /**
             * Stream output field defining the multiline stream text
             */
            text: MultilineString;
        }

        /**
         * Mime type -> contents mappings
         */
        export type DisplayResultData = { [key: string]: any };

        export interface IDisplayResult extends ICellOutput {
            /**
             * The output data to display as a mapping object of mime type to contents
             */
            data: DisplayResultData;
        }
        export interface IDisplayData extends IDisplayResult {
            output_type: 'display_data';
        }
        export interface IUpdateDisplayData extends IDisplayResult {
            output_type: 'update_display_data';
        }
        export interface IExecuteResult extends IDisplayResult {
            /**
             * Type of cell output.
             */
            output_type: 'execute_result';
            /**
             * Number of times the cell was executed
             */
            execution_count: number;
        }
        export interface IErrorResult extends ICellOutput {
            /**
             * Type of cell output.
             */
            output_type: 'error';
            /**
             * Exception name
             */
            ename: string;
            /**
             * Exception value
             */
            evalue: string;
            /**
             * Stacktrace equivalent
             */
            traceback?: string[] | undefined;
        }

        export type OutputTypeName =
            | 'execute_result'
            | 'display_data'
            | 'stream'
            | 'error'
            | 'update_display_data';

        export type Output = IDisplayData | IUpdateDisplayData | IExecuteResult | IErrorResult | IStreamResult;

        //#endregion

        //#region Session APIs
        export interface SessionManager {
            /**
             * Indicates whether the manager is ready.
             */
            readonly isReady: boolean;

            /**
             * A Thenable that is fulfilled when the manager is ready.
             */
            readonly ready: Thenable<void>;

            readonly specs: IAllKernels | undefined;

            startNew(options: ISessionOptions): Thenable<ISession>;

            shutdown(id: string): Thenable<void>;
        }

        export interface ISession {
            /**
             * Is change of kernels supported for this session?
             */
            canChangeKernels: boolean;
            /*
             * Unique id of the session.
             */
            readonly id: string;

            /**
             * The current path associated with the session.
             */
            readonly path: string;

            /**
             * The current name associated with the session.
             */
            readonly name: string;

            /**
             * The type of the session.
             */
            readonly type: string;

            /**
             * The status indicates if the kernel is healthy, dead, starting, etc.
             */
            readonly status: KernelStatus;

            /**
             * The kernel.
             *
             * #### Notes
             * This is a read-only property, and can be altered by [changeKernel].
             */
            readonly kernel: IKernel;

            /**
             * Tracks whether the default kernel failed to load
             * This could be for a reason such as the kernel name not being recognized as a valid kernel;
             */
            defaultKernelLoaded?: boolean | undefined;

            changeKernel(kernelInfo: IKernelSpec): Thenable<IKernel>;

            configureKernel(kernelInfo: IKernelSpec): Thenable<void>;

            configureConnection(connection: IConnectionProfile): Thenable<void>;
        }

        export interface ISessionOptions {
            /**
             * The path (not including name) to the session.
             */
            path: string;
            /**
             * The name of the session.
             */
            name?: string | undefined;
            /**
             * The type of the session.
             */
            type?: string | undefined;
            /**
             * The type of kernel (e.g. python3).
             */
            kernelName?: string | undefined;
            /**
             * The id of an existing kernel.
             */
            kernelId?: string | undefined;
        }

        export interface IKernel {
            readonly id: string;
            readonly name: string;
            readonly supportsIntellisense: boolean;
            readonly requiresConnection?: boolean | undefined;
            /**
             * Test whether the kernel is ready.
             */
            readonly isReady: boolean;

            /**
             * A Thenable that is fulfilled when the kernel is ready.
             */
            readonly ready: Thenable<void>;

            /**
             * The cached kernel info.
             *
             * #### Notes
             * This value will be null until the kernel is ready.
             */
            readonly info: IInfoReply | null;

            /**
             * Gets the full specification for this kernel, which can be serialized to
             * a notebook file
             */
            getSpec(): Thenable<IKernelSpec>;

            /**
             * Send an `execute_request` message.
             *
             * @param content - The content of the request.
             *
             * @param disposeOnDone - Whether to dispose of the future when done.
             *
             * @returns A kernel future.
             *
             * #### Notes
             * See [Messaging in
             * Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#execute).
             *
             * This method returns a kernel future, rather than a Thenable, since execution may
             * have many response messages (for example, many iopub display messages).
             *
             * Future `onReply` is called with the `execute_reply` content when the
             * shell reply is received and validated.
             *
             * **See also:** [[IExecuteReply]]
             */
            requestExecute(content: IExecuteRequest, disposeOnDone?: boolean): IFuture;

            /**
             * Send a `complete_request` message.
             *
             * @param content - The content of the request.
             *
             * @returns A Thenable that resolves with the response message.
             *
             * #### Notes
             * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#completion).
             *
             * Fulfills with the `complete_reply` content when the shell reply is
             * received and validated.
             */
            requestComplete(content: ICompleteRequest): Thenable<ICompleteReplyMsg>;

            /**
             * Interrupt a kernel.
             *
             * #### Notes
             * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels).
             *
             * The promise is fulfilled on a valid response and rejected otherwise.
             *
             * It is assumed that the API call does not mutate the kernel id or name.
             *
             * The promise will be rejected if the kernel status is `Dead` or if the
             * request fails or the response is invalid.
             */
            interrupt(): Thenable<void>;
        }

        export interface IInfoReply {
            protocol_version: string;
            implementation: string;
            implementation_version: string;
            language_info: ILanguageInfo;
            banner: string;
            help_links: {
                text: string;
                url: string;
            }[];
        }

        /**
         * The contents of a requestExecute message sent to the server.
         */
        export interface IExecuteRequest extends IExecuteOptions {
            code: string | string[];
        }

        /**
         * The options used to configure an execute request.
         */
        export interface IExecuteOptions {
            /**
             * Whether to execute the code as quietly as possible.
             * The default is `false`.
             */
            silent?: boolean | undefined;

            /**
             * Whether to store history of the execution.
             * The default `true` if silent is False.
             * It is forced to  `false ` if silent is `true`.
             */
            store_history?: boolean | undefined;

            /**
             * A mapping of names to expressions to be evaluated in the
             * kernel's interactive namespace.
             */
            user_expressions?: {} | undefined;

            /**
             * Whether to allow stdin requests.
             * The default is `true`.
             */
            allow_stdin?: boolean | undefined;

            /**
             * Whether to the abort execution queue on an error.
             * The default is `false`.
             */
            stop_on_error?: boolean | undefined;
        }

        /**
         * The content of a `'complete_request'` message.
         *
         * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#completion).
         *
         * **See also:** [[ICompleteReply]], [[IKernel.complete]]
         */
        export interface ICompleteRequest {
            code: string;
            cursor_pos: number;
        }

        export interface ICompletionContent {
            matches: string[];
            cursor_start: number;
            cursor_end: number;
            metadata: any;
            status: 'ok' | 'error';
        }
        /**
         * A `'complete_reply'` message on the `'stream'` channel.
         *
         * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#completion).
         *
         * **See also:** [[ICompleteRequest]], [[IKernel.complete]]
         */
        export interface ICompleteReplyMsg extends IShellMessage {
            content: ICompletionContent;
        }

        /**
         * The valid Kernel status states.
         */
        export type KernelStatus =
            | 'unknown'
            | 'starting'
            | 'reconnecting'
            | 'idle'
            | 'busy'
            | 'restarting'
            | 'dead'
            | 'connected';

        /**
         * An arguments object for the kernel changed event.
         */
        export interface IKernelChangedArgs {
            oldValue: IKernel | undefined;
            newValue: IKernel | undefined;
        }

        /// -------- JSON objects, and objects primarily intended not to have methods -----------
        export interface IAllKernels {
            defaultKernel: string;
            kernels: IKernelSpec[];
        }
        export interface IKernelSpec {
            name: string;
            language?: string | undefined;
            display_name?: string | undefined;
        }

        export interface MessageHandler<T extends IMessage> {
            handle(message: T): void | Thenable<void>;
        }

        /**
         * A Future interface for responses from the kernel.
         *
         * When a message is sent to a kernel, a Future is created to handle any
         * responses that may come from the kernel.
         */
        export interface IFuture extends vscode.Disposable {
            /**
             * The original outgoing message.
             */
            readonly msg: IMessage | undefined;

            /**
             * A Thenable that resolves when the future is done.
             *
             * #### Notes
             * The future is done when there are no more responses expected from the
             * kernel.
             *
             * The `done` Thenable resolves to the reply message if there is one,
             * otherwise it resolves to `undefined`.
             */
            readonly done: Thenable<IShellMessage | undefined>;

            /**
             * Set the reply handler for the kernel future.
             *
             * #### Notes
             * If the handler returns a Thenable, all kernel message processing pauses
             * until the Thenable is resolved. If there is a reply message, the future
             * `done` Thenable also resolves to the reply message after this handler has
             * been called.
             */
            setReplyHandler(handler: MessageHandler<IShellMessage>): void;

            /**
             * Sets the stdin handler for the kernel future.
             *
             * #### Notes
             * If the handler returns a Thenable, all kernel message processing pauses
             * until the Thenable is resolved.
             */
            setStdInHandler(handler: MessageHandler<IStdinMessage>): void;

            /**
             * Sets the iopub handler for the kernel future.
             *
             * #### Notes
             * If the handler returns a Thenable, all kernel message processing pauses
             * until the Thenable is resolved.
             */
            setIOPubHandler(handler: MessageHandler<IIOPubMessage>): void;

            /**
             * Register hook for IOPub messages.
             *
             * @param hook - The callback invoked for an IOPub message.
             *
             * #### Notes
             * The IOPub hook system allows you to preempt the handlers for IOPub
             * messages handled by the future.
             *
             * The most recently registered hook is run first. A hook can return a
             * boolean or a Thenable to a boolean, in which case all kernel message
             * processing pauses until the Thenable is fulfilled. If a hook return value
             * resolves to false, any later hooks will not run and the function will
             * return a Thenable resolving to false. If a hook throws an error, the error
             * is logged to the console and the next hook is run. If a hook is
             * registered during the hook processing, it will not run until the next
             * message. If a hook is removed during the hook processing, it will be
             * deactivated immediately.
             */
            registerMessageHook(
                hook: (msg: IIOPubMessage) => boolean | Thenable<boolean>
            ): void;

            /**
             * Remove a hook for IOPub messages.
             *
             * @param hook - The hook to remove.
             *
             * #### Notes
             * If a hook is removed during the hook processing, it will be deactivated immediately.
             */
            removeMessageHook(
                hook: (msg: IIOPubMessage) => boolean | Thenable<boolean>
            ): void;

            /**
             * Send an `input_reply` message.
             */
            sendInputReply(content: IInputReply): void;
        }

        export interface IExecuteReplyMsg extends IShellMessage {
            content: IExecuteReply;
        }

        /**
         * The content of an `execute-reply` message.
         *
         * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#execution-results).
         */
        export interface IExecuteReply {
            status: 'ok' | 'error' | 'abort';
            execution_count: number | null | undefined;
        }

        /**
         * The valid channel names.
         */
        export type Channel = 'shell' | 'iopub' | 'stdin' | 'execute_reply';

        /**
         * Kernel message header content.
         *
         * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#general-message-format).
         *
         * **See also:** [[IMessage]]
         */
        export interface IHeader {
            msg_type: string;
            username?: string | undefined;
            version?: string | undefined;
            session?: string | undefined;
            msg_id?: string | undefined;
        }

        /**
         * A kernel message
         */
        export interface IMessage {
            type: Channel;
            content: any;
            header?: IHeader | undefined;
            parent_header?: IHeader | {} | undefined;
            metadata?: {} | undefined;
        }

        /**
         * A kernel message on the `'shell'` channel.
         */
        export interface IShellMessage extends IMessage {
            channel: 'shell';
        }

        /**
         * A kernel message on the `'iopub'` channel.
         */
        export interface IIOPubMessage extends IMessage {
            channel: 'iopub';
        }

        /**
         * A kernel message on the `'stdin'` channel.
         */
        export interface IStdinMessage extends IMessage {
            channel: 'stdin';
            content: {
                prompt: string;
                password: boolean;
            };
        }

        /**
         * The content of an `'input_reply'` message.
         */
        export interface IInputReply {
            value: string;
        }

        export function registerNavigationProvider(provider: NavigationProvider): vscode.Disposable;

        export interface NavigationProvider {
            readonly providerId: string;
            getNavigation(notebookUri: vscode.Uri): Thenable<NavigationResult>;
        }

        export interface NavigationResult {
            hasNavigation: boolean;
            previous?: vscode.Uri | undefined;
            next?: vscode.Uri | undefined;
        }

        //#endregion
    }
}
