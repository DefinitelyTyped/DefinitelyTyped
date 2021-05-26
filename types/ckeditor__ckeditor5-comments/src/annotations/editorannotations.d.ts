import { Plugin } from '@ckeditor/ckeditor5-core';
import { Collection } from '@ckeditor/ckeditor5-utils';
import Annotation from './annotation';

export default class EditorAnnotations extends Plugin {
    addSourceCollector(callback: (...args: any[]) => any): void;
    getOrderedSelectedAnnotations(options?: {
        annotations: Collection<Annotation>;
        activeAnnotation: Annotation;
    }): Annotation[];
    refreshSelectedViews(): void;
}
