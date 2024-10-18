import { ComponentType } from "react";

declare namespace VisualEditorGlobalKeyboardShortcuts {
    interface Props {
        children?: never | undefined;
    }
}
declare const VisualEditorGlobalKeyboardShortcuts: ComponentType<VisualEditorGlobalKeyboardShortcuts.Props>;

/**
 * @deprecated
 */
export const EditorGlobalKeyboardShortcuts: typeof VisualEditorGlobalKeyboardShortcuts;

export default VisualEditorGlobalKeyboardShortcuts;
