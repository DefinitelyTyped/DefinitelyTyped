// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="SP.d.ts" />
///<reference path="SP.Utilities.d.ts" />
///<reference path="autofill.d.ts" />
///<reference path="SP.UI.ApplicationPages.d.ts" />


declare class SPClientPeoplePicker {
    static ValueName: string; // = 'Key';
    static DisplayTextName: string; // = 'DisplayText';
    static SubDisplayTextName: string; // = 'Title';
    static DescriptionName: string; // = 'Description';
    static SIPAddressName: string; // = 'SIPAddress';
    static SuggestionsName: string; // = 'MultipleMatches';
    static UnvalidatedEmailAddressKey: string; // = "UNVALIDATED_EMAIL_ADDRESS";
    static KeyProperty: string; // = 'AutoFillKey';
    static DisplayTextProperty: string; // = 'AutoFillDisplayText';
    static SubDisplayTextProperty: string; // = 'AutoFillSubDisplayText';
    static TitleTextProperty: string; // = 'AutoFillTitleText';
    static DomainProperty: string; // = 'DomainText';

    static SPClientPeoplePickerDict: {
        [pickerIelementId: string]: SPClientPeoplePicker;
    };

    static InitializeStandalonePeoplePicker(clientId: string, value: ISPClientPeoplePickerEntity[], schema: ISPClientPeoplePickerSchema): void;
    static ParseUserKeyPaste(userKey: string): string;
    static GetTopLevelControl(elmChild: HTMLElement): HTMLElement;
    static AugmentEntity(entity: ISPClientPeoplePickerEntity): ISPClientPeoplePickerEntity;
    static AugmentEntitySuggestions(pickerObj: SPClientPeoplePicker, allEntities: ISPClientPeoplePickerEntity[], mergeLocal?: boolean): ISPClientPeoplePickerEntity[];
    static PickerObjectFromSubElement(elmSubElement: HTMLElement): SPClientPeoplePicker;
    static TestLocalMatch(strSearchLower: string, dataEntity: ISPClientPeoplePickerEntity): boolean;
    static BuildUnresolvedEntity(key: string, dispText: string): ISPClientPeoplePickerEntity;
    static AddAutoFillMetaData(pickerObj: SPClientPeoplePicker, options: ISPClientPeoplePickerEntity[], numOpts: number): ISPClientPeoplePickerEntity[];
    static BuildAutoFillMenuItems(pickerObj: SPClientPeoplePicker, options: ISPClientPeoplePickerEntity[]): ISPClientPeoplePickerEntity[];
    static IsUserEntity(entity: ISPClientPeoplePickerEntity): boolean;
    static CreateSPPrincipalType(acctStr: string): number;


    public TopLevelElementId: string; // '',
    public EditorElementId: string; //'',
    public AutoFillElementId: string; //'',
    public ResolvedListElementId: string; //'',
    public InitialHelpTextElementId: string; //'',
    public WaitImageId: string; //'',
    public HiddenInputId: string; //'',
    public AllowEmpty: boolean; //true,
    public ForceClaims: boolean; //false,
    public AutoFillEnabled: boolean; //true,
    public AllowMultipleUsers: boolean; //false,
    public OnValueChangedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    public OnUserResolvedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    public OnControlValidateClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    public UrlZone: SP.UrlZone; //null,
    public AllUrlZones: boolean; //false,
    public SharePointGroupID: number; //0,
    public AllowEmailAddresses: boolean; //false,
    public PPMRU: SPClientPeoplePickerMRU;
    public UseLocalSuggestionCache: boolean; //true,
    public CurrentQueryStr: string; //'',
    public LatestSearchQueryStr: string; // '',
    public InitialSuggestions: ISPClientPeoplePickerEntity[];
    public CurrentLocalSuggestions: ISPClientPeoplePickerEntity[];
    public CurrentLocalSuggestionsDict: ISPClientPeoplePickerEntity;
    public VisibleSuggestions: number; //5,
    public PrincipalAccountType: string; //'',
    public PrincipalAccountTypeEnum: SP.Utilities.PrincipalType;
    public EnabledClaimProviders: string; //'',
    public SearchPrincipalSource: SP.Utilities.PrincipalSource; //null,
    public ResolvePrincipalSource: SP.Utilities.PrincipalSource; //null,
    public MaximumEntitySuggestions: number; //30,
    public EditorWidthSet: boolean; //false,
    public QueryScriptInit: boolean; //false,
    public AutoFillControl: SPClientAutoFill; //null,
    public TotalUserCount: number; //0,
    public UnresolvedUserCount: number; //0,
    public UserQueryDict: { [index: string]: SP.StringResult };
    public ProcessedUserList: { [index: string]: SPClientPeoplePickerProcessedUser };
    public HasInputError: boolean; //false,
    public HasServerError: boolean; //false,
    public ShowUserPresence: boolean; //true,
    public TerminatingCharacter: string; //';',
    public UnresolvedUserElmIdToReplace: string; //'',
    public WebApplicationID: SP.Guid; //'{00000000-0000-0000-0000-000000000000}',
    public GetAllUserInfo(): ISPClientPeoplePickerEntity[];

