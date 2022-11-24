import View from '../view';

/**
 * A handler useful for {@link module:ui/view~View views} working as HTML forms. It intercepts a native DOM
 * `submit` event, prevents the default web browser behavior (navigation and page reload) and
 * fires the `submit` event on a view instead. Such a custom event can be then used by any
 * {@link module:utils/dom/emittermixin~Emitter emitter}, e.g. to serialize the form data.
 *
 *    import submitHandler from '@ckeditor/ckeditor5-ui/src/bindings/submithandler';
 *
 *    // ...
 *
 *    class AnyFormView extends View {
 *      constructor() {
 *        super();
 *
 *        // ...
 *
 *        submitHandler( {
 *          view: this
 *        } );
 *      }
 *    }
 *
 *    // ...
 *
 *    const view = new AnyFormView();
 *
 *    // A sample listener attached by an emitter working with the view.
 *    this.listenTo( view, 'submit', () => {
 *      saveTheFormData();
 *      hideTheForm();
 *    } );
 */
export default function submitHandler(options: { view: View }): void;
