import { Plugin } from '@ckeditor/ckeditor5-core';
import FindAndReplaceEditing from './findandreplaceediting';
import FindAndReplaceUI from './findandreplaceui';

export default class FindAndReplace extends Plugin {
    static readonly requires: [typeof FindAndReplaceEditing, typeof FindAndReplaceUI];
    static readonly pluginName: 'FindAndReplace';
    init(): void;
}
