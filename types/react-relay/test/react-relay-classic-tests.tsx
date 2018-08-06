import * as React from "react";
import * as Relay from "react-relay/classic";

import { CompatContainer } from "./react-relay-compat-tests";

interface Props {
    text: string;
    userId: string;
}

export default class AddTweetMutation extends Relay.Mutation<Props, {}> {
    getMutation() {
        return Relay.QL`mutation{addTweet}`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on AddTweetPayload {
                tweetEdge
                user
            }
        `;
    }

    getConfigs() {
        return [
            {
                type: "RANGE_ADD",
                parentName: "user",
                parentID: this.props.userId,
                connectionName: "tweets",
                edgeName: "tweetEdge",
                rangeBehaviors: {
                    "": "append",
                },
            },
        ];
    }

    getVariables() {
        return this.props;
    }
}

interface ArtwokRelayVariables {
    artworkID: string;
}

interface ArtworkProps extends Relay.RelayProps<ArtwokRelayVariables> {
    artwork: {
        title: string;
    };
}

class Artwork extends React.Component<ArtworkProps> {
    render() {
        return <a href={`/artworks/${this.props.relay.variables.artworkID}`}>{this.props.artwork.title}</a>;
    }
}

const ArtworkContainer = Relay.createContainer(Artwork, {
    fragments: {
        artwork: () => Relay.QL`
            fragment on Artwork {
                title
                ${CompatContainer.getFragment("whatever")}
            }
        `,
    },
});

class StubbedArtwork extends React.Component {
    render() {
        const props = {
            artwork: { title: "CHAMPAGNE FORMICA FLAG" },
            relay: {
                route: {
                    name: "champagne",
                },
                variables: {
                    artworkID: "champagne-formica-flag",
                },
                setVariables: () => {},
                forceFetch: () => {},
                hasOptimisticUpdate: () => false,
                getPendingTransactions: (): any => undefined,
                commitUpdate: () => {},
            },
        };
        return <ArtworkContainer {...props} />;
    }
}
