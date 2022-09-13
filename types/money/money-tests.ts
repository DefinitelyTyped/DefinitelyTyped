import fx = require('money');

fx.base; // $ExpectType string
fx.settings; // $ExpectType { from: string; to: string; }
fx.version; // $ExpectType string

fx.base = 'USD';
fx.rates = {
    USD: 1,
    EUR: '1.1',
};

fx.convert(1); // $ExpectType number
fx.convert('1'); // $ExpectType number
fx.convert([1]); // $ExpectType number[]
fx.convert(1, { from: 'EUR' }); // $ExpectType number
fx.convert('1', { from: 'EUR' }); // $ExpectType number
fx.convert([1], { from: 'EUR' }); // $ExpectType number[]

fx(1).convert({ to: 'EUR' }); // $ExpectType number
fx(1).to('EUR'); // $ExpectType number
fx(1).from('EUR'); // $ExpectType Wrapper<1>
fx(1).from('EUR').convert(); // $ExpectType number

const w = new fx('-1');
w.convert({ to: 'EUR' }); // $ExpectType number
w.to('EUR'); // $ExpectType number
w.from('EUR'); // $ExpectType Wrapper<"-1">
w.from('EUR').convert(); // $ExpectType number

fx('EUR 10').to('USD'); // $ExpectType number
