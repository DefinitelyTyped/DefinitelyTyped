export interface ReactFundamentalComponentInstance<C, H> {
  currentFiber: {
    [key: string]: any;
  };
  instance: unknown;
  prevProps: null | {
    [key: string]: any;
  };
  props: {
    [key: string]: any;
  };
  impl: ReactFundamentalImpl<C, H>;
  state: {
    [key: string]: any;
  };
}

export interface ReactFundamentalImpl<C, H> {
  displayName: string;
  reconcileChildren: boolean;
  getInitialState?: ((props: {
    [key: string]: any;
  }) => {
    [key: string]: any;
  }) | undefined;
  getInstance: (context: C, props: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => H;
  getServerSideString?: ((context: C, props: {
    [key: string]: any;
  }) => string) | undefined;
  getServerSideStringClose?: ((context: C, props: {
    [key: string]: any;
  }) => string) | undefined;
  onMount: (context: C, instance: unknown, props: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => void;
  shouldUpdate?: ((context: C, prevProps: null | {
    [key: string]: any;
  }, nextProps: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => boolean) | undefined;
  onUpdate?: ((context: C, instance: unknown, prevProps: null | {
    [key: string]: any;
  }, nextProps: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => void) | undefined;
  onUnmount?: ((context: C, instance: unknown, props: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => void) | undefined;
  onHydrate?: ((context: C, props: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => boolean) | undefined;
  onFocus?: ((context: C, props: {
    [key: string]: any;
  }, state: {
    [key: string]: any;
  }) => boolean) | undefined;
}

export interface ReactFundamentalComponent<C, H> {
  $$typeof: symbol | number;
  impl: ReactFundamentalImpl<C, H>;
}

export interface ReactScope {
  $$typeof: symbol | number;
}
