import * as React from "react";
import {
    QueryRenderer as CompatQueryRenderer,
    createFragmentContainer as createFragmentContainerCompat,
    commitMutation as commitMutationCompat,
    CompatEnvironment,
    RelayPaginationProp as RelayPaginationPropCompat,
} from "react-relay/compat";

import { configs, mutation, optimisticResponse } from "./react-relay-tests";

// testting compat mutation with classic environment
function markNotificationAsReadCompat(environment: CompatEnvironment, source: string, storyID: string) {
    const variables = {
        input: {
            source,
            storyID,
        },
    };

    commitMutationCompat(environment, {
        configs,
        mutation,
        optimisticResponse,
        variables,
        onCompleted: (response, errors) => {
            console.log("Response received from server.");
        },
        onError: err => console.error(err),
        updater: (store, data) => {
            const field = store.get(storyID);
            if (field) {
                field.setValue(data.story, "story");
            }
        },
    });
}

interface CompatProps {
    relay: RelayPaginationPropCompat;
}

class CompatComponent extends React.Component<CompatProps> {
    markNotificationAsRead(source: string, storyID: string) {
        markNotificationAsReadCompat(this.props.relay.environment, source, storyID);
    }

    render() {
        return <div />;
    }
}

export const CompatContainer = createFragmentContainerCompat(CompatComponent, {});
