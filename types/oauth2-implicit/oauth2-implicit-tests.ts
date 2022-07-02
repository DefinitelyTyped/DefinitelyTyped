import { finish, parseCredentials, start, AuthState } from 'oauth2-implicit';

parseCredentials('hello');
finish();
const params: AuthState = { originalUrl: '' };
start({ auth_uri: '', client_id: '', state: params, redirect_uri: '' });
