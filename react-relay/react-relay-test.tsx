/// <reference path="../react/react.d.ts" />
/// <reference path="./react-relay.d.ts" />

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
