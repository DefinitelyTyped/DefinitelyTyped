import Valine = require("valine");

/** # General initialization */
new Valine({
    el: "#vcomments",
    appId: "sldkfheislkdf",
    appKey: "sleifslkdhflsidfjsl",
});

/** Full Configuration test */
new Valine({
    el: "#valine-comments",
    appId: "app-id-string",
    appKey: "app-key-string",
    placeholder: "Write your thoughts here~!",
    path: "window.location.pathname",
    avatar: "mp",
    meta: ["nick", "mail", "link"],
    pageSize: 10,
    lang: "en",
    visitor: true,
    highlight: true,
    avatarForce: false,
    recordIP: false,
    serverURLs: "",
    emojiCDN: "",
    emojiMaps: {},
    enableQQ: false,
    requiredFields: [],
});
