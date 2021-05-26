import { Plugin } from '@ckeditor/ckeditor5-core';
import Annotation from './annotation';
import AnnotationCollection from './annotationcollection';
import { AnnotationsUI } from './annotationsuis';

export default class InlineAnnotations extends Plugin implements AnnotationsUI {
    activeAnnotation: Annotation | null;
    readonly isAttached: boolean;
    attach(uiAnnotations: AnnotationCollection): void;
    detach(): void;
    setActiveAnnotation(annotation: Annotation): void;
}
