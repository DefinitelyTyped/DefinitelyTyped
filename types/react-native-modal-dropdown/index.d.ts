// Type definitions for react-native-modal-dropdown 0.6
// Project: https://github.com/sohobloo/react-native-modal-dropdown
// Definitions by: Carlos Li <https://github.com/echoulen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

import ModalDropdown = RNModalDropdown.ModalDropdown;
export = ModalDropdown;

declare namespace RNModalDropdown {
    interface PositionStyle {
        left?: number;
        right?: number;
        width?: number;
    }
    interface ModalDropdownProps {
        disabled?: boolean;
        defaultIndex?: number;
        defaultValue?: string;
        options?: any[];
        animated?: boolean;
        scrollEnabled?: boolean;
        showsVerticalScrollIndicator?: boolean;
        style?: any;
        textStyle?: any;
        dropdownStyle?: any;
        dropdownTextStyle?: any;
        dropdownTextHighlightStyle?: any;
        adjustFrame?: (positionStyle: PositionStyle) => void;
        renderRow?: (option: any, index: number, isSelected: boolean) => any;
        renderSeparator?: () => any;
        renderButtonText?: (text: any) => any;
        onDropdownWillShow?: () => boolean;
        onDropdownWillHide?: () => boolean;
        onSelect?: (index: number, option: any) => void;
        accessible?: boolean;
        keyboardShouldPersistTaps?: "always" | "never" | "handled";
    }

    class ModalDropdown extends React.Component<ModalDropdownProps> {
        static default: typeof ModalDropdown;
    }
}
