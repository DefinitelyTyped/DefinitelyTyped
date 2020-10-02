import { ComponentType, HTMLProps } from 'react';

declare namespace FlexItem {
    interface Props extends HTMLProps<HTMLDivElement> {}
}

declare const FlexItem: ComponentType<FlexItem.Props>;

export default FlexItem;
