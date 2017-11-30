// Type definitions for redux-promise-middleware
// Project: https://github.com/pburtchaell/redux-promise-middleware
// Definitions by: ianks <https://github.com/ianks>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import { Middleware } from 'redux';

export default function promiseMiddleware(config?: { promiseTypeSuffixes?: string[], promiseTypeSeparator?: string }): Middleware;
