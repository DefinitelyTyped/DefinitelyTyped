import * as superfine from 'superfine';

// Strongly typed HTML element root.
superfine.patch(
    document.createElement('div'),
    superfine.h(
        'div',
        {
            onclick: e => {
                console.log(e.clientX);
            },
        },
        [
            superfine.h(
                'input',
                {
                    type: 'number',
                    value: '3',
                    min: '2',
                    max: '5',
                    disabled: false,
                    onchange: e => {
                        // TypeScript DOM library limitations prevent typing of e.target.value.
                        console.log(e.target);
                    }
                },
                []
            ),
            superfine.h(
                'svg',
                {
                    onclick: e => {
                        console.log(e.clientX);
                    },
                },
                [
                    superfine.h(
                        'g',
                        {},
                        superfine.h(
                            'rect',
                            {
                            },
                            []
                        ),
                    ),
                    superfine.h(
                        'g',
                        {},
                        [
                            superfine.h(
                                'rect',
                                {
                                },
                                []
                            ),
                            superfine.h(
                                'rect',
                                {
                                }
                            ),
                            superfine.h(
                                'text',
                                {
                                },
                                'example string'
                            ),
                            superfine.h(
                                'text',
                                {
                                },
                                ['example string']
                            ),
                            'example string',
                            superfine.h(
                                'rect',
                                {
                                    key: 'example key a'
                                },
                                []
                            ),
                            superfine.h(
                                'rect',
                                {
                                    key: 'example key b'
                                },
                                []
                            )
                        ]
                    )
                ]
            ),
            superfine.h(
                'a',
                {
                    href: '#anything'
                },
                [
                    superfine.h(
                        'ul',
                        {},
                        superfine.h(
                            'li',
                            {
                            },
                            []
                        )
                    ),
                    superfine.h(
                        'ul',
                        {},
                        [
                            superfine.h(
                                'li',
                                {
                                },
                                []
                            ),
                            superfine.h(
                                'li',
                                {
                                }
                            ),
                            superfine.h(
                                'li',
                                {
                                },
                                'example string'
                            ),
                            superfine.h(
                                'li',
                                {
                                },
                                ['example string']
                            ),
                            'example string',
                            superfine.h(
                                'li',
                                {
                                    key: 'example key a'
                                },
                                []
                            ),
                            superfine.h(
                                'li',
                                {
                                    key: 'example key b'
                                },
                                []
                            )
                        ]
                    )
                ]
            )
        ]
    )
);

// Strongly typed SVG element root.
superfine.patch(
    document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
    superfine.h(
        'svg',
        {
            onclick: e => {
                console.log(e.clientX);
            },
        },
        [
            superfine.h(
                'g',
                {},
                superfine.h(
                    'rect',
                    {
                    },
                    []
                ),
            ),
            superfine.h(
                'g',
                {},
                [
                    superfine.h(
                        'rect',
                        {
                        },
                        []
                    ),
                    superfine.h(
                        'rect',
                        {
                        }
                    ),
                    superfine.h(
                        'text',
                        {
                        },
                        'example string'
                    ),
                    superfine.h(
                        'text',
                        {
                        },
                        ['example string']
                    ),
                    'example string',
                    superfine.h(
                        'rect',
                        {
                            key: 'example key a'
                        },
                        []
                    ),
                    superfine.h(
                        'rect',
                        {
                            key: 'example key b'
                        },
                        []
                    )
                ]
            )
        ]
    )
);
