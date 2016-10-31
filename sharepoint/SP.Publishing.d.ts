// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>
/// <reference path="SP.Taxonomy.d.ts"/>


declare namespace SP {
    export namespace Publishing {
        export class PublishingWeb extends ClientObject {
            static getPublishingWeb(context: ClientContext, web: Web): PublishingWeb;

            public get_web(): Web;
            public addPublishingPage(pageInformation: PublishingPageInformation): PublishingPage;
        }

        export class PublishingPageInformation extends ClientValueObject {

            public get_folder(): Folder;
            public set_folder(value: Folder): Folder;

            public get_name(): string;
            public set_name(value: string): string;

            public get_pageLayoutListItem(): ListItem;
            public set_pageLayoutListItem(value: ListItem): ListItem;
        }

        export class PublishingPage extends ScheduledItem {
            static getPublishingPage(context: ClientContext, sourceListItem: ListItem): PublishingPage;
            public addFriendlyUrl(friendlyUrlSegment: string, editableParent: Navigation.NavigationTermSetItem, doAddToNavigation: boolean): StringResult;
        }

        export class ScheduledItem extends ClientObject {
            public get_listItem(): ListItem;

            public get_startDate(): Date;
            public set_startDate(value: Date): Date;

            public get_endDate(): Date;
            public set_endDate(value: Date): Date;

            public schedule(approvalComment: string): void;
        }

        export class PublishingSite extends ClientObject {
            static createPageLayout(context: ClientContext, parameters: PageLayoutCreationInformation): void;
        }

        export class PageLayoutCreationInformation extends ClientValueObject {
            public get_web(): Web;
            public set_web(value: Web): Web;

            public get_associatedContentTypeId(): string;
            public set_associatedContentTypeId(value: string): string;

            public get_masterPageUrl(): string;
            public set_masterPageUrl(value: string): string;

            public get_newPageLayoutNameWithoutExtension(): string;
            public set_newPageLayoutNameWithoutExtension(value: string): string;

            public get_newPageLayoutEditablePath(): string;
            public set_newPageLayoutEditablePath(value: string): string;
        }

        export class SiteServicesAddins {
            static getSettings(context: ClientContext, addinId: Guid): AddinSettings;
            static setSettings(context: ClientContext, addin: AddinSettings): void;
            static deleteSettings(context: ClientContext, addinId: Guid): void;

            static getPlugin(context: ClientContext, pluginName: string): AddinPlugin;
            static setPlugin(context: ClientContext, addin: AddinPlugin): void;
            static deletePlugin(context: ClientContext, pluginName: string): void;
        }

        export class AddinSettings extends ClientObject {
            constructor(ctx: ClientContext, id: Guid);

            public get_id(): Guid;

            public get_title(): string;
            public set_title(value: string): string;

            public get_description(): string;
            public set_description(value: string): string;

            public get_enabled(): boolean;
            public set_enabled(value: boolean): boolean;

            public get_namespace(): boolean;
            public set_namespace(value: boolean): boolean;

            public get_headScript(): string;
            public set_headScript(value: string): string;

            public get_htmlStartBody(): string;
            public set_htmlStartBody(value: string): string;

            public get_htmlEndBody(): string;
            public set_htmlEndBody(value: string): string;

            public get_metaTagPagePropertyMappings(): { [key: string]: string };
            public set_metaTagPagePropertyMappings(value: { [key: string]: string }): { [key: string]: string };

        }

        export class AddinPlugin extends ClientObject {
            constructor(ctx: ClientContext);

            public get_description(): string;
            public set_description(value: string): string;

            public get_markup(): string;
            public set_markup(value: string): string;

            public get_title(): string;
            public set_title(value: string): string;
        }


        export class DesignPackage {
            static install(context: ClientContext, site: Site, info: DesignPackageInfo, path: string): void;
            static uninstall(context: ClientContext, site: Site, info: DesignPackageInfo): void;
            static apply(context: ClientContext, site: Site, info: DesignPackageInfo): void;
            static exportEnterprise(context: ClientContext, site: Site, includeSearchConfiguration: boolean): ClientResult<DesignPackageInfo>;
            static exportSmallBusiness(context: ClientContext, site: Site, packageName: string, includeSearchConfiguration: boolean): ClientResult<DesignPackageInfo>;
        }

        export class DesignPackageInfo extends ClientValueObject {
            public get_packageName(): string;
            public set_packageName(value: string): string;

