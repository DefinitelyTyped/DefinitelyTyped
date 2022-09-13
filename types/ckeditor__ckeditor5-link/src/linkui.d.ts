import { Plugin } from '@ckeditor/ckeditor5-core';
import { ContextualBalloon } from '@ckeditor/ckeditor5-ui';
import LinkActionsView from './ui/linkactionsview';
import LinkFormView from './ui/linkformview';

export default class LinkUI extends Plugin {
    static readonly requires: [typeof ContextualBalloon];
    static readonly pluginName: 'LinkUI';
    init(): void;
    destroy(): void;
    readonly actionsView: LinkActionsView;
    readonly formView: LinkFormView;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        LinkUI: LinkUI;
    }
}
