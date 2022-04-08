import { HashPassword, CheckPassword } from 'wordpress-hash-node';

const hash: string = HashPassword('foo');
const valid: boolean = CheckPassword('foo', hash);
