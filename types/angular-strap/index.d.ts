// Type definitions for angular-strap v2.2.x
// Project: http://mgcrea.github.io/angular-strap/
// Definitions by: Sam Herrmann <https://github.com/samherrmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="angular" />

declare namespace mgcrea.ngStrap {

    ///////////////////////////////////////////////////////////////////////////
    // Modal
    // see http://mgcrea.github.io/angular-strap/#/modals
    ///////////////////////////////////////////////////////////////////////////

    namespace modal {

        interface IModalService {
            (config?: IModalOptions): IModal;
        }

        interface IModalProvider {
            defaults: IModalOptions;
        }

        interface IModal {
            $promise: ng.IPromise<void>;
            show: () => void;
            hide: () => void;
            toggle: () => void;
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
            template?: string;
            templateUrl?: string;
            contentTemplate?: string;
            prefixEvent?: string;
            id?: string;
            scope?: ng.IScope;
        }

        interface IModalScope extends ng.IScope {
            $show: () => void;
            $hide: () => void;
            $toggle: () => void;
        }
    }


    ///////////////////////////////////////////////////////////////////////////
    // Aside
    // see http://mgcrea.github.io/angular-strap/#/asides
    ///////////////////////////////////////////////////////////////////////////

    namespace aside {

        interface IAsideService {
            (config?: IAsideOptions): IAside;
        }

        interface IAsideProvider {
            defaults: IAsideOptions;
        }

        interface IAside {
            $promise: ng.IPromise<void>;
            show: () => void;
            hide: () => void;
            toggle: () => void;
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
            template?: string;
            contentTemplate?: string;
            scope?: ng.IScope;
        }

        interface IAsideScope extends ng.IScope {
            $show: () => void;
            $hide: () => void;
            $toggle: () => void;
        }
    }



    ///////////////////////////////////////////////////////////////////////////
    // Alert
    // see http://mgcrea.github.io/angular-strap/#/alerts
    ///////////////////////////////////////////////////////////////////////////

    namespace alert {

        interface IAlertService {
            (config?: IAlertOptions): IAlert;
        }

        interface IAlertProvider {
            defaults: IAlertOptions;
        }

        interface IAlert {
            $promise: ng.IPromise<void>;
            show: () => void;
            hide: () => void;
            toggle: () => void;
        }

        interface IAlertOptions {
            animation?: string;
            placement?: string;
            title?: string;
            content?: string;
            type?: string;
            keyboard?: boolean;
            show?: boolean;
            container?: string | boolean;
            template?: string;
            duration?: number | boolean;
            dismissable?: boolean;
        }

        interface IAlertScope extends ng.IScope {
            $show: () => void;
            $hide: () => void;
            $toggle: () => void;
        }
    }


    ///////////////////////////////////////////////////////////////////////////
    // Tooltip
    // see http://mgcrea.github.io/angular-strap/#/tooltips
    ///////////////////////////////////////////////////////////////////////////

    namespace tooltip {

        interface ITooltipService {
            (element: ng.IAugmentedJQuery, config?: ITooltipOptions): ITooltip;
        }

        interface ITooltipProvider {
            defaults: ITooltipOptions;
        }

        interface ITooltip {
            $promise: ng.IPromise<void>;
            show: () => void;
            hide: () => void;
            toggle: () => void;
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
            contentTemplate?: string;
            prefixEvent?: string;
            id?: string;
            viewport?: string | { selector: string; padding: string | number };
        }

        interface ITooltipScope extends ng.IScope {
            $show: () => void;
            $hide: () => void;
            $toggle: () => void;
            $setEnabled: (isEnabled: boolean) => void;
        }
    }


    ///////////////////////////////////////////////////////////////////////////
    // Popover
    // see http://mgcrea.github.io/angular-strap/#/popovers
    ///////////////////////////////////////////////////////////////////////////

    namespace popover {

        interface IPopoverService {
            (element: ng.IAugmentedJQuery, config?: IPopoverOptions): IPopover;
        }

