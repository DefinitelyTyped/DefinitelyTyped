import View from '../view';

/**
 * A decorator that brings the possibility to temporarily disable CSS transitions using
 * {@link module:ui/view~View} methods. It is helpful when, for instance, the transitions should not happen
 * when the view is first displayed but they should work normal in other cases.
 *
 * The methods to control the CSS transitions are:
 * * `disableCssTransitions()` – Adds the `.ck-transitions-disabled` class to the
 * {@link module:ui/view~View#element view element}.
 * * `enableCssTransitions()` – Removes the `.ck-transitions-disabled` class from the
 * {@link module:ui/view~View#element view element}.
 *
 * **Note**: This helper extends the {@link module:ui/view~View#template template} and must be used **after**
 * {@link module:ui/view~View#setTemplate} is called:
 *
 *    import injectCssTransitionDisabler from '@ckeditor/ckeditor5-ui/src/bindings/injectcsstransitiondisabler';
 *
 *    class MyView extends View {
 *      constructor() {
 *        super();
 *
 *        // ...
 *
 *        this.setTemplate( { ... } );
 *
 *        // ...
 *
 *        injectCssTransitionDisabler( this );
 *
 *        // ...
 *      }
 *    }
 *
 * The usage comes down to:
 *
 *    const view = new MyView();
 *
 *    // ...
 *
 *    view.disableCssTransitions();
 *    view.show();
 *    view.enableCssTransitions();
 */
export default function injectCssTransitionDisabler(view: View): void;
