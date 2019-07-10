import { Observable } from 'rxjs';
import httpRx = require('http-rx');
import request = require('request');

const httpGet: Observable<{response: request.Response}> = httpRx.get('');

const httpHead: Observable<{body: any}> = httpRx.head('');

const httpPatch: Observable<{response: request.Response, body: any}> = httpRx.patch('');

const httpPost: Observable<{response: request.Response, body: any}> = httpRx.post('', {json: true});

const httpPut: Observable<{}> = httpRx.put('');

const httpDelete: Observable<object> = httpRx.delete('');
