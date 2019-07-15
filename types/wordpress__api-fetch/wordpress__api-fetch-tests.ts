import apiFetch, { Middleware } from "@wordpress/api-fetch";

interface Post {
    title: string;
    timestamp: number;
}

async function foo() {
    apiFetch<Post[]>({ path: "/wp/v2/posts" }).then(posts =>
        posts.map(({ title, timestamp }) => `Post "${title}" at ${timestamp}`)
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
apiFetch.use(apiFetch.createRootURLMiddleware("https://foo.bar/wp-json"));

apiFetch.setFetchHandler(options => {
    const { url, path, data, method } = options;

    return fetch(url || path || "", {
        method,
        body: JSON.stringify(data)
    });
});
