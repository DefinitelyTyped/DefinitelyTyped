import bip21 = require('bip21');
let decoded:any = bip21.decode('bitcoin:1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH?amount=20.3&label=Foobar');
 
let encoded:string = bip21.encode('1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH', {
    amount: 20.3,
    label: 'Foobar'
}); 
