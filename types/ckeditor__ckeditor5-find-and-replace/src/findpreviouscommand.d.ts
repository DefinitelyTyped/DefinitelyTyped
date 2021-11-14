import FindNextCommand from './findnextcommand';

/**
 * The find next command. Moves the highlight to the next search result.
 */
export default class FindPreviousCommand extends FindNextCommand {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        FindPreviousCommand: FindPreviousCommand;
    }
}
