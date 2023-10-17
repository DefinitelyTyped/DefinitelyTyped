/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace ui.select {
        interface ISelectConfig {
            appendToBody: boolean;
            backspaceReset: boolean;
            closeOnSelect: boolean;
            dropdownPosition: string;
            generateId(): number;
            paste?: IPasteFn | undefined;
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
            isGrouped?: boolean | undefined;
            isLocked(): boolean;
            itemProperty?: string | undefined;
            open: boolean;
            parserResult?: IRepeatExpression | undefined;
            paste?: IPasteFn | undefined;
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
