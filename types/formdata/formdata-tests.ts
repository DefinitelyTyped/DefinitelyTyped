/// <reference lib="dom" />

import FormData = require('formdata');

const formData = new FormData();

const error = formData.append('username', 'Chris');
if (error) {
    throw error;
}

const contentType = formData.getContentType();
contentType.toUpperCase();

const emitter = formData.serialize('multipart/form-data');
if (emitter) {
    emitter.addListener('data', data => console.log(data));
}

formData.setNodeChunkedEncoding(true);
