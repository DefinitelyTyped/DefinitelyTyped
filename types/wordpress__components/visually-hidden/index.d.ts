import { ComponentType, ReactNode } from 'react';
import { WordPressComponentProps } from '../ui/context/wordpress-component';

declare namespace VisuallyHidden {
    type Props = WordPressComponentProps<{ children?: ReactNode }, 'div'>;
}
declare const VisuallyHidden: ComponentType<VisuallyHidden.Props>;

export default VisuallyHidden;
