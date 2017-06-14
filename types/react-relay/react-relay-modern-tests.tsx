import * as React from "react"
import { createFragmentContainer, graphql, RelayProp } from "react-relay/modern"

interface Props {
    text: string
    userId: string
}

interface Response {
}

// export default class AddTweetMutation extends Relay.Mutation<Props, Response> {

//     getMutation () {
//         return Relay.QL`mutation{addTweet}`
//     }

//     getFatQuery () {
//         return Relay.QL`
//             fragment on AddTweetPayload {
//                 tweetEdge
//                 user
//             }
//         `
//     }

//     getConfigs () {
//         return [{
//             type: "RANGE_ADD",
//             parentName: "user",
//             parentID: this.props.userId,
//             connectionName: "tweets",
//             edgeName: "tweetEdge",
//             rangeBehaviors: {
//                 "": "append",
//             },
//         }]
//     }

//     getVariables () {
//         return this.props
//     }
// }

interface ArtworkProps {
    artwork: {
        title: string
    },
    relay: RelayProp,
}

class Artwork extends React.Component<ArtworkProps, null> {
    render() {
        return (
            <a href={`/artworks/${this.props.relay.variables.artworkID}`}>
                {this.props.artwork.title}
            </a>
        )
    }
}

const ArtworkContainer = createFragmentContainer(Artwork, graphql`
    fragment artwork on Artwork {
        title
    }
`)

class StubbedArtwork extends React.Component<null, null> {
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
                // setVariables: () => {},
                // forceFetch: () => {},
                // hasOptimisticUpdate: () => false,
                // getPendingTransactions: (): Relay.RelayMutationTransaction[] => undefined,
                // commitUpdate: () => {},
            }
        }
        return <ArtworkContainer {...props} />
    }
}
