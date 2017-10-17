// Type definitions for react-relay/compat 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>, Matt Martin <https://github.com/voxmatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { RelayRuntimeTypes } from 'relay-runtime';
import * as ReactRelayModernTypes from './lib/react-relay-modern';
import * as ReactRelayCompatTypes from './lib/react-relay-compat';

// ~~~~~~~~~~~~~~~~~~~~~
// React-Relay Compat
// ~~~~~~~~~~~~~~~~~~~~~
export import applyOptimisticMutation = ReactRelayCompatTypes.applyUpdate;
export import commitMutation = ReactRelayCompatTypes.commitUpdate;
export import createFragmentContainer = ReactRelayCompatTypes.createContainer;
export import createPaginationContainer = ReactRelayCompatTypes.createContainer;
export import createRefetchContainer = ReactRelayCompatTypes.createContainer;
export import injectDefaultVariablesProvider = ReactRelayCompatTypes.injectDefaultVariablesProvider;
export import QueryRenderer = ReactRelayModernTypes.ReactRelayQueryRenderer;
export import graphql = ReactRelayModernTypes.graphql;
export import fetchQuery = RelayRuntimeTypes.fetchRelayModernQuery;
// exported for convenience
export import CompatTypes = ReactRelayCompatTypes;
