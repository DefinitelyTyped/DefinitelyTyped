import * as less2sass from 'less2sass';

let scss: string;
scss = less2sass.convert('@myColor: #f938ab; .myClass { color: @myColor; }');
