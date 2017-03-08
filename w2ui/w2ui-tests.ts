

$(function() {

    $('#myLayout').w2layout({
        name: 'myLayout',
        panels: [
            { type: 'top', size: 60 },
            { type: 'left', size: 150, resizable: true },
            { type: 'right', size: 150, resizable: true }
        ]
    });

    $('#myGrid').w2grid({
        name: 'myGrid',
        columns: [
            { field: 'fname', caption: 'First Name', size: '30%' },
            { field: 'lname', caption: 'Last Name', size: '30%' },
            { field: 'email', caption: 'Email', size: '40%' },
            { field: 'sdate', caption: 'Start Date', size: '120px' },
        ],
        records: [
            { recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 7, fname: 'Mark', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012' }
        ]
    });

    $('#myToolbar').w2toolbar({
        name: 'myToolbar',
        items: [
            { type: 'check', id: 'item1', caption: 'Check', img: 'icon-add', checked: true },
            { type: 'break' },
            {
                type: 'menu', id: 'item2', caption: 'Drop Down', img: 'icon-folder',
                items: [
                    { text: 'Item 1', img: 'icon-page' },
                    { text: 'Item 2', img: 'icon-page' },
                    { text: 'Item 3', img: 'icon-page' }
                ]
            },
            { type: 'break' },
            { type: 'radio', id: 'item3', group: '1', caption: 'Radio 1', img: 'icon-page' },
            { type: 'radio', id: 'item4', group: '1', caption: 'Radio 2', img: 'icon-page' },
            { type: 'spacer' },
            { type: 'button', id: 'item5', caption: 'Item 5', img: 'icon-save' }
        ]
    });

    $('#mySidebar').w2sidebar({
        name: 'mySidebar',
        img: null,
        nodes: [
            {
                id: 'level-1', text: 'Level 1', img: 'icon-folder', expanded: true,
                nodes: [
                    { id: 'level-1-1', text: 'Level 1.1', img: 'icon-page' },
                    { id: 'level-1-2', text: 'Level 1.2', img: 'icon-page' },
                    { id: 'level-1-3', text: 'Level 1.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-2', text: 'Level 2', img: 'icon-folder',
                nodes: [
                    {
                        id: 'level-2-1', text: 'Level 2.1', img: 'icon-folder',
                        nodes: [
                            { id: 'level-2-1-1', text: 'Level 2.1.1', img: 'icon-page' },
                            { id: 'level-2-1-2', text: 'Level 2.1.2', img: 'icon-page' },
                            { id: 'level-2-1-3', text: 'Level 2.1.3', img: 'icon-page' }
                        ]
                    },
                    { id: 'level-2-2', text: 'Level 2.2', img: 'icon-page' },
                    { id: 'level-2-3', text: 'Level 2.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-3', text: 'Level 3', img: 'icon-folder',
                nodes: [
                    { id: 'level-3-1', text: 'Level 3.1', img: 'icon-page' },
                    { id: 'level-3-2', text: 'Level 3.2', img: 'icon-page' },
                    { id: 'level-3-3', text: 'Level 3.3', img: 'icon-page' }
                ]
            }
        ],
        onClick: function(event: W2UI.W2Event) {
            console.log(event.target);
        }
    });

    $('#sidebar').w2sidebar({
        name: 'sidebar',
        img: null,
        nodes: [
            {
                id: 'level-1', text: 'Level 1', img: 'icon-folder', expanded: true,
                nodes: [{ id: 'level-1-1', text: 'Level 1.1', img: 'icon-page' },
                    { id: 'level-1-2', text: 'Level 1.2', img: 'icon-page' },
                    { id: 'level-1-3', text: 'Level 1.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-2', text: 'Level 2', img: 'icon-folder',
                nodes: [{
                    id: 'level-2-1', text: 'Level 2.1', img: 'icon-folder',
                    nodes: [
                        { id: 'level-2-1-1', text: 'Level 2.1.1', img: 'icon-page' },
                        { id: 'level-2-1-2', text: 'Level 2.1.2', img: 'icon-page' },
                        { id: 'level-2-1-3', text: 'Level 2.1.3', img: 'icon-page' }
                    ]
                },
                    { id: 'level-2-2', text: 'Level 2.2', img: 'icon-page' },
                    { id: 'level-2-3', text: 'Level 2.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-3', text: 'Level 3', img: 'icon-folder',
                nodes: [{ id: 'level-3-1', text: 'Level 3.1', img: 'icon-page' },
                    { id: 'level-3-2', text: 'Level 3.2', img: 'icon-page' },
                    { id: 'level-3-3', text: 'Level 3.3', img: 'icon-page' }
                ]
            }
        ],
        onClick: function(id: string, data: W2UI.W2Event) {
            console.log(id);
        }
    });

    $('#myTabs').w2tabs({
        name: 'myTabs',
        active: 'tab1',
        tabs: [
            { id: 'tab1', caption: 'Tab 1' },
            { id: 'tab2', caption: 'Tab 2' },
            { id: 'tab3', caption: 'Tab 3' },
            { id: 'tab4', caption: 'Tab 4' }
        ],
        onClick: function(event: W2UI.W2Event) {
            $('#myTabsContent').html(event.target);
        }
    });

    $('#myForm').w2form({
        name: 'myForm',
        fields: [
            { name: 'first_name', type: 'text', required: true },
            { name: 'last_name', type: 'text', required: true },
            { name: 'comments', type: 'text' }
        ],
        actions: {
            reset: function() {
                this.clear();
            },
            save: function() {
                this.save();
            }
        }
    });

    w2popup.open({
        title: 'Popup Title HTML',
        body: 'Body HTML',
        buttons: 'Buttons HTML'
    });

});
