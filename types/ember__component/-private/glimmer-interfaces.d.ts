// NOTE: this is a bare-minimum subset of the definitions of the types in
// `@glimmer/interfaces`, supplied to make the public types in this package
// accurate.

// This is only present to "brand" the type, and it brands it in a way that
// matches [the implementation][1], which *also* uses it as a type-only brand.
//
// [1]: https://github.com/glimmerjs/glimmer-vm/blob/d6d776cf3797dafa923bcdad47e1897231ef6539/packages/%40glimmer/interfaces/lib/managers/capabilities.d.ts#L1
// tslint:disable-next-line:strict-export-declare-modifiers
declare const CAPABILITIES: unique symbol;

export interface Capabilities {
  [CAPABILITIES]: true;
}

export interface Arguments {
  positional: readonly unknown[];
  named: Record<string, unknown>;
}

export interface ComponentCapabilitiesVersions {
  '3.4': {
    asyncLifecycleCallbacks?: boolean;
    destructor?: boolean;
  };

  '3.13': {
    asyncLifecycleCallbacks?: boolean;
    destructor?: boolean;
    updateHook?: boolean;
  };
}

export interface ComponentCapabilities extends Capabilities {
  asyncLifeCycleCallbacks: boolean;
  destructor: boolean;
  updateHook: boolean;
}

export interface ComponentManager<ComponentStateBucket> {
  capabilities: ComponentCapabilities;
  createComponent(factory: object, args: Arguments): ComponentStateBucket;
  getContext(instance: ComponentStateBucket): unknown;
}
