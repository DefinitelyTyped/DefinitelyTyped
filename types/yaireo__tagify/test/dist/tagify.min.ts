import Tagify = require("@yaireo/tagify/dist/tagify.min");
import type { TagifySettings } from "@yaireo/tagify/dist/tagify.min";

const settings: TagifySettings = {
    maxTags: 5,
};

const inputElement = document.createElement("input");
export const tagify = new Tagify(inputElement, settings);
