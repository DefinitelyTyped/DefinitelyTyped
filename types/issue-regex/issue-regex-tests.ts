import issueRegex = require('issue-regex');

// $ExpectType RegExp
issueRegex();
'Fixes #143 and avajs/ava#1023'.match(issueRegex());
