import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * A plugin that provides special characters for the "Mathematical" category.
 *
 *    ClassicEditor
 *      .create( {
 *        plugins: [ ..., SpecialCharacters, SpecialCharactersMathematical ],
 *      } )
 *      .then( ... )
 *      .catch( ... );
 */
export default class SpecialCharactersMathematical extends Plugin {
    static readonly pluginName: 'SpecialCharactersMathematical';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersMathematical: SpecialCharactersMathematical;
    }
}
