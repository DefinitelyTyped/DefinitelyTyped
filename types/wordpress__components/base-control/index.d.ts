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
         * The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated. This is necessary to accessibly associate the label with that element.
         *
         * The recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you. Otherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.
         */
        id?: string | undefined;
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
