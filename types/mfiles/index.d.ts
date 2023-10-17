declare const MFExtApplicationPlatformWeb: any;

interface IAccessControlEntry {
    ChangePermissionsPermission: MFiles.MFPermission;
    EditPermission: MFiles.MFPermission;
    IsGroup: boolean;
    ReadPermission: MFiles.MFPermission;
    UserOrGroupID: number;
    Clone(): IAccessControlEntry;
}

interface IAccessControlEntryContainer {
    readonly IsEmpty: boolean;
    Add(AccessControlEntryKey: IAccessControlEntryKey, AccessControlEntryData: IAccessControlEntryData): void;
    At(AccessControlEntryKey: IAccessControlEntryKey): IAccessControlEntryData;
    Clear(): void;
    Clone(): IAccessControlEntryContainer;
    GetKeys(): IAccessControlEntryKeys;
    GetKeysWithPseudoUserDefinitions(): IAccessControlEntryKeys;
    HasKey(AccessControlEntryKey: IAccessControlEntryKey): boolean;
    Remove(AccessControlEntryKey: IAccessControlEntryKey): void;
}

interface IAccessControlEntryData {
    AttachObjectsPermission: MFiles.MFPermission;
    ChangePermissionsPermission: MFiles.MFPermission;
    DeletePermission: MFiles.MFPermission;
    EditPermission: MFiles.MFPermission;
    ReadPermission: MFiles.MFPermission;
    Clone(): IAccessControlEntryData;
    SetAllPermissions(Permission: MFiles.MFPermission): void;
}

interface IAccessControlEntryKey {
    readonly HasConcreteUserOrGroupID: boolean;
    readonly IsGroup: boolean;
    readonly IsPseudoUser: boolean;
    PseudoUserID: IIndirectPropertyID;
    readonly UserOrGroupID: number;
    Clone(): IAccessControlEntryKey;
    GetResolvedPseudoUserOrGroupIDs(): IUserOrUserGroupIDs;
    ResetResolvedPseudoUserOrGroupIDs(): void;
    SetUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): void;
}

interface IAccessControlEntryKeys {
    readonly Count: number;
    Clone(): IAccessControlEntryKeys;
    Item(Index: number): IAccessControlEntryKey;
}

interface IAccessControlList {
    readonly AutomaticComponents: IAccessControlListComponentContainer;
    readonly CheckedOutToUserID: number;
    CustomComponent: IAccessControlListComponent;
    readonly HasCheckedOutToUserID: boolean;
    IsFullyAuthoritative: boolean;
    Clone(): IAccessControlList;
    CloneFrom(AccessControlList: IAccessControlList): void;
    EqualTo(AccessControlList: IAccessControlList): boolean;
    HasIdenticalPermissions(AccessControlList: IAccessControlList): boolean;
}

interface IAccessControlListComponent {
    AccessControlEntries: IAccessControlEntryContainer;
    CanDeactivate: boolean;
    readonly CurrentUserBinding: number;
    readonly HasCurrentUser: boolean;
    readonly HasCurrentUserBinding: boolean;
    readonly HasNamedACLLink: boolean;
    readonly HasPseudoUsers: boolean;
    IsActive: boolean;
    readonly NamedACLLink: number;
    Clone(): IAccessControlListComponent;
    GetACEByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): IAccessControlEntryData;
    GetACEKeyByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): IAccessControlEntryKey;
    ResetCurrentUserBinding(): void;
    ResetNamedACLLink(): void;
}

interface IAccessControlListComponentContainer {
    readonly Count: number;
    At(AccessControlListComponentKey: IAccessControlListComponentKey): IAccessControlListComponent;
    GetKeys(): IAccessControlListComponentKeys;
    HasKey(AccessControlListComponentKey: IAccessControlListComponentKey): boolean;
}

interface IAccessControlListComponentKey {
    ItemID: number;
    PropertyDefID: MFiles.MFBuiltInPropertyDef | number;
    Clone(): IAccessControlListComponentKey;
}

interface IAccessControlListComponentKeys {
    readonly Count: number;
    Clone(): IAccessControlListComponentKeys;
    Item(Index: number): IAccessControlListComponentKey;
}

interface IAccessControlLists {
    readonly Count: number;
    Item(Index: number): IAccessControlList;
}

interface IActionConvertToPDF {
    FailOnUnsupportedSourceFiles: boolean;
    OverwriteExistingFile: boolean;
    PDFA1b: boolean;
    StoreAsSeparateFile: boolean;
    Clone(): IActionConvertToPDF;
}

interface IActionCreateAssignment {
    AssignedTo: IUserOrUserGroupIDExs;
    Deadline: boolean;
    DeadlineInDays: number;
    Description: string;
    MonitoredBy: IUserOrUserGroupIDExs;
    Title: string;
    Clone(): IActionCreateAssignment;
}

interface IActionDefinition {
    ActionCreateSeparateAssignment: IActionCreateAssignment;
    readonly ActionType: MFiles.MFActionType;
    Clear(): void;
    Clone(): IActionDefinition;
}

interface IActionDefinitions {
    readonly Count: number;
    Add(Index: number, ActionDefinition: IActionDefinition): void;
    Clone(): IActionDefinitions;
    Item(Index: number): IActionDefinition;
    Item(Index: number, value: IActionDefinition): void;
    Remove(Index: number): void;
}

interface IActionSendNotification {
    Message: string;
    RecipientsEx: IUserOrUserGroupIDExs;
    Subject: string;
    Clone(): IActionSendNotification;
}

interface IActionSetPermissions {
    DiscardsAutomaticPermissions: boolean;
    Permissions: IAccessControlList;
    Clone(): IActionSetPermissions;
}

interface IActionSetProperties {
    Properties: IDefaultProperties;
    Clone(): IActionSetProperties;
}

interface IAdditionalClassInfo {
    AssignmentClassInfo: IAssignmentClassInfo;
    readonly InfoType: MFiles.MFAdditionalClassInfoType;
    Clear(): void;
    Clone(): IAdditionalClassInfo;
}

interface IAdditionalFolder {
    Folder: string;
    Impersonation: IImpersonation;
    LimitInMB: number;
    Clone(): IAdditionalFolder;
}

interface IAdditionalFolders {
    readonly Count: number;
    Add(Index: number, AdditionalFolder: IAdditionalFolder): void;
    Clone(): IAdditionalFolders;
    Item(Index: number): IAdditionalFolder;
    Remove(Index: number): void;
}

interface IApprovalAssignmentClassInfo {
    AnyAssigneeApproves: boolean;
    SignatureForApproval: ISignatureSettings;
    SignatureForRejection: ISignatureSettings;
    Clone(): IApprovalAssignmentClassInfo;
}

interface IArchiveOldVersionsJob {
    AtLeastNDaysOlder: number;
    AtLeastNVersionsOlder: number;
    CheckedInBefore: ITimestamp;
    Flags: MFiles.MFExportContentFlag;
    Impersonation: IImpersonation;
    MarkedForArchiving: boolean;
    NoVersionTag: boolean;
    TargetLocation: string;
    UseAtLeastNDaysOlder: boolean;
    UseAtLeastNVersionsOlder: boolean;
    UseCheckedInBefore: boolean;
    Clone(): IArchiveOldVersionsJob;
}

interface IAssignmentClassInfo {
    ApprovalAssignmentClassInfo: IApprovalAssignmentClassInfo;
    readonly AssignmentType: MFiles.MFAssignmentType;
    TaskAssignmentClassInfo: ITaskAssignmentClassInfo;
    Clone(): IAssignmentClassInfo;
}

interface IAssociatedPropertyDef {
    PropertyDef: MFiles.MFBuiltInPropertyDef | number;
    Required: boolean;
    Clone(): IAssociatedPropertyDef;
}

interface IAssociatedPropertyDefs {
    readonly Count: number;
    Add(Index: number, AssociatedPropertyDef: IAssociatedPropertyDef): void;
    Clone(): IAssociatedPropertyDefs;
    Item(Index: number): IAssociatedPropertyDef;
    Remove(Index: number): void;
}

interface IAttachVaultOptions {
    DisableEventHandlers: boolean;
    DisableExportedDataSets: boolean;
    DisableExportImportJobs: boolean;
    DisableExternalObjectTypes: boolean;
    DisableExternalSources: boolean;
    DisableExternalUserGroups: boolean;
    Flags: MFiles.MFAttachVaultOptionsFlag;
    UpdateAttachmentGUID: boolean;
    Clone(): IAttachVaultOptions;
    DisableAll(): void;
}

interface IAuthenticationResult {
    readonly Intermediate: IAuthenticationResultIntermediate;
    readonly ServerFinal: IAuthenticationResultServerFinal;
    readonly VaultFinal: IAuthenticationResultVaultFinal;
}

interface IAuthenticationResultIntermediate {
    readonly AttemptIdentifier: string;
    readonly AuthenticationData: INamedValues;
}

interface IAuthenticationResultServerFinal {
    readonly ServerConnection: MFiles.MFServerConnection;
}

interface IAuthenticationResultVaultFinal {
    readonly Vault: IVault;
}

interface IAutomaticMetadataResult {
    readonly PropertyValueSuggestions: IPropertyValueSuggestions;
    Clone(): IAutomaticMetadataResult;
}

interface IAutomaticPermissions {
    CanDeactivate: boolean;
    readonly IsBasedOnObjectACL: boolean;
    readonly IsDefault: boolean;
    readonly NamedACL: INamedACL;
    Clone(): IAutomaticPermissions;
    SetBasedOnObjectACL(): void;
    SetNamedACL(NamedACL: INamedACL): void;
}

interface IAutomaticValue {
    ANSIncrement: number;
    ANVCode: string;
    CalculationOrderNumber: number;
    CVSExpression: string;
    CVVCode: string;
    Clone(): IAutomaticValue;
}

interface IBackupJob {
    BackupType: MFiles.MFBackupType;
    FileSizeLimitInMB: number;
    Impersonation: IImpersonation;
    OverwriteExistingFiles: boolean;
    TargetFile: string;
    VaultGUID: string;
    Clone(): IBackupJob;
}

interface IBooleanValue {
    Value: boolean;
    Clone(): IBooleanValue;
}

interface IClassGroup {
    ID: number;
    Members: IIDs;
    Name: string;
    ObjectType: MFiles.MFBuiltInObjectType | number;
    AddMember(Member: number): void;
    Clone(): IClassGroup;
    RemoveMember(Member: number): void;
}

interface IClassGroups {
    readonly Count: number;
    Clone(): IClassGroups;
    Item(Index: number): IClassGroup;
}

interface ICLSIDs {
    readonly PreviewerCtrl: string;
    readonly ShellListingCtrl: string;
}

interface ICollection {
    readonly Count: number;
    readonly Events: IEvents;
    Clear(): void;
    Find(item: any): number;
    GetAt(pos: number): any;
    MoveTo(pos: number, newPos: number): void;
    NewTo(pos: number, replace: boolean): any;
    PutTo(pos: number, replace: boolean, item: any): void;
    RemoveAt(pos: number): void;
}

interface ICommands {
    readonly Events: ICommandsEvents;
    AddCustomCommandToMenu(customCommand: number, location: MFiles.MenuLocation, orderPriority: number): void;
    CreateCustomCommand(commandName: string): number;
    DeleteCustomCommand(customCommand: number): void;
    ExecuteCommand(command: MFiles.BuiltinCommand | number, arguments: any): void;
    GetCommandName(command: MFiles.BuiltinCommand | number): string;
    GetCommandState(
        command: MFiles.BuiltinCommand | number,
        location: MFiles.CommandLocation,
        includeBuiltInState: boolean,
        includeScriptSpecifiedState: boolean,
    ): MFiles.CommandState;
    RemoveCustomCommandFromMenu(customCommand: number, location: MFiles.MenuLocation): void;
    SetCommandState(
        command: MFiles.BuiltinCommand | number,
        location: MFiles.CommandLocation,
        state: MFiles.CommandState,
    ): void;
    SetIcon(customCommand: number, icon: MFiles.DefaultIcon): void;
    SetIconFromPath(customCommand: number, iconPath: string): void;
}

interface ICommandsEvents extends IEvents {
    OnCustomCommand?(commandID: number): void;
}

interface ICopyVaultJob {
    CopyflagAllData: boolean;
    CopyflagAllExceptData: boolean;
    CopyflagApplications: boolean;
    CopyflagDataSets: boolean;
    CopyflagDocumentProfiles: boolean;
    CopyflagDocuments: boolean;
    CopyflagEventLog: boolean;
    CopyflagExternalLocations: boolean;
    CopyflagFiles: boolean;
    CopyflagInternalEventHandlers: boolean;
    CopyflagLanguagesAndTranslations: boolean;
    CopyflagPropertyDefinitions: boolean;
    CopyflagScheduledExportAndImportJobs: boolean;
    CopyflagUserAccounts: boolean;
    CopyflagUseTargetGUID: boolean;
    CopyflagValueListContent: boolean;
    CopyflagValueLists: boolean;
    CopyflagViews: boolean;
    CopyflagWorkflows: boolean;
    VaultGUID: string;
    VaultProperties: IVaultProperties;
    Clone(): ICopyVaultJob;
}

interface ICopyVaultJobOutputInfo {
    readonly VaultProperties: IVaultProperties;
}

interface ICustomApplication {
    readonly ApplicationType: MFiles.MFCustomApplicationType;
    readonly ChecksumHash: string;
    readonly Description: string;
    readonly Enabled: boolean;
    readonly ID: string;
    readonly MasterApplication: string;
    readonly Name: string;
    readonly Optional: boolean;
    readonly Publisher: string;
    readonly RequireSystemAccess: boolean;
    readonly Version: string;
    Clone(): ICustomApplication;
}

interface ICustomApplications {
    readonly Count: number;
    Clone(): ICustomApplications;
    Item(Index: number): ICustomApplication;
}

interface IDailyTrigger {
    DaysInterval: number;
}

interface IDashboard<T> {
    AutoStopWithParent: boolean;
    readonly CustomData: T;
    readonly Events: IDashboardEvents;
    readonly IsPopupDashboard: boolean;
    readonly Parent: IShellPaneContainer | IShellFrame | IVaultUI | IShellUI;
    readonly UseRightToLeftLayout: boolean;
    readonly Vault: IVault;
    readonly Window: IWindow;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void;
}

interface IDashboardEvents extends IEvents {
    OnStarted?(): void;
    OnStop?(): void;
}

interface IDataFunctionCall {
    readonly DataFunction: MFiles.MFDataFunction;
    SetDataDate(): void;
    SetDataDaysFrom(): void;
    SetDataDaysTo(): void;
    SetDataInitialCharGroup(Locale: number): void;
    SetDataIntegerSegment(SegmentSize: number): void;
    SetDataLeftChars(Characters: number): void;
    SetDataMonth(): void;
    SetDataNoOp(): void;
    SetDataYear(): void;
    SetDataYearAndMonth(): void;
}

interface IDataSet {
    readonly ID: number;
    readonly Name: string;
    Clone(): IDataSet;
}

interface IDataSetExportingStatus {
    readonly CurrentServerTime: ITimestamp;
    readonly IsExporting: boolean;
    readonly LatestActivity: ITimestamp;
}

interface IDataSets {
    readonly Count: number;
    Clone(): IDataSets;
    Item(Index: number): IDataSet;
}

interface IDefaultProperties {
    readonly Count: number;
    Add(Index: number, DefaultProperty: IDefaultProperty): void;
    Item(Index: number): IDefaultProperty;
    Remove(Index: number): void;
}

