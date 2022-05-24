import postcss from 'postcss';
import * as postcssJs from 'postcss-js';

const style = {
    top: 10,
    '&:hover': {
        top: 5,
    },
};

// Parse using postcss-js parser
postcss()
    .process(style, { parser: postcssJs.parse })
    .then(result => {
        result; // $ExpectType Result
    });

// Try to parse random object with postcss-js parser (errors)
// $ExpectError
postcss().process('.a {}', { parser: postcssJs.parse });

postcssJs.parse(style);

postcssJs.objectify(postcss.root());

// Sync and async fail to work if no parameters are passed
postcssJs.sync(); // $ExpectError
postcssJs.async(); // $ExpectError

postcssJs.sync([])(style); // $ExpectType CssInJs || Record<string, any>

postcssJs.async([])(style); // $ExpectType Promise<CssInJs> || Promise<Record<string, any>>
postcssJs
    .async([])(style)
    .then(result => {
        result; // $ExpectType CssInJs || Record<string, any>
    });
