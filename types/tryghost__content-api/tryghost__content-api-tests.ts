import GhostContentAPI, { MakeRequestOptions } from "@tryghost/content-api";

// $ExpectType (options: MakeRequestOptions) => Promise<any>
const makeRequest = (options: MakeRequestOptions) => {
    const data: any = {
        data: {
            posts: [{ id: 1 }],
        },
    };
    return Promise.resolve(data);
};

const api = new GhostContentAPI({ url: "test", version: "v3", key: "", makeRequest }); // $ExpectType GhostAPI

const pagesBrowsePromise = api.pages.browse(); // $ExpectType Promise<PostsOrPages>

pagesBrowsePromise.then(pages => {
    api.pages.read(pages[0], { include: "authors" }); // $ExpectType Promise<PostOrPage>
});

const tagsBrowsePromise = api.tags.browse(); // $ExpectType Promise<Tags>

tagsBrowsePromise.then(tags => {
    const tagPromise = api.tags.read(tags[0]); // $ExpectType Promise<Tag>

    tagPromise.then(tag => {
        if (tag.og_title) {
            tag.og_title; // $ExpectType string
        }
    });
});
