import SemanticReleaseError = require('@semantic-release/error');

// test type exports
type SRE = SemanticReleaseError;
type SREC = typeof SemanticReleaseError;

const error = new SemanticReleaseError();
new SemanticReleaseError('I am error');
new SemanticReleaseError('I am error', 'ECODE');
new SemanticReleaseError('I am error', 'ECODE', 'Some details');

error.code; // $ExpectType string | undefined
error.details; // $ExpectType string | undefined
error.name; // $ExpectType "SemanticReleaseError"
error.semanticRelease; // $ExpectType true
