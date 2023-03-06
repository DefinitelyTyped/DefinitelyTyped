import Model from '@ckeditor/ckeditor5-engine/src/model/model';

/**
 * Injects a table caption post-fixer into the model.
 *
 * The role of the table caption post-fixer is to ensure that the table with caption have the correct structure
 * after a {@link module:engine/model/model~Model#change `change()`} block was executed.
 *
 * The correct structure means that:
 *
 * * If there are many caption model element, they are merged into one model.
 * * A final, merged caption model is placed at the end of the table.
 */
export default function injectTableCaptionPostFixer(model: Model): void;
