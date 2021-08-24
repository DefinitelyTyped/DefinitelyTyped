import * as toTitleCase from 'titlecase';

toTitleCase('this is a test') === 'This Is a Test';
toTitleCase.toTitleCase('this is a test') === 'This Is a Test';
toTitleCase.toLaxTitleCase('this is a test') === 'This is a Test';
