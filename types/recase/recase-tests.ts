import recase = require('recase');

const snake = recase.snakeCopy(
    {
        FOO: 1,                  // Exception
        abcXyz: {                // Normal
            _abcXyz: [           // private
                {__abcXyz: 1},   // very private
                {___abcXyz: 1},  // very very private
            ],
        },
    },
);

const camel = recase.camelCopy(
    {
        foo: 1,                   // Exception
        abc_xyz: {                // Normal
            _abc_xyz: [           // private
                {__abc_xyz: 1},   // very private
                {___abc_xyz: 1},  // very very private
            ],
        },
    },
);
