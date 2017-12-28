// Type definitions for angular-strap 2.3
// Project: http://mgcrea.github.io/angular-strap/
// Definitions by: Sam Herrmann <https://github.com/samherrmann>
//                 Matthias Kannwischer <https://github.com/mkannwischer>
//                 Gilles Waeber <https://github.com/gilleswaeber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
            animation?: string;
            backdropAnimation?: string;
            placement?: string;
            title?: string;
            content?: string;
            html?: boolean;
            backdrop?: boolean | string;
            keyboard?: boolean;
            show?: boolean;
            container?: string | boolean;
            controller?: any;
            controllerAs?: string;
            resolve?: any;
            locals?: any;
            template?: string;
            templateUrl?: string;
            contentTemplate?: string;
            prefixEvent?: string;
            id?: string;
            scope?: ng.IScope;
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
            animation?: string;
            placement?: string;
            title?: string;
            content?: string;
            html?: boolean;
            backdrop?: boolean | string;
            keyboard?: boolean;
            show?: boolean;
            container?: string | boolean;
            controller?: any;
            controllerAs?: string;
            template?: string;
            templateUrl?: string;
            contentTemplate?: string;
            scope?: ng.IScope;
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
            animation?: string;
            placement?: string;
            title?: string;
            content?: string;
            type?: string;
            show?: boolean;
            container?: string | boolean;
            controller?: any;
            controllerAs?: string;
            template?: string;
            templateUrl?: string;
            duration?: number | boolean;
            dismissable?: boolean;
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
            animation?: string;
            placement?: string;
            trigger?: string;
            title?: string;
            html?: boolean;
            delay?: number | { show: number; hide: number};
            container?: string | boolean;
            target?: string | ng.IAugmentedJQuery | boolean;
            template?: string;
            templateUrl?: string;
            titleTemplate?: string;
            prefixEvent?: string;
            id?: string;
            onShow?(tooltip: ITooltip): void;
            onBeforeShow?(tooltip: ITooltip): void;
            onHide?(tooltip: ITooltip): void;
            onBeforeHide?(tooltip: ITooltip): void;
            viewport?: string | { selector: string; padding: string | number };
            show?: boolean; // Not documented
            scope?: ng.IScope; // Not documented
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
            animation?: string;
            placement?: string;
            trigger?: string;
            title?: string;
            content?: string;
            html?: boolean;
            delay?: number | { show: number; hide: number };
            container?: string | boolean;
            target?: string | ng.IAugmentedJQuery | boolean;
            template?: string;
            templateUrl?: string;
            contentTemplate?: string;
            autoClose?: boolean;
            id?: string;
            onShow?(popover: IPopover): void;
            onBeforeShow?(popover: IPopover): void;
            onHide?(popover: IPopover): void;
            onBeforeHide?(popover: IPopover): void;
            viewport?: string | { selector: string; padding: string | number };
            show?: boolean; // Not documented
            scope?: ng.IScope; // Not documented
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
        type ITypeaheadService = (element: ng.IAugmentedJQuery, controller: any, config?: ITypeaheadOptions) => ITypeahead;

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
            animation?: string;
            placement?: string;
            trigger?: string;
            html?: boolean;
            delay?: number | { show: number; hide: number };
            container?: string | boolean;
            template?: string;
            limit?: number;
            minLength?: number;
            autoSelect?: boolean;
            comparator?: string;
            id?: string;
            watchOptions?: boolean;
            trimValue?: boolean;
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
        type IDatepickerService = (element: ng.IAugmentedJQuery, controller: any, config?: IDatepickerOptions) => IDatepicker;

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
            animation?: string;
            placement?: string;
            trigger?: string;
            html?: boolean;
            delay?: number | { show: number; hide: number };
            container?: string | boolean;
            template?: string;
            onShow?(datepicker: IDatepicker): void;
            onBeforeShow?(datepicker: IDatepicker): void;
            onHide?(datepicker: IDatepicker): void;
            onBeforeHide?(datepicker: IDatepicker): void;
            dateFormat?: string;
            modelDateFormat?: string;
            dateType?: string;
            timezone?: string;
            autoclose?: boolean;
            useNative?: boolean;
            minDate?: Date;
            maxDate?: Date;
            startView?: number;
            minView?: number;
            startWeek?: number;
            startDate?: Date;
            iconLeft?: string;
            iconRight?: string;
            daysOfWeekDisabled?: string;
            disabledDates?: IDatepickerDateRange[];
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Timepicker
    // see http://mgcrea.github.io/angular-strap/#/timepickers
    ///////////////////////////////////////////////////////////////////////////

    namespace timepicker {
        type ITimepickerService = (element: ng.IAugmentedJQuery, controller: any, config?: ITimepickerOptions) => ITimepicker;

        interface ITimepickerProvider {
            defaults: ITimepickerOptions;
        }

        interface ITimepicker {
        }

        interface ITimepickerOptions {
            animation?: string;
            placement?: string;
            trigger?: string;
            html?: boolean;
            delay?: number | { show: number; hide: number; };
            container?: string | boolean;
            template?: string;
            onShow?(timepicker: ITimepicker): void;
            onBeforeShow?(timepicker: ITimepicker): void;
            onHide?(timepicker: ITimepicker): void;
            onBeforeHide?(timepicker: ITimepicker): void;
            timeFormat?: string;
            modelTimeFormat?: string;
            timeType?: string;
            autoclose?: boolean;
            useNative?: boolean;
            minTime?: Date; // TODO
            maxTime?: Date; // TODO
            length?: number;
            hourStep?: number;
            minuteStep?: number;
            secondStep?: number;
            roundDisplay?: boolean;
            iconUp?: string;
            iconDown?: string;
            arrowBehaviour?: string;
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
          animation?: string;
          placement?: string;
          trigger?: string;
          html?: boolean;
          delay?: number | { show: number; hide: number; };
          container?: string | boolean;
          template?: string;
          toggle?: boolean;
          onShow?(select: ISelect): void;
          onBeforeShow?(select: ISelect): void;
          onHide?(select: ISelect): void;
          onBeforeHide?(select: ISelect): void;
          multiple?: boolean;
          allNoneButtons?: boolean;
          allText?: string;
          noneText?: string;
          maxLength?: number;
          maxLengthHtml?: string;
          sort?: boolean;
          placeholder?: string;
          iconCheckmark?: string;
          id?: string;
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
            animation?: string;
            template?: string;
            navClass?: string;
            activeClass?: string;
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
            animation?: string;
            activeClass?: string;
            disallowToggle?: boolean;
            startCollapsed?: boolean;
            allowMultiple?: boolean;
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
          animation?: string;
          placement?: string;
          trigger?: string;
          html?: boolean;
          delay?: number | { show: number; hide: number; };
          container?: string | boolean;
          template?: string;
          templateUrl?: string;
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
            activeClass?: string;
            routeAttr?: string;
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
            target?: string;
            offset?: number;
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
            offsetTop?: number;
            offsetBottom?: number;
            offsetParent?: number;
            offsetUnpin?: number;
        }
    }
}
