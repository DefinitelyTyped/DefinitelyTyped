import { Command } from '@ckeditor/ckeditor5-core';

/**
 * Adds a new CommentMarker what automatically adds corresponding CommentThread to the CommentsEditing#threads collection. Note this command adds only a CommentThread draft, to make is public marker has to be changed to be managed using operation.
 */
export default class AddCommentThreadCommand extends Command {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        AddCommentThreadCommand: AddCommentThreadCommand;
    }
}
