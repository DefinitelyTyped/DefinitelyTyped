import { IconType } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace AlignmentControl {
    interface Props {
        alignmentControls?:
            | Array<{
                align: string;
                icon: IconType;
                title: string;
            }>
            | undefined;
        children?: never | undefined;
        value?: string | undefined;
        onChange?(newValue: string | undefined): void;
        label?: string | undefined;
        description?: string | undefined;
        isCollapsed?: boolean | undefined;
    }
}

declare const AlignmentControl: ComponentType<AlignmentControl.Props>;

export default AlignmentControl;
