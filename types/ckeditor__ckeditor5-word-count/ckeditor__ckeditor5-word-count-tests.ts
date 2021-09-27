import { Editor } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import * as utils from '@ckeditor/ckeditor5-word-count/src/utils';
import { WordCountConfig } from '@ckeditor/ckeditor5-word-count/src/wordcount';

class MyEditor extends Editor {}
const myEditor = new MyEditor();

const wordCount = new WordCount(myEditor);
wordCount.init();
wordCount.destroy();
let num = 0;
num = wordCount.words;
num = wordCount.characters;
wordCount.wordCountContainer.appendChild(document.createElement('div'));
WordCount.pluginName === 'WordCount';

const config: WordCountConfig = {
    container: wordCount.wordCountContainer,
    displayWords: true,
    displayCharacters: false,
    onUpdate(stats) {
        num = stats.words;
        stats.characters === num;
    },
};

const foo: string = utils.modelElementToPlainText(Element.fromJSON({ name: 'foo' }));

// $ExpectType WordCount
myEditor.plugins.get('WordCount');
