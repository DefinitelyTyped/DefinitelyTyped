import { ComponentType, HTMLProps } from 'react';

declare namespace IsolatedEventContainer {
    type Props = HTMLProps<HTMLDivElement>;
}
declare const IsolatedEventContainer: ComponentType<IsolatedEventContainer.Props>;

export default IsolatedEventContainer;
