import { NavigableMenuProps } from "@wordpress/components/build-types/navigable-container/types";
import { ComponentType } from "react";

declare namespace NavigableToolbar {
    interface Props extends NavigableMenuProps {
        focusOnMount?: boolean | undefined;
    }
}
declare const NavigableToolbar: ComponentType<NavigableToolbar.Props>;

export default NavigableToolbar;
