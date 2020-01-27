import contentstack = require('contentstack');

contentstack.Stack({ api_key: '', access_token: '', environment: ''});
const stack = contentstack.Stack('api_key', 'access_token', 'environment_name');
stack.ContentType('content_type');

const query = stack.ContentType('content_type').Query();
stack
    .ContentType('content_type')
    .Query()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .setCacheProvider({})
    .find();
stack
    .ContentType('content_type')
    .Query()
    .setCachePolicy(1)
    .find();
stack
    .ContentType('content_type')
    .Query()
    .language('en-US')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .addQuery('query', 'foo')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeReference('query')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeReference('query', 'foo')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeReference(['query'])
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeReference(['query', 'foo'])
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeReferenceContentTypeUID()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeSchema()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeContentType()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeOwner()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .toJSON()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .addParam('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .fetch();
stack
    .ContentType('content_type')
    .Query()
    .equalTo('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .where('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .count()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .referenceIn('key', query)
    .find();
stack
    .ContentType('content_type')
    .Query()
    .referenceNotIn('key', query)
    .find();
stack
    .ContentType('content_type')
    .Query()
    .tags(['some', 'tag'])
    .find();
stack
    .ContentType('content_type')
    .Query()
    .includeCount()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .getQuery()
    .find();
stack
    .ContentType('content_type')
    .Query()
    .regex('key', 'value', 'options')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .search('search_value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .findOne();
stack
    .ContentType('content_type')
    .Query()
    .greaterThan('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .greaterThanOrEqualTo('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .lessThan('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .lessThanOrEqualTo('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .notEqualTo('key', 'value')
    .find();
stack
    .ContentType('content_type')
    .Query()
    .containedIn('key', 'value')
    .find();
