import remark = require("remark");
import remarkOEmbed = require("remark-oembed");

remark.remark().use(remarkOEmbed);
remark.remark().use(remarkOEmbed, {
    jsx: true,
    asyncImg: true,
    syncWidget: true,
});