        interface IPopoverProvider {
            defaults: IPopoverOptions;
        }

        interface IPopover {
            $promise: ng.IPromise<void>;
            show: () => void;
            hide: () => void;
            toggle: () => void;
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
            contentTemplate?: string;
            autoClose?: boolean;
            id?: string;
            viewport?: string | { selector: string; padding: string | number };
        }

        interface IPopoverScope extends ng.IScope {
            $show: () => void;
            $hide: () => void;
            $toggle: () => void;
        }
    }



    ///////////////////////////////////////////////////////////////////////////
    // Typeahead
    // see http://mgcrea.github.io/angular-strap/#/typeaheads
    ///////////////////////////////////////////////////////////////////////////

    namespace typeahead {

        interface ITypeaheadService {
            (element: ng.IAugmentedJQuery, controller: any, config?: ITypeaheadOptions): ITypeahead;
        }

        interface ITypeaheadProvider {
            defaults: ITypeaheadOptions;
        }

        interface ITypeahead {
            $promise: ng.IPromise<void>;
            show: () => void;
            hide: () => void;
            toggle: () => void;
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
        }
    }


    ///////////////////////////////////////////////////////////////////////////
    // Datepicker
    // see http://mgcrea.github.io/angular-strap/#/datepickers
    ///////////////////////////////////////////////////////////////////////////

    namespace datepicker {

        interface IDatepickerService {
            (element: ng.IAugmentedJQuery, controller: any, config?: IDatepickerOptions): IDatepicker;
        }

        interface IDatepickerProvider {
            defaults: IDatepickerOptions;
        }

        interface IDatepicker {
            update: (date: Date) => void;
            updateDisabledDates: (dateRanges: IDatepickerDateRange[]) => void;
            select: (dateConstructorArg: string | number | number[], keep: boolean) => void;
            setMode: (mode: any) => void;
            int: () => void;
            destroy: () => void;
            show: () => void;
            hide: () => void;
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

        interface ITimepickerService {
            (element: ng.IAugmentedJQuery, controller: any, config?: ITimepickerOptions): ITimepicker;
        }

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

        interface ISelectService {
            (element: ng.IAugmentedJQuery, controller: any, config: ISelectOptions): ISelect;
        }

        interface ISelectProvider {
            defaults: ISelectOptions;
        }

        interface ISelect {
            update: (matches: any) => void;
            active: (index: number) => number;
            select: (index: number) => void;
            show: () => void;
            hide: () => void;
        }

        interface ISelectOptions {
          animation?: string;
          placement?: string;
          trigger?: string;
          html?: boolean;
          delay?: number | { show: number; hide: number; };
          container?: string | boolean;
          template?: string;
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

        interface IDropdownService {
            (element: ng.IAugmentedJQuery, config: IDropdownOptions): IDropdown;
        }

        interface IDropdown {
            show: () => void;
            hide: () => void;
            destroy: () => void;
        }

        interface IDropdownOptions {
          animation?: string;
          placement?: string;
          trigger?: string;
          html?: boolean;
          delay?: number | { show: number; hide: number; };
          container?: string | boolean;
          template?: string;
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

        interface IScrollspyService {
            (element: ng.IAugmentedJQuery, options: IScrollspyOptions): IScrollspy;
        }

        interface IScrollspy {
            checkOffsets: () => void;
            trackElement: (target: any, source: any) => void;
            untrackElement: (target: any, source: any) => void;
            activate: (index: number)  => void;
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

        interface IAffixService {
            (element: ng.IAugmentedJQuery, options: IAffixOptions): IAffix;
        }

        interface IAffix {
            init: () => void;
            destroy: () => void;
            checkPositionWithEventLoop: () => void;
            checkPosition: () => void;
        }

        interface IAffixOptions {
            offsetTop?: number;
            offsetBottom?: number;
            offsetParent?: number;
            offsetUnpin?: number;
        }
    }
}
