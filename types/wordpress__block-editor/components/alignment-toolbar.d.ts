import { Dashicon } from "@wordpress/components";
import { ComponentType, JSX } from "react";

declare namespace AlignmentToolbar {
    interface Props {
        alignmentControls?:
            | Array<{
                align: string;
                icon: Parameters<typeof Dashicon>[0]["icon"] | JSX.Element;
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
