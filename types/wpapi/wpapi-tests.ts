// Initialize the client
import * as WPAPI from "wpapi";

const wp = new WPAPI({ endpoint: "http://src.wordpress-develop.dev/wp-json" });

// Callbacks
wp.posts().get((err: Error, data: any) => {
    if (err) {
        // handle err
    }
    // do something with the returned posts
});

// Promises
wp
    .posts()
    .then((data: any) => {
        // do something with the returned posts
    })
    .catch((err: Error) => {
        // handle error
    });

// Auto-discover
const apiPromise = WPAPI.discover("http://my-site.com");
apiPromise.then(site => {
    // If default routes were detected, they are now available
    site.posts().then((posts: any[]) => {}); // etc

    // If custom routes were detected, they can be accessed via .namespace()
    // Custom routes have different methods to generate requests, so .authors()
    // does not necessarily exist. You have use force type <WPRequest> or 'as
    // Request'
    (site.namespace("myplugin/v1").authors() as WPAPI.WPRequest).then(
        (authors: any[]) => {
            /* ... */
        }
    );

    // Namespaces can be saved out to variables:
    const myplugin = site.namespace("myplugin/v1");
    myplugin
        .authors()
        .id(7)
        .then((author: any) => {
            /* ... */
        });
});

// Authenticating with Auto-Discovery
const apiPromise2 = WPAPI.discover("http://my-site.com").then(site => {
    return site.auth({
        username: "admin",
        password: "always use secure passwords"
    });
});

apiPromise2.then(site => {
    // site is now configured to use authentication
});

// You must authenticate to be able to POST (create) a post
const wp2 = new WPAPI({
    endpoint: "http://your-site.com/wp-json",
    // This assumes you are using basic auth, as described further below
    username: "someusername",
    password: "password"
});
wp2
    .posts()
    .create({
        // "title" and "content" are the only required properties
        title: "Your Post Title",
        content: "Your post content",
        // Post will be created as a draft by default if a specific "status"
        // is not specified
        status: "publish"
    })
    .then((response: any) => {
        // "response" will hold all properties of your newly-created post,
        // including the unique `id` the post was assigned on creation
    });

// You must authenticate to be able to PUT (update) a post
// .id() must be used to specify the post we are updating
wp2
    .posts()
    .id(2501)
    .update({
        // Update the title
        title: "A Better Title",
        // Set the post live (assuming it was "draft" before)
        status: "publish"
    })
    .then((response: any) => {});

// Custom routes

const site = new WPAPI({ endpoint: "http://www.yoursite.com/wp-json" });
const myCustomResource = site.registerRoute("myplugin/v1", "/author/(?P<id>)");
myCustomResource()
    .id(17)
    .then((response: any) => {}); // => myplugin/v1/author/17
