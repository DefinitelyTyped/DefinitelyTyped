import * as React from "react"
import { createFragmentContainer, createRefetchContainer, graphql, RelayProp } from "react-relay/modern"

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
                // refetch: () => {},
                // loadMore: () => {},
                // refetchConnection: () => {},
            }
        }
        return <ArtworkContainer {...props} />
    }
}

interface ArtistProps {
    artist: {
        name: string
        hometown: string
        artworkCount: string
    },
    relay: RelayProp
}

class Artist extends React.Component<ArtistProps, null> {
    render() {
        return (
            <a href={`/artists/${this.props.relay.variables.artistId}`}>
                {this.props.artist.name}
            </a>
        )
    }
}

const query = graphql`
    query artist_artworks_Query($artistId: String!, $artworkCount: String, $counter: String) {
        artworks {
        ...artist_artworks
        }
    }
`

const ArtistContainer = createRefetchContainer(Artist, graphql`
    fragment artist on Artist {
        name
    }
`,
query
)


class MockedArtist extends React.Component<null, null> {
    render() {
        const props = {
            artist: {
                name: "banksy",
                hometown: "Pittsburgh, Pennsylvania",
                artworkCount: "121",
            },
            relay: {
                route: {
                    name: "banksy"
                },
                variables: {
                    artistId: "banksy",
                },
                refetch: () => {},
            }
        }
        return <ArtistContainer {...props} />
    }
}
