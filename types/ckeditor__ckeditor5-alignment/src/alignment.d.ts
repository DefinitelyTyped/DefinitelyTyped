import { Plugin } from '@ckeditor/ckeditor5-core';
import AlignmentEditing, { AlignmentFormat } from './alignmentediting';
import AlignmentUI from './alignmentui';

/**
 * The text alignment plugin.
 *
 * For a detailed overview, check the {@glink features/text-alignment Text alignment feature documentation}
 * and the {@glink api/alignment package page}.
 *
 * This is a "glue" plugin which loads the {@link module:alignment/alignmentediting~AlignmentEditing} and
 * {@link module:alignment/alignmentui~AlignmentUI} plugins.
 */
export default class Alignment extends Plugin {
    static readonly requires: [typeof AlignmentEditing, typeof AlignmentUI];
    static readonly pluginName: 'Alignment';
}

export interface AlignmentConfig {
    options: Array<AlignmentFormat['name'] | AlignmentFormat>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Alignment: Alignment;
    }
}
