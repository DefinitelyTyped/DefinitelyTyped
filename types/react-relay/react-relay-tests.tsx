import * as React from "react"
import * as Relay from "react-relay"

interface Props {
    text: string
    userId: string
}

interface Response {
}

export default class AddTweetMutation extends Relay.Mutation<Props, Response> {

    getMutation () {
        return Relay.QL`mutation{addTweet}`
    }

    getFatQuery () {
        return Relay.QL`
            fragment on AddTweetPayload {
                tweetEdge
                user
            }
        `
    }

    getConfigs () {
        return [{
            type: "RANGE_ADD",
            parentName: "user",
            parentID: this.props.userId,
            connectionName: "tweets",
            edgeName: "tweetEdge",
            rangeBehaviors: {
                "": "append",
            },
        }]
    }

    getVariables () {
        return this.props
    }
}

interface ArtworkProps {
    artwork: {
        title: string
    },
    relay: Relay.RelayProp,
}

class Artwork extends React.Component<ArtworkProps> {
    render() {
        return (
            <a href={`/artworks/${this.props.relay.variables.artworkID}`}>
                {this.props.artwork.title}
            </a>
        )
    }
}

const ArtworkContainer = Relay.createContainer(Artwork, {
    fragments: {
        artwork: () => Relay.QL`
            fragment on Artwork {
                title
            }
        `
    }
})

class StubbedArtwork extends React.Component {
    render() {
        const props = {
            artwork: { title: "CHAMPAGNE FORMICA FLAG" },
            relay: {
                route: {
                    name: "champagne"
                },
                variables: {
                    artworkID: "champagne-formica-flag",
                },
                setVariables: () => {},
                forceFetch: () => {},
                hasOptimisticUpdate: () => false,
                getPendingTransactions: (): Relay.RelayMutationTransaction[] => undefined,
                commitUpdate: () => {},
            }
        }
        return <ArtworkContainer {...props} />
    }
}
