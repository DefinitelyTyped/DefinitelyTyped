import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * A plugin that provides special characters for the "Latin" category.
 *
 *    ClassicEditor
 *      .create( {
 *        plugins: [ ..., SpecialCharacters, SpecialCharactersLatin ],
 *      } )
 *      .then( ... )
 *      .catch( ... );
 */
export default class SpecialCharactersLatin extends Plugin {
    static readonly pluginName: 'SpecialCharactersLatin';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersLatin: SpecialCharactersLatin;
    }
}
