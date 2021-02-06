import { ComponentType, ReactNode } from 'react';

declare namespace MenuGroup {
    interface Props {
        className?: string;
        label?: ReactNode;
        children: ReactNode;
    }
}
declare const MenuGroup: ComponentType<MenuGroup.Props>;

export default MenuGroup;
