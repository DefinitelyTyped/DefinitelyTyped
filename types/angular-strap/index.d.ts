/// <reference types="angular" />

declare namespace mgcrea.ngStrap {
    ///////////////////////////////////////////////////////////////////////////
    // Modal
    // see http://mgcrea.github.io/angular-strap/#/modals
    ///////////////////////////////////////////////////////////////////////////

    namespace modal {
        type IModalService = (config?: IModalOptions) => IModal;

        interface IModalProvider {
            defaults: IModalOptions;
        }

        interface IModal {
            $promise: ng.IPromise<void>;
            show(): void;
            hide(): void;
            toggle(): void;
        }

        interface IModalOptions {
            animation?: string | undefined;
            backdropAnimation?: string | undefined;
            placement?: string | undefined;
            title?: string | undefined;
            content?: string | undefined;
            html?: boolean | undefined;
            backdrop?: boolean | string | undefined;
            keyboard?: boolean | undefined;
            show?: boolean | undefined;
            container?: string | boolean | undefined;
            controller?: any;
            controllerAs?: string | undefined;
            resolve?: any;
            locals?: any;
            template?: string | undefined;
            templateUrl?: string | undefined;
            contentTemplate?: string | undefined;
            prefixEvent?: string | undefined;
            id?: string | undefined;
            scope?: ng.IScope | undefined;
            onShow?(modal: IModal): void;
            onBeforeShow?(modal: IModal): void;
            onHide?(modal: IModal): void;
            onBeforeHide?(modal: IModal): void;
        }

        interface IModalScope extends ng.IScope {
            $show(): void;
            $hide(): void;
            $toggle(): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Aside
    // see http://mgcrea.github.io/angular-strap/#/asides
    ///////////////////////////////////////////////////////////////////////////

    namespace aside {
        type IAsideService = (config?: IAsideOptions) => IAside;

        interface IAsideProvider {
            defaults: IAsideOptions;
        }

        interface IAside {
            $promise: ng.IPromise<void>;
            show(): void;
            hide(): void;
            toggle(): void;
        }

        interface IAsideOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            title?: string | undefined;
            content?: string | undefined;
            html?: boolean | undefined;
            backdrop?: boolean | string | undefined;
            keyboard?: boolean | undefined;
            show?: boolean | undefined;
            container?: string | boolean | undefined;
            controller?: any;
            controllerAs?: string | undefined;
            template?: string | undefined;
            templateUrl?: string | undefined;
            contentTemplate?: string | undefined;
            scope?: ng.IScope | undefined;
            onShow?(aside: IAside): void;
            onBeforeShow?(aside: IAside): void;
            onHide?(aside: IAside): void;
            onBeforeHide?(aside: IAside): void;
        }

        interface IAsideScope extends ng.IScope {
            $show(): void;
            $hide(): void;
            $toggle(): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Alert
    // see http://mgcrea.github.io/angular-strap/#/alerts
    ///////////////////////////////////////////////////////////////////////////

    namespace alert {
        type IAlertService = (config?: IAlertOptions) => IAlert;

        interface IAlertProvider {
            defaults: IAlertOptions;
        }

        interface IAlert {
            $promise: ng.IPromise<void>;
            show(): void;
            hide(): void;
            toggle(): void;
        }

        interface IAlertOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            title?: string | undefined;
            content?: string | undefined;
            type?: string | undefined;
            show?: boolean | undefined;
            container?: string | boolean | undefined;
            controller?: any;
            controllerAs?: string | undefined;
            template?: string | undefined;
            templateUrl?: string | undefined;
            duration?: number | boolean | undefined;
            dismissable?: boolean | undefined;
            onShow?(alert: IAlert): void;
            onBeforeShow?(alert: IAlert): void;
            onHide?(alert: IAlert): void;
            onBeforeHide?(alert: IAlert): void;
        }

