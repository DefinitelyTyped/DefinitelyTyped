import * as React from "react";

export type SearchInputProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disableStyles?: boolean | undefined;
    inputGroupAddonProps?: any;
    inputGroupProps?: any;
    inputProps?: any;
    inShellbar?: boolean | undefined;
    listProps?: any;
    noSearchBtn?: boolean | undefined;
    placeholder?: string | undefined;
    popoverProps?: any;
    searchBtnProps?: any;
    searchList?:
        | Array<{
            text: string;
            callback?: ((...args: any[]) => any) | undefined;
        }>
        | undefined;
    validationState?: {
        state?: any;
        text?: string | undefined;
    } | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onEnter?: ((value?: string | number | string[]) => void) | undefined;
} & { [x: string]: any };

declare class SearchInput extends React.Component<SearchInputProps> {
    static displayName: "SearchInput";
}

export default SearchInput;
