import deparam = require('jquery-deparam');

const test1 = deparam('a=A&b=B&c=C') as { a: string, b: string, c: string };
