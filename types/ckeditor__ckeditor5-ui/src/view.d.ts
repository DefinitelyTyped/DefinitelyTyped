import { ViewDocument } from '@ckeditor/ckeditor5-engine';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { Emitter as DomEmitter } from '@ckeditor/ckeditor5-utils/src/dom/emittermixin';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Template, { BindChain as TemplateBindChain, TemplateDefinition } from './template';
import ViewCollection from './viewcollection';

/**
 * The basic view class, which represents an HTML element created out of a
 * {@link module:ui/view~View#template}. Views are building blocks of the user interface and handle
 * interaction
 *
 * Views {@link module:ui/view~View#registerChild aggregate} children in
 * {@link module:ui/view~View#createCollection collections} and manage the life cycle of DOM
 * listeners e.g. by handling rendering and destruction.
 *
 * See the {@link module:ui/template~TemplateDefinition} syntax to learn more about shaping view
 * elements, attributes and listeners.
 *
 *    class SampleView extends View {
 *      constructor( locale ) {
 *        super( locale );
 *
 *        const bind = this.bindTemplate;
 *
 *        // Views define their interface (state) using observable attributes.
 *        this.set( 'elementClass', 'bar' );
 *
 *        this.setTemplate( {
 *          tag: 'p',
 *
 *          // The element of the view can be defined with its children.
 *          children: [
 *            'Hello',
 *            {
 *              tag: 'b',
 *              children: [ 'world!' ]
 *            }
 *          ],
 *          attributes: {
 *            class: [
 *              'foo',
 *
 *              // Observable attributes control the state of the view in DOM.
 *              bind.to( 'elementClass' )
 *            ]
 *          },
 *          on: {
 *            // Views listen to DOM events and propagate them.
 *            click: bind.to( 'clicked' )
 *          }
 *        } );
 *      }
 *    }
 *
 *    const view = new SampleView( locale );
 *
 *    view.render();
 *
 *    // Append <p class="foo bar">Hello<b>world</b></p> to the <body>
 *    document.body.appendChild( view.element );
 *
 *    // Change the class attribute to <p class="foo baz">Hello<b>world</b></p>
 *    view.elementClass = 'baz';
 *
 *    // Respond to the "click" event in DOM by executing a custom action.
 *    view.on( 'clicked', () => {
 *      console.log( 'The view has been clicked!' );
 *    } );
 */
