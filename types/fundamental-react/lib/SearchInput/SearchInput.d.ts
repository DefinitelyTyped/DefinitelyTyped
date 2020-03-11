import * as React from "react";

export type SearchInputProps = {
    className?: string;
    compact?: boolean;
    disableStyles?: boolean;
    inputGroupAddonProps?: any;
    inputGroupProps?: any;
    inputProps?: any;
    inShellbar?: boolean;
    listProps?: any;
    noSearchBtn?: boolean;
    placeholder?: string;
    popoverProps?: any;
    searchBtnProps?: any;
    searchList?: Array<{
      text: string,
      callback?: (...args: any[]) => any
    }>;
    validationState?: {
      state?: any,
      text?: string
    };
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter?: (value?: string | number | string[]) => void;
} & { [x: string]: any };

declare class SearchInput extends React.Component<SearchInputProps> {
    static displayName: "SearchInput";
}

export default SearchInput;
