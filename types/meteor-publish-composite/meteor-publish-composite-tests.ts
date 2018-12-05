
import { publishComposite } from 'meteor/reywood:publish-composite';
import User = Meteor.User;
interface IPost { _id: string, authorId: string };
interface IComment { authorId: string };
var Posts: Mongo.Collection<IPost> = new Mongo.Collection<IPost>('Posts');
var Comments: Mongo.Collection<IComment> = new Mongo.Collection<IComment>('Comments');

// Server
publishComposite('topTenPosts', {
    find: function(): Mongo.Cursor<IPost> {
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
publishComposite('postsByUser', function(userId, limit) {
    return {
        find: function() {
            // Find posts made by user. Note arguments for callback function
            // being used in query.
            return Posts.find({ authorId: userId }, { limit: limit });
        },
        children: [ 
						{
								// Set a collection for an "alternative client side collections" as shown
								// here: http://braindump.io/meteor/2014/09/20/publishing-to-an-alternative-clientside-collection-in-meteor.html
								collectionName: 'user-post-comments',
								find: function(post) {
										// Find all comments from these posts too
										return Comments.find( { postId: post._id } );
								}
						},
        ]
    }
});
