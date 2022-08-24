import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * A plugin that provides special characters for the "Arrows" category.
 *
 *    ClassicEditor
 *      .create( {
 *        plugins: [ ..., SpecialCharacters, SpecialCharactersArrows ],
 *      } )
 *      .then( ... )
 *      .catch( ... );
 */
export default class SpecialCharactersArrows extends Plugin {
    static readonly pluginName: 'SpecialCharactersArrows';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersArrows: SpecialCharactersArrows;
    }
}
