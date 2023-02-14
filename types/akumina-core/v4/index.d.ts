// Type definitions for Akumina 4.5
// Project: https://github.com/akumina/AkuminaDev
// Definitions by: Akumina <https://github.com/akumina>
//                 Jason Arden <https://github.com/jasonarden>
//                 Sean Glover <https://github.com/MarshHawk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

import IGetListRequest from "./interfaces/IGetListRequest";
import ISavePageWidgetRequest from "./interfaces/ISavePageWidgetRequest";

declare namespace Akumina {
    class BaseWidget {
        constructor();
        Properties: any;
        GetPropertyValue(requestIn: any, key: string, defaultValue: any): any;
        RefreshWidget(newProps: any): void;
        BindTemplate(templateUri: string, data: any, targetDiv: string): void;
    }

    class Expression {
        And(expression: any): Expression;
        Or(expression: any): Expression;
        EqualTo(expression: any): Expression;
        In(expression: any): Expression;
        NotEqualTo(expression: any): Expression;
        GreaterThan(expression: any): Expression;
        GreaterThanOrEqualTo(expression: any): Expression;
        LessThan(expression: any): Expression;
        LessThanOrEqualTo(expression: any): Expression;
        Contains(expression: any): Expression;
    }

    class PropertyExpression extends Expression {
        constructor(param?: any);
    }
    // class OrExpression extends Expression { }
    // class EqualExpression extends Expression { }
    // class InExpression extends Expression { }
    // class NotEqualExpression extends Expression { }
    // class GreaterThanExpression extends Expression { }
    // class GreaterThanOrEqualExpression extends Expression { }
    // class LessThanExpression extends Expression { }
    // class LessThanOrEqualExpression extends Expression { }
    // class ContainsExpression extends Expression { }
    class SortDirection {
        static Descending: string;
    }

    namespace AppParts {
        class Banner {
            constructor(options: any);
        }
        class Traffic {
            constructor(options: any);
        }
        class Calendar {
            constructor(options: any);
        }
        class CompanyCalendar {
            constructor(options: any);
        }
    }

    namespace Digispace {
        class ConfigurationContext {
            /** HTML template for Loading */
            static LoadingTemplateHtml: string;
            /** Template Folder name */
            static TemplateFolderName: string;
            /** Is Site multilingual  */
            static IsMultiLingualEnabled: boolean;
            /** Loing URL for login to interchange */
            static InterchangeLoginURL: string;
            /** URL to Interchange */
            static InterchangeURL: string;
            static InterchangeQueryKey: string;
            /** All confguratoin constants */
            static CONSTANTS: IConstants;
            /** Is user loggied into app manager */
            static IsAppManagerLoggedIn: boolean; /* Added */
            /** Is site using AzureAD ID */
            static EnableAzureAD: boolean; /* Added */
            /** All personas */
            static Personas: any[];
            /** All container layouts objects */
            static ContainerLayouts: any[];
            /** All premade page layout objects */
            static PageLayouts: any[];
            /** settings object */
            static Settings: any;
            static TemplateCoreFolderName: string;
            static GraphClientId: string;
            static GraphSubscriptionId: string;
            /** JSON string */
            static SiteLogoObj: string;
            static SiteImageObj: string;
            /** Caching strategy time */
            static CachingStrategyInterval: number;
            /** Associative Array of objects */
            static DepartmentSiteMap: any[];
            static GoogleMapKey: string;
            static ApplicationInsightsKey: string;
            static SkypeApiKey: string;
            static SkypeApiKeyCC: string;
            static TenantUrl: string;
            /** Is in Debug mode */
            static EnableDebugMode: boolean;
            /** Current Theme */
            static Theme: string;
            /** Pages to be excluded in search */
            static SearchPageExclusionList: string[];
            /** Language neutral Listsname  */
            static LanguageNeutralLists: any;
            /** SP Lists with persona enabled */
            static PersonaEnabledLists: any;
            static TemplateURLPrefix: string;
            /** Site URL  */
            static ConfigurationSiteUrl: string;
            /** Widget Instance URL */
            static WidgetInstanceSiteUrl: string;
            /** Dashboard Instance Site URL */
            static DashboardInstanceSiteUrl: string;
            static RemoteListSiteUrl: string;
            static GraphRedirectUrl: string;
            static DefaultLanguage: string;
            static SiteVisibleLanguages: any;
            static GroupTagsExtension: any;
            static GroupTypeExtension: any;
            /** Is workspace is enabled or not */
            static IsWorkspacesEnabled: boolean;
            static NotFoundPage: string;
            static IsNotFoundPage: boolean;
            static AkTokenDuration: number;
            /** Time to wait for script loading */
            static ScriptTimeout: number;
            static InstanceRowLimit: number;
            /**
             * #MARK - It is comming as Undefined
             */
            static ErrorRedirectUrl: string;
            static PageWidgetDefaultSize: string;
            static DashboardWidgetDefaultSize: string;
            static DashboardGridWidth: string;
            static DashboardGridHeight: string;
            static DashboardZoneIds: string;
            static DashboardEnableEditMode: boolean;
            static DashboardView: string[];
            static WorkspaceThemesAvailable: string[];
            /** Internal widget dependency map */
            static InternalWidgetDependencyMap: any[];
            static WidgetDependencyMap: any[];
            /** Currently Active languages {LanguageID, ID, FallBack, Name, Code, etc...} */
            static ActiveLanguages: any[];
            static EnableReusableContent: boolean;
            static ReusableContentList: string;
            static PageBuilderDefaultLayoutId: number;
            /** Instance Ids for widgets */
            static InternalWidgetInstanceIds: any;
            static AppManagerLoggedInTime: any;
            static UseEncryption: boolean;
            static PersonaSelectionMode: string;
            static PageRouteInfo: any;
            /** Contains Array of pageTypes object */
            static PageTypes: any[];
            /**
             * @param isLoggedIn
             * @param loggedInTime
             */
            static setAppManagerLogin(isLoggedIn: boolean, loggedInTime: any): void;
            /**
             * Set configuration from digispace object passed.
             * @param digispaceConfiguration
             */
            static setDigispaceConfiguration(digispaceConfiguration: any): void;
            static PopulateTemplateURLPrefix(): void;
            /**
            * Load Active Languages
            * @param activeLanguages
            */
            static LoadActiveLanguages(activeLanguages: any): void;
            static clearCache(): void;
            /**
            * GetCacheKey
            * @param attribute
            */
            static getCacheKey(attribute: string): string;
            /**
            * Get Language Neutral cache key
            * @param key
            */
            static getCacheKeyLanguageNeutral(key: string): string;
            /**
            * Returns currect caching strategy
            * @param cachingStrategy
            */
            static ResolveCachingStrategy(cachingStrategy: any): number;
            /**
            * Map department objects to associative array
            * @param sitedepartments
            * @returns Associative array.
            */
            static MapDepartmentSites(sitedepartments: any): any[];

