import { View } from '@ckeditor/ckeditor5-ui';
import { Collection, Rect } from '@ckeditor/ckeditor5-utils';
import AnnotationView from './view/annotationview';

export default class Annotation {
    focusableElements: Collection<HTMLElement>;
    innerView: View;
    isActive: boolean;
    target: Rect | Element;
    targetRect: Rect;
    type: string;
    view: AnnotationView;

    constructor(options?: { view: AnnotationView; target: Rect; type: string });
    destroy(): void;
    updateTargetRect(): void;
}
