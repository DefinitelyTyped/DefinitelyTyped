import { ContextPlugin } from '@ckeditor/ckeditor5-core';
import { BalloonPanelView, BodyCollection } from '@ckeditor/ckeditor5-ui';
import Annotation from './annotation';
import AnnotationCollection from './annotationcollection';
import { AnnotationsUI } from './annotationsuis';

export default class NarrowSidebar extends ContextPlugin implements AnnotationsUI {
    activeAnnotation: Annotation | null;
    balloonPanelView: BalloonPanelView;
    bodyCollection: BodyCollection;
    readonly isAttached: boolean;

    attach(uiAnnotations: AnnotationCollection): void;
    detach(): void;
    setActiveAnnotation(annotation: Annotation): void;
}
