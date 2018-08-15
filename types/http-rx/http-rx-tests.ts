import { Observable } from 'rxjs';
import httpRx = require('http-rx');

const httpGet: Observable<any> = httpRx.get('');

const httpHead: Observable<number> = httpRx.head('');

const httpPatch: Observable<string> = httpRx.patch('');

const httpPost: Observable<void> = httpRx.post('');

const httpPut: Observable<{}> = httpRx.put('');

const httpDelete: Observable<object> = httpRx.delete('');
