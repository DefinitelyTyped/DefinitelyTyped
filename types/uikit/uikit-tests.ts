import UIkit from 'uikit';

function testDropdown() {
    UIkit.dropdown('#parent');
    const dropdown = UIkit.dropdown('#parent', {
        pos: 'bottom-center',
        mode: 'click, hover',
        flip: true,
    });

    dropdown.show();
    dropdown.hide();
}

function testModal() {
    UIkit.modal.alert('Attention!');

    const modal = UIkit.modal('#modal', {
        stack: true,
        container: false,
    });
    UIkit.modal.confirm('Are you sure?').then(() => alert('success'));
    modal.hide();
    setTimeout(() => modal.show(), 2000);

    UIkit.modal.alert('UIkit alert!');
    UIkit.modal.confirm('UIkit confirm!');
    UIkit.modal.prompt('Name:', 'Your name');
    UIkit.modal.dialog('<p>UIkit dialog!</p>');
}

function testOffCanvas() {
    UIkit.offcanvas('#id').show();
    UIkit.offcanvas('#id').hide();
}

function testUpload() {
    UIkit.upload('#upload', {
        abort: (asd: number) => {
            return asd;
        },
    });
}

function testUse() {
    const plugin = (uikit: typeof UIkit) => {};
    plugin.installed = false;
    UIkit.use(plugin);
}

import Icons from 'uikit/dist/js/uikit-icons';

// $ExpectType boolean
Icons.installed;

UIkit.icon.add('icon', '<svg>...</svg>');
UIkit.icon.add({
    icon1: '<svg>A</svg>',
    icon2: '<svg>B</svg>',
});
UIkit.icon('#app', {
    icon: 'home',
});
