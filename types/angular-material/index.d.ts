import * as angular from "angular";

declare var _: string;
export = _;

declare module "angular" {
    namespace material {
        interface IAriaProvider {
            disableWarnings(): void;
        }

        interface ResolveObject {
            [name: string]: Injectable<(...args: any[]) => PromiseLike<any>>;
        }

        interface IBottomSheetOptions {
            templateUrl?: string | undefined;
            template?: string | undefined;
            scope?: IScope | undefined; // default: new child scope
            preserveScope?: boolean | undefined; // default: false
            controller?: string | Injectable<IControllerConstructor> | undefined;
            locals?: { [index: string]: any } | undefined;
            clickOutsideToClose?: boolean | undefined;
            bindToController?: boolean | undefined; // default: false
            disableBackdrop?: boolean | undefined;
            escapeToClose?: boolean | undefined;
            resolve?: ResolveObject | undefined;
            controllerAs?: string | undefined;
            parent?: ((scope: IScope, element: JQuery) => Element | JQuery) | string | Element | JQuery | undefined; // default: root node
            disableParentScroll?: boolean | undefined; // default: true
        }

        interface IBottomSheetService {
            show(options: IBottomSheetOptions): IPromise<any>;
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
            scope(scope?: IScope): T; // default: new child scope
            preserveScope(preserveScope?: boolean): T; // default: false
            disableParentScroll(disableParentScroll?: boolean): T; // default: true
            hasBackdrop(hasBackdrop?: boolean): T; // default: true
            clickOutsideToClose(clickOutsideToClose?: boolean): T; // default: false
            escapeToClose(escapeToClose?: boolean): T; // default: true
            focusOnOpen(focusOnOpen?: boolean): T; // default: true
            controller(controller?: string | Injectable<IControllerConstructor>): T;
            locals(locals?: { [index: string]: any }): T;
            bindToController(bindToController?: boolean): T; // default: false
            resolve(resolve?: ResolveObject): T;
            controllerAs(controllerAs?: string): T;
            parent(parent?: string | Element | JQuery): T; // default: root node
            ariaLabel(ariaLabel: string): T;
            openFrom(from: string | Element | Event | { top: number; left: number }): T;
            closeTo(to: string | Element | { top: number; left: number }): T;
            multiple(multiple: boolean): T;
        }

        interface IAlertDialog extends IPresetDialog<IAlertDialog> {
        }

        interface IConfirmDialog extends IPresetDialog<IConfirmDialog> {
            cancel(cancel: string): IConfirmDialog;
            multiple(multiple: boolean): IConfirmDialog;
        }

        interface IPromptDialog extends IPresetDialog<IPromptDialog> {
            cancel(cancel: string): IPromptDialog;
            required(required: boolean): IPromptDialog; // default: false
            placeholder(placeholder: string): IPromptDialog;
            initialValue(initialValue: string): IPromptDialog;
        }

        interface IColorExpression {
            [cssPropertyName: string]: string;
        }

        interface IColorService {
            applyThemeColors(element: Element | JQuery, colorExpression: IColorExpression): void;
            getThemeColor(expression: string): string;
            hasTheme(): boolean;
        }

        interface IDialogOptions {
            templateUrl?: string | undefined;
            template?: string | undefined;
            contentElement?: string | Element | undefined;
            autoWrap?: boolean | undefined; // default: true
            targetEvent?: MouseEvent | undefined;
            openFrom?: any;
            closeTo?: any;
            scope?: IScope | undefined; // default: new child scope
            preserveScope?: boolean | undefined; // default: false
            disableParentScroll?: boolean | undefined; // default: true
            hasBackdrop?: boolean | undefined; // default: true
            clickOutsideToClose?: boolean | undefined; // default: false
            escapeToClose?: boolean | undefined; // default: true
            focusOnOpen?: boolean | undefined; // default: true
            controller?: string | Injectable<IControllerConstructor> | undefined;
            locals?: { [index: string]: any } | undefined;
            bindToController?: boolean | undefined; // default: false
            resolve?: ResolveObject | undefined;
            controllerAs?: string | undefined;
            parent?: string | Element | JQuery | undefined; // default: root node
            onShowing?(scope: IScope, element: JQuery): void;
            onComplete?(scope: IScope, element: JQuery): void;
            onRemoving?(element: JQuery, removePromise: IPromise<any>): void;
            skipHide?: boolean | undefined;
            multiple?: boolean | undefined;
            fullscreen?: boolean | undefined; // default: false
            title?: string | undefined;
        }