        interface IAlertScope extends ng.IScope {
            $show(): void;
            $hide(): void;
            $toggle(): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Tooltip
    // see http://mgcrea.github.io/angular-strap/#/tooltips
    ///////////////////////////////////////////////////////////////////////////

    namespace tooltip {
        type ITooltipService = (element: ng.IAugmentedJQuery, config?: ITooltipOptions) => ITooltip;

        interface ITooltipProvider {
            defaults: ITooltipOptions;
        }

        interface ITooltip {
            $promise: ng.IPromise<void>;
            show(): void;
            hide(): void;
            toggle(): void;
        }

        interface ITooltipOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            title?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            target?: string | ng.IAugmentedJQuery | boolean | undefined;
            template?: string | undefined;
            templateUrl?: string | undefined;
            titleTemplate?: string | undefined;
            prefixEvent?: string | undefined;
            id?: string | undefined;
            onShow?(tooltip: ITooltip): void;
            onBeforeShow?(tooltip: ITooltip): void;
            onHide?(tooltip: ITooltip): void;
            onBeforeHide?(tooltip: ITooltip): void;
            viewport?: string | { selector: string; padding: string | number } | undefined;
        }

        interface ITooltipScope extends ng.IScope {
            $show(): void;
            $hide(): void;
            $toggle(): void;
            $setEnabled(isEnabled: boolean): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Popover
    // see http://mgcrea.github.io/angular-strap/#/popovers
    ///////////////////////////////////////////////////////////////////////////

    namespace popover {
        type IPopoverService = (element: ng.IAugmentedJQuery, config?: IPopoverOptions) => IPopover;

        interface IPopoverProvider {
            defaults: IPopoverOptions;
        }

        interface IPopover {
            $promise: ng.IPromise<void>;
            show(): void;
            hide(): void;
            toggle(): void;
        }

        interface IPopoverOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            title?: string | undefined;
            content?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            target?: string | ng.IAugmentedJQuery | boolean | undefined;
            template?: string | undefined;
            templateUrl?: string | undefined;
            contentTemplate?: string | undefined;
            autoClose?: boolean | undefined;
            id?: string | undefined;
            onShow?(popover: IPopover): void;
            onBeforeShow?(popover: IPopover): void;
            onHide?(popover: IPopover): void;
            onBeforeHide?(popover: IPopover): void;
            viewport?: string | { selector: string; padding: string | number } | undefined;
        }

        interface IPopoverScope extends ng.IScope {
            $show(): void;
            $hide(): void;
            $toggle(): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Typeahead
    // see http://mgcrea.github.io/angular-strap/#/typeaheads
    ///////////////////////////////////////////////////////////////////////////

    namespace typeahead {
        type ITypeaheadService = (
            element: ng.IAugmentedJQuery,
            controller: any,
            config?: ITypeaheadOptions,
        ) => ITypeahead;

        interface ITypeaheadProvider {
            defaults: ITypeaheadOptions;
        }

        interface ITypeahead {
            $promise: ng.IPromise<void>;
            show(): void;
            hide(): void;
            toggle(): void;
        }

        interface ITypeaheadOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            template?: string | undefined;
            limit?: number | undefined;
            minLength?: number | undefined;
            autoSelect?: boolean | undefined;
            comparator?: string | undefined;
            id?: string | undefined;
            watchOptions?: boolean | undefined;
            trimValue?: boolean | undefined;
            onShow?(typeahead: ITypeahead): void;
            onBeforeShow?(typeahead: ITypeahead): void;
            onHide?(typeahead: ITypeahead): void;
            onBeforeHide?(typeahead: ITypeahead): void;
            onSelect?(typeahead: ITypeahead): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Datepicker
    // see http://mgcrea.github.io/angular-strap/#/datepickers
    ///////////////////////////////////////////////////////////////////////////

    namespace datepicker {
        type IDatepickerService = (
            element: ng.IAugmentedJQuery,
            controller: any,
            config?: IDatepickerOptions,
        ) => IDatepicker;

