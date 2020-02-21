import * as SparqlHttp from 'sparql-http-client';

const client: SparqlHttp.SparqlHttpClient = new SparqlHttp();

async function selectQuery() {
    const response = await client.selectQuery('...', {
        endpointUrl: 'http://example.com/endpoint',
    });

    const json = await response.json();

    json.results.bindings.forEach(binding => {
        console.log(`${binding.name.value} (${binding.name.termType})`);
    });
}

async function askQuery() {
    const response = await client.selectQuery('...', {
        endpointUrl: 'http://example.com/endpoint',
    });

    const json = await response.json();

    console.log(`The answer was ${json.boolean ? 'YES' : 'NO'}`);
}

async function constructQuery() {
    const response = await client.constructQuery('...');

    const json = await response.json();

    console.log(`The answer was ${json.boolean ? 'YES' : 'NO'}`);
}

async function updateQuery() {
    const response = await client.constructQuery('...', {
        updateUrl: 'http://example.com/endpoint',
    });

    console.log(`The update ${response.ok ? 'succeeded' : 'faield'}`);
}

async function oneTimeAuth() {
    const endpoint = new SparqlHttp({endpointUrl: 'http://example.com/endpoint'});

    // authorize a single query
    endpoint.selectQuery('query', {
        headers: {
            Authorization: 'Bearer token'
        }
    });
}

async function createAuthorizedCLient() {
    new SparqlHttp({
        endpointUrl: 'http://example.com/endpoint',
        defaultHeaders: {
            Authorization: 'Bearer token'
        }
    });
}
