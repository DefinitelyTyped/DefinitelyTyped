// Type definitions for react-tagsinput 3.19
// Project: https://github.com/olahol/react-tagsinput
// Definitions by: Michael Macnair <https://github.com/mykter>
//                 Richard Tan <https://github.com/chardos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace ReactTagsInput;
export = TagsInput;

type Tag = any;

declare class TagsInput extends React.Component<TagsInput.ReactTagsInputProps> {
    accept(): any;
    addTag(tag: Tag): any;
    blur(): void;
    clearInput(): void;
    focus(): void;
}

declare namespace TagsInput {
    interface InputProps {
      readonly [prop: string]: any;
    }

    interface RenderInputProps extends InputProps {
        readonly addTag: (tag: Tag) => void;
        readonly onChange: (e: React.ChangeEvent<{ readonly value: string }>) => void;
        readonly ref: (r: any) => void; // parameter is either a DOM element or a mounted React component
        readonly value: Tag;
    }

    interface TagProps {
        readonly [prop: string]: any;
    }

    interface RenderTagProps extends TagProps {
        readonly disabled: boolean;
        readonly getTagDisplayValue: (tag: Tag) => string;
        readonly onRemove: (tagIndex: number) => void;
        readonly tag: Tag;
    }

    type RenderLayout = (tagComponent: React.Component[], inputComponent: React.Component) => React.ReactChild;

    interface ReactTagsInputProps extends React.Props<TagsInput> {
        value: Tag[];
        onChange: (tags: Tag[], changed: Tag[], changedIndexes: number[]) => void;
        onChangeInput?: (value: string) => void;
        addKeys?: number[] | string[];
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
        tagProps?: TagProps;
        inputProps?: InputProps;
        tagDisplayProp?: string | null;
        renderTag?: (props: RenderTagProps) => React.ReactNode;
        renderInput?: (props: RenderInputProps) => React.ReactNode;
        renderLayout?: RenderLayout;
        preventSubmit?: boolean;
    }
}
