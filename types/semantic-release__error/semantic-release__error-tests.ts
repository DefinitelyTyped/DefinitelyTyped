import SemanticReleaseError = require('@semantic-release/error');

new SemanticReleaseError();
new SemanticReleaseError('I am error');
new SemanticReleaseError('I am error', 'ECODE');
new SemanticReleaseError('I am error', 'ECODE', 'Some details');
