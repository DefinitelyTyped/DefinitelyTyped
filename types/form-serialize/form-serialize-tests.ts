import serialize = require("form-serialize");

const form = document.createElement("form");
serialize(form, { hash: true }); // $ExpectType ResultHash
serialize(form, true); // $ExpectType ResultHash
serialize(form, { hash: false }); // $ExpectType string
serialize(form, false); // $ExpectType string
serialize(form); // $ExpectType string

interface CustomResult {
  foo: string;
}

// $ExpectType CustomResult
serialize(form, {
  serializer: (): CustomResult => ({ foo: "bar" })
});
