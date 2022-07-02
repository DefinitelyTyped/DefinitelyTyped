import $ from 'react-hyperscript';
import * as React from 'react';

interface PropTypes {
    az: string;
}

class ClassComponent extends React.Component<PropTypes> {
    render() {
        return React.createElement('div');
    }
}

const FunctionComponent: React.FC<PropTypes> = () => {
    return React.createElement('div');
};

const FragmentComponent: React.FC = () => {
    return $([
        $('div.example', [
            $('h1#heading', 'This is hyperscript'),
            $('h2', 'creating React.js markup'),
            $(ClassComponent, {
                az: 'za',
            }, [
                $('li', [
                    $('a', {
                        href: 'http://whatever.com',
                    }, 'One list item'),
                ]),
                $('li', 'Another list item'),
            ]),
            $(FunctionComponent, {
                az: 'za',
            }, [
                $('li', [
                    $('a', {
                        href: 'http://whatever.com',
                    }, 'One list item'),
                ]),
                $('li', 'Another list item')
            ]),
            $('img', {
                src: 'https://example.com/some-image',
            }),
            $(['text']),
            $([
                $('span', 'text'),
            ]),
            $(['zero', 'unit']),
            $([
                $('span', 'zero'),
                $('span', 'unit'),
            ]),
            $('span', 1234),
        ]),
    ]);
};

const Component: React.FC = () => {
    return $('div', {
        className: 'some class',
    }, [
        null,
        $('span', 'some tag'),
        'some text node',
    ]);
};
