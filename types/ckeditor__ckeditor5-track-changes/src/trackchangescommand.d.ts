import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class TrackChangesCommand extends Command {
    constructor(editor: Editor, enabledCommands: Set<Command>);
}
