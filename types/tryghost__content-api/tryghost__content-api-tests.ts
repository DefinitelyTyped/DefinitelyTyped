import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({ url: 'test', version: 'v3', key: '' }); // $ExpectType GhostAPI

const pagesBrowsePromise = api.pages.browse(); // $ExpectType Promise<PostsOrPages>

pagesBrowsePromise.then(pages => {
    api.pages.read(pages[0], { include: 'authors' }); // $ExpectType Promise<PostOrPage>
});
