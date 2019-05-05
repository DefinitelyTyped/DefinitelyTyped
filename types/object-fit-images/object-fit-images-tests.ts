import objectFitImages from "object-fit-images";

objectFitImages(); // $ExpectType void

const imageByQuerySelector = document.querySelector("img");

if (imageByQuerySelector) {
    objectFitImages(imageByQuerySelector); // $ExpectType void
}

const imagesByTagName = document.getElementsByTagName("img");

if (imagesByTagName) {
    objectFitImages(imagesByTagName); // $ExpectType void
}

const imagesByQuerySelector = document.querySelectorAll("img");

if (imagesByQuerySelector) {
    objectFitImages(imagesByQuerySelector); // $ExpectType void
}

objectFitImages(null); // $ExpectType void

objectFitImages("img"); // $ExpectType void

objectFitImages(true); // $ExpectError

objectFitImages(undefined, {}); // $ExpectType void

objectFitImages(undefined, { watchMQ: true }); // $ExpectType void

objectFitImages(undefined, { foo: false }); // $ExpectError

objectFitImages(undefined, undefined, undefined); // $ExpectError
