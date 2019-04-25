export default class AuthenticationError extends Error {
    name: 'AuthenticationError';
    message: string;
    status: number;
}
