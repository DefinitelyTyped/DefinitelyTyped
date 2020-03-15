import c14n from 'xml-c14n';

const canonizer = c14n().createCanonicaliser(
  'http://www.w3.org/2001/10/xml-exc-c14n#',
);