            static loadDigispaceConfiguration(): JQueryDeferred<any>;
            static GetAdditionalLoaderConfigurations(): void;
            /**
             * Set default language
             * @param defaultLanguage
             */
            static SetDefaultLanguage(defaultLanguage: any): void;
            static GetDefaultLanguage(): any;
            /**
            * Set Site visible Languages.
            * @param languages
            */
            static SetSiteVisibleLanguages(languages: any): any;
            /**
            * Get site visible languages
            * @param languages
            */
            static GetSiteVisibleLanguages(languages: any): any;
        }
        class UserContext {
            static LanguageCode: string;
            static LanguageId: number;
            static FallbackLanguageId: number;
            static SetLanguage(obj: any): void;
            static UserId: string;
            static City: string;
            static State: string;
            static PostalCode: string;
            static Department: string;
            static UserLoginName: string;
            static LoginName: string;
        }
        class SiteContext {
            static IsLoaderComplete: boolean;
            /** Check if current page is a workspace page */
            static IsWorkspacePage: boolean;
            /** WorkspaceDetails page absolute URL */
            static WorkspaceDetailsUrl: string;
            /** Check if current page is a VPC */
            static IsVirtualPage: boolean;
            static IsSPAPage: boolean;

            /**
             * Check if in design mode.
             */
            static IsInDesignMode(): string;
            static FrameworkLoadTime: number;
            static TotalLoadTime: number;
            static TotalConnectTime: number;
            static TotalRenderTime: number;
            /** SiteID with {} */
            static SiteId: string;
            /** Root Site URL */
            static SiteAbsoluteUrl: string;
            /** Relative URL for root site */
            static SiteServerRelativeUrl: string;
            /** Current Site relative URL */
            static WebServerRelativeUrl: string;
            /** Current site Absolute URL */
            static WebAbsoluteUrl: string;
            /** Check if Current user is site Admin */
            static IsSiteAdmin: boolean;
            /** Stores current language ID */
            static CurrentLanguage: number;
            static ListPermissionsMask: any;
            /** Relative URL to current page */
            static ServerRequestPath: string;
            static IsLogoutPage: boolean;
            static IsDashBoardPage: boolean;
            static IsSandboxPage: boolean;
            static IsPageBuilderPage: boolean;
            /** Relative URL to Employee Details page */
            static EmployeeDetailUrl: string;
            /** Absolute URL to Workspace page */
            static WorkspaceListingUrl: string;
            /** Web ID (Root Site ID) */
            static WebId: string;
            static IsExternalUser: boolean;
            /** check if page not found */
            static PageNotFound: boolean;
            static UniqueId: string;
            /** #MARK - it is not used as of now */
            static IsWidgetJSLoaded: boolean;
            /** #MARK - not used as of now. */
            static LoadedWidgets: any[];
            static RootSiteId: string;
            static RootSiteUrl: string;
            static IsHeadlessMode: boolean;
            /** @return Resolves with Language ID */
            static GetSiteLocaleId(): JQueryDeferred<any>;
            static IsModernPage: boolean;
            /** Lists queired till now
            */
            static QueriedLists: string[];
            /** Lists of template views in use
            */
            static ViewsInUse: string[];
        }
        class PageContext {
            static EditMode: boolean;
            static PageId: string;
            static MapPageUrl(pageUrl: string): string;
            static PageRouteInfo: {
                email: string
            };
        }
        class Utilities {
            /**
             * Shows confirmation popup if all permissions are set as NA
             * It is called from add page tab and page properties update
             * @param isPagePropertisPopUp true if called from page properties.
             */
            static AllPermissionsNA(isPagePropertisPopUp: boolean | null): void;
            /**
             * Called to show confirmation pop up while exiting edit page mode.
             */
            static AttemptReset(): void;

