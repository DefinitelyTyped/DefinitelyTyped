import { URL } from 'url';
import ElasticsearchService from 'lesgo/lib/services/ElasticsearchService';

const elasticSearch = new ElasticsearchService({
    index: 'lesgo',
    type: '_doc',
    connection: 'aws',
    options: {
        node: [
            {
                url: new URL('127.0.0.1'),
            },
        ],
        maxRetries: 1,
    },
});
elasticSearch.setConnection('aws'); // $ExpectType ElasticsearchService
elasticSearch.getClient(); // $ExpectType Client
(async () => {
    // $ExpectType Record<string, any>
    const searchResponse = await elasticSearch.search({
        query: {
            match: {
                body: 'elasticsearch',
            },
        },
    });
    // $ExpectType Record<string, any>
    const createResponse = await elasticSearch.createIndices(
        {
            settings: {
                index: {
                    number_of_shards: 3,
                    number_of_replicas: 2,
                },
            },
        },
        'twitter',
    );
    await elasticSearch.deleteIndices('twitter', { timeout: '30s' }); // $ExpectType Record<string, any>
    await elasticSearch.existIndices('twitter', { local: true }); // $ExpectType any
    // $ExpectType Record<string, any>
    const mappingResponse = await elasticSearch.putMapping('index', 'indextype', {
        email: {
            type: 'keyword',
        },
    });
    await elasticSearch.get('twitter'); // $ExpectType Record<string, any>
    // $ExpectType Record<string, any>
    const indexOrCreateResponse = await elasticSearch.indexOrCreateById(
        {
            title: 'Test 1',
            tags: ['y', 'z'],
            published: true,
        },
        false,
    );
    // $ExpectType Record<string, any>
    const bulkIndexResponse = await elasticSearch.bulkIndex([
        {
            title: 'Test 1',
            profile_id: 2132,
        },
    ]);
    // $ExpectType Record<string, any>
    const searchCreateResponse = await elasticSearch.create('1', {
        title: 'Test 1',
        tags: ['y', 'z'],
        published: true,
        published_at: '2013-01-01',
        counter: 1,
    });
    await elasticSearch.updateById('1'); // $ExpectType Record<string, any>
})();