        interface IDatepickerProvider {
            defaults: IDatepickerOptions;
        }

        interface IDatepicker {
            update(date: Date): void;
            updateDisabledDates(dateRanges: IDatepickerDateRange[]): void;
            select(dateConstructorArg: string | number | number[], keep: boolean): void;
            setMode(mode: any): void;
            int(): void;
            destroy(): void;
            show(): void;
            hide(): void;
        }

        interface IDatepickerDateRange {
            start: Date;
            end: Date;
        }

        interface IDatepickerOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            template?: string | undefined;
            onShow?(datepicker: IDatepicker): void;
            onBeforeShow?(datepicker: IDatepicker): void;
            onHide?(datepicker: IDatepicker): void;
            onBeforeHide?(datepicker: IDatepicker): void;
            dateFormat?: string | undefined;
            modelDateFormat?: string | undefined;
            dateType?: string | undefined;
            timezone?: string | undefined;
            autoclose?: boolean | undefined;
            useNative?: boolean | undefined;
            minDate?: Date | undefined;
            maxDate?: Date | undefined;
            startView?: number | undefined;
            minView?: number | undefined;
            startWeek?: number | undefined;
            startDate?: Date | undefined;
            iconLeft?: string | undefined;
            iconRight?: string | undefined;
            daysOfWeekDisabled?: string | undefined;
            disabledDates?: IDatepickerDateRange[] | undefined;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Timepicker
    // see http://mgcrea.github.io/angular-strap/#/timepickers
    ///////////////////////////////////////////////////////////////////////////

    namespace timepicker {
        type ITimepickerService = (
            element: ng.IAugmentedJQuery,
            controller: any,
            config?: ITimepickerOptions,
        ) => ITimepicker;

        interface ITimepickerProvider {
            defaults: ITimepickerOptions;
        }

        interface ITimepicker {
        }

        interface ITimepickerOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            template?: string | undefined;
            onShow?(timepicker: ITimepicker): void;
            onBeforeShow?(timepicker: ITimepicker): void;
            onHide?(timepicker: ITimepicker): void;
            onBeforeHide?(timepicker: ITimepicker): void;
            timeFormat?: string | undefined;
            modelTimeFormat?: string | undefined;
            timeType?: string | undefined;
            autoclose?: boolean | undefined;
            useNative?: boolean | undefined;
            minTime?: Date | undefined; // TODO
            maxTime?: Date | undefined; // TODO
            length?: number | undefined;
            hourStep?: number | undefined;
            minuteStep?: number | undefined;
            secondStep?: number | undefined;
            roundDisplay?: boolean | undefined;
            iconUp?: string | undefined;
            iconDown?: string | undefined;
            arrowBehaviour?: string | undefined;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Button
    // see http://mgcrea.github.io/angular-strap/#/buttons
    ///////////////////////////////////////////////////////////////////////////

    // No definitions for this module

    ///////////////////////////////////////////////////////////////////////////
    // Select
    // see http://mgcrea.github.io/angular-strap/#/selects
    ///////////////////////////////////////////////////////////////////////////

    namespace select {
        type ISelectService = (element: ng.IAugmentedJQuery, controller: any, config: ISelectOptions) => ISelect;

        interface ISelectProvider {
            defaults: ISelectOptions;
        }

        interface ISelect {
            update(matches: any): void;
            active(index: number): number;
            select(index: number): void;
            show(): void;
            hide(): void;
        }

