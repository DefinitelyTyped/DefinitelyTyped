import { parse, quote } from 'shell-quote';

quote([  'a', 'b c d', '$f', '"g"' ]);
parse('a "b c" \\$def \'it\\\'s great\'');
parse('beep --boop="$PWD"', { PWD: '/home/robot' });
parse('beep --boop="$PWD"', { PWD: '/home/robot' }, { escape: '^' });
parse('beep --boop="$PWD"', (key: string) => '/home/robot');
parse('beep --boop="$PWD"', (key: string) => ({ op: '||' }));
