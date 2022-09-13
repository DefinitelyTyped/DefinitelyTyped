import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * A plugin that provides special characters for the "Currency" category.
 *
 *    ClassicEditor
 *      .create( {
 *        plugins: [ ..., SpecialCharacters, SpecialCharactersCurrency ],
 *      } )
 *      .then( ... )
 *      .catch( ... );
 */
export default class SpecialCharactersCurrency extends Plugin {
    static readonly pluginName: 'SpecialCharactersCurrency';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersCurrency: SpecialCharactersCurrency;
    }
}
