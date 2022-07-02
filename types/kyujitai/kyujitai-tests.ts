import Kyujitai = require('kyujitai');

new Kyujitai(); // $ExpectTYpe Kyujitai
new Kyujitai({}); // $ExpectType Kyujitai
new Kyujitai({
    ivd: './ivd.js',
});
new Kyujitai(error => {});
const kyujitai = new Kyujitai(error => {
    if (!error) {
        kyujitai.encode('旧字体'); // $ExpectType string
        kyujitai.decode('舊字體'); // $ExpectType string
    }
});
