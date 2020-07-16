import { Menu, MenuButton, MenuList, MenuItem, MenuLink } from '@reach/menu-button';

import * as React from 'react';
import { render } from 'react-dom';

const Example = () => (
    <Menu>
        <MenuButton>
            Actions <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
            <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
            <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
            <MenuItem onSelect={() => alert('Mark as Draft')}>Mark as Draft</MenuItem>
            <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
            <MenuLink as="a" to="https://reach.tech/workshops">
                Attend a Workshop
            </MenuLink>
        </MenuList>
    </Menu>
);

render(<Example />, document.getElementById('app'));

render(<Menu />, document.getElementById('app'));
render(<MenuButton />, document.getElementById('app'));
render(<MenuList />, document.getElementById('app'));
render(<MenuItem />, document.getElementById('app'));
render(<MenuLink />, document.getElementById('app'));
