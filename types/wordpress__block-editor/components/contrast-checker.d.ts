import { ComponentType } from "react";

declare namespace ContrastChecker {
    interface Props {
        backgroundColor?: string | undefined;
        children?: never | undefined;
        fallbackBackgroundColor?: string | undefined;
        fallbackTextColor?: string | undefined;
        fontSize?: number | undefined;
        isLargeText?: boolean | undefined;
        textColor?: string | undefined;
    }
}
declare const ContrastChecker: ComponentType<ContrastChecker.Props>;

export default ContrastChecker;
