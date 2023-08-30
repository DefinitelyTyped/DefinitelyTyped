import { listen, prefetch, prerender } from "quicklink";

// $ExpectType () => void
listen();

listen({
    timeout: 4000,
});

listen({
    el: document.getElementById("carousel")!,
});

prefetch("2.html");

prefetch(["2.html", "3.html", "4.js"]);

prefetch(["2.html", "3.html", "4.js"], true);

prerender("2.html");

prerender(["2.html", "3.html", "4.js"]);

listen({ priority: true });

listen({
    origins: [
        // add mine
        "my-website.com",
        "api.my-website.com",
        // add third-parties
        "other-website.com",
        "example.com",
        // ...
    ],
});

listen({
    origins: true,
});

listen({
    origins: [],
});

listen({
    ignores: [
        /\/api\/?/,
        uri => uri.includes(".zip"),
        (uri, elem) => elem.hasAttribute("noprefetch"),
    ],
});

listen({
    ignores: [
        uri => uri.includes("#"),
    ],
});

prefetch(["1.html", "2.html"]).catch(err => {
    // Handle own errors
});
