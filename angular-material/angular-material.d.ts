// Type definitions for Angular Material 1.0.0-rc5+ (angular.material module)
// Project: https://github.com/angular/material
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
declare module angular.material {

    interface IBottomSheetOptions {
        templateUrl?: string;
        template?: string;
        scope?: angular.IScope; // default: new child scope
        preserveScope?: boolean; // default: false
        controller?: string|Function;
        locals?: {[index: string]: any};
        targetEvent?: MouseEvent;
        resolve?: {[index: string]: angular.IPromise<any>}
        controllerAs?: string;
        parent?: string|Element|JQuery; // default: root node
        disableParentScroll?: boolean; // default: true
    }

    interface IBottomSheetService {
        show(options: IBottomSheetOptions): angular.IPromise<any>;
        hide(response?: any): void;
        cancel(response?: any): void;
    }

    interface IPresetDialog<T> {
        title(title: string): T;
        textContent(textContent: string): T;
        htmlContent(htmlContent: string): T;
        ok(ok: string): T;
        theme(theme: string): T;
        templateUrl(templateUrl?: string): T;
        template(template?: string): T;
        targetEvent(targetEvent?: MouseEvent): T;
        scope(scope?: angular.IScope): T; // default: new child scope
        preserveScope(preserveScope?: boolean): T; // default: false
        disableParentScroll(disableParentScroll?: boolean): T; // default: true
        hasBackdrop(hasBackdrop?: boolean): T; // default: true
        clickOutsideToClose(clickOutsideToClose?: boolean): T; // default: false
        escapeToClose(escapeToClose?: boolean): T; // default: true
        focusOnOpen(focusOnOpen?: boolean): T; // default: true
        controller(controller?: string|Function): T;
        locals(locals?: {[index: string]: any}): T;
        bindToController(bindToController?: boolean): T; // default: false
        resolve(resolve?: {[index: string]: angular.IPromise<any>}): T;
        controllerAs(controllerAs?: string): T;
        parent(parent?: string|Element|JQuery): T; // default: root node
        onComplete(onComplete?: Function): T;
        ariaLabel(ariaLabel: string): T;
    }

    interface IAlertDialog extends IPresetDialog<IAlertDialog> {
    }

    interface IConfirmDialog extends IPresetDialog<IConfirmDialog> {
        cancel(cancel: string): IConfirmDialog;
    }

    interface IDialogOptions {
        templateUrl?: string;
        template?: string;
        targetEvent?: MouseEvent;
        scope?: angular.IScope; // default: new child scope
        preserveScope?: boolean; // default: false
        disableParentScroll?: boolean; // default: true
        hasBackdrop?: boolean // default: true
        clickOutsideToClose?: boolean; // default: false
        escapeToClose?: boolean; // default: true
        focusOnOpen?: boolean; // default: true
        controller?: string|Function;
        locals?: {[index: string]: any};
        bindToController?: boolean; // default: false
        resolve?: {[index: string]: angular.IPromise<any>}
        controllerAs?: string;
        parent?: string|Element|JQuery; // default: root node
        onComplete?: Function;
    }

    interface IDialogService {
        show(dialog: IDialogOptions|IAlertDialog|IConfirmDialog): angular.IPromise<any>;
        confirm(): IConfirmDialog;
        alert(): IAlertDialog;
        hide(response?: any): angular.IPromise<any>;
        cancel(response?: any): void;
    }

    interface IIcon {
        (id: string): angular.IPromise<Element>; // id is a unique ID or URL
    }

    interface IIconProvider {
        icon(id: string, url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
        iconSet(id: string, url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
        defaultIconSet(url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
        defaultViewBoxSize(viewBoxSize: number): IIconProvider; // default: 24
        defaultFontSet(name: string): IIconProvider;
    }

    interface IMedia {
        (media: string): boolean;
    }

    interface ISidenavObject {
        toggle(): angular.IPromise<void>;
        open(): angular.IPromise<void>;
        close(): angular.IPromise<void>;
        isOpen(): boolean;
        isLockedOpen(): boolean;
    }

    interface ISidenavService {
        (component: string): ISidenavObject;
    }

    interface IToastPreset<T> {
        textContent(content: string): T;
        action(action: string): T;
        highlightAction(highlightAction: boolean): T;
        capsule(capsule: boolean): T;
        theme(theme: string): T;
        hideDelay(delay: number): T;
        position(position: string): T;
        parent(parent?: string|Element|JQuery): T; // default: root node
    }

    interface ISimpleToastPreset extends IToastPreset<ISimpleToastPreset> {
    }

    interface IToastOptions {
        templateUrl?: string;
        template?: string;
        scope?: angular.IScope; // default: new child scope
        preserveScope?: boolean; // default: false
        hideDelay?: number; // default (ms): 3000
        position?: string; // any combination of 'bottom'/'left'/'top'/'right'/'fit'; default: 'bottom left'
        controller?: string|Function;
        locals?: {[index: string]: any};
        bindToController?: boolean; // default: false
        resolve?: {[index: string]: angular.IPromise<any>}
        controllerAs?: string;
        parent?: string|Element|JQuery; // default: root node
    }

    interface IToastService {
        show(optionsOrPreset: IToastOptions|IToastPreset<any>): angular.IPromise<any>;
        showSimple(content: string): angular.IPromise<any>;
        simple(): ISimpleToastPreset;
        build(): IToastPreset<any>;
        updateContent(): void;
        hide(response?: any): void;
        cancel(response?: any): void;
    }

    interface IPalette {
        0?: string;
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
        A100?: string;
        A200?: string;
        A400?: string;
        A700?: string;
        contrastDefaultColor?: string;
        contrastDarkColors?: string|string[];
        contrastLightColors?: string|string[];
    }

    interface IThemeHues {
        default?: string;
        'hue-1'?: string;
        'hue-2'?: string;
        'hue-3'?: string;
    }

    interface IThemePalette {
        name: string;
        hues: IThemeHues;
    }

    interface IThemeColors {
        accent: IThemePalette;
        background: IThemePalette;
        primary: IThemePalette;
        warn: IThemePalette;
    }

    interface IThemeGrayScalePalette {
        1: string;
        2: string;
        3: string;
        4: string;
        name: string;
    }

    interface ITheme {
        name: string;
        isDark: boolean;
        colors: IThemeColors;
        foregroundPalette: IThemeGrayScalePalette;
        foregroundShadow: string;
        accentPalette(name: string, hues?: IThemeHues): ITheme;
        primaryPalette(name: string, hues?: IThemeHues): ITheme;
        warnPalette(name: string, hues?: IThemeHues): ITheme;
        backgroundPalette(name: string, hues?: IThemeHues): ITheme;
        dark(isDark?: boolean): ITheme;
    }

    interface IThemingProvider {
        theme(name: string, inheritFrom?: string): ITheme;
        definePalette(name: string, palette: IPalette): IThemingProvider;
        extendPalette(name: string, palette: IPalette): IPalette;
        setDefaultTheme(theme: string): void;
        alwaysWatchTheme(alwaysWatch: boolean): void;
    }
    
    interface IDateLocaleProvider {
        months: string[];
        shortMonths: string[];
        days: string[];
        shortDays: string[];
        dates: string[];
        firstDayOfWeek: number;
        parseDate(dateString: string): Date;
        formatDate(date: Date): string;
        monthHeaderFormatter(date: Date): string;
        weekNumberFormatter(weekNumber: number): string;
        msgCalendar: string;
        msgOpenCalendar: string;
    }
}
