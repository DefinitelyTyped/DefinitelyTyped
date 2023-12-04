import { ComponentType, JSX, ReactNode } from "react";

declare namespace BaseControl {
    interface ControlProps {
        /**
         * If this property is added, a label will be generated using label
         * property as the content.
         */
        label?: ReactNode | undefined;

        /**
         * If true, the label will only be visible to screen readers.
         */
        hideLabelFromVision?: boolean | undefined;

        /**
         * If this property is added, a help text will be generated using help
         * property as the content.
         */
        help?: ReactNode | undefined;
        /**
         * The class that will be added with `"components-base-control"` to
         * the classes of the wrapper div. If undefined, only
         * `"components-base-control"` is used.
         */
        className?: string | undefined;
    }
    interface Props extends ControlProps {
        /**
         * The id of the element to which labels and help text are being
         * generated. That element should be passed as a child.
         */
        id: string;
        /**
         * The content to be displayed within the BaseControl.
         */
        children: ReactNode;
    }
    interface VisualLabelProps {
        className?: string | undefined;
        children: ReactNode;
    }
}

declare const BaseControl: {
    (props: BaseControl.Props): JSX.Element;
    VisualLabel(props: BaseControl.VisualLabelProps): JSX.Element;
};

export default BaseControl;
