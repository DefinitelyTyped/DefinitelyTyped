import unified = require("unified");
import remarkHeadingId = require("remark-heading-id");

unified.unified().use(remarkHeadingId);

const options: remarkHeadingId.RemarkHeadingIdOptions = {};
options.defaults = true;
unified.unified().use(remarkHeadingId, options);
