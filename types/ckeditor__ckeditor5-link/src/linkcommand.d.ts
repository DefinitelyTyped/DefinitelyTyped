import { Command } from '@ckeditor/ckeditor5-core';
import { Collection } from '@ckeditor/ckeditor5-utils';
import AutomaticDecorators from './utils/automaticdecorators';
import ManualDecorator from './utils/manualdecorator';

export default class LinkCommand extends Command {
    readonly automaticDecorators: AutomaticDecorators;
    readonly manualDecorators: Collection<ManualDecorator>;
    value: string | undefined;
    restoreManualDecoratorStates(): void;
    refresh(): void;
    execute(href: string, manualDecoratorIds?: Record<string, unknown>): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        LinkCommand: LinkCommand;
    }
}