            /**
             * Check if iser is logged into appmanager and set the flag accordingly
             */
            static CheckAppManagerIsLoggedIn(): void;
            /** Takes string or any value as input & can return it as boolean or JSON
             *  @param value Any value
             *  @param dataType Required retrun type "bool", "boolean", "json"
             */
            static ConvertValue(value: any, dataType: string): boolean | JSON;
            /**
             * Removes duplicate entries from an array
             * @param array Array to be filter
             */
            static DeDupArray(array: any): any;
            /**
             * @param result
             * @param isCurrent
             * @returns Returns value of key ListID or SiteTitle(in case of isCurrent true)
             */
            static FindSearchResultCategory(result: any[], isCurrent: boolean): string;
            /** Convert date string to jsformat date string
             *  Acceptable formats "mm/dd/yy", "dd/mm/yy", "dd-mm-yy", "mm/dd/yyyy", "dd/mm/yyyy", "dd-mm-yyyy"
             *  @param format
             *  @param date
             *  @returns Converted date string in format "dd/mm/yy" or "mm/dd/yyyy"
             */
            static FormatDateStringToJSFormat(format: string, date: string): string;
            /** Returns an object with pageId property */
            static GetCurrentPageId(): any;
            static GetDashboardGridByInstance(instanceId: string): string[];
            /**Returns a deffered which will resolve with site specific date format object
             * @returns deffered resolved with object type: {
                        "dateformat": "mm/dd/yy",
                        "momentformat": "MM/DD/YY",
                        "displayformat": "MM/DD/YYYY",
                        "languagecode": "en-US"
                    }
             */
            static GetDateFormatForSiteLocaleId(): JQueryDeferred<any>; /* Added */
            /**
             * Resolves with Employee Detail Url
             * @param id UserId
             */
            static GetEmployeeDetailUrl(id: string): JQueryDeferred<any>;
            /**
             * Get new GUID
             */
            static GetGuid(): string;
            static GetLinkForResult(itemUrl: string): string;
            static GetLinkParameter(itemUrl: string, paramToRetrieve: string, defaultValue: string): string;
            /**
             * relative path for manager script
             */
            static GetManagerUrl(): string;
            /**
             * Returns Page Grid for workspace widget Instancce Id's
             * @param instanceId Widget Instance ID
             */
            static GetPageGridByInstance(instanceId: string): string[];
            static GetPropertyValue(requestIn: any, key: string, defaultValue: string, dataType: string): boolean | JSON;
            /** Retrive search parameter value from results */
            static GetSearchParameter(itemResults: any[], paramToRetrieve: string, defaultValue: string): string;
            /**
             * @returns element of sharepoint bar
             */
            static GetSharepointBarElement(): any;
            /**
             * @returns object with URL parameters
             */
            static GetUrlParameters(): any;
            static HandleSharepointBar(args: any): void;
            /**
             * Hide sharepoint bar
             * @param setCookie boolean
             */
            static HideSharepointBar(setCookie: boolean): void;
            static IsAppManagerLaguageCompatible(): JQueryDeferred<any>;
            /** Convert object keys to lowercase
             *  @param data JSON String of Array of objects
             *  @returns Array of JSON objects with all keys in lowercase
             */
            static JsonArrayKeyToLower(data: string): any[];
            /**
             * Open interchange in new tab
             */
            static OpenInterchange(): void;
            static PageBindCloseWidgets(args: any, grid: any): void;
            static PageResizeWidgets(args: any): void;
            /**
             * Open link in new window/tab.
             * @param link Link to open
             */
            static PopUpLink(link: string): void;
            /** This method will show confirmation pop-up if user try to exit page edit mode */
            static PromptExitEditMode(): void;
            /** Register timer to check if user is logged into appmanager every minute */
            static RegisterAppManagerLoggedInCheckHandler(): void;
            /**
             * To show message in alert box
             * @param message Message text to show
             * @param options Custome options {width}
             * @param actioncallback Method to be called when user click ok
             */
            static ShowAlertPopup(message: string, options: any, actioncallback?: any): void;
            /**
             * Show sharepoint bar
             * @param setCookie boolean
             */
            static ShowSharepointBar(setCookie: boolean): void;
            /**
             * Toggle Debugger panel
             */
            static ToggleDebugger(): void;
            static ToggleExistPageBuilderManager(): void;
            /** Toggle Impersonator mode */
            static ToggleImpersonator(): void;
            /** Toggle Widget properties edit mode */
            static ToggleItemManager(): void;
            /** Toggle live preview mode */
            static ToggleLiveMode(): void;
            /** Toggle page builder (Add new page) */
            static TogglePageBuilderManager(): void;
            /** Toggle page edit mode */
            static TogglePageManager(): void;
            /** Toggle widget edit mode */
            static ToggleWidgetManager(): void;
        }
        class Language {
            static TryGetText(Token: string): string; /* Added */
            static GetText(Token: string): string; /* Added */
        }
        class WorkspaceContext {
            static groupId: boolean;
            static IsCurrentGraphUserWorkspaceOwner: boolean;
        }

        class PageBuilderManager {
            GetDataForAddWidget(): JQueryDeferred<any>;
        }

        class ScriptManager {
            GetManagerScript(callback: () => void): JQueryDeferred<any>;
            GetWidgetLegacyScript(callback: () => void): JQueryDeferred<any>;
            GetLanguageMappingsScript(callback: () => void): JQueryDeferred<any>;
            GetBabelScript(callback: () => void): JQueryDeferred<any>;
            LoadPageBuilderCSS(): JQueryDeferred<any>;
        }

        class PerfLogger {
            /** Add LoaderMark and mark it start
             * @param mark String Name of mark to be added as Start
             * @param type String
             */
            static AddLoaderStartMark(mark: string, type: string): void;

            /** Mark Stop of a LoaderMark
             * @param mark String Name of mark to be marked as Stop
             */
            static AddLoaderStopMark(mark: string): void;

            /** To add a new mark
             * @param mark String name of mark
             */
            static AddMark(mark: string): void;

            /** Get a mark object by mark name
             * @param mark string name of mark
             * @returns object of mark {name: "string", startTime: decimal}
            */
            static GetMark(mark: string): any;

            /** Get List of marks added
             * @returns Array of mark objects [{name: "string", startTime: decimal}]
             */
            static GetMarks(): any[];

            /** Get list of all Loader Marks
             * @returns Array of Loader marks object
            */
            static GetLoaderMarks(): any[];

            /** Measure Performance between two marks
             * @param mark1 Name of mark to compare
             * @param mark2 Name of mark to compare
             * @returns PerformanceMeasure Object
             */
            static CompareMarks(mark1: string, mark2: string): any;

            /** Gets color from time
             * @param time time in ms
             * @param type short,medium,long
             * @returns yellow green or red
            */
            static GetColor(time: number, type: string): string;
        }
        class WidgetPropertyViews {
            static AddViewForProperty(widgetName: string, propName: string, value: string): void;
        }
        namespace AppPart {
            class Eventing {
                constructor();
                static Subscribe(e: string, func: any, caller?: any): void; /* Updated */
                static Publish(t: string, data?: any): void; /* Updated */
            }
            class Data {
                Templates: Templates;
            }
        }
        namespace WidgetManager {
            class Menu {
                constructor(p: any);
                Open(parent: any): any;
            }
        }
        namespace Utilities { /* Added */
            class DateTimeManager {
                static LocalToUtc(data: any): Date;
                static UtcToLocal(Date: Date, format: string): string;
            }
        }
        namespace Data {
            class LanguageManager {
                GetDefaultLanguage(): any;
            }

            class WidgetManager {
                InitializeChildWidgetsWithOverride(widgetIds: string[], pageId: string, widgetProps: any[], view: string): any;
                // RenderWidget(data: any, pageId: string, widgetProps: string, view: string): any;
                /* Added in Alphabatical order */

