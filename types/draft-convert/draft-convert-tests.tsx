import * as draftConvert from "draft-convert";

const html = "<div>this is a test</div>";
const configFromHtml = {};
const configToHtml = {};

// $ExpectType ContentState
draftConvert.convertFromHTML(html);
const contentState = draftConvert.convertFromHTML(configFromHtml)(html);

// $ExpectType string
draftConvert.convertToHTML(contentState);
draftConvert.convertToHTML(configToHtml)(contentState);
