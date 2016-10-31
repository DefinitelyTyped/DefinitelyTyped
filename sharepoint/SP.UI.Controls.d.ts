// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export namespace UI {
        export namespace Controls {

            export interface INavigationOptions {
                assetId?: string;
                siteTitle?: string;
                siteUrl?: string;
                appTitle?: string;
                appTitleIconUrl?: string;
                rightToLeft?: boolean;
                appStartPage?: string;
                appIconUrl?: string;
                appHelpPageUrl?: string;
                appHelpPageOnClick?: string;
                settingsLinks?: ISettingsLink[];
                language?: string;
                clientTag?: string;
                appWebUrl?: string;
                onCssLoaded?: string;


                bottomHeaderVisible?: boolean;
                topHeaderVisible?: boolean;
            }

            export class NavigationOptions implements INavigationOptions { }


            export interface ISettingsLink {
                linkUrl: string;
                displayName: string;
            }

            export class SettingsLink implements ISettingsLink {
                linkUrl: string;
                displayName: string;
            }


            export class Navigation {
                constructor(placeholderDOMElementId: string, options: INavigationOptions);
                public get_assetId(): string;
                public get_siteTitle(): string;
                public get_siteUrl(): string;

                public get_appTitle(): string;
                public set_appTitle(value: string): string;

                public get_appTitleIconUrl(): string;
                public set_appTitleIconUrl(value: string): string;

                public get_rightToLeft(): boolean;
                public set_rightToLeft(value: boolean): boolean;

                public get_appStartPage(): string;
                public set_appStartPage(value: string): string;

                public get_appIconUrl(): string;
                public set_appIconUrl(value: string): string;

                public get_appHelpPageUrl(): string;
                public set_appHelpPageUrl(value: string): string;

                public get_appHelpPageOnClick(): string;
                public set_appHelpPageOnClick(value: string): string;

                public get_settingsLinks(): ISettingsLink[];
                public set_settingsLinks(value: ISettingsLink[]): ISettingsLink[];

                public setVisible(value: boolean): void;

                public setTopHeaderVisible(value: boolean): void;
                public setBottomHeaderVisible(value: boolean): void;
                public remove(): void;

                static getVersionedLayoutsUrl(pageName: string): string;
            }


            export class ControlManager {
                static getControl(placeHolderId: string): any;
            }
        }
    }
}