                /** Check if widgetinstances are Dashboard Container widgets */
                AreDashboardContainerWidgets(widgetInstanceIds: any[]): JQueryDeferred<any>;
                /** Add dashboard widget instance */
                AddDashboardWidgetInstance(dashboardWidgetTitle: string, widgetInstance: any): JQueryDeferred<any>;
                /** Copy Widget Instance */
                CopyWidgetInstance(widgetInstanceId: string): JQueryDeferred<any>;
                GetManualDependencyMap(widgetName: string): any[];
                /** Resolves with next AkId */
                GetNextAkId(): JQueryDeferred<any>;
                /** Resolves with siteId */
                GetSiteId(): JQueryDeferred<any>;
                /**
                 * @returns Resolves with Array with object of all the widget Instances
                 */
                GetWidgetInstances(): JQueryDeferred<any>;
                /**
                 * @returns def Resolves in success with Object with authorized user groups
                 */
                GetWidgetManagerAppAuthorization(): JQueryDeferred<any>;
                /**
                 * @returns def Resolves in success with Widget Manager Instance ID
                 */
                GetWidgetManagerApp(): JQueryDeferred<any>;
                /**
                 * @param widgetType WidgetType
                 * @returns def Resolves in success with array of objects of widget view of widgetType passed
                 */
                GetWidgetViews(widgetType: string): JQueryDeferred<any>;
                /**
                 * #MARK - dataType correction
                 * @param widgetInstanceIds Array of widget Instance Ids
                 */
                GetWidgetPropertiesForInstances(widgetInstanceIds: string[] | null): JQueryDeferred<any>;
                /**
                 * Get js file list for dependent widgets
                 * @param widgetName
                 * @param widgetToDeps
                 * @param depJsFiles
                 */
                GetWidgetJSArrayFromWidget(widgetName: string, widgetToDeps: any[], depJsFiles: any[]): any[];
                GetWidgetJSFromDependency(widgets: any[]): JQueryDeferred<any>;
                /**
                 * Retrives all the widget instances ID on the current page.
                 * @returns object with ids: string[] & rel: Array<>
                  */
                GetWidgetInstancesOnPage(): any;
                /**
                 * Get list of widget on current page.
                 * @param widgets
                 */
                GetWidgetObjsOnPage(widgets: any[]): any[];

                /** Initialize widget passed */
                InitWidget(item: any): void;

                /** Initialize widgets passed in array */
                InitializeWidgets(widgets: any[]): JQueryDeferred<any>;

                GetAndInitWidgetsPerJSFile(item: any, widgetDepJsArray: any[]): void;
                PopulateAutoDependencyMap(widgetsWithPropsArray: any[], widgetArray: any[]): any[];
                /**
                 * Render Child Widgets
                 * @param selector
                 * @param pageId
                 * @param mode
                 */
                RenderChildWidgets(selector: string, pageId: string | null, mode: string): void;
            }

            class DataFactory {
                constructor(legacyMode?: boolean);
                /**
                 * #MARK - Not currently used.
                 * @param implementation
                 */
                SetImpl(implementation: string): void;

                /**
                 * Get list from SharePoint
                 * @param request
                 */
                GetList(request: IGetListRequest): Promise<any>;

                /**
                 * Get widgets for page
                 * @param pageId
                 * @param legacy
                 */
                GetWidgetsForPage(pageId: string, legacy?: boolean): JQueryDeferred<any>;

                /**
                 * Get saved layout from Sharepoint
                 * @param layoutName Layout Name
                 */
                GetSavedLayout(layoutName: string): JQueryDeferred<any>;

                /**
                 * Save custom layout
                 * @param layoutObject JSON object having layout details
                 */
                ProvisionSavedLayout(layoutObject: any): JQueryDeferred<any>;

                /**
                 * Returns List of permissions for current user for passed list
                 * @param listName Name of list
                 * @param useRootWeb Boolean flag
                 */
                CanUserSetItemPermissions(listName: string, useRootWeb: boolean): JQueryDeferred<any>;

                /**
                 * Get matching pages from Page Url List
                 * @param searchText Text to search existing pages
                 */
                GetPagesFromPageUrlList(searchText: string): JQueryDeferred<any>;

                /**
                 * Get permissions set for list item
                 * @param listName Name of list
                 * @param itemId List Item id
                 */
                GetPermissionForListItem(listName: string, itemId: string): JQueryDeferred<any>;

                /**
                 * Set personas for list item
                 * @param listName ListName of which item belongs
                 * @param itemId ID of item to set persona.
                 * @param personaList Semicolon seprated List of persona to set for item
                 * @param columnName column Name for persona
                 */
                SetPersonasForItem(listName: string, itemId: number, personaList: any, columnName?: string): JQueryDeferred<any>;

                /**
                 * Set Tags for list item
                 * @param listName List Name
                 * @param itemId Item Id
                 * @param columnName Coloumn Name for tags
                 * @param tagList semicolon seprated list of tags
                 */
                SetTagsForItem(listName: string, itemId: string, columnName: string, tagList: any): JQueryDeferred<any>;

                /**
                 * Set permissions for list item
                 * @param listName
                 * @param itemId
                 * @param editgroup Array User groups for edit permission
                 * @param readgroup Array User groups for read permission
                 * @param useRootWeb
                 */
                SetPermissionsForListItem(listName: string, itemId: string, editgroup: any, readgroup: any, useRootWeb: boolean): JQueryDeferred<any>;

                /**
                 * Get All lists from the site. By default it fetechs from root site
                 * @param useRoot
                 */
                GetAllList(useRoot: boolean | undefined): JQueryDeferred<any>;

                /** Get List position  */
                GetListPosition(): JQueryDeferred<any>;

                /**
                 * Search in sharepoint list based on request
                 * @param request
                 */
                Search(request: any): JQueryDeferred<any>;

                /**
                 * Get Site Properties
                 * @param request
                 */
                GetSiteProperties(request: any): JQueryDeferred<any>;

                /**
                 * Update page object Items
                 * @param pageObject
                 */
                UpdatePageObjectsItem(pageTypeList: string, pageObject: any, pageId: string): JQueryDeferred<any>;

                /**
                 * Add new page to list
                 * @param pageObject JSON object with properties for page
                 */
                ProvisionPageObject(pageObject: any): JQueryDeferred<any>;

