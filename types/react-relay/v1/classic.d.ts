// Type definitions for react-relay/classic 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>, Matt Martin <https://github.com/voxmatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// ~~~~~~~~~~~~~~~~~~~~~
// React-Relay Classic
// ~~~~~~~~~~~~~~~~~~~~~
// kind of gross, but maintains compatability with previous version of types
export {
    ClientMutationID,
    Fragments,
    CreateContainerOpts,
    RelayVariables,
    RelayContainerClass,
    RelayQueryRequestResolve,
    RelayMutationStatus,
    RelayMutationTransaction,
    RelayMutationRequest,
    RelayQueryRequest,
    RelayNetworkLayer,
    DefaultNetworkLayer,
    createContainer,
    injectNetworkLayer,
    isContainer,
    QL,
    Route,
    Mutation,
    Transaction,
    StoreUpdateCallbacks,
    Store,
    RootContainer,
    RootContainerProps,
    Renderer,
    RendererProps,
    RenderStateConfig,
    RenderCallback,
    ReadyStateEvent,
    OnReadyStateChange,
    RelayProp,
} from './lib/react-relay-classic';
