import { ComponentType, ReactNode } from "react";

declare namespace MenuGroup {
    interface Props {
        className?: string | undefined;
        label?: ReactNode | undefined;
        children: ReactNode;
    }
}
declare const MenuGroup: ComponentType<MenuGroup.Props>;

export default MenuGroup;
