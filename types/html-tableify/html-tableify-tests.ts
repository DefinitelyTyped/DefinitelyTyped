import tableify = require('html-tableify');

const html = tableify(
    [
        {
            name: 'optionalArray',
            description: 'Description of optionalArray.',
            required: '',
            type: 'array',
            defaultValue: '[]',
        },
        {
            name: 'optionalBool',
            description: 'Description of optionalBool.',
            required: '',
            type: 'bool',
            defaultValue: 'false',
        },
    ],
    {
        headers: [
            {
                name: 'name',
                align: 'left',
                title: 'Your Name',
            },
            {
                name: 'description',
                align: 'left',
            },
            {
                name: 'type',
                align: 'left',
            },
            {
                name: 'required',
                align: 'center',
            },
            {
                name: 'defaultValue',
                align: 'center',
                title: 'Default Value',
            },
        ],
    },
);

const html2 = tableify(
    [
        {
            name: 'optionalArray',
            description: 'Description of optionalArray.',
            required: '',
            type: 'array',
            defaultValue: '[]',
        },
        {
            name: 'optionalBool',
            description: 'Description of optionalBool.',
            required: '',
            type: 'bool',
            defaultValue: 'false',
        },
    ],
    {
        tidy: false,
    },
);
