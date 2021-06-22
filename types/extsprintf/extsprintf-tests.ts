import { sprintf, fprintf, printf } from "extsprintf";

fprintf({write: (s: string) => {}}, '');
fprintf({write: (s: string) => {}}, '', {}, [], null, 0, '');
printf('');
printf('', {}, [], null, 0, '');
sprintf(''); // $ExpectType string
sprintf('', {}, [], null, 0, ''); // $ExpectType string
