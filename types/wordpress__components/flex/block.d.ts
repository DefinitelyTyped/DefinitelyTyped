import { ComponentType, HTMLProps } from 'react';

declare namespace FlexBlock {
    interface Props extends HTMLProps<HTMLDivElement> {}
}

declare const FlexBlock: ComponentType<FlexBlock.Props>;

export default FlexBlock;
