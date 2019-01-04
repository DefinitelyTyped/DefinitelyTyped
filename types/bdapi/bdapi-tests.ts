import { BdApi } from 'bdapi';

BdApi.React; // $ExpectType typeof React
BdApi.ReactDOM.render; // $ExpectType Renderer
BdApi.alert('foo', 'bar'); // $ExpectType void