export default class View implements DomEmitter, Observable {
    /**
     * Creates an instance of the {@link module:ui/view~View} class.
     */
    constructor(locale?: Locale);
    /**
     * An HTML element of the view. `null` until {@link #render rendered}
     * from the {@link #template}.
     *
     *    class SampleView extends View {
     *      constructor() {
     *        super();
     *
     *        // A template instance the #element will be created from.
     *        this.setTemplate( {
     *          tag: 'p'
     *
     *          // ...
     *        } );
     *      }
     *    }
     *
     *    const view = new SampleView();
     *
     *    // Renders the #template.
     *    view.render();
     *
     *    // Append the HTML element of the view to <body>.
     *    document.body.appendChild( view.element );
     *
     * **Note**: The element of the view can also be assigned directly:
     *
     *    view.element = document.querySelector( '#my-container' );
     */
    element?: HTMLElement | null;
    /**
     * Set `true` when the view has already been {@link module:ui/view~View#render rendered}.
     */
    get isRendered(): boolean;
    protected set isRendered(value: boolean);
    /**
     * A set of tools to localize the user interface.
     */
    readonly locale?: Locale;
    /**
     * Shorthand for {@link module:utils/locale~Locale#t}.
     *
     * Note: If {@link #locale} instance hasn't been passed to the view this method may not
     * be available.
     */
    readonly t: Locale['t'] | undefined;
    /**
     * Shorthand for {@link module:ui/template~Template.bind}, a binding
     * {@link module:ui/template~BindChain interface} pre–configured for the view instance.
     *
     * It provides {@link module:ui/template~BindChain#to `to()`} and
     * {@link module:ui/template~BindChain#if `if()`} methods that initialize bindings with
     * observable attributes and attach DOM listeners.
     *
     *    class SampleView extends View {
     *      constructor( locale ) {
     *        super( locale );
     *
     *        const bind = this.bindTemplate;
     *
     *        // These {@link module:utils/observablemixin~Observable observable} attributes will control
     *        // the state of the view in DOM.
     *        this.set( {
     *          elementClass: 'foo',
     *           isEnabled: true
     *         } );
     *
     *        this.setTemplate( {
     *          tag: 'p',
     *
     *          attributes: {
     *            // The class HTML attribute will follow elementClass
     *            // and isEnabled view attributes.
     *            class: [
     *              bind.to( 'elementClass' )
     *              bind.if( 'isEnabled', 'present-when-enabled' )
     *            ]
     *          },
     *
     *          on: {
     *            // The view will fire the "clicked" event upon clicking <p> in DOM.
     *            click: bind.to( 'clicked' )
     *          }
     *        } );
     *      }
     *    }
     */
    readonly bindTemplate: TemplateBindChain;
    /**
     * Creates a new collection of views, which can be used as
     * {@link module:ui/template~Template#children} of this view.
     *
     *    class SampleView extends View {
     *      constructor( locale ) {
     *        super( locale );
     *
     *        const child = new ChildView( locale );
     *        this.items = this.createCollection( [ child ] );
     *
     *        this.setTemplate( {
     *          tag: 'p',
     *
     *          // `items` collection will render here.
     *          children: this.items
     *        } );
     *      }
     *    }
     *
     *    const view = new SampleView( locale );
     *    view.render();
     *
     *    // It will append <p><child#element></p> to the <body>.
     *    document.body.appendChild( view.element );
     */
    createCollection(views?: Iterable<View>): ViewCollection;
    /**
     * Registers a new child view under the view instance. Once registered, a child
     * view is managed by its parent, including {@link #render rendering}
     * and {@link #destroy destruction}.
     *
     * To revert this, use {@link #deregisterChild}.
     *
     *    class SampleView extends View {
     *      constructor( locale ) {
     *        super( locale );
     *
     *        this.childA = new SomeChildView( locale );
     *        this.childB = new SomeChildView( locale );
     *
     *        this.setTemplate( { tag: 'p' } );
     *
     *        // Register the children.
     *        this.registerChild( [ this.childA, this.childB ] );
     *      }
     *
     *      render() {
     *        super.render();
     *
     *        this.element.appendChild( this.childA.element );
     *        this.element.appendChild( this.childB.element );
     *      }
     *    }
     *
     *    const view = new SampleView( locale );
     *
     *    view.render();
     *
     *    // Will append <p><childA#element><b></b><childB#element></p>.
     *    document.body.appendChild( view.element );
     *
     * **Note**: There's no need to add child views if they're already referenced in the
     * {@link #template}:
     *
     *    class SampleView extends View {
     *      constructor( locale ) {
     *        super( locale );
     *
     *        this.childA = new SomeChildView( locale );
     *        this.childB = new SomeChildView( locale );
     *
     *        this.setTemplate( {
     *          tag: 'p',
     *
     *          // These children will be added automatically. There's no
     *          // need to call {@link #registerChild} for any of them.
     *          children: [ this.childA, this.childB ]
     *        } );
     *      }
     *
     *      // ...
     *    }
     */
    registerChild(children: View | Iterable<View>): void;
    /**
     * The opposite of {@link #registerChild}. Removes a child view from this view instance.
     * Once removed, the child is no longer managed by its parent, e.g. it can safely
     * become a child of another parent view.
     *
     * @see #registerChild
     */
    deregisterChild(children: View | Iterable<View>): void;
    /**
     * Sets the {@link #template} of the view with with given definition.
     *
     * A shorthand for:
     *
     *    view.setTemplate( definition );
     *
     */
    setTemplate(definition: TemplateDefinition): void;
    get template(): Template | false | undefined;
    protected set template(value: Template | false | undefined);
    /**
     * {@link module:ui/template~Template.extend Extends} the {@link #template} of the view with
     * with given definition.
     *
     * A shorthand for:
     *
     *    Template.extend( view.template, definition );
     *
     * **Note**: Is requires the {@link #template} to be already set. See {@link #setTemplate}.
     */
    extendTemplate(definition: Partial<TemplateDefinition>): void;
    /**
     * Recursively renders the view.
     *
     * Once the view is rendered:
     * * the {@link #element} becomes an HTML element out of {@link #template},
     * * the {@link #isRendered} flag is set `true`.
     *
     * **Note**: The children of the view:
     * * defined directly in the {@link #template}
     * * residing in collections created by the {@link #createCollection} method,
     * * and added by {@link #registerChild}
     * are also rendered in the process.
     *
     * In general, `render()` method is the right place to keep the code which refers to the
     * {@link #element} and should be executed at the very beginning of the view's life cycle.
     *
     * It is possible to {@link module:ui/template~Template.extend} the {@link #template} before
     * the view is rendered. To allow an early customization of the view (e.g. by its parent),
     * such references should be done in `render()`.
     *
     *    class SampleView extends View {
     *      constructor() {
     *        this.setTemplate( {
     *          // ...
     *        } );
     *      },
     *
     *      render() {
     *        // View#element becomes available.
     *        super.render();
     *
     *        // The "scroll" listener depends on #element.
     *        this.listenTo( window, 'scroll', () => {
     *          // A reference to #element would render the #template and make it non-extendable.
     *          if ( window.scrollY > 0 ) {
     *            this.element.scrollLeft = 100;
     *          } else {
     *            this.element.scrollLeft = 0;
     *          }
     *        } );
     *      }
     *    }
     *
     *    const view = new SampleView();
     *
     *    // Let's customize the view before it gets rendered.
     *    view.extendTemplate( {
     *      attributes: {
     *        class: [
     *          'additional-class'
     *        ]
     *      }
     *    } );
     *
     *    // Late rendering allows customization of the view.
     *    view.render();
     */
    render(): void;
    /**
     * Recursively destroys the view instance and child views added by {@link #registerChild} and
     * residing in collections created by the {@link #createCollection}.
     *
     * Destruction disables all event listeners:
     * * created on the view, e.g. `view.on( 'event', () => {} )`,
     * * defined in the {@link #template} for DOM events.
     */
    destroy(): void;

    enableCssTransitions?(): void;
    disableCssTransitions?(): void;

    set(...args: [option: Record<string, unknown>] | [name: string, value: unknown] | [name: string]): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
    on<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
        },
    ): void;
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
        },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    fire<K extends keyof HTMLElementEventMap>(name: K, event: HTMLElementEventMap[K]): unknown;
    fire(event: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(...events: string[]): void;
    stopDelegating(event?: string, emitter?: DomEmitter): void;
    listenTo<K extends keyof HTMLElementEventMap, E extends Emitter | Node | Window | ViewDocument>(
        emitter: E,
        event: K,
        callback: (this: this, info: EventInfo<E, K>, event: HTMLElementEventMap[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
        },
    ): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<K extends keyof HTMLElementEventMap, E extends Emitter | Node | Window | ViewDocument>(
        emitter?: E,
        event?: K,
        callback?: (this: this, info: EventInfo<E, K>, event: HTMLElementEventMap[K]) => void,
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
}
