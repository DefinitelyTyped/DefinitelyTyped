import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import {
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
} from '@ckeditor/ckeditor5-special-characters';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';
import SpecialCharactersNavigationView from '@ckeditor/ckeditor5-special-characters/src/ui/specialcharactersnavigationview';
import CharacterGridView from '@ckeditor/ckeditor5-special-characters/src/ui/charactergridview';
import CharacterInfoView from '@ckeditor/ckeditor5-special-characters/src/ui/characterinfoview';

class MyEditor extends Editor implements EditorWithUI {
    ui: EditorUI;
}
const editor = new MyEditor();

let str = '';

const specialCharacters = new SpecialCharacters(editor);
specialCharacters.addItems(str, [{ title: 'uppercase o', character: 'O' }]);
str = specialCharacters.getCharacter(str)!;
const groups = specialCharacters.getGroups();
const next = groups.next();
if (!next.done) {
    str = next.value;
}
specialCharacters.getCharactersForGroup(str)?.has(str);

const specialCharactersText = new SpecialCharactersText(new MyEditor());
specialCharactersText.init();
const specialCharactersLatin = new SpecialCharactersLatin(new MyEditor());
specialCharactersLatin.init();
const specialCharactersMathematical = new SpecialCharactersMathematical(new MyEditor());
specialCharactersMathematical.init();

const dropdown = editor.ui.componentFactory.create('specialCharacters');
if (dropdown instanceof DropdownView) {
    dropdown.isOpen = true;
    const first = dropdown.panelView.children.first;
    if (first instanceof SpecialCharactersNavigationView) {
        first.destroy();
    }
    dropdown.buttonView.tooltip;
}

new CharacterGridView().render();
new CharacterGridView().destroy();

new CharacterInfoView().render();
new CharacterInfoView().destroy();

// $ExpectType SpecialCharacters
editor.plugins.get('SpecialCharacters');

// $ExpectType SpecialCharactersArrows
editor.plugins.get('SpecialCharactersArrows');

// $ExpectType SpecialCharactersCurrency
editor.plugins.get('SpecialCharactersCurrency');

// $ExpectType SpecialCharactersEssentials
editor.plugins.get('SpecialCharactersEssentials');

// $ExpectType SpecialCharactersLatin
editor.plugins.get('SpecialCharactersLatin');

// $ExpectType SpecialCharactersMathematical
editor.plugins.get('SpecialCharactersMathematical');

// $ExpectType SpecialCharactersText
editor.plugins.get('SpecialCharactersText');
