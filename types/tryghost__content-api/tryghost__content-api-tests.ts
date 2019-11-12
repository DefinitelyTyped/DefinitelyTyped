import GhostContentAPI, { PostOrPage } from '@tryghost/content-api';

const api = GhostContentAPI({ url: 'test', version: 'v3', key: '' }); // $ExpectType GhostAPI

let pages: PostOrPage[];
const pagesBrowsePromise = api.pages.browse(); // $ExpectType Promise<PagesObject>

pagesBrowsePromise.then(pageObject => {
    pages = pageObject.pages;

    api.pages.read(pages[0], { include: 'authors' }); // $ExpectType Promise<PostOrPage>
});
