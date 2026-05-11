import "../../";

declare module "../../" {
    /**
     * Mode combinator that can be used to extend a mode with an 'overlay' — a secondary mode is run over the stream,
     * along with the base mode, and can color specific pieces of text without interfering with the base mode.
     */
    function overlayMode(base: Mode<any>, overlay: Mode<any>, combine?: boolean): Mode<any>;
}