interface IDefaultProperty {
    DataFixedValueValue: ITypedValue;
    DataFromEmailAddVLItemIfNotFound: boolean;
    DataFromEmailField: MFiles.MFEmailField;
    DataFromEmailHeaderAddVLItemIfNotFound: boolean;
    DataFromEmailHeaderField: string;
    DataFromEmailHeaderTreatLookupAsID: boolean;
    DataFromEmailTreatLookupAsID: boolean;
    DataFromHPDSSXMLAddVLItemIfNotFound: boolean;
    DataFromHPDSSXMLPromptName: string;
    DataFromHPDSSXMLTreatLookupAsID: boolean;
    DataFromOCRAddVLItemIfNotFound: boolean;
    DataFromOCRTreatLookupAsID: boolean;
    DataFromOCRZone: IOCRZone;
    DataFromXMLAddVLItemIfNotFound: boolean;
    DataFromXMLTreatLookupAsID: boolean;
    DataFromXMLXPathExpression: string;
    PropertyDefID: MFiles.MFBuiltInPropertyDef | number;
    readonly Type: MFiles.MFDefaultPropertyType;
    Clone(): IDefaultProperty;
    SetFixedValue(TypedValue: ITypedValue): void;
    SetFromEmail(EmailField: MFiles.MFEmailField, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
    SetFromEmailHeader(Field: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
    SetFromHPDSSXML(PromptName: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
    SetFromOCR(OCRZone: IOCRZone, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
    SetFromXML(XPathExpression: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
}

interface IEmailMessageInformation {
    Cc: IStrings;
    From: string;
    Importance: MFiles.MFEmailImportance;
    InReplyTo: string;
    MessageID: string;
    Received: ITimestamp;
    Sensitivity: MFiles.MFEmailSensitivity;
    Sent: ITimestamp;
    Subject: string;
    To: IStrings;
    Clone(): IEmailMessageInformation;
    CloneFrom(EmailMessageInformation: IEmailMessageInformation): void;
}

interface IEventHandler {
    Active: boolean;
    Description: string;
    EventType: MFiles.MFEventHandlerType;
    readonly GUID: string;
    VBScript: string;
    Clone(): IEventHandler;
    GetID(): number;
}

interface IEventHandlers {
    readonly Count: number;
    Add(Index: number, EventHandler: IEventHandler): void;
    Clone(): IEventHandlers;
    GetIndexByGUID(EventHandlerGUID: string): number;
    Item(Index: number): IEventHandler;
    Remove(Index: number): void;
}

interface IEvents {
    // tslint:disable-next-line ban-types
    Register(eventToListen: MFiles.Event, eventSink: Function): number;
    Unregister(sinkHandle: number): void;
}

interface IExportContentJob {
    ExportContent: boolean;
    ExportStructureItems: boolean;
    Flags: MFiles.MFExportContentFlag;
    IgnoreChangesBefore: ITimestamp;
    Impersonation: IImpersonation;
    IncludePrivateUISettingsWithStructure: boolean;
    IncludeValueListItemsWithStructure: boolean;
    SearchConditions: ISearchConditions;
    StructureItems: IExportStructureItems;
    TargetLocation: string;
    UseIgnoreChangesBefore: boolean;
    UseSearchConditions: boolean;
    Clone(): IExportContentJob;
    SetExportAllStructureItems(IncludeValueListItems: boolean): void;
}

interface IExportStructureItem {
    StructureItemGUID: string;
    StructureItemID: number;
    StructureItemType: MFiles.MFMetadataStructureItem;
    Clone(): IExportStructureItem;
}

interface IExportStructureItems {
    readonly Count: number;
    Add(Index: number, ExportStructureItem: IExportStructureItem): void;
    Clone(): IExportStructureItems;
    Item(Index: number): IExportStructureItem;
    Item(Index: number, value: IExportStructureItem): void;
    Remove(Index: number): void;
}

interface IExpression {
    DataAnyFieldFTSFlags: MFiles.MFFullTextSearchFlags;
    DataFileValueType: MFiles.MFFileValueType;
    DataObjectIDSegmentSegmentSize: number;
    DataPermissionsType: MFiles.MFPermissionsExpressionType;
    DataPropertyValueDataFunction: MFiles.MFDataFunction;
    DataPropertyValueParentChildBehavior: MFiles.MFParentChildBehavior;
    DataPropertyValuePropertyDef: number;
    DataStatusValueDataFunction: MFiles.MFDataFunction;
    DataStatusValueType: MFiles.MFStatusType;
    DataTypedValueDataFunction: MFiles.MFDataFunction;
    DataTypedValueDatatype: MFiles.MFDataType;
    DataTypedValueParentChildBehavior: MFiles.MFParentChildBehavior;
    DataTypedValueValueList: number;
    IndirectionLevels: IPropertyDefOrObjectTypes;
    readonly Type: MFiles.MFExpressionType;
    Clone(): IExpression;
    GetExpressionAsText(PropertyDefinitions: IPropertyDefs, ObjectTypes: IObjectTypes): string;
    GetWholeExpressionAsIndirectionLevels(): IPropertyDefOrObjectTypes;
    SetAnyFieldExpression(FullTextSearchFlags: MFiles.MFFullTextSearchFlags): void;
    SetFileValueExpression(FileValueType: MFiles.MFFileValueType): void;
    SetObjectIDSegmentExpression(Segment: number): void;
    SetPermissionExpression(PermissionsExpressionType: MFiles.MFPermissionsExpressionType): void;
    SetPropertyValueExpression(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        PCBehavior: MFiles.MFParentChildBehavior,
        DataFunctionCall: IDataFunctionCall,
    ): void;
    SetStatusValueExpression(StatusType: MFiles.MFStatusType, DataFunctionCall: IDataFunctionCall): void;
    SetTypedValueExpression(
        DataType: MFiles.MFDataType,
        ValueList: MFiles.MFBuiltInValueList | number,
        PCBehavior: MFiles.MFParentChildBehavior,
        DataFunctionCall: IDataFunctionCall,
    ): void;
    SetValueListItemExpression(
        PseudoPropertyDef: MFiles.MFValueListItemPropertyDef,
        PCBehavior: MFiles.MFParentChildBehavior,
        DataFunctionCall: IDataFunctionCall,
    ): void;
}

interface IExpressionEx {
    Conditions: ISearchConditions;
    Expression: IExpression;
    FolderListingAlgorithm: MFiles.MFFolderListingAlgorithm;
    NULLFolderName: string;
    ShowContentsAsJITFolders: boolean;
    ShowEmptyFolders: boolean;
    ShowMatchingObjectsOnThisLevel: boolean;
    ShowNULLFolder: boolean;
    ShowNULLFolderContentsOnThisLevel: boolean;
    Clone(): IExpressionEx;
}

interface IExpressionExs {
    readonly Count: number;
    Add(Index: number, ExpressionEx: IExpressionEx): void;
    Clone(): IExpressionExs;
    Item(Index: number): IExpressionEx;
    Item(Index: number, value: IExpressionEx): void;
    Remove(Index: number): void;
}

interface IExpressions {
    readonly Count: number;
    Add(Index: number, Expression: IExpression): void;
    Clone(): IExpressions;
    Item(Index: number): IExpression;
    Item(Index: number, value: IExpression): void;
    Remove(Index: number): void;
}

interface IFileClass {
    DisplayName: string;
    readonly DotAndExtension: string;
    readonly Extension: string;
    readonly FileClass: string;
    Clone(): IFileClass;
    LoadByExtension(Extension: string): void;
    LoadByFileClass(Extension: string, FileClass: string): void;
    SetFileClassInfo(DotAndFileExtension: string, FileClass: string, FileClassDisplayName: string): void;
}

interface IFileClasses {
    readonly Count: number;
    Add(Index: number, FileClass: IFileClass): void;
    Clone(): IFileClasses;
    Item(Index: number): IFileClass;
    Remove(Index: number): void;
}

interface IFileDownloadSession {
    readonly DownloadID: number;
    readonly FileSize: number;
    readonly FileSize32: number;
}

interface IFileInformation {
    EmailMessage: IEmailMessageInformation;
    FileType: MFiles.MFFileInformationType;
    Clear(): void;
    ExtractFromFile(PathToFile: string): void;
}

interface IFileVer {
    ID: number;
    Version: number;
    Clone(): IFileVer;
    CloneFrom(FileVer: IFileVer): void;
}

interface IFileVers {
    readonly Count: number;
    Add(Index: number, FileVer: IFileVer): void;
    Clone(): IFileVers;
    Item(Index: number): IFileVer;
    Remove(Index: number): void;
}

interface IFolderContentItem {
    readonly FolderContentItemType: MFiles.MFFolderContentItemType;
    readonly ObjectVersion: IObjectVersion;
    readonly PropertyFolder: ITypedValue;
    readonly TraditionalFolder: ILookup;
    readonly View: IView;
}

interface IFolderContentItems {
    readonly Count: number;
    readonly MoreResults: boolean;
    Item(Index: number): IFolderContentItem;
}

interface IFolderDef {
    readonly FolderDefType: MFiles.MFFolderDefType;
    readonly PropertyFolder: ITypedValue;
    readonly SearchDef: ISearchDef;
    readonly TraditionalFolder: number;
    readonly View: MFiles.MFBuiltInView | number;
    Clone(): IFolderDef;
    SetPropertyFolder(TypedValue: ITypedValue): void;
    SetSearchDef(SearchDef: ISearchDef): void;
    SetTraditionalFolder(TraditionalFolder: number): void;
    SetView(View: MFiles.MFBuiltInView | number): void;
}

interface IFolderDefs {
    readonly Count: number;
    Add(Index: number, FolderDef: IFolderDef): void;
    Clone(): IFolderDefs;
    Item(Index: number): IFolderDef;
    Remove(Index: number): void;
}

interface IFolderListingColumn {
    Flags: MFiles.MFFolderListingColumnFlags;
    readonly ID: number;
    readonly Name: string;
    Position: number;
    Visible: boolean;
    Width: number;
    Clone(): IFolderListingColumn;
}

interface IFolderListingColumns {
    readonly Count: number;
    Add(Index: number, FolderListingColumn: IFolderListingColumn): void;
    Item(Index: number): IFolderListingColumn;
    Item(Index: number, value: IFolderListingColumn): void;
    Remove(Index: number): void;
}

interface IFolderListingColumnSorting {
    ID: number;
    Index: number;
    SortAscending: boolean;
    Clone(): IFolderListingColumnSorting;
}

interface IFolderListingColumnSortings {
    readonly Count: number;
    Add(Index: number, FolderListingColumnSorting: IFolderListingColumnSorting): void;
    Item(Index: number): IFolderListingColumnSorting;
    Item(Index: number, value: IFolderListingColumnSorting): void;
    Remove(Index: number): void;
}

interface IFolderListingUIState {
    Columns: IFolderListingColumns;
    ColumnSortings: IFolderListingColumnSortings;
    GroupingMode: MFiles.MFFolderListingItemGroupingMode;
    IconSize: number;
    ViewMode: MFiles.MFFolderListingViewMode;
}

interface IFolderNameListing {
    readonly Count: number;
    readonly MoreValues: boolean;
    Item(Index: number): ITypedValue;
    SortWithExpression(Expression: IExpression, Locale: number): void;
}

interface IFolderUIState {
    BottomPaneBarMinimized: boolean;
    HitHighlightingEnabled: boolean;
    readonly ListingUIState: IFolderListingUIState;
    MetadataEditorInRightPane: boolean;
    RelativeBottomPaneHeight: number;
    RelativeRightPaneWidth: number;
    RightPaneBarMinimized: boolean;
    ShowBottomPaneBar: boolean;
    ShowRightPaneBar: boolean;
}

interface IIDRange {
    MaxID: number;
    MaxID_32bit: string;
    MinID: number;
    MinID_32bit: string;
    Clone(): IIDRange;
    SetIDs(MinID: number, MaxID: number): void;
    SetIDs_32bit(MinID: string, MaxID: string): void;
}

interface IIDs {
    readonly Count: number;
    Add(Index: number, ID: number): void;
    Clone(): IIDs;
    IndexOf(ID: number): number;
    Item(Index: number): number;
    Remove(Index: number): void;
    RemoveAll(ID: number): number;
}

interface IImpersonation {
    Account: string;
    ImpersonationType: MFiles.MFImpersonationType;
    Password: string;
    Clone(): IImpersonation;
}

interface IImportContentJob {
    ActivateAutomaticPermissionsForNewOrChangedDefinitions: boolean;
    DisableImportedExternalObjectTypeConnections: boolean;
    DisableImportedExternalUserGroups: boolean;
    DisableImportedVaultEventHandlers: boolean;
    Flags: MFiles.MFImportContentFlag;
    IgnoreAutomaticPermissionsDefinedByObjects: boolean;
    Impersonation: IImpersonation;
    MetadataStructureSelectors: IMetadataStructureSelectors;
    Permissions: IAccessControlList;
    ResetExportTimestamps: boolean;
    SourceLocation: string;
    UseDefaultObjectTypePermissions: boolean;
    UseNamesAsAliases: boolean;
    UsePermissions: boolean;
    Clone(): IImportContentJob;
}

interface IIndirectPropertyID {
    readonly Count: number;
    Add(Index: number, IndirectPropertyIDLevel: IIndirectPropertyIDLevel): void;
    Clone(): IIndirectPropertyID;
    EqualTo(IndirectPropertyID: IIndirectPropertyID): boolean;
    Item(Index: number): IIndirectPropertyIDLevel;
    Remove(Index: number): void;
    ToJSON(): string;
}

interface IIndirectPropertyIDLevel {
    ID: number;
    LevelType: MFiles.MFIndirectPropertyIDLevelType;
    Clone(): IIndirectPropertyIDLevel;
    ToJSON(): string;
}

interface IKeyNamePair {
    readonly Key: number;
    readonly Name: string;
    Clone(): IKeyNamePair;
}

interface IKeyNamePairs {
    readonly Count: number;
    Item(Index: number): IKeyNamePair;
}

interface ILanguage {
    readonly ID: number;
    LanguageCode: string;
    Name: string;
}

interface ILanguages {
    readonly Count: number;
    Item(Index: number): ILanguage;
}

interface ILicenseStatus {
    readonly EvaluationDaysLeft: number;
    readonly EvaluationMode: boolean;
    readonly Expired: boolean;
    readonly LicenseCode: string;
    readonly NumOfConcurrentUserLicenses: number;
    readonly NumOfNamedUserLicenses: number;
    readonly NumOfReadonlyLicenses: number;
    readonly SerialNumber: string;
    ClearLicenseCode(): void;
}

interface ILoginAccount {
    readonly AccountName: string;
    AccountType: MFiles.MFLoginAccountType;
    DomainName: string;
    EmailAddress: string;
    Enabled: boolean;
    FullName: string;
    LicenseType: MFiles.MFLicenseType;
    ServerRoles: MFiles.MFLoginServerRole;
    UserName: string;
    Clone(): ILoginAccount;
    CloneFrom(LoginAccount: ILoginAccount): void;
    Set(
        LoginAccountType: MFiles.MFLoginAccountType,
        DomainName: string,
        UserName: string,
        ServerRoles: MFiles.MFLoginServerRole,
        FullName: string,
        EmailAddress: string,
        LicenseType: MFiles.MFLicenseType,
    ): void;
}

interface ILoginAccountPersonalInformation {
    readonly AccountName: string;
    readonly Email: string;
    readonly FullName: string;
}

interface ILoginAccounts {
    readonly Count: number;
    Item(Index: number): ILoginAccount;
}

interface ILookup {
    Deleted: boolean;
    readonly DisplayID: string;
    readonly DisplayIDAvailable: boolean;
    DisplayValue: string;
    readonly Hidden: boolean;
    Item: number;
    ItemGUID: string;
    readonly ObjectFlags: MFiles.MFSpecialObjectFlag;
    ObjectType: MFiles.MFBuiltInObjectType | number;
    Version: number;
    Clone(): ILookup;
    CloneFrom(Lookup: ILookup): void;
    GetFormattedDisplayValue(
        Localized: boolean,
        EmptyLookupDispValuesAsHidden: boolean,
        AddDeletedSuffixIfDeleted: boolean,
    ): string;
}

interface ILookups {
    readonly Count: number;
    Add(Index: number, Lookup: ILookup): void;
    Clone(): ILookups;
    CloneFrom(Lookups: ILookups): void;
    GetLookupByItem(Item: number): ILookup;
    GetLookupIndexByItem(Item: number): number;
    Item(Index: number): ILookup;
    Remove(Index: number): void;
}

interface IMessage {
    button1_enabled?: boolean | undefined;
    button1_title?: string | undefined;
    button2_enabled?: boolean | undefined;
    button2_title?: string | undefined;
    button3_enabled?: boolean | undefined;
    button3_title?: string | undefined;
    button4_enabled?: boolean | undefined;
    button4_title?: string | undefined;
    cancelButton?: (1 | 2 | 3 | 4) | undefined;
    caption?: string | undefined;
    checkbox_checked?: boolean | undefined;
    checkbox_enabled?: boolean | undefined;
    checkbox_title?: string | undefined;
    defaultButton?: (1 | 2 | 3 | 4) | undefined;
    icon?: string | undefined;
    message?: string | undefined;
    timeOut?: number | undefined;
    timeout_deactivateOnFocusChange?: boolean | undefined;
    timeOutButton?: (1 | 2 | 3 | 4) | undefined;
}

interface IMetadataCard {
    readonly ActiveView: string;
    readonly DataModel: IMetadataCardModel;
    readonly Events: IEvents;
    readonly HitHighlightingActive: boolean;
    readonly Location: string;
    readonly Minimized: boolean;
    readonly Parent: any;
    readonly PreviewerVisible: boolean;
    readonly PreviewerWidth: number;
    readonly SearchHits: string;
    readonly Vault: IVault;
    readonly Views: ICollection;
    GetApplyAction(): IMetadataCardAction;
    GetApplyAllAction(): IMetadataCardAction;
    GetCheckInImmediatelyOption(): IMetadataCardOption;
    GetDiscardAction(): IMetadataCardAction;
    GetFavoriteObjectOption(): IMetadataCardOption;
    GetFollowThisObjectOption(): IMetadataCardOption;
    GetHeight(): number;
    GetOpenForEditOption(): IMetadataCardOption;
    GetPopOutAction(): IMetadataCardAction;
    GetSkipAction(): IMetadataCardAction;
    GetUIData(key: string, defaultData: any): any;
    GetUseAsDefaultsOption(): IMetadataCardOption;
    GetWidth(): number;
    IsModified(): boolean;
    IsOnMultiItemSequence(): boolean;
    IsPoppedOut(): boolean;
    PromptForValue(dialog: any): boolean;
    ResumeAsyncOp(): void;
    SetEditStateDirty(dirty: boolean): void;
    SetHeight(Height: number): void;
    SetLocation(location: string): void;
    SetMinimized(Minimized: boolean): void;
    SetWidth(Width: number): void;
    ShowMessage(message: string | IMessage): number;
    ShowNewObjectDialog(ObjectType: MFiles.MFBuiltInObjectType | number, defaultName: string): any;
    ShowPermissionsDialog(): void;
    StorePreviewerState(previewerVisible: boolean, previewerWidth: number): void;
    StoreUIData(
        key: string,
        data: any,
        dataIsModeSpecific: boolean,
        dataIsLayoutSpecific: boolean,
        dataIsPermanent: boolean,
    ): void;
    SuspendAsyncOp(): void;
}

interface IMetadataCardAction {
    readonly Events: IEvents;
    Activate(): void;
    GetExplanation(): string;
    GetName(): string;
    IsEnabled(): boolean;
    IsVisible(): boolean;
}

interface IMetadataCardCommentHistoryItem {
    GetCommentAuthor(): string;
    GetCommentText(): string;
    GetCommentTimestamp(): any;
    GetCommentVersion(): number;
}

interface IMetadataCardControl {
    readonly AllowAdding: boolean;
    readonly Events: IEvents;
    readonly Hierarchical: boolean;
    readonly ID: string;
    Label: string;
    readonly Linked: boolean;
    Modified: boolean;
    MustExist: boolean;
    readonly PropertyDef: MFiles.MFBuiltInPropertyDef | number;
    ReadOnly: boolean;
    readonly RealObjectType: boolean;
    readonly Type: string;
    Value: any;
    readonly Valuelist: MFiles.MFBuiltInValueList | number;
    ValueRequired: boolean;
    Visible: boolean;
    ActivateLink(valuePart: any): void;
    AddNewItem(name: string): any;
    AddNewSubItem(name: string, valueParent: any): any;
    AllowHitHighlighting(): boolean;
    CanActivateLink(valuePart: any): boolean;
    CanAddNewSubItem(name: string, valueParent: any): boolean;
    CanEditItem(value: any): boolean;
    CreateSelectionList(): IMetadataCardSelectionList;
    CreateUnvalidatedValue(valueString: string): IMetadataCardUnvalidatedValue;
    EditItem(value: any): any;
    FindItem(name: string): any;
    FindItemByID(itemID: number): any;
    GetSelectableValueItemStates(): any;
    GetValueSuggestions(): any;
    HasAutomaticValue(): boolean;
    HasInitialValue(): boolean;
    HasUncalculatedAutomaticValue(): boolean;
    IsExternal(): boolean;
    RefreshList(): void;
    Remove(): void;
    RevertToInitialValue(): void;
    SetValueItemState(itemID: string, state: any): void;
}

interface IMetadataCardModel {
    readonly CheckedOutTo: IMetadataCardControl;
    readonly ClassSelector: IMetadataCardControl;
    readonly Comment: IMetadataCardControl;
    readonly DataModels: ICollection;
    readonly Events: IEvents;
    readonly IconURL: string;
    readonly ID: string;
    readonly IsFileAvailableForPreview: boolean;
    readonly IsUpdating: boolean;
    readonly ObjectId: IMetadataCardControl;
    readonly ObjectType: IMetadataCardControl;
    readonly ObjectTypeId: IMetadataCardControl;
    readonly ObjectVersion: IMetadataCardControl;
    readonly ObjVers: IObjVers;
    readonly PermissionsDescription: string;
    readonly PropertyControls: ICollection;
    readonly PropertySelector: IMetadataCardControl;
    readonly SaveAsTypeSelector: IMetadataCardControl;
    readonly Title: IMetadataCardControl;
    readonly UncreatedObject: boolean;
    AddProperty(propertyDefId: MFiles.MFBuiltInPropertyDef | number): void;
    GetCommentVersionHistory(): any;
    GetError(): any;
    GetIconOverlayHint(): string;
    GetObjectSourceFiles(): any;
    GetObjectTemplateDescription(): string;
    GetRemoteVaultAction(): IMetadataCardAction;
    GetSubObjectsAction(): IMetadataCardAction;
    GetValueListItemIdByGUID(propertyDefId: MFiles.MFBuiltInPropertyDef | number, guidToLookFor: string): number;
    IsModified(): boolean;
    Rebuild(iterationCounter: number, classChanged: boolean, addedPropertyDef: number): boolean;
    SetAdditionalPropertyDefs(additionalPropertyDefs: any): void;
    SetCustomPlaceholders(customPlaceholders: any): void;
    SetRequiredPropertyDefs(requiredPropertyDefs: any): void;
    SetUnevaluatedPropertyValues(unevaluatedValues: any): void;
    ShowFilePreview(previewer: any): void;
}

interface IMetadataCardMultiValue {
    readonly ID: string;
    readonly IsMultiValue: boolean;
    readonly State: any;
    readonly ValueParts: any;
}

interface IMetadataCardMultiValuePart {
    readonly ID: any;
    readonly Value: any;
}

interface IMetadataCardOption {
    readonly Events: IEvents;
    GetExplanation(): string;
    GetName(): string;
    GetOptionValue(): any;
    IsEnabled(): boolean;
    IsVisible(): boolean;
    SetOptionValue(value: any): void;
}

interface IMetadataCardSelectionList {
    readonly Events: IEvents;
    readonly Filter: string;
    readonly FilteringValue: string;
    readonly Items: any;
    readonly MoreResults: boolean;
    AutoSelect(identifier: string): void;
    SetFilter(Filter: string, token: number, maxResults: number): void;
}

interface IMetadataCardSelectionListItem {
    readonly ChildItems: any;
    readonly HasParent: boolean;
    readonly ParentID: number;
    readonly Selectable: boolean;
    readonly Value: any;
}

interface IMetadataCardUnvalidatedValue {
    readonly ID: string;
    readonly IsMultiValue: boolean;
    readonly IsUnvalidated: boolean;
    readonly Name: string;
}

interface IMetadataCardValue {
    readonly HasIcon: boolean;
    readonly IconURL: string;
    readonly ID: string;
    readonly IsMultiValue: boolean;
    readonly Item: number;
    readonly Name: string;
    readonly State: any;
    readonly Version: number;
    IsDeleted(): boolean;
    IsHidden(): boolean;
}

interface IMetadataCardValueSuggestion {
    readonly IsNewValue: boolean;
    readonly Name: string;
    readonly Value: any;
}

interface IMetadataCardView {
    DashboardID: string;
    readonly Events: IEvents;
    Name: string;
}

interface IMetadataStructureSelector {
    Flags: MFiles.MFMetadataStructureSelectorFlags;
    ID: string;
    Name: string;
    StructureItemGUID: string;
    StructureItemID: number;
    StructureItemSemanticAlias: string;
    StructureItemType: MFiles.MFMetadataStructureItem;
    Clone(): IMetadataStructureSelector;
}

interface IMetadataStructureSelectors {
    readonly Count: number;
    Add(Index: number, MetadataStructureSelector: IMetadataStructureSelector): void;
    Clone(): IMetadataStructureSelectors;
    Item(Index: number): IMetadataStructureSelector;
    Item(Index: number, value: IMetadataStructureSelector): void;
    Remove(Index: number): void;
}

interface IMFDocListCtrl {
    AttachToListingWindow(shellListing: any): void;
}

interface IMFilesClientApplication {
    AddVaultConnection(VaultConnection: IVaultConnection): void;
    BindToVault(
        VaultConnection: string,
        ParentWindow: number,
        CanLogIn: boolean,
        ReturnNULLIfCancelledByUser: boolean,
    ): IVault;
    FindFile(Path: string, UpdateFromServer: boolean): IObjectFileAndVersion;
    FindObjectVersionAndProperties(Path: string, UpdateFromServer: boolean): IObjectVersionAndProperties;
    GetAPIVersion(): IMFilesVersion;
    GetClientLanguage(): string;
    GetClientVersion(): IMFilesVersion;
    GetDriveLetter(): string;
    GetVaultConnection(VaultConnection: string): IVaultConnection;
    GetVaultConnections(): IVaultConnections;
    GetVaultConnectionsWithGUID(GUID: string): IVaultConnections;
    IsObjectPathInMFiles(Path: string): boolean;
    LogInAs(
        VaultConnection: string,
        ParentWindow: number,
        DefaultAuthType: MFiles.MFAuthType,
        ReturnNULLIfCancelledByUser: boolean,
    ): IVault;
    LogInAsUser(
        VaultConnection: string,
        AuthType: MFiles.MFAuthType,
        UserName: string,
        Password: string,
        Domain: string | null,
        SPN: string | null,
    ): IVault;
    RemoveVaultConnection(VaultConnectionName: string, UserSpecific: boolean): void;
    ShowBalloonTip(Msg: string, Title: string, Timeout: number, InfoFlags: number, RemovePrevious: boolean): void;
    TestConnectionToServerEx(
        Server: string,
        Port: string,
        ProtocolSequence: string,
        EncryptedConnection: boolean,
    ): number;
}

interface IMFilesServerApplication {
    readonly LicenseManagementOperations: IServerLicenseManagementOperations;
    readonly LoginAccountOperations: IServerLoginAccountOperations;
    readonly ScheduledJobManagementOperations: IServerScheduledJobManagementOperations;
    readonly ServerManagementOperations: IServerManagementOperations;
    readonly SharedLinkPublicOperations: ISharedLinkPublicOperations;
    readonly VaultManagementOperations: IServerVaultManagementOperations;
    Connect(
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        LocalComputerName: string,
        AllowAnonymousConnection: boolean,
    ): MFiles.MFServerConnection;
    ConnectAdministrativeEx(
        TimeZone: ITimeZoneInformation,
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        SPN: string | null,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
        LocalComputerName: string,
    ): MFiles.MFServerConnection;
    ConnectEx3(
        TimeZone: ITimeZoneInformation,
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        SPN: string | null,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
        LocalComputerName: string,
        AllowAnonymousConnection: boolean,
        AllowUsingAuthenticationPlugins: boolean,
        LogicalTargetServer: string,
    ): MFiles.MFServerConnection;
    ConnectEx4(
        TimeZone: ITimeZoneInformation,
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        SPN: string | null,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
        LocalComputerName: string,
        AllowAnonymousConnection: boolean,
        AllowUsingAuthenticationPlugins: boolean,
        LogicalTargetServer: string,
        ClientCulture: string,
    ): MFiles.MFServerConnection;
    ConnectWithAuthenticationDataEx2(
        PluginInfo: IPluginInfo,
        AuthenticationData: INamedValues,
        AttemptIdentifier: string,
        TimeZone: ITimeZoneInformation,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
        LocalComputerName: string,
        AllowAnonymousConnection: boolean,
        LogicalTargetServer: string,
    ): IAuthenticationResult;
    ConnectWithAuthenticationDataEx3(
        PluginInfo: IPluginInfo,
        AuthenticationData: INamedValues,
        AttemptIdentifier: string,
        TimeZone: ITimeZoneInformation,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
        LocalComputerName: string,
        AllowAnonymousConnection: boolean,
        LogicalTargetServer: string,
        ClientCulture: string,
    ): IAuthenticationResult;
    ConnectWithoutLogin(
        TimeZone: ITimeZoneInformation,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        LocalComputerName: string,
        LogicalTargetServer: string,
        ClientCulture: string,
    ): MFiles.MFServerConnection;
    Disconnect(): void;
    GetAPIVersion(): IMFilesVersion;
    GetAuthenticationPluginInformationEx(
        UserName: string,
        Domain: string,
        VaultGUID: string,
        HostName: string,
        AccountType: MFiles.MFLoginAccountType,
        TargetPluginName: string,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
    ): IPluginInfos;
    GetAuthenticationPluginsEx(
        ScopeIndependentOnly: boolean,
        ProtocolSequence: string,
        NetworkAddress: string,
        Endpoint: string,
        EncryptedConnection: boolean,
    ): IPluginInfos;
    GetOnlineVaults(): IVaultsOnServer;
    GetServerVersion(): IMFilesVersion;
    GetTokenAsAuthenticationData(Token: string): INamedValues;
    GetVaults(): IVaultsOnServer;
    LogInAsUserToVault(
        VaultGUID: string,
        TimeZone: ITimeZoneInformation,
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
    ): IVault;
    LogInAsUserToVaultWithSPN(
        VaultGUID: string,
        TimeZone: ITimeZoneInformation,
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        SPN: string | null,
    ): IVault;
    LogInToVault(VaultGUID: string): IVault;
    LogInToVaultAdministrative(VaultGUID: string): IVault;
    LogInToVaultAdministrativeWithExistingSession(VaultGUID: string): IVault;
    LogInToVaultEx(VaultGUID: string, AllowUsingAuthenticationPlugins: boolean): IVault;
    LogInToVaultWithExistingSession(VaultGUID: string): IVault;
    TestConnectionToServerEx(
        Server: string,
        Port: string,
        ProtocolSequence: string,
        EncryptedConnection: boolean,
    ): number;
}

interface IMFilesVersion {
    Build: number;
    readonly Display: string;
    Major: number;
    Minor: number;
    Patch: number;
    SoftwarePlatform: MFiles.MFSoftwarePlatformType;
    Clone(): IMFilesVersion;
    CompareTo(RightSide: IMFilesVersion): number;
}

interface IMFResourceManager {
    GetLocaleSpecificDateFormat(): string;
    GetUICultures(): IStrings;
    LoadResourceString(LanguageID: number, ResourceID: number): string;
}

interface IMonthlyDateTrigger {
    Days: number;
    Months: MFiles.MFTriggerMonth;
}

interface IMonthlyDOWTrigger {
    DaysOfTheWeek: MFiles.MFTriggerWeekDay;
    Months: MFiles.MFTriggerMonth;
    WhichWeek: MFiles.MFTriggerWeekOfMonth;
}

interface INamedACL {
    AccessControlList: IAccessControlList;
    readonly GUID: string;
    ID: number;
    Name: string;
    readonly NamedACLType: MFiles.MFNamedACLType;
    Clone(): INamedACL;
}

interface INamedACLAdmin {
    AccessControlListForNamedACL: IAccessControlList;
    NamedACL: INamedACL;
    SemanticAliases: ISemanticAliases;
    Clone(): INamedACLAdmin;
}

interface INamedACLs {
    readonly Count: number;
    Item(Index: number): INamedACL;
}

interface INamedACLsAdmin {
    readonly Count: number;
    Item(Index: number): INamedACLAdmin;
}

interface INamedValueNamespace {
    NamedValues: INamedValues;
    NamespaceName: string;
    Clone(): INamedValueNamespace;
}

interface INamedValueNamespaces {
    readonly Count: number;
    Add(Index: number, NamedValueNamespace: INamedValueNamespace): void;
    Clone(): INamedValueNamespaces;
    Item(Index: number): INamedValueNamespace;
    Item(Index: number, value: INamedValueNamespace): void;
    Remove(Index: number): void;
}

interface INamedValues {
    Modified: boolean;
    readonly Names: IStrings;
    Clone(): INamedValues;
    Contains(Name: string): boolean;
    Value(ValueName: string): any;
    Value(ValueName: string, value: any): void;
}

interface INumber {
    Value: number;
    Clone(): INumber;
}

interface IObjectClass {
    AccessControlList: IAccessControlList;
    readonly AdditionalClassInfo: IAdditionalClassInfo;
    AssociatedPropertyDefs: IAssociatedPropertyDefs;
    AutomaticPermissionsForObjects: IAutomaticPermissions;
    ForceWorkflow: boolean;
    ID: number;
    Name: string;
    NamePropertyDef: number;
    ObjectType: MFiles.MFBuiltInObjectType | number;
    Workflow: number;
    Clone(): IObjectClass;
}

interface IObjectClassAdmin {
    readonly AdditionalClassInfo: IAdditionalClassInfo;
    AssociatedPropertyDefs: IAssociatedPropertyDefs;
    AutomaticPermissionsForObjects: IAutomaticPermissions;
    ForceWorkflow: boolean;
    ID: number;
    Name: string;
    NamePropertyDef: number;
    ObjectType: MFiles.MFBuiltInObjectType | number;
    Predefined: boolean;
    SemanticAliases: ISemanticAliases;
    Workflow: number;
    Clone(): IObjectClassAdmin;
}

interface IObjectClasses {
    readonly Count: number;
    Add(Index: number, ObjectClass: IObjectClass): void;
    Clone(): IObjectClasses;
    Item(Index: number): IObjectClass;
    Remove(Index: number): void;
}

interface IObjectClassesAdmin {
    readonly Count: number;
    Add(Index: number, ObjectClassAdmin: IObjectClassAdmin): void;
    Item(Index: number): IObjectClassAdmin;
    Remove(Index: number): void;
}

interface IObjectComparer {
    Compare(ObjectVersionDataLeft: IObjectVersion, ObjectVersionDataRight: IObjectVersion): number;
}

interface IObjectCreationInfo {
    DisallowTemplateSelection: boolean;
    ExplicitObjectID: number;
    IsObjectShortcut: boolean;
    ObjectGUID: string;
    OkToAllButtonVisible: boolean;
    SkipThisButtonVisible: boolean;
    GetDisableObjectCreation(): boolean;
    GetExtension(): string;
    GetMetadataCardTitle(): string;
    GetObjectType(): number;
    GetSelectableFileClasses(): IFileClasses;
    GetSelectedFileClass(): IFileClass;
    GetSingleFileDocument(): boolean;
    GetSourceFiles(): ISourceObjectFiles;
    GetTemplate(): IObjVer;
    GetTitle(): ITypedValue;
    GetTitleAsText(): string;
    GetUseAsDefaults(): boolean;
    SetDisableObjectCreation(Disable: boolean): void;
    SetExtension(Extension: string, Editable: boolean): void;
    SetMetadataCardTitle(MetadataCardTitle: string): void;
    SetObjectType(ObjectType: MFiles.MFBuiltInObjectType | number, Editable: boolean): void;
    SetSelectableFileClasses(FileClasses: IFileClasses): void;
    SetSelectedFileClass(FileClass: IFileClass, Editable: boolean): void;
    SetSingleFileDocument(SingleFile: boolean, Editable: boolean): void;
    SetSourceFiles(SourceFiles: ISourceObjectFiles): void;
    SetTemplate(Template: IObjVer): void;
    SetTitle(Title: ITypedValue, Editable: boolean): void;
    SetTitleAsDatatypeText(Title: string, Editable: boolean): void;
    SetUseAsDefaults(UseAsDefaults: boolean, Editable: boolean): void;
}

interface IObjectFile {
    readonly ChangeTimeUtc: Date;
    readonly CreationTimeUtc: Date;
    readonly Extension: string;
    readonly FileGUID: string;
    readonly FileVer: IFileVer;
    readonly ID: number;
    readonly LastAccessTimeUtc: Date;
    readonly LastWriteTimeUtc: Date;
    readonly LogicalSize: number;
    readonly LogicalSize_32bit: number;
    readonly Title: string;
    readonly Version: number;
    GetNameForFileSystem(): string;
    ToJSON(): string;
}

interface IObjectFileAndObjVer {
    readonly ObjectFile: IObjectFile;
    readonly ObjVer: IObjVer;
    Clone(): IObjectFileAndObjVer;
    ToJSON(): string;
}

interface IObjectFileAndObjVerOfMultipleFiles {
    readonly Count: number;
    Add(Index: number, ObjectFileAndObjVer: IObjectFileAndObjVer): void;
    Clone(): IObjectFileAndObjVerOfMultipleFiles;
    Item(Index: number): IObjectFileAndObjVer;
    Remove(Index: number): void;
}

interface IObjectFileAndVersion {
    readonly ObjectFile: IObjectFile;
    readonly ObjectVersion: IObjectVersionAndProperties;
}

interface IObjectFileComparer {
    Compare(FileLeft: IObjectFile, FileRight: IObjectFile): number;
}

interface IObjectFiles {
    readonly Count: number;
    GetObjectFileByNameForFileSystem(NameForFileSystem: string): IObjectFile;
    GetObjectFileIndexByNameForFileSystem(NameForFileSystem: string): number;
    Item(Index: number): IObjectFile;
    Sort(ObjectFileComparer: IObjectFileComparer): void;
    ToJSON(): string;
}

interface IObjectSearchResults {
    readonly Count: number;
    readonly MoreResults: boolean;
    Clone(): IObjectSearchResults;
    GetAsObjectVersions(): IObjectVersions;
    GetScoreOfObject(ObjVer: IObjVer): number;
    Item(Index: number): IObjectVersion;
    ScoreAt(Index: number): number;
    Sort(ObjectComparer: IObjectComparer): void;
    SortByScore(Ascending: boolean): void;
}

interface IObjectTemplateSelector {
    readonly ClassSelector: IMetadataCardControl;
    readonly Events: IEvents;
    GetObjectTypeIconURL(): string;
    GetObjectTypeId(): number;
    GetObjectTypeName(): string;
    GetTemplateItems(): any;
    SelectItem(itemID: string): void;
}

interface IObjectTemplateSelectorItem {
    GetClassID(): number;
    GetClassName(): string;
    GetGroupID(): number;
    GetGroupName(): string;
    GetIconURL(): string;
    GetID(): string;
    GetName(): string;
    GetTemplateID(): number;
    IsBlankItem(): boolean;
    IsDefaultTemplateForClass(): boolean;
}

interface IObjectType {
    AccessControlList: IAccessControlList;
    AllowAdding: boolean;
    AllowedAsGroupingLevel: boolean;
    CanHaveFiles: boolean;
    DefaultAccessControlList: IAccessControlList;
    DefaultPropertyDef: number;
    External: boolean;
    readonly GUID: string;
    HasOwnerType: boolean;
    Hierarchical: boolean;
    Icon: ReadonlyArray<number>;
    ID: number;
    NamePlural: string;
    NameSingular: string;
    ObjectTypeTargetsForBrowsing: IObjectTypeTargetsForBrowsing;
    OwnerPropertyDef: number;
    OwnerType: number;
    readonly ReadOnlyPropertiesDuringInsert: IIDs;
    readonly ReadOnlyPropertiesDuringUpdate: IIDs;
    RealObjectType: boolean;
    ShowCreationCommandInTaskPane: boolean;
    Translatable: boolean;
    CanHaveItemIcons(): boolean;
    Clone(): IObjectType;
    GetIconAsPNG(Width: number, Height: number): ReadonlyArray<number>;
    IsAddingAllowedForUser(SessionInfo: ISessionInfo): boolean;
}

interface IObjectTypeAdmin {
    ColumnMappings: IObjectTypeColumnMappings;
    ConnectionString: string;
    DefaultForAutomaticPermissions: IAutomaticPermissions;
    DeleteStatement: string;
    InsertIntoStatement: string;
    NamedValueNamespaces: INamedValueNamespaces;
    ObjectType: IObjectType;
    SelectExtIDStatement: string;
    SelectStatement: string;
    SelectStatementOneRecord: string;
    SemanticAliases: ISemanticAliases;
    Translatable: boolean;
    UpdateStatement: string;
    Clone(): IObjectTypeAdmin;
}

interface IObjectTypeColumnMapping {
    ObjectType: MFiles.MFBuiltInObjectType | number;
    Ordinal: number;
    PartOfInsert: boolean;
    PartOfUpdate: boolean;
    SourceField: string;
    TargetPropertyDef: number;
    Type: number;
    Clone(): IObjectTypeColumnMapping;
}

interface IObjectTypeColumnMappings {
    readonly Count: number;
    Add(Index: number, ObjectTypeColumnMapping: IObjectTypeColumnMapping): void;
    Clone(): IObjectTypeColumnMappings;
    Item(Index: number): IObjectTypeColumnMapping;
    Remove(Index: number): void;
}

interface IObjectTypes {
    readonly Count: number;
    Clone(): IObjectTypes;
    Item(Index: number): IObjectType;
}

interface IObjectTypesAdmin {
    readonly Count: number;
    Item(Index: number): IObjectTypeAdmin;
}

interface IObjectTypeTargetForBrowsing {
    TargetObjectType: number;
    ViewCollection: number;
    Clone(): IObjectTypeTargetForBrowsing;
}

interface IObjectTypeTargetsForBrowsing {
    readonly Count: number;
    Add(Index: number, ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing): void;
    Clone(): IObjectTypeTargetsForBrowsing;
    Item(Index: number): IObjectTypeTargetForBrowsing;
    Remove(Index: number): void;
}

interface IObjectVersion {
    readonly AccessedByMeUtc: Date;
    readonly CheckedOutAtUtc: Date;
    readonly CheckedOutTo: number;
    readonly CheckedOutToHostName: string;
    readonly CheckedOutToUserName: string;
    readonly CheckedOutVersion: number;
    readonly Class: MFiles.MFBuiltInDocumentClass | MFiles.MFBuiltInObjectClass | number;
    readonly CreatedUtc: Date;
    readonly Deleted: boolean;
    readonly DisplayID: string;
    readonly DisplayIDAvailable: boolean;
    readonly Files: IObjectFiles;
    readonly FilesCount: number;
    readonly HasAssignments: boolean;
    readonly HasSharedFiles: boolean;
    readonly IsAccessedByMeValid: boolean;
    readonly IsObjectConflict: boolean;
    readonly IsObjectShortcut: boolean;
    readonly LastModifiedUtc: Date;
    readonly LatestCheckedInVersion: number;
    readonly LatestCheckedInVersionOrCheckedOutVersion: boolean;
    readonly ObjectCheckedOut: boolean;
    readonly ObjectCheckedOutToThisUserOnAnyComputer: boolean;
    readonly ObjectCheckedOutToThisUserOnThisComputer: boolean;
    readonly ObjectFlags: MFiles.MFSpecialObjectFlag;
    readonly ObjectGUID: string;
    readonly ObjectVersionFlags: MFiles.MFObjectVersionFlag;
    readonly ObjVer: IObjVer;
    readonly OriginalObjID: IObjID;
    readonly OriginalVaultGUID: string;
    readonly SingleFile: boolean;
    readonly ThisVersionCheckedOut: boolean;
    readonly ThisVersionLatestToThisUser: boolean;
    readonly Title: string;
    readonly VersionGUID: string;
    readonly VisibleAfterOperation: boolean;
    Clone(): IObjectVersion;
    GetNameForFileSystem(IncludeID: boolean): string;
    GetNameForFileSystemEx(IncludeID: boolean, UseOriginalID: boolean): string;
}

interface IObjectVersionAndProperties {
    readonly ObjVer: IObjVer;
    readonly Properties: IPropertyValues;
    readonly Vault: IVault;
    readonly VersionData: IObjectVersion;
    Clone(): IObjectVersionAndProperties;
}

interface IObjectVersionAndPropertiesOfMultipleObjects {
    readonly Count: number;
    Add(Index: number, ObjectVersionAndProperties: IObjectVersionAndProperties): void;
    Clone(): IObjectVersionAndPropertiesOfMultipleObjects;
    Item(Index: number): IObjectVersionAndProperties;
    Remove(Index: number): void;
}

interface IObjectVersionPermissions {
    readonly AccessControlList: IAccessControlList;
    readonly CustomACL: boolean;
    readonly NamedACL: INamedACL;
    readonly ObjVer: IObjVer;
}

interface IObjectVersions {
    readonly Count: number;
    Add(Index: number, ObjectVersionData: IObjectVersion): void;
    GetAsObjVers(): IObjVers;
    Item(Index: number): IObjectVersion;
    Item(Index: number, value: IObjectVersion): void;
    Remove(Index: number): void;
    Sort(ObjectComparer: IObjectComparer): void;
}

interface IObjectVersionWorkflowState {
    State: IPropertyValue;
    VersionComment: IPropertyValue;
    Workflow: IPropertyValue;
}

interface IObjectWindowResult {
    readonly AccessControlList: IAccessControlList;
    readonly ObjVer: IObjVer;
    readonly Properties: IPropertyValues;
    readonly Result: MFiles.MFObjectWindowResultCode;
    readonly SelectedFileClass: IFileClass;
    readonly UseAsDefaults: boolean;
    readonly Visible: boolean;
}

interface IObjID {
    ID: number;
    Type: number;
    Clone(): IObjID;
    CloneFrom(ObjID: IObjID): void;
    Serialize(): ReadonlyArray<number>;
    SetIDs(ObjType: number, ID: number): void;
    ToJSON(): string;
    Unserialize(Bytes: ReadonlyArray<number>): void;
}

interface IObjIDs {
    readonly Count: number;
    Add(Index: number, ObjID: IObjID): void;
    Item(Index: number): IObjID;
    Item(Index: number, value: IObjID): void;
    Remove(Index: number): void;
    ToJSON(): string;
}

interface IObjOrFileVer {
    FileVer: IFileVer;
    ObjVer: IObjVer;
    Clone(): IObjOrFileVer;
    IsFile(): boolean;
}

interface IObjOrFileVers {
    readonly Count: number;
    Add(Index: number, ObjOrFileVer: IObjOrFileVer): void;
    Clone(): IObjOrFileVers;
    Item(Index: number): IObjOrFileVer;
    Remove(Index: number): void;
}

interface IObjVer {
    ID: number;
    ObjID: IObjID;
    Type: number;
    Version: number;
    Clone(): IObjVer;
    CloneFrom(ObjVer: IObjVer): void;
    Serialize(): ReadonlyArray<number>;
    SetIDs(ObjType: number, ID: number, Version: number): void;
    SetObjIDAndVersion(ObjID: IObjID, Version: number): void;
    ToJSON(): string;
    Unserialize(Bytes: ReadonlyArray<number>): void;
}

interface IObjVers {
    readonly Count: number;
    Add(Index: number, ObjVer: IObjVer): void;
    Clone(): IObjVers;
    GetAllDistinctObjIDs(): IObjIDs;
    Item(Index: number): IObjVer;
    Remove(Index: number): void;
    ToJSON(): string;
}

interface IOCROptions {
    PrimaryLanguage: MFiles.MFOCRLanguage;
    SecondaryLanguage: MFiles.MFOCRLanguage;
    Clone(): IOCROptions;
}

interface IOCRPage {
    OCRZones: IOCRZones;
    PageNum: number;
    Clone(): IOCRPage;
}

interface IOCRPageResult {
    readonly OCRZoneResults: IOCRZoneResults;
    readonly PageNum: number;
}

interface IOCRPageResults {
    readonly Count: number;
    Item(Index: number): IOCRPageResult;
}

interface IOCRPages {
    readonly Count: number;
    Add(Index: number, OCRPage: IOCRPage): void;
    Clone(): IOCRPages;
    Item(Index: number): IOCRPage;
    Remove(Index: number): void;
}

interface IOCRZone {
    Barcode: boolean;
    DataType: MFiles.MFDataType;
    DimensionUnit: MFiles.MFOCRDimensionUnit;
    readonly HasOCROptions: boolean;
    Height: number;
    ID: number;
    Left: number;
    Name: string;
    OCROptions: IOCROptions;
    Top: number;
    Width: number;
    ClearOCROptions(): void;
    Clone(): IOCRZone;
    SetOCROptions(OCROptions: IOCROptions): void;
}

interface IOCRZoneResult {
    readonly Confidence: number;
    readonly DimensionUnit: MFiles.MFOCRDimensionUnit;
    readonly Height: number;
    readonly ID: number;
    readonly Left: number;
    readonly RecognizedOnPage: number;
    readonly ResultValue: ITypedValue;
    readonly Top: number;
    readonly Width: number;
}

interface IOCRZoneResults {
    readonly Count: number;
    Item(Index: number): IOCRZoneResult;
}

interface IOCRZones {
    readonly Count: number;
    Add(Index: number, OCRZone: IOCRZone): void;
    Clone(): IOCRZones;
    Item(Index: number): IOCRZone;
    Remove(Index: number): void;
}

interface IOptimizeVaultJob {
    GarbageCollectFiles: boolean;
    readonly Thorough: boolean;
    readonly VaultGUID: string;
    GetNumberOfSteps(): number;
    GetOneBasedIndexOfStep(CurrentStep: number): number;
    GetStepProgressText(CurrentStep: number): string;
    Set(GuidVault: string, Thorough: boolean): void;
}

interface IOwnerPropertyDef {
    DependencyRelation: MFiles.MFDependencyRelation;
    ID: number;
    IndexForAutomaticFilling: number;
    readonly IsRelationFiltering: boolean;
}

interface IPluginInfo {
    AssemblyName: string;
    BridgeClassName: string;
    Configuration: INamedValues;
    ConfigurationScope: string;
    ConfigurationSource: INamedValues;
    ConfigurationVaultGUID: string;
    IsDefault: boolean;
    IsScopeIndependent: boolean;
    Name: string;
    Clone(): IPluginInfo;
}

interface IPluginInfos {
    readonly Count: number;
    Add(Index: number, PluginInfo: IPluginInfo): void;
    Clone(): IPluginInfos;
    Item(Index: number): IPluginInfo;
    Item(Index: number, value: IPluginInfo): void;
    Remove(Index: number): void;
}

interface IPreviewerActiveXCtrl {
    ClearPreview(): number;
    ShowFilePreview(bstrFilename: string): number;
    ShowHitHighlightedFilePreview(
        bstrFilename: string,
        lObjType: number,
        lObjID: number,
        lObjVersion: number,
        lFile: number,
        lFileVersion: number,
        pIHitHighlightingInfo: any,
        bstrSearchConditions: string,
    ): number;
}

interface IPropertyDef {
    AccessControlList: IAccessControlList;
    AllObjectTypes: boolean;
    AllowedAsGroupingLevel: boolean;
    AutomaticValueDefinition: ITypedValue;
    AutomaticValueType: MFiles.MFAutomaticValueType;
    BasedOnValueList: boolean;
    ContentType: MFiles.MFContentType;
    DataType: MFiles.MFDataType;
    DependencyPD: number;
    DependencyRelation: MFiles.MFDependencyRelation;
    FormattingType: MFiles.MFFormattingType;
    readonly GUID: string;
    ID: number;
    Name: string;
    ObjectType: MFiles.MFBuiltInObjectType | number;
    OwnerPropertyDef: IOwnerPropertyDef;
    Predefined: boolean;
    SortAscending: boolean;
    StaticFilter: ISearchConditions;
    readonly ThisIsConflictPD: boolean;
    readonly ThisIsDefaultPD: boolean;
    readonly ThisIsOwnerPD: boolean;
    UpdateType: MFiles.MFUpdateType;
    ValidationType: MFiles.MFValidationType;
    ValueList: MFiles.MFBuiltInValueList | number;
    ValueListSortingType: MFiles.MFValueListSortingType;
    Clone(): IPropertyDef;
}

interface IPropertyDefAdmin {
    AllowAutomaticPermissions: boolean;
    AutomaticValue: IAutomaticValue;
    NamedValueNamespaces: INamedValueNamespaces;
    PropertyDef: IPropertyDef;
    SemanticAliases: ISemanticAliases;
    Validation: IValidation;
    Clone(): IPropertyDefAdmin;
}

interface IPropertyDefOrObjectType {
    ID: number;
    PropertyDef: boolean;
    Clone(): IPropertyDefOrObjectType;
    GetAsExpression(): IExpression;
}

interface IPropertyDefOrObjectTypes {
    readonly Count: number;
    Add(Index: number, PropertyDefOrObjectType: IPropertyDefOrObjectType): void;
    Clone(): IPropertyDefOrObjectTypes;
    Item(Index: number): IPropertyDefOrObjectType;
    Item(Index: number, value: IPropertyDefOrObjectType): void;
    Remove(Index: number): void;
}

interface IPropertyDefs {
    readonly Count: number;
    Clone(): IPropertyDefs;
    Item(Index: number): IPropertyDef;
}

interface IPropertyDefsAdmin {
    readonly Count: number;
    Item(Index: number): IPropertyDefAdmin;
}

interface IPropertyValue {
    PropertyDef: MFiles.MFBuiltInPropertyDef | number;
    TypedValue: ITypedValue;
    Value: ITypedValue;
    Clone(): IPropertyValue;
    CloneFrom(PropertyValue: IPropertyValue): void;
    GetValueAsLocalizedText(): string;
    GetValueAsText(
        Localized: boolean,
        NULLAsEmptyString: boolean,
        EmptyLookupDisplayValuesAsHidden: boolean,
        LongDateFormat: boolean,
        NoSeconds: boolean,
        NumericValueAsKilobytes: boolean,
    ): string;
    GetValueAsUnlocalizedText(): string;
}

interface IPropertyValueForDisplay {
    readonly ContentType: MFiles.MFContentType;
    readonly DataType: MFiles.MFDataType;
    readonly DisplayValue: string;
    readonly PropertyDef: MFiles.MFBuiltInPropertyDef | number;
    readonly PropertyDefName: string;
    readonly PropertyValue: IPropertyValue;
    readonly ReadOnly: boolean;
    Clone(): IPropertyValueForDisplay;
}

interface IPropertyValueIconClue {
    readonly PropertyDef: MFiles.MFBuiltInPropertyDef | number;
    readonly ValueListItem: number;
    Clone(): IPropertyValueIconClue;
}

interface IPropertyValueIconClues {
    readonly Count: number;
    Clone(): IPropertyValueIconClues;
    Item(Index: number): IPropertyValueIconClue;
}

interface IPropertyValues {
    readonly Count: number;
    Add(Index: number, PropertyValue: IPropertyValue): void;
    Clone(): IPropertyValues;
    CloneFrom(PropertyValues: IPropertyValues): void;
    IndexOf(PropertyDef: MFiles.MFBuiltInPropertyDef | number): number;
    IndexOfByAlias(Vault: IVault, PropertyDefAlias: string): number;
    Item(Index: number): IPropertyValue;
    Item(Index: number, value: IPropertyValue): void;
    Remove(Index: number): void;
    SearchForProperty(PropertyDef: MFiles.MFBuiltInPropertyDef | number): IPropertyValue;
    SearchForPropertyByAlias(Vault: IVault, PropertyDefAlias: string, ReturnNULLIfNotFound: boolean): IPropertyValue;
    SearchForPropertyEx(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        ReturnNULLIfNotFound: boolean,
    ): IPropertyValue;
}

interface IPropertyValuesForDisplay {
    readonly Count: number;
    Item(Index: number): IPropertyValueForDisplay;
}

interface IPropertyValuesOfMultipleObjects {
    readonly Count: number;
    Clone(): IPropertyValuesOfMultipleObjects;
    Item(Index: number): IPropertyValues;
}

interface IPropertyValueSuggestion {
    readonly IsFact: boolean;
    readonly Quality: number;
    readonly TypedValue: ITypedValue;
    Clone(): IPropertyValueSuggestion;
}

interface IPropertyValueSuggestions {
    readonly Count: number;
    Add(Index: number, IPropertyValueSuggestion: IPropertyValueSuggestion): void;
    Clone(): IPropertyValueSuggestions;
    Item(Index: number): IPropertyValueSuggestion;
    Item(Index: number, value: IPropertyValueSuggestion): void;
    Remove(Index: number): void;
}

interface IPropertyValuesWithIconClues {
    readonly IconClues: IPropertyValueIconClues;
    readonly ObjVer: IObjVer;
    readonly PropertyValues: IPropertyValues;
    Clone(): IPropertyValuesWithIconClues;
}

interface IPropertyValuesWithIconCluesOfMultipleObjects {
    readonly Count: number;
    Clone(): IPropertyValuesWithIconCluesOfMultipleObjects;
    Item(Index: number): IPropertyValuesWithIconClues;
}

interface IReportAccessCredentials {
    readonly Domain: string;
    readonly ExtAccount: boolean;
    readonly Password: string;
    readonly UserName: string;
}

interface IRestoreJob {
    BackupFileDifferential: string;
    BackupFileFull: string;
    Impersonation: IImpersonation;
    OverwriteExistingFiles: boolean;
    VaultProperties: IVaultProperties;
}

interface IScheduledJob {
    readonly BackupVaultJob: IBackupJob;
    Enabled: boolean;
    readonly ExportContentJob: IExportContentJob;
    ID: number;
    readonly ImportContentJob: IImportContentJob;
    JobName: string;
    JobType: MFiles.MFScheduledJobType;
    readonly OptimizeVaultJob: IOptimizeVaultJob;
    Temporary: boolean;
    Triggers: IScheduledJobTriggers;
    SetBackupVaultJob(BackupVaultJob: IBackupJob): void;
    SetExportContentJob(ExportContentJob: IExportContentJob): void;
    SetImportContentJob(ImportContentJob: IImportContentJob): void;
    SetOptimizeVaultJob(OptimizeVaultJob: IOptimizeVaultJob): void;
}

interface IScheduledJobOutputInfo {
    ID: number;
    JobType: MFiles.MFScheduledJobType;
    Message: string;
}

interface IScheduledJobRunInfo {
    readonly Cancelled: boolean;
    readonly CurrentStep: number;
    readonly LastRun: ITimestamp;
    readonly LastRunErrors: string;
    readonly LastRunSucceeded: boolean;
    readonly NextRun: ITimestamp;
    readonly Running: boolean;
    readonly ScheduledJobOutputInfo: IScheduledJobOutputInfo;
    readonly StepCompletionPercent: number;
}

interface IScheduledJobs {
    readonly Count: number;
    Item(Index: number): IScheduledJob;
}

interface IScheduledJobTrigger {
    BeginDay: number;
    BeginMonth: number;
    BeginYear: number;
    EndDay: number;
    EndMonth: number;
    EndYear: number;
    StartHour: number;
    StartMinute: number;
    Type: ITriggerType;
    ValidEndDate: boolean;
    Clone(): IScheduledJobTrigger;
}

interface IScheduledJobTriggers {
    readonly Count: number;
    Add(Index: number, ScheduledJobTrigger: IScheduledJobTrigger): void;
    Clone(): IScheduledJobTriggers;
    Item(Index: number): IScheduledJobTrigger;
    Remove(Index: number): void;
}

interface ISearchCondition {
    ConditionType: MFiles.MFConditionType;
    Expression: IExpression;
    TypedValue: ITypedValue;
    Clone(): ISearchCondition;
    Set(Expression: IExpression, ConditionType: MFiles.MFConditionType, TypedValue: ITypedValue): void;
}

interface ISearchConditionEx {
    Enabled: boolean;
    Ignored: boolean;
    SearchCondition: ISearchCondition;
    SpecialNULL: boolean;
    Clone(): ISearchConditionEx;
    Set(SearchCondition: ISearchCondition, Enabled: boolean, SpecialNULL: boolean, Ignored: boolean): void;
}

interface ISearchConditionExs {
    readonly Count: number;
    Add(Index: number, SearchConditionEx: ISearchConditionEx): void;
    Clone(): ISearchConditionExs;
    Item(Index: number): ISearchConditionEx;
    Item(Index: number, value: ISearchConditionEx): void;
    Remove(Index: number): void;
}

interface ISearchConditions {
    readonly Count: number;
    Add(Index: number, SearchCondition: ISearchCondition): void;
    AppendFromExportedSearchString(ExportedSearchString: string): void;
    Clone(): ISearchConditions;
    GetAsExportedSearchString(SearchFlags: MFiles.MFSearchFlags): string;
    Item(Index: number): ISearchCondition;
    Item(Index: number, value: ISearchCondition): void;
    Remove(Index: number): void;
}

interface ISearchCriteria {
    AdditionalConditions: ISearchConditionExs;
    ExpandUI: boolean;
    FacetFilterAsJSON: string;
    FacetFilterStatusFlags: MFiles.MFFacetFilterStatusFlags;
    FirstCondition: ISearchConditionEx;
    FullTextSearchFlags: MFiles.MFFullTextSearchFlags;
    FullTextSearchString: string;
    ObjectTypeCondition: ISearchConditionEx;
    PredefinedSearchFilter: MFiles.MFPredefinedSearchFilterType;
    PreviousBaseConditions: ISearchConditions;
    SearchFlags: MFiles.MFSearchFlags;
    SearchRefinement: ISearchConditions;
    SearchWithinThisFolder: boolean;
    SecondCondition: ISearchConditionEx;
    Clone(): ISearchCriteria;
    GetAsSearchConditions(
        ForceGettingExpandedConds: boolean,
        IncludeSearchRefinementConditions: boolean,
        IncludePreviousBaseConditions: boolean,
    ): ISearchConditions;
}

interface ISearchDef {
    Conditions: ISearchConditions;
    Levels: IExpressionExs;
    LookInAllVersions: boolean;
    ReturnLatestVisibleVersion: boolean;
    SearchFlags: MFiles.MFSearchFlags;
    Clone(): ISearchDef;
    IsIndirectionUsed(): boolean;
}

interface ISearchPane {
    readonly Available: boolean;
    readonly Events: ISearchPaneEvents;
    Visible: boolean;
    SetTheme(theme: ITheme): void;
}

interface ISearchPaneEvents extends IEvents {
    OnHidePane?(): void;
    OnShowPane?(): void;
    OnStarted?(): void;
    OnStop?(): void;
}

interface ISemanticAliases {
    Value: string;
    Clone(): ISemanticAliases;
}

interface IServerDataPushSink {
    OnServerDataPush(RequestID: number, JsonDataContent: string): void;
}

interface IServerLicenseManagementOperations {
    GetLicenseStatus(): ILicenseStatus;
    SetLicenseCodeAndSerialNumber(SerialNumber: string, LicenseCode: string): void;
}

interface IServerLoginAccountOperations {
    AddLoginAccount(LoginAccount: ILoginAccount, Password: string): void;
    ForceLogout(AccountNames: IStrings): void;
    GetLoginAccount(AccountName: string): ILoginAccount;
    GetLoginAccounts(): ILoginAccounts;
    GetLoginAccountsWithSessions(): ILoginAccounts;
    GetPersonalInformationFromDomain(AccountName: string): ILoginAccountPersonalInformation;
    ModifyLoginAccount(LoginAccount: ILoginAccount): void;
    RemoveLoginAccount(AccountName: string): void;
    UpdateLoginPassword(AccountName: string, NewPassword: string): void;
}

interface IServerManagementOperations {
    BackupMasterDB(
        BackupFile: string,
        OverwriteExistingFiles: boolean,
        FileSizeLimitInMB: number,
        Impersonation: IImpersonation,
    ): void;
    ConfigureWebAccessToDefaultWebSite(): void;
    ConfigureWebAccessToExistingWebSite(WebSite: string): void;
    ConfigureWebAccessToNewVirtualDirectory(WebSite: string, VirtualDirectory: string): void;
    ConfigureWebAccessToNewWebSite(WebSite: string, Port: string): void;
    GetEventHandlers(): IEventHandlers;
    RestoreMasterDB(BackupFile: string, Impersonation: IImpersonation): void;
    SetEventHandlers(EventHandlers: IEventHandlers): void;
}

interface IServerScheduledJobManagementOperations {
    AddScheduledJob(ScheduledJob: IScheduledJob): number;
    CancelScheduledJob(ID: number): void;
    GetScheduledJob(ID: number): IScheduledJob;
    GetScheduledJobRunInfo(ID: number): IScheduledJobRunInfo;
    GetScheduledJobs(): IScheduledJobs;
    ModifyScheduledJob(ScheduledJob: IScheduledJob): void;
    RemoveScheduledJob(ID: number): void;
    StartScheduledJob(ID: number): void;
}

interface IServerVaultManagementOperations {
    AttachVault(VaultProperties: IVaultProperties, UpdateAttachmentGUID: boolean): IVaultProperties;
    AttachVaultWithOptions(VaultProperties: IVaultProperties, Options: IAttachVaultOptions): IVaultProperties;
    BackupVault(BackupJob: IBackupJob): void;
    BringVaultOnline(VaultGUID: string): void;
    CopyVault(CopyVaultJob: ICopyVaultJob): ICopyVaultJobOutputInfo;
    CreateNewVault(VaultProperties: IVaultProperties): string;
    DestroyVault(VaultGUID: string): void;
    DetachVault(VaultGUID: string): void;
    GetBackupFileContents(
        BackupFileFull: string,
        BackupFileDifferential: string,
        Impersonation: IImpersonation,
    ): IVaultProperties;
    GetVaultProperties(VaultGUID: string): IVaultProperties;
    OptimizeVault(OptimizeVaultJob: IOptimizeVaultJob): void;
    RestoreVault(RestoreJob: IRestoreJob): void;
    TakeVaultOffline(VaultGUID: string, DisconnectUsers: boolean): void;
}

interface ISessionInfo {
    readonly AccountName: string;
    readonly ACLMode: MFiles.MFACLMode;
    readonly AuthenticationType: MFiles.MFAuthType;
    readonly CanCreateObjects: boolean;
    readonly CanForceUndoCheckout: boolean;
    readonly CanManageCommonUISettings: boolean;
    readonly CanManageCommonViews: boolean;
    readonly CanManageTraditionalFolders: boolean;
    readonly CanMaterializeViews: boolean;
    readonly CanSeeAllObjects: boolean;
    readonly CanSeeDeletedObjects: boolean;
    readonly ClientCulture: string;
    readonly InternalUser: boolean;
    readonly IsSharingPublicLinksAllowed: boolean;
    readonly IsSharingPublicLinksToLatestVersionAllowed: boolean;
    readonly KeepAliveIntervalInSeconds: number;
    readonly Language: number;
    readonly LicenseAllowsModifications: boolean;
    readonly LocalComputerName: string;
    readonly ProductMode: MFiles.MFProductMode;
    readonly ServerVersion: number;
    readonly TimeZoneInfo: ITimeZoneInformation;
    readonly UserAndGroupMemberships: IUserOrUserGroupIDs;
    readonly UserAndSubstitutedByMe: IUserOrUserGroupIDs;
    readonly UserID: number;
    readonly VaultGUID: string;
    CheckObjectAccess(ObjectAccessControlList: IAccessControlList, DesiredObjectAccess: MFiles.MFObjectAccess): boolean;
    CheckObjectTypeAccess(
        ObjectTypeAccessControlList: IAccessControlList,
        DesiredObjectTypeAccess: MFiles.MFObjectTypeAccess,
    ): boolean;
    CheckPropertyDefAccess(
        PropertyDefAccessControlList: IAccessControlList,
        DesiredPropertyDefAccess: MFiles.MFPropertyDefAccess,
    ): boolean;
    CheckVaultAccess(DesiredVaultAccess: MFiles.MFVaultAccess): boolean;
    CloneFrom(SessionInfo: ISessionInfo): void;
    IsLoggedOnUserSubstituteOfUser(UserID: number): boolean;
}

interface ISetPropertiesParams {
    AccessControlListEnforcingMode: MFiles.MFACLEnforcingMode;
    AccessControlListProvidedForEnforcing: IAccessControlList;
    AllowModifyingCheckedInObject: boolean;
    FailIfNotLatestCheckedInVersion: boolean;
    FullSet: boolean;
    ObjVer: IObjVer;
    PropertyValuesToRemove: IIDs;
    PropertyValuesToSet: IPropertyValues;
    Clone(): ISetPropertiesParams;
    SetWithPermissions(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        FailIfNotLatestCheckedInVersion: boolean,
        PropertyValuesToSet: IPropertyValues,
        FullSet: boolean,
        PropertyValuesToRemove: IIDs,
        ObjectOperationFlags: MFiles.MFObjectOperationFlags,
        AccessControlListEnforcingMode: MFiles.MFACLEnforcingMode,
        AccessControlListProvidedForEnforcing: IAccessControlList,
    ): void;
}

interface ISetPropertiesParamsOfMultipleObjects {
    readonly Count: number;
    Add(Index: number, SetPropertiesParams: ISetPropertiesParams): void;
    Clone(): ISetPropertiesParamsOfMultipleObjects;
    Item(Index: number): ISetPropertiesParams;
    Remove(Index: number): void;
}

interface ISharedFileInfo {
    readonly ChangeTimeUtc: Date;
    readonly Extension: string;
    readonly LogicalSize: number;
    readonly LogicalSize_32bit: number;
    readonly Title: string;
    Clone(): ISharedFileInfo;
}

interface ISharedLinkInfo {
    readonly AccessKey: string;
    readonly CreatedByUser: number;
    readonly CreationTime: ITimestamp;
    Description: string;
    ExpirationTime: ITimestamp;
    FileVer: IFileVer;
    ObjVer: IObjVer;
    Clone(): ISharedLinkInfo;
    Set(ObjVer: IObjVer, FileVer: IFileVer): void;
}

interface ISharedLinkInfos {
    readonly Count: number;
    Add(Index: number, SharedLink: ISharedLinkInfo): void;
    Clone(): ISharedLinkInfos;
    Item(Index: number): ISharedLinkInfo;
    Item(Index: number, value: ISharedLinkInfo): void;
    Remove(Index: number): void;
}

interface ISharedLinkPublicOperations {
    DownloadSharedFileInBlocks_Begin(
        VaultGUID: string,
        AccessKey: string,
        AdditionalData: INamedValues,
    ): IFileDownloadSession;
    DownloadSharedFileInBlocks_Begin_32bit(
        VaultGUID: string,
        AccessKey: string,
        AdditionalData: INamedValues,
    ): IFileDownloadSession;
    DownloadSharedFileInBlocks_ReadBlock(
        VaultGUID: string,
        AccessKey: string,
        DownloadID: number,
        BlockSize: number,
        Offset: number,
    ): ReadonlyArray<number>;
    DownloadSharedFileInBlocks_ReadBlock_32bit(
        VaultGUID: string,
        AccessKey: string,
        DownloadID: number,
        BlockSize: number,
        Offset: number,
    ): ReadonlyArray<number>;
    GetSharedLinkInfo(VaultGUID: string, AccessKey: string, AdditionalData: INamedValues): ISharedFileInfo;
}

interface IShellFrame {
    readonly ActiveListing: IShellListing;
    readonly BottomPane: IShellPaneContainer;
    readonly Commands: ICommands;
    readonly CurrentFolder: IFolderDefs;
    readonly CurrentObjectVersion: IObjectVersion;
    CurrentPath: string;
    readonly Events: IShellFrameEvents;
    readonly Listing: IShellListing;
    readonly OuterWindow: IWindow;
    readonly ParentFolder: IFolderDefs;
    readonly RightPane: IShellPaneContainer;
    readonly SearchPane: ISearchPane;
    readonly ShellUI: IShellUI;
    readonly TaskPane: ITaskPane;
    readonly UseCompactLayout: boolean;
    CreateAdditionalListingForPath(path: string): IShellListing;
    CreateAdditionalListingForView(viewID: MFiles.MFBuiltInView | number): IShellListing;
    GetListing(listingIndex: number): IShellListing;
    IsFolderLocation(): boolean;
    IsObjectLocation(): boolean;
    NavigateToParent(): void;
    SetTheme(theme: ITheme): void;
    ShowDashboard(dashboardID: string, data: any): void;
    ShowDefaultContent(): void;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void;
    ShowPopupSSRSReport(reportWindowTitle: string, reportURL: string): void;
    ShowSSRSReport(reportURL: string): void;
}

interface IShellFrameEvent extends IEvents {
    OnActiveListingChanged?(oldListing: null | IShellListing, newListing: IShellListing): void;
    OnNewBottomPane?(bottomPane: IShellPaneContainer): void | IShellPaneContainerEvents;
    OnNewCommands?(commands: ICommands): void | ICommandsEvents;
    OnNewRightPane?(rightPane: IShellPaneContainer): void | IShellPaneContainerEvents;
    OnNewSearchPane?(searchPane: ISearchPane): void | ISearchPaneEvents;
    OnNewShellListing?(shellListing: IShellListing): void | IShellListingEvents;
    OnNewTaskPane?(taskPane: ITaskPane): void | ITaskPaneEvents;
    OnShowMainMenu?(): void;
    OnStarted?(): void;
    OnStop?(): void;
}

interface IShellFrameEvents extends IEvents {
    OnActiveListingChanged?(oldListing: null | IShellListing, newListing: IShellListing): void;
    OnNewBottomPane?(bottomPane: IShellPaneContainer): void | IShellPaneContainerEvents;
    OnNewCommands?(commands: ICommands): void | ICommandsEvents;
    OnNewRightPane?(rightPane: IShellPaneContainer): void | IShellPaneContainerEvents;
    OnNewSearchPane?(searchPane: ISearchPane): void | ISearchPaneEvents;
    OnNewShellListing?(shellListing: IShellListing): void | IShellListingEvents;
    OnNewTaskPane?(taskPane: ITaskPane): void | ITaskPaneEvents;
    OnShowMainMenu?(): void;
    OnStarted?(): void;
    OnStop?(): void;
}

interface IShellItems {
    readonly Count: number;
    readonly Folders: IFolderDefs;
    readonly ObjectFiles: IObjectFileAndObjVerOfMultipleFiles;
    readonly ObjectVersions: IObjectVersions;
    readonly ObjectVersionsAndProperties: IObjectVersionAndPropertiesOfMultipleObjects;
    GetObjectVersionsCount(): number;
}

interface IShellListing {
    AutoFitAllColumns: boolean;
    AutoFitFirstColumn: boolean;
    ColumnHeadersVisible: boolean;
    readonly CurrentPath: string;
    readonly CurrentSelection: IShellItems;
    readonly Events: IShellListingEvents;
    GroupObjectsByObjectType: boolean;
    GroupViewsAndFolders: boolean;
    readonly IsActive: boolean;
    readonly Items: IShellItems;
    readonly SumOfResultCounts: number;
    ActivateListing(): void;
    ActivateSelected(): void;
    RefreshListing(smartUpdate: boolean, refreshFromServer: boolean, forceFullRefreshFromServer: boolean): void;
    RefreshListingAsync(): void;
    RefreshObject(objID: IObjID, refreshFromServer: boolean, updateRelatedObjects: boolean): void;
    RefreshSelectedObjects(refreshFromServer: boolean, updateRelatedObjects: boolean): void;
    SelectFolder(folderDef: IFolderDef): void;
    SelectNextFolder(folderDefType: MFiles.MFFolderDefType): boolean;
    SelectNextObject(): boolean;
    SelectNextObjectFile(allowMoveToNextObject: boolean): boolean;
    SelectObjectFile(objVer: IObjVer, fileVer: IFileVer): void;
    SelectObjectOrObjectFileVersion(objOrFileVer: IObjOrFileVer): void;
    SelectObjectVersion(objVer: IObjVer): void;
    SelectPrevFolder(folderDefType: MFiles.MFFolderDefType): boolean;
    SelectPrevObject(): boolean;
    SelectPrevObjectFile(allowMoveToPrevObject: boolean): boolean;
    SetFolderSelectionStates(folderDefs: IFolderDefs, select: boolean): void;
    SetObjectOrObjectFileVersionSelectionStates(objOrFileVers: IObjOrFileVers, select: boolean): void;
    SetObjectVersionSelectionStates(objVers: IObjVers, select: boolean): void;
    SetTheme(theme: ITheme): void;
    SetVirtualSelection(objOrFileVers: IObjOrFileVers): void;
    UnselectAll(): void;
}

interface IShellListingEvents extends IEvents {
    OnContentChanged?(items: IShellItems): void;
    OnListingActivated?(oldListing: null | IShellListing): void;
    OnListingDeactivated?(newListing: null | IShellListing): void;
    OnSelectedItemsChanged?(selectedItems: IShellItems): void;
    OnSelectionChanged?(selectedItems: IShellItems): void;
    OnShowContextMenu?(selectedItems: IShellItems): void;
    OnShowMainMenu?(selectedItems: IShellItems): void;
    OnStarted?(): void;
    OnStop?(): void;
}

interface IShellPaneContainer {
    readonly Content: any;
    readonly Events: IShellPaneContainerEvents;
    readonly IsFocused: boolean;
    Minimized: boolean;
    readonly ShellFrame: IShellFrame;
    Size: number;
    readonly TabTitleSize: number;
    Visible: boolean;
    AddTab(TabId: string, tabTitle: string, insertBeforeTabId: string): IShellPaneTab;
    Focus(): void;
    GetSelectedTab(): IShellPaneTab;
    GetTab(TabId: string): IShellPaneTab;
    SetDefaultSize(defaultSize: number, resizeToDefault: boolean): void;
    SetDefaultVisibility(Visible: boolean, resetToDefault: boolean): void;
}

interface IShellPaneContainerEvents extends IEvents {
    OnHidePane?(): void;
    OnMinimizedStateChanged?(): void;
    OnNewTab?(tab: IShellPaneTab): void;
    OnPaneResized?(): void;
    OnShowPane?(): void;
    OnStarted?(): void;
    OnStop?(): void;
    OnTabSelected?(): void;
    OnTabUnselected?(): void;
}

interface IShellPaneTab {
    readonly Events: IShellPaneTabEvents;
    readonly IsBuiltIn: boolean;
    readonly Selected: boolean;
    readonly TabId: string;
    Title: string;
    Visible: boolean;
    Remove(): void;
    Select(): void;
    ShowDashboard(dashboardID: string, data: any): void;
    ShowEmptyContent(): void;
    ShowFilePreview(file: string): void;
    ShowObjectVersionProperties(propertyValuesWithIcons: IPropertyValuesWithIconClues): void;
    ShowPersistentContent(sessionHandle: number): void;
    ShowSSRSReport(reportURL: string): void;
    Unselect(): void;
}

interface IShellPaneTabEvents extends IEvents {
    OnHideTab?(): void;
    OnShowTab?(): void;
    OnStarted?(): void;
    OnStop?(): void;
    OnTabSelected?(): void;
    OnTabUnselected?(): void;
}

interface IShellUI {
    readonly Events: IShellUIEvents;
    readonly ServerVault: IVault;
    readonly Vault: IVault;
    readonly Window: IWindow;
    CreatePersistentBrowserContent(url: string, parameters: any): number;
    DestroyPersistentContent(sessionHandle: number): void;
    GetObjectTypeIconURL(objtype: number): string;
    NotifyVaultEntry(ID: string, data1: any, data2: any): any;
    SetPersistentBrowserContent(url: string, sessionHandle: number): void;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void;
}

interface IShellUIEvents extends IEvents {
    OnNewCommonDialogShellFrame?(shellFrame: IShellFrame): void | IShellFrameEvents;
    OnNewEmbeddedShellFrame?(shellFrame: IShellFrame): void | IShellFrameEvents;
    OnNewNormalShellFrame?(shellFrame: IShellFrame): void | IShellFrameEvents;
    OnNewShellFrame?(shellFrame: IShellFrame): void | IShellFrameEvents;
    OnStarted?(): void;
    OnStop?(): void;
}

interface IShortcutMappingInfo {
    ObjectTypeGUID: string;
    ObjectTypeID: number;
    ObjectTypeName: string;
    ObjectTypeSemanticAliases: ISemanticAliases;
}

interface ISignaturePromptInfo {
    Meaning: string;
    Reason: string;
    Clone(): ISignaturePromptInfo;
}

interface ISignaturePromptInfoMetadataBased {
    IsReferencedBySignatureObject: boolean;
    MeaningPropertyID: number;
    PromptInfoLookupPropertyID: number;
    ReasonPropertyID: number;
    Clone(): ISignaturePromptInfoMetadataBased;
}

interface ISignaturePromptInfos {
    readonly Count: number;
    Add(Index: number, SignaturePromptInfo: ISignaturePromptInfo): void;
    Clone(): ISignaturePromptInfos;
    Item(Index: number): ISignaturePromptInfo;
    Item(Index: number, value: ISignaturePromptInfo): void;
    Remove(Index: number): void;
}

interface ISignaturePromptInfoSelectable {
    PromptInfos: ISignaturePromptInfos;
    Clone(): ISignaturePromptInfoSelectable;
}

interface ISignatureSettings {
    AdditionalInfo: string;
    FreeFormTextPropertyID: number;
    IsFreeFormTextPrompted: boolean;
    IsRequired: boolean;
    IsSeparateSignatureObject: boolean;
    ManifestationPropertyID: number;
    readonly PromptInfoType: MFiles.MFSignaturePromptInfoType;
    SignatureIdentifier: string;
    SignaturePromptInfoFixed: ISignaturePromptInfo;
    SignaturePromptInfoMetadataBased: ISignaturePromptInfoMetadataBased;
    SignaturePromptInfoSelectable: ISignaturePromptInfoSelectable;
    Clone(): ISignatureSettings;
}

interface ISourceObjectFile {
    Extension: string;
    SourceFilePath: string;
    Title: string;
    Clone(): ISourceObjectFile;
}

interface ISourceObjectFiles {
    readonly Count: number;
    Add(Index: number, SourceObjectFile: ISourceObjectFile): void;
    AddEmptyFile(Title: string, Extension: string): ISourceObjectFile;
    AddFile(Title: string, Extension: string, SourcePath: string): ISourceObjectFile;
    Item(Index: number): ISourceObjectFile;
    Remove(Index: number): void;
}

interface ISQLDatabase {
    AdminUser: IImpersonation;
    BasicUser: IImpersonation;
    Engine: MFiles.MFDBEngine;
    Name: string;
    Server: string;
    Clone(): ISQLDatabase;
}

interface IState {
    readonly ID: number;
    Name: string;
    Selectable: boolean;
    SelectableFlagAffectedByPseudoUsers: boolean;
    GetAsLookup(): ILookup;
    GetAsTypedValue(): ITypedValue;
}

interface IStateAdmin {
    ActionAssignToUser: boolean;
    ActionAssignToUserDefinition: IActionCreateAssignment;
    ActionConvertToPDF: boolean;
    ActionConvertToPDFDefinition: IActionConvertToPDF;
    ActionCreateSeparateAssignment: boolean;
    ActionDefinitions: IActionDefinitions;
    ActionDelete: boolean;
    ActionMarkForArchiving: boolean;
    ActionRunVBScript: boolean;
    ActionRunVBScriptDefinition: string;
    ActionSendNotification: boolean;
    ActionSendNotificationDefinition: IActionSendNotification;
    ActionSetPermissions: boolean;
    ActionSetPermissionsDetailedDefinition: IActionSetPermissions;
    ActionSetProperties: boolean;
    ActionSetPropertiesDefinition: IActionSetProperties;
    CheckInOutPermissions: boolean;
    Description: string;
    ID: number;
    InOutPermissions: IAccessControlList;
    Name: string;
    Postconditions: IStateConditions;
    Preconditions: IStateConditions;
    SemanticAliases: ISemanticAliases;
    TransitionsRequireEditAccessToObject: boolean;
    Clone(): IStateAdmin;
}

interface IStateConditions {
    PropertyConditions: boolean;
    PropertyConditionsDefinition: ISearchConditions;
    VBScript: boolean;
    VBScriptDefinition: string;
    Clone(): IStateConditions;
}

interface IStates {
    readonly Count: number;
    Item(Index: number): IState;
}

interface IStatesAdmin {
    readonly Count: number;
    Add(Index: number, StateAdmin: IStateAdmin): void;
    Item(Index: number): IStateAdmin;
    Remove(Index: number): void;
}

interface IStateTransition {
    AccessControlList: IAccessControlList;
    Description: string;
    EvaluationOrderNumber: number;
    FromState: number;
    ID: number;
    Name: string;
    SemanticAliases: ISemanticAliases;
    SignatureSettings: ISignatureSettings;
    ToState: number;
    TriggerAllowedByVBScript: string;
    TriggerCriteria: ISearchConditions;
    TriggerInDays: number;
    TriggerMode: MFiles.MFAutoStateTransitionMode;
    Clone(): IStateTransition;
}

interface IStateTransitionForClient {
    FromState: number;
    readonly ID: number;
    Name: string;
    Selectable: boolean;
    SelectableFlagAffectedByPseudoUsers: boolean;
    ToState: number;
    Clone(): IStateTransitionForClient;
    GetAsLookup(): ILookup;
    GetAsTypedValue(): ITypedValue;
}

interface IStateTransitions {
    readonly Count: number;
    Add(Index: number, StateTransition: IStateTransition): void;
    Item(Index: number): IStateTransition;
    Remove(Index: number): void;
}

interface IStateTransitionsForClient {
    readonly Count: number;
    Add(Index: number, StateTransitionForClient: IStateTransitionForClient): void;
    Clone(): IStateTransitionsForClient;
    Item(Index: number): IStateTransitionForClient;
    Item(Index: number, value: IStateTransitionForClient): void;
    Remove(Index: number): void;
}

interface IStringData {
    AsString: string;
    readonly StringDataType: MFiles.MFStringDataType;
    Clone(): IStringData;
}

interface IStrings {
    readonly Count: number;
    Add(Index: number, Item: string): void;
    Clone(): IStrings;
    CloneFrom(Strings: IStrings): void;
    Item(Index: number): string;
    Join(Separator: string): string;
    Remove(Index: number): void;
}

interface ITaskAssignmentClassInfo {
    AnyAssigneeCompletes: boolean;
    SignatureForCompletion: ISignatureSettings;
    Clone(): ITaskAssignmentClassInfo;
}

interface ITaskPane {
    readonly Available: boolean;
    readonly Events: ITaskPaneEvents;
    Visible: boolean;
    AddCustomCommandToGroup(customCommand: number, group: number, orderPriority: number): void;
    CreateGroup(groupName: string, priority: number): number;
    DeleteGroup(groupID: number): void;
    RemoveCustomCommandFromGroup(customCommand: number, group: number): void;
    SetLogo(filename: string): void;
    SetTheme(theme: ITheme): void;
}

interface ITaskPaneEvents extends IEvents {
    OnHidePane?(): void;
    OnShowPane?(): void;
    OnStarted?(): void;
    OnStop?(): void;
}

interface ITemporarySearchView {
    readonly BaseSearchConditions: ISearchConditions;
    SearchCriteria: ISearchCriteria;
    readonly View: IView;
}

interface ITheme {
    [key: string]: string | boolean | number;
    last: 0;
}

interface ITimestamp {
    Day: number;
    Fraction: number;
    Hour: number;
    Minute: number;
    Month: number;
    Second: number;
    Year: number;
    Clone(): ITimestamp;
    GetValue(): any;
    LocalTimeToUtc(): ITimestamp;
    SetValue(Value: any): void;
    UtcToLocalTime(): ITimestamp;
}

interface ITimeZoneInformation {
    readonly StandardName: string;
    LoadTimeZoneByName(TimeZoneName: string): void;
    LoadWithCurrentTimeZone(): void;
}

interface ITraditionalFolder {
    readonly ID: number;
    readonly Name: string;
}

interface ITraditionalFolderContents {
    readonly ID: number;
    readonly ObjectVersions: IObjectVersions;
    readonly TraditionalFolders: ITraditionalFolders;
}

interface ITraditionalFolders {
    readonly Count: number;
    Item(Index: number): ITraditionalFolder;
}

interface ITriggerType {
    readonly Daily: IDailyTrigger;
    readonly MonthlyDate: IMonthlyDateTrigger;
    readonly MonthlyDOW: IMonthlyDOWTrigger;
    Type: MFiles.MFTriggerType;
    readonly Weekly: IWeeklyTrigger;
    Clone(): ITriggerType;
    SetDailyTrigger(DailyTrigger: IDailyTrigger): void;
    SetMonthlyDate(MonthlyDateTrigger: IMonthlyDateTrigger): void;
    SetMonthlyDOW(MonthlyDOWTrigger: IMonthlyDOWTrigger): void;
    SetWeekly(WeeklyTrigger: IWeeklyTrigger): void;
}

interface ITypedValue {
    readonly DataType: MFiles.MFDataType;
    readonly DisplayValue: string;
    Value: any;
    Clone(): ITypedValue;
    CloneFrom(TypedValue: ITypedValue): void;
    CompareTo(TypedValue: ITypedValue): number;
    GetLookupID(): number;
    GetValueAsLocalizedText(): string;
    GetValueAsLookup(): ILookup;
    GetValueAsLookups(): ILookups;
    GetValueAsText(
        Localized: boolean,
        NULLAsEmptyString: boolean,
        EmptyLookupDisplayValuesAsHidden: boolean,
        LongDateFormat: boolean,
        NoSeconds: boolean,
        NumericValueAsKilobytes: boolean,
    ): string;
    GetValueAsTextWithExpression(Expression: IExpression, Locale: number): string;
    GetValueAsTimestamp(): ITimestamp;
    GetValueAsUnlocalizedText(): string;
    IsNULL(): boolean;
    IsUninitialized(): boolean;
    Serialize(): ReadonlyArray<number>;
    SetValue(DataType: MFiles.MFDataType, Value: any): void;
    SetValueToLookup(Lookup: ILookup): void;
    SetValueToMultiSelectLookup(MultiSelectLookup: ILookups): void;
    SetValueToNULL(DataType: MFiles.MFDataType): void;
    Unserialize(Bytes: ReadonlyArray<number>, ReadFromOldSerializingFormat: boolean): void;
}

interface ITypedValues {
    readonly Count: number;
    Add(Index: number, TypedValue: ITypedValue): void;
    Item(Index: number): ITypedValue;
    Remove(Index: number): void;
}

interface IUserAccount {
    AccessControlList: IAccessControlList;
    Enabled: boolean;
    ID: number;
    InternalUser: boolean;
    LoginName: string;
    VaultLanguage: number;
    VaultRoles: MFiles.MFUserAccountVaultRole;
    AddVaultRoles(VaultRolesToAdd: MFiles.MFUserAccountVaultRole): void;
    Clone(): IUserAccount;
    CloneFrom(UserAccount: IUserAccount): void;
    RemoveVaultRoles(VaultRolesToRemove: MFiles.MFUserAccountVaultRole): void;
}

interface IUserAccounts {
    readonly Count: number;
    Item(Index: number): IUserAccount;
}

interface IUserGroup {
    ID: number;
    Members: IIDs;
    Name: string;
    readonly Predefined: boolean;
    AddMember(ID: number): void;
    Clone(): IUserGroup;
    CloneFrom(UserGroup: IUserGroup): void;
    RemoveMember(ID: number): void;
}

interface IUserGroupAdmin {
    AccessControlList: IAccessControlList;
    SemanticAliases: ISemanticAliases;
    UserGroup: IUserGroup;
    Clone(): IUserGroupAdmin;
    CloneFrom(UserGroupAdmin: IUserGroupAdmin): void;
}

interface IUserGroups {
    readonly Count: number;
    Item(Index: number): IUserGroup;
}

interface IUserGroupsAdmin {
    readonly Count: number;
    Item(Index: number): IUserGroupAdmin;
}

interface IUserOrUserGroupID {
    UserOrGroupID: number;
    UserOrGroupType: MFiles.MFUserOrUserGroupType;
    Clone(): IUserOrUserGroupID;
}

interface IUserOrUserGroupIDEx {
    readonly IndirectProperty: IIndirectPropertyID;
    readonly UserOrGroupID: number;
    readonly UserOrGroupType: MFiles.MFUserOrUserGroupType;
    readonly WorkflowState: number;
    Clone(): IUserOrUserGroupIDEx;
    SetIndirectPropertyPseudoUser(PseudoUserID: IIndirectPropertyID): void;
    SetUserAccount(UserAccount: number): void;
    SetUserGroup(UserGroup: number): void;
    SetWorkflowStatePseudoUser(WorkflowState: number): void;
}

interface IUserOrUserGroupIDExs {
    readonly Count: number;
    Add(Index: number, UserOrUserGroupIDEx: IUserOrUserGroupIDEx): void;
    Clone(): IUserOrUserGroupIDExs;
    GetUserOrUserGroupIDEx(UserOrGroupID: number, UserOrGroupType: MFiles.MFUserOrUserGroupType): IUserOrUserGroupIDEx;
    GetUserOrUserGroupIDExIndex(UserOrGroupID: number, UserOrGroupType: MFiles.MFUserOrUserGroupType): number;
    Item(Index: number): IUserOrUserGroupIDEx;
    Remove(Index: number): void;
}

interface IUserOrUserGroupIDs {
    readonly Count: number;
    Add(Index: number, UserOrUserGroupID: IUserOrUserGroupID): void;
    Clone(): IUserOrUserGroupIDs;
    GetUserOrUserGroupID(UserOrGroupID: number, UserOrGroupType: MFiles.MFUserOrUserGroupType): IUserOrUserGroupID;
    GetUserOrUserGroupIDIndex(UserOrGroupID: number, UserOrGroupType: MFiles.MFUserOrUserGroupType): number;
    Item(Index: number): IUserOrUserGroupID;
    Remove(Index: number): void;
}

interface IValidation {
    RegularExpression: string;
    VBScript: string;
    Clone(): IValidation;
}

interface IValueListItem {
    AutomaticPermissionsForObjects: IAutomaticPermissions;
    readonly Deleted: boolean;
    readonly DisplayID: string;
    readonly DisplayIDAvailable: boolean;
    HasOwner: boolean;
    HasParent: boolean;
    Icon: ReadonlyArray<number>;
    ID: number;
    readonly ItemGUID: string;
    Name: string;
    OwnerID: number;
    ParentID: number;
    ValueListID: MFiles.MFBuiltInValueList | number;
    Clone(): IValueListItem;
    CloneFrom(ValueListItem: IValueListItem): void;
    GetIconAsPNG(Width: number, Height: number): ReadonlyArray<number>;
}

interface IValueListItems {
    readonly Count: number;
    Item(Index: number): IValueListItem;
}

interface IValueListItemSearchResults {
    readonly Count: number;
    MoreResults: boolean;
    Add(Index: number, ValueListItem: IValueListItem): void;
    Clone(): IValueListItemSearchResults;
    Item(Index: number): IValueListItem;
    Remove(Index: number): void;
}

interface IValueListItemSearchResultsWithPermissions {
    readonly Permissions: IAccessControlLists;
    readonly ValueListItemSearchResults: IValueListItemSearchResults;
}

interface IValueListItemsWithPermissions {
    readonly Permissions: IAccessControlLists;
    readonly ValueListItems: IValueListItems;
}

interface IVault {
    readonly Async: IVaultAsync;
    readonly ClassGroupOperations: IVaultClassGroupOperations;
    readonly ClassOperations: IVaultClassOperations;
    readonly ClientOperations: IVaultClientOperations;
    readonly CurrentLoggedInUserID: number;
    readonly CustomApplicationManagementOperations: IVaultCustomApplicationManagementOperations;
    readonly DataSetOperations: IVaultDataSetOperations;
    readonly ElectronicSignatureOperations: IVaultElectronicSignatureOperations;
    readonly EventLogOperations: IVaultEventLogOperations;
    readonly ExtensionMethodOperations: IVaultExtensionMethodOperations;
    readonly ExternalObjectOperations: IVaultExternalObjectOperations;
    readonly LoggedIn: boolean;
    readonly LoginAccountOperations: IVaultLoginAccountOperations;
    readonly LoginSessionID: string;
    readonly ManagementOperations: IVaultManagementOperations;
    readonly Name: string;
    readonly NamedACLOperations: IVaultNamedACLOperations;
    readonly NamedValueStorageOperations: IVaultNamedValueStorageOperations;
    readonly NotificationOperations: IVaultNotificationOperations;
    readonly ObjectFileOperations: IVaultObjectFileOperations;
    readonly ObjectOperations: IVaultObjectOperations;
    readonly ObjectPropertyOperations: IVaultObjectPropertyOperations;
    readonly ObjectSearchOperations: IVaultObjectSearchOperations;
    readonly ObjectTypeOperations: IVaultObjectTypeOperations;
    readonly PropertyDefOperations: IVaultPropertyDefOperations;
    readonly ReadOnlyAccess: boolean;
    readonly ScheduledJobManagementOperations: IVaultScheduledJobManagementOperations;
    readonly ServerDataPushOperations: IVaultServerDataPushOperations;
    readonly SessionInfo: ISessionInfo;
    readonly SharedLinkOperations: IVaultSharedLinkOperations;
    readonly TraditionalFolderOperations: IVaultTraditionalFolderOperations;
    readonly UserGroupOperations: IVaultUserGroupOperations;
    readonly UserOperations: IVaultUserOperations;
    readonly UserSettingOperations: IVaultUserSettingOperations;
    readonly ValueListItemOperations: IVaultValueListItemOperations;
    readonly ValueListOperations: IVaultValueListOperations;
    readonly VaultLanguages: ILanguages;
    readonly ViewOperations: IVaultViewOperations;
    readonly WorkflowOperations: IVaultWorkflowOperations;
    ChangePassword(OldPassword: string, NewPassword: string): void;
    GetAllTranslations(): string;
    GetGUID(): string;
    GetMetadataStructureItemIDByAlias(
        MetadataStructureItemType: MFiles.MFMetadataStructureItem,
        Alias: string,
        Unused: boolean,
    ): number;
    GetMetadataStructureVersionID(): number;
    GetMFilesURLForVaultRoot(): string;
    GetServerLicenseStatus(): ILicenseStatus;
    GetServerVersionOfVault(): IMFilesVersion;
    LogOutSilent(): void;
    LogOutWithDialogs(ParentWindow: number): boolean;
    TestConnectionToServer(): void;
    TestConnectionToVault(): void;
    TestConnectionToVaultWithTimeout(TimeoutInMilliseconds: number): void;
}

interface IVaultAsync {
    readonly ClassGroupOperations: IVaultClassGroupOperationsAsync;
    readonly ClassOperations: IVaultClassOperationsAsync;
    readonly ClientOperations: IVaultClientOperationsAsync;
    readonly CustomApplicationManagementOperations: IVaultCustomApplicationManagementOperationsAsync;
    readonly DataSetOperations: IVaultDataSetOperationsAsync;
    readonly ElectronicSignatureOperations: IVaultElectronicSignatureOperationsAsync;
    readonly EventLogOperations: IVaultEventLogOperationsAsync;
    readonly ExtensionMethodOperations: IVaultExtensionMethodOperationsAsync;
    readonly ExternalObjectOperations: IVaultExternalObjectOperationsAsync;
    readonly LoginAccountOperations: IVaultLoginAccountOperationsAsync;
    readonly ManagementOperations: IVaultManagementOperationsAsync;
    readonly NamedACLOperations: IVaultNamedACLOperationsAsync;
    readonly NamedValueStorageOperations: IVaultNamedValueStorageOperationsAsync;
    readonly NotificationOperations: IVaultNotificationOperationsAsync;
    readonly ObjectFileOperations: IVaultObjectFileOperationsAsync;
    readonly ObjectOperations: IVaultObjectOperationsAsync;
    readonly ObjectPropertyOperations: IVaultObjectPropertyOperationsAsync;
    readonly ObjectSearchOperations: IVaultObjectSearchOperationsAsync;
    readonly ObjectTypeOperations: IVaultObjectTypeOperationsAsync;
    readonly PropertyDefOperations: IVaultPropertyDefOperationsAsync;
    readonly ScheduledJobManagementOperations: IVaultScheduledJobManagementOperationsAsync;
    readonly ServerDataPushOperations: IVaultServerDataPushOperationsAsync;
    readonly SharedLinkOperations: IVaultSharedLinkOperationsAsync;
    readonly TraditionalFolderOperations: IVaultTraditionalFolderOperationsAsync;
    readonly UserGroupOperations: IVaultUserGroupOperationsAsync;
    readonly UserOperations: IVaultUserOperationsAsync;
    readonly UserSettingOperations: IVaultUserSettingOperationsAsync;
    readonly ValueListItemOperations: IVaultValueListItemOperationsAsync;
    readonly ValueListOperations: IVaultValueListOperationsAsync;
    readonly ViewOperations: IVaultViewOperationsAsync;
    readonly WorkflowOperations: IVaultWorkflowOperationsAsync;
}

interface IVaultAutomaticMetadataOperations {
    GetAutomaticMetadataForObject(ObjVer: IObjVer): IAutomaticMetadataResult;
    GetAutomaticMetadataForTemporaryFile(UploadSessionID: number): IAutomaticMetadataResult;
    GetAutomaticMetadataForTemporaryFiles(IIDs: IIDs): IAutomaticMetadataResult;
}

interface IVaultClassGroupOperations {
    AddClassGroup(ClassGroup: IClassGroup): IClassGroup;
    GetClassGroup(ObjectType: MFiles.MFBuiltInObjectType | number, ClassGroupID: number): IClassGroup;
    GetClassGroupIDByGUID(ClassGroupGUID: string): number;
    GetClassGroups(ObjectType: MFiles.MFBuiltInObjectType | number): IClassGroups;
    RemoveClassGroup(ClassGroupID: number): void;
    UpdateClassGroup(ClassGroup: IClassGroup): void;
}

interface IVaultClassGroupOperationsAsync {
    AddClassGroup(
        ClassGroup: IClassGroup,
        successCallback?: (result: IClassGroup) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetClassGroup(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        ClassGroupID: number,
        successCallback?: (result: IClassGroup) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetClassGroupIDByGUID(
        ClassGroupGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetClassGroups(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IClassGroups) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveClassGroup(
        ClassGroupID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateClassGroup(
        ClassGroup: IClassGroup,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultClassOperations {
    AddObjectClassAdmin(ObjectClassAdmin: IObjectClassAdmin): IObjectClassAdmin;
    GetAllObjectClasses(): IObjectClasses;
    GetAllObjectClassesAdmin(): IObjectClassesAdmin;
    GetObjectClass(ObjectClass: MFiles.MFBuiltInDocumentClass | MFiles.MFBuiltInObjectClass | number): IObjectClass;
    GetObjectClassAdmin(Class: MFiles.MFBuiltInDocumentClass | MFiles.MFBuiltInObjectClass | number): IObjectClassAdmin;
    GetObjectClasses(ObjectType: MFiles.MFBuiltInObjectType | number): IObjectClasses;
    GetObjectClassesAdmin(ObjectType: MFiles.MFBuiltInObjectType | number): IObjectClassesAdmin;
    GetObjectClassIDByAlias(Alias: string): number;
    GetObjectClassIDByGUID(ObjectClassGUID: string): number;
    RemoveObjectClassAdmin(ObjectClassID: number): void;
    UpdateObjectClassAdmin(ObjectClass: IObjectClassAdmin): void;
    UpdateObjectNames(ObjectClassID: number): void;
}

interface IVaultClassOperationsAsync {
    AddObjectClassAdmin(
        ObjectClassAdmin: IObjectClassAdmin,
        successCallback?: (result: IObjectClassAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetAllObjectClasses(
        successCallback?: (result: IObjectClasses) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetAllObjectClassesAdmin(
        successCallback?: (result: IObjectClassesAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectClass(
        ObjectClass: MFiles.MFBuiltInDocumentClass | MFiles.MFBuiltInObjectClass | number,
        successCallback?: (result: IObjectClass) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectClassAdmin(
        Class: MFiles.MFBuiltInDocumentClass | MFiles.MFBuiltInObjectClass | number,
        successCallback?: (result: IObjectClassAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectClasses(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IObjectClasses) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectClassesAdmin(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IObjectClassesAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectClassIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectClassIDByGUID(
        ObjectClassGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveObjectClassAdmin(
        ObjectClassID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateObjectClassAdmin(
        ObjectClass: IObjectClassAdmin,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateObjectNames(
        ObjectClassID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultClientOperations {
    DisableCheckInReminderForCallingProcess(): void;
    EnableCheckInReminderForCallingProcess(): void;
    IsOffline(): boolean;
    IsOnline(): boolean;
    SetVaultToOffline(ParentWindow: number): MFiles.MFOfflineTransitionResultFlags;
    SetVaultToOnline(ParentWindow: number): MFiles.MFOnlineTransitionResultFlags;
}

interface IVaultClientOperationsAsync {
    DisableCheckInReminderForCallingProcess(
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    EnableCheckInReminderForCallingProcess(
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsOffline(
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsOnline(
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetVaultToOffline(
        ParentWindow: number,
        successCallback?: (result: MFiles.MFOfflineTransitionResultFlags) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetVaultToOnline(
        ParentWindow: number,
        successCallback?: (result: MFiles.MFOnlineTransitionResultFlags) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultConnection {
    AuthType: MFiles.MFAuthType;
    AutoLogin: boolean;
    EncryptedConnection: boolean;
    Endpoint: string;
    Icon: ReadonlyArray<number>;
    Name: string;
    NetworkAddress: string;
    ProtocolSequence: string;
    ServerVaultGUID: string;
    ServerVaultName: string;
    UserSpecific: boolean;
    BindToVault(ParentWindow: number, CanLogIn: boolean, ReturnNULLIfCancelledByUser: boolean): IVault;
    Clone(): IVaultConnection;
    GetGUID(): string;
    IsLoggedIn(): boolean;
    LogInAs(ParentWindow: number, DefaultAuthType: MFiles.MFAuthType, ReturnNULLIfCancelledByUser: boolean): IVault;
    LogInAsUser(
        AuthType: MFiles.MFAuthType,
        UserName: string,
        Password: string,
        Domain: string | null,
        SPN: string | null,
    ): IVault;
    TestConnectionToVault(ParentWindow: number): MFiles.MFVaultConnectionTestResult;
}

interface IVaultConnections {
    readonly Count: number;
    Add(Index: number, VaultConnection: IVaultConnection): void;
    GetVaultConnectionByName(VaultConnectionName: string): IVaultConnection;
    GetVaultConnectionIndexByName(VaultConnectionName: string): number;
    Item(Index: number): IVaultConnection;
    Remove(Index: number): void;
}

interface IVaultCore {
    readonly Events: IVaultCoreEvents;
    readonly ServerVault: IVault;
}

interface IVaultCoreEvents extends IEvents {
    OnNewVaultEntry?(vaultEntry: IVaultEntry): void | IVaultEntryEvents;
    OnStarted?(): void;
    OnStop?(): void;
}

interface IVaultCustomApplicationManagementOperations {
    DownloadCustomApplicationBlock(DownloadID: number, BlockSize: number, Offset: number): ReadonlyArray<number>;
    DownloadCustomApplicationBlock_32bit(DownloadID: number, BlockSize: number, Offset: number): ReadonlyArray<number>;
    DownloadCustomApplicationBlockBegin(ApplicationID: string): IFileDownloadSession;
    DownloadCustomApplicationBlockBegin_32bit(ApplicationID: string): IFileDownloadSession;
    EnableCustomApplication(ApplicationID: string, Enabled: boolean): void;
    GetCustomApplication(ApplicationID: string): ICustomApplication;
    GetCustomApplications(): ICustomApplications;
    GetCustomApplicationsEx(Platform: MFiles.MFExtApplicationPlatform): ICustomApplications;
    InstallCustomApplication(File: string): void;
    UninstallCustomApplication(ApplicationID: string): void;
}

interface IVaultCustomApplicationManagementOperationsAsync {
    DownloadCustomApplicationBlock(
        DownloadID: number,
        BlockSize: number,
        Offset: number,
        successCallback?: (result: ReadonlyArray<number>) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadCustomApplicationBlock_32bit(
        DownloadID: number,
        BlockSize: number,
        Offset: number,
        successCallback?: (result: ReadonlyArray<number>) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadCustomApplicationBlockBegin(
        ApplicationID: string,
        successCallback?: (result: IFileDownloadSession) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadCustomApplicationBlockBegin_32bit(
        ApplicationID: string,
        successCallback?: (result: IFileDownloadSession) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    EnableCustomApplication(
        ApplicationID: string,
        Enabled: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetCustomApplication(
        ApplicationID: string,
        successCallback?: (result: ICustomApplication) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetCustomApplications(
        successCallback?: (result: ICustomApplications) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetCustomApplicationsEx(
        Platform: MFiles.MFExtApplicationPlatform,
        successCallback?: (result: ICustomApplications) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    InstallCustomApplication(
        File: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UninstallCustomApplication(
        ApplicationID: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultDataSetOperations {
    GetDataSetExportingStatus(ID: number): IDataSetExportingStatus;
    GetDataSets(): IDataSets;
    GetReportAccessCredentials(): IReportAccessCredentials;
    StartDataSetExport(ID: number): void;
}

interface IVaultDataSetOperationsAsync {
    GetDataSetExportingStatus(
        ID: number,
        successCallback?: (result: IDataSetExportingStatus) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetDataSets(
        successCallback?: (result: IDataSets) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetReportAccessCredentials(
        successCallback?: (result: IReportAccessCredentials) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    StartDataSetExport(
        ID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultElectronicSignatureOperations {
    AddEmptySignature(ObjVer: IObjVer, SignatureIdentifier: string): IObjectVersionAndProperties;
    AddEmptySignatures(ObjVer: IObjVer): IObjectVersionAndProperties;
    DisconnectSignature(ObjVer: IObjVer, SignatureIdentifier: string): IObjectVersionAndProperties;
    DisconnectSignatureEx(
        ObjVer: IObjVer,
        SignatureIdentifier: string,
        InvalidateDisconnectedSignatures: boolean,
    ): IObjectVersionAndProperties;
    DisconnectSignatures(ObjVer: IObjVer): IObjectVersionAndProperties;
    DisconnectSignaturesEx(ObjVer: IObjVer, InvalidateDisconnectedSignatures: boolean): IObjectVersionAndProperties;
}

interface IVaultElectronicSignatureOperationsAsync {
    AddEmptySignature(
        ObjVer: IObjVer,
        SignatureIdentifier: string,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddEmptySignatures(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DisconnectSignature(
        ObjVer: IObjVer,
        SignatureIdentifier: string,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DisconnectSignatureEx(
        ObjVer: IObjVer,
        SignatureIdentifier: string,
        InvalidateDisconnectedSignatures: boolean,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DisconnectSignatures(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DisconnectSignaturesEx(
        ObjVer: IObjVer,
        InvalidateDisconnectedSignatures: boolean,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultEntry {
    readonly Events: IVaultEntryEvents;
    readonly Vault: IVault;
    readonly VaultCore: IVaultCore;
    readonly VaultUI: IVaultUI;
    NotifyVaultEntry(ID: string, data1: any, data2: any): any;
}

interface IVaultEntryEvents extends IEvents {
    OnAddObjectFile?(
        objVer: IObjVer,
        sourceObjectFile: ISourceObjectFile,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion, objectFile: IObjectFile): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnAddObjectsToFavorites?(
        objIDs: IObjIDs,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnAddObjectToFavorites?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnChangeVaultLanguage?(
        languageID: number,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnCheckInObject?(
        objVer: IObjVer,
        propertyValues: IPropertyValues,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnCheckInObjects?(
        objVers: IObjVers,
        propertyValues: IPropertyValues,
    ): null | boolean | {
        OnSuccess?(objectVersions: IObjectVersions): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnCheckOutObject?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnCheckOutObjects?(
        objIDs: IObjIDs,
    ): null | boolean | {
        OnSuccess?(objectVersions: IObjectVersions): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnCreateObject?(
        objectType: number,
        propertyValues: IPropertyValues,
        sourceObjectFiles: ISourceObjectFiles,
        accessControlList: IAccessControlList,
        checkInRequested: boolean,
        singleFileRequested: boolean,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnDestroyObject?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnDestroyObjects?(
        objIDs: IObjIDs,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnDestroyObjectVersion?(
        objVer: IObjVer,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnDestroyObjectVersions?(
        objVers: IObjVers,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnLoggedIn?(): void;
    OnLogOut?(): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnModifyObjectVersionLabels?(
        objVer: IObjVer,
        clearFromOtherVersions: boolean,
        append: boolean,
        labelIDs: IIDs,
        singleLabelRequired: boolean,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnNotification?(id: string, data1: any, data2: any): any;
    OnObjectAddedToFavorites?(objID: IObjID): void;
    OnObjectCheckedIn?(objectVersion: IObjectVersion): void;
    OnObjectCheckedOut?(objectVersion: IObjectVersion): void;
    OnObjectCheckoutsUndone?(objectVersions: IObjectVersions): void;
    OnObjectCheckoutUndone?(objectVersion: IObjectVersion): void;
    OnObjectCreated?(objectVersion: IObjectVersion): void;
    OnObjectDestroyed?(objID: IObjID): void;
    OnObjectFileAdded?(objectVersion: IObjectVersion, objectFile: IObjectFile): void;
    OnObjectFileRemoved?(objectVersion: IObjectVersion, fileVer: IFileVer): void;
    OnObjectFileRenamed?(objectVersion: IObjectVersion, objectFile: IObjectFile): void;
    OnObjectLevelPropertySet?(objID: IObjID, propertyValue: IPropertyValue): void;
    OnObjectOfflineAvailabilityRemoved?(objID: IObjID): void;
    OnObjectOfflineAvailabilitySet?(objID: IObjID): void;
    OnObjectRemoved?(objectVersion: IObjectVersion): void;
    OnObjectRemovedFromFavorites?(objID: IObjID): void;
    OnObjectsAddedToFavorites?(objIDs: IObjIDs): void;
    OnObjectsCheckedIn?(objectVersions: IObjectVersions): void;
    OnObjectsCheckedOut?(objectVersions: IObjectVersions): void;
    OnObjectsDestroyed?(objIDs: IObjIDs): void;
    OnObjectsRemoved?(objectVersions: IObjectVersions): void;
    OnObjectsRemovedFromFavorites?(objIDs: IObjIDs): void;
    OnObjectUndeleted?(objectVersion: IObjectVersion): void;
    OnObjectVersionDestroyed?(objVer: IObjVer): void;
    OnObjectVersionLabelsModified?(
        objVer: IObjVer,
        clearFromOtherVersions: boolean,
        append: boolean,
        labelIDs: IIDs,
    ): void;
    OnObjectVersionPermissionsSet?(objectVersion: IObjectVersion): void;
    OnObjectVersionRolledBack?(objectVersion: IObjectVersion): void;
    OnObjectVersionsDestroyed?(objVers: IObjVers): void;
    OnPropertiesOfObjectVersionSet?(objectVersion: IObjectVersion): void;
    OnPropertiesOfObjectVersionsSet?(objectVersions: IObjectVersions): void;
    OnRemoveObject?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRemoveObjectFile?(
        objVer: IObjVer,
        fileVer: IFileVer,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRemoveObjectFromFavorites?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRemoveObjectOfflineAvailability?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRemoveObjects?(
        objIDs: IObjIDs,
    ): null | boolean | {
        OnSuccess?(objectVersions: IObjectVersions): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRemoveObjectsFromFavorites?(
        objIDs: IObjIDs,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRenameObjectFile?(
        objVer: IObjVer,
        fileVer: IFileVer,
        newName: null | ITypedValue,
        newExtension: null | ITypedValue,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion, objectFile: IObjectFile): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnRollBackObjectVersion?(
        objVer: IObjVer,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnSetObjectLevelProperty?(
        objID: IObjID,
        propertyValue: IPropertyValue,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnSetObjectOfflineAvailability?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnSetObjectVersionPermissions?(
        objVer: IObjVer,
        changeAllVersions: boolean,
        accessControlList: IAccessControlList,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnSetPropertiesOfObjectVersion?(
        setPropertiesParams: ISetPropertiesParams,
        singlePropertyUpdate: boolean,
        singlePropertyRemove: boolean,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnSetPropertiesOfObjectVersions?(
        setPropertiesParamsOfMultipleObjects: ISetPropertiesParamsOfMultipleObjects,
        singlePropertyUpdate: boolean,
        singlePropertyRemove: boolean,
    ): null | boolean | {
        OnSuccess?(objectVersions: IObjectVersions): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnStarted?(): void;
    OnStop?(): void;
    OnSwitchedToOfflineMode?(): void;
    OnSwitchedToOnlineMode?(): void;
    OnSwitchToOfflineMode?(): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnSwitchToOnlineMode?(): null | boolean | {
        OnSuccess?(): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnUndeleteObject?(
        objID: IObjID,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnUndeleteObjects?(
        objIDs: IObjIDs,
    ): null | boolean | {
        OnSuccess?(objectVersions: IObjectVersions): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnUndoObjectCheckout?(
        objVer: IObjVer,
    ): null | boolean | {
        OnSuccess?(objectVersion: IObjectVersion): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnUndoObjectCheckouts?(
        objVers: IObjVers,
    ): null | boolean | {
        OnSuccess?(objectVersions: IObjectVersions): void;
        OnError?(errorCode: number, errorMessage: string, errorStack: string): void;
        Finally?(): void;
    };
    OnVaultLanguageChanged?(languageID: number): void;
}

interface IVaultEventLogOperations {
    Clear(): void;
    ClearRange(FirstEventID: number, LastEventID: number): void;
    ClearRange_32bit(FirstEventID: string, LastEventID: string): void;
    ExportAll(): string;
    ExportRange(FirstEventID: number, LastEventID: number, DeleteEventsAfterExporting: boolean): string;
    ExportRange_32bit(FirstEventID: string, LastEventID: string, DeleteEventsAfterExporting: boolean): string;
    GetIDRange(): IIDRange;
    IsLoggingEnabled(): boolean;
    SetLoggingEnabled(Enabled: boolean): void;
}

interface IVaultEventLogOperationsAsync {
    Clear(
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ClearRange(
        FirstEventID: number,
        LastEventID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ClearRange_32bit(
        FirstEventID: string,
        LastEventID: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ExportAll(
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ExportRange(
        FirstEventID: number,
        LastEventID: number,
        DeleteEventsAfterExporting: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ExportRange_32bit(
        FirstEventID: string,
        LastEventID: string,
        DeleteEventsAfterExporting: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetIDRange(
        successCallback?: (result: IIDRange) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsLoggingEnabled(
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetLoggingEnabled(
        Enabled: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultExtensionMethodOperations {
    DoesActiveVaultExtensionMethodExist(MethodIdentifier: string): boolean;
    ExecuteVaultExtensionMethod(MethodIdentifier: string, Input: string): string;
}

interface IVaultExtensionMethodOperationsAsync {
    DoesActiveVaultExtensionMethodExist(
        MethodIdentifier: string,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ExecuteVaultExtensionMethod(
        MethodIdentifier: string,
        Input: string,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultExternalObjectOperations {
    PromoteObject(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        pACLProvidedCBN: IAccessControlList,
    ): IObjectVersionAndProperties;
}

interface IVaultExternalObjectOperationsAsync {
    PromoteObject(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        pACLProvidedCBN: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultLoginAccountOperations {
    AddLoginAccount(LoginAccount: ILoginAccount, Password: string): void;
    ForceLogout(AccountNames: IStrings): void;
    GetLoginAccount(AccountName: string): ILoginAccount;
    GetLoginAccounts(): ILoginAccounts;
    GetLoginAccountsWithSessions(): ILoginAccounts;
    GetPersonalInformationFromDomain(AccountName: string): ILoginAccountPersonalInformation;
    ModifyLoginAccount(LoginAccount: ILoginAccount): void;
    RemoveLoginAccount(AccountName: string): void;
    UpdateLoginPassword(AccountName: string, NewPassword: string): void;
}

interface IVaultLoginAccountOperationsAsync {
    AddLoginAccount(
        LoginAccount: ILoginAccount,
        Password: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ForceLogout(
        AccountNames: IStrings,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLoginAccount(
        AccountName: string,
        successCallback?: (result: ILoginAccount) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLoginAccounts(
        successCallback?: (result: ILoginAccounts) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLoginAccountsWithSessions(
        successCallback?: (result: ILoginAccounts) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPersonalInformationFromDomain(
        AccountName: string,
        successCallback?: (result: ILoginAccountPersonalInformation) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ModifyLoginAccount(
        LoginAccount: ILoginAccount,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveLoginAccount(
        AccountName: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateLoginPassword(
        AccountName: string,
        NewPassword: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultManagementOperations {
    ArchiveOldVersions(ArchiveOldVersionsJob: IArchiveOldVersionsJob): void;
    ExportContent(ExportContentJob: IExportContentJob): void;
    GetEventHandlers(): IEventHandlers;
    GetVaultProperties(): IVaultProperties;
    ImportContent(ImportContentJob: IImportContentJob): void;
    ImportContentAsync(ImportContentJob: IImportContentJob): number;
    IsAsyncJobRunning(JobID: number): boolean;
    PreviewImportContent(ImportContentJob: IImportContentJob, SummaryFile: string): void;
    RebuildFullTextSearchIndex(Metadata: boolean, FileContents: boolean): void;
    SetEventHandlers(EventHandlers: IEventHandlers): void;
    UpdateVaultProperties(VaultProperties: IVaultProperties, RegistrationDataOnly: boolean): void;
    VerifyVault(VerifyVaultJob: IVerifyVaultJob): IVerifyVaultJobOutput;
    WaitAsyncJob(JobID: number): void;
}

interface IVaultManagementOperationsAsync {
    ArchiveOldVersions(
        ArchiveOldVersionsJob: IArchiveOldVersionsJob,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ExportContent(
        ExportContentJob: IExportContentJob,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetEventHandlers(
        successCallback?: (result: IEventHandlers) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetVaultProperties(
        successCallback?: (result: IVaultProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ImportContent(
        ImportContentJob: IImportContentJob,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ImportContentAsync(
        ImportContentJob: IImportContentJob,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsAsyncJobRunning(
        JobID: number,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    PreviewImportContent(
        ImportContentJob: IImportContentJob,
        SummaryFile: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RebuildFullTextSearchIndex(
        Metadata: boolean,
        FileContents: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetEventHandlers(
        EventHandlers: IEventHandlers,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateVaultProperties(
        VaultProperties: IVaultProperties,
        RegistrationDataOnly: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    VerifyVault(
        VerifyVaultJob: IVerifyVaultJob,
        successCallback?: (result: IVerifyVaultJobOutput) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    WaitAsyncJob(
        JobID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultNamedACLOperations {
    AddNamedACLAdmin(NamedACLAdmin: INamedACLAdmin): INamedACLAdmin;
    GetMatchingNamedACLForAccessControlList(
        AccessControlList: IAccessControlList,
        ExplicitLinkOnly: boolean,
        ActiveAccessControlComponentsOnly: boolean,
        RefreshFromServer: boolean,
    ): INamedACL;
    GetMatchingNamedACLForAccessControlListComponent(
        AccessControlListComponent: IAccessControlListComponent,
        ExplicitLinkOnly: boolean,
        RefreshFromServer: boolean,
    ): INamedACL;
    GetNamedACL(NamedACLID: number): INamedACL;
    GetNamedACLAdmin(NamedACLID: number): INamedACLAdmin;
    GetNamedACLIDByAlias(Alias: string): number;
    GetNamedACLIDByGUID(NamedACLGUID: string): number;
    GetNamedACLs(): INamedACLs;
    GetNamedACLsByTypeAdmin(Type: MFiles.MFNamedACLType): INamedACLsAdmin;
    GetNamedACLsWithRefresh(RefreshFromServer: boolean): INamedACLs;
    GetNamedACLWithRefresh(NamedACLID: number, RefreshFromServer: boolean): INamedACL;
    IsNamedACLUsedInAutomaticPermissionsAdmin(NamedACLID: number): boolean;
    RemoveNamedACLWithPropagationAdmin(NamedACLID: number, AllowPropagation: boolean): void;
    UpdateNamedACLAdmin(NamedACLAdmin: INamedACLAdmin): void;
    UpdateNamedACLWithPropagationAdmin(
        NamedACLAdmin: INamedACLAdmin,
        MaintainLinks: boolean,
        AllowPropagation: boolean,
    ): void;
}

interface IVaultNamedACLOperationsAsync {
    AddNamedACLAdmin(
        NamedACLAdmin: INamedACLAdmin,
        successCallback?: (result: INamedACLAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetMatchingNamedACLForAccessControlList(
        AccessControlList: IAccessControlList,
        ExplicitLinkOnly: boolean,
        ActiveAccessControlComponentsOnly: boolean,
        RefreshFromServer: boolean,
        successCallback?: (result: INamedACL) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetMatchingNamedACLForAccessControlListComponent(
        AccessControlListComponent: IAccessControlListComponent,
        ExplicitLinkOnly: boolean,
        RefreshFromServer: boolean,
        successCallback?: (result: INamedACL) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACL(
        NamedACLID: number,
        successCallback?: (result: INamedACL) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLAdmin(
        NamedACLID: number,
        successCallback?: (result: INamedACLAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLIDByGUID(
        NamedACLGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLs(
        successCallback?: (result: INamedACLs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLsByTypeAdmin(
        Type: MFiles.MFNamedACLType,
        successCallback?: (result: INamedACLsAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLsWithRefresh(
        RefreshFromServer: boolean,
        successCallback?: (result: INamedACLs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetNamedACLWithRefresh(
        NamedACLID: number,
        RefreshFromServer: boolean,
        successCallback?: (result: INamedACL) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsNamedACLUsedInAutomaticPermissionsAdmin(
        NamedACLID: number,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveNamedACLWithPropagationAdmin(
        NamedACLID: number,
        AllowPropagation: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateNamedACLAdmin(
        NamedACLAdmin: INamedACLAdmin,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateNamedACLWithPropagationAdmin(
        NamedACLAdmin: INamedACLAdmin,
        MaintainLinks: boolean,
        AllowPropagation: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultNamedValueStorageOperations {
    GetNamedValues(NamedValueType: MFiles.MFNamedValueType, Namespace: string): INamedValues;
    RemoveNamedValues(NamedValueType: MFiles.MFNamedValueType, Namespace: string, NamedValueNames: IStrings): void;
    SetNamedValues(NamedValueType: MFiles.MFNamedValueType, Namespace: string, NamedValues: INamedValues): void;
}

interface IVaultNamedValueStorageOperationsAsync {
    GetNamedValues(
        NamedValueType: MFiles.MFNamedValueType,
        Namespace: string,
        successCallback?: (result: INamedValues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveNamedValues(
        NamedValueType: MFiles.MFNamedValueType,
        Namespace: string,
        NamedValueNames: IStrings,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetNamedValues(
        NamedValueType: MFiles.MFNamedValueType,
        Namespace: string,
        NamedValues: INamedValues,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultNotificationOperations {
    SendCustomNotification(
        UserOrUserGroupIDs: IUserOrUserGroupIDs,
        IncludeSubstituteUsers: boolean,
        ExternalRecipients: IStrings,
        SendWithServerEmailIdentity: boolean,
        Subject: string,
        Body: string,
    ): void;
}

interface IVaultNotificationOperationsAsync {
    SendCustomNotification(
        UserOrUserGroupIDs: IUserOrUserGroupIDs,
        IncludeSubstituteUsers: boolean,
        ExternalRecipients: IStrings,
        SendWithServerEmailIdentity: boolean,
        Subject: string,
        Body: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultObjectFileOperations {
    AddEmptyFile(ObjVer: IObjVer, Title: string, Extension: string): IFileVer;
    AddFile(ObjVer: IObjVer, Title: string, Extension: string, SourcePath: string): IFileVer;
    CloseUploadSession(UploadID: number): void;
    ConvertToPDF(
        ObjVer: IObjVer,
        FileID: number,
        StoreAsSeparateFile: boolean,
        OverwriteExistingFile: boolean,
        PDFA1b: boolean,
        FailOnUnsupportedSourceFiles: boolean,
    ): IObjectVersion;
    DownloadFile(File: number, FileVersion: number, FilePath: string): void;
    DownloadFileAsDataURI(ObjVer: IObjVer, File: number, FileVersion: number): string;
    DownloadFileEx(File: number, FileVersion: number, FilePath: string, FileFormat: MFiles.MFFileFormat): void;
    DownloadFileInBlocks_Begin(File: number, FileVersion: number): IFileDownloadSession;
    DownloadFileInBlocks_Begin_32bit(File: number, FileVersion: number): IFileDownloadSession;
    DownloadFileInBlocks_BeginEx(
        File: number,
        FileVersion: number,
        FileFormat: MFiles.MFFileFormat,
    ): IFileDownloadSession;
    DownloadFileInBlocks_BeginEx_32bit(
        File: number,
        FileVersion: number,
        FileFormat: MFiles.MFFileFormat,
    ): IFileDownloadSession;
    DownloadFileInBlocks_ReadBlock(DownloadID: number, BlockSize: number, Offset: number): ReadonlyArray<number>;
    DownloadFileInBlocks_ReadBlock_32bit(DownloadID: number, BlockSize: number, Offset: number): ReadonlyArray<number>;
    GetFiles(ObjVer: IObjVer): IObjectFiles;
    GetFilesForModificationInEventHandler(ObjVer: IObjVer): IObjectFiles;
    GetFileSize(FileVer: IFileVer): number;
    GetFileSize_32bit(FileVer: IFileVer): number;
    GetLatestFileVersion(FileID: number, AllowCheckedOut: boolean): IFileVer;
    GetObjIDOfFile(FileID: number): IObjID;
    GetPathInDefaultView(
        ObjID: IObjID,
        ObjectVersion: number,
        FileID: number,
        FileVersion: number,
        LatestSpecificBehavior: MFiles.MFLatestSpecificBehavior,
        UpdateFromServer: boolean,
    ): string;
    GetPathInDefaultViewEx(
        ObjID: IObjID,
        ObjectVersion: number,
        FileID: number,
        FileVersion: number,
        LatestSpecificBehavior: MFiles.MFLatestSpecificBehavior,
        PreferTraditionalFolderLocation: boolean,
        UpdateFromServer: boolean,
    ): string;
    OpenFileInDefaultApplication(
        ParentWindow: number,
        ObjVer: IObjVer,
        FileVer: IFileVer,
        FileOpenMethod: MFiles.MFFileOpenMethod,
    ): void;
    PerformOCROperation(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        OCROptions: IOCROptions,
        ZoneRecognitionMode: MFiles.MFOCRZoneRecognitionMode,
        ZoneRecognitionPages: IOCRPages,
        ConvertToSearchablePDF: boolean,
    ): IOCRPageResults;
    RemoveFile(ObjVer: IObjVer, FileVer: IFileVer): IObjectVersion;
    RenameFile(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        Title: string,
        Extension: string,
        UpdateSingleFileDocumentTitle: boolean,
    ): IObjectVersion;
    UpdateMetadataInFile(ObjVer: IObjVer, File: number, FailOnUnsupportedFiles: boolean): IObjectVersion;
    UploadFile(File: number, FileVersion: number, FilePath: string): void;
    UploadFileBlock(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: ReadonlyArray<number>): void;
    UploadFileBlock_32bit(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
    ): void;
    UploadFileBlockBegin(): number;
    UploadFileBlockBegin_32bit(): number;
    UploadFileCommit(UploadID: number, File: number, FileVersion: number, LogicalSize: number): void;
    UploadFileCommit_32bit(UploadID: number, File: number, FileVersion: number, LogicalSize: number): void;
    UploadFromDataURI(ObjVer: IObjVer, File: number, FileVersion: number, DataURI: string): void;
    UploadTemporaryFile(FilePath: string): number;
    UploadTemporaryFileBlock(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
    ): void;
    UploadTemporaryFileBlock_32bit(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
    ): void;
    UploadTemporaryFileBlockBegin(FileExtension: string): number;
    UploadTemporaryFileBlockBegin_32bit(FileExtension: string): number;
    UploadTemporaryFileCommit(UploadID: number, LogicalSize: number): void;
    UploadTemporaryFileCommit_32bit(UploadID: number, LogicalSize: number): void;
}

interface IVaultObjectFileOperationsAsync {
    AddEmptyFile(
        ObjVer: IObjVer,
        Title: string,
        Extension: string,
        successCallback?: (result: IFileVer) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddFile(
        ObjVer: IObjVer,
        Title: string,
        Extension: string,
        SourcePath: string,
        successCallback?: (result: IFileVer) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CloseUploadSession(
        UploadID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ConvertToPDF(
        ObjVer: IObjVer,
        FileID: number,
        StoreAsSeparateFile: boolean,
        OverwriteExistingFile: boolean,
        PDFA1b: boolean,
        FailOnUnsupportedSourceFiles: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFile(
        File: number,
        FileVersion: number,
        FilePath: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileAsDataURI(
        ObjVer: IObjVer,
        File: number,
        FileVersion: number,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileEx(
        File: number,
        FileVersion: number,
        FilePath: string,
        FileFormat: MFiles.MFFileFormat,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileInBlocks_Begin(
        File: number,
        FileVersion: number,
        successCallback?: (result: IFileDownloadSession) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileInBlocks_Begin_32bit(
        File: number,
        FileVersion: number,
        successCallback?: (result: IFileDownloadSession) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileInBlocks_BeginEx(
        File: number,
        FileVersion: number,
        FileFormat: MFiles.MFFileFormat,
        successCallback?: (result: IFileDownloadSession) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileInBlocks_BeginEx_32bit(
        File: number,
        FileVersion: number,
        FileFormat: MFiles.MFFileFormat,
        successCallback?: (result: IFileDownloadSession) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileInBlocks_ReadBlock(
        DownloadID: number,
        BlockSize: number,
        Offset: number,
        successCallback?: (result: ReadonlyArray<number>) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DownloadFileInBlocks_ReadBlock_32bit(
        DownloadID: number,
        BlockSize: number,
        Offset: number,
        successCallback?: (result: ReadonlyArray<number>) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFiles(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectFiles) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFilesForModificationInEventHandler(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectFiles) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFileSize(
        FileVer: IFileVer,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFileSize_32bit(
        FileVer: IFileVer,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLatestFileVersion(
        FileID: number,
        AllowCheckedOut: boolean,
        successCallback?: (result: IFileVer) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjIDOfFile(
        FileID: number,
        successCallback?: (result: IObjID) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPathInDefaultView(
        ObjID: IObjID,
        ObjectVersion: number,
        FileID: number,
        FileVersion: number,
        LatestSpecificBehavior: MFiles.MFLatestSpecificBehavior,
        UpdateFromServer: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPathInDefaultViewEx(
        ObjID: IObjID,
        ObjectVersion: number,
        FileID: number,
        FileVersion: number,
        LatestSpecificBehavior: MFiles.MFLatestSpecificBehavior,
        PreferTraditionalFolderLocation: boolean,
        UpdateFromServer: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    OpenFileInDefaultApplication(
        ParentWindow: number,
        ObjVer: IObjVer,
        FileVer: IFileVer,
        FileOpenMethod: MFiles.MFFileOpenMethod,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    PerformOCROperation(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        OCROptions: IOCROptions,
        ZoneRecognitionMode: MFiles.MFOCRZoneRecognitionMode,
        ZoneRecognitionPages: IOCRPages,
        ConvertToSearchablePDF: boolean,
        successCallback?: (result: IOCRPageResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveFile(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RenameFile(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        Title: string,
        Extension: string,
        UpdateSingleFileDocumentTitle: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateMetadataInFile(
        ObjVer: IObjVer,
        File: number,
        FailOnUnsupportedFiles: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFile(
        File: number,
        FileVersion: number,
        FilePath: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFileBlock(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFileBlock_32bit(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFileBlockBegin(
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFileBlockBegin_32bit(
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFileCommit(
        UploadID: number,
        File: number,
        FileVersion: number,
        LogicalSize: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFileCommit_32bit(
        UploadID: number,
        File: number,
        FileVersion: number,
        LogicalSize: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadFromDataURI(
        ObjVer: IObjVer,
        File: number,
        FileVersion: number,
        DataURI: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFile(
        FilePath: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFileBlock(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFileBlock_32bit(
        UploadID: number,
        TotalSizeInBytes: number,
        Offset: number,
        Block: ReadonlyArray<number>,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFileBlockBegin(
        FileExtension: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFileBlockBegin_32bit(
        FileExtension: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFileCommit(
        UploadID: number,
        LogicalSize: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UploadTemporaryFileCommit_32bit(
        UploadID: number,
        LogicalSize: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultObjectOperations {
    AddFavorite(ObjID: IObjID): IObjectVersionAndProperties;
    AddFavorites(ObjIDs: IObjIDs): IObjectVersionAndPropertiesOfMultipleObjects;
    ChangePermissionsToACL(
        ObjVer: IObjVer,
        AccessControlList: IAccessControlList,
        ChangeAllVersions: boolean,
    ): IObjectVersion;
    ChangePermissionsToNamedACL(ObjVer: IObjVer, NamedACL: number, ChangeAllVersions: boolean): IObjectVersion;
    CheckIn(ObjVer: IObjVer): IObjectVersion;
    CheckInMultipleObjects(ObjVers: IObjVers): IObjectVersions;
    CheckOut(ObjID: IObjID): IObjectVersion;
    CheckOutMultipleObjects(ObjIDs: IObjIDs): IObjectVersions;
    CreateNewAssignment(
        AssignmentName: string,
        AssignmentDescription: string,
        AssignedToUser: ITypedValue,
        Deadline: ITypedValue,
        AccessControlList: IAccessControlList,
    ): IObjectVersionAndProperties;
    CreateNewEmptySingleFileDocument(
        PropertyValues: IPropertyValues,
        Title: string,
        Extension: string,
        AccessControlList: IAccessControlList,
    ): IObjectVersionAndProperties;
    CreateNewObject(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        PropertyValues: IPropertyValues,
        SourceObjectFiles: ISourceObjectFiles,
        AccessControlList: IAccessControlList,
    ): IObjectVersionAndProperties;
    CreateNewObjectEx(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFiles: ISourceObjectFiles,
        SFD: boolean,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
    ): IObjectVersionAndProperties;
    CreateNewObjectExQuick(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFiles: ISourceObjectFiles,
        SFD: boolean,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
    ): number;
    CreateNewSFDObject(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFile: ISourceObjectFile,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
    ): IObjectVersionAndProperties;
    CreateNewSFDObjectQuick(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFile: ISourceObjectFile,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
    ): number;
    DelayedCheckIn(ObjVer: IObjVer): void;
    DeleteObject(ObjID: IObjID): IObjectVersion;
    DestroyObject(ObjID: IObjID, DestroyAllVersions: boolean, ObjectVersion: number): void;
    DestroyObjects(ObjIDs: IObjIDs): void;
    FollowObject(ObjID: IObjID, Follow: boolean): void;
    ForceUndoCheckout(ObjVer: IObjVer): IObjectVersion;
    GetCollectionMembers(ObjVer: IObjVer): IObjectVersions;
    GetHistory(ObjID: IObjID): IObjectVersions;
    GetLatestObjectVersionAndProperties(
        ObjID: IObjID,
        AllowCheckedOut: boolean,
        UpdateFromServer: boolean,
    ): IObjectVersionAndProperties;
    GetLatestObjVer(ObjID: IObjID, AllowCheckedOut: boolean, UpdateFromServer: boolean): IObjVer;
    GetLatestObjVerEx(
        ObjID: IObjID,
        AllowCheckedOut: boolean,
        UpdateFromServer: boolean,
        NotifyViews: boolean,
    ): IObjVer;
    GetMFilesURLForObject(
        ObjID: IObjID,
        TargetVersion: number,
        SpecificVersion: boolean,
        URLType: MFiles.MFilesURLType,
    ): string;
    GetMFilesURLForObjectOrFile(
        ObjID: IObjID,
        TargetVersion: number,
        SpecificVersion: boolean,
        File: number,
        URLType: MFiles.MFilesURLType,
    ): string;
    GetObjectGUID(ObjID: IObjID): string;
    GetObjectInfo(ObjVer: IObjVer, LatestVersion: boolean, UpdateFromServer: boolean): IObjectVersion;
    GetObjectInfoEx(
        ObjVer: IObjVer,
        LatestVersion: boolean,
        UpdateFromServer: boolean,
        NotifyViews: boolean,
    ): IObjectVersion;
    GetObjectLocationsInView(
        View: MFiles.MFBuiltInView | number,
        LatestSpecificBehavior: MFiles.MFLatestSpecificBehavior,
        ObjectVersion: IObjVer,
    ): IStrings;
    GetObjectPermissions(ObjVer: IObjVer): IObjectVersionPermissions;
    GetObjectVersionAndProperties(ObjVer: IObjVer, UpdateFromServer: boolean): IObjectVersionAndProperties;
    GetObjectVersionAndPropertiesOfMultipleObjects(
        ObjVers: IObjVers,
        LatestVersions: boolean,
        AllowCheckedOut: boolean,
        AllowMissingObjectVersions: boolean,
        UpdateFromServer: boolean,
    ): IObjectVersionAndPropertiesOfMultipleObjects;
    GetObjIDByGUID(ObjectGUID: string): IObjID;
    GetObjIDByOriginalObjID(OriginalVaultGUID: string, OriginalObjID: IObjID): IObjID;
    GetOfflineAvailability(ObjID: IObjID): boolean;
    GetOfflineObjIDs(): IObjIDs;
    GetRelationships(ObjVer: IObjVer, Mode: MFiles.MFRelationshipsMode): IObjectVersions;
    GetThumbnailAsBytes(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        Width: number,
        Height: number,
        GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean,
    ): ReadonlyArray<number>;
    IsObjectCheckedOut(ObjID: IObjID, UpdateFromServer: boolean): boolean;
    IsObjectCheckedOutToThisUserOnThisComputer(ObjID: IObjID, UpdateFromServer: boolean): boolean;
    IsObjectFollowed(ObjID: IObjID): boolean;
    IsSingleFileObject(ObjVer: IObjVer): boolean;
    MatchesSearchConditions(pIObjVer: IObjVer, pISearchConditions: ISearchConditions): boolean;
    MatchesSearchConditionsEx(
        pIObjectVersion: IObjectVersion,
        pISearchConditions: ISearchConditions,
        pIPropertyValues: IPropertyValues,
        pIObjectVersionAndPropertiesOfMultipleObjects: IObjectVersionAndPropertiesOfMultipleObjects,
    ): boolean;
    NotifyObjectAccess(ObjID: IObjID): IObjectVersionAndProperties;
    ProposeCheckOutForFile(ParentWindow: number, ObjVersionFile: IObjectFileAndVersion, CanCancel: boolean): boolean;
    RejectCheckInReminder(ObjVer: IObjVer): void;
    RemoveFavorite(ObjID: IObjID): IObjectVersionAndProperties;
    RemoveFavorites(ObjIDs: IObjIDs): IObjectVersionAndPropertiesOfMultipleObjects;
    ResolveConflict(ParticipantObjID: IObjID, KeepThis: boolean): IObjectVersions;
    Rollback(ObjID: IObjID, RollbackToVersion: number): IObjectVersion;
    SetExternalID(ObjID: IObjID, ExtID: string): void;
    SetObjectGUID(ObjID: IObjID, ObjectGUID: string): void;
    SetOfflineAvailability(ObjID: IObjID, AvailableInOfflineMode: boolean): void;
    SetSingleFileObject(ObjVer: IObjVer, SingleFile: boolean): void;
    ShowBasicEditObjectWindow(ParentWindow: number, ObjVer: IObjVer): IObjectWindowResult;
    ShowBasicNewObjectWindow(ParentWindow: number, ObjectType: IObjectType): IObjectWindowResult;
    ShowChangeStateDialogModal(ParentWindow: number, ObjectID: IObjID): void;
    ShowCheckInReminder(ParentWindow: number, ObjVer: IObjVer, Asynchronous: boolean): IObjectVersion;
    ShowCheckInReminderDialogModal(ParentWindow: number, ObjVer: IObjVer, ApplyEnvironmentConditions: boolean): boolean;
    ShowCheckoutPrompt(
        ParentWindow: number,
        Message: string,
        ObjID: IObjID,
        ShowCancel: boolean,
        AutoRejectConsequentPrompts: boolean,
    ): IObjectVersion;
    ShowCollectionMembersDialog(ParentWindow: number, ObjectVersion: IObjVer, Modeless: boolean): void;
    ShowCommentsDialogModal(ParentWindow: number, ObjectID: IObjID): void;
    ShowEditObjectWindow(ParentWindow: number, Mode: MFiles.MFObjectWindowMode, ObjVer: IObjVer): IObjectWindowResult;
    ShowHistoryDialogModal(ParentWindow: number, ObjectID: IObjID): void;
    ShowNewObjectWindow(
        ParentWindow: number,
        Mode: MFiles.MFObjectWindowMode,
        ObjectCreationInfo: IObjectCreationInfo,
    ): IObjectWindowResult;
    ShowPrefilledNewObjectWindow(
        ParentWindow: number,
        Mode: MFiles.MFObjectWindowMode,
        ObjectCreationInfo: IObjectCreationInfo,
        PrefilledPropertyValues: IPropertyValues,
        AccessControlList: IAccessControlList,
    ): IObjectWindowResult;
    ShowRelatedObjects(
        ParentWindow: number,
        SourceObject: IObjID,
        ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing,
        ViewSelectionDialogInfoText: string,
    ): void;
    ShowRelationshipsDialog(ParentWindow: number, ObjectVersion: IObjVer, Modeless: boolean): void;
    ShowSelectObjectHistoryDialogModal(ParentWindow: number, ObjectID: IObjID, WindowTitle: string): IObjOrFileVer;
    ShowSubObjectsDialogModal(ParentWindow: number, ObjectVersion: IObjVer): void;
    UndeleteObject(ObjID: IObjID): IObjectVersion;
    UndoCheckout(ObjVer: IObjVer): IObjectVersion;
    UndoCheckoutMultipleObjects(ObjVers: IObjVers): IObjectVersions;
}

interface IVaultObjectOperationsAsync {
    AddFavorite(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddFavorites(
        ObjIDs: IObjIDs,
        successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangePermissionsToACL(
        ObjVer: IObjVer,
        AccessControlList: IAccessControlList,
        ChangeAllVersions: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangePermissionsToNamedACL(
        ObjVer: IObjVer,
        NamedACL: number,
        ChangeAllVersions: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CheckIn(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CheckInMultipleObjects(
        ObjVers: IObjVers,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CheckOut(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CheckOutMultipleObjects(
        ObjIDs: IObjIDs,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewAssignment(
        AssignmentName: string,
        AssignmentDescription: string,
        AssignedToUser: ITypedValue,
        Deadline: ITypedValue,
        AccessControlList: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewEmptySingleFileDocument(
        PropertyValues: IPropertyValues,
        Title: string,
        Extension: string,
        AccessControlList: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewObject(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        PropertyValues: IPropertyValues,
        SourceObjectFiles: ISourceObjectFiles,
        AccessControlList: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewObjectEx(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFiles: ISourceObjectFiles,
        SFD: boolean,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewObjectExQuick(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFiles: ISourceObjectFiles,
        SFD: boolean,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewSFDObject(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFile: ISourceObjectFile,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreateNewSFDObjectQuick(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        Properties: IPropertyValues,
        SourceFile: ISourceObjectFile,
        CheckIn: boolean,
        AccessControlList: IAccessControlList,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DelayedCheckIn(
        ObjVer: IObjVer,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DeleteObject(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DestroyObject(
        ObjID: IObjID,
        DestroyAllVersions: boolean,
        ObjectVersion: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DestroyObjects(
        ObjIDs: IObjIDs,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    FollowObject(
        ObjID: IObjID,
        Follow: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ForceUndoCheckout(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetCollectionMembers(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetHistory(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLatestObjectVersionAndProperties(
        ObjID: IObjID,
        AllowCheckedOut: boolean,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLatestObjVer(
        ObjID: IObjID,
        AllowCheckedOut: boolean,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjVer) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLatestObjVerEx(
        ObjID: IObjID,
        AllowCheckedOut: boolean,
        UpdateFromServer: boolean,
        NotifyViews: boolean,
        successCallback?: (result: IObjVer) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetMFilesURLForObject(
        ObjID: IObjID,
        TargetVersion: number,
        SpecificVersion: boolean,
        URLType: MFiles.MFilesURLType,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetMFilesURLForObjectOrFile(
        ObjID: IObjID,
        TargetVersion: number,
        SpecificVersion: boolean,
        File: number,
        URLType: MFiles.MFilesURLType,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectGUID(
        ObjID: IObjID,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectInfo(
        ObjVer: IObjVer,
        LatestVersion: boolean,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectInfoEx(
        ObjVer: IObjVer,
        LatestVersion: boolean,
        UpdateFromServer: boolean,
        NotifyViews: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectLocationsInView(
        View: MFiles.MFBuiltInView | number,
        LatestSpecificBehavior: MFiles.MFLatestSpecificBehavior,
        ObjectVersion: IObjVer,
        successCallback?: (result: IStrings) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectPermissions(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersionPermissions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectVersionAndProperties(
        ObjVer: IObjVer,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectVersionAndPropertiesOfMultipleObjects(
        ObjVers: IObjVers,
        LatestVersions: boolean,
        AllowCheckedOut: boolean,
        AllowMissingObjectVersions: boolean,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjIDByGUID(
        ObjectGUID: string,
        successCallback?: (result: IObjID) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjIDByOriginalObjID(
        OriginalVaultGUID: string,
        OriginalObjID: IObjID,
        successCallback?: (result: IObjID) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetOfflineAvailability(
        ObjID: IObjID,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetOfflineObjIDs(
        successCallback?: (result: IObjIDs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetRelationships(
        ObjVer: IObjVer,
        Mode: MFiles.MFRelationshipsMode,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetThumbnailAsBytes(
        ObjVer: IObjVer,
        FileVer: IFileVer,
        Width: number,
        Height: number,
        GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean,
        successCallback?: (result: ReadonlyArray<number>) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsObjectCheckedOut(
        ObjID: IObjID,
        UpdateFromServer: boolean,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsObjectCheckedOutToThisUserOnThisComputer(
        ObjID: IObjID,
        UpdateFromServer: boolean,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsObjectFollowed(
        ObjID: IObjID,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsSingleFileObject(
        ObjVer: IObjVer,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    MatchesSearchConditions(
        pIObjVer: IObjVer,
        pISearchConditions: ISearchConditions,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    MatchesSearchConditionsEx(
        pIObjectVersion: IObjectVersion,
        pISearchConditions: ISearchConditions,
        pIPropertyValues: IPropertyValues,
        pIObjectVersionAndPropertiesOfMultipleObjects: IObjectVersionAndPropertiesOfMultipleObjects,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    NotifyObjectAccess(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ProposeCheckOutForFile(
        ParentWindow: number,
        ObjVersionFile: IObjectFileAndVersion,
        CanCancel: boolean,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RejectCheckInReminder(
        ObjVer: IObjVer,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveFavorite(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveFavorites(
        ObjIDs: IObjIDs,
        successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ResolveConflict(
        ParticipantObjID: IObjID,
        KeepThis: boolean,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    Rollback(
        ObjID: IObjID,
        RollbackToVersion: number,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetExternalID(
        ObjID: IObjID,
        ExtID: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetObjectGUID(
        ObjID: IObjID,
        ObjectGUID: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetOfflineAvailability(
        ObjID: IObjID,
        AvailableInOfflineMode: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetSingleFileObject(
        ObjVer: IObjVer,
        SingleFile: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowBasicEditObjectWindow(
        ParentWindow: number,
        ObjVer: IObjVer,
        successCallback?: (result: IObjectWindowResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowBasicNewObjectWindow(
        ParentWindow: number,
        ObjectType: IObjectType,
        successCallback?: (result: IObjectWindowResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowChangeStateDialogModal(
        ParentWindow: number,
        ObjectID: IObjID,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowCheckInReminder(
        ParentWindow: number,
        ObjVer: IObjVer,
        Asynchronous: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowCheckInReminderDialogModal(
        ParentWindow: number,
        ObjVer: IObjVer,
        ApplyEnvironmentConditions: boolean,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowCheckoutPrompt(
        ParentWindow: number,
        Message: string,
        ObjID: IObjID,
        ShowCancel: boolean,
        AutoRejectConsequentPrompts: boolean,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowCollectionMembersDialog(
        ParentWindow: number,
        ObjectVersion: IObjVer,
        Modeless: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowCommentsDialogModal(
        ParentWindow: number,
        ObjectID: IObjID,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowEditObjectWindow(
        ParentWindow: number,
        Mode: MFiles.MFObjectWindowMode,
        ObjVer: IObjVer,
        successCallback?: (result: IObjectWindowResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowHistoryDialogModal(
        ParentWindow: number,
        ObjectID: IObjID,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowNewObjectWindow(
        ParentWindow: number,
        Mode: MFiles.MFObjectWindowMode,
        ObjectCreationInfo: IObjectCreationInfo,
        successCallback?: (result: IObjectWindowResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowPrefilledNewObjectWindow(
        ParentWindow: number,
        Mode: MFiles.MFObjectWindowMode,
        ObjectCreationInfo: IObjectCreationInfo,
        PrefilledPropertyValues: IPropertyValues,
        AccessControlList: IAccessControlList,
        successCallback?: (result: IObjectWindowResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowRelatedObjects(
        ParentWindow: number,
        SourceObject: IObjID,
        ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing,
        ViewSelectionDialogInfoText: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowRelationshipsDialog(
        ParentWindow: number,
        ObjectVersion: IObjVer,
        Modeless: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowSelectObjectHistoryDialogModal(
        ParentWindow: number,
        ObjectID: IObjID,
        WindowTitle: string,
        successCallback?: (result: IObjOrFileVer) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowSubObjectsDialogModal(
        ParentWindow: number,
        ObjectVersion: IObjVer,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UndeleteObject(
        ObjID: IObjID,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UndoCheckout(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UndoCheckoutMultipleObjects(
        ObjVers: IObjVers,
        successCallback?: (result: IObjectVersions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultObjectPropertyOperations {
    ApproveOrRejectAssignment(ObjVer: IObjVer, Approve: boolean): IObjectVersionAndProperties;
    ApproveOrRejectAssignmentByUser(ObjVer: IObjVer, Approve: boolean, UserID: number): IObjectVersionAndProperties;
    CreatePropertiesFromFileInformation(FileInformation: IFileInformation): IPropertyValues;
    GenerateAutomaticPermissionsFromPropertyValues(PropertyValues: IPropertyValues): IAccessControlList;
    GetProperties(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValues;
    GetPropertiesAsXML(ObjVer: IObjVer, UpdateFromServer: boolean): string;
    GetPropertiesForDisplay(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValuesForDisplay;
    GetPropertiesForMetadataSync(ObjVer: IObjVer, Format: MFiles.MFMetadataSyncFormat): INamedValues;
    GetPropertiesOfMultipleObjects(ObjectVersions: IObjVers): IPropertyValuesOfMultipleObjects;
    GetPropertiesWithIconClues(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValuesWithIconClues;
    GetPropertiesWithIconCluesOfMultipleObjects(
        ObjectVersions: IObjVers,
    ): IPropertyValuesWithIconCluesOfMultipleObjects;
    GetProperty(ObjVer: IObjVer, Property: number): IPropertyValue;
    GetVersionComment(ObjVer: IObjVer): IVersionComment;
    GetVersionCommentHistory(ObjVer: IObjVer): IVersionComments;
    GetWorkflowState(ObjVer: IObjVer, UpdateFromServer: boolean): IObjectVersionWorkflowState;
    MarkAssignmentComplete(ObjVer: IObjVer): IObjectVersionAndProperties;
    MarkAssignmentCompleteByUser(ObjVer: IObjVer, UserID: number): IObjectVersionAndProperties;
    RemoveProperty(ObjVer: IObjVer, Property: number): IObjectVersionAndProperties;
    SetAllProperties(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        PropertyValues: IPropertyValues,
    ): IObjectVersionAndProperties;
    SetAllPropertiesWithPermissions(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
    ): IObjectVersionAndProperties;
    SetAllPropertiesWithPermissionsEx(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
        ElectronicSignature: any,
    ): IObjectVersionAndProperties;
    SetCreationInfoAdmin(
        ObjVer: IObjVer,
        UpdateCreatedBy: boolean,
        CreatedBy: ITypedValue,
        UpdateCreated: boolean,
        CreatedUtc: ITypedValue,
    ): IObjectVersionAndProperties;
    SetLastModificationInfoAdmin(
        ObjVer: IObjVer,
        UpdateLastModifiedBy: boolean,
        LastModifiedBy: ITypedValue,
        UpdateLastModified: boolean,
        LastModifiedUtc: ITypedValue,
    ): IObjectVersionAndProperties;
    SetProperties(ObjVer: IObjVer, PropertyValues: IPropertyValues): IObjectVersionAndProperties;
    SetPropertiesOfMultipleObjects(
        SetPropertiesParamsOfObjects: ISetPropertiesParamsOfMultipleObjects,
    ): IObjectVersionAndPropertiesOfMultipleObjects;
    SetPropertiesWithPermissions(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
    ): IObjectVersionAndProperties;
    SetPropertiesWithPermissionsEx(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
        ElectronicSignature: any,
    ): IObjectVersionAndProperties;
    SetProperty(ObjVer: IObjVer, PropertyValue: IPropertyValue): IObjectVersionAndProperties;
    SetVersionComment(ObjVer: IObjVer, VersionComment: IPropertyValue): IObjectVersionAndProperties;
    SetWorkflowState(ObjVer: IObjVer, WorkflowState: IObjectVersionWorkflowState): IObjectVersionAndProperties;
    SetWorkflowStateEx(
        ObjVer: IObjVer,
        WorkflowState: IObjectVersionWorkflowState,
        ElectronicSignature: any,
    ): IObjectVersionAndProperties;
    SetWorkflowStateTransition(
        ObjVer: IObjVer,
        Workflow: number,
        lStateTransition: number,
        lVersionComment: string,
    ): IObjectVersionAndProperties;
    SetWorkflowStateTransitionEx(
        ObjVer: IObjVer,
        Workflow: number,
        StateTransition: number,
        VersionComment: string,
        ElectronicSignature: any,
    ): IObjectVersionAndProperties;
}

interface IVaultObjectPropertyOperationsAsync {
    ApproveOrRejectAssignment(
        ObjVer: IObjVer,
        Approve: boolean,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ApproveOrRejectAssignmentByUser(
        ObjVer: IObjVer,
        Approve: boolean,
        UserID: number,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CreatePropertiesFromFileInformation(
        FileInformation: IFileInformation,
        successCallback?: (result: IPropertyValues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GenerateAutomaticPermissionsFromPropertyValues(
        PropertyValues: IPropertyValues,
        successCallback?: (result: IAccessControlList) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetProperties(
        ObjVer: IObjVer,
        UpdateFromServer: boolean,
        successCallback?: (result: IPropertyValues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertiesAsXML(
        ObjVer: IObjVer,
        UpdateFromServer: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertiesForDisplay(
        ObjVer: IObjVer,
        UpdateFromServer: boolean,
        successCallback?: (result: IPropertyValuesForDisplay) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertiesForMetadataSync(
        ObjVer: IObjVer,
        Format: MFiles.MFMetadataSyncFormat,
        successCallback?: (result: INamedValues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertiesOfMultipleObjects(
        ObjectVersions: IObjVers,
        successCallback?: (result: IPropertyValuesOfMultipleObjects) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertiesWithIconClues(
        ObjVer: IObjVer,
        UpdateFromServer: boolean,
        successCallback?: (result: IPropertyValuesWithIconClues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertiesWithIconCluesOfMultipleObjects(
        ObjectVersions: IObjVers,
        successCallback?: (result: IPropertyValuesWithIconCluesOfMultipleObjects) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetProperty(
        ObjVer: IObjVer,
        Property: number,
        successCallback?: (result: IPropertyValue) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetVersionComment(
        ObjVer: IObjVer,
        successCallback?: (result: IVersionComment) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetVersionCommentHistory(
        ObjVer: IObjVer,
        successCallback?: (result: IVersionComments) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowState(
        ObjVer: IObjVer,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectVersionWorkflowState) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    MarkAssignmentComplete(
        ObjVer: IObjVer,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    MarkAssignmentCompleteByUser(
        ObjVer: IObjVer,
        UserID: number,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveProperty(
        ObjVer: IObjVer,
        Property: number,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetAllProperties(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        PropertyValues: IPropertyValues,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetAllPropertiesWithPermissions(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetAllPropertiesWithPermissionsEx(
        ObjVer: IObjVer,
        AllowModifyingCheckedInObject: boolean,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
        ElectronicSignature: any,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetCreationInfoAdmin(
        ObjVer: IObjVer,
        UpdateCreatedBy: boolean,
        CreatedBy: ITypedValue,
        UpdateCreated: boolean,
        CreatedUtc: ITypedValue,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetLastModificationInfoAdmin(
        ObjVer: IObjVer,
        UpdateLastModifiedBy: boolean,
        LastModifiedBy: ITypedValue,
        UpdateLastModified: boolean,
        LastModifiedUtc: ITypedValue,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetProperties(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetPropertiesOfMultipleObjects(
        SetPropertiesParamsOfObjects: ISetPropertiesParamsOfMultipleObjects,
        successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetPropertiesWithPermissions(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetPropertiesWithPermissionsEx(
        ObjVer: IObjVer,
        PropertyValues: IPropertyValues,
        ACLEnforcingMode: MFiles.MFACLEnforcingMode,
        ACLProvided: IAccessControlList,
        ElectronicSignature: any,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetProperty(
        ObjVer: IObjVer,
        PropertyValue: IPropertyValue,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetVersionComment(
        ObjVer: IObjVer,
        VersionComment: IPropertyValue,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetWorkflowState(
        ObjVer: IObjVer,
        WorkflowState: IObjectVersionWorkflowState,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetWorkflowStateEx(
        ObjVer: IObjVer,
        WorkflowState: IObjectVersionWorkflowState,
        ElectronicSignature: any,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetWorkflowStateTransition(
        ObjVer: IObjVer,
        Workflow: number,
        lStateTransition: number,
        lVersionComment: string,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetWorkflowStateTransitionEx(
        ObjVer: IObjVer,
        Workflow: number,
        StateTransition: number,
        VersionComment: string,
        ElectronicSignature: any,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultObjectSearchOperations {
    FindFile(RelativePath: string, UpdateFromServer: boolean): IObjectFileAndVersion;
    FindObjectVersionAndProperties(RelativePath: string, UpdateFromServer: boolean): IObjectVersionAndProperties;
    GetFacetValues(
        SearchConditions: ISearchConditions,
        Facets: IExpressions,
        FacetValuesMaxCount: number,
        Flags: MFiles.MFFacetSearchFlags,
    ): IStringData;
    GetFacetValuesByPath(
        RelativePath: string,
        Facets: IExpressions,
        FacetValuesMaxCount: number,
        Flags: MFiles.MFFacetSearchFlags,
    ): IStringData;
    GetObjectCountInSearch(SearchConditions: ISearchConditions, SearchFlags: MFiles.MFSearchFlags): number;
    GetObjectsInPath(RelativePath: string, SortResults: boolean, UpdateFromServer: boolean): IObjectSearchResults;
    GetSearchHits(Input: string, SearchCondition: ISearchCondition): IStrings;
    IsObjectPathInMFiles(RelativePath: string): boolean;
    SearchForObjectsByCondition(SearchCondition: ISearchCondition, SortResults: boolean): IObjectSearchResults;
    SearchForObjectsByConditions(
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        SortResults: boolean,
    ): IObjectSearchResults;
    SearchForObjectsByConditionsEx(
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        SortResults: boolean,
        MaxResultCount: number,
        SearchTimeoutInSeconds: number,
    ): IObjectSearchResults;
    SearchForObjectsByConditionsXML(SearchConditions: ISearchConditions, SortResults: boolean): IXMLSearchResult;
    SearchForObjectsByExportedSearchConditions(
        ExportedSearchString: string,
        SortResults: boolean,
    ): IObjectSearchResults;
    SearchForObjectsByExportedSearchConditionsXML(SearchString: string, SortResults: boolean): IXMLSearchResult;
    SearchForObjectsByString(
        SearchString: string,
        SortResults: boolean,
        FullTextSearchFlags: MFiles.MFFullTextSearchFlags,
    ): IObjectSearchResults;
}

interface IVaultObjectSearchOperationsAsync {
    FindFile(
        RelativePath: string,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectFileAndVersion) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    FindObjectVersionAndProperties(
        RelativePath: string,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectVersionAndProperties) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFacetValues(
        SearchConditions: ISearchConditions,
        Facets: IExpressions,
        FacetValuesMaxCount: number,
        Flags: MFiles.MFFacetSearchFlags,
        successCallback?: (result: IStringData) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFacetValuesByPath(
        RelativePath: string,
        Facets: IExpressions,
        FacetValuesMaxCount: number,
        Flags: MFiles.MFFacetSearchFlags,
        successCallback?: (result: IStringData) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectCountInSearch(
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectsInPath(
        RelativePath: string,
        SortResults: boolean,
        UpdateFromServer: boolean,
        successCallback?: (result: IObjectSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetSearchHits(
        Input: string,
        SearchCondition: ISearchCondition,
        successCallback?: (result: IStrings) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    IsObjectPathInMFiles(
        RelativePath: string,
        successCallback?: (result: boolean) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByCondition(
        SearchCondition: ISearchCondition,
        SortResults: boolean,
        successCallback?: (result: IObjectSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByConditions(
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        SortResults: boolean,
        successCallback?: (result: IObjectSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByConditionsEx(
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        SortResults: boolean,
        MaxResultCount: number,
        SearchTimeoutInSeconds: number,
        successCallback?: (result: IObjectSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByConditionsXML(
        SearchConditions: ISearchConditions,
        SortResults: boolean,
        successCallback?: (result: IXMLSearchResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByExportedSearchConditions(
        ExportedSearchString: string,
        SortResults: boolean,
        successCallback?: (result: IObjectSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByExportedSearchConditionsXML(
        SearchString: string,
        SortResults: boolean,
        successCallback?: (result: IXMLSearchResult) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForObjectsByString(
        SearchString: string,
        SortResults: boolean,
        FullTextSearchFlags: MFiles.MFFullTextSearchFlags,
        successCallback?: (result: IObjectSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultObjectTypeOperations {
    AddObjectTypeAdmin(ObjectType: IObjectTypeAdmin): IObjectTypeAdmin;
    GetBuiltInObjectType(ObjectType: MFiles.MFBuiltInObjectType): IObjectType;
    GetObjectType(ObjectType: MFiles.MFBuiltInObjectType | number): IObjectType;
    GetObjectTypeAdmin(ObjectType: MFiles.MFBuiltInObjectType | number): IObjectTypeAdmin;
    GetObjectTypeIDByAlias(Alias: string): number;
    GetObjectTypeIDByGUID(ObjectTypeGUID: string): number;
    GetObjectTypes(): IObjectTypes;
    GetObjectTypesAdmin(): IObjectTypesAdmin;
    RefreshExternalObjectType(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        RefreshType: MFiles.MFExternalDBRefreshType,
    ): void;
    RemoveObjectTypeAdmin(ObjectTypeID: number): void;
    UpdateObjectTypeAdmin(ObjectType: IObjectTypeAdmin): IObjectTypeAdmin;
    UpdateObjectTypeWithAutomaticPermissionsAdmin(
        ObjectType: IObjectTypeAdmin,
        AutomaticPermissionsForcedActive: boolean,
    ): IObjectTypeAdmin;
}

interface IVaultObjectTypeOperationsAsync {
    AddObjectTypeAdmin(
        ObjectType: IObjectTypeAdmin,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetBuiltInObjectType(
        ObjectType: MFiles.MFBuiltInObjectType,
        successCallback?: (result: IObjectType) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectType(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IObjectType) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectTypeAdmin(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectTypeIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectTypeIDByGUID(
        ObjectTypeGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectTypes(
        successCallback?: (result: IObjectTypes) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetObjectTypesAdmin(
        successCallback?: (result: IObjectTypesAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RefreshExternalObjectType(
        ObjectType: MFiles.MFBuiltInObjectType | number,
        RefreshType: MFiles.MFExternalDBRefreshType,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveObjectTypeAdmin(
        ObjectTypeID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateObjectTypeAdmin(
        ObjectType: IObjectTypeAdmin,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateObjectTypeWithAutomaticPermissionsAdmin(
        ObjectType: IObjectTypeAdmin,
        AutomaticPermissionsForcedActive: boolean,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultOnServer {
    readonly GUID: string;
    readonly Name: string;
    LogIn(): IVault;
    LogInAsUser(
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        TimeZone: ITimeZoneInformation,
    ): IVault;
    LogInAsUserWithAuthenticationData(
        PluginInfo: IPluginInfo,
        AuthenticationData: INamedValues,
        AttemptIdentifier: string,
        TimeZone: ITimeZoneInformation,
    ): IAuthenticationResult;
    LogInAsUserWithSPN(
        AuthType: MFiles.MFAuthType,
        UserName: string | null,
        Password: string | null,
        Domain: string | null,
        SPN: string | null,
        TimeZone: ITimeZoneInformation,
    ): IVault;
}

interface IVaultProperties {
    DisplayName: string;
    EncryptionOfFileDataAtRest: boolean;
    ExtendedMetadataDrivenPermissions: boolean;
    FileDataConnectionString: string;
    FileDataStorageType: MFiles.MFFileDataStorage;
    FullTextSearchLanguage: string;
    Icon: ReadonlyArray<number>;
    MainDataFolder: string;
    SeparateLocationForFileData: IAdditionalFolders;
    SQLDatabase: ISQLDatabase;
    VaultGUID: string;
    Clone(): IVaultProperties;
}

interface IVaultPropertyDefOperations {
    AddPropertyDefAdmin(PropertyDefAdmin: IPropertyDefAdmin, ResetLastUsedValue: ITypedValue): IPropertyDefAdmin;
    GetBuiltInPropertyDef(PropertyDefType: MFiles.MFBuiltInPropertyDef): IPropertyDef;
    GetPropertyDef(PropertyDef: MFiles.MFBuiltInPropertyDef | number): IPropertyDef;
    GetPropertyDefAdmin(PropertyDef: MFiles.MFBuiltInPropertyDef | number): IPropertyDefAdmin;
    GetPropertyDefIDByAlias(Alias: string): number;
    GetPropertyDefIDByGUID(PropertyDefGUID: string): number;
    GetPropertyDefs(): IPropertyDefs;
    GetPropertyDefsAdmin(): IPropertyDefsAdmin;
    Recalculate(PropertyDef: MFiles.MFBuiltInPropertyDef | number, RecalculateCurrentlyEmptyValuesOnly: boolean): void;
    RemovePropertyDefAdmin(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        CopyToAnotherPropertyDef: boolean,
        TargetPropertyDef: number,
        Append: boolean,
        DeleteFromClassesIfNecessary: boolean,
    ): void;
    UpdatePropertyDefAdmin(PropertyDefAdmin: IPropertyDefAdmin, ResetLastUsedValue: ITypedValue): void;
    UpdatePropertyDefWithAutomaticPermissionsAdmin(
        PropertyDefAdmin: IPropertyDefAdmin,
        ResetLastUsedValue: ITypedValue,
        AutomaticPermissionsForcedActive: boolean,
    ): void;
}

interface IVaultPropertyDefOperationsAsync {
    AddPropertyDefAdmin(
        PropertyDefAdmin: IPropertyDefAdmin,
        ResetLastUsedValue: ITypedValue,
        successCallback?: (result: IPropertyDefAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetBuiltInPropertyDef(
        PropertyDefType: MFiles.MFBuiltInPropertyDef,
        successCallback?: (result: IPropertyDef) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyDef(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        successCallback?: (result: IPropertyDef) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyDefAdmin(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        successCallback?: (result: IPropertyDefAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyDefIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyDefIDByGUID(
        PropertyDefGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyDefs(
        successCallback?: (result: IPropertyDefs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyDefsAdmin(
        successCallback?: (result: IPropertyDefsAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    Recalculate(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        RecalculateCurrentlyEmptyValuesOnly: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemovePropertyDefAdmin(
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        CopyToAnotherPropertyDef: boolean,
        TargetPropertyDef: number,
        Append: boolean,
        DeleteFromClassesIfNecessary: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdatePropertyDefAdmin(
        PropertyDefAdmin: IPropertyDefAdmin,
        ResetLastUsedValue: ITypedValue,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdatePropertyDefWithAutomaticPermissionsAdmin(
        PropertyDefAdmin: IPropertyDefAdmin,
        ResetLastUsedValue: ITypedValue,
        AutomaticPermissionsForcedActive: boolean,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultScheduledJobManagementOperations {
    AddScheduledJob(ScheduledJob: IScheduledJob): number;
    CancelScheduledJob(ID: number): void;
    GetScheduledJob(ID: number): IScheduledJob;
    GetScheduledJobRunInfo(ID: number): IScheduledJobRunInfo;
    GetScheduledJobs(): IScheduledJobs;
    ModifyScheduledJob(ScheduledJob: IScheduledJob): void;
    RemoveScheduledJob(ID: number): void;
    StartScheduledJob(ID: number): void;
}

interface IVaultScheduledJobManagementOperationsAsync {
    AddScheduledJob(
        ScheduledJob: IScheduledJob,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    CancelScheduledJob(
        ID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetScheduledJob(
        ID: number,
        successCallback?: (result: IScheduledJob) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetScheduledJobRunInfo(
        ID: number,
        successCallback?: (result: IScheduledJobRunInfo) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetScheduledJobs(
        successCallback?: (result: IScheduledJobs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ModifyScheduledJob(
        ScheduledJob: IScheduledJob,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveScheduledJob(
        ID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    StartScheduledJob(
        ID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultServerDataPushOperations {
    CloneVaultForServerDataPush(ServerDataPushSink: IServerDataPushSink): IVault;
    SendCancel(RequestID: number): void;
    SendError(RequestID: number, Error: string): void;
    SendHeartbeat(RequestID: number): void;
    SendResponse(RequestID: number, JsonResponseContent: string): void;
    SetServerDataPushSink(ServerDataPushSink: IServerDataPushSink): void;
}

interface IVaultServerDataPushOperationsAsync {
    CloneVaultForServerDataPush(
        ServerDataPushSink: IServerDataPushSink,
        successCallback?: (result: IVault) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SendCancel(
        RequestID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SendError(
        RequestID: number,
        Error: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SendHeartbeat(
        RequestID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SendResponse(
        RequestID: number,
        JsonResponseContent: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetServerDataPushSink(
        ServerDataPushSink: IServerDataPushSink,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultSharedLinkOperations {
    CreateSharedLink(SharedLinkCreationInfo: ISharedLinkInfo): ISharedLinkInfo;
    DeleteSharedLink(AccessKey: string): void;
    GetSharedLink(AccessKey: string): ISharedLinkInfo;
    GetSharedLinks(CreatedByUser: number): ISharedLinkInfos;
    GetSharedLinksByObject(ObjID: IObjID): ISharedLinkInfos;
}

interface IVaultSharedLinkOperationsAsync {
    CreateSharedLink(
        SharedLinkCreationInfo: ISharedLinkInfo,
        successCallback?: (result: ISharedLinkInfo) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    DeleteSharedLink(
        AccessKey: string,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetSharedLink(
        AccessKey: string,
        successCallback?: (result: ISharedLinkInfo) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetSharedLinks(
        CreatedByUser: number,
        successCallback?: (result: ISharedLinkInfos) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetSharedLinksByObject(
        ObjID: IObjID,
        successCallback?: (result: ISharedLinkInfos) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultsOnServer {
    readonly Count: number;
    GetVaultByGUID(GUID: string): IVaultOnServer;
    GetVaultByName(Name: string): IVaultOnServer;
    GetVaultIndexByGUID(GUID: string): number;
    GetVaultIndexByName(Name: string): number;
    Item(Index: number): IVaultOnServer;
}

interface IVaultTraditionalFolderOperations {
    GetTraditionalFolderContents(Folder: number): ITraditionalFolderContents;
}

interface IVaultTraditionalFolderOperationsAsync {
    GetTraditionalFolderContents(
        Folder: number,
        successCallback?: (result: ITraditionalFolderContents) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultUI {
    readonly Events: IVaultUIEvents;
    readonly Vault: IVault;
    readonly VaultEntry: IVaultEntry;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void;
}

interface IVaultUIEvents extends IEvents {
    OnNewVaultEntry?(vaultEntry: IVaultEntry): void | IVaultEntryEvents;
    OnStarted?(): void;
    OnStop?(): void;
}

interface IVaultUserGroupOperations {
    AddOrUndeleteUserGroup(UserGroup: IUserGroupAdmin): IUserGroupAdmin;
    AddUserGroupAdmin(UserGroup: IUserGroupAdmin): IUserGroupAdmin;
    GetGroupsOfUserOrGroup(UserOrGroupID: number, IsGroup: boolean): IUserGroups;
    GetUserGroup(UserGroupID: MFiles.MFBuiltInUserGroup | number): IUserGroup;
    GetUserGroupAdmin(UserGroupID: MFiles.MFBuiltInUserGroup | number): IUserGroupAdmin;
    GetUserGroupIDByAlias(Alias: string): number;
    GetUserGroupIDByGUID(UserGroupGUID: string): number;
    GetUserGroupList(): IKeyNamePairs;
    GetUserGroups(): IUserGroups;
    GetUserGroupsAdmin(): IUserGroupsAdmin;
    RemoveUserGroupAdmin(UserGroupID: MFiles.MFBuiltInUserGroup | number): void;
    UpdateUserGroupAdmin(UserGroup: IUserGroupAdmin): void;
}

interface IVaultUserGroupOperationsAsync {
    AddOrUndeleteUserGroup(
        UserGroup: IUserGroupAdmin,
        successCallback?: (result: IUserGroupAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddUserGroupAdmin(
        UserGroup: IUserGroupAdmin,
        successCallback?: (result: IUserGroupAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetGroupsOfUserOrGroup(
        UserOrGroupID: number,
        IsGroup: boolean,
        successCallback?: (result: IUserGroups) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroup(
        UserGroupID: MFiles.MFBuiltInUserGroup | number,
        successCallback?: (result: IUserGroup) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroupAdmin(
        UserGroupID: MFiles.MFBuiltInUserGroup | number,
        successCallback?: (result: IUserGroupAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroupIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroupIDByGUID(
        UserGroupGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroupList(
        successCallback?: (result: IKeyNamePairs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroups(
        successCallback?: (result: IUserGroups) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserGroupsAdmin(
        successCallback?: (result: IUserGroupsAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveUserGroupAdmin(
        UserGroupID: MFiles.MFBuiltInUserGroup | number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateUserGroupAdmin(
        UserGroup: IUserGroupAdmin,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultUserOperations {
    AddOrUndeleteUserAccount(User: IUserAccount): IUserAccount;
    AddUserAccount(User: IUserAccount): IUserAccount;
    GetLoginAccountOfUser(UserID: number): ILoginAccount;
    GetLoginAccounts(): ILoginAccounts;
    GetUserAccount(UserID: number): IUserAccount;
    GetUserAccounts(): IUserAccounts;
    GetUserIDByGUID(UserGUID: string): number;
    GetUserList(): IKeyNamePairs;
    ModifyUserAccount(User: IUserAccount): void;
    RemoveUserAccount(UserID: number): void;
}

interface IVaultUserOperationsAsync {
    AddOrUndeleteUserAccount(
        User: IUserAccount,
        successCallback?: (result: IUserAccount) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddUserAccount(
        User: IUserAccount,
        successCallback?: (result: IUserAccount) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLoginAccountOfUser(
        UserID: number,
        successCallback?: (result: ILoginAccount) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetLoginAccounts(
        successCallback?: (result: ILoginAccounts) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserAccount(
        UserID: number,
        successCallback?: (result: IUserAccount) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserAccounts(
        successCallback?: (result: IUserAccounts) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserIDByGUID(
        UserGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetUserList(
        successCallback?: (result: IKeyNamePairs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ModifyUserAccount(
        User: IUserAccount,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveUserAccount(
        UserID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultUserSettingOperations {
    ChangeVaultLanguage(Language: number): void;
    GetSubstituteUsers(): IUserOrUserGroupIDs;
    GetVaultLanguage(): number;
    GetVaultLanguageCode(): string;
    SetSubstituteUsers(UserOrUserGroupIDs: IUserOrUserGroupIDs): void;
}

interface IVaultUserSettingOperationsAsync {
    ChangeVaultLanguage(
        Language: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetSubstituteUsers(
        successCallback?: (result: IUserOrUserGroupIDs) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetVaultLanguage(
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetVaultLanguageCode(
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SetSubstituteUsers(
        UserOrUserGroupIDs: IUserOrUserGroupIDs,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultValueListItemOperations {
    AddValueListItem(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItem: IValueListItem,
        AdministrativeOperation: boolean,
    ): IValueListItem;
    ChangeAutomaticPermissionsToACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        AccessControlList: IAccessControlList,
        NameForAutomaticPermissions: string,
        CanDeactivate: boolean,
        AutomaticPermissionsOperationOptions: MFiles.MFAutomaticPermissionsOperationOptions,
    ): void;
    ChangeAutomaticPermissionsToItemsOwnPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        CanDeactivate: boolean,
        AutomaticPermissionsOperationOptions: MFiles.MFAutomaticPermissionsOperationOptions,
    ): void;
    ChangeAutomaticPermissionsToNamedACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        NamedACL: number,
        CanDeactivate: boolean,
        AutomaticPermissionsOperationOptions: MFiles.MFAutomaticPermissionsOperationOptions,
    ): void;
    ChangePermissionsToACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        AccessControlList: IAccessControlList,
    ): void;
    ChangePermissionsToNamedACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        NamedACL: number,
    ): void;
    ClearAutomaticPermissions(ValueList: MFiles.MFBuiltInValueList | number, ValueListItemID: number): void;
    GetValueListItemByDisplayID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemDisplayID: string,
    ): IValueListItem;
    GetValueListItemByDisplayIDEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemDisplayID: string,
        ReplaceCurrentUserWithCallersIdentity: boolean,
    ): IValueListItem;
    GetValueListItemByGUID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ItemGUID: string,
        AllowDeletedItems: boolean,
        ReplaceCurrentUserWithCallersIdentity: boolean,
    ): IValueListItem;
    GetValueListItemByID(ValueList: MFiles.MFBuiltInValueList | number, ValueListItemID: number): IValueListItem;
    GetValueListItemByIDEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        ReplaceCurrentUserWithCallersIdentity: boolean,
    ): IValueListItem;
    GetValueListItemIDByGUID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ItemGUID: string,
        AllowDeletedItems: boolean,
    ): number;
    GetValueListItems(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
    ): IValueListItems;
    GetValueListItemsEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
    ): IValueListItems;
    GetValueListItemsEx2(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
    ): IValueListItems;
    GetValueListItemsWithPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
    ): IValueListItemsWithPermissions;
    RemoveValueListItem(ValueList: MFiles.MFBuiltInValueList | number, Item: number): void;
    SearchForValueListItemsEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        SearchConditions: ISearchConditions,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
    ): IValueListItemSearchResults;
    SearchForValueListItemsEx2(
        ValueList: MFiles.MFBuiltInValueList | number,
        SearchConditions: ISearchConditions,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        MaxResults: number,
    ): IValueListItemSearchResults;
    SearchForValueListItemsWithPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        SearchConditions: ISearchConditions,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        MaxResults: number,
    ): IValueListItemSearchResultsWithPermissions;
    UndeleteValueListItem(ValueList: MFiles.MFBuiltInValueList | number, ValueListItemID: number): void;
    UpdateValueListItem(ValueListItem: IValueListItem): void;
}

interface IVaultValueListItemOperationsAsync {
    AddValueListItem(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItem: IValueListItem,
        AdministrativeOperation: boolean,
        successCallback?: (result: IValueListItem) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangeAutomaticPermissionsToACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        AccessControlList: IAccessControlList,
        NameForAutomaticPermissions: string,
        CanDeactivate: boolean,
        AutomaticPermissionsOperationOptions: MFiles.MFAutomaticPermissionsOperationOptions,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangeAutomaticPermissionsToItemsOwnPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        CanDeactivate: boolean,
        AutomaticPermissionsOperationOptions: MFiles.MFAutomaticPermissionsOperationOptions,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangeAutomaticPermissionsToNamedACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        NamedACL: number,
        CanDeactivate: boolean,
        AutomaticPermissionsOperationOptions: MFiles.MFAutomaticPermissionsOperationOptions,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangePermissionsToACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        AccessControlList: IAccessControlList,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ChangePermissionsToNamedACL(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        NamedACL: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ClearAutomaticPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemByDisplayID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemDisplayID: string,
        successCallback?: (result: IValueListItem) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemByDisplayIDEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemDisplayID: string,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        successCallback?: (result: IValueListItem) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemByGUID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ItemGUID: string,
        AllowDeletedItems: boolean,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        successCallback?: (result: IValueListItem) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemByID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        successCallback?: (result: IValueListItem) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemByIDEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        successCallback?: (result: IValueListItem) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemIDByGUID(
        ValueList: MFiles.MFBuiltInValueList | number,
        ItemGUID: string,
        AllowDeletedItems: boolean,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItems(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        successCallback?: (result: IValueListItems) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemsEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        successCallback?: (result: IValueListItems) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemsEx2(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        successCallback?: (result: IValueListItems) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListItemsWithPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        successCallback?: (result: IValueListItemsWithPermissions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveValueListItem(
        ValueList: MFiles.MFBuiltInValueList | number,
        Item: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForValueListItemsEx(
        ValueList: MFiles.MFBuiltInValueList | number,
        SearchConditions: ISearchConditions,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        successCallback?: (result: IValueListItemSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForValueListItemsEx2(
        ValueList: MFiles.MFBuiltInValueList | number,
        SearchConditions: ISearchConditions,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        MaxResults: number,
        successCallback?: (result: IValueListItemSearchResults) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SearchForValueListItemsWithPermissions(
        ValueList: MFiles.MFBuiltInValueList | number,
        SearchConditions: ISearchConditions,
        UpdateFromServer: boolean,
        RefreshTypeIfExternalValueList: MFiles.MFExternalDBRefreshType,
        ReplaceCurrentUserWithCallersIdentity: boolean,
        PropertyDef: MFiles.MFBuiltInPropertyDef | number,
        MaxResults: number,
        successCallback?: (result: IValueListItemSearchResultsWithPermissions) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UndeleteValueListItem(
        ValueList: MFiles.MFBuiltInValueList | number,
        ValueListItemID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateValueListItem(
        ValueListItem: IValueListItem,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultValueListOperations {
    AddValueListAdmin(ValueList: IObjectTypeAdmin): IObjectTypeAdmin;
    GetBuiltInValueList(BuiltInValueList: MFiles.MFBuiltInValueList): IObjectType;
    GetValueList(ValueList: MFiles.MFBuiltInValueList | number): IObjectType;
    GetValueListAdmin(ValueListID: MFiles.MFBuiltInValueList | number): IObjectTypeAdmin;
    GetValueListIDByAlias(Alias: string): number;
    GetValueListIDByGUID(ValueListGUID: string): number;
    GetValueLists(): IObjectTypes;
    GetValueListsAdmin(): IObjectTypesAdmin;
    RefreshExternalValueList(
        ValueList: MFiles.MFBuiltInValueList | number,
        RefreshType: MFiles.MFExternalDBRefreshType,
    ): void;
    RemoveValueListAdmin(ValueListID: MFiles.MFBuiltInValueList | number): void;
    UpdateValueListAdmin(ValueList: IObjectTypeAdmin): IObjectTypeAdmin;
    UpdateValueListWithAutomaticPermissionsAdmin(
        ObjectType: IObjectTypeAdmin,
        AutomaticPermissionsForcedActive: boolean,
    ): IObjectTypeAdmin;
}

interface IVaultValueListOperationsAsync {
    AddValueListAdmin(
        ValueList: IObjectTypeAdmin,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetBuiltInValueList(
        BuiltInValueList: MFiles.MFBuiltInValueList,
        successCallback?: (result: IObjectType) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueList(
        ValueList: MFiles.MFBuiltInValueList | number,
        successCallback?: (result: IObjectType) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListAdmin(
        ValueListID: MFiles.MFBuiltInValueList | number,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListIDByGUID(
        ValueListGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueLists(
        successCallback?: (result: IObjectTypes) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetValueListsAdmin(
        successCallback?: (result: IObjectTypesAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RefreshExternalValueList(
        ValueList: MFiles.MFBuiltInValueList | number,
        RefreshType: MFiles.MFExternalDBRefreshType,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveValueListAdmin(
        ValueListID: MFiles.MFBuiltInValueList | number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateValueListAdmin(
        ValueList: IObjectTypeAdmin,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateValueListWithAutomaticPermissionsAdmin(
        ObjectType: IObjectTypeAdmin,
        AutomaticPermissionsForcedActive: boolean,
        successCallback?: (result: IObjectTypeAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultViewOperations {
    AddOfflineFilter(OfflineFilter: IView): IView;
    AddTemporarySearchView(
        View: IView,
        SearchCriteria: ISearchCriteria,
        BaseSearchConditions: ISearchConditions,
    ): IView;
    AddView(View: IView): IView;
    FindPropertyFolderLocationInView(View: MFiles.MFBuiltInView | number, PropertyFolders: ITypedValues): string;
    GetBuiltInView(BuiltInView: MFiles.MFBuiltInView): IView;
    GetFolderContents(FolderLocation: IFolderDefs): IFolderContentItems;
    GetFolderNameListing(
        ExpressionEx: IExpressionEx,
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        SortResults: boolean,
    ): IFolderNameListing;
    GetFolderUIStateForFolder(CommonState: boolean, FolderLocation: IFolderDefs, ObjectFolder: boolean): IFolderUIState;
    GetFolderUIStateForSpecialLocation(
        CommonState: boolean,
        LocationType: MFiles.MFFolderUIStateLocationType,
    ): IFolderUIState;
    GetMFilesURLForView(
        ViewID: MFiles.MFBuiltInView | number,
        PropertyFolders: ITypedValues,
        SimpleURL: boolean,
    ): string;
    GetPropertyValuesOfFolder(
        FolderLocation: IFolderDefs,
        ObjectType: MFiles.MFBuiltInObjectType | number,
    ): IPropertyValues;
    GetPropertyValuesOfPath(Path: string, ObjectType: MFiles.MFBuiltInObjectType | number): IPropertyValues;
    GetTemporarySearchByPath(RelativePath: string): ITemporarySearchView;
    GetTemporarySearchView(ViewID: MFiles.MFBuiltInView | number): ITemporarySearchView;
    GetView(View: MFiles.MFBuiltInView | number): IView;
    GetViewIDByGUID(ViewGUID: string): number;
    GetViewLocationInClient(View: MFiles.MFBuiltInView | number, IncludeViewNameInPath: boolean): string;
    GetViews(ViewCategory: MFiles.MFViewCategory, AllViews: boolean, ParentView: number): IViews;
    GetViewsAdmin(IncludeCommonViews: boolean, UserID: number): IViews;
    ModifyTemporarySearch(TemporarySearchView: ITemporarySearchView): void;
    RemoveView(View: MFiles.MFBuiltInView | number): void;
    ResetFolderUIStateForFolder(
        ResetToProgramDefaults: boolean,
        ResetToCommonDefaults: boolean,
        FolderLocation: IFolderDefs,
        ObjectFolder: boolean,
    ): IFolderUIState;
    ResetFolderUIStateForSpecialLocation(
        ResetToProgramDefaults: boolean,
        ResetToCommonDefaults: boolean,
        LocationType: MFiles.MFFolderUIStateLocationType,
    ): IFolderUIState;
    SaveFolderUIStateForFolder(
        SaveAsCommonSettings: boolean,
        ResetCommonSettingsToAllUsers: boolean,
        FolderLocation: IFolderDefs,
        ObjectFolder: boolean,
        State: IFolderUIState,
    ): void;
    SaveFolderUIStateForSpecialLocation(
        SaveAsCommonSettings: boolean,
        ResetCommonSettingsToAllUsers: boolean,
        LocationType: MFiles.MFFolderUIStateLocationType,
        State: IFolderUIState,
    ): void;
    ShowViewOrPropertyFolder(
        ParentWindow: number,
        View: MFiles.MFBuiltInView | number,
        PropertyFolders: ITypedValues,
    ): void;
    UpdateView(View: IView): IView;
}

interface IVaultViewOperationsAsync {
    AddOfflineFilter(
        OfflineFilter: IView,
        successCallback?: (result: IView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddTemporarySearchView(
        View: IView,
        SearchCriteria: ISearchCriteria,
        BaseSearchConditions: ISearchConditions,
        successCallback?: (result: IView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    AddView(
        View: IView,
        successCallback?: (result: IView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    FindPropertyFolderLocationInView(
        View: MFiles.MFBuiltInView | number,
        PropertyFolders: ITypedValues,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetBuiltInView(
        BuiltInView: MFiles.MFBuiltInView,
        successCallback?: (result: IView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFolderContents(
        FolderLocation: IFolderDefs,
        successCallback?: (result: IFolderContentItems) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFolderNameListing(
        ExpressionEx: IExpressionEx,
        SearchConditions: ISearchConditions,
        SearchFlags: MFiles.MFSearchFlags,
        SortResults: boolean,
        successCallback?: (result: IFolderNameListing) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFolderUIStateForFolder(
        CommonState: boolean,
        FolderLocation: IFolderDefs,
        ObjectFolder: boolean,
        successCallback?: (result: IFolderUIState) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetFolderUIStateForSpecialLocation(
        CommonState: boolean,
        LocationType: MFiles.MFFolderUIStateLocationType,
        successCallback?: (result: IFolderUIState) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetMFilesURLForView(
        ViewID: MFiles.MFBuiltInView | number,
        PropertyFolders: ITypedValues,
        SimpleURL: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyValuesOfFolder(
        FolderLocation: IFolderDefs,
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IPropertyValues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetPropertyValuesOfPath(
        Path: string,
        ObjectType: MFiles.MFBuiltInObjectType | number,
        successCallback?: (result: IPropertyValues) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetTemporarySearchByPath(
        RelativePath: string,
        successCallback?: (result: ITemporarySearchView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetTemporarySearchView(
        ViewID: MFiles.MFBuiltInView | number,
        successCallback?: (result: ITemporarySearchView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetView(
        View: MFiles.MFBuiltInView | number,
        successCallback?: (result: IView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetViewIDByGUID(
        ViewGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetViewLocationInClient(
        View: MFiles.MFBuiltInView | number,
        IncludeViewNameInPath: boolean,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetViews(
        ViewCategory: MFiles.MFViewCategory,
        AllViews: boolean,
        ParentView: number,
        successCallback?: (result: IViews) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetViewsAdmin(
        IncludeCommonViews: boolean,
        UserID: number,
        successCallback?: (result: IViews) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ModifyTemporarySearch(
        TemporarySearchView: ITemporarySearchView,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveView(
        View: MFiles.MFBuiltInView | number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ResetFolderUIStateForFolder(
        ResetToProgramDefaults: boolean,
        ResetToCommonDefaults: boolean,
        FolderLocation: IFolderDefs,
        ObjectFolder: boolean,
        successCallback?: (result: IFolderUIState) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ResetFolderUIStateForSpecialLocation(
        ResetToProgramDefaults: boolean,
        ResetToCommonDefaults: boolean,
        LocationType: MFiles.MFFolderUIStateLocationType,
        successCallback?: (result: IFolderUIState) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SaveFolderUIStateForFolder(
        SaveAsCommonSettings: boolean,
        ResetCommonSettingsToAllUsers: boolean,
        FolderLocation: IFolderDefs,
        ObjectFolder: boolean,
        State: IFolderUIState,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    SaveFolderUIStateForSpecialLocation(
        SaveAsCommonSettings: boolean,
        ResetCommonSettingsToAllUsers: boolean,
        LocationType: MFiles.MFFolderUIStateLocationType,
        State: IFolderUIState,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    ShowViewOrPropertyFolder(
        ParentWindow: number,
        View: MFiles.MFBuiltInView | number,
        PropertyFolders: ITypedValues,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateView(
        View: IView,
        successCallback?: (result: IView) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVaultWorkflowOperations {
    AddWorkflowAdmin(Workflow: IWorkflowAdmin): IWorkflowAdmin;
    GetStateTransitionSignatureSettings(FromState: number, ToState: number): ISignatureSettings;
    GetStateTransitionSignatureSettingsByID(StateTransitionID: number): ISignatureSettings;
    GetWorkflowAdmin(WorkflowID: number): IWorkflowAdmin;
    GetWorkflowForClient(WorkflowID: number, UpdateFromServer: boolean): IWorkflow;
    GetWorkflowIDByAlias(Alias: string): number;
    GetWorkflowIDByGUID(WorkflowGUID: string): number;
    GetWorkflowsAdmin(): IWorkflowsAdmin;
    GetWorkflowsAsValueListItems(UpdateFromServer: boolean): IValueListItems;
    GetWorkflowsForClient(UpdateFromServer: boolean): IWorkflows;
    GetWorkflowStateIDByAlias(Alias: string): number;
    GetWorkflowStateIDByGUID(StateGUID: string): number;
    GetWorkflowStates(Workflow: number, CurrentState: ITypedValue): IStates;
    GetWorkflowStatesEx(Workflow: number, CurrentState: ITypedValue, ObjVer: IObjVer): IStates;
    GetWorkflowStateTransitionIDByAlias(Alias: string): number;
    GetWorkflowStateTransitionIDByGUID(StateTransitionGUID: string): number;
    GetWorkflowStateTransitions(Workflow: number, CurrentState: ITypedValue): IStateTransitionsForClient;
    GetWorkflowStateTransitionsAsJSON(Workflow: number, CurrentState: ITypedValue, ObjVer: IObjVer): string;
    GetWorkflowStateTransitionsEx(
        Workflow: number,
        CurrentState: ITypedValue,
        ObjVer: IObjVer,
    ): IStateTransitionsForClient;
    RemoveWorkflowAdmin(WorkflowID: number): void;
    UpdateWorkflowAdmin(Workflow: IWorkflowAdmin): IWorkflowAdmin;
}

interface IVaultWorkflowOperationsAsync {
    AddWorkflowAdmin(
        Workflow: IWorkflowAdmin,
        successCallback?: (result: IWorkflowAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetStateTransitionSignatureSettings(
        FromState: number,
        ToState: number,
        successCallback?: (result: ISignatureSettings) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetStateTransitionSignatureSettingsByID(
        StateTransitionID: number,
        successCallback?: (result: ISignatureSettings) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowAdmin(
        WorkflowID: number,
        successCallback?: (result: IWorkflowAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowForClient(
        WorkflowID: number,
        UpdateFromServer: boolean,
        successCallback?: (result: IWorkflow) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowIDByGUID(
        WorkflowGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowsAdmin(
        successCallback?: (result: IWorkflowsAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowsAsValueListItems(
        UpdateFromServer: boolean,
        successCallback?: (result: IValueListItems) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowsForClient(
        UpdateFromServer: boolean,
        successCallback?: (result: IWorkflows) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateIDByGUID(
        StateGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStates(
        Workflow: number,
        CurrentState: ITypedValue,
        successCallback?: (result: IStates) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStatesEx(
        Workflow: number,
        CurrentState: ITypedValue,
        ObjVer: IObjVer,
        successCallback?: (result: IStates) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateTransitionIDByAlias(
        Alias: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateTransitionIDByGUID(
        StateTransitionGUID: string,
        successCallback?: (result: number) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateTransitions(
        Workflow: number,
        CurrentState: ITypedValue,
        successCallback?: (result: IStateTransitionsForClient) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateTransitionsAsJSON(
        Workflow: number,
        CurrentState: ITypedValue,
        ObjVer: IObjVer,
        successCallback?: (result: string) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    GetWorkflowStateTransitionsEx(
        Workflow: number,
        CurrentState: ITypedValue,
        ObjVer: IObjVer,
        successCallback?: (result: IStateTransitionsForClient) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    RemoveWorkflowAdmin(
        WorkflowID: number,
        successCallback?: () => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
    UpdateWorkflowAdmin(
        Workflow: IWorkflowAdmin,
        successCallback?: (result: IWorkflowAdmin) => void,
        errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
        finallyCallback?: () => void,
    ): void;
}

interface IVerifyVaultJob {
    readonly FixErrors: boolean;
    readonly VaultGUID: string;
    readonly VerifyFileContents: boolean;
    Clone(): IVerifyVaultJob;
    GetNumberOfSteps(): number;
    GetOneBasedIndexOfStep(CurrentStep: number): number;
    GetStepProgressText(CurrentStep: number): string;
    Set(GuidVault: string, FixErrors: boolean, VerifyFileContents: boolean): void;
}

interface IVerifyVaultJobOutput {
    readonly Errors: IStrings;
}

interface IVersionComment {
    readonly LastModifiedBy: IPropertyValue;
    readonly ObjVer: IObjVer;
    readonly StatusChanged: IPropertyValue;
    readonly VersionComment: IPropertyValue;
}

interface IVersionComments {
    readonly Count: number;
    Item(Index: number): IVersionComment;
}

interface IView {
    AccessControlList: IAccessControlList;
    Common: boolean;
    readonly GUID: string;
    HasParent: boolean;
    ID: number;
    Levels: IExpressionExs;
    LookInAllVersions: boolean;
    Name: string;
    Parent: number;
    ReturnLatestVisibleVersion: boolean;
    SearchConditions: ISearchConditions;
    SearchDef: ISearchDef;
    SearchFlags: MFiles.MFSearchFlags;
    ViewFlags: MFiles.MFViewFlag;
    ViewLocation: IViewLocation;
    ViewType: MFiles.MFViewType;
    Visible: boolean;
    Clone(): IView;
    CloneFrom(View: IView): void;
}

interface IViewLocation {
    OverlappedFolder: ITypedValue;
    Overlapping: boolean;
    ParentFolder: IFolderDefs;
    Clone(): IViewLocation;
}

interface IViews {
    readonly Count: number;
    Item(Index: number): IView;
}

interface IWeeklyTrigger {
    DaysOfTheWeek: MFiles.MFTriggerWeekDay;
    WeeksInterval: number;
}

interface IWindow {
    readonly Events: IWindowEvents;
    readonly Handle: number;
    Height: number;
    readonly IsFocused: boolean;
    Maximizable: boolean;
    Minimizable: boolean;
    Resizable: boolean;
    Title: string;
    Width: number;
    Close(): void;
    Focus(): void;
    Maximize(): void;
    Minimize(): void;
    Restore(): void;
    SetDefaultSize(defaultWidth: number, defaultHeight: number, resizeToDefault: boolean): void;
}

interface IWindowEvents extends IEvents {
    OnCloseWindow?(): boolean;
}

interface IWorkflow {
    ID: number;
    Name: string;
    ObjectClass: MFiles.MFBuiltInDocumentClass | MFiles.MFBuiltInObjectClass | number;
    Clone(): IWorkflow;
    GetAsLookup(): ILookup;
    GetAsTypedValue(): ITypedValue;
}

interface IWorkflowAdmin {
    Description: string;
    Permissions: IAccessControlList;
    SemanticAliases: ISemanticAliases;
    States: IStatesAdmin;
    StateTransitions: IStateTransitions;
    Workflow: IWorkflow;
    Clone(): IWorkflowAdmin;
}

interface IWorkflowAssignment {
    AssignedTo_DEPRECATED: IPropertyValue;
    CompletedBy_DEPRECATED: IPropertyValue;
    Deadline_DEPRECATED: IPropertyValue;
    Description_DEPRECATED: IPropertyValue;
    MonitoredBy_DEPRECATED: IPropertyValue;
    Clone_DEPRECATED(): IWorkflowAssignment;
}

interface IWorkflows {
    readonly Count: number;
    Item(Index: number): IWorkflow;
}

interface IWorkflowsAdmin {
    readonly Count: number;
    Add(Index: number, WorkflowAdmin: IWorkflowAdmin): void;
    Item(Index: number): IWorkflowAdmin;
    Remove(Index: number): void;
}

interface IXMLSearchResult {
    readonly MoreResults: boolean;
    readonly SearchResult: string;
}

declare namespace MFiles {
    const enum BuiltinCommand {
        Undefined = 0,
        FIRST = 1,
        NewView = 2,
        NewOfflineFilter = 3,
        NewTraditionalFolder = 4,
        NewPropertyFolder = 5,
        ConvertToDocument = 6,
        ConvertToDocumentFiles = 7,
        ImportFilesAndFolders = 8,
        MakeCopy = 9,
        CheckOut = 10,
        CheckIn = 11,
        CheckInWithComments = 12,
        UndoCheckOut = 13,
        Properties = 14,
        MarkFolderForOfflineAvailability = 15,
        MarkForOfflineAvailability = 16,
        RemoveOfflineAvailability = 17,
        ShowHistory = 18,
        ShowRelationships = 19,
        ShowCollectionMembers = 20,
        ViewEditSubobjects = 21,
        ShowComments = 22,
        NewAssignment = 23,
        ShowAssignments = 24,
        CompleteAssignment = 25,
        ChangeState = 26,
        Workflow = 27,
        MarkForArchiving = 28,
        ClearArchiveMarker = 29,
        Undelete = 30,
        ConvertToSingleFileDocument = 31,
        ConvertToOneMultiFileDocument = 32,
        ReplaceWithFile = 33,
        GoOnline = 34,
        GoOffline = 35,
        LogOut = 36,
        ClientSettings = 37,
        ServerAdmin = 38,
        NotificationSettings = 39,
        ClearLocalCache = 40,
        ChangePassword = 41,
        ChangeLanguage = 42,
        AddDocumentFromScanner = 43,
        AddFileFromScanner = 44,
        ReplaceWithFileFromScanner = 45,
        ConvertToSearchablePDF = 46,
        SendLinkByEmail = 47,
        SendCopyByEmail = 48,
        SendPDFByEmail = 49,
        SaveAsPDF = 50,
        SubstituteUsers = 51,
        ShowBottomPane = 52,
        ShowPropertiesPane = 52,
        ShowRightPane = 53,
        ShowPreviewPane = 53,
        GroupObjectsByObjectType = 54,
        GroupViewsAndFolders = 55,
        HideView = 56,
        UnhideView = 57,
        CleanView = 58,
        UnhideViews = 59,
        ResetUISettingsToDefaults = 60,
        SaveAsCommonUISettings = 61,
        AddToFavorites = 62,
        RemoveFromFavorites = 63,
        CreateOrGetShortcut = 64,
        CreateShortcut = 65,
        AddShortcutToTaskPane = 66,
        AddDashboardToViewLocMain = 67,
        AddReportToViewLocMain = 67,
        AddDashboardToViewLocRight = 68,
        AddReportToViewLocRight = 68,
        AddDashboardToViewLocBottom = 69,
        AddReportToViewLocBottom = 69,
        RemoveDashboardFromViewLocMain = 70,
        RemoveReportFromViewLocMain = 70,
        RemoveDashboardFromViewLocRight = 71,
        RemoveReportFromViewLocRight = 71,
        RemoveDashboardFromViewLocBottom = 72,
        RemoveReportFromViewLocBottom = 72,
        Copy = 73,
        Cut = 74,
        Paste = 75,
        Delete = 76,
        Rename = 77,
        NewWindow = 78,
        ExportObjects = 79,
        ExportSearchBarConditions = 80,
        ConvertToSingleFilePDF = 81,
        ConvertToMultiFilePDF = 82,
        ChooseColumns = 83,
        PasteAsMultiFileDocument = 84,
        SelectAll = 85,
        InvertSelection = 86,
        NewObject = 87,
        Refresh = 88,
        RollBack = 89,
        DeleteAll = 90,
        Destroy = 91,
        ModifyVersionDetails = 92,
        LabelThisVersion = 93,
        NewSubobject = 94,
        AddCollectionMember = 95,
        EditCollectionMembership = 96,
        RemoveCollectionMembership = 97,
        AddRelationship = 98,
        EditRelationship = 99,
        RemoveRelationship = 100,
        SubMenu_NewObject = 101,
        SubMenu_NewFile = 102,
        SubMenu_WindowsCommands = 103,
        SubMenu_Send = 104,
        SubMenu_DisplayMode = 105,
        ChangeViewMode = 106,
        SubMenu_OfflineAvailability = 107,
        SubMenu_BrowseRelatedObjects = 108,
        SubMenu_Archiving = 109,
        SubMenu_Workflow = 110,
        SubMenu_ScanningAndOCR = 111,
        SubMenu_RefreshExtObjects = 112,
        SubMenu_Dashboards = 113,
        SubMenu_Reports = 113,
        GroupObjectsByFirstLetters = 114,
        GroupFoldersByFirstLetters = 115,
        AddGroupingLevel = 116,
        CurrentGroupingLevel = 117,
        RemoveCurrentGroupingLevel = 118,
        HideOrShowEmptyFolders = 119,
        BrowseInThisWindow = 120,
        GroupBy = 121,
        GroupFoldersBy = 122,
        MarkComplete = 123,
        GoToCustomView = 124,
        Submenu_VaultX = 125,
        Submenu_ViewX = 126,
        Submenu_DocumentX = 127,
        HitHighlighting = 128,
        CheckOutForCoauthoring = 129,
        BeginCoauthoring = 130,
        EndCoauthoring = 131,
        ShowOriginalObject = 132,
        SendCoauthoringLink = 133,
        ResolveConflictKeepThis = 134,
        ResolveConflictDiscardThis = 135,
        Applications = 136,
        ShareViaSkyDrive = 137,
        ShareViaSkyDriveAsPDF = 138,
        ShowMetadataInRightPane = 139,
        ShowMetadataInBottomPane = 140,
        MFilesHelp = 141,
        MFilesGuidedTour = 142,
        ShowNavigationPane = 143,
        CustomizePropertyFolder = 144,
        UncustomizePropertyFolder = 145,
        UseNormalLayout = 146,
        UseCompactLayout = 147,
        RightPane_Normal = 148,
        RightPane_Minimized = 149,
        RightPane_Off = 150,
        BottomPane_Normal = 151,
        BottomPane_Minimized = 152,
        BottomPane_Off = 153,
        NavigationPane_On = 154,
        NavigationPane_Off = 155,
        ShowVisualAnnotations = 156,
        ShowAllVisualAnnotations = 157,
        HideAllVisualAnnotations = 158,
        EditOneAnnotation = 159,
        SaveAnnotation = 160,
        NewAnnotation = 161,
        AboutMFiles = 162,
        MarkApproved = 163,
        MarkRejected = 164,
        ApproveAssignment = 165,
        RejectAssignment = 166,
        ChangeStateAdmin = 167,
        SharePublicLink = 168,
        SharedByMe = 169,
        UploadFiles = 170,
        DiscardFileModifications = 171,
        ShowSearchResultsFromMultipleVaults = 172,
        ShowSearchRefinementOptions = 173,
        LAST = 174,
        ALL = 268435455,
    }

    const enum CommandLocation {
        Undefined = 0,
        MainMenu = 1,
        ContextMenu = 2,
        TaskPane = 4,
        All = 268435455,
    }

    const enum CommandState {
        Undefined = 0,
        Active = 1,
        Inactive = 2,
        Hidden = 3,
    }

    const enum DefaultIcon {
        CheckOut = 0,
        CheckIn = 1,
        UndoCheckOut = 2,
        History = 4,
        Properties = 5,
        MakeCopy = 6,
        View = 8,
        Root = 9,
        Workflow = 11,
        LogOut = 12,
        GoOnline = 13,
        GoOffline = 14,
        Assignment = 15,
        MarkComplete = 16,
        TraditionalFolder = 17,
        PropertyFolder = 18,
        File = 19,
        MFD = 20,
        PrivateView = 21,
        Collection = 22,
        ChangeState = 24,
        RelationShips = 25,
        SelectedState = 26,
    }

    const enum Event {
        Undefined = 0,
        Notification = 1,
        Started = 2,
        Stop = 3,
        ShowPane = 4,
        HidePane = 5,
        PaneResized = 6,
        NewShellFrame = 7,
        NewNormalShellFrame = 8,
        NewCommonDialogShellFrame = 9,
        NewEmbeddedShellFrame = 10,
        NewTaskPane = 11,
        NewBottomPane = 12,
        NewSearchPane = 13,
        NewRightPane = 14,
        NewShellListing = 15,
        NewCommands = 16,
        ActiveListingChanged = 17,
        NewTab = 18,
        TabSelected = 19,
        TabUnselected = 20,
        MinimizedStateChanged = 21,
        BuiltinCommand = 22,
        CustomCommand = 23,
        SelectionChanged = 24,
        SelectedItemsChanged = 25,
        ContentChanged = 26,
        ShowContextMenu = 27,
        ShowMainMenu = 28,
        ListingActivated = 29,
        ListingDeactivated = 30,
        SearchInitiated = 31,
        SearchReady = 32,
        CloseWindow = 33,
        NewVaultEntry = 34,
        CreateObject = 35,
        ObjectCreated = 36,
        DestroyObject = 37,
        ObjectDestroyed = 38,
        DestroyObjects = 39,
        ObjectsDestroyed = 40,
        DestroyObjectVersion = 41,
        ObjectVersionDestroyed = 42,
        DestroyObjectVersions = 43,
        ObjectVersionsDestroyed = 44,
        RemoveObject = 45,
        ObjectRemoved = 46,
        RemoveObjects = 47,
        ObjectsRemoved = 48,
        UndeleteObject = 49,
        ObjectUndeleted = 50,
        UndeleteObjects = 51,
        ObjectsUndeleted = 52,
        AddObjectFile = 53,
        ObjectFileAdded = 54,
        RemoveObjectFile = 55,
        ObjectFileRemoved = 56,
        RenameObjectFile = 57,
        ObjectFileRenamed = 58,
        CheckInObject = 59,
        ObjectCheckedIn = 60,
        CheckInObjects = 61,
        ObjectsCheckedIn = 62,
        CheckOutObject = 63,
        ObjectCheckedOut = 64,
        CheckOutObjects = 65,
        ObjectsCheckedOut = 66,
        UndoObjectCheckout = 67,
        ObjectCheckoutUndone = 68,
        UndoObjectCheckouts = 69,
        ObjectCheckoutsUndone = 70,
        RollBackObjectVersion = 71,
        ObjectVersionRolledBack = 72,
        SetPropertiesOfObjectVersion = 73,
        PropertiesOfObjectVersionSet = 74,
        SetPropertiesOfObjectVersions = 75,
        PropertiesOfObjectVersionsSet = 76,
        SetObjectVersionPermissions = 77,
        ObjectVersionPermissionsSet = 78,
        AddObjectToFavorites = 79,
        ObjectAddedToFavorites = 80,
        AddObjectsToFavorites = 81,
        ObjectsAddedToFavorites = 82,
        RemoveObjectFromFavorites = 83,
        ObjectRemovedFromFavorites = 84,
        RemoveObjectsFromFavorites = 85,
        ObjectsRemovedFromFavorites = 86,
        ModifyObjectVersionLabels = 87,
        ObjectVersionLabelsModified = 88,
        SetObjectLevelProperty = 89,
        ObjectLevelPropertySet = 90,
        SetObjectOfflineAvailability = 91,
        RemoveObjectOfflineAvailability = 92,
        ObjectOfflineAvailabilitySet = 93,
        ObjectOfflineAvailabilityRemoved = 94,
        SwitchToOfflineMode = 95,
        SwitchedToOfflineMode = 96,
        SwitchToOnlineMode = 97,
        SwitchedToOnlineMode = 98,
        LogOut = 99,
        ChangeVaultLanguage = 100,
        VaultLanguageChanged = 101,
        LoggedIn = 102,
        QueryCanHandleFocusChangeKey = 103,
        ItemAdded = 104,
        ItemRemoved = 105,
        ItemReplaced = 106,
        ItemMoved = 107,
        AllItemsCleared = 108,
        ItemsChanged = 109,
        ChangeValue = 110,
        ValueChanged = 111,
        ChangeValueRequiredStatus = 112,
        ValueRequiredStatusChanged = 113,
        ChangeMustExistStatus = 114,
        MustExistStatusChanged = 115,
        ChangeReadOnlyStatus = 116,
        ReadOnlyStatusChanged = 117,
        AutomaticValueStatusChanged = 118,
        ChangeVisibility = 119,
        VisibilityChanged = 120,
        ChangeLabel = 121,
        LabelChanged = 122,
        SetModifyFlag = 123,
        ModifyFlagChanged = 124,
        DataError = 125,
        ValueValidationError = 126,
        SelectionListItemsUpdated = 127,
        UpdatingContent = 128,
        ContentUpdated = 129,
        InitializingContent = 130,
        ContentInitialized = 131,
        PermissionsChanged = 132,
        IconChanged = 133,
        FilePreviewInfoUpdated = 134,
        PopOutMetadataCard = 135,
        MetadataCardPoppedOut = 136,
        EnabledStateChanged = 137,
        HitHighlightingUpdated = 138,
        RequestActivateView = 139,
        QueryUIModifiedState = 140,
        CommitUIModifiedState = 141,
        OptionValueChanged = 142,
        NameChanged = 143,
        ExplanationChanged = 144,
        ShowTab = 145,
        HideTab = 146,
        FocusReceived = 147,
        FocusLost = 148,
        MetadataCardLocationChanging = 149,
        MetadataCardLocationChanged = 150,
        ValueSuggestionsChanged = 151,
    }

    const enum ListingEmptinessState {
        NotYetKnown = 1,
        NotEmpty = 2,
        Empty = 3,
    }

    const enum MenuLocation {
        DefaultCommand = 20,
        Top = 21,
        BeforeWindowsCommands = 22,
        AfterWindowsCommands = 23,
        ObjectCreation = 24,
        FileCreation = 25,
        ObjectOperations = 26,
        FolderSpecific = 27,
        SingleFolderSpecific = 28,
        ViewVisibility = 29,
        Misc1_Top = 30,
        Misc1_Middle = 31,
        Misc1_Bottom = 32,
        HistorySpecific = 33,
        RelationshipsSpecific = 34,
        CollectionMembersSpecific = 35,
        Deletion = 36,
        Edit = 37,
        Misc2_Top = 38,
        Misc2_Middle = 39,
        Misc2_Bottom = 40,
        DocumentConversions = 41,
        BeforeProperties = 42,
        Bottom = 43,
        PropertyFolder = 44,
    }

    const enum MFACLComponentOverrideAccess {
        None = 0,
        Granted = 1,
    }

    const enum MFACLEnforcingMode {
        Automatic = 0,
        Provided = 1,
        ResetToDefault = 2,
        None = 3,
    }

    const enum MFACLMode {
        Simple = 0,
        AutomaticPermissionsWithComponents = 1,
    }

    const enum MFActionType {
        Unknown = 0,
        CreateAssignment = 1,
    }

    const enum MFAdditionalClassInfoType {
        Unknown = 0,
        Assignment = 1,
    }

    const enum MFApplicationLicenseStatus {
        Unknown = 0,
        NotNeeded = 1,
        NotInstalled = 2,
        Installed = 3,
        Valid = 4,
        Invalid = 5,
        FormatError = 6,
        Trial = 7,
        GracePeriod = 8,
    }

    const enum MFAssignmentType {
        Task = 0,
        Approval = 1,
    }

    const enum MFAttachVaultOptionsFlag {
        None = 0,
        ExternalObjectTypes = 1,
        ExternalSources = 2,
        ExportedDataSets = 4,
        ExportImportJobs = 8,
        ExternalUserGroups = 16,
        EventHandlers = 32,
    }

    const enum MFAuthType {
        Unknown = 0,
        LoggedOnWindowsUser = 1,
        SpecificWindowsUser = 2,
        SpecificMFilesUser = 3,
    }

    const enum MFAutomaticPermissionsOperationOptions {
        None = 0,
        ForceActive = 1,
    }

    const enum MFAutomaticValueType {
        None = 0,
        CalculatedWithPlaceholders = 1,
        CalculatedWithVBScript = 2,
        AutoNumberSimple = 3,
        WithVBScript = 4,
    }

    const enum MFAutoStateTransitionMode {
        None = 0,
        RelativeTime = 1,
        AssignmentCompleteOne = 2,
        AssignmentCompleteAll = 3,
        CriteriaFulfilled = 4,
        AllowedByScript = 5,
        AssignmentComplete = 6,
        AssignmentRejected = 7,
    }

    const enum MFBackupType {
        Full = 0,
        Differential = 1,
    }

    const enum MFBuiltInDocumentClass {
        UnclassifiedDocument = 0,
        OtherDocument = 1,
    }

    const enum MFBuiltInMetadataStructureItemID {
        All = -1000000,
    }

    const enum MFBuiltInObjectClass {
        Any = -3,
        NotSet = -2,
        GenericAssignment = -100,
    }

    const enum MFBuiltInObjectType {
        Document = 0,
        DocumentCollection = 9,
        Assignment = 10,
        DocumentOrDocumentCollection = -102,
    }

    const enum MFBuiltInPropertyDef {
        NameOrTitle = 0,
        Created = 20,
        LastModified = 21,
        SingleFileObject = 22,
        LastModifiedBy = 23,
        StatusChanged = 24,
        CreatedBy = 25,
        Keywords = 26,
        Deleted = 27,
        DeletedBy = 28,
        VersionLabel = 29,
        SizeOnServerThisVersion = 30,
        SizeOnServerAllVersions = 31,
        MarkedForArchiving = 32,
        VersionComment = 33,
        Comment = 33,
        TraditionalFolder = 34,
        CreatedFromExternalLocation = 35,
        AdditionalClasses = 36,
        IsTemplate = 37,
        Workflow = 38,
        State = 39,
        StateEntered = 40,
        AssignmentDescription = 41,
        Deadline = 42,
        MonitoredBy = 43,
        AssignedTo = 44,
        CompletedBy = 45,
        CollectionMemberDocuments = 46,
        CollectionMemberCollections = 47,
        Constituent = 48,
        OriginalPath = 75,
        Reference = 76,
        OriginalPath2 = 77,
        OriginalPath3 = 78,
        WorkflowAssignment = 79,
        AccessedByMe = 81,
        FavoriteView = 82,
        MessageID = 83,
        InReplyTo = 84,
        InReplyToReference = 85,
        SignatureManifestation = 86,
        ReportURL = 87,
        ReportPlacement = 88,
        ObjectChanged = 89,
        ACLChanged = 90,
        VersionLabelChanged = 91,
        VersionCommentChanged = 92,
        DeletionStatusChanged = 93,
        VaultGUID = 94,
        SharedFiles = 95,
        ConflictResolved = 96,
        RejectedBy = 97,
        Completed = 98,
        StateTransition = 99,
        Class = 100,
        ClassGroups = 101,
        ObjectID = -102,
    }

    const enum MFBuiltInUserGroup {
        Users = 1,
        AndExternalUsers = 2,
    }

    const enum MFBuiltInValueList {
        Documents = 0,
        Classes = 1,
        ClassGroups = 2,
        VersionLabels = 3,
        TraditionalFolders = 4,
        ExternalLocations = 5,
        Users = 6,
        Workflows = 7,
        States = 8,
        Collections = 9,
        Assignments = 10,
        UserGroups = 16,
        StateTransitions = 17,
    }

    const enum MFBuiltInView {
        CheckedOutToCurrentUser = 5,
        Offline = 6,
        RecentlyModifiedByMe = 7,
        Templates = 8,
        AssignedToMe = 9,
        LatestSearches = 11,
        ByID = 12,
        BuiltIn = 13,
        RecentlyAccessedByMe = 14,
        Favorites = 15,
        AnyView = -1,
        OfflineCheckedOut = -9000,
        OfflineMarkedForOfflineAvailability = -9001,
    }

    const enum MFConditionType {
        Equal = 1,
        NotEqual = 2,
        GreaterThan = 3,
        LessThan = 4,
        GreaterThanOrEqual = 5,
        LessThanOrEqual = 6,
        Contains = 7,
        DoesNotContain = 8,
        StartsWith = 9,
        DoesNotStartWith = 10,
        MatchesWildcardPattern = 11,
        DoesNotMatchWildcardPattern = 12,
        IsMissing = 13,
        IsNotMissing = 14,
        StartsWithAtWordBoundary = 15,
        ContainsAnyBitwise = 16,
        DoesNotContainAnyBitwise = 17,
    }

    const enum MFContentType {
        Generic = 0,
        EmailAddress = 1,
        URL = 2,
        RTF = 3,
        HTML = 4,
    }

    const enum MFCustomApplicationType {
        Unspecified = 0,
        Client = 1,
        Server = 2,
    }

    const enum MFDataFunction {
        NoOp = 0,
        Year = 1,
        Month = 2,
        YearAndMonth = 3,
        Date = 4,
        DaysFrom = 5,
        DaysTo = 6,
        IntegerSegment = 7,
        LeftChars = 8,
        InitialCharGroup = 9,
    }

    const enum MFDataType {
        Uninitialized = 0,
        Text = 1,
        Integer = 2,
        Floating = 3,
        Date = 5,
        Time = 6,
        Timestamp = 7,
        Boolean = 8,
        Lookup = 9,
        MultiSelectLookup = 10,
        Integer64 = 11,
        FILETIME = 12,
        MultiLineText = 13,
        ACL = 14,
    }

    const enum MFDBEngine {
        None = 0,
        Firebird = 1,
        MSSQLServer = 2,
    }

    const enum MFDefaultPropertyType {
        Undefined = 0,
        FixedValue = 1,
        FromHPDSSXML = 2,
        FromXML = 3,
        FromEmail = 4,
        FromEmailHeader = 5,
        FromOCR = 6,
    }

    const enum MFDependencyRelation {
        Nothing = 0,
        AutomaticFilling = 1,
        Filtering = 2,
    }

    const enum MFEmailField {
        Undefined = 0,
        From = 1,
        To = 2,
        Cc = 3,
        Subject = 4,
        Body = 5,
        Date = 6,
        Importance = 7,
        Sensitivity = 8,
    }

    const enum MFEmailImportance {
        Low = 0,
        Normal = 1,
        High = 2,
    }

    const enum MFEmailSensitivity {
        None = 0,
        Normal = 1,
        Personal = 2,
        Private = 3,
        Confidential = 4,
    }

    const enum MFEventHandlerType {
        TypeUndefined = 0,
        BeforeSetProperties = 1,
        AfterSetProperties = 2,
        AfterCreateNewObjectFinalize = 3,
        BeforeCheckInChanges = 4,
        AfterCheckInChanges = 5,
        BeforeCheckOut = 6,
        AfterCheckOut = 7,
        BeforeCancelCheckout = 8,
        AfterCancelCheckout = 9,
        BeforeDeleteObject = 10,
        AfterDeleteObject = 11,
        BeforeDestroyObject = 12,
        AfterDestroyObject = 13,
        BeforeSetObjectPermissions = 14,
        AfterSetObjectPermissions = 15,
        BeforeFileUpload = 16,
        AfterFileUpload = 17,
        BeforeFileDownload = 18,
        AfterFileDownload = 19,
        BeforeCreateNewValueListItem = 20,
        AfterCreateNewValueListItem = 21,
        BeforeLoginToVault = 22,
        AfterLoginToVault = 23,
        BeforeLogoutFromVault = 24,
        AfterLogoutFromVault = 25,
        BeforeRunScheduledJob = 26,
        AfterRunScheduledJob = 27,
        BeforeCreateNewObjectFinalize = 28,
        BeforeCancelCreateObject = 29,
        AfterCancelCreateObject = 30,
        BeforeDestroyObjectVersion = 31,
        AfterDestroyObjectVersion = 32,
        Replication_AfterCreateNewObjectFinalize = 33,
        Replication_AfterCheckInChanges = 34,
        VaultExtensionMethod = 35,
        BeforeCreateLoginAccount = 36,
        AfterCreateLoginAccount = 37,
        BeforeModifyLoginAccount = 38,
        AfterModifyLoginAccount = 39,
        BeforeRemoveLoginAccount = 40,
        AfterRemoveLoginAccount = 41,
        BeforeCreateUserAccount = 42,
        AfterCreateUserAccount = 43,
        BeforeModifyUserAccount = 44,
        AfterModifyUserAccount = 45,
        BeforeRemoveUserAccount = 46,
        AfterRemoveUserAccount = 47,
        BeforeCreateUserGroup = 48,
        AfterCreateUserGroup = 49,
        BeforeModifyUserGroup = 50,
        AfterModifyUserGroup = 51,
        BeforeRemoveUserGroup = 52,
        AfterRemoveUserGroup = 53,
        AfterBringOnline = 54,
        BeforeTakeOffline = 55,
        AfterCheckInChangesFinalize = 56,
        AfterBeginTransaction = 57,
        BeforeCommitTransaction = 58,
        BeforeRollbackTransaction = 59,
        AfterCancelCheckoutFinalize = 60,
        BeforeUndeleteObject = 61,
        AfterUndeleteObject = 62,
        AfterUndeleteObjectFinalize = 63,
        BeforeModifyMFilesCredentials = 64,
        AfterModifyMFilesCredentials = 65,
        BeforeReturnView = 66,
        BeforeCheckInChangesFinalize = 67,
        BeforeCreateView = 68,
        AfterCreateView = 69,
        BeforeModifyView = 70,
        AfterModifyView = 71,
        BeforeDeleteView = 72,
        AfterDeleteView = 73,
    }

    const enum MFExportContentFlag {
        None = 0,
        LatestVersionsOnly = 2,
        DestroyAfterExport = 4,
        ClearArchivalMarker = 8,
        SaveFilesAlsoAsPDFA = 32,
        ExportInformationOnDestroyedData = 64,
        UseMultipleContentPackages = 128,
        IndicateDropouts = 1024,
    }

    const enum MFExpressionType {
        Uninitialized = 0,
        PropertyValue = 1,
        ObjectIDSegment = 2,
        StatusValue = 3,
        FileValue = 4,
        TypedValue = 5,
        AnyField = 6,
        Permissions = 7,
    }

    const enum MFExtApplicationPlatform {
        None = 0,
        Desktop = 1,
        Web = 2,
    }

    const enum MFExternalDBRefreshType {
        None = 0,
        Quick = 1,
        Full = 2,
    }

    const enum MFFacetFilterStatusFlags {
        None = 0,
        Available = 1,
        Applied = 2,
    }

    const enum MFFacetSearchFlags {
        None = 0,
        IgnoreSearchPermissions = 2,
        IgnoreFacetGroupPermissions = 4,
        IgnoreFacetValuePermissions = 8,
        SortFacetValues = 16,
        AscendingOrder = 32,
        OverrideByConfiguration = 64,
    }

    const enum MFFileDataStorage {
        Default = 0,
        Disk = 1,
        DB = 2,
        External = 3,
    }

    const enum MFFileFormat {
        Native = 0,
        PDF = 1,
        DisplayOnlyPDF = 2,
    }

    const enum MFFileInformationType {
        Unknown = 0,
        EmailMessage = 1,
    }

    const enum MFFileOpenMethod {
        ShowInShell = 0,
        Open = 1,
        View = 2,
        Edit = 3,
    }

    const enum MFFileValueType {
        HasFiles = 0,
        FileName = 1,
        FileSize = 2,
        FileID = 3,
        CreationTime = 4,
        ChangeTime = 5,
        LinkedToExtLoc = 6,
        LinkedToExtLocID = 7,
    }

    const enum MFFolderColumnId {
        Name = -1,
        Type = -2,
        Size = -3,
        Status = -4,
        CheckoutTo = -5,
        CheckOutAt = -6,
        ObjectDispId = -7,
        ObjectVersion = -8,
        ShStatusChanged = -9,
        ShLastModifiedBy = -10,
        Location = -11,
        RelLocation = -12,
        DateCreated = -13,
        DateModified = -14,
        Score = -15,
        RelationshipDesc = -16,
        HasRelationships = -17,
        RelationshipTargetVer = -18,
        ObjectType = -19,
        ObjectPermissions = -20,
        TypeEx = -21,
        HasAssignments = -22,
        ExportedFile = -1000000,
        IdSegment = -1000001,
    }

    const enum MFFolderContentItemType {
        Unknown = 0,
        ViewFolder = 1,
        PropertyFolder = 2,
        TraditionalFolder = 3,
        ObjectVersion = 4,
    }

    const enum MFFolderDefType {
        Unknown = 0,
        AnyFolder = 1,
        ViewFolder = 2,
        PropertyFolder = 3,
        TraditionalFolder = 4,
        SearchFolder = 5,
    }

    const enum MFFolderListingAlgorithm {
        None = 0,
        TestEachValue = 1,
        GetValuesByDistinctUse = 2,
        TestEachValueWithSeparateQueries = 3,
    }

    const enum MFFolderListingColumnFlags {
        SelectIfLeftOfSelectedMainColumn = 1,
        HideColumnText = 2,
    }

    const enum MFFolderListingItemGroupingMode {
        Unspecified = -1,
        NoGrouping = 0,
        GroupObjectsByObjectType = 1,
        GroupViewsAndFoldersByType = 1024,
    }

    const enum MFFolderListingViewMode {
        Icon = 1,
        SmallIcon = 2,
        List = 3,
        Details = 4,
        Thumbnail = 5,
        Tile = 6,
        Thumbstrip = 7,
        Content = 8,
    }

    const enum MFFolderUIStateLocationType {
        Unknown = 0,
        RootFolder = 1,
        ViewFoldersContainer = 2,
        PropertyFoldersContainer = 3,
        ObjectsContainer = 4,
        ObjectFilesContainer = 5,
        TraditionalFolder = 6,
        SearchResultsContainer = 7,
        HistoryUI = 8,
        RelationshipsUIFromTab = 9,
        CollectionMembersUI = 10,
        SubobjectsUI = 11,
        ClearLocalCacheUI = 12,
        RelationshipsUIToTab = 13,
        RelationshipsUIAllTab = 14,
        LocalTemporaryItemsContainer = 15,
    }

    const enum MFFormattingType {
        None = 0,
    }

    const enum MFFullTextSearchFlags {
        None = 0,
        Stemming = 4,
        TypeAllWords = 131072,
        TypeAnyWords = 262144,
        LookInMetaData = 268435456,
        LookInFileData = 536870912,
    }

    const enum MFilesURLType {
        Show = 0,
        Open = 1,
        View = 2,
        Edit = 3,
        ShowMetadata = 6,
    }

    const enum MFImpersonationType {
        LocalSystem = 0,
        SpecificAccount = 1,
        ExtAccount = 2,
    }

    const enum MFImportContentFlag {
        None = 0,
        UseMultipleContentPackages = 1,
        DeleteContentPackage = 4,
        ImportCheckoutStates = 16,
        ResetExportTimestamps = 32,
        DoNotImportObjectDestructions = 64,
        UseNamesAsAliases = 128,
        ForceNoStructureIdUpdate = 16384,
        OmitDoneFile = 32768,
    }

    const enum MFIndirectPropertyIDLevelType {
        PropertyDef = 0,
        ObjectType = 1,
        StateChanger = 2,
    }

    const enum MFLatestSpecificBehavior {
        Normal = 0,
        Specific = 1,
        Latest = 2,
        Automatic = 3,
    }

    const enum MFLicenseType {
        None = 0,
        NamedUserLicense = 1,
        ConcurrentUserLicense = 2,
        ReadOnlyLicense = 3,
    }

    const enum MFLoginAccountType {
        MFiles = 1,
        Windows = 2,
    }

    const enum MFLoginServerRole {
        None = 0,
        SystemAdministrator = 1,
        VaultCreator = 2,
        BackupOperator = 4,
        LogIn = 8,
    }

    const enum MFMetadataStructureItem {
        None = 0,
        ObjectType = 1,
        PropertyDef = 2,
        Class = 3,
        Workflow = 4,
        State = 5,
        NamedACL = 6,
        User = 7,
        UserGroup = 8,
        ClassGroup = 9,
        ViewDef = 10,
        ValueListItem = 13,
        ValueList = 14,
        VaultEventHandler = 15,
        StateTransition = 16,
        All = 10000,
    }

    const enum MFMetadataStructureSelectorFlags {
        None = 0,
        SelectNew = 1,
        SelectExisting = 2,
        IncludeNewDependencies = 4,
        IncludeExistingDependencies = 8,
    }

    const enum MFMetadataSyncFormat {
        Word = 0,
        Excel = 1,
        PowerPoint = 2,
    }

    const enum MFNamedACLType {
        None = 0,
        Normal = 1,
        Internal = 2,
    }

    const enum MFNamedValueType {
        ConfigurationValue = 3,
        UserDefinedValue = 4,
        RegistryValue = 5,
        FolderConfiguration = 6,
        AdminConfiguration = 7,
        SystemAdminConfiguration = 8,
    }

    const enum MFObjectAccess {
        None = 0,
        Read = 1,
        Edit = 2,
        ChangePermissions = 4,
        Delete = 8,
        AttachObjects = 16,
    }

    const enum MFObjectOperationFlags {
        None = 0,
        RequireReadAccess = 1,
        RequireEditAccess = 2,
        DisallowNameChange = 4,
        RequireChangeSecurityAccess = 8,
        RequireFullAccess = 16,
        ChangeACLInAllVersions = 32,
        RequireSomeAccess = 64,
    }

    const enum MFObjectTypeAccess {
        None = 0,
        SeeName = 1,
        AddNewItems = 2,
    }

    const enum MFObjectVersionFlag {
        None = 0,
        Completed = 1,
        HasRelatedObjects = 2,
    }

    const enum MFObjectWindowMode {
        Insert = 0,
        InsertSourceFiles = 1,
        InsertSaveAsType = 2,
        Edit = 3,
        EditApplicationModal = 4,
    }

    const enum MFObjectWindowResultCode {
        Ok = 0,
        Cancel = 1,
        OkToAll = 2,
        SkipThis = 3,
    }

    const enum MFOCRDimensionUnit {
        Pixel = 0,
        MillimeterX10 = 1,
        InchX100 = 2,
    }

    const enum MFOCRLanguage {
        None = 0,
        Neutral = 1,
        NumbersOnly = 2,
        EnglishUS = 3,
        EnglishBr = 4,
        German = 5,
        French = 6,
        Spanish = 7,
        Italian = 8,
        Finnish = 9,
        Swedish = 10,
        Danish = 11,
        Norwegian = 12,
        Nynorsk = 13,
        Estonian = 14,
        Latvian = 15,
        Lithuanian = 16,
        Dutch = 17,
        Portuguese = 18,
        Brazilian = 19,
        Galician = 20,
        Icelandic = 21,
        Greek = 22,
        Czech = 23,
        Hungarian = 24,
        Polish = 25,
        Romanian = 26,
        Slovak = 27,
        Croatian = 28,
        Serbian = 29,
        Slovenian = 30,
        Luxembourgish = 31,
        SwissGerman = 32,
        Turkish = 33,
        Russian = 34,
        ByeloRussian = 35,
        Ukrainian = 36,
        Macedonian = 37,
        Bulgarian = 38,
        Afrikaans = 39,
        Albanian = 40,
        Catalan = 41,
        IrishGaelic = 42,
        ScottishGaelic = 43,
        Welsh = 44,
        Basque = 45,
        Mexican = 46,
    }

    const enum MFOCRZoneRecognitionMode {
        NoZoneRecognition = 0,
        RecognizeSpecifiedZones = 1,
        AutoDetectZones = 2,
    }

    const enum MFOfflineTransitionResultFlags {
        None = 0,
        StatusChanged = 1,
        LoggedOut = 2,
    }

    const enum MFOnlineTransitionResultFlags {
        None = 0,
        StatusChanged = 1,
    }

    const enum MFParentChildBehavior {
        None = 0,
        IncludeChildValues = 1,
        IncludeParentValues = 2,
    }

    const enum MFPermission {
        Deny = 0,
        Allow = 1,
        NotSet = 2,
    }

    const enum MFPermissionsExpressionType {
        ACL = 0,
        VisibleTo = 1,
        EditableBy = 2,
        PermissionsChangeableBy = 3,
        FullControlBy = 4,
        DeletableBy = 5,
        ObjectsAttachableToThisItemBy = 6,
    }

    const enum MFPredefinedSearchFilterType {
        Unspecified = 0,
        ObjectType = 1,
        DocumentsModifiedToday = 30000,
        DocumentsModifiedLastWeek = 30001,
        DocumentsModifiedLastMonth = 30002,
        DocumentsModifiedLastYear = 30003,
        DocumentsAccessedByMeToday = 30004,
        DocumentsAccessedByMeLastWeek = 30005,
        DocumentsAccessedByMeLastMonth = 30006,
        DocumentsAccessedByMeLastYear = 30007,
    }

    const enum MFProductMode {
        Full = 0,
        Express = 1,
        Business = 2,
    }

    const enum MFPropertyDefAccess {
        None = 0,
        See = 1,
        Edit = 2,
    }

    const enum MFRelationshipsMode {
        FromThisObject = 1,
        ToThisObject = 2,
        All = 3,
    }

    const enum MFScheduledJobType {
        Uninitialized = 0,
        Backup = 1,
        Restore = 2,
        CopyVault = 3,
        VerifyVault = 4,
        ExportContent = 5,
        ArchiveOldVersions = 6,
        ImportContent = 7,
        OptimizeVault = 8,
        Recalculate = 9,
        MigrateVault = 10,
    }

    const enum MFSearchFlags {
        None = 0,
        LookInAllVersions = 1,
        ReturnLatestVisibleVersion = 2,
        LookAllObjectTypes = 4,
        DisableRelevancyRanking = 16,
    }

    const enum MFServerConnection {
        uthenticated = 1,
        nonymous = 2,
    }

    const enum MFSignaturePromptInfoType {
        Fixed = 0,
        Selectable = 1,
        MetadataBased = 2,
    }

    const enum MFSoftwarePlatformType {
        Win32 = 0,
        X64 = 1,
    }

    const enum MFSpecialObjectFlag {
        None = 0,
        Shortcut = 1,
        Deleted = 2,
        RecentlyAccessedByValid = 4,
        HasSharedFiles = 8,
        Conflict = 16,
        Normal = 64,
    }

    const enum MFStatusType {
        CheckedOut = 0,
        CheckedOutTo = 1,
        CheckedOutAt = 2,
        ObjectID = 3,
        ObjectVersionID = 4,
        Deleted = 5,
        ObjectTypeID = 6,
        IsLatestCheckedInVersion = 7,
        ExtID = 8,
        LatestOrSpecific = 9,
        ObjectTypeAndID = 10,
        ObjectFlags = 11,
        OriginalVaultGUID = 12,
        OriginalObjectType = 13,
        OriginalObjectID = 14,
        OriginalObjectIDSegment = 15,
    }

    const enum MFStringDataType {
        JSON = 0,
        XML = 1,
    }

    const enum MFTriggerMonth {
        January = 1,
        February = 2,
        March = 4,
        April = 8,
        May = 16,
        June = 32,
        July = 64,
        August = 128,
        September = 256,
        October = 512,
        November = 1024,
        December = 2048,
        EveryMonth = 4095,
    }

    const enum MFTriggerType {
        Once = 0,
        Daily = 1,
        Weekly = 2,
        MonthlyDate = 3,
        MonthlyDOW = 4,
    }

    const enum MFTriggerWeekDay {
        Sunday = 1,
        Monday = 2,
        Tuesday = 4,
        Wednesday = 8,
        Thursday = 16,
        Friday = 32,
        Saturday = 64,
        EveryDay = 125,
    }

    const enum MFTriggerWeekOfMonth {
        FirstWeek = 1,
        SecondWeek = 2,
        ThirdWeek = 3,
        FourthWeek = 4,
        LastWeek = 5,
    }

    const enum MFUpdateType {
        Normal = 0,
        ServerAuto = 1,
        ClientAuto = 2,
    }

    const enum MFUserAccountVaultRole {
        None = 0,
        FullControl = 1,
        LogIn = 2,
        CreateObjects = 4,
        SeeAllObjects = 8,
        UndeleteObjects = 16,
        DestroyObjects = 32,
        ForceUndoCheckout = 64,
        ChangeObjectSecurity = 128,
        ChangeMetadataStructure = 256,
        ManageUserAccounts = 512,
        InternalUser = 1024,
        ManageTraditionalFolders = 2048,
        DefineTemplates = 4096,
        ManageCommonViews = 8192,
        ManageWorkflows = 16384,
        DefaultRoles = 3078,
    }

    const enum MFUserOrUserGroupType {
        Unknown = 0,
        UserAccount = 1,
        UserGroup = 2,
        PseudoUser = 3,
        PropertyBasedPseudoUser = 4,
    }

    const enum MFValidationType {
        None = 0,
        RegularExpression = 1,
        VBScript = 2,
    }

    const enum MFValueListItemPropertyDef {
        ID = 1,
        Name = 2,
        Owner = 3,
        Parent = 4,
        Deleted = 5,
        ObjectType = 6,
        ExtID = 7,
    }

    const enum MFValueListSortingType {
        Name = 0,
        ExtID = 1,
    }

    const enum MFVaultAccess {
        None = 0,
        CreateDocs = 1,
        SeeAllDocs = 2,
        UndeleteDocs = 4,
        DestroyDocs = 8,
        ForceUndoCheckout = 16,
        ChangeDocSecurity = 32,
        ChangeMetaDataStructure = 64,
        ManageUserAccounts = 128,
        ChangeFullControlRole = 256,
        VerifyVault = 1024,
        EditAllDocs = 2048,
        ExportContent = 8192,
        ImportContent = 16384,
        ManageVLItemsFromClient = 65536,
        ManageExternalLocations = 131072,
        LicenseAllowsModifications = 262144,
        ManageEvents = 524288,
        ManageTraditionalFolders = 1048576,
        ChangeObjectStates = 4194304,
        ChangeAssignments = 8388608,
        ManageCommonViews = 16777216,
        ManageCommonUISettings = 33554432,
        ManageCommonNotificationRules = 134217728,
        SeeDeletedDocs = 268435456,
        MateriakizeViews = 536870912,
        MaterializeViews = 536870912,
    }

    const enum MFVaultConnectionTestResult {
        OK = 0,
        UserCancelledLoginAttempt = 1,
    }

    const enum MFViewCategory {
        Normal = 0,
        OfflineFilter = 1,
        TemporarySearch = 2,
    }

    const enum MFViewFlag {
        sNone = 0,
        Materialized = 1,
    }

    const enum MFViewType {
        Normal = 0,
        FilterOnly = 1,
    }

    const enum SearchFeature {
        Undefined = 0,
        FacetSearch = 1,
        MultiVaultSearch = 2,
    }

    const enum TaskPaneGroup {
        New = 1,
        ViewAndModify = 2,
        GoTo = 3,
        Main = 4,
    }

    const AccessControlEntry: { new(): IAccessControlEntry };
    const AccessControlEntryContainer: { new(): IAccessControlEntryContainer };
    const AccessControlEntryData: { new(): IAccessControlEntryData };
    const AccessControlEntryKey: { new(): IAccessControlEntryKey };
    const AccessControlEntryKeys: { new(): IAccessControlEntryKeys };
    const AccessControlList: { new(): IAccessControlList };
    const AccessControlListComponent: { new(): IAccessControlListComponent };
    const AccessControlListComponentContainer: { new(): IAccessControlListComponentContainer };
    const AccessControlListComponentKey: { new(): IAccessControlListComponentKey };
    const AccessControlListComponentKeys: { new(): IAccessControlListComponentKeys };
    const AccessControlLists: { new(): IAccessControlLists };
    const ActionConvertToPDF: { new(): IActionConvertToPDF };
    const ActionCreateAssignment: { new(): IActionCreateAssignment };
    const ActionDefinition: { new(): IActionDefinition };
    const ActionDefinitions: { new(): IActionDefinitions };
    const ActionSendNotification: { new(): IActionSendNotification };
    const ActionSetPermissions: { new(): IActionSetPermissions };
    const ActionSetProperties: { new(): IActionSetProperties };
    const AdditionalClassInfo: { new(): IAdditionalClassInfo };
    const AdditionalFolder: { new(): IAdditionalFolder };
    const AdditionalFolders: { new(): IAdditionalFolders };
    const ApprovalAssignmentClassInfo: { new(): IApprovalAssignmentClassInfo };
    const ArchiveOldVersionsJob: { new(): IArchiveOldVersionsJob };
    const AssignmentClassInfo: { new(): IAssignmentClassInfo };
    const AssociatedPropertyDef: { new(): IAssociatedPropertyDef };
    const AssociatedPropertyDefs: { new(): IAssociatedPropertyDefs };
    const AttachVaultOptions: { new(): IAttachVaultOptions };
    const AuthenticationResult: { new(): IAuthenticationResult };
    const AuthenticationResultIntermediate: { new(): IAuthenticationResultIntermediate };
    const AuthenticationResultServerFinal: { new(): IAuthenticationResultServerFinal };
    const AuthenticationResultVaultFinal: { new(): IAuthenticationResultVaultFinal };
    const AutomaticMetadataResult: { new(): IAutomaticMetadataResult };
    const AutomaticPermissions: { new(): IAutomaticPermissions };
    const AutomaticValue: { new(): IAutomaticValue };
    const BackupJob: { new(): IBackupJob };
    const BooleanValue: { new(): IBooleanValue };
    const ClassGroup: { new(): IClassGroup };
    const ClassGroups: { new(): IClassGroups };
    const CopyVaultJob: { new(): ICopyVaultJob };
    const CopyVaultJobOutputInfo: { new(): ICopyVaultJobOutputInfo };
    const CustomApplication: { new(): ICustomApplication };
    const CustomApplications: { new(): ICustomApplications };
    const DailyTrigger: { new(): IDailyTrigger };
    const DataFunctionCall: { new(): IDataFunctionCall };
    const DataSet: { new(): IDataSet };
    const DataSetExportingStatus: { new(): IDataSetExportingStatus };
    const DataSets: { new(): IDataSets };
    const DefaultProperties: { new(): IDefaultProperties };
    const DefaultProperty: { new(): IDefaultProperty };
    const EmailMessageInformation: { new(): IEmailMessageInformation };
    const EventHandler: { new(): IEventHandler };
    const EventHandlers: { new(): IEventHandlers };
    const ExportContentJob: { new(): IExportContentJob };
    const ExportStructureItem: { new(): IExportStructureItem };
    const ExportStructureItems: { new(): IExportStructureItems };
    const Expression: { new(): IExpression };
    const ExpressionEx: { new(): IExpressionEx };
    const ExpressionExs: { new(): IExpressionExs };
    const Expressions: { new(): IExpressions };
    const FileClass: { new(): IFileClass };
    const FileClasses: { new(): IFileClasses };
    const FileDownloadSession: { new(): IFileDownloadSession };
    const FileInformation: { new(): IFileInformation };
    const FileVer: { new(): IFileVer };
    const FileVers: { new(): IFileVers };
    const FolderContentItem: { new(): IFolderContentItem };
    const FolderContentItems: { new(): IFolderContentItems };
    const FolderDef: { new(): IFolderDef };
    const FolderDefs: { new(): IFolderDefs };
    const FolderListingColumn: { new(): IFolderListingColumn };
    const FolderListingColumns: { new(): IFolderListingColumns };
    const FolderListingColumnSorting: { new(): IFolderListingColumnSorting };
    const FolderListingColumnSortings: { new(): IFolderListingColumnSortings };
    const FolderListingUIState: { new(): IFolderListingUIState };
    const FolderNameListing: { new(): IFolderNameListing };
    const FolderUIState: { new(): IFolderUIState };
    const IDRange: { new(): IIDRange };
    const IDs: { new(): IIDs };
    const Impersonation: { new(): IImpersonation };
    const ImportContentJob: { new(): IImportContentJob };
    const IndirectPropertyID: { new(): IIndirectPropertyID };
    const IndirectPropertyIDLevel: { new(): IIndirectPropertyIDLevel };
    const KeyNamePair: { new(): IKeyNamePair };
    const KeyNamePairs: { new(): IKeyNamePairs };
    const Language: { new(): ILanguage };
    const Languages: { new(): ILanguages };
    const LicenseStatus: { new(): ILicenseStatus };
    const LoginAccount: { new(): ILoginAccount };
    const LoginAccountPersonalInformation: { new(): ILoginAccountPersonalInformation };
    const LoginAccounts: { new(): ILoginAccounts };
    const Lookup: { new(): ILookup };
    const Lookups: { new(): ILookups };
    const MetadataStructureSelector: { new(): IMetadataStructureSelector };
    const MetadataStructureSelectors: { new(): IMetadataStructureSelectors };
    const MFilesClientApplication: { new(): IMFilesClientApplication };
    const MFilesServerApplication: { new(): IMFilesServerApplication };
    const MFilesVersion: { new(): IMFilesVersion };
    const MFResourceManager: { new(): IMFResourceManager };
    const MFShellDocListCtrl: { new(): IMFDocListCtrl };
    const MonthlyDateTrigger: { new(): IMonthlyDateTrigger };
    const MonthlyDOWTrigger: { new(): IMonthlyDOWTrigger };
    const NamedACL: { new(): INamedACL };
    const NamedACLAdmin: { new(): INamedACLAdmin };
    const NamedACLs: { new(): INamedACLs };
    const NamedACLsAdmin: { new(): INamedACLsAdmin };
    const NamedValueNamespace: { new(): INamedValueNamespace };
    const NamedValueNamespaces: { new(): INamedValueNamespaces };
    const NamedValues: { new(): INamedValues };
    const Number: { new(): INumber };
    const ObjectClass: { new(): IObjectClass };
    const ObjectClassAdmin: { new(): IObjectClassAdmin };
    const ObjectClasses: { new(): IObjectClasses };
    const ObjectClassesAdmin: { new(): IObjectClassesAdmin };
    const ObjectCreationInfo: { new(): IObjectCreationInfo };
    const ObjectFile: { new(): IObjectFile };
    const ObjectFileAndObjVer: { new(): IObjectFileAndObjVer };
    const ObjectFileAndObjVerOfMultipleFiles: { new(): IObjectFileAndObjVerOfMultipleFiles };
    const ObjectFiles: { new(): IObjectFiles };
    const ObjectSearchResults: { new(): IObjectSearchResults };
    const ObjectTypeTargetForBrowsing: { new(): IObjectTypeTargetForBrowsing };
    const ObjectTypeTargetsForBrowsing: { new(): IObjectTypeTargetsForBrowsing };
    const ObjectVersion: { new(): IObjectVersion };
    const ObjectVersionAndProperties: { new(): IObjectVersionAndProperties };
    const ObjectVersionAndPropertiesOfMultipleObjects: { new(): IObjectVersionAndPropertiesOfMultipleObjects };
    const ObjectVersionFile: { new(): IObjectFileAndVersion };
    const ObjectVersionPermissions: { new(): IObjectVersionPermissions };
    const ObjectVersions: { new(): IObjectVersions };
    const ObjectVersionWorkflowState: { new(): IObjectVersionWorkflowState };
    const ObjectWindowResult: { new(): IObjectWindowResult };
    const ObjID: { new(): IObjID };
    const ObjIDs: { new(): IObjIDs };
    const ObjOrFileVer: { new(): IObjOrFileVer };
    const ObjOrFileVers: { new(): IObjOrFileVers };
    const ObjType: { new(): IObjectType };
    const ObjTypeAdmin: { new(): IObjectTypeAdmin };
    const ObjTypeColumnMapping: { new(): IObjectTypeColumnMapping };
    const ObjTypeColumnMappings: { new(): IObjectTypeColumnMappings };
    const ObjTypes: { new(): IObjectTypes };
    const ObjTypesAdmin: { new(): IObjectTypesAdmin };
    const ObjVer: { new(): IObjVer };
    const ObjVers: { new(): IObjVers };
    const OCROptions: { new(): IOCROptions };
    const OCRPage: { new(): IOCRPage };
    const OCRPageResult: { new(): IOCRPageResult };
    const OCRPageResults: { new(): IOCRPageResults };
    const OCRPages: { new(): IOCRPages };
    const OCRZone: { new(): IOCRZone };
    const OCRZoneResult: { new(): IOCRZoneResult };
    const OCRZoneResults: { new(): IOCRZoneResults };
    const OCRZones: { new(): IOCRZones };
    const OptimizeVaultJob: { new(): IOptimizeVaultJob };
    const OwnerPropertyDef: { new(): IOwnerPropertyDef };
    const PluginInfo: { new(): IPluginInfo };
    const PluginInfos: { new(): IPluginInfos };
    const PreviewerActiveXCtrl: { new(): IPreviewerActiveXCtrl };
    const PropertyDef: { new(): IPropertyDef };
    const PropertyDefAdmin: { new(): IPropertyDefAdmin };
    const PropertyDefOrObjectType: { new(): IPropertyDefOrObjectType };
    const PropertyDefOrObjectTypes: { new(): IPropertyDefOrObjectTypes };
    const PropertyDefs: { new(): IPropertyDefs };
    const PropertyDefsAdmin: { new(): IPropertyDefsAdmin };
    const PropertyValue: { new(): IPropertyValue };
    const PropertyValueForDisplay: { new(): IPropertyValueForDisplay };
    const PropertyValueIconClue: { new(): IPropertyValueIconClue };
    const PropertyValueIconClues: { new(): IPropertyValueIconClues };
    const PropertyValues: { new(): IPropertyValues };
    const PropertyValuesForDisplay: { new(): IPropertyValuesForDisplay };
    const PropertyValuesOfMultipleObjects: { new(): IPropertyValuesOfMultipleObjects };
    const PropertyValueSuggestion: { new(): IPropertyValueSuggestion };
    const PropertyValueSuggestions: { new(): IPropertyValueSuggestions };
    const PropertyValuesWithIconClues: { new(): IPropertyValuesWithIconClues };
    const PropertyValuesWithIconCluesOfMultipleObjects: { new(): IPropertyValuesWithIconCluesOfMultipleObjects };
    const ReportAccessCredentials: { new(): IReportAccessCredentials };
    const RestoreJob: { new(): IRestoreJob };
    const ScheduledJob: { new(): IScheduledJob };
    const ScheduledJobOutputInfo: { new(): IScheduledJobOutputInfo };
    const ScheduledJobRunInfo: { new(): IScheduledJobRunInfo };
    const ScheduledJobs: { new(): IScheduledJobs };
    const ScheduledJobTrigger: { new(): IScheduledJobTrigger };
    const ScheduledJobTriggers: { new(): IScheduledJobTriggers };
    const SearchCondition: { new(): ISearchCondition };
    const SearchConditionEx: { new(): ISearchConditionEx };
    const SearchConditionExs: { new(): ISearchConditionExs };
    const SearchConditions: { new(): ISearchConditions };
    const SearchCriteria: { new(): ISearchCriteria };
    const SearchDef: { new(): ISearchDef };
    const SemanticAliases: { new(): ISemanticAliases };
    const ServerLicenseManagementOperations: { new(): IServerLicenseManagementOperations };
    const ServerLoginAccountOperations: { new(): IServerLoginAccountOperations };
    const ServerManagementOperations: { new(): IServerManagementOperations };
    const ServerScheduledJobManagementOperations: { new(): IServerScheduledJobManagementOperations };
    const ServerVaultManagementOperations: { new(): IServerVaultManagementOperations };
    const SessionInfo: { new(): ISessionInfo };
    const SetPropertiesParams: { new(): ISetPropertiesParams };
    const SetPropertiesParamsOfMultipleObjects: { new(): ISetPropertiesParamsOfMultipleObjects };
    const SharedFileInfo: { new(): ISharedFileInfo };
    const SharedLinkInfo: { new(): ISharedLinkInfo };
    const SharedLinkInfos: { new(): ISharedLinkInfos };
    const SharedLinkPublicOperations: { new(): ISharedLinkPublicOperations };
    const ShortcutMappingInfo: { new(): IShortcutMappingInfo };
    const SignaturePromptInfo: { new(): ISignaturePromptInfo };
    const SignaturePromptInfoMetadataBased: { new(): ISignaturePromptInfoMetadataBased };
    const SignaturePromptInfos: { new(): ISignaturePromptInfos };
    const SignaturePromptInfoSelectable: { new(): ISignaturePromptInfoSelectable };
    const SignatureSettings: { new(): ISignatureSettings };
    const SourceObjectFile: { new(): ISourceObjectFile };
    const SourceObjectFiles: { new(): ISourceObjectFiles };
    const SQLDatabase: { new(): ISQLDatabase };
    const State: { new(): IState };
    const StateAdmin: { new(): IStateAdmin };
    const StateConditions: { new(): IStateConditions };
    const States: { new(): IStates };
    const StatesAdmin: { new(): IStatesAdmin };
    const StateTransition: { new(): IStateTransition };
    const StateTransitionForClient: { new(): IStateTransitionForClient };
    const StateTransitions: { new(): IStateTransitions };
    const StateTransitionsForClient: { new(): IStateTransitionsForClient };
    const StringData: { new(): IStringData };
    const Strings: { new(): IStrings };
    const TaskAssignmentClassInfo: { new(): ITaskAssignmentClassInfo };
    const TemporarySearchView: { new(): ITemporarySearchView };
    const Timestamp: { new(): ITimestamp };
    const TimeZoneInformation: { new(): ITimeZoneInformation };
    const TraditionalFolder: { new(): ITraditionalFolder };
    const TraditionalFolderContents: { new(): ITraditionalFolderContents };
    const TraditionalFolders: { new(): ITraditionalFolders };
    const TriggerType: { new(): ITriggerType };
    const TypedValue: { new(): ITypedValue };
    const TypedValues: { new(): ITypedValues };
    const UserAccount: { new(): IUserAccount };
    const UserAccounts: { new(): IUserAccounts };
    const UserGroup: { new(): IUserGroup };
    const UserGroupAdmin: { new(): IUserGroupAdmin };
    const UserGroups: { new(): IUserGroups };
    const UserGroupsAdmin: { new(): IUserGroupsAdmin };
    const UserOrUserGroupID: { new(): IUserOrUserGroupID };
    const UserOrUserGroupIDEx: { new(): IUserOrUserGroupIDEx };
    const UserOrUserGroupIDExs: { new(): IUserOrUserGroupIDExs };
    const UserOrUserGroupIDs: { new(): IUserOrUserGroupIDs };
    const Validation: { new(): IValidation };
    const ValueListItem: { new(): IValueListItem };
    const ValueListItems: { new(): IValueListItems };
    const ValueListItemSearchResults: { new(): IValueListItemSearchResults };
    const ValueListItemSearchResultsWithPermissions: { new(): IValueListItemSearchResultsWithPermissions };
    const ValueListItemsWithPermissions: { new(): IValueListItemsWithPermissions };
    const Vault: { new(): IVault };
    const VaultAutomaticMetadataOperations: { new(): IVaultAutomaticMetadataOperations };
    const VaultClassGroupOperations: { new(): IVaultClassGroupOperations };
    const VaultClassOperations: { new(): IVaultClassOperations };
    const VaultClientOperations: { new(): IVaultClientOperations };
    const VaultConnection: { new(): IVaultConnection };
    const VaultConnections: { new(): IVaultConnections };
    const VaultCustomApplicationManagementOperations: { new(): IVaultCustomApplicationManagementOperations };
    const VaultDataSetOperations: { new(): IVaultDataSetOperations };
    const VaultElectronicSignatureOperations: { new(): IVaultElectronicSignatureOperations };
    const VaultEventLogOperations: { new(): IVaultEventLogOperations };
    const VaultExtensionMethodOperations: { new(): IVaultExtensionMethodOperations };
    const VaultExternalObjectOperations: { new(): IVaultExternalObjectOperations };
    const VaultLoginAccountOperations: { new(): IVaultLoginAccountOperations };
    const VaultManagementOperations: { new(): IVaultManagementOperations };
    const VaultNamedACLOperations: { new(): IVaultNamedACLOperations };
    const VaultNamedValueStorageOperations: { new(): IVaultNamedValueStorageOperations };
    const VaultNotificationOperations: { new(): IVaultNotificationOperations };
    const VaultObjectFileOperations: { new(): IVaultObjectFileOperations };
    const VaultObjectOperations: { new(): IVaultObjectOperations };
    const VaultObjectPropertyOperations: { new(): IVaultObjectPropertyOperations };
    const VaultObjectSearchOperations: { new(): IVaultObjectSearchOperations };
    const VaultObjectTypeOperations: { new(): IVaultObjectTypeOperations };
    const VaultOnServer: { new(): IVaultOnServer };
    const VaultProperties: { new(): IVaultProperties };
    const VaultPropertyDefOperations: { new(): IVaultPropertyDefOperations };
    const VaultScheduledJobManagementOperations: { new(): IVaultScheduledJobManagementOperations };
    const VaultServerDataPushOperations: { new(): IVaultServerDataPushOperations };
    const VaultSharedLinkOperations: { new(): IVaultSharedLinkOperations };
    const VaultsOnServer: { new(): IVaultsOnServer };
    const VaultTraditionalFolderOperations: { new(): IVaultTraditionalFolderOperations };
    const VaultUserGroupOperations: { new(): IVaultUserGroupOperations };
    const VaultUserOperations: { new(): IVaultUserOperations };
    const VaultUserSettingOperations: { new(): IVaultUserSettingOperations };
    const VaultValueListItemOperations: { new(): IVaultValueListItemOperations };
    const VaultValueListOperations: { new(): IVaultValueListOperations };
    const VaultViewOperations: { new(): IVaultViewOperations };
    const VaultWorkflowOperations: { new(): IVaultWorkflowOperations };
    const VerifyVaultJob: { new(): IVerifyVaultJob };
    const VerifyVaultJobOutput: { new(): IVerifyVaultJobOutput };
    const VersionComment: { new(): IVersionComment };
    const VersionComments: { new(): IVersionComments };
    const View: { new(): IView };
    const ViewLocation: { new(): IViewLocation };
    const Views: { new(): IViews };
    const WeeklyTrigger: { new(): IWeeklyTrigger };
    const Workflow: { new(): IWorkflow };
    const WorkflowAdmin: { new(): IWorkflowAdmin };
    const WorkflowAssignment: { new(): IWorkflowAssignment };
    const Workflows: { new(): IWorkflows };
    const WorkflowsAdmin: { new(): IWorkflowsAdmin };
    const XMLSearchResult: { new(): IXMLSearchResult };

    const ApplicationPath: string;
    const CLSID: ICLSIDs;
    const CurrentApplicationPlatform: any;

    function CreateInstance(name: string): any;
    function CreateObjectCLR(assemblyFile: string, className: string): any;
    function DeleteRegistryKey(userSpecific: boolean, key: string): void;
    function DeleteRegistryValue(userSpecific: boolean, key: string, valueName: string): void;
    function EnableExceptionPropagation(exception: any): void;
    function ExecuteURL(url: string): void;
    function GetErrorDescription(exception: any): string;
    function GetLongErrorDescription(exception: any): string;
    function GetStringResource(resource: number): string;
    function KillTimer(timerId: number): void;
    function LaunchHelp(helpID: string): void;
    function PersistStringData(name: string, privateData: boolean, data: string): void;
    function ReadFromRegistry(userSpecific: boolean, key: string, valueName: string): any;
    function ReadTextFile(filename: string): string;
    function ReportException(exception: any): void;
    function RetrieveStringData(name: string, privateData: boolean): string;
    function SetTimer(timeoutInMs: number, callbackMethod: () => void): number;
    function ThrowError(description: string): void;
    function WriteToRegistry(
        userSpecific: boolean,
        key: string,
        valueName: string,
        value: any,
        valueType: string,
    ): void;
}
