import { parse, quote, ParseEntry } from 'shell-quote';

let qr: string;
qr = quote(['a', 'b c d', '$f', '"g"']);

let pr: ParseEntry[];
pr = parse("a \"b c\" \\$def 'it\\'s great'");
pr = parse('beep --boop="$PWD"', { PWD: '/home/robot' });
pr = parse('beep --boop="$PWD"', { PWD: undefined });
pr = parse('beep --boop="$PWD"', { PWD: '/home/robot' }, { escape: '^' });
const env: Record<string, string | undefined> = { PWD: '/home/robot', C: undefined };
pr = parse('beep --boop="$PWD"', env, { escape: '^' });
pr = parse('beep --boop="$PWD"', (key: string) => '/home/robot');
pr = parse('beep --boop="$PWD"', (key: string) => '/home/robot', { escape: '^' });

interface CustomObj1 {
    custom1: string;
}
interface CustomObj2 {
    custom2: string;
}
let cpr: Array<ParseEntry | CustomObj1 | CustomObj2>;
cpr = parse('beep --boop="$PWD"', (key: string) => (key ? { custom1: '||' } : key));
cpr = parse('beep --boop="$PWD"', (key: string) => (key ? { custom1: '||' } : undefined));
cpr = parse('beep --boop="$PWD"', (key: string) => (key ? { custom1: '||' } : { custom2: '||' }));
