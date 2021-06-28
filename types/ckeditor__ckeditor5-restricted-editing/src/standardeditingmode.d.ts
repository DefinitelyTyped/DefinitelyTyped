import { Plugin } from '@ckeditor/ckeditor5-core';
import StandardEditingModeEditing from './standardeditingmodeediting';
import StandardEditingModeUI from './standardeditingmodeui';

export default class StandardEditingMode extends Plugin {
    static readonly pluginName: 'StandardEditingMode';
    static requires: [typeof StandardEditingModeEditing, typeof StandardEditingModeUI];
}
