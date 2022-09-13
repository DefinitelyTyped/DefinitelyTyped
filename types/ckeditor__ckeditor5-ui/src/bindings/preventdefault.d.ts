import { TemplateToBinding } from '../template';
import View from '../view';

/**
 * A helper which executes a native `Event.preventDefault()` if the target of an event equals the
 * {@link module:ui/view~View#element element of the view}. It shortens the definition of a
 * {@link module:ui/view~View#template template}.
 *
 *    // In a class extending View.
 *    import preventDefault from '@ckeditor/ckeditor5-ui/src/bindings/preventdefault';
 *
 *    // ...
 *
 *    this.setTemplate( {
 *      tag: 'div',
 *
 *      on: {
 *        // Prevent the default mousedown action on this view.
 *        mousedown: preventDefault( this )
 *      }
 *    } );
 */
export default function preventDefault(view: View): TemplateToBinding;
