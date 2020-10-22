import { BdApi } from '@bandagedbd/bdapi';

BdApi.React; // $ExpectType typeof React
BdApi.ReactDOM.render; // $ExpectType Renderer
BdApi.alert('foo', 'bar'); // $ExpectType void
BdApi.showToast('hello', { timeout: 2000 }); // $ExpectType void
