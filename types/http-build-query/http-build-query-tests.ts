import { httpBuildQuery } from 'http-build-query';
const queryString = httpBuildQuery({
  foo: 2,
  bar: "bar"
});
