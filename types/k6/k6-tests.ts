import http from 'k6/http';
import { check, sleep, fail, group } from 'k6';

const users = JSON.parse(open('./users.json'));
const __VU = 1;

function test1() {
    const user = users[__VU - 1];
    console.log(`${user.username}, ${user.password}`);
    sleep(3);
}

const binFile1 = open('/path/to/file.bin', 'b');

const binFile = open('/path/to/file.bin', 'b');
