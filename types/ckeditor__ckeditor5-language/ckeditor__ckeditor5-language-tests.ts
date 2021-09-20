import { Editor } from '@ckeditor/ckeditor5-core';
import Lang from '@ckeditor/ckeditor5-language';
import Command from '@ckeditor/ckeditor5-language/src/textpartlanguagecommand';
import * as utils from '@ckeditor/ckeditor5-language/src/utils';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import TextPartLanguageEditing from '@ckeditor/ckeditor5-language/src/textpartlanguageediting';
import TextPartLanguageUI from '@ckeditor/ckeditor5-language/src/textpartlanguageui';

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

// $ExpectType TextPartLanguage
editor.plugins.get('TextPartLanguage');

// $ExpectType TextPartLanguageEditing
editor.plugins.get('TextPartLanguageEditing');

// $ExpectType TextPartLanguageUI
editor.plugins.get('TextPartLanguageUI');

// $ExpectType TextPartLanguageCommand | undefined
editor.commands.get('TextPartLanguageCommand');
