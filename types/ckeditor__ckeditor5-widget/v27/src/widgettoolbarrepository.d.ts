import { Plugin } from '@ckeditor/ckeditor5-core';
import { DocumentSelection } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/view/selection';
import EngineView from '@ckeditor/ckeditor5-engine/src/view/view';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import View from '@ckeditor/ckeditor5-ui/src/view';

export default class WidgetToolbarRepository extends Plugin {
    static readonly requires: [typeof ContextualBalloon];
    static readonly pluginName: 'WidgetToolbarRepository';
    init(): void;
    destroy(): void;
    register(
        toolbarId: string,
        options?: {
            ariaLabel?: string | undefined;
            items: string[];
            getRelatedElement: (el: Selection | DocumentSelection) => EngineView;
            balloonClassName?: string | undefined;
        },
    ): void;
}

export interface WidgetRepositoryToolbarDefinition {
    balloonClassName: string;
    getRelatedElement: (el: Selection | DocumentSelection) => EngineView;
    view: View;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        WidgetToolbarRepository: WidgetToolbarRepository;
    }
}
