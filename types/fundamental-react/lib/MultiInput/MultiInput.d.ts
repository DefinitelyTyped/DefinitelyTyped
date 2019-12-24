import * as React from "react";

export type MultiInputProps = {
    /* Collection of items to display in the list. */
    data: Array<string | number | string[]>;
    buttonProps?: { [x: string]: any };
    className?: string;
    compact?: boolean;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    inputProps?: { [x: string]: any };
    listProps?: { [x: string]: any };
    localizedText?: {
        /* Aria-label in <div> element for image. */
        imageLabel: string;
    };
    /* Localized placeholder text of the input. */
    placeHolder?: string;
    popoverProps?: { [x: string]: any };
    /* Additional props to be spread to the tags `<div>` element. */
    tagProps?: { [x: string]: any };
    /* Callback function when a tag is added or removed. Returns array of tags selected. */
    onTagsUpdate: (tags: string[]) => void;
} & { [x: string]: any };

declare class MultiInput extends React.Component<MultiInputProps> {}

export default MultiInput;
