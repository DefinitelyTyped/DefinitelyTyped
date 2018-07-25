import gql = require('nanographql');
const queryFactory = gql`
query($name: String!) {
    movie (name: $name) {
        releaseDate
    }
}
`;
const query = queryFactory({ name: 'Back to the Future' });
JSON.parse(query);
