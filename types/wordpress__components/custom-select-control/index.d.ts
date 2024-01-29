import * as downshift from "downshift";
import { ComponentType, CSSProperties } from "react";

declare namespace CustomSelectControl {
    interface Option {
        key: string;
        name: string;
        style?: CSSProperties | undefined;
        className?: string | undefined;
    }

    interface Props {
        className?: string | undefined;
        /**
         * Used to visually hide the label. It will always be visible to screen readers.
         *
         * @defaultValue false
         */
        hideLabelFromVision?: boolean | undefined;
        /**
         * The label for the control.
         */
        label: string;
        /**
         * The options that can be chosen from.
         */
        options: readonly Option[];
        /**
         * Function called with the control's internal state changes. The `selectedItem` property contains the next selected item.
         */
        onChange?: downshift.UseSelectProps<Option>["onSelectedItemChange"] | undefined;
        /**
         * Can be used to externally control the value of the control.
         */
        value?: Option | undefined;
    }
}
declare const CustomSelectControl: ComponentType<CustomSelectControl.Props>;

export default CustomSelectControl;
