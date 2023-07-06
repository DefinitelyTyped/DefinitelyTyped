/// <reference types="../canary"/>

const contextUsers = React.createContext(['HAL']);
const promisedUsers = Promise.resolve(['Dave']);

function useUse() {
    // @ts-expect-error Missing value
    React.use();

    // $ExpectType string[]
    const users = React.use(promisedUsers);
    // @ts-expect-error incompatible type. Mainly to potentially inspect TypeScript error message
    React.use({});

    // $ExpectType string[]
    const contextValue = React.use(contextUsers);
}

function serverContextTest() {
    const ServerContext = React.createServerContext<string>('ServerContext', 'default');

    function ServerContextUser() {
        const context = React.useContext(ServerContext);
        return <React.Fragment>{context}</React.Fragment>;
    }
    // @ts-expect-error Consumer pattern is not supported on server context
    ServerContext.Consumer;

    function ServerContextProivder() {
        return (
            <ServerContext.Provider value="provided">
                <ServerContextUser />
            </ServerContext.Provider>
        );
    }

    const ClientContext = React.createContext<string>('default');
    function ClientContextUser() {
        const context = React.useContext(ClientContext);
        return <React.Fragment>{context}</React.Fragment>;
    }

    // plain objects work
    React.createServerContext('PlainObjectContext', { foo: 1 });
    // readonly arrays work
    React.createServerContext('ReadonlyArrayContext', ['foo', 'bar'] as const);
    // nested readonly arrays work
    React.createServerContext('ReadonlyArrayContext', ['foo', ['bar']] as const);
    // @ts-expect-error Incompatible with JSON stringify+parse
    React.createServerContext('DateContext', new Date());
    // @ts-expect-error Incompatible with JSON stringify+parse
    React.createServerContext('SetContext', new Set());
}

function cacheTest() {
    const getLength = React.cache((a: string) => a.length);
    const fooLength: number = getLength('foo');
    getLength(
        // @ts-expect-error -- number not assignable to string
        133,
    );

    React.cache(
        // @ts-expect-error implicit any
        a => a,
    );
}

function useCacheTest() {
    const useCacheRefresh = React.unstable_useCacheRefresh;

    const refresh = useCacheRefresh();

    function handleRefresh() {
        // @ts-expect-error -- experimental only
        refresh(() => 'refresh', 'initial');
        // @ts-expect-error -- experimental only
        refresh(() => 'refresh');
        refresh();

        // @ts-expect-error -- experimental only
        refresh(() => 'refresh', 0);

        // @ts-expect-error -- experimental only
        refresh(() => 'refresh');
    }
}
