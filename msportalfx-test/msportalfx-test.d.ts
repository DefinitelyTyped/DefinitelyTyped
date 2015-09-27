// Type definitions for msportalfx-test
// Project: https://msazure.visualstudio.com/DefaultCollection/AzureUX/_git/portalfx-msportalfx-test
// Definitions by: Julio Casal <https://github.com/julioct>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />

declare module MsPortalTestFx {

    export module Locators {
        export class Locator {
            seleniumLocator: any;
            findElements(context: any): any;
            toString(): string;
        }

        export class ContentLocator extends Locator {
            locators: Array<Locator>;
            constructor(innerLocators: Locator[]);
            findElements(context: any): any;
            toString(): string;
        }

        export class ChainedLocator extends Locator {
            locators: Array<Locator>;
            constructor(innerLocators: Locator[]);
            findElements(context: any): any;
            toString(): string;
        }

        export class By {
            static className(value: string): Locator;
            static css(value: string): Locator;
            static id(value: string): Locator;
            static js(script: any, ...var_args: any[]): Locator;
            static linkText(value: string): Locator;
            static name(value: string): Locator;
            static partialLinkText(value: string): Locator;
            static tagName(value: string): Locator;
            static xpath(value: string): Locator;
            static text(value: string): Locator;
            static chained(...values: Locator[]): Locator;
            static content(...values: Locator[]): Locator;
        }
    }

    export module ActionBars {
        export class ActionBarButton extends PortalElement {
            constructor(parentLocator?: Locators.Locator, baseLocator?: Locators.Locator);
            click(): Q.Promise<void>;
        }

        export class CreateActionBar extends PortalElement {
            public createButton: ActionBarButton;

            constructor(parentLocator?: Locators.Locator);
        }

        export class DeleteActionBar extends PortalElement {
            public deleteButton: ActionBarButton;
            public cancelButton: ActionBarButton;

            constructor(parentLocator?: Locators.Locator);
        }

        export class PickerActionBar extends PortalElement {
            public selectButton: ActionBarButton;

            constructor(parentLocator?: Locators.Locator);
        }
    }

    export module Blades {
        export class Blade extends MsPortalTestFx.PortalElement {
            public title: string;

            constructor(title: string);
            clickCommand(commandText: string): Q.Promise<Blade>;
        }

        export class CreateBlade extends Blade {
            public actionBar: ActionBars.CreateActionBar;
        }

        export class BrowseResourceBlade extends Blade {
            constructor(title: string);
            selectResource(resourceName: string): Q.Promise<void>;
            filterItems(filter: string): Q.Promise<BrowseResourceBlade>;
        }

        export class PickerBlade extends Blade {
            pickItem(item: string): Q.Promise<void>;
        }

        export class SpecPickerBlade extends Blade {
            pickSpec(specCode: string): Q.Promise<void>;
        }
    }

    export module Controls {
        export class FormElement extends MsPortalTestFx.PortalElement {
            protected label: string;

            constructor(baseLocator: Locators.Locator, parentLocator?: Locators.Locator, label?: string);
        }

        export class CheckBoxField extends FormElement {
            constructor(parentLocator?: Locators.Locator, label?: string);
        }

        export class SelectorField extends FormElement {
            constructor(parentLocator?: Locators.Locator, label?: string);
            openPicker(): Q.Promise<void>;
        }

        export class CreatorAndSelectorField extends FormElement {
            constructor(parentLocator?: Locators.Locator, selectModeLabel?: string, createModeLabel?: string);
            openPicker(): Q.Promise<void>;
            clickCreateNew(): Q.Promise<CreatorAndSelectorField>;
            enterNewValue(...var_args: string[]): Q.Promise<CreatorAndSelectorField>;
        }

        export class GridCell extends MsPortalTestFx.PortalElement {
            constructor(text: string, parentLocator?: Locators.Locator);
            getLocator(): Locators.Locator;
        }

        export class TextField extends FormElement {
            constructor(parentLocator?: Locators.Locator, label?: string, baseLocator?: Locators.Locator);
            sendKeys(...var_args: string[]): Q.Promise<TextField>;
        }

