import { Editor } from "@ckeditor/ckeditor5-core";
import SC from "@ckeditor/ckeditor5-special-characters";

class MyEditor extends Editor {}

let str = "";

const specialCharacters = new SC.SpecialCharacters(new MyEditor());
specialCharacters.addItems(str, [{ title: "uppercase o", character: "O" }]);
str = specialCharacters.getCharacter(str)!;
const groups = specialCharacters.getGroups();
const next = groups.next();
if (!next.done) {
    str = next.value;
}
specialCharacters.getCharactersForGroup(str)?.has(str);

const specialCharactersText = new SC.SpecialCharactersText(new MyEditor());
specialCharactersText.init();
const specialCharactersLatin = new SC.SpecialCharactersLatin(new MyEditor());
specialCharactersLatin.init();
const specialCharactersMathematical = new SC.SpecialCharactersMathematical(new MyEditor());
specialCharactersMathematical.init();

const editor = new MyEditor();

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
