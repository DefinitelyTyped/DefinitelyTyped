import { ComponentType } from '@wordpress/element';

declare namespace ContrastChecker {
    interface Props {
        backgroundColor?: string;
        children?: never;
        fallbackBackgroundColor?: string;
        fallbackTextColor?: string;
        fontSize?: number;
        isLargeText?: boolean;
        textColor?: string;
    }
}
declare const ContrastChecker: ComponentType<ContrastChecker.Props>;

export default ContrastChecker;
