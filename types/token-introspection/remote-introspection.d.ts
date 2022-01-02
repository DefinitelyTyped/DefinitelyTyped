import { Options, IntrospectionFunction } from '.';

declare const remoteIntrospect: IntrospectionFunction;

declare function remoteIntrospection(
    options: Pick<Options, 'access_token' | 'client_id' | 'client_secret' | 'user_agent' | 'fetch' | 'endpoint'>,
): typeof remoteIntrospect;

export = remoteIntrospection;
