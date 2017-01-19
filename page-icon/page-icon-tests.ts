import * as pageIcon from "page-icon";

const siteUrl = "https://www.facebook.com/";
pageIcon(siteUrl)
    .then(function(icon) {
        // do things with icon object
        console.log(icon);
    })
    .catch(error => {
        console.error(error);
    });

const twUrl = "https://twitter.com";
pageIcon(twUrl, {ext: ".png"})
    .then(icon => {
        if (!icon) {
            return;
        }
        console.log(icon.source, icon.name, icon.data, icon.size, icon.ext, icon.mime);
    })
    .catch(err => {
        console.error(err);
    });
