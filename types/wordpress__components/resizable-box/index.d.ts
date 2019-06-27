import { ComponentType } from '@wordpress/element';
import { ResizableProps } from 're-resizable';

declare namespace ResizableBox {
    type Props = ResizableProps;
}
declare const ResizableBox: ComponentType<ResizableBox.Props>;

export default ResizableBox;
