import { Plugin } from "@ckeditor/ckeditor5-core";
import SpecialCharactersArrows from "./specialcharactersarrows";
import SpecialCharactersCurrency from "./specialcharacterscurrency";
import SpecialCharactersLatin from "./specialcharacterslatin";
import SpecialCharactersMathematical from "./specialcharactersmathematical";
import SpecialCharactersText from "./specialcharacterstext";

export default class SpecialCharactersEssentials extends Plugin {
    static requires: [
        typeof SpecialCharactersCurrency,
        typeof SpecialCharactersText,
        typeof SpecialCharactersMathematical,
        typeof SpecialCharactersArrows,
        typeof SpecialCharactersLatin,
    ];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersEssentials: SpecialCharactersEssentials;
    }
}
