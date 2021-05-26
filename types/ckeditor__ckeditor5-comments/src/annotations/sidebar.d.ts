import { ContextPlugin } from '@ckeditor/ckeditor5-core';
import { View } from '@ckeditor/ckeditor5-ui';
import Annotation from './annotation';
import SidebarView from './view/sidebarview';
import SidebarItemView from './view/sidebaritemview';

export default class Sidebar extends ContextPlugin {
    view: SidebarView;
    addAnnotation(annotation: Annotation, viewToDisplay?: View): SidebarItemView;
    getSidebarItemView(annotation: Annotation): SidebarItemView;
    rearrange(options: Record<string, unknown>): void;
    refresh(options?: {
        activatedAnnotation: Annotation;
        blurredAnnotation: Annotation;
        disableAnimationOnActivatedAnnotation?: boolean;
    }): void;
    setContainer(container: HTMLElement): void;
}

export interface SidebarConfig {
    container: HTMLElement;
    preventScrollOutOfView?: boolean;
}