                /**
                 * Add/Save new widgets to page
                 * @param widgetName
                 * @param pageId
                 * @param pageWidgets
                 */
                ProvisionPageWidgets(widgetName: string, pageId: string, pageWidgets: any[]): JQueryDeferred<any>;
                UpdatePageUrlsItem(pageObject: any, pageId: string, pageTypeList?: string): JQueryDeferred<any>;
                LoadTermSet(termSetName?: string | null, columnName?: string | null, columnValue?: string | null): JQueryDeferred<any>;
                LoadTermSetByColumnName(request: IGetListRequest, columnName: string, columnValue?: string | null): JQueryDeferred<any>;
                /**
                * Create new list
                * @param siteUrl
                * @param siteTitle
                * @param templateType
                * @param fieldsList
                */
                CreateList(siteUrl: string, siteTitle: string, templateType: string, fieldsList: any[]): JQueryDeferred<any>;

                GetItemsFromListByTitle(listName: string, searchTerm: string, isroot: boolean): JQueryDeferred<any>;

                /**
                 * Get all user groups for site
                 * @param searchUniqueValue
                 * @param currentPage
                 * @param pageLimit
                 */
                GetGroupsForSite(searchUniqueValue: any, currentPage: number, pageLimit: number): any;

                /**
                 * Check user permission on list item
                 * @param pageTypeList listName to which item belongs
                 * @param pageId
                 */
                UserPermissionsForListItem(pageTypeList: string, pageId: string): JQueryDeferred<any>;

                /**
                 * Check if user have edit permission on list item.
                 * @param pageReferenceList
                 * @param pageId
                 * @returns Resolves with {ReadPermission: bool, EditPermission: bool}
                 */
                // tslint:disable-next-line unified-signatures
                UserPermissionsForListItem(pageReferenceList: any, pageId: string): JQueryDeferred<any>;

                /**
                *Updates list item
                * @param listName listName to which item belongs
                * @param itemid
                * @param queryParams data that needs to updated as an object
                */
                UpdateListItem(listName: string, itemid: string, queryParams: any): JQueryDeferred<any>;

                /**
                 *Delete list item
                 * @param listName listName to which item belongs
                 * @param itemid
                 */
                DeleteListItem(listName: string, itemid: string): JQueryDeferred<any>;

                /**
               *Get Permissin on list for current user
               * @param listName listName  to fetch permission of
               */
                GetListEffectiveBasePermissions(listName: string): JQueryDeferred<{}>;
            }

            class RestSharepoint {}
            class SharePoint { /* Added */
                LoadTermSet(termSetName: string, columnName: string | null, columnValue: string | null): JQueryDeferred<any>;
                LoadTermSetById(termSetId: string, columnName: string, columnValue?: string | null): JQueryDeferred<any>;
                /**
                * Update Page object item
                * @param pageTypeList List Name
                * @param pageObject Page object to be updated
                * @param pageId Item Id of page list item
                */
                UpdatePageObjectsItem(pageTypeList: string, pageObject: any, pageId: string): JQueryDeferred<any>;
                /**
                 * @param pageObject
                 * @param pageId
                 * @param pageTypeList
                 */
                UpdatePageUrlsItem(pageObject: any, pageId: string, pageTypeList?: string): JQueryDeferred<any>;

                /**
                 * Create new list item
                 * @param createItemRequest
                 */
                CreateItem(createItemRequest: any): JQueryDeferred<any>;
                /**
                 * Create new list
                 * @param siteUrl
                 * @param siteTitle
                 * @param templateType
                 * @param fieldsList
                 */
                CreateList(siteUrl: string, siteTitle: string, templateType: string, fieldsList: any[]): JQueryDeferred<any>;

                GetAppInstances(successCallback: any, errorCallback: any): void;
                /**
                 * Get SiteID of current site
                 */
                GetCurrentSiteId(): JQueryDeferred<any>;

                GetList(request: any): JQueryDeferred<any>;
                /**
                 * @param siteUrl Absolute path
                 */
                GetSiteIdByUrl(siteUrl: string, useRootWeb: boolean): JQueryDeferred<any>;
                /**
                 * Get all SP user groups
                 * @returns Resolves with array of {id, displayName, type, description}
                 */
                GetSiteSPGroups(): JQueryDeferred<any>;
                /**
                 * Get list of users under user groups
                 * @param authorizationGroups List of authorization Groups
                 */
                GetSPGroupUsersByGroupName(authorizationGroups: any[]): JQueryDeferred<any>;
                /**
                 * Get User Groups current user belongs to
                 */
                GetSPUserGroups(): JQueryDeferred<any>;
                // LoadTermSet(termSetName: string, columnName: string, columnValue: string): JQueryDeferred<any>;
            }
            class PersonaManager {
                /** Does List reuire persona check
                 * @param listName
                 */
                IsPersonaCheckRequiredForList(listName: string): JQueryDeferred<any>;

                /** Get array of Lists with persona enabled
                 */
                GetPersonaEnabledLists(): string[];

                /**
                 * Returns object setting filterByPersona property. Or default object
                 * @param request
                 */
                IsPersonaFilteringOn(request?: any): any;
            }

            class Interchange {
                /**
                * Get Configuration object
                */
                GetConfiguration(): any;

                /**
                 * Get Users Data List
                 * @param currentUserName
                 * @param filters
                 * @param pageSize
                 * @param pageNumber
                 * @param orderByField
                 * @param sortDirection
                 */
                GetUsersData(currentUserName: string, filters: any, pageSize: number, pageNumber: number, orderByField: string, sortDirection: string): any;
                GetMenuApps(): any;
                /* Added */
                // CanUserSetItemPermissions(referenceList: string): JQueryDeferred<any>;
                // GetPermissionForListItem(referenceList: string, itemId: string): JQueryDeferred<any>;
                AppPart(referenceList: string, itemId: string): any;

                /**
                 * Update Page properties
                 * @param referenceList
                 * @param itemId
                 * @param data
                 */
                UpdatePageProperties(referenceList: string, itemId: string, data: any): JQueryDeferred<any>;

                /**
                 * Get page object from pageURL
                 * @param relativePageUrl
                 */
                GetPageObjectForPageUrl(relativePageUrl: string): JQueryDeferred<any>;

