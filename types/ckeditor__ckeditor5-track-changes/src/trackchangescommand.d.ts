import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class TrackChangesCommand extends Command {
    constructor(editor: Editor, enabledCommands: Set<Command>);
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        TrackChangesCommand: TrackChangesCommand;
    }
}
