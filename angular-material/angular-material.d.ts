// Type definitions for Angular Material 1.1.0-rc5+ (angular.material module)
// Project: https://github.com/angular/material
// Definitions by: Alex Staroselsky <https://github.com/AlStar01>, Blake Bigelow <https://github.com/blbigelow>, Peter Hajdu <https://github.com/PeterHajdu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module 'angular-material' {
    var _: string;
    export = _;
}

declare namespace angular.material {

    interface IBottomSheetOptions {
        templateUrl?: string;
        template?: string;
        scope?: angular.IScope; // default: new child scope
        preserveScope?: boolean; // default: false
        controller?: string|Function;
        locals?: {[index: string]: any};
        clickOutsideToClose?: boolean;
        disableBackdrop?: boolean;
        escapeToClose?: boolean;
        resolve?: {[index: string]: angular.IPromise<any>};
        controllerAs?: string;
        parent?: Function|string|Object; // default: root node
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

    interface IPromptDialog extends IPresetDialog<IPromptDialog> {
        cancel(cancel: string): IPromptDialog;
        placeholder(placeholder: string): IPromptDialog;
        initialValue(initialValue: string): IPromptDialog;
    }

    interface IDialogOptions {
        templateUrl?: string;
        template?: string;
        contentElement?: string|Element;
        autoWrap?: boolean; // default: true
        targetEvent?: MouseEvent;
        openFrom?: any;
        closeTo?: any;
        scope?: angular.IScope; // default: new child scope
        preserveScope?: boolean; // default: false
        disableParentScroll?: boolean; // default: true
        hasBackdrop?: boolean; // default: true
        clickOutsideToClose?: boolean; // default: false
        escapeToClose?: boolean; // default: true
        focusOnOpen?: boolean; // default: true
        controller?: string|Function;
        locals?: {[index: string]: any};
        bindToController?: boolean; // default: false
        resolve?: {[index: string]: angular.IPromise<any>}
        controllerAs?: string;
        parent?: string|Element|JQuery; // default: root node
        onShowing?: Function;
        onComplete?: Function;
        onRemoving?: Function;
        skipHide?: boolean;
        fullscreen?: boolean; // default: false
    }

    interface IDialogService {
        show(dialog: IDialogOptions|IAlertDialog|IConfirmDialog|IPromptDialog): angular.IPromise<any>;
        confirm(): IConfirmDialog;
        alert(): IAlertDialog;
        prompt(): IPromptDialog;
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
        (component: string, enableWait: boolean): angular.IPromise<ISidenavObject>;
        (component: string): ISidenavObject;
    }

    interface IToastPreset<T> {
        textContent(content: string): T;
        action(action: string): T;
        highlightAction(highlightAction: boolean): T;
        highlightClass(highlightClass: string): T;
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
        autoWrap?:boolean;
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
        setNonce(nonce: string): void;
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

    interface IMenuService {
        hide(response?: any, options?: any): angular.IPromise<any>;
    }

    interface IColorPalette {
        red: IPalette;
        pink: IPalette;
        'deep-purple': IPalette;
        indigo: IPalette;
        blue: IPalette;
        'light-blue': IPalette;
        cyan: IPalette;
        teal: IPalette;
        green: IPalette;
        'light-green': IPalette;
        lime: IPalette;
        yellow: IPalette;
        amber: IPalette;
        orange: IPalette;
        'deep-orange': IPalette;
        brown: IPalette;
        grey: IPalette;
        'blue-grey': IPalette;
    }

    interface IPanelConfig {
        template?: string;
        templateUrl?: string;
        controller?: string|Function;
        controllerAs?: string;
        bindToController?: boolean; // default: true
        locals?: {[index: string]: any};
        resolve?: {[index: string]: angular.IPromise<any>}
        attachTo?: string|JQuery|Element;
        propagateContainerEvents?: boolean;
        panelClass?: string;
        zIndex?: number; // default: 80
        position?: IPanelPosition;
        clickOutsideToClose?: boolean; // default: false
        escapeToClose?: boolean; // default: false
        trapFocus?: boolean; // default: false
        focusOnOpen?: boolean; // default: true
        fullscreen?: boolean; // default: false
        animation?: IPanelAnimation;
        hasBackdrop?: boolean; // default: false
        disableParentScroll?: boolean; // default: false
        onDomAdded?: Function;
        onOpenComplete?: Function;
        onRemoving?: Function;
        onDomRemoved?: Function;
        origin?: string|JQuery|Element;
    }

    interface IPanelRef {
        id: string;
        config: IPanelConfig;
        isAttached: boolean;
        open(): angular.IPromise<any>;
        close(): angular.IPromise<any>;
        attach(): angular.IPromise<any>;
        detach(): angular.IPromise<any>;
        show(): angular.IPromise<any>;
        hide(): angular.IPromise<any>;
        destroy(): void;
        addClass(newClass: string): void;
        removeClass(oldClass: string): void;
        toggleClass(toggleClass: string): void;
        updatePosition(position: IPanelPosition): void;
    }

    interface IPanelPosition {
        absolute(): IPanelPosition;
        relativeTo(someElement: string|JQuery|Element): IPanelPosition;
        top(top?: string): IPanelPosition; // default: '0'
        bottom(bottom?: string): IPanelPosition; // default: '0'
        start(start?: string): IPanelPosition; // default: '0'
        end(end?: string): IPanelPosition; // default: '0'
        left(left?: string): IPanelPosition; // default: '0'
        right(right?: string): IPanelPosition; // default: '0'
        centerHorizontally(): IPanelPosition;
        centerVertically(): IPanelPosition;
        center(): IPanelPosition;
        addPanelPosition(xPosition: string, yPosition: string): IPanelPosition;
        withOffsetX(offsetX: string): IPanelPosition;
        withOffsetY(offsetY: string): IPanelPosition;
    }

    interface IPanelAnimation {
        openFrom(from: string|Element|Event|{top: number, left: number}): IPanelAnimation;
        closeTo(to: string|Element|{top: number, left: number}): IPanelAnimation;
        withAnimation(cssClass: string|{open: string, close: string}): IPanelAnimation;
    }

    interface IPanelService {
        create(opt_config: IPanelConfig): IPanelRef;
        open(opt_config: IPanelConfig): angular.IPromise<IPanelRef>;
        newPanelPosition(): IPanelPosition;
        newPanelAnimation(): IPanelAnimation;
        xPosition: {
          CENTER: string,
          ALIGN_START: string,
          ALIGN_END: string,
          OFFSET_START: string,
          OFFSET_END: string,
        };
        yPosition: {
          CENTER: string,
          ALIGN_TOPS: string,
          ALIGN_BOTTOMS: string,
          ABOVE: string,
          BELOW: string,
        };
        animation: {
          SLIDE: string,
          SCALE: string,
          FADE: string,
        };
    }
}
