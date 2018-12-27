import urlencode, { decode , parse, stringify } from 'urlencode';

urlencode('苏千'); // default is utf8
urlencode('苏千', 'gbk'); // '%CB%D5%C7%A7'

// decode gbk
decode('%CB%D5%C7%A7', 'gbk'); // '苏千'

// parse gbk querystring
parse('nick=%CB%D5%C7%A7', {charset: 'gbk'}); // {nick: '苏千'}

// stringify obj with gbk encoding
const str = 'x[y][0][v][w]=' + urlencode('雾空', 'gbk'); // x[y][0][v][w]=%CE%ED%BF%D5
const obj =  {x: {y : [{v : {w : '雾空'}}]}};
stringify(obj, {charset: 'gbk'});
