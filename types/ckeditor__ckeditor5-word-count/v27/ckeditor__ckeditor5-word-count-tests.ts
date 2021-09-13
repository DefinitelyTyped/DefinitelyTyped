import { Editor } from "@ckeditor/ckeditor5-core";
import { Element } from "@ckeditor/ckeditor5-engine";
import WC from "@ckeditor/ckeditor5-word-count";
import * as utils from "@ckeditor/ckeditor5-word-count/src/utils";
import { WordCountConfig } from "@ckeditor/ckeditor5-word-count/src/wordcount";

class MyEditor extends Editor {}
const myEditor = new MyEditor();

let num = 0;

const wordCount = new WC.WordCount(myEditor);
wordCount.init();
wordCount.destroy();
num = wordCount.words;
num = wordCount.characters;
wordCount.wordCountContainer.appendChild(document.createElement("div"));

const config: WordCountConfig = {
    container: wordCount.wordCountContainer,
    displayWords: true,
    displayCharacters: false,
    onUpdate(stats) {
        num = stats.words;
        num = stats.characters;
    },
};

const foo: string = utils.modelElementToPlainText(Element.fromJSON({ name: "foo" }));

// $ExpectType WordCount
myEditor.plugins.get('WordCount');
