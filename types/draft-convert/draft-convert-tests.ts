import { convertToHTML, convertFromHTML } from 'draft-convert';

let html: string = "<p>Hello World</p>";
let contentState: any = convertFromHTML(html);
let reHtml: string = convertToHTML(contentState);
