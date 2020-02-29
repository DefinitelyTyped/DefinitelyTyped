import GhostContentAPI, { PostOrPage } from '@tryghost/content-api';

const api = GhostContentAPI({ url: 'test', version: 'v3', key: '' }); // $ExpectType GhostAPI

const pagesBrowsePromise = api.pages.browse(); // $ExpectType Promise<MetaArray<PostOrPage>>

pagesBrowsePromise.then(pages => {
    api.pages.read(pages[0], { include: 'authors' }); // $ExpectType Promise<PostOrPage>
});
