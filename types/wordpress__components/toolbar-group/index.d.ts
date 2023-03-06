import { ComponentType, HTMLProps } from 'react';

import DropdownMenu from '../dropdown-menu';
import ToolbarButton from '../toolbar-button';

interface ToolbarGroupProps
    extends Omit<HTMLProps<HTMLDivElement>, 'controls' | 'label'>,
        Partial<Pick<DropdownMenu.Props, 'icon' | 'label'>> {
    /**
     * ARIA label for dropdown menu if is collapsed.
     */
    title?: string | undefined;
    /**
     * Class to set on the container div.
     */
    className?: string | undefined;
    /**
     * Turns ToolbarGroup into a dropdown menu.
     */
    isCollapsed?: boolean | undefined;
    /**
     * The controls to render in this toolbar.
     */
    controls?: readonly Control[] | ReadonlyArray<readonly Control[]> | undefined;
}
type Control = ToolbarButton.Props;
declare const ToolbarGroup: ComponentType<ToolbarGroupProps>;

export default ToolbarGroup;
