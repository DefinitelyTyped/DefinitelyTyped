import BaseComponent from "./base-component";

declare class Offcanvas extends BaseComponent {
    toggle(relatedTarget: HTMLElement): void;

    show(relatedTarget: HTMLElement): void;

    hide(): void;

    static jQueryInterface: Offcanvas.jQueryInterface;

    // static NAME: 'offcanvas';
}

declare namespace Offcanvas {
    type jQueryInterface = (config?: "toggle" | "show" | "hide" | "dispose") => void;

    enum Events {
        show = "show.bs.offcanvas",

        shown = "shown.bs.offcanvas",

        hide = "hide.bs.offcanvas",

        hidden = "hidden.bs.offcanvas",

        focusin = "focusin.bs.offcanvas",

        click = "click.bs.offcanvas",

        clickDismiss = "click.dismiss.bs.offcanvas",
    }
}

export default Offcanvas;
