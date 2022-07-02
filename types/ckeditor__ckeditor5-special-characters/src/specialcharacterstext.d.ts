import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * A plugin that provides special characters for the "Text" category.
 *
 *    ClassicEditor
 *      .create( {
 *        plugins: [ ..., SpecialCharacters, SpecialCharactersText ],
 *      } )
 *      .then( ... )
 *      .catch( ... );
 */
export default class SpecialCharactersText extends Plugin {
    static readonly pluginName: 'SpecialCharactersText';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersText: SpecialCharactersText;
    }
}
