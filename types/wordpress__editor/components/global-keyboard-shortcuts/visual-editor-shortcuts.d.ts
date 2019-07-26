import { ComponentType } from '@wordpress/element';

declare namespace VisualEditorGlobalKeyboardShortcuts {
    interface Props {
        children?: never;
    }
}
declare const VisualEditorGlobalKeyboardShortcuts: ComponentType<VisualEditorGlobalKeyboardShortcuts.Props>;

/**
 * @deprecated
 */
export const EditorGlobalKeyboardShortcuts: typeof VisualEditorGlobalKeyboardShortcuts;

export default VisualEditorGlobalKeyboardShortcuts;
