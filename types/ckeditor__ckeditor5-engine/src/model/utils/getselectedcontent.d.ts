import DocumentFragment from '../documentfragment';
import DocumentSelection from '../documentselection';
import Model from '../model';
import Selection from '../selection';

/**
 * Gets a clone of the selected content.
 *
 * For example, for the following selection:
 *
 * ```html
 * <p>x</p><quote><p>y</p><h>fir[st</h></quote><p>se]cond</p><p>z</p>
 * ```
 *
 * It will return a document fragment with such a content:
 *
 * ```html
 * <quote><h>st</h></quote><p>se</p>
 * ```
 */
export default function getSelectedContent(model: Model, selection: Selection | DocumentSelection): DocumentFragment;
