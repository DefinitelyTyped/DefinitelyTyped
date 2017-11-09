import * as scraper from "website-scraper";

scraper({
    urls: [
        "http://nodejs.org/",
        { url: "http://nodejs.org/about", filename: "about.html" },
        { url: "http://blog.nodejs.org/", filename: "blog.html" }
    ],
    directory: "/path/to/save",
    subdirectories: [
        { directory: "img", extensions: [".jpg", ".png", ".svg"] },
        { directory: "js", extensions: [".js"] },
        { directory: "css", extensions: [".css"] }
    ],
    sources: [
        { selector: "img", attr: "src" },
        { selector: "link[rel=\"stylesheet\"]", attr: "href" },
        { selector: "script", attr: "src" }
    ],
    request: {
        headers: {
            "User-Agent":
            "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D)\
             AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
        }
    }
}).then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.log(err);
});
