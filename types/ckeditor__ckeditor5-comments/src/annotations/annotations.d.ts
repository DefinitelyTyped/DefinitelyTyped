import { ContextPlugin } from '@ckeditor/ckeditor5-core';
import Annotation from './annotation';
import AnnotationCollection from './annotationcollection';
import AnnotationView from './view/annotationview';

export default class Annotations extends ContextPlugin {
    activeAnnotations: Set<Annotation>;
    readonly collection: AnnotationCollection;

    activate(annotation: Annotation): void;
    add(annotation: Annotation): void;
    deactivateAll(): void;
    getByInnerView(innerView: AnnotationView): Annotation;
    remove(annotation: Annotation): void;
}
