import { ComponentType, HTMLProps } from '@wordpress/element';

declare namespace IsolatedEventContainer {
    type Props = HTMLProps<HTMLDivElement>;
}
declare const IsolatedEventContainer: ComponentType<IsolatedEventContainer.Props>;

export default IsolatedEventContainer;
