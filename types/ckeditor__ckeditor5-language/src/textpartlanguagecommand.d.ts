import { Command } from '@ckeditor/ckeditor5-core';

export default class TextPartLanguageCommand extends Command {
    refresh(): void;
    execute(options?: { languageCode?: string | boolean; textDirection?: string }): void;
}