    public SetInitialValue(entities: ISPClientPeoplePickerEntity[], initialErrorMsg?: string): void
    public AddUserKeys(userKeys: string, bSearch: boolean): void;
    public BatchAddUserKeysOperation(allKeys: string[], numProcessed: number): void;
    public ResolveAllUsers(fnContinuation: () => void): void;
    public ExecutePickerQuery(queryIds: string, onSuccess: (queryId: string, result: SP.StringResult) => void, onFailure: (queryId: string, result: SP.StringResult) => void, fnContinuation: () => void): void;
    public AddUnresolvedUserFromEditor(bRunQuery?: boolean): void;
    public AddUnresolvedUser(unresolvedUserObj: ISPClientPeoplePickerEntity, bRunQuery?: boolean): void;
    public UpdateUnresolvedUser(results: SP.StringResult, user: ISPClientPeoplePickerEntity): void;
    public AddPickerSearchQuery(queryStr: string): string;
    public AddPickerResolveQuery(queryStr: string): string;
    public GetPeoplePickerQueryParameters(): SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters;
    public AddProcessedUser(userObject: ISPClientPeoplePickerEntity, fResolved?: boolean): string;
    public DeleteProcessedUser(elmToRemove: HTMLElement): void;
    public OnControlValueChanged(): void;
    public OnControlResolvedUserChanged(): void;
    public EnsureAutoFillControl(): void;
    public ShowAutoFill(resultsTable: ISPClientAutoFillData[]): void;
    public FocusAutoFill(): void;
    public BlurAutoFill(): void;
    public IsAutoFillOpen(): boolean;
    public EnsureEditorWidth(): void;
    public SetFocusOnEditorEnd(): void;
    public ToggleWaitImageDisplay(bShowImage?: boolean): void;
    public SaveAllUserKeysToHiddenInput(): void;
    public GetCurrentEditorValue(): string;
    public GetControlValueAsJSObject(): ISPClientPeoplePickerEntity[];
    public GetAllUserKeys(): string;
    public GetControlValueAsText(): string;
    public IsEmpty(): boolean;
    public IterateEachProcessedUser(fnCallback: (index: number, user: SPClientPeoplePickerProcessedUser) => void): void;
    public HasResolvedUsers(): boolean;
    public Validate(): void;
    public ValidateCurrentState(): void
    public GetUnresolvedEntityErrorMessage(): string;
    public ShowErrorMessage(msg: string): void;
    public ClearServerError(): void;
    public SetServerError(): void;
    public OnControlValidate(): void;
    public SetEnabledState(bEnabled: boolean): void;
    public DisplayLocalSuggestions(): void;
    public CompileLocalSuggestions(input: string): void;
    public PlanningGlobalSearch(): boolean;
    public AddLoadingSuggestionMenuOption(): void;
    public ShowingLocalSuggestions(): boolean;
    public ShouldUsePPMRU(): boolean;
    public AddResolvedUserToLocalCache(resolvedEntity: ISPClientPeoplePickerEntity, resolveText: string): void;
}