            public get_packageGuid(): Guid;
            public set_packageGuid(value: Guid): Guid;

            public get_majorVersion(): number;
            public set_majorVersion(value: number): number;

            public get_minorVersion(): number;
            public set_minorVersion(value: number): number;
        }

        export class SiteImageRenditions {
            static getRenditions(context: ClientContext): ImageRendition[];
            static setRenditions(context: ClientContext, renditions: ImageRendition[]): void;
        }

        export class ImageRendition extends ClientValueObject {
            public get_id(): number;
            public get_version(): number;

            public get_name(): string;
            public set_name(value: string): string;

            public get_width(): number;
            public set_width(value: number): number;

            public get_height(): number;
            public set_height(value: number): number;
        }

        export class Variations extends ClientObject {
            static getLabels(context: ClientContext): ClientObjectList<VariationLabel>;
            static getPeerUrl(context: ClientContext, currentUrl: string, labelTitle: string): StringResult;
            static updateListItems(context: ClientContext, listId: Guid, itemIds: number[]): void;
        }

        export class VariationLabel extends ClientObject {
            public get_displayName(): string;
            public set_displayName(value: string): string;

            public get_isSource(): boolean;
            public set_isSource(value: boolean): boolean;

            public get_language(): string;
            public set_language(value: string): string;

            public get_locale(): string;
            public set_locale(value: string): string;

            public get_title(): string;
            public set_title(value: string): string;

            public get_topWebUrl(): string;
            public set_topWebUrl(value: string): string;
        }

        export class CustomizableString extends ClientObject {
            public get_defaultValue(): string;

            public get_value(): string;
            public set_value(value: string): string;

            public get_usesDefaultValue(): boolean;
            public set_usesDefaultValue(value: boolean): boolean;

        }


        export namespace Navigation {
            export enum NavigationLinkType {
                root,
                friendlyUrl,
                simpleLink
            }

            export enum StandardNavigationSource {
                unknown,
                portalProvider,
                taxonomyProvider,
                inheritFromParentWeb
            }

            export class NavigationTermSetItem extends ClientObject {
                public get_id(): Guid;

                public get_isReadOnly(): boolean;

                public get_linkType(): NavigationLinkType;
                public set_linkType(value: NavigationLinkType): NavigationLinkType;

                public get_targetUrlForChildTerms(): CustomizableString;

                public get_catalogTargetUrlForChildTerms(): CustomizableString;

                public get_taxonomyName(): string;

                public get_title(): CustomizableString;

                public get_terms(): NavigationTermCollection;

                public get_view(): NavigationTermSetView;

                public createTerm(termName: string, linkType: NavigationLinkType, termId: Guid): Taxonomy.Term;

                public getTaxonomyTermStore(): Taxonomy.TermStore;

                public getResolvedDisplayUrl(browserQueryString: string): StringResult;
            }

            export class NavigationTermCollection extends ClientObjectCollection<NavigationTerm> {

            }

            export class NavigationTerm extends NavigationTermSetItem {
                public get_associatedFolderUrl(): string;
                public set_associatedFolderUrl(value: string): string;

                public get_catalogTargetUrl(): CustomizableString;

                public get_categoryImageUrl(): string;
                public set_categoryImageUrl(value: string): string;

                public get_excludedProviders(): NavigationTermProviderNameCollection;

                public get_excludeFromCurrentNavigation(): boolean;
                public set_excludeFromCurrentNavigation(value: boolean): boolean;

                public get_excludeFromGlobalNavigation(): boolean;
                public set_excludeFromGlobalNavigation(value: boolean): boolean;

                public get_friendlyUrlSegment(): CustomizableString;

                public get_hoverText(): string;
                public set_hoverText(value: string): string;

                public get_isDeprecated(): boolean;
                public get_isPinned(): boolean;
                public get_isPinnedRoot(): boolean;

                public get_parent(): NavigationTerm;

                public get_simpleLinkUrl(): string;

                public set_simpleLinkUrl(value: string): string;

                public get_targetUrl(): CustomizableString;

                public get_termSet(): NavigationTermSet;

                public getAsEditable(taxonomySession: Taxonomy.TaxonomySession): NavigationTerm;

                public getWithNewView(newView: NavigationTermSetView): NavigationTerm;

                public getResolvedTargetUrl(browserQueryString: string, remainingUrlSegments: string[]): StringResult;

                public getResolvedTargetUrlWithoutQuery(): StringResult;

                public getResolvedAssociatedFolderUrl(): StringResult;

