import { ComponentType, ReactNode } from 'react';
import { ResizableProps } from 're-resizable';

declare namespace ResizableBox {
    type Props = ResizableProps & {
        className?: string;
        children?: ReactNode;
        showHandle?: boolean;
    };
}
declare const ResizableBox: ComponentType<ResizableBox.Props>;

export default ResizableBox;