interface ISPClientPeoplePickerSchema {
    TopLevelElementId?: string;
    EditorElementId?: string;
    AutoFillElementId?: string;
    ResolvedListElementId?: string;
    InitialHelpTextElementId?: string;
    WaitImageId?: string;
    HiddenInputId?: string;

    AllowMultipleValues?: boolean;
    Required?: boolean;
    AutoFillEnabled?: boolean;
    ForceClaims?: boolean;
    AllowEmailAddresses?: boolean;
    AllUrlZones?: boolean;
    UseLocalSuggestionCache?: boolean;
    UserNoQueryPermission?: boolean;

    VisibleSuggestions?: number;
    MaximumEntitySuggestions?: number;

    ErrorMessage?: string;
    InitialHelpText?: string;

    InitialSuggestions?: ISPClientPeoplePickerEntity[];


    UrlZone?: SP.UrlZone;
    WebApplicationID?: SP.Guid;
    SharePointGroupID?: number;

    /** Specify User, DL, SecGroup or SPGroup*/
    PrincipalAccountType?: string;

    EnabledClaimProvider?: string;
    ResolvePrincipalSource?: SP.Utilities.PrincipalSource;
    SearchPrincipalSource?: SP.Utilities.PrincipalSource;

    OnUserResolvedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    OnValueChangedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;

    /** Number or '100%'*/
    Width?: any;

    Rows?: number;

}

declare class SPClientPeoplePickerMRU {
    static PPMRUVersion: number;// = 1;
    static MaxPPMRUItems: number;// = 200;
    static PPMRUDomLocalStoreKey: string;// = "ClientPeoplePickerMRU";
    static GetSPClientPeoplePickerMRU(): SPClientPeoplePickerMRU;

    GetItems(strKey: string): Object[];
    SetItem(strSearchTerm: string, objEntity: Object): void;
    ResetCache(): void;
}

interface ISPClientPeoplePickerEntity {
    Key?: string;
    Description?: string;
    DisplayText?: string;
    EntityType?: string;
    ProviderDisplayName?: string;
    ProviderName?: string;
    IsResolved?: boolean;
    EntityData?: {
        Title: string;
        MobilePhone: string;
        Department: string;
        Email: string;
    };
    MultipleMatches: ISPClientPeoplePickerEntity[];
    DomainText?: string;
    [key: string]: any;
}

declare class SPClientPeoplePickerProcessedUser {
    UserContainerElementId: string;// '',
    DisplayElementId: string;// '',
    PresenceElementId: string;// '',
    DeleteUserElementId: string;// '',
    SID: string;// '',
    DisplayName: string;// '',
    SIPAddress: string;// '',
    UserInfo: ISPClientPeoplePickerEntity;// null,
    ResolvedUser: boolean;// true,
    Suggestions: ISPClientAutoFillData[];// null,
    ErrorDescription: string;// '',
    ResolveText: string;// '',
    public UpdateResolvedUser(newUserInfo: ISPClientPeoplePickerEntity, strNewElementId: string): void;
    public UpdateSuggestions(entity: ISPClientPeoplePickerEntity): void;
    public BuildUserHTML(): string;
    public UpdateUserMaxWidth(): void;
    public ResolvedAsUnverifiedEmail(): string;

    static BuildUserPresenceHtml(elmId: string, strSip: string, bResolved?: boolean): string;
    static GetUserContainerElement(elmChild: HTMLElement): HTMLElement;
    static HandleProcessedUserClick(ndClicked: HTMLElement): void;
    static DeleteProcessedUser(elmToRemove: HTMLElement): void;
    static HandleDeleteProcessedUserKey(e: Event): void;
    static HandleResolveProcessedUserKey(e: Event): void;
}