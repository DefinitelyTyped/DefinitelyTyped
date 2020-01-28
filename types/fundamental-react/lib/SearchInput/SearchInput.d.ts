import * as React from "react";

export type SearchInputProps = {
    className?: string;
    compact?: boolean;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    inputProps?: { [x: string]: any };
    inShellbar?: boolean;
    listProps?: { [x: string]: any };
    /* Set to **true** to render without a search button. */
    noSearchBtn?: boolean;
    placeholder?: string;
    /* Additional props to be spread to the search `<button>` element. */
    searchBtnProps?: { [x: string]: any };
    /* Collection of items to display in the dropdown list. */
    searchList?: Array<{ text: string; callback: () => void }>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /* Callback function when the user hits the <Enter> key. */
    onEnter?: (value?: string | number | string[]) => void;
} & { [x: string]: any };

declare class SearchInput extends React.Component<SearchInputProps> {
    static displayName: "SearchInput";
}

export default SearchInput;
