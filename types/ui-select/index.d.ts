// Type definitions for ui-select 0.19.8
// Project: https://github.com/angular-ui/ui-select
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
//                 Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace ui.select {
        interface ISelectConfig {
            appendToBody: boolean;
            backspaceReset: boolean;
            closeOnSelect: boolean;
            dropdownPosition: string;
            generateId(): number;
            paste?: IPasteFn;
            placeholder: string;
            refreshDelay: number;
            removeSelected: boolean;
            resetSearchInput: boolean;
            searchEnabled: boolean;
            skipFocusser: boolean;
            sortable: boolean;
            spinnerClass: string;
            spinnerEnabled: boolean;
            theme: string;
        }

        interface ISelectController {
            activeIndex: number;
            clickTriggeredSelect: boolean;
            closeOnSelect: boolean;
            close(skipFocusser?: boolean): void;
            disabled: boolean;
            dropdownPosition: string;
            focus: boolean;
            isEmpty(): boolean;
            isGrouped?: boolean;
            isLocked(): boolean;
            itemProperty?: string;
            open: boolean;
            parserResult?: IRepeatExpression;
            paste?: IPasteFn;
            placeholder: string;
            refreshDelay: number;
            refreshing: boolean;
            removeSelected: boolean;
            resetSearchInput: boolean;
            searchEnabled: boolean;
            search: string;
            setFocus(): void;
            sizeSearchInput(): void;
            skipFocusser: boolean;
            sortable: boolean;
            spinnerClass: string;
            spinnerEnabled: boolean;
        }

        interface IPasteFn {
            (data: string): void;
        }

        interface IRepeatExpression {
            filters: string;
            itemName: string;
            keyName: string;
            modelMapper: string;
            repeatExpression(grouped: boolean): string;
            source: string;
            trackByExp: string;
        }
    }
}
