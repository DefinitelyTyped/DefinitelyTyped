import cytoscape = require('cytoscape');
import contextMenus = require('cytoscape-context-menus');

cytoscape.use(contextMenus);

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
    ]
});

const menuItem: contextMenus.MenuItem = {
    id: 'test',
    tooltipText: 'test',
    disabled: true,
    content: 'Test',
    selector: 'node',
    show: true,
    submenu: false,
    coreAsWell: true,
    onClickFunction: () => {
        console.log('test');
    },
    hasTrailingDivider: false
};

const options: contextMenus.MenuOptions = {
    evtType: 'cxttap',
    menuItems: [menuItem],
    menuItemClasses: ['cy-context-menus-cxt-menuitem'],
    contextMenuClasses: ['cy-context-menus-cxt-menu']
};

const instance = cy.contextMenus(options);

instance.isActive();

instance.appendMenuItem({ ...menuItem, id: 'test2' });

instance.appendMenuItems([
    { ...menuItem, id: 'test3' },
    { ...menuItem, id: 'test4' }
]);

instance.removeMenuItem('test');

instance.setTrailingDivider('test2', true);

instance.insertBeforeMenuItem(menuItem, 'test2');

instance.moveToSubmenu('test2', 'test');

instance.moveBeforeOtherMenuItem('test3', 'test2');

instance.disableMenuItem('test');

instance.enableMenuItem('test');

instance.hideMenuItem('test');

instance.showMenuItem('test');

const existingInstance = cy.contextMenus('get');

existingInstance.destroy();
