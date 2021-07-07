import { Editor } from '@ckeditor/ckeditor5-core';
import Lang from '@ckeditor/ckeditor5-language';
import Command from '@ckeditor/ckeditor5-language/src/textpartlanguagecommand';
import * as utils from '@ckeditor/ckeditor5-language/src/utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Lang.TextPartLanguage(editor);
Lang.TextPartLanguage.requires.map(Plugin => new Plugin(editor).init());

new Lang.TextPartLanguageUI(editor).init();
new Lang.TextPartLanguageEditing(editor).init();

new Command(editor).refresh();
new Command(editor).execute();
new Command(editor).execute({
    languageCode: '',
});
new Command(editor).execute({
    languageCode: true,
});
new Command(editor).execute({
    languageCode: true,
    textDirection: 'ltr',
});

utils.stringifyLanguageAttribute('', 'ltr');
utils.stringifyLanguageAttribute.call(this, utils.parseLanguageAttribute(''));
