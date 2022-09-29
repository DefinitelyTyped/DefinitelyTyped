import DocumentSelection from '../documentselection';
import Model from '../model';
import Selection from '../selection';

/**
 * Modifies the selection. Currently, the supported modifications are:
 *
 * * Extending. The selection focus is moved in the specified `options.direction` with a step specified in `options.unit`.
 * Possible values for `unit` are:
 *  * `'character'` (default) - moves selection by one user-perceived character. In most cases this means moving by one
 *  character in `String` sense. However, unicode also defines "combing marks". These are special symbols, that combines
 *  with a symbol before it ("base character") to create one user-perceived character. For example, `q̣̇` is a normal
 *  letter `q` with two "combining marks": upper dot (`Ux0307`) and lower dot (`Ux0323`). For most actions, i.e. extending
 *  selection by one position, it is correct to include both "base character" and all of it's "combining marks". That is
 *  why `'character'` value is most natural and common method of modifying selection.
 *  * `'codePoint'` - moves selection by one unicode code point. In contrary to, `'character'` unit, this will insert
 *  selection between "base character" and "combining mark", because "combining marks" have their own unicode code points.
 *  However, for technical reasons, unicode code points with values above `UxFFFF` are represented in native `String` by
 *  two characters, called "surrogate pairs". Halves of "surrogate pairs" have a meaning only when placed next to each other.
 *  For example `𨭎` is represented in `String` by `\uD862\uDF4E`. Both `\uD862` and `\uDF4E` do not have any meaning
 *  outside the pair (are rendered as ? when alone). Position between them would be incorrect. In this case, selection
 *  extension will include whole "surrogate pair".
 *  * `'word'` - moves selection by a whole word.
 *
 * **Note:** if you extend a forward selection in a backward direction you will in fact shrink it.
 *
 * **Note:** Use {@link module:engine/model/model~Model#modifySelection} instead of this function.
 * This function is only exposed to be reusable in algorithms
 * which change the {@link module:engine/model/model~Model#modifySelection}
 * method's behavior.
 */
export default function modifySelection(
    model: Model,
    selection: Selection | DocumentSelection,
    options?: { direction?: 'forward' | 'backward'; unit?: 'character' | 'codePoint' | 'word' },
): void;
