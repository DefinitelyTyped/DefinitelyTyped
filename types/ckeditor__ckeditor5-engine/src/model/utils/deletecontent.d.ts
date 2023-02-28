import DocumentSelection from '../documentselection';
import Model from '../model';
import Selection from '../selection';

/**
 * Deletes content of the selection and merge siblings. The resulting selection is always collapsed.
 *
 * **Note:** Use {@link module:engine/model/model~Model#deleteContent} instead of this function.
 * This function is only exposed to be reusable in algorithms
 * which change the {@link module:engine/model/model~Model#deleteContent}
 * method's behavior.
 */
export default function deleteContent(
    model: Model,
    selection: Selection | DocumentSelection,
    options?: { leaveUnmerged?: boolean; doNotResetEntireContent?: boolean; doNotAutoparagraph?: boolean },
): void;
