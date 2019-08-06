import apiFetch, { Middleware, Schema } from '@wordpress/api-fetch';

async function foo() {
    apiFetch<Schema.Post[]>({ path: '/wp/v2/posts' }).then(posts =>
        posts.map(({ date, title }) => `Post "${title.rendered}" at ${date}`)
    );
    const response = await apiFetch({ parse: false });
    if (response.ok) {
        console.log(await response.json());
    }
}

const x: Middleware = async (undefined, next) => {
    const x = await next({});
    return next({});
};

apiFetch.use(apiFetch.fetchAllMiddleware);
apiFetch.use(apiFetch.createRootURLMiddleware('https://foo.bar/wp-json'));

apiFetch.setFetchHandler(options => {
    const { url, path, data, method } = options;

    return fetch(url || path || '', {
        method,
        body: JSON.stringify(data),
    });
});
