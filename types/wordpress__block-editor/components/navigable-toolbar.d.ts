import { NavigableMenu } from "@wordpress/components";
import { ComponentType } from "react";

type NavigableMenuProps = Parameters<typeof NavigableMenu>[0];
declare namespace NavigableToolbar {
    interface Props extends NavigableMenuProps {
        focusOnMount?: boolean | undefined;
    }
}
declare const NavigableToolbar: ComponentType<NavigableToolbar.Props>;

export default NavigableToolbar;
