import url from 'url-state';

url.addEventListener('change', () => {
});

url.push('/pathnames');
url.pop();
url.push('#hashes');
url.pop();
url.push('?query=strings');
url.query({ query: 'objects' }, true);
url.query({ query: null }, true);
url.pop();
const back: boolean = url.back;

const params: Record<string, any> = url.params;

const fauxUrl: Partial<URL> = url;
const { href, protocol, hostname, port, pathname, search, hash, host, origin } = fauxUrl;