        interface ISelectOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            template?: string | undefined;
            toggle?: boolean | undefined;
            onShow?(select: ISelect): void;
            onBeforeShow?(select: ISelect): void;
            onHide?(select: ISelect): void;
            onBeforeHide?(select: ISelect): void;
            multiple?: boolean | undefined;
            allNoneButtons?: boolean | undefined;
            allText?: string | undefined;
            noneText?: string | undefined;
            maxLength?: number | undefined;
            maxLengthHtml?: string | undefined;
            sort?: boolean | undefined;
            placeholder?: string | undefined;
            iconCheckmark?: string | undefined;
            id?: string | undefined;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Tabs
    // see http://mgcrea.github.io/angular-strap/#/tabs
    ///////////////////////////////////////////////////////////////////////////

    namespace tab {
        interface ITabProvider {
            defaults: ITabOptions;
        }

        interface ITabService {
            defaults: ITabOptions;
            controller: any;
        }

        interface ITabOptions {
            animation?: string | undefined;
            template?: string | undefined;
            navClass?: string | undefined;
            activeClass?: string | undefined;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Collapses
    // see http://mgcrea.github.io/angular-strap/#/collapses
    ///////////////////////////////////////////////////////////////////////////

    namespace collapse {
        interface ICollapseProvider {
            defaults: ICollapseOptions;
        }

        interface ICollapseOptions {
            animation?: string | undefined;
            activeClass?: string | undefined;
            disallowToggle?: boolean | undefined;
            startCollapsed?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Dropdowsn
    // see http://mgcrea.github.io/angular-strap/#/dropdowns
    ///////////////////////////////////////////////////////////////////////////

    namespace dropdown {
        interface IDropdownProvider {
            defaults: IDropdownOptions;
        }

        type IDropdownService = (element: ng.IAugmentedJQuery, config: IDropdownOptions) => IDropdown;

        interface IDropdown {
            show(): void;
            hide(): void;
            destroy(): void;
        }

        interface IDropdownOptions {
            animation?: string | undefined;
            placement?: string | undefined;
            trigger?: string | undefined;
            html?: boolean | undefined;
            delay?: number | { show: number; hide: number } | undefined;
            container?: string | boolean | undefined;
            template?: string | undefined;
            templateUrl?: string | undefined;
            onShow?(dropdown: IDropdown): void;
            onBeforeShow?(dropdown: IDropdown): void;
            onHide?(dropdown: IDropdown): void;
            onBeforeHide?(dropdown: IDropdown): void;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Navbar
    // see http://mgcrea.github.io/angular-strap/#/navbars
    ///////////////////////////////////////////////////////////////////////////

    namespace navbar {
        interface INavbarProvider {
            defaults: INavbarOptions;
        }

        interface INavbarOptions {
            activeClass?: string | undefined;
            routeAttr?: string | undefined;
        }

        interface INavbarService {
            defaults: INavbarOptions;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Scrollspy
    // see http://mgcrea.github.io/angular-strap/#/scrollspy
    ///////////////////////////////////////////////////////////////////////////

    namespace scrollspy {
        interface IScrollspyProvider {
            defaults: IScrollspyOptions;
        }

        type IScrollspyService = (element: ng.IAugmentedJQuery, options: IScrollspyOptions) => IScrollspy;

        interface IScrollspy {
            checkOffsets(): void;
            trackElement(target: any, source: any): void;
            untrackElement(target: any, source: any): void;
            activate(index: number): void;
        }

        interface IScrollspyOptions {
            target?: string | undefined;
            offset?: number | undefined;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Affix
    // see http://mgcrea.github.io/angular-strap/#/affix
    ///////////////////////////////////////////////////////////////////////////

    namespace affix {
        interface IAffixProvider {
            defaults: IAffixOptions;
        }

        type IAffixService = (element: ng.IAugmentedJQuery, options: IAffixOptions) => IAffix;

        interface IAffix {
            init(): void;
            destroy(): void;
            checkPositionWithEventLoop(): void;
            checkPosition(): void;
        }

        interface IAffixOptions {
            offsetTop?: number | undefined;
            offsetBottom?: number | undefined;
            offsetParent?: number | undefined;
            offsetUnpin?: number | undefined;
        }
    }
}
