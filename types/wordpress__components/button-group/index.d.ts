import { ComponentType, HTMLProps, ReactNode } from '@wordpress/element';

declare namespace ButtonGroup {
    interface Props extends HTMLProps<HTMLDivElement> {
        children: ReactNode;
    }
}
declare const ButtonGroup: ComponentType<ButtonGroup.Props>;

export default ButtonGroup;
