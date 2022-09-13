import { Editor } from '@ckeditor/ckeditor5-core';
import { Options } from '@ckeditor/ckeditor5-utils/src/dom/position';

/**
 * A helper utility that positions the
 * {@link module:ui/panel/balloon/contextualballoon~ContextualBalloon contextual balloon} instance
 * with respect to the table in the editor content, if one is selected.
 */
export function repositionContextualBalloon(editor: Editor, target: 'cell' | 'table'): void;

/**
 * Returns the positioning options that control the geometry of the
 * {@link module:ui/panel/balloon/contextualballoon~ContextualBalloon contextual balloon} with respect
 * to the selected table in the editor content.
 */
export function getBalloonTablePositionData(editor: Editor): Options;

/**
 * Returns the positioning options that control the geometry of the
 * {@link module:ui/panel/balloon/contextualballoon~ContextualBalloon contextual balloon} with respect
 * to the selected table cell in the editor content.
 */
export function getBalloonCellPositionData(editor: Editor): Options;
