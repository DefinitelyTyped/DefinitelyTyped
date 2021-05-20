import { Editor } from "@ckeditor/ckeditor5-core";
import {
    SpecialCharacters,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
} from "@ckeditor/ckeditor5-special-characters";

class MyEditor extends Editor {}

let str = "";

const specialCharacters = new SpecialCharacters(new MyEditor());
specialCharacters.addItems(str, [{ title: "uppercase o", character: "O" }]);
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
