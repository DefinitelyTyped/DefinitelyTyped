import { Observable } from 'rxjs';
import httpRx = require('http-rx');

httpRx.get('', {}).subscribe(() => {});
httpRx.get('', {}).pipe();

httpRx.head('', {}).subscribe(() => {});
httpRx.head('', {}).pipe();

httpRx.patch('', {}).subscribe(() => {});
httpRx.patch('', {}).pipe();

httpRx.post('', {}).subscribe(() => {});
httpRx.post('', {}).pipe();

httpRx.put('', {}).subscribe(() => {});
httpRx.put('', {}).pipe();

httpRx.delete('', {}).subscribe(() => {});
httpRx.delete('', {}).pipe();
