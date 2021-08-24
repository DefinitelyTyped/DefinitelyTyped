import { ComponentType, HTMLProps, ReactNode } from 'react';

declare namespace ButtonGroup {
    interface Props extends HTMLProps<HTMLDivElement> {
        children: ReactNode;
    }
}
declare const ButtonGroup: ComponentType<ButtonGroup.Props>;

export default ButtonGroup;
