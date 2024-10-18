import * as evilDns from "evil-dns";

const validDomain = "example.com"; // Example domain used for test purposes, see https://www.rfc-editor.org/rfc/rfc2606
const validIP = "192.0.2.1"; // Example IP used for test purposes, see https://www.rfc-editor.org/rfc/rfc5737
const validRegExp = new RegExp(/([^.]+\.)?example\.com/);
const invalidValue = 1;

// $ExpectType void
evilDns.add(validDomain, validIP);

// $ExpectType void
evilDns.add(validRegExp, validIP);

// @ts-expect-error
evilDns.add(invalidValue, validIP);

// @ts-expect-error
evilDns.add(validDomain, invalidValue);

// $ExpectType void
evilDns.remove(validDomain, validIP);

// $ExpectType void
evilDns.remove(validRegExp, validIP);

// $ExpectType void
evilDns.remove(validDomain);

// $ExpectType void
evilDns.remove(validRegExp);

// @ts-expect-error
evilDns.remove(invalidValue, validIP);

// @ts-expect-error
evilDns.remove(validRegExp, invalidValue);

// @ts-expect-error
evilDns.remove(invalidValue);

// $ExpectType void
evilDns.clear();

// $ExpectType domainList
evilDns.domains;
