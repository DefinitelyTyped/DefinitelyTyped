import { ContextPlugin } from '@ckeditor/ckeditor5-core';
import Annotation from './annotation';
import AnnotationCollection from './annotationcollection';

export interface AnnotationsUI {
    activeAnnotation: Annotation | null;
    attach(uiAnnotations: AnnotationCollection): void;
    detach(): void;
    setActiveAnnotation(annotation: Annotation | null): void;
}

export default class AnnotationsUIs extends ContextPlugin {
    activeUIs: Set<string>;
    activate(uiName: string, filter?: (annotation: Annotation) => boolean): void;
    deactivate(uiName: string): void;
    deactivateAll(): void;
    hasActive(): boolean;
    isActive(uiName: string): boolean;
    register(uiName: string, annotationsUI: AnnotationsUI): void;
    switchTo(uiName: string): void;
}
