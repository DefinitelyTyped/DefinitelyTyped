import BaseComponent, { GetInstanceFactory, GetOrCreateInstanceFactory } from './base-component';

declare class Offcanvas extends BaseComponent {
    static getInstance: GetInstanceFactory<Offcanvas>;

    /**
     * Static method which allows you to get the offcanvas instance associated with
     *  a DOM element, or create a new one in case it wasn’t initialised
     */
    static getOrCreateInstance: GetOrCreateInstanceFactory<Offcanvas>;

    static jQueryInterface: Offcanvas.jQueryInterface;

    toggle(relatedTarget?: HTMLElement): void;

    show(relatedTarget?: HTMLElement): void;

    hide(): void;
}

declare namespace Offcanvas {
    type jQueryInterface = (config?: 'toggle' | 'show' | 'hide' | 'dispose') => void;

    enum Events {
        show = 'show.bs.offcanvas',

        shown = 'shown.bs.offcanvas',

        hide = 'hide.bs.offcanvas',

        hidden = 'hidden.bs.offcanvas',

        focusin = 'focusin.bs.offcanvas',

        click = 'click.bs.offcanvas',

        clickDismiss = 'click.dismiss.bs.offcanvas',
    }
}

export default Offcanvas;
