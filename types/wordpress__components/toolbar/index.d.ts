import { ComponentType, HTMLProps } from "react";

import DropdownMenu from "../dropdown-menu";
import ToolbarButton from "../toolbar-button";

declare namespace Toolbar {
    interface Props
        extends
            Omit<HTMLProps<HTMLDivElement>, "controls" | "label">,
            Partial<Pick<DropdownMenu.Props, "icon" | "label">>
    {
        /**
         * Class to set on the container div.
         */
        className?: string | undefined;
        /**
         * Should toolbar be collapsed into a dropdown?
         */
        isCollapsed?: boolean | undefined;
        /**
         * Either an array of `Control` objects or an array of array of
         * `Control` objects.
         */
        controls?: readonly Control[] | ReadonlyArray<readonly Control[]> | undefined;
    }
    type Control = ToolbarButton.Props;
}
declare const Toolbar: ComponentType<Toolbar.Props>;

export default Toolbar;
