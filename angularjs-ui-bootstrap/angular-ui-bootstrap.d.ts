// Type definitions for Angular UI Bootstrap
// Project: http://angular-ui.github.io/bootstrap
// Definitions by: Maurits Elbers <https://github.com/MagicMau/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.bootstrap {

    interface IModalService {
        open(options: IModalOptions): IModalInstance;
    }

    interface IModalOptions {
        templateUrl?: any;
        template?: any;
        scope?: any;
        controller?: any;
        resolve?: any;
        backdrop?: any;
        keyboard?: any;
        windowClass?: any;
    }

    interface IModalInstance {
        close(result: any): void;
        dismiss(reason: any): void;
        result: ng.IPromise<any>;
        opened: ng.IPromise<any>;
    }


    interface IDatepickerPopupConfig {
        dateFormat: string;
        currentText: string;
        toggleWeeksText: string;
        clearText: string;
        closeText: string;
        closeOnDateSelection: boolean;
        appendToBody: boolean;
    }

    interface IDatepickerConfig {
        showWeeks: boolean;
        startingDay: number;
        min: any;
        max: any;
        dateDisabled(date, mode): void;
        dayFormat: string;
        monthFormat: string;
        yearFormat: string;
        yearRange: string;
        dayHeaderFormat: string;
        dayTitleFormat: string;
        monthTitleFormat: string;
    }
}