/// <reference path="meteor-publish-composite.d.ts" />
/// <reference path="../meteor/meteor.d.ts" />

import User = Meteor.User;
interface IPost { _id : string, authorId : string };
interface IComment { authorId : string };
var Posts : Mongo.Collection<IPost> = new Mongo.Collection<IPost>('Posts');
var Comments : Mongo.Collection<IComment> = new Mongo.Collection<IComment>('Comments');

// Server
Meteor.publishComposite('topTenPosts', {
    find: function() : Mongo.Cursor<IPost> {
        // Find top ten highest scoring posts
        return Posts.find({}, { sort: { score: -1 }, limit: 10 });
    },
    children: [
        {
            find: function(post) {
                // Find post author. Even though we only want to return
                // one record here, we use "find" instead of "findOne"
                // since this function should return a cursor.
                return Meteor.users.find(
                    { _id: post.authorId },
                    { limit: 1, fields: { profile: 1 } });
            }
        },
        {
            find: function(post) {
                // Find top two comments on post
                return Comments.find(
                    { postId: post._id },
                    { sort: { score: -1 }, limit: 2 });
            },
            children: [
                {
                    find: function(comment, post) {
                        // Find user that authored comment.
                        return Meteor.users.find(
                            { _id: comment.authorId },
                            { limit: 1, fields: { profile: 1 } });
                    }
                }
            ]
        }
    ]
});

// Server
Meteor.publishComposite('postsByUser', function(userId, limit) {
    return {
        find: function() {
            // Find posts made by user. Note arguments for callback function
            // being used in query.
            return Posts.find({ authorId: userId }, { limit: limit });
        },
        children: [
            // This section will be similar to that of the previous example.
        ]
    }
});
