import { NavigableMenu } from "@wordpress/components";
import { ComponentProps, ComponentType } from "react";

declare namespace NavigableToolbar {
    interface Props extends ComponentProps<typeof NavigableMenu> {
        focusOnMount?: boolean | undefined;
    }
}
declare const NavigableToolbar: ComponentType<NavigableToolbar.Props>;

export default NavigableToolbar;
