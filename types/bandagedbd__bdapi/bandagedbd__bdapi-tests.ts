BdApi.React; // $ExpectType typeof React
BdApi.ReactDOM.render; // $ExpectType Renderer
BdApi.alert('foo', 'bar'); // $ExpectType void
BdApi.showToast('hello', { timeout: 2000 }); // $ExpectType void

// https://github.com/BetterDiscord/BetterDiscord/wiki/Creating-Plugins#bdapi
window.BdApi;
global.BdApi;
