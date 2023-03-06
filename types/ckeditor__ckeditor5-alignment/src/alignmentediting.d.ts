import { Plugin } from '@ckeditor/ckeditor5-core';
import AlignmentCommand from './alignmentcommand';

/**
 * The alignment editing feature. It introduces the {@link module:alignment/alignmentcommand~AlignmentCommand command} and adds
 * the `alignment` attribute for block elements in the {@link module:engine/model/model~Model model}.
 */
export default class AlignmentEditing extends Plugin {
    static readonly pluginName: 'AlignmentEditing';

    init(): void;
}

/**
 * The alignment configuration format descriptor.
 *
 *  const alignmentFormat = {
 *   name: "right",
 *   className: "my-align-right-class"
 *  }
 */
export interface AlignmentFormat {
    className?: string;
    name: 'left' | 'right' | 'center' | 'justify';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AlignmentEditing: AlignmentEditing;
    }
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        alignment: AlignmentCommand;
    }
}