                public getWebRelativeFriendlyUrl(): StringResult;

                public getAllParentTerms(): NavigationTermCollection;

                public getTaxonomyTerm(): Taxonomy.Term;

                public move(newParent: NavigationTermSetItem): void;

                public deleteObject(): void;

                static getAsResolvedByWeb(context: ClientContext, term: Taxonomy.Term, web: Web, siteMapProviderName: string): NavigationTerm;
                static getAsResolvedByView(context: ClientContext, term: Taxonomy.Term, view: NavigationTermSetView): NavigationTerm;
            }


            export class NavigationTermSet extends NavigationTermSetItem {
                public get_isNavigationTermSet(): boolean;
                public set_isNavigationTermSet(value: boolean): boolean;

                public get_lcid(): number;

                public get_loadedFromPersistedData(): boolean;

                public get_termGroupId(): Guid;
                public get_termStoreId(): Guid;

                public getAsEditable(taxonomySession: Taxonomy.TaxonomySession): NavigationTermSet;

                public getWithNewView(newView: NavigationTermSetView): NavigationTermSet;

                public getTaxonomyTermSet(): Taxonomy.TermSet;

                public getAllTerms(): NavigationTermCollection;

                public findTermForUrl(url: string): NavigationTerm;

                static getAsResolvedByWeb(context: ClientContext, termSet: Taxonomy.TermSet, web: Web, siteMapProviderName: string): NavigationTermSet;
                static getAsResolvedByView(context: ClientContext, termSet: Taxonomy.TermSet, view: NavigationTermSetView): NavigationTermSet;
            }


            export class NavigationTermProviderNameCollection extends ClientObjectCollection<string> {
                public Add(item: string): void;
                public Clear(): void;
                public Remove(item: string): BooleanResult;
            }

            export class NavigationTermSetView extends ClientObject {
                constructor(context: ClientContext, web: Web, siteMapProviderName: string);

                public get_excludeDeprecatedTerms(): boolean;
                public set_excludeDeprecatedTerms(value: boolean): boolean;

                public get_excludeTermsByPermissions(): boolean;
                public set_excludeTermsByPermissions(value: boolean): boolean;

                public get_excludeTermsByProvider(): boolean;
                public set_excludeTermsByProvider(value: boolean): boolean;

                public get_serverRelativeSiteUrl(): string;

                public get_serverRelativeWebUrl(): string;

                public get_siteMapProviderName(): string;
                public set_siteMapProviderName(value: string): string;

                public get_webId(): Guid;
                public get_webTitle(): string;

                public getCopy(): NavigationTermSetView;

                static createEmptyInstance(context: ClientContext): NavigationTermSetView;
            }

            export class TaxonomyNavigation {
                static getWebNavigationSettings(context: ClientContext, web: Web): WebNavigationSettings;
                static getTermSetForWeb(context: ClientContext, web: Web, siteMapProviderName: string, includeInheritedSettings: boolean): NavigationTermSet;
                static setCrawlAsFriendlyUrlPage(context: ClientContext, navigationTerm: Taxonomy.Term, crawlAsFriendlyUrlPage: boolean): BooleanResult;
                static getNavigationLcidForWeb(context: ClientContext, web: Web): IntResult;
                static flushSiteFromCache(context: ClientContext, site: Site): void;
                static flushWebFromCache(context: ClientContext, web: Web): void;
                static flushTermSetFromCache(context: ClientContext, webForPermissions: Web, termStoreId: Guid, termSetId: Guid): void;
            }

            export class WebNavigationSettings extends ClientObject {
                constructor(context: ClientContext, web: Web);

                public get_addNewPagesToNavigation(): boolean;
                public set_addNewPagesToNavigation(value: boolean): boolean;

                public get_createFriendlyUrlsForNewPages(): boolean;
                public set_createFriendlyUrlsForNewPages(value: boolean): boolean;

                public get_currentNavigation(): StandardNavigationSettings;
                public get_globalNavigation(): StandardNavigationSettings;

                public update(taxonomySession: Taxonomy.TaxonomySession): void;
                public resetToDefaults(): void;
            }

            export class StandardNavigationSettings extends ClientObject {
                public get_termSetId(): Guid;
                public set_termSetId(value: Guid): Guid;

                public get_termStoreId(): Guid;
                public set_termStoreId(value: Guid): Guid;

                public get_source(): StandardNavigationSource;

                public set_source(value: StandardNavigationSource): StandardNavigationSource;
            }

        }
    }
}