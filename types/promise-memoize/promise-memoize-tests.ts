import promiseMemoize = require('promise-memoize');

async function lastPosts(n: number) {
    return n + 1;
}

const cachedLastPosts = promiseMemoize(lastPosts, {maxAge: 60000});

// Later...
cachedLastPosts(10).then(posts => {
    posts;
});

cachedLastPosts.clear();
