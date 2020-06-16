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
                'g',
                {},
                [
                    superfine.h(
                        'a',
                        {
                            href: '#anything'
                        },
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
        ]
    )
);

// Strongly typed SVG element root.
superfine.patch(
    document.createElementNS('http://www.w3.org/2000/svg', 'g'),
    superfine.h(
        'g',
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
                'g',
                {},
                [
                    superfine.h(
                        'a',
                        {
                            href: '#anything'
                        },
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
        ]
    )
);
