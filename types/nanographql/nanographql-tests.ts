import gql = require('nanographql');

// TemplateStringArray query test
const templateStringQueryFactory = gql`
query($name: String!) {
    movie (name: $name) {
        releaseDate
    }
}
`;
const templatedQuery = templateStringQueryFactory({ name: 'Back to the Future' });
JSON.parse(templatedQuery);

// string query test
const stringField = 'movie';
const strinQueryFactory = gql(`
    query($name: String!) {
        ${stringField} (name: $name) {
            releaseDate
        }
    }
`);
const stringQuery = strinQueryFactory({ name: 'Back to the Future' });
JSON.parse(stringQuery);
