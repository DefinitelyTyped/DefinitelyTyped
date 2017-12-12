// Type definitions for react-tagsinput 3.19
// Project: https://github.com/olahol/react-tagsinput
// Definitions by: Michael Macnair <https://github.com/mykter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export as namespace ReactTagsInput;
export = TagsInput;

declare class TagsInput extends React.Component<TagsInput.ReactTagsInputProps> {
    accept(): any;
    addTag(tag: string): any;
    blur(): void;
    clearInput(): void;
    focus(): void;
}

declare namespace TagsInput {
    interface ReactTagsInputProps extends React.Props<TagsInput> {
        value: string[];
        onChange: (tags: string[], changed: string[], changedIndexes: number[]) => void;
        onChangeInput?: (value: string) => void;
        addKeys?: number[];
        currentValue?: string;
        inputValue?: string;
        onlyUnique?: boolean;
        validationRegex?: RegExp;
        onValidationReject?: (tags: string[]) => void;
        disabled?: boolean;
        maxTags?: number;
        addOnBlur?: boolean;
        addOnPaste?: boolean;
        pasteSplit?: (data: string) => string[];
        removeKeys?: number[];
        className?: string;
        focusedClassName?: string;
        tagProps?: any;
        inputProps?: any;
        tagDisplayProp?: string | null;
        renderTag?: (props: any) => React.Component;
        renderInput?: (props: any) => React.Component;
        renderLayout?: (tagComponents: React.Component[], inputComponent: React.Component) => any;
        preventSubmit?: boolean;
    }
}
