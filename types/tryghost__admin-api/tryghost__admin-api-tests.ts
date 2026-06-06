import GhostAdminAPI = require("@tryghost/admin-api");

// Accept arbitrary version strings
const api = new GhostAdminAPI({ url: "test", version: "v5.9999", key: "" }); // $ExpectType GhostAPI

const postsBrowsePromise = api.posts.browse(); // $ExpectType Promise<PostsOrPages>

postsBrowsePromise.then((posts) => {
    api.posts.read(posts[0], { include: "authors" }); // $ExpectType Promise<PostOrPageResponse>
});

const tagsBrowsePromise = api.tags.browse(); // $ExpectType Promise<Tags>

tagsBrowsePromise.then((tags) => {
    const tagPromise = api.tags.read(tags[0]); // $ExpectType Promise<TagResponse>

    tagPromise.then((tag) => {
        if (tag.name) {
            tag.name; // $ExpectType string
        }
    });
});

api.webhooks.add({ event: "post.added", target_url: "https://example.com/webhook" }); // $ExpectType Promise<WebhookResponse>
api.webhooks.edit({ ...{ event: "post.published" }, id: "webhook-id" }); // $ExpectType Promise<WebhookResponse>
api.webhooks.delete({ id: "webhook-id" }); // $ExpectType Promise<void>

api.users.browse(); // $ExpectType Promise<Users>
api.users.read({ id: "user-id" }); // $ExpectType Promise<UserResponse>
api.users.edit({ id: "user-id", name: "Test User" }); // $ExpectType Promise<UserResponse>
api.users.delete({ id: "user-id" }); // $ExpectType Promise<void>

api.images.upload({ file: "test.jpg" }); // $ExpectType Promise<any>
api.media.upload({ file: "test-2.png", purpose: "test" }); // $ExpectType Promise<any>

api.site.read(); // $ExpectType Promise<SiteResponse>
