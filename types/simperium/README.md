# simperium usage notes

Simperium is a cross-platform data synchronization service.
This is its official JavaScript/Node client library.

The [`simperium`](https://github.com/automattic/node-simperium) library is a flow-typed project and these type definitions are manually created to match the public-facing API.

Although Simperium allows for unconstrainted data access it can be helpful to define a type schema on each bucket for additional safety and autocomplete.

## Example

```ts
import { default as createClient, Auth } from 'simperium';

interface Project {
    name: string;
    authors: string[];
    version: string;
    includesTypes: boolean;
    stars: number;
}

interface Language {
    name: string;
    projects: string[];
}

interface Buckets {
    projects: Project;
    languages: Language;
}

new Auth( 'my-app-id', 'my-api-key' )
    .authorize( 'username', 'password' )
    .then( ( { access_token } ) => {
        const client = createClient<Buckets>( 'my-app-id', access_token );
        const projectBucket = client.bucket('projects');
        const languageBucket = client.bucket('languages');

        projectBucket.add( {
            name: 'simperium',
            authors: [ 'beaucollins', 'roundhill', 'dmsnell', 'belcherj' ],
            version: '1.1.1',
            includesTypes: true,
            stars: 65
        } );

        languageBucket.add( {
            name: 'flowtyped',
            projects: [ 'simperium' ]
        } );

        languageBucket.add( {
            name: 'typescript',
            projects: [ 'simperium' ]
        } );

        projectBucket.on( 'update', ( id, project ) => {
            console.log( `Discovered a new project: ${ project.name }` );
        } );

        client.on( 'unauthorized', () => {
            console.log( 'All good things must come to an end.' );
            process.exit( 0 );
        } );
    } );
```

## Custom storage providers

By default the library creates an in-memory copy of the data but you can provide
a custom storage mechanism to support persistence and other behaviors. There are
two fundamental means of storage: the _bucket_ and the _ghost_.

The _bucket_ represents the current value of an entity in a Simperium bucket. It's
the local working copy and likely what your application directly interacts with.

The _ghost_ represents that last-known version or revision of that entity as last
reported by the server. This is an immutable value affixed to a specific version
number and will be used to generate a diff for the current bucket value when sync'ing.

### Persisting contents in a browser

In this example we can store the local copy of the data in `localStorage` in a browser.
It will be shared across tabs and persist across app sessions.
We'd want to create a `ghostStoreProvider` as well but for brevity only
the `objectStoreProvider` is shown here.

```ts
import type {
    BucketObject,
    BucketStore,
    EntitiesCallback
    EntityCallback,
    EntityId
} from 'simperium';

class LocalStorageBucket<T> implements BucketStore<T> {
    prefix: string;

    constructor(storagePrefix: string) {
        this.prefix = storagePrefix;
    }

    get(id: EntityId, callback: EntityCallback<BucketObject<T>>) {
        const entity = localStorage.getItem( `${ this.prefix }.${ id }` );

        if ( null === entity ) {
            callback( new Error( 'missing entity' ), null );
        } else {
            try {
                callback( null, { id, data: JSON.parse( entity ) } );
            } except (e) {
                callback( new TypeError('unable to decode entity'), null );
            }
        }
    }

    …
}

…

const client = createClient<Buckets>( 'my-app-id', 'my-token', {
    objectStoreProvider: bucket => new LocalStorageBucket( bucket.name ),
    ghostStoreProvider: bucket => new LocalStorageGhost( bucket.name )
} );
```

### Backing copies in a databsae

In this example we're storing hard-copies of the ghost data in a local database.
We'd want to create an `objectStoreProvider` as well but for brevity only
the `ghostStoreProvider` is shown here.

```ts
import type { ChangeVersion, EntityId, GhostStore, Ghost } from 'simperium';

interface Counter {
    name: string;
    limit: number;
}

class DBCounterGhost implements GhostStore<Counter> {
    connection: DBConnection;

    constructor() {
        this.connection = connect( 'db-server', 'db-host' );
    }

    get( id: EntityId ): Promise<Ghost<Counter>> {
        return this.connection
            .query( 'SELECT * FROM counters WHERE id = {} ORDER BY version DESC', id )
            .then( results => {
                return {
                    key: id,
                    version: results[0].version,
                    data: JSON.parse( results[0].data )
                }
            } )
    }

    put( id: EntityId, version: number, data: Counter ): Promise<Ghost<Counter>> {
        return this.connection.query(
            'INSERT INTO counters (id, version, data) VALUES ({}, {}, {})',
            id,
            version,
            JSON.stringify(data)
        ).then( () => ({ key: id, version, data } ) );
    }

    …
}

…

const client = createClient<Buckets>( 'my-app-id', 'my-token', {
    objectStoreProvider: () => new DBCounterBucket(),
    ghostStoreProvider: () => new DBCounterGhost()
} );
```