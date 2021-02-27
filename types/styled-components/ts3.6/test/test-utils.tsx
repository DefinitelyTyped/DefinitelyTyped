import * as React from 'react';
import styled from 'styled-components';
import { find, findAll, enzymeFind } from 'styled-components/test-utils';
import { mount } from 'enzyme';

const Foo = styled.div``;

// $ExpectError
find();
// $ExpectError
find(document.body);
// $ExpectType Element | null
find(document.body, Foo);

// $ExpectError
findAll();
// $ExpectError
findAll(document.body);
// $ExpectType NodeListOf<Element>
findAll(document.body, Foo);

const wrapper = mount(<div />);
// $ExpectError
enzymeFind();
// $ExpectError
enzymeFind(wrapper);
// $ExpectType ReactWrapper<{}, {}, Component<{}, {}, any>>
enzymeFind(wrapper, Foo);
