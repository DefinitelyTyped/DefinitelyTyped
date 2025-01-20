export as namespace skate;

// Public API: mixins
export { withChildren, withComponent, withContext, withLifecycle, withRenderer, withUpdate } from "./api";

// Public API: utils
export { define, emit, link, name, prop, props, shadow } from "./api";

// Public types ( Unfortunately TS doesn't have Opaque Types like Flow )
export {
    ComponentProps,
    Constructor,
    CustomElement,
    PropOptions,
    Renderer,
    WithChildren,
    WithComponent,
    WithContext,
    WithLifecycle,
    WithRenderer,
    WithUpdate,
} from "./types";