                /**
                 * Update Page object Cache
                 * @param pageObjects
                 */
                UpdatePageObjectsCache(pageObjects: any): JQueryDeferred<any>;

                /**
                 * Get sharepoint lists associated with the passed content type
                 * @param contenttype
                 */
                GetListsForContentType(contenttype: string): JQueryDeferred<any>;

                /**
                 * @param listName SharePoint List name ex. GenericPages_AK
                 * @param itemId Item Id for which permissions need to be checked
                 */
                GetPermissionForListItemForCurrentUser(listName: string, itemId: string): JQueryDeferred<any>;

                /**
                 * Check if user is logged into appManager
                 */
                IsLoggedIntoAppManager(): JQueryDeferred<any>;

                /**
                 * To get personas assigned to a user
                 * @param userId
                 * @returns deferred resolves with array of presonas string
                 */
                GetUserPersonas(userId: string): JQueryDeferred<any>;

                /**
                 * Get list of apps available for user
                 * @param listName String
                 */
                GetApps(listName: string): JQueryDeferred<any>;

                /**
                 * Get groups the current user is added to.
                 * @returns def resolves in success with Array of names of User Groups of current user.
                 */
                GetUserGroupsFromAppManager(): JQueryDeferred<any>;

                /**
                 * Filter user accessible apps from list of apps.
                 * @param groups User Groups #MARK currently not used.
                 * @param appsData List of apps
                 */
                GetUserAccessibleApps(groups: null, appsData: any[]): JQueryDeferred<any>;

                /**
                 * Get UserGroup list based of type of authoristion
                 * @param authorization
                 */
                GetSPGroupUsersAndUserGroupsList(authorization: any): JQueryDeferred<any>;

                /**
                 * Get myapps cache key for the current user
                 * @param attribute
                 */
                GetMyAppsCacheKey(attribute: string): JQueryDeferred<any>;

                /**
                 * Get Facets from interchange
                 * @param facetObj List of facets object
                 */
                GetFacets(facetObj: any[]): JQueryDeferred<any>;

                /**
                 * Marks workspace as deleted
                 * @param workspaceId workspace id
                 */
                MarkWorkspaceAsDeleted(workspaceId: string): JQueryDeferred<any>;

                /**
                 * Check if workspace is marked for delete
                 * @param workspaceId string
                 */
                IsWorkspaceMarkedAsDeleted(workspaceId: string): JQueryDeferred<any>;

                /**
                 * Check licenses assigned to members
                 * @param memberids string
                 */
                CheckAssignedLicenses(memberids: string): JQueryDeferred<any>;

                /**
                 * Get activated Features on site.
                 * @returns Resolves in success with JSON object
                 */
                GetActivatedFeatures(): JQueryDeferred<any>;

                /**
                 * Updates widget instance cache
                 * @param widgetInstanceId Optional
                 */
                UpdateWidgetInstanceCache(widgetInstanceId?: string): JQueryDeferred<any>;

                /**
                 * @returns resolves with array of widget objects
                 */
                GetDashboardWidgets(): JQueryDeferred<any>;

                /**
                 * Resolves with siteID
                 * @param selectedSiteId
                 */
                PerformChangeSite(selectedSiteId: string): JQueryDeferred<any>;

                /**
                 * @returns Resolves in success with boolean value
                 */
                ValidateAkToken(): JQueryDeferred<any>;

                /**
                 * @returns Resolves in success with boolean value
                 */
                RefreshAkToken(): JQueryDeferred<any>;

                /**
                 * Fetches widgets js
                 * @param widgets Array of widget objects
                 * @param widgetNames Array of widget names
                 */
                GetWidgetJS(widgets: any[], widgetNames: string[]): JQueryDeferred<any>;

                /**
                 * Get user groups
                 * @param model
                 */
                GetUserGroups(model: any): JQueryDeferred<any>;

                /**
                 * @returns Resolves with language ID {number}
                 */
                GetAppManagerLanguageId(): JQueryDeferred<any>;

                /**
                 * @returns Def Resolves in success with Version Object {FileVersion: string, ProductVersion: string}
                 */
                GetAppManagerVersion(): JQueryDeferred<any>;

                /**
                 * Send data to encrypt
                 * @param data
                 */
                EncryptData(data: string): JQueryDeferred<any>;

                /**
                 * Send data to decrypt
                 * @param data
                 */
                DecryptData(data: string): JQueryDeferred<any>;

                /**
               * Save page widgets
               * @param pageId
               */
                ProvisionPageWidgets(pageWidgetsRequest: ISavePageWidgetRequest): JQueryDeferred<any>;
            }

            class PageManager {
                /**
                * Get default page layouts
                * @return Array of page layout object
                * {displayOrder:, layoutId:, layoutImage:, layoutTemplate:, layoutTitle:, selectedLayout:, spPageLayoutId: }
                */
                GetPageLayouts(): any[];

                /**
                 * Get page object from pageURL
                 * @param relativePageurl relative page URL
                 */
                GetPageObjectForPageUrl(relativePageurl: string): JQueryDeferred<any>;
                GetPageObject(): JQueryDeferred<any>;

                /**
                * Get saved layout from Sharepoint
                * @param Title Layout Name
                */
                GetSavedLayout(Title?: string): JQueryDeferred<any>;

                /**
                 * Save custom layout
                 * @param layoutObject JSON object having layout details
                 */
                ProvisionSavedLayout(data: any): JQueryDeferred<any>;

                /**
                 * Get widgets for page
                 * @param pageId
                 * @param legacy
                 */
                GetWidgetsForPage(pageId: string, legacy?: boolean): JQueryDeferred<any>;

                /**
                 * Save page contents(widgets)
                 * @param pageId
                 * @param pageWidgets
                 */
                SetPageContents(pageId: string, data: any): JQueryDeferred<any>;

                /**
                 * Get matching pages from Page Url List
                 * @param searchText Text to search existing pages
                 */
                GetPagesFromPageUrlList(searchText: string): JQueryDeferred<any>;

                /**
                 * Returns List of permissions for current user for passed list
                 * @param listName Name of list
                 * @param useRootWeb Boolean flag
                 */
                CanUserSetPagePermissions(listName: string, useRootWeb: boolean): JQueryDeferred<any>;

