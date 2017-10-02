// Type definitions for react-relay 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>, Matt Martin <https://github.com/voxmatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { RelayRuntimeTypes } from 'relay-runtime';
import * as ReactRelayModernTypes from './lib/react-relay-modern';

// ~~~~~~~~~~~~~~~~~~~~~
// React-Relay Modern
// ~~~~~~~~~~~~~~~~~~~~~
export import QueryRenderer = ReactRelayModernTypes.ReactRelayQueryRenderer;
export import createFragmentContainer = ReactRelayModernTypes.createFragmentContainer;
export import createPaginationContainer = ReactRelayModernTypes.createPaginationContainer;
export import createRefetchContainer = ReactRelayModernTypes.createRefetchContainer;
export import graphql = ReactRelayModernTypes.graphql;
export import commitLocalUpdate = RelayRuntimeTypes.commitLocalUpdate;
export import commitMutation = RelayRuntimeTypes.commitRelayModernMutation;
export import fetchQuery = RelayRuntimeTypes.fetchRelayModernQuery;
export import requestSubscription = RelayRuntimeTypes.requestRelaySubscription;
// exported for convenience
export import ModernTypes = ReactRelayModernTypes;
