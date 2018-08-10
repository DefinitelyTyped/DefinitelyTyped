import Cookies from 'universal-cookie';

const cookies = new Cookies();

cookies.set('myCookie', 'foo');
cookies.set('myCookie', 'foo', { path: '/' });

cookies.get('myCookie');
cookies.get('myCookie', { doNotParse: true });

cookies.remove('myCookie');
cookies.remove('myCookie', { path: '/' });