                /**
                * Get permissions for Page
                * @param listName Name of list
                * @param itemId Page Id
                */
                GetPermissionForPage(listName: string, itemId: string): JQueryDeferred<any>;

                /**
                * Set personas for page
                * @param listName ListName of which item belongs
                * @param itemId ID of item to set persona.
                * @param personaList Semicolon seprated List of persona to set for item
                * @param columnName Coloumn Name
                */
                SetPersonasForPage(listName: string, itemId: string, personaList: any, columnName?: string): JQueryDeferred<any>;

                /**
                  * Set Tags for Page
                  * @param listName List Name
                  * @param itemId Item Id of page
                  * @param columnName Coloumn Name to be updated for tags
                  * @param list semicolon seprated list of tags
                  */

                SetTagsForPage(listName: string, itemId: string, columnName: string, list: any): JQueryDeferred<any>;

                /**
                 * Returns true if widget type passed is either Dashboard, PageWidget or Container Type
                 * @param widgetType string of widget Type
                 */
                IsDashboardOrPageWidgetOrContainerType(widgetType: any): boolean;
                /**
                 * Returns page type information
                 * @param pageTypeParam Page Type
                 */
                GetPageTypeInfo(pageTypeParam: string): JQueryDeferred<any>;

                /**
                 * Set permissions for Page
                 * @param listName
                 * @param itemId Page item Id
                 * @param editgroup Array User groups for edit permission
                 * @param readgroup Array User groups for read permission
                 * @param useRootWeb
                 */
                SetPermissionsForPage(listName: string, itemId: string, editgroup: string[], readgroup: string[], useRootWeb: boolean): JQueryDeferred<any>;

                /**
                     * Resolves with all the page widgets
                     */
                GetPageWidgets(): JQueryDeferred<any>;

                /**
                 * Loads a new page
                 * @param pageRouteInfo JSON object with page routing information
                 */
                LoadNewPage(pageRouteInfo: any): void;

                /**
                 * Get Dashboard widgets
                 * @param pageId
                 */
                GetDashboardWidgetsViaAppManager(pageId: string): JQueryDeferred<any>;

                /**
                 * Retrive page widget
                 * @param pageId
                 */
                GetPageWidget(pageId: string): JQueryDeferred<any>;

                /**
                 * Get Dashboard Page for User
                 * @param userId
                 * @returns resolves with dashboard page for user {title, userId, pageId}
                 */
                GetDashboardPageForUser(userId: string): JQueryDeferred<any>;

                /**
                 * Save dashboard page for user
                 * @param userId
                 */
                ProvisionDashboardPageForUser(userId: string): JQueryDeferred<any>;

                /**
                 * Retrives available page views
                 * @param pageId
                 */
                GetPageAvailableViews(pageId: string): JQueryDeferred<any>;

                /**
                 * Get Page Active View
                 * @param pageId
                 */
                GetPageActiveView(pageId: string): JQueryDeferred<any>;

                /**
                 * Get containers for view
                 * @param viewTemplateUrl
                 */
                GetContainersForView(viewTemplateUrl: string): JQueryDeferred<any>;

                /**
                 * Get Page Child widgets
                 * @param pageId
                 */
                GetPageChildWidgets(pageId: string): JQueryDeferred<any>;

                /**
                 * Get Layouts For ToolBar
                 * @param pageId
                 */
                GetLayoutsForToolBar(pageId: string): JQueryDeferred<any>;

                /**
                 * Get Widgets For Toolbar
                 */
                GetWidgetsForToolbar(): JQueryDeferred<any>;

                /**
                 * Save update page objects
                 * @param pageObject
                 */
                ProvisionPageObject(pageObject: any): JQueryDeferred<any>;

                /**
                 * Save page widgets
                 * @param widgetName
                 * @param pageId
                 * @param pageWidgets
                 */
                ProvisionPageWidgets(widgetName: string, pageId: string, pageWidgets: any[]): JQueryDeferred<any>;
                SavePage(pageId: string): JQueryDeferred<any>;

                /**
                 * Provide grid details
                 */
                getGrid(): any[];

                /**
                 * Save dashboard page
                 * @param pageId
                 */
                SaveDashboardPage(pageId: string): JQueryDeferred<any>;

                /**
                 * Add Page for groups
                 * @param pageModel
                 */
                AddPageForGroup(pageModel: any): JQueryDeferred<any>;

                /**
                 * Get Available Workspace Types
                 * @param groupType
                 */
                GetAvailableWorkspaceTypes(groupType: string): JQueryDeferred<any>;

                /**
                 * Check if group type is custom
                 * @param type
                 */
                IsGroupTypeCustom(type: string): boolean;

                /**
                 * Add pages for group
                 * @param model
                 */
                AddPagesForGroup(model: any): JQueryDeferred<any>;

                /**
                 * Returns true if widget instance is either Dashboard, PageWidget or Container
                 * @param widgetInstances string of widget Type
                 */
                IsDashBoardOrPageWidgetOrContainer(widgetInstances: any): boolean;

                /**
                 * Remove pages for group
                 * @param groupId
                 */
                RemovePagesForGroup(groupId: string): JQueryDeferred<any>;

                /**
                 * Remmove group page mapping
                 * @param groupId
                 */
                RemoveGroupPageMapping(groupId: string): JQueryDeferred<any>;

                /**
                 * Remove Group Page
                 * @param pageIds
                 */
                RemoveGroupPage(pageIds: string[]): JQueryDeferred<any>;

                /**
                 * Remove Group WIdget properties
                 * @param widgetInstanceIds
                 */
                RemoveGroupWidgetProperties(widgetInstanceIds: string[]): JQueryDeferred<any>;

                /**
                 * Execute Share point query
                 * @param clientContext
                 * @param collListItem
                 * @param def
                 * @param idArray
                 * @param columnName
                 */
                ExecuteAsyncQuery(clientContext: any, collListItem: any, def: JQueryDeferred<any>, idArray: any[], columnName: string): JQueryDeferred<any>;
            }
            class CacheManager {
                cachedScript(Token: string): any;
            }
            class Groups {
                GetGraphDataWithFullUrl(url: string, param: any): Promise<any>;
                GetGroupForPage(pageId: string): JQueryDeferred<any>;
                GetGraphUrl(prefix: string, query: string, filterQuery: string, cacheKey: string): string;
            }

