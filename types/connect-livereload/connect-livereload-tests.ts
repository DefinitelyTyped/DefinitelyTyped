import connect = require("connect");
import livereload = require("connect-livereload");

const app = connect();

// With no options
app.use(livereload());

// With string options
app.use(livereload({
    port: 35729,
    ignore: [".js", ".svg"]
}));

// With plugins
app.use(livereload({
  plugins: ['a']
}));

// With RegExp options
app.use(livereload({
    port: 35729,
    ignore: [/\.js(\?.*)?$/, /\.css(\?.*)?$/]
}));

// With default options
app.use(livereload({
    ignore: [
        /\.js(\?.*)?$/, /\.css(\?.*)?$/, /\.svg(\?.*)?$/, /\.ico(\?.*)?$/, /\.woff(\?.*)?$/,
        /\.png(\?.*)?$/, /\.jpg(\?.*)?$/, /\.jpeg(\?.*)?$/, /\.gif(\?.*)?$/, /\.pdf(\?.*)?$/
    ],

    // include all urls by default
    include: [/.*/],

    // this function is used to determine if the content of `res.write` or `res.end` is html.
    html: function (str) {
        if (!str) return false;
        return /<[:_-\w\s\!\/\=\"\']+>/i.test(str);
    },

    // rules are provided to find the place where the snippet should be inserted.
    // the main problem is that on the server side it can be tricky to determine if a string will be valid html on the client.
    // the function `fn` of the first `match` is executed like this `body.replace(rule.match, rule.fn);`
    // the function `fn` has got the arguments `fn(w, s)` where `w` is the matches string and `s` is the snippet.
    rules: [{
        match: /<\/body>(?![\s\S]*<\/body>)/i,
        fn: prepend
    }, {
        match: /<\/html>(?![\s\S]*<\/html>)/i,
        fn: prepend
    }, {
        match: /<\!DOCTYPE.+?>/i,
        fn: append
    }],

    // port where the script is loaded
    port: 35729,

    // location where the script is provided (not by connect-livereload). Change this e.g. when serving livereload with a proxy.
    src: "http://localhost:35729/livereload.js?snipver=1",

    // Set this option to `true` to set `req.headers['accept-encoding']` to 'identity' (disabling compression)
    disableCompression: false
}));

function prepend(w: string, s: string): string {
    return s + w;
}
function append(w: string, s: string): string {
    return w + s;
}
