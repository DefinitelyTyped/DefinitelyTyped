// Type definitions for msportalfx-test
// Project: https://msazure.visualstudio.com/DefaultCollection/AzureUX/_git/portalfx-msportalfx-test
// Definitions by: Julio Casal <https://github.com/julioct>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Q from "q";

export = MsPortalTestFx;

declare namespace MsPortalTestFx {

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
            getTiles(): Q.Promise<Parts.Tile[]>;
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

        export class QuickStartBlade extends Blade {
            constructor();
            clickLink(linkText: string): Q.Promise<void>;
        }

        export class UsersBlade extends Blade {
            constructor();
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
            sendKeys(...var_args: string[]): Q.Promise<void>;
        }

        export class ResourceFilterTextField extends TextField {
            constructor(parentLocator?: Locators.Locator);
        }

        export class HotSpot extends PortalElement {
            constructor(parentLocator?: Locators.Locator, baseLocator?: Locators.Locator);
            isSelected(): Q.Promise<boolean>;
        }
    }

    export module Parts {
        export class Part extends MsPortalTestFx.PortalElement {
            public innerText: string;

            constructor(parentLocator?: Locators.Locator, innerText?: string, baseLocator?: Locators.Locator);
            isSelected(): Q.Promise<boolean>;
            isLoaded(): Q.Promise<boolean>;
            waitUntilLoaded(timeout?: number): Q.Promise<boolean>;
            isClickable(): Q.Promise<boolean>;
            hasError(): Q.Promise<boolean>;
        }

        export class PartProperty extends MsPortalTestFx.PortalElement {
            public name: string;

            constructor(name: string, parentLocator?: Locators.Locator);
            getValue(): Q.Promise<string>;
        }

        export class ResourceSummaryPart extends Part {
            public properties: Array<PartProperty>;
            public resourceGroupProperty: PartProperty;
            public quickStartHotSpot: Controls.HotSpot;
            public accessHotSpot: Controls.HotSpot;

            constructor(parentLocator?: Locators.Locator);
        }

        class PricingTierPart extends Part {
        }

        export class Tile extends MsPortalTestFx.PortalElement {
            public progressLocator: Locators.Locator;

            constructor(parentLocator?: Locators.Locator);
            tryPin(): Q.Promise<void>;
            getPart(): Part;
            waitUntilLoaded(timeout?: number): Q.Promise<void>;
        }
    }

    export module Commands {
        export class ContextMenu extends PortalElement {
            constructor();
            public hasItem(text: string): Q.Promise<boolean>;
            public clickItem(text: string): Q.Promise<void>;
        }

        export class ContextMenuItem extends PortalElement {
            constructor(parentLocator: Locators.Locator, text?: string);
        }
    }

    export module Notifications {
        export class Notification extends PortalElement {
            constructor();
            getTitle(): Q.Promise<string>;
            getDescription(): Q.Promise<string>;
        }

        export class NotificationsMenu extends PortalElement {
            constructor();
            waitForNewNotification(title?: string, description?: string, timeout?: number): Q.Promise<Notification>;
        }
    }

    export module Tests {
        export module Parts {
            export function canPinAllBladeParts(targetBladeDeepLink: string, targetBladeTitle: string, timeout?: number): Q.Promise<boolean>;
        }
    }

    export class PortalElement {
        public baseLocator: Locators.Locator;
        protected parentLocator: Locators.Locator;

        constructor(baseLocator: Locators.Locator, parentLocator?: Locators.Locator);
        click(): Q.Promise<void>;
        rightClick(): Q.Promise<void>;
        getAttribute(attributeName: string): Q.Promise<string>;
        sendKeys(...var_args: string[]): Q.Promise<void>;
        getText(): Q.Promise<string>;
        isPresent(): Q.Promise<boolean>;
        isElementPresent(subLocator: Locators.Locator): Q.Promise<boolean>;
        isDisplayed(): Q.Promise<boolean>;
        getLocator(): Locators.Locator;
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

        goHome(timeout?: number): Q.Promise<void>;
        openGalleryCreateBlade(galleryPackageName: string, bladeTitle: string, timeout?: number): Q.Promise<Blades.CreateBlade>;
        openBrowseBlade(resourceProvider: string, resourceType: string, bladeTitle: string, timeout?: number): Q.Promise<Blades.BrowseResourceBlade>;
        openResourceBlade(resourceId: string, bladeTitle: string, timeout?: number): Q.Promise<Blades.Blade>;
        navigateToDeepLink(deepLink: string, timeout?: number): Q.Promise<any>;
        waitForElementVisible(locator: Locators.Locator, timeout?: number): Q.Promise<boolean>;
        waitForElementNotVisible(locator: Locators.Locator, timeout?: number): Q.Promise<boolean>;
        waitUntilElementContainsAttribute(locator: Locators.Locator, attributeName: string, attributeValue: string, timeout?: number): Q.Promise<any>;
        waitUntilElementDoesNotContainAttribute(locator: Locators.Locator, attributeName: string, attributeValue: string, timeout?: number): Q.Promise<any>;
        waitForElementLocated(locator: Locators.Locator, timeout?: number): Q.Promise<any>;
        waitForElementsLocated(locator: Locators.Locator, timeout?: number): Q.Promise<any[]>;
        takeScreenshot(filePrefix?: string): Q.Promise<string>;
        getBrowserLogs(level: LogLevel): Q.Promise<string[]>;
        executeScript<T>(script: string): Q.Promise<T>;
        applyFeature(name: string, value: string): void;
        getCurrentUrl(): Q.Promise<string>;
        quit(): Q.Promise<any>;
    }

    export class SplashScreen extends PortalElement {
        clickUntrustedExtensionsOkButton(): Q.Promise<void>;
    }

    export class StartBoard extends PortalElement {
        constructor();
        getTiles(): Q.Promise<Parts.Tile[]>;
    }

    export var portal: Portal;
}
