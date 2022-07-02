// Type definitions for react-tagsinput 3.19
// Project: https://github.com/olahol/react-tagsinput
// Definitions by: Michael Macnair <https://github.com/mykter>
//                 Richard Tan <https://github.com/chardos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace ReactTagsInput;
export = TagsInput;

declare class TagsInput<Tag = any> extends React.Component<TagsInput.ReactTagsInputProps<Tag>> {
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

    interface RenderInputProps<Tag = any> extends InputProps {
        readonly addTag: (tag: Tag) => void;
        readonly onChange: (e: React.ChangeEvent<{ readonly value: string }>) => void;
        readonly ref: (r: any) => void; // parameter is either a DOM element or a mounted React component
        readonly value: Tag;
    }

    interface TagProps {
        readonly [prop: string]: any;
    }

    interface RenderTagProps<Tag = any> extends TagProps {
        readonly disabled: boolean;
        readonly getTagDisplayValue: (tag: Tag) => string;
        readonly onRemove: (tagIndex: number) => void;
        readonly tag: Tag;
    }

    type RenderLayout = (tagElements: React.ReactElement[], inputElement: React.ReactElement) => React.ReactChild;

    interface ReactTagsInputProps<Tag = any> {
        children?: React.ReactNode;
        ref?: React.LegacyRef<TagsInput<Tag>> | undefined;
        value: Tag[];
        onChange: (tags: Tag[], changed: Tag[], changedIndexes: number[]) => void;
        onChangeInput?: ((value: string) => void) | undefined;
        addKeys?: number[] | string[] | undefined;
        currentValue?: string | undefined;
        inputValue?: string | undefined;
        onlyUnique?: boolean | undefined;
        validationRegex?: RegExp | undefined;
        onValidationReject?: ((tags: string[]) => void) | undefined;
        disabled?: boolean | undefined;
        maxTags?: number | undefined;
        addOnBlur?: boolean | undefined;
        addOnPaste?: boolean | undefined;
        pasteSplit?: ((data: string) => string[]) | undefined;
        removeKeys?: number[] | undefined;
        className?: string | undefined;
        focusedClassName?: string | undefined;
        tagProps?: TagProps | undefined;
        inputProps?: InputProps | undefined;
        tagDisplayProp?: keyof Tag | string | null | undefined;
        renderTag?: ((props: RenderTagProps<Tag>) => React.ReactNode) | undefined;
        renderInput?: ((props: RenderInputProps<Tag>) => React.ReactNode) | undefined;
        renderLayout?: RenderLayout | undefined;
        preventSubmit?: boolean | undefined;
    }
}
