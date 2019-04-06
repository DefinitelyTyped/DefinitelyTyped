import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies';

nookies.set({ pathname: '', query: {}, asPath: ''}, 'test-cookie', 'test-value');
nookies.get({ pathname: '', query: {}, asPath: ''});
nookies.destroy({ pathname: '', query: {}, asPath: ''}, 'test-cookie');

parseCookies({ pathname: '', query: {}, asPath: ''});
setCookie({ pathname: '', query: {}, asPath: ''}, 'test-cookie', 'test-value');
destroyCookie({ pathname: '', query: {}, asPath: ''}, 'test-cookie');
