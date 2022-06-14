import Content from '@hapi/content';

const parsedContentType = Content.type("application/json; charset=utf-8");

console.log(parsedContentType.mime);
console.log(parsedContentType.charset);
console.log(parsedContentType.boundary);

const parsedContentDisposition = Content.disposition('form-data; name="file"; filename=file.jpg');
console.log(parsedContentDisposition.filename);
console.log(parsedContentDisposition.name);