            class WidgetFactory {
                UpdatePageWidgetInstancesCache(model: any): any;
            }

            class Graph {
                GetProfilePicture(email: string, flag: boolean): Promise<any>;
            }
        }
    }
    namespace AddIn {
        class Utilities {
            static getEditMode(): boolean;
            static IsNullOrEmpty(value: string): boolean;
            static GetFriendlyUrl(url: string): string;
            static getQueryStringParameter(url: string): string;
            static substring(str: string, maxChar: number): string;
            static ItemExpired(date: string): boolean;
            static TryParseInt(val: any, defaultValue: any): number | null;
            static GetIcon(iconName: string): string;
            static isInDST(date: Date): boolean;
            static addRecurringEvents(data: any, month: number, year: number): any;
            static isInMonth(item: any, month: number, year: number): any;
            static setDateValues(data: any, startDate: Date, endDate: Date): any;
        }
        class Logger {
            static WriteInfoLog(m: any): void;
            static WriteErrorLog(m: any): void;
            static StartTraceLog(m: string): void;
            static StopTraceLog(m: string): void;
            static logConnectorCall(m: string): void;
            static logSPCall(m: string): void;
        }
        class Cache {
            static Get(m: string): any;
            static Set(m: string, object: any, interval: number): void;
            static Remove(m: string): void;
        }
        class Constants {
            static MIN_CACHE_EXPIRATION: number;
            static SHORT_CACHE_EXPIRATION: number;
            static CACHE_EXPIRATION: number;
            static HOUR_CACHE_EXPIRATION: number;
            static TWOHOUR_CACHE_EXPIRATION: number;
            static FOURHOUR_CACHE_EXPIRATION: number;
            static LONG_CACHE_EXPIRATION: number;
            static DAY_CACHE_EXPIRATION: number;
        }
        class Configuration {
            static containsInExcludeField(field: string): boolean;
            static getSelectFields(widget: string): string[];
        }
        class Alignment {}
        class Location {}
        class Icons {
            static None: string;
        }
        class GenericListPaging {}
        class Instructions {
            executeAsync(widget: any, instructionSet: string, propName: string): Promise<any>;
        }
    }
}

declare class Templates {
    GetViewPrefix(): void;
    ParseTemplate(url: string, data: any): Promise<any>;
    RequestTemplateFromServer(url: string): Promise<any>;
    GetCoreTemplate(htmlFile: string): string;
    GetVirtualMasterTemplate(): string;
    GetErrorTemplate(data: object): Promise<any>;
    /**
     * Bind error templates for widgets
     * @param errorObj
     */
    BindErrorTemplateForWidgets(errorObj: any): void;
}

// tslint:disable-next-line interface-name
interface IConstants {
    LOADER_STEPS_ENABLE_AUTOCLEAR: boolean;
    LOADER_STEPS_ENABLE_FETCHCONFIGCONTEXT: boolean;
    LOADER_STEPS_ENABLE_DETECTMULTIPLEVISIBLELANGS: boolean;
    LOADER_STEPS_ENABLE_LOADUSERLANGSETTINGS: boolean;
    LOADER_STEPS_ENABLE_GETADDITIONALMARKUP: boolean;
    LOADER_STEPS_ENABLE_DISPLAYLOADER: boolean;
    LOADER_STEPS_ENABLE_EVENTSUBSCRIPTION: boolean;
    LOADER_STEPS_ENABLE_SETSITETHEME: boolean;
    LOADER_STEPS_ENABLE_VALIDATEINTERCHANGEKEY: boolean;
    LOADER_STEPS_ENABLE_GETLOADINGTEMPLATE: boolean;
    LOADER_STEPS_ENABLE_INDEXPAGEDATA: boolean;
    LOADER_STEPS_ENABLE_GETINTERCHANGELOGINURL: boolean;
    LOADER_STEPS_ENABLE_GETGRAPHTOKEN: boolean;
    LOADER_STEPS_ENABLE_FETCHUSERPROPERTIES: boolean;
    LOADER_STEPS_ENABLE_FETCHPAGEPERMISSIONS: boolean;
    LOADER_STEPS_ENABLE_LOADWIDGETSTYPES: boolean;
    LOADER_STEPS_ENABLE_LOADWIDGETSINSTANCES: boolean;
    LOADER_STEPS_ENABLE_INITWIDGETS: boolean;
    LOADER_STEPS_ENABLE_INITSNIPPETS: boolean;
    LOADER_STEPS_ENABLE_LOADDASHBOARDWIDGETS: boolean;
    LOADER_STEPS_ENABLE_DISPLAYSHAREPOINTBAR: boolean;
    LOADER_STEPS_ENABLE_DEBUGINFO: boolean;
    LOADER_STEPS_ENABLE_TRAYMENU: boolean;
    LOADER_STEPS_ENABLE_RESUMEMAINWINDOWLOADER: boolean;
    LOADER_STEPS_ENABLE_FETCHLANGUAGENEUTRALLISTS: boolean;
    LOADER_STEPS_ENABLE_FETCHLANGUAGES: boolean;
    WIDGET_OPTIONS_LOADFROMAPPMANAGER: boolean;
    LOADER_STEPS_ENABLE_FETCHSPGROUPS: boolean;
    LOADER_STEPS_ENABLE_FETCHADGROUPS: boolean;
    FORCETEMPLATEURL: boolean;
    LOADER_STEPS_ENABLE_VALIDATEWORKSPACECONFIG: boolean;
    LOADER_STEPS_ENABLE_FETCHWORKSPACECONTEXT: boolean;
    LOADER_STEPS_ENABLE_PROVISIONDASHBOARD: boolean;
    LOADER_STEPS_ENABLE_AUTOLOGINTOAPPMANAGER: boolean;
    LOADER_STEPS_ENABLE_REFRESHAKTOKEN: boolean;
    LOADER_STEPS_ENABLE_GETWIDGETJS: boolean;
    LOADER_STEPS_ENABLE_GETINDIVIDUALWIDGETSJS: boolean;
    REDIRECTONERROR: boolean;
    LOG_LEVEL: number;
}

// eslint-disable-next-line export-just-namespace
export = Akumina;
