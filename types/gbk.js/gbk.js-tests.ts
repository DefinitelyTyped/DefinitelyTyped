import GBK from "gbk.js";

const testStr = '时顺地?abc地';
const testArr = [202, 177, 203, 179, 181, 216, 63, 97, 98, 99, 181, 216];
const url = 'https://abc.com/?kk=abv&bb=火车头#top',
	URI = 'https://abc.com/?kk=abv&bb=%BB%F0%B3%B5%CD%B7#top',
	URIComponent = 'https%3A%2F%2Fabc.com%2F%3Fkk%3Dabv%26bb%3D%BB%F0%B3%B5%CD%B7%23top';

// console.log(GBK.URI.decodeURI('%C8A'));
function test(name: string) {
	var runThrow = function(err: string) {
		throw '[' + name + '] ERROR: ' + err;
	};
	// console.log(GBK.encode(testStr).join());
	if (GBK.encode(testStr).join() != testArr.join()) runThrow('gbk编码错误!');
	if (GBK.decode(testArr) != testStr) runThrow('gbk解码错误!');
	if (GBK.URI.encodeURI(url) != URI) runThrow('encodeURI错误!');
	if (GBK.URI.decodeURI(URI) != url) runThrow('decodeURI错误!');
	if (GBK.URI.encodeURIComponent(url) != URIComponent) runThrow('encodeURIComponent错误!');
	if (GBK.URI.decodeURIComponent(URIComponent) != url) runThrow('decodeURIComponent错误!');
	return name;
}