        interface IDialogService {
            // indexer used to call preset dialog created with $mdDialogProvider
            // see: https://material.angularjs.org/latest/api/service/$mdDialog#custom-presets
            // tslint:disable-next-line:ban-types
            [presetName: string]: Function;

            show(dialog: IDialogOptions | IAlertDialog | IConfirmDialog | IPromptDialog): IPromise<any>;
            confirm(): IConfirmDialog;
            alert(): IAlertDialog;
            prompt(): IPromptDialog;
            hide(response?: any): IPromise<any>;
            cancel(response?: any): void;
        }

        interface IDialogProvider {
            addPreset(
                presetName: string,
                presetOptions: { methods?: ReadonlyArray<string> | undefined; options: () => IDialogOptions },
            ): IDialogProvider;
        }

        type IIcon = (id: string) => IPromise<Element>; // id is a unique ID or URL

        interface IIconProvider {
            icon(id: string, url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
            iconSet(id: string, url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
            defaultIconSet(url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
            defaultViewBoxSize(viewBoxSize: number): IIconProvider; // default: 24
            defaultFontSet(name: string): IIconProvider;
        }

        interface IInkRippleProvider {
            disableInkRipple(): void;
        }

        type IMedia = (media: string) => boolean;

        interface ISidenavObject {
            toggle(): IPromise<void>;
            open(): IPromise<void>;
            close(): IPromise<void>;
            isOpen(): boolean;
            isLockedOpen(): boolean;
            onClose(onClose: () => void): void;
        }

        interface ISidenavService {
            (component: string, enableWait: boolean): IPromise<ISidenavObject>;
            (component: string): ISidenavObject;
        }

        interface IToastPreset<T> {
            textContent(content: string): T;
            action(action: string): T;
            highlightAction(highlightAction: boolean): T;
            highlightClass(highlightClass: string): T;
            capsule(capsule: boolean): T;
            theme(theme: string): T;
            hideDelay(delay: number | false): T;
            position(position: string): T;
            parent(parent?: string | Element | JQuery): T; // default: root node
            toastClass(toastClass: string): T;
        }

        interface ISimpleToastPreset extends IToastPreset<ISimpleToastPreset> {
        }

        interface IToastOptions {
            templateUrl?: string | undefined;
            template?: string | undefined;
            autoWrap?: boolean | undefined;
            scope?: IScope | undefined; // default: new child scope
            preserveScope?: boolean | undefined; // default: false
            hideDelay?: number | false | undefined; // default (ms): 3000
            position?: string | undefined; // any combination of 'bottom'/'left'/'top'/'right'/'fit'; default: 'bottom left'
            toastClass?: string | undefined;
            controller?: string | Injectable<IControllerConstructor> | undefined;
            locals?: { [index: string]: any } | undefined;
            bindToController?: boolean | undefined; // default: false
            resolve?: ResolveObject | undefined;
            controllerAs?: string | undefined;
            parent?: string | Element | JQuery | undefined; // default: root node
        }

        interface IToastService {
            show(optionsOrPreset: IToastOptions | IToastPreset<any>): IPromise<any>;
            showSimple(content: string): IPromise<any>;
            simple(): ISimpleToastPreset;
            build(): IToastPreset<any>;
            updateContent(newContent: string): void;
            updateTextContent(newContent: string): void;
            hide(response?: any): void;
            cancel(response?: any): void;
        }

        interface IPalette {
            0?: string | undefined;
            50?: string | undefined;
            100?: string | undefined;
            200?: string | undefined;
            300?: string | undefined;
            400?: string | undefined;
            500?: string | undefined;
            600?: string | undefined;
            700?: string | undefined;
            800?: string | undefined;
            900?: string | undefined;
            A100?: string | undefined;
            A200?: string | undefined;
            A400?: string | undefined;
            A700?: string | undefined;
            contrastDefaultColor?: string | undefined;
            contrastDarkColors?: string | string[] | undefined;
            contrastLightColors?: string | string[] | undefined;
            contrastStrongLightColors?: string | string[] | undefined;
        }

        interface IThemeHues {
            default?: string | undefined;
            "hue-1"?: string | undefined;
            "hue-2"?: string | undefined;
            "hue-3"?: string | undefined;
        }

        interface IThemePalette {
            name: string;
            hues: IThemeHues;
        }

        interface IBrowserColors {
            theme: string;
            palette: string;
            hue: string;
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

        interface IThemeConfig {
            disableTheming: boolean;
            generateOnDemand: boolean;
            nonce: string;
            defaultTheme: string;
            alwaysWatchTheme: boolean;
            registeredStyles: string[];
        }

        interface IThemingProvider {
            alwaysWatchTheme(alwaysWatch: boolean): void;
            definePalette(name: string, palette: IPalette): IThemingProvider;
            enableBrowserColor(browserColors: IBrowserColors): () => void;
            extendPalette(name: string, palette: IPalette): IPalette;
            registerStyles(styles: string): void;
            setDefaultTheme(theme: string): void;
            setNonce(nonce: string): void;
            theme(name: string, inheritFrom?: string): ITheme;
            generateThemesOnDemand(onDemand: boolean): void;
            disableTheming(isDisabled?: boolean): void;
            configuration(): IThemeConfig;
        }

        interface IDefineThemeOptions {
            primary?: string | undefined;
            accent?: string | undefined;
            warn?: string | undefined;
            background?: string | undefined;
            dark?: boolean | undefined;
        }

        interface IThemingService {
            PALETTES: IConfiguredColorPalette; // get only
            THEMES: IConfiguredThemes; // get only
            (element: JQuery): void;
            registered(themeName: string): boolean;
            defaultTheme(): string;
            generateTheme(name: string): void;
            setBrowserColor(options: IBrowserColors): () => void;
            defineTheme(name: string, options: IDefineThemeOptions): IPromise<string>;
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
            close(): void;
            hide(response?: any, options?: any): IPromise<any>;
            open(event?: MouseEvent | JQueryEventObject): void;
        }

        interface IColorPalette {
            red: IPalette;
            pink: IPalette;
            "deep-purple": IPalette;
            indigo: IPalette;
            blue: IPalette;
            "light-blue": IPalette;
            cyan: IPalette;
            teal: IPalette;
            green: IPalette;
            "light-green": IPalette;
            lime: IPalette;
            yellow: IPalette;
            amber: IPalette;
            orange: IPalette;
            "deep-orange": IPalette;
            brown: IPalette;
            grey: IPalette;
            "blue-grey": IPalette;
        }

        interface IConfiguredColorPalette extends IColorPalette {
            [name: string]: IPalette;
        }

        interface IThemes {
            default: ITheme;
        }

        interface IConfiguredThemes extends IThemes {
            [name: string]: ITheme;
        }

        interface IPanelConfig {
            id?: string | undefined;
            template?: string | undefined;
            templateUrl?: string | undefined;
            controller?: string | Injectable<IControllerConstructor> | undefined;
            controllerAs?: string | undefined;
            bindToController?: boolean | undefined; // default: true
            locals?: { [index: string]: any } | undefined;
            resolve?: ResolveObject | undefined;
            attachTo?: string | JQuery | Element | undefined;
            propagateContainerEvents?: boolean | undefined;
            panelClass?: string | undefined;
            zIndex?: number | undefined; // default: 80
            position?: IPanelPosition | undefined;
            clickOutsideToClose?: boolean | undefined; // default: false
            escapeToClose?: boolean | undefined; // default: false
            trapFocus?: boolean | undefined; // default: false
            focusOnOpen?: boolean | undefined; // default: true
            fullscreen?: boolean | undefined; // default: false
            animation?: IPanelAnimation | undefined;
            hasBackdrop?: boolean | undefined; // default: false
            disableParentScroll?: boolean | undefined; // default: false
            onDomAdded?(...args: any[]): PromiseLike<void> | void;
            onOpenComplete?(...args: any[]): PromiseLike<void> | void;
            onRemoving?(...args: any[]): PromiseLike<void> | void;
            onDomRemoved?(...args: any[]): PromiseLike<void> | void;
            origin?: string | JQuery | Element | undefined;
            onCloseSuccess?: ((panel: IPanelRef, closeReason: string) => any) | undefined;
        }

        interface IPanelRef {
            id: string;
            config: IPanelConfig;
            isAttached: boolean;
            panelContainer: JQuery;
            panelEl: JQuery;
            open(): IPromise<any>;
            close(): IPromise<any>;
            attach(): IPromise<any>;
            detach(): IPromise<any>;
            show(): IPromise<any>;
            hide(): IPromise<any>;
            destroy(): void;
            addClass(newClass: string): void;
            removeClass(oldClass: string): void;
            toggleClass(toggleClass: string): void;
            updateAnimation(animation: IPanelAnimation): void;
            updatePosition(position: IPanelPosition): void;
            registerInterceptor(type: string, callback: () => IPromise<any>): IPanelRef;
            removeInterceptor(type: string, callback: () => IPromise<any>): IPanelRef;
            removeAllInterceptors(type?: string): IPanelRef;
        }

        interface IPanelPosition {
            absolute(): IPanelPosition;
            relativeTo(someElement: string | JQuery | Element): IPanelPosition;
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
            withOffsetX(offsetX: string | ((panel: IPanelPosition) => string)): IPanelPosition;
            withOffsetY(offsetY: string | ((panel: IPanelPosition) => string)): IPanelPosition;
        }

        interface IPanelAnimation {
            openFrom(from: string | Element | Event | { top: number; left: number }): IPanelAnimation;
            closeTo(to: string | Element | { top: number; left: number }): IPanelAnimation;
            withAnimation(cssClass: string | { open: string; close: string }): IPanelAnimation;
            duration(duration: number | { open: number; close: number }): IPanelAnimation;
        }

        interface IPanelService {
            create(opt_config: IPanelConfig): IPanelRef;
            open(opt_config: IPanelConfig): IPromise<IPanelRef>;
            newPanelPosition(): IPanelPosition;
            newPanelAnimation(): IPanelAnimation;
            xPosition: {
                CENTER: string;
                ALIGN_START: string;
                ALIGN_END: string;
                OFFSET_START: string;
                OFFSET_END: string;
            };
            yPosition: {
                CENTER: string;
                ALIGN_TOPS: string;
                ALIGN_BOTTOMS: string;
                ABOVE: string;
                BELOW: string;
            };
            animation: {
                SLIDE: string;
                SCALE: string;
                FADE: string;
            };
            interceptorTypes: {
                CLOSE: string;
            };
            closeReasons: {
                CLICK_OUTSIDE: string;
                ESCAPE: string;
            };
            absPosition: {
                TOP: string;
                RIGHT: string;
                BOTTOM: string;
                LEFT: string;
            };
        }

        interface IProgressCircularConfig {
            progressSize?: number | undefined;
            strokeWidth?: number | undefined;
            duration?: number | undefined;
            easeFn?(t: number, b: number, c: number, d: number): number;
            durationIndeterminate?: number | undefined;
            startIndeterminate?: number | undefined;
            endIndeterminate?: number | undefined;
            easeFnIndeterminate?(t: number, b: number, c: number, d: number): number;
        }

        interface IProgressCircularProvider {
            configure(options: IProgressCircularConfig): void;
        }

        type IStickyService = (scope: IScope, element: JQuery, elementClone?: JQuery) => void;

        interface IInteractionService {
            getLastInteractionType(): string | null;
            isUserInvoked(checkDelay?: number): boolean;
        }

        interface IUtilService {
            // tslint:disable-next-line:ban-types debounce takes in a user provided function
            debounce<T extends Function>(func: T, wait?: number, scope?: any, invokeApply?: boolean): T;
            enableScrolling(): void;
        }

        interface IMenuController {
            close(skipFocus?: boolean, closeOpts?: {}): void;
            open(event?: Event): void;
        }
    }
}
