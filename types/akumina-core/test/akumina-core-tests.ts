import * as Akumina from "akumina-core";

// 5.0
Akumina.Digispace.ConfigurationContext.ServiceHubURL; // $ExpectType string
Akumina.Digispace.ConfigurationContext.IsSeparateServiceHubMode; // $ExpectType boolean
Akumina.Digispace.ConfigurationContext.IsDeliveryMode; // $ExpectType boolean
Akumina.Digispace.ConfigurationContext.SPACorePageUrl; // $ExpectType string
Akumina.Digispace.ConfigurationContext.HomePageUrl; // $ExpectType string
Akumina.Digispace.ConfigurationContext.ValidRoutes; // $ExpectType any
Akumina.Digispace.ConfigurationContext.AssetLibraryName; // $ExpectType string
Akumina.Digispace.ConfigurationContext.AppManagerWidgets; // $ExpectType string[]
Akumina.Digispace.ConfigurationContext.InstrumentationKey; // $ExpectType string
Akumina.Digispace.ConfigurationContext.AppInsightAppId; // $ExpectType string
Akumina.Digispace.ConfigurationContext.EnableAnalytics; // $ExpectType boolean
Akumina.Digispace.ConfigurationContext.IsSPAMode; // $ExpectType boolean
Akumina.Digispace.ConfigurationContext.CentralPipedSiteIdWebId; // $ExpectType string

Akumina.Digispace.UserContext.userPersonas; // $ExpectType string[]
Akumina.Digispace.UserContext.GetPagePersona(); // $ExpectType string
Akumina.Digispace.UserContext.PagePersona; // $ExpectType string
Akumina.Digispace.UserContext.SelectedPagePersona; // $ExpectType string
Akumina.Digispace.UserContext.GraphUserId; // $ExpectType string
Akumina.Digispace.UserContext.GetAllUserGroups(); // $ExpectType JQueryDeferred<any>
Akumina.Digispace.UserContext.GetUserAuthorizedPersona(""); // $ExpectType JQueryDeferred<any>

Akumina.Digispace.SiteContext.GetSiteType(); // $ExpectType string
Akumina.Digispace.SiteContext.WebTitle; // $ExpectType string
Akumina.Digispace.SiteContext.IsSharePointOnline; // $ExpectType boolean
Akumina.Digispace.SiteContext.IsTimedOut; // $ExpectType boolean
Akumina.Digispace.SiteContext.LicensingInformation; // $ExpectType any

Akumina.Digispace.PageContext.PageVersionId; // $ExpectType string
Akumina.Digispace.PageContext.PageVersionName; // $ExpectType string
Akumina.Digispace.PageContext.PreviewPageVersionId; // $ExpectType string
Akumina.Digispace.PageContext.PageTitle; // $ExpectType string
Akumina.Digispace.PageContext.PageVersionsCount; // $ExpectType number
Akumina.Digispace.PageContext.GetHomePageUrl(""); // $ExpectType string
Akumina.Digispace.PageContext.SetPageVersionsCount(1); // $ExpectType void
Akumina.Digispace.PageContext.PagePriorityGroups; // $ExpectType string[]

Akumina.Digispace.Utilities.AttemptReset(""); // $ExpectType void
Akumina.Digispace.Utilities.IsLoggedinToAppManager(); // $ExpectType void
Akumina.Digispace.Utilities.LoginToAppmanagerHtml(); // $ExpectType void
Akumina.Digispace.Utilities.AzureADEnabledOrAppManagerLoggedIn(); // $ExpectType boolean
Akumina.Digispace.Utilities.ExitEditModeAndRefreshPage(); // $ExpectType void
Akumina.Digispace.Utilities.ArePersonasDefined(); // $ExpectType boolean
Akumina.Digispace.Utilities.GetStickyNoteMessage(); // $ExpectType string
Akumina.Digispace.Utilities.IsSignInAccount(); // $ExpectType boolean
Akumina.Digispace.Utilities.OnSpaLinkClick("", true); // $ExpectType void
Akumina.Digispace.Utilities.CreatePageLink(""); // $ExpectType string

Akumina.Digispace.AppPart.Eventing.UnSubscribe("", "", ""); // $ExpectType void
Akumina.Digispace.AppPart.Eventing.ClearSubscribedAndPublished(""); // $ExpectType void
Akumina.Digispace.AppPart.Eventing.ResetTrackedEvents(new Array<string>()); // $ExpectType void

(new Akumina.Digispace.Data.DataFactory()).SetContextUrl(""); // $ExpectType void
(new Akumina.Digispace.Data.DataFactory()).LoadLibrarySettings("", true, true); // $ExpectType JQueryDeferred<{}>
(new Akumina.Digispace.Data.DataFactory()).GetListFields("", true); // $ExpectType JQueryDeferred<{}>
(new Akumina.Digispace.Data.DataFactory()).GetListsByContentType("", true); // $ExpectType JQueryDeferred<{}>
(new Akumina.Digispace.Data.DataFactory()).CreateListWithContentType("", "", true, true, true); // $ExpectType JQueryDeferred<{}>
(new Akumina.Digispace.Data.DataFactory()).GetTermsFromTermSet(""); // $ExpectType JQueryDeferred<{}>
(new Akumina.Digispace.Data.DataFactory()).ClearAppManagerCacheByKey(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.DataFactory()).AddOrEditConfiguration(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.DataFactory()).GetUser(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.DataFactory()).AddPageWidgets("", "", "", ""); // $ExpectType JQueryDeferred<any>

(new Akumina.Digispace.Data.PageFactory()).CreatePage(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.PageFactory()).GetPageVersion(""); // $ExpectType JQueryDeferred<IPageVersionProperties>
(new Akumina.Digispace.Data.PageFactory()).DeletePageVersion(""); // $ExpectType JQueryDeferred<IPageVersionProperties>
(new Akumina.Digispace.Data.PageFactory()).SetPagePriorityGroups(new Array<string>()); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.PageFactory()).MarkPageVersionActive(""); // $ExpectType JQueryDeferred<{}>
(new Akumina.Digispace.Data.PageFactory()).ProvisionPageWidgets("", "", new Array<string>()); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.PageFactory()).GetAllVersionsForPage(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.PageFactory()).PageVersionExists(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.PageFactory()).AddPageVersion("", ""); // $ExpectType JQueryDeferred<IPageVersion>
Akumina.Digispace.Data.PageFactory.GetPageObjectsCacheKey(); // $ExpectType string
Akumina.Digispace.Data.PageFactory.GetSavedLayoutsCacheKey(); // $ExpectType string
Akumina.Digispace.Data.PageFactory.GetPageWidgetsCacheKey(""); // $ExpectType string

(new Akumina.Digispace.Data.Interchange()).RemovePageVersionFromCache("", ""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.Interchange()).UpdatePagePropertiesInCache(""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.Interchange()).UpdateWidgetInstanceCacheAsModel("", ""); // $ExpectType JQueryDeferred<any>
(new Akumina.Digispace.Data.Interchange()).UpdatePageWidgetInstanceCacheAsModel("", "", "", ""); // $ExpectType JQueryDeferred<any>

(new Akumina.Digispace.Data.PageManager()).GetPermissionForPageList("", true); // $ExpectType JQueryDeferred<any>
