import { IconType } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace AlignmentToolbar {
    interface Props {
        alignmentControls?:
            | Array<{
                align: string;
                icon: IconType;
                title: string;
            }>
            | undefined;
        children?: never | undefined;
        value: string | undefined;
        onChange(newValue: string | undefined): void;
    }
}

declare const AlignmentToolbar: ComponentType<AlignmentToolbar.Props>;

export default AlignmentToolbar;