        export class ResourceFilterTextField extends TextField {
            constructor(parentLocator?: Locators.Locator);
        }
    }

    export module Parts {
        export class Part extends MsPortalTestFx.PortalElement {
            public innerText: string;

            constructor(parentLocator?: Locators.Locator, innerText?: string, baseLocator?: Locators.Locator);
            isSelected(): Q.Promise<boolean>;
            isLoaded(): Q.Promise<boolean>;
            waitUntilLoaded(timeout?: number): Q.Promise<boolean>;
        }

        export class PartProperty extends MsPortalTestFx.PortalElement {
            public name: string;

            constructor(name: string, parentLocator?: Locators.Locator);
            getValue(): Q.Promise<string>;
        }

        export class ResourceSummaryPart extends Part {
            public properties: Array<PartProperty>;
            public resourceGroupProperty: PartProperty;

            constructor(parentLocator?: Locators.Locator);
        }

        class PricingTierPart extends Part {
        }

        export class Tile extends MsPortalTestFx.PortalElement {
            public progressLocator: Locators.Locator;

            constructor(parentLocator?: Locators.Locator);
        }
    }

    export class PortalElement {
        protected baseLocator: Locators.Locator;
        protected parentLocator: Locators.Locator;

        constructor(baseLocator: Locators.Locator, parentLocator?: Locators.Locator);
        getLocator(): Locators.Locator;
        click(): Q.Promise<void>;
        getAttribute(attributeName: string): Q.Promise<string>;
    }

    export interface TestExtension {
        name: string;
        uri: string;
    }

    export interface Feature {
        name: string;
        value: string;
    }

    export interface PortalContext {
        capabilities: {
            browserName: string;
            chromeOptions: {
                args: string[]
            }
        },
        chromeDriverPath?: string,
        portalUrl: string;
        signInUrl?: string;
        signInEmail?: string;
        signInPassword?: string;
        features?: Feature[];
        testExtensions?: TestExtension[];
    }

    export enum LogLevel {
        All,
        Debug,
        Info,
        Warning,
        Severe,
        Off
    }

    export class Portal {
        portalContext: PortalContext;
        click(locator: Locators.Locator): Q.Promise<void>;
        sendKeys(locator: Locators.Locator, ...var_args: string[]): Q.Promise<void>
        getText(locator: Locators.Locator): Q.Promise<string>;
        openGalleryCreateBlade(galleryPackageName: string, bladeTitle: string, timeout?: number): Q.Promise<Blades.CreateBlade>;
        openBrowseBlade(resourceProvider: string, resourceType: string, bladeTitle: string, timeout?: number): Q.Promise<Blades.BrowseResourceBlade>;
        openResourceBlade(resourceId: string, bladeTitle: string, timeout?: number): Q.Promise<Blades.Blade>;
        navigateToDeepLink(deepLink: string, timeout?: number): Q.Promise<any>;
        getAttribute(locator: Locators.Locator, attributeName: string, timeout?: number): Q.Promise<string>;
        waitForElementNotVisible(locator: Locators.Locator, timeout?: number): Q.Promise<boolean>;
        waitUntilElementContainsAttribute(locator: Locators.Locator, attributeName: string, attributeValue: string, timeout?: number): Q.Promise<any>;
        waitUntilElementDoesNotContainAttribute(locator: Locators.Locator, attributeName: string, attributeValue: string, timeout?: number): Q.Promise<any>;
        waitForElementLocated(locator: Locators.Locator, timeout?: number): Q.Promise<any>;
        takeScreenshot(filePrefix?: string): Q.Promise<string>;
        goHome(timeout?: number): Q.Promise<void>;
        getBrowserLogs(level: LogLevel): Q.Promise<string[]>;
        applyFeature(name: string, value: string): void;
        executeScript<T>(script: string): Q.Promise<T>;
        quit(): Q.Promise<any>;
    }

    export class SplashScreen extends PortalElement {
        clickUntrustedExtensionsOkButton(): Q.Promise<void>;
    }

    export var portal: Portal;
}



declare module "MsPortalFx-Test" {
    export = MsPortalTestFx;
}