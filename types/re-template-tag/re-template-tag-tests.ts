import { re } from 're-template-tag';

const regexp: RegExp = re`^foo${'bar'}\/baz$`;

if!(regexp.test("foobar/baz")) {
    throw new Error();
}
