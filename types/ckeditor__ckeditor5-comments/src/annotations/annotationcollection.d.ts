import { View } from '@ckeditor/ckeditor5-ui';
import Annotation from './annotation';
import AnnotationView from './view/annotationview';

export default class AnnotationCollection {
    isFocused: boolean;
    constructor(annotations?: Iterable<Annotation>);
    add(annotation: Annotation): void;
    destroy(): void;
    getByInnerView(innerView: View): Annotation;
    getByView(view: AnnotationView): Annotation;
    refreshPositioning(): void;
    remove(annotation: Annotation): void;
}
