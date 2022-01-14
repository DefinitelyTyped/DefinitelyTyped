import { ComponentType, ReactNode } from 'react';
import { WordPressComponentProps } from '../ui/context/wordpress-component';

declare namespace VisuallyHidden {
    type Props = WordPressComponentProps<ReactNode, 'div'>;
}
declare const VisuallyHidden: ComponentType<VisuallyHidden.Props>;

export default VisuallyHidden;
